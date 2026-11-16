import {
  VentanaDudasComponent
} from "./chunk-5FAZQ455.js";
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
import {
  MatButtonModule
} from "./chunk-ZYMQAXGI.js";
import "./chunk-UIKNRIU5.js";
import "./chunk-FCE3VLZJ.js";
import "./chunk-CGCOLBWN.js";
import {
  MatIconModule
} from "./chunk-H72L7N4J.js";
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
  FormsModule,
  RouterModule
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

// src/app/pages/faqs/faqs.page.ts
function FaqsPage_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-jumbotron", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("title", "GoGuay: Tu viaje, tu gente, tu libertad.")("imageSrc", "../../assets/folder/jumbo3.jpg")("helpText", "JUMBOTRON.HELP");
  }
}
var FaqsPage = class _FaqsPage {
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
  static \u0275fac = function FaqsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FaqsPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FaqsPage, selectors: [["app-faqs"]], decls: 79, vars: 5, consts: [[3, "backRoute", "searchRoute", "isLoggedIn"], [3, "fullscreen"], [4, "ngIf"], [1, "container", "mt-4"], [1, "text-center", "mb-4"], [1, "titulo-faq"], [1, "mb-3"], ["value", "espacioSeguro", 1, "mb-3", "shadow-sm", "custom-accordion"], ["slot", "header", 1, "white-header"], ["slot", "content", 1, "p-3", "text-muted"], ["value", "reservaRayo", 1, "mb-3", "shadow-sm", "custom-accordion"], [1, "fi", "fi-rr-bolt", 2, "color", "#f1c40f"], ["value", "reservaManual", 1, "mb-3", "shadow-sm", "custom-accordion"], ["value", "publicarViaje", 1, "mb-3", "shadow-sm", "custom-accordion"], ["value", "identidad", 1, "mb-3", "shadow-sm", "custom-accordion"], ["value", "equipaje", 1, "mb-3", "shadow-sm", "custom-accordion"], ["value", "cancelaciones", 1, "mb-3", "shadow-sm", "custom-accordion"], ["value", "pagos", 1, "mb-3", "shadow-sm", "custom-accordion"], [1, "container", "d-flex", "justify-content-center", "mt-4", "mb-5"], [3, "title", "imageSrc", "helpText"]], template: function FaqsPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar", 0);
      \u0275\u0275elementStart(1, "ion-content", 1);
      \u0275\u0275template(2, FaqsPage_div_2_Template, 2, 3, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h1", 5);
      \u0275\u0275text(6, "Preguntas Frecuentes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, "Todo lo que necesitas saber para viajar con GoGuay.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "ion-accordion-group", 6)(10, "ion-accordion", 7)(11, "ion-item", 8)(12, "ion-label");
      \u0275\u0275text(13, "\xBFPor qu\xE9 GoGuay es un espacio seguro?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 9)(15, "strong");
      \u0275\u0275text(16, "GoGuay");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, " nace para conectar a personas del colectivo LGBTIQ+ y aliados, eliminando el miedo al prejuicio. Verificamos perfiles y fomentamos un sistema de rese\xF1as basado en el respeto, la identidad y la seguridad mutua. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "ion-accordion", 10)(19, "ion-item", 8)(20, "ion-label");
      \u0275\u0275text(21, "\xBFQu\xE9 significa el icono del rayo ");
      \u0275\u0275element(22, "i", 11);
      \u0275\u0275text(23, "?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 9);
      \u0275\u0275text(25, " El rayo indica que el viaje tiene ");
      \u0275\u0275elementStart(26, "strong");
      \u0275\u0275text(27, "Reserva Autom\xE1tica");
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, '. Esto significa que no tienes que esperar a que el conductor te acepte; al pulsar en "Unirse", tu plaza queda confirmada al instante. \xA1Ideal para viajes de \xFAltima hora! ');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "ion-accordion", 12)(30, "ion-item", 8)(31, "ion-label");
      \u0275\u0275text(32, "\xBFC\xF3mo funcionan las solicitudes manuales?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 9);
      \u0275\u0275text(34, ' Si el viaje no tiene el rayo, es una solicitud manual. Al pedir tu plaza, se abrir\xE1 un chat con el conductor. Tu reserva quedar\xE1 "Pendiente" hasta que el conductor revise tu perfil y acepte la solicitud. ');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "ion-accordion", 13)(36, "ion-item", 8)(37, "ion-label");
      \u0275\u0275text(38, "\xBFC\xF3mo puedo publicar un viaje?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 9);
      \u0275\u0275text(40, ' Si tienes coche, pulsa en "Publicar", indica origen, destino, fecha y plazas. Podr\xE1s elegir si quieres ');
      \u0275\u0275elementStart(41, "strong");
      \u0275\u0275text(42, "reserva autom\xE1tica");
      \u0275\u0275elementEnd();
      \u0275\u0275text(43, " (para ahorrar tiempo) o manual (para hablar primero con tus pasajeros). ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "ion-accordion", 14)(45, "ion-item", 8)(46, "ion-label");
      \u0275\u0275text(47, "\xBFSe respeta mi identidad en la app?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 9);
      \u0275\u0275text(49, " Totalmente. En ");
      \u0275\u0275elementStart(50, "strong");
      \u0275\u0275text(51, "GoGuay");
      \u0275\u0275elementEnd();
      \u0275\u0275text(52, " puedes configurar tu nombre sentido y pronombres. Queremos que te sientas libre de ser quien eres durante todo el trayecto. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "ion-accordion", 15)(54, "ion-item", 8)(55, "ion-label");
      \u0275\u0275text(56, "\xBFCu\xE1nto equipaje puedo llevar?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 9);
      \u0275\u0275text(58, " El espacio depende del coche del conductor. Al buscar un viaje, revisa los detalles del veh\xEDculo o pregunta por el chat si llevas maletas grandes. ");
      \u0275\u0275elementStart(59, "strong");
      \u0275\u0275text(60, "Tip GoGuay:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(61, " Intenta viajar ligero para que todxs est\xE9is c\xF3modxs. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "ion-accordion", 16)(63, "ion-item", 8)(64, "ion-label");
      \u0275\u0275text(65, "\xBFQu\xE9 pasa si tengo que cancelar?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 9);
      \u0275\u0275text(67, " Sabemos que los planes cambian. Si eres pasajerx, avisa con la mayor antelaci\xF3n posible a trav\xE9s del chat para que el conductor pueda liberar la plaza. Si eres conductor, intenta no cancelar a menos que sea una emergencia, ya que otras personas dependen de ti para llegar a su destino. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "ion-accordion", 17)(69, "ion-item", 8)(70, "ion-label");
      \u0275\u0275text(71, "\xBFC\xF3mo se pagan los gastos del viaje?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 9);
      \u0275\u0275text(73, " En ");
      \u0275\u0275elementStart(74, "strong");
      \u0275\u0275text(75, "GoGuay");
      \u0275\u0275elementEnd();
      \u0275\u0275text(76, " compartimos gastos. El precio que ves en la app es el que debes abonar al conductor. Recomendamos concretar el m\xE9todo de pago (efectivo o Bizum) a trav\xE9s del chat antes de empezar el trayecto para evitar confusiones. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(77, "div", 18);
      \u0275\u0275element(78, "app-ventana-dudas");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("backRoute", "/home")("searchRoute", "newTravel")("isLoggedIn", ctx.userLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mostrarJumbotron);
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    FormsModule,
    MatIconModule,
    IonicModule,
    IonAccordion,
    IonAccordionGroup,
    IonContent,
    IonItem,
    IonLabel,
    MatButtonModule,
    RouterModule,
    JumbotronComponent,
    NavbarComponent,
    VentanaDudasComponent
  ], styles: ["\n\nion-button[_ngcontent-%COMP%] {\n  color: #000000 !important;\n}\nion-accordion[_ngcontent-%COMP%] {\n  border-radius: 35px;\n  border: 1px solid black;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  color: black;\n}\n.titulo-faq[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: #333;\n}\n.custom-accordion[_ngcontent-%COMP%] {\n  border-radius: 32px !important;\n  overflow: hidden;\n  background: white;\n  border-left: 5px solid #baffc9;\n}\n.custom-accordion[value=reservaRayo][_ngcontent-%COMP%] {\n  border-left-color: #ffffba;\n}\n.custom-accordion[value=espacioSeguro][_ngcontent-%COMP%] {\n  border-left-color: #ffb3ba;\n}\n.custom-accordion[value=reservaManual][_ngcontent-%COMP%] {\n  border-left-color: #bae1ff;\n}\n.custom-accordion[value=identidad][_ngcontent-%COMP%] {\n  border-left-color: #e0baff;\n}\n.custom-accordion[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: #b7e0b4;\n  --color: #444;\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  line-height: 1.5;\n  font-size: 0.95rem;\n  background: #fdfdfd;\n}\nstrong[_ngcontent-%COMP%] {\n  color: #222;\n}\n/*# sourceMappingURL=faqs.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaqsPage, [{
    type: Component,
    args: [{ selector: "app-faqs", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatIconModule,
      IonicModule,
      MatButtonModule,
      RouterModule,
      JumbotronComponent,
      NavbarComponent,
      VentanaDudasComponent
    ], template: `<app-navbar [backRoute]="'/home'" [searchRoute]="'newTravel'" [isLoggedIn]="userLoggedIn"></app-navbar>

<ion-content [fullscreen]="true">
  <div *ngIf="mostrarJumbotron">
    <app-jumbotron [title]="'GoGuay: Tu viaje, tu gente, tu libertad.'"
      [imageSrc]="'../../assets/folder/jumbo3.jpg'" [helpText]="'JUMBOTRON.HELP'"></app-jumbotron>
  </div>

  <div class="container mt-4">
    <div class="text-center mb-4">
      <h1 class="titulo-faq">Preguntas Frecuentes</h1>
      <p>Todo lo que necesitas saber para viajar con GoGuay.</p>
    </div>

    <ion-accordion-group class="mb-3">

      <ion-accordion value="espacioSeguro" class="mb-3 shadow-sm custom-accordion">
        <ion-item slot="header" class="white-header">
          <ion-label>\xBFPor qu\xE9 GoGuay es un espacio seguro?</ion-label>
        </ion-item>
        <div slot="content" class="p-3 text-muted">
          <strong>GoGuay</strong> nace para conectar a personas del colectivo LGBTIQ+ y aliados, eliminando el miedo al prejuicio. 
          Verificamos perfiles y fomentamos un sistema de rese\xF1as basado en el respeto, la identidad y la seguridad mutua.
        </div>
      </ion-accordion>

      <ion-accordion value="reservaRayo" class="mb-3 shadow-sm custom-accordion">
        <ion-item slot="header" class="white-header">
          <ion-label>\xBFQu\xE9 significa el icono del rayo <i class="fi fi-rr-bolt" style="color: #f1c40f;"></i>?</ion-label>
        </ion-item>
        <div slot="content" class="p-3 text-muted">
          El rayo indica que el viaje tiene <strong>Reserva Autom\xE1tica</strong>. 
          Esto significa que no tienes que esperar a que el conductor te acepte; al pulsar en "Unirse", tu plaza queda confirmada al instante. \xA1Ideal para viajes de \xFAltima hora!
        </div>
      </ion-accordion>

      <ion-accordion value="reservaManual" class="mb-3 shadow-sm custom-accordion">
        <ion-item slot="header" class="white-header">
          <ion-label>\xBFC\xF3mo funcionan las solicitudes manuales?</ion-label>
        </ion-item>
        <div slot="content" class="p-3 text-muted">
          Si el viaje no tiene el rayo, es una solicitud manual. Al pedir tu plaza, se abrir\xE1 un chat con el conductor. 
          Tu reserva quedar\xE1 "Pendiente" hasta que el conductor revise tu perfil y acepte la solicitud.
        </div>
      </ion-accordion>

      <ion-accordion value="publicarViaje" class="mb-3 shadow-sm custom-accordion">
        <ion-item slot="header" class="white-header">
          <ion-label>\xBFC\xF3mo puedo publicar un viaje?</ion-label>
        </ion-item>
        <div slot="content" class="p-3 text-muted">
          Si tienes coche, pulsa en "Publicar", indica origen, destino, fecha y plazas. 
          Podr\xE1s elegir si quieres <strong>reserva autom\xE1tica</strong> (para ahorrar tiempo) o manual (para hablar primero con tus pasajeros).
        </div>
      </ion-accordion>

      <ion-accordion value="identidad" class="mb-3 shadow-sm custom-accordion">
        <ion-item slot="header" class="white-header">
          <ion-label>\xBFSe respeta mi identidad en la app?</ion-label>
        </ion-item>
        <div slot="content" class="p-3 text-muted">
          Totalmente. En <strong>GoGuay</strong> puedes configurar tu nombre sentido y pronombres. Queremos que te sientas libre de ser quien eres durante todo el trayecto.
        </div>
      </ion-accordion>

      <ion-accordion value="equipaje" class="mb-3 shadow-sm custom-accordion">
        <ion-item slot="header" class="white-header">
          <ion-label>\xBFCu\xE1nto equipaje puedo llevar?</ion-label>
        </ion-item>
        <div slot="content" class="p-3 text-muted">
          El espacio depende del coche del conductor. Al buscar un viaje, revisa los detalles del veh\xEDculo o pregunta por el chat si llevas maletas grandes. 
          <strong>Tip GoGuay:</strong> Intenta viajar ligero para que todxs est\xE9is c\xF3modxs.
        </div>
      </ion-accordion>

      <ion-accordion value="cancelaciones" class="mb-3 shadow-sm custom-accordion">
        <ion-item slot="header" class="white-header">
          <ion-label>\xBFQu\xE9 pasa si tengo que cancelar?</ion-label>
        </ion-item>
        <div slot="content" class="p-3 text-muted">
          Sabemos que los planes cambian. Si eres pasajerx, avisa con la mayor antelaci\xF3n posible a trav\xE9s del chat para que el conductor pueda liberar la plaza. 
          Si eres conductor, intenta no cancelar a menos que sea una emergencia, ya que otras personas dependen de ti para llegar a su destino.
        </div>
      </ion-accordion>

      <ion-accordion value="pagos" class="mb-3 shadow-sm custom-accordion">
        <ion-item slot="header" class="white-header">
          <ion-label>\xBFC\xF3mo se pagan los gastos del viaje?</ion-label>
        </ion-item>
        <div slot="content" class="p-3 text-muted">
          En <strong>GoGuay</strong> compartimos gastos. El precio que ves en la app es el que debes abonar al conductor. 
          Recomendamos concretar el m\xE9todo de pago (efectivo o Bizum) a trav\xE9s del chat antes de empezar el trayecto para evitar confusiones.
        </div>
      </ion-accordion>

    </ion-accordion-group>
  </div>

  <div class="container d-flex justify-content-center mt-4 mb-5">
    <app-ventana-dudas></app-ventana-dudas>
  </div>
</ion-content>`, styles: ["/* src/app/pages/faqs/faqs.page.scss */\nion-button {\n  color: #000000 !important;\n}\nion-accordion {\n  border-radius: 35px;\n  border: 1px solid black;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  color: black;\n}\n.titulo-faq {\n  font-weight: 800;\n  color: #333;\n}\n.custom-accordion {\n  border-radius: 32px !important;\n  overflow: hidden;\n  background: white;\n  border-left: 5px solid #baffc9;\n}\n.custom-accordion[value=reservaRayo] {\n  border-left-color: #ffffba;\n}\n.custom-accordion[value=espacioSeguro] {\n  border-left-color: #ffb3ba;\n}\n.custom-accordion[value=reservaManual] {\n  border-left-color: #bae1ff;\n}\n.custom-accordion[value=identidad] {\n  border-left-color: #e0baff;\n}\n.custom-accordion ion-item {\n  --background: #b7e0b4;\n  --color: #444;\n  font-weight: 600;\n}\n.text-muted {\n  line-height: 1.5;\n  font-size: 0.95rem;\n  background: #fdfdfd;\n}\nstrong {\n  color: #222;\n}\n/*# sourceMappingURL=faqs.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FaqsPage, { className: "FaqsPage", filePath: "src/app/pages/faqs/faqs.page.ts", lineNumber: 30 });
})();
export {
  FaqsPage
};
//# sourceMappingURL=faqs.page-75UI2GBW.js.map
