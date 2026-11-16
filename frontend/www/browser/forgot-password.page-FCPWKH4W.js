import {
  Toast,
  ToastModule
} from "./chunk-EP5DYYZX.js";
import {
  NavbarComponent
} from "./chunk-QIUENU5G.js";
import "./chunk-XGLFMII2.js";
import "./chunk-NAZ7DCPP.js";
import "./chunk-FPL4PN3H.js";
import {
  IonCol,
  IonContent,
  IonRow
} from "./chunk-WO2ZSM4X.js";
import "./chunk-GYAYVE5N.js";
import "./chunk-7NH46FL3.js";
import {
  MessageService
} from "./chunk-AF4L5EWO.js";
import {
  UserServicesService
} from "./chunk-YZOGC4HD.js";
import "./chunk-ZYMQAXGI.js";
import "./chunk-UIKNRIU5.js";
import "./chunk-FCE3VLZJ.js";
import "./chunk-CGCOLBWN.js";
import "./chunk-H72L7N4J.js";
import "./chunk-6IWXE3BU.js";
import {
  TranslateModule,
  TranslateService
} from "./chunk-XHXT42RH.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NavController,
  NgControlStatus,
  NgModel
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

// src/app/pages/forgot-password/forgot-password.page.ts
function ForgotPasswordPage_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordPage_div_13_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.emailUsuario, $event) || (ctx_r1.emailUsuario = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.emailUsuario);
  }
}
function ForgotPasswordPage_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordPage_div_14_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.emailUsuario, $event) || (ctx_r1.emailUsuario = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.emailUsuario);
  }
}
var ForgotPasswordPage = class _ForgotPasswordPage {
  navCtrl;
  userService;
  messageService;
  translate;
  userLoggedIn = false;
  emailUsuario = "";
  userData = {};
  constructor(navCtrl, userService, messageService, translate) {
    this.navCtrl = navCtrl;
    this.userService = userService;
    this.messageService = messageService;
    this.translate = translate;
  }
  ngOnInit() {
    var _a;
    this.userData = JSON.parse(localStorage.getItem("userData") || "{}");
    if ((_a = this.userData) == null ? void 0 : _a.usuario) {
      this.userLoggedIn = true;
      this.emailUsuario = this.userData.usuario.email || "";
    }
  }
  envio_email_reset_password(email) {
    this.userService.enviar_email_resetpassword(email).subscribe((respuesta) => {
      this.translate.get(["FORGOT_PW.TOAST_TITULO", "FORGOT_PW.TOAST_CUERPO"]).subscribe((translations) => {
        this.messageService.add({
          severity: "success",
          summary: translations["FORGOT_PW.TOAST_TITULO"],
          detail: translations["FORGOT_PW.TOAST_CUERPO"],
          life: 3e3
        });
      });
      setTimeout(() => {
        this.navCtrl.navigateRoot(["/login"], {
          animated: false
        });
      }, 4e3);
    });
  }
  static \u0275fac = function ForgotPasswordPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordPage)(\u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(UserServicesService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(TranslateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordPage, selectors: [["app-forgot-password"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 19, vars: 6, consts: [[3, "backRoute", "searchRoute", "isLoggedIn"], [3, "fullscreen"], [1, "container", "d-flex", "flex-column", "align-items-center"], [1, "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-center", "descripcion", "mb-5"], ["size", "2"], ["class", "mb-3", 4, "ngIf"], [1, "btn", "btn_bg", 3, "click"], ["position", "bottom-center"], [1, "mb-3"], ["type", "email", "id", "emailControl", "aria-describedby", "email", "disabled", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "id", "emailControl", "aria-describedby", "email", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function ForgotPasswordPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar", 0);
      \u0275\u0275elementStart(1, "ion-content", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
      \u0275\u0275text(5, "\xBFCONTRASE\xD1A OLVIDADA?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, " Todes podemos tener un despiste. Aqu\xED te ayudamos. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 4);
      \u0275\u0275text(9, " Confirma tu correo electr\xF3nico, te enviaremos un enlace para crear una nueva contrase\xF1a ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div")(11, "ion-row", 3)(12, "ion-col", 5);
      \u0275\u0275template(13, ForgotPasswordPage_div_13_Template, 2, 1, "div", 6)(14, ForgotPasswordPage_div_14_Template, 2, 1, "div", 6);
      \u0275\u0275elementStart(15, "div", 3)(16, "button", 7);
      \u0275\u0275listener("click", function ForgotPasswordPage_Template_button_click_16_listener() {
        return ctx.envio_email_reset_password(ctx.emailUsuario);
      });
      \u0275\u0275text(17, " Enviar ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "p-toast", 8);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("backRoute", "/home")("searchRoute", "search")("isLoggedIn", ctx.userLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.userLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.userLoggedIn);
    }
  }, dependencies: [
    IonRow,
    IonCol,
    IonContent,
    CommonModule,
    NgIf,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    NavbarComponent,
    TranslateModule,
    ToastModule,
    Toast
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordPage, [{
    type: Component,
    args: [{ selector: "app-forgot-password", standalone: true, imports: [
      IonRow,
      IonCol,
      IonContent,
      CommonModule,
      FormsModule,
      NavbarComponent,
      TranslateModule,
      ToastModule
    ], providers: [MessageService], template: `<app-navbar\r
  [backRoute]="'/home'"\r
  [searchRoute]="'search'"\r
  [isLoggedIn]="userLoggedIn"\r
></app-navbar>\r
<ion-content [fullscreen]="true">\r
  <div class="container d-flex flex-column align-items-center">\r
    <div class="d-flex justify-content-center">\r
      <h2>\xBFCONTRASE\xD1A OLVIDADA?</h2>\r
    </div>\r
    <p class="d-flex justify-content-center">\r
      Todes podemos tener un despiste. Aqu\xED te ayudamos.\r
    </p>\r
    <p class="d-flex justify-content-center descripcion mb-5">\r
      Confirma tu correo electr\xF3nico, te enviaremos un enlace para crear una\r
      nueva contrase\xF1a\r
    </p>\r
  </div>\r
  <div>\r
    <ion-row class="d-flex justify-content-center">\r
      <ion-col size="2">\r
        <div class="mb-3" *ngIf="userLoggedIn">\r
          <input\r
            type="email"\r
            class="form-control"\r
            id="emailControl"\r
            aria-describedby="email"\r
            [(ngModel)]="emailUsuario"\r
            disabled=""\r
          />\r
        </div>\r
        <div class="mb-3" *ngIf="!userLoggedIn">\r
          <input\r
            type="email"\r
            class="form-control"\r
            id="emailControl"\r
            aria-describedby="email"\r
            [(ngModel)]="emailUsuario"\r
          />\r
        </div>\r
        <div class="d-flex justify-content-center">\r
          <button\r
            class="btn btn_bg"\r
            (click)="envio_email_reset_password(emailUsuario)"\r
          >\r
            Enviar\r
          </button>\r
          <p-toast position="bottom-center"></p-toast>\r
        </div>\r
      </ion-col>\r
    </ion-row>\r
  </div>\r
</ion-content>\r
` }]
  }], () => [{ type: NavController }, { type: UserServicesService }, { type: MessageService }, { type: TranslateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordPage, { className: "ForgotPasswordPage", filePath: "src/app/pages/forgot-password/forgot-password.page.ts", lineNumber: 37 });
})();
export {
  ForgotPasswordPage
};
//# sourceMappingURL=forgot-password.page-FCPWKH4W.js.map
