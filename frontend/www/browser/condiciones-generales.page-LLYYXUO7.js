import {
  JumbotronComponent
} from "./chunk-Y3VBELMI.js";
import {
  NavbarComponent
} from "./chunk-YAGW6LPY.js";
import "./chunk-N25HX3QD.js";
import "./chunk-TGPQDEZS.js";
import "./chunk-BLKEDZE4.js";
import "./chunk-N7S2XU3X.js";
import "./chunk-G5UZDB7B.js";
import "./chunk-WDE6N5F6.js";
import "./chunk-34RASOLQ.js";
import {
  MatButtonModule
} from "./chunk-ULIFZXTE.js";
import "./chunk-WBBLYEAR.js";
import "./chunk-LLKVXR72.js";
import {
  MatIconModule
} from "./chunk-Z2EGICVD.js";
import {
  IonAccordion,
  IonAccordionGroup,
  IonContent,
  IonItem,
  IonLabel,
  IonicModule
} from "./chunk-XTRPVKSN.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-PWPN4F54.js";
import {
  FormsModule,
  RouterModule
} from "./chunk-DD4MNYDA.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-YUKRBYLH.js";
import "./chunk-NEFVXLXQ.js";
import "./chunk-UGUZQALC.js";
import "./chunk-4JA4ETJA.js";
import "./chunk-RI33YQSB.js";
import "./chunk-7NBG2LBA.js";
import "./chunk-MOKADOCG.js";
import "./chunk-4UX5YYJM.js";
import "./chunk-7WJRAT5Y.js";
import "./chunk-XSENUJ4A.js";
import "./chunk-K6BOSGGR.js";
import "./chunk-HM6RSKJQ.js";
import "./chunk-QU22HLHJ.js";
import "./chunk-HMGJJ2JN.js";
import "./chunk-GV4SC633.js";
import "./chunk-XEOOW4LE.js";
import "./chunk-TNIKZTJG.js";
import "./chunk-QD6KASZP.js";
import "./chunk-ZO2Q2TV5.js";
import "./chunk-NZ2QYBMG.js";
import "./chunk-5MFCCRYD.js";
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

