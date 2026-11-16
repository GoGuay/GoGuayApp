import {
  Toast,
  ToastModule
} from "./chunk-EP5DYYZX.js";
import {
  NavbarComponent
} from "./chunk-QIUENU5G.js";
import "./chunk-XGLFMII2.js";
import {
  CookieService
} from "./chunk-ZCRZRLJ2.js";
import "./chunk-NAZ7DCPP.js";
import "./chunk-FPL4PN3H.js";
import {
  IonContent
} from "./chunk-WO2ZSM4X.js";
import "./chunk-GYAYVE5N.js";
import "./chunk-7NH46FL3.js";
import {
  MessageService
} from "./chunk-AF4L5EWO.js";
import "./chunk-YZOGC4HD.js";
import {
  MatButton,
  MatButtonModule,
  MatDivider
} from "./chunk-ZYMQAXGI.js";
import "./chunk-UIKNRIU5.js";
import "./chunk-FCE3VLZJ.js";
import "./chunk-CGCOLBWN.js";
import "./chunk-H72L7N4J.js";
import "./chunk-6IWXE3BU.js";
import "./chunk-XHXT42RH.js";
import {
  CheckboxControlValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RouterModule,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
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
import "./chunk-5SZB5ECT.js";

// src/app/pages/cookies/cookies.page.ts
function CookiesPage_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "h2");
    \u0275\u0275text(2, "Configuraci\xF3n de Cookies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Usamos cookies para mejorar tu experiencia en nuestra aplicaci\xF3n. Puedes personalizar tu configuraci\xF3n a continuaci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "form", 7);
    \u0275\u0275listener("ngSubmit", function CookiesPage_div_35_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.savePreferences());
    });
    \u0275\u0275elementStart(6, "div", 8)(7, "h3");
    \u0275\u0275text(8, "Cookies Esenciales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "Estas cookies son necesarias para el funcionamiento del sitio web y no pueden ser deshabilitadas.");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 9);
    \u0275\u0275text(12, " Activadas ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 8)(14, "h3");
    \u0275\u0275text(15, "Cookies Anal\xEDticas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17, "Nos ayudan a entender c\xF3mo interact\xFAas con nuestra aplicaci\xF3n para mejorar nuestros servicios.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "label")(19, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function CookiesPage_div_35_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.preferences.analytics, $event) || (ctx_r1.preferences.analytics = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " Activar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 8)(22, "h3");
    \u0275\u0275text(23, "Cookies Publicitarias");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p");
    \u0275\u0275text(25, "Utilizamos cookies para personalizar la publicidad que ves en la aplicaci\xF3n.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "label")(27, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function CookiesPage_div_35_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.preferences.advertising, $event) || (ctx_r1.preferences.advertising = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Activar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 12)(30, "button", 13);
    \u0275\u0275listener("click", function CookiesPage_div_35_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rejectAll());
    });
    \u0275\u0275text(31, " Rechazar todo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 14);
    \u0275\u0275listener("click", function CookiesPage_div_35_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.acceptAllCookies());
    });
    \u0275\u0275text(33, " Aceptar todo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 15);
    \u0275\u0275text(35, "Guardar Preferencias");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(36, "p-toast", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.preferences.analytics);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.preferences.advertising);
  }
}
var CookiesPage = class _CookiesPage {
  cookieService;
  messageService;
  showPanel = true;
  preferences = {
    analytics: false,
    advertising: false
  };
  userLoggedIn = false;
  userData = {};
  correo = "gestion.prideride@gmail.com";
  constructor(cookieService, messageService) {
    this.cookieService = cookieService;
    this.messageService = messageService;
  }
  ngOnInit() {
    var _a;
    this.userData = JSON.parse(localStorage.getItem("userData") || "{}");
    this.userLoggedIn = !!(this.userData && ((_a = this.userData.usuario) == null ? void 0 : _a.email));
    const analyticsCookie = this.cookieService.get("analytics");
    const advertisingCookie = this.cookieService.get("advertising");
    this.preferences.analytics = analyticsCookie === "true";
    this.preferences.advertising = advertisingCookie === "true";
  }
  /**
   * Función para guardar las preferencias.
   */
  savePreferences() {
    this.cookieService.set("analytics", String(this.preferences.analytics), 365);
    this.cookieService.set("advertising", String(this.preferences.advertising), 365);
    this.messageService.add({
      severity: "success",
      summary: "Cookies guardadas",
      detail: "Se han guardado correctamente las cookies."
    });
    setTimeout(() => {
      location.reload();
    }, 1e3);
  }
  /**
   * Función para aceptar todas las cookies.
   */
  acceptAllCookies() {
    this.preferences.analytics = true;
    this.preferences.advertising = true;
    this.cookieService.set("analytics", String(this.preferences.analytics), 365);
    this.cookieService.set("advertising", String(this.preferences.advertising), 365);
    this.messageService.add({
      severity: "success",
      summary: "Cookies guardadas",
      detail: "Se han guardado correctamente las cookies."
    });
    setTimeout(() => {
      location.reload();
    }, 1e3);
  }
  /**
   * Función para rechazar todas las cookies.
   */
  rejectAll() {
    this.preferences.analytics = false;
    this.preferences.advertising = false;
    this.savePreferences();
  }
  static \u0275fac = function CookiesPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CookiesPage)(\u0275\u0275directiveInject(CookieService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CookiesPage, selectors: [["app-cookies"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 36, vars: 6, consts: [[3, "backRoute", "searchRoute", "isLoggedIn"], [3, "fullscreen"], [1, "container"], [1, "container", "mt-2"], ["href", ""], ["class", "cookie-panel container mb-3", 4, "ngIf"], [1, "cookie-panel", "container", "mb-3"], [3, "ngSubmit"], [1, "cookie-category"], ["type", "checkbox", "checked", "", "disabled", ""], ["type", "checkbox", "name", "analytics", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "name", "advertising", 3, "ngModelChange", "ngModel"], [1, "actions"], ["type", "button", "mat-raised-button", "", 1, "btns", 3, "click"], ["type", "button", "mat-raised-button", "", 1, "btns", "btn_bg", 3, "click"], ["mat-raised-button", "", "type", "submit", 1, "btns", "btn_bg"], ["position", "bottom-center"]], template: function CookiesPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar", 0);
      \u0275\u0275elementStart(1, "ion-content", 1)(2, "div", 2)(3, "h2");
      \u0275\u0275text(4, "Introducci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "mat-divider");
      \u0275\u0275elementStart(6, "div", 3)(7, "p");
      \u0275\u0275text(8, "En GoGuay, utilizamos cookies para garantizar el correcto funcionamiento de nuestro sitio web y mejorar tu experiencia como usuario. Esta pol\xEDtica explica qu\xE9 son las cookies, cu\xE1les utilizamos, y c\xF3mo puedes gestionarlas.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "h6");
      \u0275\u0275text(10, "Qu\xE9 son las cookies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p");
      \u0275\u0275text(12, "Las cookies son peque\xF1os archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Estas ayudan a recordar tus preferencias, recolectar datos estad\xEDsticos y personalizar contenido.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "h6");
      \u0275\u0275text(14, "Tipos de Cookies que Usamos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "ul")(16, "li");
      \u0275\u0275text(17, "Esenciales: Necesarias para el funcionamiento b\xE1sico del sitio.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "li");
      \u0275\u0275text(19, "Anal\xEDticas: Para recopilar informaci\xF3n sobre c\xF3mo usas nuestro sitio y mejorar su rendimiento.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "li");
      \u0275\u0275text(21, "De personalizaci\xF3n: Permiten recordar tus preferencias, como idioma o configuraci\xF3n de tema.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "li");
      \u0275\u0275text(23, "De terceros: Utilizadas por servicios externos, como Google Analytics o redes sociales.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "h6");
      \u0275\u0275text(25, "Gesti\xF3n de Cookies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p");
      \u0275\u0275text(27, "Puedes aceptar, rechazar o modificar tus preferencias de cookies a trav\xE9s de nuestro panel de gesti\xF3n. Tambi\xE9n puedes configurarlas directamente desde tu navegador.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "h6");
      \u0275\u0275text(29, "Contacto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "p");
      \u0275\u0275text(31, "Si tienes dudas sobre el uso de cookies en nuestro sitio, cont\xE1ctanos en ");
      \u0275\u0275elementStart(32, "a", 4);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275text(34, ".");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(35, CookiesPage_div_35_Template, 37, 2, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("backRoute", "/home")("searchRoute", "newTravel")("isLoggedIn", ctx.userLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance(32);
      \u0275\u0275textInterpolate(ctx.correo);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showPanel);
    }
  }, dependencies: [
    IonContent,
    CommonModule,
    NgIf,
    FormsModule,
    \u0275NgNoValidate,
    CheckboxControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    NgForm,
    RouterModule,
    MatButtonModule,
    MatButton,
    NavbarComponent,
    MatDivider,
    ToastModule,
    Toast
  ], styles: ["\n\n.logo[_ngcontent-%COMP%] {\n  width: 60px;\n  border-radius: 30px;\n  padding: 1%;\n}\n.cookie-panel[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);\n}\n.cookie-category[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nion-button[_ngcontent-%COMP%] {\n  color: black !important;\n}\n/*# sourceMappingURL=cookies.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CookiesPage, [{
    type: Component,
    args: [{ selector: "app-cookies", standalone: true, imports: [
      IonContent,
      CommonModule,
      FormsModule,
      RouterModule,
      MatButtonModule,
      NavbarComponent,
      MatDivider,
      ToastModule
    ], providers: [MessageService], template: `<app-navbar
  [backRoute]="'/home'"
  [searchRoute]="'newTravel'"
  [isLoggedIn]="userLoggedIn"
></app-navbar>

<ion-content [fullscreen]="true">
  <div class="container">
    <h2>Introducci\xF3n</h2>
    <mat-divider></mat-divider>
    <div class="container mt-2">
      <p>En GoGuay, utilizamos cookies para garantizar el correcto funcionamiento de nuestro sitio web y mejorar tu
        experiencia como usuario. Esta pol\xEDtica explica qu\xE9 son las cookies, cu\xE1les utilizamos, y c\xF3mo puedes
        gestionarlas.</p>
      <h6>Qu\xE9 son las cookies</h6>
      <p>Las cookies son peque\xF1os archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Estas
        ayudan a recordar tus preferencias, recolectar datos estad\xEDsticos y personalizar contenido.</p>
      <h6>Tipos de Cookies que Usamos</h6>
      <ul>
        <li>Esenciales: Necesarias para el funcionamiento b\xE1sico del sitio.</li>
        <li>Anal\xEDticas: Para recopilar informaci\xF3n sobre c\xF3mo usas nuestro sitio y mejorar su rendimiento.</li>
        <li>De personalizaci\xF3n: Permiten recordar tus preferencias, como idioma o configuraci\xF3n de tema.</li>
        <li>De terceros: Utilizadas por servicios externos, como Google Analytics o redes sociales.</li>
      </ul>
      <h6>Gesti\xF3n de Cookies</h6>
      <p>Puedes aceptar, rechazar o modificar tus preferencias de cookies a trav\xE9s de nuestro panel de gesti\xF3n. Tambi\xE9n
        puedes configurarlas directamente desde tu navegador.</p>
      <h6>Contacto</h6>
      <p>Si tienes dudas sobre el uso de cookies en nuestro sitio, cont\xE1ctanos en <a href="">{{ correo }}</a>.</p>
    </div>
  </div>

  <div class="cookie-panel container mb-3" *ngIf="showPanel">
    <h2>Configuraci\xF3n de Cookies</h2>
    <p>Usamos cookies para mejorar tu experiencia en nuestra aplicaci\xF3n. Puedes personalizar tu configuraci\xF3n a
      continuaci\xF3n:</p>

    <form (ngSubmit)="savePreferences()">
      <div class="cookie-category">
        <h3>Cookies Esenciales</h3>
        <p>Estas cookies son necesarias para el funcionamiento del sitio web y no pueden ser deshabilitadas.</p>
        <input type="checkbox" checked disabled> Activadas
      </div>

      <div class="cookie-category">
        <h3>Cookies Anal\xEDticas</h3>
        <p>Nos ayudan a entender c\xF3mo interact\xFAas con nuestra aplicaci\xF3n para mejorar nuestros servicios.</p>
        <label>
          <input type="checkbox" [(ngModel)]="preferences.analytics" name="analytics"> Activar
        </label>
      </div>

      <div class="cookie-category">
        <h3>Cookies Publicitarias</h3>
        <p>Utilizamos cookies para personalizar la publicidad que ves en la aplicaci\xF3n.</p>
        <label>
          <input type="checkbox" [(ngModel)]="preferences.advertising" name="advertising"> Activar
        </label>
      </div>

      <div class="actions">
        <button type="button" mat-raised-button class="btns" (click)="rejectAll()">
          Rechazar todo
        </button>
        <button type="button" mat-raised-button class="btns btn_bg" (click)="acceptAllCookies()">
          Aceptar todo
        </button>
        <button mat-raised-button type="submit" class="btns btn_bg">Guardar Preferencias</button>
      </div>
      <p-toast position="bottom-center"></p-toast>
    </form>
  </div>

</ion-content>`, styles: ["/* src/app/pages/cookies/cookies.page.scss */\n.logo {\n  width: 60px;\n  border-radius: 30px;\n  padding: 1%;\n}\n.cookie-panel {\n  width: 100%;\n  padding: 20px;\n  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);\n}\n.cookie-category {\n  margin-bottom: 20px;\n}\n.actions {\n  display: flex;\n  justify-content: space-between;\n}\nion-button {\n  color: black !important;\n}\n/*# sourceMappingURL=cookies.page.css.map */\n"] }]
  }], () => [{ type: CookieService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CookiesPage, { className: "CookiesPage", filePath: "src/app/pages/cookies/cookies.page.ts", lineNumber: 31 });
})();
export {
  CookiesPage
};
//# sourceMappingURL=cookies.page-2M4C3P2X.js.map
