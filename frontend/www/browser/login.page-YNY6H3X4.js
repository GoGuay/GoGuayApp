import {
  SpinnerComponent
} from "./chunk-AZFY3OZL.js";
import {
  ModalErrorComponent
} from "./chunk-CIEE2FXQ.js";
import {
  LanguageService
} from "./chunk-G5UZDB7B.js";
import {
  MessageService
} from "./chunk-WDE6N5F6.js";
import {
  UserServicesService
} from "./chunk-34RASOLQ.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-ULIFZXTE.js";
import "./chunk-WBBLYEAR.js";
import {
  MatDialog
} from "./chunk-LLKVXR72.js";
import "./chunk-Z2EGICVD.js";
import "./chunk-XTRPVKSN.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-PWPN4F54.js";
import {
  CheckboxControlValueAccessor,
  CommonModule,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NavController,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RouterLink,
  RouterModule,
  Validators,
  environment,
  ɵNgNoValidate
} from "./chunk-DD4MNYDA.js";
import {
  Component,
  NgZone,
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
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
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

// src/app/pages/login/login.page.ts
var _c0 = (a0) => ({ "grayscale-filter": a0 });
var _c1 = () => ["/home"];
var _c2 = () => ["/forgot-password"];
var _c3 = () => ["/registro"];
function LoginPage_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " . ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "LOGIN.ERROR_EMAIL_OGLIGATORIO"));
  }
}
function LoginPage_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "LOGIN.ERROR_EMAIL_NOVALIDO"));
  }
}
function LoginPage_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275conditionalCreate(1, LoginPage_Conditional_19_Conditional_1_Template, 5, 3, "small");
    \u0275\u0275conditionalCreate(2, LoginPage_Conditional_19_Conditional_2_Template, 4, 3, "small");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.loginForm.get("emailFormControl")) == null ? null : tmp_1_0.hasError("required")) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.loginForm.get("emailFormControl")) == null ? null : tmp_2_0.hasError("email")) ? 2 : -1);
  }
}
function LoginPage_Conditional_26_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " . ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "LOGIN.ERROR_PASSWORD_OGLIGATORIO"));
  }
}
function LoginPage_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275conditionalCreate(1, LoginPage_Conditional_26_Conditional_1_Template, 5, 3, "small");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.loginForm.get("passwordFormControl")) == null ? null : tmp_1_0.hasError("required")) ? 1 : -1);
  }
}
function LoginPage_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner");
  }
}
var LoginPage = class _LoginPage {
  userService;
  navCtrl;
  dialog;
  ngZone;
  translate;
  languageService;
  messageService;
  loginForm;
  listaUsuarios = [];
  spinner_de_carga = false;
  selectedLanguage = "es";
  constructor(userService, navCtrl, dialog, ngZone, translate, languageService, messageService) {
    this.userService = userService;
    this.navCtrl = navCtrl;
    this.dialog = dialog;
    this.ngZone = ngZone;
    this.translate = translate;
    this.languageService = languageService;
    this.messageService = messageService;
    this.loginForm = new FormGroup({
      emailFormControl: new FormControl("", [Validators.required, Validators.email]),
      passwordFormControl: new FormControl("", [Validators.required]),
      check: new FormControl(false)
    });
    this.selectedLanguage = this.languageService.getLanguage() || "es";
  }
  ngOnInit() {
    this.obtenerUsuarios();
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    const rememberMe = localStorage.getItem("remember_me") === "true";
    if (rememberMe && savedEmail) {
      this.loginForm.patchValue({
        emailFormControl: savedEmail,
        passwordFormControl: savedPassword ? atob(savedPassword) : "",
        check: rememberMe
      });
    }
  }
  ngAfterViewInit() {
    this.inicializarBotonGoogle();
  }
  ionViewDidEnter() {
    setTimeout(() => {
      this.inicializarBotonGoogle();
    }, 100);
  }
  changeLanguage(selectedLanguage) {
    if (this.selectedLanguage === selectedLanguage) {
      return;
    }
    console.log(selectedLanguage);
    this.languageService.setLanguage(selectedLanguage);
    this.selectedLanguage = selectedLanguage;
    this.translate.use(selectedLanguage);
    this.translate.get(["AJUSTESAPP.OPCION_IDIOMA.ALERT_TITULO", "AJUSTESAPP.OPCION_IDIOMA.ALERT_MENSAJE"]).subscribe((translations) => {
      this.messageService.add({
        severity: "success",
        summary: translations["AJUSTESAPP.OPCION_IDIOMA.ALERT_TITULO"],
        detail: translations["AJUSTESAPP.OPCION_IDIOMA.ALERT_MENSAJE"],
        life: 3e3
      });
    });
  }
  /**
   * Función que verifica si un campo ha sido tocado
   * o si tiene algún error.
   *
   * @param field Recibe la información del input
   * @returns Devuelve true o false en función de si hay error o no.
   */
  isFieldInvalid(field) {
    const control = this.loginForm.get(field);
    return (control == null ? void 0 : control.touched) && (control == null ? void 0 : control.invalid) ? true : false;
  }
  /**
   * Función para obtener la información de todos los usuarios.
   */
  obtenerUsuarios() {
    this.userService.obtenerUsuarios().subscribe((respuesta) => {
      this.listaUsuarios = respuesta;
    }, (error) => {
      console.error("Error al obtener la lista de usuarios registrados:", error);
    });
  }
  /**
   * Función para comprobar datos del usuario y poder hacer el login
   */
  login() {
    var _a, _b;
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.spinner_de_carga = true;
    const email = (_a = this.loginForm.get("emailFormControl")) == null ? void 0 : _a.value;
    const password = (_b = this.loginForm.get("passwordFormControl")) == null ? void 0 : _b.value;
    const rememberMe = this.loginForm.value.check;
    const encodedPassword = btoa(password);
    this.userService.login(email, password).subscribe({
      next: (usuarioCompleto) => {
        localStorage.setItem("userData", JSON.stringify(usuarioCompleto));
        this.userService.actualizarEstadoUsuario(usuarioCompleto.usuario);
        if (rememberMe) {
          localStorage.setItem("email", email);
          localStorage.setItem("password", encodedPassword);
          localStorage.setItem("remember_me", "true");
        } else {
          localStorage.removeItem("email");
          localStorage.removeItem("password");
          localStorage.removeItem("remember_me");
        }
        this.navCtrl.navigateRoot(["/home"]);
      },
      error: (error) => {
        var _a2;
        this.spinner_de_carga = false;
        const title = "Error!";
        const errorMsg = ((_a2 = error.error) == null ? void 0 : _a2.Error) || "Error al iniciar sesi\xF3n. Int\xE9ntalo de nuevo.";
        this.openError(title, errorMsg);
      }
    });
  }
  /**
   * Función para mostrar una ventana modal con un mensaje de error.
   *
   * @param title Título que recibe la ventana modal
   * @param message Mensaje de error que recibe la ventana modal.
   */
  openError(title, message) {
    const dialogRef = this.dialog.open(ModalErrorComponent, {
      data: { title, message, mostrarBotonRegistro: true },
      panelClass: "dialog-animate"
    });
    dialogRef.afterClosed().subscribe((condicion) => {
      if (condicion === "registro") {
        this.navCtrl.navigateRoot(["/registro"], {
          animated: false
        });
      } else if (condicion === "reenviarCorreo") {
        this.navCtrl.navigateRoot(["/home"], {
          animated: false
        });
      } else {
        this.navCtrl.navigateRoot(["/home"], {
          animated: false
        });
      }
    });
  }
  /**
   * Función para inicializar el botón de inicio de sesión con Google.
   * @param intentos - Número de intentos realizados para inicializar el botón.
   * Se utiliza para reintentar en caso de que la API de Google no esté disponible.
   */
  inicializarBotonGoogle(intentos = 0) {
    var _a;
    if (typeof google !== "undefined" && ((_a = google == null ? void 0 : google.accounts) == null ? void 0 : _a.id)) {
      google.accounts.id.initialize({
        client_id: environment.googleClientId,
        callback: (response) => this.procesarLoginGoogle(response.credential)
      });
      const contenedor = document.getElementById("btnGoogleContainer");
      if (contenedor) {
        google.accounts.id.renderButton(contenedor, {
          theme: "outline",
          size: "large",
          text: "signin_with",
          locale: "es"
        });
      }
    } else if (intentos < 10) {
      setTimeout(() => this.inicializarBotonGoogle(intentos + 1), 200);
    } else {
      console.error("No se pudo cargar la API de Google Identity");
    }
  }
  /**
   * Función para procesar el login con Google.
   * Se encarga de enviar el token de Google al backend para autenticar al usuario.
   *
   * @param idToken - Token de identificación proporcionado por Google después de la autenticación.
   */
  procesarLoginGoogle(idToken) {
    this.spinner_de_carga = true;
    this.ngZone.run(() => {
      this.userService.loginConGoogle(idToken).subscribe({
        next: (res) => {
          if (res.usuarioExistente && res.usuario) {
            localStorage.setItem("userData", JSON.stringify(res.usuario));
            this.userService.actualizarEstadoUsuario(res.usuario);
            if (res.usuario.registroFinalizado === false && res.usuario.emailVerificado === false) {
              const title = "Error!";
              const errorMsg = "Error al iniciar sesi\xF3n. Int\xE9ntalo de nuevo.";
              this.openError(title, errorMsg);
            }
            this.navCtrl.navigateRoot("/home");
          } else {
            localStorage.setItem("tempGoogleToken", idToken);
            this.openError("Acceso denegado", "Este correo de Google no est\xE1 registrado en nuestra base de datos.");
          }
        },
        error: (err) => {
          console.error("Error al autenticar con Google:", err);
        }
      });
    });
  }
  reenviarCorreoFinReg() {
  }
  static \u0275fac = function LoginPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginPage)(\u0275\u0275directiveInject(UserServicesService), \u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(LanguageService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginPage, selectors: [["app-login"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 50, vars: 51, consts: [[1, "contenedor_login"], [1, "container"], [1, "idiomas-container", "d-flex", "flex-row", "align-items-end", "justify-content-end", "gap-3"], ["src", "../../../assets/sistema/bandera_es.svg", "tabindex", "0", "role", "button", "aria-label", "Cambiar a espa\xF1ol", 1, "icon-idioma", 3, "click", "keydown.enter", "ngClass"], ["src", "../../../assets/sistema/bandera_uk.svg", "tabindex", "0", "role", "button", "aria-label", "Cambiar a ingl\xE9s", 1, "icon-idioma", "mt-1", 3, "click", "keydown.enter", "ngClass"], [1, "d-flex", "justify-content-center", "mt-4"], ["src", "../../../assets/logo/PRIDECAR.png", "alt", "Logo de Pridecar, ir a la p\xE1gina de inicio", "role", "button", "tabindex", "0", 1, "logo_login", 3, "routerLink"], [1, "box_login", "container"], ["novalidate", "", 1, "formulario", 3, "ngSubmit", "formGroup"], [1, "mb-3", "row"], ["for", "emailFormControl", 1, "form-label"], ["type", "email", "id", "emailFormControl", "formControlName", "emailFormControl", "aria-describedby", "emailHelpBlock", 1, "form-control", 3, "placeholder"], ["id", "emailError", "aria-live", "polite", 1, "error-message"], ["for", "passwordFormControl", 1, "form-label"], ["type", "password", "id", "passwordFormControl", "formControlName", "passwordFormControl", "aria-describedby", "passwordError", 1, "form-control", 3, "placeholder"], ["id", "passwordError", "aria-live", "polite", 1, "error-message"], [1, "mb-3", "form-check"], ["type", "checkbox", "id", "check", "formControlName", "check", 1, "form-check-input"], ["for", "check", 1, "form-check-label"], [1, "text-start", "mb-4"], [1, "small", 3, "routerLink"], ["id", "btnGoogleContainer", 1, "d-flex", "justify-content-center", "mb-3"], [1, "form-label"], [1, "enlace", 3, "routerLink"], ["mat-raised-button", "", "type", "submit", 1, "btn_bg", 3, "disabled"]], template: function LoginPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "img", 3);
      \u0275\u0275listener("click", function LoginPage_Template_img_click_3_listener() {
        return ctx.changeLanguage("es");
      })("keydown.enter", function LoginPage_Template_img_keydown_enter_3_listener() {
        return ctx.changeLanguage("es");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "img", 4);
      \u0275\u0275listener("click", function LoginPage_Template_img_click_4_listener() {
        return ctx.changeLanguage("en");
      })("keydown.enter", function LoginPage_Template_img_keydown_enter_4_listener() {
        return ctx.changeLanguage("en");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 5);
      \u0275\u0275element(6, "img", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div")(8, "div", 7)(9, "h1");
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "form", 8);
      \u0275\u0275listener("ngSubmit", function LoginPage_Template_form_ngSubmit_12_listener() {
        return ctx.login();
      });
      \u0275\u0275elementStart(13, "div", 9)(14, "label", 10);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 11);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275conditionalCreate(19, LoginPage_Conditional_19_Template, 3, 2, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 9)(21, "label", 13);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "input", 14);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275conditionalCreate(26, LoginPage_Conditional_26_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 16);
      \u0275\u0275element(28, "input", 17);
      \u0275\u0275elementStart(29, "label", 18);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 19)(33, "a", 20);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(36, "div", 21);
      \u0275\u0275elementStart(37, "div", 9)(38, "span", 22);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementStart(41, "a", 23)(42, "strong");
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(45, "button", 24);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div");
      \u0275\u0275conditionalCreate(49, LoginPage_Conditional_49_Template, 1, 0, "app-spinner");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(44, _c0, ctx.selectedLanguage !== "es"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(46, _c0, ctx.selectedLanguage !== "en"));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(48, _c1));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 24, "LOGIN.TITULO"));
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 26, "LOGIN.EMAIL_LABEL"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(18, 28, "PLACEHOLDER.ESCRIBE_TU_MAIL")));
      \u0275\u0275attribute("aria-invalid", ctx.isFieldInvalid("emailFormControl"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isFieldInvalid("emailFormControl") ? 19 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 30, "LOGIN.PASSWORD_LABEL"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(25, 32, "PLACEHOLDER.ESCRIBE_PASSWORD")));
      \u0275\u0275attribute("aria-invalid", ctx.isFieldInvalid("passwordFormControl"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isFieldInvalid("passwordFormControl") ? 26 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 34, "LOGIN.RECUERDAME_CHECK"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(49, _c2));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 36, "LOGIN.PASSWORD_OLVIDADO"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 38, "LOGIN.REGISTRARSE_TEXTO"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(50, _c3));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 40, "LOGIN.REGISTRARSE_BOTON"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loginForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(47, 42, "BOTONES.LOGIN.INICIAR_SESION"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.spinner_de_carga ? 49 : -1);
    }
  }, dependencies: [CommonModule, NgClass, RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, MatButtonModule, MatButton, ReactiveFormsModule, FormGroupDirective, FormControlName, SpinnerComponent, TranslateModule, TranslatePipe], styles: ['@charset "UTF-8";\n\n\n.contenedor_login[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n.box_login[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.logo_login[_ngcontent-%COMP%] {\n  width: 170px;\n  border-radius: 50%;\n  padding: 1%;\n}\n.formulario[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 400px;\n  padding: 15px;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 35px;\n  border: 1px solid #ccc;\n  transition: border-color 0.3s ease;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border: 3px solid #9b59b6;\n  outline: none;\n}\n.form-label[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 17px;\n  margin-top: 5px;\n}\n.enlace[_ngcontent-%COMP%] {\n  color: #9b59b6;\n  text-decoration: none;\n  padding: 1%;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #9b59b6;\n}\na[_ngcontent-%COMP%]:hover {\n  border-radius: 10px;\n  background-color: #cf9456;\n  color: white;\n}\n/*# sourceMappingURL=login.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginPage, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, RouterModule, FormsModule, MatButtonModule, ReactiveFormsModule, SpinnerComponent, TranslateModule], providers: [MessageService], template: `<main class="contenedor_login">
  <div class="container">
    <!-- Selector de Idiomas -->
    <div class="idiomas-container d-flex flex-row align-items-end justify-content-end gap-3">
      <img
        src="../../../assets/sistema/bandera_es.svg"
        class="icon-idioma"
        [ngClass]="{ 'grayscale-filter': selectedLanguage !== 'es' }"
        (click)="changeLanguage('es')"
        tabindex="0"
        role="button"
        aria-label="Cambiar a espa\xF1ol"
        (keydown.enter)="changeLanguage('es')"
      />
      <img
        src="../../../assets/sistema/bandera_uk.svg"
        class="icon-idioma mt-1"
        [ngClass]="{ 'grayscale-filter': selectedLanguage !== 'en' }"
        (click)="changeLanguage('en')"
        tabindex="0"
        role="button"
        aria-label="Cambiar a ingl\xE9s"
        (keydown.enter)="changeLanguage('en')"
      />
    </div>
    <div class="d-flex justify-content-center mt-4">
      <img
        src="../../../assets/logo/PRIDECAR.png"
        alt="Logo de Pridecar, ir a la p\xE1gina de inicio"
        class="logo_login"
        role="button"
        tabindex="0"
        [routerLink]="['/home']"
      />
    </div>

    <div>
      <div class="box_login container">
        <h1>{{ 'LOGIN.TITULO' | translate }}</h1>
        <form
          [formGroup]="loginForm"
          class="formulario"
          (ngSubmit)="login()"
          novalidate
        >
          <!-- Email -->
          <div class="mb-3 row">
            <label
              for="emailFormControl"
              class="form-label"
            >
              {{ 'LOGIN.EMAIL_LABEL' | translate }}
            </label>
            <input
              type="email"
              id="emailFormControl"
              class="form-control"
              formControlName="emailFormControl"
              aria-describedby="emailHelpBlock"
              [attr.aria-invalid]="isFieldInvalid('emailFormControl')"
              placeholder="{{ 'PLACEHOLDER.ESCRIBE_TU_MAIL' | translate }}"
            />
            @if (isFieldInvalid('emailFormControl')) {
            <div
              id="emailError"
              class="error-message"
              aria-live="polite"
            >
              @if (loginForm.get('emailFormControl')?.hasError('required')) {
              <small>
                <strong>{{ 'LOGIN.ERROR_EMAIL_OGLIGATORIO' | translate }}</strong>
                .
              </small>
              } @if (loginForm.get('emailFormControl')?.hasError('email')) {
              <small>
                <strong>{{ 'LOGIN.ERROR_EMAIL_NOVALIDO' | translate }}</strong>
              </small>
              }
            </div>
            }
          </div>

          <!-- Password -->
          <div class="mb-3 row">
            <label
              for="passwordFormControl"
              class="form-label"
            >
              {{ 'LOGIN.PASSWORD_LABEL' | translate }}
            </label>
            <input
              type="password"
              id="passwordFormControl"
              class="form-control"
              formControlName="passwordFormControl"
              aria-describedby="passwordError"
              [attr.aria-invalid]="isFieldInvalid('passwordFormControl')"
              placeholder="{{ 'PLACEHOLDER.ESCRIBE_PASSWORD' | translate }}"
            />
            @if (isFieldInvalid('passwordFormControl')) {
            <div
              id="passwordError"
              class="error-message"
              aria-live="polite"
            >
              @if (loginForm.get('passwordFormControl')?.hasError('required')) {
              <small>
                <strong>{{ 'LOGIN.ERROR_PASSWORD_OGLIGATORIO' | translate }}</strong>
                .
              </small>
              }
            </div>
            }
          </div>

          <!-- Check para recordar datos -->
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="check"
              formControlName="check"
            />
            <label
              class="form-check-label"
              for="check"
            >
              {{ 'LOGIN.RECUERDAME_CHECK' | translate }}
            </label>
          </div>
          <div class="text-start mb-4">
            <a
              class="small"
              [routerLink]="['/forgot-password']"
            >
              {{ 'LOGIN.PASSWORD_OLVIDADO' | translate }}
            </a>
          </div>
          <!-- Opci\xF3n Login por Google-->
          <div
            id="btnGoogleContainer"
            class="d-flex justify-content-center mb-3"
          ></div>
          <!-- Texto de Registro -->
          <div class="mb-3 row">
            <span class="form-label">
              {{ 'LOGIN.REGISTRARSE_TEXTO' | translate }}
              <a
                [routerLink]="['/registro']"
                class="enlace"
              >
                <strong>{{ 'LOGIN.REGISTRARSE_BOTON' | translate }}</strong>
              </a>
            </span>
          </div>
          <button
            mat-raised-button
            class="btn_bg"
            type="submit"
            [disabled]="loginForm.invalid"
          >
            {{ 'BOTONES.LOGIN.INICIAR_SESION' | translate }}
          </button>
        </form>
      </div>
      <div>
        @if (spinner_de_carga) {
        <app-spinner></app-spinner>
        }
      </div>
    </div>
  </div>
</main>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/login/login.page.scss */\n.contenedor_login {\n  overflow: auto;\n}\n.box_login {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.logo_login {\n  width: 170px;\n  border-radius: 50%;\n  padding: 1%;\n}\n.formulario {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 400px;\n  padding: 15px;\n  box-sizing: border-box;\n}\n.form-control {\n  width: 100%;\n  padding: 10px;\n  border-radius: 35px;\n  border: 1px solid #ccc;\n  transition: border-color 0.3s ease;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.form-control:focus {\n  border: 3px solid #9b59b6;\n  outline: none;\n}\n.form-label {\n  margin-bottom: 5px;\n}\n.error-message {\n  color: red;\n  font-size: 17px;\n  margin-top: 5px;\n}\n.enlace {\n  color: #9b59b6;\n  text-decoration: none;\n  padding: 1%;\n}\na {\n  text-decoration: none;\n  color: #9b59b6;\n}\na:hover {\n  border-radius: 10px;\n  background-color: #cf9456;\n  color: white;\n}\n/*# sourceMappingURL=login.page.css.map */\n'] }]
  }], () => [{ type: UserServicesService }, { type: NavController }, { type: MatDialog }, { type: NgZone }, { type: TranslateService }, { type: LanguageService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginPage, { className: "LoginPage", filePath: "src/app/pages/login/login.page.ts", lineNumber: 27 });
})();
export {
  LoginPage
};
//# sourceMappingURL=login.page-YNY6H3X4.js.map
