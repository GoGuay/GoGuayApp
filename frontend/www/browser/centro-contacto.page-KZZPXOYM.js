import {
  Toast,
  ToastModule
} from "./chunk-EP5DYYZX.js";
import {
  NavbarComponent
} from "./chunk-QIUENU5G.js";
import "./chunk-XGLFMII2.js";
import "./chunk-NAZ7DCPP.js";
import {
  FuncionesComunes
} from "./chunk-JVMVG56Z.js";
import "./chunk-FPL4PN3H.js";
import "./chunk-WO2ZSM4X.js";
import "./chunk-GYAYVE5N.js";
import "./chunk-ZTUWPCV2.js";
import "./chunk-7NH46FL3.js";
import {
  MessageService
} from "./chunk-AF4L5EWO.js";
import "./chunk-YZOGC4HD.js";
import {
  MatButton,
  MatButtonModule,
  MatDividerModule
} from "./chunk-ZYMQAXGI.js";
import "./chunk-UIKNRIU5.js";
import "./chunk-FCE3VLZJ.js";
import "./chunk-CGCOLBWN.js";
import "./chunk-H72L7N4J.js";
import {
  IonContent,
  IonSpinner,
  IonicModule
} from "./chunk-6IWXE3BU.js";
import "./chunk-XHXT42RH.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
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
  ɵɵProvidersFeature,
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
import "./chunk-5SZB5ECT.js";

