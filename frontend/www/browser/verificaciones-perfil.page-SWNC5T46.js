import {
  Toast,
  ToastModule
} from "./chunk-H4X3A5HG.js";
import {
  SpinnerComponent
} from "./chunk-AZFY3OZL.js";
import {
  NavbarComponent
} from "./chunk-YAGW6LPY.js";
import "./chunk-N25HX3QD.js";
import "./chunk-HCR355QR.js";
import "./chunk-TGPQDEZS.js";
import "./chunk-BLKEDZE4.js";
import "./chunk-N7S2XU3X.js";
import "./chunk-G5UZDB7B.js";
import {
  MessageService
} from "./chunk-WDE6N5F6.js";
import {
  UserServicesService
} from "./chunk-34RASOLQ.js";
import {
  MatDivider
} from "./chunk-ULIFZXTE.js";
import "./chunk-WBBLYEAR.js";
import "./chunk-LLKVXR72.js";
import "./chunk-Z2EGICVD.js";
import {
  IonCol,
  IonContent,
  IonRow,
  IonicModule
} from "./chunk-XTRPVKSN.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-PWPN4F54.js";
import {
  ActivatedRoute,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel
} from "./chunk-DD4MNYDA.js";
import {
  Component,
  lastValueFrom,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
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
  __async
} from "./chunk-5SZB5ECT.js";

