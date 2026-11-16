import {
  AnimationDriver,
  AnimationEngine,
  AnimationRendererFactory,
  AnimationStyleNormalizer,
  NoopAnimationDriver,
  WebAnimationsDriver,
  WebAnimationsStyleNormalizer
} from "./chunk-PYW4IWFL.js";
import {
  CookieService
} from "./chunk-ZCRZRLJ2.js";
import {
  providePrimeNG
} from "./chunk-NAZ7DCPP.js";
import {
  FuncionesComunes
} from "./chunk-JVMVG56Z.js";
import {
  NotificacionesService
} from "./chunk-FPL4PN3H.js";
import {
  IonApp,
  IonContent,
  IonFooter,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  provideIonicAngular
} from "./chunk-WO2ZSM4X.js";
import "./chunk-GYAYVE5N.js";
import "./chunk-ZTUWPCV2.js";
import {
  LanguageService
} from "./chunk-7NH46FL3.js";
import {
  MessageService
} from "./chunk-AF4L5EWO.js";
import {
  UserServicesService
} from "./chunk-YZOGC4HD.js";
import "./chunk-ZYMQAXGI.js";
import "./chunk-UIKNRIU5.js";
import "./chunk-FCE3VLZJ.js";
import "./chunk-CGCOLBWN.js";
import "./chunk-H72L7N4J.js";
import {
  MenuController
} from "./chunk-6IWXE3BU.js";
import {
  TranslateLoader,
  TranslateModule,
  TranslatePipe
} from "./chunk-XHXT42RH.js";
import {
  BrowserModule,
  DomRendererFactory2,
  HttpBackend,
  HttpClient,
  IonicRouteStrategy,
  NavigationEnd,
  NavigationStart,
  PreloadAllModules,
  RouteReuseStrategy,
  Router,
  RouterLink,
  RouterModule,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  withInterceptors,
  withPreloading
} from "./chunk-TU2LK3TM.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-7PPOBOFB.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionScheduler,
  ChangeDetectorRef,
  Component,
  DOCUMENT,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  RendererFactory2,
  RuntimeError,
  Subject,
  ViewChild,
  catchError,
  filter,
  importProvidersFrom,
  inject,
  makeEnvironmentProviders,
  map,
  of,
  performanceMarkFeature,
  setClassMetadata,
  switchMap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-HLETIGG3.js";
import "./chunk-7556B6PN.js";
import "./chunk-W7NNY2EY.js";
import "./chunk-5UBTS3LV.js";
import "./chunk-5U7ILDTA.js";
import "./chunk-DBFJ6K2U.js";
import "./chunk-46CSAHEN.js";
import "./chunk-ZANXXOCD.js";
import "./chunk-TTTMSMQM.js";
import "./chunk-IWHG45GR.js";
import "./chunk-QRXYEVCI.js";
import "./chunk-D5V6R5MP.js";
import "./chunk-5D42N2GT.js";
import "./chunk-QOQL43QQ.js";
import "./chunk-YMESYUMT.js";
import "./chunk-IVBL4Y7V.js";
import "./chunk-OQ6XJYX6.js";
import "./chunk-N5FWEBJU.js";
import "./chunk-KJR5G6CW.js";
import "./chunk-KD7SVZKO.js";
import "./chunk-BPLG4SRC.js";
import "./chunk-26XTF7OY.js";
import "./chunk-APG7YNI3.js";
import "./chunk-EJAR5KKY.js";
import "./chunk-CDWCOH3U.js";
import "./chunk-T6B53M7P.js";
import "./chunk-FZZSIR43.js";
import "./chunk-X4NBNE3H.js";
import "./chunk-Z325AMW6.js";
import "./chunk-GEKSWYBB.js";
import "./chunk-YAS4LRVC.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-5SZB5ECT.js";

// src/app/guards/token-valid.guard.ts
var TokenValidGuard = class _TokenValidGuard {
  userService;
  router;
  constructor(userService, router) {
    this.userService = userService;
    this.router = router;
  }
  canActivate(route) {
    const token = route.paramMap.get("token") || "";
    return this.userService.comprobar_token(token).pipe(map((res) => {
      if ((res == null ? void 0 : res.mensaje) === "Token v\xE1lido") {
        return true;
      } else if ((res == null ? void 0 : res.error) === "Token expirado") {
        return this.router.createUrlTree(["/token-expirado"]);
      } else if ((res == null ? void 0 : res.error) === "Token ya utilizado") {
        return this.router.createUrlTree(["/token-ya-usado"]);
      } else {
        return this.router.createUrlTree(["/"]);
      }
    }), catchError(() => of(this.router.createUrlTree(["/token-expirado"]))));
  }
  static \u0275fac = function TokenValidGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TokenValidGuard)(\u0275\u0275inject(UserServicesService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TokenValidGuard, factory: _TokenValidGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TokenValidGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: UserServicesService }, { type: Router }], null);
})();

// src/app/guards/googleCancelGuard.guard.ts
var googleCancelGuard = () => {
  const router = inject(Router);
  const flujoCancelado = localStorage.getItem("google_flow_cancelled");
  if (flujoCancelado) {
    localStorage.removeItem("google_flow_cancelled");
    router.navigateByUrl("/login");
    return false;
  }
  return true;
};

// src/app/guards/auth.guard.ts
var AuthGuard = (route, state) => {
  const funcionesComunes = inject(FuncionesComunes);
  const router = inject(Router);
  const messageService = inject(MessageService);
  if (funcionesComunes.isUserLoggedIn()) {
    return true;
  }
  messageService.add({
    key: "home-toast",
    severity: "warn",
    summary: "Acceso restringido",
    detail: "Debes iniciar sesi\xF3n para acceder a esta funci\xF3n de GoGuay.",
    life: 4e3
  });
  return router.createUrlTree(["/login"], {
    queryParams: { returnUrl: state.url }
  });
};

// src/app/app.routes.ts
var routes = [
  {
    path: "home",
    loadComponent: () => import("./home.page-JT2PMYCB.js").then((m) => m.HomePage)
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "registro",
    loadComponent: () => import("./registro.component-J5IETQ47.js").then((m) => m.RegistroComponent),
    canActivate: [googleCancelGuard]
  },
  {
    path: "sobre-nosotros",
    loadComponent: () => import("./sobre-nosotros.page-IYOTKWZ2.js").then((m) => m.SobreNosotrosPage)
  },
  {
    path: "cookies",
    loadComponent: () => import("./cookies.page-2M4C3P2X.js").then((m) => m.CookiesPage)
  },
  {
    path: "busqueda-viajes",
    loadComponent: () => import("./busqueda-viajes.page-QJPBTLYD.js").then((m) => m.BusquedaViajesPage)
  },
  {
    path: "login",
    loadComponent: () => import("./login.page-WVM2XSAI.js").then((m) => m.LoginPage)
  },
  {
    path: "panel-usuario",
    loadComponent: () => import("./panel-usuario.page-3NRJKDRS.js").then((m) => m.PanelUsuarioPage),
    canActivate: [AuthGuard]
  },
  {
    path: "nuevo-viaje",
    loadComponent: () => import("./nuevo-viaje.page-AOAYDG3U.js").then((m) => m.NuevoViajePage),
    canActivate: [AuthGuard]
  },
  {
    path: "data-viaje",
    loadComponent: () => import("./data-viaje.page-IFYHMXNW.js").then((m) => m.DataViajePage),
    canActivate: [AuthGuard]
  },
  {
    path: "resumen-viaje",
    loadComponent: () => import("./resumen-viaje.component-UOBFZ7FC.js").then((m) => m.ResumenViajeComponent),
    canActivate: [AuthGuard]
  },
  {
    path: "centro-ayuda",
    loadComponent: () => import("./centro-ayuda.page-WGUMHBNJ.js").then((m) => m.CentroAyudaPage)
  },
  {
    path: "faqs",
    loadComponent: () => import("./faqs.page-75UI2GBW.js").then((m) => m.FaqsPage)
  },
  {
    path: "mi-perfil",
    loadComponent: () => import("./mi-perfil.page-Z54YHLXG.js").then((m) => m.MiPerfilPage),
    canActivate: [AuthGuard]
  },
  {
    path: "datos-contacto",
    loadComponent: () => import("./datos-contacto.page-OHRYE5EU.js").then((m) => m.DatosContactoPage)
  },
  {
    path: "mis-incidencias",
    loadComponent: () => import("./incidencias-usuario.page-J2QMCYYK.js").then((m) => m.IncidenciasUsuarioPage),
    canActivate: [AuthGuard]
  },
  {
    path: "terminos",
    loadComponent: () => import("./terminos.page-ZWFBTP6N.js").then((m) => m.TerminosPage)
  },
  {
    path: "saldo-transferencias",
    loadComponent: () => import("./saldo-transferencias.page-XFSD5AOZ.js").then((m) => m.SaldoTransferenciasPage),
    canActivate: [AuthGuard]
  },
  {
    path: "decalogo",
    loadComponent: () => import("./decalogo.page-AZLYJSMO.js").then((m) => m.DecalogoPage)
  },
  {
    path: "perfil-publico",
    loadComponent: () => import("./perfil-publico.page-R3MZ7YF4.js").then((m) => m.PerfilPublicoPage)
  },
  {
    path: "verificaciones-perfil",
    loadComponent: () => import("./verificaciones-perfil.page-4JXXZKEZ.js").then((m) => m.VerificacionesPerfilPage),
    canActivate: [AuthGuard]
  },
  {
    path: "encuesta-satisfaccion",
    loadComponent: () => import("./encuesta-satisfaccion.page-4P6H73Y4.js").then((m) => m.EncuestaSatisfaccionPage)
  },
  {
    path: "centro-contacto",
    loadComponent: () => import("./centro-contacto.page-KZZPXOYM.js").then((m) => m.CentroContactoPage)
  },
  {
    path: "ajustes-aplicacion",
    loadComponent: () => import("./ajustes-aplicacion.page-OHXBXY5K.js").then((m) => m.AjustesAplicacionPage)
  },
  {
    path: "forgot-password",
    loadComponent: () => import("./forgot-password.page-FCPWKH4W.js").then((m) => m.ForgotPasswordPage)
  },
  {
    path: "nueva-contrasena/:token",
    loadComponent: () => import("./nueva-contrasena.page-GNQ5BAI2.js").then((m) => m.NuevaContrasenaPage),
    canActivate: [TokenValidGuard]
  },
  {
    path: "token-expirado",
    loadComponent: () => import("./token-expirado.page-T4UIRB3M.js").then((m) => m.TokenExpiradoPage)
  },
  {
    path: "token-ya-usado",
    loadComponent: () => import("./token-ya-usado.page-KQMXAXNX.js").then((m) => m.TokenYaUsadoPage)
  },
  {
    path: "notificaciones",
    loadComponent: () => import("./centro-notificaciones.page-VHXWXELO.js").then((m) => m.CentroNotificacionesPage),
    canActivate: [AuthGuard]
  },
  {
    path: "registro/resumen-registro",
    loadComponent: () => import("./resumen-registro.component-XUYV7XLJ.js").then((m) => m.ResumenRegistroComponent)
  },
  {
    path: "mis-viajes",
    loadComponent: () => import("./mis-viajes.page-IE6SD53S.js").then((m) => m.MisViajesPage),
    canActivate: [AuthGuard]
  },
  {
    path: "detalles-viaje/:id",
    loadComponent: () => import("./detalles-viaje.page-F4YX5SBN.js").then((m) => m.DetallesViajePage),
    canActivate: [AuthGuard]
  },
  {
    path: "messaging-center",
    loadComponent: () => import("./centro-mensajes.component-CHI62HB6.js").then((m) => m.CentroMensajesPage),
    canActivate: [AuthGuard]
  },
  {
    path: "chat/:id",
    loadComponent: () => import("./chat.component-NQR4IEJL.js").then((m) => m.ChatPage),
    canActivate: [AuthGuard]
  },
  {
    path: "condiciones-generales",
    loadComponent: () => import("./condiciones-generales.page-PEZNYUQJ.js").then((m) => m.CondicionesUsoComponent)
  },
  {
    path: "contrato-registro",
    loadComponent: () => import("./contrato-registro.component-BLAP3T5G.js").then((m) => m.ContratoRegistroComponent)
  },
  {
    path: "admin-app",
    loadComponent: () => import("./admin-app.page-AQTSPEN2.js").then((m) => m.AdminApp)
  },
  {
    path: "login-admin",
    loadComponent: () => import("./login-admin.page-C33WT7FN.js").then((m) => m.AdminLoginPage)
  },
  {
    path: "events-admin",
    loadComponent: () => import("./eventos-admin.page-JMZRY4HO.js").then((m) => m.EventosAdmin),
    canActivate: [AuthGuard]
  },
  {
    path: "incidencias-admin",
    loadComponent: () => import("./incidencias-admin.page-VLPZ2W2W.js").then((m) => m.IncidenciasAdminPage),
    canActivate: [AuthGuard]
  },
  {
    path: "gestion-usuarios-admin",
    loadComponent: () => import("./gestion-usuarios-admin.page-FWHZ4T75.js").then((m) => m.GestionUsuariosAdminPage),
    canActivate: [AuthGuard]
  },
  {
    path: "pago-reserva/:id",
    loadComponent: () => import("./pago-reserva.page-BZQJ7IGA.js").then((m) => m.PagoReservaPage),
    canActivate: [AuthGuard]
  },
  {
    path: "gestion-encuestas",
    loadComponent: () => import("./gestion-encuestas.page-6N2ZQV4X.js").then((m) => m.GestionEncuestasPage)
  },
  {
    path: "modificacion-email/:token",
    loadComponent: () => import("./modificacion-email.page-4J3CA6LX.js").then((m) => m.ModificacionEmailPage)
  }
];

// node_modules/@ngx-translate/http-loader/fesm2022/ngx-translate-http-loader.mjs
var TranslateHttpLoader = class _TranslateHttpLoader {
  http;
  prefix;
  suffix;
  constructor(http, prefix = "/assets/i18n/", suffix = ".json") {
    this.http = http;
    this.prefix = prefix;
    this.suffix = suffix;
  }
  /**
   * Gets the translations from the server
   */
  getTranslation(lang) {
    return this.http.get(`${this.prefix}${lang}${this.suffix}`);
  }
  static \u0275fac = function TranslateHttpLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslateHttpLoader)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(String), \u0275\u0275inject(String));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TranslateHttpLoader,
    factory: _TranslateHttpLoader.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateHttpLoader, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [String]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [String]
    }]
  }], null);
})();