// src/app/pages/centro-contacto/centro-contacto.page.ts
function CentroContactoPage_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Enviar mensaje");
    \u0275\u0275elementEnd();
  }
}
function CentroContactoPage_ion_spinner_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-spinner", 33);
  }
}
var CentroContactoPage = class _CentroContactoPage {
  funcionesComunes;
  fb;
  messageService;
  navCtrl;
  userLoggedIn = false;
  userData = {};
  contactoForm;
  cargando = false;
  constructor(funcionesComunes, fb, messageService, navCtrl) {
    this.funcionesComunes = funcionesComunes;
    this.fb = fb;
    this.messageService = messageService;
    this.navCtrl = navCtrl;
    this.contactoForm = this.fb.group({
      nombre: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      asunto: ["", [Validators.required]],
      mensaje: ["", [Validators.required, Validators.minLength(10)]]
    });
  }
  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem("userData") || "{}");
    this.userLoggedIn = this.funcionesComunes.isUserLoggedIn();
    if (this.userLoggedIn && this.userData.usuario) {
      this.contactoForm.patchValue({
        nombre: `${this.userData.usuario.nombre} ${this.userData.usuario.apellidos}`,
        email: this.userData.usuario.email
      });
    }
  }
  enviarFormulario() {
    if (this.contactoForm.invalid) {
      this.messageService.add({
        severity: "error",
        summary: "Formulario incompleto",
        detail: "Por favor, rellena todos los campos correctamente."
      });
      return;
    }
    this.cargando = true;
    console.log("Enviando datos a gestion.gogay@gmail.com:", this.contactoForm.value);
    setTimeout(() => {
      this.cargando = false;
      this.messageService.add({
        severity: "success",
        summary: "Mensaje enviado",
        detail: "Hemos recibido tu consulta. Te responderemos muy pronto.",
        life: 3e3
      });
      setTimeout(() => this.navCtrl.back(), 2e3);
    }, 1500);
  }
  static \u0275fac = function CentroContactoPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CentroContactoPage)(\u0275\u0275directiveInject(FuncionesComunes), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(NavController));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CentroContactoPage, selectors: [["app-centro-contacto"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 48, vars: 8, consts: [[3, "backRoute", "searchRoute", "isLoggedIn"], [1, "ion-padding", 3, "fullscreen"], [1, "main-wrapper"], [1, "container", "contact-container"], [1, "text-center", "mb-4"], [1, "title-page"], [1, "divider-custom"], [1, "info-card", "animate__animated", "animate__fadeIn"], [1, "d-flex", "align-items-start"], [1, "fi", "fi-rr-shield-check", "icon-info"], [1, "m-0"], [1, "security-text"], [1, "form-card", "mt-4"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-md-6", "mb-3"], [1, "form-label"], [1, "input-wrapper"], [1, "fi", "fi-rr-user", "input-icon"], ["type", "text", "formControlName", "nombre", "placeholder", "Tu nombre...", 1, "form-control"], [1, "fi", "fi-rr-envelope", "input-icon"], ["type", "email", "formControlName", "email", "placeholder", "name@example.com", 1, "form-control"], [1, "mb-3"], ["for", "asunto-contacto", 1, "form-label"], ["aria-hidden", "true", 1, "fi", "fi-rr-interrogation", "input-icon"], ["id", "asunto-contacto", "type", "text", "formControlName", "asunto", "placeholder", "Asunto del mensaje", 1, "form-control"], ["for", "mensaje-contacto", 1, "form-label"], ["id", "mensaje-contacto", "formControlName", "mensaje", "rows", "5", "placeholder", "Escribe aqu\xED tu mensaje. Por favor, cuida tu lenguaje. \u{1F917}", 1, "form-control"], [1, "d-flex", "justify-content-end", "mt-4"], ["type", "submit", "mat-raised-button", "", 1, "btn-send", 3, "disabled"], [4, "ngIf"], ["name", "crescent", 4, "ngIf"], ["position", "bottom-center"], ["name", "crescent"]], template: function CentroContactoPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar", 0);
      \u0275\u0275elementStart(1, "ion-content", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
      \u0275\u0275text(6, "CENTRO DE CONTACTO");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8);
      \u0275\u0275element(10, "i", 9);
      \u0275\u0275elementStart(11, "div")(12, "p", 10);
      \u0275\u0275text(13, "Rellena los campos para contactar con el equipo de GoGuay.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p", 11)(15, "strong");
      \u0275\u0275text(16, "Aviso de seguridad:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, " Por favor, no incluyas contrase\xF1as, datos bancarios o informaci\xF3n sensible que pueda comprometerte. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(18, "div", 12)(19, "form", 13);
      \u0275\u0275listener("ngSubmit", function CentroContactoPage_Template_form_ngSubmit_19_listener() {
        return ctx.enviarFormulario();
      });
      \u0275\u0275elementStart(20, "div", 14)(21, "div", 15)(22, "label", 16);
      \u0275\u0275text(23, "Nombre completo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 17);
      \u0275\u0275element(25, "i", 18)(26, "input", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 15)(28, "label", 16);
      \u0275\u0275text(29, "Email de respuesta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 17);
      \u0275\u0275element(31, "i", 20)(32, "input", 21);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div", 22)(34, "label", 23);
      \u0275\u0275text(35, "\xBFEn qu\xE9 podemos ayudarte?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 17);
      \u0275\u0275element(37, "i", 24)(38, "input", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 22)(40, "label", 26);
      \u0275\u0275text(41, "Tu mensaje");
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "textarea", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 28)(44, "button", 29);
      \u0275\u0275template(45, CentroContactoPage_span_45_Template, 2, 0, "span", 30)(46, CentroContactoPage_ion_spinner_46_Template, 1, 0, "ion-spinner", 31);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275element(47, "p-toast", 32);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("backRoute", "/home")("searchRoute", "search")("isLoggedIn", ctx.userLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance(18);
      \u0275\u0275property("formGroup", ctx.contactoForm);
      \u0275\u0275advance(25);
      \u0275\u0275property("disabled", ctx.cargando);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.cargando);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.cargando);
    }
  }, dependencies: [
    IonicModule,
    IonContent,
    IonSpinner,
    CommonModule,
    NgIf,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    NavbarComponent,
    MatDividerModule,
    MatButtonModule,
    MatButton,
    ToastModule,
    Toast
  ], styles: ["\n\n.main-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  min-height: 100%;\n  padding-top: 20px;\n}\n.contact-container[_ngcontent-%COMP%] {\n  max-width: 800px !important;\n}\n.title-page[_ngcontent-%COMP%] {\n  font-weight: 800;\n  letter-spacing: 2px;\n  color: #333;\n}\n.divider-custom[_ngcontent-%COMP%] {\n  height: 4px;\n  width: 60px;\n  background: #b3b5e6;\n  margin: 10px auto;\n  border-radius: 10px;\n}\n.info-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-left: 5px solid #f0d7b4;\n  padding: 20px;\n  border-radius: 15px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n}\n.info-card[_ngcontent-%COMP%]   .icon-info[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #f0d7b4;\n  margin-right: 15px;\n}\n.info-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #666;\n}\n.info-card[_ngcontent-%COMP%]   .security-text[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 0.85rem;\n  color: #a38b6d;\n  background: #fdfaf5;\n  padding: 10px;\n  border-radius: 10px;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 30px;\n  border-radius: 25px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);\n}\n.form-card[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.9rem;\n  color: #444;\n  margin-bottom: 8px;\n  margin-left: 5px;\n}\n.form-card[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.form-card[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #b3b5e6;\n  z-index: 10;\n}\n.form-card[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 45px;\n}\n.form-card[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  border: 2px solid #f0f0f0;\n  padding: 12px 15px;\n  transition: all 0.3s;\n  font-size: 0.95rem;\n}\n.form-card[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #b3b5e6;\n  box-shadow: 0 0 0 4px rgba(179, 181, 230, 0.1);\n}\n.form-card[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n.btn-send[_ngcontent-%COMP%] {\n  background-color: #b3b5e6 !important;\n  color: white !important;\n  padding: 10px 30px !important;\n  border-radius: 25px !important;\n  font-weight: 700 !important;\n  height: 48px;\n}\n.btn-send[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 5px 15px rgba(179, 181, 230, 0.4);\n}\n/*# sourceMappingURL=centro-contacto.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CentroContactoPage, [{
    type: Component,
    args: [{ selector: "app-centro-contacto", standalone: true, imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      NavbarComponent,
      MatDividerModule,
      MatButtonModule,
      ToastModule
    ], providers: [MessageService], template: `<app-navbar [backRoute]="'/home'" [searchRoute]="'search'" [isLoggedIn]="userLoggedIn"></app-navbar>

<ion-content [fullscreen]="true" class="ion-padding">
  <div class="main-wrapper">
    
    <div class="container contact-container">
      <div class="text-center mb-4">
        <h1 class="title-page">CENTRO DE CONTACTO</h1>
        <div class="divider-custom"></div>
      </div>

      <div class="info-card animate__animated animate__fadeIn">
        <div class="d-flex align-items-start">
          <i class="fi fi-rr-shield-check icon-info"></i>
          <div>
            <p class="m-0">Rellena los campos para contactar con el equipo de GoGuay.</p>
            <p class="security-text">
              <strong>Aviso de seguridad:</strong> Por favor, no incluyas contrase\xF1as, datos bancarios o informaci\xF3n sensible que pueda comprometerte.
            </p>
          </div>
        </div>
      </div>

      <div class="form-card mt-4">
        <form [formGroup]="contactoForm" (ngSubmit)="enviarFormulario()">
          
          <div class="row">
            <div class="col-md-6 mb-3">
              <label class="form-label">Nombre completo</label>
              <div class="input-wrapper">
                <i class="fi fi-rr-user input-icon"></i>
                <input type="text" formControlName="nombre" class="form-control" placeholder="Tu nombre...">
              </div>
            </div>

            <div class="col-md-6 mb-3">
              <label class="form-label">Email de respuesta</label>
              <div class="input-wrapper">
                <i class="fi fi-rr-envelope input-icon"></i>
                <input type="email" formControlName="email" class="form-control" placeholder="name@example.com">
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label for="asunto-contacto" class="form-label">\xBFEn qu\xE9 podemos ayudarte?</label>
            <div class="input-wrapper">
              <i class="fi fi-rr-interrogation input-icon" aria-hidden="true"></i>
              <input id="asunto-contacto" 
                    type="text" 
                    formControlName="asunto" 
                    class="form-control" 
                    placeholder="Asunto del mensaje">
            </div>
          </div>

          <div class="mb-3">
            <label for="mensaje-contacto" class="form-label">Tu mensaje</label>
            <textarea id="mensaje-contacto" 
                      class="form-control" 
                      formControlName="mensaje" 
                      rows="5" 
                      placeholder="Escribe aqu\xED tu mensaje. Por favor, cuida tu lenguaje. \u{1F917}"></textarea>
          </div>

          <div class="d-flex justify-content-end mt-4">
            <button type="submit" mat-raised-button class="btn-send" [disabled]="cargando">
              <span *ngIf="!cargando">Enviar mensaje</span>
              <ion-spinner name="crescent" *ngIf="cargando"></ion-spinner>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <p-toast position="bottom-center"></p-toast>
</ion-content>`, styles: ["/* src/app/pages/centro-contacto/centro-contacto.page.scss */\n.main-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  min-height: 100%;\n  padding-top: 20px;\n}\n.contact-container {\n  max-width: 800px !important;\n}\n.title-page {\n  font-weight: 800;\n  letter-spacing: 2px;\n  color: #333;\n}\n.divider-custom {\n  height: 4px;\n  width: 60px;\n  background: #b3b5e6;\n  margin: 10px auto;\n  border-radius: 10px;\n}\n.info-card {\n  background-color: white;\n  border-left: 5px solid #f0d7b4;\n  padding: 20px;\n  border-radius: 15px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n}\n.info-card .icon-info {\n  font-size: 1.5rem;\n  color: #f0d7b4;\n  margin-right: 15px;\n}\n.info-card p {\n  font-size: 0.9rem;\n  color: #666;\n}\n.info-card .security-text {\n  margin-top: 8px;\n  font-size: 0.85rem;\n  color: #a38b6d;\n  background: #fdfaf5;\n  padding: 10px;\n  border-radius: 10px;\n}\n.form-card {\n  background: white;\n  padding: 30px;\n  border-radius: 25px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);\n}\n.form-card .form-label {\n  font-weight: 700;\n  font-size: 0.9rem;\n  color: #444;\n  margin-bottom: 8px;\n  margin-left: 5px;\n}\n.form-card .input-wrapper {\n  position: relative;\n}\n.form-card .input-wrapper .input-icon {\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #b3b5e6;\n  z-index: 10;\n}\n.form-card .input-wrapper input {\n  padding-left: 45px;\n}\n.form-card .form-control {\n  border-radius: 15px;\n  border: 2px solid #f0f0f0;\n  padding: 12px 15px;\n  transition: all 0.3s;\n  font-size: 0.95rem;\n}\n.form-card .form-control:focus {\n  border-color: #b3b5e6;\n  box-shadow: 0 0 0 4px rgba(179, 181, 230, 0.1);\n}\n.form-card textarea.form-control {\n  border-radius: 20px;\n}\n.btn-send {\n  background-color: #b3b5e6 !important;\n  color: white !important;\n  padding: 10px 30px !important;\n  border-radius: 25px !important;\n  font-weight: 700 !important;\n  height: 48px;\n}\n.btn-send:hover {\n  box-shadow: 0 5px 15px rgba(179, 181, 230, 0.4);\n}\n/*# sourceMappingURL=centro-contacto.page.css.map */\n"] }]
  }], () => [{ type: FuncionesComunes }, { type: FormBuilder }, { type: MessageService }, { type: NavController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CentroContactoPage, { className: "CentroContactoPage", filePath: "src/app/pages/centro-contacto/centro-contacto.page.ts", lineNumber: 30 });
})();
export {
  CentroContactoPage
};
//# sourceMappingURL=centro-contacto.page-KZZPXOYM.js.map
