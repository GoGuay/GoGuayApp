import {
  Toast,
  ToastModule
} from "./chunk-DZI3S65K.js";
import {
  NavbarComponent
} from "./chunk-6PYX74OP.js";
import "./chunk-C4WEIZGQ.js";
import "./chunk-3QY534IW.js";
import "./chunk-L23MUE74.js";
import {
  IonCol,
  IonContent,
  IonRow
} from "./chunk-FFMYI37T.js";
import "./chunk-X7SDTFSG.js";
import "./chunk-NX7SG6WM.js";
import {
  MessageService
} from "./chunk-Q5CK7R7A.js";
import {
  UserServicesService
} from "./chunk-43M6K65B.js";
import "./chunk-TFWCQLOE.js";
import "./chunk-REKVANIZ.js";
import "./chunk-6VCOWNW4.js";
import "./chunk-ZPEWRVEX.js";
import "./chunk-V5JFS32A.js";
import {
  TranslateModule,
  TranslateService
} from "./chunk-ULJI5CAD.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NavController,
  NgControlStatus,
  NgModel
} from "./chunk-XCBA4FSK.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
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
import "./chunk-MP5LG4CB.js";

// src/app/pages/forgot-password/forgot-password.page.ts
function ForgotPasswordPage_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "input", 9);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordPage_Conditional_13_Template_input_ngModelChange_1_listener($event) {
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
    \u0275\u0275control();
  }
}
function ForgotPasswordPage_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "input", 10);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordPage_Conditional_14_Template_input_ngModelChange_1_listener($event) {
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
    \u0275\u0275control();
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordPage, selectors: [["app-forgot-password"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 19, vars: 6, consts: [[3, "backRoute", "searchRoute", "isLoggedIn"], [3, "fullscreen"], [1, "container", "d-flex", "flex-column", "align-items-center"], [1, "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-center", "descripcion", "mb-5"], ["size", "2"], [1, "mb-3"], [1, "btn", "btn_bg", 3, "click"], ["position", "bottom-center"], ["type", "email", "id", "emailControl", "aria-describedby", "email", "disabled", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "id", "emailControl", "aria-describedby", "email", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function ForgotPasswordPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar", 0);
      \u0275\u0275elementStart(1, "ion-content", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
      \u0275\u0275text(5, "\xBFCONTRASE\xD1A OLVIDADA?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Todes podemos tener un despiste. Aqu\xED te ayudamos.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 4);
      \u0275\u0275text(9, " Confirma tu correo electr\xF3nico, te enviaremos un enlace para crear una nueva contrase\xF1a ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div")(11, "ion-row", 3)(12, "ion-col", 5);
      \u0275\u0275conditionalCreate(13, ForgotPasswordPage_Conditional_13_Template, 2, 1, "div", 6);
      \u0275\u0275conditionalCreate(14, ForgotPasswordPage_Conditional_14_Template, 2, 1, "div", 6);
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
      \u0275\u0275conditional(ctx.userLoggedIn ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.userLoggedIn ? 14 : -1);
    }
  }, dependencies: [IonRow, IonCol, IonContent, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NavbarComponent, TranslateModule, ToastModule, Toast], styles: ["\n/*# sourceMappingURL=forgot-password.page.css.map */"], changeDetection: 1 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordPage, [{
    type: Component,
    args: [{ selector: "app-forgot-password", standalone: true, imports: [IonRow, IonCol, IonContent, FormsModule, NavbarComponent, TranslateModule, ToastModule], changeDetection: ChangeDetectionStrategy.Eager, providers: [MessageService], template: `<app-navbar
  [backRoute]="'/home'"
  [searchRoute]="'search'"
  [isLoggedIn]="userLoggedIn"
></app-navbar>
<ion-content [fullscreen]="true">
  <div class="container d-flex flex-column align-items-center">
    <div class="d-flex justify-content-center">
      <h2>\xBFCONTRASE\xD1A OLVIDADA?</h2>
    </div>
    <p class="d-flex justify-content-center">Todes podemos tener un despiste. Aqu\xED te ayudamos.</p>
    <p class="d-flex justify-content-center descripcion mb-5">
      Confirma tu correo electr\xF3nico, te enviaremos un enlace para crear una nueva contrase\xF1a
    </p>
  </div>
  <div>
    <ion-row class="d-flex justify-content-center">
      <ion-col size="2">
        @if (userLoggedIn) {
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="emailControl"
            aria-describedby="email"
            [(ngModel)]="emailUsuario"
            disabled=""
          />
        </div>
        } @if (!userLoggedIn) {
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="emailControl"
            aria-describedby="email"
            [(ngModel)]="emailUsuario"
          />
        </div>
        }
        <div class="d-flex justify-content-center">
          <button
            class="btn btn_bg"
            (click)="envio_email_reset_password(emailUsuario)"
          >
            Enviar
          </button>
          <p-toast position="bottom-center"></p-toast>
        </div>
      </ion-col>
    </ion-row>
  </div>
</ion-content>
`, styles: ["/* src/app/pages/forgot-password/forgot-password.page.scss */\n/*# sourceMappingURL=forgot-password.page.css.map */\n"] }]
  }], () => [{ type: NavController }, { type: UserServicesService }, { type: MessageService }, { type: TranslateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordPage, { className: "ForgotPasswordPage", filePath: "src/app/pages/forgot-password/forgot-password.page.ts", lineNumber: 21 });
})();
export {
  ForgotPasswordPage
};
//# debugId=2c62ca12-dafb-58a4-aa0d-89aebe300324
//# sourceMappingURL=forgot-password.page-YGKMWAK6.js.map