// src/app/components/notification-toast/notification-toast.component.ts
var _c0 = (a0, a1, a2, a3, a4) => ({ "toast-success": a0, "toast-error": a1, "toast-warning": a2, "toast-info": a3, "toast-slide-out": a4 });
function NotificationToastComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 5);
    \u0275\u0275listener("click", function NotificationToastComponent_div_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cerrarTodosLosToasts());
    });
    \u0275\u0275element(2, "img", 6);
    \u0275\u0275text(3, " Cerrar todo ");
    \u0275\u0275elementEnd()();
  }
}
function NotificationToastComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275listener("click", function NotificationToastComponent_div_2_Template_div_click_0_listener() {
      const n_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.redirigirANotificacion(n_r4));
    })("mouseenter", function NotificationToastComponent_div_2_Template_div_mouseenter_0_listener() {
      const n_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.limpiarTemporizador(n_r4.id));
    })("mouseleave", function NotificationToastComponent_div_2_Template_div_mouseleave_0_listener() {
      const n_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.iniciarTemporizador(n_r4));
    });
    \u0275\u0275elementStart(1, "div", 8)(2, "button", 9);
    \u0275\u0275listener("click", function NotificationToastComponent_div_2_Template_button_click_2_listener($event) {
      const n_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCerrarClick($event, n_r4));
    });
    \u0275\u0275element(3, "img", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "strong", 11);
    \u0275\u0275text(5, "Notificaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const n_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(2, _c0, n_r4.type === "success", n_r4.type === "error", n_r4.type === "warning", n_r4.type === "info", ctx_r1.cerrandoToasts.has(n_r4)));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(n_r4.mensaje);
  }
}
function NotificationToastComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 14);
    \u0275\u0275text(2, "Pulsa sobre la notificaci\xF3n para ver m\xE1s detalles.");
    \u0275\u0275elementEnd()();
  }
}
var NotificationToastComponent = class _NotificationToastComponent {
  notificationService;
  cdr;
  userService;
  router;
  usuario;
  toasts = [];
  cerrandoToasts = /* @__PURE__ */ new Set();
  userData = null;
  toastSub;
  toastTimeouts = /* @__PURE__ */ new Map();
  TIEMPO_VISIBLE = 9999;
  constructor(notificationService, cdr, userService, router) {
    this.notificationService = notificationService;
    this.cdr = cdr;
    this.userService = userService;
    this.router = router;
  }
  ngOnInit() {
    this.userService.usuario$.subscribe((user) => {
      if (user) {
        this.checkLogin();
      }
    });
  }
  checkLogin() {
    var _a;
    const datosDelUsuario = localStorage.getItem("userData");
    if (!datosDelUsuario || datosDelUsuario === "undefined" || datosDelUsuario === "null") {
      return;
    }
    try {
      const parsedData = JSON.parse(datosDelUsuario);
      const usuarioId = ((_a = parsedData == null ? void 0 : parsedData.usuario) == null ? void 0 : _a.id) || (parsedData == null ? void 0 : parsedData.id);
      if (usuarioId) {
        this.userData = parsedData;
        this.cargarNotificacionesIniciales(usuarioId);
        this.suscribirANuevasNotificaciones();
      }
    } catch (e) {
      console.error("Error al parsear userData:", e);
      localStorage.removeItem("userData");
    }
  }
  suscribirANuevasNotificaciones() {
    this.toastSub = this.notificationService.toast$.subscribe((nuevasToasts) => {
      const cerradas = this.obtenerNotificacionesCerradas();
      nuevasToasts.forEach((toast) => {
        if (!cerradas.includes(toast.id) && !this.toasts.find((t) => t.id === toast.id)) {
          this.toasts.push(toast);
          this.iniciarTemporizador(toast);
        }
      });
      this.cdr.detectChanges();
    });
  }
  cargarNotificacionesIniciales(userId) {
    this.notificationService.obtenerNotificaciones(userId).subscribe({
      next: (notificaciones) => {
        const cerradas = this.obtenerNotificacionesCerradas();
        const noLeidas = notificaciones.filter((n) => !n.leida && !cerradas.includes(n.id));
        noLeidas.forEach((n) => this.notificationService.mostrarToast({
          id: n.id,
          type: "info",
          mensaje: n.mensaje,
          leida: false
        }));
      },
      error: (err) => console.error("Error al cargar notificaciones iniciales:", err)
    });
  }
  /**
   * Configura la destrucción automática de la notificación
   */
  iniciarTemporizador(toast) {
    this.limpiarTemporizador(toast.id);
    const timeoutId = setTimeout(() => {
      this.cerrarToast(toast);
    }, this.TIEMPO_VISIBLE);
    this.toastTimeouts.set(toast.id, timeoutId);
  }
  /**
   * Pausa el temporizador si el usuario interactúa o pasa el cursor sobre el elemento
   */
  limpiarTemporizador(toastId) {
    if (this.toastTimeouts.has(toastId)) {
      clearTimeout(this.toastTimeouts.get(toastId));
      this.toastTimeouts.delete(toastId);
    }
  }
  ngOnDestroy() {
    var _a;
    (_a = this.toastSub) == null ? void 0 : _a.unsubscribe();
    this.toastTimeouts.forEach((timeout) => clearTimeout(timeout));
    this.toastTimeouts.clear();
  }
  guardarNotificacionesCerradas(ids) {
    localStorage.setItem("notificacionesCerradas", JSON.stringify(ids));
  }
  obtenerNotificacionesCerradas() {
    return JSON.parse(localStorage.getItem("notificacionesCerradas") || "[]");
  }
  onCerrarClick(event, toast) {
    event.stopPropagation();
    this.cerrarToast(toast);
  }
  cerrarToast(toast, desdeRedireccion) {
    this.limpiarTemporizador(toast.id);
    if (this.cerrandoToasts.has(toast))
      return;
    this.cerrandoToasts.add(toast);
    setTimeout(() => {
      this.cerrandoToasts.delete(toast);
      this.toasts = this.toasts.filter((t) => t !== toast);
      const cerradas = this.obtenerNotificacionesCerradas();
      if (!cerradas.includes(toast.id)) {
        cerradas.push(toast.id);
        this.guardarNotificacionesCerradas(cerradas);
      }
      if (!desdeRedireccion) {
        this.notificationService.marcarNotificacionComoLeida(toast.id);
      }
      this.cdr.detectChanges();
    }, 400);
  }
  cerrarTodosLosToasts() {
    this.toasts.forEach((t) => {
      this.limpiarTemporizador(t.id);
      this.cerrandoToasts.add(t);
    });
    setTimeout(() => {
      const cerradas = this.obtenerNotificacionesCerradas();
      this.toasts.forEach((t) => {
        if (!cerradas.includes(t.id))
          cerradas.push(t.id);
      });
      this.guardarNotificacionesCerradas(cerradas);
      this.cerrandoToasts.clear();
      this.toasts = [];
      this.cdr.detectChanges();
    }, 400);
  }
  redirigirANotificacion(n) {
    const redireccion = true;
    this.notificationService.idNotificacionResaltada = n.id;
    this.cerrarToast(n, redireccion);
    this.cerrarTodosLosToasts();
    this.router.navigate(["/notificaciones"]);
  }
  static \u0275fac = function NotificationToastComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationToastComponent)(\u0275\u0275directiveInject(NotificacionesService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(UserServicesService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationToastComponent, selectors: [["app-notification-toast"]], inputs: { usuario: "usuario" }, decls: 4, vars: 3, consts: [["class", "d-flex justify-content-end mb-2 animate-fade-in", 4, "ngIf"], [1, "toasts-container"], ["class", "relative bg p-4 mensaje mb-2 toast-card", 3, "ngClass", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], ["class", "animate-fade-in", 4, "ngIf"], [1, "d-flex", "justify-content-end", "mb-2", "animate-fade-in"], [1, "btn", "btn-danger", "btn-sm", "d-flex", "align-items-center", "gap-1", 3, "click"], ["src", "../../../assets/sistema/limpio.png", "alt", "Cerrar todos los mensajes", 1, "icono-cerrar"], [1, "relative", "bg", "p-4", "mensaje", "mb-2", "toast-card", 3, "click", "mouseenter", "mouseleave", "ngClass"], [1, "d-flex", "justify-content-end"], ["aria-label", "Cerrar notificaci\xF3n", 1, "btn_notificaciones", 3, "click"], ["src", "../../../assets/sistema/cruz.png", "alt", "Cerrar notificaci\xF3n", 1, "icono-cerrar"], [1, "block", "capitalize", "title"], [1, "text-sm", "mb-0"], [1, "animate-fade-in"], [1, "d-flex", "justify-content-end", "nota"]], template: function NotificationToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, NotificationToastComponent_div_0_Template, 4, 0, "div", 0);
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275template(2, NotificationToastComponent_div_2_Template, 8, 8, "div", 2)(3, NotificationToastComponent_div_3_Template, 3, 0, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.toasts.length > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.toasts);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.toasts.length > 0);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  position: fixed;\n  top: 1rem;\n  right: 1rem;\n  z-index: 1100;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  width: 400px;\n}\n.toasts-container[_ngcontent-%COMP%] {\n  max-height: 80vh;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  width: 100%;\n}\n.title[_ngcontent-%COMP%] {\n  color: #222222;\n  font-weight: 700;\n  font-size: 0.95rem;\n}\n.bg[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 14px;\n  border-left: 6px solid transparent;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  padding: 1rem 1.25rem 1.25rem 1.25rem !important;\n  position: relative;\n}\n.toast-card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInRight 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.15) forwards;\n}\n.toast-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.16);\n}\n.toast-success[_ngcontent-%COMP%] {\n  border-left-color: #4caf50;\n}\n.toast-error[_ngcontent-%COMP%] {\n  border-left-color: #f44336;\n}\n.toast-warning[_ngcontent-%COMP%] {\n  border-left-color: #ff9800;\n}\n.toast-info[_ngcontent-%COMP%] {\n  border-left-color: #2196f3;\n}\n.icono-cerrar[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  display: block;\n}\n.btn_notificaciones[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 14px;\n  background: transparent;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px;\n  opacity: 0.5;\n  transition: opacity 0.2s;\n  z-index: 10;\n}\n.btn_notificaciones[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background-color: #f5f5f5;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  color: #c62828;\n  border: 1px solid #ffcdd2;\n  border-radius: 20px;\n  padding: 0.4rem 0.8rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s ease;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background-color: #f44336;\n  color: #ffffff;\n}\n.toast-slide-out[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_collapseAndFade 0.35s ease forwards !important;\n}\n.mensaje[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.nota[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  margin-right: 0.5rem;\n  color: #777777 !important;\n  font-weight: 500;\n}\n.animate-fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease forwards;\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(100%) scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_collapseAndFade {\n  0% {\n    opacity: 1;\n    max-height: 150px;\n    transform: scale(1);\n    margin-bottom: 0.5rem;\n  }\n  100% {\n    opacity: 0;\n    max-height: 0;\n    transform: scale(0.85);\n    margin-bottom: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n}\n@media (max-width: 576px) {\n  [_nghost-%COMP%] {\n    width: calc(100% - 2rem);\n    right: 1rem;\n    left: 1rem;\n    top: 1rem;\n  }\n  .toasts-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=notification-toast.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationToastComponent, [{
    type: Component,
    args: [{ selector: "app-notification-toast", standalone: true, imports: [CommonModule], template: `<div *ngIf="toasts.length > 0" class="d-flex justify-content-end mb-2 animate-fade-in">
  <button class="btn btn-danger btn-sm d-flex align-items-center gap-1" (click)="cerrarTodosLosToasts()">
    <img src="../../../assets/sistema/limpio.png" alt="Cerrar todos los mensajes" class="icono-cerrar"> Cerrar todo
  </button>
</div>

<div class="toasts-container">
  <div *ngFor="let n of toasts" 
       class="relative bg p-4 mensaje mb-2 toast-card" 
       (click)="redirigirANotificacion(n)"
       (mouseenter)="limpiarTemporizador(n.id)"
       (mouseleave)="iniciarTemporizador(n)"
       [ngClass]="{
         'toast-success': n.type === 'success',
         'toast-error': n.type === 'error',
         'toast-warning': n.type === 'warning',
         'toast-info': n.type === 'info',
         'toast-slide-out': cerrandoToasts.has(n)
       }">

    <div class="d-flex justify-content-end">
      <button class="btn_notificaciones" (click)="onCerrarClick($event, n)" aria-label="Cerrar notificaci\xF3n">
        <img src="../../../assets/sistema/cruz.png" alt="Cerrar notificaci\xF3n" class="icono-cerrar">
      </button>
    </div>

    <strong class="block capitalize title">Notificaci\xF3n</strong>
    <p class="text-sm mb-0">{{ n.mensaje }}</p>
  </div>
  
  <div *ngIf="toasts.length > 0" class="animate-fade-in">
    <span class="d-flex justify-content-end nota">Pulsa sobre la notificaci\xF3n para ver m\xE1s detalles.</span>
  </div>
</div>`, styles: ['@charset "UTF-8";\n\n/* src/app/components/notification-toast/notification-toast.component.scss */\n:host {\n  position: fixed;\n  top: 1rem;\n  right: 1rem;\n  z-index: 1100;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  width: 400px;\n}\n.toasts-container {\n  max-height: 80vh;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  width: 100%;\n}\n.title {\n  color: #222222;\n  font-weight: 700;\n  font-size: 0.95rem;\n}\n.bg {\n  background-color: #ffffff;\n  border-radius: 14px;\n  border-left: 6px solid transparent;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  padding: 1rem 1.25rem 1.25rem 1.25rem !important;\n  position: relative;\n}\n.toast-card {\n  animation: slideInRight 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.15) forwards;\n}\n.toast-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.16);\n}\n.toast-success {\n  border-left-color: #4caf50;\n}\n.toast-error {\n  border-left-color: #f44336;\n}\n.toast-warning {\n  border-left-color: #ff9800;\n}\n.toast-info {\n  border-left-color: #2196f3;\n}\n.icono-cerrar {\n  height: 16px;\n  width: 16px;\n  display: block;\n}\n.btn_notificaciones {\n  position: absolute;\n  top: 12px;\n  right: 14px;\n  background: transparent;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px;\n  opacity: 0.5;\n  transition: opacity 0.2s;\n  z-index: 10;\n}\n.btn_notificaciones:hover {\n  opacity: 1;\n  background-color: #f5f5f5;\n}\n.btn-danger {\n  background-color: #ffebee;\n  color: #c62828;\n  border: 1px solid #ffcdd2;\n  border-radius: 20px;\n  padding: 0.4rem 0.8rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s ease;\n}\n.btn-danger:hover {\n  background-color: #f44336;\n  color: #ffffff;\n}\n.toast-slide-out {\n  animation: collapseAndFade 0.35s ease forwards !important;\n}\n.mensaje {\n  cursor: pointer;\n}\n.nota {\n  font-size: 0.72rem;\n  margin-right: 0.5rem;\n  color: #777777 !important;\n  font-weight: 500;\n}\n.animate-fade-in {\n  animation: fadeIn 0.2s ease forwards;\n}\n@keyframes slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(100%) scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0) scale(1);\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes collapseAndFade {\n  0% {\n    opacity: 1;\n    max-height: 150px;\n    transform: scale(1);\n    margin-bottom: 0.5rem;\n  }\n  100% {\n    opacity: 0;\n    max-height: 0;\n    transform: scale(0.85);\n    margin-bottom: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n}\n@media (max-width: 576px) {\n  :host {\n    width: calc(100% - 2rem);\n    right: 1rem;\n    left: 1rem;\n    top: 1rem;\n  }\n  .toasts-container {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=notification-toast.component.css.map */\n'] }]
  }], () => [{ type: NotificacionesService }, { type: ChangeDetectorRef }, { type: UserServicesService }, { type: Router }], { usuario: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationToastComponent, { className: "NotificationToastComponent", filePath: "src/app/components/notification-toast/notification-toast.component.ts", lineNumber: 24 });
})();

// node_modules/ngx-cookieconsent/fesm2022/ngx-cookieconsent.mjs
var _WindowService = class _WindowService {
  constructor(_doc) {
    this._doc = _doc;
  }
  get nativeWindow() {
    var _a;
    return ((_a = this._doc) == null ? void 0 : _a.defaultView) || window;
  }
};
_WindowService.\u0275fac = function WindowService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WindowService)(\u0275\u0275inject(DOCUMENT));
};
_WindowService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _WindowService,
  factory: _WindowService.\u0275fac
});
var WindowService = _WindowService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowService, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var _NgcCookieConsentConfig = class _NgcCookieConsentConfig {
  constructor() {
    this.enabled = true;
    this.whitelistPage = [];
    this.blacklistPage = [];
  }
};
_NgcCookieConsentConfig.\u0275fac = function NgcCookieConsentConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgcCookieConsentConfig)();
};
_NgcCookieConsentConfig.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NgcCookieConsentConfig,
  factory: _NgcCookieConsentConfig.\u0275fac
});
var NgcCookieConsentConfig = _NgcCookieConsentConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgcCookieConsentConfig, [{
    type: Injectable
  }], null, null);
})();
var _NgcCookieConsentService = class _NgcCookieConsentService {
  constructor(windowService, config) {
    this.popupOpenSource = new Subject();
    this.popupCloseSource = new Subject();
    this.initializingSource = new Subject();
    this.initializedSource = new Subject();
    this.initializationErrorSource = new Subject();
    this.statusChangeSource = new Subject();
    this.revokeChoiceSource = new Subject();
    this.noCookieLawSource = new Subject();
    this.popupOpen$ = this.popupOpenSource.asObservable();
    this.popupClose$ = this.popupCloseSource.asObservable();
    this.initializing$ = this.initializingSource.asObservable();
    this.initialized$ = this.initializedSource.asObservable();
    this.initializationError$ = this.initializationErrorSource.asObservable();
    this.statusChange$ = this.statusChangeSource.asObservable();
    this.revokeChoice$ = this.revokeChoiceSource.asObservable();
    this.noCookieLaw$ = this.noCookieLawSource.asObservable();
    this.window = windowService.nativeWindow;
    this.init(config);
  }
  checkPopupInstantiated(method) {
    if (this.popupInstance == null) {
      throw new Error(`Cookie popup has not yet been instantiated. Cannot invoke ${method}()`);
    }
  }
  /**
   * Initializes Cookie Consent with the provided configuration.
   * @param config the configuration object
   */
  init(config) {
    if (this.window && this.window.cookieconsent) {
      this.cookieconsent = this.window.cookieconsent;
      this.config = config;
      this.config.onPopupOpen = () => this.popupOpenSource.next();
      this.config.onPopupClose = () => this.popupCloseSource.next();
      this.config.onInitialise = (status) => this.initializingSource.next({
        status
      });
      this.config.onStatusChange = (status, chosenBefore) => {
        this.statusChangeSource.next({
          status,
          chosenBefore
        });
      };
      this.config.onRevokeChoice = () => this.revokeChoiceSource.next();
      this.config.onNoCookieLaw = (countryCode, country) => {
        this.noCookieLawSource.next({
          countryCode,
          country
        });
      };
      this.cookieconsent.initialise(this.config, (popup) => {
        this.popupInstance = popup;
        this.initializedSource.next();
      }, (error, popup) => {
        this.initializationErrorSource.next({
          error
        });
      });
    }
  }
  /**
   * Gets the current configuration  used by the Cookie Consent.
   */
  getConfig() {
    return this.config;
  }
  /**
   * Gets the current cookie status.
   */
  getStatus() {
    return this.cookieconsent.status;
  }
  /**
   * Gets the current browser support for translations
   */
  getTransition() {
    return this.cookieconsent.hasTransition;
  }
  /**
   * Clears the current cookie status.
   */
  clearStatus() {
    this.checkPopupInstantiated("clearStatus");
    return this.popupInstance.clearStatus();
  }
  open() {
    this.checkPopupInstantiated("open");
    return this.popupInstance.open();
  }
  close(showRevoke) {
    this.checkPopupInstantiated("close");
    return this.popupInstance.close(showRevoke);
  }
  destroy() {
    this.checkPopupInstantiated("destroy");
    this.popupInstance.destroy();
  }
  fadeIn() {
    this.checkPopupInstantiated("fadeIn");
    this.popupInstance.fadeIn();
  }
  fadeOut() {
    this.checkPopupInstantiated("fadeOut");
    this.popupInstance.fadeOut();
  }
  isOpen() {
    this.checkPopupInstantiated("isOpen");
    return this.popupInstance.isOpen();
  }
  toggleRevokeButton(show) {
    this.checkPopupInstantiated("toggleRevokeButton");
    this.popupInstance.toggleRevokeButton(show);
  }
  hasAnswered() {
    this.checkPopupInstantiated("hasAnswered");
    return this.popupInstance.hasAnswered();
  }
  hasConsented() {
    this.checkPopupInstantiated("hasConsented");
    return this.popupInstance.hasConsented();
  }
};
_NgcCookieConsentService.\u0275fac = function NgcCookieConsentService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgcCookieConsentService)(\u0275\u0275inject(WindowService), \u0275\u0275inject(NgcCookieConsentConfig));
};
_NgcCookieConsentService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NgcCookieConsentService,
  factory: _NgcCookieConsentService.\u0275fac
});
var NgcCookieConsentService = _NgcCookieConsentService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgcCookieConsentService, [{
    type: Injectable
  }], () => [{
    type: WindowService
  }, {
    type: NgcCookieConsentConfig
  }], null);
})();
function provideNgcCookieConsent(config) {
  return [[WindowService, {
    provide: NgcCookieConsentConfig,
    useValue: config
  }, NgcCookieConsentService]];
}
var _NgcCookieConsentModule = class _NgcCookieConsentModule {
  static forRoot(config) {
    return {
      ngModule: _NgcCookieConsentModule,
      providers: provideNgcCookieConsent(config)
    };
  }
};
_NgcCookieConsentModule.\u0275fac = function NgcCookieConsentModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgcCookieConsentModule)();
};
_NgcCookieConsentModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NgcCookieConsentModule,
  imports: [CommonModule]
});
_NgcCookieConsentModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule]
});
var NgcCookieConsentModule = _NgcCookieConsentModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgcCookieConsentModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule]
    }]
  }], null, null);
})();

