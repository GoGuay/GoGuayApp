import {
  NavbarAdmin
} from "./chunk-YZ747JFO.js";
import {
  IncidenciasService
} from "./chunk-TZ44Z4IZ.js";
import {
  addIcons,
  alertCircleOutline,
  arrowBackOutline,
  chatbubbleEllipsesOutline,
  checkmarkCircleOutline,
  closeCircleOutline,
  filterOutline,
  personOutline,
  searchOutline,
  timeOutline,
  warningOutline
} from "./chunk-TDPVVR7R.js";
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
  IonSpinner,
  IonicModule,
  SelectValueAccessorDirective,
  TextValueAccessorDirective
} from "./chunk-6IWXE3BU.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NavController,
  NgControlStatus,
  NgModel
} from "./chunk-TU2LK3TM.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf,
  TitleCasePipe
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
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

// src/app/pages/admin/incidencias-admin/incidencias-admin.page.ts
function IncidenciasAdminPage_ion_spinner_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-spinner", 33);
  }
}
function IncidenciasAdminPage_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("click", function IncidenciasAdminPage_div_43_Template_div_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.verDetalleIncidencia(item_r2));
    });
    \u0275\u0275elementStart(1, "div", 35)(2, "span", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8)(5, "span", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 38);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "h4", 39);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 40);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 41)(15, "span");
    \u0275\u0275element(16, "ion-icon", 42);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275element(19, "ion-icon", 43);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", (ctx_r2.incidenciaSeleccionada == null ? null : ctx_r2.incidenciaSeleccionada.id) === item_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", item_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.subcategoria);
    \u0275\u0275advance();
    \u0275\u0275classMap("estado-" + item_r2.estado.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 11, item_r2.estado.replace("_", " ")), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.resumen);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.descripcion);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Usuario ID: ", item_r2.usuario_remitente_id, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(21, 13, item_r2.created_at, "dd/MM/yyyy HH:mm"), " ");
  }
}
function IncidenciasAdminPage_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "ion-icon", 45);
    \u0275\u0275elementStart(2, "p", 46);
    \u0275\u0275text(3, "No hay incidencias que coincidan con los filtros.");
    \u0275\u0275elementEnd()();
  }
}
function IncidenciasAdminPage_ion_col_45_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "span", 56);
    \u0275\u0275text(2, "Usuario Implicado ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("#", ctx_r2.incidenciaSeleccionada.usuario_reportado_id);
  }
}
function IncidenciasAdminPage_ion_col_45_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "label", 74);
    \u0275\u0275text(2, "Motivo de cancelaci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 75);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatearMotivo(ctx_r2.incidenciaSeleccionada.motivo_cancelacion), " ");
  }
}
function IncidenciasAdminPage_ion_col_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-col", 47)(1, "div", 48)(2, "div", 26)(3, "div")(4, "span", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ion-button", 50);
    \u0275\u0275listener("click", function IncidenciasAdminPage_ion_col_45_Template_ion_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cerrarDetalle());
    });
    \u0275\u0275element(9, "ion-icon", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "h3", 52);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 53)(13, "div", 54)(14, "div", 55)(15, "span", 56);
    \u0275\u0275text(16, "Usuario Remitente ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "strong", 57);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, IncidenciasAdminPage_ion_col_45_div_19_Template, 5, 1, "div", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 59)(21, "label", 60);
    \u0275\u0275text(22, "Descripci\xF3n de los hechos:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 61);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, IncidenciasAdminPage_ion_col_45_div_25_Template, 5, 1, "div", 62);
    \u0275\u0275elementStart(26, "div", 59)(27, "label", 63);
    \u0275\u0275text(28, "Cambiar Estado de la Incidencia:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 64)(30, "button", 65);
    \u0275\u0275listener("click", function IncidenciasAdminPage_ion_col_45_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cambiarEstado("INICIADA"));
    });
    \u0275\u0275text(31, " Iniciada ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 66);
    \u0275\u0275listener("click", function IncidenciasAdminPage_ion_col_45_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cambiarEstado("EN_REVISION"));
    });
    \u0275\u0275text(33, " En Revisi\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 67);
    \u0275\u0275listener("click", function IncidenciasAdminPage_ion_col_45_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cambiarEstado("FINALIZADA"));
    });
    \u0275\u0275text(35, " Finalizada ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 68);
    \u0275\u0275listener("click", function IncidenciasAdminPage_ion_col_45_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cambiarEstado("CANCELADA"));
    });
    \u0275\u0275text(37, " Cancelada ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 69)(39, "label", 60);
    \u0275\u0275text(40, "Respuesta para el usuario / Notas de resoluci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "textarea", 70);
    \u0275\u0275twoWayListener("ngModelChange", function IncidenciasAdminPage_ion_col_45_Template_textarea_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.respuestaTexto, $event) || (ctx_r2.respuestaTexto = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(42, "                        ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "button", 71);
    \u0275\u0275listener("click", function IncidenciasAdminPage_ion_col_45_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.guardarRespuesta());
    });
    \u0275\u0275element(44, "ion-icon", 72);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("#", ctx_r2.incidenciaSeleccionada.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.incidenciaSeleccionada.categoria, " / ", ctx_r2.incidenciaSeleccionada.subcategoria);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.incidenciaSeleccionada.resumen);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("#", ctx_r2.incidenciaSeleccionada.usuario_remitente_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.incidenciaSeleccionada.usuario_reportado_id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.incidenciaSeleccionada.descripcion, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.incidenciaSeleccionada.motivo_cancelacion);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r2.incidenciaSeleccionada.estado === "INICIADA");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.incidenciaSeleccionada.estado === "EN_REVISION");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.incidenciaSeleccionada.estado === "FINALIZADA");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.incidenciaSeleccionada.estado === "CANCELADA");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.respuestaTexto);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.guardando);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.guardando ? "Guardando..." : "Guardar Respuesta y Actualizar", " ");
  }
}
var IncidenciasAdminPage = class _IncidenciasAdminPage {
  navCtrl;
  incidenciasService;
  filtroEstado = "todas";
  busquedaQuery = "";
  incidenciaSeleccionada = null;
  respuestaTexto = "";
  cargando = true;
  guardando = false;
  listaIncidencias = [];
  incidenciasFiltradas = [];
  constructor(navCtrl, incidenciasService) {
    this.navCtrl = navCtrl;
    this.incidenciasService = incidenciasService;
    addIcons({
      warningOutline,
      searchOutline,
      filterOutline,
      chatbubbleEllipsesOutline,
      checkmarkCircleOutline,
      closeCircleOutline,
      timeOutline,
      personOutline,
      arrowBackOutline,
      alertCircleOutline
    });
  }
  ngOnInit() {
    this.cargarTodasLasIncidencias();
  }
  cargarTodasLasIncidencias() {
    this.cargando = true;
    this.incidenciasService.obtenerTodasIncidenciasAdmin().subscribe({
      next: (data) => {
        this.listaIncidencias = data || [];
        this.aplicarFiltros();
        this.cargando = false;
      },
      error: (err) => {
        console.error("Error al obtener incidencias globales:", err);
        this.cargando = false;
      }
    });
  }
  aplicarFiltros() {
    this.incidenciasFiltradas = this.listaIncidencias.filter((item) => {
      var _a, _b;
      const coincideEstado = this.filtroEstado === "todas" || item.estado.toLowerCase() === this.filtroEstado.toLowerCase();
      const q = this.busquedaQuery.toLowerCase().trim();
      const coincideBusqueda = !q || item.id.toString().includes(q) || item.resumen.toLowerCase().includes(q) || item.descripcion.toLowerCase().includes(q) || ((_a = item.usuario_remitente) == null ? void 0 : _a.nombre) && item.usuario_remitente.nombre.toLowerCase().includes(q) || ((_b = item.usuario_remitente) == null ? void 0 : _b.email) && item.usuario_remitente.email.toLowerCase().includes(q);
      return coincideEstado && coincideBusqueda;
    });
  }
  verDetalleIncidencia(item) {
    this.incidenciaSeleccionada = item;
    this.respuestaTexto = item.resolucion_notas || "";
  }
  cerrarDetalle() {
    this.incidenciaSeleccionada = null;
    this.respuestaTexto = "";
  }
  cambiarEstado(nuevoEstado) {
    if (!this.incidenciaSeleccionada)
      return;
    this.guardando = true;
    this.incidenciasService.cambiarEstadoIncidencia(this.incidenciaSeleccionada.id, nuevoEstado, void 0, this.respuestaTexto.trim() || void 0).subscribe({
      next: (res) => {
        if (this.incidenciaSeleccionada) {
          this.incidenciaSeleccionada.estado = nuevoEstado;
        }
        this.guardando = false;
        this.aplicarFiltros();
      },
      error: (err) => {
        console.error("Error cambiando el estado:", err);
        this.guardando = false;
      }
    });
  }
  guardarRespuesta() {
    if (!this.incidenciaSeleccionada)
      return;
    this.guardando = true;
    const estadoActual = this.incidenciaSeleccionada.estado;
    const nuevoEstado = estadoActual === "INICIADA" ? "EN_REVISION" : estadoActual;
    this.incidenciasService.cambiarEstadoIncidencia(this.incidenciaSeleccionada.id, nuevoEstado, void 0, this.respuestaTexto.trim()).subscribe({
      next: (res) => {
        if (this.incidenciaSeleccionada) {
          this.incidenciaSeleccionada.resolucion_notas = this.respuestaTexto.trim();
          this.incidenciaSeleccionada.estado = nuevoEstado;
        }
        this.guardando = false;
        this.aplicarFiltros();
      },
      error: (err) => {
        console.error("Error guardando la respuesta:", err);
        this.guardando = false;
      }
    });
  }
  formatearMotivo(motivo) {
    if (!motivo)
      return "";
    if (motivo === "POR_USUARIO")
      return "Por el usuario";
    return motivo.replace("_", " ");
  }
  volverDashboard() {
    this.navCtrl.navigateBack(["/admin-app"]);
  }
  static \u0275fac = function IncidenciasAdminPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IncidenciasAdminPage)(\u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(IncidenciasService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IncidenciasAdminPage, selectors: [["app-incidencias-admin"]], decls: 46, vars: 9, consts: [[1, "ion-padding", "admin-content", 3, "fullscreen"], [1, "admin-container"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-4", "flex-wrap", "gap-2"], [1, "d-flex", "align-items-center", "gap-3"], ["fill", "clear", "color", "dark", 1, "btn-back", 3, "click"], ["name", "arrow-back-outline", "slot", "icon-only"], [1, "fw-bold", "m-0", "title-page"], [1, "text-muted", "small", "m-0"], [1, "d-flex", "align-items-center", "gap-2"], [1, "badge-total"], [1, "bg-white", "p-3", "rounded-4", "shadow-sm", "mb-4"], [1, "align-items-center", "g-2"], ["size", "12", "size-md", "7"], ["lines", "none", 1, "custom-search-item"], ["name", "search-outline", "slot", "start", 1, "text-muted"], ["placeholder", "Buscar por ID, resumen o descripci\xF3n...", "clearInput", "true", 3, "ngModelChange", "ionInput", "ngModel"], ["size", "12", "size-md", "5"], ["name", "filter-outline", 1, "text-muted", "fs-5"], ["interface", "popover", 1, "custom-select", "w-100", 3, "ngModelChange", "ionChange", "ngModel"], ["value", "todas"], ["value", "iniciada"], ["value", "en_revision"], ["value", "finalizada"], ["value", "cancelada"], ["size", "12", 3, "sizeMd"], [1, "bg-white", "p-3", "rounded-4", "shadow-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3", "border-bottom", "pb-2"], [1, "text-secondary", "small", "text-uppercase", "fw-bold"], ["name", "crescent", "color", "primary", 4, "ngIf"], [1, "incidencias-scroll-container"], ["class", "incidencia-card p-3 mb-3 rounded-4 cursor-pointer transition-all", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "text-center py-5 text-muted", 4, "ngIf"], ["size", "12", "sizeMd", "6", 4, "ngIf"], ["name", "crescent", "color", "primary"], [1, "incidencia-card", "p-3", "mb-3", "rounded-4", "cursor-pointer", "transition-all", 3, "click"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "badge-id"], [1, "badge-categoria"], [1, "badge-estado"], [1, "fw-bold", "fs-6", "mb-1", "text-dark"], [1, "text-muted", "small", "mb-2", "line-clamp-2"], [1, "d-flex", "align-items-center", "justify-content-between", "text-muted", "xsmall", "pt-2", "border-top"], ["name", "person-outline", 1, "me-1"], ["name", "time-outline", 1, "me-1"], [1, "text-center", "py-5", "text-muted"], ["name", "alert-circle-outline", 1, "display-5", "mb-2", "text-warning"], [1, "m-0"], ["size", "12", "sizeMd", "6"], [1, "bg-white", "p-4", "rounded-4", "shadow-sm", "border-start-highlight"], [1, "text-muted", "small", "ms-2"], ["fill", "clear", "color", "medium", "size", "small", 3, "click"], ["name", "close-circle-outline", "slot", "icon-only"], [1, "fw-bold", "mb-3", "text-dark"], [1, "user-info-box", "p-3", "rounded-3", "mb-3", "bg-light"], [1, "row", "g-2", "small"], [1, "col-6"], [1, "text-muted", "d-block"], [1, "text-dark"], ["class", "col-6", 4, "ngIf"], [1, "mb-4"], [1, "fw-bold", "small", "text-secondary", "mb-1"], [1, "p-3", "rounded-3", "bg-light", "text-dark", "small", "m-0", "border", 2, "line-height", "1.5"], ["class", "mb-4", 4, "ngIf"], [1, "fw-bold", "small", "text-secondary", "mb-2", "d-block"], [1, "d-flex", "flex-wrap", "gap-2"], [1, "btn-estado", "btn-pend", 3, "click"], [1, "btn-estado", "btn-rev", 3, "click"], [1, "btn-estado", "btn-res", 3, "click"], [1, "btn-estado", "btn-des", 3, "click"], [1, "mb-3"], ["rows", "4", "placeholder", "Escribe la soluci\xF3n o resoluci\xF3n para esta incidencia...", 1, "form-control", "custom-textarea", 3, "ngModelChange", "ngModel"], [1, "btn-save-incidencia", "w-100", "mt-2", 3, "click", "disabled"], ["name", "checkmark-circle-outline", 1, "me-2"], [1, "text-danger"], [1, "fw-bold", "small", "text-danger", "mb-1"], [1, "p-2", "rounded-3", "bg-danger-subtle", "text-danger", "small", "m-0", "border", "border-danger"]], template: function IncidenciasAdminPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar-admin");
      \u0275\u0275elementStart(1, "ion-content", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "ion-button", 4);
      \u0275\u0275listener("click", function IncidenciasAdminPage_Template_ion_button_click_5_listener() {
        return ctx.volverDashboard();
      });
      \u0275\u0275element(6, "ion-icon", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div")(8, "h2", 6);
      \u0275\u0275text(9, "Centro de Incidencias");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 7);
      \u0275\u0275text(11, "Gesti\xF3n de reportes y soporte t\xE9cnico de GoGuay");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 8)(13, "span", 9);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 10)(16, "ion-row", 11)(17, "ion-col", 12)(18, "ion-item", 13);
      \u0275\u0275element(19, "ion-icon", 14);
      \u0275\u0275elementStart(20, "ion-input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function IncidenciasAdminPage_Template_ion_input_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.busquedaQuery, $event) || (ctx.busquedaQuery = $event);
        return $event;
      });
      \u0275\u0275listener("ionInput", function IncidenciasAdminPage_Template_ion_input_ionInput_20_listener() {
        return ctx.aplicarFiltros();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "ion-col", 16)(22, "div", 8);
      \u0275\u0275element(23, "ion-icon", 17);
      \u0275\u0275elementStart(24, "ion-select", 18);
      \u0275\u0275twoWayListener("ngModelChange", function IncidenciasAdminPage_Template_ion_select_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtroEstado, $event) || (ctx.filtroEstado = $event);
        return $event;
      });
      \u0275\u0275listener("ionChange", function IncidenciasAdminPage_Template_ion_select_ionChange_24_listener() {
        return ctx.aplicarFiltros();
      });
      \u0275\u0275elementStart(25, "ion-select-option", 19);
      \u0275\u0275text(26, "Todas las Incidencias");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "ion-select-option", 20);
      \u0275\u0275text(28, "Abiertas (Iniciadas)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "ion-select-option", 21);
      \u0275\u0275text(30, "En Revisi\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "ion-select-option", 22);
      \u0275\u0275text(32, "Finalizadas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "ion-select-option", 23);
      \u0275\u0275text(34, "Canceladas");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(35, "ion-row")(36, "ion-col", 24)(37, "div", 25)(38, "div", 26)(39, "strong", 27);
      \u0275\u0275text(40, "Listado de Reportes");
      \u0275\u0275elementEnd();
      \u0275\u0275template(41, IncidenciasAdminPage_ion_spinner_41_Template, 1, 0, "ion-spinner", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 29);
      \u0275\u0275template(43, IncidenciasAdminPage_div_43_Template, 22, 16, "div", 30)(44, IncidenciasAdminPage_div_44_Template, 4, 0, "div", 31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(45, IncidenciasAdminPage_ion_col_45_Template, 46, 19, "ion-col", 32);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate1("", ctx.incidenciasFiltradas.length, " Incidencias");
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.busquedaQuery);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filtroEstado);
      \u0275\u0275advance(12);
      \u0275\u0275property("sizeMd", ctx.incidenciaSeleccionada ? 6 : 12);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.cargando);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.incidenciasFiltradas);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.cargando && ctx.incidenciasFiltradas.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.incidenciaSeleccionada);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, IonicModule, IonButton, IonCol, IonContent, IonIcon, IonInput, IonItem, IonRow, IonSelect, IonSelectOption, IonSpinner, SelectValueAccessorDirective, TextValueAccessorDirective, NavbarAdmin, TitleCasePipe, DatePipe], styles: ["\n\nion-content.admin-content[_ngcontent-%COMP%] {\n  --background: #E9EDD5 !important;\n}\n.admin-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.title-page[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  color: #2c2c2c;\n}\n.btn-back[_ngcontent-%COMP%] {\n  --border-radius: 50%;\n  width: 42px;\n  height: 42px;\n}\n.badge-total[_ngcontent-%COMP%] {\n  background: #F0D7B4;\n  color: #2c2c2c;\n  font-weight: 700;\n  font-size: 0.8rem;\n  padding: 6px 16px;\n  border-radius: 20px;\n}\n.custom-search-item[_ngcontent-%COMP%] {\n  --background: #f8f9fa;\n  --border-radius: 35px;\n  --inner-padding-end: 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 35px;\n}\n.custom-select[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #e2e8f0;\n  border-radius: 35px;\n  padding: 8px 16px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #2c2c2c;\n}\n.incidencias-scroll-container[_ngcontent-%COMP%] {\n  max-height: 520px;\n  overflow-y: auto;\n  padding-right: 4px;\n  padding-top: 4px;\n}\n.incidencia-card[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1.5px solid #e2e8f0;\n  transition: all 0.25s ease;\n}\n.incidencia-card[_ngcontent-%COMP%]:hover {\n  border-color: #b3b5e6;\n  background: #ffffff;\n  transform: translateY(-2px);\n  cursor: pointer;\n}\n.incidencia-card.active[_ngcontent-%COMP%] {\n  border-color: #7c4dff !important;\n  background: #ffffff !important;\n  box-shadow: 0 4px 14px rgba(124, 77, 255, 0.15) !important;\n}\n.badge-id[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  font-size: 0.75rem;\n  background: #e2e8f0;\n  color: #2c2c2c;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.badge-prioridad[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 800;\n  padding: 2px 8px;\n  border-radius: 12px;\n}\n.badge-prioridad.prio-alta[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.badge-prioridad.prio-media[_ngcontent-%COMP%] {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.badge-prioridad.prio-baja[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge-estado[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 15px;\n}\n.badge-estado.estado-pendiente[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #ef6c00;\n}\n.badge-estado.estado-en_revision[_ngcontent-%COMP%] {\n  background: #e8eaf6;\n  color: #283593;\n}\n.badge-estado.estado-resuelta[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge-estado.estado-desestimada[_ngcontent-%COMP%] {\n  background: #efebe9;\n  color: #4e342e;\n}\n.btn-estado[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  background: #ffffff;\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-estado.active[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  border-color: transparent !important;\n}\n.btn-estado.btn-pend.active[_ngcontent-%COMP%] {\n  background: #ef6c00;\n}\n.btn-estado.btn-rev.active[_ngcontent-%COMP%] {\n  background: #3f51b5;\n}\n.btn-estado.btn-res.active[_ngcontent-%COMP%] {\n  background: #2e7d32;\n}\n.btn-estado.btn-des.active[_ngcontent-%COMP%] {\n  background: #616161;\n}\n.custom-textarea[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  border: 1.5px solid #e2e8f0;\n  padding: 12px;\n  font-size: 0.9rem;\n}\n.custom-textarea[_ngcontent-%COMP%]:focus {\n  border-color: #b3b5e6;\n  box-shadow: 0 0 0 3px rgba(179, 181, 230, 0.25);\n  outline: none;\n}\n.btn-save-incidencia[_ngcontent-%COMP%] {\n  background: #b3b5e6;\n  color: #ffffff;\n  font-weight: 700;\n  padding: 12px;\n  border-radius: 35px;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 6px 18px rgba(179, 181, 230, 0.4);\n  transition: all 0.25s ease;\n}\n.btn-save-incidencia[_ngcontent-%COMP%]:hover {\n  background: #9d9fe0;\n  transform: translateY(-2px);\n}\n.xsmall[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n}\n.line-clamp-2[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n/*# sourceMappingURL=incidencias-admin.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IncidenciasAdminPage, [{
    type: Component,
    args: [{ selector: "app-incidencias-admin", standalone: true, imports: [CommonModule, FormsModule, IonicModule, NavbarAdmin], template: `<app-navbar-admin></app-navbar-admin>

<ion-content [fullscreen]="true" class="ion-padding admin-content">
    <div class="admin-container">

        <!-- CABECERA DE LA P\xC1GINA -->
        <div class="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
            <div class="d-flex align-items-center gap-3">
                <ion-button fill="clear" color="dark" (click)="volverDashboard()" class="btn-back">
                    <ion-icon name="arrow-back-outline" slot="icon-only"></ion-icon>
                </ion-button>
                <div>
                    <h2 class="fw-bold m-0 title-page">Centro de Incidencias</h2>
                    <p class="text-muted small m-0">Gesti\xF3n de reportes y soporte t\xE9cnico de GoGuay</p>
                </div>
            </div>

            <div class="d-flex align-items-center gap-2">
                <span class="badge-total">{{ incidenciasFiltradas.length }} Incidencias</span>
            </div>
        </div>

        <!-- BUSCADOR Y FILTROS -->
        <div class="bg-white p-3 rounded-4 shadow-sm mb-4">
            <ion-row class="align-items-center g-2">
                <!-- Buscador -->
                <ion-col size="12" size-md="7">
                    <ion-item lines="none" class="custom-search-item">
                        <ion-icon name="search-outline" slot="start" class="text-muted"></ion-icon>
                        <ion-input [(ngModel)]="busquedaQuery" (ionInput)="aplicarFiltros()"
                            placeholder="Buscar por ID, resumen o descripci\xF3n..." clearInput="true">
                        </ion-input>
                    </ion-item>
                </ion-col>

                <!-- Filtro por Estado -->
                <ion-col size="12" size-md="5">
                    <div class="d-flex align-items-center gap-2">
                        <ion-icon name="filter-outline" class="text-muted fs-5"></ion-icon>
                        <ion-select [(ngModel)]="filtroEstado" (ionChange)="aplicarFiltros()" interface="popover"
                            class="custom-select w-100">
                            <ion-select-option value="todas">Todas las Incidencias</ion-select-option>
                            <ion-select-option value="iniciada">Abiertas (Iniciadas)</ion-select-option>
                            <ion-select-option value="en_revision">En Revisi\xF3n</ion-select-option>
                            <ion-select-option value="finalizada">Finalizadas</ion-select-option>
                            <ion-select-option value="cancelada">Canceladas</ion-select-option>
                        </ion-select>
                    </div>
                </ion-col>
            </ion-row>
        </div>

        <!-- LISTADO Y PANEL DETALLE -->
        <ion-row>
            <!-- LISTA DE INCIDENCIAS -->
            <ion-col size="12" [sizeMd]="incidenciaSeleccionada ? 6 : 12">
                <div class="bg-white p-3 rounded-4 shadow-sm">
                    <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                        <strong class="text-secondary small text-uppercase fw-bold">Listado de Reportes</strong>
                        <ion-spinner *ngIf="cargando" name="crescent" color="primary"></ion-spinner>
                    </div>

                    <div class="incidencias-scroll-container">
                        <div *ngFor="let item of incidenciasFiltradas"
                            class="incidencia-card p-3 mb-3 rounded-4 cursor-pointer transition-all"
                            [class.active]="incidenciaSeleccionada?.id === item.id"
                            (click)="verDetalleIncidencia(item)">

                            <div class="d-flex align-items-center justify-content-between mb-2">
                                <span class="badge-id">#{{ item.id }}</span>
                                <div class="d-flex align-items-center gap-2">
                                    <span class="badge-categoria">{{ item.subcategoria }}</span>
                                    <span class="badge-estado" [class]="'estado-' + item.estado.toLowerCase()">
                                        {{ item.estado.replace('_', ' ') | titlecase }}
                                    </span>
                                </div>
                            </div>

                            <h4 class="fw-bold fs-6 mb-1 text-dark">{{ item.resumen }}</h4>
                            <p class="text-muted small mb-2 line-clamp-2">{{ item.descripcion }}</p>

                            <div class="d-flex align-items-center justify-content-between text-muted xsmall pt-2 border-top">
                                <span>
                                    <ion-icon name="person-outline" class="me-1"></ion-icon>
                                    Usuario ID: {{ item.usuario_remitente_id }}
                                </span>
                                <span>
                                    <ion-icon name="time-outline" class="me-1"></ion-icon>
                                    {{ item.created_at | date:'dd/MM/yyyy HH:mm' }}
                                </span>
                            </div>
                        </div>

                        <!-- Sin Resultados -->
                        <div *ngIf="!cargando && incidenciasFiltradas.length === 0" class="text-center py-5 text-muted">
                            <ion-icon name="alert-circle-outline" class="display-5 mb-2 text-warning"></ion-icon>
                            <p class="m-0">No hay incidencias que coincidan con los filtros.</p>
                        </div>
                    </div>
                </div>
            </ion-col>

            <!-- DETALLE Y GESTI\xD3N -->
            <ion-col size="12" sizeMd="6" *ngIf="incidenciaSeleccionada">
                <div class="bg-white p-4 rounded-4 shadow-sm border-start-highlight">
                    <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                        <div>
                            <span class="badge-id">#{{ incidenciaSeleccionada.id }}</span>
                            <span class="text-muted small ms-2">{{ incidenciaSeleccionada.categoria }} / {{ incidenciaSeleccionada.subcategoria }}</span>
                        </div>
                        <ion-button fill="clear" color="medium" size="small" (click)="cerrarDetalle()">
                            <ion-icon name="close-circle-outline" slot="icon-only"></ion-icon>
                        </ion-button>
                    </div>

                    <h3 class="fw-bold mb-3 text-dark">{{ incidenciaSeleccionada.resumen }}</h3>

                    <!-- Informaci\xF3n del Usuario -->
                    <div class="user-info-box p-3 rounded-3 mb-3 bg-light">
                        <div class="row g-2 small">
                            <div class="col-6">
                                <span class="text-muted d-block">Usuario Remitente ID:</span>
                                <strong class="text-dark">#{{ incidenciaSeleccionada.usuario_remitente_id }}</strong>
                            </div>
                            <div class="col-6" *ngIf="incidenciaSeleccionada.usuario_reportado_id">
                                <span class="text-muted d-block">Usuario Implicado ID:</span>
                                <strong class="text-danger">#{{ incidenciaSeleccionada.usuario_reportado_id }}</strong>
                            </div>
                        </div>
                    </div>

                    <!-- Descripci\xF3n completa -->
                    <div class="mb-4">
                        <label class="fw-bold small text-secondary mb-1">Descripci\xF3n de los hechos:</label>
                        <p class="p-3 rounded-3 bg-light text-dark small m-0 border" style="line-height: 1.5;">
                            {{ incidenciaSeleccionada.descripcion }}
                        </p>
                    </div>

                    <div *ngIf="incidenciaSeleccionada.motivo_cancelacion" class="mb-4">
                        <label class="fw-bold small text-danger mb-1">Motivo de cancelaci\xF3n:</label>
                        <p class="p-2 rounded-3 bg-danger-subtle text-danger small m-0 border border-danger">
                            {{ formatearMotivo(incidenciaSeleccionada.motivo_cancelacion) }}
                        </p>
                    </div>

                    <!-- Cambiar Estado -->
                    <div class="mb-4">
                        <label class="fw-bold small text-secondary mb-2 d-block">Cambiar Estado de la Incidencia:</label>
                        <div class="d-flex flex-wrap gap-2">
                            <button class="btn-estado btn-pend"
                                [class.active]="incidenciaSeleccionada.estado === 'INICIADA'"
                                (click)="cambiarEstado('INICIADA')">
                                Iniciada
                            </button>
                            <button class="btn-estado btn-rev"
                                [class.active]="incidenciaSeleccionada.estado === 'EN_REVISION'"
                                (click)="cambiarEstado('EN_REVISION')">
                                En Revisi\xF3n
                            </button>
                            <button class="btn-estado btn-res"
                                [class.active]="incidenciaSeleccionada.estado === 'FINALIZADA'"
                                (click)="cambiarEstado('FINALIZADA')">
                                Finalizada
                            </button>
                            <button class="btn-estado btn-des"
                                [class.active]="incidenciaSeleccionada.estado === 'CANCELADA'"
                                (click)="cambiarEstado('CANCELADA')">
                                Cancelada
                            </button>
                        </div>
                    </div>

                    <!-- Respuesta o Notas de Soporte -->
                    <div class="mb-3">
                        <label class="fw-bold small text-secondary mb-1">Respuesta para el usuario / Notas de resoluci\xF3n:</label>
                        <textarea [(ngModel)]="respuestaTexto" rows="4" class="form-control custom-textarea"
                            placeholder="Escribe la soluci\xF3n o resoluci\xF3n para esta incidencia...">
                        </textarea>
                    </div>

                    <button class="btn-save-incidencia w-100 mt-2" (click)="guardarRespuesta()" [disabled]="guardando">
                        <ion-icon name="checkmark-circle-outline" class="me-2"></ion-icon>
                        {{ guardando ? 'Guardando...' : 'Guardar Respuesta y Actualizar' }}
                    </button>

                </div>
            </ion-col>
        </ion-row>

    </div>
</ion-content>`, styles: ["/* src/app/pages/admin/incidencias-admin/incidencias-admin.page.scss */\nion-content.admin-content {\n  --background: #E9EDD5 !important;\n}\n.admin-container {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.title-page {\n  font-size: 1.35rem;\n  color: #2c2c2c;\n}\n.btn-back {\n  --border-radius: 50%;\n  width: 42px;\n  height: 42px;\n}\n.badge-total {\n  background: #F0D7B4;\n  color: #2c2c2c;\n  font-weight: 700;\n  font-size: 0.8rem;\n  padding: 6px 16px;\n  border-radius: 20px;\n}\n.custom-search-item {\n  --background: #f8f9fa;\n  --border-radius: 35px;\n  --inner-padding-end: 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 35px;\n}\n.custom-select {\n  background: #f8f9fa;\n  border: 1px solid #e2e8f0;\n  border-radius: 35px;\n  padding: 8px 16px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #2c2c2c;\n}\n.incidencias-scroll-container {\n  max-height: 520px;\n  overflow-y: auto;\n  padding-right: 4px;\n  padding-top: 4px;\n}\n.incidencia-card {\n  background: #f8f9fa;\n  border: 1.5px solid #e2e8f0;\n  transition: all 0.25s ease;\n}\n.incidencia-card:hover {\n  border-color: #b3b5e6;\n  background: #ffffff;\n  transform: translateY(-2px);\n  cursor: pointer;\n}\n.incidencia-card.active {\n  border-color: #7c4dff !important;\n  background: #ffffff !important;\n  box-shadow: 0 4px 14px rgba(124, 77, 255, 0.15) !important;\n}\n.badge-id {\n  font-family: monospace;\n  font-weight: 700;\n  font-size: 0.75rem;\n  background: #e2e8f0;\n  color: #2c2c2c;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.badge-prioridad {\n  font-size: 0.65rem;\n  font-weight: 800;\n  padding: 2px 8px;\n  border-radius: 12px;\n}\n.badge-prioridad.prio-alta {\n  background: #ffebee;\n  color: #c62828;\n}\n.badge-prioridad.prio-media {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.badge-prioridad.prio-baja {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge-estado {\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 15px;\n}\n.badge-estado.estado-pendiente {\n  background: #fff3e0;\n  color: #ef6c00;\n}\n.badge-estado.estado-en_revision {\n  background: #e8eaf6;\n  color: #283593;\n}\n.badge-estado.estado-resuelta {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge-estado.estado-desestimada {\n  background: #efebe9;\n  color: #4e342e;\n}\n.btn-estado {\n  border: 1px solid #ccc;\n  background: #ffffff;\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-estado.active {\n  color: #ffffff !important;\n  border-color: transparent !important;\n}\n.btn-estado.btn-pend.active {\n  background: #ef6c00;\n}\n.btn-estado.btn-rev.active {\n  background: #3f51b5;\n}\n.btn-estado.btn-res.active {\n  background: #2e7d32;\n}\n.btn-estado.btn-des.active {\n  background: #616161;\n}\n.custom-textarea {\n  border-radius: 16px;\n  border: 1.5px solid #e2e8f0;\n  padding: 12px;\n  font-size: 0.9rem;\n}\n.custom-textarea:focus {\n  border-color: #b3b5e6;\n  box-shadow: 0 0 0 3px rgba(179, 181, 230, 0.25);\n  outline: none;\n}\n.btn-save-incidencia {\n  background: #b3b5e6;\n  color: #ffffff;\n  font-weight: 700;\n  padding: 12px;\n  border-radius: 35px;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 6px 18px rgba(179, 181, 230, 0.4);\n  transition: all 0.25s ease;\n}\n.btn-save-incidencia:hover {\n  background: #9d9fe0;\n  transform: translateY(-2px);\n}\n.xsmall {\n  font-size: 0.72rem;\n}\n.line-clamp-2 {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n/*# sourceMappingURL=incidencias-admin.page.css.map */\n"] }]
  }], () => [{ type: NavController }, { type: IncidenciasService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IncidenciasAdminPage, { className: "IncidenciasAdminPage", filePath: "src/app/pages/admin/incidencias-admin/incidencias-admin.page.ts", lineNumber: 48 });
})();
export {
  IncidenciasAdminPage
};
//# sourceMappingURL=incidencias-admin.page-VLPZ2W2W.js.map
