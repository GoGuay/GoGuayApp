import {
  IncidenciasService
} from "./chunk-XVLCLCLR.js";
import {
  addIcons,
  arrowBackOutline,
  attachOutline,
  chatbubblesOutline,
  checkmarkCircleOutline,
  chevronDownOutline,
  chevronUpOutline,
  closeCircleOutline,
  sendOutline,
  timeOutline,
  warningOutline
} from "./chunk-TDPVVR7R.js";
import {
  NavbarComponent
} from "./chunk-6PYX74OP.js";
import "./chunk-C4WEIZGQ.js";
import "./chunk-L23MUE74.js";
import "./chunk-FFMYI37T.js";
import "./chunk-X7SDTFSG.js";
import "./chunk-NX7SG6WM.js";
import "./chunk-Q5CK7R7A.js";
import "./chunk-43M6K65B.js";
import "./chunk-TFWCQLOE.js";
import "./chunk-REKVANIZ.js";
import "./chunk-6VCOWNW4.js";
import "./chunk-ZPEWRVEX.js";
import {
  AlertController,
  IonContent,
  IonHeader,
  IonIcon,
  IonSpinner,
  IonicModule
} from "./chunk-V5JFS32A.js";
import "./chunk-ULJI5CAD.js";
import {
  CommonModule,
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  NavController,
  NgClass,
  NgControlStatus,
  NgModel
} from "./chunk-XCBA4FSK.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction4,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4LZZ5H7X.js";
import "./chunk-PYRDO7X4.js";
import "./chunk-UGUZQALC.js";
import "./chunk-T5TS2YIV.js";
import "./chunk-WC2RXGX6.js";
import "./chunk-PUO4TC4B.js";
import "./chunk-4XZH5Q4W.js";
import "./chunk-4UX5YYJM.js";
import "./chunk-2ZVRKVGD.js";
import "./chunk-DSEDVKEI.js";
import "./chunk-Y3XSLTJY.js";
import "./chunk-BUQIIG6A.js";
import "./chunk-QU22HLHJ.js";
import "./chunk-HMGJJ2JN.js";
import "./chunk-ZEMLCENC.js";
import "./chunk-XEOOW4LE.js";
import "./chunk-GUHVPX3Y.js";
import "./chunk-OUKGZKTF.js";
import "./chunk-QZNKOL6V.js";
import "./chunk-NZ2QYBMG.js";
import "./chunk-7O2RIIXI.js";
import "./chunk-7VLNHB4X.js";
import "./chunk-WTD4IAKK.js";
import "./chunk-LDX7VN5G.js";
import "./chunk-XNSI3F57.js";
import "./chunk-SWNU2J3M.js";
import "./chunk-FUL4CNB6.js";
import "./chunk-AIOHWISL.js";
import "./chunk-77FB7LC2.js";
import "./chunk-SE3K5JBJ.js";
import "./chunk-DI3VEDFV.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-MP5LG4CB.js";

