import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Subscription } from 'rxjs';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { Viaje } from 'src/app/models/travel/viaje.model';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Usuario } from 'src/app/models/user/usuario.model';
import { ChangeDetectorRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MessagingService } from 'src/app/core/menssaging-service/messaging.service';



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
    MatFormFieldModule
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
  userData: Usuario = {} as Usuario;

  constructor(
    private dialogRef: MatDialogRef<ViajeSeleccionadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { viaje: Viaje },
    public funcionesComunes: FuncionesComunes,
    private travelService: TravelService,
    private usersService: UserServicesService,
    private navCtrl: NavController,
    private cdRef: ChangeDetectorRef,
    private messagingService: MessagingService
  ) {
    this.preferencias = this.funcionesComunes.validacionPreferencias(this.data.viaje.preferencias ?? []);
    this.viaje = { ...this.data.viaje, acompanantes: this.data.viaje.acompanantes || [] };
    this.verificarSiEstaUnido();
    this.validarSiEsConductor(this.data.viaje.usuario_id, this.data.viaje);
  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    console.log('DETALLES DEL VIAJE: ', this.viaje);

    this.viaje = { ...this.data.viaje };
    this.obtenerUsuarioActual();
    this.obtenerViajesActualizados();
    if (this.userData.usuario) {
      this.validarSiEsConductor(this.userData.usuario.id, this.viaje);
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
    this.usersService.obtenerUsuarioPorID(this.data.viaje.usuario_id).subscribe({
      next: (usuario) => {
        this.userID = usuario.id;
        this.verificarSiEstaUnido();
      },
      error: (error) => {
        console.error('Error al obtener el usuario:', error);
      }
    });
  }

  /**
   * Función para obtener los datos del viaje seleccionado.
   * 
   */
  obtenerViajesActualizados() {
    this.viajesSubscription = this.travelService.viajeData$.subscribe((viajes) => {
      if (viajes && Array.isArray(viajes)) {
        const viajeActualizado = viajes.find((v: Viaje) => v.id === this.viaje.id);
        if (viajeActualizado) {
          // ASIGNACIÓN DE NUEVA REFERENCIA (CRÍTICO PARA OnPush)
          this.viaje = { ...viajeActualizado };
          this.cdRef.markForCheck();
        }
      }
    });
  }

  /**
   * Función para verificar si el usuario ya está unido al viaje seleccionado.
   */
  verificarSiEstaUnido() {
    const userDataString = localStorage.getItem('userData');
    if (!userDataString) return;

    const userData = JSON.parse(userDataString);
    const usuarioId = userData.usuario.id;

    this.travelService.getViaje(this.data.viaje.id).subscribe({
      next: (viajeServer) => {
        // Actualizamos el objeto local con los datos frescos del servidor
        this.viaje = { ...viajeServer };
        this.yaUnido = this.viaje.acompanantes?.some((a: any) => a.id === usuarioId) || false;

        this.cdRef.markForCheck(); // Usar markForCheck con OnPush
      }
    });
  }


  /**
   * Función para unirse a un viaje.
   * 
   * @param viajeID 
   * @returns 
   */
  unirseAViaje(viajeID: number) {
    const title_error: string = '¡Algo anda mal!';
    const message_ya_unico: string = '<p>Ya estás unido a este viaje.</p>';
    const title_viaje_confirmado: string = '¡Confirmado!';
    const message_viaje_confirmado: string = 'Te has unido al viaje correctamente.';
    const message_error: string = 'Ya estás unido a este viaje.';

    if (this.yaUnido) {
      this.funcionesComunes.openConfirmModal(title_error, message_ya_unico);
      return;
    }

    this.travelService.unirseAViaje(viajeID).subscribe({
      next: (response) => {
        const viajesActualizados = response;

        const viajeActualizado = viajesActualizados.find((viaje: any) => viaje.id === viajeID);

        if (viajeActualizado) {
          this.viaje = viajeActualizado;
          this.viaje.plazas = viajeActualizado.plazas;

          const dialogRef = this.funcionesComunes.openConfirmModal(title_viaje_confirmado, message_viaje_confirmado);
          this.yaUnido = true;

          this.cdRef.detectChanges();

          dialogRef.afterClosed().subscribe(() => {
            this.obtenerViajesActualizados()
          });
        } else {
          this.funcionesComunes.openErrorModal(title_error, 'No se encontró el viaje actualizado.');
        }
      },
      error: (error) => {
        this.funcionesComunes.openErrorModal(title_error, message_error);
      }
    });
  }


  /**
   * Función para redirigir al perfil público del usuario.
   * 
   * @param id_usuario 
   */
  masDetallesUsuario(id_usuario: number) {
    const usuario = {
      id: id_usuario
    }
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

  formatData(date: any) {
    return date.split('T')[0].trim();
  }
  contactarAcompanante(receptorId: number) {
    // 1. Obtener el ID del usuario actual desde el localStorage o servicio
    const emisorId = this.userData.usuario.id;

    if (emisorId === receptorId) {
       console.warn("No puedes enviarte un mensaje a ti mismo");
       return;
    }

    // 2. Llamar al endpoint para iniciar/obtener conversación
    this.messagingService.iniciarChat(emisorId, receptorId).subscribe({
      next: (res) => {
        // 3. Cerrar el modal actual
        this.closeDialog();

        // 4. Redirigir a la página de chat con el ID de la conversación obtenida
        this.navCtrl.navigateForward(['/chat', res.conversacion_id], {
          animated: true
        });
      },
      error: (err) => {
        console.error('Error al iniciar chat:', err);
        this.funcionesComunes.openErrorModal('¡Error!', 'No se pudo abrir el chat en este momento.');
      }
    });
  }
}