// src/app/pages/condiciones-generales/condiciones-generales.page.ts
function CondicionesUsoComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-jumbotron", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("title", "La base de nuestra confianza mutua.")("imageSrc", "../../../assets/folder/jumbo4.jpg")("helpText", "LEGAL.HELP");
  }
}
var CondicionesUsoComponent = class _CondicionesUsoComponent {
  userLoggedIn = true;
  mostrarJumbotron = true;
  constructor() {
  }
  ngOnInit() {
  }
  static \u0275fac = function CondicionesUsoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CondicionesUsoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CondicionesUsoComponent, selectors: [["app-condiciones-generales"]], decls: 77, vars: 8, consts: [[3, "backRoute", "searchRoute", "isLoggedIn"], [3, "fullscreen"], [1, "container", "mt-4"], [1, "text-center", "mb-4"], [1, "fw-bold"], [1, "text-muted"], [1, "mb-3"], [1, "mb-3", "shadow-sm"], ["slot", "header", 1, "white-header"], ["slot", "content", 1, "p-3", "text-muted"], [1, "container", "d-flex", "justify-content-center", "mt-4", "mb-5"], [1, "text-small", "text-muted"], [1, "text-center"], [1, "info-text"], ["src", "../../../assets/logo/PRIDECAR.png", 1, "icon_logo"], [3, "title", "imageSrc", "helpText"]], template: function CondicionesUsoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar", 0);
      \u0275\u0275elementStart(1, "ion-content", 1);
      \u0275\u0275conditionalCreate(2, CondicionesUsoComponent_Conditional_2_Template, 2, 3, "div");
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "h1", 4);
      \u0275\u0275text(6, "T\xE9rminos y Condiciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, "Informaci\xF3n legal sobre el uso de la plataforma GoGuay.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "ion-accordion-group", 6)(10, "ion-accordion", 7)(11, "ion-item", 8)(12, "ion-label");
      \u0275\u0275text(13, "1. Naturaleza de GoGuay");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 9);
      \u0275\u0275text(15, " GoGuay es una plataforma tecnol\xF3gica de intermediaci\xF3n que conecta a conductores y pasajeros particulares para compartir gastos de viaje. ");
      \u0275\u0275elementStart(16, "strong");
      \u0275\u0275text(17, "No somos una empresa de transporte, taxis ni VTC.");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " Los conductores no obtienen un beneficio econ\xF3mico; el importe aportado por los pasajeros se destina exclusivamente a cubrir gastos de combustible, peajes y mantenimiento del veh\xEDculo. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "ion-accordion", 7)(20, "ion-item", 8)(21, "ion-label");
      \u0275\u0275text(22, "2. Requisitos para el registro");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 9);
      \u0275\u0275text(24, " Para utilizar la aplicaci\xF3n, el usuario debe: ");
      \u0275\u0275elementStart(25, "ul")(26, "li");
      \u0275\u0275text(27, "Ser mayor de 18 a\xF1os.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "li");
      \u0275\u0275text(29, "Haber completado el proceso de verificaci\xF3n de identidad.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "li");
      \u0275\u0275text(31, "Proporcionar informaci\xF3n veraz y actualizada.");
      \u0275\u0275elementEnd()();
      \u0275\u0275text(32, " Los conductores deben poseer un permiso de conducir v\xE1lido y un seguro de responsabilidad civil obligatorio en vigor. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "ion-accordion", 7)(34, "ion-item", 8)(35, "ion-label");
      \u0275\u0275text(36, "3. Limitaci\xF3n de Responsabilidad");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 9);
      \u0275\u0275text(38, " GoGuay no es parte del contrato de transporte entre usuarios. Por lo tanto, no se hace responsable de: ");
      \u0275\u0275elementStart(39, "ul")(40, "li");
      \u0275\u0275text(41, "Accidentes, retrasos o da\xF1os materiales durante el trayecto.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "li");
      \u0275\u0275text(43, "La veracidad de las valoraciones de los usuarios.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "li");
      \u0275\u0275text(45, "Cualquier p\xE9rdida de objetos personales.");
      \u0275\u0275elementEnd()();
      \u0275\u0275text(46, " La plataforma se reserva el derecho de expulsar a cualquier usuario que incumpla el ");
      \u0275\u0275elementStart(47, "strong");
      \u0275\u0275text(48, "Dec\xE1logo de Comunidad");
      \u0275\u0275elementEnd();
      \u0275\u0275text(49, " . ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "ion-accordion", 7)(51, "ion-item", 8)(52, "ion-label");
      \u0275\u0275text(53, "4. Normas de Conducta y Cancelaciones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 9);
      \u0275\u0275text(55, " Los usuarios se comprometen a cumplir con el Dec\xE1logo de GoGuay. Las cancelaciones reiteradas sin justificaci\xF3n t\xE9cnica o de fuerza mayor podr\xE1n suponer la suspensi\xF3n de la cuenta. Est\xE1 prohibido el uso de la app para fines il\xEDcitos o comerciales ajenos al carpooling. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "ion-accordion", 7)(57, "ion-item", 8)(58, "ion-label");
      \u0275\u0275text(59, "5. Protecci\xF3n de Datos y Privacidad");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 9);
      \u0275\u0275text(61, " Tratamos tus datos personales (nombre sentido, contacto, veh\xEDculo) conforme al Reglamento General de Protecci\xF3n de Datos (RGPD). Tu informaci\xF3n de contacto solo ser\xE1 revelada al otro usuario una vez confirmada la reserva para facilitar la coordinaci\xF3n del viaje. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "ion-accordion", 7)(63, "ion-item", 8)(64, "ion-label");
      \u0275\u0275text(65, "6. Propiedad Intelectual");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 9);
      \u0275\u0275text(67, ' El nombre "GoGuay", el logo, el dise\xF1o de la interfaz y el c\xF3digo fuente son propiedad exclusiva de sus creadores. Queda prohibida su reproducci\xF3n o uso comercial sin autorizaci\xF3n previa. ');
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(68, "div", 10)(69, "p", 11);
      \u0275\u0275text(70, "\xDAltima actualizaci\xF3n: Marzo 2026");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 10)(72, "div", 12)(73, "p", 13);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275element(76, "img", 14);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("backRoute", "/home")("searchRoute", "newTravel")("isLoggedIn", ctx.userLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mostrarJumbotron ? 2 : -1);
      \u0275\u0275advance(72);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(75, 6, "AJUSTESAPP.DERECHOS_TXT"), " ");
    }
  }, dependencies: [FormsModule, MatIconModule, IonicModule, IonAccordion, IonAccordionGroup, IonContent, IonItem, IonLabel, MatButtonModule, RouterModule, JumbotronComponent, NavbarComponent, TranslateModule, TranslatePipe], styles: ["\n.container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.white-header[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --color: #333;\n  font-weight: 600;\n  border-radius: 8px;\n}\nion-accordion[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #eee;\n  border-radius: 35px;\n  overflow: hidden;\n}\n.text-muted[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  font-size: 0.95rem;\n}\n.text-muted[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  margin-top: 10px;\n}\n.text-small[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.info-text[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.icon_logo[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n}\n/*# sourceMappingURL=condiciones-generales.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CondicionesUsoComponent, [{
    type: Component,
    args: [{ selector: "app-condiciones-generales", imports: [FormsModule, MatIconModule, IonicModule, MatButtonModule, RouterModule, JumbotronComponent, NavbarComponent, TranslateModule], template: `<app-navbar
  [backRoute]="'/home'"
  [searchRoute]="'newTravel'"
  [isLoggedIn]="userLoggedIn"
></app-navbar>

<ion-content [fullscreen]="true">
  @if (mostrarJumbotron) {
  <div>
    <app-jumbotron
      [title]="'La base de nuestra confianza mutua.'"
      [imageSrc]="'../../../assets/folder/jumbo4.jpg'"
      [helpText]="'LEGAL.HELP'"
    ></app-jumbotron>
  </div>
  }

  <div class="container mt-4">
    <div class="text-center mb-4">
      <h1 class="fw-bold">T\xE9rminos y Condiciones</h1>
      <p class="text-muted">Informaci\xF3n legal sobre el uso de la plataforma GoGuay.</p>
    </div>

    <ion-accordion-group class="mb-3">
      <ion-accordion class="mb-3 shadow-sm">
        <ion-item
          slot="header"
          class="white-header"
        >
          <ion-label>1. Naturaleza de GoGuay</ion-label>
        </ion-item>
        <div
          slot="content"
          class="p-3 text-muted"
        >
          GoGuay es una plataforma tecnol\xF3gica de intermediaci\xF3n que conecta a conductores y pasajeros particulares para compartir gastos de
          viaje.
          <strong>No somos una empresa de transporte, taxis ni VTC.</strong>
          Los conductores no obtienen un beneficio econ\xF3mico; el importe aportado por los pasajeros se destina exclusivamente a cubrir
          gastos de combustible, peajes y mantenimiento del veh\xEDculo.
        </div>
      </ion-accordion>

      <ion-accordion class="mb-3 shadow-sm">
        <ion-item
          slot="header"
          class="white-header"
        >
          <ion-label>2. Requisitos para el registro</ion-label>
        </ion-item>
        <div
          slot="content"
          class="p-3 text-muted"
        >
          Para utilizar la aplicaci\xF3n, el usuario debe:
          <ul>
            <li>Ser mayor de 18 a\xF1os.</li>
            <li>Haber completado el proceso de verificaci\xF3n de identidad.</li>
            <li>Proporcionar informaci\xF3n veraz y actualizada.</li>
          </ul>
          Los conductores deben poseer un permiso de conducir v\xE1lido y un seguro de responsabilidad civil obligatorio en vigor.
        </div>
      </ion-accordion>

      <ion-accordion class="mb-3 shadow-sm">
        <ion-item
          slot="header"
          class="white-header"
        >
          <ion-label>3. Limitaci\xF3n de Responsabilidad</ion-label>
        </ion-item>
        <div
          slot="content"
          class="p-3 text-muted"
        >
          GoGuay no es parte del contrato de transporte entre usuarios. Por lo tanto, no se hace responsable de:
          <ul>
            <li>Accidentes, retrasos o da\xF1os materiales durante el trayecto.</li>
            <li>La veracidad de las valoraciones de los usuarios.</li>
            <li>Cualquier p\xE9rdida de objetos personales.</li>
          </ul>
          La plataforma se reserva el derecho de expulsar a cualquier usuario que incumpla el
          <strong>Dec\xE1logo de Comunidad</strong>
          .
        </div>
      </ion-accordion>

      <ion-accordion class="mb-3 shadow-sm">
        <ion-item
          slot="header"
          class="white-header"
        >
          <ion-label>4. Normas de Conducta y Cancelaciones</ion-label>
        </ion-item>
        <div
          slot="content"
          class="p-3 text-muted"
        >
          Los usuarios se comprometen a cumplir con el Dec\xE1logo de GoGuay. Las cancelaciones reiteradas sin justificaci\xF3n t\xE9cnica o de
          fuerza mayor podr\xE1n suponer la suspensi\xF3n de la cuenta. Est\xE1 prohibido el uso de la app para fines il\xEDcitos o comerciales ajenos
          al carpooling.
        </div>
      </ion-accordion>

      <ion-accordion class="mb-3 shadow-sm">
        <ion-item
          slot="header"
          class="white-header"
        >
          <ion-label>5. Protecci\xF3n de Datos y Privacidad</ion-label>
        </ion-item>
        <div
          slot="content"
          class="p-3 text-muted"
        >
          Tratamos tus datos personales (nombre sentido, contacto, veh\xEDculo) conforme al Reglamento General de Protecci\xF3n de Datos (RGPD).
          Tu informaci\xF3n de contacto solo ser\xE1 revelada al otro usuario una vez confirmada la reserva para facilitar la coordinaci\xF3n del
          viaje.
        </div>
      </ion-accordion>

      <ion-accordion class="mb-3 shadow-sm">
        <ion-item
          slot="header"
          class="white-header"
        >
          <ion-label>6. Propiedad Intelectual</ion-label>
        </ion-item>
        <div
          slot="content"
          class="p-3 text-muted"
        >
          El nombre "GoGuay", el logo, el dise\xF1o de la interfaz y el c\xF3digo fuente son propiedad exclusiva de sus creadores. Queda prohibida
          su reproducci\xF3n o uso comercial sin autorizaci\xF3n previa.
        </div>
      </ion-accordion>
    </ion-accordion-group>
  </div>

  <div class="container d-flex justify-content-center mt-4 mb-5">
    <p class="text-small text-muted">\xDAltima actualizaci\xF3n: Marzo 2026</p>
  </div>
  <div class="container d-flex justify-content-center mt-4 mb-5">
    <div class="text-center">
      <p class="info-text">
        {{ "AJUSTESAPP.DERECHOS_TXT" | translate }}
        <img
          class="icon_logo"
          src="../../../assets/logo/PRIDECAR.png"
        />
      </p>
    </div>
  </div>
</ion-content>
`, styles: ["/* src/app/pages/condiciones-generales/condiciones-generales.page.scss */\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.white-header {\n  --background: #ffffff;\n  --color: #333;\n  font-weight: 600;\n  border-radius: 8px;\n}\nion-accordion {\n  background: white;\n  border: 1px solid #eee;\n  border-radius: 35px;\n  overflow: hidden;\n}\n.text-muted {\n  line-height: 1.6;\n  font-size: 0.95rem;\n}\n.text-muted ul {\n  padding-left: 20px;\n  margin-top: 10px;\n}\n.text-small {\n  font-size: 0.8rem;\n}\n.info-text {\n  font-size: 10px;\n}\n.icon_logo {\n  height: 20px;\n  width: 20px;\n}\n/*# sourceMappingURL=condiciones-generales.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CondicionesUsoComponent, { className: "CondicionesUsoComponent", filePath: "src/app/pages/condiciones-generales/condiciones-generales.page.ts", lineNumber: 17 });
})();
export {
  CondicionesUsoComponent
};
//# sourceMappingURL=condiciones-generales.page-LLYYXUO7.js.map