// src/app/pages/paginas-panel-usuario/incidencias-usuario/incidencias-usuario.page.ts
var _c0 = (a0, a1, a2, a3) => ({ "estado-iniciada": a0, "estado-revision": a1, "estado-finalizada": a2, "estado-cancelada": a3 });
function IncidenciasUsuarioPage_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "ion-spinner", 15);
    \u0275\u0275elementStart(2, "p", 16);
    \u0275\u0275text(3, "Cargando tus incidencias...");
    \u0275\u0275elementEnd()();
  }
}
function IncidenciasUsuarioPage_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "ion-icon", 17);
    \u0275\u0275elementStart(2, "h5", 18);
    \u0275\u0275text(3, "No tienes incidencias registradas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 9);
    \u0275\u0275text(5, "Si surge alg\xFAn imprevisto durante un viaje, podr\xE1s reportarlo desde aqu\xED o el Centro de Ayuda.");
    \u0275\u0275elementEnd()();
  }
}
function IncidenciasUsuarioPage_Conditional_22_For_2_Conditional_17_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "strong", 40);
    \u0275\u0275element(2, "ion-icon", 41);
    \u0275\u0275text(3, " Resoluci\xF3n de Soporte: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r2.resolucion_notas);
  }
}
function IncidenciasUsuarioPage_Conditional_22_For_2_Conditional_17_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "strong", 43);
    \u0275\u0275element(2, "ion-icon", 44);
    \u0275\u0275text(3, " Motivo de cancelaci\xF3n: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatearMotivoCancelacion(item_r2.motivo_cancelacion));
  }
}
function IncidenciasUsuarioPage_Conditional_22_For_2_Conditional_17_Conditional_8_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 47);
    \u0275\u0275element(1, "ion-icon", 48);
    \u0275\u0275text(2, " Ver archivo ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const adj_r4 = ctx.$implicit;
    \u0275\u0275property("href", adj_r4.url_archivo, \u0275\u0275sanitizeUrl);
  }
}
function IncidenciasUsuarioPage_Conditional_22_For_2_Conditional_17_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "strong", 45);
    \u0275\u0275text(2, "Adjuntos:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46);
    \u0275\u0275repeaterCreate(4, IncidenciasUsuarioPage_Conditional_22_For_2_Conditional_17_Conditional_8_For_5_Template, 3, 1, "a", 47, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275repeater(item_r2.adjuntos);
  }
}
function IncidenciasUsuarioPage_Conditional_22_For_2_Conditional_17_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "span", 51);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 52);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 53);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const msg_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("msg-propio", msg_r5.emisor_id === ctx_r2.userId)("msg-soporte", msg_r5.emisor_id !== ctx_r2.userId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(msg_r5.emisor_id === ctx_r2.userId ? "T\xFA" : "Soporte GoGuay");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 7, msg_r5.created_at, "dd/MM HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(msg_r5.mensaje);
  }
}
function IncidenciasUsuarioPage_Conditional_22_For_2_Conditional_17_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "input", 54);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function IncidenciasUsuarioPage_Conditional_22_For_2_Conditional_17_Conditional_14_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const item_r2 = \u0275\u0275nextContext(2).$implicit;
      \u0275\u0275twoWayBindingSet(item_r2.nuevoMensaje, $event) || (item_r2.nuevoMensaje = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function IncidenciasUsuarioPage_Conditional_22_For_2_Conditional_17_Conditional_14_Template_input_keyup_enter_1_listener() {
      \u0275\u0275restoreView(_r6);
      const item_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.enviarRespuesta(item_r2));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 55);
    \u0275\u0275listener("click", function IncidenciasUsuarioPage_Conditional_22_For_2_Conditional_17_Conditional_14_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const item_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.enviarRespuesta(item_r2));
    });
    \u0275\u0275element(3, "ion-icon", 56);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", item_r2.nuevoMensaje);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", item_r2.enviandoMensaje);
  }
}
function IncidenciasUsuarioPage_Conditional_22_For_2_Conditional_17_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "button", 57);
    \u0275\u0275listener("click", function IncidenciasUsuarioPage_Conditional_22_For_2_Conditional_17_Conditional_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const item_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmarCancelacion(item_r2));
    });
    \u0275\u0275element(2, "ion-icon", 58);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Cancelar incidencia");
    \u0275\u0275elementEnd()()();
  }
}
function IncidenciasUsuarioPage_Conditional_22_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "strong", 31);
    \u0275\u0275text(3, "Descripci\xF3n inicial:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, IncidenciasUsuarioPage_Conditional_22_For_2_Conditional_17_Conditional_6_Template, 6, 1, "div", 33);
    \u0275\u0275conditionalCreate(7, IncidenciasUsuarioPage_Conditional_22_For_2_Conditional_17_Conditional_7_Template, 6, 1, "div", 34);
    \u0275\u0275conditionalCreate(8, IncidenciasUsuarioPage_Conditional_22_For_2_Conditional_17_Conditional_8_Template, 6, 0, "div", 30);
    \u0275\u0275elementStart(9, "div", 35)(10, "strong", 36);
    \u0275\u0275text(11, "Mensajes de seguimiento:");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(12, IncidenciasUsuarioPage_Conditional_22_For_2_Conditional_17_For_13_Template, 9, 10, "div", 37, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(14, IncidenciasUsuarioPage_Conditional_22_For_2_Conditional_17_Conditional_14_Template, 4, 2, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, IncidenciasUsuarioPage_Conditional_22_For_2_Conditional_17_Conditional_15_Template, 5, 0, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r2.descripcion);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.resolucion_notas ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.motivo_cancelacion ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.adjuntos && item_r2.adjuntos.length > 0 ? 8 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(item_r2.mensajes);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r2.estado !== "FINALIZADA" && item_r2.estado !== "CANCELADA" ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.estado !== "FINALIZADA" && item_r2.estado !== "CANCELADA" ? 15 : -1);
  }
}
function IncidenciasUsuarioPage_Conditional_22_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275listener("click", function IncidenciasUsuarioPage_Conditional_22_For_2_Template_div_click_1_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleDesplegar(item_r2));
    });
    \u0275\u0275elementStart(2, "div")(3, "div", 21)(4, "span", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "h4", 24);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 25);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 26)(14, "span", 27);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "ion-icon", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(17, IncidenciasUsuarioPage_Conditional_22_For_2_Conditional_17_Template, 16, 6, "div", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("#", item_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.subcategoria);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.resumen);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 8, item_r2.created_at, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(11, _c0, item_r2.estado === "INICIADA", item_r2.estado === "EN_REVISION", item_r2.estado === "FINALIZADA", item_r2.estado === "CANCELADA"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.estado.replace("_", " "), " ");
    \u0275\u0275advance();
    \u0275\u0275property("name", item_r2.desplegado ? "chevron-up-outline" : "chevron-down-outline");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.desplegado ? 17 : -1);
  }
}
function IncidenciasUsuarioPage_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275repeaterCreate(1, IncidenciasUsuarioPage_Conditional_22_For_2_Template, 18, 16, "div", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.incidenciasFiltradas);
  }
}
var IncidenciasUsuarioPage = class _IncidenciasUsuarioPage {
  navCtrl;
  alertController;
  incidenciasService;
  incidencias = [];
  incidenciasFiltradas = [];
  filtroEstado = "todas";
  cargando = true;
  userId = null;
  constructor(navCtrl, alertController, incidenciasService) {
    this.navCtrl = navCtrl;
    this.alertController = alertController;
    this.incidenciasService = incidenciasService;
    addIcons({
      warningOutline,
      timeOutline,
      checkmarkCircleOutline,
      closeCircleOutline,
      chatbubblesOutline,
      attachOutline,
      chevronDownOutline,
      chevronUpOutline,
      arrowBackOutline,
      sendOutline
    });
  }
  ngOnInit() {
    var _a;
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    this.userId = ((_a = userData == null ? void 0 : userData.usuario) == null ? void 0 : _a.id) || null;
    if (this.userId) {
      this.cargarIncidencias();
    } else {
      this.cargando = false;
    }
  }
  cargarIncidencias() {
    if (!this.userId)
      return;
    this.cargando = true;
    this.incidenciasService.obtenerIncidenciasUsuario(this.userId).subscribe({
      next: (data) => {
        this.incidencias = (data || []).map((item) => __spreadProps(__spreadValues({}, item), {
          desplegado: false,
          nuevoMensaje: ""
        }));
        this.aplicarFiltro();
        this.cargando = false;
      },
      error: (err) => {
        console.error("Error cargando incidencias:", err);
        this.cargando = false;
      }
    });
  }
  aplicarFiltro() {
    if (this.filtroEstado === "todas") {
      this.incidenciasFiltradas = [...this.incidencias];
    } else if (this.filtroEstado === "iniciada") {
      this.incidenciasFiltradas = this.incidencias.filter((i) => i.estado === "INICIADA" || i.estado === "EN_REVISION");
    } else if (this.filtroEstado === "finalizada") {
      this.incidenciasFiltradas = this.incidencias.filter((i) => i.estado === "FINALIZADA" || i.estado === "CANCELADA");
    }
  }
  toggleDesplegar(item) {
    item.desplegado = !item.desplegado;
  }
  enviarRespuesta(item) {
    if (!item.nuevoMensaje || !item.nuevoMensaje.trim() || !this.userId || item.enviandoMensaje)
      return;
    const texto = item.nuevoMensaje.trim();
    item.enviandoMensaje = true;
    this.incidenciasService.enviarMensajeIncidencia(item.id, this.userId, texto).subscribe({
      next: (nuevoMsgServidor) => {
        item.mensajes.push(nuevoMsgServidor);
        item.nuevoMensaje = "";
        item.enviandoMensaje = false;
      },
      error: (err) => {
        console.error("Error al enviar mensaje de incidencia:", err);
        item.enviandoMensaje = false;
      }
    });
  }
  /**
   * Pide confirmación al usuario para cancelar la incidencia
   */
  confirmarCancelacion(item) {
    return __async(this, null, function* () {
      const alert = yield this.alertController.create({
        header: "Cancelar Incidencia",
        message: `\xBFEst\xE1s seguro de que deseas cancelar la incidencia #${item.id}? Soporte no continuar\xE1 revisando esta consulta.`,
        cssClass: "goguay-alert-custom",
        buttons: [
          {
            text: "No, mantener",
            role: "cancel",
            cssClass: "btn-alert-cancel"
          },
          {
            text: "S\xED, cancelar",
            role: "destructive",
            cssClass: "btn-alert-confirm-danger",
            handler: () => {
              this.cancelarIncidencia(item);
            }
          }
        ]
      });
      yield alert.present();
    });
  }
  /**
   * Ejecuta la llamada al servicio para cancelar la incidencia
   */
  cancelarIncidencia(item) {
    this.incidenciasService.cancelarIncidenciaPorUsuario(item.id).subscribe({
      next: (incidenciaActualizada) => {
        item.estado = "CANCELADA";
        item.motivo_cancelacion = "POR_USUARIO";
        this.aplicarFiltro();
      },
      error: (err) => {
        console.error("Error al cancelar la incidencia:", err);
      }
    });
  }
  volver() {
    this.navCtrl.back();
  }
  /**
   * Mapea los valores en Enum a texto amigable para la interfaz de usuario
   */
  formatearMotivoCancelacion(motivo) {
    if (!motivo)
      return "";
    if (motivo === "POR_USUARIO") {
      return "Por el usuario";
    }
    return motivo.replace("_", " ");
  }
  static \u0275fac = function IncidenciasUsuarioPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IncidenciasUsuarioPage)(\u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(IncidenciasService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IncidenciasUsuarioPage, selectors: [["app-incidencias-usuario"]], decls: 23, vars: 10, consts: [[1, "ion-no-border"], [3, "isLoggedIn"], [1, "incidencias-content", "ion-padding"], [1, "incidencias-container"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "d-flex", "align-items-center", "gap-3"], [1, "btn-back-circle", 3, "click"], ["name", "arrow-back-outline"], [1, "fw-bold", "m-0", "title-page"], [1, "text-muted", "small", "m-0"], [1, "tabs-filter-wrapper", "mb-4"], [1, "tab-btn", 3, "click"], [1, "text-center", "py-5"], [1, "empty-card", "text-center", "p-4", "rounded-4", "bg-white", "shadow-sm"], [1, "incidencias-list"], ["name", "crescent", "color", "primary"], [1, "text-muted", "small", "mt-2"], ["name", "checkmark-circle-outline", 1, "empty-icon", "text-success", "mb-2"], [1, "fw-bold", "text-dark"], [1, "incidencia-card", "p-3", "mb-3", "bg-white", "shadow-sm", "rounded-4"], [1, "d-flex", "align-items-center", "justify-content-between", "cursor-pointer", 3, "click"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], [1, "badge-id"], [1, "badge-categoria"], [1, "fw-bold", "fs-6", "m-0", "text-dark"], [1, "text-muted", "xsmall"], [1, "d-flex", "align-items-center", "gap-2"], [1, "badge-estado", 3, "ngClass"], [1, "text-muted", "fs-5", 3, "name"], [1, "incidencia-detail", "mt-3", "pt-3", "border-top"], [1, "mb-3"], [1, "xsmall", "text-muted", "d-block", "uppercase", "fw-bold"], [1, "small", "text-dark", "m-0", "bg-light", "p-2", "rounded-3", "mt-1"], [1, "mb-3", "p-3", "rounded-3", "bg-success-subtle", "border", "border-success"], [1, "mb-3", "p-3", "rounded-3", "bg-secondary-subtle", "border", "border-secondary"], [1, "mensajes-section", "mt-3"], [1, "xsmall", "text-muted", "d-block", "uppercase", "fw-bold", "mb-2"], [1, "msg-bubble", "mb-2", "p-2", "rounded-3", 3, "msg-propio", "msg-soporte"], [1, "d-flex", "gap-2", "mt-3"], [1, "mt-4", "pt-3", "border-top", "d-flex", "justify-content-end"], [1, "small", "text-success", "d-block", "fw-bold", "mb-1"], ["name", "checkmark-circle-outline", 1, "me-1"], [1, "small", "text-dark", "m-0"], [1, "small", "text-secondary", "d-block", "fw-bold", "mb-1"], ["name", "close-circle-outline", 1, "me-1"], [1, "xsmall", "text-muted", "d-block", "uppercase", "fw-bold", "mb-1"], [1, "d-flex", "gap-2", "flex-wrap"], ["target", "_blank", 1, "adjunto-pill", 3, "href"], ["name", "paperclip-outline"], [1, "msg-bubble", "mb-2", "p-2", "rounded-3"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-1"], [1, "fw-bold", "xsmall"], [1, "xsmall", "text-muted"], [1, "small", "m-0"], ["type", "text", "placeholder", "Escribe un mensaje de respuesta...", 1, "form-control", "custom-input-msg", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn-send-msg", 3, "click", "disabled"], ["name", "send-outline"], [1, "btn", "btn-sm", "btn-outline-danger", "d-flex", "align-items-center", "gap-1", "btn-cancelar-incidencia", 3, "click"], ["name", "close-circle-outline"]], template: function IncidenciasUsuarioPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0);
      \u0275\u0275element(1, "app-navbar", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "ion-content", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "button", 6);
      \u0275\u0275listener("click", function IncidenciasUsuarioPage_Template_button_click_6_listener() {
        return ctx.volver();
      });
      \u0275\u0275element(7, "ion-icon", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div")(9, "h2", 8);
      \u0275\u0275text(10, "Mis Incidencias");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 9);
      \u0275\u0275text(12, "Estado de tus consultas, reportes y reclamaciones");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 10)(14, "button", 11);
      \u0275\u0275listener("click", function IncidenciasUsuarioPage_Template_button_click_14_listener() {
        ctx.filtroEstado = "todas";
        return ctx.aplicarFiltro();
      });
      \u0275\u0275text(15, " Todas ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 11);
      \u0275\u0275listener("click", function IncidenciasUsuarioPage_Template_button_click_16_listener() {
        ctx.filtroEstado = "iniciada";
        return ctx.aplicarFiltro();
      });
      \u0275\u0275text(17, " Abiertas ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 11);
      \u0275\u0275listener("click", function IncidenciasUsuarioPage_Template_button_click_18_listener() {
        ctx.filtroEstado = "finalizada";
        return ctx.aplicarFiltro();
      });
      \u0275\u0275text(19, " Resueltas ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(20, IncidenciasUsuarioPage_Conditional_20_Template, 4, 0, "div", 12);
      \u0275\u0275conditionalCreate(21, IncidenciasUsuarioPage_Conditional_21_Template, 6, 0, "div", 13);
      \u0275\u0275conditionalCreate(22, IncidenciasUsuarioPage_Conditional_22_Template, 3, 0, "div", 14);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("isLoggedIn", true);
      \u0275\u0275advance(13);
      \u0275\u0275classProp("active", ctx.filtroEstado === "todas");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.filtroEstado === "iniciada");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.filtroEstado === "finalizada");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.cargando ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.cargando && ctx.incidenciasFiltradas.length === 0 ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.cargando && ctx.incidenciasFiltradas.length > 0 ? 22 : -1);
    }
  }, dependencies: [CommonModule, NgClass, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, IonicModule, IonContent, IonHeader, IonIcon, IonSpinner, NavbarComponent, DatePipe], styles: ["\nion-content.incidencias-content[_ngcontent-%COMP%] {\n  --%NS%background: #E9EDD5 !important;\n}\n.incidencias-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.title-page[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  color: #2c2c2c;\n}\n.btn-back-circle[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  color: #2c2c2c;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.btn-back-circle[_ngcontent-%COMP%]:hover {\n  background: #F0D7B4;\n}\n.tabs-filter-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  background: #ffffff;\n  padding: 6px;\n  border-radius: 35px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);\n}\n.tabs-filter-wrapper[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  padding: 8px 16px;\n  border-radius: 35px;\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #6c757d;\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.tabs-filter-wrapper[_ngcontent-%COMP%]   .tab-btn.active[_ngcontent-%COMP%] {\n  background: #b3b5e6;\n  color: #ffffff;\n  box-shadow: 0 4px 12px rgba(179, 181, 230, 0.4);\n}\n.incidencia-card[_ngcontent-%COMP%] {\n  border-radius: 28px !important;\n  border: 1.5px solid #e2e8f0;\n  cursor: pointer;\n}\n.incidencia-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  transform: translateY(-2px);\n}\n.badge-id[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  font-size: 0.75rem;\n  background: #e2e8f0;\n  color: #2c2c2c;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.badge-categoria[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #5a6268;\n  text-transform: uppercase;\n}\n.badge-estado[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 800;\n  padding: 4px 12px;\n  border-radius: 20px;\n}\n.badge-estado.estado-iniciada[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #ef6c00;\n}\n.badge-estado.estado-revision[_ngcontent-%COMP%] {\n  background: #e8eaf6;\n  color: #283593;\n}\n.badge-estado.estado-finalizada[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge-estado.estado-cancelada[_ngcontent-%COMP%] {\n  background: #efebe9;\n  color: #4e342e;\n}\n.msg-bubble[_ngcontent-%COMP%] {\n  border-radius: 16px !important;\n}\n.msg-bubble.msg-propio[_ngcontent-%COMP%] {\n  background: #e8eaf6;\n  margin-left: 20px;\n}\n.msg-bubble.msg-soporte[_ngcontent-%COMP%] {\n  background: #F0D7B4;\n  margin-right: 20px;\n}\n.custom-input-msg[_ngcontent-%COMP%] {\n  border-radius: 35px;\n  border: 1px solid #ccc;\n  padding: 8px 16px;\n  font-size: 0.85rem;\n}\n.custom-input-msg[_ngcontent-%COMP%]:focus {\n  border-color: #b3b5e6;\n  outline: none;\n}\n.btn-send-msg[_ngcontent-%COMP%] {\n  background: #b3b5e6;\n  color: #ffffff;\n  border: none;\n  border-radius: 50%;\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.adjunto-pill[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  background: #f8f9fa;\n  border: 1px solid #ccc;\n  padding: 4px 10px;\n  border-radius: 20px;\n  color: #2c2c2c;\n  text-decoration: none;\n}\n.xsmall[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n}\n.btn-cancelar-incidencia[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  font-size: 0.8rem;\n  padding: 4px 12px;\n  transition: all 0.2s ease;\n}\n.btn-cancelar-incidencia[_ngcontent-%COMP%]:hover {\n  background-color: #dc3545;\n  color: white;\n}\n/*# sourceMappingURL=incidencias-usuario.page.css.map */"], changeDetection: 1 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IncidenciasUsuarioPage, [{
    type: Component,
    args: [{ selector: "app-incidencias-usuario", standalone: true, changeDetection: ChangeDetectionStrategy.Eager, imports: [CommonModule, FormsModule, IonicModule, NavbarComponent], template: `<ion-header class="ion-no-border">
  <app-navbar [isLoggedIn]="true"></app-navbar>
</ion-header>

<ion-content class="incidencias-content ion-padding">
  <div class="incidencias-container">
    <div class="d-flex align-items-center justify-content-between mb-4">
      <div class="d-flex align-items-center gap-3">
        <button
          class="btn-back-circle"
          (click)="volver()"
        >
          <ion-icon name="arrow-back-outline"></ion-icon>
        </button>
        <div>
          <h2 class="fw-bold m-0 title-page">Mis Incidencias</h2>
          <p class="text-muted small m-0">Estado de tus consultas, reportes y reclamaciones</p>
        </div>
      </div>
    </div>

    <!-- FILTRO -->
    <div class="tabs-filter-wrapper mb-4">
      <button
        class="tab-btn"
        [class.active]="filtroEstado === 'todas'"
        (click)="filtroEstado = 'todas'; aplicarFiltro()"
      >
        Todas
      </button>
      <button
        class="tab-btn"
        [class.active]="filtroEstado === 'iniciada'"
        (click)="filtroEstado = 'iniciada'; aplicarFiltro()"
      >
        Abiertas
      </button>
      <button
        class="tab-btn"
        [class.active]="filtroEstado === 'finalizada'"
        (click)="filtroEstado = 'finalizada'; aplicarFiltro()"
      >
        Resueltas
      </button>
    </div>

    <!-- SPINNER -->
    @if (cargando) {
    <div class="text-center py-5">
      <ion-spinner
        name="crescent"
        color="primary"
      ></ion-spinner>
      <p class="text-muted small mt-2">Cargando tus incidencias...</p>
    </div>
    }

    <!-- SIN INCIDENCIAS -->
    @if (!cargando && incidenciasFiltradas.length === 0) {
    <div class="empty-card text-center p-4 rounded-4 bg-white shadow-sm">
      <ion-icon
        name="checkmark-circle-outline"
        class="empty-icon text-success mb-2"
      ></ion-icon>
      <h5 class="fw-bold text-dark">No tienes incidencias registradas</h5>
      <p class="text-muted small m-0">Si surge alg\xFAn imprevisto durante un viaje, podr\xE1s reportarlo desde aqu\xED o el Centro de Ayuda.</p>
    </div>
    }

    <!-- LISTA DE INCIDENCIAS -->
    @if (!cargando && incidenciasFiltradas.length > 0) {
    <div class="incidencias-list">
      @for (item of incidenciasFiltradas; track item) {
      <div class="incidencia-card p-3 mb-3 bg-white shadow-sm rounded-4">
        <div
          class="d-flex align-items-center justify-content-between cursor-pointer"
          (click)="toggleDesplegar(item)"
        >
          <div>
            <div class="d-flex align-items-center gap-2 mb-1">
              <span class="badge-id">#{{ item.id }}</span>
              <span class="badge-categoria">{{ item.subcategoria }}</span>
            </div>
            <h4 class="fw-bold fs-6 m-0 text-dark">{{ item.resumen }}</h4>
            <span class="text-muted xsmall">{{ item.created_at | date:'dd/MM/yyyy HH:mm' }}</span>
          </div>
          <div class="d-flex align-items-center gap-2">
            <span
              class="badge-estado"
              [ngClass]="{
              'estado-iniciada': item.estado === 'INICIADA',
              'estado-revision': item.estado === 'EN_REVISION',
              'estado-finalizada': item.estado === 'FINALIZADA',
              'estado-cancelada': item.estado === 'CANCELADA'
            }"
            >
              {{ item.estado.replace('_', ' ') }}
            </span>
            <ion-icon
              [name]="item.desplegado ? 'chevron-up-outline' : 'chevron-down-outline'"
              class="text-muted fs-5"
            ></ion-icon>
          </div>
        </div>
        @if (item.desplegado) {
        <div class="incidencia-detail mt-3 pt-3 border-top">
          <div class="mb-3">
            <strong class="xsmall text-muted d-block uppercase fw-bold">Descripci\xF3n inicial:</strong>
            <p class="small text-dark m-0 bg-light p-2 rounded-3 mt-1">{{ item.descripcion }}</p>
          </div>
          @if (item.resolucion_notas) {
          <div class="mb-3 p-3 rounded-3 bg-success-subtle border border-success">
            <strong class="small text-success d-block fw-bold mb-1">
              <ion-icon
                name="checkmark-circle-outline"
                class="me-1"
              ></ion-icon>
              Resoluci\xF3n de Soporte:
            </strong>
            <p class="small text-dark m-0">{{ item.resolucion_notas }}</p>
          </div>
          } @if (item.motivo_cancelacion) {
          <div class="mb-3 p-3 rounded-3 bg-secondary-subtle border border-secondary">
            <strong class="small text-secondary d-block fw-bold mb-1">
              <ion-icon
                name="close-circle-outline"
                class="me-1"
              ></ion-icon>
              Motivo de cancelaci\xF3n:
            </strong>
            <p class="small text-dark m-0">{{ formatearMotivoCancelacion(item.motivo_cancelacion) }}</p>
          </div>
          } @if (item.adjuntos && item.adjuntos.length > 0) {
          <div class="mb-3">
            <strong class="xsmall text-muted d-block uppercase fw-bold mb-1">Adjuntos:</strong>
            <div class="d-flex gap-2 flex-wrap">
              @for (adj of item.adjuntos; track adj) {
              <a
                [href]="adj.url_archivo"
                target="_blank"
                class="adjunto-pill"
              >
                <ion-icon name="paperclip-outline"></ion-icon>
                Ver archivo
              </a>
              }
            </div>
          </div>
          }
          <!-- MENSAJES -->
          <div class="mensajes-section mt-3">
            <strong class="xsmall text-muted d-block uppercase fw-bold mb-2">Mensajes de seguimiento:</strong>
            @for (msg of item.mensajes; track msg) {
            <div
              class="msg-bubble mb-2 p-2 rounded-3"
              [class.msg-propio]="msg.emisor_id === userId"
              [class.msg-soporte]="msg.emisor_id !== userId"
            >
              <div class="d-flex justify-content-between align-items-center mb-1">
                <span class="fw-bold xsmall">{{ msg.emisor_id === userId ? 'T\xFA' : 'Soporte GoGuay' }}</span>
                <span class="xsmall text-muted">{{ msg.created_at | date:'dd/MM HH:mm' }}</span>
              </div>
              <p class="small m-0">{{ msg.mensaje }}</p>
            </div>
            }
            <!-- ENVIAR RESPUESTA -->
            @if (item.estado !== 'FINALIZADA' && item.estado !== 'CANCELADA') {
            <div class="d-flex gap-2 mt-3">
              <input
                type="text"
                [(ngModel)]="item.nuevoMensaje"
                placeholder="Escribe un mensaje de respuesta..."
                class="form-control custom-input-msg"
                (keyup.enter)="enviarRespuesta(item)"
              />
              <button
                class="btn-send-msg"
                (click)="enviarRespuesta(item)"
                [disabled]="item.enviandoMensaje"
              >
                <ion-icon name="send-outline"></ion-icon>
              </button>
            </div>
            }
          </div>
          <!-- BOT\xD3N CANCELAR -->
          @if (item.estado !== 'FINALIZADA' && item.estado !== 'CANCELADA') {
          <div class="mt-4 pt-3 border-top d-flex justify-content-end">
            <button
              class="btn btn-sm btn-outline-danger d-flex align-items-center gap-1 btn-cancelar-incidencia"
              (click)="confirmarCancelacion(item)"
            >
              <ion-icon name="close-circle-outline"></ion-icon>
              <span>Cancelar incidencia</span>
            </button>
          </div>
          }
        </div>
        }
      </div>
      }
    </div>
    }
  </div>
</ion-content>
`, styles: ["/* src/app/pages/paginas-panel-usuario/incidencias-usuario/incidencias-usuario.page.scss */\nion-content.incidencias-content {\n  --background: #E9EDD5 !important;\n}\n.incidencias-container {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.title-page {\n  font-size: 1.35rem;\n  color: #2c2c2c;\n}\n.btn-back-circle {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  color: #2c2c2c;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.btn-back-circle:hover {\n  background: #F0D7B4;\n}\n.tabs-filter-wrapper {\n  display: flex;\n  gap: 8px;\n  background: #ffffff;\n  padding: 6px;\n  border-radius: 35px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);\n}\n.tabs-filter-wrapper .tab-btn {\n  flex: 1;\n  border: none;\n  background: transparent;\n  padding: 8px 16px;\n  border-radius: 35px;\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #6c757d;\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.tabs-filter-wrapper .tab-btn.active {\n  background: #b3b5e6;\n  color: #ffffff;\n  box-shadow: 0 4px 12px rgba(179, 181, 230, 0.4);\n}\n.incidencia-card {\n  border-radius: 28px !important;\n  border: 1.5px solid #e2e8f0;\n  cursor: pointer;\n}\n.incidencia-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  transform: translateY(-2px);\n}\n.badge-id {\n  font-family: monospace;\n  font-weight: 700;\n  font-size: 0.75rem;\n  background: #e2e8f0;\n  color: #2c2c2c;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.badge-categoria {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #5a6268;\n  text-transform: uppercase;\n}\n.badge-estado {\n  font-size: 0.7rem;\n  font-weight: 800;\n  padding: 4px 12px;\n  border-radius: 20px;\n}\n.badge-estado.estado-iniciada {\n  background: #fff3e0;\n  color: #ef6c00;\n}\n.badge-estado.estado-revision {\n  background: #e8eaf6;\n  color: #283593;\n}\n.badge-estado.estado-finalizada {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge-estado.estado-cancelada {\n  background: #efebe9;\n  color: #4e342e;\n}\n.msg-bubble {\n  border-radius: 16px !important;\n}\n.msg-bubble.msg-propio {\n  background: #e8eaf6;\n  margin-left: 20px;\n}\n.msg-bubble.msg-soporte {\n  background: #F0D7B4;\n  margin-right: 20px;\n}\n.custom-input-msg {\n  border-radius: 35px;\n  border: 1px solid #ccc;\n  padding: 8px 16px;\n  font-size: 0.85rem;\n}\n.custom-input-msg:focus {\n  border-color: #b3b5e6;\n  outline: none;\n}\n.btn-send-msg {\n  background: #b3b5e6;\n  color: #ffffff;\n  border: none;\n  border-radius: 50%;\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.adjunto-pill {\n  font-size: 0.75rem;\n  background: #f8f9fa;\n  border: 1px solid #ccc;\n  padding: 4px 10px;\n  border-radius: 20px;\n  color: #2c2c2c;\n  text-decoration: none;\n}\n.xsmall {\n  font-size: 0.72rem;\n}\n.btn-cancelar-incidencia {\n  border-radius: 20px;\n  font-size: 0.8rem;\n  padding: 4px 12px;\n  transition: all 0.2s ease;\n}\n.btn-cancelar-incidencia:hover {\n  background-color: #dc3545;\n  color: white;\n}\n/*# sourceMappingURL=incidencias-usuario.page.css.map */\n"] }]
  }], () => [{ type: NavController }, { type: AlertController }, { type: IncidenciasService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IncidenciasUsuarioPage, { className: "IncidenciasUsuarioPage", filePath: "src/app/pages/paginas-panel-usuario/incidencias-usuario/incidencias-usuario.page.ts", lineNumber: 49 });
})();
export {
  IncidenciasUsuarioPage
};
//# debugId=b1eb731f-c02d-5b19-9ad8-de025a01d655
//# sourceMappingURL=incidencias-usuario.page-3RVOTGR7.js.map
