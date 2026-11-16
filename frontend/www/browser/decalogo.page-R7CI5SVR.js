import {
  JumbotronComponent
} from "./chunk-DJBA4LGX.js";
import {
  NavbarComponent
} from "./chunk-6PYX74OP.js";
import "./chunk-C4WEIZGQ.js";
import "./chunk-L23MUE74.js";
import "./chunk-FFMYI37T.js";
import "./chunk-X7SDTFSG.js";
import "./chunk-NX7SG6WM.js";
import "./chunk-Q5CK7R7A.js";
import "./chunk-43M6K65B.js";
import "./chunk-TFWCQLOE.js";
import "./chunk-REKVANIZ.js";
import "./chunk-6VCOWNW4.js";
import "./chunk-ZPEWRVEX.js";
import {
  IonAccordion,
  IonAccordionGroup,
  IonContent,
  IonItem,
  IonLabel,
  IonicModule
} from "./chunk-V5JFS32A.js";
import "./chunk-ULJI5CAD.js";
import {
  FormsModule
} from "./chunk-XCBA4FSK.js";
import {
  ChangeDetectionStrategy,
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
  ɵɵproperty,
  ɵɵtext
} from "./chunk-4LZZ5H7X.js";
import "./chunk-PYRDO7X4.js";
import "./chunk-UGUZQALC.js";
import "./chunk-T5TS2YIV.js";
import "./chunk-WC2RXGX6.js";
import "./chunk-PUO4TC4B.js";
import "./chunk-4XZH5Q4W.js";
import "./chunk-4UX5YYJM.js";
import "./chunk-2ZVRKVGD.js";
import "./chunk-DSEDVKEI.js";
import "./chunk-Y3XSLTJY.js";
import "./chunk-BUQIIG6A.js";
import "./chunk-QU22HLHJ.js";
import "./chunk-HMGJJ2JN.js";
import "./chunk-ZEMLCENC.js";
import "./chunk-XEOOW4LE.js";
import "./chunk-GUHVPX3Y.js";
import "./chunk-OUKGZKTF.js";
import "./chunk-QZNKOL6V.js";
import "./chunk-NZ2QYBMG.js";
import "./chunk-7O2RIIXI.js";
import "./chunk-7VLNHB4X.js";
import "./chunk-WTD4IAKK.js";
import "./chunk-LDX7VN5G.js";
import "./chunk-XNSI3F57.js";
import "./chunk-SWNU2J3M.js";
import "./chunk-FUL4CNB6.js";
import "./chunk-AIOHWISL.js";
import "./chunk-77FB7LC2.js";
import "./chunk-SE3K5JBJ.js";
import "./chunk-DI3VEDFV.js";
import "./chunk-MP5LG4CB.js";

