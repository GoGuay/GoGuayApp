import {
  Toast,
  ToastModule
} from "./chunk-EP5DYYZX.js";
import {
  SpinnerComponent
} from "./chunk-XX3IZESI.js";
import {
  NavbarComponent
} from "./chunk-QIUENU5G.js";
import "./chunk-XGLFMII2.js";
import "./chunk-NAZ7DCPP.js";
import "./chunk-FPL4PN3H.js";
import "./chunk-WO2ZSM4X.js";
import "./chunk-GYAYVE5N.js";
import "./chunk-7NH46FL3.js";
import {
  MessageService
} from "./chunk-AF4L5EWO.js";
import {
  UserServicesService
} from "./chunk-YZOGC4HD.js";
import {
  MatDivider
} from "./chunk-ZYMQAXGI.js";
import "./chunk-UIKNRIU5.js";
import "./chunk-FCE3VLZJ.js";
import "./chunk-CGCOLBWN.js";
import "./chunk-H72L7N4J.js";
import {
  IonCol,
  IonContent,
  IonRow,
  IonicModule
} from "./chunk-6IWXE3BU.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-XHXT42RH.js";
import {
  ActivatedRoute,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel
} from "./chunk-TU2LK3TM.js";
import {
  CommonModule,
  NgIf
} from "./chunk-7PPOBOFB.js";
import {
  Component,
  lastValueFrom,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
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
  __async
} from "./chunk-5SZB5ECT.js";