// src/app/pages/paginas-panel-usuario/verificaciones-perfil/verificaciones-perfil.page.ts
function VerificacionesPerfilPage_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "app-spinner", 10);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("texto_spinner", \u0275\u0275pipeBind1(2, 1, "VERIFICACION.SPINNER_CARGANDO"));
  }
}
function VerificacionesPerfilPage_Conditional_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "p", 41);
    \u0275\u0275element(3, "i", 42);
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
function VerificacionesPerfilPage_Conditional_3_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2, " \u2714\uFE0F ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "VERIFICACION.TABLA.CORREO_VERIFICADO_ARIALABEL"));
  }
}
function VerificacionesPerfilPage_Conditional_3_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2, " \u274C ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "VERIFICACION.TABLA.CORREO_NO_VERIFICADO_ARIALABEL"));
  }
}
function VerificacionesPerfilPage_Conditional_3_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2, " \u2714\uFE0F ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "VERIFICACION.TABLA.TELEFONO_VERIFICADO_ARIALABEL"));
  }
}
function VerificacionesPerfilPage_Conditional_3_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2, " \u274C ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "VERIFICACION.TABLA.TELEFONO_NO_VERIFICADO_ARIALABEL"));
  }
}
function VerificacionesPerfilPage_Conditional_3_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner", 26);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("tamano_completo", false)("texto_spinner", \u0275\u0275pipeBind1(1, 2, "VERIFICACION.SPINNER_ENVIANDO_MAIL"));
  }
}
function VerificacionesPerfilPage_Conditional_3_Conditional_52_Template(rf, ctx) {
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
function VerificacionesPerfilPage_Conditional_3_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner", 26);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("tamano_completo", false)("texto_spinner", \u0275\u0275pipeBind1(1, 2, "VERIFICACION.SPINNER_ENVIANDO_SMS"));
  }
}
function VerificacionesPerfilPage_Conditional_3_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "input", 43, 0);
    \u0275\u0275twoWayListener("ngModelChange", function VerificacionesPerfilPage_Conditional_3_Conditional_72_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.codigoArray[0], $event) || (ctx_r1.codigoArray[0] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function VerificacionesPerfilPage_Conditional_3_Conditional_72_Template_input_input_1_listener() {
      \u0275\u0275restoreView(_r3);
      const d0_r4 = \u0275\u0275reference(2);
      const d1_r5 = \u0275\u0275reference(4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.moveNext(d0_r4, d1_r5, 0));
    })("keydown", function VerificacionesPerfilPage_Conditional_3_Conditional_72_Template_input_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleBackspace($event, 0));
    })("focus", function VerificacionesPerfilPage_Conditional_3_Conditional_72_Template_input_focus_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.focusedInput = 0);
    })("paste", function VerificacionesPerfilPage_Conditional_3_Conditional_72_Template_input_paste_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handlePaste($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 44, 1);
    \u0275\u0275twoWayListener("ngModelChange", function VerificacionesPerfilPage_Conditional_3_Conditional_72_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.codigoArray[1], $event) || (ctx_r1.codigoArray[1] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function VerificacionesPerfilPage_Conditional_3_Conditional_72_Template_input_input_3_listener() {
      \u0275\u0275restoreView(_r3);
      const d1_r5 = \u0275\u0275reference(4);
      const d2_r6 = \u0275\u0275reference(6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.moveNext(d1_r5, d2_r6, 1));
    })("keydown", function VerificacionesPerfilPage_Conditional_3_Conditional_72_Template_input_keydown_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleBackspace($event, 1));
    })("focus", function VerificacionesPerfilPage_Conditional_3_Conditional_72_Template_input_focus_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.focusedInput = 1);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 44, 2);
    \u0275\u0275twoWayListener("ngModelChange", function VerificacionesPerfilPage_Conditional_3_Conditional_72_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.codigoArray[2], $event) || (ctx_r1.codigoArray[2] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function VerificacionesPerfilPage_Conditional_3_Conditional_72_Template_input_input_5_listener() {
      \u0275\u0275restoreView(_r3);
      const d2_r6 = \u0275\u0275reference(6);
      const d3_r7 = \u0275\u0275reference(8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.moveNext(d2_r6, d3_r7, 2));
    })("keydown", function VerificacionesPerfilPage_Conditional_3_Conditional_72_Template_input_keydown_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleBackspace($event, 2));
    })("focus", function VerificacionesPerfilPage_Conditional_3_Conditional_72_Template_input_focus_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.focusedInput = 2);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 44, 3);
    \u0275\u0275twoWayListener("ngModelChange", function VerificacionesPerfilPage_Conditional_3_Conditional_72_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.codigoArray[3], $event) || (ctx_r1.codigoArray[3] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function VerificacionesPerfilPage_Conditional_3_Conditional_72_Template_input_input_7_listener() {
      \u0275\u0275restoreView(_r3);
      const d3_r7 = \u0275\u0275reference(8);
      const d4_r8 = \u0275\u0275reference(10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.moveNext(d3_r7, d4_r8, 3));
    })("keydown", function VerificacionesPerfilPage_Conditional_3_Conditional_72_Template_input_keydown_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleBackspace($event, 3));
    })("focus", function VerificacionesPerfilPage_Conditional_3_Conditional_72_Template_input_focus_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.focusedInput = 3);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 44, 4);
    \u0275\u0275twoWayListener("ngModelChange", function VerificacionesPerfilPage_Conditional_3_Conditional_72_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.codigoArray[4], $event) || (ctx_r1.codigoArray[4] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function VerificacionesPerfilPage_Conditional_3_Conditional_72_Template_input_input_9_listener() {
      \u0275\u0275restoreView(_r3);
      const d4_r8 = \u0275\u0275reference(10);
      const d5_r9 = \u0275\u0275reference(12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.moveNext(d4_r8, d5_r9, 4));
    })("keydown", function VerificacionesPerfilPage_Conditional_3_Conditional_72_Template_input_keydown_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleBackspace($event, 4));
    })("focus", function VerificacionesPerfilPage_Conditional_3_Conditional_72_Template_input_focus_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.focusedInput = 4);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 44, 5);
    \u0275\u0275twoWayListener("ngModelChange", function VerificacionesPerfilPage_Conditional_3_Conditional_72_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.codigoArray[5], $event) || (ctx_r1.codigoArray[5] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function VerificacionesPerfilPage_Conditional_3_Conditional_72_Template_input_input_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateCodigo());
    })("keydown", function VerificacionesPerfilPage_Conditional_3_Conditional_72_Template_input_keydown_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleBackspace($event, 5));
    })("focus", function VerificacionesPerfilPage_Conditional_3_Conditional_72_Template_input_focus_11_listener() {
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
function VerificacionesPerfilPage_Conditional_3_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "VERIFICACION.ERROR_CODIGO_INCORRECTO"), " ");
  }
}
function VerificacionesPerfilPage_Conditional_3_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function VerificacionesPerfilPage_Conditional_3_Conditional_74_Template_button_click_0_listener() {
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
function VerificacionesPerfilPage_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 11)(2, "h1", 12);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 13)(6, "p", 14);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, VerificacionesPerfilPage_Conditional_3_Conditional_9_Template, 6, 6, "div", 15);
    \u0275\u0275elementStart(10, "div", 16)(11, "div", 17)(12, "div", 18)(13, "h2")(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "table", 19);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementStart(19, "tr")(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275conditionalCreate(24, VerificacionesPerfilPage_Conditional_3_Conditional_24_Template, 3, 3, "span", 20);
    \u0275\u0275conditionalCreate(25, VerificacionesPerfilPage_Conditional_3_Conditional_25_Template, 3, 3, "span", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "tr")(27, "td");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td");
    \u0275\u0275conditionalCreate(31, VerificacionesPerfilPage_Conditional_3_Conditional_31_Template, 3, 3, "span", 20);
    \u0275\u0275conditionalCreate(32, VerificacionesPerfilPage_Conditional_3_Conditional_32_Template, 3, 3, "span", 21);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275element(33, "div", 22);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementStart(35, "div", 23)(36, "ion-row", 24)(37, "ion-col", 25);
    \u0275\u0275conditionalCreate(38, VerificacionesPerfilPage_Conditional_3_Conditional_38_Template, 2, 4, "app-spinner", 26);
    \u0275\u0275elementStart(39, "div", 27)(40, "p", 28)(41, "strong");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "ion-row")(45, "ion-col")(46, "p", 29);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "ion-col")(50, "div", 11)(51, "button", 30);
    \u0275\u0275listener("click", function VerificacionesPerfilPage_Conditional_3_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.envio_mail_verificar_correo(ctx_r1.emailUsuario));
    });
    \u0275\u0275conditionalCreate(52, VerificacionesPerfilPage_Conditional_3_Conditional_52_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "p-toast", 31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(54, "div", 32);
    \u0275\u0275element(55, "mat-divider", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "ion-col", 34);
    \u0275\u0275conditionalCreate(57, VerificacionesPerfilPage_Conditional_3_Conditional_57_Template, 2, 4, "app-spinner", 26);
    \u0275\u0275elementStart(58, "div", 27)(59, "p")(60, "strong");
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "ion-row")(64, "ion-col")(65, "p", 29);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "ion-col")(69, "button", 35);
    \u0275\u0275listener("click", function VerificacionesPerfilPage_Conditional_3_Template_button_click_69_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enviar_sms(ctx_r1.telefonoUsuario));
    });
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(71, "ion-row", 36);
    \u0275\u0275conditionalCreate(72, VerificacionesPerfilPage_Conditional_3_Conditional_72_Template, 13, 24, "div", 37);
    \u0275\u0275conditionalCreate(73, VerificacionesPerfilPage_Conditional_3_Conditional_73_Template, 3, 3, "span", 38);
    \u0275\u0275conditionalCreate(74, VerificacionesPerfilPage_Conditional_3_Conditional_74_Template, 3, 4, "button", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(75, "div", 40);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 25, "VERIFICACION.TITULO"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 27, "VERIFICACION.SUBT_VERIF_BASICA"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r1.usuario == null ? null : ctx_r1.usuario.emailVerificado) && (ctx_r1.usuario == null ? null : ctx_r1.usuario.telefonoVerificado) ? 9 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 29, "VERIFICACION.TABLA.TITULO"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(18, 31, "VERIFICACION.TABLA.TABLA_ARIALABEL"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 33, "VERIFICACION.TABLA.LABEL_CORREO"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.usuario.emailVerificado ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.usuario.emailVerificado ? 25 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 35, "VERIFICACION.TABLA.LABEL_TEL\xC9FONO"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.usuario.telefonoVerificado ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.usuario.telefonoVerificado ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(34, 37, "VERIFICACION.RECORDATORIO"), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.cargandoEnvioEmail ? 38 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 39, "VERIFICACION.VERIFICA_CORREO"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 41, "VERIFICACION.INFO_VERIF_CORREO"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.usuario.emailVerificado || ctx_r1.botonCorreoVerificado || ctx_r1.cargandoEnvioEmail);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.cargandoEnvioEmail ? 52 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.cargandoEnvioSms ? 57 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 43, "VERIFICACION.VERIFICA_TELEFONO"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(67, 45, "VERIFICACION.INFO_VERIF_TELEFONO"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.sms_enviado || ctx_r1.usuario.telefonoVerificado);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.telefonoUsuario, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.usuario.telefonoVerificado ? 72 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.codigo_erroneo ? 73 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.usuario.telefonoVerificado ? 74 : -1);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VerificacionesPerfilPage, selectors: [["app-verificaciones-perfil"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 4, vars: 6, consts: [["d0", ""], ["d1", ""], ["d2", ""], ["d3", ""], ["d4", ""], ["d5", ""], [3, "backRoute", "searchRoute", "isLoggedIn"], [3, "fullscreen"], ["role", "status", "aria-live", "polite", 1, "d-flex", "justify-content-center", "align-items-center", 2, "height", "80vh"], [1, "container"], [3, "texto_spinner"], [1, "d-flex", "justify-content-center"], [1, "text-center", "mb-5"], [1, "text-center"], [1, "mb-2"], ["role", "region", 1, "text-center"], [1, "container", "mt-5", "mb-5"], [1, "d-flex", "justify-content-center", "align-items-start", "gap-4", "flex-wrap", "text-center", "verifications-wrapper"], [1, "verif-col"], [1, "verification-table", "mt-3", "mx-auto"], [1, "check"], [1, "cross"], [1, "text-center", "recordatorio-alerta", 3, "innerHTML"], [1, "container-fluid", "d-flex", "justify-content-center"], [1, "ion-justify-content-center", "fila_superior"], ["size", "12", "size-md", "5", 1, "ion-padding", "d-flex", "justify-content-center", "position-relative"], [3, "tamano_completo", "texto_spinner"], [1, "mt-2", "text-center"], [1, "mb-4"], [1, "text-align-justify", 2, "font-size", "14px"], ["type", "button", "mat-raised-button", "", 1, "btn", "btn_bg", "mb-4", "w-100", "d-flex", "justify-content-center", "align-items-center", 2, "min-height", "48px", "max-width", "320px", "padding", "6px 16px", 3, "click", "disabled"], ["position", "bottom-center"], [1, "divider-container", "d-none", "d-md-block"], ["vertical", ""], ["size", "12", "size-md", "5", 1, "ion-padding", "d-flex", "justify-content-center"], ["type", "button", "mat-raised-button", "", 1, "btn", "btn_bg", 3, "click", "disabled"], [1, "mt-4"], ["role", "group", "aria-label", "C\xF3digo de verificaci\xF3n de 6 d\xEDgitos", 1, "input-container", "d-flex", "justify-content-center", "mb-3"], ["role", "alert", 1, "text-danger", "d-block", "mt-2"], ["type", "button", "mat-raised-button", "", 1, "btn", "mt-2", "btn_bg", 3, "disabled"], [1, "divider-container", "hide-on-mobile"], [1, "mb-2", "verified-message"], ["aria-hidden", "true", 1, "fi", "fi-rr-badget-check-alt"], ["type", "text", "maxlength", "1", 1, "digit-input", "mx-1", 3, "ngModelChange", "input", "keydown", "focus", "paste", "ngModel", "disabled"], ["type", "text", "maxlength", "1", 1, "digit-input", "mx-1", 3, "ngModelChange", "input", "keydown", "focus", "ngModel", "disabled"], ["type", "button", "mat-raised-button", "", 1, "btn", "mt-2", "btn_bg", 3, "click", "disabled"]], template: function VerificacionesPerfilPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar", 6);
      \u0275\u0275elementStart(1, "ion-content", 7);
      \u0275\u0275conditionalCreate(2, VerificacionesPerfilPage_Conditional_2_Template, 3, 3, "div", 8);
      \u0275\u0275conditionalCreate(3, VerificacionesPerfilPage_Conditional_3_Template, 76, 47, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("backRoute", "/home")("searchRoute", "search")("isLoggedIn", ctx.userLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.cargando ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.cargando ? 3 : -1);
    }
  }, dependencies: [IonicModule, IonCol, IonContent, IonRow, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, NavbarComponent, MatDivider, TranslateModule, SpinnerComponent, ToastModule, Toast, TranslatePipe], styles: ['@charset "UTF-8";\n\n\n.input-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.boton_envio_correo[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n  width: 300px !important;\n}\n.vbasica[_ngcontent-%COMP%] {\n  width: 950px;\n  text-align: center;\n  margin-left: 15rem;\n}\n.vadicional[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.recordatorio-alerta[_ngcontent-%COMP%] {\n  color: red !important;\n  font-family:\n    "Offside",\n    "Helvetica Neue",\n    Helvetica,\n    Arial,\n    sans-serif;\n}\n.recordatorio-alerta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.recordatorio-alerta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.recordatorio-alerta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #007bff !important;\n  text-decoration: underline !important;\n}\n.recordatorio-alerta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.recordatorio-alerta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover, \n.recordatorio-alerta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:hover {\n  color: #0056b3 !important;\n}\n.caja[_ngcontent-%COMP%] {\n  margin-top: 10% !important;\n}\n.verification-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n  max-width: 300px;\n  margin: 0 auto;\n}\n.verification-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  padding: 8px 12px;\n  text-align: left;\n}\n.verif-col[_ngcontent-%COMP%] {\n  min-width: 240px;\n  max-width: 320px;\n  flex: 0 1 300px;\n}\n.check[_ngcontent-%COMP%] {\n  color: rgba(219, 148, 14, 0.82);\n  font-weight: bold;\n}\n.cross[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n}\n.verified-message[_ngcontent-%COMP%] {\n  color: green !important;\n  font-weight: bold;\n  margin-top: 10px;\n}\n.digit-input[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  font-size: 24px;\n  border: 2px solid #ccc;\n  border-radius: 8px;\n  outline: none;\n  background-color: #fff;\n  transition: border-color 0.3s;\n}\n.digit-input.active[_ngcontent-%COMP%] {\n  border-color: #007bff;\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\n}\n.file-upload[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n}\n.file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.upload-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  font-size: 24px;\n  font-weight: bold;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  text-align: center;\n  line-height: 1;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.fotoDocumento[_ngcontent-%COMP%] {\n  position: relative;\n  height: 50px;\n  width: 100px;\n}\n.floating-plus[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translateX(-50%);\n  font-size: 24px;\n  background-color: #B3B5E6;\n  color: black;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.filadocumentodelantero[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.upload-button[_ngcontent-%COMP%]:hover {\n  background-color: #E0A667;\n}\n.btn_bg[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  top: 10%;\n}\n.texto[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n.mat-divider[_ngcontent-%COMP%] {\n  display: block;\n  height: 8px;\n  background-color: rgba(0, 0, 0, 0.12);\n  margin: 8px 0;\n}\n.divider-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 65px;\n  margin-left: 65px;\n}\n.divider-container-final[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 100px;\n  margin-left: 100px;\n}\nmat-divider[vertical][_ngcontent-%COMP%] {\n  height: 100%;\n  width: 2px;\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.mat-divider-2[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 8px;\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.content-box[_ngcontent-%COMP%] {\n  max-width: 500px;\n  text-align: center;\n}\n.fila_superior[_ngcontent-%COMP%] {\n  margin-bottom: 7%;\n}\n@media (max-width: 576px) {\n  .mat-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=verificaciones-perfil.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerificacionesPerfilPage, [{
    type: Component,
    args: [{ selector: "app-verificaciones-perfil", standalone: true, imports: [IonicModule, FormsModule, NavbarComponent, MatDivider, TranslateModule, SpinnerComponent, ToastModule], providers: [MessageService], template: `<app-navbar
  [backRoute]="'/home'"
  [searchRoute]="'search'"
  [isLoggedIn]="userLoggedIn"
></app-navbar>

<ion-content [fullscreen]="true">
  @if (cargando) {
  <div
    class="d-flex justify-content-center align-items-center"
    style="height: 80vh"
    role="status"
    aria-live="polite"
  >
    <app-spinner [texto_spinner]="'VERIFICACION.SPINNER_CARGANDO' | translate"></app-spinner>
  </div>
  } @if (!cargando) {
  <div class="container">
    <div class="d-flex justify-content-center">
      <h1 class="text-center mb-5">{{'VERIFICACION.TITULO' | translate}}</h1>
    </div>
    <div class="text-center">
      <p class="mb-2">{{'VERIFICACION.SUBT_VERIF_BASICA' | translate}}</p>
    </div>
    @if (usuario?.emailVerificado && usuario?.telefonoVerificado) {
    <div
      class="text-center"
      role="region"
      [attr.aria-label]="'VERIFICACION.TABLA.REGION_ESTADO_ARIALABEL' | translate"
    >
      <p class="mb-2 verified-message">
        <i
          class="fi fi-rr-badget-check-alt"
          aria-hidden="true"
        ></i>
        {{'VERIFICACION.INFO_PERFIL_SI_VERIFICADO' | translate}}
      </p>
    </div>
    }
    <!-- Tabla -->
    <div class="container mt-5 mb-5">
      <div class="d-flex justify-content-center align-items-start gap-4 flex-wrap text-center verifications-wrapper">
        <div class="verif-col">
          <h2><strong>{{'VERIFICACION.TABLA.TITULO' | translate}}</strong></h2>
          <table
            class="verification-table mt-3 mx-auto"
            [attr.aria-label]="'VERIFICACION.TABLA.TABLA_ARIALABEL' | translate"
          >
            <tr>
              <td>{{'VERIFICACION.TABLA.LABEL_CORREO' | translate}}</td>
              <td>
                @if (usuario.emailVerificado) {
                <span
                  class="check"
                  [attr.aria-label]="'VERIFICACION.TABLA.CORREO_VERIFICADO_ARIALABEL' | translate"
                >
                  \u2714\uFE0F
                </span>
                } @if (!usuario.emailVerificado) {
                <span
                  class="cross"
                  [attr.aria-label]="'VERIFICACION.TABLA.CORREO_NO_VERIFICADO_ARIALABEL' | translate"
                >
                  \u274C
                </span>
                }
              </td>
            </tr>
            <tr>
              <td>{{'VERIFICACION.TABLA.LABEL_TEL\xC9FONO' | translate}}</td>
              <td>
                @if (usuario.telefonoVerificado) {
                <span
                  class="check"
                  [attr.aria-label]="'VERIFICACION.TABLA.TELEFONO_VERIFICADO_ARIALABEL' | translate"
                >
                  \u2714\uFE0F
                </span>
                } @if (!usuario.telefonoVerificado) {
                <span
                  class="cross"
                  [attr.aria-label]="'VERIFICACION.TABLA.TELEFONO_NO_VERIFICADO_ARIALABEL' | translate"
                >
                  \u274C
                </span>
                }
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div
      class="text-center recordatorio-alerta"
      [innerHTML]="'VERIFICACION.RECORDATORIO' | translate"
    ></div>
    <div class="container-fluid d-flex justify-content-center">
      <ion-row class="ion-justify-content-center fila_superior">
        <!-- Verificaci\xF3n de correo -->
        <ion-col
          size="12"
          size-md="5"
          class="ion-padding d-flex justify-content-center position-relative"
        >
          @if (cargandoEnvioEmail) {
          <app-spinner
            [tamano_completo]="false"
            [texto_spinner]="'VERIFICACION.SPINNER_ENVIANDO_MAIL' | translate"
          ></app-spinner>
          }
          <div class="mt-2 text-center">
            <p class="mb-4">
              <strong>{{'VERIFICACION.VERIFICA_CORREO' | translate}}</strong>
            </p>
            <ion-row>
              <ion-col>
                <p
                  class="text-align-justify"
                  style="font-size: 14px"
                >
                  {{'VERIFICACION.INFO_VERIF_CORREO' | translate}}
                </p>
              </ion-col>
            </ion-row>
            <ion-col>
              <div class="d-flex justify-content-center">
                <button
                  type="button"
                  class="btn btn_bg mb-4 w-100 d-flex justify-content-center align-items-center"
                  style="min-height: 48px; max-width: 320px; padding: 6px 16px"
                  mat-raised-button
                  (click)="envio_mail_verificar_correo(emailUsuario)"
                  [disabled]="usuario.emailVerificado || botonCorreoVerificado || cargandoEnvioEmail"
                >
                  @if (!cargandoEnvioEmail) {
                  <span>{{emailUsuario}}</span>
                  }
                </button>
                <p-toast position="bottom-center"></p-toast>
              </div>
            </ion-col>
          </div>
        </ion-col>
        <div class="divider-container d-none d-md-block">
          <mat-divider vertical></mat-divider>
        </div>
        <!-- Verificaci\xF3n de tel\xE9fono -->
        <ion-col
          size="12"
          size-md="5"
          class="ion-padding d-flex justify-content-center"
        >
          @if (cargandoEnvioSms) {
          <app-spinner
            [tamano_completo]="false"
            [texto_spinner]="'VERIFICACION.SPINNER_ENVIANDO_SMS' | translate"
          ></app-spinner>
          }
          <div class="mt-2 text-center">
            <p>
              <strong>{{'VERIFICACION.VERIFICA_TELEFONO' | translate}}</strong>
            </p>
            <ion-row>
              <ion-col>
                <p
                  class="text-align-justify"
                  style="font-size: 14px"
                >
                  {{'VERIFICACION.INFO_VERIF_TELEFONO' | translate}}
                </p>
              </ion-col>
            </ion-row>
            <ion-col>
              <button
                type="button"
                [disabled]="sms_enviado || usuario.telefonoVerificado"
                class="btn btn_bg"
                mat-raised-button
                (click)="enviar_sms(telefonoUsuario)"
              >
                {{telefonoUsuario}}
              </button>
            </ion-col>
            <ion-row class="mt-4"></ion-row>
            @if (!usuario.telefonoVerificado) {
            <div
              class="input-container d-flex justify-content-center mb-3"
              role="group"
              aria-label="C\xF3digo de verificaci\xF3n de 6 d\xEDgitos"
            >
              <input
                #d0
                type="text"
                maxlength="1"
                class="digit-input mx-1"
                [class.active]="focusedInput === 0"
                [(ngModel)]="codigoArray[0]"
                (input)="moveNext(d0, d1, 0)"
                (keydown)="handleBackspace($event, 0)"
                (focus)="focusedInput = 0"
                [disabled]="!inputsHabilitados"
                (paste)="handlePaste($event)"
              />
              <input
                #d1
                type="text"
                maxlength="1"
                class="digit-input mx-1"
                [class.active]="focusedInput === 1"
                [(ngModel)]="codigoArray[1]"
                (input)="moveNext(d1, d2, 1)"
                (keydown)="handleBackspace($event, 1)"
                (focus)="focusedInput = 1"
                [disabled]="!inputsHabilitados"
              />
              <input
                #d2
                type="text"
                maxlength="1"
                class="digit-input mx-1"
                [class.active]="focusedInput === 2"
                [(ngModel)]="codigoArray[2]"
                (input)="moveNext(d2, d3, 2)"
                (keydown)="handleBackspace($event, 2)"
                (focus)="focusedInput = 2"
                [disabled]="!inputsHabilitados"
              />
              <input
                #d3
                type="text"
                maxlength="1"
                class="digit-input mx-1"
                [class.active]="focusedInput === 3"
                [(ngModel)]="codigoArray[3]"
                (input)="moveNext(d3, d4, 3)"
                (keydown)="handleBackspace($event, 3)"
                (focus)="focusedInput = 3"
                [disabled]="!inputsHabilitados"
              />
              <input
                #d4
                type="text"
                maxlength="1"
                class="digit-input mx-1"
                [class.active]="focusedInput === 4"
                [(ngModel)]="codigoArray[4]"
                (input)="moveNext(d4, d5, 4)"
                (keydown)="handleBackspace($event, 4)"
                (focus)="focusedInput = 4"
                [disabled]="!inputsHabilitados"
              />
              <input
                #d5
                type="text"
                maxlength="1"
                class="digit-input mx-1"
                [class.active]="focusedInput === 5"
                [(ngModel)]="codigoArray[5]"
                (input)="updateCodigo()"
                (keydown)="handleBackspace($event, 5)"
                (focus)="focusedInput = 5"
                [disabled]="!inputsHabilitados"
              />
            </div>
            } @if (codigo_erroneo) {
            <span
              class="text-danger d-block mt-2"
              role="alert"
            >
              {{'VERIFICACION.ERROR_CODIGO_INCORRECTO' | translate}}
            </span>
            } @if (!usuario.telefonoVerificado) {
            <button
              (click)="verificar_codigo_sms(codigo)"
              type="button"
              class="btn mt-2 btn_bg"
              mat-raised-button
              [disabled]="!codigoCompleto"
            >
              {{'VERIFICACION.BOTON_VERIFICAR_TELEFONO' | translate}}
            </button>
            }
          </div>
        </ion-col>
        <div class="divider-container hide-on-mobile"></div>
      </ion-row>
    </div>
  </div>
  }
</ion-content>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/paginas-panel-usuario/verificaciones-perfil/verificaciones-perfil.page.scss */\n.input-container {\n  display: flex;\n  gap: 10px;\n}\n.boton_envio_correo {\n  position: relative;\n  height: 200px;\n  width: 300px !important;\n}\n.vbasica {\n  width: 950px;\n  text-align: center;\n  margin-left: 15rem;\n}\n.vadicional {\n  border-radius: 15px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.recordatorio-alerta {\n  color: red !important;\n  font-family:\n    "Offside",\n    "Helvetica Neue",\n    Helvetica,\n    Arial,\n    sans-serif;\n}\n.recordatorio-alerta a,\n.recordatorio-alerta a span,\n.recordatorio-alerta a strong {\n  color: #007bff !important;\n  text-decoration: underline !important;\n}\n.recordatorio-alerta a:hover,\n.recordatorio-alerta a span:hover,\n.recordatorio-alerta a strong:hover {\n  color: #0056b3 !important;\n}\n.caja {\n  margin-top: 10% !important;\n}\n.verification-table {\n  border-collapse: collapse;\n  width: 100%;\n  max-width: 300px;\n  margin: 0 auto;\n}\n.verification-table td {\n  border: 1px solid #ccc;\n  padding: 8px 12px;\n  text-align: left;\n}\n.verif-col {\n  min-width: 240px;\n  max-width: 320px;\n  flex: 0 1 300px;\n}\n.check {\n  color: rgba(219, 148, 14, 0.82);\n  font-weight: bold;\n}\n.cross {\n  color: red;\n  font-weight: bold;\n}\n.verified-message {\n  color: green !important;\n  font-weight: bold;\n  margin-top: 10px;\n}\n.digit-input {\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  font-size: 24px;\n  border: 2px solid #ccc;\n  border-radius: 8px;\n  outline: none;\n  background-color: #fff;\n  transition: border-color 0.3s;\n}\n.digit-input.active {\n  border-color: #007bff;\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\n}\n.file-upload {\n  display: inline-block;\n  position: relative;\n}\n.file-input {\n  display: none;\n}\n.upload-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  font-size: 24px;\n  font-weight: bold;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  text-align: center;\n  line-height: 1;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.fotoDocumento {\n  position: relative;\n  height: 50px;\n  width: 100px;\n}\n.floating-plus {\n  position: absolute;\n  transform: translateX(-50%);\n  font-size: 24px;\n  background-color: #B3B5E6;\n  color: black;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.filadocumentodelantero {\n  display: flex;\n  justify-content: space-between;\n}\n.upload-button:hover {\n  background-color: #E0A667;\n}\n.btn_bg {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  top: 10%;\n}\n.texto {\n  margin-top: 10%;\n}\n.mat-divider {\n  display: block;\n  height: 8px;\n  background-color: rgba(0, 0, 0, 0.12);\n  margin: 8px 0;\n}\n.divider-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 65px;\n  margin-left: 65px;\n}\n.divider-container-final {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 100px;\n  margin-left: 100px;\n}\nmat-divider[vertical] {\n  height: 100%;\n  width: 2px;\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.mat-divider-2 {\n  height: 100%;\n  width: 8px;\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.content-box {\n  max-width: 500px;\n  text-align: center;\n}\n.fila_superior {\n  margin-bottom: 7%;\n}\n@media (max-width: 576px) {\n  .mat-divider {\n    display: none;\n  }\n}\n/*# sourceMappingURL=verificaciones-perfil.page.css.map */\n'] }]
  }], () => [{ type: UserServicesService }, { type: ActivatedRoute }, { type: MessageService }, { type: TranslateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VerificacionesPerfilPage, { className: "VerificacionesPerfilPage", filePath: "src/app/pages/paginas-panel-usuario/verificaciones-perfil/verificaciones-perfil.page.ts", lineNumber: 24 });
})();
export {
  VerificacionesPerfilPage
};
//# sourceMappingURL=verificaciones-perfil.page-SWNC5T46.js.map