// src/app/app.component.ts
function HttpLoaderFactory(http) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
var AppComponent = class _AppComponent {
  ccService;
  cookieService;
  languageService;
  notificacionesService;
  menuCtrl;
  router;
  menu;
  consentGivenSubscription;
  userData = {};
  currentTime = "";
  hours = "";
  minutes = "";
  constructor(ccService, cookieService, languageService, notificacionesService, menuCtrl, router) {
    this.ccService = ccService;
    this.cookieService = cookieService;
    this.languageService = languageService;
    this.notificacionesService = notificacionesService;
    this.menuCtrl = menuCtrl;
    this.router = router;
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        console.log("\u{1F504} Cambio de ruta detectado hacia:", event.url, " | Causa:", event.navigationTrigger);
        console.trace("Pila de llamadas que orden\xF3 la redirecci\xF3n:");
      }
    });
  }
  ngOnInit() {
    var _a, _b;
    this.updateTime();
    setInterval(() => this.updateTime(), 1e3);
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      if (this.menu) {
        this.menu.close();
      }
    });
    const consentStatus = localStorage.getItem("cookieConsentStatus");
    this.loadUserData();
    if ((_b = (_a = this.userData) == null ? void 0 : _a.usuario) == null ? void 0 : _b.id) {
      this.obtenerNotificaciones(this.userData.usuario.id);
    } else {
      this.checkUserDataUntilAvailable();
    }
    this.ccService.popupOpen$.subscribe(() => {
      console.log("El banner de cookies est\xE1 visible");
    });
    this.ccService.popupClose$.subscribe(() => {
      console.log("El banner de cookies fue cerrado");
    });
    const hasConsent = this.cookieService.check("analytics") || this.cookieService.check("advertising");
    if (!hasConsent) {
      console.log("No se han establecido preferencias de cookies.");
    }
    if (consentStatus === "allow" || consentStatus === "deny") {
      this.ccService.destroy();
    } else {
      this.consentGivenSubscription = this.ccService.statusChange$.subscribe((event) => {
        const status = event.status;
        localStorage.setItem("cookieConsentStatus", status);
        this.ccService.destroy();
      });
    }
    this.languageService.language$.subscribe((lang) => {
      console.log(`Idioma cambiado a: ${lang}`);
    });
    this.menuCtrl.enable(true, "mobileMenu");
  }
  /**
   * Función para actualizar la hora actual cada minuto.
   */
  updateTime() {
    const now = /* @__PURE__ */ new Date();
    this.hours = now.getHours().toString().padStart(2, "0");
    this.minutes = now.getMinutes().toString().padStart(2, "0");
  }
  checkUserDataUntilAvailable() {
    const interval = setInterval(() => {
      var _a, _b;
      this.loadUserData();
      if ((_b = (_a = this.userData) == null ? void 0 : _a.usuario) == null ? void 0 : _b.id) {
        clearInterval(interval);
        this.obtenerNotificaciones(this.userData.usuario.id);
      }
    }, 500);
  }
  obtenerNotificaciones(usuarioId) {
    this.notificacionesService.obtenerNotificaciones(usuarioId).subscribe((notificaciones) => {
      if (notificaciones.length) {
        this.notificacionesService.notificacionPendiente = notificaciones[0].mensaje;
        this.notificacionesService.esCreadorDelViaje = true;
        this.notificacionesService.leerNotificacion(notificaciones);
      }
    });
  }
  loadUserData() {
    this.userData = JSON.parse(localStorage.getItem("userData") || "{}");
  }
  ngOnDestroy() {
    if (this.consentGivenSubscription) {
      this.consentGivenSubscription.unsubscribe();
    }
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(NgcCookieConsentService), \u0275\u0275directiveInject(CookieService), \u0275\u0275directiveInject(LanguageService), \u0275\u0275directiveInject(NotificacionesService), \u0275\u0275directiveInject(MenuController), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(IonMenu, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.menu = _t.first);
    }
  }, features: [\u0275\u0275ProvidersFeature([MenuController])], decls: 45, vars: 22, consts: [["side", "start", "menuId", "mobileMenu", "contentId", "main-content", "type", "push", 1, "menuMobile"], [1, "ion_menu"], ["color", "primary"], ["color", "secondary"], ["auto-hide", "false"], ["routerLink", "/", "routerDirection", "forward", "color", "secondary", "detail", "false"], ["routerLink", "/sobre-nosotros", "routerDirection", "forward", "color", "secondary", "detail", "false"], ["routerLink", "/faqs", "routerDirection", "forward", "color", "secondary", "detail", "false"], ["routerLink", "/decalogo", "routerDirection", "forward", "color", "secondary", "detail", "false"], ["routerLink", "/busqueda-viajes", "routerDirection", "forward", "color", "secondary", "detail", "false"], ["routerLink", "/nuevo-viaje", "routerDirection", "forward", "color", "secondary", "detail", "false"], [2, "text-align", "center", "width", "100%", "padding", "10px", "background-color", "var(--ion-color-primary)"], ["src", "../assets/logo/PRIDECAR.png", "alt", "Logo", 1, "imgLogoMenu"], [1, "hora"], [1, "blink"], ["id", "main-content", 1, "ion-page"], [3, "animated"], [3, "usuario"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-app")(1, "ion-menu", 0)(2, "ion-header", 1)(3, "ion-toolbar", 2)(4, "ion-title");
      \u0275\u0275text(5, "Men\xFA");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "ion-content", 3)(7, "ion-list")(8, "ion-menu-toggle", 4)(9, "ion-item", 5);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "ion-menu-toggle", 4)(13, "ion-item", 6);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "ion-menu-toggle", 4)(17, "ion-item", 7);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "ion-menu-toggle", 4)(21, "ion-item", 8);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "ion-menu-toggle", 4)(25, "ion-item", 9);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "ion-menu-toggle", 4)(29, "ion-item", 10);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(32, "ion-footer")(33, "div", 11);
      \u0275\u0275element(34, "img", 12);
      \u0275\u0275elementStart(35, "div", 13)(36, "span");
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span", 14);
      \u0275\u0275text(39, ":");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "span");
      \u0275\u0275text(41);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(42, "div", 15);
      \u0275\u0275element(43, "ion-router-outlet", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275element(44, "app-notification-toast", 17);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "NAVBAR.INICIO"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 12, "NAVBAR.QUIENES"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 14, "NAVBAR.FAQS"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 16, "NAVBAR.DECALOGO"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 18, "NAVBAR.BUSCAR_VIAJE"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 20, "NAVBAR.PUBLICAR_VIAJE"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.hours);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.minutes);
      \u0275\u0275advance(2);
      \u0275\u0275property("animated", false);
      \u0275\u0275advance();
      \u0275\u0275property("usuario", ctx.userData);
    }
  }, dependencies: [
    NotificationToastComponent,
    IonApp,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonFooter,
    IonRouterOutlet,
    TranslateModule,
    RouterModule,
    RouterLink,
    IonMenuToggle,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [
      NotificationToastComponent,
      IonApp,
      IonMenu,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonList,
      IonItem,
      IonFooter,
      IonRouterOutlet,
      TranslateModule,
      RouterModule,
      IonMenuToggle
    ], providers: [MenuController], template: '<ion-app>\n  <!-- MENU DE LA APLICACI\xD3N PARA DISPOSITIVOS MOVILES  -->\n  <ion-menu side="start" menuId="mobileMenu" contentId="main-content" type="push" class="menuMobile">\n    <ion-header class="ion_menu">\n      <ion-toolbar color="primary">\n        <ion-title>Men\xFA</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content color="secondary">\n      <ion-list>\n        <ion-menu-toggle auto-hide="false">\n          <ion-item routerLink="/" routerDirection="forward" color="secondary" detail="false">{{\n            "NAVBAR.INICIO" |\n            translate }}</ion-item>\n        </ion-menu-toggle>\n\n        <ion-menu-toggle auto-hide="false">\n          <ion-item routerLink="/sobre-nosotros" routerDirection="forward" color="secondary" detail="false">{{\n            "NAVBAR.QUIENES" |\n            translate }}</ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle auto-hide="false">\n          <ion-item routerLink="/faqs" routerDirection="forward" color="secondary" detail="false">{{ "NAVBAR.FAQS"\n            | translate\n            }}</ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle auto-hide="false">\n          <ion-item routerLink="/decalogo" routerDirection="forward" color="secondary" detail="false">{{\n            "NAVBAR.DECALOGO" |\n            translate }}</ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle auto-hide="false">\n          <ion-item routerLink="/busqueda-viajes" routerDirection="forward" color="secondary" detail="false">{{\n            "NAVBAR.BUSCAR_VIAJE"\n            | translate }}</ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle auto-hide="false">\n          <ion-item routerLink="/nuevo-viaje" routerDirection="forward" color="secondary" detail="false">{{\n            "NAVBAR.PUBLICAR_VIAJE" |\n            translate }}</ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n\n    <ion-footer>\n      <div style="text-align: center; width: 100%; padding: 10px; background-color: var(--ion-color-primary)">\n        <img class="imgLogoMenu" src="../assets/logo/PRIDECAR.png" alt="Logo" />\n        <div class="hora">\n          <span>{{ hours }}</span><span class="blink">:</span><span>{{ minutes }}</span>\n        </div>\n      </div>\n    </ion-footer>\n  </ion-menu>\n\n  <!-- CONTENIDO PRINCIPAL DE LA APLICACI\xD3N -->\n  <div class="ion-page" id="main-content">\n    <ion-router-outlet [animated]="false"></ion-router-outlet>\n  </div>\n\n  <app-notification-toast [usuario]="userData"></app-notification-toast>\n</ion-app>' }]
  }], () => [{ type: NgcCookieConsentService }, { type: CookieService }, { type: LanguageService }, { type: NotificacionesService }, { type: MenuController }, { type: Router }], { menu: [{
    type: ViewChild,
    args: [IonMenu]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 55 });
})();

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  doc;
  delegate;
  zone;
  animationType;
  moduleImpl;
  _rendererFactoryPromise = null;
  scheduler = null;
  injector = inject(Injector);
  loadingSchedulerFn = inject(\u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN, {
    optional: true
  });
  _engine;
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
  }
  /** @docs-private */
  ngOnDestroy() {
    var _a;
    (_a = this._engine) == null ? void 0 : _a.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const loadFn = () => this.moduleImpl ?? import("./browser-M6CPUHB5.js").then((m) => m);
    let moduleImplPromise;
    if (this.loadingSchedulerFn) {
      moduleImplPromise = this.loadingSchedulerFn(loadFn);
    } else {
      moduleImplPromise = loadFn();
    }
    return moduleImplPromise.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    var _a, _b;
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (((_a = rendererType == null ? void 0 : rendererType.data) == null ? void 0 : _a["animation"]) && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    (_b = this._rendererFactoryPromise) == null ? void 0 : _b.then((animationRendererFactory) => {
      var _a2;
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
      this.scheduler ??= this.injector.get(ChangeDetectionScheduler, null, {
        optional: true
      });
      (_a2 = this.scheduler) == null ? void 0 : _a2.notify(10);
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    var _a, _b;
    (_b = (_a = this.delegate).begin) == null ? void 0 : _b.call(_a);
  }
  end() {
    var _a, _b;
    (_b = (_a = this.delegate).end) == null ? void 0 : _b.call(_a);
  }
  whenRenderingDone() {
    var _a, _b;
    return ((_b = (_a = this.delegate).whenRenderingDone) == null ? void 0 : _b.call(_a)) ?? Promise.resolve();
  }
  /**
   * Used during HMR to clear any cached data about a component.
   * @param componentId ID of the component that is being replaced.
   */
  componentReplaced(componentId) {
    var _a, _b, _c;
    (_a = this._engine) == null ? void 0 : _a.flush();
    (_c = (_b = this.delegate).componentReplaced) == null ? void 0 : _c.call(_b, componentId);
  }
  static \u0275fac = function AsyncAnimationRendererFactory_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AsyncAnimationRendererFactory,
    factory: _AsyncAnimationRendererFactory.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  delegate;
  // List of callbacks that need to be replayed on the animation renderer once its loaded
  replay = [];
  \u0275type = 1;
  constructor(delegate) {
    this.delegate = delegate;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval) {
    this.delegate.removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style, value, flags) {
    this.delegate.setStyle(el, style, value, flags);
  }
  removeStyle(el, style, flags) {
    this.delegate.removeStyle(el, style, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback, options));
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
var \u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN = new InjectionToken(ngDevMode ? "async_animation_loading_scheduler_fn" : "");
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  if (false) {
    type = "noop";
  }
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// src/app/core/interceptor/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const router = inject(Router);
  const httpBackend = inject(HttpBackend);
  const token = localStorage.getItem("access_token");
  const pendienteConfirmacionRegistro = localStorage.getItem("pending_verification");
  let authReq = req;
  if (token) {
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  } else if (pendienteConfirmacionRegistro === "true") {
    return next(req);
  }
  return next(authReq).pipe(catchError((error) => {
    if (error.status === 401 && req.headers.get("X-Skip-Interceptor") === "true") {
      return throwError(() => error);
    }
    if (error.status === 401) {
      const refreshToken = localStorage.getItem("refresh_token");
      const rememberMe = localStorage.getItem("remember_me") === "true";
      if (!refreshToken) {
        limpiarSesionSegura(rememberMe);
        router.navigate(["/login"]);
        return throwError(() => error);
      }
      const anonymousHttp = new HttpClient(httpBackend);
      const URL_REFRESH = "http://localhost:5000/api/users/refresh";
      return anonymousHttp.post(URL_REFRESH, {}, { headers: { Authorization: `Bearer ${refreshToken}` } }).pipe(switchMap((res) => {
        localStorage.setItem("access_token", res.access_token);
        const retryReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${res.access_token}`
          }
        });
        return next(retryReq);
      }), catchError((refreshErr) => {
        limpiarSesionSegura(rememberMe);
        router.navigate(["/login"]);
        return throwError(() => refreshErr);
      }));
    }
    return throwError(() => error);
  }));
};
function limpiarSesionSegura(rememberMe) {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("userData");
  localStorage.removeItem("rutaSeleccionada");
  if (!rememberMe) {
    localStorage.removeItem("remember_me");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  }
}

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
var InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
  // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
  // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
  // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
  constructor(doc, driver, normalizer) {
    super(doc, driver, normalizer);
  }
  ngOnDestroy() {
    this.flush();
  }
  static \u0275fac = function InjectableAnimationEngine_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InjectableAnimationEngine)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(AnimationDriver), \u0275\u0275inject(AnimationStyleNormalizer));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InjectableAnimationEngine,
    factory: _InjectableAnimationEngine.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: AnimationDriver
  }, {
    type: AnimationStyleNormalizer
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new AnimationRendererFactory(renderer, engine, zone);
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory,
  deps: [DomRendererFactory2, AnimationEngine, NgZone]
}];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_ANIMATIONS_PROVIDERS = [
  // Note: the `ngServerMode` happen inside factories to give the variable time to initialize.
  {
    provide: AnimationDriver,
    useFactory: () => false ? new NoopAnimationDriver() : new WebAnimationsDriver()
  },
  {
    provide: ANIMATION_MODULE_TYPE,
    useFactory: () => false ? "NoopAnimations" : "BrowserAnimations"
  },
  ...SHARED_ANIMATION_PROVIDERS
];
var BrowserAnimationsModule = class _BrowserAnimationsModule {
  /**
   * Configures the module based on the specified object.
   *
   * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
   * @see {@link BrowserAnimationsModuleConfig}
   *
   * @usageNotes
   * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
   * function as follows:
   * ```ts
   * @NgModule({
   *   imports: [BrowserAnimationsModule.withConfig(config)]
   * })
   * class MyNgModule {}
   * ```
   */
  static withConfig(config) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
  static \u0275fac = function BrowserAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BrowserAnimationsModule,
    exports: [BrowserModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
function provideAnimations() {
  performanceMarkFeature("NgEagerAnimations");
  return [...BROWSER_ANIMATIONS_PROVIDERS];
}
var NoopAnimationsModule = class _NoopAnimationsModule {
  static \u0275fac = function NoopAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NoopAnimationsModule,
    exports: [BrowserModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();

// node_modules/@primeng/themes/aura/accordion/index.mjs
var accordion_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  panel: {
    borderWidth: "0 0 1px 0",
    borderColor: "{content.border.color}"
  },
  header: {
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{text.color}",
    padding: "1.125rem",
    fontWeight: "600",
    borderRadius: "0",
    borderWidth: "0",
    borderColor: "{content.border.color}",
    background: "{content.background}",
    hoverBackground: "{content.background}",
    activeBackground: "{content.background}",
    activeHoverBackground: "{content.background}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    },
    toggleIcon: {
      color: "{text.muted.color}",
      hoverColor: "{text.color}",
      activeColor: "{text.color}",
      activeHoverColor: "{text.color}"
    },
    first: {
      topBorderRadius: "{content.border.radius}",
      borderWidth: "0"
    },
    last: {
      bottomBorderRadius: "{content.border.radius}",
      activeBottomBorderRadius: "0"
    }
  },
  content: {
    borderWidth: "0",
    borderColor: "{content.border.color}",
    background: "{content.background}",
    color: "{text.color}",
    padding: "0 1.125rem 1.125rem 1.125rem"
  }
};

// node_modules/@primeng/themes/aura/autocomplete/index.mjs
var autocomplete_default = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledHoverBackground: "{form.field.filled.hover.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}"
  },
  overlay: {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}"
  },
  list: {
    padding: "{list.padding}",
    gap: "{list.gap}"
  },
  option: {
    focusBackground: "{list.option.focus.background}",
    selectedBackground: "{list.option.selected.background}",
    selectedFocusBackground: "{list.option.selected.focus.background}",
    color: "{list.option.color}",
    focusColor: "{list.option.focus.color}",
    selectedColor: "{list.option.selected.color}",
    selectedFocusColor: "{list.option.selected.focus.color}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.border.radius}"
  },
  optionGroup: {
    background: "{list.option.group.background}",
    color: "{list.option.group.color}",
    fontWeight: "{list.option.group.font.weight}",
    padding: "{list.option.group.padding}"
  },
  dropdown: {
    width: "2.5rem",
    sm: {
      width: "2rem"
    },
    lg: {
      width: "3rem"
    },
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.border.color}",
    activeBorderColor: "{form.field.border.color}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  chip: {
    borderRadius: "{border.radius.sm}"
  },
  emptyMessage: {
    padding: "{list.option.padding}"
  },
  colorScheme: {
    light: {
      chip: {
        focusBackground: "{surface.200}",
        focusColor: "{surface.800}"
      },
      dropdown: {
        background: "{surface.100}",
        hoverBackground: "{surface.200}",
        activeBackground: "{surface.300}",
        color: "{surface.600}",
        hoverColor: "{surface.700}",
        activeColor: "{surface.800}"
      }
    },
    dark: {
      chip: {
        focusBackground: "{surface.700}",
        focusColor: "{surface.0}"
      },
      dropdown: {
        background: "{surface.800}",
        hoverBackground: "{surface.700}",
        activeBackground: "{surface.600}",
        color: "{surface.300}",
        hoverColor: "{surface.200}",
        activeColor: "{surface.100}"
      }
    }
  }
};

// node_modules/@primeng/themes/aura/avatar/index.mjs
var avatar_default = {
  root: {
    width: "2rem",
    height: "2rem",
    fontSize: "1rem",
    background: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}"
  },
  icon: {
    size: "1rem"
  },
  group: {
    borderColor: "{content.background}",
    offset: "-0.75rem"
  },
  lg: {
    width: "3rem",
    height: "3rem",
    fontSize: "1.5rem",
    icon: {
      size: "1.5rem"
    },
    group: {
      offset: "-1rem"
    }
  },
  xl: {
    width: "4rem",
    height: "4rem",
    fontSize: "2rem",
    icon: {
      size: "2rem"
    },
    group: {
      offset: "-1.5rem"
    }
  }
};

// node_modules/@primeng/themes/aura/badge/index.mjs
var badge_default = {
  root: {
    borderRadius: "{border.radius.md}",
    padding: "0 0.5rem",
    fontSize: "0.75rem",
    fontWeight: "700",
    minWidth: "1.5rem",
    height: "1.5rem"
  },
  dot: {
    size: "0.5rem"
  },
  sm: {
    fontSize: "0.625rem",
    minWidth: "1.25rem",
    height: "1.25rem"
  },
  lg: {
    fontSize: "0.875rem",
    minWidth: "1.75rem",
    height: "1.75rem"
  },
  xl: {
    fontSize: "1rem",
    minWidth: "2rem",
    height: "2rem"
  },
  colorScheme: {
    light: {
      primary: {
        background: "{primary.color}",
        color: "{primary.contrast.color}"
      },
      secondary: {
        background: "{surface.100}",
        color: "{surface.600}"
      },
      success: {
        background: "{green.500}",
        color: "{surface.0}"
      },
      info: {
        background: "{sky.500}",
        color: "{surface.0}"
      },
      warn: {
        background: "{orange.500}",
        color: "{surface.0}"
      },
      danger: {
        background: "{red.500}",
        color: "{surface.0}"
      },
      contrast: {
        background: "{surface.950}",
        color: "{surface.0}"
      }
    },
    dark: {
      primary: {
        background: "{primary.color}",
        color: "{primary.contrast.color}"
      },
      secondary: {
        background: "{surface.800}",
        color: "{surface.300}"
      },
      success: {
        background: "{green.400}",
        color: "{green.950}"
      },
      info: {
        background: "{sky.400}",
        color: "{sky.950}"
      },
      warn: {
        background: "{orange.400}",
        color: "{orange.950}"
      },
      danger: {
        background: "{red.400}",
        color: "{red.950}"
      },
      contrast: {
        background: "{surface.0}",
        color: "{surface.950}"
      }
    }
  }
};

// node_modules/@primeng/themes/aura/base/index.mjs
var base_default = {
  primitive: {
    borderRadius: {
      none: "0",
      xs: "2px",
      sm: "4px",
      md: "6px",
      lg: "8px",
      xl: "12px"
    },
    emerald: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b",
      950: "#022c22"
    },
    green: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
      950: "#052e16"
    },
    lime: {
      50: "#f7fee7",
      100: "#ecfccb",
      200: "#d9f99d",
      300: "#bef264",
      400: "#a3e635",
      500: "#84cc16",
      600: "#65a30d",
      700: "#4d7c0f",
      800: "#3f6212",
      900: "#365314",
      950: "#1a2e05"
    },
    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
      950: "#450a0a"
    },
    orange: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12",
      950: "#431407"
    },
    amber: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
      950: "#451a03"
    },
    yellow: {
      50: "#fefce8",
      100: "#fef9c3",
      200: "#fef08a",
      300: "#fde047",
      400: "#facc15",
      500: "#eab308",
      600: "#ca8a04",
      700: "#a16207",
      800: "#854d0e",
      900: "#713f12",
      950: "#422006"
    },
    teal: {
      50: "#f0fdfa",
      100: "#ccfbf1",
      200: "#99f6e4",
      300: "#5eead4",
      400: "#2dd4bf",
      500: "#14b8a6",
      600: "#0d9488",
      700: "#0f766e",
      800: "#115e59",
      900: "#134e4a",
      950: "#042f2e"
    },
    cyan: {
      50: "#ecfeff",
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63",
      950: "#083344"
    },
    sky: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
      950: "#082f49"
    },
    blue: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      950: "#172554"
    },
    indigo: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
      950: "#1e1b4b"
    },
    violet: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95",
      950: "#2e1065"
    },
    purple: {
      50: "#faf5ff",
      100: "#f3e8ff",
      200: "#e9d5ff",
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7",
      600: "#9333ea",
      700: "#7e22ce",
      800: "#6b21a8",
      900: "#581c87",
      950: "#3b0764"
    },
    fuchsia: {
      50: "#fdf4ff",
      100: "#fae8ff",
      200: "#f5d0fe",
      300: "#f0abfc",
      400: "#e879f9",
      500: "#d946ef",
      600: "#c026d3",
      700: "#a21caf",
      800: "#86198f",
      900: "#701a75",
      950: "#4a044e"
    },
    pink: {
      50: "#fdf2f8",
      100: "#fce7f3",
      200: "#fbcfe8",
      300: "#f9a8d4",
      400: "#f472b6",
      500: "#ec4899",
      600: "#db2777",
      700: "#be185d",
      800: "#9d174d",
      900: "#831843",
      950: "#500724"
    },
    rose: {
      50: "#fff1f2",
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be123c",
      800: "#9f1239",
      900: "#881337",
      950: "#4c0519"
    },
    slate: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
      950: "#020617"
    },
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
      950: "#030712"
    },
    zinc: {
      50: "#fafafa",
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      400: "#a1a1aa",
      500: "#71717a",
      600: "#52525b",
      700: "#3f3f46",
      800: "#27272a",
      900: "#18181b",
      950: "#09090b"
    },
    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
      950: "#0a0a0a"
    },
    stone: {
      50: "#fafaf9",
      100: "#f5f5f4",
      200: "#e7e5e4",
      300: "#d6d3d1",
      400: "#a8a29e",
      500: "#78716c",
      600: "#57534e",
      700: "#44403c",
      800: "#292524",
      900: "#1c1917",
      950: "#0c0a09"
    }
  },
  semantic: {
    transitionDuration: "0.2s",
    focusRing: {
      width: "1px",
      style: "solid",
      color: "{primary.color}",
      offset: "2px",
      shadow: "none"
    },
    disabledOpacity: "0.6",
    iconSize: "1rem",
    anchorGutter: "2px",
    primary: {
      50: "{emerald.50}",
      100: "{emerald.100}",
      200: "{emerald.200}",
      300: "{emerald.300}",
      400: "{emerald.400}",
      500: "{emerald.500}",
      600: "{emerald.600}",
      700: "{emerald.700}",
      800: "{emerald.800}",
      900: "{emerald.900}",
      950: "{emerald.950}"
    },
    formField: {
      paddingX: "0.75rem",
      paddingY: "0.5rem",
      sm: {
        fontSize: "0.875rem",
        paddingX: "0.625rem",
        paddingY: "0.375rem"
      },
      lg: {
        fontSize: "1.125rem",
        paddingX: "0.875rem",
        paddingY: "0.625rem"
      },
      borderRadius: "{border.radius.md}",
      focusRing: {
        width: "0",
        style: "none",
        color: "transparent",
        offset: "0",
        shadow: "none"
      },
      transitionDuration: "{transition.duration}"
    },
    list: {
      padding: "0.25rem 0.25rem",
      gap: "2px",
      header: {
        padding: "0.5rem 1rem 0.25rem 1rem"
      },
      option: {
        padding: "0.5rem 0.75rem",
        borderRadius: "{border.radius.sm}"
      },
      optionGroup: {
        padding: "0.5rem 0.75rem",
        fontWeight: "600"
      }
    },
    content: {
      borderRadius: "{border.radius.md}"
    },
    mask: {
      transitionDuration: "0.15s"
    },
    navigation: {
      list: {
        padding: "0.25rem 0.25rem",
        gap: "2px"
      },
      item: {
        padding: "0.5rem 0.75rem",
        borderRadius: "{border.radius.sm}",
        gap: "0.5rem"
      },
      submenuLabel: {
        padding: "0.5rem 0.75rem",
        fontWeight: "600"
      },
      submenuIcon: {
        size: "0.875rem"
      }
    },
    overlay: {
      select: {
        borderRadius: "{border.radius.md}",
        shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
      },
      popover: {
        borderRadius: "{border.radius.md}",
        padding: "0.75rem",
        shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
      },
      modal: {
        borderRadius: "{border.radius.xl}",
        padding: "1.25rem",
        shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
      },
      navigation: {
        shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
      }
    },
    colorScheme: {
      light: {
        surface: {
          0: "#ffffff",
          50: "{slate.50}",
          100: "{slate.100}",
          200: "{slate.200}",
          300: "{slate.300}",
          400: "{slate.400}",
          500: "{slate.500}",
          600: "{slate.600}",
          700: "{slate.700}",
          800: "{slate.800}",
          900: "{slate.900}",
          950: "{slate.950}"
        },
        primary: {
          color: "{primary.500}",
          contrastColor: "#ffffff",
          hoverColor: "{primary.600}",
          activeColor: "{primary.700}"
        },
        highlight: {
          background: "{primary.50}",
          focusBackground: "{primary.100}",
          color: "{primary.700}",
          focusColor: "{primary.800}"
        },
        mask: {
          background: "rgba(0,0,0,0.4)",
          color: "{surface.200}"
        },
        formField: {
          background: "{surface.0}",
          disabledBackground: "{surface.200}",
          filledBackground: "{surface.50}",
          filledHoverBackground: "{surface.50}",
          filledFocusBackground: "{surface.50}",
          borderColor: "{surface.300}",
          hoverBorderColor: "{surface.400}",
          focusBorderColor: "{primary.color}",
          invalidBorderColor: "{red.400}",
          color: "{surface.700}",
          disabledColor: "{surface.500}",
          placeholderColor: "{surface.500}",
          invalidPlaceholderColor: "{red.600}",
          floatLabelColor: "{surface.500}",
          floatLabelFocusColor: "{primary.600}",
          floatLabelActiveColor: "{surface.500}",
          floatLabelInvalidColor: "{form.field.invalid.placeholder.color}",
          iconColor: "{surface.400}",
          shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"
        },
        text: {
          color: "{surface.700}",
          hoverColor: "{surface.800}",
          mutedColor: "{surface.500}",
          hoverMutedColor: "{surface.600}"
        },
        content: {
          background: "{surface.0}",
          hoverBackground: "{surface.100}",
          borderColor: "{surface.200}",
          color: "{text.color}",
          hoverColor: "{text.hover.color}"
        },
        overlay: {
          select: {
            background: "{surface.0}",
            borderColor: "{surface.200}",
            color: "{text.color}"
          },
          popover: {
            background: "{surface.0}",
            borderColor: "{surface.200}",
            color: "{text.color}"
          },
          modal: {
            background: "{surface.0}",
            borderColor: "{surface.200}",
            color: "{text.color}"
          }
        },
        list: {
          option: {
            focusBackground: "{surface.100}",
            selectedBackground: "{highlight.background}",
            selectedFocusBackground: "{highlight.focus.background}",
            color: "{text.color}",
            focusColor: "{text.hover.color}",
            selectedColor: "{highlight.color}",
            selectedFocusColor: "{highlight.focus.color}",
            icon: {
              color: "{surface.400}",
              focusColor: "{surface.500}"
            }
          },
          optionGroup: {
            background: "transparent",
            color: "{text.muted.color}"
          }
        },
        navigation: {
          item: {
            focusBackground: "{surface.100}",
            activeBackground: "{surface.100}",
            color: "{text.color}",
            focusColor: "{text.hover.color}",
            activeColor: "{text.hover.color}",
            icon: {
              color: "{surface.400}",
              focusColor: "{surface.500}",
              activeColor: "{surface.500}"
            }
          },
          submenuLabel: {
            background: "transparent",
            color: "{text.muted.color}"
          },
          submenuIcon: {
            color: "{surface.400}",
            focusColor: "{surface.500}",
            activeColor: "{surface.500}"
          }
        }
      },
      dark: {
        surface: {
          0: "#ffffff",
          50: "{zinc.50}",
          100: "{zinc.100}",
          200: "{zinc.200}",
          300: "{zinc.300}",
          400: "{zinc.400}",
          500: "{zinc.500}",
          600: "{zinc.600}",
          700: "{zinc.700}",
          800: "{zinc.800}",
          900: "{zinc.900}",
          950: "{zinc.950}"
        },
        primary: {
          color: "{primary.400}",
          contrastColor: "{surface.900}",
          hoverColor: "{primary.300}",
          activeColor: "{primary.200}"
        },
        highlight: {
          background: "color-mix(in srgb, {primary.400}, transparent 84%)",
          focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)",
          color: "rgba(255,255,255,.87)",
          focusColor: "rgba(255,255,255,.87)"
        },
        mask: {
          background: "rgba(0,0,0,0.6)",
          color: "{surface.200}"
        },
        formField: {
          background: "{surface.950}",
          disabledBackground: "{surface.700}",
          filledBackground: "{surface.800}",
          filledHoverBackground: "{surface.800}",
          filledFocusBackground: "{surface.800}",
          borderColor: "{surface.600}",
          hoverBorderColor: "{surface.500}",
          focusBorderColor: "{primary.color}",
          invalidBorderColor: "{red.300}",
          color: "{surface.0}",
          disabledColor: "{surface.400}",
          placeholderColor: "{surface.400}",
          invalidPlaceholderColor: "{red.400}",
          floatLabelColor: "{surface.400}",
          floatLabelFocusColor: "{primary.color}",
          floatLabelActiveColor: "{surface.400}",
          floatLabelInvalidColor: "{form.field.invalid.placeholder.color}",
          iconColor: "{surface.400}",
          shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"
        },
        text: {
          color: "{surface.0}",
          hoverColor: "{surface.0}",
          mutedColor: "{surface.400}",
          hoverMutedColor: "{surface.300}"
        },
        content: {
          background: "{surface.900}",
          hoverBackground: "{surface.800}",
          borderColor: "{surface.700}",
          color: "{text.color}",
          hoverColor: "{text.hover.color}"
        },
        overlay: {
          select: {
            background: "{surface.900}",
            borderColor: "{surface.700}",
            color: "{text.color}"
          },
          popover: {
            background: "{surface.900}",
            borderColor: "{surface.700}",
            color: "{text.color}"
          },
          modal: {
            background: "{surface.900}",
            borderColor: "{surface.700}",
            color: "{text.color}"
          }
        },
        list: {
          option: {
            focusBackground: "{surface.800}",
            selectedBackground: "{highlight.background}",
            selectedFocusBackground: "{highlight.focus.background}",
            color: "{text.color}",
            focusColor: "{text.hover.color}",
            selectedColor: "{highlight.color}",
            selectedFocusColor: "{highlight.focus.color}",
            icon: {
              color: "{surface.500}",
              focusColor: "{surface.400}"
            }
          },
          optionGroup: {
            background: "transparent",
            color: "{text.muted.color}"
          }
        },
        navigation: {
          item: {
            focusBackground: "{surface.800}",
            activeBackground: "{surface.800}",
            color: "{text.color}",
            focusColor: "{text.hover.color}",
            activeColor: "{text.hover.color}",
            icon: {
              color: "{surface.500}",
              focusColor: "{surface.400}",
              activeColor: "{surface.400}"
            }
          },
          submenuLabel: {
            background: "transparent",
            color: "{text.muted.color}"
          },
          submenuIcon: {
            color: "{surface.500}",
            focusColor: "{surface.400}",
            activeColor: "{surface.400}"
          }
        }
      }
    }
  }
};

// node_modules/@primeng/themes/aura/blockui/index.mjs
var blockui_default = {
  root: {
    borderRadius: "{content.border.radius}"
  }
};

// node_modules/@primeng/themes/aura/breadcrumb/index.mjs
var breadcrumb_default = {
  root: {
    padding: "1rem",
    background: "{content.background}",
    gap: "0.5rem",
    transitionDuration: "{transition.duration}"
  },
  item: {
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    borderRadius: "{content.border.radius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      hoverColor: "{navigation.item.icon.focus.color}"
    },
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  separator: {
    color: "{navigation.item.icon.color}"
  }
};

// node_modules/@primeng/themes/aura/button/index.mjs
var button_default = {
  root: {
    borderRadius: "{form.field.border.radius}",
    roundedBorderRadius: "2rem",
    gap: "0.5rem",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    iconOnlyWidth: "2.5rem",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      paddingX: "{form.field.sm.padding.x}",
      paddingY: "{form.field.sm.padding.y}",
      iconOnlyWidth: "2rem"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      paddingX: "{form.field.lg.padding.x}",
      paddingY: "{form.field.lg.padding.y}",
      iconOnlyWidth: "3rem"
    },
    label: {
      fontWeight: "500"
    },
    raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      offset: "{focus.ring.offset}"
    },
    badgeSize: "1rem",
    transitionDuration: "{form.field.transition.duration}"
  },
  colorScheme: {
    light: {
      root: {
        primary: {
          background: "{primary.color}",
          hoverBackground: "{primary.hover.color}",
          activeBackground: "{primary.active.color}",
          borderColor: "{primary.color}",
          hoverBorderColor: "{primary.hover.color}",
          activeBorderColor: "{primary.active.color}",
          color: "{primary.contrast.color}",
          hoverColor: "{primary.contrast.color}",
          activeColor: "{primary.contrast.color}",
          focusRing: {
            color: "{primary.color}",
            shadow: "none"
          }
        },
        secondary: {
          background: "{surface.100}",
          hoverBackground: "{surface.200}",
          activeBackground: "{surface.300}",
          borderColor: "{surface.100}",
          hoverBorderColor: "{surface.200}",
          activeBorderColor: "{surface.300}",
          color: "{surface.600}",
          hoverColor: "{surface.700}",
          activeColor: "{surface.800}",
          focusRing: {
            color: "{surface.600}",
            shadow: "none"
          }
        },
        info: {
          background: "{sky.500}",
          hoverBackground: "{sky.600}",
          activeBackground: "{sky.700}",
          borderColor: "{sky.500}",
          hoverBorderColor: "{sky.600}",
          activeBorderColor: "{sky.700}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "{sky.500}",
            shadow: "none"
          }
        },
        success: {
          background: "{green.500}",
          hoverBackground: "{green.600}",
          activeBackground: "{green.700}",
          borderColor: "{green.500}",
          hoverBorderColor: "{green.600}",
          activeBorderColor: "{green.700}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "{green.500}",
            shadow: "none"
          }
        },
        warn: {
          background: "{orange.500}",
          hoverBackground: "{orange.600}",
          activeBackground: "{orange.700}",
          borderColor: "{orange.500}",
          hoverBorderColor: "{orange.600}",
          activeBorderColor: "{orange.700}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "{orange.500}",
            shadow: "none"
          }
        },
        help: {
          background: "{purple.500}",
          hoverBackground: "{purple.600}",
          activeBackground: "{purple.700}",
          borderColor: "{purple.500}",
          hoverBorderColor: "{purple.600}",
          activeBorderColor: "{purple.700}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "{purple.500}",
            shadow: "none"
          }
        },
        danger: {
          background: "{red.500}",
          hoverBackground: "{red.600}",
          activeBackground: "{red.700}",
          borderColor: "{red.500}",
          hoverBorderColor: "{red.600}",
          activeBorderColor: "{red.700}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "{red.500}",
            shadow: "none"
          }
        },
        contrast: {
          background: "{surface.950}",
          hoverBackground: "{surface.900}",
          activeBackground: "{surface.800}",
          borderColor: "{surface.950}",
          hoverBorderColor: "{surface.900}",
          activeBorderColor: "{surface.800}",
          color: "{surface.0}",
          hoverColor: "{surface.0}",
          activeColor: "{surface.0}",
          focusRing: {
            color: "{surface.950}",
            shadow: "none"
          }
        }
      },
      outlined: {
        primary: {
          hoverBackground: "{primary.50}",
          activeBackground: "{primary.100}",
          borderColor: "{primary.200}",
          color: "{primary.color}"
        },
        secondary: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          borderColor: "{surface.200}",
          color: "{surface.500}"
        },
        success: {
          hoverBackground: "{green.50}",
          activeBackground: "{green.100}",
          borderColor: "{green.200}",
          color: "{green.500}"
        },
        info: {
          hoverBackground: "{sky.50}",
          activeBackground: "{sky.100}",
          borderColor: "{sky.200}",
          color: "{sky.500}"
        },
        warn: {
          hoverBackground: "{orange.50}",
          activeBackground: "{orange.100}",
          borderColor: "{orange.200}",
          color: "{orange.500}"
        },
        help: {
          hoverBackground: "{purple.50}",
          activeBackground: "{purple.100}",
          borderColor: "{purple.200}",
          color: "{purple.500}"
        },
        danger: {
          hoverBackground: "{red.50}",
          activeBackground: "{red.100}",
          borderColor: "{red.200}",
          color: "{red.500}"
        },
        contrast: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          borderColor: "{surface.700}",
          color: "{surface.950}"
        },
        plain: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          borderColor: "{surface.200}",
          color: "{surface.700}"
        }
      },
      text: {
        primary: {
          hoverBackground: "{primary.50}",
          activeBackground: "{primary.100}",
          color: "{primary.color}"
        },
        secondary: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          color: "{surface.500}"
        },
        success: {
          hoverBackground: "{green.50}",
          activeBackground: "{green.100}",
          color: "{green.500}"
        },
        info: {
          hoverBackground: "{sky.50}",
          activeBackground: "{sky.100}",
          color: "{sky.500}"
        },
        warn: {
          hoverBackground: "{orange.50}",
          activeBackground: "{orange.100}",
          color: "{orange.500}"
        },
        help: {
          hoverBackground: "{purple.50}",
          activeBackground: "{purple.100}",
          color: "{purple.500}"
        },
        danger: {
          hoverBackground: "{red.50}",
          activeBackground: "{red.100}",
          color: "{red.500}"
        },
        contrast: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          color: "{surface.950}"
        },
        plain: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          color: "{surface.700}"
        }
      },
      link: {
        color: "{primary.color}",
        hoverColor: "{primary.color}",
        activeColor: "{primary.color}"
      }
    },
    dark: {
      root: {
        primary: {
          background: "{primary.color}",
          hoverBackground: "{primary.hover.color}",
          activeBackground: "{primary.active.color}",
          borderColor: "{primary.color}",
          hoverBorderColor: "{primary.hover.color}",
          activeBorderColor: "{primary.active.color}",
          color: "{primary.contrast.color}",
          hoverColor: "{primary.contrast.color}",
          activeColor: "{primary.contrast.color}",
          focusRing: {
            color: "{primary.color}",
            shadow: "none"
          }
        },
        secondary: {
          background: "{surface.800}",
          hoverBackground: "{surface.700}",
          activeBackground: "{surface.600}",
          borderColor: "{surface.800}",
          hoverBorderColor: "{surface.700}",
          activeBorderColor: "{surface.600}",
          color: "{surface.300}",
          hoverColor: "{surface.200}",
          activeColor: "{surface.100}",
          focusRing: {
            color: "{surface.300}",
            shadow: "none"
          }
        },
        info: {
          background: "{sky.400}",
          hoverBackground: "{sky.300}",
          activeBackground: "{sky.200}",
          borderColor: "{sky.400}",
          hoverBorderColor: "{sky.300}",
          activeBorderColor: "{sky.200}",
          color: "{sky.950}",
          hoverColor: "{sky.950}",
          activeColor: "{sky.950}",
          focusRing: {
            color: "{sky.400}",
            shadow: "none"
          }
        },
        success: {
          background: "{green.400}",
          hoverBackground: "{green.300}",
          activeBackground: "{green.200}",
          borderColor: "{green.400}",
          hoverBorderColor: "{green.300}",
          activeBorderColor: "{green.200}",
          color: "{green.950}",
          hoverColor: "{green.950}",
          activeColor: "{green.950}",
          focusRing: {
            color: "{green.400}",
            shadow: "none"
          }
        },
        warn: {
          background: "{orange.400}",
          hoverBackground: "{orange.300}",
          activeBackground: "{orange.200}",
          borderColor: "{orange.400}",
          hoverBorderColor: "{orange.300}",
          activeBorderColor: "{orange.200}",
          color: "{orange.950}",
          hoverColor: "{orange.950}",
          activeColor: "{orange.950}",
          focusRing: {
            color: "{orange.400}",
            shadow: "none"
          }
        },
        help: {
          background: "{purple.400}",
          hoverBackground: "{purple.300}",
          activeBackground: "{purple.200}",
          borderColor: "{purple.400}",
          hoverBorderColor: "{purple.300}",
          activeBorderColor: "{purple.200}",
          color: "{purple.950}",
          hoverColor: "{purple.950}",
          activeColor: "{purple.950}",
          focusRing: {
            color: "{purple.400}",
            shadow: "none"
          }
        },
        danger: {
          background: "{red.400}",
          hoverBackground: "{red.300}",
          activeBackground: "{red.200}",
          borderColor: "{red.400}",
          hoverBorderColor: "{red.300}",
          activeBorderColor: "{red.200}",
          color: "{red.950}",
          hoverColor: "{red.950}",
          activeColor: "{red.950}",
          focusRing: {
            color: "{red.400}",
            shadow: "none"
          }
        },
        contrast: {
          background: "{surface.0}",
          hoverBackground: "{surface.100}",
          activeBackground: "{surface.200}",
          borderColor: "{surface.0}",
          hoverBorderColor: "{surface.100}",
          activeBorderColor: "{surface.200}",
          color: "{surface.950}",
          hoverColor: "{surface.950}",
          activeColor: "{surface.950}",
          focusRing: {
            color: "{surface.0}",
            shadow: "none"
          }
        }
      },
      outlined: {
        primary: {
          hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)",
          borderColor: "{primary.700}",
          color: "{primary.color}"
        },
        secondary: {
          hoverBackground: "rgba(255,255,255,0.04)",
          activeBackground: "rgba(255,255,255,0.16)",
          borderColor: "{surface.700}",
          color: "{surface.400}"
        },
        success: {
          hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)",
          borderColor: "{green.700}",
          color: "{green.400}"
        },
        info: {
          hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)",
          borderColor: "{sky.700}",
          color: "{sky.400}"
        },
        warn: {
          hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)",
          borderColor: "{orange.700}",
          color: "{orange.400}"
        },
        help: {
          hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)",
          borderColor: "{purple.700}",
          color: "{purple.400}"
        },
        danger: {
          hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)",
          borderColor: "{red.700}",
          color: "{red.400}"
        },
        contrast: {
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.700}",
          borderColor: "{surface.500}",
          color: "{surface.0}"
        },
        plain: {
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.700}",
          borderColor: "{surface.600}",
          color: "{surface.0}"
        }
      },
      text: {
        primary: {
          hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)",
          color: "{primary.color}"
        },
        secondary: {
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.700}",
          color: "{surface.400}"
        },
        success: {
          hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)",
          color: "{green.400}"
        },
        info: {
          hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)",
          color: "{sky.400}"
        },
        warn: {
          hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)",
          color: "{orange.400}"
        },
        help: {
          hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)",
          color: "{purple.400}"
        },
        danger: {
          hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)",
          color: "{red.400}"
        },
        contrast: {
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.700}",
          color: "{surface.0}"
        },
        plain: {
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.700}",
          color: "{surface.0}"
        }
      },
      link: {
        color: "{primary.color}",
        hoverColor: "{primary.color}",
        activeColor: "{primary.color}"
      }
    }
  }
};

// node_modules/@primeng/themes/aura/card/index.mjs
var card_default = {
  root: {
    background: "{content.background}",
    borderRadius: "{border.radius.xl}",
    color: "{content.color}",
    shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
  },
  body: {
    padding: "1.25rem",
    gap: "0.5rem"
  },
  caption: {
    gap: "0.5rem"
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "500"
  },
  subtitle: {
    color: "{text.muted.color}"
  }
};

// node_modules/@primeng/themes/aura/carousel/index.mjs
var carousel_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  content: {
    gap: "0.25rem"
  },
  indicatorList: {
    padding: "1rem",
    gap: "0.5rem"
  },
  indicator: {
    width: "2rem",
    height: "0.5rem",
    borderRadius: "{content.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  colorScheme: {
    light: {
      indicator: {
        background: "{surface.200}",
        hoverBackground: "{surface.300}",
        activeBackground: "{primary.color}"
      }
    },
    dark: {
      indicator: {
        background: "{surface.700}",
        hoverBackground: "{surface.600}",
        activeBackground: "{primary.color}"
      }
    }
  }
};

// node_modules/@primeng/themes/aura/cascadeselect/index.mjs
var cascadeselect_default = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledHoverBackground: "{form.field.filled.hover.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      paddingX: "{form.field.sm.padding.x}",
      paddingY: "{form.field.sm.padding.y}"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      paddingX: "{form.field.lg.padding.x}",
      paddingY: "{form.field.lg.padding.y}"
    }
  },
  dropdown: {
    width: "2.5rem",
    color: "{form.field.icon.color}"
  },
  overlay: {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}"
  },
  list: {
    padding: "{list.padding}",
    gap: "{list.gap}",
    mobileIndent: "1rem"
  },
  option: {
    focusBackground: "{list.option.focus.background}",
    selectedBackground: "{list.option.selected.background}",
    selectedFocusBackground: "{list.option.selected.focus.background}",
    color: "{list.option.color}",
    focusColor: "{list.option.focus.color}",
    selectedColor: "{list.option.selected.color}",
    selectedFocusColor: "{list.option.selected.focus.color}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.border.radius}",
    icon: {
      color: "{list.option.icon.color}",
      focusColor: "{list.option.icon.focus.color}",
      size: "0.875rem"
    }
  },
  clearIcon: {
    color: "{form.field.icon.color}"
  }
};

// node_modules/@primeng/themes/aura/checkbox/index.mjs
var checkbox_default = {
  root: {
    borderRadius: "{border.radius.sm}",
    width: "1.25rem",
    height: "1.25rem",
    background: "{form.field.background}",
    checkedBackground: "{primary.color}",
    checkedHoverBackground: "{primary.hover.color}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.border.color}",
    checkedBorderColor: "{primary.color}",
    checkedHoverBorderColor: "{primary.hover.color}",
    checkedFocusBorderColor: "{primary.color}",
    checkedDisabledBorderColor: "{form.field.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    shadow: "{form.field.shadow}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      width: "1rem",
      height: "1rem"
    },
    lg: {
      width: "1.5rem",
      height: "1.5rem"
    }
  },
  icon: {
    size: "0.875rem",
    color: "{form.field.color}",
    checkedColor: "{primary.contrast.color}",
    checkedHoverColor: "{primary.contrast.color}",
    disabledColor: "{form.field.disabled.color}",
    sm: {
      size: "0.75rem"
    },
    lg: {
      size: "1rem"
    }
  }
};

// node_modules/@primeng/themes/aura/chip/index.mjs
var chip_default = {
  root: {
    borderRadius: "16px",
    paddingX: "0.75rem",
    paddingY: "0.5rem",
    gap: "0.5rem",
    transitionDuration: "{transition.duration}"
  },
  image: {
    width: "2rem",
    height: "2rem"
  },
  icon: {
    size: "1rem"
  },
  removeIcon: {
    size: "1rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    }
  },
  colorScheme: {
    light: {
      root: {
        background: "{surface.100}",
        color: "{surface.800}"
      },
      icon: {
        color: "{surface.800}"
      },
      removeIcon: {
        color: "{surface.800}"
      }
    },
    dark: {
      root: {
        background: "{surface.800}",
        color: "{surface.0}"
      },
      icon: {
        color: "{surface.0}"
      },
      removeIcon: {
        color: "{surface.0}"
      }
    }
  }
};

// node_modules/@primeng/themes/aura/colorpicker/index.mjs
var colorpicker_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  preview: {
    width: "1.5rem",
    height: "1.5rem",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  panel: {
    shadow: "{overlay.popover.shadow}",
    borderRadius: "{overlay.popover.borderRadius}"
  },
  colorScheme: {
    light: {
      panel: {
        background: "{surface.800}",
        borderColor: "{surface.900}"
      },
      handle: {
        color: "{surface.0}"
      }
    },
    dark: {
      panel: {
        background: "{surface.900}",
        borderColor: "{surface.700}"
      },
      handle: {
        color: "{surface.0}"
      }
    }
  }
};

// node_modules/@primeng/themes/aura/confirmdialog/index.mjs
var confirmdialog_default = {
  icon: {
    size: "2rem",
    color: "{overlay.modal.color}"
  },
  content: {
    gap: "1rem"
  }
};

// node_modules/@primeng/themes/aura/confirmpopup/index.mjs
var confirmpopup_default = {
  root: {
    background: "{overlay.popover.background}",
    borderColor: "{overlay.popover.border.color}",
    color: "{overlay.popover.color}",
    borderRadius: "{overlay.popover.border.radius}",
    shadow: "{overlay.popover.shadow}",
    gutter: "10px",
    arrowOffset: "1.25rem"
  },
  content: {
    padding: "{overlay.popover.padding}",
    gap: "1rem"
  },
  icon: {
    size: "1.5rem",
    color: "{overlay.popover.color}"
  },
  footer: {
    gap: "0.5rem",
    padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"
  }
};

// node_modules/@primeng/themes/aura/contextmenu/index.mjs
var contextmenu_default = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}",
    shadow: "{overlay.navigation.shadow}",
    transitionDuration: "{transition.duration}"
  },
  list: {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}"
  },
  item: {
    focusBackground: "{navigation.item.focus.background}",
    activeBackground: "{navigation.item.active.background}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focus.color}",
    activeColor: "{navigation.item.active.color}",
    padding: "{navigation.item.padding}",
    borderRadius: "{navigation.item.border.radius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focus.color}",
      activeColor: "{navigation.item.icon.active.color}"
    }
  },
  submenu: {
    mobileIndent: "1rem"
  },
  submenuIcon: {
    size: "{navigation.submenu.icon.size}",
    color: "{navigation.submenu.icon.color}",
    focusColor: "{navigation.submenu.icon.focus.color}",
    activeColor: "{navigation.submenu.icon.active.color}"
  },
  separator: {
    borderColor: "{content.border.color}"
  }
};

// node_modules/@primeng/themes/aura/datatable/index.mjs
var datatable_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  header: {
    background: "{content.background}",
    borderColor: "{datatable.border.color}",
    color: "{content.color}",
    borderWidth: "0 0 1px 0",
    padding: "0.75rem 1rem",
    sm: {
      padding: "0.375rem 0.5rem"
    },
    lg: {
      padding: "1rem 1.25rem"
    }
  },
  headerCell: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    borderColor: "{datatable.border.color}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    selectedColor: "{highlight.color}",
    gap: "0.5rem",
    padding: "0.75rem 1rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    },
    sm: {
      padding: "0.375rem 0.5rem"
    },
    lg: {
      padding: "1rem 1.25rem"
    }
  },
  columnTitle: {
    fontWeight: "600"
  },
  row: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    selectedColor: "{highlight.color}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    }
  },
  bodyCell: {
    borderColor: "{datatable.border.color}",
    padding: "0.75rem 1rem",
    sm: {
      padding: "0.375rem 0.5rem"
    },
    lg: {
      padding: "1rem 1.25rem"
    }
  },
  footerCell: {
    background: "{content.background}",
    borderColor: "{datatable.border.color}",
    color: "{content.color}",
    padding: "0.75rem 1rem",
    sm: {
      padding: "0.375rem 0.5rem"
    },
    lg: {
      padding: "1rem 1.25rem"
    }
  },
  columnFooter: {
    fontWeight: "600"
  },
  footer: {
    background: "{content.background}",
    borderColor: "{datatable.border.color}",
    color: "{content.color}",
    borderWidth: "0 0 1px 0",
    padding: "0.75rem 1rem",
    sm: {
      padding: "0.375rem 0.5rem"
    },
    lg: {
      padding: "1rem 1.25rem"
    }
  },
  dropPoint: {
    color: "{primary.color}"
  },
  columnResizer: {
    width: "0.5rem"
  },
  resizeIndicator: {
    width: "1px",
    color: "{primary.color}"
  },
  sortIcon: {
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    size: "0.875rem"
  },
  loadingIcon: {
    size: "2rem"
  },
  rowToggleButton: {
    hoverBackground: "{content.hover.background}",
    selectedHoverBackground: "{content.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    selectedHoverColor: "{primary.color}",
    size: "1.75rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  filter: {
    inlineGap: "0.5rem",
    overlaySelect: {
      background: "{overlay.select.background}",
      borderColor: "{overlay.select.border.color}",
      borderRadius: "{overlay.select.border.radius}",
      color: "{overlay.select.color}",
      shadow: "{overlay.select.shadow}"
    },
    overlayPopover: {
      background: "{overlay.popover.background}",
      borderColor: "{overlay.popover.border.color}",
      borderRadius: "{overlay.popover.border.radius}",
      color: "{overlay.popover.color}",
      shadow: "{overlay.popover.shadow}",
      padding: "{overlay.popover.padding}",
      gap: "0.5rem"
    },
    rule: {
      borderColor: "{content.border.color}"
    },
    constraintList: {
      padding: "{list.padding}",
      gap: "{list.gap}"
    },
    constraint: {
      focusBackground: "{list.option.focus.background}",
      selectedBackground: "{list.option.selected.background}",
      selectedFocusBackground: "{list.option.selected.focus.background}",
      color: "{list.option.color}",
      focusColor: "{list.option.focus.color}",
      selectedColor: "{list.option.selected.color}",
      selectedFocusColor: "{list.option.selected.focus.color}",
      separator: {
        borderColor: "{content.border.color}"
      },
      padding: "{list.option.padding}",
      borderRadius: "{list.option.border.radius}"
    }
  },
  paginatorTop: {
    borderColor: "{datatable.border.color}",
    borderWidth: "0 0 1px 0"
  },
  paginatorBottom: {
    borderColor: "{datatable.border.color}",
    borderWidth: "0 0 1px 0"
  },
  colorScheme: {
    light: {
      root: {
        borderColor: "{content.border.color}"
      },
      row: {
        stripedBackground: "{surface.50}"
      },
      bodyCell: {
        selectedBorderColor: "{primary.100}"
      }
    },
    dark: {
      root: {
        borderColor: "{surface.800}"
      },
      row: {
        stripedBackground: "{surface.950}"
      },
      bodyCell: {
        selectedBorderColor: "{primary.900}"
      }
    }
  }
};

// node_modules/@primeng/themes/aura/dataview/index.mjs
var dataview_default = {
  root: {
    borderColor: "transparent",
    borderWidth: "0",
    borderRadius: "0",
    padding: "0"
  },
  header: {
    background: "{content.background}",
    color: "{content.color}",
    borderColor: "{content.border.color}",
    borderWidth: "0 0 1px 0",
    padding: "0.75rem 1rem",
    borderRadius: "0"
  },
  content: {
    background: "{content.background}",
    color: "{content.color}",
    borderColor: "transparent",
    borderWidth: "0",
    padding: "0",
    borderRadius: "0"
  },
  footer: {
    background: "{content.background}",
    color: "{content.color}",
    borderColor: "{content.border.color}",
    borderWidth: "1px 0 0 0",
    padding: "0.75rem 1rem",
    borderRadius: "0"
  },
  paginatorTop: {
    borderColor: "{content.border.color}",
    borderWidth: "0 0 1px 0"
  },
  paginatorBottom: {
    borderColor: "{content.border.color}",
    borderWidth: "1px 0 0 0"
  }
};

// node_modules/@primeng/themes/aura/datepicker/index.mjs
var datepicker_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  panel: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}",
    shadow: "{overlay.popover.shadow}",
    padding: "{overlay.popover.padding}"
  },
  header: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    padding: "0 0 0.5rem 0"
  },
  title: {
    gap: "0.5rem",
    fontWeight: "500"
  },
  dropdown: {
    width: "2.5rem",
    sm: {
      width: "2rem"
    },
    lg: {
      width: "3rem"
    },
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.border.color}",
    activeBorderColor: "{form.field.border.color}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  inputIcon: {
    color: "{form.field.icon.color}"
  },
  selectMonth: {
    hoverBackground: "{content.hover.background}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    padding: "0.25rem 0.5rem",
    borderRadius: "{content.border.radius}"
  },
  selectYear: {
    hoverBackground: "{content.hover.background}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    padding: "0.25rem 0.5rem",
    borderRadius: "{content.border.radius}"
  },
  group: {
    borderColor: "{content.border.color}",
    gap: "{overlay.popover.padding}"
  },
  dayView: {
    margin: "0.5rem 0 0 0"
  },
  weekDay: {
    padding: "0.25rem",
    fontWeight: "500",
    color: "{content.color}"
  },
  date: {
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{primary.color}",
    rangeSelectedBackground: "{highlight.background}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    selectedColor: "{primary.contrast.color}",
    rangeSelectedColor: "{highlight.color}",
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
    padding: "0.25rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  monthView: {
    margin: "0.5rem 0 0 0"
  },
  month: {
    padding: "0.375rem",
    borderRadius: "{content.border.radius}"
  },
  yearView: {
    margin: "0.5rem 0 0 0"
  },
  year: {
    padding: "0.375rem",
    borderRadius: "{content.border.radius}"
  },
  buttonbar: {
    padding: "0.5rem 0 0 0",
    borderColor: "{content.border.color}"
  },
  timePicker: {
    padding: "0.5rem 0 0 0",
    borderColor: "{content.border.color}",
    gap: "0.5rem",
    buttonGap: "0.25rem"
  },
  colorScheme: {
    light: {
      dropdown: {
        background: "{surface.100}",
        hoverBackground: "{surface.200}",
        activeBackground: "{surface.300}",
        color: "{surface.600}",
        hoverColor: "{surface.700}",
        activeColor: "{surface.800}"
      },
      today: {
        background: "{surface.200}",
        color: "{surface.900}"
      }
    },
    dark: {
      dropdown: {
        background: "{surface.800}",
        hoverBackground: "{surface.700}",
        activeBackground: "{surface.600}",
        color: "{surface.300}",
        hoverColor: "{surface.200}",
        activeColor: "{surface.100}"
      },
      today: {
        background: "{surface.700}",
        color: "{surface.0}"
      }
    }
  }
};

// node_modules/@primeng/themes/aura/dialog/index.mjs
var dialog_default = {
  root: {
    background: "{overlay.modal.background}",
    borderColor: "{overlay.modal.border.color}",
    color: "{overlay.modal.color}",
    borderRadius: "{overlay.modal.border.radius}",
    shadow: "{overlay.modal.shadow}"
  },
  header: {
    padding: "{overlay.modal.padding}",
    gap: "0.5rem"
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "600"
  },
  content: {
    padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
  },
  footer: {
    padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",
    gap: "0.5rem"
  }
};

// node_modules/@primeng/themes/aura/divider/index.mjs
var divider_default = {
  root: {
    borderColor: "{content.border.color}"
  },
  content: {
    background: "{content.background}",
    color: "{text.color}"
  },
  horizontal: {
    margin: "1rem 0",
    padding: "0 1rem",
    content: {
      padding: "0 0.5rem"
    }
  },
  vertical: {
    margin: "0 1rem",
    padding: "0.5rem 0",
    content: {
      padding: "0.5rem 0"
    }
  }
};

// node_modules/@primeng/themes/aura/dock/index.mjs
var dock_default = {
  root: {
    background: "rgba(255, 255, 255, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.2)",
    padding: "0.5rem",
    borderRadius: "{border.radius.xl}"
  },
  item: {
    borderRadius: "{content.border.radius}",
    padding: "0.5rem",
    size: "3rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  }
};

// node_modules/@primeng/themes/aura/drawer/index.mjs
var drawer_default = {
  root: {
    background: "{overlay.modal.background}",
    borderColor: "{overlay.modal.border.color}",
    color: "{overlay.modal.color}",
    shadow: "{overlay.modal.shadow}"
  },
  header: {
    padding: "{overlay.modal.padding}"
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "600"
  },
  content: {
    padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
  },
  footer: {
    padding: "{overlay.modal.padding}"
  }
};

// node_modules/@primeng/themes/aura/editor/index.mjs
var editor_default = {
  toolbar: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}"
  },
  toolbarItem: {
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{primary.color}"
  },
  overlay: {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}",
    padding: "{list.padding}"
  },
  overlayOption: {
    focusBackground: "{list.option.focus.background}",
    color: "{list.option.color}",
    focusColor: "{list.option.focus.color}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.border.radius}"
  },
  content: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}"
  }
};

// node_modules/@primeng/themes/aura/fieldset/index.mjs
var fieldset_default = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    padding: "0 1.125rem 1.125rem 1.125rem",
    transitionDuration: "{transition.duration}"
  },
  legend: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    borderRadius: "{content.border.radius}",
    borderWidth: "1px",
    borderColor: "transparent",
    padding: "0.5rem 0.75rem",
    gap: "0.5rem",
    fontWeight: "600",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  toggleIcon: {
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}"
  },
  content: {
    padding: "0"
  }
};

// node_modules/@primeng/themes/aura/fileupload/index.mjs
var fileupload_default = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}",
    transitionDuration: "{transition.duration}"
  },
  header: {
    background: "transparent",
    color: "{text.color}",
    padding: "1.125rem",
    borderColor: "unset",
    borderWidth: "0",
    borderRadius: "0",
    gap: "0.5rem"
  },
  content: {
    highlightBorderColor: "{primary.color}",
    padding: "0 1.125rem 1.125rem 1.125rem",
    gap: "1rem"
  },
  file: {
    padding: "1rem",
    gap: "1rem",
    borderColor: "{content.border.color}",
    info: {
      gap: "0.5rem"
    }
  },
  fileList: {
    gap: "0.5rem"
  },
  progressbar: {
    height: "0.25rem"
  },
  basic: {
    gap: "0.5rem"
  }
};

// node_modules/@primeng/themes/aura/floatlabel/index.mjs
var floatlabel_default = {
  root: {
    color: "{form.field.float.label.color}",
    focusColor: "{form.field.float.label.focus.color}",
    activeColor: "{form.field.float.label.active.color}",
    invalidColor: "{form.field.float.label.invalid.color}",
    transitionDuration: "0.2s",
    positionX: "{form.field.padding.x}",
    positionY: "{form.field.padding.y}",
    fontWeight: "500",
    active: {
      fontSize: "0.75rem",
      fontWeight: "400"
    }
  },
  over: {
    active: {
      top: "-1.25rem"
    }
  },
  in: {
    input: {
      paddingTop: "1.5rem",
      paddingBottom: "{form.field.padding.y}"
    },
    active: {
      top: "{form.field.padding.y}"
    }
  },
  on: {
    borderRadius: "{border.radius.xs}",
    active: {
      background: "{form.field.background}",
      padding: "0 0.125rem"
    }
  }
};

// node_modules/@primeng/themes/aura/galleria/index.mjs
var galleria_default = {
  root: {
    borderWidth: "1px",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    transitionDuration: "{transition.duration}"
  },
  navButton: {
    background: "rgba(255, 255, 255, 0.1)",
    hoverBackground: "rgba(255, 255, 255, 0.2)",
    color: "{surface.100}",
    hoverColor: "{surface.0}",
    size: "3rem",
    gutter: "0.5rem",
    prev: {
      borderRadius: "50%"
    },
    next: {
      borderRadius: "50%"
    },
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  navIcon: {
    size: "1.5rem"
  },
  thumbnailsContent: {
    background: "{content.background}",
    padding: "1rem 0.25rem"
  },
  thumbnailNavButton: {
    size: "2rem",
    borderRadius: "{content.border.radius}",
    gutter: "0.5rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  thumbnailNavButtonIcon: {
    size: "1rem"
  },
  caption: {
    background: "rgba(0, 0, 0, 0.5)",
    color: "{surface.100}",
    padding: "1rem"
  },
  indicatorList: {
    gap: "0.5rem",
    padding: "1rem"
  },
  indicatorButton: {
    width: "1rem",
    height: "1rem",
    activeBackground: "{primary.color}",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  insetIndicatorList: {
    background: "rgba(0, 0, 0, 0.5)"
  },
  insetIndicatorButton: {
    background: "rgba(255, 255, 255, 0.4)",
    hoverBackground: "rgba(255, 255, 255, 0.6)",
    activeBackground: "rgba(255, 255, 255, 0.9)"
  },
  closeButton: {
    size: "3rem",
    gutter: "0.5rem",
    background: "rgba(255, 255, 255, 0.1)",
    hoverBackground: "rgba(255, 255, 255, 0.2)",
    color: "{surface.50}",
    hoverColor: "{surface.0}",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  closeButtonIcon: {
    size: "1.5rem"
  },
  colorScheme: {
    light: {
      thumbnailNavButton: {
        hoverBackground: "{surface.100}",
        color: "{surface.600}",
        hoverColor: "{surface.700}"
      },
      indicatorButton: {
        background: "{surface.200}",
        hoverBackground: "{surface.300}"
      }
    },
    dark: {
      thumbnailNavButton: {
        hoverBackground: "{surface.700}",
        color: "{surface.400}",
        hoverColor: "{surface.0}"
      },
      indicatorButton: {
        background: "{surface.700}",
        hoverBackground: "{surface.600}"
      }
    }
  }
};

// node_modules/@primeng/themes/aura/iconfield/index.mjs
var iconfield_default = {
  icon: {
    color: "{form.field.icon.color}"
  }
};

// node_modules/@primeng/themes/aura/iftalabel/index.mjs
var iftalabel_default = {
  root: {
    color: "{form.field.float.label.color}",
    focusColor: "{form.field.float.label.focus.color}",
    invalidColor: "{form.field.float.label.invalid.color}",
    transitionDuration: "0.2s",
    positionX: "{form.field.padding.x}",
    top: "{form.field.padding.y}",
    fontSize: "0.75rem",
    fontWeight: "400"
  },
  input: {
    paddingTop: "1.5rem",
    paddingBottom: "{form.field.padding.y}"
  }
};

// node_modules/@primeng/themes/aura/image/index.mjs
var image_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  preview: {
    icon: {
      size: "1.5rem"
    },
    mask: {
      background: "{mask.background}",
      color: "{mask.color}"
    }
  },
  toolbar: {
    position: {
      left: "auto",
      right: "1rem",
      top: "1rem",
      bottom: "auto"
    },
    blur: "8px",
    background: "rgba(255,255,255,0.1)",
    borderColor: "rgba(255,255,255,0.2)",
    borderWidth: "1px",
    borderRadius: "30px",
    padding: ".5rem",
    gap: "0.5rem"
  },
  action: {
    hoverBackground: "rgba(255,255,255,0.1)",
    color: "{surface.50}",
    hoverColor: "{surface.0}",
    size: "3rem",
    iconSize: "1.5rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  }
};

// node_modules/@primeng/themes/aura/imagecompare/index.mjs
var imagecompare_default = {
  handle: {
    size: "15px",
    hoverSize: "30px",
    background: "rgba(255,255,255,0.3)",
    hoverBackground: "rgba(255,255,255,0.3)",
    borderColor: "unset",
    hoverBorderColor: "unset",
    borderWidth: "0",
    borderRadius: "50%",
    transitionDuration: "{transition.duration}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "rgba(255,255,255,0.3)",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  }
};

// node_modules/@primeng/themes/aura/inlinemessage/index.mjs
var inlinemessage_default = {
  root: {
    padding: "{form.field.padding.y} {form.field.padding.x}",
    borderRadius: "{content.border.radius}",
    gap: "0.5rem"
  },
  text: {
    fontWeight: "500"
  },
  icon: {
    size: "1rem"
  },
  colorScheme: {
    light: {
      info: {
        background: "color-mix(in srgb, {blue.50}, transparent 5%)",
        borderColor: "{blue.200}",
        color: "{blue.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
      },
      success: {
        background: "color-mix(in srgb, {green.50}, transparent 5%)",
        borderColor: "{green.200}",
        color: "{green.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"
      },
      warn: {
        background: "color-mix(in srgb,{yellow.50}, transparent 5%)",
        borderColor: "{yellow.200}",
        color: "{yellow.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
      },
      error: {
        background: "color-mix(in srgb, {red.50}, transparent 5%)",
        borderColor: "{red.200}",
        color: "{red.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
      },
      secondary: {
        background: "{surface.100}",
        borderColor: "{surface.200}",
        color: "{surface.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
      },
      contrast: {
        background: "{surface.900}",
        borderColor: "{surface.950}",
        color: "{surface.50}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
      }
    },
    dark: {
      info: {
        background: "color-mix(in srgb, {blue.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)",
        color: "{blue.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
      },
      success: {
        background: "color-mix(in srgb, {green.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {green.700}, transparent 64%)",
        color: "{green.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"
      },
      warn: {
        background: "color-mix(in srgb, {yellow.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)",
        color: "{yellow.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
      },
      error: {
        background: "color-mix(in srgb, {red.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {red.700}, transparent 64%)",
        color: "{red.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
      },
      secondary: {
        background: "{surface.800}",
        borderColor: "{surface.700}",
        color: "{surface.300}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
      },
      contrast: {
        background: "{surface.0}",
        borderColor: "{surface.100}",
        color: "{surface.950}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
      }
    }
  }
};

// node_modules/@primeng/themes/aura/inplace/index.mjs
var inplace_default = {
  root: {
    padding: "{form.field.padding.y} {form.field.padding.x}",
    borderRadius: "{content.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    },
    transitionDuration: "{transition.duration}"
  },
  display: {
    hoverBackground: "{content.hover.background}",
    hoverColor: "{content.hover.color}"
  }
};

// node_modules/@primeng/themes/aura/inputchips/index.mjs
var inputchips_default = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}"
  },
  chip: {
    borderRadius: "{border.radius.sm}"
  },
  colorScheme: {
    light: {
      chip: {
        focusBackground: "{surface.200}",
        color: "{surface.800}"
      }
    },
    dark: {
      chip: {
        focusBackground: "{surface.700}",
        color: "{surface.0}"
      }
    }
  }
};

// node_modules/@primeng/themes/aura/inputgroup/index.mjs
var inputgroup_default = {
  addon: {
    background: "{form.field.background}",
    borderColor: "{form.field.border.color}",
    color: "{form.field.icon.color}",
    borderRadius: "{form.field.border.radius}",
    padding: "0.5rem",
    minWidth: "2.5rem"
  }
};

// node_modules/@primeng/themes/aura/inputnumber/index.mjs
var inputnumber_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  button: {
    width: "2.5rem",
    borderRadius: "{form.field.border.radius}",
    verticalPadding: "{form.field.padding.y}"
  },
  colorScheme: {
    light: {
      button: {
        background: "transparent",
        hoverBackground: "{surface.100}",
        activeBackground: "{surface.200}",
        borderColor: "{form.field.border.color}",
        hoverBorderColor: "{form.field.border.color}",
        activeBorderColor: "{form.field.border.color}",
        color: "{surface.400}",
        hoverColor: "{surface.500}",
        activeColor: "{surface.600}"
      }
    },
    dark: {
      button: {
        background: "transparent",
        hoverBackground: "{surface.800}",
        activeBackground: "{surface.700}",
        borderColor: "{form.field.border.color}",
        hoverBorderColor: "{form.field.border.color}",
        activeBorderColor: "{form.field.border.color}",
        color: "{surface.400}",
        hoverColor: "{surface.300}",
        activeColor: "{surface.200}"
      }
    }
  }
};

// node_modules/@primeng/themes/aura/inputotp/index.mjs
var inputotp_default = {
  root: {
    gap: "0.5rem"
  },
  input: {
    width: "2.5rem",
    sm: {
      width: "2rem"
    },
    lg: {
      width: "3rem"
    }
  }
};

// node_modules/@primeng/themes/aura/inputtext/index.mjs
var inputtext_default = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledHoverBackground: "{form.field.filled.hover.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      paddingX: "{form.field.sm.padding.x}",
      paddingY: "{form.field.sm.padding.y}"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      paddingX: "{form.field.lg.padding.x}",
      paddingY: "{form.field.lg.padding.y}"
    }
  }
};

// node_modules/@primeng/themes/aura/knob/index.mjs
var knob_default = {
  root: {
    transitionDuration: "{transition.duration}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  value: {
    background: "{primary.color}"
  },
  range: {
    background: "{content.border.color}"
  },
  text: {
    color: "{text.muted.color}"
  }
};

// node_modules/@primeng/themes/aura/listbox/index.mjs
var listbox_default = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    borderColor: "{form.field.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    shadow: "{form.field.shadow}",
    borderRadius: "{form.field.border.radius}",
    transitionDuration: "{form.field.transition.duration}"
  },
  list: {
    padding: "{list.padding}",
    gap: "{list.gap}",
    header: {
      padding: "{list.header.padding}"
    }
  },
  option: {
    focusBackground: "{list.option.focus.background}",
    selectedBackground: "{list.option.selected.background}",
    selectedFocusBackground: "{list.option.selected.focus.background}",
    color: "{list.option.color}",
    focusColor: "{list.option.focus.color}",
    selectedColor: "{list.option.selected.color}",
    selectedFocusColor: "{list.option.selected.focus.color}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.border.radius}"
  },
  optionGroup: {
    background: "{list.option.group.background}",
    color: "{list.option.group.color}",
    fontWeight: "{list.option.group.font.weight}",
    padding: "{list.option.group.padding}"
  },
  checkmark: {
    color: "{list.option.color}",
    gutterStart: "-0.375rem",
    gutterEnd: "0.375rem"
  },
  emptyMessage: {
    padding: "{list.option.padding}"
  },
  colorScheme: {
    light: {
      option: {
        stripedBackground: "{surface.50}"
      }
    },
    dark: {
      option: {
        stripedBackground: "{surface.900}"
      }
    }
  }
};

// node_modules/@primeng/themes/aura/megamenu/index.mjs
var megamenu_default = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    gap: "0.5rem",
    verticalOrientation: {
      padding: "{navigation.list.padding}",
      gap: "{navigation.list.gap}"
    },
    horizontalOrientation: {
      padding: "0.5rem 0.75rem",
      gap: "0.5rem"
    },
    transitionDuration: "{transition.duration}"
  },
  baseItem: {
    borderRadius: "{content.border.radius}",
    padding: "{navigation.item.padding}"
  },
  item: {
    focusBackground: "{navigation.item.focus.background}",
    activeBackground: "{navigation.item.active.background}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focus.color}",
    activeColor: "{navigation.item.active.color}",
    padding: "{navigation.item.padding}",
    borderRadius: "{navigation.item.border.radius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focus.color}",
      activeColor: "{navigation.item.icon.active.color}"
    }
  },
  overlay: {
    padding: "0",
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    shadow: "{overlay.navigation.shadow}",
    gap: "0.5rem"
  },
  submenu: {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}"
  },
  submenuLabel: {
    padding: "{navigation.submenu.label.padding}",
    fontWeight: "{navigation.submenu.label.font.weight}",
    background: "{navigation.submenu.label.background.}",
    color: "{navigation.submenu.label.color}"
  },
  submenuIcon: {
    size: "{navigation.submenu.icon.size}",
    color: "{navigation.submenu.icon.color}",
    focusColor: "{navigation.submenu.icon.focus.color}",
    activeColor: "{navigation.submenu.icon.active.color}"
  },
  separator: {
    borderColor: "{content.border.color}"
  },
  mobileButton: {
    borderRadius: "50%",
    size: "1.75rem",
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    hoverBackground: "{content.hover.background}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  }
};

// node_modules/@primeng/themes/aura/menu/index.mjs
var menu_default = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}",
    shadow: "{overlay.navigation.shadow}",
    transitionDuration: "{transition.duration}"
  },
  list: {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}"
  },
  item: {
    focusBackground: "{navigation.item.focus.background}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focus.color}",
    padding: "{navigation.item.padding}",
    borderRadius: "{navigation.item.border.radius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focus.color}"
    }
  },
  submenuLabel: {
    padding: "{navigation.submenu.label.padding}",
    fontWeight: "{navigation.submenu.label.font.weight}",
    background: "{navigation.submenu.label.background}",
    color: "{navigation.submenu.label.color}"
  },
  separator: {
    borderColor: "{content.border.color}"
  }
};

// node_modules/@primeng/themes/aura/menubar/index.mjs
var menubar_default = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    gap: "0.5rem",
    padding: "0.5rem 0.75rem",
    transitionDuration: "{transition.duration}"
  },
  baseItem: {
    borderRadius: "{content.border.radius}",
    padding: "{navigation.item.padding}"
  },
  item: {
    focusBackground: "{navigation.item.focus.background}",
    activeBackground: "{navigation.item.active.background}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focus.color}",
    activeColor: "{navigation.item.active.color}",
    padding: "{navigation.item.padding}",
    borderRadius: "{navigation.item.border.radius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focus.color}",
      activeColor: "{navigation.item.icon.active.color}"
    }
  },
  submenu: {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}",
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    shadow: "{overlay.navigation.shadow}",
    mobileIndent: "1rem",
    icon: {
      size: "{navigation.submenu.icon.size}",
      color: "{navigation.submenu.icon.color}",
      focusColor: "{navigation.submenu.icon.focus.color}",
      activeColor: "{navigation.submenu.icon.active.color}"
    }
  },
  separator: {
    borderColor: "{content.border.color}"
  },
  mobileButton: {
    borderRadius: "50%",
    size: "1.75rem",
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    hoverBackground: "{content.hover.background}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  }
};

// node_modules/@primeng/themes/aura/message/index.mjs
var message_default = {
  root: {
    borderRadius: "{content.border.radius}",
    borderWidth: "1px",
    transitionDuration: "{transition.duration}"
  },
  content: {
    padding: "0.5rem 0.75rem",
    gap: "0.5rem",
    sm: {
      padding: "0.375rem 0.625rem"
    },
    lg: {
      padding: "0.625rem 0.875rem"
    }
  },
  text: {
    fontSize: "1rem",
    fontWeight: "500",
    sm: {
      fontSize: "0.875rem"
    },
    lg: {
      fontSize: "1.125rem"
    }
  },
  icon: {
    size: "1.125rem",
    sm: {
      size: "1rem"
    },
    lg: {
      size: "1.25rem"
    }
  },
  closeButton: {
    width: "1.75rem",
    height: "1.75rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      offset: "{focus.ring.offset}"
    }
  },
  closeIcon: {
    size: "1rem",
    sm: {
      size: "0.875rem"
    },
    lg: {
      size: "1.125rem"
    }
  },
  outlined: {
    root: {
      borderWidth: "1px"
    }
  },
  simple: {
    content: {
      padding: "0"
    }
  },
  colorScheme: {
    light: {
      info: {
        background: "color-mix(in srgb, {blue.50}, transparent 5%)",
        borderColor: "{blue.200}",
        color: "{blue.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{blue.100}",
          focusRing: {
            color: "{blue.600}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{blue.600}",
          borderColor: "{blue.600}"
        },
        simple: {
          color: "{blue.600}"
        }
      },
      success: {
        background: "color-mix(in srgb, {green.50}, transparent 5%)",
        borderColor: "{green.200}",
        color: "{green.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{green.100}",
          focusRing: {
            color: "{green.600}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{green.600}",
          borderColor: "{green.600}"
        },
        simple: {
          color: "{green.600}"
        }
      },
      warn: {
        background: "color-mix(in srgb,{yellow.50}, transparent 5%)",
        borderColor: "{yellow.200}",
        color: "{yellow.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{yellow.100}",
          focusRing: {
            color: "{yellow.600}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{yellow.600}",
          borderColor: "{yellow.600}"
        },
        simple: {
          color: "{yellow.600}"
        }
      },
      error: {
        background: "color-mix(in srgb, {red.50}, transparent 5%)",
        borderColor: "{red.200}",
        color: "{red.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{red.100}",
          focusRing: {
            color: "{red.600}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{red.600}",
          borderColor: "{red.600}"
        },
        simple: {
          color: "{red.600}"
        }
      },
      secondary: {
        background: "{surface.100}",
        borderColor: "{surface.200}",
        color: "{surface.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{surface.200}",
          focusRing: {
            color: "{surface.600}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{surface.500}",
          borderColor: "{surface.500}"
        },
        simple: {
          color: "{surface.500}"
        }
      },
      contrast: {
        background: "{surface.900}",
        borderColor: "{surface.950}",
        color: "{surface.50}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
        closeButton: {
          hoverBackground: "{surface.800}",
          focusRing: {
            color: "{surface.50}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{surface.950}",
          borderColor: "{surface.950}"
        },
        simple: {
          color: "{surface.950}"
        }
      }
    },
    dark: {
      info: {
        background: "color-mix(in srgb, {blue.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)",
        color: "{blue.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{blue.500}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{blue.500}",
          borderColor: "{blue.500}"
        },
        simple: {
          color: "{blue.500}"
        }
      },
      success: {
        background: "color-mix(in srgb, {green.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {green.700}, transparent 64%)",
        color: "{green.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{green.500}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{green.500}",
          borderColor: "{green.500}"
        },
        simple: {
          color: "{green.500}"
        }
      },
      warn: {
        background: "color-mix(in srgb, {yellow.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)",
        color: "{yellow.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{yellow.500}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{yellow.500}",
          borderColor: "{yellow.500}"
        },
        simple: {
          color: "{yellow.500}"
        }
      },
      error: {
        background: "color-mix(in srgb, {red.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {red.700}, transparent 64%)",
        color: "{red.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{red.500}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{red.500}",
          borderColor: "{red.500}"
        },
        simple: {
          color: "{red.500}"
        }
      },
      secondary: {
        background: "{surface.800}",
        borderColor: "{surface.700}",
        color: "{surface.300}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{surface.700}",
          focusRing: {
            color: "{surface.300}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{surface.400}",
          borderColor: "{surface.400}"
        },
        simple: {
          color: "{surface.400}"
        }
      },
      contrast: {
        background: "{surface.0}",
        borderColor: "{surface.100}",
        color: "{surface.950}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
        closeButton: {
          hoverBackground: "{surface.100}",
          focusRing: {
            color: "{surface.950}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{surface.0}",
          borderColor: "{surface.0}"
        },
        simple: {
          color: "{surface.0}"
        }
      }
    }
  }
};

// node_modules/@primeng/themes/aura/metergroup/index.mjs
var metergroup_default = {
  root: {
    borderRadius: "{content.border.radius}",
    gap: "1rem"
  },
  meters: {
    background: "{content.border.color}",
    size: "0.5rem"
  },
  label: {
    gap: "0.5rem"
  },
  labelMarker: {
    size: "0.5rem"
  },
  labelIcon: {
    size: "1rem"
  },
  labelList: {
    verticalGap: "0.5rem",
    horizontalGap: "1rem"
  }
};

// node_modules/@primeng/themes/aura/multiselect/index.mjs
var multiselect_default = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledHoverBackground: "{form.field.filled.hover.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      paddingX: "{form.field.sm.padding.x}",
      paddingY: "{form.field.sm.padding.y}"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      paddingX: "{form.field.lg.padding.x}",
      paddingY: "{form.field.lg.padding.y}"
    }
  },
  dropdown: {
    width: "2.5rem",
    color: "{form.field.icon.color}"
  },
  overlay: {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}"
  },
  list: {
    padding: "{list.padding}",
    gap: "{list.gap}",
    header: {
      padding: "{list.header.padding}"
    }
  },
  option: {
    focusBackground: "{list.option.focus.background}",
    selectedBackground: "{list.option.selected.background}",
    selectedFocusBackground: "{list.option.selected.focus.background}",
    color: "{list.option.color}",
    focusColor: "{list.option.focus.color}",
    selectedColor: "{list.option.selected.color}",
    selectedFocusColor: "{list.option.selected.focus.color}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.border.radius}",
    gap: "0.5rem"
  },
  optionGroup: {
    background: "{list.option.group.background}",
    color: "{list.option.group.color}",
    fontWeight: "{list.option.group.font.weight}",
    padding: "{list.option.group.padding}"
  },
  clearIcon: {
    color: "{form.field.icon.color}"
  },
  chip: {
    borderRadius: "{border.radius.sm}"
  },
  emptyMessage: {
    padding: "{list.option.padding}"
  }
};

// node_modules/@primeng/themes/aura/orderlist/index.mjs
var orderlist_default = {
  root: {
    gap: "1.125rem"
  },
  controls: {
    gap: "0.5rem"
  }
};

// node_modules/@primeng/themes/aura/organizationchart/index.mjs
var organizationchart_default = {
  root: {
    gutter: "0.75rem",
    transitionDuration: "{transition.duration}"
  },
  node: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    selectedColor: "{highlight.color}",
    hoverColor: "{content.hover.color}",
    padding: "0.75rem 1rem",
    toggleablePadding: "0.75rem 1rem 1.25rem 1rem",
    borderRadius: "{content.border.radius}"
  },
  nodeToggleButton: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    borderColor: "{content.border.color}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    size: "1.5rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  connector: {
    color: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    height: "24px"
  }
};

// node_modules/@primeng/themes/aura/overlaybadge/index.mjs
var overlaybadge_default = {
  root: {
    outline: {
      width: "2px",
      color: "{content.background}"
    }
  }
};

// node_modules/@primeng/themes/aura/paginator/index.mjs
var paginator_default = {
  root: {
    padding: "0.5rem 1rem",
    gap: "0.25rem",
    borderRadius: "{content.border.radius}",
    background: "{content.background}",
    color: "{content.color}",
    transitionDuration: "{transition.duration}"
  },
  navButton: {
    background: "transparent",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    selectedColor: "{highlight.color}",
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  currentPageReport: {
    color: "{text.muted.color}"
  },
  jumpToPageInput: {
    maxWidth: "2.5rem"
  }
};

// node_modules/@primeng/themes/aura/panel/index.mjs
var panel_default = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}"
  },
  header: {
    background: "transparent",
    color: "{text.color}",
    padding: "1.125rem",
    borderColor: "{content.border.color}",
    borderWidth: "0",
    borderRadius: "0"
  },
  toggleableHeader: {
    padding: "0.375rem 1.125rem"
  },
  title: {
    fontWeight: "600"
  },
  content: {
    padding: "0 1.125rem 1.125rem 1.125rem"
  },
  footer: {
    padding: "0 1.125rem 1.125rem 1.125rem"
  }
};

// node_modules/@primeng/themes/aura/panelmenu/index.mjs
var panelmenu_default = {
  root: {
    gap: "0.5rem",
    transitionDuration: "{transition.duration}"
  },
  panel: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderWidth: "1px",
    color: "{content.color}",
    padding: "0.25rem 0.25rem",
    borderRadius: "{content.border.radius}",
    first: {
      borderWidth: "1px",
      topBorderRadius: "{content.border.radius}"
    },
    last: {
      borderWidth: "1px",
      bottomBorderRadius: "{content.border.radius}"
    }
  },
  item: {
    focusBackground: "{navigation.item.focus.background}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focus.color}",
    gap: "0.5rem",
    padding: "{navigation.item.padding}",
    borderRadius: "{content.border.radius}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focus.color}"
    }
  },
  submenu: {
    indent: "1rem"
  },
  submenuIcon: {
    color: "{navigation.submenu.icon.color}",
    focusColor: "{navigation.submenu.icon.focus.color}"
  }
};

// node_modules/@primeng/themes/aura/password/index.mjs
var password_default = {
  meter: {
    background: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    height: ".75rem"
  },
  icon: {
    color: "{form.field.icon.color}"
  },
  overlay: {
    background: "{overlay.popover.background}",
    borderColor: "{overlay.popover.border.color}",
    borderRadius: "{overlay.popover.border.radius}",
    color: "{overlay.popover.color}",
    padding: "{overlay.popover.padding}",
    shadow: "{overlay.popover.shadow}"
  },
  content: {
    gap: "0.5rem"
  },
  colorScheme: {
    light: {
      strength: {
        weakBackground: "{red.500}",
        mediumBackground: "{amber.500}",
        strongBackground: "{green.500}"
      }
    },
    dark: {
      strength: {
        weakBackground: "{red.400}",
        mediumBackground: "{amber.400}",
        strongBackground: "{green.400}"
      }
    }
  }
};

// node_modules/@primeng/themes/aura/picklist/index.mjs
var picklist_default = {
  root: {
    gap: "1.125rem"
  },
  controls: {
    gap: "0.5rem"
  }
};

// node_modules/@primeng/themes/aura/popover/index.mjs
var popover_default = {
  root: {
    background: "{overlay.popover.background}",
    borderColor: "{overlay.popover.border.color}",
    color: "{overlay.popover.color}",
    borderRadius: "{overlay.popover.border.radius}",
    shadow: "{overlay.popover.shadow}",
    gutter: "10px",
    arrowOffset: "1.25rem"
  },
  content: {
    padding: "{overlay.popover.padding}"
  }
};

// node_modules/@primeng/themes/aura/progressbar/index.mjs
var progressbar_default = {
  root: {
    background: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    height: "1.25rem"
  },
  value: {
    background: "{primary.color}"
  },
  label: {
    color: "{primary.contrast.color}",
    fontSize: "0.75rem",
    fontWeight: "600"
  }
};

// node_modules/@primeng/themes/aura/progressspinner/index.mjs
var progressspinner_default = {
  colorScheme: {
    light: {
      root: {
        colorOne: "{red.500}",
        colorTwo: "{blue.500}",
        colorThree: "{green.500}",
        colorFour: "{yellow.500}"
      }
    },
    dark: {
      root: {
        colorOne: "{red.400}",
        colorTwo: "{blue.400}",
        colorThree: "{green.400}",
        colorFour: "{yellow.400}"
      }
    }
  }
};

// node_modules/@primeng/themes/aura/radiobutton/index.mjs
var radiobutton_default = {
  root: {
    width: "1.25rem",
    height: "1.25rem",
    background: "{form.field.background}",
    checkedBackground: "{primary.color}",
    checkedHoverBackground: "{primary.hover.color}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.border.color}",
    checkedBorderColor: "{primary.color}",
    checkedHoverBorderColor: "{primary.hover.color}",
    checkedFocusBorderColor: "{primary.color}",
    checkedDisabledBorderColor: "{form.field.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    shadow: "{form.field.shadow}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      width: "1rem",
      height: "1rem"
    },
    lg: {
      width: "1.5rem",
      height: "1.5rem"
    }
  },
  icon: {
    size: "0.75rem",
    checkedColor: "{primary.contrast.color}",
    checkedHoverColor: "{primary.contrast.color}",
    disabledColor: "{form.field.disabled.color}",
    sm: {
      size: "0.5rem"
    },
    lg: {
      size: "1rem"
    }
  }
};

// node_modules/@primeng/themes/aura/rating/index.mjs
var rating_default = {
  root: {
    gap: "0.25rem",
    transitionDuration: "{transition.duration}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  icon: {
    size: "1rem",
    color: "{text.muted.color}",
    hoverColor: "{primary.color}",
    activeColor: "{primary.color}"
  }
};

// node_modules/@primeng/themes/aura/ripple/index.mjs
var ripple_default = {
  colorScheme: {
    light: {
      root: {
        background: "rgba(0,0,0,0.1)"
      }
    },
    dark: {
      root: {
        background: "rgba(255,255,255,0.3)"
      }
    }
  }
};

// node_modules/@primeng/themes/aura/scrollpanel/index.mjs
var scrollpanel_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  bar: {
    size: "9px",
    borderRadius: "{border.radius.sm}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  colorScheme: {
    light: {
      bar: {
        background: "{surface.100}"
      }
    },
    dark: {
      bar: {
        background: "{surface.800}"
      }
    }
  }
};

// node_modules/@primeng/themes/aura/select/index.mjs
var select_default = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledHoverBackground: "{form.field.filled.hover.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      paddingX: "{form.field.sm.padding.x}",
      paddingY: "{form.field.sm.padding.y}"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      paddingX: "{form.field.lg.padding.x}",
      paddingY: "{form.field.lg.padding.y}"
    }
  },
  dropdown: {
    width: "2.5rem",
    color: "{form.field.icon.color}"
  },
  overlay: {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}"
  },
  list: {
    padding: "{list.padding}",
    gap: "{list.gap}",
    header: {
      padding: "{list.header.padding}"
    }
  },
  option: {
    focusBackground: "{list.option.focus.background}",
    selectedBackground: "{list.option.selected.background}",
    selectedFocusBackground: "{list.option.selected.focus.background}",
    color: "{list.option.color}",
    focusColor: "{list.option.focus.color}",
    selectedColor: "{list.option.selected.color}",
    selectedFocusColor: "{list.option.selected.focus.color}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.border.radius}"
  },
  optionGroup: {
    background: "{list.option.group.background}",
    color: "{list.option.group.color}",
    fontWeight: "{list.option.group.font.weight}",
    padding: "{list.option.group.padding}"
  },
  clearIcon: {
    color: "{form.field.icon.color}"
  },
  checkmark: {
    color: "{list.option.color}",
    gutterStart: "-0.375rem",
    gutterEnd: "0.375rem"
  },
  emptyMessage: {
    padding: "{list.option.padding}"
  }
};

// node_modules/@primeng/themes/aura/selectbutton/index.mjs
var selectbutton_default = {
  root: {
    borderRadius: "{form.field.border.radius}"
  },
  colorScheme: {
    light: {
      root: {
        invalidBorderColor: "{form.field.invalid.border.color}"
      }
    },
    dark: {
      root: {
        invalidBorderColor: "{form.field.invalid.border.color}"
      }
    }
  }
};

// node_modules/@primeng/themes/aura/skeleton/index.mjs
var skeleton_default = {
  root: {
    borderRadius: "{content.border.radius}"
  },
  colorScheme: {
    light: {
      root: {
        background: "{surface.200}",
        animationBackground: "rgba(255,255,255,0.4)"
      }
    },
    dark: {
      root: {
        background: "rgba(255, 255, 255, 0.06)",
        animationBackground: "rgba(255, 255, 255, 0.04)"
      }
    }
  }
};

// node_modules/@primeng/themes/aura/slider/index.mjs
var slider_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  track: {
    background: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    size: "3px"
  },
  range: {
    background: "{primary.color}"
  },
  handle: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    background: "{content.border.color}",
    hoverBackground: "{content.border.color}",
    content: {
      borderRadius: "50%",
      hoverBackground: "{content.background}",
      width: "16px",
      height: "16px",
      shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"
    },
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  colorScheme: {
    light: {
      handle: {
        content: {
          background: "{surface.0}"
        }
      }
    },
    dark: {
      handle: {
        content: {
          background: "{surface.950}"
        }
      }
    }
  }
};

// node_modules/@primeng/themes/aura/speeddial/index.mjs
var speeddial_default = {
  root: {
    gap: "0.5rem",
    transitionDuration: "{transition.duration}"
  }
};

// node_modules/@primeng/themes/aura/splitbutton/index.mjs
var splitbutton_default = {
  root: {
    borderRadius: "{form.field.border.radius}",
    roundedBorderRadius: "2rem",
    raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"
  }
};

// node_modules/@primeng/themes/aura/splitter/index.mjs
var splitter_default = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    transitionDuration: "{transition.duration}"
  },
  gutter: {
    background: "{content.border.color}"
  },
  handle: {
    size: "24px",
    background: "transparent",
    borderRadius: "{content.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  }
};

// node_modules/@primeng/themes/aura/stepper/index.mjs
var stepper_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  separator: {
    background: "{content.border.color}",
    activeBackground: "{primary.color}",
    margin: "0 0 0 1.625rem",
    size: "2px"
  },
  step: {
    padding: "0.5rem",
    gap: "1rem"
  },
  stepHeader: {
    padding: "0",
    borderRadius: "{content.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    },
    gap: "0.5rem"
  },
  stepTitle: {
    color: "{text.muted.color}",
    activeColor: "{primary.color}",
    fontWeight: "500"
  },
  stepNumber: {
    background: "{content.background}",
    activeBackground: "{content.background}",
    borderColor: "{content.border.color}",
    activeBorderColor: "{content.border.color}",
    color: "{text.muted.color}",
    activeColor: "{primary.color}",
    size: "2rem",
    fontSize: "1.143rem",
    fontWeight: "500",
    borderRadius: "50%",
    shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
  },
  steppanels: {
    padding: "0.875rem 0.5rem 1.125rem 0.5rem"
  },
  steppanel: {
    background: "{content.background}",
    color: "{content.color}",
    padding: "0",
    indent: "1rem"
  }
};

// node_modules/@primeng/themes/aura/steps/index.mjs
var steps_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  separator: {
    background: "{content.border.color}"
  },
  itemLink: {
    borderRadius: "{content.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    },
    gap: "0.5rem"
  },
  itemLabel: {
    color: "{text.muted.color}",
    activeColor: "{primary.color}",
    fontWeight: "500"
  },
  itemNumber: {
    background: "{content.background}",
    activeBackground: "{content.background}",
    borderColor: "{content.border.color}",
    activeBorderColor: "{content.border.color}",
    color: "{text.muted.color}",
    activeColor: "{primary.color}",
    size: "2rem",
    fontSize: "1.143rem",
    fontWeight: "500",
    borderRadius: "50%",
    shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
  }
};

// node_modules/@primeng/themes/aura/tabmenu/index.mjs
var tabmenu_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  tablist: {
    borderWidth: "0 0 1px 0",
    background: "{content.background}",
    borderColor: "{content.border.color}"
  },
  item: {
    background: "transparent",
    hoverBackground: "transparent",
    activeBackground: "transparent",
    borderWidth: "0 0 1px 0",
    borderColor: "{content.border.color}",
    hoverBorderColor: "{content.border.color}",
    activeBorderColor: "{primary.color}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{primary.color}",
    padding: "1rem 1.125rem",
    fontWeight: "600",
    margin: "0 0 -1px 0",
    gap: "0.5rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  itemIcon: {
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{primary.color}"
  },
  activeBar: {
    height: "1px",
    bottom: "-1px",
    background: "{primary.color}"
  }
};

// node_modules/@primeng/themes/aura/tabs/index.mjs
var tabs_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  tablist: {
    borderWidth: "0 0 1px 0",
    background: "{content.background}",
    borderColor: "{content.border.color}"
  },
  tab: {
    background: "transparent",
    hoverBackground: "transparent",
    activeBackground: "transparent",
    borderWidth: "0 0 1px 0",
    borderColor: "{content.border.color}",
    hoverBorderColor: "{content.border.color}",
    activeBorderColor: "{primary.color}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{primary.color}",
    padding: "1rem 1.125rem",
    fontWeight: "600",
    margin: "0 0 -1px 0",
    gap: "0.5rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    }
  },
  tabpanel: {
    background: "{content.background}",
    color: "{content.color}",
    padding: "0.875rem 1.125rem 1.125rem 1.125rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "inset {focus.ring.shadow}"
    }
  },
  navButton: {
    background: "{content.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    width: "2.5rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    }
  },
  activeBar: {
    height: "1px",
    bottom: "-1px",
    background: "{primary.color}"
  },
  colorScheme: {
    light: {
      navButton: {
        shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)"
      }
    },
    dark: {
      navButton: {
        shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"
      }
    }
  }
};

// node_modules/@primeng/themes/aura/tabview/index.mjs
var tabview_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  tabList: {
    background: "{content.background}",
    borderColor: "{content.border.color}"
  },
  tab: {
    borderColor: "{content.border.color}",
    activeBorderColor: "{primary.color}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{primary.color}"
  },
  tabPanel: {
    background: "{content.background}",
    color: "{content.color}"
  },
  navButton: {
    background: "{content.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}"
  },
  colorScheme: {
    light: {
      navButton: {
        shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)"
      }
    },
    dark: {
      navButton: {
        shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"
      }
    }
  }
};

// node_modules/@primeng/themes/aura/tag/index.mjs
var tag_default = {
  root: {
    fontSize: "0.875rem",
    fontWeight: "700",
    padding: "0.25rem 0.5rem",
    gap: "0.25rem",
    borderRadius: "{content.border.radius}",
    roundedBorderRadius: "{border.radius.xl}"
  },
  icon: {
    size: "0.75rem"
  },
  colorScheme: {
    light: {
      primary: {
        background: "{primary.100}",
        color: "{primary.700}"
      },
      secondary: {
        background: "{surface.100}",
        color: "{surface.600}"
      },
      success: {
        background: "{green.100}",
        color: "{green.700}"
      },
      info: {
        background: "{sky.100}",
        color: "{sky.700}"
      },
      warn: {
        background: "{orange.100}",
        color: "{orange.700}"
      },
      danger: {
        background: "{red.100}",
        color: "{red.700}"
      },
      contrast: {
        background: "{surface.950}",
        color: "{surface.0}"
      }
    },
    dark: {
      primary: {
        background: "color-mix(in srgb, {primary.500}, transparent 84%)",
        color: "{primary.300}"
      },
      secondary: {
        background: "{surface.800}",
        color: "{surface.300}"
      },
      success: {
        background: "color-mix(in srgb, {green.500}, transparent 84%)",
        color: "{green.300}"
      },
      info: {
        background: "color-mix(in srgb, {sky.500}, transparent 84%)",
        color: "{sky.300}"
      },
      warn: {
        background: "color-mix(in srgb, {orange.500}, transparent 84%)",
        color: "{orange.300}"
      },
      danger: {
        background: "color-mix(in srgb, {red.500}, transparent 84%)",
        color: "{red.300}"
      },
      contrast: {
        background: "{surface.0}",
        color: "{surface.950}"
      }
    }
  }
};

// node_modules/@primeng/themes/aura/terminal/index.mjs
var terminal_default = {
  root: {
    background: "{form.field.background}",
    borderColor: "{form.field.border.color}",
    color: "{form.field.color}",
    height: "18rem",
    padding: "{form.field.padding.y} {form.field.padding.x}",
    borderRadius: "{form.field.border.radius}"
  },
  prompt: {
    gap: "0.25rem"
  },
  commandResponse: {
    margin: "2px 0"
  }
};

// node_modules/@primeng/themes/aura/textarea/index.mjs
var textarea_default = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledHoverBackground: "{form.field.filled.hover.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      paddingX: "{form.field.sm.padding.x}",
      paddingY: "{form.field.sm.padding.y}"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      paddingX: "{form.field.lg.padding.x}",
      paddingY: "{form.field.lg.padding.y}"
    }
  }
};

// node_modules/@primeng/themes/aura/tieredmenu/index.mjs
var tieredmenu_default = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}",
    shadow: "{overlay.navigation.shadow}",
    transitionDuration: "{transition.duration}"
  },
  list: {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}"
  },
  item: {
    focusBackground: "{navigation.item.focus.background}",
    activeBackground: "{navigation.item.active.background}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focus.color}",
    activeColor: "{navigation.item.active.color}",
    padding: "{navigation.item.padding}",
    borderRadius: "{navigation.item.border.radius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focus.color}",
      activeColor: "{navigation.item.icon.active.color}"
    }
  },
  submenu: {
    mobileIndent: "1rem"
  },
  submenuIcon: {
    size: "{navigation.submenu.icon.size}",
    color: "{navigation.submenu.icon.color}",
    focusColor: "{navigation.submenu.icon.focus.color}",
    activeColor: "{navigation.submenu.icon.active.color}"
  },
  separator: {
    borderColor: "{content.border.color}"
  }
};

// node_modules/@primeng/themes/aura/timeline/index.mjs
var timeline_default = {
  event: {
    minHeight: "5rem"
  },
  horizontal: {
    eventContent: {
      padding: "1rem 0"
    }
  },
  vertical: {
    eventContent: {
      padding: "0 1rem"
    }
  },
  eventMarker: {
    size: "1.125rem",
    borderRadius: "50%",
    borderWidth: "2px",
    background: "{content.background}",
    borderColor: "{content.border.color}",
    content: {
      borderRadius: "50%",
      size: "0.375rem",
      background: "{primary.color}",
      insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
    }
  },
  eventConnector: {
    color: "{content.border.color}",
    size: "2px"
  }
};

// node_modules/@primeng/themes/aura/toast/index.mjs
var toast_default = {
  root: {
    width: "25rem",
    borderRadius: "{content.border.radius}",
    borderWidth: "1px",
    transitionDuration: "{transition.duration}"
  },
  icon: {
    size: "1.125rem"
  },
  content: {
    padding: "{overlay.popover.padding}",
    gap: "0.5rem"
  },
  text: {
    gap: "0.5rem"
  },
  summary: {
    fontWeight: "500",
    fontSize: "1rem"
  },
  detail: {
    fontWeight: "500",
    fontSize: "0.875rem"
  },
  closeButton: {
    width: "1.75rem",
    height: "1.75rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      offset: "{focus.ring.offset}"
    }
  },
  closeIcon: {
    size: "1rem"
  },
  colorScheme: {
    light: {
      root: {
        blur: "1.5px"
      },
      info: {
        background: "color-mix(in srgb, {blue.50}, transparent 5%)",
        borderColor: "{blue.200}",
        color: "{blue.600}",
        detailColor: "{surface.700}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{blue.100}",
          focusRing: {
            color: "{blue.600}",
            shadow: "none"
          }
        }
      },
      success: {
        background: "color-mix(in srgb, {green.50}, transparent 5%)",
        borderColor: "{green.200}",
        color: "{green.600}",
        detailColor: "{surface.700}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{green.100}",
          focusRing: {
            color: "{green.600}",
            shadow: "none"
          }
        }
      },
      warn: {
        background: "color-mix(in srgb,{yellow.50}, transparent 5%)",
        borderColor: "{yellow.200}",
        color: "{yellow.600}",
        detailColor: "{surface.700}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{yellow.100}",
          focusRing: {
            color: "{yellow.600}",
            shadow: "none"
          }
        }
      },
      error: {
        background: "color-mix(in srgb, {red.50}, transparent 5%)",
        borderColor: "{red.200}",
        color: "{red.600}",
        detailColor: "{surface.700}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{red.100}",
          focusRing: {
            color: "{red.600}",
            shadow: "none"
          }
        }
      },
      secondary: {
        background: "{surface.100}",
        borderColor: "{surface.200}",
        color: "{surface.600}",
        detailColor: "{surface.700}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{surface.200}",
          focusRing: {
            color: "{surface.600}",
            shadow: "none"
          }
        }
      },
      contrast: {
        background: "{surface.900}",
        borderColor: "{surface.950}",
        color: "{surface.50}",
        detailColor: "{surface.0}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
        closeButton: {
          hoverBackground: "{surface.800}",
          focusRing: {
            color: "{surface.50}",
            shadow: "none"
          }
        }
      }
    },
    dark: {
      root: {
        blur: "10px"
      },
      info: {
        background: "color-mix(in srgb, {blue.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)",
        color: "{blue.500}",
        detailColor: "{surface.0}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{blue.500}",
            shadow: "none"
          }
        }
      },
      success: {
        background: "color-mix(in srgb, {green.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {green.700}, transparent 64%)",
        color: "{green.500}",
        detailColor: "{surface.0}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{green.500}",
            shadow: "none"
          }
        }
      },
      warn: {
        background: "color-mix(in srgb, {yellow.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)",
        color: "{yellow.500}",
        detailColor: "{surface.0}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{yellow.500}",
            shadow: "none"
          }
        }
      },
      error: {
        background: "color-mix(in srgb, {red.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {red.700}, transparent 64%)",
        color: "{red.500}",
        detailColor: "{surface.0}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{red.500}",
            shadow: "none"
          }
        }
      },
      secondary: {
        background: "{surface.800}",
        borderColor: "{surface.700}",
        color: "{surface.300}",
        detailColor: "{surface.0}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{surface.700}",
          focusRing: {
            color: "{surface.300}",
            shadow: "none"
          }
        }
      },
      contrast: {
        background: "{surface.0}",
        borderColor: "{surface.100}",
        color: "{surface.950}",
        detailColor: "{surface.950}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
        closeButton: {
          hoverBackground: "{surface.100}",
          focusRing: {
            color: "{surface.950}",
            shadow: "none"
          }
        }
      }
    }
  }
};

// node_modules/@primeng/themes/aura/togglebutton/index.mjs
var togglebutton_default = {
  root: {
    padding: "0.25rem",
    borderRadius: "{content.border.radius}",
    gap: "0.5rem",
    fontWeight: "500",
    disabledBackground: "{form.field.disabled.background}",
    disabledBorderColor: "{form.field.disabled.background}",
    disabledColor: "{form.field.disabled.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      padding: "0.25rem"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      padding: "0.25rem"
    }
  },
  icon: {
    disabledColor: "{form.field.disabled.color}"
  },
  content: {
    padding: "0.25rem 0.75rem",
    borderRadius: "{content.border.radius}",
    checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)",
    sm: {
      padding: "0.25rem 0.75rem"
    },
    lg: {
      padding: "0.25rem 0.75rem"
    }
  },
  colorScheme: {
    light: {
      root: {
        background: "{surface.100}",
        checkedBackground: "{surface.100}",
        hoverBackground: "{surface.100}",
        borderColor: "{surface.100}",
        color: "{surface.500}",
        hoverColor: "{surface.700}",
        checkedColor: "{surface.900}",
        checkedBorderColor: "{surface.100}"
      },
      content: {
        checkedBackground: "{surface.0}"
      },
      icon: {
        color: "{surface.500}",
        hoverColor: "{surface.700}",
        checkedColor: "{surface.900}"
      }
    },
    dark: {
      root: {
        background: "{surface.950}",
        checkedBackground: "{surface.950}",
        hoverBackground: "{surface.950}",
        borderColor: "{surface.950}",
        color: "{surface.400}",
        hoverColor: "{surface.300}",
        checkedColor: "{surface.0}",
        checkedBorderColor: "{surface.950}"
      },
      content: {
        checkedBackground: "{surface.800}"
      },
      icon: {
        color: "{surface.400}",
        hoverColor: "{surface.300}",
        checkedColor: "{surface.0}"
      }
    }
  }
};

// node_modules/@primeng/themes/aura/toggleswitch/index.mjs
var toggleswitch_default = {
  root: {
    width: "2.5rem",
    height: "1.5rem",
    borderRadius: "30px",
    gap: "0.25rem",
    shadow: "{form.field.shadow}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    },
    borderWidth: "1px",
    borderColor: "transparent",
    hoverBorderColor: "transparent",
    checkedBorderColor: "transparent",
    checkedHoverBorderColor: "transparent",
    invalidBorderColor: "{form.field.invalid.border.color}",
    transitionDuration: "{form.field.transition.duration}",
    slideDuration: "0.2s"
  },
  handle: {
    borderRadius: "50%",
    size: "1rem"
  },
  colorScheme: {
    light: {
      root: {
        background: "{surface.300}",
        disabledBackground: "{form.field.disabled.background}",
        hoverBackground: "{surface.400}",
        checkedBackground: "{primary.color}",
        checkedHoverBackground: "{primary.hover.color}"
      },
      handle: {
        background: "{surface.0}",
        disabledBackground: "{form.field.disabled.color}",
        hoverBackground: "{surface.0}",
        checkedBackground: "{surface.0}",
        checkedHoverBackground: "{surface.0}",
        color: "{text.muted.color}",
        hoverColor: "{text.color}",
        checkedColor: "{primary.color}",
        checkedHoverColor: "{primary.hover.color}"
      }
    },
    dark: {
      root: {
        background: "{surface.700}",
        disabledBackground: "{surface.600}",
        hoverBackground: "{surface.600}",
        checkedBackground: "{primary.color}",
        checkedHoverBackground: "{primary.hover.color}"
      },
      handle: {
        background: "{surface.400}",
        disabledBackground: "{surface.900}",
        hoverBackground: "{surface.300}",
        checkedBackground: "{surface.900}",
        checkedHoverBackground: "{surface.900}",
        color: "{surface.900}",
        hoverColor: "{surface.800}",
        checkedColor: "{primary.color}",
        checkedHoverColor: "{primary.hover.color}"
      }
    }
  }
};

// node_modules/@primeng/themes/aura/toolbar/index.mjs
var toolbar_default = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    gap: "0.5rem",
    padding: "0.75rem"
  }
};

// node_modules/@primeng/themes/aura/tooltip/index.mjs
var tooltip_default = {
  root: {
    maxWidth: "12.5rem",
    gutter: "0.25rem",
    shadow: "{overlay.popover.shadow}",
    padding: "0.5rem 0.75rem",
    borderRadius: "{overlay.popover.border.radius}"
  },
  colorScheme: {
    light: {
      root: {
        background: "{surface.700}",
        color: "{surface.0}"
      }
    },
    dark: {
      root: {
        background: "{surface.700}",
        color: "{surface.0}"
      }
    }
  }
};

// node_modules/@primeng/themes/aura/tree/index.mjs
var tree_default = {
  root: {
    background: "{content.background}",
    color: "{content.color}",
    padding: "1rem",
    gap: "2px",
    indent: "1rem",
    transitionDuration: "{transition.duration}"
  },
  node: {
    padding: "0.25rem 0.5rem",
    borderRadius: "{content.border.radius}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    color: "{text.color}",
    hoverColor: "{text.hover.color}",
    selectedColor: "{highlight.color}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    },
    gap: "0.25rem"
  },
  nodeIcon: {
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    selectedColor: "{highlight.color}"
  },
  nodeToggleButton: {
    borderRadius: "50%",
    size: "1.75rem",
    hoverBackground: "{content.hover.background}",
    selectedHoverBackground: "{content.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    selectedHoverColor: "{primary.color}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  loadingIcon: {
    size: "2rem"
  },
  filter: {
    margin: "0 0 0.5rem 0"
  }
};

// node_modules/@primeng/themes/aura/treeselect/index.mjs
var treeselect_default = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledHoverBackground: "{form.field.filled.hover.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      paddingX: "{form.field.sm.padding.x}",
      paddingY: "{form.field.sm.padding.y}"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      paddingX: "{form.field.lg.padding.x}",
      paddingY: "{form.field.lg.padding.y}"
    }
  },
  dropdown: {
    width: "2.5rem",
    color: "{form.field.icon.color}"
  },
  overlay: {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}"
  },
  tree: {
    padding: "{list.padding}"
  },
  clearIcon: {
    color: "{form.field.icon.color}"
  },
  emptyMessage: {
    padding: "{list.option.padding}"
  },
  chip: {
    borderRadius: "{border.radius.sm}"
  }
};

// node_modules/@primeng/themes/aura/treetable/index.mjs
var treetable_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  header: {
    background: "{content.background}",
    borderColor: "{treetable.border.color}",
    color: "{content.color}",
    borderWidth: "0 0 1px 0",
    padding: "0.75rem 1rem"
  },
  headerCell: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    borderColor: "{treetable.border.color}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    selectedColor: "{highlight.color}",
    gap: "0.5rem",
    padding: "0.75rem 1rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    }
  },
  columnTitle: {
    fontWeight: "600"
  },
  row: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    selectedColor: "{highlight.color}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    }
  },
  bodyCell: {
    borderColor: "{treetable.border.color}",
    padding: "0.75rem 1rem",
    gap: "0.5rem"
  },
  footerCell: {
    background: "{content.background}",
    borderColor: "{treetable.border.color}",
    color: "{content.color}",
    padding: "0.75rem 1rem"
  },
  columnFooter: {
    fontWeight: "600"
  },
  footer: {
    background: "{content.background}",
    borderColor: "{treetable.border.color}",
    color: "{content.color}",
    borderWidth: "0 0 1px 0",
    padding: "0.75rem 1rem"
  },
  columnResizer: {
    width: "0.5rem"
  },
  resizeIndicator: {
    width: "1px",
    color: "{primary.color}"
  },
  sortIcon: {
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    size: "0.875rem"
  },
  loadingIcon: {
    size: "2rem"
  },
  nodeToggleButton: {
    hoverBackground: "{content.hover.background}",
    selectedHoverBackground: "{content.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    selectedHoverColor: "{primary.color}",
    size: "1.75rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  paginatorTop: {
    borderColor: "{content.border.color}",
    borderWidth: "0 0 1px 0"
  },
  paginatorBottom: {
    borderColor: "{content.border.color}",
    borderWidth: "0 0 1px 0"
  },
  colorScheme: {
    light: {
      root: {
        borderColor: "{content.border.color}"
      },
      bodyCell: {
        selectedBorderColor: "{primary.100}"
      }
    },
    dark: {
      root: {
        borderColor: "{surface.800}"
      },
      bodyCell: {
        selectedBorderColor: "{primary.900}"
      }
    }
  }
};

// node_modules/@primeng/themes/aura/virtualscroller/index.mjs
var virtualscroller_default = {
  loader: {
    mask: {
      background: "{content.background}",
      color: "{text.muted.color}"
    },
    icon: {
      size: "2rem"
    }
  }
};

// node_modules/@primeng/themes/aura/index.mjs
var aura_default = __spreadProps(__spreadValues({}, base_default), {
  components: {
    accordion: accordion_default,
    autocomplete: autocomplete_default,
    avatar: avatar_default,
    badge: badge_default,
    blockui: blockui_default,
    breadcrumb: breadcrumb_default,
    button: button_default,
    datepicker: datepicker_default,
    card: card_default,
    carousel: carousel_default,
    cascadeselect: cascadeselect_default,
    checkbox: checkbox_default,
    chip: chip_default,
    colorpicker: colorpicker_default,
    confirmdialog: confirmdialog_default,
    confirmpopup: confirmpopup_default,
    contextmenu: contextmenu_default,
    dataview: dataview_default,
    datatable: datatable_default,
    dialog: dialog_default,
    divider: divider_default,
    dock: dock_default,
    drawer: drawer_default,
    editor: editor_default,
    fieldset: fieldset_default,
    fileupload: fileupload_default,
    iftalabel: iftalabel_default,
    floatlabel: floatlabel_default,
    galleria: galleria_default,
    iconfield: iconfield_default,
    image: image_default,
    imagecompare: imagecompare_default,
    inlinemessage: inlinemessage_default,
    inplace: inplace_default,
    inputchips: inputchips_default,
    inputgroup: inputgroup_default,
    inputnumber: inputnumber_default,
    inputotp: inputotp_default,
    inputtext: inputtext_default,
    knob: knob_default,
    listbox: listbox_default,
    megamenu: megamenu_default,
    menu: menu_default,
    menubar: menubar_default,
    message: message_default,
    metergroup: metergroup_default,
    multiselect: multiselect_default,
    orderlist: orderlist_default,
    organizationchart: organizationchart_default,
    overlaybadge: overlaybadge_default,
    popover: popover_default,
    paginator: paginator_default,
    password: password_default,
    panel: panel_default,
    panelmenu: panelmenu_default,
    picklist: picklist_default,
    progressbar: progressbar_default,
    progressspinner: progressspinner_default,
    radiobutton: radiobutton_default,
    rating: rating_default,
    scrollpanel: scrollpanel_default,
    select: select_default,
    selectbutton: selectbutton_default,
    skeleton: skeleton_default,
    slider: slider_default,
    speeddial: speeddial_default,
    splitter: splitter_default,
    splitbutton: splitbutton_default,
    stepper: stepper_default,
    steps: steps_default,
    tabmenu: tabmenu_default,
    tabs: tabs_default,
    tabview: tabview_default,
    textarea: textarea_default,
    tieredmenu: tieredmenu_default,
    tag: tag_default,
    terminal: terminal_default,
    timeline: timeline_default,
    togglebutton: togglebutton_default,
    toggleswitch: toggleswitch_default,
    tree: tree_default,
    treeselect: treeselect_default,
    treetable: treetable_default,
    toast: toast_default,
    toolbar: toolbar_default,
    virtualscroller: virtualscroller_default,
    tooltip: tooltip_default,
    ripple: ripple_default
  }
});

// src/main.ts
var cookieConfig = {
  cookie: {
    domain: ""
  },
  position: "bottom",
  theme: "block",
  palette: {
    popup: {
      background: "#B7E0B4",
      text: "#000"
    },
    button: {
      background: "#b3b5e6",
      text: "#000"
    }
  },
  type: "opt-in",
  content: {
    message: "GoGuay utiliza cookies propias con el objetivo de optimizar su visita.",
    allow: "Aceptar",
    deny: "Rechazar",
    link: "Cookies.",
    href: "/cookies",
    policy: "Pol\xEDtica de cookies."
  },
  elements: {
    messagelink: `
    <span id="cookieconsent:desc" class="cc-message">
      {{message}}
      <a aria-label="Leer mas sobre los t\xE9rminos del servicio" tabindex="2" class="cc-link" href="{{href}}" target="_blank" rel="noopener">{{link}}</a>
    </span>
    `
  }
};
if (typeof window !== "undefined") {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (typeof args[0] === "string" && args[0].includes("NG0912")) {
      return;
    }
    originalWarn.apply(console, args);
  };
}
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({
      mode: "md",
      rippleEffect: true
    }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimationsAsync(),
    MessageService,
    providePrimeNG({
      theme: {
        preset: aura_default
      }
    }),
    provideAnimations(),
    importProvidersFrom(NgcCookieConsentModule.forRoot(cookieConfig), TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }))
  ]
});
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations/async.mjs:
@angular/platform-browser/fesm2022/animations.mjs:
  (**
   * @license Angular v20.3.35
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
