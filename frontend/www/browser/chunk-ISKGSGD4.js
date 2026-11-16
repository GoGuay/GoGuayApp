import {
  MatDialogModule
} from "./chunk-LLKVXR72.js";
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonicModule
} from "./chunk-XTRPVKSN.js";
import {
  FormsModule,
  NavController,
  ReactiveFormsModule
} from "./chunk-DD4MNYDA.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-YUKRBYLH.js";

// src/app/pages/admin/shared-admin/navbar-admin/navbar-admin.page.ts
var NavbarAdmin = class _NavbarAdmin {
  navCtrl;
  constructor(navCtrl) {
    this.navCtrl = navCtrl;
  }
  ngOnInit() {
  }
  logout() {
  }
  goHome() {
    this.navCtrl.navigateRoot(["/admin-app"]);
  }
  static \u0275fac = function NavbarAdmin_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavbarAdmin)(\u0275\u0275directiveInject(NavController));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarAdmin, selectors: [["app-navbar-admin"]], decls: 12, vars: 1, consts: [[3, "translucent"], ["color", "primary"], ["slot", "start"], [3, "click"], [1, "fi", "fi-rr-house-chimney", "me-2"], ["slot", "end"], ["fill", "solid", "color", "danger", 1, "logout-btn", 3, "click"], [1, "fi", "fi-rr-power", "ms-2"]], template: function NavbarAdmin_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2)(3, "ion-button", 3);
      \u0275\u0275listener("click", function NavbarAdmin_Template_ion_button_click_3_listener() {
        return ctx.goHome();
      });
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275text(5, " Inicio ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "ion-title");
      \u0275\u0275text(7, "Administraci\xF3n GoGuay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "ion-buttons", 5)(9, "ion-button", 6);
      \u0275\u0275listener("click", function NavbarAdmin_Template_ion_button_click_9_listener() {
        return ctx.logout();
      });
      \u0275\u0275text(10, " Cerrar sesi\xF3n ");
      \u0275\u0275element(11, "i", 7);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("translucent", true);
    }
  }, dependencies: [FormsModule, ReactiveFormsModule, IonicModule, IonButton, IonButtons, IonHeader, IonTitle, IonToolbar, MatDialogModule], styles: ["\nion-button[_ngcontent-%COMP%] {\n  --border-radius: 35px !important;\n  text-align: center !important;\n}\n/*# sourceMappingURL=navbar-admin.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarAdmin, [{
    type: Component,
    args: [{ selector: "app-navbar-admin", standalone: true, imports: [FormsModule, ReactiveFormsModule, IonicModule, MatDialogModule], template: '<ion-header [translucent]="true">\n    <ion-toolbar color="primary">\n        <ion-buttons slot="start">\n            <ion-button (click)="goHome()">\n                <i class="fi fi-rr-house-chimney me-2"></i>\n                Inicio\n            </ion-button>\n        </ion-buttons>\n\n        <ion-title>Administraci\xF3n GoGuay</ion-title>\n\n        <ion-buttons slot="end">\n            <ion-button (click)="logout()" fill="solid" color="danger" class="logout-btn">\n                Cerrar sesi\xF3n\n                <i class="fi fi-rr-power ms-2"></i>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>', styles: ["/* src/app/pages/admin/shared-admin/navbar-admin/navbar-admin.page.scss */\nion-button {\n  --border-radius: 35px !important;\n  text-align: center !important;\n}\n/*# sourceMappingURL=navbar-admin.page.css.map */\n"] }]
  }], () => [{ type: NavController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarAdmin, { className: "NavbarAdmin", filePath: "src/app/pages/admin/shared-admin/navbar-admin/navbar-admin.page.ts", lineNumber: 13 });
})();

export {
  NavbarAdmin
};
//# sourceMappingURL=chunk-ISKGSGD4.js.map
