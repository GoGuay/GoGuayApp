import {
  NavbarComponent
} from "./chunk-6PYX74OP.js";
import "./chunk-C4WEIZGQ.js";
import "./chunk-L23MUE74.js";
import {
  IonContent
} from "./chunk-FFMYI37T.js";
import "./chunk-X7SDTFSG.js";
import "./chunk-NX7SG6WM.js";
import "./chunk-Q5CK7R7A.js";
import "./chunk-43M6K65B.js";
import {
  MatDivider
} from "./chunk-TFWCQLOE.js";
import "./chunk-REKVANIZ.js";
import "./chunk-6VCOWNW4.js";
import "./chunk-ZPEWRVEX.js";
import "./chunk-V5JFS32A.js";
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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
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

// src/app/pages/terminos/terminos.page.ts
var TerminosPage = class _TerminosPage {
  userLoggedIn = false;
  userData = {};
  fechaActual = "";
  email = "gestion.prideride@gmail.com";
  constructor() {
  }
  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem("userData") || "{}");
    this.userLoggedIn = !!(this.userData && this.userData.usuario.email);
    const hoy = /* @__PURE__ */ new Date();
    this.fechaActual = hoy.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
  }
  static \u0275fac = function TerminosPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TerminosPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TerminosPage, selectors: [["app-terminos"]], decls: 84, vars: 6, consts: [[3, "backRoute", "searchRoute", "isLoggedIn"], [3, "fullscreen"], [1, "container"], [1, "style_h2"], ["href", "mailto:gestion.prideride@gmail.com?subject=T\xE9rminos y condiciones de uso&body=Por favor, d\xE9jenos su duda aqu\xED."]], template: function TerminosPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar", 0);
      \u0275\u0275elementStart(1, "ion-content", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4, "T\xE9rminos y Condiciones Generales de Uso");
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "mat-divider");
      \u0275\u0275elementStart(6, "div", 2)(7, "h6");
      \u0275\u0275text(8, "T\xE9rminos de Uso de GoGuay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p");
      \u0275\u0275text(12, " Bienvenido/a a GoGuay. Al utilizar nuestra aplicaci\xF3n, aceptas cumplir con estos T\xE9rminos de Uso. Por favor, l\xE9elos detenidamente antes de usar nuestros servicios. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "h6");
      \u0275\u0275text(14, "1. Aceptaci\xF3n de los T\xE9rminos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p");
      \u0275\u0275text(16, "Al registrarte y utilizar GoGuay, aceptas estos T\xE9rminos de Uso, nuestra Pol\xEDtica de Privacidad y cualquier normativa aplicable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "h6");
      \u0275\u0275text(18, "2. Descripci\xF3n del Servicio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p");
      \u0275\u0275text(20, "GoGuay es una plataforma que conecta a personas del colectivo LGBTQ+ para compartir viajes. Los usuarios pueden publicar, buscar y unirse a viajes ofrecidos por otros miembros de la comunidad. GoGuay no ofrece servicios de transporte, y no somos responsables de las relaciones entre los usuarios.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "h6");
      \u0275\u0275text(22, "4. Comportamiento del Usuario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div")(24, "p");
      \u0275\u0275text(25, "Al utilizar GoGuay, te comprometes a:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "ul")(27, "li");
      \u0275\u0275text(28, "Tratar a todos los usuarios con respeto y dignidad.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "li");
      \u0275\u0275text(30, "No discriminar ni acosar a ning\xFAn usuario por su orientaci\xF3n sexual, identidad de g\xE9nero, raza, religi\xF3n u otros factores.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "li");
      \u0275\u0275text(32, "Cumplir con todas las leyes aplicables durante los viajes organizados a trav\xE9s de la plataforma.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "li");
      \u0275\u0275text(34, "No utilizar la aplicaci\xF3n para fines ilegales, fraudulentos o no autorizados.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "h6");
      \u0275\u0275text(36, "5. Publicaci\xF3n de Viajes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "ul")(38, "li");
      \u0275\u0275text(39, "Los usuarios que organizan viajes deben proporcionar detalles precisos sobre el trayecto, incluyendo la hora, lugar de salida, destino y cualquier coste asociado.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "li");
      \u0275\u0275text(41, "Es responsabilidad del organizador del viaje cumplir con las leyes locales de transporte, incluido el n\xFAmero m\xE1ximo de pasajeros permitidos.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "h6");
      \u0275\u0275text(43, "6. Relaciones entre Usuarios");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p");
      \u0275\u0275text(45, "GoGuay act\xFAa \xFAnicamente como intermediario. No supervisamos ni verificamos la identidad, antecedentes ni idoneidad de los usuarios. Eres responsable de tomar precauciones razonables al interactuar con otros miembros de la comunidad.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "h6");
      \u0275\u0275text(47, "7. Prohibiciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "p");
      \u0275\u0275text(49, "Est\xE1 prohibido:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "ul")(51, "li");
      \u0275\u0275text(52, "Publicar contenido falso, ofensivo, obsceno, ilegal o difamatorio.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "li");
      \u0275\u0275text(54, "Utilizar GoGuay para actividades comerciales no autorizadas.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "li");
      \u0275\u0275text(56, "Compartir informaci\xF3n personal de otros usuarios sin su consentimiento.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "h6");
      \u0275\u0275text(58, "8. Privacidad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "p");
      \u0275\u0275text(60, "Tu privacidad es importante para nosotros. Consulta nuestra Pol\xEDtica de Privacidad para conocer c\xF3mo recopilamos, usamos y protegemos tu informaci\xF3n personal.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "h6");
      \u0275\u0275text(62, "9. Limitaci\xF3n de Responsabilidad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "p");
      \u0275\u0275text(64, "GoGuay no es responsable de:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "ul")(66, "li");
      \u0275\u0275text(67, " Cualquier incidente, accidente, da\xF1o o p\xE9rdida ocurrida durante un viaje organizado a trav\xE9s de la plataforma. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "li");
      \u0275\u0275text(69, " La conducta de los usuarios antes, durante o despu\xE9s de un viaje. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "h6");
      \u0275\u0275text(71, "10. Suspensi\xF3n y Terminaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "p");
      \u0275\u0275text(73, " Nos reservamos el derecho de suspender o eliminar tu cuenta si violas estos T\xE9rminos de Uso o si tu comportamiento afecta negativamente a otros usuarios o a la plataforma. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "h6");
      \u0275\u0275text(75, "11. Modificaciones a los T\xE9rminos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "p");
      \u0275\u0275text(77, "Podemos actualizar estos T\xE9rminos de Uso en cualquier momento. Te notificaremos sobre cambios importantes y tu uso continuado de GoGuay despu\xE9s de dichos cambios constituye tu aceptaci\xF3n de los mismos.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "h6");
      \u0275\u0275text(79, "12. Contacto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "p");
      \u0275\u0275text(81, "Si tienes preguntas o inquietudes sobre estos T\xE9rminos de Uso, puedes contactarnos en: ");
      \u0275\u0275elementStart(82, "a", 4);
      \u0275\u0275text(83);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("backRoute", "/home")("searchRoute", "newTravel")("isLoggedIn", ctx.userLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("\xDAltima actualizaci\xF3n: ", ctx.fechaActual);
      \u0275\u0275advance(73);
      \u0275\u0275textInterpolate(ctx.email);
    }
  }, dependencies: [IonContent, FormsModule, NavbarComponent, MatDivider], styles: ["\n/*# sourceMappingURL=terminos.page.css.map */"], changeDetection: 1 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TerminosPage, [{
    type: Component,
    args: [{ selector: "app-terminos", standalone: true, changeDetection: ChangeDetectionStrategy.Eager, imports: [IonContent, FormsModule, NavbarComponent, MatDivider], template: `<app-navbar
  [backRoute]="'/home'"
  [searchRoute]="'newTravel'"
  [isLoggedIn]="userLoggedIn"
></app-navbar>
<ion-content [fullscreen]="true">
  <div class="container">

    <h2 class="style_h2">T\xE9rminos y Condiciones Generales de Uso</h2>

    <mat-divider></mat-divider>
    <div class="container">
      <h6>T\xE9rminos de Uso de GoGuay</h6>
      <p>\xDAltima actualizaci\xF3n: {{fechaActual}}</p>
      <p>
        Bienvenido/a a GoGuay. Al utilizar nuestra aplicaci\xF3n, aceptas cumplir con estos T\xE9rminos de Uso. Por favor,
        l\xE9elos detenidamente antes de usar nuestros servicios.
      </p>

      <h6>1. Aceptaci\xF3n de los T\xE9rminos</h6>
      <p>Al registrarte y utilizar GoGuay, aceptas estos T\xE9rminos de Uso, nuestra Pol\xEDtica de Privacidad y cualquier normativa aplicable.</p>

      <h6>2. Descripci\xF3n del Servicio</h6>
      <p>GoGuay es una plataforma que conecta a personas del colectivo LGBTQ+ para compartir viajes. Los usuarios
        pueden publicar, buscar y unirse a viajes ofrecidos por otros miembros de la comunidad. GoGuay no ofrece
        servicios de transporte, y no somos responsables de las relaciones entre los usuarios.</p>

      <h6>4. Comportamiento del Usuario</h6>
      <div>
        <p>Al utilizar GoGuay, te comprometes a:</p>
        <ul>
          <li>Tratar a todos los usuarios con respeto y dignidad.</li>
          <li>No discriminar ni acosar a ning\xFAn usuario por su orientaci\xF3n sexual, identidad de g\xE9nero, raza, religi\xF3n u
            otros factores.</li>
          <li>Cumplir con todas las leyes aplicables durante los viajes organizados a trav\xE9s de la plataforma.</li>
          <li>No utilizar la aplicaci\xF3n para fines ilegales, fraudulentos o no autorizados.</li>
        </ul>
      </div>

      <h6>5. Publicaci\xF3n de Viajes</h6>
      <ul>
        <li>Los usuarios que organizan viajes deben proporcionar detalles precisos sobre el trayecto, incluyendo la
          hora,
          lugar de salida, destino y cualquier coste asociado.</li>
        <li>Es responsabilidad del organizador del viaje cumplir con las leyes locales de transporte, incluido el n\xFAmero
          m\xE1ximo de pasajeros permitidos.</li>
      </ul>

      <h6>6. Relaciones entre Usuarios</h6>
      <p>GoGuay act\xFAa \xFAnicamente como intermediario. No supervisamos ni verificamos la identidad, antecedentes ni
        idoneidad de los usuarios. Eres responsable de tomar precauciones razonables al interactuar con otros miembros
        de
        la comunidad.</p>

      <h6>7. Prohibiciones</h6>
      <p>Est\xE1 prohibido:</p>
      <ul>
        <li>Publicar contenido falso, ofensivo, obsceno, ilegal o difamatorio.</li>
        <li>Utilizar GoGuay para actividades comerciales no autorizadas.</li>
        <li>Compartir informaci\xF3n personal de otros usuarios sin su consentimiento.</li>
      </ul>

      <h6>8. Privacidad</h6>
      <p>Tu privacidad es importante para nosotros. Consulta nuestra Pol\xEDtica de Privacidad para conocer c\xF3mo
        recopilamos,
        usamos y protegemos tu informaci\xF3n personal.</p>

      <h6>9. Limitaci\xF3n de Responsabilidad</h6>
      <p>GoGuay no es responsable de:</p>
      <ul>
        <li>
          Cualquier incidente, accidente, da\xF1o o p\xE9rdida ocurrida durante un viaje organizado a trav\xE9s de la plataforma.
        </li>
        <li>
          La conducta de los usuarios antes, durante o despu\xE9s de un viaje.
        </li>
      </ul>

      <h6>10. Suspensi\xF3n y Terminaci\xF3n</h6>
      <p>
        Nos reservamos el derecho de suspender o eliminar tu cuenta si violas estos T\xE9rminos de Uso o si tu
        comportamiento
        afecta negativamente a otros usuarios o a la plataforma.
      </p>

      <h6>11. Modificaciones a los T\xE9rminos</h6>
      <p>Podemos actualizar estos T\xE9rminos de Uso en cualquier momento. Te notificaremos sobre cambios importantes y tu
        uso continuado de GoGuay despu\xE9s de dichos cambios constituye tu aceptaci\xF3n de los mismos.</p>

      <h6>12. Contacto</h6>
      <p>Si tienes preguntas o inquietudes sobre estos T\xE9rminos de Uso, puedes contactarnos en:
        <a href="mailto:gestion.prideride@gmail.com?subject=T\xE9rminos y condiciones de uso&body=Por favor, d\xE9jenos su duda aqu\xED.">{{ email }}</a>
      </p>

    </div>

  </div>
</ion-content>`, styles: ["/* src/app/pages/terminos/terminos.page.scss */\n/*# sourceMappingURL=terminos.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TerminosPage, { className: "TerminosPage", filePath: "src/app/pages/terminos/terminos.page.ts", lineNumber: 17 });
})();
export {
  TerminosPage
};
//# debugId=c52e7473-d166-5eca-aa17-2d96122c937e
//# sourceMappingURL=terminos.page-LVB4OXAN.js.map
