import {
  JumbotronComponent
} from "./chunk-Z4UJGIJA.js";
import {
  NavbarComponent
} from "./chunk-QIUENU5G.js";
import "./chunk-XGLFMII2.js";
import "./chunk-FPL4PN3H.js";
import "./chunk-WO2ZSM4X.js";
import "./chunk-GYAYVE5N.js";
import "./chunk-7NH46FL3.js";
import "./chunk-AF4L5EWO.js";
import "./chunk-YZOGC4HD.js";
import "./chunk-ZYMQAXGI.js";
import "./chunk-UIKNRIU5.js";
import "./chunk-FCE3VLZJ.js";
import "./chunk-CGCOLBWN.js";
import "./chunk-H72L7N4J.js";
import {
  IonAccordion,
  IonAccordionGroup,
  IonContent,
  IonItem,
  IonLabel,
  IonicModule
} from "./chunk-6IWXE3BU.js";
import "./chunk-XHXT42RH.js";
import {
  FormsModule
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-HLETIGG3.js";
import "./chunk-7556B6PN.js";
import "./chunk-W7NNY2EY.js";
import "./chunk-5UBTS3LV.js";
import "./chunk-5U7ILDTA.js";
import "./chunk-DBFJ6K2U.js";
import "./chunk-46CSAHEN.js";
import "./chunk-ZANXXOCD.js";
import "./chunk-TTTMSMQM.js";
import "./chunk-IWHG45GR.js";
import "./chunk-QRXYEVCI.js";
import "./chunk-D5V6R5MP.js";
import "./chunk-5D42N2GT.js";
import "./chunk-QOQL43QQ.js";
import "./chunk-YMESYUMT.js";
import "./chunk-IVBL4Y7V.js";
import "./chunk-OQ6XJYX6.js";
import "./chunk-N5FWEBJU.js";
import "./chunk-KJR5G6CW.js";
import "./chunk-KD7SVZKO.js";
import "./chunk-BPLG4SRC.js";
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

// src/app/pages/decalogo/decalogo.page.ts
function DecalogoPage_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-jumbotron", 11);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DecalogoPage, selectors: [["app-decalogo"]], decls: 76, vars: 5, consts: [[3, "backRoute", "searchRoute", "isLoggedIn"], [3, "fullscreen"], [4, "ngIf"], [1, "container", "mt-4"], [1, "text-center", "mb-4"], [1, "fw-bold"], [1, "text-muted"], [1, "mb-3"], [1, "mb-3", "shadow-sm"], ["slot", "header", 1, "white-header"], ["slot", "content", 1, "p-3"], [3, "title", "imageSrc", "helpText"]], template: function DecalogoPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar", 0);
      \u0275\u0275elementStart(1, "ion-content", 1);
      \u0275\u0275template(2, DecalogoPage_div_2_Template, 2, 3, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h1", 5);
      \u0275\u0275text(6, "NUESTRO DEC\xC1LOGO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, "Los 10 principios para que cada kil\xF3metro sea un orgullo.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "ion-accordion-group", 7)(10, "ion-accordion", 8)(11, "ion-item", 9)(12, "ion-label");
      \u0275\u0275text(13, "1. Respeto Radical y No Discriminaci\xF3n");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 10);
      \u0275\u0275text(15, " En GoGuay, el respeto es la base. No toleramos ninguna forma de discriminaci\xF3n por identidad de g\xE9nero, orientaci\xF3n sexual, expresi\xF3n, raza, religi\xF3n o diversidad funcional. El lenguaje de odio o agresivo conlleva la expulsi\xF3n inmediata. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "ion-accordion", 8)(17, "ion-item", 9)(18, "ion-label");
      \u0275\u0275text(19, "2. Privacidad y Confidencialidad");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 10);
      \u0275\u0275text(21, ' El trayecto es un espacio privado. Est\xE1 estrictamente prohibido compartir informaci\xF3n, fotos o "sacar del armario" (outing) a cualquier usuario fuera de la aplicaci\xF3n sin su consentimiento expl\xEDcito. ');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "ion-accordion", 8)(23, "ion-item", 9)(24, "ion-label");
      \u0275\u0275text(25, "3. Compromiso con el Espacio Seguro");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 10);
      \u0275\u0275text(27, " Cada veh\xEDculo es un refugio. Los usuarios se comprometen a mantener un ambiente libre de juicios, prejuicios y microagresiones, permitiendo que todos viajen con total libertad de ser quienes son. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "ion-accordion", 8)(29, "ion-item", 9)(30, "ion-label");
      \u0275\u0275text(31, "4. Confianza mediante la Verificaci\xF3n");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 10);
      \u0275\u0275text(33, " La seguridad se construye entre todos. Para formar parte de GoGuay, es obligatorio completar el proceso de verificaci\xF3n de identidad para asegurar que nuestra comunidad sea real, transparente y fiable. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "ion-accordion", 8)(35, "ion-item", 9)(36, "ion-label");
      \u0275\u0275text(37, "5. Compromiso y Puntualidad");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 10);
      \u0275\u0275text(39, " Respetamos el tiempo ajeno. Las cancelaciones deben ser excepcionales, realizadas con antelaci\xF3n y debidamente justificadas para no romper la log\xEDstica y confianza de los dem\xE1s miembros. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "ion-accordion", 8)(41, "ion-item", 9)(42, "ion-label");
      \u0275\u0275text(43, "6. Ambiente Saludable y Libre de Sustancias");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 10);
      \u0275\u0275text(45, " Para garantizar una convivencia \xF3ptima, no se permite el consumo de alcohol o drogas durante el viaje. Asimismo, cualquier conducta de \xEDndole sexual est\xE1 prohibida en los trayectos compartidos. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "ion-accordion", 8)(47, "ion-item", 9)(48, "ion-label");
      \u0275\u0275text(49, "7. Rese\xF1as Constructivas y Honestas");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 10);
      \u0275\u0275text(51, " Usa el sistema de valoraciones para ayudar a la comunidad. Los comentarios deben ser respetuosos y veraces, enfocados en mejorar la experiencia y reconocer el buen comportamiento de otros usuarios. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "ion-accordion", 8)(53, "ion-item", 9)(54, "ion-label");
      \u0275\u0275text(55, "8. Validaci\xF3n de todas las Identidades");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 10);
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
      \u0275\u0275elementStart(64, "ion-accordion", 8)(65, "ion-item", 9)(66, "ion-label");
      \u0275\u0275text(67, "9. Seguridad en Ruta");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div", 10);
      \u0275\u0275text(69, " Conductores y pasajeros deben cumplir con todas las normativas de tr\xE1fico. Los veh\xEDculos deben estar en perfecto estado t\xE9cnico y con el seguro en vigor para garantizar la integridad f\xEDsica de todos. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "ion-accordion", 8)(71, "ion-item", 9)(72, "ion-label");
      \u0275\u0275text(73, "10. Vigilancia Comunitaria y Soporte");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 10);
      \u0275\u0275text(75, " Si algo no va bien, no est\xE1s solo/a. GoGuay ofrece canales directos para reportar incidencias. Nuestro equipo act\xFAa con rapidez y confidencialidad para resolver conflictos y proteger a la comunidad. ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("backRoute", "/home")("searchRoute", "newTravel")("isLoggedIn", ctx.userLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mostrarJumbotron);
    }
  }, dependencies: [
    IonicModule,
    IonAccordion,
    IonAccordionGroup,
    IonContent,
    IonItem,
    IonLabel,
    CommonModule,
    NgIf,
    FormsModule,
    NavbarComponent,
    JumbotronComponent
  ], styles: ["\n\nion-accordion[_ngcontent-%COMP%] {\n  border-radius: 35px;\n  border: 1px solid black;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  color: black;\n  background-color: #f4f5f8;\n}\n/*# sourceMappingURL=decalogo.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DecalogoPage, [{
    type: Component,
    args: [{ selector: "app-decalogo", standalone: true, imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      NavbarComponent,
      JumbotronComponent
    ], template: `<app-navbar [backRoute]="'/home'" [searchRoute]="'newTravel'" [isLoggedIn]="userLoggedIn"></app-navbar>\r
\r
<ion-content [fullscreen]="true">\r
  <div *ngIf="mostrarJumbotron">\r
    <app-jumbotron [title]="'Un espacio seguro para compartir cada kil\xF3metro.'"\r
      [imageSrc]="'../../assets/folder/jumbo3.jpg'" [helpText]="'JUMBOTRON.HELP'"></app-jumbotron>\r
  </div>\r
\r
  <div class="container mt-4">\r
    <div class="text-center mb-4">\r
      <h1 class="fw-bold">NUESTRO DEC\xC1LOGO</h1>\r
      <p class="text-muted">Los 10 principios para que cada kil\xF3metro sea un orgullo.</p>\r
    </div>\r
\r
    <ion-accordion-group class="mb-3">\r
\r
      <ion-accordion class="mb-3 shadow-sm">\r
        <ion-item slot="header" class="white-header">\r
          <ion-label>1. Respeto Radical y No Discriminaci\xF3n</ion-label>\r
        </ion-item>\r
        <div slot="content" class="p-3">\r
          En GoGuay, el respeto es la base. No toleramos ninguna forma de discriminaci\xF3n por identidad de g\xE9nero,\r
          orientaci\xF3n sexual, expresi\xF3n, raza, religi\xF3n o diversidad funcional. El lenguaje de odio o agresivo conlleva\r
          la expulsi\xF3n inmediata.\r
        </div>\r
      </ion-accordion>\r
\r
      <ion-accordion class="mb-3 shadow-sm">\r
        <ion-item slot="header" class="white-header">\r
          <ion-label>2. Privacidad y Confidencialidad</ion-label>\r
        </ion-item>\r
        <div slot="content" class="p-3">\r
          El trayecto es un espacio privado. Est\xE1 estrictamente prohibido compartir informaci\xF3n, fotos o "sacar del\r
          armario" (outing) a cualquier usuario fuera de la aplicaci\xF3n sin su consentimiento expl\xEDcito.\r
        </div>\r
      </ion-accordion>\r
\r
      <ion-accordion class="mb-3 shadow-sm">\r
        <ion-item slot="header" class="white-header">\r
          <ion-label>3. Compromiso con el Espacio Seguro</ion-label>\r
        </ion-item>\r
        <div slot="content" class="p-3">\r
          Cada veh\xEDculo es un refugio. Los usuarios se comprometen a mantener un ambiente libre de juicios, prejuicios y\r
          microagresiones, permitiendo que todos viajen con total libertad de ser quienes son.\r
        </div>\r
      </ion-accordion>\r
\r
      <ion-accordion class="mb-3 shadow-sm">\r
        <ion-item slot="header" class="white-header">\r
          <ion-label>4. Confianza mediante la Verificaci\xF3n</ion-label>\r
        </ion-item>\r
        <div slot="content" class="p-3">\r
          La seguridad se construye entre todos. Para formar parte de GoGuay, es obligatorio completar el proceso de\r
          verificaci\xF3n de identidad para asegurar que nuestra comunidad sea real, transparente y fiable.\r
        </div>\r
      </ion-accordion>\r
\r
      <ion-accordion class="mb-3 shadow-sm">\r
        <ion-item slot="header" class="white-header">\r
          <ion-label>5. Compromiso y Puntualidad</ion-label>\r
        </ion-item>\r
        <div slot="content" class="p-3">\r
          Respetamos el tiempo ajeno. Las cancelaciones deben ser excepcionales, realizadas con antelaci\xF3n y debidamente\r
          justificadas para no romper la log\xEDstica y confianza de los dem\xE1s miembros.\r
        </div>\r
      </ion-accordion>\r
\r
      <ion-accordion class="mb-3 shadow-sm">\r
        <ion-item slot="header" class="white-header">\r
          <ion-label>6. Ambiente Saludable y Libre de Sustancias</ion-label>\r
        </ion-item>\r
        <div slot="content" class="p-3">\r
          Para garantizar una convivencia \xF3ptima, no se permite el consumo de alcohol o drogas durante el viaje.\r
          Asimismo, cualquier conducta de \xEDndole sexual est\xE1 prohibida en los trayectos compartidos.\r
        </div>\r
      </ion-accordion>\r
\r
      <ion-accordion class="mb-3 shadow-sm">\r
        <ion-item slot="header" class="white-header">\r
          <ion-label>7. Rese\xF1as Constructivas y Honestas</ion-label>\r
        </ion-item>\r
        <div slot="content" class="p-3">\r
          Usa el sistema de valoraciones para ayudar a la comunidad. Los comentarios deben ser respetuosos y veraces,\r
          enfocados en mejorar la experiencia y reconocer el buen comportamiento de otros usuarios.\r
        </div>\r
      </ion-accordion>\r
\r
      <ion-accordion class="mb-3 shadow-sm">\r
        <ion-item slot="header" class="white-header">\r
          <ion-label>8. Validaci\xF3n de todas las Identidades</ion-label>\r
        </ion-item>\r
        <div slot="content" class="p-3">\r
          Somos un espectro diverso. El uso del <strong>nombre sentido</strong> y el respeto absoluto a los\r
          <strong>pronombres</strong> es obligatorio. En GoGuay, no se cuestiona la identidad de nadie.\r
        </div>\r
      </ion-accordion>\r
\r
      <ion-accordion class="mb-3 shadow-sm">\r
        <ion-item slot="header" class="white-header">\r
          <ion-label>9. Seguridad en Ruta</ion-label>\r
        </ion-item>\r
        <div slot="content" class="p-3">\r
          Conductores y pasajeros deben cumplir con todas las normativas de tr\xE1fico. Los veh\xEDculos deben estar en\r
          perfecto estado t\xE9cnico y con el seguro en vigor para garantizar la integridad f\xEDsica de todos.\r
        </div>\r
      </ion-accordion>\r
\r
      <ion-accordion class="mb-3 shadow-sm">\r
        <ion-item slot="header" class="white-header">\r
          <ion-label>10. Vigilancia Comunitaria y Soporte</ion-label>\r
        </ion-item>\r
        <div slot="content" class="p-3">\r
          Si algo no va bien, no est\xE1s solo/a. GoGuay ofrece canales directos para reportar incidencias. Nuestro\r
          equipo act\xFAa con rapidez y confidencialidad para resolver conflictos y proteger a la comunidad.\r
        </div>\r
      </ion-accordion>\r
\r
    </ion-accordion-group>\r
  </div>\r
</ion-content>`, styles: ["/* src/app/pages/decalogo/decalogo.page.scss */\nion-accordion {\n  border-radius: 35px;\n  border: 1px solid black;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  color: black;\n  background-color: #f4f5f8;\n}\n/*# sourceMappingURL=decalogo.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DecalogoPage, { className: "DecalogoPage", filePath: "src/app/pages/decalogo/decalogo.page.ts", lineNumber: 22 });
})();
export {
  DecalogoPage
};
//# sourceMappingURL=decalogo.page-AZLYJSMO.js.map
