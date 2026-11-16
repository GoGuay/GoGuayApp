import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle
} from "./chunk-TB3YLHUS.js";
import {
  JumbotronComponent
} from "./chunk-DJBA4LGX.js";
import {
  NavbarComponent
} from "./chunk-6PYX74OP.js";
import "./chunk-C4WEIZGQ.js";
import {
  FuncionesComunes
} from "./chunk-Z2B2BIHD.js";
import "./chunk-L23MUE74.js";
import "./chunk-FFMYI37T.js";
import "./chunk-X7SDTFSG.js";
import "./chunk-OLH4VKOB.js";
import "./chunk-NX7SG6WM.js";
import "./chunk-Q5CK7R7A.js";
import "./chunk-43M6K65B.js";
import {
  MatButton,
  MatButtonModule,
  MatDivider,
  MatDividerModule,
  MatIconButton
} from "./chunk-TFWCQLOE.js";
import "./chunk-REKVANIZ.js";
import "./chunk-6VCOWNW4.js";
import "./chunk-ZPEWRVEX.js";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵpipe,
  ɵɵpipeBind1,
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

// src/app/pages/sobre-nosotros/sobre-nosotros.page.ts
function SobreNosotrosPage_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-jumbotron", 46);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 3, "CADA VIAJE ES UNA NUEVA HISTORIA"))("imageSrc", "../../assets/folder/jumbo2.jpg")("helpText", "Descubre qui\xE9nes estamos detr\xE1s de GoGuay.");
  }
}
var SobreNosotrosPage = class _SobreNosotrosPage {
  funcionesComunes;
  userLoggedIn = false;
  userData = {};
  mostrarJumbotron = true;
  constructor(funcionesComunes) {
    this.funcionesComunes = funcionesComunes;
  }
  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem("userData") || "{}");
    this.userLoggedIn = this.funcionesComunes.isUserLoggedIn();
    this.loadJumbotronSetting();
  }
  /**
   * Función para abrir los perfiles de Linkedin de cada uno.
   *
   * @param perfil Recibe el nombre del perfil que se va a abrir.
   */
  openLinkedin(perfil) {
    if (perfil === "Dani") {
      window.open("https://www.linkedin.com/in/daniel-garc%C3%ADa-d%C3%ADaz-0a970862/", "_blank");
    } else if (perfil === "Tomas") {
      window.open("https://www.linkedin.com/in/jtomas88/", "_blank");
    }
  }
  /**
   * Función para abrir los perfiles de GitHub de cada uno.
   *
   * @param perfil Recibe el nombre del perfil que se va a abrir.
   */
  openGitHub(perfil) {
    if (perfil === "Dani") {
      window.open("https://github.com/Daniel160490", "_blank");
    } else if (perfil === "Tomas") {
      window.open("https://github.com/JTomas88", "_blank");
    }
  }
  loadJumbotronSetting() {
    const jumbotronSetting = localStorage.getItem("mostrarJumbotron");
    this.mostrarJumbotron = jumbotronSetting === null ? true : jumbotronSetting === "true";
  }
  static \u0275fac = function SobreNosotrosPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SobreNosotrosPage)(\u0275\u0275directiveInject(FuncionesComunes));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SobreNosotrosPage, selectors: [["app-sobre-nosotros"]], decls: 98, vars: 7, consts: [[3, "backRoute", "searchRoute", "isLoggedIn"], [3, "fullscreen"], [1, "container", "py-4"], [1, "box_text", "main-content", "p-4"], [1, "titulo-principal"], [1, "mb-4"], ["id", "general"], [1, "borderDraw", "text-center", "mb-4"], [1, "descripcion-texto"], ["id", "comienzo", 1, "mt-5", "mb-4", "text-center"], [1, "seccion-subtitulo"], [1, "justify-content-center"], ["size", "12", "size-md", "5", 1, "d-flex", "justify-content-center"], [1, "creador-card", "shadow-sm"], ["mat-card-avatar", "", 1, "header-image-tom"], [1, "image-wrapper", "mt-2"], ["alt", "Tom\xE1s", 3, "src"], [1, "mt-3"], [1, "d-flex", "justify-content-around", "pb-3"], ["mat-icon-button", "", "title", "LinkedIn", 1, "btn-social-media", "linkedin", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "height", "20", "width", "20", "viewBox", "0 0 448 512", "fill", "currentColor"], ["d", "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"], ["mat-icon-button", "", "title", "GitHub", 1, "btn-social-media", "github", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "height", "20", "width", "20", "viewBox", "0 0 496 512", "fill", "currentColor"], ["d", "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"], ["mat-card-avatar", "", 1, "header-image-dani"], ["alt", "Dani", 3, "src"], ["id", "sugerencias", 1, "box_sugerencias", "my-5", "text-center", "p-4"], ["mat-raised-button", "", 1, "btn_bg_main"], [1, "fi", "fi-rr-envelope", "me-2"], [1, "links-footer", "p-4", "borderDraw"], ["size", "12", "size-md", "6"], [1, "fw-bold", "mb-3"], [1, "list-unstyled"], [1, "mb-2"], ["href", "/cookies", 1, "link-item"], [1, "fi", "fi-rr-cookie", "me-2"], ["href", "/terminos", 1, "link-item"], [1, "fi", "fi-rr-file", "me-2"], ["href", "/faqs", 1, "link-item"], [1, "fi", "fi-rr-question", "me-2"], ["size", "12", "size-md", "6", 1, "text-md-end", "mt-4", "mt-md-0"], ["href", "/centro-contacto", 1, "link-item"], [1, "fi", "fi-rr-form", "ms-2"], ["href", "mailto:gestion.goguay@gmail.com", 1, "link-item"], [1, "fi", "fi-rr-envelope", "ms-2"], [3, "title", "imageSrc", "helpText"]], template: function SobreNosotrosPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar", 0);
      \u0275\u0275elementStart(1, "ion-content", 1);
      \u0275\u0275conditionalCreate(2, SobreNosotrosPage_Conditional_2_Template, 3, 5, "div");
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "h1", 4);
      \u0275\u0275text(6, "SOBRE NOSOTROS");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "mat-divider", 5);
      \u0275\u0275elementStart(8, "div", 6)(9, "p", 7);
      \u0275\u0275text(10, '"Viajar con orgullo, viajar GoGuay"');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 8)(12, "strong");
      \u0275\u0275text(13, "En GoGuay");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " nos apasiona crear entornos inclusivos, sostenibles y, sobre todo, libres de prejuicios. Nuestra misi\xF3n es proporcionar opciones de movilidad que fomenten la igualdad y celebren la diversidad. Aqu\xED, cada persona se siente c\xF3moda y bienvenida, sin importar su identidad, g\xE9nero u orientaci\xF3n sexual. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 9)(16, "h6", 10);
      \u0275\u0275text(17, "LAS PERSONAS DETR\xC1S DE GOGUAY");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "ion-grid")(19, "ion-row", 11)(20, "ion-col", 12)(21, "mat-card", 13)(22, "mat-card-header");
      \u0275\u0275element(23, "div", 14);
      \u0275\u0275elementStart(24, "mat-card-title");
      \u0275\u0275text(25, "Tom\xE1s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "mat-card-subtitle");
      \u0275\u0275text(27, "Desarrollador FullStack");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 15);
      \u0275\u0275element(29, "img", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "mat-card-content", 17)(31, "p");
      \u0275\u0275text(32, "Apasionado de la tecnolog\xEDa y autodidacta. Siempre buscando aprender algo nuevo para mejorar GoGuay.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "mat-card-actions", 18)(34, "button", 19);
      \u0275\u0275listener("click", function SobreNosotrosPage_Template_button_click_34_listener() {
        return ctx.openLinkedin("Tomas");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(35, "svg", 20);
      \u0275\u0275element(36, "path", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(37, "button", 22);
      \u0275\u0275listener("click", function SobreNosotrosPage_Template_button_click_37_listener() {
        return ctx.openGitHub("Tomas");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(38, "svg", 23);
      \u0275\u0275element(39, "path", 24);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(40, "ion-col", 12)(41, "mat-card", 13)(42, "mat-card-header");
      \u0275\u0275element(43, "div", 25);
      \u0275\u0275elementStart(44, "mat-card-title");
      \u0275\u0275text(45, "Dani");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "mat-card-subtitle");
      \u0275\u0275text(47, "Desarrollador FullStack");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 15);
      \u0275\u0275element(49, "img", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "mat-card-content", 17)(51, "p");
      \u0275\u0275text(52, "Curioso por naturaleza y experto en nuevas tecnolog\xEDas. Enfocado en la mejor experiencia de usuario.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "mat-card-actions", 18)(54, "button", 19);
      \u0275\u0275listener("click", function SobreNosotrosPage_Template_button_click_54_listener() {
        return ctx.openLinkedin("Dani");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(55, "svg", 20);
      \u0275\u0275element(56, "path", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(57, "button", 22);
      \u0275\u0275listener("click", function SobreNosotrosPage_Template_button_click_57_listener() {
        return ctx.openGitHub("Dani");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(58, "svg", 23);
      \u0275\u0275element(59, "path", 24);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(60, "div", 27)(61, "h6");
      \u0275\u0275text(62, "\xBFTienes algo que contarnos?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "p");
      \u0275\u0275text(64, "Estamos construyendo GoGuay juntxs. H\xE1znoslo saber. \u{1F600}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "button", 28);
      \u0275\u0275element(66, "i", 29);
      \u0275\u0275text(67, " Env\xEDanos tu sugerencia ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div", 30)(69, "ion-row")(70, "ion-col", 31)(71, "h6", 32);
      \u0275\u0275text(72, "ENLACES DE INTER\xC9S");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "ul", 33)(74, "li", 34)(75, "a", 35);
      \u0275\u0275element(76, "i", 36);
      \u0275\u0275text(77, " Pol\xEDtica de cookies ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "li", 34)(79, "a", 37);
      \u0275\u0275element(80, "i", 38);
      \u0275\u0275text(81, " T\xE9rminos y condiciones ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "li", 34)(83, "a", 39);
      \u0275\u0275element(84, "i", 40);
      \u0275\u0275text(85, " Preguntas frecuentes ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(86, "ion-col", 41)(87, "h6", 32);
      \u0275\u0275text(88, "CONTACTO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "ul", 33)(90, "li", 34)(91, "a", 42);
      \u0275\u0275text(92, " Formulario de contacto ");
      \u0275\u0275element(93, "i", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "li", 34)(95, "a", 44);
      \u0275\u0275text(96, " gestion.goguay@gmail.com ");
      \u0275\u0275element(97, "i", 45);
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("backRoute", "/home")("searchRoute", "search")("isLoggedIn", ctx.userLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mostrarJumbotron ? 2 : -1);
      \u0275\u0275advance(27);
      \u0275\u0275property("src", "../../../assets/autores/137113975.png");
      \u0275\u0275advance(20);
      \u0275\u0275property("src", "../../../assets/autores/24509644.jpeg");
    }
  }, dependencies: [
    IonicModule,
    IonCol,
    IonContent,
    IonGrid,
    IonRow,
    FormsModule,
    RouterModule,
    MatDividerModule,
    MatDivider,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatCardModule,
    MatCard,
    MatCardActions,
    MatCardAvatar,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    JumbotronComponent,
    NavbarComponent,
    TranslateModule,
    TranslatePipe
  ], styles: ['@charset "UTF-8";\n\n\n.borderDraw[_ngcontent-%COMP%] {\n  border-left: 3px solid #e0a667;\n  padding: 1%;\n}\n.box_sugerencias[_ngcontent-%COMP%] {\n  border-radius: 35px;\n  border: #e0a667 solid 1px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  background-color: rgba(224, 166, 103, 0.28);\n  padding: 1%;\n}\n.box_text[_ngcontent-%COMP%] {\n  border-radius: 35px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  margin-bottom: 3%;\n  margin-top: 2%;\n}\n.header-image-tom[_ngcontent-%COMP%] {\n  background-image: url("./media/137113975.png");\n  background-size: cover;\n}\n.header-image-dani[_ngcontent-%COMP%] {\n  background-image: url("./media/24509644.jpeg");\n  background-size: cover;\n}\n.creador-card[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  border: none;\n  position: relative;\n  overflow: hidden;\n  max-width: 300px;\n  background: #fff;\n  padding: 10px;\n  background: rgba(255, 255, 255, 0.45);\n  -webkit-backdrop-filter: blur(25px) saturate(180%);\n  backdrop-filter: blur(25px) saturate(180%);\n  box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.3);\n}\n.creador-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 6px;\n  background:\n    linear-gradient(\n      to bottom,\n      #ffb3ba,\n      #ffdfba,\n      #ffffba,\n      #baffc9,\n      #bae1ff,\n      #e0baff);\n  border-radius: 20px 0 0 20px;\n}\n.image-wrapper[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  overflow: hidden;\n  height: 200px;\n}\n.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.btn_bg_main[_ngcontent-%COMP%] {\n  background: #b3b5e6;\n  font-weight: bold;\n  border-radius: 35px;\n  padding: 10px 20px;\n}\n.link-item[_ngcontent-%COMP%] {\n  color: #666;\n  text-decoration: none;\n  font-size: 0.9rem;\n}\n.link-item[_ngcontent-%COMP%]:hover {\n  color: #b3b5e6;\n  text-decoration: underline;\n}\n.seccion-subtitulo[_ngcontent-%COMP%] {\n  font-weight: 800;\n  letter-spacing: 1px;\n  color: #444;\n}\n.btn-social-media[_ngcontent-%COMP%] {\n  background-color: #f5f5f5 !important;\n  transition: all 0.3s ease;\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50% !important;\n  width: 40px;\n  height: 40px;\n}\n.btn-social-media[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n}\n.btn-social-media.linkedin[_ngcontent-%COMP%] {\n  color: #0077b5 !important;\n}\n.btn-social-media.linkedin[_ngcontent-%COMP%]:hover {\n  background-color: #e3f2fd !important;\n  transform: translateY(-2px);\n}\n.btn-social-media.github[_ngcontent-%COMP%] {\n  color: #333 !important;\n}\n.btn-social-media.github[_ngcontent-%COMP%]:hover {\n  background-color: #eeeeee !important;\n  transform: translateY(-2px);\n}\n@media (max-width: 576px) {\n  .box_img[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: end;\n    position: relative;\n    position: relative;\n    z-index: 1;\n    bottom: 79px;\n    left: 51px;\n  }\n  .img_arco[_ngcontent-%COMP%] {\n    width: 30%;\n    transform: rotate(-52deg);\n    position: absolute;\n    z-index: 100;\n  }\n}\n/*# sourceMappingURL=sobre-nosotros.page.css.map */'], changeDetection: 1 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SobreNosotrosPage, [{
    type: Component,
    args: [{ selector: "app-sobre-nosotros", standalone: true, changeDetection: ChangeDetectionStrategy.Eager, imports: [
      IonicModule,
      FormsModule,
      RouterModule,
      MatDividerModule,
      MatButtonModule,
      MatCardModule,
      JumbotronComponent,
      NavbarComponent,
      TranslateModule
    ], template: `<app-navbar
  [backRoute]="'/home'"
  [searchRoute]="'search'"
  [isLoggedIn]="userLoggedIn"
></app-navbar>

<ion-content [fullscreen]="true">
  @if (mostrarJumbotron) {
  <div>
    <app-jumbotron
      [title]="'CADA VIAJE ES UNA NUEVA HISTORIA' | translate"
      [imageSrc]="'../../assets/folder/jumbo2.jpg'"
      [helpText]="'Descubre qui\xE9nes estamos detr\xE1s de GoGuay.'"
    ></app-jumbotron>
  </div>
  }

  <div class="container py-4">
    <div class="box_text main-content p-4">
      <h1 class="titulo-principal">SOBRE NOSOTROS</h1>
      <mat-divider class="mb-4"></mat-divider>

      <div id="general">
        <p class="borderDraw text-center mb-4">"Viajar con orgullo, viajar GoGuay"</p>
        <p class="descripcion-texto">
          <strong>En GoGuay</strong>
          nos apasiona crear entornos inclusivos, sostenibles y, sobre todo, libres de prejuicios. Nuestra misi\xF3n es proporcionar opciones
          de movilidad que fomenten la igualdad y celebren la diversidad. Aqu\xED, cada persona se siente c\xF3moda y bienvenida, sin importar su
          identidad, g\xE9nero u orientaci\xF3n sexual.
        </p>
      </div>

      <div
        id="comienzo"
        class="mt-5 mb-4 text-center"
      >
        <h6 class="seccion-subtitulo">LAS PERSONAS DETR\xC1S DE GOGUAY</h6>
      </div>

      <ion-grid>
        <ion-row class="justify-content-center">
          <ion-col
            size="12"
            size-md="5"
            class="d-flex justify-content-center"
          >
            <mat-card class="creador-card shadow-sm">
              <mat-card-header>
                <div
                  mat-card-avatar
                  class="header-image-tom"
                ></div>
                <mat-card-title>Tom\xE1s</mat-card-title>
                <mat-card-subtitle>Desarrollador FullStack</mat-card-subtitle>
              </mat-card-header>
              <div class="image-wrapper mt-2">
                <img
                  [src]="'../../../assets/autores/137113975.png'"
                  alt="Tom\xE1s"
                />
              </div>
              <mat-card-content class="mt-3">
                <p>Apasionado de la tecnolog\xEDa y autodidacta. Siempre buscando aprender algo nuevo para mejorar GoGuay.</p>
              </mat-card-content>
              <mat-card-actions class="d-flex justify-content-around pb-3">
                <button
                  mat-icon-button
                  (click)="openLinkedin('Tomas')"
                  class="btn-social-media linkedin"
                  title="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                  >
                    <path
                      d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                    />
                  </svg>
                </button>

                <button
                  mat-icon-button
                  (click)="openGitHub('Tomas')"
                  class="btn-social-media github"
                  title="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 496 512"
                    fill="currentColor"
                  >
                    <path
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"
                    />
                  </svg>
                </button>
              </mat-card-actions>
            </mat-card>
          </ion-col>

          <ion-col
            size="12"
            size-md="5"
            class="d-flex justify-content-center"
          >
            <mat-card class="creador-card shadow-sm">
              <mat-card-header>
                <div
                  mat-card-avatar
                  class="header-image-dani"
                ></div>
                <mat-card-title>Dani</mat-card-title>
                <mat-card-subtitle>Desarrollador FullStack</mat-card-subtitle>
              </mat-card-header>
              <div class="image-wrapper mt-2">
                <img
                  [src]="'../../../assets/autores/24509644.jpeg'"
                  alt="Dani"
                />
              </div>
              <mat-card-content class="mt-3">
                <p>Curioso por naturaleza y experto en nuevas tecnolog\xEDas. Enfocado en la mejor experiencia de usuario.</p>
              </mat-card-content>
              <mat-card-actions class="d-flex justify-content-around pb-3">
                <button
                  mat-icon-button
                  (click)="openLinkedin('Dani')"
                  class="btn-social-media linkedin"
                  title="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                  >
                    <path
                      d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                    />
                  </svg>
                </button>

                <button
                  mat-icon-button
                  (click)="openGitHub('Dani')"
                  class="btn-social-media github"
                  title="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 496 512"
                    fill="currentColor"
                  >
                    <path
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"
                    />
                  </svg>
                </button>
              </mat-card-actions>
            </mat-card>
          </ion-col>
        </ion-row>
      </ion-grid>

      <div
        id="sugerencias"
        class="box_sugerencias my-5 text-center p-4"
      >
        <h6>\xBFTienes algo que contarnos?</h6>
        <p>Estamos construyendo GoGuay juntxs. H\xE1znoslo saber. \u{1F600}</p>
        <button
          mat-raised-button
          class="btn_bg_main"
        >
          <i class="fi fi-rr-envelope me-2"></i>
          Env\xEDanos tu sugerencia
        </button>
      </div>

      <div class="links-footer p-4 borderDraw">
        <ion-row>
          <ion-col
            size="12"
            size-md="6"
          >
            <h6 class="fw-bold mb-3">ENLACES DE INTER\xC9S</h6>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a
                  href="/cookies"
                  class="link-item"
                >
                  <i class="fi fi-rr-cookie me-2"></i>
                  Pol\xEDtica de cookies
                </a>
              </li>
              <li class="mb-2">
                <a
                  href="/terminos"
                  class="link-item"
                >
                  <i class="fi fi-rr-file me-2"></i>
                  T\xE9rminos y condiciones
                </a>
              </li>
              <li class="mb-2">
                <a
                  href="/faqs"
                  class="link-item"
                >
                  <i class="fi fi-rr-question me-2"></i>
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </ion-col>
          <ion-col
            size="12"
            size-md="6"
            class="text-md-end mt-4 mt-md-0"
          >
            <h6 class="fw-bold mb-3">CONTACTO</h6>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a
                  href="/centro-contacto"
                  class="link-item"
                >
                  Formulario de contacto
                  <i class="fi fi-rr-form ms-2"></i>
                </a>
              </li>
              <li class="mb-2">
                <a
                  href="mailto:gestion.goguay&#64;gmail.com"
                  class="link-item"
                >
                  gestion.goguay&#64;gmail.com
                  <i class="fi fi-rr-envelope ms-2"></i>
                </a>
              </li>
            </ul>
          </ion-col>
        </ion-row>
      </div>
    </div>
  </div>
</ion-content>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/sobre-nosotros/sobre-nosotros.page.scss */\n.borderDraw {\n  border-left: 3px solid #e0a667;\n  padding: 1%;\n}\n.box_sugerencias {\n  border-radius: 35px;\n  border: #e0a667 solid 1px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  background-color: rgba(224, 166, 103, 0.28);\n  padding: 1%;\n}\n.box_text {\n  border-radius: 35px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  margin-bottom: 3%;\n  margin-top: 2%;\n}\n.header-image-tom {\n  background-image: url("./media/137113975.png");\n  background-size: cover;\n}\n.header-image-dani {\n  background-image: url("./media/24509644.jpeg");\n  background-size: cover;\n}\n.creador-card {\n  border-radius: 20px;\n  border: none;\n  position: relative;\n  overflow: hidden;\n  max-width: 300px;\n  background: #fff;\n  padding: 10px;\n  background: rgba(255, 255, 255, 0.45);\n  -webkit-backdrop-filter: blur(25px) saturate(180%);\n  backdrop-filter: blur(25px) saturate(180%);\n  box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.3);\n}\n.creador-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 6px;\n  background:\n    linear-gradient(\n      to bottom,\n      #ffb3ba,\n      #ffdfba,\n      #ffffba,\n      #baffc9,\n      #bae1ff,\n      #e0baff);\n  border-radius: 20px 0 0 20px;\n}\n.image-wrapper {\n  border-radius: 15px;\n  overflow: hidden;\n  height: 200px;\n}\n.image-wrapper img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.btn_bg_main {\n  background: #b3b5e6;\n  font-weight: bold;\n  border-radius: 35px;\n  padding: 10px 20px;\n}\n.link-item {\n  color: #666;\n  text-decoration: none;\n  font-size: 0.9rem;\n}\n.link-item:hover {\n  color: #b3b5e6;\n  text-decoration: underline;\n}\n.seccion-subtitulo {\n  font-weight: 800;\n  letter-spacing: 1px;\n  color: #444;\n}\n.btn-social-media {\n  background-color: #f5f5f5 !important;\n  transition: all 0.3s ease;\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50% !important;\n  width: 40px;\n  height: 40px;\n}\n.btn-social-media svg {\n  display: block;\n  margin: auto;\n}\n.btn-social-media.linkedin {\n  color: #0077b5 !important;\n}\n.btn-social-media.linkedin:hover {\n  background-color: #e3f2fd !important;\n  transform: translateY(-2px);\n}\n.btn-social-media.github {\n  color: #333 !important;\n}\n.btn-social-media.github:hover {\n  background-color: #eeeeee !important;\n  transform: translateY(-2px);\n}\n@media (max-width: 576px) {\n  .box_img {\n    display: flex;\n    justify-content: end;\n    position: relative;\n    position: relative;\n    z-index: 1;\n    bottom: 79px;\n    left: 51px;\n  }\n  .img_arco {\n    width: 30%;\n    transform: rotate(-52deg);\n    position: absolute;\n    z-index: 100;\n  }\n}\n/*# sourceMappingURL=sobre-nosotros.page.css.map */\n'] }]
  }], () => [{ type: FuncionesComunes }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SobreNosotrosPage, { className: "SobreNosotrosPage", filePath: "src/app/pages/sobre-nosotros/sobre-nosotros.page.ts", lineNumber: 34 });
})();
export {
  SobreNosotrosPage
};
//# debugId=33158719-5352-5ffe-91d1-183ab0741638
//# sourceMappingURL=sobre-nosotros.page-ET7FPKYJ.js.map
