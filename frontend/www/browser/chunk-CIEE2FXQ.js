import {
  MatButton,
  MatButtonModule,
  MatDivider,
  MatIconButton
} from "./chunk-ULIFZXTE.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-WBBLYEAR.js";
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from "./chunk-LLKVXR72.js";
import {
  MatIcon
} from "./chunk-Z2EGICVD.js";
import {
  NavController
} from "./chunk-DD4MNYDA.js";
import {
  Component,
  Inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵtextInterpolate
} from "./chunk-YUKRBYLH.js";

// src/app/components/modal-error/modal-error.component.ts
function ModalErrorComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function ModalErrorComponent_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toRegistro("registro"));
    });
    \u0275\u0275text(1, " Registrarme ");
    \u0275\u0275elementEnd();
  }
}
function ModalErrorComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function ModalErrorComponent_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reenviarCorreoFinalizarReg("reenviarCorreo"));
    });
    \u0275\u0275text(1, " Reenviar email ");
    \u0275\u0275elementEnd();
  }
}
var ModalErrorComponent = class _ModalErrorComponent {
  data;
  dialogRef;
  navCtrl;
  constructor(data, dialogRef, navCtrl) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.navCtrl = navCtrl;
  }
  ngOnInit() {
    console.log("data: ", this.data);
  }
  close() {
    this.dialogRef.close();
  }
  reenviarCorreoFinalizarReg(condicion) {
    this.navCtrl.navigateRoot(["/home"], {
      animated: false
    });
    this.dialogRef.close(condicion);
  }
  toRegistro(condicion) {
    this.navCtrl.navigateRoot(["/registro"], {
      animated: false
    });
    this.dialogRef.close(condicion);
  }
  static \u0275fac = function ModalErrorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModalErrorComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(NavController));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModalErrorComponent, selectors: [["app-modal-error"]], decls: 19, vars: 5, consts: [[1, "container"], [1, "modal-header", "d-flex", "align-items-center"], [1, "d-flex", "align-items-center"], [1, "icon-red"], [1, "ms-2"], ["mat-icon-button", "", "aria-label", "Cerrar", 1, "close-button", 3, "click"], [1, "modal-body"], [1, "modal-footer"], ["mat-button", "", 1, "btn_bg", "btn"], ["mat-button", "", 3, "click"], ["mat-button", "", 1, "btn_bg", "btn", 3, "click"]], template: function ModalErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-icon", 3);
      \u0275\u0275text(4, "warning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 5);
      \u0275\u0275listener("click", function ModalErrorComponent_Template_button_click_7_listener() {
        return ctx.close();
      });
      \u0275\u0275elementStart(8, "mat-icon");
      \u0275\u0275text(9, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(10, "mat-divider");
      \u0275\u0275elementStart(11, "div", 6)(12, "p");
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 7);
      \u0275\u0275conditionalCreate(15, ModalErrorComponent_Conditional_15_Template, 2, 0, "button", 8);
      \u0275\u0275conditionalCreate(16, ModalErrorComponent_Conditional_16_Template, 2, 0, "button", 8);
      \u0275\u0275elementStart(17, "button", 9);
      \u0275\u0275listener("click", function ModalErrorComponent_Template_button_click_17_listener() {
        return ctx.close();
      });
      \u0275\u0275text(18, " Cerrar ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("@dialogAnimation", void 0);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.data.title);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.data.message);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((ctx.data == null ? null : ctx.data.mostrarBotonRegistro) ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.data == null ? null : ctx.data.mostrarBotonReenvioEmail) ? 16 : -1);
    }
  }, dependencies: [MatButtonModule, MatButton, MatIconButton, MatIcon, MatDivider], styles: ["\n.modal-header[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.icon-red[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 2rem;\n  width: 30px;\n  height: 30px;\n}\n.close-button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: gray;\n  font-size: 1.5rem;\n  transition: color 0.3s ease;\n}\n.close-button[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n.modal-body[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 1rem 0;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 1rem;\n}\n.container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding: 1rem;\n}\n/*# sourceMappingURL=modal-error.component.css.map */"], data: { animation: [
    trigger("dialogAnimation", [
      transition(":enter", [
        style({ opacity: 0, transform: "scale(0.9)" }),
        animate("300ms ease-out", style({ opacity: 1, transform: "scale(1)" }))
      ]),
      transition(":leave", [animate("300ms ease-in", style({ opacity: 0, transform: "scale(0.9)" }))])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalErrorComponent, [{
    type: Component,
    args: [{ selector: "app-modal-error", standalone: true, imports: [MatButtonModule, MatIcon, MatDivider], animations: [
      trigger("dialogAnimation", [
        transition(":enter", [
          style({ opacity: 0, transform: "scale(0.9)" }),
          animate("300ms ease-out", style({ opacity: 1, transform: "scale(1)" }))
        ]),
        transition(":leave", [animate("300ms ease-in", style({ opacity: 0, transform: "scale(0.9)" }))])
      ])
    ], template: `<div
  class="container"
  @dialogAnimation
>
  <div class="modal-header d-flex align-items-center">
    <div class="d-flex align-items-center">
      <mat-icon class="icon-red">warning</mat-icon>
      <h2 class="ms-2">{{ data.title }}</h2>
    </div>
    <button
      mat-icon-button
      class="close-button"
      (click)="close()"
      aria-label="Cerrar"
    >
      <mat-icon>close</mat-icon>
    </button>
  </div>
  <mat-divider></mat-divider>
  <div class="modal-body">
    <p>{{ data.message }}</p>
  </div>
  <div class="modal-footer">
    @if (data?.mostrarBotonRegistro) {
      <button
        mat-button
        class="btn_bg btn"
        (click)="toRegistro('registro')"
      >
        Registrarme
      </button>
    }

    @if (data?.mostrarBotonReenvioEmail) {
      <button
        mat-button
        class="btn_bg btn"
        (click)="reenviarCorreoFinalizarReg('reenviarCorreo')"
      >
        Reenviar email
      </button>
    }
    <button
      mat-button
      (click)="close()"
    >
      Cerrar
    </button>
  </div>
</div>
`, styles: ["/* src/app/components/modal-error/modal-error.component.scss */\n.modal-header {\n  font-size: 1.5rem;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.icon-red {\n  color: red;\n  font-size: 2rem;\n  width: 30px;\n  height: 30px;\n}\n.close-button {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: gray;\n  font-size: 1.5rem;\n  transition: color 0.3s ease;\n}\n.close-button:hover {\n  color: black;\n}\n.modal-body {\n  font-size: 1rem;\n  margin: 1rem 0;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 1rem;\n}\n.container {\n  overflow: hidden;\n  padding: 1rem;\n}\n/*# sourceMappingURL=modal-error.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }, { type: NavController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModalErrorComponent, { className: "ModalErrorComponent", filePath: "src/app/components/modal-error/modal-error.component.ts", lineNumber: 26 });
})();

export {
  ModalErrorComponent
};
//# sourceMappingURL=chunk-CIEE2FXQ.js.map
