import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { JumbotronComponent } from 'src/app/pages/jumbotron/jumbotron.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { ToastModule } from 'primeng/toast';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Viaje } from 'src/app/models/travel/viaje.model';
import { Usuario } from 'src/app/models/user/usuario.model';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { PopoverController } from '@ionic/angular/standalone';
import { catchError, forkJoin, of } from 'rxjs';
import { PuntuacionesComponent } from '../puntuaciones/puntuaciones.component';

@Component({
  selector: 'tarjeta-viaje',
  templateUrl: './tarjeta-viaje.component.html',
  styleUrls: ['./tarjeta-viaje.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NavbarComponent,
    MatIcon,
    JumbotronComponent,
    SpinnerComponent,
    ToastModule,
    TranslateModule,
  ],
  providers: [MessageService],
})
export class TarjetaViajeComponent implements OnInit {
  misViajes: Viaje[] = [];
  userData: any = {} as Usuario;
  usuarioParams: any = {};
  filtroViajes: string = 'todos';
  cargandoViajes: boolean = true;
  misViajesAcompanante: Viaje[] = [];
  misViajesCreados: Viaje[] = [];
  misSolicitudesPendientes: Viaje[] = [];
  pasajero: boolean = false;
  conductor: boolean = false;
  filtroSeleccionado: string = 'horaSalida';
  cargando = false;

  //Para poder pasar los datos del componente padre
  @Input() viajesFiltrados!: Viaje[];

