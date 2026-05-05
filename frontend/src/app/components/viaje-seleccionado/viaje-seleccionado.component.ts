import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  viewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Subscription } from 'rxjs';
import { FuncionesComunes } from '../../core/funciones-comunes/funciones-comunes.service';
import { TravelService } from '../../core/travel-services/travel.service';
import { UserServicesService } from '../../core/user-services/user-services.service';
import { Viaje } from '../../models/travel/viaje.model';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Usuario } from '../../models/user/usuario.model';
import { ChangeDetectorRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MessagingService } from '../../core/menssaging-service/messaging.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-viaje-seleccionado',
  standalone: true,
  imports: [
    MatDivider,
    MatIcon,
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    CommonModule,
    MatAccordion,
    MatExpansionModule,
    MatFormFieldModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
  templateUrl: './viaje-seleccionado.component.html',
  styleUrls: ['./viaje-seleccionado.component.scss'],
})
export class ViajeSeleccionadoComponent implements OnInit, OnDestroy {
  yaUnido: boolean = false;
  preferencias: string[] = [];
  userID!: number;
  viaje!: Viaje;
  viajesSubscription: Subscription = new Subscription();
  accordion = viewChild.required(MatAccordion);
  conductor: boolean = false;
  userData: Usuario | undefined = {} as Usuario;

