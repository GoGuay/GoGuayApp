import { Component, OnInit, OnDestroy, ChangeDetectorRef, viewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";

// Ionic Standalone
import { IonicModule, NavController } from "@ionic/angular";

// Material
import { MatButtonModule } from "@angular/material/button";
import { MatDivider } from "@angular/material/divider";
import { MatAccordion, MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";

// Core de GoGuay
import { Viaje } from "../../../models/travel/viaje.model";
import { Usuario } from "../../../models/user/usuario.model";
import { TravelService } from "../../../core/travel-services/travel.service";
import { UserServicesService } from "../../../core/user-services/user-services.service";
import { FuncionesComunes } from "../../../core/funciones-comunes/funciones-comunes.service";
import { MessagingService } from "../../../core/menssaging-service/messaging.service";
import { MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";

@Component({
  selector: "app-detalles-viaje",
  templateUrl: "./detalles-viaje.page.html",
  styleUrls: ["./detalles-viaje.page.scss"],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, 
    MatDivider,
    MatIcon,
    MatButtonModule,
    MatAccordion,
    MatExpansionModule,
    MatFormFieldModule,
    ToastModule
  ],
})
export class DetallesViajePage implements OnInit, OnDestroy {

  viaje!: Viaje;
  yaUnido: boolean = false;
  preferencias: string[] = [];
  userID!: number;
  conductor: boolean = false;
  userData: Usuario | undefined = {} as Usuario;
  pasajeroYaAvisoLlegada: boolean = false;
  
  private viajesSubscription: Subscription = new Subscription();
  accordion = viewChild.required(MatAccordion);

  constructor(
    public funcionesComunes: FuncionesComunes,
    private travelService: TravelService,
    private usersService: UserServicesService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef,
    private messagingService: MessagingService,
    private messageService: MessageService,
  ) {
    // El constructor queda limpio de inyecciones modales para permitir el enrutamiento full-screen
  }

  ngOnInit() {
    const storedData = localStorage.getItem('userData');
    this.userData = storedData ? JSON.parse(storedData) : null;

    // 1. Intentamos recuperar los datos del viaje del espacio temporal del servicio
    const viajeTemporal = this.travelService.getViajeData();

    if (viajeTemporal) {
      this.viaje = {
        ...viajeTemporal,
        acompanantes: viajeTemporal.acompanantes || []
      };
      this.inicializarLogica();
    } else {
      // 2. Si el usuario refresca la página, leemos el ID desde los queryParams de la URL
      this.route.queryParams.subscribe(params => {
        const viajeId = params['id'];
        if (viajeId) {
          this.travelService.getViaje(viajeId).subscribe({
            next: (v) => {
              this.viaje = {
                ...v,
                acompanantes: v.acompanantes || []
              };
              this.inicializarLogica();
            },
            error: (err) => {
              console.error('Error al recuperar el viaje por ID:', err);
              this.navCtrl.navigateRoot('/busqueda-viajes');
            }
          });
        } else {
          this.navCtrl.navigateRoot('/busqueda-viajes');
        }
      });
    }
  }

  private inicializarLogica() {
    this.preferencias = this.funcionesComunes.validacionPreferencias(this.viaje.preferencias ?? []);
    this.checkSiYaAvisoLlegada();
    this.obtenerUsuarioActual();
    this.obtenerViajesActualizados();

    if (this.userData && this.userData.usuario) {
      this.validarSiEsConductor(this.userData.usuario.id, this.viaje);
      this.verificarSiEstaUnido();
    }
    this.cdRef.detectChanges();
  }

  ngOnDestroy() {
    if (this.viajesSubscription) {
      this.viajesSubscription.unsubscribe();
    }
  }

  /**
   * Obtiene los datos detallados del conductor del viaje.
   */
  obtenerUsuarioActual() {
    if (!this.viaje || !this.viaje.usuario_id) return;

    this.usersService
      .obtenerUsuarioPorID_busqueda_viajes(this.viaje.usuario_id)
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
        error: (error) => console.error('Error al obtener el conductor:', error),
      });
  }

  /**
   * Escucha cambios en tiempo real sobre el viaje actual desde el BehaviorSubject del servicio.
   */
  obtenerViajesActualizados() {
    this.viajesSubscription = this.travelService.viajeData$.subscribe((viajes) => {
      if (viajes && Array.isArray(viajes) && this.viaje) {
        const viajeActualizado = viajes.find((v: Viaje) => v.id === this.viaje.id);
        if (viajeActualizado) {
          this.viaje = { ...viajeActualizado };
          this.cdRef.markForCheck();
        }
      }
    });
  }

  /**
   * Comprueba si el usuario actual ya está aceptado en la lista de acompañantes.
   */
  verificarSiEstaUnido() {
    if (!this.userData || !this.userData.usuario || !this.viaje) {
      this.yaUnido = false;
      return;
    }

    const usuarioId = this.userData.usuario.id;

    this.travelService.getViaje(this.viaje.id).subscribe({
      next: (viajeServer) => {
        const usuarioTemporal = this.viaje.usuario;
        this.viaje = { ...viajeServer };
        if (!this.viaje.usuario) this.viaje.usuario = usuarioTemporal;

        this.yaUnido = this.viaje.acompanantes?.some((a: any) => a.id === usuarioId) || false;
        this.cdRef.markForCheck();
      },
      error: (err) => console.error('Error al verificar unión del pasajero:', err)
    });
  }

  /**
   * Envía una solicitud manual de reserva abriendo una sala de chat con el conductor.
   */
  enviarSolicitudManual() {
    if (!this.viaje) return;

    const emisorId = this.userData?.usuario.id || 0;
    const receptorId = this.viaje.usuario_id;

    this.messagingService.iniciarChat(emisorId, receptorId).subscribe({
      next: (res) => {
        const convId = res.conversacion_id;

        const payload = {
          viaje_id: this.viaje.id,
          emisor_id: emisorId,
          receptor_id: receptorId,
          conversacion_id: convId,
        };

        this.messagingService.enviarSolicitudViaje(payload).subscribe(() => {
          this.funcionesComunes.openConfirmModal(
            'Solicitud enviada',
            'El conductor debe aceptar tu solicitud para unirte.',
          );
          this.navCtrl.navigateForward(['/chat', convId]);
        });
      },
      error: (err) => console.error('Error al iniciar el flujo de solicitud:', err)
    });
  }

  /**
   * Redirige al perfil público del usuario especificado.
   */
  masDetallesUsuario(id_usuario: number) {
    const usuario = { id: id_usuario };
    this.navCtrl.navigateRoot(['/perfil-publico'], {
      queryParams: usuario,
    });
  }

  validarSiEsConductor(usuario_id: number, viaje: Viaje) {
    this.conductor = viaje && usuario_id === viaje.usuario_id;
  }

  formatData(date: any) {
    if (!date) return '';
    return date.split('T')[0].trim();
  }

  checkSiYaAvisoLlegada() {
    if (this.yaUnido && this.userData?.usuario && this.viaje) {
      const yo = this.viaje.acompanantes?.find(
        (a: any) => a.id === this.userData?.usuario.id,
      );
      this.pasajeroYaAvisoLlegada = yo?.ha_llegado || false;
    }
  }

  /**
   * Acción del Pasajero para alertar que ha llegado al punto de recogida.
   */
  notificarLlegadaPasajero() {
    if (!this.userData?.usuario || !this.viaje) return;

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
   * Acción del Conductor para validar la asistencia en directo de un acompañante.
   */
  confirmarLlegadaDesdeConductor(acompId: number) {
    if (!this.viaje) return;
    const viajeId = this.viaje.id;

    this.travelService
      .notificarLlegadaPuntoPartida(viajeId, acompId)
      .subscribe({
        next: () => {
          const acompanante = this.viaje.acompanantes?.find((a: any) => a.id === acompId);
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
        error: (err) => console.error('Error al confirmar llegada desde conductor:', err),
      });
  }
}