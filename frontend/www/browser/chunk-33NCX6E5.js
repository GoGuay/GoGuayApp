import {
  MatButton
} from "./chunk-TFWCQLOE.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-ULJI5CAD.js";
import {
  NavController,
  RouterModule
} from "./chunk-XCBA4FSK.js";
import {
  ChangeDetectionStrategy,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4LZZ5H7X.js";

// src/app/components/ventana-dudas/ventana-dudas.component.ts
var VentanaDudasComponent = class _VentanaDudasComponent {
  navController;
  constructor(navController) {
    this.navController = navController;
  }
  ngOnInit() {
  }
  navigateToCentroAyuda() {
    this.navController.navigateForward(["/centro-ayuda"], { animated: false });
  }
  static \u0275fac = function VentanaDudasComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VentanaDudasComponent)(\u0275\u0275directiveInject(NavController));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VentanaDudasComponent, selectors: [["app-ventana-dudas"]], decls: 12, vars: 6, consts: [[1, "container", "mb-4"], [1, "ayuda_span"], [1, "d-flex", "justify-content-center"], ["type", "button", "mat-raised-button", "", 1, "me-2", "btns", "btn_bg", "question-btn", 3, "click"], ["src", "../../../assets/sistema/interrogatorio.png", 1, "question-icon"]], template: function VentanaDudasComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1");
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "span", 1);
      \u0275\u0275text(6, "\xBFTienes alguna duda? Consulta nuestro centro de ayuda");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 2)(8, "button", 3);
      \u0275\u0275listener("click", function VentanaDudasComponent_Template_button_click_8_listener() {
        return ctx.navigateToCentroAyuda();
      });
      \u0275\u0275element(9, "img", 4);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "CENTRODEAYUDA.TITULO"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 4, "BOTONES.HOME.CENTRO_DE_AYUDA"), " ");
    }
  }, dependencies: [MatButton, RouterModule, TranslateModule, TranslatePipe], styles: ["\n.btns[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.question-icon[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  margin-right: 4px;\n}\n.question-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 12px;\n}\n.ayuda_span[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: #555;\n  margin-top: 12px;\n}\n/*# sourceMappingURL=ventana-dudas.component.css.map */"], changeDetection: 1 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VentanaDudasComponent, [{
    type: Component,
    args: [{ selector: "app-ventana-dudas", standalone: true, imports: [MatButton, RouterModule, TranslateModule], changeDetection: ChangeDetectionStrategy.Eager, template: '<div class="container mb-4">\n  <h1>{{ "CENTRODEAYUDA.TITULO" | translate }}</h1>\n  <div>\n    <span class="ayuda_span">\xBFTienes alguna duda? Consulta nuestro centro de ayuda</span>\n  </div>\n  <div class="d-flex justify-content-center">\n    <button type="button" mat-raised-button class="me-2 btns btn_bg question-btn" (click)="navigateToCentroAyuda()">\n      <img src="../../../assets/sistema/interrogatorio.png" class="question-icon">\n      {{ "BOTONES.HOME.CENTRO_DE_AYUDA" | translate }}\n    </button>\n  </div>\n</div>\n', styles: ["/* src/app/components/ventana-dudas/ventana-dudas.component.scss */\n.btns {\n  margin-top: 20px;\n}\n.question-icon {\n  height: 20px;\n  width: 20px;\n  margin-right: 4px;\n}\n.question-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 12px;\n}\n.ayuda_span {\n  font-weight: 500;\n  font-size: 14px;\n  color: #555;\n  margin-top: 12px;\n}\n/*# sourceMappingURL=ventana-dudas.component.css.map */\n"] }]
  }], () => [{ type: NavController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VentanaDudasComponent, { className: "VentanaDudasComponent", filePath: "src/app/components/ventana-dudas/ventana-dudas.component.ts", lineNumber: 16 });
})();

export {
  VentanaDudasComponent
};
//# debugId=a9605d0e-f427-5ecb-a3ce-a9d8a6971d7e
//# sourceMappingURL=chunk-33NCX6E5.js.map