  pasajeroYaAvisoLlegada: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<ViajeSeleccionadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { viaje: Viaje },
    public funcionesComunes: FuncionesComunes,
    private travelService: TravelService,
    private usersService: UserServicesService,
    private navCtrl: NavController,
    private cdRef: ChangeDetectorRef,
    private messagingService: MessagingService,
    private messageService: MessageService,
  ) {
    this.preferencias = this.funcionesComunes.validacionPreferencias(
      this.data.viaje.preferencias ?? [],
    );
    this.viaje = {
      ...this.data.viaje,
      acompanantes: this.data.viaje.acompanantes || [],
    };
    this.checkSiYaAvisoLlegada();
    this.verificarSiEstaUnido();
    this.validarSiEsConductor(this.data.viaje.usuario_id, this.data.viaje);
  }

  ngOnInit() {
    const storedData = localStorage.getItem('userData');
    this.userData = storedData ? JSON.parse(storedData) : null;
    console.log('DETALLES DEL VIAJE: ', this.viaje);

    this.viaje = { ...this.data.viaje };
    this.obtenerUsuarioActual();
    this.obtenerViajesActualizados();
    if (this.userData && this.userData.usuario) {
      this.validarSiEsConductor(this.userData.usuario.id, this.viaje);
      this.verificarSiEstaUnido();
    } else {
      this.conductor = false;
      this.yaUnido = false;
    }
    this.cdRef.detectChanges();
  }

  ngOnDestroy() {
    if (this.viajesSubscription) {
      this.viajesSubscription.unsubscribe();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  /**
   * Función para obtener los datos del usuario logado.
   *
   */
  obtenerUsuarioActual() {
    this.usersService
      .obtenerUsuarioPorID_busqueda_viajes(this.data.viaje.usuario_id)
      .subscribe({
        next: (usuario) => {
          this.viaje = { ...this.viaje, usuario: usuario };
          this.userID = usuario.id;

          if (this.userData && this.userData.usuario) {
            this.verificarSiEstaUnido();
          }

          this.cdRef.markForCheck();
          this.cdRef.detectChanges();
        },
        error: (error) =>
          console.error('Error al obtener el conductor:', error),
      });
  }

  /**
   * Función para obtener los datos del viaje seleccionado.
   *
   */
  obtenerViajesActualizados() {
    this.viajesSubscription = this.travelService.viajeData$.subscribe(
      (viajes) => {
        if (viajes && Array.isArray(viajes)) {
          const viajeActualizado = viajes.find(
            (v: Viaje) => v.id === this.viaje.id,
          );
          if (viajeActualizado) {
            // ASIGNACIÓN DE NUEVA REFERENCIA (CRÍTICO PARA OnPush)
            this.viaje = { ...viajeActualizado };
            this.cdRef.markForCheck();
          }
        }
      },
    );
  }

  /**
   * Función para verificar si el usuario ya está unido al viaje seleccionado.
   */
  verificarSiEstaUnido() {
    if (!this.userData || !this.userData.usuario) {
      this.yaUnido = false;
      return;
    }

    const usuarioId = this.userData.usuario.id;

    this.travelService.getViaje(this.data.viaje.id).subscribe({
      next: (viajeServer) => {
        const usuarioTemporal = this.viaje.usuario;
        this.viaje = { ...viajeServer };
        if (!this.viaje.usuario) this.viaje.usuario = usuarioTemporal;

        this.yaUnido =
          this.viaje.acompanantes?.some((a: any) => a.id === usuarioId) ||
          false;
        this.cdRef.markForCheck();
      },
    });
  }



  /**
   * Función para enviar una solicitud manual al conductor del viaje.
   *
   */
  enviarSolicitudManual() {
    const emisorId = this.userData?.usuario.id || 0;
    const receptorId = this.data.viaje.usuario_id;

    this.messagingService.iniciarChat(emisorId, receptorId).subscribe({
      next: (res) => {
        const convId = res.conversacion_id;

        const payload = {
          viaje_id: this.data.viaje.id,
          emisor_id: emisorId,
          receptor_id: receptorId,
          conversacion_id: convId,
        };

        this.messagingService.enviarSolicitudViaje(payload).subscribe(() => {
          this.closeDialog();
          this.funcionesComunes.openConfirmModal(
            'Solicitud enviada',
            'El conductor debe aceptar tu solicitud para unirte.',
          );
          this.navCtrl.navigateForward(['/chat', convId]);
        });
      },
    });
  }

  /**
   * Función para redirigir al perfil público del usuario.
   *
   * @param id_usuario
   */
  masDetallesUsuario(id_usuario: number) {
    const usuario = {
      id: id_usuario,
    };
    this.navCtrl.navigateRoot(['/perfil-publico'], {
      queryParams: usuario,
    });
    this.closeDialog();
  }

  /**
   * Función para validar si el usuario que está viendo los detalles
   * es conductor en el viaje o no.
   *
   * @param usuario_id
   * @param viaje
   */
  validarSiEsConductor(usuario_id: number, viaje: Viaje) {
    if (usuario_id === viaje.usuario_id) {
      this.conductor = true;
    } else {
      this.conductor = false;
    }
  }

  /**
   * Función para formatear la fecha de salida del viaje.
   * @param date --> fecha en formato ISO (ejemplo: "2024-06-20T15:30:00")
   * @returns --> fecha formateada (ejemplo: "2024-06-20")
   */
  formatData(date: any) {
    return date.split('T')[0].trim();
  }

  
  /**
   * Función para comprobar si el pasajero ya ha avisado de su llegada al punto de encuentro.
   * Esto se hace para mostrar u ocultar el botón de "Avisar llegada" en función de si el pasajero ya ha avisado o no.
   * Esta función se llama tanto en el ngOnInit como cada vez que se actualizan los datos del viaje,
   * para asegurarnos de que el estado del botón siempre es correcto.
   */
  checkSiYaAvisoLlegada() {
    if (this.yaUnido && this.userData?.usuario) {
      const yo = this.viaje.acompanantes?.find(
        (a: any) => a.id === this.userData?.usuario.id,
      );
      this.pasajeroYaAvisoLlegada = yo?.ha_llegado || false;
    }
  }

  /**
   * Función para que el pasajero notifique al conductor que ya ha llegado al punto de encuentro.
   * Esto actualizará el estado del viaje y mostrará un mensaje de confirmación al pasajero,
   * además de notificar al conductor a través del sistema de mensajería interna.
   * @returns --> No devuelve nada, pero actualiza el estado del viaje y muestra un mensaje de confirmación.
   */
  notificarLlegadaPasajero() {
    if (!this.userData?.usuario) return;

    const viajeId = this.viaje.id;
    const usuarioId = this.userData.usuario.id;

    this.travelService
      .notificarLlegadaPuntoPartida(viajeId, usuarioId)
      .subscribe({
        next: () => {
          this.pasajeroYaAvisoLlegada = true;
          this.cdRef.detectChanges();

          this.funcionesComunes.openConfirmModal(
            '¡Aviso enviado!',
            'El conductor ha sido notificado de que ya estás en el punto de encuentro.',
          );

          this.verificarSiEstaUnido();
        },
        error: (err) => console.error('Error al notificar llegada:', err),
      });
  }

  /**
   * Función para que el conductor confirme que un acompañante ha llegado al punto de encuentro.
   * Esto actualizará el estado del viaje y mostrará un mensaje de confirmación al conductor,
   * además de notificar al acompañante a través del sistema de mensajería interna.
   * @param acompId --> ID del acompañante que ha llegado al punto de encuentro y que el conductor va a confirmar su llegada.
   * @returns --> No devuelve nada, pero actualiza el estado del viaje y muestra un mensaje de confirmación.
   */
  confirmarLlegadaDesdeConductor(acompId: number) {
    const viajeId = this.viaje.id;

    this.travelService
      .notificarLlegadaPuntoPartida(viajeId, acompId)
      .subscribe({
        next: () => {
          const acompanante = this.viaje.acompanantes?.find(
            (acompanante: any) => acompanante.id === acompId,
          );
          if (acompanante) {
            acompanante.ha_llegado = true;
          }

          this.cdRef.detectChanges();

          this.messageService.add({
            severity: 'success',
            summary: 'Llegada confirmada',
            detail: `Has marcado que el acompañante ha llegado correctamente.`,
            life: 2000,
          });
        },
        error: (err) => {
          console.error('Error al confirmar llegada desde conductor:', err);
        },
      });
  }
}