// src/app/pages/paginas-panel-usuario/verificaciones-perfil/verificaciones-perfil.page.ts
function VerificacionesPerfilPage_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "app-spinner", 11);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("texto_spinner", \u0275\u0275pipeBind1(2, 1, "VERIFICACION.SPINNER_CARGANDO"));
  }
}
function VerificacionesPerfilPage_div_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "p", 45);
    \u0275\u0275element(3, "i", 46);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "VERIFICACION.TABLA.REGION_ESTADO_ARIALABEL"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "VERIFICACION.INFO_PERFIL_SI_VERIFICADO"), " ");
  }
}
function VerificacionesPerfilPage_div_3_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2, " \u2714\uFE0F ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "VERIFICACION.TABLA.CORREO_VERIFICADO_ARIALABEL"));
  }
}
function VerificacionesPerfilPage_div_3_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2, " \u274C ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "VERIFICACION.TABLA.CORREO_NO_VERIFICADO_ARIALABEL"));
  }
}
function VerificacionesPerfilPage_div_3_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2, " \u2714\uFE0F ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "VERIFICACION.TABLA.TELEFONO_VERIFICADO_ARIALABEL"));
  }
}
function VerificacionesPerfilPage_div_3_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2, " \u274C ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "VERIFICACION.TABLA.TELEFONO_NO_VERIFICADO_ARIALABEL"));
  }
}
function VerificacionesPerfilPage_div_3_app_spinner_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner", 49);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("tamano_completo", false)("texto_spinner", \u0275\u0275pipeBind1(1, 2, "VERIFICACION.SPINNER_ENVIANDO_MAIL"));
  }
}
function VerificacionesPerfilPage_div_3_span_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.emailUsuario);
  }
}
function VerificacionesPerfilPage_div_3_app_spinner_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner", 49);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("tamano_completo", false)("texto_spinner", \u0275\u0275pipeBind1(1, 2, "VERIFICACION.SPINNER_ENVIANDO_SMS"));
  }
}
function VerificacionesPerfilPage_div_3_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "input", 51, 0);
    \u0275\u0275twoWayListener("ngModelChange", function VerificacionesPerfilPage_div_3_div_72_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.codigoArray[0], $event) || (ctx_r1.codigoArray[0] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function VerificacionesPerfilPage_div_3_div_72_Template_input_input_1_listener() {
      \u0275\u0275restoreView(_r3);
      const d0_r4 = \u0275\u0275reference(2);
      const d1_r5 = \u0275\u0275reference(4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.moveNext(d0_r4, d1_r5, 0));
    })("keydown", function VerificacionesPerfilPage_div_3_div_72_Template_input_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleBackspace($event, 0));
    })("focus", function VerificacionesPerfilPage_div_3_div_72_Template_input_focus_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.focusedInput = 0);
    })("paste", function VerificacionesPerfilPage_div_3_div_72_Template_input_paste_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handlePaste($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 52, 1);
    \u0275\u0275twoWayListener("ngModelChange", function VerificacionesPerfilPage_div_3_div_72_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.codigoArray[1], $event) || (ctx_r1.codigoArray[1] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function VerificacionesPerfilPage_div_3_div_72_Template_input_input_3_listener() {
      \u0275\u0275restoreView(_r3);
      const d1_r5 = \u0275\u0275reference(4);
      const d2_r6 = \u0275\u0275reference(6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.moveNext(d1_r5, d2_r6, 1));
    })("keydown", function VerificacionesPerfilPage_div_3_div_72_Template_input_keydown_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleBackspace($event, 1));
    })("focus", function VerificacionesPerfilPage_div_3_div_72_Template_input_focus_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.focusedInput = 1);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 52, 2);
    \u0275\u0275twoWayListener("ngModelChange", function VerificacionesPerfilPage_div_3_div_72_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.codigoArray[2], $event) || (ctx_r1.codigoArray[2] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function VerificacionesPerfilPage_div_3_div_72_Template_input_input_5_listener() {
      \u0275\u0275restoreView(_r3);
      const d2_r6 = \u0275\u0275reference(6);
      const d3_r7 = \u0275\u0275reference(8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.moveNext(d2_r6, d3_r7, 2));
    })("keydown", function VerificacionesPerfilPage_div_3_div_72_Template_input_keydown_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleBackspace($event, 2));
    })("focus", function VerificacionesPerfilPage_div_3_div_72_Template_input_focus_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.focusedInput = 2);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 52, 3);
    \u0275\u0275twoWayListener("ngModelChange", function VerificacionesPerfilPage_div_3_div_72_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.codigoArray[3], $event) || (ctx_r1.codigoArray[3] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function VerificacionesPerfilPage_div_3_div_72_Template_input_input_7_listener() {
      \u0275\u0275restoreView(_r3);
      const d3_r7 = \u0275\u0275reference(8);
      const d4_r8 = \u0275\u0275reference(10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.moveNext(d3_r7, d4_r8, 3));
    })("keydown", function VerificacionesPerfilPage_div_3_div_72_Template_input_keydown_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleBackspace($event, 3));
    })("focus", function VerificacionesPerfilPage_div_3_div_72_Template_input_focus_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.focusedInput = 3);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 52, 4);
    \u0275\u0275twoWayListener("ngModelChange", function VerificacionesPerfilPage_div_3_div_72_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.codigoArray[4], $event) || (ctx_r1.codigoArray[4] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function VerificacionesPerfilPage_div_3_div_72_Template_input_input_9_listener() {
      \u0275\u0275restoreView(_r3);
      const d4_r8 = \u0275\u0275reference(10);
      const d5_r9 = \u0275\u0275reference(12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.moveNext(d4_r8, d5_r9, 4));
    })("keydown", function VerificacionesPerfilPage_div_3_div_72_Template_input_keydown_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleBackspace($event, 4));
    })("focus", function VerificacionesPerfilPage_div_3_div_72_Template_input_focus_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.focusedInput = 4);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 52, 5);
    \u0275\u0275twoWayListener("ngModelChange", function VerificacionesPerfilPage_div_3_div_72_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.codigoArray[5], $event) || (ctx_r1.codigoArray[5] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function VerificacionesPerfilPage_div_3_div_72_Template_input_input_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateCodigo());
    })("keydown", function VerificacionesPerfilPage_div_3_div_72_Template_input_keydown_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleBackspace($event, 5));
    })("focus", function VerificacionesPerfilPage_div_3_div_72_Template_input_focus_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.focusedInput = 5);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.focusedInput === 0);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.codigoArray[0]);
    \u0275\u0275property("disabled", !ctx_r1.inputsHabilitados);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.focusedInput === 1);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.codigoArray[1]);
    \u0275\u0275property("disabled", !ctx_r1.inputsHabilitados);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.focusedInput === 2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.codigoArray[2]);
    \u0275\u0275property("disabled", !ctx_r1.inputsHabilitados);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.focusedInput === 3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.codigoArray[3]);
    \u0275\u0275property("disabled", !ctx_r1.inputsHabilitados);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.focusedInput === 4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.codigoArray[4]);
    \u0275\u0275property("disabled", !ctx_r1.inputsHabilitados);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.focusedInput === 5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.codigoArray[5]);
    \u0275\u0275property("disabled", !ctx_r1.inputsHabilitados);
  }
}
function VerificacionesPerfilPage_div_3_span_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "VERIFICACION.ERROR_CODIGO_INCORRECTO"), " ");
  }
}
function VerificacionesPerfilPage_div_3_button_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function VerificacionesPerfilPage_div_3_button_74_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.verificar_codigo_sms(ctx_r1.codigo));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r1.codigoCompleto);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "VERIFICACION.BOTON_VERIFICAR_TELEFONO"), " ");
  }
}
function VerificacionesPerfilPage_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "h1", 14);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 15)(6, "p", 16);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, VerificacionesPerfilPage_div_3_div_9_Template, 6, 6, "div", 17);
    \u0275\u0275elementStart(10, "div", 18)(11, "div", 19)(12, "div", 20)(13, "h2")(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "table", 21);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementStart(19, "tr")(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275template(24, VerificacionesPerfilPage_div_3_span_24_Template, 3, 3, "span", 22)(25, VerificacionesPerfilPage_div_3_span_25_Template, 3, 3, "span", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "tr")(27, "td");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td");
    \u0275\u0275template(31, VerificacionesPerfilPage_div_3_span_31_Template, 3, 3, "span", 22)(32, VerificacionesPerfilPage_div_3_span_32_Template, 3, 3, "span", 23);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275element(33, "div", 24);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementStart(35, "div", 25)(36, "ion-row", 26)(37, "ion-col", 27);
    \u0275\u0275template(38, VerificacionesPerfilPage_div_3_app_spinner_38_Template, 2, 4, "app-spinner", 28);
    \u0275\u0275elementStart(39, "div", 29)(40, "p", 30)(41, "strong");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "ion-row")(45, "ion-col")(46, "p", 31);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "ion-col")(50, "div", 13)(51, "button", 32);
    \u0275\u0275listener("click", function VerificacionesPerfilPage_div_3_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.envio_mail_verificar_correo(ctx_r1.emailUsuario));
    });
    \u0275\u0275template(52, VerificacionesPerfilPage_div_3_span_52_Template, 2, 1, "span", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "p-toast", 34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(54, "div", 35);
    \u0275\u0275element(55, "mat-divider", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "ion-col", 37);
    \u0275\u0275template(57, VerificacionesPerfilPage_div_3_app_spinner_57_Template, 2, 4, "app-spinner", 28);
    \u0275\u0275elementStart(58, "div", 29)(59, "p")(60, "strong");
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "ion-row")(64, "ion-col")(65, "p", 31);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "ion-col")(69, "button", 38);
    \u0275\u0275listener("click", function VerificacionesPerfilPage_div_3_Template_button_click_69_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enviar_sms(ctx_r1.telefonoUsuario));
    });
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(71, "ion-row", 39);
    \u0275\u0275template(72, VerificacionesPerfilPage_div_3_div_72_Template, 13, 24, "div", 40)(73, VerificacionesPerfilPage_div_3_span_73_Template, 3, 3, "span", 41)(74, VerificacionesPerfilPage_div_3_button_74_Template, 3, 4, "button", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(75, "div", 43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 25, "VERIFICACION.TITULO"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 27, "VERIFICACION.SUBT_VERIF_BASICA"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.usuario == null ? null : ctx_r1.usuario.emailVerificado) && (ctx_r1.usuario == null ? null : ctx_r1.usuario.telefonoVerificado));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 29, "VERIFICACION.TABLA.TITULO"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(18, 31, "VERIFICACION.TABLA.TABLA_ARIALABEL"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 33, "VERIFICACION.TABLA.LABEL_CORREO"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.usuario.emailVerificado);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.usuario.emailVerificado);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 35, "VERIFICACION.TABLA.LABEL_TEL\xC9FONO"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.usuario.telefonoVerificado);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.usuario.telefonoVerificado);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(34, 37, "VERIFICACION.RECORDATORIO"), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.cargandoEnvioEmail);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 39, "VERIFICACION.VERIFICA_CORREO"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 41, "VERIFICACION.INFO_VERIF_CORREO"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.usuario.emailVerificado || ctx_r1.botonCorreoVerificado || ctx_r1.cargandoEnvioEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.cargandoEnvioEmail);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.cargandoEnvioSms);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 43, "VERIFICACION.VERIFICA_TELEFONO"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(67, 45, "VERIFICACION.INFO_VERIF_TELEFONO"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.sms_enviado || ctx_r1.usuario.telefonoVerificado);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.telefonoUsuario, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.usuario.telefonoVerificado);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.codigo_erroneo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.usuario.telefonoVerificado);
  }
}
var VerificacionesPerfilPage = class _VerificacionesPerfilPage {
  userService;
  route;
  messageService;
  translate;
  userLoggedIn = false;
  userData = {};
  usuario = {};
  emailUsuario = "";
  telefonoUsuario = "";
  subiendoDocumento = false;
  sinDocumentoDelantera = "../../../../assets/user/SinFotoDelantera.png";
  sinDocumentoTrasera = "../../../../assets/user/SinFotoTrasera.png";
  cargandoDelantera = false;
  cargandoTrasera = false;
  cargandoCarnetDelantera = false;
  cargandoCarnetTrasera = false;
  documentoDelantera = "";
  documentoTrasera = "";
  carnetTrasera = "";
  carnetDelantera = "";
  codigoArray = ["", "", "", "", "", ""];
  codigo = "";
  focusedInput = null;
  botonCorreoVerificado = false;
  verification_id_sms = "";
  tipoDocumentoSeleccionado = "";
  numeroDocumento = "";
  documentoValido = false;
  mensajeErrorDocumento = "";
  codigoCompleto = false;
  inputsHabilitados = false;
  sms_enviado = false;
  codigo_erroneo = false;
  cargandoEnvioEmail = false;
  cargandoEnvioSms = false;
  texto_spinner_cargando = "Cargando verificaciones...";
  cargando = false;
  constructor(userService, route, messageService, translate) {
    this.userService = userService;
    this.route = route;
    this.messageService = messageService;
    this.translate = translate;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      var _a, _b, _c;
      this.cargando = true;
      try {
        this.tiempo_restante_sms();
        this.userData = JSON.parse(localStorage.getItem("userData") || "{}");
        if ((_a = this.userData) == null ? void 0 : _a.usuario) {
          this.userLoggedIn = true;
          this.emailUsuario = this.userData.usuario.email || "";
          this.telefonoUsuario = this.userData.usuario.telefono || "";
        }
        const token = this.route.snapshot.queryParamMap.get("token");
        if (token) {
          const verificado = yield lastValueFrom(this.userService.verificar_email(token));
          this.botonCorreoVerificado = !!verificado;
          this.cargando = false;
        }
        if ((_c = (_b = this.userData) == null ? void 0 : _b.usuario) == null ? void 0 : _c.id) {
          yield this.obtenerDatosUsuario(this.userData.usuario.id);
        }
      } catch (error) {
        console.error("Error durante la carga:", error);
      } finally {
        this.cargando = false;
      }
    });
  }
  /**
   * Función para enviar el correo de verificación al usuario.
   * Si el correo ya ha sido verificado, muestra un mensaje de error.
   * Si no, envía el correo y desactiva el botón durante 30 minutos para evitar múltiples envíos.
   *
   * @param email --> Recibe el correo del usuario para enviarle el email de verificación
   *
   */
  envio_mail_verificar_correo(email) {
    this.cargandoEnvioEmail = true;
    this.botonCorreoVerificado = true;
    if (this.usuario.emailVerificado) {
      this.cargandoEnvioEmail = false;
      this.messageService.add({
        severity: "error",
        summary: this.translate.instant("VERIFICACION.TITULO_CORREO_YAVERIFICADO"),
        detail: this.translate.instant("VERIFICACION.MENSAJE_CORREO_YAVERIFICADO"),
        life: 3e3
      });
    } else {
      this.userService.enviar_email_verif(email).subscribe((respuesta) => {
        this.cargandoEnvioEmail = false;
        this.messageService.add({
          severity: "success",
          summary: this.translate.instant("VERIFICACION.TITULO_CORREO_ENVIADO"),
          detail: this.translate.instant("VERIFICACION.MENSAJE_CORREO_ENVIADO"),
          life: 3e3
        });
        setTimeout(() => {
          this.botonCorreoVerificado = false;
        }, 1800 * 1e3);
      }, (error) => {
        this.cargandoEnvioEmail = false;
        console.error(error);
        this.botonCorreoVerificado = false;
      });
    }
  }
  /**
   * Función para obtener los datos de un usuario por su ID.
   * Se utiliza para actualizar la información del usuario después de realizar verificaciones o cambios en el perfil.
   *
   * @param id_usuario --> Recibe el ID del usuario que está logado para obtener su información actualizada desde el backend
   */
  obtenerDatosUsuario(id_usuario) {
    return __async(this, null, function* () {
      this.usuario = yield lastValueFrom(this.userService.obtenerUsuarioPorID(id_usuario));
    });
  }
  /**
   * Función para obtener los datos de un usuario
   * @param id_usuario Recibe el ID del usuario que está logado
   */
  obtenerUsuarioPorID(id_usuario) {
    this.userService.obtenerUsuarioPorID(id_usuario).subscribe((resultadoUsuario) => {
      this.usuario = resultadoUsuario;
    });
  }
  /**
   * Función para enviar el código de verificación por SMS al número de teléfono del usuario.
   * El número se formatea con el prefijo internacional +34 antes de enviarlo al backend.
   * Si el envío es exitoso, se guarda el ID de verificación y se habilitan los inputs para ingresar el código.
   * Además, se guarda un timestamp en localStorage para controlar el tiempo de espera antes de permitir otro envío.
   * Después de 10 minutos, se deshabilita la bandera de envío y se limpia el timestamp de localStorage.
   *
   * @param telefono --> Recibe el número de teléfono del usuario al que se le enviará el código de verificación por SMS
   */
  enviar_sms(telefono) {
    this.cargandoEnvioSms = true;
    const tel\u00E9fonoConPrefijo = "+34" + telefono;
    this.userService.enviar_sms(tel\u00E9fonoConPrefijo).subscribe({
      next: (respuesta) => {
        this.cargandoEnvioSms = false;
        console.log("Respuesta: ", respuesta);
        if (respuesta.verification_sid) {
          this.verification_id_sms = respuesta.verification_sid;
          this.inputsHabilitados = true;
          this.sms_enviado = true;
          this.messageService.add({
            severity: "success",
            summary: this.translate.instant("VERIFICACION.TITULO_SMS_ENVIADO"),
            detail: this.translate.instant("VERIFICACION.MENSAJE_SMS_ENVIADO"),
            life: 3e3
          });
          const ahora = Date.now();
          localStorage.setItem("sms_enviado_timestamp", ahora.toString());
          setTimeout(() => {
            this.sms_enviado = false;
            localStorage.removeItem("sms_enviado_timestamp");
          }, 6e5);
        }
      },
      error: (err) => {
        this.cargandoEnvioSms = false;
        console.error(err);
        this.messageService.add({
          severity: "error",
          summary: this.translate.instant("VERIFICACION.TITULO_SMS_ERROR"),
          detail: this.translate.instant("VERIFICACION.MENSAJE_SMS_ERROR"),
          life: 3e3
        });
      }
    });
  }
  // Para concatener los 4 digitos del codigo sms
  updateCodigo() {
    this.codigo = this.codigoArray.join("");
    this.codigoCompleto = this.codigo.length === 6 && /^\d{6}$/.test(this.codigo);
  }
  // Avanzar al siguiente input automáticamente
  moveNext(currentInput, nextInput, index) {
    if (currentInput.value.length === 1 && nextInput) {
      nextInput.focus();
    }
    this.updateCodigo();
  }
  // Retrocede al input anterior al pulsar Backspace
  handleBackspace(event, index) {
    const input = event.target;
    if (event.key === "Backspace") {
      event.preventDefault();
      if (this.codigoArray[index]) {
        this.codigoArray[index] = "";
        this.updateCodigo();
      } else if (index > 0) {
        const prevInput = input.previousElementSibling;
        if (prevInput) {
          prevInput.focus();
          this.codigoArray[index - 1] = "";
          this.updateCodigo();
        }
      }
    }
  }
  /**
   * Función para verificar el codigo que le ha llegado al cliente por sms.
   * @param codigo
   */
  verificar_codigo_sms(codigo) {
    try {
      this.userService.verificar_codigo_sms(codigo, this.usuario.telefono).subscribe((respuesta) => {
        console.log("Respuesta: ", respuesta);
        if (respuesta.success) {
          this.codigo_erroneo = false;
          this.usuario.telefonoVerificado = true;
          this.codigoArray = [];
          this.messageService.add({
            severity: "success",
            summary: this.translate.instant("VERIFICACION.TITULO_TELEFONO_VERIFICADO"),
            detail: this.translate.instant("VERIFICACION.MENSAJE_TELEFONO_VERIFICADO"),
            life: 3e3
          });
        }
      });
    } catch (e) {
      this.codigo_erroneo = true;
    }
  }
  //Para que el usuario pueda pegar el codigo del sms en los inputs
  handlePaste(event) {
    var _a;
    event.preventDefault();
    const pasteData = ((_a = event.clipboardData) == null ? void 0 : _a.getData("text")) || "";
    const digits = pasteData.replace(/\D/g, "").slice(0, 6);
    for (let i = 0; i < digits.length; i++) {
      this.codigoArray[i] = digits[i];
    }
    for (let i = digits.length; i < 6; i++) {
      this.codigoArray[i] = "";
    }
    this.updateCodigo();
    const firstEmptyIndex = this.codigoArray.findIndex((c) => !c);
    if (firstEmptyIndex !== -1) {
      const input = document.querySelectorAll(".digit-input")[firstEmptyIndex];
      input == null ? void 0 : input.focus();
    }
  }
  /**
   * Función para calcular cuando se ha clicado el botón de envío de sms por ultima y cuanto falta para que se vuelva a habilitar
   * Recoge el valor de sms_enviado_timestamp de la caché. Si hay dato resta
   */
  tiempo_restante_sms() {
    const timestamp = localStorage.getItem("sms_enviado_timestamp");
    if (timestamp) {
      const tiempoPasado = Date.now() - parseInt(timestamp, 10);
      const diezMinutos = 300;
      if (tiempoPasado < diezMinutos) {
        this.sms_enviado = true;
        const tiempoRestante = diezMinutos - tiempoPasado;
        setTimeout(() => {
          this.sms_enviado = false;
          localStorage.removeItem("sms_enviado_timestamp");
        }, tiempoRestante);
      } else {
        this.sms_enviado = false;
        localStorage.removeItem("sms_enviado_timestamp");
      }
    }
  }
  static \u0275fac = function VerificacionesPerfilPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VerificacionesPerfilPage)(\u0275\u0275directiveInject(UserServicesService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(TranslateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VerificacionesPerfilPage, selectors: [["app-verificaciones-perfil"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 4, vars: 6, consts: [["d0", ""], ["d1", ""], ["d2", ""], ["d3", ""], ["d4", ""], ["d5", ""], [3, "backRoute", "searchRoute", "isLoggedIn"], [3, "fullscreen"], ["class", "d-flex justify-content-center align-items-center", "style", "height: 80vh", "role", "status", "aria-live", "polite", 4, "ngIf"], ["class", "container", 4, "ngIf"], ["role", "status", "aria-live", "polite", 1, "d-flex", "justify-content-center", "align-items-center", 2, "height", "80vh"], [3, "texto_spinner"], [1, "container"], [1, "d-flex", "justify-content-center"], [1, "text-center", "mb-5"], [1, "text-center"], [1, "mb-2"], ["class", "text-center", "role", "region", 4, "ngIf"], [1, "container", "mt-5", "mb-5"], [1, "d-flex", "justify-content-center", "align-items-start", "gap-4", "flex-wrap", "text-center", "verifications-wrapper"], [1, "verif-col"], [1, "verification-table", "mt-3", "mx-auto"], ["class", "check", 4, "ngIf"], ["class", "cross", 4, "ngIf"], [1, "text-center", "recordatorio-alerta", 3, "innerHTML"], [1, "container-fluid", "d-flex", "justify-content-center"], [1, "ion-justify-content-center", "fila_superior"], ["size", "12", "size-md", "5", 1, "ion-padding", "d-flex", "justify-content-center", "position-relative"], [3, "tamano_completo", "texto_spinner", 4, "ngIf"], [1, "mt-2", "text-center"], [1, "mb-4"], [1, "text-align-justify", 2, "font-size", "14px"], ["type", "button", "mat-raised-button", "", 1, "btn", "btn_bg", "mb-4", "w-100", "d-flex", "justify-content-center", "align-items-center", 2, "min-height", "48px", "max-width", "320px", "padding", "6px 16px", 3, "click", "disabled"], [4, "ngIf"], ["position", "bottom-center"], [1, "divider-container", "d-none", "d-md-block"], ["vertical", ""], ["size", "12", "size-md", "5", 1, "ion-padding", "d-flex", "justify-content-center"], ["type", "button", "mat-raised-button", "", 1, "btn", "btn_bg", 3, "click", "disabled"], [1, "mt-4"], ["class", "input-container d-flex justify-content-center mb-3", "role", "group", "aria-label", "C\xF3digo de verificaci\xF3n de 6 d\xEDgitos", 4, "ngIf"], ["class", "text-danger d-block mt-2", "role", "alert", 4, "ngIf"], ["type", "button", "class", "btn mt-2 btn_bg", "mat-raised-button", "", 3, "disabled", "click", 4, "ngIf"], [1, "divider-container", "hide-on-mobile"], ["role", "region", 1, "text-center"], [1, "mb-2", "verified-message"], ["aria-hidden", "true", 1, "fi", "fi-rr-badget-check-alt"], [1, "check"], [1, "cross"], [3, "tamano_completo", "texto_spinner"], ["role", "group", "aria-label", "C\xF3digo de verificaci\xF3n de 6 d\xEDgitos", 1, "input-container", "d-flex", "justify-content-center", "mb-3"], ["type", "text", "maxlength", "1", 1, "digit-input", "mx-1", 3, "ngModelChange", "input", "keydown", "focus", "paste", "ngModel", "disabled"], ["type", "text", "maxlength", "1", 1, "digit-input", "mx-1", 3, "ngModelChange", "input", "keydown", "focus", "ngModel", "disabled"], ["role", "alert", 1, "text-danger", "d-block", "mt-2"], ["type", "button", "mat-raised-button", "", 1, "btn", "mt-2", "btn_bg", 3, "click", "disabled"]], template: function VerificacionesPerfilPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar", 6);
      \u0275\u0275elementStart(1, "ion-content", 7);
      \u0275\u0275template(2, VerificacionesPerfilPage_div_2_Template, 3, 3, "div", 8)(3, VerificacionesPerfilPage_div_3_Template, 76, 47, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("backRoute", "/home")("searchRoute", "search")("isLoggedIn", ctx.userLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.cargando);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.cargando);
    }
  }, dependencies: [IonicModule, IonCol, IonContent, IonRow, CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, NavbarComponent, MatDivider, TranslateModule, SpinnerComponent, ToastModule, Toast, TranslatePipe], styles: ['@charset "UTF-8";\n\n\n\n.input-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.boton_envio_correo[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n  width: 300px !important;\n}\n.vbasica[_ngcontent-%COMP%] {\n  width: 950px;\n  text-align: center;\n  margin-left: 15rem;\n}\n.vadicional[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.recordatorio-alerta[_ngcontent-%COMP%] {\n  color: red !important;\n  font-family:\n    "Offside",\n    "Helvetica Neue",\n    Helvetica,\n    Arial,\n    sans-serif;\n}\n.recordatorio-alerta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.recordatorio-alerta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.recordatorio-alerta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #007bff !important;\n  text-decoration: underline !important;\n}\n.recordatorio-alerta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.recordatorio-alerta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover, \n.recordatorio-alerta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:hover {\n  color: #0056b3 !important;\n}\n.caja[_ngcontent-%COMP%] {\n  margin-top: 10% !important;\n}\n.verification-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n  max-width: 300px;\n  margin: 0 auto;\n}\n.verification-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  padding: 8px 12px;\n  text-align: left;\n}\n.verif-col[_ngcontent-%COMP%] {\n  min-width: 240px;\n  max-width: 320px;\n  flex: 0 1 300px;\n}\n.check[_ngcontent-%COMP%] {\n  color: rgba(219, 148, 14, 0.82);\n  font-weight: bold;\n}\n.cross[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n}\n.verified-message[_ngcontent-%COMP%] {\n  color: green !important;\n  font-weight: bold;\n  margin-top: 10px;\n}\n.digit-input[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  font-size: 24px;\n  border: 2px solid #ccc;\n  border-radius: 8px;\n  outline: none;\n  background-color: #fff;\n  transition: border-color 0.3s;\n}\n.digit-input.active[_ngcontent-%COMP%] {\n  border-color: #007bff;\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\n}\n.file-upload[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n}\n.file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.upload-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  font-size: 24px;\n  font-weight: bold;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  text-align: center;\n  line-height: 1;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.fotoDocumento[_ngcontent-%COMP%] {\n  position: relative;\n  height: 50px;\n  width: 100px;\n}\n.floating-plus[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translateX(-50%);\n  font-size: 24px;\n  background-color: #B3B5E6;\n  color: black;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.filadocumentodelantero[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.upload-button[_ngcontent-%COMP%]:hover {\n  background-color: #E0A667;\n}\n.btn_bg[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  top: 10%;\n}\n.texto[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n.mat-divider[_ngcontent-%COMP%] {\n  display: block;\n  height: 8px;\n  background-color: rgba(0, 0, 0, 0.12);\n  margin: 8px 0;\n}\n.divider-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 65px;\n  margin-left: 65px;\n}\n.divider-container-final[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 100px;\n  margin-left: 100px;\n}\nmat-divider[vertical][_ngcontent-%COMP%] {\n  height: 100%;\n  width: 2px;\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.mat-divider-2[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 8px;\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.content-box[_ngcontent-%COMP%] {\n  max-width: 500px;\n  text-align: center;\n}\n.fila_superior[_ngcontent-%COMP%] {\n  margin-bottom: 7%;\n}\n@media (max-width: 576px) {\n  .mat-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=verificaciones-perfil.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerificacionesPerfilPage, [{
    type: Component,
    args: [{ selector: "app-verificaciones-perfil", standalone: true, imports: [IonicModule, CommonModule, FormsModule, NavbarComponent, MatDivider, TranslateModule, SpinnerComponent, ToastModule], providers: [MessageService], template: `<app-navbar\r
  [backRoute]="'/home'"\r
  [searchRoute]="'search'"\r
  [isLoggedIn]="userLoggedIn"\r
></app-navbar>\r
\r
<ion-content [fullscreen]="true">\r
  <div\r
    *ngIf="cargando"\r
    class="d-flex justify-content-center align-items-center"\r
    style="height: 80vh"\r
    role="status"\r
    aria-live="polite"\r
  >\r
    <app-spinner [texto_spinner]="'VERIFICACION.SPINNER_CARGANDO' | translate"></app-spinner>\r
  </div>\r
\r
  <div\r
    class="container"\r
    *ngIf="!cargando"\r
  >\r
    <div class="d-flex justify-content-center">\r
      <h1 class="text-center mb-5">{{'VERIFICACION.TITULO' | translate}}</h1>\r
    </div>\r
\r
    <div class="text-center">\r
      <p class="mb-2">{{'VERIFICACION.SUBT_VERIF_BASICA' | translate}}</p>\r
    </div>\r
\r
    <div\r
      class="text-center"\r
      *ngIf="usuario?.emailVerificado && usuario?.telefonoVerificado"\r
      role="region"\r
      [attr.aria-label]="'VERIFICACION.TABLA.REGION_ESTADO_ARIALABEL' | translate"\r
    >\r
      <p class="mb-2 verified-message">\r
        <i\r
          class="fi fi-rr-badget-check-alt"\r
          aria-hidden="true"\r
        ></i>\r
        {{'VERIFICACION.INFO_PERFIL_SI_VERIFICADO' | translate}}\r
      </p>\r
    </div>\r
\r
    <!-- Tabla -->\r
    <div class="container mt-5 mb-5">\r
      <div class="d-flex justify-content-center align-items-start gap-4 flex-wrap text-center verifications-wrapper">\r
        <div class="verif-col">\r
          <h2><strong>{{'VERIFICACION.TABLA.TITULO' | translate}}</strong></h2>\r
          <table\r
            class="verification-table mt-3 mx-auto"\r
            [attr.aria-label]="'VERIFICACION.TABLA.TABLA_ARIALABEL' | translate"\r
          >\r
            <tr>\r
              <td>{{'VERIFICACION.TABLA.LABEL_CORREO' | translate}}</td>\r
              <td>\r
                <span\r
                  *ngIf="usuario.emailVerificado"\r
                  class="check"\r
                  [attr.aria-label]="'VERIFICACION.TABLA.CORREO_VERIFICADO_ARIALABEL' | translate"\r
                >\r
                  \u2714\uFE0F\r
                </span>\r
                <span\r
                  *ngIf="!usuario.emailVerificado"\r
                  class="cross"\r
                  [attr.aria-label]="'VERIFICACION.TABLA.CORREO_NO_VERIFICADO_ARIALABEL' | translate"\r
                >\r
                  \u274C\r
                </span>\r
              </td>\r
            </tr>\r
            <tr>\r
              <td>{{'VERIFICACION.TABLA.LABEL_TEL\xC9FONO' | translate}}</td>\r
              <td>\r
                <span\r
                  *ngIf="usuario.telefonoVerificado"\r
                  class="check"\r
                  [attr.aria-label]="'VERIFICACION.TABLA.TELEFONO_VERIFICADO_ARIALABEL' | translate"\r
                >\r
                  \u2714\uFE0F\r
                </span>\r
                <span\r
                  *ngIf="!usuario.telefonoVerificado"\r
                  class="cross"\r
                  [attr.aria-label]="'VERIFICACION.TABLA.TELEFONO_NO_VERIFICADO_ARIALABEL' | translate"\r
                >\r
                  \u274C\r
                </span>\r
              </td>\r
            </tr>\r
          </table>\r
        </div>\r
      </div>\r
    </div>\r
    <div\r
      class="text-center recordatorio-alerta"\r
      [innerHTML]="'VERIFICACION.RECORDATORIO' | translate"\r
    ></div>\r
\r
    <div class="container-fluid d-flex justify-content-center">\r
      <ion-row class="ion-justify-content-center fila_superior">\r
        <!-- Verificaci\xF3n de correo -->\r
        <ion-col\r
          size="12"\r
          size-md="5"\r
          class="ion-padding d-flex justify-content-center position-relative"\r
        >\r
          <app-spinner\r
            *ngIf="cargandoEnvioEmail"\r
            [tamano_completo]="false"\r
            [texto_spinner]="'VERIFICACION.SPINNER_ENVIANDO_MAIL' | translate"\r
          ></app-spinner>\r
          <div class="mt-2 text-center">\r
            <p class="mb-4">\r
              <strong>{{'VERIFICACION.VERIFICA_CORREO' | translate}}</strong>\r
            </p>\r
            <ion-row>\r
              <ion-col>\r
                <p\r
                  class="text-align-justify"\r
                  style="font-size: 14px"\r
                >\r
                  {{'VERIFICACION.INFO_VERIF_CORREO' | translate}}\r
                </p>\r
              </ion-col>\r
            </ion-row>\r
            <ion-col>\r
              <div class="d-flex justify-content-center">\r
                <button\r
                  type="button"\r
                  class="btn btn_bg mb-4 w-100 d-flex justify-content-center align-items-center"\r
                  style="min-height: 48px; max-width: 320px; padding: 6px 16px"\r
                  mat-raised-button\r
                  (click)="envio_mail_verificar_correo(emailUsuario)"\r
                  [disabled]="usuario.emailVerificado || botonCorreoVerificado || cargandoEnvioEmail"\r
                >\r
                  <span *ngIf="!cargandoEnvioEmail">{{emailUsuario}}</span>\r
                </button>\r
                <p-toast position="bottom-center"></p-toast>\r
              </div>\r
            </ion-col>\r
          </div>\r
        </ion-col>\r
\r
        <div class="divider-container d-none d-md-block">\r
          <mat-divider vertical></mat-divider>\r
        </div>\r
\r
        <!-- Verificaci\xF3n de tel\xE9fono -->\r
        <ion-col\r
          size="12"\r
          size-md="5"\r
          class="ion-padding d-flex justify-content-center"\r
        >\r
          <app-spinner\r
            *ngIf="cargandoEnvioSms"\r
            [tamano_completo]="false"\r
            [texto_spinner]="'VERIFICACION.SPINNER_ENVIANDO_SMS' | translate"\r
          ></app-spinner>\r
          <div class="mt-2 text-center">\r
            <p>\r
              <strong>{{'VERIFICACION.VERIFICA_TELEFONO' | translate}}</strong>\r
            </p>\r
            <ion-row>\r
              <ion-col>\r
                <p\r
                  class="text-align-justify"\r
                  style="font-size: 14px"\r
                >\r
                  {{'VERIFICACION.INFO_VERIF_TELEFONO' | translate}}\r
                </p>\r
              </ion-col>\r
            </ion-row>\r
            <ion-col>\r
              <button\r
                type="button"\r
                [disabled]="sms_enviado || usuario.telefonoVerificado"\r
                class="btn btn_bg"\r
                mat-raised-button\r
                (click)="enviar_sms(telefonoUsuario)"\r
              >\r
                {{telefonoUsuario}}\r
              </button>\r
            </ion-col>\r
            <ion-row class="mt-4"></ion-row>\r
            <div\r
              class="input-container d-flex justify-content-center mb-3"\r
              *ngIf="!usuario.telefonoVerificado"\r
              role="group"\r
              aria-label="C\xF3digo de verificaci\xF3n de 6 d\xEDgitos"\r
            >\r
              <input\r
                #d0\r
                type="text"\r
                maxlength="1"\r
                class="digit-input mx-1"\r
                [class.active]="focusedInput === 0"\r
                [(ngModel)]="codigoArray[0]"\r
                (input)="moveNext(d0, d1, 0)"\r
                (keydown)="handleBackspace($event, 0)"\r
                (focus)="focusedInput = 0"\r
                [disabled]="!inputsHabilitados"\r
                (paste)="handlePaste($event)"\r
              />\r
              <input\r
                #d1\r
                type="text"\r
                maxlength="1"\r
                class="digit-input mx-1"\r
                [class.active]="focusedInput === 1"\r
                [(ngModel)]="codigoArray[1]"\r
                (input)="moveNext(d1, d2, 1)"\r
                (keydown)="handleBackspace($event, 1)"\r
                (focus)="focusedInput = 1"\r
                [disabled]="!inputsHabilitados"\r
              />\r
              <input\r
                #d2\r
                type="text"\r
                maxlength="1"\r
                class="digit-input mx-1"\r
                [class.active]="focusedInput === 2"\r
                [(ngModel)]="codigoArray[2]"\r
                (input)="moveNext(d2, d3, 2)"\r
                (keydown)="handleBackspace($event, 2)"\r
                (focus)="focusedInput = 2"\r
                [disabled]="!inputsHabilitados"\r
              />\r
              <input\r
                #d3\r
                type="text"\r
                maxlength="1"\r
                class="digit-input mx-1"\r
                [class.active]="focusedInput === 3"\r
                [(ngModel)]="codigoArray[3]"\r
                (input)="moveNext(d3, d4, 3)"\r
                (keydown)="handleBackspace($event, 3)"\r
                (focus)="focusedInput = 3"\r
                [disabled]="!inputsHabilitados"\r
              />\r
              <input\r
                #d4\r
                type="text"\r
                maxlength="1"\r
                class="digit-input mx-1"\r
                [class.active]="focusedInput === 4"\r
                [(ngModel)]="codigoArray[4]"\r
                (input)="moveNext(d4, d5, 4)"\r
                (keydown)="handleBackspace($event, 4)"\r
                (focus)="focusedInput = 4"\r
                [disabled]="!inputsHabilitados"\r
              />\r
              <input\r
                #d5\r
                type="text"\r
                maxlength="1"\r
                class="digit-input mx-1"\r
                [class.active]="focusedInput === 5"\r
                [(ngModel)]="codigoArray[5]"\r
                (input)="updateCodigo()"\r
                (keydown)="handleBackspace($event, 5)"\r
                (focus)="focusedInput = 5"\r
                [disabled]="!inputsHabilitados"\r
              />\r
            </div>\r
            <span\r
              *ngIf="codigo_erroneo"\r
              class="text-danger d-block mt-2"\r
              role="alert"\r
            >\r
              {{'VERIFICACION.ERROR_CODIGO_INCORRECTO' | translate}}\r
            </span>\r
\r
            <button\r
              (click)="verificar_codigo_sms(codigo)"\r
              *ngIf="!usuario.telefonoVerificado"\r
              type="button"\r
              class="btn mt-2 btn_bg"\r
              mat-raised-button\r
              [disabled]="!codigoCompleto"\r
            >\r
              {{'VERIFICACION.BOTON_VERIFICAR_TELEFONO' | translate}}\r
            </button>\r
          </div>\r
        </ion-col>\r
\r
        <div class="divider-container hide-on-mobile"></div>\r
      </ion-row>\r
    </div>\r
  </div>\r
</ion-content>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/paginas-panel-usuario/verificaciones-perfil/verificaciones-perfil.page.scss */\n.input-container {\n  display: flex;\n  gap: 10px;\n}\n.boton_envio_correo {\n  position: relative;\n  height: 200px;\n  width: 300px !important;\n}\n.vbasica {\n  width: 950px;\n  text-align: center;\n  margin-left: 15rem;\n}\n.vadicional {\n  border-radius: 15px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.recordatorio-alerta {\n  color: red !important;\n  font-family:\n    "Offside",\n    "Helvetica Neue",\n    Helvetica,\n    Arial,\n    sans-serif;\n}\n.recordatorio-alerta a,\n.recordatorio-alerta a span,\n.recordatorio-alerta a strong {\n  color: #007bff !important;\n  text-decoration: underline !important;\n}\n.recordatorio-alerta a:hover,\n.recordatorio-alerta a span:hover,\n.recordatorio-alerta a strong:hover {\n  color: #0056b3 !important;\n}\n.caja {\n  margin-top: 10% !important;\n}\n.verification-table {\n  border-collapse: collapse;\n  width: 100%;\n  max-width: 300px;\n  margin: 0 auto;\n}\n.verification-table td {\n  border: 1px solid #ccc;\n  padding: 8px 12px;\n  text-align: left;\n}\n.verif-col {\n  min-width: 240px;\n  max-width: 320px;\n  flex: 0 1 300px;\n}\n.check {\n  color: rgba(219, 148, 14, 0.82);\n  font-weight: bold;\n}\n.cross {\n  color: red;\n  font-weight: bold;\n}\n.verified-message {\n  color: green !important;\n  font-weight: bold;\n  margin-top: 10px;\n}\n.digit-input {\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  font-size: 24px;\n  border: 2px solid #ccc;\n  border-radius: 8px;\n  outline: none;\n  background-color: #fff;\n  transition: border-color 0.3s;\n}\n.digit-input.active {\n  border-color: #007bff;\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\n}\n.file-upload {\n  display: inline-block;\n  position: relative;\n}\n.file-input {\n  display: none;\n}\n.upload-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  font-size: 24px;\n  font-weight: bold;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  text-align: center;\n  line-height: 1;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.fotoDocumento {\n  position: relative;\n  height: 50px;\n  width: 100px;\n}\n.floating-plus {\n  position: absolute;\n  transform: translateX(-50%);\n  font-size: 24px;\n  background-color: #B3B5E6;\n  color: black;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.filadocumentodelantero {\n  display: flex;\n  justify-content: space-between;\n}\n.upload-button:hover {\n  background-color: #E0A667;\n}\n.btn_bg {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  top: 10%;\n}\n.texto {\n  margin-top: 10%;\n}\n.mat-divider {\n  display: block;\n  height: 8px;\n  background-color: rgba(0, 0, 0, 0.12);\n  margin: 8px 0;\n}\n.divider-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 65px;\n  margin-left: 65px;\n}\n.divider-container-final {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 100px;\n  margin-left: 100px;\n}\nmat-divider[vertical] {\n  height: 100%;\n  width: 2px;\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.mat-divider-2 {\n  height: 100%;\n  width: 8px;\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.content-box {\n  max-width: 500px;\n  text-align: center;\n}\n.fila_superior {\n  margin-bottom: 7%;\n}\n@media (max-width: 576px) {\n  .mat-divider {\n    display: none;\n  }\n}\n/*# sourceMappingURL=verificaciones-perfil.page.css.map */\n'] }]
  }], () => [{ type: UserServicesService }, { type: ActivatedRoute }, { type: MessageService }, { type: TranslateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VerificacionesPerfilPage, { className: "VerificacionesPerfilPage", filePath: "src/app/pages/paginas-panel-usuario/verificaciones-perfil/verificaciones-perfil.page.ts", lineNumber: 24 });
})();
export {
  VerificacionesPerfilPage
};
//# sourceMappingURL=verificaciones-perfil.page-4JXXZKEZ.js.map
