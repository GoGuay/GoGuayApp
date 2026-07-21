import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Observable, catchError, of } from 'rxjs';

// Ionic & Angular Material
import { PopoverController } from '@ionic/angular/standalone';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { AlertController, IonicModule, NavController } from '@ionic/angular';

// PrimeNG & Traducciones
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

// Componentes y Modelos Propios
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { TarjetaViajeComponent } from 'src/app/components/tarjeta-viaje/tarjeta-viaje.component';
import { Viaje } from '../../models/travel/viaje.model';
import { Usuario } from '../../models/user/usuario.model';

// Servicios Core
import { FuncionesComunes } from '../../core/funciones-comunes/funciones-comunes.service';
import { UserServicesService } from '../../core/user-services/user-services.service';
import { TravelService } from '../../core/travel-services/travel.service';

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
    JumbotronComponent,
    SpinnerComponent,
    ToastModule,
    TranslateModule,
    TarjetaViajeComponent,
  ],
  providers: [MessageService],
})
export class MisViajesPage implements OnInit {
  // Estado de sesión y navegación
  userLoggedIn: boolean = false;
  urlParaVolver: string = '';

  // Datos del Usuario
  userData: any = {} as Usuario;
  usuarioParams: any = {};
  preferenciasViaje: string[] = [];

  // Universo de Datos de Viajes
  misViajes: Viaje[] = [];
  misViajesAcompanante: Viaje[] = [];
  misViajesCreados: Viaje[] = [];
  misSolicitudesPendientes: Viaje[] = [];

  // Filtros activos por pestaña/segmento
  filtroViajes: string = 'todos';
  filtroSeleccionado: string = 'horaSalida';
  pasajero: boolean = false;
  conductor: boolean = false;
  solicitudesPendientes: boolean = false;

  // Estado de los Toggles de visualización
  filtrosEstados: { [key: string]: boolean } = {
    en_curso: false,
    proximos_viajes: true,
    finalizados_anulados: false,
  };

  // Banderas de control de interfaz
  mostrarAyuda: boolean = false;
  cargandoViajes: boolean = true;
  mostrarJumbotron = true;

