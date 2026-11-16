import {
  FuncionesUsuario
} from "./chunk-WEKBOLNN.js";
import {
  Toast,
  ToastModule
} from "./chunk-H4X3A5HG.js";
import {
  NavbarComponent
} from "./chunk-YAGW6LPY.js";
import "./chunk-N25HX3QD.js";
import "./chunk-HCR355QR.js";
import "./chunk-TMB2KEQX.js";
import "./chunk-TGPQDEZS.js";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonRow
} from "./chunk-BLKEDZE4.js";
import "./chunk-N7S2XU3X.js";
import "./chunk-CIEE2FXQ.js";
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
import "./chunk-XTRPVKSN.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-PWPN4F54.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-DD4MNYDA.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  __objRest,
  __restKey,
  __spreadProps,
  __spreadValues
} from "./chunk-5SZB5ECT.js";

// src/app/pages/paginas-panel-usuario/datos-contacto/datos-contacto.page.ts
function DatosContactoPage_Conditional_32_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "DATOS_CONTACTO.CORREO_OBLIGATORIO_ERROR"));
  }
}
function DatosContactoPage_Conditional_32_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "DATOS_CONTACTO.CORREO_INVALIDO_ERROR"));
  }
}
function DatosContactoPage_Conditional_32_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "DATOS_CONTACTO.CORREO_REPETIDO_ERROR"));
  }
}
function DatosContactoPage_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275conditionalCreate(1, DatosContactoPage_Conditional_32_Conditional_1_Template, 4, 3, "div");
    \u0275\u0275conditionalCreate(2, DatosContactoPage_Conditional_32_Conditional_2_Template, 4, 3, "div");
    \u0275\u0275conditionalCreate(3, DatosContactoPage_Conditional_32_Conditional_3_Template, 4, 3, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.formEmailTfno.get("emailControl")) == null ? null : tmp_1_0.hasError("required")) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.formEmailTfno.get("emailControl")) == null ? null : tmp_2_0.hasError("pattern")) || ((tmp_2_0 = ctx_r0.formEmailTfno.get("emailControl")) == null ? null : tmp_2_0.hasError("email")) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_3_0 = ctx_r0.formEmailTfno.get("emailControl")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["emailRepetido"]) ? 3 : -1);
  }
}
function DatosContactoPage_Conditional_39_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "DATOS_CONTACTO.TELEFONO_OBLIGATORIO_ERROR"));
  }
}
function DatosContactoPage_Conditional_39_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "DATOS_CONTACTO.TELEFONO_INVALIDO_ERROR"));
  }
}
function DatosContactoPage_Conditional_39_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "DATOS_CONTACTO.TELEFONO_REPETIDO_ERROR"));
  }
}
function DatosContactoPage_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275conditionalCreate(1, DatosContactoPage_Conditional_39_Conditional_1_Template, 4, 3, "div");
    \u0275\u0275conditionalCreate(2, DatosContactoPage_Conditional_39_Conditional_2_Template, 4, 3, "div");
    \u0275\u0275conditionalCreate(3, DatosContactoPage_Conditional_39_Conditional_3_Template, 4, 3, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.formEmailTfno.get("telefonoControl")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.formEmailTfno.get("telefonoControl")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["pattern"]) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_3_0 = ctx_r0.formEmailTfno.get("telefonoControl")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["telefonoRepetido"]) ? 3 : -1);
  }
}
var DatosContactoPage = class _DatosContactoPage {
  translate;
  funcionesUsuario;
  userService;
  messageService;
  userLoggedIn = false;
  userData = {};
  emailRef;
  telefonoRef;
  comunTerceros = false;
  formEmailTfno;
  botonHabilitadoContacto = false;
  emailEditado = "";
  telefonoEditado = "";
  comunComerciales = false;
  cargandoEnvioEmail = false;
  botonCorreoVerificado = false;
  constructor(translate, funcionesUsuario, userService, messageService) {
    var _a;
    this.translate = translate;
    this.funcionesUsuario = funcionesUsuario;
    this.userService = userService;
    this.messageService = messageService;
    this.formEmailTfno = new FormGroup({
      emailControl: new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/)]),
      telefonoControl: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]{9}$/)])
    });
    this.comunTerceros = ((_a = this.userData.usuario) == null ? void 0 : _a.comunic_terceros) || false;
  }
  ngOnInit() {
    var _a, _b, _c;
    this.userData = JSON.parse(localStorage.getItem("userData") || "{}");
    if ((_a = this.userData) == null ? void 0 : _a.usuario) {
      this.userLoggedIn = true;
      this.emailEditado = this.userData.usuario.email || "";
      this.telefonoEditado = this.userData.usuario.telefono || "";
      this.formEmailTfno.patchValue({
        emailControl: this.emailEditado,
        telefonoControl: this.telefonoEditado
      });
      this.comunComerciales = !!this.userData.usuario.comunic_comerciales;
      this.comunTerceros = !!this.userData.usuario.comunic_terceros;
    } else {
      this.userLoggedIn = false;
    }
    (_b = this.formEmailTfno.get("telefonoControl")) == null ? void 0 : _b.valueChanges.subscribe((telefono) => {
      if (telefono && telefono.length === 9) {
        const inputTelefono = document.getElementById("telefonoControl");
        if (inputTelefono) {
          inputTelefono.blur();
        }
        this.comprobarTelefonoRegistrado(telefono);
      }
    });
    (_c = this.formEmailTfno.get("emailControl")) == null ? void 0 : _c.valueChanges.subscribe((email) => {
      const emailControl = this.formEmailTfno.get("emailControl");
      if (email && (emailControl == null ? void 0 : emailControl.valid) && email.includes("@") && email.includes(".")) {
        const inputEmail = document.getElementById("emailControl");
        if (inputEmail && document.activeElement === inputEmail) {
          inputEmail.blur();
        }
        this.comprobarEmailRegistrado(email);
      }
    });
  }
  comprobarTelefonoRegistrado(telefono) {
    const control = this.formEmailTfno.get("telefonoControl");
    if (!control || control.invalid || telefono.length !== 9)
      return;
    if (telefono === this.userData.usuario.telefono) {
      this.removerErrorControl(control, "telefonoRepetido");
      this.onInputChange();
      return;
    }
    this.userService.verificarTelefonoExistente(telefono).subscribe({
      next: (existe) => {
        if (existe) {
          control.setErrors(__spreadProps(__spreadValues({}, control.errors), { telefonoRepetido: true }));
        } else {
          this.removerErrorControl(control, "telefonoRepetido");
        }
        this.onInputChange();
      },
      error: (err) => {
        console.error("Error al verificar el tel\xE9fono:", err);
        this.onInputChange();
      }
    });
  }
  enviar_email_modificacion(email) {
    var _a, _b;
    this.cargandoEnvioEmail = true;
    this.botonCorreoVerificado = true;
    if ((_b = (_a = this.userData) == null ? void 0 : _a.usuario) == null ? void 0 : _b.emailVerificado) {
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
  comprobarEmailRegistrado(email) {
    const control = this.formEmailTfno.get("emailControl");
    if (!control || control.invalid || !email)
      return;
    if (email === this.userData.usuario.email) {
      this.removerErrorControl(control, "emailRepetido");
      this.onInputChange();
      return;
    }
    this.userService.verificarEmailExistente(email).subscribe({
      next: (existe) => {
        if (existe) {
          control.setErrors(__spreadProps(__spreadValues({}, control.errors), { emailRepetido: true }));
        } else {
          this.removerErrorControl(control, "emailRepetido");
        }
        this.onInputChange();
      },
      error: (err) => {
        console.error("Error al verificar el correo:", err);
        this.onInputChange();
      }
    });
  }
  // Función auxiliar para limpiar solo el error de repetición sin romper otros validadores
  removerErrorControl(control, nombreError) {
    var _a;
    if ((_a = control.errors) == null ? void 0 : _a[nombreError]) {
      const _b = control.errors, { [nombreError]: removed } = _b, rest = __objRest(_b, [__restKey(nombreError)]);
      control.setErrors(Object.keys(rest).length > 0 ? rest : null);
    }
  }
  editarCorreoTelefono() {
    console.log("userData:", this.userData);
    if (!this.userData.usuario.nombre || !this.userData.usuario.apellidos || !this.userData.usuario.genero || !this.userData.usuario.orientacion || !this.userData.usuario.fecha_nacimiento) {
      console.log("Falta alg\xFAn dato obligatorio");
      return;
    }
    const formValues = this.formEmailTfno.value;
    const nuevoUsuario = {
      nombre: this.userData.usuario.nombre,
      apellidos: this.userData.usuario.apellidos,
      pronombre: this.userData.usuario.pronombre,
      genero: this.userData.usuario.genero,
      orientacion: this.userData.usuario.orientacion,
      fecha_nacimiento: this.userData.usuario.fecha_nacimiento,
      biografia: this.userData.usuario.biografia,
      preferencias: this.userData.usuario.preferencias,
      email: formValues.emailControl,
      telefono: formValues.telefonoControl
    };
    console.log("Objeto modificado: ", nuevoUsuario);
    this.userService.editarDatosUsuario(this.userData.usuario.id, nuevoUsuario).subscribe({
      next: (response) => {
        console.log("Datos actualizados con \xE9xito", response);
      },
      error: (error) => {
        var _a;
        console.error("Error al actualizar los datos", error);
        const mensajeError = ((_a = error.error) == null ? void 0 : _a.error) || "Error al actualizar los datos";
        this.messageService.add({
          severity: "error",
          summary: this.translate.instant("DATOS_CONTACTO.ERROR_TITULO"),
          detail: this.translate.instant("DATOS_CONTACTO.ERROR_MENSAJE_YAEXISTEDATO")
        });
      },
      complete: () => {
        this.userData.usuario = __spreadValues(__spreadValues({}, this.userData.usuario), nuevoUsuario);
        localStorage.setItem("userData", JSON.stringify(this.userData));
        this.funcionesUsuario.obtenerUsuario();
        this.botonHabilitadoContacto = false;
        this.messageService.add({
          severity: "success",
          summary: this.translate.instant("DATOS_CONTACTO.TITULO_DATOSGUARDADOS"),
          detail: this.translate.instant("DATOS_CONTACTO.MENSAJE_DATOSGUARDADOS")
        });
      }
    });
  }
  // Función que se llama cuando hay un cambio en los inputs o checkboxes
  onInputChange() {
    this.botonHabilitadoContacto = this.formEmailTfno.valid;
  }
  /**
   * Edita las preferencias de comunicación del usuario
   * @returns
   */
  preferenciasComunicacion() {
    if (!this.userData.usuario.nombre || !this.userData.usuario.apellidos || !this.userData.usuario.genero || !this.userData.usuario.orientacion || !this.userData.usuario.fecha_nacimiento) {
      console.log("Falta alg\xFAn dato obligatorio");
      return;
    }
    const nuevoUsuario = {
      nombre: this.userData.usuario.nombre,
      apellidos: this.userData.usuario.apellidos,
      // pronombre: this.pronombreEditado,
      genero: this.userData.usuario.genero,
      orientacion: this.userData.usuario.orientacion,
      fecha_nacimiento: this.userData.usuario.fecha_nacimiento,
      biografia: this.userData.usuario.biografia,
      preferencias: this.userData.usuario.preferencias,
      // email: this.emailEditado || this.userData.usuario.email,
      // telefono: this.telefonoEditado || this.userData.usuario.telefono,
      comunic_comerciales: this.comunComerciales,
      comunic_terceros: this.comunTerceros
    };
    console.log("Objeto modificado: ", nuevoUsuario);
    this.userService.editarDatosUsuario(this.userData.usuario.id, nuevoUsuario).subscribe((response) => {
      console.log("Datos actualizado con exito", response);
      this.userData.usuario = __spreadValues(__spreadValues({}, this.userData.usuario), nuevoUsuario);
      localStorage.setItem("userData", JSON.stringify(this.userData));
      this.funcionesUsuario.obtenerUsuario();
    }, (error) => {
      console.error("Error al actualizar los datos", error);
    });
  }
  static \u0275fac = function DatosContactoPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DatosContactoPage)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(FuncionesUsuario), \u0275\u0275directiveInject(UserServicesService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DatosContactoPage, selectors: [["app-datos-contacto"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 62, vars: 42, consts: [[3, "backRoute", "searchRoute", "isLoggedIn"], [3, "fullscreen"], [1, "container-fluid"], [1, "col-12", "text-center"], [1, "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-center", "descripcion"], [1, "mobile"], ["size", "6", 1, "correotelefono"], [1, "text-center", "mb-4"], [1, "d-flex", "justify-content-center", "formulario"], [3, "formGroup"], [1, "mb-3"], ["for", "emailControl", 1, "form-label"], ["type", "email", "id", "emailControl", "aria-describedby", "emailError", "formControlName", "emailControl", "name", "emailControl", 1, "form-control", "inputs_emailtfno", 3, "ngModelChange"], [3, "click"], ["id", "emailError", "role", "alert", 1, "error-mensaje"], ["for", "telefonoControl", 1, "form-label"], ["type", "text", "id", "telefonoControl", "name", "telefonoControl", "aria-describedby", "telefonoError", "formControlName", "telefonoControl", 1, "form-control", "inputs_emailtfno", 3, "ngModelChange"], ["id", "telefonoError", "role", "alert", 1, "error-mensaje"], ["vertical", ""], ["role", "group", "aria-labelledby", "comerciales-label", 1, "checks"], [1, "form-check", "mb-3"], ["type", "checkbox", "name", "comunComerciales", "id", "comunComerciales", 1, "form-check-input", 3, "change", "ngModelChange", "ngModel"], ["for", "comunComerciales", 1, "form-check-label"], [1, "form-check"], ["type", "checkbox", "name", "comunTerceros", "id", "comunTerceros", 1, "form-check-input", 3, "change", "ngModelChange", "ngModel"], ["for", "comunTerceros", 1, "form-check-label"], [1, "d-flex", "justify-content-center", "mt-5"], ["position", "bottom-center"], ["type", "button", "mat-raised-button", "", 1, "btn", "btn_bg", "boton-mobile", 3, "click", "disabled"], [1, "texto-error"]], template: function DatosContactoPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar", 0);
      \u0275\u0275elementStart(1, "ion-content", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "p", 4);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 5);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "ion-grid")(14, "ion-row", 6)(15, "ion-col", 7)(16, "h4", 8);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 9)(20, "form", 10)(21, "div", 11)(22, "div")(23, "div")(24, "label", 12);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p");
      \u0275\u0275text(28, "Nota aviso cambio");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "input", 13);
      \u0275\u0275listener("ngModelChange", function DatosContactoPage_Template_input_ngModelChange_29_listener() {
        return ctx.onInputChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "button", 14);
      \u0275\u0275listener("click", function DatosContactoPage_Template_button_click_30_listener() {
        return ctx.enviar_email_modificacion(ctx.userData.usuario.email);
      });
      \u0275\u0275text(31, "Enviar");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(32, DatosContactoPage_Conditional_32_Template, 4, 3, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 11)(34, "div")(35, "label", 16);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "input", 17);
      \u0275\u0275listener("ngModelChange", function DatosContactoPage_Template_input_ngModelChange_38_listener() {
        return ctx.onInputChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(39, DatosContactoPage_Conditional_39_Template, 4, 3, "div", 18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(40, "mat-divider", 19);
      \u0275\u0275elementStart(41, "ion-col")(42, "h4", 8);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 20)(46, "div", 21)(47, "input", 22);
      \u0275\u0275listener("change", function DatosContactoPage_Template_input_change_47_listener() {
        ctx.preferenciasComunicacion();
        return ctx.onInputChange();
      });
      \u0275\u0275twoWayListener("ngModelChange", function DatosContactoPage_Template_input_ngModelChange_47_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.comunComerciales, $event) || (ctx.comunComerciales = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "label", 23);
      \u0275\u0275text(49);
      \u0275\u0275pipe(50, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 24)(52, "input", 25);
      \u0275\u0275listener("change", function DatosContactoPage_Template_input_change_52_listener() {
        ctx.preferenciasComunicacion();
        return ctx.onInputChange();
      });
      \u0275\u0275twoWayListener("ngModelChange", function DatosContactoPage_Template_input_ngModelChange_52_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.comunTerceros, $event) || (ctx.comunTerceros = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "label", 26);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(56, "ion-row", 27)(57, "div");
      \u0275\u0275element(58, "p-toast", 28);
      \u0275\u0275elementStart(59, "button", 29);
      \u0275\u0275listener("click", function DatosContactoPage_Template_button_click_59_listener() {
        return ctx.editarCorreoTelefono();
      });
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_10_0;
      let tmp_11_0;
      let tmp_13_0;
      let tmp_14_0;
      \u0275\u0275property("backRoute", "/home")("searchRoute", "search")("isLoggedIn", ctx.userLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 22, "DATOS_CONTACTO.TITULO"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 24, "DATOS_CONTACTO.DESCRIPCION_SECCION"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 26, "DATOS_CONTACTO.DESCRIPCION_SECCION_2"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 28, "DATOS_CONTACTO.MODIF_CORREO_TFNO"));
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.formEmailTfno);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 30, "DATOS_CONTACTO.MI_CORREO"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275attribute("aria-invalid", ((tmp_10_0 = ctx.formEmailTfno.get("emailControl")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.formEmailTfno.get("emailControl")) == null ? null : tmp_10_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275conditional(((tmp_11_0 = ctx.formEmailTfno.get("emailControl")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx.formEmailTfno.get("emailControl")) == null ? null : tmp_11_0.touched) ? 32 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 32, "DATOS_CONTACTO.MI_TFNO"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-invalid", ((tmp_13_0 = ctx.formEmailTfno.get("telefonoControl")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx.formEmailTfno.get("telefonoControl")) == null ? null : tmp_13_0.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_14_0 = ctx.formEmailTfno.get("telefonoControl")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx.formEmailTfno.get("telefonoControl")) == null ? null : tmp_14_0.touched) ? 39 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 34, "DATOS_CONTACTO.COM_COMERCIALES"));
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.comunComerciales);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(50, 36, "DATOS_CONTACTO.CHECK_POR_EMAIL"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.comunTerceros);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(55, 38, "DATOS_CONTACTO.CHECK_TERCEROS"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", !ctx.botonHabilitadoContacto);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(61, 40, "BOTONES.DATOSCONTACTO.GUARDAR"), " ");
    }
  }, dependencies: [
    IonGrid,
    IonCol,
    IonRow,
    IonContent,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    CheckboxControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    TranslateModule,
    NavbarComponent,
    MatDivider,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    ToastModule,
    Toast,
    TranslatePipe
  ], styles: ['@charset "UTF-8";\n\n\nh1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 1.52rem;\n}\n.error-mensaje[_ngcontent-%COMP%] {\n  color: red !important;\n  font-size: 0.955rem;\n  margin-top: 0.5rem;\n}\n.texto-error[_ngcontent-%COMP%] {\n  color: red !important;\n}\ninput[_ngcontent-%COMP%], \nbutton[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.inputs_emailtfno[_ngcontent-%COMP%] {\n  width: 400px;\n}\n.checks[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-content: center;\n}\n@media (max-width: 576px) {\n  .mobile[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n  }\n  .correotelefono[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 20px;\n  }\n  .formulario[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .inputs_emailtfno[_ngcontent-%COMP%] {\n    width: 280px;\n    margin: 0 auto;\n  }\n  .checks[_ngcontent-%COMP%] {\n    align-items: center;\n    text-align: center;\n  }\n  .boton-mobile[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex !important;\n    justify-content: center;\n    align-items: center;\n    margin-top: 200px;\n    margin-bottom: 2rem;\n  }\n  .boton-mobile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 80%;\n    max-width: 280px;\n  }\n  .descripcion[_ngcontent-%COMP%] {\n    text-align: justify;\n  }\n}\n/*# sourceMappingURL=datos-contacto.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatosContactoPage, [{
    type: Component,
    args: [{ selector: "app-datos-contacto", standalone: true, imports: [
      IonGrid,
      IonCol,
      IonRow,
      IonContent,
      FormsModule,
      TranslateModule,
      NavbarComponent,
      MatDivider,
      ReactiveFormsModule,
      ToastModule
    ], providers: [MessageService], template: `<app-navbar
  [backRoute]="'/home'"
  [searchRoute]="'search'"
  [isLoggedIn]="userLoggedIn"
></app-navbar>

<ion-content [fullscreen]="true">
  <div class="container-fluid">
    <div class="col-12 text-center">
      <h1>{{ 'DATOS_CONTACTO.TITULO' | translate }}</h1>
    </div>
    <p class="d-flex justify-content-center">{{'DATOS_CONTACTO.DESCRIPCION_SECCION' | translate}}</p>
    <p class="d-flex justify-content-center descripcion">{{'DATOS_CONTACTO.DESCRIPCION_SECCION_2' | translate}}</p>

    <ion-grid>
      <ion-row class="mobile">
        <ion-col
          size="6"
          class="correotelefono"
        >
          <h4 class="text-center mb-4">{{'DATOS_CONTACTO.MODIF_CORREO_TFNO' | translate}}</h4>
          <div class="d-flex justify-content-center formulario">
            <form [formGroup]="formEmailTfno">
              <!-- Input correo electr\xF3nico  -->
              <div class="mb-3">
                <div>
                  <div>
                    <label
                      for="emailControl"
                      class="form-label"
                    >
                      {{'DATOS_CONTACTO.MI_CORREO' | translate}}
                    </label>
                    <p>Nota aviso cambio</p>
                  </div>
                </div>
                <input
                  type="email"
                  class="form-control inputs_emailtfno"
                  id="emailControl"
                  aria-describedby="emailError"
                  [attr.aria-invalid]="formEmailTfno.get('emailControl')?.invalid && formEmailTfno.get('emailControl')?.touched"
                  formControlName="emailControl"
                  name="emailControl"
                  (ngModelChange)="onInputChange()"
                />
                <button (click)="enviar_email_modificacion(userData.usuario.email)">Enviar</button>
                @if (formEmailTfno.get('emailControl')?.invalid && formEmailTfno.get('emailControl')?.touched) {
                <div
                  id="emailError"
                  role="alert"
                  class="error-mensaje"
                >
                  <!-- Error de campo requerido -->
                  @if (formEmailTfno.get('emailControl')?.hasError('required')) {
                  <div>
                    <span class="texto-error">{{'DATOS_CONTACTO.CORREO_OBLIGATORIO_ERROR' | translate}}</span>
                  </div>
                  }
                  <!-- Error de formato inv\xE1lido -->
                  @if (formEmailTfno.get('emailControl')?.hasError('pattern') || formEmailTfno.get('emailControl')?.hasError('email')) {
                  <div>
                    <span class="texto-error">{{'DATOS_CONTACTO.CORREO_INVALIDO_ERROR' | translate}}</span>
                  </div>
                  }
                  <!-- Error de correo ya registrado -->
                  @if (formEmailTfno.get('emailControl')?.errors?.['emailRepetido']) {
                  <div>
                    <span class="texto-error">{{'DATOS_CONTACTO.CORREO_REPETIDO_ERROR' | translate}}</span>
                  </div>
                  }
                </div>
                }
              </div>

              <!-- Input tel\xE9fono  -->
              <div class="mb-3">
                <div>
                  <label
                    for="telefonoControl"
                    class="form-label"
                  >
                    {{'DATOS_CONTACTO.MI_TFNO' | translate}}
                  </label>
                </div>
                <input
                  type="text"
                  class="form-control inputs_emailtfno"
                  id="telefonoControl"
                  name="telefonoControl"
                  aria-describedby="telefonoError"
                  [attr.aria-invalid]="formEmailTfno.get('telefonoControl')?.invalid && formEmailTfno.get('telefonoControl')?.touched"
                  formControlName="telefonoControl"
                  (ngModelChange)="onInputChange()"
                />
                @if (formEmailTfno.get('telefonoControl')?.invalid && formEmailTfno.get('telefonoControl')?.touched) {
                <div
                  id="telefonoError"
                  role="alert"
                  class="error-mensaje"
                >
                  <!-- Error de campo requerido -->
                  @if (formEmailTfno.get('telefonoControl')?.errors?.['required']) {
                  <div>
                    <span class="texto-error">{{'DATOS_CONTACTO.TELEFONO_OBLIGATORIO_ERROR' | translate}}</span>
                  </div>
                  }
                  <!-- Error de formato inv\xE1lido -->
                  @if (formEmailTfno.get('telefonoControl')?.errors?.['pattern']) {
                  <div>
                    <span class="texto-error">{{'DATOS_CONTACTO.TELEFONO_INVALIDO_ERROR' | translate}}</span>
                  </div>
                  }
                  <!-- Error de tel\xE9fono ya registrado -->
                  @if (formEmailTfno.get('telefonoControl')?.errors?.['telefonoRepetido']) {
                  <div>
                    <span class="texto-error">{{'DATOS_CONTACTO.TELEFONO_REPETIDO_ERROR' | translate}}</span>
                  </div>
                  }
                </div>
                }
              </div>
            </form>
          </div>
        </ion-col>

        <mat-divider vertical=""></mat-divider>

        <ion-col>
          <h4 class="text-center mb-4">{{'DATOS_CONTACTO.COM_COMERCIALES' | translate}}</h4>
          <div
            class="checks"
            role="group"
            aria-labelledby="comerciales-label"
          >
            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="checkbox"
                name="comunComerciales"
                id="comunComerciales"
                (change)="preferenciasComunicacion(); onInputChange()"
                [(ngModel)]="comunComerciales"
              />
              <label
                class="form-check-label"
                for="comunComerciales"
              >
                {{ "DATOS_CONTACTO.CHECK_POR_EMAIL" | translate }}
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name="comunTerceros"
                id="comunTerceros"
                (change)="preferenciasComunicacion(); onInputChange()"
                [(ngModel)]="comunTerceros"
              />
              <label
                class="form-check-label"
                for="comunTerceros"
              >
                {{ "DATOS_CONTACTO.CHECK_TERCEROS" | translate }}
              </label>
            </div>
          </div>
        </ion-col>
      </ion-row>
      <ion-row class="d-flex justify-content-center mt-5">
        <div>
          <p-toast position="bottom-center"></p-toast>
          <button
            type="button"
            class="btn btn_bg boton-mobile"
            mat-raised-button
            (click)="editarCorreoTelefono()"
            [disabled]="!botonHabilitadoContacto"
          >
            {{'BOTONES.DATOSCONTACTO.GUARDAR' | translate}}
          </button>
        </div>
      </ion-row>
    </ion-grid>
  </div>
</ion-content>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/paginas-panel-usuario/datos-contacto/datos-contacto.page.scss */\nh1 {\n  margin-top: 20px;\n  font-size: 1.52rem;\n}\n.error-mensaje {\n  color: red !important;\n  font-size: 0.955rem;\n  margin-top: 0.5rem;\n}\n.texto-error {\n  color: red !important;\n}\ninput,\nbutton {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.inputs_emailtfno {\n  width: 400px;\n}\n.checks {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-content: center;\n}\n@media (max-width: 576px) {\n  .mobile {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n  }\n  .correotelefono {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 20px;\n  }\n  .formulario {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .inputs_emailtfno {\n    width: 280px;\n    margin: 0 auto;\n  }\n  .checks {\n    align-items: center;\n    text-align: center;\n  }\n  .boton-mobile {\n    width: 100%;\n    display: flex !important;\n    justify-content: center;\n    align-items: center;\n    margin-top: 200px;\n    margin-bottom: 2rem;\n  }\n  .boton-mobile button {\n    width: 80%;\n    max-width: 280px;\n  }\n  .descripcion {\n    text-align: justify;\n  }\n}\n/*# sourceMappingURL=datos-contacto.page.css.map */\n'] }]
  }], () => [{ type: TranslateService }, { type: FuncionesUsuario }, { type: UserServicesService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DatosContactoPage, { className: "DatosContactoPage", filePath: "src/app/pages/paginas-panel-usuario/datos-contacto/datos-contacto.page.ts", lineNumber: 34 });
})();
export {
  DatosContactoPage
};
//# sourceMappingURL=datos-contacto.page-EWXGDBBU.js.map
