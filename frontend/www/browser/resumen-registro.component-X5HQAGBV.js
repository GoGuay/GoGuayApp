import {
  ContratoRegistroComponent
} from "./chunk-LCZOW25B.js";
import {
  ModalController
} from "./chunk-FFMYI37T.js";
import {
  UserServicesService
} from "./chunk-43M6K65B.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-ZPEWRVEX.js";
import {
  IonItem,
  IonicModule,
  RouterLinkDelegateDirective
} from "./chunk-V5JFS32A.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-ULJI5CAD.js";
import {
  CheckboxControlValueAccessor,
  CommonModule,
  DatePipe,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NavController,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-XCBA4FSK.js";
import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
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
  __objRest,
  __restKey,
  __spreadProps,
  __spreadValues
} from "./chunk-MP5LG4CB.js";

// src/app/pages/registro/resumen-registro/resumen-registro.component.ts
var _c0 = ["seccionCondiciones"];
var _c1 = (a0, a1, a2, a3) => ({ "fi fi-rr-at": a0, "fi fi-rr-cake-birthday": a1, "fi fi-rr-id-card": a2, "fi fi-rr-phone-call": a3 });
var _c2 = (a0, a1) => ({ "fi fi-rr-venus-mars": a0, "fi fi-rs-heart-half-stroke": a1 });
function ResumenRegistroComponent_For_22_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const campo_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r1.getValorCampo(campo_r1), "dd/MM/yyyy"), " ");
  }
}
function ResumenRegistroComponent_For_22_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const campo_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getValorCampo(campo_r1), " ");
  }
}
function ResumenRegistroComponent_For_22_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275conditionalCreate(1, ResumenRegistroComponent_For_22_Conditional_6_Conditional_1_Template, 2, 4)(2, ResumenRegistroComponent_For_22_Conditional_6_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const campo_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(campo_r1 === "fecha_de_nacimiento" ? 1 : 2);
  }
}
function ResumenRegistroComponent_For_22_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 37);
    \u0275\u0275controlCreate();
    \u0275\u0275listener("change", function ResumenRegistroComponent_For_22_Conditional_7_Conditional_0_Template_input_change_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onFechaChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const campo_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formControlName", campo_r1)("max", ctx_r1.fechaMaxima);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "REGISTRO.FORM1.FNACIMIENTO.AYUDA"), " ");
  }
}
function ResumenRegistroComponent_For_22_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275controlCreate();
    \u0275\u0275listener("input", function ResumenRegistroComponent_For_22_Conditional_7_Conditional_1_Template_input_input_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.validarCampo("email"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "span", 40);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const campo_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("formControlName", campo_r1);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "REGISTRO.FORM1.CORREO.AYUDA"), " ");
  }
}
function ResumenRegistroComponent_For_22_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 41);
    \u0275\u0275controlCreate();
    \u0275\u0275listener("input", function ResumenRegistroComponent_For_22_Conditional_7_Conditional_2_Template_input_input_0_listener() {
      \u0275\u0275restoreView(_r5);
      const campo_r1 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(campo_r1 === "telefono" ? ctx_r1.validarCampo("telefono") : null);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const campo_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("formControlName", campo_r1);
    \u0275\u0275control();
  }
}
function ResumenRegistroComponent_For_22_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ResumenRegistroComponent_For_22_Conditional_7_Conditional_0_Template, 4, 5);
    \u0275\u0275conditionalCreate(1, ResumenRegistroComponent_For_22_Conditional_7_Conditional_1_Template, 4, 4);
    \u0275\u0275conditionalCreate(2, ResumenRegistroComponent_For_22_Conditional_7_Conditional_2_Template, 1, 1, "input", 36);
  }
  if (rf & 2) {
    const campo_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(campo_r1 === "fecha_de_nacimiento" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(campo_r1 === "email" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(campo_r1 !== "fecha_de_nacimiento" && campo_r1 !== "email" ? 2 : -1);
  }
}
function ResumenRegistroComponent_For_22_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 42);
    \u0275\u0275listener("click", function ResumenRegistroComponent_For_22_Conditional_9_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const campo_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activarEdicion(campo_r1));
    });
    \u0275\u0275elementEnd();
  }
}
function ResumenRegistroComponent_For_22_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function ResumenRegistroComponent_For_22_Conditional_10_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const campo_r1 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.guardar(campo_r1));
    });
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275elementEnd();
  }
}
function ResumenRegistroComponent_For_22_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, ResumenRegistroComponent_For_22_Conditional_10_Conditional_0_Template, 2, 0, "button", 43);
    \u0275\u0275elementStart(1, "button", 44);
    \u0275\u0275listener("click", function ResumenRegistroComponent_For_22_Conditional_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const campo_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.desactivarEdicion(campo_r1));
    });
    \u0275\u0275element(2, "i", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const campo_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.hayCambio(campo_r1) ? 0 : -1);
  }
}
function ResumenRegistroComponent_For_22_Conditional_11_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "REGISTRO.FORM1.CORREO.OBLIGATORIO"), " ");
  }
}
function ResumenRegistroComponent_For_22_Conditional_11_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "REGISTRO.FORM1.CORREO.FORMATO"), " ");
  }
}
function ResumenRegistroComponent_For_22_Conditional_11_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "REGISTRO.FORM1.CORREO.YAEXISTE"), " ");
  }
}
function ResumenRegistroComponent_For_22_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ResumenRegistroComponent_For_22_Conditional_11_Conditional_1_Conditional_0_Template, 3, 3, "div");
    \u0275\u0275conditionalCreate(1, ResumenRegistroComponent_For_22_Conditional_11_Conditional_1_Conditional_1_Template, 3, 3, "div");
    \u0275\u0275conditionalCreate(2, ResumenRegistroComponent_For_22_Conditional_11_Conditional_1_Conditional_2_Template, 3, 3, "div");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.tieneError("email", "required") ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tieneError("email", "pattern") ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tieneError("email", "emailRepetido") ? 2 : -1);
  }
}
function ResumenRegistroComponent_For_22_Conditional_11_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "REGISTRO.FORM2.NOMBRE_OBLIGATORIO"), " ");
  }
}
function ResumenRegistroComponent_For_22_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ResumenRegistroComponent_For_22_Conditional_11_Conditional_2_Conditional_0_Template, 3, 3, "div");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.tieneError("nombre", "required") ? 0 : -1);
  }
}
function ResumenRegistroComponent_For_22_Conditional_11_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "REGISTRO.FORM2.APELLIDOS_OBLIGATORIO"), " ");
  }
}
function ResumenRegistroComponent_For_22_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ResumenRegistroComponent_For_22_Conditional_11_Conditional_3_Conditional_0_Template, 3, 3, "div");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.tieneError("apellidos", "required") ? 0 : -1);
  }
}
function ResumenRegistroComponent_For_22_Conditional_11_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "REGISTRO.FORM2.TELEFONO.OBLIGATORIO"), " ");
  }
}
function ResumenRegistroComponent_For_22_Conditional_11_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "REGISTRO.FORM2.TELEFONO.FORMATO"), " ");
  }
}
function ResumenRegistroComponent_For_22_Conditional_11_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "REGISTRO.FORM2.TELEFONO.YAEXISTE"), " ");
  }
}
function ResumenRegistroComponent_For_22_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ResumenRegistroComponent_For_22_Conditional_11_Conditional_4_Conditional_0_Template, 3, 3, "div");
    \u0275\u0275conditionalCreate(1, ResumenRegistroComponent_For_22_Conditional_11_Conditional_4_Conditional_1_Template, 3, 3, "div");
    \u0275\u0275conditionalCreate(2, ResumenRegistroComponent_For_22_Conditional_11_Conditional_4_Conditional_2_Template, 3, 3, "div");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.tieneError("telefono", "required") ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tieneError("telefono", "pattern") ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tieneError("telefono", "telefonoRepetido") ? 2 : -1);
  }
}
function ResumenRegistroComponent_For_22_Conditional_11_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "REGISTRO.FORM2.FNACIMIENTO.INCORRECTA"), " ");
  }
}
function ResumenRegistroComponent_For_22_Conditional_11_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "REGISTRO.FORM2.FNACIMIENTO.OBLIGATORIA"), " ");
  }
}
function ResumenRegistroComponent_For_22_Conditional_11_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "REGISTRO.FORM2.FNACIMIENTO.MENOR_EDAD"), " ");
  }
}
function ResumenRegistroComponent_For_22_Conditional_11_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "REGISTRO.FORM2.FNACIMIENTO.SUPERIORACTUAL"), " ");
  }
}
function ResumenRegistroComponent_For_22_Conditional_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ResumenRegistroComponent_For_22_Conditional_11_Conditional_5_Conditional_0_Template, 3, 3, "div");
    \u0275\u0275conditionalCreate(1, ResumenRegistroComponent_For_22_Conditional_11_Conditional_5_Conditional_1_Template, 3, 3, "div");
    \u0275\u0275conditionalCreate(2, ResumenRegistroComponent_For_22_Conditional_11_Conditional_5_Conditional_2_Template, 3, 3, "div", 48);
    \u0275\u0275conditionalCreate(3, ResumenRegistroComponent_For_22_Conditional_11_Conditional_5_Conditional_3_Template, 3, 3, "div");
  }
  if (rf & 2) {
    const campo_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.tieneError(campo_r1, "fechalimite") ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tieneError(campo_r1, "required") ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tieneError(campo_r1, "menorDeEdad") ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tieneError(campo_r1, "fechaFutura") ? 3 : -1);
  }
}
function ResumenRegistroComponent_For_22_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275conditionalCreate(1, ResumenRegistroComponent_For_22_Conditional_11_Conditional_1_Template, 3, 3);
    \u0275\u0275conditionalCreate(2, ResumenRegistroComponent_For_22_Conditional_11_Conditional_2_Template, 1, 1);
    \u0275\u0275conditionalCreate(3, ResumenRegistroComponent_For_22_Conditional_11_Conditional_3_Template, 1, 1);
    \u0275\u0275conditionalCreate(4, ResumenRegistroComponent_For_22_Conditional_11_Conditional_4_Template, 3, 3);
    \u0275\u0275conditionalCreate(5, ResumenRegistroComponent_For_22_Conditional_11_Conditional_5_Template, 4, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const campo_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(campo_r1 === "email" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(campo_r1 === "nombre" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(campo_r1 === "apellidos" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(campo_r1 === "telefono" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(campo_r1 === "fecha_de_nacimiento" ? 5 : -1);
  }
}
function ResumenRegistroComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 16)(1, "div", 28);
    \u0275\u0275element(2, "i", 29);
    \u0275\u0275elementStart(3, "strong", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 31);
    \u0275\u0275conditionalCreate(6, ResumenRegistroComponent_For_22_Conditional_6_Template, 3, 1, "span", 32)(7, ResumenRegistroComponent_For_22_Conditional_7_Template, 3, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 33);
    \u0275\u0275conditionalCreate(9, ResumenRegistroComponent_For_22_Conditional_9_Template, 1, 0, "i", 34)(10, ResumenRegistroComponent_For_22_Conditional_10_Template, 3, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, ResumenRegistroComponent_For_22_Conditional_11_Template, 6, 5, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const campo_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(5, _c1, campo_r1 === "email", campo_r1 === "fecha_de_nacimiento", campo_r1 === "nombre" || campo_r1 === "apellidos", campo_r1 === "telefono"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.transformToTitleCase(campo_r1), ":");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.editando[campo_r1] ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.editando[campo_r1] ? 9 : 10);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.campoInvalidYTouched(campo_r1) ? 11 : -1);
  }
}
function ResumenRegistroComponent_For_26_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const campo_r9 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r1.validacionGenero(ctx_r1.getValorCampo(campo_r9)), " ");
  }
}
function ResumenRegistroComponent_For_26_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const campo_r9 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r1.validacionOrientacion(ctx_r1.getValorCampo(campo_r9)), " ");
  }
}
function ResumenRegistroComponent_For_26_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275conditionalCreate(1, ResumenRegistroComponent_For_26_Conditional_6_Conditional_1_Template, 1, 1)(2, ResumenRegistroComponent_For_26_Conditional_6_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const campo_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(campo_r9 === "genero" ? 1 : 2);
  }
}
function ResumenRegistroComponent_For_26_Conditional_7_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opcion_r10 = ctx.$implicit;
    const campo_r9 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", opcion_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", campo_r9 === "genero" ? ctx_r1.validacionGenero(opcion_r10) : ctx_r1.validacionOrientacion(opcion_r10), " ");
  }
}
function ResumenRegistroComponent_For_26_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 50);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(1, "option", 51);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, ResumenRegistroComponent_For_26_Conditional_7_For_5_Template, 2, 2, "option", 52, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const campo_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formControlName", campo_r9);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "REGISTRO.RESUMEN_REGISTRO.SELECCIONA"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(campo_r9 === "genero" ? ctx_r1.generos : ctx_r1.orientaciones);
  }
}
function ResumenRegistroComponent_For_26_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 42);
    \u0275\u0275listener("click", function ResumenRegistroComponent_For_26_Conditional_9_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const campo_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activarEdicion(campo_r9));
    });
    \u0275\u0275elementEnd();
  }
}
function ResumenRegistroComponent_For_26_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function ResumenRegistroComponent_For_26_Conditional_10_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const campo_r9 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.guardar(campo_r9));
    });
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275elementEnd();
  }
}
function ResumenRegistroComponent_For_26_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, ResumenRegistroComponent_For_26_Conditional_10_Conditional_0_Template, 2, 0, "button", 43);
    \u0275\u0275elementStart(1, "button", 44);
    \u0275\u0275listener("click", function ResumenRegistroComponent_For_26_Conditional_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const campo_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.desactivarEdicion(campo_r9));
    });
    \u0275\u0275element(2, "i", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const campo_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.hayCambio(campo_r9) ? 0 : -1);
  }
}
function ResumenRegistroComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 16)(1, "div", 28);
    \u0275\u0275element(2, "i", 29);
    \u0275\u0275elementStart(3, "strong", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 49);
    \u0275\u0275conditionalCreate(6, ResumenRegistroComponent_For_26_Conditional_6_Template, 3, 1, "span", 32)(7, ResumenRegistroComponent_For_26_Conditional_7_Template, 6, 4, "select", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 33);
    \u0275\u0275conditionalCreate(9, ResumenRegistroComponent_For_26_Conditional_9_Template, 1, 0, "i", 34)(10, ResumenRegistroComponent_For_26_Conditional_10_Template, 3, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const campo_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c2, campo_r9 === "genero", campo_r9 === "orientacion"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.transformToTitleCase(campo_r9), ":");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.editando[campo_r9] ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.editando[campo_r9] ? 9 : 10);
  }
}
function ResumenRegistroComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "i", 53);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\xA1Has le\xEDdo las condiciones de uso!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Pulsa en el bot\xF3n Finalizar y crear cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Recibir\xE1s un correo con un enlace que debes pulsar para completar tu registro");
    \u0275\u0275elementEnd()();
  }
}
function ResumenRegistroComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "p", 54);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "REGISTRO.RESUMEN_REGISTRO.DEBES_BAJAR"), " ");
  }
}
function ResumenRegistroComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "app-contrato-registro", 55);
    \u0275\u0275listener("lecturaCompletada", function ResumenRegistroComponent_Conditional_44_Template_app_contrato_registro_lecturaCompletada_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.alCompletarLectura());
    })("solicitarCierre", function ResumenRegistroComponent_Conditional_44_Template_app_contrato_registro_solicitarCierre_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cerrarModalCondiciones());
    });
    \u0275\u0275elementEnd()();
  }
}
var EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var ResumenRegistroComponent = class _ResumenRegistroComponent {
  fb;
  userService;
  navCtrl;
  translateService;
  modalCtrl;
  seccionCondiciones;
  formularioResumen;
  // Colecciones de campos para la plantilla
  camposColumna1 = ["email", "fecha_de_nacimiento", "nombre", "apellidos", "telefono"];
  camposColumna2 = ["genero", "orientacion"];
  // Estados de interfaz y validaciones
  emailValido = false;
  telefonoValido = false;
  fechaValida = false;
  mostrarCondiciones = false;
  condicionesAceptadas = false;
  mostrarModalCondiciones = false;
  condicionesLeidas = false;
  checkCondiciones = false;
  lecturaCompletadaEnModal = false;
  // Objetos auxiliares para edición en vivo
  original = {};
  editando = {};
  generos = ["H_CIS", "M_CIS", "TRANS", "NO_BINARIO", "INTER", "NO_FLUIDO", "OTRO", "NO_RESPONDE"];
  orientaciones = [
    "GAY",
    "LESBIANA",
    "BISEXUAL",
    "PANSEXUAL",
    "ASEXUAL",
    "DEMISEXUAL",
    "QUEER",
    "HETEROSEXUAL",
    "OTRO",
    "NO_RESPONDE"
  ];
  constructor(fb, userService, navCtrl, translateService, modalCtrl) {
    this.fb = fb;
    this.userService = userService;
    this.navCtrl = navCtrl;
    this.translateService = translateService;
    this.modalCtrl = modalCtrl;
  }
  ngOnInit() {
    const storedData = this.userService.getUsuarioData();
    console.log("storedData: ", storedData);
    if (!storedData) {
      this.navCtrl.navigateRoot("/registro");
      return;
    }
    this.inicializarFormulario(storedData);
  }
  inicializarFormulario(data) {
    var _a;
    const usuarioInfo = (data == null ? void 0 : data.datosGoogle) ?? data;
    const emailObtenido = (usuarioInfo == null ? void 0 : usuarioInfo.email) ?? ((_a = data == null ? void 0 : data.usuario) == null ? void 0 : _a.email) ?? (data == null ? void 0 : data.email) ?? "";
    this.formularioResumen = this.fb.group({
      email: [emailObtenido, [Validators.required, Validators.pattern(EMAIL_REGEX)]],
      fecha_de_nacimiento: [(usuarioInfo == null ? void 0 : usuarioInfo.fecha_nacimiento) ?? (data == null ? void 0 : data.fecha_nacimiento) ?? "", [Validators.required]],
      nombre: [(usuarioInfo == null ? void 0 : usuarioInfo.nombre) ?? (data == null ? void 0 : data.nombre) ?? "", [Validators.required]],
      apellidos: [(usuarioInfo == null ? void 0 : usuarioInfo.apellidos) ?? (data == null ? void 0 : data.apellidos) ?? "", [Validators.required]],
      telefono: [(usuarioInfo == null ? void 0 : usuarioInfo.telefono) ?? (data == null ? void 0 : data.telefono) ?? "", [Validators.required, Validators.pattern(/^[0-9]{9}$/)]],
      genero: [(usuarioInfo == null ? void 0 : usuarioInfo.genero) ?? (data == null ? void 0 : data.genero) ?? "", [Validators.required]],
      orientacion: [(usuarioInfo == null ? void 0 : usuarioInfo.orientacion) ?? (data == null ? void 0 : data.orientacion) ?? "", [Validators.required]]
    });
  }
  // --- MÉTODOS DE EDICIÓN EN LÍNEA ---
  activarEdicion(campo) {
    var _a;
    Object.keys(this.editando).forEach((key) => {
      var _a2;
      if (this.editando[key]) {
        (_a2 = this.formularioResumen.get(key)) == null ? void 0 : _a2.setValue(this.original[key]);
      }
      this.editando[key] = false;
    });
    this.original[campo] = (_a = this.formularioResumen.get(campo)) == null ? void 0 : _a.value;
    this.editando[campo] = true;
  }
  desactivarEdicion(campo) {
    var _a;
    (_a = this.formularioResumen.get(campo)) == null ? void 0 : _a.setValue(this.original[campo]);
    this.editando[campo] = false;
  }
  hayCambio(campo) {
    const control = this.formularioResumen.get(campo);
    if (!control)
      return false;
    return control.value !== this.original[campo];
  }
  guardar(campo) {
    const control = this.formularioResumen.get(campo);
    if (!control || control.invalid) {
      control == null ? void 0 : control.markAsTouched();
      return;
    }
    const nuevoValor = control.value;
    this.original[campo] = nuevoValor;
    this.editando[campo] = false;
    this.guardaDatosDelUsuarioEnServicio(campo, nuevoValor);
  }
  guardaDatosDelUsuarioEnServicio(clave, valor) {
    const usuarioDataTemp = this.userService.getUsuarioData() || {};
    const datosUsuario = __spreadProps(__spreadValues({}, usuarioDataTemp), {
      [clave]: valor
    });
    this.userService.setUsuarioData(datosUsuario);
  }
  // --- VALIDACIONES DE FORMULARIO ---
  validarCampo(controlName) {
    const control = this.formularioResumen.get(controlName);
    if (!control)
      return;
    control.markAsTouched();
    control.markAsDirty();
    control.updateValueAndValidity();
    if (control.valid) {
      if (controlName === "email") {
        this.comprobarEmailRegistrado(control.value);
      } else if (controlName === "telefono") {
        this.comprobarTelefonoRegistrado(control.value);
      }
    } else {
      this.limpiarErrorAsincrono(control, controlName === "email" ? "emailRepetido" : "telefonoRepetido");
    }
  }
  limpiarErrorAsincrono(control, errorKey) {
    var _a;
    if ((_a = control.errors) == null ? void 0 : _a[errorKey]) {
      const _b = control.errors, { [errorKey]: _ } = _b, rest = __objRest(_b, [__restKey(errorKey)]);
      control.setErrors(Object.keys(rest).length > 0 ? rest : null);
    }
  }
  comprobarEmailRegistrado(email) {
    const emailNormalizado = email.toLowerCase();
    this.userService.verificarEmailExistente(emailNormalizado).subscribe({
      next: (existe) => {
        const control = this.formularioResumen.get("email");
        const fechaControl = this.formularioResumen.get("fecha_de_nacimiento");
        if (!control)
          return;
        if (existe) {
          control.setErrors(__spreadProps(__spreadValues({}, control.errors), { emailRepetido: true }));
          this.emailValido = false;
          fechaControl == null ? void 0 : fechaControl.disable();
        } else {
          this.limpiarErrorAsincrono(control, "emailRepetido");
          if (!control.errors) {
            this.emailValido = true;
            fechaControl == null ? void 0 : fechaControl.enable();
          }
        }
      },
      error: (err) => console.error("Error al verificar email:", err)
    });
  }
  // --- LÓGICA DE FECHAS ---
  comprobarTelefonoRegistrado(telefono) {
    this.userService.verificarTelefonoExistente(telefono).subscribe({
      next: (existe) => {
        const control = this.formularioResumen.get("telefono");
        if (!control)
          return;
        if (existe) {
          control.setErrors(__spreadProps(__spreadValues({}, control.errors), { telefonoRepetido: true }));
          this.telefonoValido = false;
        } else {
          this.limpiarErrorAsincrono(control, "telefonoRepetido");
          if (!control.errors) {
            this.telefonoValido = true;
          }
        }
      },
      error: (err) => console.error("Error al verificar el tel\xE9fono:", err)
    });
  }
  onFechaChange() {
    this.validarFechaCompleta();
  }
  validarFechaCompleta() {
    const fechaControl = this.formularioResumen.get("fecha_de_nacimiento");
    const fechaValor = fechaControl == null ? void 0 : fechaControl.value;
    if (!fechaValor || fechaValor.length !== 10 || fechaValor.includes("a") || fechaValor.includes("A")) {
      fechaControl == null ? void 0 : fechaControl.setErrors({ fechalimite: true });
      this.fechaValida = false;
      return;
    }
    const partes = fechaValor.split("-");
    if (partes.length !== 3) {
      fechaControl == null ? void 0 : fechaControl.setErrors({ invalidDateFormat: true });
      this.fechaValida = false;
      return;
    }
    const anio = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1;
    const dia = parseInt(partes[2], 10);
    if (isNaN(anio) || isNaN(mes) || isNaN(dia)) {
      fechaControl == null ? void 0 : fechaControl.setErrors({ fechalimite: true });
      this.fechaValida = false;
      return;
    }
    if (fechaValor < "1930-01-01") {
      fechaControl == null ? void 0 : fechaControl.setErrors({ fechalimite: true });
      this.fechaValida = false;
      return;
    }
    const fechaSeleccionada = new Date(anio, mes, dia);
    if (isNaN(fechaSeleccionada.getTime()) || fechaSeleccionada.getFullYear() !== anio || fechaSeleccionada.getMonth() !== mes || fechaSeleccionada.getDate() !== dia) {
      fechaControl == null ? void 0 : fechaControl.setErrors({ invalidDate: true });
      this.fechaValida = false;
      return;
    }
    this.fechaValida = this.validacionEdad(fechaSeleccionada);
  }
  validacionEdad(fechaSeleccionada) {
    const fechaControl = this.formularioResumen.get("fecha_de_nacimiento");
    if (!(fechaControl == null ? void 0 : fechaControl.value))
      return false;
    const hoy = /* @__PURE__ */ new Date();
    hoy.setHours(0, 0, 0, 0);
    if (fechaSeleccionada > hoy) {
      fechaControl.setErrors(__spreadProps(__spreadValues({}, fechaControl.errors), { fechaFutura: true }));
      this.limpiarErrorAsincrono(fechaControl, "menorDeEdad");
      return false;
    }
    this.limpiarErrorAsincrono(fechaControl, "fechaFutura");
    let edad = hoy.getFullYear() - fechaSeleccionada.getFullYear();
    const mes = hoy.getMonth() - fechaSeleccionada.getMonth();
    if (mes < 0 || mes === 0 && hoy.getDate() < fechaSeleccionada.getDate()) {
      edad--;
    }
    if (edad < 18) {
      fechaControl.setErrors(__spreadProps(__spreadValues({}, fechaControl.errors), { menorDeEdad: true }));
      return false;
    }
    this.limpiarErrorAsincrono(fechaControl, "menorDeEdad");
    return true;
  }
  get fechaMaxima() {
    const hoy = /* @__PURE__ */ new Date();
    const dd = String(hoy.getDate()).padStart(2, "0");
    const mm = String(hoy.getMonth() + 1).padStart(2, "0");
    const yyyy = hoy.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  }
  // --- HELPERS: FORMATO Y TRADUCCIÓN ---
  getValorCampo(campo) {
    var _a;
    return ((_a = this.formularioResumen.get(campo)) == null ? void 0 : _a.value) ?? "";
  }
  campoInvalidYTouched(campo) {
    const control = this.formularioResumen.get(campo);
    return !!(control && control.invalid && control.touched);
  }
  tieneError(campo, errorName) {
    var _a;
    return !!((_a = this.formularioResumen.get(campo)) == null ? void 0 : _a.hasError(errorName));
  }
  transformToTitleCase(value) {
    if (!value)
      return "";
    const result = value.replace(/_/g, " ");
    return result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
  }
  validacionGenero(genero) {
    return genero ? this.translateService.instant(`SELECTOR_GENERO.${genero.toUpperCase()}`) : "";
  }
  validacionOrientacion(orientacion) {
    return orientacion ? this.translateService.instant(`SELECTOR_ORIENTACION.${orientacion.toUpperCase()}`) : "";
  }
  // --- MANEJO DE MODALES Y REGISTRO ---
  abrirModalCondiciones() {
    this.mostrarModalCondiciones = true;
    document.body.style.overflow = "hidden";
  }
  cerrarModalCondiciones() {
    this.mostrarModalCondiciones = false;
    document.body.style.overflow = "auto";
  }
  alCompletarLectura() {
    this.lecturaCompletadaEnModal = true;
    this.condicionesAceptadas = true;
  }
  finalizarRegistro() {
    if (!this.condicionesAceptadas || this.formularioResumen.invalid)
      return;
    const datosRegistro = __spreadProps(__spreadValues(__spreadValues({}, this.userService.getUsuarioData()), this.formularioResumen.value), {
      es_google: true
    });
    this.userService.registrarUsuario(datosRegistro).subscribe({
      next: (response) => {
        localStorage.setItem("pendienteConfirmacionRegistro", "true");
        this.userService.setUsuarioData(null);
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.clear();
        this.navCtrl.navigateRoot("/home");
      },
      error: (err) => {
        console.error("Error al registrar usuario:", err);
      }
    });
  }
  static \u0275fac = function ResumenRegistroComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResumenRegistroComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(UserServicesService), \u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ModalController));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResumenRegistroComponent, selectors: [["app-resumen-registro"]], viewQuery: function ResumenRegistroComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.seccionCondiciones = _t.first);
    }
  }, decls: 45, vars: 22, consts: [[1, "ventana", "mt-5"], ["id", "resumen_datos_registro", 1, "container"], ["value", "first", 1, "contenido"], ["slot", "header", 1, "white-header"], [1, "d-flex", "flex-column", "w-100"], [1, "titulo-icono"], [1, "me-1"], [1, "m-0"], [1, "d-flex", "justify-content-center", "mt-2"], ["slot", "content", 1, "ion-padding", "px-0", "px-md-5"], [1, "container", "dialog-animate", "px-0", "px-md-3"], [1, "row", "w-100", "m-0"], [3, "formGroup"], [1, "row", "w-100", "g-4", "g-md-5", "d-flex", "justify-content-center"], [1, "col-12", "col-md-5", "px-1", "px-md-3"], [1, "list-unstyled", "p-0"], [1, "d-flex", "flex-column", "mb-3"], [1, "alert", "alert-success", "text-center", "mx-4", "mt-3"], [1, "d-flex", "justify-content-center", "align-items-center", "m-4"], [1, "form-check", "d-flex", "align-items-center"], ["type", "checkbox", "id", "checkCondiciones", 1, "form-check-input", "me-2", "mt-0", 3, "ngModelChange", "disabled", "ngModel"], ["for", "checkCondiciones", 1, "form-check-label", "mb-0", "fw-bold", "texto-condiciones"], ["role", "button", 1, "terminos-link", 3, "click"], [1, "d-flex", "justify-content-center", "m-4"], [1, "text-center", "mb-5"], ["type", "button", 1, "btn", "btn_bg", "me-3", 3, "click", "disabled"], ["type", "button", "routerLink", "/home", 1, "btn", "btn_bg_secondary"], [1, "modal-overlay"], [1, "d-flex", "align-items-center", "w-100", "position-relative"], [1, "me-2", "flex-shrink-0", 3, "ngClass"], [1, "me-2", "text-nowrap", "flex-shrink-0"], [1, "flex-grow-1", "min-width-0", "d-flex"], [1, "text-truncate", "d-block"], [1, "botones_editar"], [1, "fi", "fi-rr-pencil", "ms-1", "ms-md-2", "icon-btn", 2, "cursor", "pointer"], [1, "text-danger", "small", "mt-1", "w-100", "ps-2", "ps-md-4"], ["type", "text", 1, "form-control", "form-control-sm", "w-100", 3, "formControlName"], ["type", "date", "id", "fnacimiento", "min", "1930-01-01", "autocomplete", "bday", "aria-describedby", "fnacimientoHelp", "required", "", 1, "form-control", "form-control-sm", "w-100", 3, "change", "formControlName", "max"], ["id", "fnacimientoHelp", 1, "visually-hidden"], ["type", "email", "id", "email", "name", "email", "inputmode", "email", "autocomplete", "email", "aria-describedby", "emailHelp", 1, "form-control", "form-control-sm", "w-100", 3, "input", "formControlName"], ["id", "emailHelp", 1, "visually-hidden"], ["type", "text", 1, "form-control", "form-control-sm", "w-100", 3, "input", "formControlName"], [1, "fi", "fi-rr-pencil", "ms-1", "ms-md-2", "icon-btn", 2, "cursor", "pointer", 3, "click"], ["type", "button", 1, "btn", "btn-link", "p-0", "me-1", "me-md-2", "text-dark"], ["type", "button", 1, "btn", "btn-link", "p-0", "text-dark", 3, "click"], [1, "fi", "fi-rr-circle-xmark"], ["type", "button", 1, "btn", "btn-link", "p-0", "me-1", "me-md-2", "text-dark", 3, "click"], [1, "fi", "fi-rs-disk"], [1, "error_menor"], [1, "flex-grow-1", "min-width-0"], [1, "form-control", "form-control-sm", "w-100", 3, "formControlName"], ["value", "", "disabled", "", "hidden", ""], [3, "value"], [1, "fi", "fi-rr-check-circle", "me-2"], [1, "text-center", "mb-2", "text-muted"], [3, "lecturaCompletada", "solicitarCierre"]], template: function ResumenRegistroComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "ion-item", 3)(4, "div", 4)(5, "div", 5)(6, "mat-icon", 6);
      \u0275\u0275text(7, "person_celebrate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "h4", 7);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "p", 8);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "form", 12)(18, "div", 13)(19, "div", 14)(20, "ul", 15);
      \u0275\u0275repeaterCreate(21, ResumenRegistroComponent_For_22_Template, 12, 10, "li", 16, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 14)(24, "ul", 15);
      \u0275\u0275repeaterCreate(25, ResumenRegistroComponent_For_26_Template, 11, 7, "li", 16, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275conditionalCreate(27, ResumenRegistroComponent_Conditional_27_Template, 8, 0, "div", 17);
      \u0275\u0275elementStart(28, "div", 18)(29, "div", 19)(30, "input", 20);
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function ResumenRegistroComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.condicionesAceptadas, $event) || (ctx.condicionesAceptadas = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "label", 21);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementStart(34, "a", 22);
      \u0275\u0275listener("click", function ResumenRegistroComponent_Template_a_click_34_listener() {
        return ctx.abrirModalCondiciones();
      });
      \u0275\u0275text(35, " Condiciones del Servicio ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(36, ResumenRegistroComponent_Conditional_36_Template, 4, 3, "div", 23);
      \u0275\u0275elementStart(37, "div", 24)(38, "button", 25);
      \u0275\u0275listener("click", function ResumenRegistroComponent_Template_button_click_38_listener() {
        return ctx.finalizarRegistro();
      });
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "button", 26);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(44, ResumenRegistroComponent_Conditional_44_Template, 2, 0, "div", 27);
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 12, "REGISTRO.RESUMEN_REGISTRO.TUS_DATOS"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 14, "REGISTRO.RESUMEN_REGISTRO.INFO"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.formularioResumen);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.camposColumna1);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.camposColumna2);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.condicionesAceptadas ? 27 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !ctx.lecturaCompletadaEnModal);
      \u0275\u0275twoWayProperty("ngModel", ctx.condicionesAceptadas);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 16, "REGISTRO.RESUMEN_REGISTRO.ACEPTAR_CONDICIONES_TEXTO"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(!ctx.condicionesAceptadas ? 36 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.condicionesAceptadas || ctx.formularioResumen.invalid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 18, "REGISTRO.BOTONES2.FINALIZAR_CREAR"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 20, "REGISTRO.BOTONES2.RECHAZAR"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.mostrarModalCondiciones ? 44 : -1);
    }
  }, dependencies: [CommonModule, NgClass, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, IonicModule, IonItem, RouterLinkDelegateDirective, MatIconModule, MatIcon, TranslateModule, ContratoRegistroComponent, DatePipe, TranslatePipe], styles: ['@charset "UTF-8";\n\n\n.ventana[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.error_menor[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n#resumen_datos_registro[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  margin-bottom: 2%;\n  border-radius: 15px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.titulo-icono[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  gap: 8px;\n}\na[_ngcontent-%COMP%]:not(.terminos-link) {\n  color: #B3B5E6 !important;\n  font-weight: bold;\n}\n.white-header[_ngcontent-%COMP%] {\n  background-color: #e9edd5 !important;\n  color: black !important;\n  --%NS%background: #e9edd5;\n  --%NS%ion-text-color: black !important;\n}\ndiv[slot=content][_ngcontent-%COMP%] {\n  background-color: #e9edd5 !important;\n}\nli[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\nli[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0.5rem 0.5rem;\n  font-size: 1rem;\n}\nli[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 100px;\n}\nli[_ngcontent-%COMP%]   .form-control-sm[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n  font-size: 0.9rem;\n}\n.posicion_error[_ngcontent-%COMP%] {\n  top: 40%;\n  bottom: 0;\n  z-index: 9999;\n  left: 75%;\n  position: absolute;\n}\n.boton_rechazo[_ngcontent-%COMP%] {\n  background-color: #FF4040;\n}\n.container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.lista_sugerencias[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 60px;\n  width: 44%;\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  z-index: 9999;\n  max-height: 200px;\n  overflow-y: auto;\n}\n.lista_sugerencias[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.lista_sugerencias[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n}\nbutton[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  margin-bottom: 1%;\n  border-radius: 15px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.btn_bg_cancel[_ngcontent-%COMP%] {\n  background-color: #e0b6b6 !important;\n  color: black !important;\n}\n.input-datos[_ngcontent-%COMP%] {\n  display: block;\n  width: 60%;\n  padding: 10px 10px 10px 30px;\n  margin: 20px 0;\n  border: 1px solid #ccc;\n  border-radius: 35px;\n  font-size: 1rem;\n  box-sizing: border-box;\n}\n.selectCar[_ngcontent-%COMP%] {\n  margin-bottom: 1%;\n  border-radius: 15px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  width: 50%;\n}\n.selecthour[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.selectDate[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.selectPlaces[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.form-label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\ndiv.error-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n  min-width: unset !important;\n  display: block !important;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.65);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n  padding: 16px;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.texto-condiciones[_ngcontent-%COMP%], \nlabel[for=checkCondiciones][_ngcontent-%COMP%] {\n  font-weight: bold !important;\n  color: #1a1a1a !important;\n  opacity: 1 !important;\n}\na.terminos-link[_ngcontent-%COMP%], \n.form-check[_ngcontent-%COMP%]   a.terminos-link[_ngcontent-%COMP%] {\n  color: #0d6efd !important;\n  text-decoration: underline !important;\n  font-weight: bold !important;\n  opacity: 1 !important;\n  cursor: pointer !important;\n}\na.terminos-link[_ngcontent-%COMP%]:link, \na.terminos-link[_ngcontent-%COMP%]:visited, \na.terminos-link[_ngcontent-%COMP%]:hover, \na.terminos-link[_ngcontent-%COMP%]:active, \n.form-check[_ngcontent-%COMP%]   a.terminos-link[_ngcontent-%COMP%]:link, \n.form-check[_ngcontent-%COMP%]   a.terminos-link[_ngcontent-%COMP%]:visited, \n.form-check[_ngcontent-%COMP%]   a.terminos-link[_ngcontent-%COMP%]:hover, \n.form-check[_ngcontent-%COMP%]   a.terminos-link[_ngcontent-%COMP%]:active {\n  color: #0d6efd !important;\n  text-decoration: underline !important;\n}\n.form-check-input[_ngcontent-%COMP%]:disabled    ~ .texto-condiciones[_ngcontent-%COMP%], \n.form-check-input[_ngcontent-%COMP%]:disabled    ~ label[_ngcontent-%COMP%] {\n  opacity: 1 !important;\n  color: #1a1a1a !important;\n}\napp-contrato-registro[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: 650px;\n  max-height: 85vh;\n  background: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_fadeInModal 0.25s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeInModal {\n  from {\n    opacity: 0;\n    transform: translateY(-20px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@media (max-width: 576px) {\n  [slot=content][_ngcontent-%COMP%] {\n    margin-left: 2%;\n    margin-right: 2%;\n  }\n  label[for=fecha_nacimiento][_ngcontent-%COMP%] {\n    white-space: nowrap;\n  }\n  ul[_ngcontent-%COMP%] {\n    padding: 0;\n    margin: 0 auto;\n    width: 100%;\n    text-align: left;\n  }\n  li[_ngcontent-%COMP%] {\n    justify-content: space-between;\n    white-space: nowrap;\n  }\n  li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    white-space: nowrap;\n  }\n  .error_menor[_ngcontent-%COMP%] {\n    white-space: nowrap;\n  }\n  .botones_editar[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    margin-left: auto !important;\n    padding-left: 10px;\n  }\n}\n/*# sourceMappingURL=resumen-registro.component.css.map */'], changeDetection: 1 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResumenRegistroComponent, [{
    type: Component,
    args: [{ selector: "app-resumen-registro", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, MatIconModule, TranslateModule, ContratoRegistroComponent], changeDetection: ChangeDetectionStrategy.Eager, template: `<div class="ventana mt-5">\r
  <div\r
    class="container"\r
    id="resumen_datos_registro"\r
  >\r
    <div\r
      value="first"\r
      class="contenido"\r
    >\r
      <ion-item\r
        slot="header"\r
        class="white-header"\r
      >\r
        <div class="d-flex flex-column w-100">\r
          <div class="titulo-icono">\r
            <mat-icon class="me-1">person_celebrate</mat-icon>\r
            <h4 class="m-0">\r
              {{ 'REGISTRO.RESUMEN_REGISTRO.TUS_DATOS' | translate }}\r
            </h4>\r
          </div>\r
\r
          <p class="d-flex justify-content-center mt-2">\r
            {{ 'REGISTRO.RESUMEN_REGISTRO.INFO' | translate }}\r
          </p>\r
        </div>\r
      </ion-item>\r
\r
      <div\r
        class="ion-padding px-0 px-md-5"\r
        slot="content"\r
      >\r
        <div class="container dialog-animate px-0 px-md-3">\r
          <div class="row w-100 m-0">\r
            <form [formGroup]="formularioResumen">\r
              <div class="row w-100 g-4 g-md-5 d-flex justify-content-center">\r
                <!-- Columna 1: Datos Personales Principales -->\r
                <div class="col-12 col-md-5 px-1 px-md-3">\r
                  <ul class="list-unstyled p-0">\r
                    @for (campo of camposColumna1; track campo) {\r
                      <li class="d-flex flex-column mb-3">\r
                        <!-- Fila principal con posiciones controladas -->\r
                        <div class="d-flex align-items-center w-100 position-relative">\r
                          <i\r
                            [ngClass]="{\r
                              'fi fi-rr-at': campo === 'email',\r
                              'fi fi-rr-cake-birthday': campo === 'fecha_de_nacimiento',\r
                              'fi fi-rr-id-card': campo === 'nombre' || campo === 'apellidos',\r
                              'fi fi-rr-phone-call': campo === 'telefono',\r
                            }"\r
                            class="me-2 flex-shrink-0"\r
                          ></i>\r
\r
                          <strong class="me-2 text-nowrap flex-shrink-0">{{ transformToTitleCase(campo) }}:</strong>\r
\r
                          <!-- Contenedor con ancho est\xE1tico estricto para fecha o flexible para el resto -->\r
                          <div class="flex-grow-1 min-width-0 d-flex">\r
                            @if (!editando[campo]) {\r
                              <span class="text-truncate d-block">\r
                                @if (campo === 'fecha_de_nacimiento') {\r
                                  {{ getValorCampo(campo) | date: 'dd/MM/yyyy' }}\r
                                } @else {\r
                                  {{ getValorCampo(campo) }}\r
                                }\r
                              </span>\r
                            } @else {\r
                              <!-- Campo Fecha de Nacimiento -->\r
                              @if (campo === 'fecha_de_nacimiento') {\r
                                <input\r
                                  type="date"\r
                                  class="form-control form-control-sm w-100"\r
                                  id="fnacimiento"\r
                                  [formControlName]="campo"\r
                                  min="1930-01-01"\r
                                  [max]="fechaMaxima"\r
                                  autocomplete="bday"\r
                                  aria-describedby="fnacimientoHelp"\r
                                  (change)="onFechaChange()"\r
                                  required\r
                                />\r
                                <span\r
                                  id="fnacimientoHelp"\r
                                  class="visually-hidden"\r
                                >\r
                                  {{ 'REGISTRO.FORM1.FNACIMIENTO.AYUDA' | translate }}\r
                                </span>\r
                              }\r
\r
                              <!-- Campo Email -->\r
                              @if (campo === 'email') {\r
                                <input\r
                                  type="email"\r
                                  id="email"\r
                                  name="email"\r
                                  inputmode="email"\r
                                  autocomplete="email"\r
                                  class="form-control form-control-sm w-100"\r
                                  [formControlName]="campo"\r
                                  aria-describedby="emailHelp"\r
                                  (input)="validarCampo('email')"\r
                                />\r
                                <span\r
                                  id="emailHelp"\r
                                  class="visually-hidden"\r
                                >\r
                                  {{ 'REGISTRO.FORM1.CORREO.AYUDA' | translate }}\r
                                </span>\r
                              }\r
\r
                              <!-- Campos de Texto Generales (Nombre, Apellidos, Tel\xE9fono) -->\r
                              @if (campo !== 'fecha_de_nacimiento' && campo !== 'email') {\r
                                <input\r
                                  type="text"\r
                                  class="form-control form-control-sm w-100"\r
                                  [formControlName]="campo"\r
                                  (input)="campo === 'telefono' ? validarCampo('telefono') : null"\r
                                />\r
                              }\r
                            }\r
                          </div>\r
\r
                          <!-- Acciones de edici\xF3n con margen izquierdo fijo -->\r
                          <div class="botones_editar">\r
                            @if (!editando[campo]) {\r
                              <i\r
                                class="fi fi-rr-pencil ms-1 ms-md-2 icon-btn"\r
                                style="cursor: pointer"\r
                                (click)="activarEdicion(campo)"\r
                              ></i>\r
                            } @else {\r
                              @if (hayCambio(campo)) {\r
                                <button\r
                                  type="button"\r
                                  class="btn btn-link p-0 me-1 me-md-2 text-dark"\r
                                  (click)="guardar(campo)"\r
                                >\r
                                  <i class="fi fi-rs-disk"></i>\r
                                </button>\r
                              }\r
                              <button\r
                                type="button"\r
                                class="btn btn-link p-0 text-dark"\r
                                (click)="desactivarEdicion(campo)"\r
                              >\r
                                <i class="fi fi-rr-circle-xmark"></i>\r
                              </button>\r
                            }\r
                          </div>\r
                        </div>\r
\r
                        <!-- Mensajes de error en l\xEDnea independiente -->\r
                        @if (campoInvalidYTouched(campo)) {\r
                          <div class="text-danger small mt-1 w-100 ps-2 ps-md-4">\r
                            @if (campo === 'email') {\r
                              @if (tieneError('email', 'required')) {\r
                                <div>\r
                                  {{ 'REGISTRO.FORM1.CORREO.OBLIGATORIO' | translate }}\r
                                </div>\r
                              }\r
                              @if (tieneError('email', 'pattern')) {\r
                                <div>\r
                                  {{ 'REGISTRO.FORM1.CORREO.FORMATO' | translate }}\r
                                </div>\r
                              }\r
                              @if (tieneError('email', 'emailRepetido')) {\r
                                <div>\r
                                  {{ 'REGISTRO.FORM1.CORREO.YAEXISTE' | translate }}\r
                                </div>\r
                              }\r
                            }\r
                            @if (campo === 'nombre') {\r
                              @if (tieneError('nombre', 'required')) {\r
                                <div>\r
                                  {{ 'REGISTRO.FORM2.NOMBRE_OBLIGATORIO' | translate }}\r
                                </div>\r
                              }\r
                            }\r
                            @if (campo === 'apellidos') {\r
                              @if (tieneError('apellidos', 'required')) {\r
                                <div>\r
                                  {{ 'REGISTRO.FORM2.APELLIDOS_OBLIGATORIO' | translate }}\r
                                </div>\r
                              }\r
                            }\r
                            @if (campo === 'telefono') {\r
                              @if (tieneError('telefono', 'required')) {\r
                                <div>\r
                                  {{ 'REGISTRO.FORM2.TELEFONO.OBLIGATORIO' | translate }}\r
                                </div>\r
                              }\r
                              @if (tieneError('telefono', 'pattern')) {\r
                                <div>\r
                                  {{ 'REGISTRO.FORM2.TELEFONO.FORMATO' | translate }}\r
                                </div>\r
                              }\r
                              @if (tieneError('telefono', 'telefonoRepetido')) {\r
                                <div>\r
                                  {{ 'REGISTRO.FORM2.TELEFONO.YAEXISTE' | translate }}\r
                                </div>\r
                              }\r
                            }\r
                            @if (campo === 'fecha_de_nacimiento') {\r
                              @if (tieneError(campo, 'fechalimite')) {\r
                                <div>\r
                                  {{ 'REGISTRO.FORM2.FNACIMIENTO.INCORRECTA' | translate }}\r
                                </div>\r
                              }\r
                              @if (tieneError(campo, 'required')) {\r
                                <div>\r
                                  {{ 'REGISTRO.FORM2.FNACIMIENTO.OBLIGATORIA' | translate }}\r
                                </div>\r
                              }\r
                              @if (tieneError(campo, 'menorDeEdad')) {\r
                                <div class="error_menor">\r
                                  {{ 'REGISTRO.FORM2.FNACIMIENTO.MENOR_EDAD' | translate }}\r
                                </div>\r
                              }\r
                              @if (tieneError(campo, 'fechaFutura')) {\r
                                <div>\r
                                  {{ 'REGISTRO.FORM2.FNACIMIENTO.SUPERIORACTUAL' | translate }}\r
                                </div>\r
                              }\r
                            }\r
                          </div>\r
                        }\r
                      </li>\r
                    }\r
                  </ul>\r
                </div>\r
\r
                <!-- Columna 2: G\xE9nero y Orientaci\xF3n -->\r
                <div class="col-12 col-md-5 px-1 px-md-3">\r
                  <ul class="list-unstyled p-0">\r
                    @for (campo of camposColumna2; track campo) {\r
                      <li class="d-flex flex-column mb-3">\r
                        <div class="d-flex align-items-center w-100 position-relative">\r
                          <i\r
                            [ngClass]="{\r
                              'fi fi-rr-venus-mars': campo === 'genero',\r
                              'fi fi-rs-heart-half-stroke': campo === 'orientacion',\r
                            }"\r
                            class="me-2 flex-shrink-0"\r
                          ></i>\r
\r
                          <strong class="me-2 text-nowrap flex-shrink-0">{{ transformToTitleCase(campo) }}:</strong>\r
\r
                          <div class="flex-grow-1 min-width-0">\r
                            @if (!editando[campo]) {\r
                              <span class="text-truncate d-block">\r
                                @if (campo === 'genero') {\r
                                  {{ validacionGenero(getValorCampo(campo)) }}\r
                                } @else {\r
                                  {{ validacionOrientacion(getValorCampo(campo)) }}\r
                                }\r
                              </span>\r
                            } @else {\r
                              <select\r
                                class="form-control form-control-sm w-100"\r
                                [formControlName]="campo"\r
                              >\r
                                <option\r
                                  value=""\r
                                  disabled\r
                                  hidden\r
                                >\r
                                  {{ 'REGISTRO.RESUMEN_REGISTRO.SELECCIONA' | translate }}\r
                                </option>\r
                                @for (opcion of campo === 'genero' ? generos : orientaciones; track opcion) {\r
                                  <option [value]="opcion">\r
                                    {{ campo === 'genero' ? validacionGenero(opcion) : validacionOrientacion(opcion) }}\r
                                  </option>\r
                                }\r
                              </select>\r
                            }\r
                          </div>\r
\r
                          <!-- Acciones de edici\xF3n -->\r
                          <div class="botones_editar">\r
                            @if (!editando[campo]) {\r
                              <i\r
                                class="fi fi-rr-pencil ms-1 ms-md-2 icon-btn"\r
                                style="cursor: pointer"\r
                                (click)="activarEdicion(campo)"\r
                              ></i>\r
                            } @else {\r
                              @if (hayCambio(campo)) {\r
                                <button\r
                                  type="button"\r
                                  class="btn btn-link p-0 me-1 me-md-2 text-dark"\r
                                  (click)="guardar(campo)"\r
                                >\r
                                  <i class="fi fi-rs-disk"></i>\r
                                </button>\r
                              }\r
                              <button\r
                                type="button"\r
                                class="btn btn-link p-0 text-dark"\r
                                (click)="desactivarEdicion(campo)"\r
                              >\r
                                <i class="fi fi-rr-circle-xmark"></i>\r
                              </button>\r
                            }\r
                          </div>\r
                        </div>\r
                      </li>\r
                    }\r
                  </ul>\r
                </div>\r
              </div>\r
            </form>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- SECCI\xD3N DE ACEPTACI\xD3N DE CONDICIONES Y ACCIONES -->\r
  @if (condicionesAceptadas) {\r
    <div class="alert alert-success text-center mx-4 mt-3">\r
      <i class="fi fi-rr-check-circle me-2"></i>\r
      <p>\xA1Has le\xEDdo las condiciones de uso!</p>\r
      <p>Pulsa en el bot\xF3n Finalizar y crear cuenta</p>\r
      <p>Recibir\xE1s un correo con un enlace que debes pulsar para completar tu registro</p>\r
    </div>\r
  }\r
\r
  <div class="d-flex justify-content-center align-items-center m-4">\r
    <div class="form-check d-flex align-items-center">\r
      <input\r
        class="form-check-input me-2 mt-0"\r
        type="checkbox"\r
        id="checkCondiciones"\r
        [disabled]="!lecturaCompletadaEnModal"\r
        [(ngModel)]="condicionesAceptadas"\r
      />\r
\r
      <label\r
        class="form-check-label mb-0 fw-bold texto-condiciones"\r
        for="checkCondiciones"\r
      >\r
        {{ 'REGISTRO.RESUMEN_REGISTRO.ACEPTAR_CONDICIONES_TEXTO' | translate }}\r
        <a\r
          (click)="abrirModalCondiciones()"\r
          class="terminos-link"\r
          role="button"\r
        >\r
          Condiciones del Servicio\r
        </a>\r
      </label>\r
    </div>\r
  </div>\r
\r
  @if (!condicionesAceptadas) {\r
    <div class="d-flex justify-content-center m-4">\r
      <p class="text-center mb-2 text-muted">\r
        {{ 'REGISTRO.RESUMEN_REGISTRO.DEBES_BAJAR' | translate }}\r
      </p>\r
    </div>\r
  }\r
\r
  <!-- Botones de Acci\xF3n Principal -->\r
  <div class="text-center mb-5">\r
    <button\r
      type="button"\r
      class="btn btn_bg me-3"\r
      (click)="finalizarRegistro()"\r
      [disabled]="!condicionesAceptadas || formularioResumen.invalid"\r
    >\r
      {{ 'REGISTRO.BOTONES2.FINALIZAR_CREAR' | translate }}\r
    </button>\r
\r
    <button\r
      type="button"\r
      routerLink="/home"\r
      class="btn btn_bg_secondary"\r
    >\r
      {{ 'REGISTRO.BOTONES2.RECHAZAR' | translate }}\r
    </button>\r
  </div>\r
</div>\r
\r
<!-- OVERLAY DEL MODAL DE CONTRATO -->\r
@if (mostrarModalCondiciones) {\r
  <div class="modal-overlay">\r
    <app-contrato-registro\r
      (lecturaCompletada)="alCompletarLectura()"\r
      (solicitarCierre)="cerrarModalCondiciones()"\r
    ></app-contrato-registro>\r
  </div>\r
}\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/registro/resumen-registro/resumen-registro.component.scss */\n.ventana {\n  overflow-x: auto;\n}\n.error_menor {\n  white-space: nowrap;\n}\n#resumen_datos_registro {\n  margin-top: 2%;\n  margin-bottom: 2%;\n  border-radius: 15px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.titulo-icono {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  gap: 8px;\n}\na:not(.terminos-link) {\n  color: #B3B5E6 !important;\n  font-weight: bold;\n}\n.white-header {\n  background-color: #e9edd5 !important;\n  color: black !important;\n  --background: #e9edd5;\n  --ion-text-color: black !important;\n}\ndiv[slot=content] {\n  background-color: #e9edd5 !important;\n}\nli {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\nli input {\n  margin: 0;\n  padding: 0.5rem 0.5rem;\n  font-size: 1rem;\n}\nli span {\n  display: inline-block;\n  min-width: 100px;\n}\nli .form-control-sm {\n  padding: 0.25rem;\n  font-size: 0.9rem;\n}\n.posicion_error {\n  top: 40%;\n  bottom: 0;\n  z-index: 9999;\n  left: 75%;\n  position: absolute;\n}\n.boton_rechazo {\n  background-color: #FF4040;\n}\n.container {\n  position: relative;\n}\n.lista_sugerencias {\n  position: absolute;\n  left: 60px;\n  width: 44%;\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  z-index: 9999;\n  max-height: 200px;\n  overflow-y: auto;\n}\n.lista_sugerencias li {\n  padding: 10px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.lista_sugerencias li:hover {\n  background-color: #f0f0f0;\n}\nbutton {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\ninput,\nselect {\n  margin-bottom: 1%;\n  border-radius: 15px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.btn_bg_cancel {\n  background-color: #e0b6b6 !important;\n  color: black !important;\n}\n.input-datos {\n  display: block;\n  width: 60%;\n  padding: 10px 10px 10px 30px;\n  margin: 20px 0;\n  border: 1px solid #ccc;\n  border-radius: 35px;\n  font-size: 1rem;\n  box-sizing: border-box;\n}\n.selectCar {\n  margin-bottom: 1%;\n  border-radius: 15px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  width: 50%;\n}\n.selecthour {\n  width: 20%;\n}\n.selectDate {\n  width: 30%;\n}\n.selectPlaces {\n  width: 20%;\n}\n.form-label {\n  white-space: nowrap;\n}\ndiv.error-container span {\n  color: #dc3545 !important;\n  min-width: unset !important;\n  display: block !important;\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.65);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n  padding: 16px;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.texto-condiciones,\nlabel[for=checkCondiciones] {\n  font-weight: bold !important;\n  color: #1a1a1a !important;\n  opacity: 1 !important;\n}\na.terminos-link,\n.form-check a.terminos-link {\n  color: #0d6efd !important;\n  text-decoration: underline !important;\n  font-weight: bold !important;\n  opacity: 1 !important;\n  cursor: pointer !important;\n}\na.terminos-link:link,\na.terminos-link:visited,\na.terminos-link:hover,\na.terminos-link:active,\n.form-check a.terminos-link:link,\n.form-check a.terminos-link:visited,\n.form-check a.terminos-link:hover,\n.form-check a.terminos-link:active {\n  color: #0d6efd !important;\n  text-decoration: underline !important;\n}\n.form-check-input:disabled ~ .texto-condiciones,\n.form-check-input:disabled ~ label {\n  opacity: 1 !important;\n  color: #1a1a1a !important;\n}\napp-contrato-registro {\n  display: block;\n  width: 100%;\n  max-width: 650px;\n  max-height: 85vh;\n  background: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  animation: fadeInModal 0.25s ease-out;\n}\n@keyframes fadeInModal {\n  from {\n    opacity: 0;\n    transform: translateY(-20px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@media (max-width: 576px) {\n  [slot=content] {\n    margin-left: 2%;\n    margin-right: 2%;\n  }\n  label[for=fecha_nacimiento] {\n    white-space: nowrap;\n  }\n  ul {\n    padding: 0;\n    margin: 0 auto;\n    width: 100%;\n    text-align: left;\n  }\n  li {\n    justify-content: space-between;\n    white-space: nowrap;\n  }\n  li strong {\n    white-space: nowrap;\n  }\n  .error_menor {\n    white-space: nowrap;\n  }\n  .botones_editar {\n    display: flex;\n    align-items: center;\n    margin-left: auto !important;\n    padding-left: 10px;\n  }\n}\n/*# sourceMappingURL=resumen-registro.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: UserServicesService }, { type: NavController }, { type: TranslateService }, { type: ModalController }], { seccionCondiciones: [{
    type: ViewChild,
    args: ["seccionCondiciones"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResumenRegistroComponent, { className: "ResumenRegistroComponent", filePath: "src/app/pages/registro/resumen-registro/resumen-registro.component.ts", lineNumber: 23 });
})();
export {
  ResumenRegistroComponent
};
//# debugId=94fa4c0b-8ca7-5ef0-8588-6a0c9faecbf9
//# sourceMappingURL=resumen-registro.component-X5HQAGBV.js.map
