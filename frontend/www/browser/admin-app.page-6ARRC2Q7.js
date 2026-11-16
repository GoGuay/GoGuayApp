import {
  NavbarAdmin
} from "./chunk-ISKGSGD4.js";
import {
  Chart,
  registerables
} from "./chunk-ZZW7UMPL.js";
import {
  EncuestaService
} from "./chunk-O47LVZGT.js";
import {
  IncidenciasService
} from "./chunk-UORRCZJ6.js";
import {
  addIcons,
  arrowForwardOutline,
  barChartOutline,
  calendarOutline,
  clipboardOutline,
  eyeOutline,
  lockClosedOutline,
  lockOpenOutline,
  mailUnreadOutline,
  peopleOutline,
  timeOutline,
  warningOutline
} from "./chunk-TDPVVR7R.js";
import {
  FuncionesComunes
} from "./chunk-TMB2KEQX.js";
import "./chunk-N7S2XU3X.js";
import "./chunk-CIEE2FXQ.js";
import {
  UserServicesService
} from "./chunk-34RASOLQ.js";
import "./chunk-ULIFZXTE.js";
import "./chunk-WBBLYEAR.js";
import "./chunk-LLKVXR72.js";
import "./chunk-Z2EGICVD.js";
import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonSearchbar,
  IonicModule,
  TextValueAccessorDirective
} from "./chunk-XTRPVKSN.js";
import "./chunk-PWPN4F54.js";
import {
  NavController
} from "./chunk-DD4MNYDA.js";
import {
  Component,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-YUKRBYLH.js";
import "./chunk-NEFVXLXQ.js";
import "./chunk-UGUZQALC.js";
import "./chunk-4JA4ETJA.js";
import "./chunk-RI33YQSB.js";
import "./chunk-7NBG2LBA.js";
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
import "./chunk-FPPEK4XH.js";
import "./chunk-MEOWV5C6.js";
import "./chunk-DI3VEDFV.js";
import "./chunk-5SZB5ECT.js";

// src/app/pages/admin/admin-app.page.ts
var _c0 = ["barCanvas"];
function AdminApp_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", ctx_r0.nuevosUsuariosHoyCount, " hoy");
  }
}
function AdminApp_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "Requiere atenci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function AdminApp_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, "Al d\xEDa");
    \u0275\u0275elementEnd();
  }
}
function AdminApp_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "Suspendidos");
    \u0275\u0275elementEnd();
  }
}
function AdminApp_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "p", 57);
    \u0275\u0275text(2, "Las estad\xEDsticas se actualizar\xE1n autom\xE1ticamente conforme lleguen las valoraciones.");
    \u0275\u0275elementEnd()();
  }
}
function AdminApp_For_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 48)(1, "ion-avatar", 58);
    \u0275\u0275element(2, "img", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-label")(4, "h3", 60);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 57);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 61);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ion-button", 62);
    \u0275\u0275listener("click", function AdminApp_For_97_Template_ion_button_click_10_listener() {
      const user_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.verDetalles(user_r3));
    });
    \u0275\u0275element(11, "ion-icon", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ion-button", 64);
    \u0275\u0275listener("click", function AdminApp_For_97_Template_ion_button_click_12_listener() {
      const user_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleRestriccion(user_r3));
    });
    \u0275\u0275element(13, "ion-icon", 65);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", user_r3.fotoPerfil || ctx_r0.avatarDefault, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", user_r3.nombre, " ", user_r3.apellidos || "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.email);
    \u0275\u0275advance();
    \u0275\u0275classMap(user_r3.ya_ha_sido_suspendido ? "badge-status status-danger" : "badge-status status-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r3.ya_ha_sido_suspendido ? "Restringido" : "Activo", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("color", user_r3.ya_ha_sido_suspendido ? "success" : "danger");
    \u0275\u0275advance();
    \u0275\u0275property("name", user_r3.ya_ha_sido_suspendido ? "lock-open-outline" : "lock-closed-outline");
  }
}
function AdminApp_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1, "No se encontraron usuarios coincidentes.");
    \u0275\u0275elementEnd();
  }
}
function AdminApp_For_106_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1, " Nuevo ");
    \u0275\u0275elementEnd();
  }
}
function AdminApp_For_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 66);
    \u0275\u0275listener("click", function AdminApp_For_106_Template_ion_item_click_0_listener() {
      const msg_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.abrirMensaje(msg_r5));
    });
    \u0275\u0275elementStart(1, "ion-label")(2, "h3", 60);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 57);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, AdminApp_For_106_Conditional_6_Template, 2, 0, "span", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(msg_r5.asunto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", msg_r5.remitente, " \u2014 ", msg_r5.fecha);
    \u0275\u0275advance();
    \u0275\u0275conditional(!msg_r5.leido ? 6 : -1);
  }
}
Chart.register(...registerables);
var AdminApp = class _AdminApp {
  navCtrl;
  userService;
  funcionesComunes;
  encuestaService;
  incidenciasService;
  barCanvas;
  listaUsuarios = [];
  listaUsuariosFiltrados = [];
  avatarDefault = "../../../assets/User-Profile-PNG-Image.png";
  hours = "";
  minutes = "";
  usuario;
  userData = {};
  userLoggedIn = false;
  // Métricas / Notificaciones dinámicas
  mensajes = [
    { id: 101, asunto: "Duda sobre verificaci\xF3n QR", remitente: "Alex G.", fecha: "12/10", leido: false },
    { id: 102, asunto: "Incidencia con monedero PayPal", remitente: "Carla R.", fecha: "11/10", leido: true }
  ];
  mensajesPendientes = 1;
  usuariosRestringidosCount = 0;
  incidenciasPendientesCount = 0;
  nuevosUsuariosHoyCount = 0;
  barChart;
  listaEncuestas = [];
  promedioSatisfaccion = 0;
  totalEncuestas = 0;
  constructor(navCtrl, userService, funcionesComunes, encuestaService, incidenciasService) {
    this.navCtrl = navCtrl;
    this.userService = userService;
    this.funcionesComunes = funcionesComunes;
    this.encuestaService = encuestaService;
    this.incidenciasService = incidenciasService;
    addIcons({
      peopleOutline,
      mailUnreadOutline,
      eyeOutline,
      lockClosedOutline,
      lockOpenOutline,
      barChartOutline,
      calendarOutline,
      warningOutline,
      clipboardOutline,
      timeOutline,
      arrowForwardOutline
    });
  }
  ngOnInit() {
    var _a, _b;
    this.loadUserData();
    this.updateTime();
    setInterval(() => this.updateTime(), 1e3);
    this.userLoggedIn = this.funcionesComunes.isUserLoggedIn();
    if (this.userLoggedIn && ((_b = (_a = this.userData) == null ? void 0 : _a.usuario) == null ? void 0 : _b.id)) {
      this.obtenerUsuarioPorID(this.userData.usuario.id);
    }
    this.obtenerUsuariosApp();
    this.cargarEncuestas();
    this.cargarNotificacionesIncidencias();
  }
  ngAfterViewInit() {
  }
  loadUserData() {
    const data = localStorage.getItem("userData");
    if (data) {
      this.userData = JSON.parse(data);
    }
  }
  obtenerUsuarioPorID(id_usuario) {
    if (!id_usuario)
      return;
    this.userService.obtenerUsuarioPorID(id_usuario).subscribe({
      next: (resultado) => {
        this.usuario = resultado.usuario ? resultado.usuario : resultado;
      },
      error: (err) => console.error("Error cargando perfil admin", err)
    });
  }
  obtenerUsuariosApp() {
    this.userService.obtenerUsuarios().subscribe({
      next: (respuesta) => {
        this.listaUsuarios = respuesta || [];
        this.listaUsuariosFiltrados = [...this.listaUsuarios];
        this.calcularUsuariosRestringidos();
        this.calcularNuevosUsuariosHoy();
      },
      error: (error) => console.error("Error al obtener la lista de usuarios:", error)
    });
  }
  /**
   * Consulta el backend para saber cuántas incidencias requieren atención (INICIADA o EN_REVISION)
   */
  cargarNotificacionesIncidencias() {
    this.incidenciasService.obtenerTodasIncidenciasAdmin().subscribe({
      next: (incidencias) => {
        this.incidenciasPendientesCount = (incidencias || []).filter((i) => i.estado === "INICIADA" || i.estado === "EN_REVISION").length;
      },
      error: (err) => console.error("Error cargando incidencias para el resumen:", err)
    });
  }
  calcularUsuariosRestringidos() {
    this.usuariosRestringidosCount = this.listaUsuarios.filter((u) => u.ya_ha_sido_suspendido || u.restringido).length;
  }
  calcularNuevosUsuariosHoy() {
    const hoy = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.nuevosUsuariosHoyCount = this.listaUsuarios.filter((u) => {
      if (!u.created_at)
        return false;
      return u.created_at.startsWith(hoy);
    }).length;
  }
  toggleRestriccion(user) {
    user.ya_ha_sido_suspendido = !user.ya_ha_sido_suspendido;
    this.calcularUsuariosRestringidos();
  }
  filtrarUsuarios(event) {
    const query = (event.target.value || "").toLowerCase().trim();
    if (!query) {
      this.listaUsuariosFiltrados = [...this.listaUsuarios];
      return;
    }
    this.listaUsuariosFiltrados = this.listaUsuarios.filter((user) => {
      const nombre = (user.nombre || "").toLowerCase();
      const email = (user.email || "").toLowerCase();
      return nombre.includes(query) || email.includes(query);
    });
  }
  verDetalles(user) {
    console.log("Abriendo detalles del usuario:", user);
  }
  abrirMensaje(msg) {
    msg.leido = true;
    this.mensajesPendientes = this.mensajes.filter((m) => !m.leido).length;
  }
  goHome() {
    this.navCtrl.navigateRoot(["/home"]);
  }
  goEvents() {
    this.navCtrl.navigateRoot(["/events-admin"]);
  }
  goGuayApp() {
    this.navCtrl.navigateRoot(["/home"]);
  }
  goEncuestas() {
    this.navCtrl.navigateForward(["/gestion-encuestas"]);
  }
  goIncidencias() {
    this.navCtrl.navigateForward(["/incidencias-admin"]);
  }
  goGestionUsuarios() {
    this.navCtrl.navigateForward(["/gestion-usuarios-admin"]);
  }
  updateTime() {
    const now = /* @__PURE__ */ new Date();
    this.hours = now.getHours().toString().padStart(2, "0");
    this.minutes = now.getMinutes().toString().padStart(2, "0");
  }
  cargarEncuestas() {
    this.encuestaService.getTodasLasEncuestas().subscribe({
      next: (res) => {
        this.listaEncuestas = res || [];
        this.totalEncuestas = this.listaEncuestas.length;
        this.calcularMetricas();
        setTimeout(() => this.initChart(), 200);
      },
      error: (err) => {
        console.error("Error al cargar encuestas", err);
        setTimeout(() => this.initChart(), 200);
      }
    });
  }
  calcularMetricas() {
    if (this.totalEncuestas === 0)
      return;
    const suma = this.listaEncuestas.reduce((acc, curr) => acc + (curr.calificacion || 0), 0);
    this.promedioSatisfaccion = parseFloat((suma / this.totalEncuestas).toFixed(1));
  }
  initChart() {
    if (!this.barCanvas || !this.barCanvas.nativeElement)
      return;
    const dataDistribution = [0, 0, 0, 0, 0];
    if (this.listaEncuestas.length > 0) {
      this.listaEncuestas.forEach((e) => {
        if (e.calificacion >= 1 && e.calificacion <= 5) {
          dataDistribution[e.calificacion - 1]++;
        }
      });
    }
    if (this.barChart) {
      this.barChart.destroy();
    }
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: ["P\xE9simo", "Regular", "Bueno", "Genial", "Excelente"],
        datasets: [
          {
            label: "N\xBA de Valoraciones",
            data: dataDistribution,
            backgroundColor: ["#ffb7b7", "#f0d7b4", "#b3b5e6", "#b7e0b4", "#7c4dff"],
            borderRadius: 12,
            borderWidth: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 1, color: "#666" },
            grid: { color: "rgba(0,0,0,0.05)" }
          },
          x: {
            ticks: { color: "#666" },
            grid: { display: false }
          }
        }
      }
    });
  }
  static \u0275fac = function AdminApp_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminApp)(\u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(UserServicesService), \u0275\u0275directiveInject(FuncionesComunes), \u0275\u0275directiveInject(EncuestaService), \u0275\u0275directiveInject(IncidenciasService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminApp, selectors: [["app-admin"]], viewQuery: function AdminApp_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.barCanvas = _t.first);
    }
  }, decls: 112, vars: 16, consts: [["barCanvas", ""], [1, "ion-padding", "admin-content", 3, "fullscreen"], [1, "admin-container"], [1, "admin-header-card", "p-3", "shadow-sm", "rounded-4", "mb-4"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2"], [1, "d-flex", "align-items-center", "gap-3"], [1, "admin-avatar-bubble", "shadow-sm"], ["alt", "Admin Avatar", 3, "src"], [1, "badge-role"], [1, "m-0", "fw-bold", "title-user"], [1, "clock-badge", "d-flex", "align-items-center", "gap-2", "px-3", "py-2", "rounded-pill"], ["name", "time-outline"], [1, "fw-bold"], [1, "blink"], [1, "mb-3", "g-3"], ["size", "12", "size-md", "4"], [1, "metric-card", "card-purple", "p-3", "shadow-sm", "rounded-4", "d-flex", "align-items-center", "justify-content-between", "cursor-pointer", "interactive-card", 3, "click"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], [1, "metric-number"], [1, "badge-notif", "badge-notif-purple"], [1, "metric-label", "m-0", "fw-bold"], [1, "text-muted-custom"], [1, "metric-icon", "icon-purple"], ["name", "people-outline"], [1, "metric-card", "card-beige", "p-3", "shadow-sm", "rounded-4", "d-flex", "align-items-center", "justify-content-between", "cursor-pointer", "interactive-card", 3, "click"], [1, "badge-notif", "badge-notif-orange"], [1, "badge-notif", "badge-notif-success"], [1, "metric-icon", "icon-orange"], ["name", "warning-outline"], [1, "metric-card", "card-rose", "p-3", "shadow-sm", "rounded-4", "d-flex", "align-items-center", "justify-content-between", "cursor-pointer", "interactive-card", 3, "click"], [1, "badge-notif", "badge-notif-red"], [1, "metric-icon", "icon-red"], ["name", "lock-closed-outline"], [1, "mb-4"], [1, "btn-gestion-card", "w-100", 3, "click"], ["name", "calendar-outline", 1, "me-2"], ["name", "warning-outline", 1, "me-2"], ["name", "clipboard-outline", 1, "me-2"], [1, "section-title", "mb-3"], ["name", "bar-chart-outline"], [1, "chart-card", "p-3", "shadow-sm", "rounded-4", "bg-white"], [1, "chart-container"], [1, "text-center", "p-3"], [1, "btn", "btn-sm", "text-dark", "fw-bold", 2, "background-color", "#f0d7b4", "border-radius", "20px", 3, "click"], [1, "bg-white", "rounded-4", "shadow-sm", "p-3"], ["placeholder", "Buscar por nombre o email...", 1, "custom-searchbar", "mb-2", 3, "ionInput"], [1, "user-list-container"], ["lines", "full", 1, "user-list", "bg-transparent"], [1, "user-item"], [1, "text-center", "py-4", "text-muted", "small"], ["name", "mail-unread-outline"], [1, "bg-white", "rounded-4", "shadow-sm", "p-2"], ["lines", "full", 1, "bg-transparent"], ["button", "", 1, "mensaje-item"], [1, "d-flex", "justify-content-center", "my-4"], [1, "btn-go-app", 3, "click"], ["name", "arrow-forward-outline", 1, "ms-2"], [1, "text-muted", "small", "m-0"], ["slot", "start", 1, "avatar-user"], ["alt", "Foto perfil", 3, "src"], [1, "fw-bold", "m-0"], ["slot", "end"], ["fill", "clear", "slot", "end", "color", "dark", 3, "click"], ["name", "eye-outline", "slot", "icon-only"], ["fill", "clear", "slot", "end", 3, "click", "color"], ["slot", "icon-only", 3, "name"], ["button", "", 1, "mensaje-item", 3, "click"], ["slot", "end", 1, "badge-status", "status-new"]], template: function AdminApp_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar-admin");
      \u0275\u0275elementStart(1, "ion-content", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
      \u0275\u0275element(7, "img", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div")(9, "span", 8);
      \u0275\u0275text(10, "Administrador");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "h2", 9);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 10);
      \u0275\u0275element(14, "ion-icon", 11);
      \u0275\u0275elementStart(15, "span", 12);
      \u0275\u0275text(16);
      \u0275\u0275elementStart(17, "span", 13);
      \u0275\u0275text(18, ":");
      \u0275\u0275elementEnd();
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(20, "ion-row", 14)(21, "ion-col", 15)(22, "div", 16);
      \u0275\u0275listener("click", function AdminApp_Template_div_click_22_listener() {
        return ctx.goGestionUsuarios();
      });
      \u0275\u0275elementStart(23, "div")(24, "div", 17)(25, "span", 18);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(27, AdminApp_Conditional_27_Template, 2, 1, "span", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p", 20);
      \u0275\u0275text(29, "Usuarios Registrados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "small", 21);
      \u0275\u0275text(31, "Ver listado de cuentas \u203A");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 22);
      \u0275\u0275element(33, "ion-icon", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "ion-col", 15)(35, "div", 24);
      \u0275\u0275listener("click", function AdminApp_Template_div_click_35_listener() {
        return ctx.goIncidencias();
      });
      \u0275\u0275elementStart(36, "div")(37, "div", 17)(38, "span", 18);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(40, AdminApp_Conditional_40_Template, 2, 0, "span", 25);
      \u0275\u0275conditionalCreate(41, AdminApp_Conditional_41_Template, 2, 0, "span", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "p", 20);
      \u0275\u0275text(43, "Incidencias Pendientes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "small", 21);
      \u0275\u0275text(45, "Revisar soporte t\xE9cnico \u203A");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 27);
      \u0275\u0275element(47, "ion-icon", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "ion-col", 15)(49, "div", 29);
      \u0275\u0275listener("click", function AdminApp_Template_div_click_49_listener() {
        return ctx.goGestionUsuarios();
      });
      \u0275\u0275elementStart(50, "div")(51, "div", 17)(52, "span", 18);
      \u0275\u0275text(53);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(54, AdminApp_Conditional_54_Template, 2, 0, "span", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "p", 20);
      \u0275\u0275text(56, "Usuarios Restringidos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "small", 21);
      \u0275\u0275text(58, "Gestionar accesos \u203A");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 31);
      \u0275\u0275element(60, "ion-icon", 32);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(61, "ion-row", 33)(62, "ion-col", 15)(63, "button", 34);
      \u0275\u0275listener("click", function AdminApp_Template_button_click_63_listener() {
        return ctx.goEvents();
      });
      \u0275\u0275element(64, "ion-icon", 35);
      \u0275\u0275elementStart(65, "span");
      \u0275\u0275text(66, "Gesti\xF3n de Eventos");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "ion-col", 15)(68, "button", 34);
      \u0275\u0275listener("click", function AdminApp_Template_button_click_68_listener() {
        return ctx.goIncidencias();
      });
      \u0275\u0275element(69, "ion-icon", 36);
      \u0275\u0275elementStart(70, "span");
      \u0275\u0275text(71, "Centro de Incidencias");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(72, "ion-col", 15)(73, "button", 34);
      \u0275\u0275listener("click", function AdminApp_Template_button_click_73_listener() {
        return ctx.goEncuestas();
      });
      \u0275\u0275element(74, "ion-icon", 37);
      \u0275\u0275elementStart(75, "span");
      \u0275\u0275text(76, "Ver Encuestas");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(77, "section", 33)(78, "h3", 38);
      \u0275\u0275element(79, "ion-icon", 39);
      \u0275\u0275text(80, " An\xE1lisis de Satisfacci\xF3n ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 40)(82, "div", 41);
      \u0275\u0275element(83, "canvas", null, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(85, AdminApp_Conditional_85_Template, 3, 0, "div", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "section", 33)(87, "h3", 38);
      \u0275\u0275element(88, "ion-icon", 23);
      \u0275\u0275text(89, " Gesti\xF3n de Usuarios ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "button", 43);
      \u0275\u0275listener("click", function AdminApp_Template_button_click_90_listener() {
        return ctx.goGestionUsuarios();
      });
      \u0275\u0275text(91, " Ver Panel Completo \u203A ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div", 44)(93, "ion-searchbar", 45);
      \u0275\u0275listener("ionInput", function AdminApp_Template_ion_searchbar_ionInput_93_listener($event) {
        return ctx.filtrarUsuarios($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div", 46)(95, "ion-list", 47);
      \u0275\u0275repeaterCreate(96, AdminApp_For_97_Template, 14, 9, "ion-item", 48, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(98, AdminApp_Conditional_98_Template, 2, 0, "div", 49);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(99, "section", 33)(100, "h3", 38);
      \u0275\u0275element(101, "ion-icon", 50);
      \u0275\u0275text(102, " Centro de Mensajes ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div", 51)(104, "ion-list", 52);
      \u0275\u0275repeaterCreate(105, AdminApp_For_106_Template, 7, 4, "ion-item", 53, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "div", 54)(108, "button", 55);
      \u0275\u0275listener("click", function AdminApp_Template_button_click_108_listener() {
        return ctx.goGuayApp();
      });
      \u0275\u0275elementStart(109, "span");
      \u0275\u0275text(110, "Ir a la App GoGuay");
      \u0275\u0275elementEnd();
      \u0275\u0275element(111, "ion-icon", 56);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance(6);
      \u0275\u0275property("src", (ctx.usuario == null ? null : ctx.usuario.fotoPerfil) || ctx.avatarDefault, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", (ctx.usuario == null ? null : ctx.usuario.nombre) ? (ctx.usuario == null ? null : ctx.usuario.nombre) + " " + ((ctx.usuario == null ? null : ctx.usuario.apellidos) || "") : "Panel deControl", " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.hours, " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.minutes, " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.listaUsuarios.length);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.nuevosUsuariosHoyCount > 0 ? 27 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275classProp("card-alert-pulse", ctx.incidenciasPendientesCount > 0);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.incidenciasPendientesCount);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.incidenciasPendientesCount > 0 ? 40 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.incidenciasPendientesCount === 0 ? 41 : -1);
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.usuariosRestringidosCount);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.usuariosRestringidosCount > 0 ? 54 : -1);
      \u0275\u0275advance(31);
      \u0275\u0275conditional(ctx.totalEncuestas === 0 ? 85 : -1);
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.listaUsuariosFiltrados);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.listaUsuariosFiltrados.length === 0 ? 98 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.mensajes);
    }
  }, dependencies: [IonicModule, IonAvatar, IonButton, IonCol, IonContent, IonIcon, IonItem, IonLabel, IonList, IonRow, IonSearchbar, TextValueAccessorDirective, NavbarAdmin], styles: ['@charset "UTF-8";\n\n\nion-content.admin-content[_ngcontent-%COMP%] {\n  --background: #E9EDD5 !important;\n}\n.admin-container[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.admin-header-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 28px !important;\n}\n.admin-header-card[_ngcontent-%COMP%]   .admin-avatar-bubble[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 2px solid #F0D7B4;\n}\n.admin-header-card[_ngcontent-%COMP%]   .admin-avatar-bubble[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.admin-header-card[_ngcontent-%COMP%]   .badge-role[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  background: #F0D7B4;\n  color: #2c2c2c;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n.admin-header-card[_ngcontent-%COMP%]   .title-user[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #2c2c2c;\n}\n.admin-header-card[_ngcontent-%COMP%]   .clock-badge[_ngcontent-%COMP%] {\n  background: #e9edd5;\n  color: #2c2c2c;\n  font-size: 0.9rem;\n}\n.admin-header-card[_ngcontent-%COMP%]   .clock-badge[_ngcontent-%COMP%]   .blink[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_blink 1s infinite;\n}\n@keyframes _ngcontent-%COMP%_blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n}\n.metric-card[_ngcontent-%COMP%] {\n  border-radius: 24px !important;\n  color: #2c2c2c;\n}\n.metric-card.card-purple[_ngcontent-%COMP%] {\n  background: #b3b5e6;\n}\n.metric-card.card-beige[_ngcontent-%COMP%] {\n  background: #F0D7B4;\n}\n.metric-card.card-rose[_ngcontent-%COMP%] {\n  background: #ffcdd2;\n}\n.metric-card[_ngcontent-%COMP%]   .metric-number[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  line-height: 1;\n  display: block;\n}\n.metric-card[_ngcontent-%COMP%]   .metric-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  opacity: 0.85;\n}\n.metric-card[_ngcontent-%COMP%]   .metric-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  opacity: 0.8;\n}\n.btn-gestion-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #2c2c2c;\n  border: 1.5px solid #b3b5e6;\n  border-radius: 35px;\n  padding: 14px 20px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);\n  transition: all 0.25s ease;\n}\n.btn-gestion-card[_ngcontent-%COMP%]:hover {\n  background: #b3b5e6;\n  color: #ffffff;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(179, 181, 230, 0.4);\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #2c2c2c;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.section-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #7c4dff;\n  font-size: 1.3rem;\n}\n.chart-card[_ngcontent-%COMP%] {\n  border-radius: 28px !important;\n}\n.chart-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 260px;\n  width: 100%;\n}\n.custom-searchbar[_ngcontent-%COMP%] {\n  --border-radius: 35px !important;\n  --background: #f8f9fa;\n  --box-shadow: none;\n  padding: 0;\n}\n.user-list-container[_ngcontent-%COMP%] {\n  max-height: 380px;\n  overflow-y: auto;\n}\n.user-item[_ngcontent-%COMP%] {\n  --padding-start: 8px;\n  --padding-end: 8px;\n}\n.user-item[_ngcontent-%COMP%]   .avatar-user[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n}\n.badge-status[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 20px;\n}\n.badge-status.status-success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge-status.status-danger[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.badge-status.status-new[_ngcontent-%COMP%] {\n  background: #b3b5e6;\n  color: #2c2c2c;\n}\n.btn-go-app[_ngcontent-%COMP%] {\n  background: #b3b5e6;\n  color: #ffffff;\n  font-weight: 700;\n  padding: 12px 28px;\n  border-radius: 35px;\n  border: none;\n  display: flex;\n  align-items: center;\n  box-shadow: 0 6px 20px rgba(179, 181, 230, 0.4);\n  transition: all 0.25s ease;\n}\n.btn-go-app[_ngcontent-%COMP%]:hover {\n  background: #9d9fe0;\n  transform: translateY(-2px);\n}\n.interactive-card[_ngcontent-%COMP%] {\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  border: 2px solid transparent;\n}\n.interactive-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;\n  border-color: rgba(0, 0, 0, 0.05);\n}\n.interactive-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.text-muted-custom[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6c757d;\n}\n.badge-notif[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 800;\n  padding: 3px 9px;\n  border-radius: 20px;\n  display: inline-block;\n  letter-spacing: 0.3px;\n}\n.badge-notif.badge-notif-purple[_ngcontent-%COMP%] {\n  background: #e0d4f7;\n  color: #5b2cac;\n}\n.badge-notif.badge-notif-orange[_ngcontent-%COMP%] {\n  background: #ffe0b2;\n  color: #e65100;\n}\n.badge-notif.badge-notif-success[_ngcontent-%COMP%] {\n  background: #c8e6c9;\n  color: #2e7d32;\n}\n.badge-notif.badge-notif-red[_ngcontent-%COMP%] {\n  background: #ffcdd2;\n  color: #c62828;\n}\n.card-alert-pulse[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulseNotif 2.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulseNotif {\n  0% {\n    box-shadow: 0 0 0 0 rgba(230, 81, 0, 0.3);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(230, 81, 0, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(230, 81, 0, 0);\n  }\n}\n/*# sourceMappingURL=admin-app.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminApp, [{
    type: Component,
    args: [{ selector: "app-admin", standalone: true, imports: [IonicModule, NavbarAdmin], template: `<app-navbar-admin></app-navbar-admin>

<ion-content
  [fullscreen]="true"
  class="ion-padding admin-content"
>
  <div class="admin-container">
    <!-- CABECERA: USUARIO Y RELOJ -->
    <div class="admin-header-card p-3 shadow-sm rounded-4 mb-4">
      <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
        <div class="d-flex align-items-center gap-3">
          <div class="admin-avatar-bubble shadow-sm">
            <img
              [src]="usuario?.fotoPerfil || avatarDefault"
              alt="Admin Avatar"
            />
          </div>
          <div>
            <span class="badge-role">Administrador</span>
            <h2 class="m-0 fw-bold title-user">
              {{ usuario?.nombre ? (usuario?.nombre + ' ' + (usuario?.apellidos || '')) : 'Panel deControl' }}
            </h2>
          </div>
        </div>

        <div class="clock-badge d-flex align-items-center gap-2 px-3 py-2 rounded-pill">
          <ion-icon name="time-outline"></ion-icon>
          <span class="fw-bold">
            {{ hours }}
            <span class="blink">:</span>
            {{ minutes }}
          </span>
        </div>
      </div>
    </div>

    <!-- TARJETAS DE M\xC9TRICAS R\xC1PIDAS -->
    <ion-row class="mb-3 g-3">
      <!-- 1. NOTIFICACI\xD3N: USUARIOS REGISTRADOS -->
      <ion-col
        size="12"
        size-md="4"
      >
        <div
          class="metric-card card-purple p-3 shadow-sm rounded-4 d-flex align-items-center justify-content-between cursor-pointer interactive-card"
          (click)="goGestionUsuarios()"
        >
          <div>
            <div class="d-flex align-items-center gap-2 mb-1">
              <span class="metric-number">{{ listaUsuarios.length }}</span>
              @if (nuevosUsuariosHoyCount > 0) {
              <span class="badge-notif badge-notif-purple">+{{ nuevosUsuariosHoyCount }} hoy</span>
              }
            </div>
            <p class="metric-label m-0 fw-bold">Usuarios Registrados</p>
            <small class="text-muted-custom">Ver listado de cuentas \u203A</small>
          </div>
          <div class="metric-icon icon-purple">
            <ion-icon name="people-outline"></ion-icon>
          </div>
        </div>
      </ion-col>

      <!-- 2. NOTIFICACI\xD3N: INCIDENCIAS PENDIENTES -->
      <ion-col
        size="12"
        size-md="4"
      >
        <div
          class="metric-card card-beige p-3 shadow-sm rounded-4 d-flex align-items-center justify-content-between cursor-pointer interactive-card"
          [class.card-alert-pulse]="incidenciasPendientesCount > 0"
          (click)="goIncidencias()"
        >
          <div>
            <div class="d-flex align-items-center gap-2 mb-1">
              <span class="metric-number">{{ incidenciasPendientesCount }}</span>
              @if (incidenciasPendientesCount > 0) {
              <span class="badge-notif badge-notif-orange">Requiere atenci\xF3n</span>
              } @if (incidenciasPendientesCount === 0) {
              <span class="badge-notif badge-notif-success">Al d\xEDa</span>
              }
            </div>
            <p class="metric-label m-0 fw-bold">Incidencias Pendientes</p>
            <small class="text-muted-custom">Revisar soporte t\xE9cnico \u203A</small>
          </div>
          <div class="metric-icon icon-orange">
            <ion-icon name="warning-outline"></ion-icon>
          </div>
        </div>
      </ion-col>

      <!-- 3. NOTIFICACI\xD3N: USUARIOS RESTRINGIDOS -->
      <ion-col
        size="12"
        size-md="4"
      >
        <div
          class="metric-card card-rose p-3 shadow-sm rounded-4 d-flex align-items-center justify-content-between cursor-pointer interactive-card"
          (click)="goGestionUsuarios()"
        >
          <div>
            <div class="d-flex align-items-center gap-2 mb-1">
              <span class="metric-number">{{ usuariosRestringidosCount }}</span>
              @if (usuariosRestringidosCount > 0) {
              <span class="badge-notif badge-notif-red">Suspendidos</span>
              }
            </div>
            <p class="metric-label m-0 fw-bold">Usuarios Restringidos</p>
            <small class="text-muted-custom">Gestionar accesos \u203A</small>
          </div>
          <div class="metric-icon icon-red">
            <ion-icon name="lock-closed-outline"></ion-icon>
          </div>
        </div>
      </ion-col>
    </ion-row>

    <!-- BOTONES DE GESTI\xD3N -->
    <ion-row class="mb-4">
      <ion-col
        size="12"
        size-md="4"
      >
        <button
          class="btn-gestion-card w-100"
          (click)="goEvents()"
        >
          <ion-icon
            name="calendar-outline"
            class="me-2"
          ></ion-icon>
          <span>Gesti\xF3n de Eventos</span>
        </button>
      </ion-col>

      <ion-col
        size="12"
        size-md="4"
      >
        <button
          class="btn-gestion-card w-100"
          (click)="goIncidencias()"
        >
          <ion-icon
            name="warning-outline"
            class="me-2"
          ></ion-icon>
          <span>Centro de Incidencias</span>
        </button>
      </ion-col>

      <ion-col
        size="12"
        size-md="4"
      >
        <button
          class="btn-gestion-card w-100"
          (click)="goEncuestas()"
        >
          <ion-icon
            name="clipboard-outline"
            class="me-2"
          ></ion-icon>
          <span>Ver Encuestas</span>
        </button>
      </ion-col>
    </ion-row>

    <!-- GR\xC1FICO DE SATISFACCI\xD3N -->
    <section class="mb-4">
      <h3 class="section-title mb-3">
        <ion-icon name="bar-chart-outline"></ion-icon>
        An\xE1lisis de Satisfacci\xF3n
      </h3>
      <div class="chart-card p-3 shadow-sm rounded-4 bg-white">
        <div class="chart-container">
          <canvas #barCanvas></canvas>
        </div>
        @if (totalEncuestas === 0) {
        <div class="text-center p-3">
          <p class="text-muted small m-0">Las estad\xEDsticas se actualizar\xE1n autom\xE1ticamente conforme lleguen las valoraciones.</p>
        </div>
        }
      </div>
    </section>

    <!-- GESTI\xD3N DE USUARIOS -->
    <section class="mb-4">
      <h3 class="section-title mb-3">
        <ion-icon name="people-outline"></ion-icon>
        Gesti\xF3n de Usuarios
      </h3>

      <button
        class="btn btn-sm text-dark fw-bold"
        style="background-color: #f0d7b4; border-radius: 20px"
        (click)="goGestionUsuarios()"
      >
        Ver Panel Completo \u203A
      </button>

      <div class="bg-white rounded-4 shadow-sm p-3">
        <ion-searchbar
          placeholder="Buscar por nombre o email..."
          (ionInput)="filtrarUsuarios($event)"
          class="custom-searchbar mb-2"
        ></ion-searchbar>

        <div class="user-list-container">
          <ion-list
            lines="full"
            class="user-list bg-transparent"
          >
            @for (user of listaUsuariosFiltrados; track user) {
            <ion-item class="user-item">
              <ion-avatar
                slot="start"
                class="avatar-user"
              >
                <img
                  [src]="user.fotoPerfil || avatarDefault"
                  alt="Foto perfil"
                />
              </ion-avatar>
              <ion-label>
                <h3 class="fw-bold m-0">{{ user.nombre }} {{ user.apellidos || '' }}</h3>
                <p class="text-muted small m-0">{{ user.email }}</p>
              </ion-label>
              <span
                [class]="user.ya_ha_sido_suspendido ? 'badge-status status-danger' : 'badge-status status-success'"
                slot="end"
              >
                {{ user.ya_ha_sido_suspendido ? 'Restringido' : 'Activo' }}
              </span>
              <ion-button
                fill="clear"
                slot="end"
                (click)="verDetalles(user)"
                color="dark"
              >
                <ion-icon
                  name="eye-outline"
                  slot="icon-only"
                ></ion-icon>
              </ion-button>
              <ion-button
                fill="clear"
                slot="end"
                (click)="toggleRestriccion(user)"
                [color]="user.ya_ha_sido_suspendido ? 'success' : 'danger'"
              >
                <ion-icon
                  [name]="user.ya_ha_sido_suspendido ? 'lock-open-outline' : 'lock-closed-outline'"
                  slot="icon-only"
                ></ion-icon>
              </ion-button>
            </ion-item>
            } @if (listaUsuariosFiltrados.length === 0) {
            <div class="text-center py-4 text-muted small">No se encontraron usuarios coincidentes.</div>
            }
          </ion-list>
        </div>
      </div>
    </section>

    <!-- CENTRO DE MENSAJES -->
    <section class="mb-4">
      <h3 class="section-title mb-3">
        <ion-icon name="mail-unread-outline"></ion-icon>
        Centro de Mensajes
      </h3>

      <div class="bg-white rounded-4 shadow-sm p-2">
        <ion-list
          lines="full"
          class="bg-transparent"
        >
          @for (msg of mensajes; track msg) {
          <ion-item
            button
            (click)="abrirMensaje(msg)"
            class="mensaje-item"
          >
            <ion-label>
              <h3 class="fw-bold m-0">{{ msg.asunto }}</h3>
              <p class="text-muted small m-0">{{ msg.remitente }} \u2014 {{ msg.fecha }}</p>
            </ion-label>
            @if (!msg.leido) {
            <span
              class="badge-status status-new"
              slot="end"
            >
              Nuevo
            </span>
            }
          </ion-item>
          }
        </ion-list>
      </div>
    </section>

    <!-- BOT\xD3N IR A APP -->
    <div class="d-flex justify-content-center my-4">
      <button
        class="btn-go-app"
        (click)="goGuayApp()"
      >
        <span>Ir a la App GoGuay</span>
        <ion-icon
          name="arrow-forward-outline"
          class="ms-2"
        ></ion-icon>
      </button>
    </div>
  </div>
</ion-content>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/admin/admin-app.page.scss */\nion-content.admin-content {\n  --background: #E9EDD5 !important;\n}\n.admin-container {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.admin-header-card {\n  background: #ffffff;\n  border-radius: 28px !important;\n}\n.admin-header-card .admin-avatar-bubble {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 2px solid #F0D7B4;\n}\n.admin-header-card .admin-avatar-bubble img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.admin-header-card .badge-role {\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  background: #F0D7B4;\n  color: #2c2c2c;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n.admin-header-card .title-user {\n  font-size: 1.25rem;\n  color: #2c2c2c;\n}\n.admin-header-card .clock-badge {\n  background: #e9edd5;\n  color: #2c2c2c;\n  font-size: 0.9rem;\n}\n.admin-header-card .clock-badge .blink {\n  animation: blink 1s infinite;\n}\n@keyframes blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n}\n.metric-card {\n  border-radius: 24px !important;\n  color: #2c2c2c;\n}\n.metric-card.card-purple {\n  background: #b3b5e6;\n}\n.metric-card.card-beige {\n  background: #F0D7B4;\n}\n.metric-card.card-rose {\n  background: #ffcdd2;\n}\n.metric-card .metric-number {\n  font-size: 1.8rem;\n  font-weight: 800;\n  line-height: 1;\n  display: block;\n}\n.metric-card .metric-label {\n  font-size: 0.85rem;\n  font-weight: 600;\n  opacity: 0.85;\n}\n.metric-card .metric-icon {\n  font-size: 2rem;\n  opacity: 0.8;\n}\n.btn-gestion-card {\n  background: #ffffff;\n  color: #2c2c2c;\n  border: 1.5px solid #b3b5e6;\n  border-radius: 35px;\n  padding: 14px 20px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);\n  transition: all 0.25s ease;\n}\n.btn-gestion-card:hover {\n  background: #b3b5e6;\n  color: #ffffff;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(179, 181, 230, 0.4);\n}\n.section-title {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #2c2c2c;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.section-title ion-icon {\n  color: #7c4dff;\n  font-size: 1.3rem;\n}\n.chart-card {\n  border-radius: 28px !important;\n}\n.chart-container {\n  position: relative;\n  height: 260px;\n  width: 100%;\n}\n.custom-searchbar {\n  --border-radius: 35px !important;\n  --background: #f8f9fa;\n  --box-shadow: none;\n  padding: 0;\n}\n.user-list-container {\n  max-height: 380px;\n  overflow-y: auto;\n}\n.user-item {\n  --padding-start: 8px;\n  --padding-end: 8px;\n}\n.user-item .avatar-user {\n  width: 42px;\n  height: 42px;\n}\n.badge-status {\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 20px;\n}\n.badge-status.status-success {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge-status.status-danger {\n  background: #ffebee;\n  color: #c62828;\n}\n.badge-status.status-new {\n  background: #b3b5e6;\n  color: #2c2c2c;\n}\n.btn-go-app {\n  background: #b3b5e6;\n  color: #ffffff;\n  font-weight: 700;\n  padding: 12px 28px;\n  border-radius: 35px;\n  border: none;\n  display: flex;\n  align-items: center;\n  box-shadow: 0 6px 20px rgba(179, 181, 230, 0.4);\n  transition: all 0.25s ease;\n}\n.btn-go-app:hover {\n  background: #9d9fe0;\n  transform: translateY(-2px);\n}\n.interactive-card {\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  border: 2px solid transparent;\n}\n.interactive-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;\n  border-color: rgba(0, 0, 0, 0.05);\n}\n.interactive-card small {\n  cursor: pointer;\n}\n.text-muted-custom {\n  font-size: 0.75rem;\n  color: #6c757d;\n}\n.badge-notif {\n  font-size: 0.68rem;\n  font-weight: 800;\n  padding: 3px 9px;\n  border-radius: 20px;\n  display: inline-block;\n  letter-spacing: 0.3px;\n}\n.badge-notif.badge-notif-purple {\n  background: #e0d4f7;\n  color: #5b2cac;\n}\n.badge-notif.badge-notif-orange {\n  background: #ffe0b2;\n  color: #e65100;\n}\n.badge-notif.badge-notif-success {\n  background: #c8e6c9;\n  color: #2e7d32;\n}\n.badge-notif.badge-notif-red {\n  background: #ffcdd2;\n  color: #c62828;\n}\n.card-alert-pulse {\n  animation: pulseNotif 2.5s infinite;\n}\n@keyframes pulseNotif {\n  0% {\n    box-shadow: 0 0 0 0 rgba(230, 81, 0, 0.3);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(230, 81, 0, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(230, 81, 0, 0);\n  }\n}\n/*# sourceMappingURL=admin-app.page.css.map */\n'] }]
  }], () => [{ type: NavController }, { type: UserServicesService }, { type: FuncionesComunes }, { type: EncuestaService }, { type: IncidenciasService }], { barCanvas: [{
    type: ViewChild,
    args: ["barCanvas"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminApp, { className: "AdminApp", filePath: "src/app/pages/admin/admin-app.page.ts", lineNumber: 34 });
})();
export {
  AdminApp
};
//# sourceMappingURL=admin-app.page-6ARRC2Q7.js.map