  constructor(
    public funcionesComunes: FuncionesComunes,
    private navCtrl: NavController,
    private userService: UserServicesService,
    private travelService: TravelService,
    private route: ActivatedRoute,
    public translate: TranslateService,
    private cdr: ChangeDetectorRef,
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
   * ==========================================
   * COMUNICACIÓN CON EL SERVIDOR (API)
   * ==========================================
   */

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

    forkJoin({
      pasajero: this.travelService
        .getViajesComoAcompañante(userId)
        .pipe(catchError(() => of([]))),
      conductor: this.travelService
        .getViajesUsuario(userId)
        .pipe(catchError(() => of({ viajes: [] }))),
      solicitudesPendientes: this.travelService
        .getMisSolicitudesPendientes(userId)
        .pipe(catchError(() => of([]))),
    }).subscribe({
      next: ({ pasajero, conductor, solicitudesPendientes }) => {
        this.misViajesAcompanante = pasajero;
        this.misViajesCreados = conductor?.viajes || [];
        this.misSolicitudesPendientes = solicitudesPendientes;

        this.misViajesCreados.forEach((v) => (v.usuario = this.userData));

        const hayEnCursoReal = this.HayAlgunViajeEnCursoReal();
        if (hayEnCursoReal) {
          this.filtrosEstados['en_curso'] = true;
          this.filtrosEstados['proximos_viajes'] = true;
          this.filtrosEstados['finalizados_anulados'] = false;
        } else {
          this.filtrosEstados['en_curso'] = false;
          this.filtrosEstados['proximos_viajes'] = true;
          this.filtrosEstados['finalizados_anulados'] = false;
        }

        this.aplicarFiltrosCombinados();
        this.cargandoViajes = false;
      },
      error: () => (this.cargandoViajes = false),
    });
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
        this.aplicarFiltrosCombinados();
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
        this.aplicarFiltrosCombinados();
      });
  }

  /**
   * ==========================================
   * LOGICA DE NEGOCIO, FILTROS Y EVALUACIÓN
   * ==========================================
   */

  /**
   * Comprueba si hay un viaje en curso en el día actual, entre la hora de salida y llegada del viaje.
   * @param viaje
   * @returns
   */
  esViajeEnCurso(viaje: Viaje): boolean {
    if (!viaje.fecha_salida || !viaje.hora_salida || !viaje.hora_llegada) {
      return false;
    }
    const ahora = new Date();
    const fechaViaje = new Date(viaje.fecha_salida);

    const esHoy =
      ahora.getFullYear() === fechaViaje.getFullYear() &&
      ahora.getMonth() === fechaViaje.getMonth() &&
      ahora.getDate() === fechaViaje.getDate();

    if (!esHoy) return false;

    const [horaDeSalida, minutosDeSalida] = viaje.hora_salida
      .split(':')
      .map(Number);
    const [horaDeLlegada, minutosDeLlegada] = viaje.hora_llegada
      .split(':')
      .map(Number);
    const minutosAhora = ahora.getHours() * 60 + ahora.getMinutes();
    const minutosSalida = horaDeSalida * 60 + minutosDeSalida;
    const minutosLlegada = horaDeLlegada * 60 + minutosDeLlegada;

    return minutosAhora >= minutosSalida && minutosAhora <= minutosLlegada;
  }

  /**
   * Comprueba si en el universo total de viajes hay uno ocurriendo hoy y ahora
   */
  HayAlgunViajeEnCursoReal(): boolean {
    const pool = [
      ...(this.misViajesAcompanante || []),
      ...(this.misViajesCreados || []),
    ];
    return pool.some((v) => this.esViajeEnCurso(v));
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
   * Función para manejar el cambio de los toggles de estado (En curso, Próximos, Finalizados)
   */
  /**
   * Función para manejar el cambio de los toggles de estado (En curso, Próximos, Finalizados)
   */
  onFiltroChange(event: any, valorFiltro: string) {
    const checked = event.detail.checked;
    const hayEnCurso = this.HayAlgunViajeEnCursoReal();

    // --- REGLA 1: VIAJE EN CURSO (BLOQUEADO SI NO HAY VIAJES EN CURSO) ---
    if (valorFiltro === 'en_curso') {
      if (!hayEnCurso && checked) {
        // Si NO hay viaje en curso y el usuario intenta activarlo:
        // Revertimos el estado en el siguiente ciclo para forzar a Ionic a refrescar el UI
        setTimeout(() => {
          this.filtrosEstados = { ...this.filtrosEstados, en_curso: false };
          this.cdr.detectChanges();
        }, 0);
        return;
      }

      if (hayEnCurso && !checked) {
        // Si SÍ hay un viaje en curso, no dejamos que lo desactive
        setTimeout(() => {
          this.filtrosEstados = { ...this.filtrosEstados, en_curso: true };
          this.cdr.detectChanges();
        }, 0);
        return;
      }

      this.filtrosEstados['en_curso'] = hayEnCurso;
      this.aplicarFiltrosCombinados();
      return;
    }

    // --- REGLA 2: EXCLUSIVIDAD ENTRE PRÓXIMOS Y FINALIZADOS ---
    if (valorFiltro === 'proximos_viajes') {
      if (checked) {
        this.filtrosEstados['proximos_viajes'] = true;
        this.filtrosEstados['finalizados_anulados'] = false;
      } else {
        // Garantizamos que al menos uno de los dos principales esté activo
        this.filtrosEstados['proximos_viajes'] = false;
        this.filtrosEstados['finalizados_anulados'] = true;
      }
    }

    if (valorFiltro === 'finalizados_anulados') {
      if (checked) {
        this.filtrosEstados['finalizados_anulados'] = true;
        this.filtrosEstados['proximos_viajes'] = false;
      } else {
        this.filtrosEstados['finalizados_anulados'] = false;
        this.filtrosEstados['proximos_viajes'] = true;
      }
    }

    // Clonamos el objeto para forzar la detección de cambios de Angular
    this.filtrosEstados = { ...this.filtrosEstados };
    this.aplicarFiltrosCombinados();
  }

  aplicarFiltrosCombinados() {
    const filtroPasajero = this.misViajesAcompanante || [];
    const filtroConductor = this.misViajesCreados || [];
    const filtroSolicitudesPendientes = this.misSolicitudesPendientes || [];
    let viajesBase: Viaje[] = [];

    const poolTotalViajes = [...filtroPasajero, ...filtroConductor];
    poolTotalViajes.forEach((v) => ((v as any).enCursoReal = false));

    // 1. Filtrar por tipo (Todos, Pasajero, Conductor, Solicitudes)
    switch (this.filtroViajes) {
      case 'todos':
        viajesBase = [...filtroPasajero, ...filtroConductor];
        this.conductor = false;
        this.pasajero = false;
        this.solicitudesPendientes = false;
        break;

      case 'pasajero':
        viajesBase = [...filtroPasajero];
        this.conductor = false;
        this.solicitudesPendientes = false;
        this.pasajero = true;
        break;

      case 'conductor':
        viajesBase = [...filtroConductor];
        this.conductor = true;
        this.solicitudesPendientes = false;
        this.pasajero = false;
        break;

      case 'solicitudes':
        viajesBase = [...filtroSolicitudesPendientes];
        this.conductor = false;
        this.pasajero = false;
        this.solicitudesPendientes = true;
        break;

      default:
        viajesBase = [];
        break;
    }

    // 2. Filtrar por estado (En Curso, Próximos, Finalizados/Anulados)
    const { en_curso, proximos_viajes, finalizados_anulados } =
      this.filtrosEstados;

    if (en_curso || proximos_viajes || finalizados_anulados) {
      viajesBase = viajesBase.filter((v) => {
        const esEnCurso =
          this.esViajeEnCurso(v) || v.estado_viaje === 'En Curso';

        if (en_curso && esEnCurso) {
          return true;
        }

        if (proximos_viajes && !esEnCurso && v.estado_viaje === 'Próximo') {
          return true;
        }

        if (
          finalizados_anulados &&
          !esEnCurso &&
          (v.estado_viaje === 'Finalizado' || v.estado_viaje === 'Cancelado')
        ) {
          return true;
        }

        return false;
      });
    }

    // 3. Anclar viajes en curso al principio
    const viajesParaAnclar = poolTotalViajes.filter((v) =>
      this.esViajeEnCurso(v),
    );

    if (viajesParaAnclar.length > 0) {
      viajesParaAnclar.forEach((v) => ((v as any).enCursoReal = true));
    }

    viajesParaAnclar.forEach((viajeAnclado) => {
      viajesBase = viajesBase.filter((v) => v.id !== viajeAnclado.id);
      viajesBase.unshift(viajeAnclado);
    });

    this.misViajes = viajesBase;
    this.cdr.detectChanges();
  }

  /**
   * ==========================================
   * NAVEGACIÓN Y AJUSTES VISUALES
   * ==========================================
   */

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
}
