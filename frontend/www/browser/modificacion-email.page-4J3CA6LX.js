import {
  IonContent
} from "./chunk-WO2ZSM4X.js";
import {
  UserServicesService
} from "./chunk-YZOGC4HD.js";
import {
  ActivatedRoute,
  FormsModule,
  NavController
} from "./chunk-TU2LK3TM.js";
import {
  CommonModule,
  NgIf
} from "./chunk-7PPOBOFB.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext
} from "./chunk-HLETIGG3.js";
import "./chunk-46CSAHEN.js";
import "./chunk-ZANXXOCD.js";
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

// src/app/pages/paginas-panel-usuario/datos-contacto/modificacion-email/modificacion-email.page.ts
function ModificacionEmailPage_h2_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "\xA1CORREO VERIFICADO CORRECTAMENTE!");
    \u0275\u0275elementEnd();
  }
}
function ModificacionEmailPage_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "El enlace de verificaci\xF3n no es valido o ha expirado");
    \u0275\u0275elementEnd();
  }
}
var ModificacionEmailPage = class _ModificacionEmailPage {
  route;
  userService;
  navCtrl;
  verified = false;
  constructor(route, userService, navCtrl) {
    this.route = route;
    this.userService = userService;
    this.navCtrl = navCtrl;
  }
  ngOnInit() {
    const token = this.route.snapshot.paramMap.get("token");
    this.userService.verificar_email(token).subscribe((verificado) => {
      console.log(verificado);
      if (verificado) {
        this.verified = true;
      } else {
        this.verified = false;
      }
    });
  }
  boton_volver() {
    window.open("http://localhost:4200/verificaciones-perfil", "_blank");
    window.close();
  }
  static \u0275fac = function ModificacionEmailPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModificacionEmailPage)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UserServicesService), \u0275\u0275directiveInject(NavController));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModificacionEmailPage, selectors: [["app-modificacion-email"]], decls: 12, vars: 3, consts: [["errorMsg", ""], [3, "fullscreen"], [1, "verify-message"], ["src", "https://res.cloudinary.com/dnrxptrb0/image/upload/v1749583413/logo/ahhqej3rrccdr6bdf7vg.png", "alt", "GoGuay", 1, "logo"], [4, "ngIf", "ngIfElse"], [1, "mt-4"], ["type", "button", 1, "btn", "btn_bg", 3, "click"]], template: function ModificacionEmailPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "ion-content", 1)(1, "div", 2)(2, "div");
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275template(4, ModificacionEmailPage_h2_4_Template, 2, 0, "h2", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, ModificacionEmailPage_ng_template_5_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(7, "div", 5)(8, "p");
      \u0275\u0275text(9, "Puedes seguir verificando tu tel\xE9fono si a\xFAn no lo has hecho");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 6);
      \u0275\u0275listener("click", function ModificacionEmailPage_Template_button_click_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.boton_volver());
      });
      \u0275\u0275text(11, " Volver a GoGuay ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const errorMsg_r2 = \u0275\u0275reference(6);
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.verified)("ngIfElse", errorMsg_r2);
    }
  }, dependencies: [IonContent, CommonModule, NgIf, FormsModule], styles: ["\n\n.verify-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 150px;\n  display: block;\n  margin: 0 auto 20px;\n}\n/*# sourceMappingURL=modificacion-email.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModificacionEmailPage, [{
    type: Component,
    args: [{ selector: "app-modificacion-email", standalone: true, imports: [IonContent, CommonModule, FormsModule], template: '<ion-content [fullscreen]="true">\r\n  <div class="verify-message">\r\n    <div>\r\n      <img\r\n        src="https://res.cloudinary.com/dnrxptrb0/image/upload/v1749583413/logo/ahhqej3rrccdr6bdf7vg.png"\r\n        alt="GoGuay"\r\n        class="logo"\r\n      />\r\n      <h2 *ngIf="verified; else errorMsg">\xA1CORREO VERIFICADO CORRECTAMENTE!</h2>\r\n    </div>\r\n\r\n    <ng-template #errorMsg>\r\n      <h2>El enlace de verificaci\xF3n no es valido o ha expirado</h2>\r\n    </ng-template>\r\n    <div class="mt-4">\r\n      <p>Puedes seguir verificando tu tel\xE9fono si a\xFAn no lo has hecho</p>\r\n      <button\r\n        type="button"\r\n        class="btn btn_bg"\r\n        (click)="boton_volver()"\r\n      >\r\n        Volver a GoGuay\r\n      </button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n', styles: ["/* src/app/pages/paginas-panel-usuario/datos-contacto/modificacion-email/modificacion-email.page.scss */\n.verify-message {\n  text-align: center;\n  padding: 2rem;\n}\n.logo {\n  width: 150px;\n  display: block;\n  margin: 0 auto 20px;\n}\n/*# sourceMappingURL=modificacion-email.page.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: UserServicesService }, { type: NavController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModificacionEmailPage, { className: "ModificacionEmailPage", filePath: "src/app/pages/paginas-panel-usuario/datos-contacto/modificacion-email/modificacion-email.page.ts", lineNumber: 16 });
})();
export {
  ModificacionEmailPage
};
//# sourceMappingURL=modificacion-email.page-4J3CA6LX.js.map
