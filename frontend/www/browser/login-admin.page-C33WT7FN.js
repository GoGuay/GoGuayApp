import {
  addIcons,
  arrowBackOutline,
  lockClosedOutline,
  mailOutline,
  shieldOutline
} from "./chunk-TDPVVR7R.js";
import {
  SpinnerComponent
} from "./chunk-XX3IZESI.js";
import {
  ModalErrorComponent
} from "./chunk-ZTUWPCV2.js";
import {
  UserServicesService
} from "./chunk-YZOGC4HD.js";
import "./chunk-ZYMQAXGI.js";
import "./chunk-UIKNRIU5.js";
import "./chunk-FCE3VLZJ.js";
import {
  MatDialog,
  MatDialogModule
} from "./chunk-CGCOLBWN.js";
import "./chunk-H72L7N4J.js";
import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonList,
  IonicModule
} from "./chunk-6IWXE3BU.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NavController,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-TU2LK3TM.js";
import {
  CommonModule,
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
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
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
import {
  __async
} from "./chunk-5SZB5ECT.js";

// src/app/pages/admin/login-admin/login-admin.page.ts
function AdminLoginPage_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Acceder al Panel");
    \u0275\u0275elementEnd();
  }
}
function AdminLoginPage_app_spinner_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner");
  }
}
var AdminLoginPage = class _AdminLoginPage {
  userService;
  navCtrl;
  dialog;
  adminForm;
  spinner_de_carga = false;
  constructor(userService, navCtrl, dialog) {
    this.userService = userService;
    this.navCtrl = navCtrl;
    this.dialog = dialog;
    addIcons({ shieldOutline, mailOutline, lockClosedOutline, arrowBackOutline });
    this.adminForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
      check: new FormControl(false)
    });
  }
  ngOnInit() {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    const rememberMe = localStorage.getItem("remember_me") === "true";
    if (rememberMe && savedEmail) {
      this.adminForm.patchValue({
        email: savedEmail,
        password: savedPassword ? atob(savedPassword) : "",
        check: rememberMe
      });
    }
  }
  /**
   * Ejecuta el login validando que el usuario tenga rol 'admin'
   */
  login() {
    return __async(this, null, function* () {
      if (this.adminForm.invalid) {
        this.adminForm.markAllAsTouched();
        return;
      }
      this.spinner_de_carga = true;
      const { email, password, check } = this.adminForm.value;
      this.userService.login(email, password).subscribe({
        next: (usuarioCompleto) => {
          if (usuarioCompleto.usuario.rolPerfil === "admin") {
            if (check) {
              localStorage.setItem("email", email);
              localStorage.setItem("password", btoa(password));
              localStorage.setItem("remember_me", "true");
            } else {
              localStorage.removeItem("email");
              localStorage.removeItem("password");
              localStorage.setItem("remember_me", "false");
            }
            localStorage.setItem("userData", JSON.stringify(usuarioCompleto));
            this.userService.actualizarEstadoUsuario(usuarioCompleto.usuario);
            this.navCtrl.navigateRoot(["/admin-app"]);
          } else {
            this.spinner_de_carga = false;
            this.openError("Acceso Restringido", "Esta cuenta no tiene privilegios de administrador.");
          }
        },
        error: (error) => {
          var _a;
          this.spinner_de_carga = false;
          const errorMsg = ((_a = error.error) == null ? void 0 : _a.Error) || "Credenciales incorrectas.";
          this.openError("Error de acceso", errorMsg);
        }
      });
    });
  }
  openError(title, message) {
    this.dialog.open(ModalErrorComponent, {
      data: { title, message },
      panelClass: "dialog-animate"
    });
  }
  static \u0275fac = function AdminLoginPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminLoginPage)(\u0275\u0275directiveInject(UserServicesService), \u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(MatDialog));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLoginPage, selectors: [["app-admin-login"]], decls: 42, vars: 4, consts: [[1, "admin-bg", "ion-padding"], [1, "login-wrapper"], [1, "login-card", "shadow-sm"], [1, "login-header", "mb-4"], [1, "icon-shield-container", "mb-2"], ["name", "shield-lock-outline"], [1, "fw-bold", "mb-1"], [1, "text-muted", "small"], [1, "form_container", 3, "ngSubmit", "formGroup"], ["lines", "none", 1, "bg-transparent"], [1, "input-group-custom", "mb-3"], [1, "form-label-custom"], [1, "custom-input"], ["name", "mail-outline", "slot", "start", 1, "input-icon"], ["formControlName", "email", "type", "email", "placeholder", "nombre@app.com", "autocomplete", "off"], ["name", "lock-closed-outline", "slot", "start", 1, "input-icon"], ["formControlName", "password", "type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"], [1, "d-flex", "align-items-center", "justify-content-start", "my-3", "px-2"], [1, "checkbox-container", "small", "text-muted"], ["type", "checkbox", "formControlName", "check", "id", "check"], [1, "checkmark"], [1, "mt-4"], ["expand", "block", "type", "submit", 1, "btn-admin-submit", 3, "disabled"], [4, "ngIf"], [1, "footer-links", "mt-4", "pt-2"], [1, "text-center", "infoAdmin", "small"], ["fill", "clear", "color", "dark", "size", "small", 1, "btn-volver", 3, "click"], ["name", "arrow-back-outline", "slot", "start"]], template: function AdminLoginPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "ion-icon", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h2", 6);
      \u0275\u0275text(7, "Portal de Administraci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 7);
      \u0275\u0275text(9, "Gesti\xF3n de la plataforma GoGuay");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "form", 8);
      \u0275\u0275listener("ngSubmit", function AdminLoginPage_Template_form_ngSubmit_10_listener() {
        return ctx.login();
      });
      \u0275\u0275elementStart(11, "ion-list", 9)(12, "div", 10)(13, "label", 11);
      \u0275\u0275text(14, "Email Corporativo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "ion-item", 12);
      \u0275\u0275element(16, "ion-icon", 13)(17, "input", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 10)(19, "label", 11);
      \u0275\u0275text(20, "Contrase\xF1a");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "ion-item", 12);
      \u0275\u0275element(22, "ion-icon", 15)(23, "input", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 17)(25, "label", 18);
      \u0275\u0275element(26, "input", 19)(27, "span", 20);
      \u0275\u0275text(28, " Recu\xE9rdame en este equipo ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 21)(30, "ion-button", 22);
      \u0275\u0275template(31, AdminLoginPage_span_31_Template, 2, 0, "span", 23)(32, AdminLoginPage_app_spinner_32_Template, 1, 0, "app-spinner", 23);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(33, "div", 24)(34, "p", 25);
      \u0275\u0275text(35, " Acceso exclusivo para el personal de administraci\xF3n de ");
      \u0275\u0275elementStart(36, "strong");
      \u0275\u0275text(37, "GoGuay App");
      \u0275\u0275elementEnd();
      \u0275\u0275text(38, ". ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "ion-button", 26);
      \u0275\u0275listener("click", function AdminLoginPage_Template_ion_button_click_39_listener() {
        return ctx.navCtrl.back();
      });
      \u0275\u0275element(40, "ion-icon", 27);
      \u0275\u0275text(41, " Volver a GoGuay ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("formGroup", ctx.adminForm);
      \u0275\u0275advance(20);
      \u0275\u0275property("disabled", ctx.spinner_de_carga);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.spinner_de_carga);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.spinner_de_carga);
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    CheckboxControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    IonicModule,
    IonButton,
    IonContent,
    IonIcon,
    IonItem,
    IonList,
    SpinnerComponent,
    MatDialogModule
  ], styles: ['\n\nion-content.admin-bg[_ngcontent-%COMP%] {\n  --background: #E9EDD5 !important;\n}\n.login-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100%;\n  padding: 16px;\n}\n.login-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 35px;\n  padding: 32px 24px;\n  width: 100%;\n  max-width: 400px;\n  text-align: center;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05) !important;\n}\n.icon-shield-container[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 64px;\n  height: 64px;\n  background-color: #F0D7B4;\n  border-radius: 50%;\n  margin-bottom: 8px;\n}\n.icon-shield-container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #2c2c2c;\n}\n.login-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #2c2c2c;\n  font-size: 1.35rem;\n}\n.form-label-custom[_ngcontent-%COMP%] {\n  display: block;\n  text-align: left;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #5a6268;\n  margin-left: 12px;\n  margin-bottom: 4px;\n}\n.custom-input[_ngcontent-%COMP%] {\n  --background: #f8f9fa !important;\n  --border-radius: 35px !important;\n  --padding-start: 16px !important;\n  --padding-end: 16px !important;\n  --highlight-height: 0px !important;\n  --inner-padding-end: 0px !important;\n  --border-width: 0px !important;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 35px !important;\n  transition: all 0.25s ease;\n}\n.custom-input[_ngcontent-%COMP%]:focus-within {\n  border-color: #b3b5e6 !important;\n  box-shadow: 0 0 0 3px rgba(179, 181, 230, 0.25) !important;\n}\n.custom-input[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  color: #888888;\n  font-size: 1.1rem;\n  margin-right: 8px;\n}\n.custom-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none !important;\n  outline: none !important;\n  box-shadow: none !important;\n  background: transparent !important;\n  width: 100%;\n  padding: 12px 0;\n  font-size: 0.95rem;\n  color: #2c2c2c;\n}\n.custom-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.custom-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active, \n.custom-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill {\n  border: none !important;\n  outline: none !important;\n  box-shadow: none !important;\n  -webkit-box-shadow: 0 0 0px 1000px #f8f9fa inset !important;\n}\n  ion-item.custom-input .item-native {\n  --highlight-background: transparent !important;\n  --inner-border-width: 0px !important;\n  border: none !important;\n  box-shadow: none !important;\n}\n.checkbox-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.checkbox-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.checkbox-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #b3b5e6;\n  border-color: #b3b5e6;\n}\n.checkbox-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n}\n.checkbox-container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 18px;\n  background-color: #ffffff;\n  border: 1.5px solid #cccccc;\n  border-radius: 6px;\n  margin-right: 8px;\n  position: relative;\n  transition: all 0.2s ease;\n}\n.checkbox-container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  display: none;\n  left: 5px;\n  top: 2px;\n  width: 5px;\n  height: 9px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n.btn-admin-submit[_ngcontent-%COMP%] {\n  --background: #b3b5e6 !important;\n  --color: #ffffff !important;\n  --border-radius: 35px !important;\n  font-weight: 700;\n  margin: 0;\n  box-shadow: 0 6px 18px rgba(179, 181, 230, 0.4);\n}\n.btn-admin-submit[disabled][_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.infoAdmin[_ngcontent-%COMP%] {\n  color: #6c757d;\n  line-height: 1.4;\n}\n.btn-volver[_ngcontent-%COMP%] {\n  --color: #5a6268;\n  font-weight: 600;\n  --border-radius: 35px;\n}\n/*# sourceMappingURL=login-admin.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminLoginPage, [{
    type: Component,
    args: [{ selector: "app-admin-login", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      IonicModule,
      SpinnerComponent,
      MatDialogModule
    ], template: '<ion-content class="admin-bg ion-padding">\n    <div class="login-wrapper">\n        <div class="login-card shadow-sm">\n            \n            <div class="login-header mb-4">\n                <div class="icon-shield-container mb-2">\n                    <ion-icon name="shield-lock-outline"></ion-icon>\n                </div>\n                <h2 class="fw-bold mb-1">Portal de Administraci\xF3n</h2>\n                <p class="text-muted small">Gesti\xF3n de la plataforma GoGuay</p>\n            </div>\n\n            <form class="form_container" [formGroup]="adminForm" (ngSubmit)="login()">\n                <ion-list lines="none" class="bg-transparent">\n                    \n                    <div class="input-group-custom mb-3">\n                        <label class="form-label-custom">Email Corporativo</label>\n                        <ion-item class="custom-input">\n                            <ion-icon name="mail-outline" slot="start" class="input-icon"></ion-icon>\n                            <input formControlName="email" type="email" placeholder="nombre@app.com" autocomplete="off">\n                        </ion-item>\n                    </div>\n\n                    <div class="input-group-custom mb-3">\n                        <label class="form-label-custom">Contrase\xF1a</label>\n                        <ion-item class="custom-input">\n                            <ion-icon name="lock-closed-outline" slot="start" class="input-icon"></ion-icon>\n                            <input formControlName="password" type="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022">\n                        </ion-item>\n                    </div>\n\n                    <div class="d-flex align-items-center justify-content-start my-3 px-2">\n                        <label class="checkbox-container small text-muted">\n                            <input type="checkbox" formControlName="check" id="check">\n                            <span class="checkmark"></span>\n                            Recu\xE9rdame en este equipo\n                        </label>\n                    </div>\n\n                    <div class="mt-4">\n                        <ion-button expand="block" type="submit" class="btn-admin-submit" [disabled]="spinner_de_carga">\n                            <span *ngIf="!spinner_de_carga">Acceder al Panel</span>\n                            <app-spinner *ngIf="spinner_de_carga"></app-spinner>\n                        </ion-button>\n                    </div>\n\n                </ion-list>\n            </form>\n\n            <div class="footer-links mt-4 pt-2">\n                <p class="text-center infoAdmin small">\n                    Acceso exclusivo para el personal de administraci\xF3n de <strong>GoGuay App</strong>.\n                </p>\n                <ion-button fill="clear" color="dark" size="small" (click)="navCtrl.back()" class="btn-volver">\n                    <ion-icon name="arrow-back-outline" slot="start"></ion-icon>\n                    Volver a GoGuay\n                </ion-button>\n            </div>\n\n        </div>\n    </div>\n</ion-content>', styles: ['/* src/app/pages/admin/login-admin/login-admin.page.scss */\nion-content.admin-bg {\n  --background: #E9EDD5 !important;\n}\n.login-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100%;\n  padding: 16px;\n}\n.login-card {\n  background: #ffffff;\n  border-radius: 35px;\n  padding: 32px 24px;\n  width: 100%;\n  max-width: 400px;\n  text-align: center;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05) !important;\n}\n.icon-shield-container {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 64px;\n  height: 64px;\n  background-color: #F0D7B4;\n  border-radius: 50%;\n  margin-bottom: 8px;\n}\n.icon-shield-container ion-icon {\n  font-size: 32px;\n  color: #2c2c2c;\n}\n.login-header h2 {\n  color: #2c2c2c;\n  font-size: 1.35rem;\n}\n.form-label-custom {\n  display: block;\n  text-align: left;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #5a6268;\n  margin-left: 12px;\n  margin-bottom: 4px;\n}\n.custom-input {\n  --background: #f8f9fa !important;\n  --border-radius: 35px !important;\n  --padding-start: 16px !important;\n  --padding-end: 16px !important;\n  --highlight-height: 0px !important;\n  --inner-padding-end: 0px !important;\n  --border-width: 0px !important;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 35px !important;\n  transition: all 0.25s ease;\n}\n.custom-input:focus-within {\n  border-color: #b3b5e6 !important;\n  box-shadow: 0 0 0 3px rgba(179, 181, 230, 0.25) !important;\n}\n.custom-input .input-icon {\n  color: #888888;\n  font-size: 1.1rem;\n  margin-right: 8px;\n}\n.custom-input input {\n  border: none !important;\n  outline: none !important;\n  box-shadow: none !important;\n  background: transparent !important;\n  width: 100%;\n  padding: 12px 0;\n  font-size: 0.95rem;\n  color: #2c2c2c;\n}\n.custom-input input:focus,\n.custom-input input:active,\n.custom-input input:-webkit-autofill {\n  border: none !important;\n  outline: none !important;\n  box-shadow: none !important;\n  -webkit-box-shadow: 0 0 0px 1000px #f8f9fa inset !important;\n}\n::ng-deep ion-item.custom-input .item-native {\n  --highlight-background: transparent !important;\n  --inner-border-width: 0px !important;\n  border: none !important;\n  box-shadow: none !important;\n}\n.checkbox-container {\n  display: flex;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.checkbox-container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.checkbox-container input:checked ~ .checkmark {\n  background-color: #b3b5e6;\n  border-color: #b3b5e6;\n}\n.checkbox-container input:checked ~ .checkmark:after {\n  display: block;\n}\n.checkbox-container .checkmark {\n  height: 18px;\n  width: 18px;\n  background-color: #ffffff;\n  border: 1.5px solid #cccccc;\n  border-radius: 6px;\n  margin-right: 8px;\n  position: relative;\n  transition: all 0.2s ease;\n}\n.checkbox-container .checkmark:after {\n  content: "";\n  position: absolute;\n  display: none;\n  left: 5px;\n  top: 2px;\n  width: 5px;\n  height: 9px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n.btn-admin-submit {\n  --background: #b3b5e6 !important;\n  --color: #ffffff !important;\n  --border-radius: 35px !important;\n  font-weight: 700;\n  margin: 0;\n  box-shadow: 0 6px 18px rgba(179, 181, 230, 0.4);\n}\n.btn-admin-submit[disabled] {\n  opacity: 0.7;\n}\n.infoAdmin {\n  color: #6c757d;\n  line-height: 1.4;\n}\n.btn-volver {\n  --color: #5a6268;\n  font-weight: 600;\n  --border-radius: 35px;\n}\n/*# sourceMappingURL=login-admin.page.css.map */\n'] }]
  }], () => [{ type: UserServicesService }, { type: NavController }, { type: MatDialog }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLoginPage, { className: "AdminLoginPage", filePath: "src/app/pages/admin/login-admin/login-admin.page.ts", lineNumber: 27 });
})();
export {
  AdminLoginPage
};
//# sourceMappingURL=login-admin.page-C33WT7FN.js.map
