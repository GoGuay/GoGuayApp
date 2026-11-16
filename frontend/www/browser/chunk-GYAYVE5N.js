import {
  MatButton,
  MatButtonModule,
  MatDivider,
  MatIconButton
} from "./chunk-ZYMQAXGI.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-FCE3VLZJ.js";
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from "./chunk-CGCOLBWN.js";
import {
  MatIcon
} from "./chunk-H72L7N4J.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-XHXT42RH.js";
import {
  DomSanitizer,
  NavController
} from "./chunk-TU2LK3TM.js";
import {
  CommonModule,
  NgIf
} from "./chunk-7PPOBOFB.js";
import {
  Component,
  Inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-HLETIGG3.js";

// src/app/components/help-modal/help-modal.component.ts
function HelpModalComponent_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 15);
    \u0275\u0275text(1, " question_mark ");
    \u0275\u0275elementEnd();
  }
}
function HelpModalComponent_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 16);
    \u0275\u0275text(1, "warning");
    \u0275\u0275elementEnd();
  }
}
function HelpModalComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", ctx_r0.descripcion, \u0275\u0275sanitizeHtml);
  }
}
function HelpModalComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "button", 18);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function HelpModalComponent_div_14_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.abrirMasDetalles());
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "info");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 2, "MODAL_HELP.ARIA_VER_MAS_DETALLES"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "MODAL_HELP.VER_MAS_DETALLES"), " ");
  }
}
function HelpModalComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function HelpModalComponent_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.close());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "MODAL_HELP.ARIA_CERRAR"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "MODAL_HELP.CERRAR"), " ");
  }
}
function HelpModalComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function HelpModalComponent_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.crearVuelta());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "MODAL_HELP.ARIA_CREAR_VIAJE_VUELTA"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "MODAL_HELP.CREAR_VIAJE_VUELTA"), " ");
  }
}
function HelpModalComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function HelpModalComponent_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.aceptarCondiciones("registro"));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "MODAL_HELP.ARIA_ACEPTAR_CONDICIONES"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "MODAL_HELP.ACEPTAR"), " ");
  }
}
function HelpModalComponent_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function HelpModalComponent_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarParaMasInfo("home"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "MODAL_HELP.NO_ACEPTAR"), " ");
  }
}
var HelpModalComponent = class _HelpModalComponent {
  data;
  sanitizer;
  dialogRef;
  navCtrl;
  /**
   * En la variable "message" utilizamos el tipado de objetos SafeHtml
   * para incrustar de forma segura código HTML en dicha variable
   * y mostrar ese código en el HTML del componente.
   */
  message;
  title;
  descripcion;
  constructor(data, sanitizer, dialogRef, navCtrl) {
    this.data = data;
    this.sanitizer = sanitizer;
    this.dialogRef = dialogRef;
    this.navCtrl = navCtrl;
    this.title = data.title;
    this.message = this.sanitizer.bypassSecurityTrustHtml(data.message);
    this.descripcion = this.sanitizer.bypassSecurityTrustHtml(data.descripcion);
  }
  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
  aceptarCondiciones(accepted) {
    this.dialogRef.close(accepted);
  }
  abrirMasDetalles() {
    this.dialogRef.close();
    this.navCtrl.navigateRoot("/decalogo");
  }
  cerrarParaMasInfo(accepted) {
    this.dialogRef.close(accepted);
  }
  crearVuelta() {
    this.dialogRef.close();
    this.navCtrl.navigateRoot("/data-viaje");
  }
  static \u0275fac = function HelpModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HelpModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(NavController));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HelpModalComponent, selectors: [["app-help-modal"]], decls: 20, vars: 15, consts: [["role", "dialog", "aria-modal", "true", 1, "container"], [1, "modal-header", "d-flex", "align-items-center", "justify-content-between"], ["class", "icon-red", "aria-hidden", "true", 4, "ngIf"], ["class", "icon-red", 4, "ngIf"], ["id", "modal-title", 1, "modal-title-flex"], ["mat-icon-button", "", 1, "close-button", 3, "click"], [1, "modal-body"], [3, "innerHTML"], [3, "innerHTML", 4, "ngIf"], ["class", "button-container", 4, "ngIf"], [1, "modal-footer", "d-flex", "justify-content-center"], ["mat-button", "", "class", "me-2", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "class", "me-2", 3, "click", 4, "ngIf"], ["mat-button", "", "class", "btn_bg", "cdkFocusInitial", "", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "click", 4, "ngIf"], ["aria-hidden", "true", 1, "icon-red"], [1, "icon-red"], [1, "button-container"], ["mat-raised-button", "", 1, "btn_bg", 3, "click"], ["mat-button", "", 1, "me-2", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "me-2", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 1, "btn_bg", 3, "click"], ["mat-button", "", 3, "click"]], template: function HelpModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275template(2, HelpModalComponent_mat_icon_2_Template, 2, 0, "mat-icon", 2)(3, HelpModalComponent_mat_icon_3_Template, 2, 0, "mat-icon", 3);
      \u0275\u0275elementStart(4, "h2", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 5);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275listener("click", function HelpModalComponent_Template_button_click_6_listener() {
        return ctx.close();
      });
      \u0275\u0275elementStart(8, "mat-icon");
      \u0275\u0275text(9, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(10, "mat-divider");
      \u0275\u0275elementStart(11, "div", 6);
      \u0275\u0275element(12, "p", 7);
      \u0275\u0275template(13, HelpModalComponent_p_13_Template, 1, 1, "p", 8)(14, HelpModalComponent_div_14_Template, 7, 6, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 10);
      \u0275\u0275template(16, HelpModalComponent_button_16_Template, 4, 6, "button", 11)(17, HelpModalComponent_button_17_Template, 4, 6, "button", 12)(18, HelpModalComponent_button_18_Template, 4, 6, "button", 13)(19, HelpModalComponent_button_19_Template, 3, 3, "button", 14);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("@dialogAnimation", void 0);
      \u0275\u0275attribute("aria-labelledby", "modal-title");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.data.eliminacion_cuenta);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.data.eliminacion_cuenta);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.data.title, " ");
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 13, "MODAL_HELP.ARIA_CERRAR"));
      \u0275\u0275advance(6);
      \u0275\u0275property("innerHTML", ctx.message, \u0275\u0275sanitizeHtml);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.data.eliminacion_cuenta && ctx.descripcion !== void 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.data.showMoreInfoButton);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.data.showMoreInfoButton);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.data.showReturnTripButton);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.data.showAcceptButton);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.data.showMoreInfoButton);
    }
  }, dependencies: [MatButtonModule, MatButton, MatIconButton, MatIcon, MatDivider, CommonModule, NgIf, TranslateModule, TranslatePipe], styles: ["\n\n.modal-header[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.modal-title-flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex-grow: 1;\n  margin: 0 1rem;\n}\n.icon-red[_ngcontent-%COMP%] {\n  color: #cf9456;\n  font-size: 1.7rem;\n}\n.close-button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: gray;\n  font-size: 1.5rem;\n  transition: color 0.3s ease;\n}\n.close-button[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n.close-button[_ngcontent-%COMP%]:focus, \n.close-button[_ngcontent-%COMP%]:focus-visible {\n  outline: none !important;\n  box-shadow: none !important;\n  background-color: transparent !important;\n}\n.modal-body[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 1rem 0;\n  overflow-x: hidden;\n  word-break: break-word;\n  text-align: center;\n}\n.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding: 1rem;\n}\n@media (max-width: 576px) {\n  h2[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n/*# sourceMappingURL=help-modal.component.css.map */"], data: { animation: [
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HelpModalComponent, [{
    type: Component,
    args: [{ selector: "app-help-modal", standalone: true, imports: [MatButtonModule, MatIcon, MatDivider, CommonModule, TranslateModule], animations: [
      trigger("dialogAnimation", [
        transition(":enter", [
          style({ opacity: 0, transform: "scale(0.9)" }),
          animate("300ms ease-out", style({ opacity: 1, transform: "scale(1)" }))
        ]),
        transition(":leave", [animate("300ms ease-in", style({ opacity: 0, transform: "scale(0.9)" }))])
      ])
    ], template: `<div
  class="container"
  role="dialog"
  aria-modal="true"
  [attr.aria-labelledby]="'modal-title'"
  @dialogAnimation
>
  <div class="modal-header d-flex align-items-center justify-content-between">
    <mat-icon
      class="icon-red"
      aria-hidden="true"
      *ngIf="!data.eliminacion_cuenta"
    >
      question_mark
    </mat-icon>
    <mat-icon class="icon-red" *ngIf="data.eliminacion_cuenta">warning</mat-icon>

    <h2
      id="modal-title"
      class="modal-title-flex"
    >
      {{ data.title }}
    </h2>
    <button
      mat-icon-button
      class="close-button"
      (click)="close()"
      [attr.aria-label]="'MODAL_HELP.ARIA_CERRAR' | translate"
    >
      <mat-icon>close</mat-icon>
    </button>
  </div>
  <mat-divider></mat-divider>
  <div class="modal-body">
    <p [innerHTML]="message"></p>
    <p [innerHTML]="descripcion" *ngIf="data.eliminacion_cuenta && descripcion !== undefined"></p>
    <div
      class="button-container"
      *ngIf="data.showMoreInfoButton"
    >
      <button
        mat-raised-button
        class="btn_bg"
        (click)="abrirMasDetalles()"
        [attr.aria-label]="'MODAL_HELP.ARIA_VER_MAS_DETALLES' | translate"
      >
        {{ 'MODAL_HELP.VER_MAS_DETALLES' | translate }}
        <mat-icon>info</mat-icon>
      </button>
    </div>
  </div>
  <div class="modal-footer d-flex justify-content-center">
    <button
      mat-button
      (click)="close()"
      class="me-2"
      *ngIf="!data.showMoreInfoButton"
      [attr.aria-label]="'MODAL_HELP.ARIA_CERRAR' | translate"
    >
      {{ 'MODAL_HELP.CERRAR' | translate }}
    </button>
    <button
      mat-raised-button
      color="primary"
      class="me-2"
      (click)="crearVuelta()"
      *ngIf="data.showReturnTripButton"
      [attr.aria-label]="'MODAL_HELP.ARIA_CREAR_VIAJE_VUELTA' | translate"
    >
      {{ 'MODAL_HELP.CREAR_VIAJE_VUELTA' | translate }}
    </button>
    <button
      mat-button
      class="btn_bg"
      (click)="aceptarCondiciones('registro')"
      *ngIf="data.showAcceptButton"
      cdkFocusInitial
      [attr.aria-label]="'MODAL_HELP.ARIA_ACEPTAR_CONDICIONES' | translate"
    >
      {{ 'MODAL_HELP.ACEPTAR' | translate }}
    </button>
    <button
      mat-button
      (click)="cerrarParaMasInfo('home')"
      *ngIf="data.showMoreInfoButton"
    >
      {{ 'MODAL_HELP.NO_ACEPTAR' | translate }}
    </button>
  </div>
</div>
`, styles: ["/* src/app/components/help-modal/help-modal.component.scss */\n.modal-header {\n  font-size: 1.5rem;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.modal-title-flex {\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex-grow: 1;\n  margin: 0 1rem;\n}\n.icon-red {\n  color: #cf9456;\n  font-size: 1.7rem;\n}\n.close-button {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: gray;\n  font-size: 1.5rem;\n  transition: color 0.3s ease;\n}\n.close-button:hover {\n  color: black;\n}\n.close-button:focus,\n.close-button:focus-visible {\n  outline: none !important;\n  box-shadow: none !important;\n  background-color: transparent !important;\n}\n.modal-body {\n  font-size: 1rem;\n  margin: 1rem 0;\n  overflow-x: hidden;\n  word-break: break-word;\n  text-align: center;\n}\n.modal-body p {\n  margin: 0;\n  padding: 0;\n}\n.container {\n  overflow: hidden;\n  padding: 1rem;\n}\n@media (max-width: 576px) {\n  h2 {\n    font-size: 1.1rem;\n  }\n}\n/*# sourceMappingURL=help-modal.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: DomSanitizer }, { type: MatDialogRef }, { type: NavController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HelpModalComponent, { className: "HelpModalComponent", filePath: "src/app/components/help-modal/help-modal.component.ts", lineNumber: 29 });
})();

export {
  HelpModalComponent
};
//# sourceMappingURL=chunk-GYAYVE5N.js.map
