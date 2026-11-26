import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable, catchError, of, Subscription, Subject, timer } from 'rxjs';
import { debounceTime, exhaustMap, finalize, shareReplay, tap, takeUntil } from 'rxjs/operators';
import { NavController, IonHeader, IonContent, IonSegment, IonSegmentButton, IonLabel, IonToggle } from '@ionic/angular/standalone';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { TarjetaViajeComponent } from 'src/app/components/tarjeta-viaje/tarjeta-viaje.component';
import { Viaje } from '../../models/travel/viaje.model';
import { Usuario } from '../../models/user/usuario.model';
import { FuncionesComunes } from '../../core/funciones-comunes/funciones-comunes.service';
import { UserServicesService } from '../../core/user-services/user-services.service';
import { TravelService } from '../../core/travel-services/travel.service';


@Component({
  selector: 'app-mis-viajes',
  templateUrl: './mis-viajes.page.html',
  styleUrls: ['./mis-viajes.page.scss'],
  standalone: true,
  imports: [
    IonToggle,
    IonLabel,
    IonSegment,
    IonSegmentButton,
    IonContent,
    IonHeader,
    FormsModule,
    NavbarComponent,
    JumbotronComponent,
    SpinnerComponent,
    ToastModule,
    TranslateModule,
    TarjetaViajeComponent,
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
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

  // Datos de Viajes
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

  // Control de interfaz
  mostrarAyuda: boolean = false;
  cargandoViajes: boolean = true;
  mostrarJumbotron = true;

  private subs = new Subscription();
  private userIdActual: number | null = null;
  private primeraCargaIniciada = false;
  private peticionViajesEnCurso$: Observable<any> | null = null;
  private recargaSolicitada$ = new Subject<void>();
  private detenerPolling$ = new Subject<void>();
  private ultimaFirmaDatos: string = '';

  constructor(
    public funcionesComunes: FuncionesComunes,
    private navCtrl: NavController,
    private userService: UserServicesService,
    private travelService: TravelService,
    private route: ActivatedRoute,
    public translate: TranslateService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.subs.add(
      this.recargaSolicitada$
        .pipe(
          debounceTime(300),
          exhaustMap(() => {
            if (!this.userIdActual) return of(null);
            return this.ejecutarCargaViajes$(this.userIdActual);
          })
        )
        .subscribe()
    );

    this.subs.add(
      this.route.queryParams.subscribe((params) => {
        this.usuarioParams = params;
        let finalUserId: number | null = null;

        const cache = localStorage.getItem('userData');
        if (cache) {
          this.userData = JSON.parse(cache);
          this.userLoggedIn = true;

          const cachedId = this.userData.id || (this.userData.usuario ? this.userData.usuario.id : null);
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
          const cambioDeUsuario = this.userIdActual !== finalUserId;
          this.userIdActual = finalUserId;

          if (!this.primeraCargaIniciada || cambioDeUsuario) {
            this.primeraCargaIniciada = true;
            this.cargarTodosLosViajes(finalUserId);
            this.recuperarUsuarioServidor(finalUserId, !!cache);
          }
        } else {
          console.warn('No se detectó un ID de usuario válido en la inicialización.');
          this.cargandoViajes = false;
        }
      })
    );

    this.subs.add(
      this.travelService.viajesActualizados$.subscribe(() => {
        if (this.userIdActual) {
          this.recargaSolicitada$.next();
        }
      })
    );
  }

  ionViewWillEnter() {
    if (this.userIdActual) {
      if (this.primeraCargaIniciada && !this.peticionViajesEnCurso$) {
        this.recargaSolicitada$.next();
      }
      this.iniciarPollingSilencioso();
    }
  }

  ionViewWillLeave() {
    this.detenerPolling$.next();
  }

  recargarDesdeHijo() {
    if (this.userIdActual) {
      this.recargaSolicitada$.next();
    }
  }

  ngOnDestroy() {
    this.detenerPolling$.next();
    this.detenerPolling$.complete();
    this.subs.unsubscribe();
  }

  /**
   * Comprueba cambios cada 8 segundos en segundo plano sin mostrar el spinner
   * y actualiza la vista solo si hay cambios reales en viajes o solicitudes.
   */
  private iniciarPollingSilencioso() {
    this.detenerPolling$.next();

    timer(8000, 8000)
      .pipe(
        takeUntil(this.detenerPolling$),
        exhaustMap(() => {
          if (!this.userIdActual || document.hidden) {
            return of(null);
          }
          return this.ejecutarCargaViajes$(this.userIdActual, true);
        })
      )
      .subscribe();
  }

  /**
   * Función que recupera los datos del usuario desde el servidor y actualiza la información local.
   * Si el usuario ya tiene datos en caché, no recarga los viajes automáticamente.
   * 
   * @param userId Recibe el ID del usuario para recuperar sus datos desde el servidor.
   * @param tieneCache recibe un booleano que indica si el usuario ya tiene datos en caché.
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
   * Función que ejecuta la carga de viajes del usuario, evitando múltiples peticiones simultáneas.
   * Si ya hay una petición en curso, devuelve el observable existente.
   * 
   * @param userId Recibe el ID del usuario para cargar sus viajes.
   * @returns Devuelve un observable que emite los viajes del usuario.
   */
  private ejecutarCargaViajes$(userId: number, silencioso: boolean = false): Observable<any> {
    if (this.peticionViajesEnCurso$) {
      return this.peticionViajesEnCurso$;
    }

    if (!silencioso) {
      this.cargandoViajes = true;
      this.cdr.detectChanges();
    }

    this.peticionViajesEnCurso$ = forkJoin({
      pasajero: this.travelService.getViajesComoAcompanante(userId).pipe(catchError(() => of([]))),
      conductor: this.travelService.getViajesUsuario(userId).pipe(catchError(() => of({ viajes: [] }))),
      solicitudes: this.travelService.getMisSolicitudesPendientes(userId).pipe(catchError(() => of([]))),
    }).pipe(
      tap(({ pasajero, conductor, solicitudes }) => {
        const nuevosAcompanante = pasajero || [];
        const nuevosCreados = conductor?.viajes || [];
        const nuevasSolicitudes = solicitudes || [];

        const nuevaFirma = JSON.stringify({
          a: nuevosAcompanante.map((v: any) => `${v.id}-${v.estado_viaje}-${v.estado_solicitud_propia}-${v.acompanantes?.length || 0}`),
          c: nuevosCreados.map((v: any) => `${v.id}-${v.estado_viaje}-${v.solicitudes_pendientes?.length || 0}-${v.acompanantes?.length || 0}`),
          s: nuevasSolicitudes.map((v: any) => `${v.id}-${v.estado_solicitud_propia}`),
        });

        if (!silencioso || nuevaFirma !== this.ultimaFirmaDatos) {
          this.ultimaFirmaDatos = nuevaFirma;
          this.misViajesAcompanante = nuevosAcompanante;
          this.misViajesCreados = nuevosCreados;
          this.misViajesCreados.forEach((v) => (v.usuario = this.userData));
          this.misSolicitudesPendientes = nuevasSolicitudes;

          this.filtrosEstados['en_curso'] = this.HayAlgunViajeEnCursoReal();
          this.aplicarFiltrosCombinados();
        }
      }),
      finalize(() => {
        this.peticionViajesEnCurso$ = null;
        if (!silencioso) {
          this.cargandoViajes = false;
          this.cdr.detectChanges();
        }
      }),
      shareReplay(1)
    );

    return this.peticionViajesEnCurso$;
  }
  /**
   * Función que inicia la carga de todos los viajes del usuario.
   * 
   * @param userId 
   */
  cargarTodosLosViajes(userId: number) {
    this.ejecutarCargaViajes$(userId).subscribe();
  }

  /**
   * Función que obtiene los datos del usuario desde el servicio y actualiza las preferencias de viaje.
   * 
   * @param id_usuario 
   */
  obtenerUsuarioPorID(id_usuario: number) {
    this.userService.obtenerUsuarioPorID(id_usuario).subscribe((resultadoUsuario) => {
      this.userData = resultadoUsuario;
      this.preferenciasViaje = this.funcionesComunes.validacionPreferencias(this.userData);
    });
  }

  /**
   * Función que obtiene los datos del usuario desde el servicio y devuelve un observable.
   * 
   * @param id_usuario 
   * @returns 
   */
  obtenerUsuario(id_usuario: number): Observable<Usuario> {
    return this.userService.obtenerUsuarioPorID(id_usuario);
  }

  /**
   * Función que obtiene los viajes creados por el usuario y actualiza la lista de viajes.
   * Además, asigna el usuario a cada viaje y aplica los filtros combinados.
   */
  obtenerViajesCreados() {
    this.travelService.getViajesUsuario(this.userData.usuario.id).subscribe((result) => {
      this.misViajesCreados = result.viajes;
      this.misViajesCreados.forEach((viaje) => {
        viaje.usuario = this.userData;
      });
      this.aplicarFiltrosCombinados();
    });
  }

  /**
   * Función que obtiene los viajes en los que el usuario es acompañante y actualiza la lista de viajes.
   * Además, aplica los filtros combinados.
   */
  obtenerViajesComoAcompanante() {
    this.cargandoViajes = true;
    this.travelService.getViajesComoAcompanante(this.userData.usuario.id).subscribe((result) => {
      this.misViajesAcompanante = result;
      this.cargandoViajes = false;
      this.aplicarFiltrosCombinados();
    });
  }

  /**
   * Función que determina si un viaje está en curso según la fecha y hora actual.
   * 
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

    const [horaDeSalida, minutosDeSalida] = viaje.hora_salida.split(':').map(Number);
    const [horaDeLlegada, minutosDeLlegada] = viaje.hora_llegada.split(':').map(Number);
    const minutosAhora = ahora.getHours() * 60 + ahora.getMinutes();
    const minutosSalida = horaDeSalida * 60 + minutosDeSalida;
    const minutosLlegada = horaDeLlegada * 60 + minutosDeLlegada;

    return minutosAhora >= minutosSalida && minutosAhora <= minutosLlegada;
  }

  /**
   * Función que determina si hay algún viaje en curso.
   * @returns 
   */
  HayAlgunViajeEnCursoReal(): boolean {
    const pool = [...(this.misViajesAcompanante || []), ...(this.misViajesCreados || [])];
    return pool.some((v) => this.esViajeEnCurso(v));
  }

  /**
   * Función que determina si el usuario puede puntuar un viaje.
   * 
   * @param viaje 
   * @returns 
   */
  puedePuntuar(viaje: Viaje): boolean {
    const esFinalizado = this.funcionesComunes.esViajeFinalizado(viaje.fecha_salida, viaje.hora_salida);
    const esPasajero = this.misViajesAcompanante.some((v) => v.id === viaje.id);
    const esCreador = viaje.usuario_id === this.userData.id;

    return esFinalizado && esPasajero && !esCreador;
  }

  /**
   * Función que maneja el cambio de estado de los filtros de viaje y aplica los filtros combinados.
   * 
   * @param event 
   * @param valorFiltro 
   * @returns 
   */
  onFiltroChange(event: any, valorFiltro: string) {
    const checked = event.detail.checked;
    const hayEnCurso = this.HayAlgunViajeEnCursoReal();

    if (valorFiltro === 'en_curso') {
      if (!hayEnCurso && checked) {
        setTimeout(() => {
          this.filtrosEstados = { ...this.filtrosEstados, en_curso: false };
          this.cdr.detectChanges();
        }, 0);
        return;
      }

      if (hayEnCurso && !checked) {
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

    if (valorFiltro === 'proximos_viajes') {
      if (checked) {
        this.filtrosEstados['proximos_viajes'] = true;
        this.filtrosEstados['finalizados_anulados'] = false;
      } else {
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

    this.filtrosEstados = { ...this.filtrosEstados };
    this.aplicarFiltrosCombinados();
  }

  aplicarFiltrosCombinados() {
    const filtroPasajero = this.misViajesAcompanante || [];
    const filtroConductor = this.misViajesCreados || [];
    const filtroSolicitudesPendientes = this.misSolicitudesPendientes || [];
    let viajesBase: Viaje[] = [];

    if (this.filtroViajes === 'solicitudes') {
      this.conductor = false;
      this.pasajero = false;
      this.solicitudesPendientes = true;
      this.misViajes = [...filtroSolicitudesPendientes];
      this.cdr.detectChanges();
      return;
    }

    const poolTotalViajes = [...filtroPasajero, ...filtroConductor];
    poolTotalViajes.forEach((v) => ((v as any).enCursoReal = false));

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

      default:
        viajesBase = [];
        break;
    }

    const { en_curso, proximos_viajes, finalizados_anulados } = this.filtrosEstados;

    if (en_curso || proximos_viajes || finalizados_anulados) {
      viajesBase = viajesBase.filter((v) => {
        const esEnCurso = this.esViajeEnCurso(v) || v.estado_viaje === 'En Curso';

        if (en_curso && esEnCurso) {
          return true;
        }

        if (proximos_viajes && !esEnCurso && v.estado_viaje === 'Próximo') {
          return true;
        }

        if (finalizados_anulados && !esEnCurso && (v.estado_viaje === 'Finalizado' || v.estado_viaje === 'Cancelado')) {
          return true;
        }

        return false;
      });
    }

    const viajesParaAnclar = poolTotalViajes.filter((v) => this.esViajeEnCurso(v));

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

  toggleAyuda() {
    this.mostrarAyuda = !this.mostrarAyuda;
  }

  goToBuscarViaje() {
    this.navCtrl.navigateRoot('/busqueda-viajes');
  }

  goToNuevoViaje() {
    this.navCtrl.navigateRoot('/nuevo-viaje');
  }
}