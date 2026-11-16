import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Output,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-YUKRBYLH.js";

// src/app/pages/registro/contrato-registro-final/contrato-registro.component.ts
var _c0 = ["elementoFinal"];
function ContratoRegistroComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 12);
    \u0275\u0275domListener("click", function ContratoRegistroComponent_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.notificarCierre());
    });
    \u0275\u0275domElementEnd();
  }
}
function ContratoRegistroComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "i", 10);
  }
}
function ContratoRegistroComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 13);
    \u0275\u0275domListener("click", function ContratoRegistroComponent_Conditional_61_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.notificarCierre());
    });
    \u0275\u0275text(1, " Cerrar ");
    \u0275\u0275domElementEnd();
  }
}
var ContratoRegistroComponent = class _ContratoRegistroComponent {
  cdr;
  elementoFinal;
  lecturaCompletada = new EventEmitter();
  solicitarCierre = new EventEmitter();
  leido = false;
  observer;
  constructor(cdr) {
    this.cdr = cdr;
  }
  ngAfterViewInit() {
    this.iniciarObservadorScroll();
  }
  iniciarObservadorScroll() {
    var _a;
    if (!((_a = this.elementoFinal) == null ? void 0 : _a.nativeElement))
      return;
    this.observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !this.leido) {
        this.leido = true;
        this.lecturaCompletada.emit();
        this.cdr.detectChanges();
        this.destruirObservador();
      }
    }, {
      // Detección flexible cuando el centinela entra en vista
      threshold: 0.1
    });
    this.observer.observe(this.elementoFinal.nativeElement);
  }
  notificarCierre() {
    this.solicitarCierre.emit();
  }
  destruirObservador() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = void 0;
    }
  }
  ngOnDestroy() {
    this.destruirObservador();
  }
  static \u0275fac = function ContratoRegistroComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContratoRegistroComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContratoRegistroComponent, selectors: [["app-contrato-registro"]], viewQuery: function ContratoRegistroComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.elementoFinal = _t.first);
    }
  }, outputs: { lecturaCompletada: "lecturaCompletada", solicitarCierre: "solicitarCierre" }, decls: 62, vars: 4, consts: [["elementoFinal", ""], [1, "modal-contenedor", "shadow-lg"], [1, "modal-header-custom", "p-3", "d-flex", "justify-content-between", "align-items-center", "border-bottom"], [1, "m-0", "fw-bold"], ["type", "button", 1, "btn-close"], [1, "modal-body-custom", "p-4"], [1, "contenido-legal"], [1, "centinela-scroll"], [1, "modal-footer-custom", "p-3", "border-top", "d-flex", "justify-content-between", "align-items-center"], [1, "text-muted", "small"], [1, "fi", "fi-rr-arrow-down-to-line", "me-1", "text-primary"], ["type", "button", 1, "btn", "btn_bg"], ["type", "button", 1, "btn-close", 3, "click"], ["type", "button", 1, "btn", "btn_bg", 3, "click"]], template: function ContratoRegistroComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 1)(1, "div", 2)(2, "h5", 3);
      \u0275\u0275text(3, "Condiciones Generales del Servicio");
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(4, ContratoRegistroComponent_Conditional_4_Template, 1, 0, "button", 4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "div", 5)(6, "div", 6)(7, "h3");
      \u0275\u0275text(8, "1. T\xE9rminos de uso...");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "p");
      \u0275\u0275text(10, " En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que viv\xEDa un hidalgo de los de lanza en astillero, adarga antigua, roc\xEDn flaco y galgo corredor... ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "h3");
      \u0275\u0275text(12, "2. T\xE9rminos de respeto...");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "p");
      \u0275\u0275text(14, " Es, pues, de saber que este sobredicho hidalgo, los ratos que estaba ocioso, que eran los m\xE1s del a\xF1o, se daba a leer libros de caballer\xEDas... ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "h3");
      \u0275\u0275text(16, "1. T\xE9rminos de uso...");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(17, "p");
      \u0275\u0275text(18, " En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que viv\xEDa un hidalgo de los de lanza en astillero, adarga antigua, roc\xEDn flaco y galgo corredor... ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "h3");
      \u0275\u0275text(20, "2. T\xE9rminos de respeto...");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "p");
      \u0275\u0275text(22, " Es, pues, de saber que este sobredicho hidalgo, los ratos que estaba ocioso, que eran los m\xE1s del a\xF1o, se daba a leer libros de caballer\xEDas... ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "h3");
      \u0275\u0275text(24, "1. T\xE9rminos de uso...");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "p");
      \u0275\u0275text(26, " En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que viv\xEDa un hidalgo de los de lanza en astillero, adarga antigua, roc\xEDn flaco y galgo corredor... ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(27, "h3");
      \u0275\u0275text(28, "2. T\xE9rminos de respeto...");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(29, "p");
      \u0275\u0275text(30, " Es, pues, de saber que este sobredicho hidalgo, los ratos que estaba ocioso, que eran los m\xE1s del a\xF1o, se daba a leer libros de caballer\xEDas... ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(31, "h3");
      \u0275\u0275text(32, "1. T\xE9rminos de uso...");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(33, "p");
      \u0275\u0275text(34, " En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que viv\xEDa un hidalgo de los de lanza en astillero, adarga antigua, roc\xEDn flaco y galgo corredor... ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(35, "h3");
      \u0275\u0275text(36, "2. T\xE9rminos de respeto...");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(37, "p");
      \u0275\u0275text(38, " Es, pues, de saber que este sobredicho hidalgo, los ratos que estaba ocioso, que eran los m\xE1s del a\xF1o, se daba a leer libros de caballer\xEDas... ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(39, "h3");
      \u0275\u0275text(40, "1. T\xE9rminos de uso...");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(41, "p");
      \u0275\u0275text(42, " En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que viv\xEDa un hidalgo de los de lanza en astillero, adarga antigua, roc\xEDn flaco y galgo corredor... ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(43, "h3");
      \u0275\u0275text(44, "2. T\xE9rminos de respeto...");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(45, "p");
      \u0275\u0275text(46, " Es, pues, de saber que este sobredicho hidalgo, los ratos que estaba ocioso, que eran los m\xE1s del a\xF1o, se daba a leer libros de caballer\xEDas... ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(47, "h3");
      \u0275\u0275text(48, "1. T\xE9rminos de uso...");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(49, "p");
      \u0275\u0275text(50, " En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que viv\xEDa un hidalgo de los de lanza en astillero, adarga antigua, roc\xEDn flaco y galgo corredor... ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(51, "h3");
      \u0275\u0275text(52, "2. T\xE9rminos de respeto...");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(53, "p");
      \u0275\u0275text(54, " Es, pues, de saber que este sobredicho hidalgo, los ratos que estaba ocioso, que eran los m\xE1s del a\xF1o, se daba a leer libros de caballer\xEDas... ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(55, "div", 7, 0);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(57, "div", 8)(58, "span", 9);
      \u0275\u0275conditionalCreate(59, ContratoRegistroComponent_Conditional_59_Template, 1, 0, "i", 10);
      \u0275\u0275text(60);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(61, ContratoRegistroComponent_Conditional_61_Template, 2, 0, "button", 11);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.leido ? 4 : -1);
      \u0275\u0275advance(55);
      \u0275\u0275conditional(!ctx.leido ? 59 : -1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.leido ? "\xA1Has completado la lectura!" : "Despl\xE1zate hasta el final para habilitar el cierre", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.leido ? 61 : -1);
    }
  }, styles: ["\n.modal-body-custom[_ngcontent-%COMP%] {\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.centinela-scroll[_ngcontent-%COMP%] {\n  height: 1px;\n  width: 100%;\n}\n/*# sourceMappingURL=contrato-registro.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContratoRegistroComponent, [{
    type: Component,
    args: [{ selector: "app-contrato-registro", standalone: true, imports: [], template: `<div class="modal-contenedor shadow-lg">\r
  <!-- Encabezado: La 'X' solo aparece cuando se ha le\xEDdo todo -->\r
  <div\r
    class="modal-header-custom p-3 d-flex justify-content-between align-items-center border-bottom"\r
  >\r
    <h5 class="m-0 fw-bold">Condiciones Generales del Servicio</h5>\r
    @if (leido) {\r
      <button\r
        type="button"\r
        class="btn-close"\r
        (click)="notificarCierre()"\r
      ></button>\r
    }\r
  </div>\r
\r
  <!-- Cuerpo del Modal (Scrollable) -->\r
  <div class="modal-body-custom p-4">\r
    <div class="contenido-legal">\r
      <h3>1. T\xE9rminos de uso...</h3>\r
      <p>\r
        En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha\r
        mucho tiempo que viv\xEDa un hidalgo de los de lanza en astillero, adarga\r
        antigua, roc\xEDn flaco y galgo corredor...\r
      </p>\r
      <h3>2. T\xE9rminos de respeto...</h3>\r
      <p>\r
        Es, pues, de saber que este sobredicho hidalgo, los ratos que estaba\r
        ocioso, que eran los m\xE1s del a\xF1o, se daba a leer libros de\r
        caballer\xEDas...\r
      </p>\r
      <h3>1. T\xE9rminos de uso...</h3>\r
      <p>\r
        En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha\r
        mucho tiempo que viv\xEDa un hidalgo de los de lanza en astillero, adarga\r
        antigua, roc\xEDn flaco y galgo corredor...\r
      </p>\r
      <h3>2. T\xE9rminos de respeto...</h3>\r
      <p>\r
        Es, pues, de saber que este sobredicho hidalgo, los ratos que estaba\r
        ocioso, que eran los m\xE1s del a\xF1o, se daba a leer libros de\r
        caballer\xEDas...\r
      </p>\r
      <h3>1. T\xE9rminos de uso...</h3>\r
      <p>\r
        En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha\r
        mucho tiempo que viv\xEDa un hidalgo de los de lanza en astillero, adarga\r
        antigua, roc\xEDn flaco y galgo corredor...\r
      </p>\r
      <h3>2. T\xE9rminos de respeto...</h3>\r
      <p>\r
        Es, pues, de saber que este sobredicho hidalgo, los ratos que estaba\r
        ocioso, que eran los m\xE1s del a\xF1o, se daba a leer libros de\r
        caballer\xEDas...\r
      </p>\r
      <h3>1. T\xE9rminos de uso...</h3>\r
      <p>\r
        En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha\r
        mucho tiempo que viv\xEDa un hidalgo de los de lanza en astillero, adarga\r
        antigua, roc\xEDn flaco y galgo corredor...\r
      </p>\r
      <h3>2. T\xE9rminos de respeto...</h3>\r
      <p>\r
        Es, pues, de saber que este sobredicho hidalgo, los ratos que estaba\r
        ocioso, que eran los m\xE1s del a\xF1o, se daba a leer libros de\r
        caballer\xEDas...\r
      </p>\r
      <h3>1. T\xE9rminos de uso...</h3>\r
      <p>\r
        En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha\r
        mucho tiempo que viv\xEDa un hidalgo de los de lanza en astillero, adarga\r
        antigua, roc\xEDn flaco y galgo corredor...\r
      </p>\r
      <h3>2. T\xE9rminos de respeto...</h3>\r
      <p>\r
        Es, pues, de saber que este sobredicho hidalgo, los ratos que estaba\r
        ocioso, que eran los m\xE1s del a\xF1o, se daba a leer libros de\r
        caballer\xEDas...\r
      </p>\r
      <h3>1. T\xE9rminos de uso...</h3>\r
      <p>\r
        En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha\r
        mucho tiempo que viv\xEDa un hidalgo de los de lanza en astillero, adarga\r
        antigua, roc\xEDn flaco y galgo corredor...\r
      </p>\r
      <h3>2. T\xE9rminos de respeto...</h3>\r
      <p>\r
        Es, pues, de saber que este sobredicho hidalgo, los ratos que estaba\r
        ocioso, que eran los m\xE1s del a\xF1o, se daba a leer libros de\r
        caballer\xEDas...\r
      </p>\r
    </div>\r
\r
    <!-- Centinela al final del texto -->\r
    <div\r
      #elementoFinal\r
      class="centinela-scroll"\r
    ></div>\r
  </div>\r
\r
  <!-- Pie del Modal -->\r
  <div\r
    class="modal-footer-custom p-3 border-top d-flex justify-content-between align-items-center"\r
  >\r
    <span class="text-muted small">\r
      @if (!leido) {\r
        <i class="fi fi-rr-arrow-down-to-line me-1 text-primary"></i>\r
      }\r
      {{\r
        leido\r
          ? '\xA1Has completado la lectura!'\r
          : 'Despl\xE1zate hasta el final para habilitar el cierre'\r
      }}\r
    </span>\r
\r
    @if (leido) {\r
      <button\r
        type="button"\r
        class="btn btn_bg"\r
        (click)="notificarCierre()"\r
      >\r
        Cerrar\r
      </button>\r
    }\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/registro/contrato-registro-final/contrato-registro.component.scss */\n.modal-body-custom {\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.centinela-scroll {\n  height: 1px;\n  width: 100%;\n}\n/*# sourceMappingURL=contrato-registro.component.css.map */\n"] }]
  }], () => [{ type: ChangeDetectorRef }], { elementoFinal: [{
    type: ViewChild,
    args: ["elementoFinal"]
  }], lecturaCompletada: [{
    type: Output
  }], solicitarCierre: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContratoRegistroComponent, { className: "ContratoRegistroComponent", filePath: "src/app/pages/registro/contrato-registro-final/contrato-registro.component.ts", lineNumber: 10 });
})();

export {
  ContratoRegistroComponent
};
//# sourceMappingURL=chunk-NX42SELX.js.map
