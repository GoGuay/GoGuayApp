import {
  CommonModule,
  NgClass
} from "./chunk-XCBA4FSK.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-4LZZ5H7X.js";

// src/app/components/spinner/spinner.component.ts
var _c0 = (a0, a1) => ({ fullscreen: a0, inline: a1 });
function SpinnerComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.texto_spinner);
  }
}
var SpinnerComponent = class _SpinnerComponent {
  texto_spinner = "Cargando...";
  tamano_completo = true;
  constructor() {
  }
  ngOnInit() {
  }
  static \u0275fac = function SpinnerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpinnerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpinnerComponent, selectors: [["app-spinner"]], inputs: { texto_spinner: "texto_spinner", tamano_completo: "tamano_completo" }, decls: 9, vars: 5, consts: [[1, "spinner-container", 3, "ngClass"], ["viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "spinner"], ["cx", "12", "cy", "5", "rx", "4", "ry", "4"], ["id", "spinner_jbYs", "begin", "0;spinner_JZdr.end", "attributeName", "cy", "calcMode", "spline", "dur", "0.375s", "values", "5;20", "keySplines", ".33,0,.66,.33", "fill", "freeze"], ["begin", "spinner_jbYs.end", "attributeName", "rx", "calcMode", "spline", "dur", "0.05s", "values", "4;4.8;4", "keySplines", ".33,0,.66,.33;.33,.66,.66,1"], ["begin", "spinner_jbYs.end", "attributeName", "ry", "calcMode", "spline", "dur", "0.05s", "values", "4;3;4", "keySplines", ".33,0,.66,.33;.33,.66,.66,1"], ["id", "spinner_ADF4", "begin", "spinner_jbYs.end", "attributeName", "cy", "calcMode", "spline", "dur", "0.025s", "values", "20;20.5", "keySplines", ".33,0,.66,.33"], ["id", "spinner_JZdr", "begin", "spinner_ADF4.end", "attributeName", "cy", "calcMode", "spline", "dur", "0.4s", "values", "20.5;5", "keySplines", ".33,.66,.66,1"]], template: function SpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1, "svg", 1)(2, "ellipse", 2);
      \u0275\u0275element(3, "animate", 3)(4, "animate", 4)(5, "animate", 5)(6, "animate", 6)(7, "animate", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(8, SpinnerComponent_Conditional_8_Template, 2, 1, "p");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c0, ctx.tamano_completo, !ctx.tamano_completo));
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.texto_spinner ? 8 : -1);
    }
  }, dependencies: [CommonModule, NgClass], styles: ["\n.spinner-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  border-radius: 35px;\n  background-color: rgba(255, 255, 255, 0.473);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  animation: _ngcontent-%COMP%_fadeInOverlay 0.2s ease-in-out;\n}\n.spinner-container.fullscreen[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n}\n.spinner-container.inline[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 35px !important;\n  overflow: hidden !important;\n}\n.spinner-container.inline[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n}\n.spinner-container.inline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  animation: _ngcontent-%COMP%_colorCycle 2s infinite;\n  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.15));\n}\n@keyframes _ngcontent-%COMP%_colorCycle {\n  0% {\n    fill: #ffb3ba;\n  }\n  16% {\n    fill: #ffdfba;\n  }\n  33% {\n    fill: #ffffba;\n  }\n  50% {\n    fill: #baffc9;\n  }\n  66% {\n    fill: #bae1ff;\n  }\n  83% {\n    fill: #e0baff;\n  }\n  100% {\n    fill: #ffb3ba;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInOverlay {\n  from {\n    background-color: rgba(255, 255, 255, 0);\n    backdrop-filter: blur(0px);\n    -webkit-backdrop-filter: blur(0px);\n  }\n  to {\n    background-color: rgba(255, 255, 255, 0.7);\n    backdrop-filter: blur(4px);\n    -webkit-backdrop-filter: blur(4px);\n  }\n}\n/*# sourceMappingURL=spinner.component.css.map */"], changeDetection: 1 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpinnerComponent, [{
    type: Component,
    args: [{ selector: "app-spinner", standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.Eager, template: '<div\n  class="spinner-container"\n  [ngClass]="{ fullscreen: tamano_completo, inline: !tamano_completo }"\n>\n  <svg\n    class="spinner"\n    viewBox="0 0 24 24"\n    xmlns="http://www.w3.org/2000/svg"\n  >\n    <ellipse\n      cx="12"\n      cy="5"\n      rx="4"\n      ry="4"\n    >\n      <animate\n        id="spinner_jbYs"\n        begin="0;spinner_JZdr.end"\n        attributeName="cy"\n        calcMode="spline"\n        dur="0.375s"\n        values="5;20"\n        keySplines=".33,0,.66,.33"\n        fill="freeze"\n      />\n      <animate\n        begin="spinner_jbYs.end"\n        attributeName="rx"\n        calcMode="spline"\n        dur="0.05s"\n        values="4;4.8;4"\n        keySplines=".33,0,.66,.33;.33,.66,.66,1"\n      />\n      <animate\n        begin="spinner_jbYs.end"\n        attributeName="ry"\n        calcMode="spline"\n        dur="0.05s"\n        values="4;3;4"\n        keySplines=".33,0,.66,.33;.33,.66,.66,1"\n      />\n      <animate\n        id="spinner_ADF4"\n        begin="spinner_jbYs.end"\n        attributeName="cy"\n        calcMode="spline"\n        dur="0.025s"\n        values="20;20.5"\n        keySplines=".33,0,.66,.33"\n      />\n      <animate\n        id="spinner_JZdr"\n        begin="spinner_ADF4.end"\n        attributeName="cy"\n        calcMode="spline"\n        dur="0.4s"\n        values="20.5;5"\n        keySplines=".33,.66,.66,1"\n      />\n    </ellipse>\n  </svg>\n  @if (texto_spinner) {\n    <p>{{ texto_spinner }}</p>\n  }\n</div>\n', styles: ["/* src/app/components/spinner/spinner.component.scss */\n.spinner-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  border-radius: 35px;\n  background-color: rgba(255, 255, 255, 0.473);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  animation: fadeInOverlay 0.2s ease-in-out;\n}\n.spinner-container.fullscreen {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n}\n.spinner-container.inline {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 35px !important;\n  overflow: hidden !important;\n}\n.spinner-container.inline .spinner {\n  width: 35px;\n  height: 35px;\n}\n.spinner-container.inline p {\n  font-size: 0.85rem;\n}\n.spinner {\n  width: 60px;\n  height: 60px;\n  animation: colorCycle 2s infinite;\n  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.15));\n}\n@keyframes colorCycle {\n  0% {\n    fill: #ffb3ba;\n  }\n  16% {\n    fill: #ffdfba;\n  }\n  33% {\n    fill: #ffffba;\n  }\n  50% {\n    fill: #baffc9;\n  }\n  66% {\n    fill: #bae1ff;\n  }\n  83% {\n    fill: #e0baff;\n  }\n  100% {\n    fill: #ffb3ba;\n  }\n}\n@keyframes fadeInOverlay {\n  from {\n    background-color: rgba(255, 255, 255, 0);\n    backdrop-filter: blur(0px);\n    -webkit-backdrop-filter: blur(0px);\n  }\n  to {\n    background-color: rgba(255, 255, 255, 0.7);\n    backdrop-filter: blur(4px);\n    -webkit-backdrop-filter: blur(4px);\n  }\n}\n/*# sourceMappingURL=spinner.component.css.map */\n"] }]
  }], () => [], { texto_spinner: [{
    type: Input
  }], tamano_completo: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpinnerComponent, { className: "SpinnerComponent", filePath: "src/app/components/spinner/spinner.component.ts", lineNumber: 12 });
})();

export {
  SpinnerComponent
};
//# debugId=828a62a0-02ca-5564-bdf7-9bf920de1759
//# sourceMappingURL=chunk-NNKIWL44.js.map
