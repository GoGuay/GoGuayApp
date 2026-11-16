import {
  TranslateModule,
  TranslatePipe
} from "./chunk-XHXT42RH.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-HLETIGG3.js";

// src/app/pages/jumbotron/jumbotron.component.ts
var JumbotronComponent = class _JumbotronComponent {
  title = "Default Title";
  imageSrc = "../../../assets/folder/jumbo.jpg";
  helpText = "Help Text";
  constructor() {
  }
  ngOnInit() {
  }
  static \u0275fac = function JumbotronComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JumbotronComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JumbotronComponent, selectors: [["app-jumbotron"]], inputs: { title: "title", imageSrc: "imageSrc", helpText: "helpText" }, decls: 8, vars: 5, consts: [[1, "jumbotron"], [1, "title"], ["src", "../../../assets/sistema/bandera.gif", "alt", "", 1, "img"], [1, "jumbotron-img", 3, "src", "alt"]], template: function JumbotronComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275domElement(3, "img", 2);
      \u0275\u0275text(4);
      \u0275\u0275domElement(5, "img", 2);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(6, "img", 3);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.title, " ");
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("src", ctx.imageSrc, \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(7, 3, ctx.helpText));
    }
  }, dependencies: [TranslateModule, TranslatePipe], styles: ['\n\n.jumbotron[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20vh;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  border-radius: 0 0 15px 15px;\n}\n.jumbotron[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.3);\n  z-index: 2;\n}\n.jumbotron-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  -webkit-animation: fondo_animacion 5s ease-out both;\n  animation: fondo_animacion 5s ease-out both;\n}\n.title[_ngcontent-%COMP%] {\n  z-index: 3;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  text-shadow: 2px 2px 4px rgba(253, 253, 253, 0.7);\n  text-align: center;\n}\n.emoji[_ngcontent-%COMP%] {\n  display: inline-block;\n  transform: rotate(90deg);\n}\n.img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  mix-blend-mode: multiply;\n}\n/*# sourceMappingURL=jumbotron.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JumbotronComponent, [{
    type: Component,
    args: [{ selector: "app-jumbotron", standalone: true, imports: [TranslateModule], template: '<div class="jumbotron">\n  <div class="title">\n    <h1>\n      <img\n        class="img"\n        src="../../../assets/sistema/bandera.gif"\n        alt=""\n      />\n      {{ title }}\n      <img\n        class="img"\n        src="../../../assets/sistema/bandera.gif"\n        alt=""\n      />\n    </h1>\n  </div>\n\n  <img\n    [src]="imageSrc"\n    class="jumbotron-img"\n    [alt]="helpText | translate"\n  />\n</div>\n', styles: ['/* src/app/pages/jumbotron/jumbotron.component.scss */\n.jumbotron {\n  width: 100%;\n  height: 20vh;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  border-radius: 0 0 15px 15px;\n}\n.jumbotron::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.3);\n  z-index: 2;\n}\n.jumbotron-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  -webkit-animation: fondo_animacion 5s ease-out both;\n  animation: fondo_animacion 5s ease-out both;\n}\n.title {\n  z-index: 3;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  text-shadow: 2px 2px 4px rgba(253, 253, 253, 0.7);\n  text-align: center;\n}\n.emoji {\n  display: inline-block;\n  transform: rotate(90deg);\n}\n.img {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  mix-blend-mode: multiply;\n}\n/*# sourceMappingURL=jumbotron.component.css.map */\n'] }]
  }], () => [], { title: [{
    type: Input
  }], imageSrc: [{
    type: Input
  }], helpText: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JumbotronComponent, { className: "JumbotronComponent", filePath: "src/app/pages/jumbotron/jumbotron.component.ts", lineNumber: 13 });
})();

export {
  JumbotronComponent
};
//# sourceMappingURL=chunk-Z4UJGIJA.js.map
