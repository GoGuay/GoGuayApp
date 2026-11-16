import {
  NavbarComponent
} from "./chunk-QIUENU5G.js";
import "./chunk-XGLFMII2.js";
import "./chunk-FPL4PN3H.js";
import {
  IonContent
} from "./chunk-WO2ZSM4X.js";
import "./chunk-GYAYVE5N.js";
import "./chunk-7NH46FL3.js";
import "./chunk-AF4L5EWO.js";
import "./chunk-YZOGC4HD.js";
import "./chunk-ZYMQAXGI.js";
import "./chunk-UIKNRIU5.js";
import "./chunk-FCE3VLZJ.js";
import "./chunk-CGCOLBWN.js";
import "./chunk-H72L7N4J.js";
import "./chunk-6IWXE3BU.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-XHXT42RH.js";
import {
  FormsModule
} from "./chunk-TU2LK3TM.js";
import {
  CommonModule
} from "./chunk-7PPOBOFB.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
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

// src/app/pages/token-expirado/token-expirado.page.ts
var TokenExpiradoPage = class _TokenExpiradoPage {
  userLoggedIn = false;
  constructor() {
  }
  ngOnInit() {
  }
  static \u0275fac = function TokenExpiradoPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TokenExpiradoPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TokenExpiradoPage, selectors: [["app-token-expirado"]], decls: 13, vars: 13, consts: [[3, "backRoute", "searchRoute", "isLoggedIn"], [3, "fullscreen"], [1, "container-fluid"], [1, "col-12", "text-center", "mb-4"], [1, "d-flex", "justify-content-center"]], template: function TokenExpiradoPage_Template(rf, ctx) {
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
      \u0275\u0275elementStart(10, "p", 4);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("backRoute", "/home")("searchRoute", "search")("isLoggedIn", !ctx.userLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 7, "TOKEN_EXP.TITULO"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "TOKEN_EXP.SUBTITULO"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 11, "TOKEN_EXP.SUBTITULO2"), " ");
    }
  }, dependencies: [
    IonContent,
    CommonModule,
    FormsModule,
    NavbarComponent,
    TranslateModule,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TokenExpiradoPage, [{
    type: Component,
    args: [{ selector: "app-token-expirado", standalone: true, imports: [
      IonContent,
      CommonModule,
      FormsModule,
      NavbarComponent,
      TranslateModule
    ], template: `<app-navbar\r
  [backRoute]="'/home'"\r
  [searchRoute]="'search'"\r
  [isLoggedIn]="!userLoggedIn"\r
></app-navbar>\r
<ion-content [fullscreen]="true">\r
  <div class="container-fluid">\r
    <div class="col-12 text-center mb-4">\r
      <h1>{{ 'TOKEN_EXP.TITULO' | translate }}</h1>\r
    </div>\r
    <p class="d-flex justify-content-center">\r
      {{'TOKEN_EXP.SUBTITULO' | translate}}\r
    </p>\r
    <p class="d-flex justify-content-center">\r
      {{'TOKEN_EXP.SUBTITULO2' | translate}}\r
    </p>\r
  </div>\r
</ion-content>\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TokenExpiradoPage, { className: "TokenExpiradoPage", filePath: "src/app/pages/token-expirado/token-expirado.page.ts", lineNumber: 29 });
})();
export {
  TokenExpiradoPage
};
//# sourceMappingURL=token-expirado.page-T4UIRB3M.js.map
