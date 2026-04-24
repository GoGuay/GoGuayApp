import { Component, OnInit } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { Viaje } from 'src/app/models/travel/viaje.model';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';
import { Usuario } from 'src/app/models/user/usuario.model';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { PuntuacionesComponent } from 'src/app/components/puntuaciones/puntuaciones.component';
import { forkJoin, Observable } from 'rxjs';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { ViajeSeleccionadoComponent } from 'src/app/components/viaje-seleccionado/viaje-seleccionado.component';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { ActivatedRoute } from '@angular/router';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';
import { SpinnerComponent } from "src/app/components/spinner/spinner.component";
import { catchError, of } from 'rxjs';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PopoverController } from '@ionic/angular/standalone';
import { LoadTravelLineComponent } from "src/app/components/load-travel-line/load-travel-line.component";
import localeEs from '@angular/common/locales/es';

@Component({
  selector: 'app-mis-viajes',
  templateUrl: './mis-viajes.page.html',
  styleUrls: ['./mis-viajes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NavbarComponent, MatIcon, JumbotronComponent, SpinnerComponent, ToastModule, TranslateModule, LoadTravelLineComponent],
  providers: [MessageService],
})
export class MisViajesPage implements OnInit {

  /**
   * Parámetros para navbar
   */
  userLoggedIn: boolean = false;
  urlParaVolver: string = '';

  filtroViajes: string = 'todos';
  misViajes: Viaje[] = [];
  misViajesAcompanante: Viaje[] = [];
  misViajesCreados: Viaje[] = [];
  misSolicitudesPendientes: Viaje[] = [];

  pasajero: boolean = false;
  conductor: boolean = false;

  preferenciasViaje: string[] = [];

  cargando = false;
  mostrarAyuda: boolean = false;

  imgNuevoViaje: string = '../../../assets/sistema/agregar.png';
  buscarViaje: string = '../../../assets/sistema/busqueda.png';

  cargandoViajes: boolean = true;

  /**
   * Datos del usuario
   */
  userData: any = {} as Usuario;
  usuarioParams: any = {};

  mostrarJumbotron = true;
  filtroSeleccionado: string = 'horaSalida';

  // private _bottomSheet = inject(MatBottomSheet);

  constructor(public funcionesComunes: FuncionesComunes,
    private navCtrl: NavController, private userService: UserServicesService,
    private dialog: MatDialog, private travelService: TravelService,
    private route: ActivatedRoute, private _bottomSheet: MatBottomSheet,
    private messageService: MessageService, private popoverCtrl: PopoverController,
    private alertCtrl: AlertController, public translate: TranslateService) { }

    ngOnInit() {
      this.route.queryParams.subscribe((params) => {
        this.usuarioParams = params;
        const userId = parseInt(this.usuarioParams.id, 10);

        const cache = localStorage.getItem('userData');
        if (cache) {
          this.userData = JSON.parse(cache);
          this.userLoggedIn = true;
          this.cargarTodosLosViajes(userId);
        }

        this.userService.obtenerUsuarioPorID(userId).subscribe({
          next: (res) => {
            this.userData = res.usuario ? res : { usuario: res };
            
            this.userLoggedIn = true;
            localStorage.setItem('userData', JSON.stringify(this.userData));

            if (!cache) {
              this.cargarTodosLosViajes(userId);
            }
          },
          error: (err) => {
            if (err.status === 401) this.navCtrl.navigateRoot('/login');
          }
        });
      });
    }

    
  /**
   * Función para cargar todos los viajes del usuario (creados y como acompañante)
   * @param userId Recibe el ID del usuario
   */
  cargarTodosLosViajes(userId: number) {
    this.cargandoViajes = true;
    
    // Ejecutamos las 3 peticiones de viajes en paralelo
    forkJoin({
      acompanante: this.travelService.getViajesComoAcompañante(userId).pipe(catchError(() => of([]))),
      creados: this.travelService.getViajesUsuario(userId).pipe(catchError(() => of({ viajes: [] }))),
      solicitudes: this.travelService.getMisSolicitudesPendientes(userId).pipe(catchError(() => of([])))
    }).subscribe({
      next: ({ acompanante, creados, solicitudes }) => {
        this.misViajesAcompanante = acompanante;
        this.misViajesCreados = creados?.viajes || [];
        this.misSolicitudesPendientes = solicitudes;

        this.misViajesCreados.forEach(v => v.usuario = this.userData);

        this.filtrarViajes();
        this.cargandoViajes = false;
      },
      error: () => this.cargandoViajes = false
    });
  }

  /**
   * Función para cargar la configuración del jumbotron desde localStorage
   * Si no hay configuración guardada, se muestra por defecto
   */
  loadJumbotronSetting() {
    const jumbotronSetting = localStorage.getItem('mostrarJumbotron');
    this.mostrarJumbotron = jumbotronSetting === null ? true : jumbotronSetting === 'true';
  }

  /**
   * Función para obtener los datos de un usuario
   * @param id_usuario Recibe el ID del usuario que está logado
   */
  obtenerUsuarioPorID(id_usuario: number) {
    this.userService.obtenerUsuarioPorID(id_usuario).subscribe((resultadoUsuario) => {
      this.userData = resultadoUsuario;
      this.preferenciasViaje = this.funcionesComunes.validacionPreferencias(this.userData);
    });
  }

  obtenerUsuario(id_usuario: number): Observable<Usuario> {
    return this.userService.obtenerUsuarioPorID(id_usuario);
  }

  /**
 * Función para validar si el perfil es el del usuario logueado
 * 
 * @param id_usuario Recibe el ID del usuario.
 */
  validacionPerilLogeado(id_usuario: number) {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (id_usuario === this.userData.usuario.id) {
      // this.editar_perfil = true;
    } else {
      // this.editar_perfil = false;
    }
  }

  /**
 * Función para obtener la lista de viajes que ha creado el usuario
 */
  obtenerViajesCreados() {
    this.travelService.getViajesUsuario(this.userData.usuario.id)
      .subscribe((result) => {
        this.misViajesCreados = result.viajes;
        this.misViajesCreados.forEach((viaje) => {
          viaje.usuario = this.userData;
        })
        this.filtrarViajes();
      });
  }

  /**
   * Función para obtener los viajes a los que el usuario se ha apuntado como pasajero
   */
  obtenerViajesComoAcompanante() {
    this.cargandoViajes = true;
    this.travelService.getViajesComoAcompañante(this.userData.usuario.id)
      .subscribe((result) => {
        this.misViajesAcompanante = result;
        this.cargandoViajes = false;
        this.filtrarViajes();
      });
  }

  /**
 * Función para validar si se puede puntuar un viaje o no.
 * 
 * @param viaje 
 */
  puedePuntuar(viaje: Viaje): boolean {
    const esFinalizado = this.funcionesComunes.esViajeFinalizado(viaje.fecha_salida, viaje.hora_salida);
    const esPasajero = this.misViajesAcompanante.some(v => v.id === viaje.id);
    const esCreador = viaje.usuario_id === this.userData.id;

    // Solo se puede puntuar si el viaje ha finalizado, si es pasajero (no creador) y si no es el creador
    return esFinalizado && esPasajero && !esCreador;
  }

  /**
   * Función para filtrar los viajes según el filtro seleccionado
   */
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
        const misViajesConSolicitudes = creados.filter(v => v.solicitudes_pendientes && v.solicitudes_pendientes.length > 0);
        
        this.misViajes = [...solicitudes, ...misViajesConSolicitudes];
        
        this.conductor = false;
        this.pasajero = false;
        break;

      case 'antiguos':
        this.misViajes.sort((a, b) => {
          return new Date(a.fecha_salida).getTime() - new Date(b.fecha_salida).getTime();
        });
        break;

      case 'pendientes':
        this.misViajes.sort((a, b) => {
          const aFinalizado = this.funcionesComunes.esViajeFinalizado(a.fecha_salida, a.hora_salida);
          const bFinalizado = this.funcionesComunes.esViajeFinalizado(b.fecha_salida, b.hora_salida);
          return aFinalizado === bFinalizado ? 0 : aFinalizado ? 1 : -1;
        });
        break;

      default:
        this.misViajes = [];
        break;
    }
    this.onFiltroChange({ detail: { value: this.filtroSeleccionado } }, { dismiss: () => { } });
  }


  /**
   * Función para puntuar un viaje
   */
  puntuarViaje(viaje: Viaje) {
    const bottomSheetRef = this._bottomSheet.open(PuntuacionesComponent, {
      data: {
        viaje: viaje
      }
    });

    bottomSheetRef.afterDismissed().subscribe((result) => {
      if (result) {
        this.messageService.add({
          severity: 'success',
          summary: 'Puntuación guardada',
          detail: 'Muchas gracias por realizar nuestra encuesta de satisfacción.',
          life: 3000
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
      origin: 'mis-viajes'
    }
    this.navCtrl.navigateRoot('/resumen-viaje', {
      queryParams: viaje
    });
  }

  /**
   * Función para abrir una modal con los detalles del viaje seleccionado
   * @param viaje Recibe la información del viaje seleccionado.
   */
  openDetalleViaje(viaje: Viaje) {
    this.obtenerUsuario(viaje.usuario_id).subscribe((usuario: any) => {
      viaje.usuario = usuario;
    });
    this.dialog.open(ViajeSeleccionadoComponent, {
      data: { viaje }
    });
  }

  /**
 * Función para eliminar un viaje.
 * 
 * @param viajeId 
 */
  eliminarViaje(viajeId: number) {
    this.travelService.eliminarViaje(viajeId).subscribe({
      next: () => {
        console.log('Viaje eliminado con éxito.');
        this.obtenerViajesCreados();
      },
      error: (error) => {
        console.error('Error al eliminar el viaje:', error);
      }
    });
  }

  /**
   * Función para que un usuario salga de un viaje
   * @param viajeId ID del viaje
   */
  salirDeViaje(viajeId: number) {
    this.cargando = true;
    this.travelService.salirDeViaje(viajeId).subscribe({
      next: () => {
        this.cargando = false;
        console.log('El usuario ha salido del viaje con éxito');
        this.obtenerViajesComoAcompanante();
        this.obtenerViajesCreados();
      },
      error: (error) => {
        this.cargando = false;
        console.error('Error al salir del viaje:', error);
      }
    });
  }

  /**
   * Función para mostrar/ocultar la ayuda
   */
  toggleAyuda() {
    this.mostrarAyuda = !this.mostrarAyuda;
  }

  /**
   * Funciones de navegación
   */
  goToBuscarViaje() {
    this.navCtrl.navigateRoot('/busqueda-viajes');
  }

  /**
   * Función para navegar a la página de nuevo viaje
   */
  goToNuevoViaje() {
    this.navCtrl.navigateRoot('/nuevo-viaje');
  }

  onFiltroChange(event: any, popover: any) {
    this.filtroSeleccionado = event.detail.value;

    switch (this.filtroSeleccionado) {
      case 'horaSalida':
        this.misViajes.sort((a, b) => (a.hora_salida || '').localeCompare(b.hora_salida || ''));
        break;

      case 'recientes':
        this.misViajes.sort((a, b) => {
          return new Date(b.fecha_salida).getTime() - new Date(a.fecha_salida).getTime();
        });
        break;

      case 'antiguos':
        this.misViajes.sort((a, b) => {
          return new Date(a.fecha_salida).getTime() - new Date(b.fecha_salida).getTime();
        });
        break;

      case 'precioAsc':
        this.misViajes.sort((a, b) => {
          const precioA = a.precio_viaje || 0;
          const precioB = b.precio_viaje || 0;
          return precioA - precioB;
        });
        break;

      case 'precioDesc':
        this.misViajes.sort((a, b) => {
          const precioA = a.precio_viaje || 0;
          const precioB = b.precio_viaje || 0;
          return precioB - precioA;
        });
        break;

      case 'pendientes':
        this.misViajes.sort((a, b) => {
          const aFinalizado = this.funcionesComunes.esViajeFinalizado(a.fecha_salida, a.hora_salida);
          const bFinalizado = this.funcionesComunes.esViajeFinalizado(b.fecha_salida, b.hora_salida);
          return aFinalizado === bFinalizado ? 0 : aFinalizado ? 1 : -1;
        });
        break;
    }

    // Verificamos que popover existe antes de llamar a dismiss (por seguridad)
    if (popover && typeof popover.dismiss === 'function') {
      popover.dismiss();
    }
  }

  async reportar(ev: any, viaje: any) {
    ev.stopPropagation();

    await this.popoverCtrl.create({
      component: 'popover-opciones',
      event: ev,
      translucent: true,
      mode: 'ios',
      componentProps: { pasajeros: viaje }
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
            role: 'cancel'
          },
        ]
      });
      await alertVacio.present();
      return;
    }

    const inputsAcompanantes = viaje.acompanantes.map((pasajero: any) => ({
      type: 'checkbox',
      label: pasajero.nombre + ' ' + (pasajero.apellidos || ''),
      value: pasajero,
      checked: false
    }));

    const actionSheet = await this.alertCtrl.create({
      header: 'Reportar pasajero',
      subHeader: '¿A quién deseas reportar por no presentarse?',
      cssClass: 'custom-alert-chat',
      inputs: inputsAcompanantes,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Reportar ausencias',
          role: 'destructive',
          handler: (pasajerosSeleccionados: any[]) => {
            if (!pasajerosSeleccionados || pasajerosSeleccionados.length === 0) {
              console.warn('No se seleccionó ningún pasajero');
              return false;
            }

            this.confirmarReporte(pasajerosSeleccionados, viaje.id);
            return true;
          }
        }
      ]
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
    console.log(`Reportando ${pasajeros.length} pasajero(s) en el viaje ${viajeId}:`, pasajeros);

    pasajeros.forEach(pasajero => {
      this.messageService.add({
        severity: 'warn',
        summary: 'Reporte enviado',
        detail: `Se ha registrado la ausencia de ${pasajero.nombre}.`,
        life: 2000
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
          life: 3000
        });
        this.cargarTodosLosViajes(this.userData.usuario.id);
      },
      error: (err) => {
        this.cargandoViajes = false;
        console.error('Error al aceptar pasajero', err);
      }
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
            this.travelService.rechazarPasajeroManual(viajeId, pasajeroId).subscribe({
              next: () => {
                this.cargarTodosLosViajes(this.userData.usuario.id);
              }
            });
          }
        }
      ]
    });
    await alert.present();
  }

  async cancelarSolicitud(solicitudId: number) {
    const alert = await this.alertCtrl.create({
      header: 'Cancelar Solicitud',
      message: '¿Estás seguro de que deseas retirar tu solicitud de plaza?',
      buttons: [
        { text: 'No', role: 'cancel' },
        { 
          text: 'Sí, retirar', 
          handler: () => {
            this.travelService.cancelarSolicitudManual(solicitudId).subscribe(() => {
              this.cargarTodosLosViajes(this.userData.usuario.id);
            });
          }
        }
      ]
    });
    await alert.present();
  }

}
