import {
  IonCol,
  IonContent,
  IonRow
} from "./chunk-WO2ZSM4X.js";
import {
  UserServicesService
} from "./chunk-YZOGC4HD.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-XHXT42RH.js";
import {
  ActivatedRoute,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NavController,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators
} from "./chunk-TU2LK3TM.js";
import {
  CommonModule,
  NgClass,
  NgIf
} from "./chunk-7PPOBOFB.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HLETIGG3.js";
import "./chunk-46CSAHEN.js";
import "./chunk-ZANXXOCD.js";
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
import "./chunk-5SZB5ECT.js";

// src/app/pages/nueva-contrasena/nueva-contrasena.page.ts
function NuevaContrasenaPage_div_20_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 23);
    \u0275\u0275text(1, "Este campo es obligatorio. ");
    \u0275\u0275elementEnd();
  }
}
function NuevaContrasenaPage_div_20_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 23);
    \u0275\u0275text(1, "M\xEDnimo 6 caracteres. ");
    \u0275\u0275elementEnd();
  }
}
function NuevaContrasenaPage_div_20_small_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 23);
    \u0275\u0275text(1, "Al menos una may\xFAscula. Al menos un n\xFAmero o s\xEDmbolo. ");
    \u0275\u0275elementEnd();
  }
}
function NuevaContrasenaPage_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, NuevaContrasenaPage_div_20_small_1_Template, 2, 0, "small", 22)(2, NuevaContrasenaPage_div_20_small_2_Template, 2, 0, "small", 22)(3, NuevaContrasenaPage_div_20_small_3_Template, 2, 0, "small", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.formulario.get("nuevaPassword1")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.formulario.get("nuevaPassword1")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r0.formulario.get("nuevaPassword1")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
  }
}
function NuevaContrasenaPage_small_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Las contrase\xF1as no coinciden. ");
    \u0275\u0275elementEnd();
  }
}
function NuevaContrasenaPage_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "p");
    \u0275\u0275text(2, "Hemos cambiado correctamente tu contrase\xF1a");
    \u0275\u0275elementEnd()();
  }
}
function passwordsCoincidentes(group) {
  var _a, _b;
  const pass1 = (_a = group.get("nuevaPassword1")) == null ? void 0 : _a.value;
  const pass2 = (_b = group.get("nuevaPassword2")) == null ? void 0 : _b.value;
  return pass1 && pass2 && pass1 !== pass2 ? { noCoinciden: true } : null;
}
var NuevaContrasenaPage = class _NuevaContrasenaPage {
  navCtrl;
  fb;
  route;
  userService;
  translate;
  userLoggedIn = false;
  formulario;
  mostrarPassword1 = false;
  mostrarPassword2 = false;
  token;
  mensajeOkCambiada = false;
  nuevaPassword1 = "";
  nuevaPassword2 = "";
  isNuevaPassword1Valida = false;
  errorMensaje = "";
  isConfirmacionPasswordValida = false;
  constructor(navCtrl, fb, route, userService, translate) {
    this.navCtrl = navCtrl;
    this.fb = fb;
    this.route = route;
    this.userService = userService;
    this.translate = translate;
    this.formulario = this.fb.group({
      nuevaPassword1: [
        "",
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern("^(?=.*[A-Z])(?=.*[\\d\\W]).{6,}$")
        ]
      ],
      nuevaPassword2: [{ value: "", disabled: true }, Validators.required]
    }, {
      validators: passwordsCoincidentes
    });
  }
  ngOnInit() {
    var _a;
    this.token = this.route.snapshot.paramMap.get("token") || "";
    this.comprobacion_token(this.token);
    (_a = this.formulario.get("nuevaPassword1")) == null ? void 0 : _a.statusChanges.subscribe((status) => {
      const pass2 = this.formulario.get("nuevaPassword2");
      if (status === "VALID") {
        pass2 == null ? void 0 : pass2.enable();
      } else {
        pass2 == null ? void 0 : pass2.disable();
        pass2 == null ? void 0 : pass2.reset();
      }
    });
  }
  botonMostrarPassword_1() {
    this.mostrarPassword1 = !this.mostrarPassword1;
  }
  botonMostrarPassword_2() {
    this.mostrarPassword2 = !this.mostrarPassword2;
  }
  boton_cambio_pw() {
    var _a;
    if (this.formulario.invalid)
      return;
    const nuevaPassword = (_a = this.formulario.get("nuevaPassword1")) == null ? void 0 : _a.value;
    this.userService.cambiar_pw_solicitado(this.token, nuevaPassword).subscribe({
      next: (respuesta) => {
        this.formulario.reset();
        this.mensajeOkCambiada = true;
      },
      error: (err) => {
        if (err.error.error === "Token ya utilizado") {
          this.navCtrl.navigateRoot(["/token-ya-usado"]);
        }
        console.log(err);
      }
    });
  }
  comprobacion_token(token) {
    this.userService.comprobar_token(token).subscribe((respuesta) => {
      console.log("respuesta: ", respuesta);
      if (respuesta.error === "Token expirado") {
        this.navCtrl.navigateRoot(["/token-expirado"]);
      } else if (respuesta.error === "Token ya utilizado") {
        this.navCtrl.navigateRoot(["/token-ya-usado"]);
      }
    });
  }
  redireccion_home() {
    localStorage.removeItem("userData");
    setTimeout(() => {
      this.navCtrl.navigateRoot(["/"]);
    }, 250);
  }
  redireccion_con_cache() {
    setTimeout(() => {
      this.navCtrl.navigateRoot(["/"]);
    }, 250);
  }
  /**
   * Si hay nuevaPassword y además es diferente a la actual, habilitamos isNuevaPassword1 y reseteamos el mensaje de error.
   * De lo contrario, dejamos de nuevoesNuevaPasswor1 en false y lanzamos mensaje de error.
   * Resetea el campo de nuevaPassword2 para que "obligue" al usuario a escribir algo y valida de nuevo.
   */
  validarNuevaPassword() {
    if (this.nuevaPassword1 && this.nuevaPassword1) {
      this.isNuevaPassword1Valida = true;
      this.errorMensaje = "";
    } else {
      this.isNuevaPassword1Valida = false;
      this.translate.get("AJUSTESAPP.PASSWORD.NUEVA_DIF_ACTUAL").subscribe((translation) => {
        this.errorMensaje = translation;
      });
    }
    this.nuevaPassword2 = "";
    this.isConfirmacionPasswordValida = false;
  }
  /**
   * Si hay nuevaPassword2 y además es igual que la nuevaPassword1 pone la confirmación en true
   * DE lo contrario deja la confirmación en false y lanza un mensaje de error
   */
  validarConfirmacionPassword() {
    if (this.nuevaPassword2 && this.nuevaPassword2 === this.nuevaPassword1) {
      this.isConfirmacionPasswordValida = true;
      this.errorMensaje = "";
    } else {
      this.isConfirmacionPasswordValida = false;
      this.translate.get("AJUSTESAPP.PASSWORD.NO_COINCIDEN").subscribe((translation) => {
        this.errorMensaje = translation;
      });
    }
  }
  static \u0275fac = function NuevaContrasenaPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NuevaContrasenaPage)(\u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UserServicesService), \u0275\u0275directiveInject(TranslateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NuevaContrasenaPage, selectors: [["app-nueva-contrasena"]], decls: 40, vars: 20, consts: [[3, "fullscreen"], [1, "container", "d-flex", "flex-column", "align-items-center"], [1, "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-center", "mb-5"], [1, "container", "d-flex", "justify-content-center", 3, "formGroup"], ["size", "12", "size-md", "4"], [1, "box-section-2"], [1, "mb-3", "text-center"], ["for", "nuevaPassword1", 1, "form-label"], [1, "position-relative"], ["formControlName", "nuevaPassword1", "id", "nuevaPassword1", "aria-label", "Campo para escibir la nueva contrase\xF1a", 1, "form-control", "w-10", 3, "ngModelChange", "input", "type", "ngModel"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-sm", "position-absolute", "end-0", "top-50", "translate-middle-y", "me-2", 3, "click"], [1, "bi", 3, "ngClass"], [4, "ngIf"], [1, "text-center"], ["for", "nuevaPassword2", 1, "form-label", "mb-1"], ["id", "nuevaPassword2", "formControlName", "nuevaPassword2", "aria-label", "Campo para confirmar la nueva contrase\xF1a", 1, "form-control", "w-10", 3, "type"], [1, "boton_guardar", "d-flex", "justify-content-center", "mt-3"], [1, "mb-5"], ["type", "button", "mat-raised-button", "", 1, "btn", "btn_bg", 3, "click", "disabled"], ["class", "mb-5", 4, "ngIf"], ["type", "button", 1, "btn", "btn_bg", 3, "click"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]], template: function NuevaContrasenaPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
      \u0275\u0275text(4, "CREA TU NUEVA CONTRSE\xD1A");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "p", 2);
      \u0275\u0275text(6, " Recuerda que debe ser lo suficientemente segura ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 3);
      \u0275\u0275text(8, " Debe tener m\xEDnimo 6 caracteres, al menos una may\xFAscula y al menos un n\xFAmero o caracter especial. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "ion-row", 4)(10, "ion-col", 5)(11, "div", 6)(12, "div", 7)(13, "label", 8);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 9)(17, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function NuevaContrasenaPage_Template_input_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.nuevaPassword1, $event) || (ctx.nuevaPassword1 = $event);
        return $event;
      });
      \u0275\u0275listener("input", function NuevaContrasenaPage_Template_input_input_17_listener() {
        return ctx.validarNuevaPassword();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 11);
      \u0275\u0275listener("click", function NuevaContrasenaPage_Template_button_click_18_listener() {
        return ctx.botonMostrarPassword_1();
      });
      \u0275\u0275element(19, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(20, NuevaContrasenaPage_div_20_Template, 4, 3, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 14)(22, "label", 15);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 9);
      \u0275\u0275element(26, "input", 16);
      \u0275\u0275elementStart(27, "button", 11);
      \u0275\u0275listener("click", function NuevaContrasenaPage_Template_button_click_27_listener() {
        return ctx.botonMostrarPassword_2();
      });
      \u0275\u0275element(28, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(29, NuevaContrasenaPage_small_29_Template, 2, 0, "small", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "ion-row", 17)(31, "div", 18)(32, "button", 19);
      \u0275\u0275listener("click", function NuevaContrasenaPage_Template_button_click_32_listener() {
        return ctx.boton_cambio_pw();
      });
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(35, NuevaContrasenaPage_div_35_Template, 3, 0, "div", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "ion-row", 2)(37, "div", 18)(38, "button", 21);
      \u0275\u0275listener("click", function NuevaContrasenaPage_Template_button_click_38_listener() {
        return ctx.mensajeOkCambiada ? ctx.redireccion_home() : ctx.redireccion_con_cache();
      });
      \u0275\u0275text(39, " Inicio ");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      let tmp_6_0;
      let tmp_10_0;
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance(9);
      \u0275\u0275property("formGroup", ctx.formulario);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 14, "AJUSTESAPP.PASSWORD.NUEVA_CONTRAS"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("type", ctx.mostrarPassword1 ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.nuevaPassword1);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.mostrarPassword1 ? "bi-eye-slash" : "bi-eye");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.formulario.get("nuevaPassword1")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.formulario.get("nuevaPassword1")) == null ? null : tmp_6_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 16, "AJUSTESAPP.PASSWORD.CONF_NUEVA_CONTRAS"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("type", ctx.mostrarPassword2 ? "text" : "password");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.mostrarPassword2 ? "bi-eye-slash" : "bi-eye");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (ctx.formulario.errors == null ? null : ctx.formulario.errors["noCoinciden"]) && ((tmp_10_0 = ctx.formulario.get("nuevaPassword2")) == null ? null : tmp_10_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.formulario.invalid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 18, "BOTON.CAMBIAR"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.mensajeOkCambiada);
    }
  }, dependencies: [
    IonRow,
    IonCol,
    IonContent,
    CommonModule,
    NgClass,
    NgIf,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    TranslateModule,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    TranslatePipe
  ], styles: ['@charset "UTF-8";\n\n\n\nbutton.btn[_ngcontent-%COMP%]   i.fi[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #333;\n}\n.position-relative[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, \n.position-relative[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus, \n.position-relative[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active {\n  background-color: transparent !important;\n  border-color: transparent !important;\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=nueva-contrasena.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NuevaContrasenaPage, [{
    type: Component,
    args: [{ selector: "app-nueva-contrasena", standalone: true, imports: [
      IonRow,
      IonCol,
      IonContent,
      CommonModule,
      FormsModule,
      TranslateModule,
      ReactiveFormsModule
    ], template: `<ion-content [fullscreen]="true">\r
  <div class="container d-flex flex-column align-items-center">\r
    <div class="d-flex justify-content-center">\r
      <h2>CREA TU NUEVA CONTRSE\xD1A</h2>\r
    </div>\r
    <p class="d-flex justify-content-center">\r
      Recuerda que debe ser lo suficientemente segura\r
    </p>\r
    <p class="d-flex justify-content-center mb-5">\r
      Debe tener m\xEDnimo 6 caracteres, al menos una may\xFAscula y al menos un\r
      n\xFAmero o caracter especial.\r
    </p>\r
\r
    <ion-row\r
      class="container d-flex justify-content-center"\r
      [formGroup]="formulario"\r
    >\r
      <!-- Cambio de contrase\xF1a -->\r
      <ion-col size="12" size-md="4">\r
        <div class="box-section-2">\r
          <!-- Nueva contrase\xF1a1 -->\r
          <div class="mb-3 text-center">\r
            <label for="nuevaPassword1" class="form-label">\r
              {{'AJUSTESAPP.PASSWORD.NUEVA_CONTRAS' | translate}}\r
            </label>\r
            <div class="position-relative">\r
              <input\r
                [type]="mostrarPassword1 ? 'text' : 'password'"\r
                class="form-control w-10"\r
                formControlName="nuevaPassword1"\r
                id="nuevaPassword1"\r
                [(ngModel)]="nuevaPassword1"\r
                (input)="validarNuevaPassword()"\r
                aria-label="Campo para escibir la nueva contrase\xF1a"\r
              />\r
\r
              <button\r
                type="button"\r
                (click)="botonMostrarPassword_1()"\r
                class="btn btn-sm position-absolute end-0 top-50 translate-middle-y me-2"\r
                tabindex="-1"\r
              >\r
                <i\r
                  class="bi"\r
                  [ngClass]="mostrarPassword1 ? 'bi-eye-slash' : 'bi-eye'"\r
                ></i>\r
              </button>\r
            </div>\r
            <div\r
              *ngIf="formulario.get('nuevaPassword1')?.invalid && formulario.get('nuevaPassword1')?.touched"\r
            >\r
              <small\r
                class="text-danger"\r
                *ngIf="formulario.get('nuevaPassword1')?.errors?.['required']"\r
                >Este campo es obligatorio.\r
              </small>\r
              <small\r
                class="text-danger"\r
                *ngIf="formulario.get('nuevaPassword1')?.errors?.['minlength']"\r
                >M\xEDnimo 6 caracteres.\r
              </small>\r
              <small\r
                class="text-danger"\r
                *ngIf="formulario.get('nuevaPassword1')?.errors?.['pattern']"\r
                >Al menos una may\xFAscula. Al menos un n\xFAmero o s\xEDmbolo.\r
              </small>\r
            </div>\r
          </div>\r
\r
          <!-- Confirmar nueva contrase\xF1a2 -->\r
          <div class="text-center">\r
            <label for="nuevaPassword2" class="form-label mb-1">\r
              {{'AJUSTESAPP.PASSWORD.CONF_NUEVA_CONTRAS' | translate}}\r
            </label>\r
            <div class="position-relative">\r
              <input\r
                [type]="mostrarPassword2 ? 'text' : 'password'"\r
                class="form-control w-10"\r
                id="nuevaPassword2"\r
                formControlName="nuevaPassword2"\r
                aria-label="Campo para confirmar la nueva contrase\xF1a"\r
              />\r
              <button\r
                type="button"\r
                (click)="botonMostrarPassword_2()"\r
                class="btn btn-sm position-absolute end-0 top-50 translate-middle-y me-2"\r
                tabindex="-1"\r
              >\r
                <i\r
                  class="bi"\r
                  [ngClass]="mostrarPassword2 ? 'bi-eye-slash' : 'bi-eye'"\r
                ></i>\r
              </button>\r
            </div>\r
            <small\r
              *ngIf="formulario.errors?.['noCoinciden'] && formulario.get('nuevaPassword2')?.touched"\r
            >\r
              Las contrase\xF1as no coinciden.\r
            </small>\r
          </div>\r
\r
          <!-- Bot\xF3n para cambiar la contrase\xF1a -->\r
          <ion-row class="boton_guardar d-flex justify-content-center mt-3">\r
            <div class="mb-5">\r
              <button\r
                type="button"\r
                class="btn btn_bg"\r
                mat-raised-button\r
                [disabled]="formulario.invalid"\r
                (click)="boton_cambio_pw()"\r
              >\r
                {{ "BOTON.CAMBIAR" | translate }}\r
              </button>\r
            </div>\r
            <div class="mb-5" *ngIf="mensajeOkCambiada">\r
              <p>Hemos cambiado correctamente tu contrase\xF1a</p>\r
            </div>\r
          </ion-row>\r
          <ion-row class="d-flex justify-content-center">\r
            <div class="mb-5">\r
              <button\r
                type="button"\r
                class="btn btn_bg"\r
                (click)=" mensajeOkCambiada ? redireccion_home() : redireccion_con_cache()"\r
              >\r
                Inicio\r
              </button>\r
            </div>\r
          </ion-row>\r
        </div>\r
      </ion-col>\r
    </ion-row>\r
  </div>\r
</ion-content>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/nueva-contrasena/nueva-contrasena.page.scss */\nbutton.btn i.fi {\n  font-size: 1.2rem;\n  color: #333;\n}\n.position-relative .btn:hover,\n.position-relative .btn:focus,\n.position-relative .btn:active {\n  background-color: transparent !important;\n  border-color: transparent !important;\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=nueva-contrasena.page.css.map */\n'] }]
  }], () => [{ type: NavController }, { type: FormBuilder }, { type: ActivatedRoute }, { type: UserServicesService }, { type: TranslateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NuevaContrasenaPage, { className: "NuevaContrasenaPage", filePath: "src/app/pages/nueva-contrasena/nueva-contrasena.page.ts", lineNumber: 55 });
})();
export {
  NuevaContrasenaPage
};
//# sourceMappingURL=nueva-contrasena.page-GNQ5BAI2.js.map
