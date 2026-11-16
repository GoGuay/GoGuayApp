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
import {
  MatButtonModule,
  MatDivider
} from "./chunk-TFWCQLOE.js";
import "./chunk-REKVANIZ.js";
import "./chunk-6VCOWNW4.js";
import {
  MatIconModule
} from "./chunk-ZPEWRVEX.js";
import {
  IonAccordion,
  IonAccordionGroup,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonicModule
} from "./chunk-V5JFS32A.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-ULJI5CAD.js";
import {
  FormsModule,
  RouterModule
} from "./chunk-XCBA4FSK.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
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

// src/app/pages/centro-ayuda/centro-ayuda.page.ts
var CentroAyudaPage = class _CentroAyudaPage {
  userLoggedIn = false;
  userData = {};
  constructor() {
  }
  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem("userData") || "{}");
    if (this.userData && Object.keys(this.userData).length > 0 && this.userData.usuario.email) {
      this.userLoggedIn = true;
    } else {
      this.userLoggedIn = false;
    }
  }
  static \u0275fac = function CentroAyudaPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CentroAyudaPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CentroAyudaPage, selectors: [["app-centro-ayuda"]], decls: 88, vars: 10, consts: [[3, "backRoute", "searchRoute", "isLoggedIn"], [3, "fullscreen"], [1, "container", "mt-4"], [1, "text-center", "mb-4"], [1, "fw-bold"], [1, "text-muted"], [1, "container", "mt-4", "mb-4"], [1, "section-title"], ["name", "heart-outline", 1, "me-2"], [1, "mb-3"], ["value", "intro"], ["slot", "header", 1, "white-header"], ["slot", "content", 1, "p-3"], [1, "section-title", "mt-4"], ["name", "person-add-outline", 1, "me-2"], ["value", "registro", 1, "mb-2"], ["value", "editarPerfil", 1, "mb-2"], ["value", "seguridadDatos", 1, "mb-2"], ["name", "car-outline", 1, "me-2"], ["value", "publicarViaje", 1, "mb-2"], ["value", "cancelarViaje", 1, "mb-2"], [1, "section-title", "mt-4", "text-danger"], ["name", "shield-checkmark-outline", 1, "me-2"], ["value", "reportarProblema", 1, "mb-2"], ["value", "espacioSeguro", 1, "mb-2"]], template: function CentroAyudaPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar", 0);
      \u0275\u0275elementStart(1, "ion-content", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(10, "mat-divider");
      \u0275\u0275elementStart(11, "div", 6)(12, "h3", 7);
      \u0275\u0275element(13, "ion-icon", 8);
      \u0275\u0275text(14, "Sobre GoGuay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "ion-accordion-group", 9)(16, "ion-accordion", 10)(17, "ion-item", 11)(18, "ion-label");
      \u0275\u0275text(19, " \xBFQu\xE9 nos diferencia de otras apps? ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 12);
      \u0275\u0275text(21, " GoGuay no es solo una app de viajes compartidos; es una red de confianza. Conectamos a personas del colectivo ");
      \u0275\u0275elementStart(22, "strong");
      \u0275\u0275text(23, "LGBTIQ+ y aliados");
      \u0275\u0275elementEnd();
      \u0275\u0275text(24, " para garantizar trayectos libres de discriminaci\xF3n, donde puedas ser t\xFA mismo/a/e en todo momento. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(25, "mat-divider");
      \u0275\u0275elementStart(26, "h3", 13);
      \u0275\u0275element(27, "ion-icon", 14);
      \u0275\u0275text(28, "Tu Cuenta e Identidad ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "ion-accordion-group", 9)(30, "ion-accordion", 15)(31, "ion-item", 11)(32, "ion-label");
      \u0275\u0275text(33, " \xBFC\xF3mo creo mi cuenta? ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 12);
      \u0275\u0275text(35, ' Pulsa en "Crear cuenta", completa tus datos y verifica tu correo. Recuerda que puedes usar tu ');
      \u0275\u0275elementStart(36, "strong");
      \u0275\u0275text(37, "nombre sentido");
      \u0275\u0275elementEnd();
      \u0275\u0275text(38, "; queremos que te sientas c\xF3modo/a/e desde el primer paso. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "ion-accordion", 16)(40, "ion-item", 11)(41, "ion-label");
      \u0275\u0275text(42, " \xBFC\xF3mo actualizo mis pronombres o perfil? ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 12);
      \u0275\u0275text(44, ' En la secci\xF3n de "Perfil", puedes editar tu informaci\xF3n, foto y preferencias. Mantener tu perfil actualizado ayuda a generar m\xE1s confianza con otros usuarios. ');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "ion-accordion", 17)(46, "ion-item", 11)(47, "ion-label");
      \u0275\u0275text(48, " \xBFEst\xE1n seguros mis datos personales? ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 12);
      \u0275\u0275text(50, " Totalmente. Utilizamos cifrado de grado bancario. Tu n\xFAmero de tel\xE9fono y detalles espec\xEDficos solo se muestran a las personas con las que hayas confirmado un viaje. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(51, "mat-divider");
      \u0275\u0275elementStart(52, "h3", 13);
      \u0275\u0275element(53, "ion-icon", 18);
      \u0275\u0275text(54, "Conducir en GoGuay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "ion-accordion-group", 9)(56, "ion-accordion", 19)(57, "ion-item", 11)(58, "ion-label");
      \u0275\u0275text(59, " \xBFC\xF3mo publico un viaje como conductor/a? ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 12);
      \u0275\u0275text(61, ' Ve a "Publicar", elige tu ruta, fecha, hora y el aporte por plaza. Puedes a\xF1adir notas adicionales, como si aceptas mascotas o el tama\xF1o del equipaje. ');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "ion-accordion", 20)(63, "ion-item", 11)(64, "ion-label");
      \u0275\u0275text(65, " \xBFQu\xE9 hago si no puedo realizar el viaje? ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 12);
      \u0275\u0275text(67, ' Entendemos que surgen imprevistos. Ve a "Mis viajes" y selecciona "Cancelar". Te pedimos que lo hagas con la mayor antelaci\xF3n posible para que tus pasajeros puedan buscar una alternativa. ');
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(68, "mat-divider");
      \u0275\u0275elementStart(69, "h3", 21);
      \u0275\u0275element(70, "ion-icon", 22);
      \u0275\u0275text(71, "Seguridad y Comunidad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "ion-accordion-group", 9)(73, "ion-accordion", 23)(74, "ion-item", 11)(75, "ion-label");
      \u0275\u0275text(76, " \xBFC\xF3mo reporto una mala experiencia? ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 12);
      \u0275\u0275text(78, ' La seguridad es nuestra prioridad. Si sufres cualquier tipo de falta de respeto o discriminaci\xF3n, usa el bot\xF3n "Reportar" en el perfil del usuario o en el detalle del viaje. Nuestro equipo revisar\xE1 el caso de inmediato. ');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "ion-accordion", 24)(80, "ion-item", 11)(81, "ion-label");
      \u0275\u0275text(82, " \xBFQu\xE9 pasa si un usuario no es respetuoso? ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div", 12);
      \u0275\u0275text(84, " GoGuay aplica una pol\xEDtica de ");
      \u0275\u0275elementStart(85, "strong");
      \u0275\u0275text(86, "Tolerancia Cero");
      \u0275\u0275elementEnd();
      \u0275\u0275text(87, " ante el odio, la LGTBIfobia o el acoso. Los usuarios que no cumplan con nuestras normas comunitarias ser\xE1n expulsados permanentemente de la plataforma. ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("backRoute", "/home")("searchRoute", "newTravel")("isLoggedIn", ctx.userLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "CENTRODEAYUDA.TITULO"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, "CENTRODEAYUDA.SUBTITULO"));
    }
  }, dependencies: [FormsModule, MatIconModule, IonicModule, IonAccordion, IonAccordionGroup, IonContent, IonIcon, IonItem, IonLabel, MatButtonModule, RouterModule, MatDivider, NavbarComponent, TranslateModule, TranslatePipe], styles: ["\nion-button[_ngcontent-%COMP%] {\n  color: #000000 !important;\n}\nion-accordion[_ngcontent-%COMP%] {\n  border-radius: 35px;\n  border: 1px solid black;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  color: black;\n}\n/*# sourceMappingURL=centro-ayuda.page.css.map */"], changeDetection: 1 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CentroAyudaPage, [{
    type: Component,
    args: [{ selector: "app-centro-ayuda", standalone: true, changeDetection: ChangeDetectionStrategy.Eager, imports: [FormsModule, MatIconModule, IonicModule, MatButtonModule, RouterModule, MatDivider, NavbarComponent, TranslateModule], template: `<app-navbar [backRoute]="'/home'" [searchRoute]="'newTravel'" [isLoggedIn]="userLoggedIn"></app-navbar>

<ion-content [fullscreen]="true">
  <div class="container mt-4">
    <div class="text-center mb-4">
      <h1 class="fw-bold">{{ 'CENTRODEAYUDA.TITULO' | translate }}</h1>
      <p class="text-muted">{{ 'CENTRODEAYUDA.SUBTITULO' | translate }}</p>
    </div>
    <mat-divider></mat-divider>

    <div class="container mt-4 mb-4">
      <h3 class="section-title"><ion-icon name="heart-outline" class="me-2"></ion-icon>Sobre GoGuay</h3>
      <ion-accordion-group class="mb-3">
        <ion-accordion value="intro">
          <ion-item slot="header" class="white-header">
            <ion-label> \xBFQu\xE9 nos diferencia de otras apps? </ion-label>
          </ion-item>
          <div slot="content" class="p-3">
            GoGuay no es solo una app de viajes compartidos; es una red de confianza. Conectamos a personas del
            colectivo <strong>LGBTIQ+ y aliados</strong> para garantizar trayectos libres de discriminaci\xF3n, donde
            puedas ser t\xFA mismo/a/e en todo momento.
          </div>
        </ion-accordion>
      </ion-accordion-group>
      <mat-divider></mat-divider>

      <h3 class="section-title mt-4"><ion-icon name="person-add-outline" class="me-2"></ion-icon>Tu Cuenta e Identidad
      </h3>
      <ion-accordion-group class="mb-3">
        <ion-accordion value="registro" class="mb-2">
          <ion-item slot="header" class="white-header">
            <ion-label> \xBFC\xF3mo creo mi cuenta? </ion-label>
          </ion-item>
          <div slot="content" class="p-3">
            Pulsa en "Crear cuenta", completa tus datos y verifica tu correo. Recuerda que puedes usar tu <strong>nombre
              sentido</strong>; queremos que te sientas c\xF3modo/a/e desde el primer paso.
          </div>
        </ion-accordion>
        <ion-accordion value="editarPerfil" class="mb-2">
          <ion-item slot="header" class="white-header">
            <ion-label> \xBFC\xF3mo actualizo mis pronombres o perfil? </ion-label>
          </ion-item>
          <div slot="content" class="p-3">
            En la secci\xF3n de "Perfil", puedes editar tu informaci\xF3n, foto y preferencias. Mantener tu perfil actualizado
            ayuda a generar m\xE1s confianza con otros usuarios.
          </div>
        </ion-accordion>
        <ion-accordion value="seguridadDatos" class="mb-2">
          <ion-item slot="header" class="white-header">
            <ion-label> \xBFEst\xE1n seguros mis datos personales? </ion-label>
          </ion-item>
          <div slot="content" class="p-3">
            Totalmente. Utilizamos cifrado de grado bancario. Tu n\xFAmero de tel\xE9fono y detalles espec\xEDficos solo se
            muestran a las personas con las que hayas confirmado un viaje.
          </div>
        </ion-accordion>
      </ion-accordion-group>
      <mat-divider></mat-divider>

      <h3 class="section-title mt-4"><ion-icon name="car-outline" class="me-2"></ion-icon>Conducir en GoGuay</h3>
      <ion-accordion-group class="mb-3">
        <ion-accordion value="publicarViaje" class="mb-2">
          <ion-item slot="header" class="white-header">
            <ion-label> \xBFC\xF3mo publico un viaje como conductor/a? </ion-label>
          </ion-item>
          <div slot="content" class="p-3">
            Ve a "Publicar", elige tu ruta, fecha, hora y el aporte por plaza. Puedes a\xF1adir notas adicionales, como si
            aceptas mascotas o el tama\xF1o del equipaje.
          </div>
        </ion-accordion>
        <ion-accordion value="cancelarViaje" class="mb-2">
          <ion-item slot="header" class="white-header">
            <ion-label> \xBFQu\xE9 hago si no puedo realizar el viaje? </ion-label>
          </ion-item>
          <div slot="content" class="p-3">
            Entendemos que surgen imprevistos. Ve a "Mis viajes" y selecciona "Cancelar". Te pedimos que lo hagas con la
            mayor antelaci\xF3n posible para que tus pasajeros puedan buscar una alternativa.
          </div>
        </ion-accordion>
      </ion-accordion-group>
      <mat-divider></mat-divider>

      <h3 class="section-title mt-4 text-danger"><ion-icon name="shield-checkmark-outline"
          class="me-2"></ion-icon>Seguridad y Comunidad</h3>
      <ion-accordion-group class="mb-3">
        <ion-accordion value="reportarProblema" class="mb-2">
          <ion-item slot="header" class="white-header">
            <ion-label> \xBFC\xF3mo reporto una mala experiencia? </ion-label>
          </ion-item>
          <div slot="content" class="p-3">
            La seguridad es nuestra prioridad. Si sufres cualquier tipo de falta de respeto o discriminaci\xF3n, usa el
            bot\xF3n "Reportar" en el perfil del usuario o en el detalle del viaje. Nuestro equipo revisar\xE1 el caso de
            inmediato.
          </div>
        </ion-accordion>
        <ion-accordion value="espacioSeguro" class="mb-2">
          <ion-item slot="header" class="white-header">
            <ion-label> \xBFQu\xE9 pasa si un usuario no es respetuoso? </ion-label>
          </ion-item>
          <div slot="content" class="p-3">
            GoGuay aplica una pol\xEDtica de <strong>Tolerancia Cero</strong> ante el odio, la LGTBIfobia o el acoso.
            Los usuarios que no cumplan con nuestras normas comunitarias ser\xE1n expulsados permanentemente de la
            plataforma.
          </div>
        </ion-accordion>
      </ion-accordion-group>
    </div>
  </div>
</ion-content>`, styles: ["/* src/app/pages/centro-ayuda/centro-ayuda.page.scss */\nion-button {\n  color: #000000 !important;\n}\nion-accordion {\n  border-radius: 35px;\n  border: 1px solid black;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  color: black;\n}\n/*# sourceMappingURL=centro-ayuda.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CentroAyudaPage, { className: "CentroAyudaPage", filePath: "src/app/pages/centro-ayuda/centro-ayuda.page.ts", lineNumber: 21 });
})();
export {
  CentroAyudaPage
};
//# debugId=936aaac2-9dc7-5b02-8f33-0db0190aec3a
//# sourceMappingURL=centro-ayuda.page-HJP7GROA.js.map
