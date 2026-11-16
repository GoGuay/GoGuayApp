import {
  MatCardModule
} from "./chunk-QRPEQF2A.js";
import {
  MatDatepickerModule
} from "./chunk-KNHGDPKX.js";
import "./chunk-5MVQ42YD.js";
import "./chunk-PRCBMDKK.js";
import {
  SpinnerComponent
} from "./chunk-XX3IZESI.js";
import {
  TravelService
} from "./chunk-CHBRVYPO.js";
import "./chunk-JAMMMALH.js";
import {
  NavbarComponent
} from "./chunk-QIUENU5G.js";
import "./chunk-XGLFMII2.js";
import {
  FuncionesComunes,
  VehiculosServicesService
} from "./chunk-JVMVG56Z.js";
import "./chunk-FPL4PN3H.js";
import "./chunk-WO2ZSM4X.js";
import {
  HelpModalComponent
} from "./chunk-GYAYVE5N.js";
import {
  ModalErrorComponent
} from "./chunk-ZTUWPCV2.js";
import "./chunk-7NH46FL3.js";
import "./chunk-AF4L5EWO.js";
import "./chunk-YZOGC4HD.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-ZYMQAXGI.js";
import "./chunk-UIKNRIU5.js";
import "./chunk-FCE3VLZJ.js";
import {
  MatDialog
} from "./chunk-CGCOLBWN.js";
import {
  MatIcon
} from "./chunk-H72L7N4J.js";
import {
  IonContent,
  IonicModule
} from "./chunk-6IWXE3BU.js";
import {
  TranslateModule
} from "./chunk-XHXT42RH.js";
import {
  ActivatedRoute,
  DefaultValueAccessor,
  FormsModule,
  NavController,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-TU2LK3TM.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-7PPOBOFB.js";
import {
  Component,
  Subject,
  ViewChild,
  catchError,
  map,
  of,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
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

// src/app/pages/nuevoViaje/data-viaje/componentes-viaje/resumen-viaje/resumen-viaje.component.ts
var _c0 = ["mapResumen"];
function ResumenViajeComponent_h3_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentViajeData == null ? null : ctx_r1.currentViajeData.origen);
  }
}
function ResumenViajeComponent_input_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function ResumenViajeComponent_input_23_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.origen, $event) || (ctx_r1.origen = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ResumenViajeComponent_input_23_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.funcionesComunes.obtenerSugerenciasOrigen($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.origen);
  }
}
function ResumenViajeComponent_ul_24_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 63);
    \u0275\u0275listener("click", function ResumenViajeComponent_ul_24_li_1_Template_li_click_0_listener() {
      const sug_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.seleccionarLocalidadOrigen(sug_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sug_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sug_r5.display_name, " ");
  }
}
function ResumenViajeComponent_ul_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 61);
    \u0275\u0275template(1, ResumenViajeComponent_ul_24_li_1_Template, 2, 1, "li", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.funcionesComunes.sugerenciasOrigen);
  }
}
function ResumenViajeComponent_h3_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentViajeData == null ? null : ctx_r1.currentViajeData.destino);
  }
}
function ResumenViajeComponent_input_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function ResumenViajeComponent_input_33_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.destino, $event) || (ctx_r1.destino = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ResumenViajeComponent_input_33_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.funcionesComunes.obtenerSugerenciasDestino($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.destino);
  }
}
function ResumenViajeComponent_ul_34_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 63);
    \u0275\u0275listener("click", function ResumenViajeComponent_ul_34_li_1_Template_li_click_0_listener() {
      const sug_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.seleccionarLocalidadDestino(sug_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sug_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sug_r8.display_name, " ");
  }
}
function ResumenViajeComponent_ul_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 61);
    \u0275\u0275template(1, ResumenViajeComponent_ul_34_li_1_Template, 2, 1, "li", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.funcionesComunes.sugerenciasDestino);
  }
}
function ResumenViajeComponent_img_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 64);
  }
}
function ResumenViajeComponent_span_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.nombreVehiculo || "No seleccionado");
  }
}
function ResumenViajeComponent_select_52_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const coche_r10 = ctx.$implicit;
    \u0275\u0275property("ngValue", coche_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", coche_r10.marca, " ", coche_r10.modelo, " (", coche_r10.matricula, ") ");
  }
}
function ResumenViajeComponent_select_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 65);
    \u0275\u0275twoWayListener("ngModelChange", function ResumenViajeComponent_select_52_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editableFields.coche, $event) || (ctx_r1.editableFields.coche = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 66);
    \u0275\u0275text(2, " Selecciona un veh\xEDculo ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ResumenViajeComponent_select_52_option_3_Template, 2, 4, "option", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editableFields.coche);
    \u0275\u0275property("compareWith", ctx_r1.compareVehiculos);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.vehiculosUsuario);
  }
}
function ResumenViajeComponent_input_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function ResumenViajeComponent_input_70_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editableFields.fecha_salida, $event) || (ctx_r1.editableFields.fecha_salida = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editableFields.fecha_salida);
  }
}
function ResumenViajeComponent_input_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function ResumenViajeComponent_input_84_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editableFields.hora_salida, $event) || (ctx_r1.editableFields.hora_salida = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editableFields.hora_salida);
  }
}
function ResumenViajeComponent_ng_container_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const mainRoute_r13 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.calcularHoraLlegada(ctx_r1.currentViajeData.hora_salida, mainRoute_r13.legs[0].duration.text), " ");
  }
}
function ResumenViajeComponent_ng_template_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", (ctx_r1.currentViajeData == null ? null : ctx_r1.currentViajeData.hora_llegada) || "--:--", " ");
  }
}
function ResumenViajeComponent_span_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentViajeData == null ? null : ctx_r1.currentViajeData.plazas, " asientos ");
  }
}
function ResumenViajeComponent_select_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ResumenViajeComponent_select_100_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editableFields.plazas, $event) || (ctx_r1.editableFields.plazas = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 68);
    \u0275\u0275text(2, "1 plaza");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "option", 68);
    \u0275\u0275text(4, "2 plazas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 68);
    \u0275\u0275text(6, "3 plazas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 68);
    \u0275\u0275text(8, "4 plazas");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editableFields.plazas);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 4);
  }
}
function ResumenViajeComponent_span_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("auto", ctx_r1.currentViajeData == null ? null : ctx_r1.currentViajeData.reserva_automatica);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r1.currentViajeData == null ? null : ctx_r1.currentViajeData.reserva_automatica) ? "Autom\xE1tica" : "Manual", " ");
  }
}
function ResumenViajeComponent_select_112_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ResumenViajeComponent_select_112_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editableFields.reserva_automatica, $event) || (ctx_r1.editableFields.reserva_automatica = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 68);
    \u0275\u0275text(2, "Autom\xE1tica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "option", 68);
    \u0275\u0275text(4, "Manual");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editableFields.reserva_automatica);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", false);
  }
}
function ResumenViajeComponent_div_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u20AC");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentViajeData == null ? null : ctx_r1.currentViajeData.precio_viaje, " ");
  }
}
function ResumenViajeComponent_input_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 75);
    \u0275\u0275twoWayListener("ngModelChange", function ResumenViajeComponent_input_121_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editableFields.precio_viaje, $event) || (ctx_r1.editableFields.precio_viaje = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editableFields.precio_viaje);
  }
}
function ResumenViajeComponent_p_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " Est\xE1s editando un viaje existente. Revisa que los nuevos datos sean correctos. Al confirmar, se actualizar\xE1 la informaci\xF3n para todos los pasajeros. ");
    \u0275\u0275elementEnd();
  }
}
function ResumenViajeComponent_p_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " Si est\xE1s de acuerdo con el viaje que vas a realizar, conf\xEDrmalo. En caso contrario, puedes volver atr\xE1s para modificar los par\xE1metros. ");
    \u0275\u0275elementEnd();
  }
}
function ResumenViajeComponent_app_spinner_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner");
  }
}
var ResumenViajeComponent = class _ResumenViajeComponent {
  travelService;
  vehiculosService;
  navCtrl;
  dialog;
  funcionesComunes;
  route;
  /**
   * Referencia al elemento del mapa en el resumen del viaje
   * @type {ElementRef}
   */
  mapElement;
  map;
  directionsRenderer;
  userLoggedIn = false;
  userData = {};
  editMode = {};
  editableFields = {};
  origen = "";
  destino = "";
  currentViajeData;
  destroy$ = new Subject();
  vehiculoSeleccionado = null;
  nombreVehiculo = "";
  vehiculosUsuario = [];
  ruta_navegacion_origen = "";
  cargando_viaje = false;
  constructor(travelService, vehiculosService, navCtrl, dialog, funcionesComunes, route) {
    this.travelService = travelService;
    this.vehiculosService = vehiculosService;
    this.navCtrl = navCtrl;
    this.dialog = dialog;
    this.funcionesComunes = funcionesComunes;
    this.route = route;
  }
  ngOnInit() {
    var _a, _b;
    this.userData = JSON.parse(localStorage.getItem("userData") || "{}");
    if ((_b = (_a = this.userData) == null ? void 0 : _a.usuario) == null ? void 0 : _b.email) {
      this.userLoggedIn = true;
      this.obtenerVehiculosUsuario(this.userData.usuario.id);
    } else {
      this.userLoggedIn = false;
    }
    this.actualizarInformacion();
    this.route.queryParams.subscribe((params) => {
      var _a2;
      const viajeId = params["id"];
      this.ruta_navegacion_origen = params["origin"];
      if (viajeId) {
        this.obtenerViaje(viajeId);
      }
      if (!viajeId && (!this.currentViajeData || !((_a2 = this.currentViajeData) == null ? void 0 : _a2.origen))) {
        this.navCtrl.navigateRoot("/home");
        return;
      }
    });
    console.log("CURRENT DATA: ", this.currentViajeData);
  }
  /**
   * Función que se ejecuta después de que la vista haya sido inicializada
   * Aquí inicializamos el mapa si hay una ruta seleccionada
   */
  ngAfterViewInit() {
    var _a;
    if ((_a = this.currentViajeData) == null ? void 0 : _a.ruta_seleccionada) {
      this.intentarInicializarMapa();
    }
  }
  intentarInicializarMapa() {
    setTimeout(() => {
      if (this.mapElement && this.mapElement.nativeElement) {
        this.inicializarMapaResumen();
      } else {
        setTimeout(() => this.intentarInicializarMapa(), 200);
      }
    }, 100);
  }
  /**
   * Función para inicializar el mapa en el resumen del viaje
   * @param mapOptions --> Contiene la configuración del mapa
   *
   *
   */
  inicializarMapaResumen() {
    if (!this.mapElement)
      return;
    const mapOptions = {
      disableDefaultUI: true,
      zoomControl: false,
      scrollwheel: false,
      gestureHandling: "none"
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.directionsRenderer = new google.maps.DirectionsRenderer({
      suppressMarkers: false,
      map: this.map
    });
    setTimeout(() => {
      var _a;
      if ((_a = this.currentViajeData) == null ? void 0 : _a.ruta_seleccionada) {
        this.directionsRenderer.setDirections(this.currentViajeData.ruta_seleccionada);
        google.maps.event.trigger(this.map, "resize");
        const bounds = new google.maps.LatLngBounds();
        const route = this.currentViajeData.ruta_seleccionada.routes[0];
        if (route && route.overview_path) {
          route.overview_path.forEach((point) => bounds.extend(point));
          this.map.fitBounds(bounds);
        }
      }
    }, 500);
  }
  obtenerViaje(viaje_id) {
    this.travelService.getViaje(viaje_id).subscribe((resultado) => {
      var _a;
      console.log("Viaje a editar: ", resultado);
      this.currentViajeData = resultado;
      this.setInitialCoche();
      if ((_a = this.currentViajeData) == null ? void 0 : _a.ruta_seleccionada) {
        this.intentarInicializarMapa();
      }
    });
  }
  setInitialCoche() {
    var _a;
    if (!this.currentViajeData || this.vehiculosUsuario.length === 0)
      return;
    const idBuscado = this.currentViajeData.vehiculo || this.currentViajeData.vehiculo_id || ((_a = this.currentViajeData.coche) == null ? void 0 : _a.id);
    if (idBuscado) {
      const cocheEncontrado = this.vehiculosUsuario.find((v) => v.id === idBuscado);
      if (cocheEncontrado) {
        this.editableFields.coche = cocheEncontrado;
        this.nombreVehiculo = `${cocheEncontrado.marca} ${cocheEncontrado.modelo}`;
        this.currentViajeData.coche = cocheEncontrado;
      }
    }
  }
  /**
   * Función para confirmar el viaje.
   * Al confirmar mostramos un mensaje de confirmación para informar al usuario
   * Y a continuación se guardam los datos en BBDD.
   *
   * Una vez confirmado el mensaje, se reenvía a la ventana home.
   */
  confirmarViaje() {
    const esEdicion = this.ruta_navegacion_origen === "mis-viajes";
    const title = esEdicion ? "Actualizar Viaje" : "Confirmaci\xF3n de Viaje";
    const message = esEdicion ? "<p>Los cambios se han guardado correctamente y se ha notificado a tus acompa\xF1antes.</p>" : "<p>El viaje ha sido confirmado con \xE9xito.</p><p>Si quieres, puedes crear un viaje de vuelta tambi\xE9n.</p>";
    this.currentViajeData.usuario_id = this.userData.usuario.id;
    this.currentViajeData.plazas = Number(this.currentViajeData.plazas);
    this.currentViajeData.origen = this.origen || this.currentViajeData.origen;
    this.currentViajeData.destino = this.destino || this.currentViajeData.destino;
    if (this.editableFields.coche) {
      this.currentViajeData.coche = { id: this.editableFields.coche.id };
    } else if (this.currentViajeData.vehiculo && !this.currentViajeData.coche) {
      this.currentViajeData.coche = { id: this.currentViajeData.vehiculo };
    }
    if (isNaN(this.currentViajeData.plazas)) {
      this.openError("Error!", "El n\xFAmero de plazas no es v\xE1lido.");
      return;
    }
    this.currentViajeData.fecha_salida = this.formatearFechaLocal(this.currentViajeData.fecha_salida);
    const pregunta = esEdicion ? "\xBFDeseas guardar los cambios realizados?" : "\xBFDeseas confirmar el viaje?";
    const mensajeConfirmaci\u00F3n = this.openHelp(title, pregunta, true, false, false);
    mensajeConfirmaci\u00F3n.afterClosed().subscribe((res) => {
      if (res) {
        this.cargando_viaje = true;
        const peticion = esEdicion ? this.travelService.editarViaje(this.currentViajeData.id, this.currentViajeData) : this.travelService.guardarViaje(this.currentViajeData);
        peticion.subscribe({
          next: (response) => {
            this.cargando_viaje = false;
            localStorage.setItem("creacion_viaje_completado", "true");
            const modalExito = this.openHelp(title, message, true, false, !esEdicion);
            modalExito.afterClosed().subscribe(() => {
              this.navCtrl.navigateRoot(`/mis-viajes?id=${this.userData.usuario.id}`);
            });
          },
          error: (error) => {
            this.cargando_viaje = false;
            console.error("Error en la operaci\xF3n:", error);
            this.openError("Error!", "No se han podido procesar los datos del viaje.");
          }
        });
      }
    });
  }
  formatearFechaLocal(fecha) {
    if (!fecha)
      return "";
    if (typeof fecha === "string" && /^\d{2}-\d{2}-\d{4}$/.test(fecha)) {
      const [dia2, mes2, anio2] = fecha.split("-");
      return `${anio2}-${mes2}-${dia2}`;
    }
    if (typeof fecha === "string" && /^\d{4}-\d{2}-\d{2}/.test(fecha)) {
      return fecha.substring(0, 10);
    }
    const dateObj = new Date(fecha);
    const anio = dateObj.getFullYear();
    const mes = String(dateObj.getMonth() + 1).padStart(2, "0");
    const dia = String(dateObj.getDate()).padStart(2, "0");
    return `${anio}-${mes}-${dia}`;
  }
  sumarDuracion(horaInicio, sumarH, sumarM) {
    let [h, m] = horaInicio.split(":").map(Number);
    m += sumarM;
    h += Math.floor(m / 60);
    m = m % 60;
    h = (h + sumarH) % 24;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
  }
  /**
   * Calcula la duración entre la hora de salida y llegada.
   * @param fechaSalida Fecha del viaje en formato 'YYYY-MM-DD'
   * @param horaSalida Hora de salida en formato 'HH:mm'
   * @param horaLlegada Hora de llegada en formato 'HH:mm'
   * @returns Duración del viaje en formato 'HH:mm', o null si hay error.
   */
  calcularDuracionViaje(fechaSalida, horaSalida, horaLlegada) {
    try {
      if (!fechaSalida || !horaSalida || !horaLlegada)
        return null;
      const salida = /* @__PURE__ */ new Date(`${fechaSalida}T${horaSalida}`);
      let llegada = /* @__PURE__ */ new Date(`${fechaSalida}T${horaLlegada}`);
      if (llegada < salida) {
        llegada.setDate(llegada.getDate() + 1);
      }
      const diffMs = llegada.getTime() - salida.getTime();
      const diffMinutes = Math.floor(diffMs / 6e4);
      const hours = Math.floor(diffMinutes / 60);
      const minutes = diffMinutes % 60;
      return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    } catch (error) {
      console.error("Error al calcular duraci\xF3n del viaje:", error);
      return null;
    }
  }
  /**
   * Función para dar un formato específico a la fecha.
   */
  getFormattedDate() {
    if (this.currentViajeData.fecha_salida) {
      const date = new Date(this.currentViajeData.fecha_salida);
      return date.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      });
    }
    return "Ninguna fecha seleccionada.";
  }
  /**
   * Función que nos va a devolver a la pantalla de inicio del viaje
   */
  volverAInicioDelViaje() {
    const userId = this.userData.usuario.id;
    if (this.ruta_navegacion_origen === "mis-viajes") {
      this.navCtrl.navigateRoot(`/mis-viajes?id=${userId}`);
    } else {
      this.navCtrl.navigateRoot("/data-viaje");
    }
  }
  /**
   * Función para abrir la ventana emergente de ayuda
   * para informar al usuario.
   *
   * @param title Título que se va a mostrar en la ventana
   * @param message Mensaje que se va a mostrar en la ventana
   */
  openHelp(title, message, showAcceptButton, showMoreInfoButton, showReturnTripButton) {
    return this.dialog.open(HelpModalComponent, {
      data: { title, message, showAcceptButton, showMoreInfoButton, showReturnTripButton },
      disableClose: true
    });
  }
  /**
   * Función para abrir la ventana emergente de error
   * para informar al usuario.
   *
   * @param title Título que se va a mostrar en la ventana
   * @param message Mensaje que se va a mostrar en la ventana
   */
  openError(title, message) {
    return this.dialog.open(ModalErrorComponent, {
      data: { title, message },
      disableClose: true
    });
  }
  /**
   * Función para editar el input seleccionado.
   *
   * @param field Recibe los datos del input a editar
   */
  edicionInformacion(field) {
    if (this.editMode[field]) {
      if (field === "origen") {
        this.currentViajeData.origen = this.origen;
      } else if (field === "destino") {
        this.currentViajeData.destino = this.destino;
      } else if (field === "coche") {
        this.currentViajeData.vehiculo = this.editableFields.coche.id;
        this.nombreVehiculo = `${this.editableFields.coche.marca} ${this.editableFields.coche.modelo}`;
      } else {
        this.currentViajeData[field] = this.editableFields[field];
      }
      if (field === "origen" || field === "destino") {
        this.recalcularRuta();
      }
      this.travelService.setViajeData(this.currentViajeData);
    } else {
      if (field === "origen")
        this.origen = this.currentViajeData.origen;
      if (field === "destino")
        this.destino = this.currentViajeData.destino;
      this.editableFields[field] = this.currentViajeData[field];
    }
    this.editMode[field] = !this.editMode[field];
  }
  /**
   * Función para calcular la hora de llegada del viaje
   * @param hora_salida
   * @param duracion_viaje
   * @returns
   */
  calcularHoraLlegada(hora_salida, duracion_viaje) {
    var _a, _b;
    if (!hora_salida || !duracion_viaje)
      return ((_a = this.currentViajeData) == null ? void 0 : _a.hora_llegada) || "--:--";
    try {
      const [horasSalida, minutosSalida] = hora_salida.split(":").map(Number);
      const salidaDate = /* @__PURE__ */ new Date();
      salidaDate.setHours(horasSalida, minutosSalida, 0);
      const horasMatch = duracion_viaje.match(/(\d+)\s*h/);
      const minutosMatch = duracion_viaje.match(/(\d+)\s*min/);
      const horas = horasMatch ? parseInt(horasMatch[1]) : 0;
      const minutos = minutosMatch ? parseInt(minutosMatch[1]) : 0;
      const llegadaDate = new Date(salidaDate);
      llegadaDate.setHours(llegadaDate.getHours() + horas);
      llegadaDate.setMinutes(llegadaDate.getMinutes() + minutos);
      const resultado = llegadaDate.toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit"
      });
      this.currentViajeData.hora_llegada = resultado;
      this.currentViajeData.duracion_viaje = duracion_viaje;
      return resultado;
    } catch (error) {
      console.error("Error calculando hora:", error);
      return ((_b = this.currentViajeData) == null ? void 0 : _b.hora_llegada) || "--:--";
    }
  }
  /**
   * Función para recalcular la ruta si se modifica
   */
  recalcularRuta() {
    if (!this.currentViajeData.origen || !this.currentViajeData.destino)
      return;
    const directionsService = new google.maps.DirectionsService();
    directionsService.route({
      origin: this.currentViajeData.origen,
      destination: this.currentViajeData.destino,
      travelMode: google.maps.TravelMode.DRIVING
    }, (result, status) => {
      var _a, _b, _c;
      if (status === google.maps.DirectionsStatus.OK && result) {
        const duracionTexto = ((_c = (_b = (_a = result.routes[0]) == null ? void 0 : _a.legs[0]) == null ? void 0 : _b.duration) == null ? void 0 : _c.text) || "No especificado";
        this.currentViajeData.ruta_seleccionada = __spreadProps(__spreadValues({}, result), {
          tiempoTotal: duracionTexto
        });
        if (this.directionsRenderer) {
          this.directionsRenderer.setDirections(result);
        }
        this.calcularHoraLlegada(this.currentViajeData.hora_salida, duracionTexto);
      } else {
        this.currentViajeData.ruta_seleccionada = { routes: [], tiempoTotal: "No especificado" };
        console.error("Error al recalcular ruta:", status);
      }
    });
  }
  /**
   * Función para guardar la información de la localidad de origen seleccionada.
   *
   * @param localidad -> Recibe la localidad seleccionada en la lista de sugerencias.
   */
  seleccionarLocalidadOrigen(localidad) {
    this.origen = localidad.display_name.split(",")[0].trim();
    this.currentViajeData.origen = this.origen;
    this.travelService.setViajeData(this.currentViajeData);
    this.funcionesComunes.sugerenciasOrigen = [];
  }
  /**
   * Función para guardar la información de la localidad de destino seleccionada.
   *
   * @param localidad -> Recibe la localidad seleccionada en la lista de sugerencias.
   */
  seleccionarLocalidadDestino(localidad) {
    this.destino = localidad.display_name.split(",")[0].trim();
    this.currentViajeData.destino = this.destino;
    this.travelService.setViajeData(this.currentViajeData);
    this.funcionesComunes.sugerenciasDestino = [];
  }
  /**
   * Función para actualizar la información del viaje desde el servicio.
   * Se suscribe a los cambios en los datos del viaje y actualiza las variables locales.
   */
  actualizarInformacion() {
    this.travelService.viajeData$.pipe(takeUntil(this.destroy$)).subscribe((viajeData) => {
      var _a, _b, _c, _d;
      if (viajeData) {
        this.currentViajeData = __spreadValues({}, viajeData);
        this.origen = ((_a = this.currentViajeData) == null ? void 0 : _a.origen) || "";
        this.destino = ((_b = this.currentViajeData) == null ? void 0 : _b.destino) || "";
        this.editableFields.precio_viaje = ((_c = this.currentViajeData) == null ? void 0 : _c.precio_viaje) || 0;
        if (((_d = this.currentViajeData) == null ? void 0 : _d.coche) && this.vehiculosUsuario.length > 0) {
          this.setInitialCoche();
        }
      }
    });
  }
  /**
   * Función para obtener el vehículo seleccionado por su ID.
   * Utiliza el servicio de vehículos para obtener los detalles del vehículo
   * @param vehiculo_id recibe el ID del vehículo seleccionado
   * @returns devuelve un Observable con el nombre del vehículo en formato "Marca Modelo"
   * Si ocurre un error, devuelve un Observable con el mensaje "Vehículo no encontrado"
   */
  obtenerVehiculo(vehiculo_id) {
    return this.vehiculosService.obtenerVehiculoID(vehiculo_id).pipe(map((vehiculo) => `${vehiculo.marca} ${vehiculo.modelo}`), catchError((err) => {
      console.error("Error al obtener veh\xEDculo:", err);
      return of("Veh\xEDculo no encontrado");
    }));
  }
  /**
   * Función para obtener los vehículos del usuario logado.
   * @param usuario_id --> ID del usuario logado
   * @returns --> Devuelve la lista de vehículos del usuario
   */
  obtenerVehiculosUsuario(usuario_id) {
    this.vehiculosService.obtenerVehiculosUsuario(usuario_id).subscribe((res) => {
      this.vehiculosUsuario = Array.isArray(res) ? res : res.vehiculos || [];
      this.setInitialCoche();
    });
  }
  /**
   * Función para conocer el vehículo seleccionado para el viaje
   */
  compareVehiculos(c1, c2) {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  static \u0275fac = function ResumenViajeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResumenViajeComponent)(\u0275\u0275directiveInject(TravelService), \u0275\u0275directiveInject(VehiculosServicesService), \u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(FuncionesComunes), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResumenViajeComponent, selectors: [["app-resumen-viaje"]], viewQuery: function ResumenViajeComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mapElement = _t.first);
    }
  }, decls: 139, vars: 44, consts: [["mapResumen", ""], ["horaEstatica", ""], [3, "backRoute", "searchRoute", "isLoggedIn"], [1, "ion-padding", 3, "fullscreen"], [1, "main-wrapper", "animate__animated", "animate__fadeIn"], [1, "summary-container"], [1, "text-center", "mb-4"], [1, "title-main"], [1, "subtitle-main"], [1, "row", "g-4"], [1, "col-12", "col-lg-7"], [1, "glass-card", "main-route-card"], [1, "card-section-title"], [1, "route-timeline"], [1, "timeline-item"], [1, "timeline-icon", "origin"], [1, "fi", "fi-rr-marker"], [1, "timeline-content"], [1, "data-row"], [4, "ngIf"], ["class", "form-control custom-input", 3, "ngModel", "ngModelChange", "input", 4, "ngIf"], ["class", "suggestions-list", 4, "ngIf"], [1, "timeline-icon", "destination"], [1, "fi", "fi-rr-flag-checkered"], [1, "map-wrapper-new", "mt-4"], ["id", "mapResumen", 1, "map-canvas", 3, "hidden"], ["class", "map-placeholder", "src", "assets/imgs/travel_1.jpg", 4, "ngIf"], [1, "col-12", "col-lg-5"], [1, "glass-card", "settings-card"], [1, "settings-grid"], [1, "setting-item"], [1, "icon-box"], [1, "fi", "fi-rr-car-rear"], [1, "setting-info"], [1, "d-flex", "align-items-center"], ["class", "form-select custom-select-pride", 3, "ngModel", "compareWith", "ngModelChange", 4, "ngIf"], [1, "btn-edit-sm", 3, "click"], [1, "fi", "fi-rr-clock"], ["type", "date", "class", "mt-2 form-control-sm", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, ""], ["type", "time", "class", "mt-2 form-control-sm", 3, "ngModel", "ngModelChange", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "fi", "fi-rs-users"], ["class", "data-val", 4, "ngIf"], ["class", "form-select custom-select-pride", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "fi", "fi-rr-shield-check"], ["class", "badge-reserva", 3, "auto", 4, "ngIf"], [1, "price-section", "mt-4"], [1, "price-content"], [1, "price-label"], ["class", "price-value", 4, "ngIf"], ["type", "number", "class", "input-price-edit", "placeholder", "0", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "btn-edit-price", 3, "click"], [1, "actions-footer", "mt-5"], [1, "info-note", "mb-4", 3, "ngClass"], [1, "fi", 3, "ngClass"], [1, "d-flex", "justify-content-center", "gap-3", "pb-5"], ["mat-button", "", 1, "btn-secondary-custom", 3, "click"], [1, "fi", "fi-rr-arrow-small-left"], ["mat-raised-button", "", 1, "btn-primary-custom", 3, "click"], [1, "form-control", "custom-input", 3, "ngModelChange", "input", "ngModel"], [1, "suggestions-list"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["src", "assets/imgs/travel_1.jpg", 1, "map-placeholder"], [1, "form-select", "custom-select-pride", 3, "ngModelChange", "ngModel", "compareWith"], ["disabled", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["type", "date", 1, "mt-2", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "time", 1, "mt-2", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "data-val"], [1, "form-select", "custom-select-pride", 3, "ngModelChange", "ngModel"], [1, "badge-reserva"], [1, "price-value"], ["type", "number", "placeholder", "0", 1, "input-price-edit", 3, "ngModelChange", "ngModel"]], template: function ResumenViajeComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "app-navbar", 2);
      \u0275\u0275elementStart(1, "ion-content", 3)(2, "div", 4)(3, "div", 5)(4, "header", 6)(5, "h1", 7);
      \u0275\u0275text(6, "Resumen de tu Viaje");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 8);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "div", 12);
      \u0275\u0275text(13, "ITINERARIO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 13)(15, "div", 14)(16, "div", 15);
      \u0275\u0275element(17, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 17)(19, "label");
      \u0275\u0275text(20, "Punto de Salida");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 18);
      \u0275\u0275template(22, ResumenViajeComponent_h3_22_Template, 2, 1, "h3", 19)(23, ResumenViajeComponent_input_23_Template, 1, 1, "input", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, ResumenViajeComponent_ul_24_Template, 2, 1, "ul", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 14)(26, "div", 22);
      \u0275\u0275element(27, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17)(29, "label");
      \u0275\u0275text(30, "Destino Final");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 18);
      \u0275\u0275template(32, ResumenViajeComponent_h3_32_Template, 2, 1, "h3", 19)(33, ResumenViajeComponent_input_33_Template, 1, 1, "input", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(34, ResumenViajeComponent_ul_34_Template, 2, 1, "ul", 21);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 24);
      \u0275\u0275element(36, "div", 25, 0);
      \u0275\u0275template(38, ResumenViajeComponent_img_38_Template, 1, 0, "img", 26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "div", 27)(40, "div", 28)(41, "div", 12);
      \u0275\u0275text(42, "CONFIGURACI\xD3N DEL VIAJE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 29)(44, "div", 30)(45, "div", 31);
      \u0275\u0275element(46, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 33)(48, "label");
      \u0275\u0275text(49, "Veh\xEDculo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 34);
      \u0275\u0275template(51, ResumenViajeComponent_span_51_Template, 2, 1, "span", 19)(52, ResumenViajeComponent_select_52_Template, 4, 4, "select", 35);
      \u0275\u0275elementStart(53, "button", 36);
      \u0275\u0275listener("click", function ResumenViajeComponent_Template_button_click_53_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.edicionInformacion("coche"));
      });
      \u0275\u0275elementStart(54, "mat-icon");
      \u0275\u0275text(55);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(56, "div", 30)(57, "div", 31);
      \u0275\u0275element(58, "i", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 33)(60, "label");
      \u0275\u0275text(61, "Fecha salida");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 34)(63, "div")(64, "span");
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "date");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "button", 36);
      \u0275\u0275listener("click", function ResumenViajeComponent_Template_button_click_67_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.edicionInformacion("fecha_salida"));
      });
      \u0275\u0275elementStart(68, "mat-icon");
      \u0275\u0275text(69);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(70, ResumenViajeComponent_input_70_Template, 1, 1, "input", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 30)(72, "div", 31);
      \u0275\u0275element(73, "i", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 33)(75, "label");
      \u0275\u0275text(76, "Hora salida");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 34)(78, "div")(79, "span", 39);
      \u0275\u0275text(80);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "button", 36);
      \u0275\u0275listener("click", function ResumenViajeComponent_Template_button_click_81_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.edicionInformacion("hora_salida"));
      });
      \u0275\u0275elementStart(82, "mat-icon");
      \u0275\u0275text(83);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(84, ResumenViajeComponent_input_84_Template, 1, 1, "input", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "span")(86, "div", 31);
      \u0275\u0275element(87, "i", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275text(88, " Llegada: ");
      \u0275\u0275template(89, ResumenViajeComponent_ng_container_89_Template, 2, 1, "ng-container", 41)(90, ResumenViajeComponent_ng_template_90_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "div", 30)(93, "div", 31);
      \u0275\u0275element(94, "i", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "div", 33)(96, "label");
      \u0275\u0275text(97, "Plazas Disponibles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "div", 34);
      \u0275\u0275template(99, ResumenViajeComponent_span_99_Template, 2, 1, "span", 43)(100, ResumenViajeComponent_select_100_Template, 9, 5, "select", 44);
      \u0275\u0275elementStart(101, "button", 36);
      \u0275\u0275listener("click", function ResumenViajeComponent_Template_button_click_101_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.edicionInformacion("plazas"));
      });
      \u0275\u0275elementStart(102, "mat-icon");
      \u0275\u0275text(103);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(104, "div", 30)(105, "div", 31);
      \u0275\u0275element(106, "i", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "div", 33)(108, "label");
      \u0275\u0275text(109, "Modo de Reserva");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div", 34);
      \u0275\u0275template(111, ResumenViajeComponent_span_111_Template, 2, 3, "span", 46)(112, ResumenViajeComponent_select_112_Template, 5, 3, "select", 44);
      \u0275\u0275elementStart(113, "button", 36);
      \u0275\u0275listener("click", function ResumenViajeComponent_Template_button_click_113_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.edicionInformacion("reserva_automatica"));
      });
      \u0275\u0275elementStart(114, "mat-icon");
      \u0275\u0275text(115);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(116, "div", 47)(117, "div", 48)(118, "div", 49);
      \u0275\u0275text(119, "Aportaci\xF3n por pasajero");
      \u0275\u0275elementEnd();
      \u0275\u0275template(120, ResumenViajeComponent_div_120_Template, 4, 1, "div", 50)(121, ResumenViajeComponent_input_121_Template, 1, 1, "input", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "button", 52);
      \u0275\u0275listener("click", function ResumenViajeComponent_Template_button_click_122_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.edicionInformacion("precio_viaje"));
      });
      \u0275\u0275elementStart(123, "mat-icon");
      \u0275\u0275text(124);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(125, "div", 53)(126, "div", 54);
      \u0275\u0275element(127, "i", 55);
      \u0275\u0275template(128, ResumenViajeComponent_p_128_Template, 2, 0, "p", 19)(129, ResumenViajeComponent_p_129_Template, 2, 0, "p", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "div", 56)(131, "button", 57);
      \u0275\u0275listener("click", function ResumenViajeComponent_Template_button_click_131_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.volverAInicioDelViaje());
      });
      \u0275\u0275element(132, "i", 58);
      \u0275\u0275text(133);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "button", 59);
      \u0275\u0275listener("click", function ResumenViajeComponent_Template_button_click_134_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.confirmarViaje());
      });
      \u0275\u0275elementStart(135, "span");
      \u0275\u0275text(136);
      \u0275\u0275elementEnd();
      \u0275\u0275element(137, "i", 55);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(138, ResumenViajeComponent_app_spinner_138_Template, 1, 0, "app-spinner", 19);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const horaEstatica_r17 = \u0275\u0275reference(91);
      \u0275\u0275property("backRoute", "/home")("searchRoute", "search")("isLoggedIn", ctx.userLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" Revisa los detalles antes de ", ctx.ruta_navegacion_origen === "mis-viajes" ? "guardar los cambios" : "confirmar", " ");
      \u0275\u0275advance(14);
      \u0275\u0275property("ngIf", !ctx.editMode.origen);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.editMode.origen);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.funcionesComunes.sugerenciasOrigen.length > 0);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", !ctx.editMode.destino);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.editMode.destino);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.funcionesComunes.sugerenciasDestino.length > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("hidden", !(ctx.currentViajeData == null ? null : ctx.currentViajeData.ruta_seleccionada));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !(ctx.currentViajeData == null ? null : ctx.currentViajeData.ruta_seleccionada));
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", !ctx.editMode.coche);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.editMode.coche);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.editMode.coche ? "done" : "edit");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 41, ctx.formatearFechaLocal(ctx.currentViajeData == null ? null : ctx.currentViajeData.fecha_salida), "dd/MM/yyyy"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.editMode.fecha_salida ? "done" : "edit");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.editMode.fecha_salida);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.currentViajeData == null ? null : ctx.currentViajeData.hora_salida);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.editMode.hora_salida ? "done" : "edit");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.editMode.hora_salida);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.currentViajeData == null ? null : ctx.currentViajeData.ruta_seleccionada == null ? null : ctx.currentViajeData.ruta_seleccionada.routes == null ? null : ctx.currentViajeData.ruta_seleccionada.routes[0])("ngIfElse", horaEstatica_r17);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", !ctx.editMode.plazas);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.editMode.plazas);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.editMode.plazas ? "done" : "edit");
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", !ctx.editMode.reserva_automatica);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.editMode.reserva_automatica);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.editMode.reserva_automatica ? "done" : "edit");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", !ctx.editMode.precio_viaje);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.editMode.precio_viaje);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.editMode.precio_viaje ? "save" : "edit");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.ruta_navegacion_origen === "mis-viajes" ? "edit-note" : "create-note");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.ruta_navegacion_origen === "mis-viajes" ? "fi-rr-edit" : "fi-rr-info");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.ruta_navegacion_origen === "mis-viajes");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.ruta_navegacion_origen !== "mis-viajes");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.ruta_navegacion_origen === "mis-viajes" ? "Cancelar edici\xF3n" : "Atr\xE1s", " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.ruta_navegacion_origen === "mis-viajes" ? "Guardar cambios" : "Confirmar viaje", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.ruta_navegacion_origen === "mis-viajes" ? "fi-rr-disk" : "fi-rr-check");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.cargando_viaje);
    }
  }, dependencies: [
    IonicModule,
    IonContent,
    MatIcon,
    MatCardModule,
    MatDatepickerModule,
    FormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgModel,
    NavbarComponent,
    MatButtonModule,
    MatButton,
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    TranslateModule,
    SpinnerComponent,
    DatePipe
  ], styles: ['@charset "UTF-8";\n\n\n\n.summary-container[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.title-main[_ngcontent-%COMP%] {\n  font-weight: 900;\n  color: #333;\n  font-size: 1.8rem;\n}\n.subtitle-main[_ngcontent-%COMP%] {\n  color: #999;\n  margin-top: -5px;\n}\n.glass-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 35px;\n  padding: 30px;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);\n  border: 1px solid rgba(179, 181, 230, 0.2);\n  height: 100%;\n}\n.card-section-title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 800;\n  letter-spacing: 2px;\n  color: #b3b5e6;\n  margin-bottom: 25px;\n}\n.route-timeline[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 20px;\n}\n.route-timeline[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 39px;\n  top: 40px;\n  bottom: 40px;\n  width: 2px;\n  background:\n    repeating-linear-gradient(\n      to bottom,\n      #b3b5e6 0,\n      #b3b5e6 5px,\n      transparent 5px,\n      transparent 10px);\n}\n.route-timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 30px;\n  position: relative;\n}\n.route-timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f0f0f0;\n  color: #666;\n  z-index: 2;\n}\n.route-timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-icon.origin[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #2196f3;\n}\n.route-timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-icon.destination[_ngcontent-%COMP%] {\n  background: #b3b5e6;\n  color: black;\n}\n.route-timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.route-timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #aaa;\n  text-transform: uppercase;\n}\n.route-timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #333;\n}\n.data-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.settings-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.settings-grid[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  align-items: center;\n}\n.settings-grid[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  background: #f8f9ff;\n  border-radius: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #b3b5e6;\n  font-size: 1.2rem;\n}\n.settings-grid[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]   .setting-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.settings-grid[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]   .setting-info[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #999;\n}\n.settings-grid[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]   .setting-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #444;\n  display: flex;\n  align-items: center;\n}\n.settings-grid[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]   .setting-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  background: #f8f9ff;\n  border-radius: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #b3b5e6;\n  font-size: 1.2rem;\n}\n.price-section[_ngcontent-%COMP%] {\n  background: #b3b5e6;\n  border-radius: 25px;\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: black;\n}\n.price-section[_ngcontent-%COMP%]   .price-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  opacity: 0.9;\n}\n.price-section[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 900;\n}\n.price-section[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-left: 4px;\n}\n.btn-edit-sm[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #b3b5e6;\n  border: none;\n  margin-left: 10px;\n}\n.btn-edit-sm[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn-primary-custom[_ngcontent-%COMP%] {\n  background: #b3b5e6 !important;\n  color: black !important;\n  border-radius: 35px !important;\n  padding: 12px 30px !important;\n  font-weight: 700 !important;\n  box-shadow: 0 10px 20px rgba(123, 97, 255, 0.3) !important;\n}\n.btn-secondary-custom[_ngcontent-%COMP%] {\n  border-radius: 35px !important;\n  color: #666 !important;\n  font-weight: 700 !important;\n}\n.map-wrapper-new[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  overflow: hidden;\n  height: 250px;\n  border: 4px solid #f8f9ff;\n}\n.map-wrapper-new[_ngcontent-%COMP%]   .map-canvas[_ngcontent-%COMP%], \n.map-wrapper-new[_ngcontent-%COMP%]   .map-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.info-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 20px;\n  border-radius: 20px;\n  background: #f8f9ff;\n  border: 1px solid #e0e4ff;\n}\n.info-note[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #b3b5e6;\n}\n.info-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #555;\n  line-height: 1.4;\n}\n.info-note.edit-note[_ngcontent-%COMP%] {\n  background: #fffdf0;\n  border-color: #f0d7b4;\n}\n.info-note.edit-note[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #d4a373;\n}\n.btn-primary-custom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn-primary-custom[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.custom-input[_ngcontent-%COMP%], \n.form-select.custom-select-pride[_ngcontent-%COMP%], \n.form-control-sm[_ngcontent-%COMP%], \n.input-viaje[_ngcontent-%COMP%], \nselect.form-select[_ngcontent-%COMP%] {\n  border-radius: 35px !important;\n  border: 1px solid #e0e4ff !important;\n  padding: 8px 20px !important;\n  font-size: 0.9rem !important;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05) !important;\n  height: auto !important;\n  background-color: #fdfdfd !important;\n  transition: all 0.3s ease;\n}\n.custom-input[_ngcontent-%COMP%]:focus, \n.form-select.custom-select-pride[_ngcontent-%COMP%]:focus, \n.form-control-sm[_ngcontent-%COMP%]:focus, \n.input-viaje[_ngcontent-%COMP%]:focus, \nselect.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #b3b5e6 !important;\n  box-shadow: 0 4px 12px rgba(123, 97, 255, 0.15) !important;\n  outline: none;\n}\n.badge-reserva[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n  border-radius: 35px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  background: #eee;\n  color: #666;\n}\n.badge-reserva.auto[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.map-wrapper-new[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 100%;\n  border-radius: 35px;\n  overflow: hidden;\n  display: block !important;\n}\nbutton[_ngcontent-%COMP%], \n.btn-primary-custom[_ngcontent-%COMP%], \n.btn-secondary-custom[_ngcontent-%COMP%], \n.btn-edit-sm[_ngcontent-%COMP%], \n.btn-edit[_ngcontent-%COMP%], \n.btn-edit-price[_ngcontent-%COMP%] {\n  border-radius: 35px !important;\n  transition: all 0.3s ease-in-out !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\nbutton[_ngcontent-%COMP%]:hover, \n.btn-primary-custom[_ngcontent-%COMP%]:hover, \n.btn-secondary-custom[_ngcontent-%COMP%]:hover, \n.btn-edit-sm[_ngcontent-%COMP%]:hover, \n.btn-edit[_ngcontent-%COMP%]:hover, \n.btn-edit-price[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  filter: brightness(1.1);\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15) !important;\n}\nbutton[_ngcontent-%COMP%]:active, \n.btn-primary-custom[_ngcontent-%COMP%]:active, \n.btn-secondary-custom[_ngcontent-%COMP%]:active, \n.btn-edit-sm[_ngcontent-%COMP%]:active, \n.btn-edit[_ngcontent-%COMP%]:active, \n.btn-edit-price[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.btn-edit-sm[_ngcontent-%COMP%], \n.btn-edit[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  min-width: 35px;\n  background: #f0f0ff;\n  color: #7B61FF;\n  border: none;\n}\n.btn-edit-sm[_ngcontent-%COMP%]:hover, \n.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #b3b5e6;\n  color: black;\n}\n.custom-select-pride[_ngcontent-%COMP%] {\n  border-radius: 35px !important;\n  border: 1px solid #e0e4ff !important;\n  padding: 5px 15px !important;\n  font-size: 0.85rem;\n  background-color: white;\n  cursor: pointer;\n  outline: none;\n}\n.custom-select-pride[_ngcontent-%COMP%]:focus {\n  border-color: #b3b5e6;\n  box-shadow: 0 0 0 3px rgba(123, 97, 255, 0.1);\n}\n.input-price-edit[_ngcontent-%COMP%] {\n  border-radius: 35px !important;\n  border: 2px solid #fff !important;\n  padding: 5px 15px !important;\n  width: 100px !important;\n  font-size: 1.2rem !important;\n  font-weight: 700 !important;\n  text-align: center !important;\n  color: #333 !important;\n  background-color: white !important;\n  outline: none !important;\n  margin-top: 5px;\n}\n.input-price-edit[_ngcontent-%COMP%]::-webkit-inner-spin-button, \n.input-price-edit[_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.price-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.btn-edit-price[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  border-radius: 35px !important;\n  width: 45px;\n  height: 45px;\n  border: none;\n  transition: all 0.3s ease;\n}\n.btn-edit-price[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #b3b5e6;\n  transform: scale(1.1);\n}\n@media (max-width: 768px) {\n  .glass-card[_ngcontent-%COMP%] {\n    padding: 20px;\n    border-radius: 25px;\n  }\n  .price-value[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=resumen-viaje.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResumenViajeComponent, [{
    type: Component,
    args: [{ selector: "app-resumen-viaje", standalone: true, imports: [
      IonicModule,
      MatIcon,
      MatCardModule,
      MatDatepickerModule,
      FormsModule,
      NavbarComponent,
      MatButtonModule,
      CommonModule,
      TranslateModule,
      SpinnerComponent
    ], template: `<app-navbar
  [backRoute]="'/home'"
  [searchRoute]="'search'"
  [isLoggedIn]="userLoggedIn"
></app-navbar>

<ion-content
  [fullscreen]="true"
  class="ion-padding"
>
  <div class="main-wrapper animate__animated animate__fadeIn">
    <div class="summary-container">
      <header class="text-center mb-4">
        <h1 class="title-main">Resumen de tu Viaje</h1>
        <p class="subtitle-main">
          Revisa los detalles antes de {{ ruta_navegacion_origen === 'mis-viajes' ? 'guardar los cambios' : 'confirmar' }}
        </p>
      </header>

      <div class="row g-4">
        <!-- COLUMNA IZQUIERDA: RUTA Y MAPA -->
        <div class="col-12 col-lg-7">
          <div class="glass-card main-route-card">
            <div class="card-section-title">ITINERARIO</div>

            <!-- Timeline de Ruta -->
            <div class="route-timeline">
              <!-- ORIGEN -->
              <div class="timeline-item">
                <div class="timeline-icon origin"><i class="fi fi-rr-marker"></i></div>
                <div class="timeline-content">
                  <label>Punto de Salida</label>
                  <div class="data-row">
                    <h3 *ngIf="!editMode.origen">{{ currentViajeData?.origen }}</h3>
                    <input
                      *ngIf="editMode.origen"
                      [(ngModel)]="origen"
                      (input)="funcionesComunes.obtenerSugerenciasOrigen($event)"
                      class="form-control custom-input"
                    />
                  </div>
                  <!-- Sugerencias Origen -->
                  <ul
                    *ngIf="funcionesComunes.sugerenciasOrigen.length > 0"
                    class="suggestions-list"
                  >
                    <li
                      *ngFor="let sug of funcionesComunes.sugerenciasOrigen"
                      (click)="seleccionarLocalidadOrigen(sug)"
                    >
                      {{ sug.display_name }}
                    </li>
                  </ul>
                </div>
              </div>

              <!-- DESTINO -->
              <div class="timeline-item">
                <div class="timeline-icon destination"><i class="fi fi-rr-flag-checkered"></i></div>
                <div class="timeline-content">
                  <label>Destino Final</label>
                  <div class="data-row">
                    <h3 *ngIf="!editMode.destino">{{ currentViajeData?.destino }}</h3>
                    <input
                      *ngIf="editMode.destino"
                      [(ngModel)]="destino"
                      (input)="funcionesComunes.obtenerSugerenciasDestino($event)"
                      class="form-control custom-input"
                    />
                  </div>
                  <!-- Sugerencias Destino -->
                  <ul
                    *ngIf="funcionesComunes.sugerenciasDestino.length > 0"
                    class="suggestions-list"
                  >
                    <li
                      *ngFor="let sug of funcionesComunes.sugerenciasDestino"
                      (click)="seleccionarLocalidadDestino(sug)"
                    >
                      {{ sug.display_name }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- MAPA INTEGRADO -->
            <div class="map-wrapper-new mt-4">
              <div
                #mapResumen
                id="mapResumen"
                class="map-canvas"
                [hidden]="!currentViajeData?.ruta_seleccionada"
              ></div>
              <img
                *ngIf="!currentViajeData?.ruta_seleccionada"
                class="map-placeholder"
                src="assets/imgs/travel_1.jpg"
              />
            </div>
          </div>
        </div>

        <!-- COLUMNA DERECHA: AJUSTES Y PRECIO -->
        <div class="col-12 col-lg-5">
          <div class="glass-card settings-card">
            <div class="card-section-title">CONFIGURACI\xD3N DEL VIAJE</div>

            <div class="settings-grid">
              <!-- VEH\xCDCULO -->
              <div class="setting-item">
                <div class="icon-box"><i class="fi fi-rr-car-rear"></i></div>
                <div class="setting-info">
                  <label>Veh\xEDculo</label>
                  <div class="d-flex align-items-center">
                    <span *ngIf="!editMode.coche">{{ nombreVehiculo || 'No seleccionado' }}</span>
                    <select
                      *ngIf="editMode.coche"
                      class="form-select custom-select-pride"
                      [(ngModel)]="editableFields.coche"
                      [compareWith]="compareVehiculos"
                    >
                      <option
                        [ngValue]="null"
                        disabled
                      >
                        Selecciona un veh\xEDculo
                      </option>
                      <option
                        *ngFor="let coche of vehiculosUsuario"
                        [ngValue]="coche"
                      >
                        {{ coche.marca }} {{ coche.modelo }} ({{ coche.matricula }})
                      </option>
                    </select>
                    <button
                      class="btn-edit-sm"
                      (click)="edicionInformacion('coche')"
                    >
                      <mat-icon>{{ editMode.coche ? 'done' : 'edit' }}</mat-icon>
                    </button>
                  </div>
                </div>
              </div>
              <!-- Fecha salida -->
              <div class="setting-item">
                <div class="icon-box"><i class="fi fi-rr-clock"></i></div>
                <div class="setting-info">
                  <label>Fecha salida</label>
                  <div class="d-flex align-items-center">
                    <div>
                      <span>{{ formatearFechaLocal(currentViajeData?.fecha_salida) | date:'dd/MM/yyyy'}}</span>
                    </div>
                    <button
                      class="btn-edit-sm"
                      (click)="edicionInformacion('fecha_salida')"
                    >
                      <mat-icon>{{ editMode.fecha_salida ? 'done' : 'edit' }}</mat-icon>
                    </button>
                  </div>
                  <input
                    type="date"
                    [(ngModel)]="editableFields.fecha_salida"
                    *ngIf="editMode.fecha_salida"
                    class="mt-2 form-control-sm"
                  />
                </div>
              </div>

              <!-- HORARIOS -->
              <div class="setting-item">
                <div class="icon-box"><i class="fi fi-rr-clock"></i></div>
                <div class="setting-info">
                  <label>Hora salida</label>
                  <div class="d-flex align-items-center">
                    <div>
                      <span class="">{{ currentViajeData?.hora_salida }}</span>
                    </div>
                    <button
                      class="btn-edit-sm"
                      (click)="edicionInformacion('hora_salida')"
                    >
                      <mat-icon>{{ editMode.hora_salida ? 'done' : 'edit' }}</mat-icon>
                    </button>
                  </div>
                  <input
                    type="time"
                    [(ngModel)]="editableFields.hora_salida"
                    *ngIf="editMode.hora_salida"
                    class="mt-2 form-control-sm"
                  />
                </div>
                <span>
                  <div class="icon-box"><i class="fi fi-rr-clock"></i></div>
                  Llegada:
                  <ng-container *ngIf="currentViajeData?.ruta_seleccionada?.routes?.[0] as mainRoute; else horaEstatica">
                    {{ calcularHoraLlegada(currentViajeData.hora_salida, mainRoute.legs[0].duration.text) }}
                  </ng-container>

                  <ng-template #horaEstatica>
                    {{ currentViajeData?.hora_llegada || '--:--' }}
                  </ng-template>
                </span>
              </div>

              <!-- PLAZAS -->
              <div class="setting-item">
                <div class="icon-box"><i class="fi fi-rs-users"></i></div>
                <div class="setting-info">
                  <label>Plazas Disponibles</label>
                  <div class="d-flex align-items-center">
                    <span
                      class="data-val"
                      *ngIf="!editMode.plazas"
                    >
                      {{ currentViajeData?.plazas }} asientos
                    </span>

                    <select
                      *ngIf="editMode.plazas"
                      [(ngModel)]="editableFields.plazas"
                      class="form-select custom-select-pride"
                    >
                      <option [ngValue]="1">1 plaza</option>
                      <option [ngValue]="2">2 plazas</option>
                      <option [ngValue]="3">3 plazas</option>
                      <option [ngValue]="4">4 plazas</option>
                    </select>

                    <button
                      class="btn-edit-sm"
                      (click)="edicionInformacion('plazas')"
                    >
                      <mat-icon>{{ editMode.plazas ? 'done' : 'edit' }}</mat-icon>
                    </button>
                  </div>
                </div>
              </div>

              <!-- RESERVA -->
              <div class="setting-item">
                <div class="icon-box"><i class="fi fi-rr-shield-check"></i></div>
                <div class="setting-info">
                  <label>Modo de Reserva</label>
                  <div class="d-flex align-items-center">
                    <span
                      class="badge-reserva"
                      *ngIf="!editMode.reserva_automatica"
                      [class.auto]="currentViajeData?.reserva_automatica"
                    >
                      {{ currentViajeData?.reserva_automatica ? 'Autom\xE1tica' : 'Manual' }}
                    </span>

                    <select
                      *ngIf="editMode.reserva_automatica"
                      class="form-select custom-select-pride"
                      [(ngModel)]="editableFields.reserva_automatica"
                    >
                      <option [ngValue]="true">Autom\xE1tica</option>
                      <option [ngValue]="false">Manual</option>
                    </select>

                    <button
                      class="btn-edit-sm"
                      (click)="edicionInformacion('reserva_automatica')"
                    >
                      <mat-icon>{{ editMode.reserva_automatica ? 'done' : 'edit' }}</mat-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- PRECIO DESTACADO -->
            <div class="price-section mt-4">
              <div class="price-content">
                <div class="price-label">Aportaci\xF3n por pasajero</div>

                <div
                  class="price-value"
                  *ngIf="!editMode.precio_viaje"
                >
                  {{ currentViajeData?.precio_viaje }}
                  <span>\u20AC</span>
                </div>

                <input
                  *ngIf="editMode.precio_viaje"
                  type="number"
                  [(ngModel)]="editableFields.precio_viaje"
                  class="input-price-edit"
                  placeholder="0"
                />
              </div>

              <button
                class="btn-edit-price"
                (click)="edicionInformacion('precio_viaje')"
              >
                <mat-icon>{{ editMode.precio_viaje ? 'save' : 'edit' }}</mat-icon>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- ACCIONES FINALES -->
      <div class="actions-footer mt-5">
        <!-- Bloque de nota informativa -->
        <div
          class="info-note mb-4"
          [ngClass]="ruta_navegacion_origen === 'mis-viajes' ? 'edit-note' : 'create-note'"
        >
          <i
            class="fi"
            [ngClass]="ruta_navegacion_origen === 'mis-viajes' ? 'fi-rr-edit' : 'fi-rr-info'"
          ></i>

          <!-- Mensaje para EDICI\xD3N -->
          <p *ngIf="ruta_navegacion_origen === 'mis-viajes'">
            Est\xE1s editando un viaje existente. Revisa que los nuevos datos sean correctos. Al confirmar, se actualizar\xE1 la informaci\xF3n para
            todos los pasajeros.
          </p>

          <!-- Mensaje para CREACI\xD3N -->
          <p *ngIf="ruta_navegacion_origen !== 'mis-viajes'">
            Si est\xE1s de acuerdo con el viaje que vas a realizar, conf\xEDrmalo. En caso contrario, puedes volver atr\xE1s para modificar los
            par\xE1metros.
          </p>
        </div>

        <!-- Botonera -->
        <div class="d-flex justify-content-center gap-3 pb-5">
          <!-- Bot\xF3n Atr\xE1s / Cancelar -->
          <button
            mat-button
            class="btn-secondary-custom"
            (click)="volverAInicioDelViaje()"
          >
            <i class="fi fi-rr-arrow-small-left"></i>
            {{ ruta_navegacion_origen === 'mis-viajes' ? 'Cancelar edici\xF3n' : 'Atr\xE1s' }}
          </button>

          <!-- Bot\xF3n Confirmar / Guardar -->
          <button
            mat-raised-button
            class="btn-primary-custom"
            (click)="confirmarViaje()"
          >
            <span>
              {{ ruta_navegacion_origen === 'mis-viajes' ? 'Guardar cambios' : 'Confirmar viaje' }}
            </span>
            <i
              class="fi"
              [ngClass]="ruta_navegacion_origen === 'mis-viajes' ? 'fi-rr-disk' : 'fi-rr-check'"
            ></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <app-spinner *ngIf="cargando_viaje"></app-spinner>
</ion-content>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/nuevoViaje/data-viaje/componentes-viaje/resumen-viaje/resumen-viaje.component.scss */\n.summary-container {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.title-main {\n  font-weight: 900;\n  color: #333;\n  font-size: 1.8rem;\n}\n.subtitle-main {\n  color: #999;\n  margin-top: -5px;\n}\n.glass-card {\n  background: white;\n  border-radius: 35px;\n  padding: 30px;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);\n  border: 1px solid rgba(179, 181, 230, 0.2);\n  height: 100%;\n}\n.card-section-title {\n  font-size: 0.75rem;\n  font-weight: 800;\n  letter-spacing: 2px;\n  color: #b3b5e6;\n  margin-bottom: 25px;\n}\n.route-timeline {\n  position: relative;\n  padding-left: 20px;\n}\n.route-timeline::before {\n  content: "";\n  position: absolute;\n  left: 39px;\n  top: 40px;\n  bottom: 40px;\n  width: 2px;\n  background:\n    repeating-linear-gradient(\n      to bottom,\n      #b3b5e6 0,\n      #b3b5e6 5px,\n      transparent 5px,\n      transparent 10px);\n}\n.route-timeline .timeline-item {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 30px;\n  position: relative;\n}\n.route-timeline .timeline-item .timeline-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f0f0f0;\n  color: #666;\n  z-index: 2;\n}\n.route-timeline .timeline-item .timeline-icon.origin {\n  background: #e3f2fd;\n  color: #2196f3;\n}\n.route-timeline .timeline-item .timeline-icon.destination {\n  background: #b3b5e6;\n  color: black;\n}\n.route-timeline .timeline-item .timeline-content {\n  flex: 1;\n}\n.route-timeline .timeline-item .timeline-content label {\n  display: block;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #aaa;\n  text-transform: uppercase;\n}\n.route-timeline .timeline-item .timeline-content h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #333;\n}\n.data-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.settings-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.settings-grid .setting-item {\n  display: flex;\n  gap: 15px;\n  align-items: center;\n}\n.settings-grid .setting-item .icon-box {\n  width: 45px;\n  height: 45px;\n  background: #f8f9ff;\n  border-radius: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #b3b5e6;\n  font-size: 1.2rem;\n}\n.settings-grid .setting-item .setting-info {\n  flex: 1;\n}\n.settings-grid .setting-item .setting-info label {\n  display: block;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #999;\n}\n.settings-grid .setting-item .setting-info span {\n  font-weight: 700;\n  color: #444;\n  display: flex;\n  align-items: center;\n}\n.settings-grid .setting-item .setting-info span .icon-box {\n  width: 45px;\n  height: 45px;\n  background: #f8f9ff;\n  border-radius: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #b3b5e6;\n  font-size: 1.2rem;\n}\n.price-section {\n  background: #b3b5e6;\n  border-radius: 25px;\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: black;\n}\n.price-section .price-label {\n  font-size: 0.8rem;\n  font-weight: 600;\n  opacity: 0.9;\n}\n.price-section .price-value {\n  font-size: 2rem;\n  font-weight: 900;\n}\n.price-section .price-value span {\n  font-size: 1rem;\n  margin-left: 4px;\n}\n.btn-edit-sm {\n  background: transparent;\n  color: #b3b5e6;\n  border: none;\n  margin-left: 10px;\n}\n.btn-edit-sm mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn-primary-custom {\n  background: #b3b5e6 !important;\n  color: black !important;\n  border-radius: 35px !important;\n  padding: 12px 30px !important;\n  font-weight: 700 !important;\n  box-shadow: 0 10px 20px rgba(123, 97, 255, 0.3) !important;\n}\n.btn-secondary-custom {\n  border-radius: 35px !important;\n  color: #666 !important;\n  font-weight: 700 !important;\n}\n.map-wrapper-new {\n  border-radius: 25px;\n  overflow: hidden;\n  height: 250px;\n  border: 4px solid #f8f9ff;\n}\n.map-wrapper-new .map-canvas,\n.map-wrapper-new .map-placeholder {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.info-note {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 20px;\n  border-radius: 20px;\n  background: #f8f9ff;\n  border: 1px solid #e0e4ff;\n}\n.info-note i {\n  font-size: 1.5rem;\n  color: #b3b5e6;\n}\n.info-note p {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #555;\n  line-height: 1.4;\n}\n.info-note.edit-note {\n  background: #fffdf0;\n  border-color: #f0d7b4;\n}\n.info-note.edit-note i {\n  color: #d4a373;\n}\n.btn-primary-custom {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn-primary-custom i {\n  font-size: 1.2rem;\n}\n.custom-input,\n.form-select.custom-select-pride,\n.form-control-sm,\n.input-viaje,\nselect.form-select {\n  border-radius: 35px !important;\n  border: 1px solid #e0e4ff !important;\n  padding: 8px 20px !important;\n  font-size: 0.9rem !important;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05) !important;\n  height: auto !important;\n  background-color: #fdfdfd !important;\n  transition: all 0.3s ease;\n}\n.custom-input:focus,\n.form-select.custom-select-pride:focus,\n.form-control-sm:focus,\n.input-viaje:focus,\nselect.form-select:focus {\n  border-color: #b3b5e6 !important;\n  box-shadow: 0 4px 12px rgba(123, 97, 255, 0.15) !important;\n  outline: none;\n}\n.badge-reserva {\n  padding: 5px 15px;\n  border-radius: 35px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  background: #eee;\n  color: #666;\n}\n.badge-reserva.auto {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.map-wrapper-new {\n  height: 300px;\n  width: 100%;\n  border-radius: 35px;\n  overflow: hidden;\n  display: block !important;\n}\nbutton,\n.btn-primary-custom,\n.btn-secondary-custom,\n.btn-edit-sm,\n.btn-edit,\n.btn-edit-price {\n  border-radius: 35px !important;\n  transition: all 0.3s ease-in-out !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\nbutton:hover,\n.btn-primary-custom:hover,\n.btn-secondary-custom:hover,\n.btn-edit-sm:hover,\n.btn-edit:hover,\n.btn-edit-price:hover {\n  transform: translateY(-2px);\n  filter: brightness(1.1);\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15) !important;\n}\nbutton:active,\n.btn-primary-custom:active,\n.btn-secondary-custom:active,\n.btn-edit-sm:active,\n.btn-edit:active,\n.btn-edit-price:active {\n  transform: translateY(0);\n}\n.btn-edit-sm,\n.btn-edit {\n  width: 35px;\n  height: 35px;\n  min-width: 35px;\n  background: #f0f0ff;\n  color: #7B61FF;\n  border: none;\n}\n.btn-edit-sm:hover,\n.btn-edit:hover {\n  background: #b3b5e6;\n  color: black;\n}\n.custom-select-pride {\n  border-radius: 35px !important;\n  border: 1px solid #e0e4ff !important;\n  padding: 5px 15px !important;\n  font-size: 0.85rem;\n  background-color: white;\n  cursor: pointer;\n  outline: none;\n}\n.custom-select-pride:focus {\n  border-color: #b3b5e6;\n  box-shadow: 0 0 0 3px rgba(123, 97, 255, 0.1);\n}\n.input-price-edit {\n  border-radius: 35px !important;\n  border: 2px solid #fff !important;\n  padding: 5px 15px !important;\n  width: 100px !important;\n  font-size: 1.2rem !important;\n  font-weight: 700 !important;\n  text-align: center !important;\n  color: #333 !important;\n  background-color: white !important;\n  outline: none !important;\n  margin-top: 5px;\n}\n.input-price-edit::-webkit-inner-spin-button,\n.input-price-edit::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.price-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.btn-edit-price {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  border-radius: 35px !important;\n  width: 45px;\n  height: 45px;\n  border: none;\n  transition: all 0.3s ease;\n}\n.btn-edit-price:hover {\n  background: white;\n  color: #b3b5e6;\n  transform: scale(1.1);\n}\n@media (max-width: 768px) {\n  .glass-card {\n    padding: 20px;\n    border-radius: 25px;\n  }\n  .price-value {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=resumen-viaje.component.css.map */\n'] }]
  }], () => [{ type: TravelService }, { type: VehiculosServicesService }, { type: NavController }, { type: MatDialog }, { type: FuncionesComunes }, { type: ActivatedRoute }], { mapElement: [{
    type: ViewChild,
    args: ["mapResumen"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResumenViajeComponent, { className: "ResumenViajeComponent", filePath: "src/app/pages/nuevoviaje/data-viaje/componentes-viaje/resumen-viaje/resumen-viaje.component.ts", lineNumber: 41 });
})();
export {
  ResumenViajeComponent
};
//# sourceMappingURL=resumen-viaje.component-UOBFZ7FC.js.map
