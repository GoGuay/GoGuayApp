import {
  NavbarAdmin
} from "./chunk-YZ747JFO.js";
import {
  addIcons,
  arrowBackOutline,
  callOutline,
  chatbubbleEllipsesOutline,
  checkmarkCircleOutline,
  closeCircleOutline,
  filterOutline,
  lockClosedOutline,
  lockOpenOutline,
  mailOutline,
  peopleOutline,
  searchOutline,
  shieldOutline,
  starHalfOutline,
  starOutline,
  warningOutline
} from "./chunk-TDPVVR7R.js";
import {
  UserServicesService
} from "./chunk-YZOGC4HD.js";
import "./chunk-CGCOLBWN.js";
import {
  IonButton,
  IonCol,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonicModule,
  SelectValueAccessorDirective,
  TextValueAccessorDirective
} from "./chunk-6IWXE3BU.js";
import {
  FormsModule,
  NavController,
  NgControlStatus,
  NgModel
} from "./chunk-TU2LK3TM.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-7PPOBOFB.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HLETIGG3.js";
import "./chunk-7556B6PN.js";
import "./chunk-W7NNY2EY.js";
import "./chunk-5UBTS3LV.js";
import "./chunk-5U7ILDTA.js";
import "./chunk-DBFJ6K2U.js";
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
import "./chunk-Z325AMW6.js";
import "./chunk-GEKSWYBB.js";
import "./chunk-YAS4LRVC.js";
import "./chunk-5SZB5ECT.js";

