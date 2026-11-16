import {
  SpinnerComponent
} from "./chunk-AZFY3OZL.js";
import {
  NavbarComponent
} from "./chunk-YAGW6LPY.js";
import "./chunk-N25HX3QD.js";
import {
  NotificacionesService
} from "./chunk-TGPQDEZS.js";
import "./chunk-BLKEDZE4.js";
import {
  HelpModalComponent
} from "./chunk-N7S2XU3X.js";
import "./chunk-G5UZDB7B.js";
import "./chunk-WDE6N5F6.js";
import {
  UserServicesService
} from "./chunk-34RASOLQ.js";
import "./chunk-ULIFZXTE.js";
import "./chunk-WBBLYEAR.js";
import {
  MatDialog
} from "./chunk-LLKVXR72.js";
import {
  MatIcon
} from "./chunk-Z2EGICVD.js";
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonicModule
} from "./chunk-XTRPVKSN.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-PWPN4F54.js";
import {
  CommonModule,
  DatePipe,
  FormsModule,
  Router
} from "./chunk-DD4MNYDA.js";
import {
  ChangeDetectorRef,
  Component,
  Subject,
  setClassMetadata,
  switchMap,
  takeUntil,
  timer,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YUKRBYLH.js";
import "./chunk-NEFVXLXQ.js";
import "./chunk-UGUZQALC.js";
import "./chunk-4JA4ETJA.js";
import "./chunk-RI33YQSB.js";
import "./chunk-7NBG2LBA.js";
import "./chunk-MOKADOCG.js";
import "./chunk-4UX5YYJM.js";
import "./chunk-7WJRAT5Y.js";
import "./chunk-XSENUJ4A.js";
import "./chunk-K6BOSGGR.js";
import "./chunk-HM6RSKJQ.js";
import "./chunk-QU22HLHJ.js";
import "./chunk-HMGJJ2JN.js";
import "./chunk-GV4SC633.js";
import "./chunk-XEOOW4LE.js";
import "./chunk-TNIKZTJG.js";
import "./chunk-QD6KASZP.js";
import "./chunk-ZO2Q2TV5.js";
import "./chunk-NZ2QYBMG.js";
import "./chunk-5MFCCRYD.js";
import "./chunk-LYPF3I3J.js";
import "./chunk-PHWUJLET.js";
import "./chunk-ZBCCTIRL.js";
import "./chunk-KLZ5YPL6.js";
import "./chunk-SWNU2J3M.js";
import "./chunk-FUL4CNB6.js";
import "./chunk-AIOHWISL.js";
import "./chunk-FPPEK4XH.js";
import "./chunk-MEOWV5C6.js";
import "./chunk-DI3VEDFV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-5SZB5ECT.js";

// src/app/pages/centro-notificaciones/centro-notificaciones.page.ts
function CentroNotificacionesPage_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function CentroNotificacionesPage_Conditional_8_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.marcarTodasComoLeidas());
    });
    \u0275\u0275elementStart(1, "mat-icon", 15);
    \u0275\u0275text(2, " done_all ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "NOTIFICACIONES.ACCIONES.MARCAR_TODAS_LEIDAS"));
  }
}
function CentroNotificacionesPage_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275conditionalCreate(1, CentroNotificacionesPage_Conditional_8_Conditional_1_Template, 6, 3, "button", 13);
    \u0275\u0275elementStart(2, "button", 14);
    \u0275\u0275listener("click", function CentroNotificacionesPage_Conditional_8_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.borrarTodas());
    });
    \u0275\u0275elementStart(3, "mat-icon", 15);
    \u0275\u0275text(4, " delete_sweep ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 16);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.haySinLeer ? 1 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 2, "NOTIFICACIONES.LIMPIAR_TODO"));
  }
}
function CentroNotificacionesPage_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "app-spinner");
    \u0275\u0275elementEnd();
  }
}
function CentroNotificacionesPage_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "NOTIFICACIONES.SIN_NOTIFICACIONES"));
  }
}
function CentroNotificacionesPage_For_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 20);
  }
}
function CentroNotificacionesPage_For_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 21);
  }
}
function CentroNotificacionesPage_For_13_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "NOTIFICACIONES.ESTADO.NO_LEIDA"));
  }
}
function CentroNotificacionesPage_For_13_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "button", 35);
    \u0275\u0275listener("click", function CentroNotificacionesPage_For_13_Conditional_16_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const n_r5 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(n_r5.expandido = !n_r5.expandido);
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const n_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, n_r5.expandido ? "NOTIFICACIONES.ACCIONES.LEER_MENOS" : "NOTIFICACIONES.ACCIONES.LEER_MAS"), " ");
  }
}
function CentroNotificacionesPage_For_13_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function CentroNotificacionesPage_For_13_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const n_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.irAlChat(n_r5));
    });
    \u0275\u0275element(1, "i", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "NOTIFICACIONES.ACCIONES.RESPONDER"), " ");
  }
}
function CentroNotificacionesPage_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275conditionalCreate(2, CentroNotificacionesPage_For_13_Conditional_2_Template, 1, 0, "i", 20);
    \u0275\u0275conditionalCreate(3, CentroNotificacionesPage_For_13_Conditional_3_Template, 1, 0, "i", 21);
    \u0275\u0275elementStart(4, "div", 22)(5, "div", 23)(6, "span", 24);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 25);
    \u0275\u0275conditionalCreate(10, CentroNotificacionesPage_For_13_Conditional_10_Template, 3, 3, "div", 26);
    \u0275\u0275elementStart(11, "button", 27);
    \u0275\u0275listener("click", function CentroNotificacionesPage_For_13_Template_button_click_11_listener() {
      const n_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.borrarUna(n_r5.id));
    });
    \u0275\u0275elementStart(12, "mat-icon", 28);
    \u0275\u0275text(13, "delete_outline");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "p", 29);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, CentroNotificacionesPage_For_13_Conditional_16_Template, 4, 3, "div", 30);
    \u0275\u0275elementStart(17, "div", 31);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 32)(21, "button", 33);
    \u0275\u0275listener("click", function CentroNotificacionesPage_For_13_Template_button_click_21_listener() {
      const n_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleLeida(n_r5));
    });
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(24, CentroNotificacionesPage_For_13_Conditional_24_Template, 4, 3, "button", 34);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const n_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("resaltado", n_r5.id === ctx_r2.idResaltado)("notificacion-no-leida", !n_r5.leida)("notificacion-mensaje", n_r5.tipo === "mensaje");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(n_r5.tipo === "mensaje" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(n_r5.tipo !== "mensaje" ? 3 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 17, n_r5.tipo ? "NOTIFICACIONES.TIPO." + n_r5.tipo.toUpperCase() : "NOTIFICACIONES.TIPO.SISTEMA"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!n_r5.leida ? 10 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("expandido", n_r5.expandido);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", n_r5.mensaje, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(n_r5.mensaje.length > 90 ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 19, n_r5.fecha, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 22, n_r5.leida ? "NOTIFICACIONES.ACCIONES.MARCAR_NO_LEIDA" : "NOTIFICACIONES.ACCIONES.MARCAR_LEIDA"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(n_r5.tipo === "mensaje" && n_r5.conversacion_id ? 24 : -1);
  }
}
var CentroNotificacionesPage = class _CentroNotificacionesPage {
  notificationService;
  userService;
  router;
  dialog;
  cdr;
  usuario;
  userData = {};
  userLoggedIn = false;
  iconoAjustes = "../../../assets/sistema/ajustes.png";
  notificaciones = [];
  mostrarSpinner = false;
  idResaltado = null;
  destroy$ = new Subject();
  constructor(notificationService, userService, router, dialog, cdr) {
    this.notificationService = notificationService;
    this.userService = userService;
    this.router = router;
    this.dialog = dialog;
    this.cdr = cdr;
  }
  ngOnInit() {
    var _a, _b;
    this.idResaltado = this.notificationService.idNotificacionResaltada;
    this.loadUserData();
    this.userLoggedIn = !!(this.userData && this.userData.usuario && this.userData.usuario.email);
    if ((_b = (_a = this.userData) == null ? void 0 : _a.usuario) == null ? void 0 : _b.id) {
      this.iniciarEscuchaActiva(this.userData.usuario.id);
    }
    this.notificationService.clearToasts();
    if (this.idResaltado) {
      setTimeout(() => {
        this.idResaltado = null;
        this.notificationService.idNotificacionResaltada = null;
      }, 3e3);
    }
  }
  /**
   * Función para iniciar la escucha activa de notificaciones mediante polling.
   * Se utiliza un timer que emite cada 5 segundos para realizar una petición al backend
   * y obtener las notificaciones actualizadas del usuario.
   * La función takeUntil(this.destroy$) se utiliza para cancelar el polling
   *  automáticamente cuando el componente se destruye, evitando así fugas de memoria.
   * Si hay cambios en la lista de notificaciones (nueva notificación o cambio en el estado de lectura),
   * se actualiza la interfaz con las nuevas notificaciones.
   *
   * @param usuarioId --> ID del usuario para el cual se quieren obtener las notificaciones.
   */
  iniciarEscuchaActiva(usuarioId) {
    this.mostrarSpinner = this.notificaciones.length === 0;
    timer(0, 5e3).pipe(takeUntil(this.destroy$), switchMap(() => this.notificationService.obtenerNotificaciones(usuarioId))).subscribe({
      next: (notificaciones) => {
        this.mostrarSpinner = false;
        if (this.haHabidoCambios(notificaciones)) {
          const mapeadas = notificaciones.map((n) => __spreadProps(__spreadValues({}, n), {
            expandido: n.expandido || false
          }));
          this.notificaciones = mapeadas.sort((a, b) => Number(a.leida) - Number(b.leida));
          this.cdr.detectChanges();
          if (this.notificaciones.length > 0) {
            this.notificationService.notificacionPendiente = this.notificaciones[0].mensaje;
          }
        }
      },
      error: (err) => {
        this.mostrarSpinner = false;
        console.error("Error en el polling de notificaciones", err);
      }
    });
  }
  /**
   * Función para verificar si ha habido cambios en la lista de notificaciones.
   * Compara la nueva lista de notificaciones con la lista actual para determinar si ha habido cambios significativos.
   * Se considera que ha habido cambios si la longitud de las listas es diferente o si el número de notificaciones sin leer ha cambiado.
   *
   * @param nuevas --> Nueva lista de notificaciones obtenida del backend.
   */
  haHabidoCambios(nuevas) {
    if (nuevas.length !== this.notificaciones.length)
      return true;
    const countSinLeerActual = this.notificaciones.filter((n) => !n.leida).length;
    const countSinLeerNueva = nuevas.filter((n) => !n.leida).length;
    return countSinLeerActual !== countSinLeerNueva;
  }
  /**
   * Función para obtener todas las notificaciones del usuario que ha iniciadio sesión.
   *
   * @param usuarioId
   */
  obtenerNotificaciones(usuarioId) {
    this.mostrarSpinner = true;
    this.notificationService.obtenerNotificaciones(usuarioId).subscribe({
      next: (notificaciones) => {
        this.mostrarSpinner = false;
        if (notificaciones && notificaciones.length) {
          const mapeadas = notificaciones.map((n) => __spreadProps(__spreadValues({}, n), { expandido: false }));
          this.notificaciones = mapeadas.sort((a, b) => Number(a.leida) - Number(b.leida));
          this.notificationService.notificacionPendiente = notificaciones[0].mensaje;
          this.notificationService.esCreadorDelViaje = true;
          this.notificationService.leerNotificacion(notificaciones);
        }
      },
      error: (err) => {
        this.mostrarSpinner = false;
        console.error("Error al obtener notificaciones", err);
      }
    });
  }
  /**
   * Función para cargar los datos del usuario desde el localStorage.
   */
  loadUserData() {
    this.userData = JSON.parse(localStorage.getItem("userData") || "{}");
  }
  /**
   * Función para alternar el estado de una notificación entre leída y no leída.
   * Se actualiza el estado de la notificación en la interfaz y se envía la actualización al backend.
   * Si ocurre un error al actualizar el estado, se muestra un mensaje de error en la consola.
   *
   * @param notificacion --> Notificación cuyo estado se quiere alternar entre leída y no leída.
   */
  toggleLeida(notificacion) {
    const nuevoEstado = !notificacion.leida;
    notificacion.leida = !notificacion.leida;
    this.notificationService.toggleEstadoNotificacion(notificacion.id, nuevoEstado).subscribe({
      next: () => {
        notificacion.leida = nuevoEstado;
        this.cdr.detectChanges();
      },
      error: () => {
        console.error("No se pudo actualizar el estado de la notificaci\xF3n");
      }
    });
  }
  /**
   * Función para verificar si hay notificaciones sin leer.
   * Devuelve true si al menos una notificación no ha sido leída,
   * y false si todas las notificaciones están marcadas como leídas.
   *
   */
  get haySinLeer() {
    return this.notificaciones.some((n) => !n.leida);
  }
  /**
   * Función para marcar todas las notificaciones del usuario como leídas.
   * Se actualiza el estado de cada notificación en la interfaz y
   * se muestra un mensaje de confirmación al usuario.
   *
   */
  marcarTodasComoLeidas() {
    const usuarioId = this.userData.usuario.id;
    this.notificationService.marcarTodasComoLeidas(usuarioId).subscribe({
      next: () => {
        this.notificaciones.forEach((n) => n.leida = true);
        this.notificaciones.sort((a, b) => Number(a.leida) - Number(b.leida));
        this.cdr.detectChanges();
        this.notificationService.mostrarToast({
          id: Date.now(),
          type: "success",
          mensaje: "Todas las notificaciones marcadas como le\xEDdas",
          leida: false
        });
      },
      error: (err) => console.error("Error al marcar todas como le\xEDdas", err)
    });
  }
  /**
   * Función para navegar a la página de ajustes en la sección de notificaciones.
   */
  goToSettings() {
    this.router.navigate(["/ajustes-aplicacion"], { fragment: "notificaciones-section" });
  }
  /**
   * Función para navegar a la página de chat relacionada con una notificación específica.
   * @param n --> Notificación para la cual se quiere ir al chat.
   * Si la notificación no ha sido leída, se marca como leída antes de navegar.
   * Se navega a la ruta de chat pasando el ID de la conversación asociado a la notificación.
   *
   */
  irAlChat(n) {
    if (!n.leida) {
      this.toggleLeida(n);
    }
    this.router.navigate(["/chat", n.conversacion_id]);
  }
  /**
   * Función para eliminar todas las notificaciones del usuario. Se muestra un mensaje de confirmación antes de proceder a eliminar.
   * Solo se muestra el botón de eliminar todo si hay notificaciones en la lista.
   */
  borrarTodas() {
    const usuarioId = this.userData.usuario.id;
    const titulo = "Vas a eliminar todas tus notificaciones";
    const mensaje = 'Esta acci\xF3n no se puede deshacer. Se eliminar\xE1n todas tus notificaciones y no podr\xE1s recuperarlas. Si est\xE1s seguro de que quieres continuar, haz clic en "Aceptar".';
    const dialogRef = this.dialog.open(HelpModalComponent, {
      data: { title: titulo, message: mensaje, showAcceptButton: true },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((confirmar) => {
      if (confirmar) {
        this.notificationService.eliminarTodasNotificaciones(usuarioId).subscribe({
          next: () => {
            this.notificaciones = [];
            this.cdr.detectChanges();
            this.notificationService.mostrarToast({
              id: Date.now(),
              type: "success",
              mensaje: "Se han eliminado todas las notificaciones",
              leida: false
            });
          },
          error: (err) => console.error("Error al limpiar historial:", err)
        });
      }
    });
  }
  /**
   * Función para eliminar una sola notificación por su ID.
   * @param id --> ID de la notificación a eliminar.
   */
  borrarUna(id) {
    this.notificationService.eliminarNotificacion(id).subscribe({
      next: () => {
        this.notificaciones = this.notificaciones.filter((notificacion) => notificacion.id !== id);
        this.cdr.detectChanges();
        this.notificationService.mostrarToast({
          id: Date.now(),
          type: "success",
          mensaje: "Se ha eliminado la notificaci\xF3n",
          leida: false
        });
      }
    });
  }
  /**
   * Función que se ejecuta al destruir el componente. Se utiliza para limpiar los recursos y evitar fugas de memoria.
   * Se emite un valor en el Subject destroy$ para indicar que el componente se está destruyendo,
   * lo que hace que cualquier suscripción que utilice takeUntil(this.destroy$) se complete automáticamente.
   * Luego se completa el Subject destroy$ para liberar los recursos asociados.
   */
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static \u0275fac = function CentroNotificacionesPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CentroNotificacionesPage)(\u0275\u0275directiveInject(NotificacionesService), \u0275\u0275directiveInject(UserServicesService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CentroNotificacionesPage, selectors: [["app-centro-notificaciones"]], decls: 17, vars: 11, consts: [[3, "backRoute", "searchRoute", "isLoggedIn"], [3, "fullscreen"], [1, "container-fluid"], [1, "d-flex", "text", "center", "justify-content-center"], [1, "d-flex", "justify-content-end", "align-items-center", "mt-3", "px-3"], [1, "d-flex", "gap-2"], [1, "lista_notificaciones", "px-2"], [1, "text-center", "p-3"], [1, "text-center", "mt-4"], [1, "notificacion_container", "notificacion-item", "p-3", "mb-2", "mt-3", 3, "resaltado", "notificacion-no-leida", "notificacion-mensaje"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 1, "fab-ajustes"], ["aria-label", "Ajustes", 3, "click"], ["alt", "Ajustes", 2, "width", "24px", "height", "24px", 3, "src"], [1, "btn", "btn-outline-secondary", "d-flex", "align-items-center"], [1, "btn", "btn_bg", "d-flex", "align-items-center", 3, "click"], [1, "me-1", 2, "font-size", "18px", "width", "18px", "height", "18px"], [1, "d-none", "d-sm-inline"], [1, "btn", "btn-outline-secondary", "d-flex", "align-items-center", 3, "click"], [1, "notificacion_container", "notificacion-item", "p-3", "mb-2", "mt-3"], [1, "d-flex", "align-items-start"], [1, "fi", "fi-rr-messages", "me-3", "mt-1"], [1, "fi", "fi-rr-bell-notification-social-media", "me-3", "mt-1"], [1, "flex-grow-1"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "tipo-texto", "small", "fw-bold", "text-uppercase"], [1, "d-flex", "align-items-center", "gap-2"], [1, "badge", "bg-danger"], ["title", "Eliminar", 1, "btn", "btn-link", "text-muted", "p-0", "d-flex", "align-items-center", "justify-content-center", 2, "width", "24px", "height", "24px", "text-decoration", "none", 3, "click"], [2, "font-size", "20px", "width", "20px", "height", "20px"], [1, "mb-1", "mt-1", "text-dark", "cuerpo-mensaje"], [1, "d-md-none"], [1, "text-muted", "extra-small"], [1, "d-flex", "gap-2", "mt-2"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "btn", "btn-sm", "btn_bg"], [1, "btn", "btn-link", "btn-sm", "p-0", "text-decoration-none", "fw-bold", "text-primary", 3, "click"], [1, "btn", "btn-sm", "btn_bg", 3, "click"], [1, "fi", "fi-rr-messages", "me-1"]], template: function CentroNotificacionesPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar", 0);
      \u0275\u0275elementStart(1, "ion-content", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275conditionalCreate(8, CentroNotificacionesPage_Conditional_8_Template, 8, 4, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275conditionalCreate(10, CentroNotificacionesPage_Conditional_10_Template, 2, 0, "div", 7);
      \u0275\u0275conditionalCreate(11, CentroNotificacionesPage_Conditional_11_Template, 3, 3, "div", 8);
      \u0275\u0275repeaterCreate(12, CentroNotificacionesPage_For_13_Template, 25, 24, "div", 9, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "ion-fab", 10)(15, "ion-fab-button", 11);
      \u0275\u0275listener("click", function CentroNotificacionesPage_Template_ion_fab_button_click_15_listener() {
        return ctx.goToSettings();
      });
      \u0275\u0275element(16, "img", 12);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("backRoute", "/home")("searchRoute", "search")("isLoggedIn", ctx.userLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "NOTIFICACIONES.TITULO"));
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.notificaciones.length > 0 ? 8 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.mostrarSpinner ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.notificaciones.length === 0 && !ctx.mostrarSpinner ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.notificaciones);
      \u0275\u0275advance(4);
      \u0275\u0275property("src", ctx.iconoAjustes, \u0275\u0275sanitizeUrl);
    }
  }, dependencies: [CommonModule, FormsModule, NavbarComponent, IonicModule, IonContent, IonFab, IonFabButton, SpinnerComponent, MatIcon, TranslateModule, DatePipe, TranslatePipe], styles: ["\n.notificacion-no-leida[_ngcontent-%COMP%] {\n  background-color: #ffefef;\n  border-left: 5px solid #ef4444;\n}\n.notificacion-item[_ngcontent-%COMP%] {\n  background-color: white;\n  border-left: 5px solid transparent;\n}\n.badge-danger[_ngcontent-%COMP%] {\n  border-left: 5px solid #ef4444;\n  background-color: #ffb3ba;\n  color: black;\n  font-size: 0.75rem;\n  padding: 0.2rem 0.4rem;\n  border-radius: 4px;\n}\n.bg-danger[_ngcontent-%COMP%] {\n  border-radius: 35px !important;\n}\n.notificacion_container[_ngcontent-%COMP%] {\n  width: 80%;\n  max-width: 600px;\n  margin: 0 auto;\n  padding-right: 10px;\n  border-radius: 35px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  transform-origin: center center;\n}\n.lista_notificaciones[_ngcontent-%COMP%] {\n  max-height: 600px;\n  margin: 0 auto;\n  overflow-y: auto;\n  border-radius: 15px;\n  scroll-behavior: smooth;\n}\n@keyframes _ngcontent-%COMP%_shrinkEdges {\n  0% {\n    transform: scale(0.75);\n    opacity: 0;\n  }\n  15% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  85% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.75);\n    opacity: 0;\n  }\n}\n.notificacion-leida[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  color: #888;\n}\n.fab-ajustes[_ngcontent-%COMP%] {\n  --ion-color-primary: #f0d7b4;\n  --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);\n}\n.toast-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.toast-clickable[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n.notificacion-item[_ngcontent-%COMP%] {\n  transition: background 0.3s ease, border 0.3s ease;\n  view-timeline-name: --itemTimeline;\n  view-timeline-axis: block;\n  animation: _ngcontent-%COMP%_shrinkEdges linear both;\n  animation-timeline: --itemTimeline;\n  animation-range: cover 0% cover 100%;\n  will-change: transform, opacity;\n}\n.notificacion-item[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.notificacion-item.resaltado[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fff3cd,\n      #ffecb5,\n      #fff8e1,\n      #f0d7b4) !important;\n  background-size: 300% 300% !important;\n  border: 2px solid #f0d7b4 !important;\n  box-shadow: 0 0 15px rgba(255, 193, 7, 0.5) !important;\n  transform: translateY(-2px);\n  animation: _ngcontent-%COMP%_brilloMovimiento 4s ease infinite !important;\n}\n.notificacion-no-leida[_ngcontent-%COMP%]:not(.resaltado) {\n  background-color: #ffefef !important;\n  border-left: 5px solid #ef4444;\n}\n@keyframes _ngcontent-%COMP%_brilloMovimiento {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.btn-link[_ngcontent-%COMP%]:hover {\n  color: #ffb3ba !important;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 35px !important;\n}\n.cuerpo-mensaje[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  line-height: 1.4;\n  transition: max-height 0.3s ease-out;\n}\n.cuerpo-mensaje.expandido[_ngcontent-%COMP%] {\n  -webkit-line-clamp: unset;\n  line-clamp: unset;\n}\n@media (min-width: 768px) {\n  .notificacion_container[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .cuerpo-mensaje[_ngcontent-%COMP%] {\n    -webkit-line-clamp: unset !important;\n    line-clamp: unset !important;\n  }\n}\n.extra-small[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n/*# sourceMappingURL=centro-notificaciones.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CentroNotificacionesPage, [{
    type: Component,
    args: [{ selector: "app-centro-notificaciones", standalone: true, imports: [CommonModule, FormsModule, NavbarComponent, IonicModule, SpinnerComponent, MatIcon, TranslateModule], template: `<app-navbar
  [backRoute]="'/home'"
  [searchRoute]="'search'"
  [isLoggedIn]="userLoggedIn"
></app-navbar>

<ion-content [fullscreen]="true">
  <div class="container-fluid">
    <div class="d-flex text center justify-content-center">
      <h1>{{ 'NOTIFICACIONES.TITULO' | translate }}</h1>
    </div>

    <div class="d-flex justify-content-end align-items-center mt-3 px-3">
      @if (notificaciones.length > 0) {
      <div class="d-flex gap-2">
        @if (haySinLeer) {
        <button
          class="btn btn-outline-secondary d-flex align-items-center"
          (click)="marcarTodasComoLeidas()"
        >
          <mat-icon
            class="me-1"
            style="font-size: 18px; width: 18px; height: 18px"
          >
            done_all
          </mat-icon>
          <span class="d-none d-sm-inline">{{ 'NOTIFICACIONES.ACCIONES.MARCAR_TODAS_LEIDAS' | translate }}</span>
        </button>
        }
        <button
          class="btn btn_bg d-flex align-items-center"
          (click)="borrarTodas()"
        >
          <mat-icon
            class="me-1"
            style="font-size: 18px; width: 18px; height: 18px"
          >
            delete_sweep
          </mat-icon>
          <span class="d-none d-sm-inline">{{ 'NOTIFICACIONES.LIMPIAR_TODO' | translate }}</span>
        </button>
      </div>
      }
    </div>

    <div class="lista_notificaciones px-2">
      @if (mostrarSpinner) {
      <div class="text-center p-3">
        <app-spinner></app-spinner>
      </div>
      } @if (notificaciones.length === 0 && !mostrarSpinner) {
      <div class="text-center mt-4">{{ 'NOTIFICACIONES.SIN_NOTIFICACIONES' | translate }}</div>
      } @for (n of notificaciones; track n) {
      <div
        class="notificacion_container notificacion-item p-3 mb-2 mt-3"
        [class.resaltado]="n.id === idResaltado"
        [class.notificacion-no-leida]="!n.leida"
        [class.notificacion-mensaje]="n.tipo === 'mensaje'"
      >
        <div class="d-flex align-items-start">
          @if (n.tipo === 'mensaje') {
          <i class="fi fi-rr-messages me-3 mt-1"></i>
          } @if (n.tipo !== 'mensaje') {
          <i class="fi fi-rr-bell-notification-social-media me-3 mt-1"></i>
          }
          <div class="flex-grow-1">
            <div class="d-flex justify-content-between align-items-center">
              <span class="tipo-texto small fw-bold text-uppercase">
                {{ (n.tipo ? 'NOTIFICACIONES.TIPO.' + n.tipo.toUpperCase() : 'NOTIFICACIONES.TIPO.SISTEMA') | translate }}
              </span>
              <div class="d-flex align-items-center gap-2">
                @if (!n.leida) {
                <div class="badge bg-danger">{{ 'NOTIFICACIONES.ESTADO.NO_LEIDA' | translate }}</div>
                }
                <button
                  class="btn btn-link text-muted p-0 d-flex align-items-center justify-content-center"
                  (click)="borrarUna(n.id)"
                  title="Eliminar"
                  style="width: 24px; height: 24px; text-decoration: none"
                >
                  <mat-icon style="font-size: 20px; width: 20px; height: 20px">delete_outline</mat-icon>
                </button>
              </div>
            </div>
            <p
              class="mb-1 mt-1 text-dark cuerpo-mensaje"
              [class.expandido]="n.expandido"
            >
              {{ n.mensaje }}
            </p>
            @if (n.mensaje.length > 90) {
            <div class="d-md-none">
              <button
                class="btn btn-link btn-sm p-0 text-decoration-none fw-bold text-primary"
                (click)="n.expandido = !n.expandido"
              >
                {{ (n.expandido ? 'NOTIFICACIONES.ACCIONES.LEER_MENOS' : 'NOTIFICACIONES.ACCIONES.LEER_MAS') | translate }}
              </button>
            </div>
            }
            <div class="text-muted extra-small">{{ n.fecha | date:'dd/MM/yyyy HH:mm' }}</div>
            <div class="d-flex gap-2 mt-2">
              <button
                class="btn btn-sm btn-outline-secondary"
                (click)="toggleLeida(n)"
              >
                {{ (n.leida ? 'NOTIFICACIONES.ACCIONES.MARCAR_NO_LEIDA' : 'NOTIFICACIONES.ACCIONES.MARCAR_LEIDA') | translate }}
              </button>
              @if (n.tipo === 'mensaje' && n.conversacion_id) {
              <button
                class="btn btn-sm btn_bg"
                (click)="irAlChat(n)"
              >
                <i class="fi fi-rr-messages me-1"></i>
                {{ 'NOTIFICACIONES.ACCIONES.RESPONDER' | translate }}
              </button>
              }
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  </div>
</ion-content>

<ion-fab
  vertical="bottom"
  horizontal="end"
  slot="fixed"
  class="fab-ajustes"
>
  <ion-fab-button
    (click)="goToSettings()"
    aria-label="Ajustes"
  >
    <img
      [src]="iconoAjustes"
      alt="Ajustes"
      style="width: 24px; height: 24px"
    />
  </ion-fab-button>
</ion-fab>
`, styles: ["/* src/app/pages/centro-notificaciones/centro-notificaciones.page.scss */\n.notificacion-no-leida {\n  background-color: #ffefef;\n  border-left: 5px solid #ef4444;\n}\n.notificacion-item {\n  background-color: white;\n  border-left: 5px solid transparent;\n}\n.badge-danger {\n  border-left: 5px solid #ef4444;\n  background-color: #ffb3ba;\n  color: black;\n  font-size: 0.75rem;\n  padding: 0.2rem 0.4rem;\n  border-radius: 4px;\n}\n.bg-danger {\n  border-radius: 35px !important;\n}\n.notificacion_container {\n  width: 80%;\n  max-width: 600px;\n  margin: 0 auto;\n  padding-right: 10px;\n  border-radius: 35px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  transform-origin: center center;\n}\n.lista_notificaciones {\n  max-height: 600px;\n  margin: 0 auto;\n  overflow-y: auto;\n  border-radius: 15px;\n  scroll-behavior: smooth;\n}\n@keyframes shrinkEdges {\n  0% {\n    transform: scale(0.75);\n    opacity: 0;\n  }\n  15% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  85% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.75);\n    opacity: 0;\n  }\n}\n.notificacion-leida {\n  background-color: #f5f5f5;\n  color: #888;\n}\n.fab-ajustes {\n  --ion-color-primary: #f0d7b4;\n  --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);\n}\n.toast-clickable {\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.toast-clickable:hover {\n  transform: scale(1.02);\n}\n.notificacion-item {\n  transition: background 0.3s ease, border 0.3s ease;\n  view-timeline-name: --itemTimeline;\n  view-timeline-axis: block;\n  animation: shrinkEdges linear both;\n  animation-timeline: --itemTimeline;\n  animation-range: cover 0% cover 100%;\n  will-change: transform, opacity;\n}\n.notificacion-item:hover {\n  cursor: pointer;\n}\n.notificacion-item.resaltado {\n  background:\n    linear-gradient(\n      135deg,\n      #fff3cd,\n      #ffecb5,\n      #fff8e1,\n      #f0d7b4) !important;\n  background-size: 300% 300% !important;\n  border: 2px solid #f0d7b4 !important;\n  box-shadow: 0 0 15px rgba(255, 193, 7, 0.5) !important;\n  transform: translateY(-2px);\n  animation: brilloMovimiento 4s ease infinite !important;\n}\n.notificacion-no-leida:not(.resaltado) {\n  background-color: #ffefef !important;\n  border-left: 5px solid #ef4444;\n}\n@keyframes brilloMovimiento {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.btn-link:hover {\n  color: #ffb3ba !important;\n}\n.btn {\n  border-radius: 35px !important;\n}\n.cuerpo-mensaje {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  line-height: 1.4;\n  transition: max-height 0.3s ease-out;\n}\n.cuerpo-mensaje.expandido {\n  -webkit-line-clamp: unset;\n  line-clamp: unset;\n}\n@media (min-width: 768px) {\n  .notificacion_container {\n    width: 90%;\n  }\n  .cuerpo-mensaje {\n    -webkit-line-clamp: unset !important;\n    line-clamp: unset !important;\n  }\n}\n.extra-small {\n  font-size: 0.7rem;\n}\n/*# sourceMappingURL=centro-notificaciones.page.css.map */\n"] }]
  }], () => [{ type: NotificacionesService }, { type: UserServicesService }, { type: Router }, { type: MatDialog }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CentroNotificacionesPage, { className: "CentroNotificacionesPage", filePath: "src/app/pages/centro-notificaciones/centro-notificaciones.page.ts", lineNumber: 27 });
})();
export {
  CentroNotificacionesPage
};
//# sourceMappingURL=centro-notificaciones.page-AAJFOJHY.js.map