// src/app/pages/decalogo/decalogo.page.ts
function DecalogoPage_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-jumbotron", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("title", "Un espacio seguro para compartir cada kil\xF3metro.")("imageSrc", "../../assets/folder/jumbo3.jpg")("helpText", "JUMBOTRON.HELP");
  }
}
var DecalogoPage = class _DecalogoPage {
  userLoggedIn = false;
  userData = {};
  mostrarJumbotron = true;
  constructor() {
  }
  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem("userData") || "{}");
    this.loadJumbotronSetting();
    if (this.userData && Object.keys(this.userData).length > 0 && this.userData.usuario.email) {
      this.userLoggedIn = true;
    } else {
      this.userLoggedIn = false;
    }
  }
  loadJumbotronSetting() {
    const jumbotronSetting = localStorage.getItem("mostrarJumbotron");
    this.mostrarJumbotron = jumbotronSetting === null ? true : jumbotronSetting === "true";
  }
  static \u0275fac = function DecalogoPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DecalogoPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DecalogoPage, selectors: [["app-decalogo"]], decls: 76, vars: 5, consts: [[3, "backRoute", "searchRoute", "isLoggedIn"], [3, "fullscreen"], [1, "container", "mt-4"], [1, "text-center", "mb-4"], [1, "fw-bold"], [1, "text-muted"], [1, "mb-3"], [1, "mb-3", "shadow-sm"], ["slot", "header", 1, "white-header"], ["slot", "content", 1, "p-3"], [3, "title", "imageSrc", "helpText"]], template: function DecalogoPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar", 0);
      \u0275\u0275elementStart(1, "ion-content", 1);
      \u0275\u0275conditionalCreate(2, DecalogoPage_Conditional_2_Template, 2, 3, "div");
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "h1", 4);
      \u0275\u0275text(6, "NUESTRO DEC\xC1LOGO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, "Los 10 principios para que cada kil\xF3metro sea un orgullo.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "ion-accordion-group", 6)(10, "ion-accordion", 7)(11, "ion-item", 8)(12, "ion-label");
      \u0275\u0275text(13, "1. Respeto Radical y No Discriminaci\xF3n");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 9);
      \u0275\u0275text(15, " En GoGuay, el respeto es la base. No toleramos ninguna forma de discriminaci\xF3n por identidad de g\xE9nero, orientaci\xF3n sexual, expresi\xF3n, raza, religi\xF3n o diversidad funcional. El lenguaje de odio o agresivo conlleva la expulsi\xF3n inmediata. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "ion-accordion", 7)(17, "ion-item", 8)(18, "ion-label");
      \u0275\u0275text(19, "2. Privacidad y Confidencialidad");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 9);
      \u0275\u0275text(21, ' El trayecto es un espacio privado. Est\xE1 estrictamente prohibido compartir informaci\xF3n, fotos o "sacar del armario" (outing) a cualquier usuario fuera de la aplicaci\xF3n sin su consentimiento expl\xEDcito. ');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "ion-accordion", 7)(23, "ion-item", 8)(24, "ion-label");
      \u0275\u0275text(25, "3. Compromiso con el Espacio Seguro");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 9);
      \u0275\u0275text(27, " Cada veh\xEDculo es un refugio. Los usuarios se comprometen a mantener un ambiente libre de juicios, prejuicios y microagresiones, permitiendo que todos viajen con total libertad de ser quienes son. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "ion-accordion", 7)(29, "ion-item", 8)(30, "ion-label");
      \u0275\u0275text(31, "4. Confianza mediante la Verificaci\xF3n");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 9);
      \u0275\u0275text(33, " La seguridad se construye entre todos. Para formar parte de GoGuay, es obligatorio completar el proceso de verificaci\xF3n de identidad para asegurar que nuestra comunidad sea real, transparente y fiable. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "ion-accordion", 7)(35, "ion-item", 8)(36, "ion-label");
      \u0275\u0275text(37, "5. Compromiso y Puntualidad");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 9);
      \u0275\u0275text(39, " Respetamos el tiempo ajeno. Las cancelaciones deben ser excepcionales, realizadas con antelaci\xF3n y debidamente justificadas para no romper la log\xEDstica y confianza de los dem\xE1s miembros. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "ion-accordion", 7)(41, "ion-item", 8)(42, "ion-label");
      \u0275\u0275text(43, "6. Ambiente Saludable y Libre de Sustancias");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 9);
      \u0275\u0275text(45, " Para garantizar una convivencia \xF3ptima, no se permite el consumo de alcohol o drogas durante el viaje. Asimismo, cualquier conducta de \xEDndole sexual est\xE1 prohibida en los trayectos compartidos. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "ion-accordion", 7)(47, "ion-item", 8)(48, "ion-label");
      \u0275\u0275text(49, "7. Rese\xF1as Constructivas y Honestas");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 9);
      \u0275\u0275text(51, " Usa el sistema de valoraciones para ayudar a la comunidad. Los comentarios deben ser respetuosos y veraces, enfocados en mejorar la experiencia y reconocer el buen comportamiento de otros usuarios. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "ion-accordion", 7)(53, "ion-item", 8)(54, "ion-label");
      \u0275\u0275text(55, "8. Validaci\xF3n de todas las Identidades");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 9);
      \u0275\u0275text(57, " Somos un espectro diverso. El uso del ");
      \u0275\u0275elementStart(58, "strong");
      \u0275\u0275text(59, "nombre sentido");
      \u0275\u0275elementEnd();
      \u0275\u0275text(60, " y el respeto absoluto a los ");
      \u0275\u0275elementStart(61, "strong");
      \u0275\u0275text(62, "pronombres");
      \u0275\u0275elementEnd();
      \u0275\u0275text(63, " es obligatorio. En GoGuay, no se cuestiona la identidad de nadie. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "ion-accordion", 7)(65, "ion-item", 8)(66, "ion-label");
      \u0275\u0275text(67, "9. Seguridad en Ruta");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div", 9);
      \u0275\u0275text(69, " Conductores y pasajeros deben cumplir con todas las normativas de tr\xE1fico. Los veh\xEDculos deben estar en perfecto estado t\xE9cnico y con el seguro en vigor para garantizar la integridad f\xEDsica de todos. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "ion-accordion", 7)(71, "ion-item", 8)(72, "ion-label");
      \u0275\u0275text(73, "10. Vigilancia Comunitaria y Soporte");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 9);
      \u0275\u0275text(75, " Si algo no va bien, no est\xE1s solo/a. GoGuay ofrece canales directos para reportar incidencias. Nuestro equipo act\xFAa con rapidez y confidencialidad para resolver conflictos y proteger a la comunidad. ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("backRoute", "/home")("searchRoute", "newTravel")("isLoggedIn", ctx.userLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mostrarJumbotron ? 2 : -1);
    }
  }, dependencies: [IonicModule, IonAccordion, IonAccordionGroup, IonContent, IonItem, IonLabel, FormsModule, NavbarComponent, JumbotronComponent], styles: ["\nion-accordion[_ngcontent-%COMP%] {\n  border-radius: 35px;\n  border: 1px solid black;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  color: black;\n  background-color: #f4f5f8;\n}\n/*# sourceMappingURL=decalogo.page.css.map */"], changeDetection: 1 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DecalogoPage, [{
    type: Component,
    args: [{ selector: "app-decalogo", standalone: true, changeDetection: ChangeDetectionStrategy.Eager, imports: [IonicModule, FormsModule, NavbarComponent, JumbotronComponent], template: `<app-navbar
  [backRoute]="'/home'"
  [searchRoute]="'newTravel'"
  [isLoggedIn]="userLoggedIn"
></app-navbar>

<ion-content [fullscreen]="true">
  @if (mostrarJumbotron) {
  <div>
    <app-jumbotron
      [title]="'Un espacio seguro para compartir cada kil\xF3metro.'"
      [imageSrc]="'../../assets/folder/jumbo3.jpg'"
      [helpText]="'JUMBOTRON.HELP'"
    ></app-jumbotron>
  </div>
  }

  <div class="container mt-4">
    <div class="text-center mb-4">
      <h1 class="fw-bold">NUESTRO DEC\xC1LOGO</h1>
      <p class="text-muted">Los 10 principios para que cada kil\xF3metro sea un orgullo.</p>
    </div>

    <ion-accordion-group class="mb-3">
      <ion-accordion class="mb-3 shadow-sm">
        <ion-item
          slot="header"
          class="white-header"
        >
          <ion-label>1. Respeto Radical y No Discriminaci\xF3n</ion-label>
        </ion-item>
        <div
          slot="content"
          class="p-3"
        >
          En GoGuay, el respeto es la base. No toleramos ninguna forma de discriminaci\xF3n por identidad de g\xE9nero, orientaci\xF3n sexual,
          expresi\xF3n, raza, religi\xF3n o diversidad funcional. El lenguaje de odio o agresivo conlleva la expulsi\xF3n inmediata.
        </div>
      </ion-accordion>

      <ion-accordion class="mb-3 shadow-sm">
        <ion-item
          slot="header"
          class="white-header"
        >
          <ion-label>2. Privacidad y Confidencialidad</ion-label>
        </ion-item>
        <div
          slot="content"
          class="p-3"
        >
          El trayecto es un espacio privado. Est\xE1 estrictamente prohibido compartir informaci\xF3n, fotos o "sacar del armario" (outing) a
          cualquier usuario fuera de la aplicaci\xF3n sin su consentimiento expl\xEDcito.
        </div>
      </ion-accordion>

      <ion-accordion class="mb-3 shadow-sm">
        <ion-item
          slot="header"
          class="white-header"
        >
          <ion-label>3. Compromiso con el Espacio Seguro</ion-label>
        </ion-item>
        <div
          slot="content"
          class="p-3"
        >
          Cada veh\xEDculo es un refugio. Los usuarios se comprometen a mantener un ambiente libre de juicios, prejuicios y microagresiones,
          permitiendo que todos viajen con total libertad de ser quienes son.
        </div>
      </ion-accordion>

      <ion-accordion class="mb-3 shadow-sm">
        <ion-item
          slot="header"
          class="white-header"
        >
          <ion-label>4. Confianza mediante la Verificaci\xF3n</ion-label>
        </ion-item>
        <div
          slot="content"
          class="p-3"
        >
          La seguridad se construye entre todos. Para formar parte de GoGuay, es obligatorio completar el proceso de verificaci\xF3n de
          identidad para asegurar que nuestra comunidad sea real, transparente y fiable.
        </div>
      </ion-accordion>

      <ion-accordion class="mb-3 shadow-sm">
        <ion-item
          slot="header"
          class="white-header"
        >
          <ion-label>5. Compromiso y Puntualidad</ion-label>
        </ion-item>
        <div
          slot="content"
          class="p-3"
        >
          Respetamos el tiempo ajeno. Las cancelaciones deben ser excepcionales, realizadas con antelaci\xF3n y debidamente justificadas para
          no romper la log\xEDstica y confianza de los dem\xE1s miembros.
        </div>
      </ion-accordion>

      <ion-accordion class="mb-3 shadow-sm">
        <ion-item
          slot="header"
          class="white-header"
        >
          <ion-label>6. Ambiente Saludable y Libre de Sustancias</ion-label>
        </ion-item>
        <div
          slot="content"
          class="p-3"
        >
          Para garantizar una convivencia \xF3ptima, no se permite el consumo de alcohol o drogas durante el viaje. Asimismo, cualquier
          conducta de \xEDndole sexual est\xE1 prohibida en los trayectos compartidos.
        </div>
      </ion-accordion>

      <ion-accordion class="mb-3 shadow-sm">
        <ion-item
          slot="header"
          class="white-header"
        >
          <ion-label>7. Rese\xF1as Constructivas y Honestas</ion-label>
        </ion-item>
        <div
          slot="content"
          class="p-3"
        >
          Usa el sistema de valoraciones para ayudar a la comunidad. Los comentarios deben ser respetuosos y veraces, enfocados en mejorar
          la experiencia y reconocer el buen comportamiento de otros usuarios.
        </div>
      </ion-accordion>

      <ion-accordion class="mb-3 shadow-sm">
        <ion-item
          slot="header"
          class="white-header"
        >
          <ion-label>8. Validaci\xF3n de todas las Identidades</ion-label>
        </ion-item>
        <div
          slot="content"
          class="p-3"
        >
          Somos un espectro diverso. El uso del
          <strong>nombre sentido</strong>
          y el respeto absoluto a los
          <strong>pronombres</strong>
          es obligatorio. En GoGuay, no se cuestiona la identidad de nadie.
        </div>
      </ion-accordion>

      <ion-accordion class="mb-3 shadow-sm">
        <ion-item
          slot="header"
          class="white-header"
        >
          <ion-label>9. Seguridad en Ruta</ion-label>
        </ion-item>
        <div
          slot="content"
          class="p-3"
        >
          Conductores y pasajeros deben cumplir con todas las normativas de tr\xE1fico. Los veh\xEDculos deben estar en perfecto estado t\xE9cnico y
          con el seguro en vigor para garantizar la integridad f\xEDsica de todos.
        </div>
      </ion-accordion>

      <ion-accordion class="mb-3 shadow-sm">
        <ion-item
          slot="header"
          class="white-header"
        >
          <ion-label>10. Vigilancia Comunitaria y Soporte</ion-label>
        </ion-item>
        <div
          slot="content"
          class="p-3"
        >
          Si algo no va bien, no est\xE1s solo/a. GoGuay ofrece canales directos para reportar incidencias. Nuestro equipo act\xFAa con rapidez y
          confidencialidad para resolver conflictos y proteger a la comunidad.
        </div>
      </ion-accordion>
    </ion-accordion-group>
  </div>
</ion-content>
`, styles: ["/* src/app/pages/decalogo/decalogo.page.scss */\nion-accordion {\n  border-radius: 35px;\n  border: 1px solid black;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  color: black;\n  background-color: #f4f5f8;\n}\n/*# sourceMappingURL=decalogo.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DecalogoPage, { className: "DecalogoPage", filePath: "src/app/pages/decalogo/decalogo.page.ts", lineNumber: 17 });
})();
export {
  DecalogoPage
};
//# debugId=f7dcece8-450a-55ad-8c7c-cd691168de74
//# sourceMappingURL=decalogo.page-R7CI5SVR.js.map