  constructor(
    public funcionesComunes: FuncionesComunes,
    private navCtrl: NavController,
    private userService: UserServicesService,
    private travelService: TravelService,
    private route: ActivatedRoute,
    private _bottomSheet: MatBottomSheet,
    private messageService: MessageService,
    private popoverCtrl: PopoverController,
    private alertCtrl: AlertController,
    public translate: TranslateService,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.usuarioParams = params;
      let finalUserId: number | null = null;

      const cache = localStorage.getItem('userData');
      if (cache) {
        this.userData = JSON.parse(cache);

        const cachedId =
          this.userData.id ||
          (this.userData.usuario ? this.userData.usuario.id : null);
        if (cachedId) {
          finalUserId = Number(cachedId);
        }
      }

      if (this.usuarioParams && this.usuarioParams.id) {
        const urlId = parseInt(this.usuarioParams.id, 10);
        if (!isNaN(urlId)) {
          finalUserId = urlId;
        }
      }

      if (finalUserId && !isNaN(finalUserId)) {
        this.cargarTodosLosViajes(finalUserId);
      } else {
        console.warn(
          'No se detectó un ID de usuario válido en la inicialización.',
        );
        this.cargandoViajes = false;
      }
    });
  }

  /**
   * Función para que el conductor acepte una solicitud manual.
   * @param viajeId
   * @param pasajeroId El ID del usuario que solicita
   */
  aceptarPasajero(viajeId: number, pasajeroId: number) {
    this.cargandoViajes = true;

    this.travelService.confirmarPasajeroManual(viajeId, pasajeroId).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Pasajero aceptado',
          detail: 'El pasajero ya tiene su plaza confirmada.',
          life: 3000,
        });
        this.cargarTodosLosViajes(this.userData.usuario.id);
      },
      error: (err) => {
        this.cargandoViajes = false;
        console.error('Error al aceptar pasajero', err);
      },
    });
  }
  /**
   * Función para que el conductor rechace una solicitud manual.
   */
  async rechazarPasajero(viajeId: number, pasajeroId: number) {
    const alert = await this.alertCtrl.create({
      header: 'Rechazar solicitud',
      message: '¿Estás seguro de que deseas rechazar a este pasajero?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Rechazar',
          role: 'destructive',
          handler: () => {
            this.travelService
              .rechazarPasajeroManual(viajeId, pasajeroId)
              .subscribe({
                next: () => {
                  this.cargarTodosLosViajes(this.userData.usuario.id);
                },
              });
          },
        },
      ],
    });
    await alert.present();
  }

  /**
   * Función para cargar todos los viajes del usuario (creados y como acompañante)
   * @param userId Recibe el ID del usuario
   */
  cargarTodosLosViajes(userId: number) {
    this.cargandoViajes = true;

    // Ejecutamos las 3 peticiones de viajes en paralelo
    forkJoin({
      acompanante: this.travelService
        .getViajesComoAcompañante(userId)
        .pipe(catchError(() => of([]))),
      creados: this.travelService
        .getViajesUsuario(userId)
        .pipe(catchError(() => of({ viajes: [] }))),
      solicitudes: this.travelService
        .getMisSolicitudesPendientes(userId)
        .pipe(catchError(() => of([]))),
    }).subscribe({
      next: ({ acompanante, creados, solicitudes }) => {
        this.misViajesAcompanante = acompanante;
        this.misViajesCreados = creados?.viajes || [];
        this.misSolicitudesPendientes = solicitudes;

        this.misViajesCreados.forEach((v) => (v.usuario = this.userData));

        this.filtrarViajes();
        this.cargandoViajes = false;
      },
      error: () => (this.cargandoViajes = false),
    });
  }
  filtrarViajes() {
    const acompañante = this.misViajesAcompanante || [];
    const creados = this.misViajesCreados || [];
    const solicitudes = this.misSolicitudesPendientes || [];

    switch (this.filtroViajes) {
      case 'todos':
        this.misViajes = [...acompañante, ...creados];
        this.conductor = false;
        this.pasajero = false;
        break;

      case 'conductor':
        this.misViajes = [...creados];
        this.conductor = true;
        this.pasajero = false;
        break;

      case 'pasajero':
        this.misViajes = [...acompañante];
        this.conductor = false;
        this.pasajero = true;
        break;

      case 'solicitudes':
        const misViajesConSolicitudes = creados.filter(
          (v) =>
            v.solicitudes_pendientes && v.solicitudes_pendientes.length > 0,
        );

        this.misViajes = [...solicitudes, ...misViajesConSolicitudes];

        this.conductor = false;
        this.pasajero = false;
        break;

      case 'antiguos':
        this.misViajes.sort((a, b) => {
          return (
            new Date(a.fecha_salida).getTime() -
            new Date(b.fecha_salida).getTime()
          );
        });
        break;

      case 'pendientes':
        this.misViajes.sort((a, b) => {
          const aFinalizado = this.funcionesComunes.esViajeFinalizado(
            a.fecha_salida,
            a.hora_salida,
          );
          const bFinalizado = this.funcionesComunes.esViajeFinalizado(
            b.fecha_salida,
            b.hora_salida,
          );
          return aFinalizado === bFinalizado ? 0 : aFinalizado ? 1 : -1;
        });
        break;

      default:
        this.misViajes = [];
        break;
    }
    this.onFiltroChange(
      { detail: { value: this.filtroSeleccionado } },
      { dismiss: () => {} },
    );
  }

  /**
   * Función para manejar el cambio de filtro de los viajes, actualiza la lista de viajes mostrados según el filtro seleccionado
   * y cierra el popover de filtros si está abierto.
   * @param event --> Recibe el evento del cambio de filtro, que contiene el valor del filtro seleccionado.
   * @param popover --> Recibe el popover de filtros para poder cerrarlo después de aplicar el filtro.
   */
  onFiltroChange(event: any, popover: any) {
    this.filtroSeleccionado = event.detail.value;

    const acompanante = this.misViajesAcompanante || [];
    const creados = this.misViajesCreados || [];
    const solicitudes = this.misSolicitudesPendientes || [];

    let viajesBase: any[] = [];

    switch (this.filtroViajes) {
      case 'todos':
        viajesBase = [...acompanante, ...creados];
        break;
      case 'conductor':
        viajesBase = [...creados];
        break;
      case 'pasajero':
        viajesBase = [...acompanante];
        break;
      case 'solicitudes':
        const misViajesConSoli = creados.filter(
          (v) =>
            v.solicitudes_pendientes && v.solicitudes_pendientes.length > 0,
        );
        viajesBase = [...solicitudes, ...misViajesConSoli];
        break;
    }

    switch (this.filtroSeleccionado) {
      case 'en_curso':
        this.misViajes = viajesBase.filter(
          (v) => v.estado_viaje === 'En curso',
        );
        break;

      case 'finalizado':
        this.misViajes = viajesBase.filter(
          (v) =>
            v.estado_viaje === 'Finalizado' || v.estado_viaje === 'Cancelado',
        );
        break;

      case 'proximo':
        this.misViajes = viajesBase.filter((v) => v.estado_viaje === 'Próximo');
        break;

      default:
        this.misViajes = viajesBase.filter(
          (v) => v.estado_viaje === 'Finalizado',
        );
        break;
    }

    if (popover && typeof popover.dismiss === 'function') {
      popover.dismiss();
    }

    this.cdr.detectChanges();
  }

  /**
   * Función para obtener la clase CSS según el estado del viaje
   * @param estado --> Estado del viaje (Pendiente, En curso, Finalizado, Cancelado)
   * @returns --> Devuelve la clase CSS correspondiente al estado del viaje
   * Si el estado es "Pendiente" o "Próximo", devuelve "badge-proximo"
   * Si el estado es "En curso", devuelve "badge-en-curso"
   * Si el estado es "Finalizado", devuelve "badge-finalizado"
   * Si el estado es "Cancelado", devuelve "badge-cancelado"
   * Si no se proporciona un estado o no coincide con ninguno de los casos anteriores, devuelve "badge-proximo" por defecto
   *
   * Esta función se utiliza para asignar estilos visuales a los viajes según su estado, facilitando la identificación rápida del estado de cada viaje en la interfaz de usuario.
   */
  getClaseEstado(estado?: string): string {
    if (!estado) return 'badge-proximo';

    switch (estado) {
      case 'Próximo':
      case 'Pendiente':
        return 'badge-proximo';
      case 'En curso':
        return 'badge-en-curso';
      case 'Finalizado':
        return 'badge-finalizado';
      case 'Cancelado':
        return 'badge-cancelado';
      default:
        return 'badge-proximo';
    }
  }

  /**
   * Función para obtener el icono según el estado del viaje
   * @param estado --> Estado del viaje (Pendiente, En curso, Finalizado, Cancelado)
   * @returns --> Devuelve la clase del icono correspondiente al estado del viaje
   */
  getIconoEstado(estado?: string): string {
    if (!estado) return 'fi-rr-calendar-clock me-1';

    switch (estado) {
      case 'Próximo':
      case 'Pendiente':
        return 'fi-rr-calendar-clock me-1';
      case 'En curso':
        return 'fi-rr-play me-1';
      case 'Finalizado':
        return 'fi-rr-check me-1';
      case 'Cancelado':
        return 'fi-rr-cross-circle me-1';
      default:
        return 'fi-rr-info me-1';
    }
  }

  async reportar(ev: any, viaje: any) {
    ev.stopPropagation();

    await this.popoverCtrl.create({
      component: 'popover-opciones',
      event: ev,
      translucent: true,
      mode: 'ios',
      componentProps: { pasajeros: viaje },
    });
    this.mostrarMenuAcciones(viaje);
  }

  /**
   * Función para mostrar el menú para reportar al pasajero o pasajeros
   * que no han aparecido en el punto de encuentro.
   *
   * @param viaje --> Datos del viaje seleccionado.
   *
   * @returns
   */
  async mostrarMenuAcciones(viaje: any) {
    if (!viaje.acompanantes || viaje.acompanantes.length === 0) {
      const alertVacio = await this.alertCtrl.create({
        header: 'Reportar pasajero',
        message: 'No hay pasajeros apuntados en este viaje.',
        cssClass: 'custom-alert-chat',
        buttons: [
          {
            text: 'Ok',
            role: 'cancel',
          },
        ],
      });
      await alertVacio.present();
      return;
    }

    const inputsAcompanantes = viaje.acompanantes.map((pasajero: any) => ({
      type: 'checkbox',
      label: pasajero.nombre + ' ' + (pasajero.apellidos || ''),
      value: pasajero,
      checked: false,
    }));

    const actionSheet = await this.alertCtrl.create({
      header: 'Reportar pasajero',
      subHeader: '¿A quién deseas reportar por no presentarse?',
      cssClass: 'custom-alert-chat',
      inputs: inputsAcompanantes,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Reportar ausencias',
          role: 'destructive',
          handler: (pasajerosSeleccionados: any[]) => {
            if (
              !pasajerosSeleccionados ||
              pasajerosSeleccionados.length === 0
            ) {
              console.warn('No se seleccionó ningún pasajero');
              return false;
            }

            this.confirmarReporte(pasajerosSeleccionados, viaje.id);
            return true;
          },
        },
      ],
    });

    await actionSheet.present();
  }

  /**
   * Función para confirmar el reporte al pasajero
   *
   * @param pasajeros --> Listado de pasajeros seleccionados para el reporte.
   *
   * @param viajeId --> ID del viaje seleccionado.
   */
  confirmarReporte(pasajeros: any[], viajeId: number) {
    console.log(
      `Reportando ${pasajeros.length} pasajero(s) en el viaje ${viajeId}:`,
      pasajeros,
    );

    pasajeros.forEach((pasajero) => {
      this.messageService.add({
        severity: 'warn',
        summary: 'Reporte enviado',
        detail: `Se ha registrado la ausencia de ${pasajero.nombre}.`,
        life: 2000,
      });
    });

    /*
    this.travelService.reportarAusencia(viajeId, pasajero.id).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Reporte enviado',
          detail: `Se ha registrado la ausencia de ${pasajero.nombre}.`
        });
      }
    });
    */
  }

  /**
   * Función para que el conductor cancele una solicitud manual.
   * El conductor puede cancelar una solicitud que aún no ha aceptado, retirando la solicitud de plaza del pasajero.
   * Esto es útil en caso de que el conductor decida que no quiere aceptar a ese pasajero o
   * si el pasajero se ha puesto en contacto con el conductor para retirar su solicitud.
   *
   * @param solicitudId --> El ID de la solicitud que se desea cancelar. Este ID corresponde a
   * la solicitud pendiente que el pasajero ha hecho para unirse al viaje, y
   * que aún no ha sido aceptada por el conductor. Al cancelar esta solicitud,
   * se elimina del sistema y el pasajero ya no aparecerá como solicitante para ese viaje.
   */
  async cancelarSolicitud(viaje: Viaje) {
    const esFinalizado =
      viaje.estado_viaje === 'Finalizado' ||
      this.funcionesComunes.esViajeFinalizado(
        viaje.fecha_salida,
        viaje.hora_salida,
      );

    if (esFinalizado) {
      this.messageService.add({
        severity: 'error',
        summary: 'Acción no permitida',
        detail:
          'No puedes cancelar una solicitud de un viaje que ya ha finalizado.',
        life: 4000,
      });
      return;
    }

    const alert = await this.alertCtrl.create({
      header: 'Cancelar Solicitud',
      message: '¿Estás seguro de que deseas retirar tu solicitud de plaza?',
      buttons: [
        { text: 'No', role: 'cancel' },
        {
          text: 'Sí, retirar',
          handler: () => {
            this.travelService.cancelarSolicitudManual(viaje.id).subscribe({
              next: () => {
                this.messageService.add({
                  severity: 'success',
                  summary: 'Solicitud retirada',
                  detail: 'Tu solicitud ha sido cancelada correctamente.',
                  life: 3000,
                });
                this.cargarTodosLosViajes(this.userData.usuario.id);
              },
              error: (err) => {
                console.error('Error al cancelar la solicitud:', err);
              },
            });
          },
        },
      ],
    });
    await alert.present();
  }

  /**
   * Función para puntuar un viaje
   */
  puntuarViaje(viaje: Viaje) {
    const bottomSheetRef = this._bottomSheet.open(PuntuacionesComponent, {
      data: {
        viaje: viaje,
      },
    });

    bottomSheetRef.afterDismissed().subscribe((result) => {
      if (result) {
        this.messageService.add({
          severity: 'success',
          summary: 'Puntuación guardada',
          detail:
            'Muchas gracias por realizar nuestra encuesta de satisfacción.',
          life: 3000,
        });

        const userId = parseInt(this.usuarioParams.id, 10);
        this.cargarTodosLosViajes(userId);
      }
    });
  }

  /**
   * Función para poder editar un viaje
   * @param viaje_id
   */
  editarViaje(viaje_id: number) {
    const viaje = {
      id: viaje_id,
      origin: 'mis-viajes',
    };
    this.navCtrl.navigateRoot('/resumen-viaje', {
      queryParams: viaje,
    });
  }

  /**
   * Función para abrir una modal con los detalles del viaje seleccionado
   * @param viaje Recibe la información del viaje seleccionado.
   */
  openDetalleViaje(viaje: Viaje) {
    this.travelService.setViajeData(viaje);

    // 2. Redirigimos a la nueva página inyectando el ID en la ruta
    // y pasando el objeto entero en el "state" por seguridad
    this.router.navigate([`/detalles-viaje/${viaje.id}`], {
      state: { viaje: viaje },
    });
  }

  /**
   * Función para eliminar un viaje.
   *
   * @param viajeId
   */
  async eliminarViaje(viajeId: number) {
    const alertMotivos = await this.alertCtrl.create({
      header: 'Cancelar Viaje',
      subHeader:
        'Por favor, selecciona el motivo de la cancelación para registrarlo en tu perfil:',
      cssClass: 'custom-alert-chat',
      inputs: [
        {
          type: 'radio',
          label: 'Avería o coche en taller',
          value: 'Avería o coche en taller',
          checked: true,
        },
        { type: 'radio', label: 'Enfermedad', value: 'Enfermedad' },
        {
          type: 'radio',
          label: 'Problema personal',
          value: 'Problema personal',
        },
        {
          type: 'radio',
          label: 'Cambios de plan o anulación del viaje',
          value: 'Cambios de plan o anulación del viaje',
        },
        {
          type: 'radio',
          label: 'Se ha publicado el viaje por error',
          value: 'Se ha publicado el viaje por error',
        },
        { type: 'radio', label: 'Otros motivos...', value: 'OTROS' },
      ],
      buttons: [
        { text: 'Volver', role: 'cancel' },
        {
          text: 'Continuar',
          handler: async (motivo) => {
            if (!motivo) return;

            if (motivo === 'OTROS') {
              this.mostrarInputAbiertoCancelacion(viajeId, 'conductor');
            } else {
              this.ejecutarCancelacionConductor(viajeId, motivo);
            }
          },
        },
      ],
    });

    await alertMotivos.present();
  }

  /**
   * Función para que un usuario salga de un viaje
   * @param viajeId ID del viaje
   */
  async salirDeViaje(viajeId: number) {
    const alertMotivosAcompanante = await this.alertCtrl.create({
      header: 'Darse de baja',
      subHeader: '¿Por qué necesitas cancelar tu plaza?',
      cssClass: 'custom-alert-chat',
      inputs: [
        {
          type: 'radio',
          label: 'Enfermedad',
          value: 'Enfermedad',
          checked: true,
        },
        {
          type: 'radio',
          label: 'Problema personal',
          value: 'Problema personal',
        },
        {
          type: 'radio',
          label: 'Cambios de plan o anulación',
          value: 'Cambios de plan o anulación del viaje',
        },
        {
          type: 'radio',
          label: 'Reserva por error',
          value: 'Se ha dado el botón de reserva por error',
        },
        {
          type: 'radio',
          label: 'El conductor no aparece (15 min)',
          value:
            'Tras 15 minutos en el punto de encuentro, el conductor no aparece',
        },
        {
          type: 'radio',
          label: 'El conductor no responde',
          value: 'Se ha intentado contactar con el conductor pero no responde',
        },
        {
          type: 'radio',
          label: 'Cambio de condiciones incómodo',
          value:
            'Se ha cambiado el punto de encuentro y la hora y no me viene bien',
        },
        {
          type: 'radio',
          label: 'Otra forma de viaje encontrada',
          value: 'He encontrado otra forma para hacer el viaje',
        },
        { type: 'radio', label: 'Otros motivos...', value: 'OTROS' },
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Continuar',
          handler: async (motivo) => {
            if (!motivo) return;

            if (motivo === 'OTROS') {
              this.mostrarInputAbiertoCancelacion(viajeId, 'pasajero');
            } else {
              this.ejecutarCancelacionPasajero(viajeId, motivo);
            }
          },
        },
      ],
    });

    await alertMotivosAcompanante.present();
  }

  /**
   * Función para mostrar un input abierto para especificar el motivo de la cancelación
   * @param viajeId ID del viaje
   * @param rol Rol del usuario (conductor o pasajero)
   */
  private async mostrarInputAbiertoCancelacion(
    viajeId: number,
    rol: 'conductor' | 'pasajero',
  ) {
    const alertAbierto = await this.alertCtrl.create({
      header: 'Especificar motivo',
      message: 'Por favor, escribe brevemente la razón de la cancelación:',
      cssClass: 'custom-alert-chat',
      inputs: [
        {
          name: 'motivoEspecifico',
          type: 'text',
          placeholder: 'Escribe aquí tu motivo...',
        },
      ],
      buttons: [
        { text: 'Atrás', role: 'cancel' },
        {
          text: 'Confirmar',
          role: 'destructive',
          handler: (data) => {
            const motivoFinal =
              data.motivoEspecifico?.trim() || 'Otros motivos';
            if (rol === 'conductor') {
              this.ejecutarCancelacionConductor(viajeId, motivoFinal);
            } else {
              this.ejecutarCancelacionPasajero(viajeId, motivoFinal);
            }
          },
        },
      ],
    });
    await alertAbierto.present();
  }

  /**
   * Función para ejecutar la cancelación de un viaje como conductor
   * @param viajeId ID del viaje
   * @param motivo Motivo de la cancelación
   */
  private ejecutarCancelacionConductor(viajeId: number, motivo: string) {
    this.cargandoViajes = true;
    this.travelService.eliminarViajeConMotivo(viajeId, motivo).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Viaje Cancelado',
          detail:
            'El trayecto ha sido anulado y penalizado en tu historial de fiabilidad.',
          life: 3500,
        });
        this.obtenerViajesCreados();
      },
      error: (err) => {
        this.cargandoViajes = false;
        console.error(
          'Error al tramitar la baja del viaje en el servidor:',
          err,
        );
      },
    });
  }

  /**
   * Función para ejecutar la cancelación de un viaje como pasajero
   * @param viajeId ID del viaje
   * @param motivo Motivo de la cancelación
   */
  private ejecutarCancelacionPasajero(viajeId: number, motivo: string) {
    this.cargando = true;
    this.travelService
      .salirDeViajeConMotivo(viajeId, this.userData.usuario.id, motivo)
      .subscribe({
        next: () => {
          this.cargando = false;
          this.messageService.add({
            severity: 'info',
            summary: 'Baja del viaje',
            detail: 'Has liberado tu plaza con éxito.',
            life: 3000,
          });
          this.obtenerViajesComoAcompanante();
          this.obtenerViajesCreados();
        },
        error: () => (this.cargando = false),
      });
  }

  /**
   * Función para obtener la lista de viajes que ha creado el usuario
   */
  obtenerViajesCreados() {
    this.travelService
      .getViajesUsuario(this.userData.usuario.id)
      .subscribe((result) => {
        this.misViajesCreados = result.viajes;
        this.misViajesCreados.forEach((viaje) => {
          viaje.usuario = this.userData;
        });
        this.filtrarViajes();
      });
  }

  /**
   * Función para obtener los viajes a los que el usuario se ha apuntado como pasajero
   */
  obtenerViajesComoAcompanante() {
    this.cargandoViajes = true;
    this.travelService
      .getViajesComoAcompañante(this.userData.usuario.id)
      .subscribe((result) => {
        this.misViajesAcompanante = result;
        this.cargandoViajes = false;
        this.filtrarViajes();
      });
  }
}
