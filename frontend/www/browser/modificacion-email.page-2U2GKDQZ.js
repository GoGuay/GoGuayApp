import {
  IonContent
} from "./chunk-BLKEDZE4.js";
import {
  UserServicesService
} from "./chunk-34RASOLQ.js";
import {
  ActivatedRoute,
  FormsModule,
  NavController
} from "./chunk-DD4MNYDA.js";
import {
  Component,
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-YUKRBYLH.js";
import "./chunk-MOKADOCG.js";
import "./chunk-4UX5YYJM.js";
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

// src/app/pages/paginas-panel-usuario/datos-contacto/modificacion-email/modificacion-email.page.ts
function ModificacionEmailPage_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "\xA1CORREO VERIFICADO CORRECTAMENTE!");
    \u0275\u0275elementEnd();
  }
}
function ModificacionEmailPage_Conditional_5_Template(rf, ctx) {
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModificacionEmailPage, selectors: [["app-modificacion-email"]], decls: 11, vars: 2, consts: [[3, "fullscreen"], [1, "verify-message"], ["src", "https://res.cloudinary.com/dnrxptrb0/image/upload/v1749583413/logo/ahhqej3rrccdr6bdf7vg.png", "alt", "GoGuay", 1, "logo"], [1, "mt-4"], ["type", "button", 1, "btn", "btn_bg", 3, "click"]], template: function ModificacionEmailPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1)(2, "div");
      \u0275\u0275element(3, "img", 2);
      \u0275\u0275conditionalCreate(4, ModificacionEmailPage_Conditional_4_Template, 2, 0, "h2")(5, ModificacionEmailPage_Conditional_5_Template, 2, 0, "h2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 3)(7, "p");
      \u0275\u0275text(8, "Puedes seguir verificando tu tel\xE9fono si a\xFAn no lo has hecho");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 4);
      \u0275\u0275listener("click", function ModificacionEmailPage_Template_button_click_9_listener() {
        return ctx.boton_volver();
      });
      \u0275\u0275text(10, " Volver a GoGuay ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.verified ? 4 : 5);
    }
  }, dependencies: [IonContent, FormsModule], styles: ["\n.verify-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 150px;\n  display: block;\n  margin: 0 auto 20px;\n}\n/*# sourceMappingURL=modificacion-email.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModificacionEmailPage, [{
    type: Component,
    args: [{ selector: "app-modificacion-email", standalone: true, imports: [IonContent, FormsModule], template: '<ion-content [fullscreen]="true">\n  <div class="verify-message">\n    <div>\n      <img\n        src="https://res.cloudinary.com/dnrxptrb0/image/upload/v1749583413/logo/ahhqej3rrccdr6bdf7vg.png"\n        alt="GoGuay"\n        class="logo"\n      />\n      @if (verified) {\n      <h2>\xA1CORREO VERIFICADO CORRECTAMENTE!</h2>\n      } @else {\n      <h2>El enlace de verificaci\xF3n no es valido o ha expirado</h2>\n      }\n    </div>\n\n    <div class="mt-4">\n      <p>Puedes seguir verificando tu tel\xE9fono si a\xFAn no lo has hecho</p>\n      <button\n        type="button"\n        class="btn btn_bg"\n        (click)="boton_volver()"\n      >\n        Volver a GoGuay\n      </button>\n    </div>\n  </div>\n</ion-content>\n', styles: ["/* src/app/pages/paginas-panel-usuario/datos-contacto/modificacion-email/modificacion-email.page.scss */\n.verify-message {\n  text-align: center;\n  padding: 2rem;\n}\n.logo {\n  width: 150px;\n  display: block;\n  margin: 0 auto 20px;\n}\n/*# sourceMappingURL=modificacion-email.page.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: UserServicesService }, { type: NavController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModificacionEmailPage, { className: "ModificacionEmailPage", filePath: "src/app/pages/paginas-panel-usuario/datos-contacto/modificacion-email/modificacion-email.page.ts", lineNumber: 16 });
})();
export {
  ModificacionEmailPage
};
//# sourceMappingURL=modificacion-email.page-2U2GKDQZ.js.map
