import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { Viaje } from '../../models/travel/viaje.model';
import { FuncionesComunes } from '../../core/funciones-comunes/funciones-comunes.service';
import { Usuario } from '../../models/user/usuario.model';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { PuntuacionesComponent } from '../../components/puntuaciones/puntuaciones.component';
import { forkJoin, Observable } from 'rxjs';
import { UserServicesService } from '../../core/user-services/user-services.service';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { TravelService } from '../../core/travel-services/travel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { catchError, of } from 'rxjs';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PopoverController } from '@ionic/angular/standalone';
import { TarjetaViajeComponent } from 'src/app/components/tarjeta-viaje/tarjeta-viaje.component';

@Component({
  selector: 'app-mis-viajes',
  templateUrl: './mis-viajes.page.html',
  styleUrls: ['./mis-viajes.page.scss'],
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
    TarjetaViajeComponent,
  ],
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

  cargandoViajes: boolean = true;

  /**
   * Datos del usuario
   */
  userData: any = {} as Usuario;
  usuarioParams: any = {};

  mostrarJumbotron = true;
  filtroSeleccionado: string = 'horaSalida';

  constructor(
    public funcionesComunes: FuncionesComunes,
    private navCtrl: NavController,
    private userService: UserServicesService,
    private dialog: MatDialog,
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
        this.userLoggedIn = true;

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
        this.recuperarUsuarioServidor(finalUserId, !!cache);
      } else {
        console.warn(
          'No se detectó un ID de usuario válido en la inicialización.',
        );
        this.cargandoViajes = false;
      }
    });
  }

  /**
   * Función para recuperar los datos del usuario desde el servidor,
   * actualizando la información en la aplicación y en localStorage.
   *
   * Si ya teníamos datos en caché, solo actualizamos la información
   * del usuario sin recargar los viajes, para evitar llamadas innecesarias al servidor.
   * Si no teníamos datos en caché, después de recuperar la información del usuario,
   * forzamos la carga de los viajes para asegurarnos de que tenemos la información más actualizada.
   *
   * @param userId Recibe el ID del usuario para recuperar su información desde el servidor.
   * @param tieneCache Indica si ya teníamos datos del usuario en caché, para decidir si recargamos los viajes o no.
   */
  private recuperarUsuarioServidor(userId: number, tieneCache: boolean) {
    this.userService.obtenerUsuarioPorID(userId).subscribe({
      next: (res) => {
        this.userData = res.usuario ? res : { usuario: res };
        this.userLoggedIn = true;
        localStorage.setItem('userData', JSON.stringify(this.userData));

        if (!tieneCache) {
          this.cargarTodosLosViajes(userId);
        }
      },
      error: (err) => {
        console.error('Error al actualizar el usuario desde el servidor:', err);
      },
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

  /**
   * Función para cargar la configuración del jumbotron desde localStorage
   * Si no hay configuración guardada, se muestra por defecto
   */
  loadJumbotronSetting() {
    const jumbotronSetting = localStorage.getItem('mostrarJumbotron');
    this.mostrarJumbotron =
      jumbotronSetting === null ? true : jumbotronSetting === 'true';
  }

  /**
   * Función para obtener los datos de un usuario
   * @param id_usuario Recibe el ID del usuario que está logado
   */
  obtenerUsuarioPorID(id_usuario: number) {
    this.userService
      .obtenerUsuarioPorID(id_usuario)
      .subscribe((resultadoUsuario) => {
        this.userData = resultadoUsuario;
        this.preferenciasViaje = this.funcionesComunes.validacionPreferencias(
          this.userData,
        );
      });
  }

  /**
   * Función para obtener los datos de un usuario a través del servicio,
   * devuelve un Observable con la información del usuario
   *
   * @param id_usuario --> Recibe el ID del usuario que está logado
   * @returns --> Devuelve un Observable con la información del usuario
   */
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

  /**
   * Función para validar si se puede puntuar un viaje o no.
   *
   * @param viaje
   */
  puedePuntuar(viaje: Viaje): boolean {
    const esFinalizado = this.funcionesComunes.esViajeFinalizado(
      viaje.fecha_salida,
      viaje.hora_salida,
    );
    const esPasajero = this.misViajesAcompanante.some((v) => v.id === viaje.id);
    const esCreador = viaje.usuario_id === this.userData.id;

    // Solo se puede puntuar si el viaje ha finalizado, si es pasajero (no creador) y si no es el creador
    return esFinalizado && esPasajero && !esCreador;
  }

  /**
   * Función para filtrar los viajes según el filtro seleccionado de la tabla
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
}
