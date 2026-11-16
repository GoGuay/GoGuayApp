import {
  NavbarComponent
} from "./chunk-YAGW6LPY.js";
import "./chunk-N25HX3QD.js";
import "./chunk-TGPQDEZS.js";
import {
  IonContent
} from "./chunk-BLKEDZE4.js";
import "./chunk-N7S2XU3X.js";
import "./chunk-G5UZDB7B.js";
import "./chunk-WDE6N5F6.js";
import "./chunk-34RASOLQ.js";
import "./chunk-ULIFZXTE.js";
import "./chunk-WBBLYEAR.js";
import "./chunk-LLKVXR72.js";
import "./chunk-Z2EGICVD.js";
import "./chunk-XTRPVKSN.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-PWPN4F54.js";
import {
  FormsModule
} from "./chunk-DD4MNYDA.js";
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
  }, dependencies: [IonContent, FormsModule, NavbarComponent, TranslateModule, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TokenExpiradoPage, [{
    type: Component,
    args: [{ selector: "app-token-expirado", standalone: true, imports: [IonContent, FormsModule, NavbarComponent, TranslateModule], template: `<app-navbar\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TokenExpiradoPage, { className: "TokenExpiradoPage", filePath: "src/app/pages/token-expirado/token-expirado.page.ts", lineNumber: 15 });
})();
export {
  TokenExpiradoPage
};
//# sourceMappingURL=token-expirado.page-OKXT4WN6.js.map
