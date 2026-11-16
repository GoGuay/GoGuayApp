import {
  NavbarComponent
} from "./chunk-6PYX74OP.js";
import "./chunk-C4WEIZGQ.js";
import "./chunk-L23MUE74.js";
import {
  IonContent
} from "./chunk-FFMYI37T.js";
import "./chunk-X7SDTFSG.js";
import "./chunk-NX7SG6WM.js";
import "./chunk-Q5CK7R7A.js";
import "./chunk-43M6K65B.js";
import "./chunk-TFWCQLOE.js";
import "./chunk-REKVANIZ.js";
import "./chunk-6VCOWNW4.js";
import "./chunk-ZPEWRVEX.js";
import "./chunk-V5JFS32A.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-ULJI5CAD.js";
import {
  FormsModule
} from "./chunk-XCBA4FSK.js";
import {
  ChangeDetectionStrategy,
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
  }, dependencies: [IonContent, FormsModule, NavbarComponent, TranslateModule, TranslatePipe], styles: ["\n/*# sourceMappingURL=token-expirado.page.css.map */"], changeDetection: 1 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TokenExpiradoPage, [{
    type: Component,
    args: [{ selector: "app-token-expirado", standalone: true, changeDetection: ChangeDetectionStrategy.Eager, imports: [IonContent, FormsModule, NavbarComponent, TranslateModule], template: `<app-navbar\r
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
`, styles: ["/* src/app/pages/token-expirado/token-expirado.page.scss */\n/*# sourceMappingURL=token-expirado.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TokenExpiradoPage, { className: "TokenExpiradoPage", filePath: "src/app/pages/token-expirado/token-expirado.page.ts", lineNumber: 16 });
})();
export {
  TokenExpiradoPage
};
//# debugId=b9e5135f-cced-55be-99a0-157b72c8e240
//# sourceMappingURL=token-expirado.page-5UTRMO4U.js.map