// src/app/pages/admin/gestion-usuarios-admin/gestion-usuarios-admin.page.ts
function GestionUsuariosAdminPage_div_39_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275element(1, "ion-icon", 44);
    \u0275\u0275elementEnd();
  }
}
function GestionUsuariosAdminPage_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function GestionUsuariosAdminPage_div_39_Template_div_click_0_listener() {
      const u_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.verFichaUsuario(u_r2));
    });
    \u0275\u0275elementStart(1, "div", 3)(2, "div", 32);
    \u0275\u0275element(3, "img", 33)(4, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 16)(7, "h4", 34);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, GestionUsuariosAdminPage_div_39_span_9_Template, 2, 0, "span", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 7);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 36)(13, "span");
    \u0275\u0275element(14, "ion-icon", 37);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 38)(21, "button", 39);
    \u0275\u0275listener("click", function GestionUsuariosAdminPage_div_39_Template_button_click_21_listener($event) {
      const u_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.iniciarChatSoporte(u_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(22, "ion-icon", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 41);
    \u0275\u0275listener("click", function GestionUsuariosAdminPage_div_39_Template_button_click_23_listener($event) {
      const u_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleBloqueoUsuario(u_r2, $event));
    });
    \u0275\u0275element(24, "ion-icon", 42);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", (ctx_r2.usuarioSeleccionado == null ? null : ctx_r2.usuarioSeleccionado.id) === u_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", u_r2.fotoPerfil || ctx_r2.avatarDefault, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275classMap(u_r2.ya_ha_sido_suspendido ? "status-dot dot-blocked" : "status-dot dot-active");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", u_r2.nombre, " ", u_r2.apellidos);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", u_r2.malasOpinionesCount > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r2.email);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", u_r2.promedioValoraciones, " (", u_r2.totalOpiniones, ")");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("text-danger", u_r2.incidenciasAbiertasCount > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r2.incidenciasAbiertasCount, " Incidencias ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("btn-lock", !u_r2.ya_ha_sido_suspendido)("btn-unlock", u_r2.ya_ha_sido_suspendido);
    \u0275\u0275property("title", u_r2.ya_ha_sido_suspendido ? "Desbloquear" : "Bloquear");
    \u0275\u0275advance();
    \u0275\u0275property("name", u_r2.ya_ha_sido_suspendido ? "lock-open-outline" : "lock-closed-outline");
  }
}
function GestionUsuariosAdminPage_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "ion-icon", 46);
    \u0275\u0275elementStart(2, "p", 47);
    \u0275\u0275text(3, "No se encontraron usuarios coincidentes.");
    \u0275\u0275elementEnd()();
  }
}
function GestionUsuariosAdminPage_ion_col_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-col", 48)(1, "div", 49)(2, "div", 25)(3, "span", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-button", 51);
    \u0275\u0275listener("click", function GestionUsuariosAdminPage_ion_col_41_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cerrarFicha());
    });
    \u0275\u0275element(6, "ion-icon", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 53)(8, "div", 54);
    \u0275\u0275element(9, "img", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3", 56);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 57);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 58)(15, "div", 59)(16, "div", 60)(17, "span", 61);
    \u0275\u0275element(18, "ion-icon", 62);
    \u0275\u0275text(19, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "strong", 63);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 60)(23, "span", 61);
    \u0275\u0275element(24, "ion-icon", 64);
    \u0275\u0275text(25, "Tel\xE9fono:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "strong", 63);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 65)(29, "div", 66)(30, "div", 67)(31, "span", 68);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "small", 69);
    \u0275\u0275text(34, "Nota Media");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 66)(36, "div", 70)(37, "span", 71);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "small", 69);
    \u0275\u0275text(40, "Malas Opiniones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 66)(42, "div", 70)(43, "span", 71);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "small", 69);
    \u0275\u0275text(46, "Incidencias");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(47, "div", 72)(48, "button", 73);
    \u0275\u0275listener("click", function GestionUsuariosAdminPage_ion_col_41_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.iniciarChatSoporte(ctx_r2.usuarioSeleccionado));
    });
    \u0275\u0275element(49, "ion-icon", 74);
    \u0275\u0275text(50, " Iniciar Chat de Soporte ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 75);
    \u0275\u0275listener("click", function GestionUsuariosAdminPage_ion_col_41_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleBloqueoUsuario(ctx_r2.usuarioSeleccionado));
    });
    \u0275\u0275element(52, "ion-icon", 76);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("ID-", ctx_r2.usuarioSeleccionado.id);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r2.usuarioSeleccionado.fotoPerfil || ctx_r2.avatarDefault, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.usuarioSeleccionado.nombre, " ", ctx_r2.usuarioSeleccionado.apellidos);
    \u0275\u0275advance();
    \u0275\u0275classProp("status-danger", ctx_r2.usuarioSeleccionado.ya_ha_sido_suspendido)("status-success", !ctx_r2.usuarioSeleccionado.ya_ha_sido_suspendido);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.usuarioSeleccionado.ya_ha_sido_suspendido ? "Cuenta Restringida / Bloqueada" : "Cuenta Activa", " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.usuarioSeleccionado.email);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.usuarioSeleccionado.telefono);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.usuarioSeleccionado.promedioValoraciones, " \u2B50");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("bg-danger-subtle", ctx_r2.usuarioSeleccionado.malasOpinionesCount > 0)("bg-light", ctx_r2.usuarioSeleccionado.malasOpinionesCount === 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-danger", ctx_r2.usuarioSeleccionado.malasOpinionesCount > 0)("text-dark", ctx_r2.usuarioSeleccionado.malasOpinionesCount === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.usuarioSeleccionado.malasOpinionesCount, " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("bg-warning-subtle", ctx_r2.usuarioSeleccionado.incidenciasAbiertasCount > 0)("bg-light", ctx_r2.usuarioSeleccionado.incidenciasAbiertasCount === 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-warning", ctx_r2.usuarioSeleccionado.incidenciasAbiertasCount > 0)("text-dark", ctx_r2.usuarioSeleccionado.incidenciasAbiertasCount === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.usuarioSeleccionado.incidenciasAbiertasCount, " ");
    \u0275\u0275advance(7);
    \u0275\u0275classProp("btn-block-main", !ctx_r2.usuarioSeleccionado.ya_ha_sido_suspendido)("btn-unblock-main", ctx_r2.usuarioSeleccionado.ya_ha_sido_suspendido);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r2.usuarioSeleccionado.ya_ha_sido_suspendido ? "lock-open-outline" : "lock-closed-outline");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.usuarioSeleccionado.ya_ha_sido_suspendido ? "Desbloquear Usuario" : "Bloquear / Suspender Usuario", " ");
  }
}
var GestionUsuariosAdminPage = class _GestionUsuariosAdminPage {
  navCtrl;
  userService;
  listaUsuarios = [];
  usuariosFiltrados = [];
  usuarioSeleccionado = null;
  busquedaQuery = "";
  filtroEstado = "todos";
  avatarDefault = "../../../assets/User-Profile-PNG-Image.png";
  constructor(navCtrl, userService) {
    this.navCtrl = navCtrl;
    this.userService = userService;
    addIcons({
      peopleOutline,
      searchOutline,
      filterOutline,
      starOutline,
      starHalfOutline,
      warningOutline,
      chatbubbleEllipsesOutline,
      lockClosedOutline,
      lockOpenOutline,
      arrowBackOutline,
      closeCircleOutline,
      shieldOutline,
      checkmarkCircleOutline,
      mailOutline,
      callOutline
    });
  }
  ngOnInit() {
    this.cargarUsuarios();
  }
  cargarUsuarios() {
    this.userService.obtenerUsuarios().subscribe({
      next: (data) => {
        this.listaUsuarios = (data || []).map((u, idx) => ({
          id: u.id || idx + 1,
          nombre: u.nombre || "Usuario",
          apellidos: u.apellidos || "",
          email: u.email || "",
          telefono: u.telefono || u.telefonoContacto || "No facilitado",
          fotoPerfil: u.fotoPerfil || null,
          ya_ha_sido_suspendido: !!u.ya_ha_sido_suspendido || !!u.restringido,
          rolPerfil: u.rolPerfil || "usuario",
          promedioValoraciones: u.promedioValoraciones ?? 4.2 - idx % 2,
          totalOpiniones: u.totalOpiniones ?? 5 + idx * 2,
          malasOpinionesCount: u.malasOpinionesCount ?? (idx % 3 === 0 ? 2 : 0),
          incidenciasAbiertasCount: u.incidenciasAbiertasCount ?? (idx % 4 === 0 ? 1 : 0),
          fechaRegistro: u.fechaRegistro || "15/05/2026"
        }));
        this.aplicarFiltros();
      },
      error: (err) => {
        console.error("Error al cargar la lista de usuarios:", err);
      }
    });
  }
  aplicarFiltros() {
    const q = this.busquedaQuery.toLowerCase().trim();
    this.usuariosFiltrados = this.listaUsuarios.filter((u) => {
      const coincideNombre = (u.nombre + " " + (u.apellidos || "")).toLowerCase().includes(q);
      const coincideEmail = u.email.toLowerCase().includes(q);
      const coincideBusqueda = !q || coincideNombre || coincideEmail || u.id.toString().includes(q);
      let coincideEstado = true;
      if (this.filtroEstado === "activos")
        coincideEstado = !u.ya_ha_sido_suspendido;
      if (this.filtroEstado === "bloqueados")
        coincideEstado = u.ya_ha_sido_suspendido;
      if (this.filtroEstado === "conflictivos") {
        coincideEstado = u.malasOpinionesCount > 0 || u.incidenciasAbiertasCount > 0;
      }
      return coincideBusqueda && coincideEstado;
    });
  }
  verFichaUsuario(usuario) {
    this.usuarioSeleccionado = usuario;
  }
  cerrarFicha() {
    this.usuarioSeleccionado = null;
  }
  toggleBloqueoUsuario(usuario, event) {
    if (event)
      event.stopPropagation();
    usuario.ya_ha_sido_suspendido = !usuario.ya_ha_sido_suspendido;
  }
  iniciarChatSoporte(usuario) {
    this.navCtrl.navigateForward([`/chat/${usuario.id}`]);
  }
  volverDashboard() {
    this.navCtrl.navigateBack(["/admin-app"]);
  }
  static \u0275fac = function GestionUsuariosAdminPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GestionUsuariosAdminPage)(\u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(UserServicesService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GestionUsuariosAdminPage, selectors: [["app-gestion-usuarios-admin"]], decls: 42, vars: 8, consts: [[1, "ion-padding", "admin-content", 3, "fullscreen"], [1, "admin-container"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-4", "flex-wrap", "gap-2"], [1, "d-flex", "align-items-center", "gap-3"], ["fill", "clear", "color", "dark", 1, "btn-back", 3, "click"], ["name", "arrow-back-outline", "slot", "icon-only"], [1, "fw-bold", "m-0", "title-page"], [1, "text-muted", "small", "m-0"], [1, "badge-total"], [1, "bg-white", "p-3", "rounded-4", "shadow-sm", "mb-4"], [1, "align-items-center", "g-2"], ["size", "12", "size-md", "7"], ["lines", "none", 1, "custom-search-item"], ["name", "search-outline", "slot", "start", 1, "text-muted"], ["placeholder", "Buscar por nombre, email o ID...", "clearInput", "true", 3, "ngModelChange", "ionInput", "ngModel"], ["size", "12", "size-md", "5"], [1, "d-flex", "align-items-center", "gap-2"], ["name", "filter-outline", 1, "text-muted", "fs-5"], ["interface", "popover", 1, "custom-select", "w-100", 3, "ngModelChange", "ionChange", "ngModel"], ["value", "todos"], ["value", "activos"], ["value", "bloqueados"], ["value", "conflictivos"], ["size", "12", 3, "sizeMd"], [1, "bg-white", "p-3", "rounded-4", "shadow-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3", "border-bottom", "pb-2"], [1, "text-secondary", "small", "text-uppercase", "fw-bold"], [1, "usuarios-scroll-container"], ["class", "user-card p-3 mb-3 rounded-4 cursor-pointer transition-all d-flex align-items-center justify-content-between", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "text-center py-5 text-muted", 4, "ngIf"], ["size", "12", "sizeMd", "6", 4, "ngIf"], [1, "user-card", "p-3", "mb-3", "rounded-4", "cursor-pointer", "transition-all", "d-flex", "align-items-center", "justify-content-between", 3, "click"], [1, "avatar-container"], ["alt", "Avatar", 3, "src"], [1, "fw-bold", "fs-6", "m-0", "text-dark"], ["class", "badge-alert", "title", "Tiene malas opiniones", 4, "ngIf"], [1, "d-flex", "align-items-center", "gap-2", "mt-1", "xsmall", "text-muted"], ["name", "star-outline", 1, "text-warning", "me-1"], [1, "d-flex", "align-items-center", "gap-1"], ["title", "Chat de soporte", 1, "btn-action-icon", "btn-chat", 3, "click"], ["name", "chatbubble-ellipses-outline"], [1, "btn-action-icon", 3, "click", "title"], [3, "name"], ["title", "Tiene malas opiniones", 1, "badge-alert"], ["name", "warning-outline"], [1, "text-center", "py-5", "text-muted"], ["name", "shield-alert-outline", 1, "display-5", "mb-2", "text-warning"], [1, "m-0"], ["size", "12", "sizeMd", "6"], [1, "bg-white", "p-4", "rounded-4", "shadow-sm", "border-highlight"], [1, "badge-id"], ["fill", "clear", "color", "medium", "size", "small", 3, "click"], ["name", "close-circle-outline", "slot", "icon-only"], [1, "text-center", "mb-4"], [1, "detail-avatar-container", "mx-auto", "mb-2"], ["alt", "Avatar grande", 3, "src"], [1, "fw-bold", "m-0", "text-dark"], [1, "badge-status", "mt-1"], [1, "user-info-box", "p-3", "rounded-3", "mb-3", "bg-light"], [1, "row", "g-2", "small"], [1, "col-6"], [1, "text-muted", "d-block"], ["name", "mail-outline", 1, "me-1"], [1, "text-dark"], ["name", "call-outline", 1, "me-1"], [1, "row", "g-2", "mb-4"], [1, "col-4"], [1, "metric-box", "text-center", "p-2", "rounded-3", "bg-light"], [1, "fw-bold", "fs-5", "text-dark"], [1, "text-muted", "d-block", "xsmall"], [1, "metric-box", "text-center", "p-2", "rounded-3"], [1, "fw-bold", "fs-5"], [1, "d-flex", "flex-column", "gap-2", "mt-3"], [1, "btn-action-main", "btn-chat-main", "w-100", 3, "click"], ["name", "chatbubble-ellipses-outline", 1, "me-2"], [1, "btn-action-main", "w-100", 3, "click"], [1, "me-2", 3, "name"]], template: function GestionUsuariosAdminPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar-admin");
      \u0275\u0275elementStart(1, "ion-content", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "ion-button", 4);
      \u0275\u0275listener("click", function GestionUsuariosAdminPage_Template_ion_button_click_5_listener() {
        return ctx.volverDashboard();
      });
      \u0275\u0275element(6, "ion-icon", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div")(8, "h2", 6);
      \u0275\u0275text(9, "Gesti\xF3n de Usuarios");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 7);
      \u0275\u0275text(11, "Supervisi\xF3n de perfiles, reputaci\xF3n, sanciones y soporte de GoGuay ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "span", 8);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 9)(15, "ion-row", 10)(16, "ion-col", 11)(17, "ion-item", 12);
      \u0275\u0275element(18, "ion-icon", 13);
      \u0275\u0275elementStart(19, "ion-input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function GestionUsuariosAdminPage_Template_ion_input_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.busquedaQuery, $event) || (ctx.busquedaQuery = $event);
        return $event;
      });
      \u0275\u0275listener("ionInput", function GestionUsuariosAdminPage_Template_ion_input_ionInput_19_listener() {
        return ctx.aplicarFiltros();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "ion-col", 15)(21, "div", 16);
      \u0275\u0275element(22, "ion-icon", 17);
      \u0275\u0275elementStart(23, "ion-select", 18);
      \u0275\u0275twoWayListener("ngModelChange", function GestionUsuariosAdminPage_Template_ion_select_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtroEstado, $event) || (ctx.filtroEstado = $event);
        return $event;
      });
      \u0275\u0275listener("ionChange", function GestionUsuariosAdminPage_Template_ion_select_ionChange_23_listener() {
        return ctx.aplicarFiltros();
      });
      \u0275\u0275elementStart(24, "ion-select-option", 19);
      \u0275\u0275text(25, "Todos los Usuarios");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "ion-select-option", 20);
      \u0275\u0275text(27, "Solo Activos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "ion-select-option", 21);
      \u0275\u0275text(29, "Solo Bloqueados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "ion-select-option", 22);
      \u0275\u0275text(31, "Con Malas Opiniones / Incidencias");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(32, "ion-row")(33, "ion-col", 23)(34, "div", 24)(35, "div", 25)(36, "strong", 26);
      \u0275\u0275text(37, "Directorio de Usuarios");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 27);
      \u0275\u0275template(39, GestionUsuariosAdminPage_div_39_Template, 25, 20, "div", 28)(40, GestionUsuariosAdminPage_div_40_Template, 4, 0, "div", 29);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(41, GestionUsuariosAdminPage_ion_col_41_Template, 54, 36, "ion-col", 30);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate1("", ctx.usuariosFiltrados.length, " Usuarios");
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.busquedaQuery);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filtroEstado);
      \u0275\u0275advance(10);
      \u0275\u0275property("sizeMd", ctx.usuarioSeleccionado ? 6 : 12);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.usuariosFiltrados);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.usuariosFiltrados.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.usuarioSeleccionado);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgControlStatus, NgModel, IonicModule, IonButton, IonCol, IonContent, IonIcon, IonInput, IonItem, IonRow, IonSelect, IonSelectOption, SelectValueAccessorDirective, TextValueAccessorDirective, NavbarAdmin], styles: ['@charset "UTF-8";\n\n\n\nion-content.admin-content[_ngcontent-%COMP%] {\n  --background: #E9EDD5 !important;\n}\n.admin-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.title-page[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  color: #2c2c2c;\n}\n.btn-back[_ngcontent-%COMP%] {\n  --border-radius: 50%;\n  width: 42px;\n  height: 42px;\n}\n.badge-total[_ngcontent-%COMP%] {\n  background: #F0D7B4;\n  color: #2c2c2c;\n  font-weight: 700;\n  font-size: 0.8rem;\n  padding: 6px 16px;\n  border-radius: 20px;\n}\n.custom-search-item[_ngcontent-%COMP%] {\n  --background: #f8f9fa;\n  --border-radius: 35px;\n  --inner-padding-end: 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 35px;\n}\n.custom-select[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #e2e8f0;\n  border-radius: 35px;\n  padding: 8px 16px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #2c2c2c;\n}\n.usuarios-scroll-container[_ngcontent-%COMP%] {\n  max-height: 520px;\n  overflow-y: auto;\n  padding-right: 4px;\n  padding-top: 4px;\n}\n.user-card[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1.5px solid #e2e8f0;\n  transition: all 0.25s ease;\n}\n.user-card[_ngcontent-%COMP%]:hover {\n  border-color: #b3b5e6;\n  background: #ffffff;\n  transform: translateY(-2px);\n  cursor: pointer;\n}\n.user-card.active[_ngcontent-%COMP%] {\n  border-color: #7c4dff !important;\n  background: #ffffff !important;\n  box-shadow: 0 4px 14px rgba(124, 77, 255, 0.15) !important;\n}\n.avatar-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 44px;\n  height: 44px;\n}\n.avatar-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.avatar-container[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  border: 2px solid #ffffff;\n}\n.avatar-container[_ngcontent-%COMP%]   .status-dot.dot-active[_ngcontent-%COMP%] {\n  background: #2e7d32;\n}\n.avatar-container[_ngcontent-%COMP%]   .status-dot.dot-blocked[_ngcontent-%COMP%] {\n  background: #c62828;\n}\n.badge-alert[_ngcontent-%COMP%] {\n  color: #d32f2f;\n  font-size: 1.1rem;\n}\n.btn-action-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  transition: all 0.2s ease;\n}\n.btn-action-icon.btn-chat[_ngcontent-%COMP%] {\n  background: #e8eaf6;\n  color: #3f51b5;\n}\n.btn-action-icon.btn-chat[_ngcontent-%COMP%]:hover {\n  background: #3f51b5;\n  color: #ffffff;\n}\n.btn-action-icon.btn-lock[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.btn-action-icon.btn-lock[_ngcontent-%COMP%]:hover {\n  background: #c62828;\n  color: #ffffff;\n}\n.btn-action-icon.btn-unlock[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.btn-action-icon.btn-unlock[_ngcontent-%COMP%]:hover {\n  background: #2e7d32;\n  color: #ffffff;\n}\n.detail-avatar-container[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 3px solid #b3b5e6;\n}\n.detail-avatar-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.badge-id[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  font-size: 0.75rem;\n  background: #e2e8f0;\n  color: #2c2c2c;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.badge-status[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 20px;\n  display: inline-block;\n}\n.badge-status.status-success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge-status.status-danger[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.btn-action-main[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-radius: 35px;\n  border: none;\n  font-weight: 700;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.25s ease;\n}\n.btn-action-main.btn-chat-main[_ngcontent-%COMP%] {\n  background: #b3b5e6;\n  color: #ffffff;\n  box-shadow: 0 4px 14px rgba(179, 181, 230, 0.4);\n}\n.btn-action-main.btn-chat-main[_ngcontent-%COMP%]:hover {\n  background: #9d9fe0;\n  transform: translateY(-2px);\n}\n.btn-action-main.btn-block-main[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.btn-action-main.btn-block-main[_ngcontent-%COMP%]:hover {\n  background: #c62828;\n  color: #ffffff;\n}\n.btn-action-main.btn-unblock-main[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.btn-action-main.btn-unblock-main[_ngcontent-%COMP%]:hover {\n  background: #2e7d32;\n  color: #ffffff;\n}\n.xsmall[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=gestion-usuarios-admin.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GestionUsuariosAdminPage, [{
    type: Component,
    args: [{ selector: "app-gestion-usuarios-admin", standalone: true, imports: [CommonModule, FormsModule, IonicModule, NavbarAdmin], template: `<app-navbar-admin></app-navbar-admin>

<ion-content [fullscreen]="true" class="ion-padding admin-content">
    <div class="admin-container">

        <!-- CABECERA -->
        <div class="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
            <div class="d-flex align-items-center gap-3">
                <ion-button fill="clear" color="dark" (click)="volverDashboard()" class="btn-back">
                    <ion-icon name="arrow-back-outline" slot="icon-only"></ion-icon>
                </ion-button>
                <div>
                    <h2 class="fw-bold m-0 title-page">Gesti\xF3n de Usuarios</h2>
                    <p class="text-muted small m-0">Supervisi\xF3n de perfiles, reputaci\xF3n, sanciones y soporte de GoGuay
                    </p>
                </div>
            </div>

            <span class="badge-total">{{ usuariosFiltrados.length }} Usuarios</span>
        </div>

        <!-- BARRA DE B\xDASQUEDA Y FILTROS -->
        <div class="bg-white p-3 rounded-4 shadow-sm mb-4">
            <ion-row class="align-items-center g-2">
                <ion-col size="12" size-md="7">
                    <ion-item lines="none" class="custom-search-item">
                        <ion-icon name="search-outline" slot="start" class="text-muted"></ion-icon>
                        <ion-input [(ngModel)]="busquedaQuery" (ionInput)="aplicarFiltros()"
                            placeholder="Buscar por nombre, email o ID..." clearInput="true">
                        </ion-input>
                    </ion-item>
                </ion-col>

                <ion-col size="12" size-md="5">
                    <div class="d-flex align-items-center gap-2">
                        <ion-icon name="filter-outline" class="text-muted fs-5"></ion-icon>
                        <ion-select [(ngModel)]="filtroEstado" (ionChange)="aplicarFiltros()" interface="popover"
                            class="custom-select w-100">
                            <ion-select-option value="todos">Todos los Usuarios</ion-select-option>
                            <ion-select-option value="activos">Solo Activos</ion-select-option>
                            <ion-select-option value="bloqueados">Solo Bloqueados</ion-select-option>
                            <ion-select-option value="conflictivos">Con Malas Opiniones /
                                Incidencias</ion-select-option>
                        </ion-select>
                    </div>
                </ion-col>
            </ion-row>
        </div>

        <!-- LISTADO Y VISTA DETALLADA -->
        <ion-row>
            <!-- LISTA DE USUARIOS -->
            <ion-col size="12" [sizeMd]="usuarioSeleccionado ? 6 : 12">
                <div class="bg-white p-3 rounded-4 shadow-sm">
                    <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                        <strong class="text-secondary small text-uppercase fw-bold">Directorio de Usuarios</strong>
                    </div>

                    <div class="usuarios-scroll-container">
                        <div *ngFor="let u of usuariosFiltrados"
                            class="user-card p-3 mb-3 rounded-4 cursor-pointer transition-all d-flex align-items-center justify-content-between"
                            [class.active]="usuarioSeleccionado?.id === u.id" (click)="verFichaUsuario(u)">

                            <div class="d-flex align-items-center gap-3">
                                <div class="avatar-container">
                                    <img [src]="u.fotoPerfil || avatarDefault" alt="Avatar" />
                                    <span
                                        [class]="u.ya_ha_sido_suspendido ? 'status-dot dot-blocked' : 'status-dot dot-active'"></span>
                                </div>

                                <div>
                                    <div class="d-flex align-items-center gap-2">
                                        <h4 class="fw-bold fs-6 m-0 text-dark">{{ u.nombre }} {{ u.apellidos }}</h4>
                                        <span *ngIf="u.malasOpinionesCount > 0" class="badge-alert"
                                            title="Tiene malas opiniones">
                                            <ion-icon name="warning-outline"></ion-icon>
                                        </span>
                                    </div>
                                    <p class="text-muted small m-0">{{ u.email }}</p>

                                    <div class="d-flex align-items-center gap-2 mt-1 xsmall text-muted">
                                        <span><ion-icon name="star-outline" class="text-warning me-1"></ion-icon>{{
                                            u.promedioValoraciones }} ({{ u.totalOpiniones }})</span>
                                        <span>\u2022</span>
                                        <span [class.text-danger]="u.incidenciasAbiertasCount > 0">
                                            {{ u.incidenciasAbiertasCount }} Incidencias
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <!-- ACCIONES R\xC1PIDAS -->
                            <div class="d-flex align-items-center gap-1">
                                <button class="btn-action-icon btn-chat"
                                    (click)="iniciarChatSoporte(u); $event.stopPropagation()" title="Chat de soporte">
                                    <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                                </button>

                                <button class="btn-action-icon" [class.btn-lock]="!u.ya_ha_sido_suspendido"
                                    [class.btn-unlock]="u.ya_ha_sido_suspendido"
                                    (click)="toggleBloqueoUsuario(u, $event)"
                                    [title]="u.ya_ha_sido_suspendido ? 'Desbloquear' : 'Bloquear'">
                                    <ion-icon
                                        [name]="u.ya_ha_sido_suspendido ? 'lock-open-outline' : 'lock-closed-outline'"></ion-icon>
                                </button>
                            </div>

                        </div>

                        <!-- Sin resultados -->
                        <div *ngIf="usuariosFiltrados.length === 0" class="text-center py-5 text-muted">
                            <ion-icon name="shield-alert-outline" class="display-5 mb-2 text-warning"></ion-icon>
                            <p class="m-0">No se encontraron usuarios coincidentes.</p>
                        </div>
                    </div>
                </div>
            </ion-col>

            <!-- FICHA DETALLADA DEL USUARIO -->
            <ion-col size="12" sizeMd="6" *ngIf="usuarioSeleccionado">
                <div class="bg-white p-4 rounded-4 shadow-sm border-highlight">

                    <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                        <span class="badge-id">ID-{{ usuarioSeleccionado.id }}</span>
                        <ion-button fill="clear" color="medium" size="small" (click)="cerrarFicha()">
                            <ion-icon name="close-circle-outline" slot="icon-only"></ion-icon>
                        </ion-button>
                    </div>

                    <!-- Perfil Central -->
                    <div class="text-center mb-4">
                        <div class="detail-avatar-container mx-auto mb-2">
                            <img [src]="usuarioSeleccionado.fotoPerfil || avatarDefault" alt="Avatar grande" />
                        </div>
                        <h3 class="fw-bold m-0 text-dark">{{ usuarioSeleccionado.nombre }} {{
                            usuarioSeleccionado.apellidos }}</h3>
                        <span class="badge-status mt-1"
                            [class.status-danger]="usuarioSeleccionado.ya_ha_sido_suspendido"
                            [class.status-success]="!usuarioSeleccionado.ya_ha_sido_suspendido">
                            {{ usuarioSeleccionado.ya_ha_sido_suspendido ? 'Cuenta Restringida / Bloqueada' : 'Cuenta Activa' }}
                        </span>
                    </div>

                    <!-- Datos de Contacto -->
                    <div class="user-info-box p-3 rounded-3 mb-3 bg-light">
                        <div class="row g-2 small">
                            <div class="col-6">
                                <span class="text-muted d-block"><ion-icon name="mail-outline"
                                        class="me-1"></ion-icon>Email:</span>
                                <strong class="text-dark">{{ usuarioSeleccionado.email }}</strong>
                            </div>
                            <div class="col-6">
                                <span class="text-muted d-block"><ion-icon name="call-outline"
                                        class="me-1"></ion-icon>Tel\xE9fono:</span>
                                <strong class="text-dark">{{ usuarioSeleccionado.telefono }}</strong>
                            </div>
                        </div>
                    </div>

                    <!-- M\xC9TRICAS DE REPUTACI\xD3N -->
                    <div class="row g-2 mb-4">
                        <div class="col-4">
                            <div class="metric-box text-center p-2 rounded-3 bg-light">
                                <span class="fw-bold fs-5 text-dark">{{ usuarioSeleccionado.promedioValoraciones }}
                                    \u2B50</span>
                                <small class="text-muted d-block xsmall">Nota Media</small>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="metric-box text-center p-2 rounded-3"
                                [class.bg-danger-subtle]="usuarioSeleccionado.malasOpinionesCount > 0"
                                [class.bg-light]="usuarioSeleccionado.malasOpinionesCount === 0">
                                <span class="fw-bold fs-5"
                                    [class.text-danger]="usuarioSeleccionado.malasOpinionesCount > 0"
                                    [class.text-dark]="usuarioSeleccionado.malasOpinionesCount === 0">
                                    {{ usuarioSeleccionado.malasOpinionesCount }}
                                </span>
                                <small class="text-muted d-block xsmall">Malas Opiniones</small>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="metric-box text-center p-2 rounded-3"
                                [class.bg-warning-subtle]="usuarioSeleccionado.incidenciasAbiertasCount > 0"
                                [class.bg-light]="usuarioSeleccionado.incidenciasAbiertasCount === 0">
                                <span class="fw-bold fs-5"
                                    [class.text-warning]="usuarioSeleccionado.incidenciasAbiertasCount > 0"
                                    [class.text-dark]="usuarioSeleccionado.incidenciasAbiertasCount === 0">
                                    {{ usuarioSeleccionado.incidenciasAbiertasCount }}
                                </span>
                                <small class="text-muted d-block xsmall">Incidencias</small>
                            </div>
                        </div>
                    </div>

                    <!-- BOTONES DE ACCI\xD3N DIRECTA -->
                    <div class="d-flex flex-column gap-2 mt-3">
                        <button class="btn-action-main btn-chat-main w-100"
                            (click)="iniciarChatSoporte(usuarioSeleccionado)">
                            <ion-icon name="chatbubble-ellipses-outline" class="me-2"></ion-icon>
                            Iniciar Chat de Soporte
                        </button>

                        <button class="btn-action-main w-100"
                            [class.btn-block-main]="!usuarioSeleccionado.ya_ha_sido_suspendido"
                            [class.btn-unblock-main]="usuarioSeleccionado.ya_ha_sido_suspendido"
                            (click)="toggleBloqueoUsuario(usuarioSeleccionado)">
                            <ion-icon
                                [name]="usuarioSeleccionado.ya_ha_sido_suspendido ? 'lock-open-outline' : 'lock-closed-outline'"
                                class="me-2"></ion-icon>
                            {{ usuarioSeleccionado.ya_ha_sido_suspendido ? 'Desbloquear Usuario' : 'Bloquear / Suspender Usuario' }}
                        </button>
                    </div>

                </div>
            </ion-col>
        </ion-row>

    </div>
</ion-content>`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/admin/gestion-usuarios-admin/gestion-usuarios-admin.page.scss */\nion-content.admin-content {\n  --background: #E9EDD5 !important;\n}\n.admin-container {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.title-page {\n  font-size: 1.35rem;\n  color: #2c2c2c;\n}\n.btn-back {\n  --border-radius: 50%;\n  width: 42px;\n  height: 42px;\n}\n.badge-total {\n  background: #F0D7B4;\n  color: #2c2c2c;\n  font-weight: 700;\n  font-size: 0.8rem;\n  padding: 6px 16px;\n  border-radius: 20px;\n}\n.custom-search-item {\n  --background: #f8f9fa;\n  --border-radius: 35px;\n  --inner-padding-end: 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 35px;\n}\n.custom-select {\n  background: #f8f9fa;\n  border: 1px solid #e2e8f0;\n  border-radius: 35px;\n  padding: 8px 16px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #2c2c2c;\n}\n.usuarios-scroll-container {\n  max-height: 520px;\n  overflow-y: auto;\n  padding-right: 4px;\n  padding-top: 4px;\n}\n.user-card {\n  background: #f8f9fa;\n  border: 1.5px solid #e2e8f0;\n  transition: all 0.25s ease;\n}\n.user-card:hover {\n  border-color: #b3b5e6;\n  background: #ffffff;\n  transform: translateY(-2px);\n  cursor: pointer;\n}\n.user-card.active {\n  border-color: #7c4dff !important;\n  background: #ffffff !important;\n  box-shadow: 0 4px 14px rgba(124, 77, 255, 0.15) !important;\n}\n.avatar-container {\n  position: relative;\n  width: 44px;\n  height: 44px;\n}\n.avatar-container img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.avatar-container .status-dot {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  border: 2px solid #ffffff;\n}\n.avatar-container .status-dot.dot-active {\n  background: #2e7d32;\n}\n.avatar-container .status-dot.dot-blocked {\n  background: #c62828;\n}\n.badge-alert {\n  color: #d32f2f;\n  font-size: 1.1rem;\n}\n.btn-action-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  transition: all 0.2s ease;\n}\n.btn-action-icon.btn-chat {\n  background: #e8eaf6;\n  color: #3f51b5;\n}\n.btn-action-icon.btn-chat:hover {\n  background: #3f51b5;\n  color: #ffffff;\n}\n.btn-action-icon.btn-lock {\n  background: #ffebee;\n  color: #c62828;\n}\n.btn-action-icon.btn-lock:hover {\n  background: #c62828;\n  color: #ffffff;\n}\n.btn-action-icon.btn-unlock {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.btn-action-icon.btn-unlock:hover {\n  background: #2e7d32;\n  color: #ffffff;\n}\n.detail-avatar-container {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 3px solid #b3b5e6;\n}\n.detail-avatar-container img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.badge-id {\n  font-family: monospace;\n  font-weight: 700;\n  font-size: 0.75rem;\n  background: #e2e8f0;\n  color: #2c2c2c;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.badge-status {\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 20px;\n  display: inline-block;\n}\n.badge-status.status-success {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge-status.status-danger {\n  background: #ffebee;\n  color: #c62828;\n}\n.btn-action-main {\n  padding: 12px;\n  border-radius: 35px;\n  border: none;\n  font-weight: 700;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.25s ease;\n}\n.btn-action-main.btn-chat-main {\n  background: #b3b5e6;\n  color: #ffffff;\n  box-shadow: 0 4px 14px rgba(179, 181, 230, 0.4);\n}\n.btn-action-main.btn-chat-main:hover {\n  background: #9d9fe0;\n  transform: translateY(-2px);\n}\n.btn-action-main.btn-block-main {\n  background: #ffebee;\n  color: #c62828;\n}\n.btn-action-main.btn-block-main:hover {\n  background: #c62828;\n  color: #ffffff;\n}\n.btn-action-main.btn-unblock-main {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.btn-action-main.btn-unblock-main:hover {\n  background: #2e7d32;\n  color: #ffffff;\n}\n.xsmall {\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=gestion-usuarios-admin.page.css.map */\n'] }]
  }], () => [{ type: NavController }, { type: UserServicesService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GestionUsuariosAdminPage, { className: "GestionUsuariosAdminPage", filePath: "src/app/pages/admin/gestion-usuarios-admin/gestion-usuarios-admin.page.ts", lineNumber: 49 });
})();
export {
  GestionUsuariosAdminPage
};
//# sourceMappingURL=gestion-usuarios-admin.page-FWHZ4T75.js.map
