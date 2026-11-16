import {
  NavbarAdmin
} from "./chunk-ZCKXGVIL.js";
import {
  EncuestaService
} from "./chunk-EBOJ6ZAP.js";
import "./chunk-6VCOWNW4.js";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonChip,
  IonContent,
  IonIcon,
  IonSearchbar,
  IonicModule,
  TextValueAccessorDirective
} from "./chunk-V5JFS32A.js";
import {
  CommonModule,
  DatePipe,
  NavController
} from "./chunk-XCBA4FSK.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4LZZ5H7X.js";
import "./chunk-PYRDO7X4.js";
import "./chunk-UGUZQALC.js";
import "./chunk-T5TS2YIV.js";
import "./chunk-WC2RXGX6.js";
import "./chunk-PUO4TC4B.js";
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
import "./chunk-77FB7LC2.js";
import "./chunk-SE3K5JBJ.js";
import "./chunk-DI3VEDFV.js";
import "./chunk-MP5LG4CB.js";

// src/app/pages/admin/encuestas-admin/gestion-encuestas.page.ts
function GestionEncuestasPage_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "i", 15);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No se han encontrado encuestas que coincidan.");
    \u0275\u0275elementEnd()();
  }
}
function GestionEncuestasPage_For_20_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "h6");
    \u0275\u0275element(2, "i", 35);
    \u0275\u0275text(3, " Sugerencia del usuario: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1('"', e_r1.sugerencias, '"');
  }
}
function GestionEncuestasPage_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-card", 14)(1, "ion-card-content")(2, "div", 16)(3, "div", 17)(4, "span", 18);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 20)(10, "span", 21);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 22);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(14, "hr");
    \u0275\u0275elementStart(15, "div", 23)(16, "div", 24);
    \u0275\u0275element(17, "i", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 26);
    \u0275\u0275element(19, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 28);
    \u0275\u0275element(21, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 30);
    \u0275\u0275element(23, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 32);
    \u0275\u0275element(25, "i", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(26, GestionEncuestasPage_For_20_Conditional_26_Template, 6, 1, "div", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 15, e_r1.fecha, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("ID Usuario: ", e_r1.usuario_id || "An\xF3nimo");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getEstrellas(e_r1.calificacion));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", e_r1.calificacion, "/5");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(e_r1.aspectos.diseno);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(e_r1.aspectos.busqueda);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(e_r1.aspectos.mensajes);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(e_r1.aspectos.seguridad);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(e_r1.aspectos.normas);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(e_r1.sugerencias ? 26 : -1);
  }
}
var GestionEncuestasPage = class _GestionEncuestasPage {
  encuestaService;
  navCtrl;
  todasLasEncuestas = [];
  encuestasFiltradas = [];
  filtroNota = "todas";
  textoBusqueda = "";
  constructor(encuestaService, navCtrl) {
    this.encuestaService = encuestaService;
    this.navCtrl = navCtrl;
  }
  ngOnInit() {
    this.cargarEncuestas();
  }
  cargarEncuestas() {
    this.encuestaService.getTodasLasEncuestas().subscribe({
      next: (res) => {
        this.todasLasEncuestas = res;
        this.encuestasFiltradas = res;
      },
      error: (err) => console.error(err)
    });
  }
  filtrarPorNota(nota) {
    this.filtroNota = nota;
    this.aplicarFiltros();
  }
  buscar(event) {
    this.textoBusqueda = event.target.value.toLowerCase();
    this.aplicarFiltros();
  }
  aplicarFiltros() {
    this.encuestasFiltradas = this.todasLasEncuestas.filter((e) => {
      var _a;
      const cumpleNota = this.filtroNota === "todas" || e.calificacion === this.filtroNota;
      const cumpleBusqueda = !this.textoBusqueda || ((_a = e.sugerencias) == null ? void 0 : _a.toLowerCase().includes(this.textoBusqueda));
      return cumpleNota && cumpleBusqueda;
    });
  }
  getEstrellas(nota) {
    return "\u2B50".repeat(nota);
  }
  getCardClass(nota) {
    if (nota >= 4)
      return "rating-high";
    if (nota === 3)
      return "rating-mid";
    return "rating-low";
  }
  getLabelRating(nota) {
    const labels = ["Muy Insatisfecho", "Insatisfecho", "Neutral", "Satisfecho", "Excelente"];
    return labels[nota - 1] || "Sin Nota";
  }
  goBack() {
    this.navCtrl.back();
  }
  static \u0275fac = function GestionEncuestasPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GestionEncuestasPage)(\u0275\u0275directiveInject(EncuestaService), \u0275\u0275directiveInject(NavController));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GestionEncuestasPage, selectors: [["app-gestion-encuestas"]], decls: 21, vars: 5, consts: [[1, "ion-padding", 3, "fullscreen"], [1, "admin-container"], [1, "d-flex", "align-items-center", "mb-4"], ["fill", "clear", "color", "dark", 3, "click"], ["name", "arrow-back-outline"], [1, "m-0", "ms-2"], [1, "filters-section", "mb-4"], ["placeholder", "Buscar en sugerencias...", 3, "ionInput"], [1, "chips-filters", "mt-2"], [3, "click", "outline"], ["color", "success", 3, "click", "outline"], ["color", "danger", 3, "click", "outline"], [1, "encuestas-list"], [1, "text-center", "no-data", "py-5"], [1, "encuesta-card", "animate__animated", "animate__fadeInUp"], [1, "fi", "fi-rr-search-alt", "mb-3"], [1, "card-top"], [1, "user-info"], [1, "date-badge"], [1, "user-id"], [1, "rating-display"], [1, "stars"], [1, "nota"], [1, "aspects-summary"], ["matTooltip", "Dise\xF1o", 1, "aspect-dot"], [1, "fi", "fi-rr-palette"], ["matTooltip", "B\xFAsqueda", 1, "aspect-dot"], [1, "fi", "fi-rr-search"], ["matTooltip", "Mensajer\xEDa", 1, "aspect-dot"], [1, "fi", "fi-rr-comments"], ["matTooltip", "Seguridad", 1, "aspect-dot"], [1, "fi", "fi-rr-shield-check"], ["matTooltip", "Normas", 1, "aspect-dot"], [1, "fi", "fi-rr-interrogation"], [1, "feedback-text", "mt-3"], [1, "fi", "fi-rr-comment-dots", "me-2"]], template: function GestionEncuestasPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar-admin");
      \u0275\u0275elementStart(1, "ion-content", 0)(2, "div", 1)(3, "div", 2)(4, "ion-button", 3);
      \u0275\u0275listener("click", function GestionEncuestasPage_Template_ion_button_click_4_listener() {
        return ctx.goBack();
      });
      \u0275\u0275element(5, "ion-icon", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1", 5);
      \u0275\u0275text(7, "Feedback de la Comunidad");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "ion-searchbar", 7);
      \u0275\u0275listener("ionInput", function GestionEncuestasPage_Template_ion_searchbar_ionInput_9_listener($event) {
        return ctx.buscar($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8)(11, "ion-chip", 9);
      \u0275\u0275listener("click", function GestionEncuestasPage_Template_ion_chip_click_11_listener() {
        return ctx.filtrarPorNota("todas");
      });
      \u0275\u0275text(12, " Todas ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "ion-chip", 10);
      \u0275\u0275listener("click", function GestionEncuestasPage_Template_ion_chip_click_13_listener() {
        return ctx.filtrarPorNota(5);
      });
      \u0275\u0275text(14, " Excelentes (5\u2B50) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "ion-chip", 11);
      \u0275\u0275listener("click", function GestionEncuestasPage_Template_ion_chip_click_15_listener() {
        return ctx.filtrarPorNota(1);
      });
      \u0275\u0275text(16, " Cr\xEDticas (1\u2B50) ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 12);
      \u0275\u0275conditionalCreate(18, GestionEncuestasPage_Conditional_18_Template, 4, 0, "div", 13);
      \u0275\u0275repeaterCreate(19, GestionEncuestasPage_For_20_Template, 27, 18, "ion-card", 14, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance(10);
      \u0275\u0275property("outline", ctx.filtroNota !== "todas");
      \u0275\u0275advance(2);
      \u0275\u0275property("outline", ctx.filtroNota !== 5);
      \u0275\u0275advance(2);
      \u0275\u0275property("outline", ctx.filtroNota !== 1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.encuestasFiltradas.length === 0 ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.encuestasFiltradas);
    }
  }, dependencies: [CommonModule, NavbarAdmin, IonicModule, IonButton, IonCard, IonCardContent, IonChip, IonContent, IonIcon, IonSearchbar, TextValueAccessorDirective, DatePipe], styles: ["\n.admin-container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n.admin-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: #333;\n}\n.encuesta-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 20px;\n  margin-bottom: 15px;\n  border: none;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.encuesta-card.rating-high[_ngcontent-%COMP%]   .status-accent[_ngcontent-%COMP%] {\n  background: #b7e0b4;\n}\n.encuesta-card.rating-mid[_ngcontent-%COMP%]   .status-accent[_ngcontent-%COMP%] {\n  background: #f0d7b4;\n}\n.encuesta-card.rating-low[_ngcontent-%COMP%]   .status-accent[_ngcontent-%COMP%] {\n  background: #ffb7b7;\n}\n.encuesta-card[_ngcontent-%COMP%]   .status-accent[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 6px;\n}\n.encuesta-card[_ngcontent-%COMP%]   .card-header-flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 15px;\n}\n.encuesta-card[_ngcontent-%COMP%]   .user-meta[_ngcontent-%COMP%]   .id-tag[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  padding: 2px 8px;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #555;\n}\n.encuesta-card[_ngcontent-%COMP%]   .user-meta[_ngcontent-%COMP%]   .date-text[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  color: #999;\n  margin-top: 4px;\n}\n.encuesta-card[_ngcontent-%COMP%]   .rating-box[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.encuesta-card[_ngcontent-%COMP%]   .rating-box[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 0.65rem;\n  font-weight: 900;\n  letter-spacing: 0.5px;\n  color: #aaa;\n}\n.encuesta-card[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 800;\n  color: #bbb;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n  letter-spacing: 1px;\n}\n.aspects-grid-labels[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.aspects-grid-labels[_ngcontent-%COMP%]   .aspect-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border-radius: 12px;\n  background: #f9f9f9;\n  color: #999;\n  font-size: 0.75rem;\n  font-weight: 600;\n  border: 1px solid #eee;\n}\n.aspects-grid-labels[_ngcontent-%COMP%]   .aspect-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.aspects-grid-labels[_ngcontent-%COMP%]   .aspect-badge.positivo[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n  border-color: #c8e6c9;\n}\n.aspects-grid-labels[_ngcontent-%COMP%]   .aspect-badge.negativo[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n  border-color: #ffcdd2;\n}\n.suggestion-preview[_ngcontent-%COMP%] {\n  background: #fff9f0;\n  padding: 12px;\n  border-radius: 12px;\n  border: 1px dashed #f0d7b4;\n}\n.suggestion-preview[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.65rem;\n  font-weight: 900;\n  color: #d4a373;\n  margin-bottom: 5px;\n}\n.suggestion-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #5d4037;\n  line-height: 1.4;\n  font-style: italic;\n}\n.aspects-summary[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  justify-content: center;\n  padding: 10px 0;\n}\n.aspects-summary[_ngcontent-%COMP%]   .aspect-dot[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f5f5f5;\n  color: #ccc;\n  font-size: 1rem;\n  transition: all 0.3s;\n}\n.aspects-summary[_ngcontent-%COMP%]   .aspect-dot.positivo[_ngcontent-%COMP%] {\n  background: #b7e0b4;\n  color: #2e7d32;\n}\n.aspects-summary[_ngcontent-%COMP%]   .aspect-dot.negativo[_ngcontent-%COMP%] {\n  background: #ffb7b7;\n  color: #c62828;\n}\n.feedback-text[_ngcontent-%COMP%] {\n  background: #fdfaf5;\n  padding: 15px;\n  border-radius: 15px;\n  border-left: 4px solid #f0d7b4;\n}\n.feedback-text[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 800;\n  color: #888;\n}\n.feedback-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #444;\n  margin: 0;\n}\n.no-data[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: #ddd;\n}\n.no-data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #999;\n  font-weight: 600;\n}\n/*# sourceMappingURL=gestion-encuestas.page.css.map */"], changeDetection: 1 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GestionEncuestasPage, [{
    type: Component,
    args: [{ selector: "app-gestion-encuestas", changeDetection: ChangeDetectionStrategy.Eager, imports: [CommonModule, NavbarAdmin, IonicModule, DatePipe], template: `<app-navbar-admin></app-navbar-admin>

<ion-content
  [fullscreen]="true"
  class="ion-padding"
>
  <div class="admin-container">
    <div class="d-flex align-items-center mb-4">
      <ion-button
        fill="clear"
        (click)="goBack()"
        color="dark"
      >
        <ion-icon name="arrow-back-outline"></ion-icon>
      </ion-button>
      <h1 class="m-0 ms-2">Feedback de la Comunidad</h1>
    </div>

    <div class="filters-section mb-4">
      <ion-searchbar
        placeholder="Buscar en sugerencias..."
        (ionInput)="buscar($event)"
      ></ion-searchbar>

      <div class="chips-filters mt-2">
        <ion-chip
          [outline]="filtroNota !== 'todas'"
          (click)="filtrarPorNota('todas')"
        >
          Todas
        </ion-chip>
        <ion-chip
          color="success"
          [outline]="filtroNota !== 5"
          (click)="filtrarPorNota(5)"
        >
          Excelentes (5\u2B50)
        </ion-chip>
        <ion-chip
          color="danger"
          [outline]="filtroNota !== 1"
          (click)="filtrarPorNota(1)"
        >
          Cr\xEDticas (1\u2B50)
        </ion-chip>
      </div>
    </div>

    <div class="encuestas-list">
      @if (encuestasFiltradas.length === 0) {
      <div class="text-center no-data py-5">
        <i class="fi fi-rr-search-alt mb-3"></i>
        <p>No se han encontrado encuestas que coincidan.</p>
      </div>
      } @for (e of encuestasFiltradas; track e) {
      <ion-card class="encuesta-card animate__animated animate__fadeInUp">
        <ion-card-content>
          <div class="card-top">
            <div class="user-info">
              <span class="date-badge">{{ e.fecha | date:'dd/MM/yyyy HH:mm' }}</span>
              <span class="user-id">ID Usuario: {{ e.usuario_id || 'An\xF3nimo' }}</span>
            </div>
            <div class="rating-display">
              <span class="stars">{{ getEstrellas(e.calificacion) }}</span>
              <span class="nota">{{ e.calificacion }}/5</span>
            </div>
          </div>
          <hr />
          <div class="aspects-summary">
            <div
              class="aspect-dot"
              [class]="e.aspectos.diseno"
              matTooltip="Dise\xF1o"
            >
              <i class="fi fi-rr-palette"></i>
            </div>
            <div
              class="aspect-dot"
              [class]="e.aspectos.busqueda"
              matTooltip="B\xFAsqueda"
            >
              <i class="fi fi-rr-search"></i>
            </div>
            <div
              class="aspect-dot"
              [class]="e.aspectos.mensajes"
              matTooltip="Mensajer\xEDa"
            >
              <i class="fi fi-rr-comments"></i>
            </div>
            <div
              class="aspect-dot"
              [class]="e.aspectos.seguridad"
              matTooltip="Seguridad"
            >
              <i class="fi fi-rr-shield-check"></i>
            </div>
            <div
              class="aspect-dot"
              [class]="e.aspectos.normas"
              matTooltip="Normas"
            >
              <i class="fi fi-rr-interrogation"></i>
            </div>
          </div>
          @if (e.sugerencias) {
          <div class="feedback-text mt-3">
            <h6>
              <i class="fi fi-rr-comment-dots me-2"></i>
              Sugerencia del usuario:
            </h6>
            <p>"{{ e.sugerencias }}"</p>
          </div>
          }
        </ion-card-content>
      </ion-card>
      }
    </div>
  </div>
</ion-content>
`, styles: ["/* src/app/pages/admin/encuestas-admin/gestion-encuestas.page.scss */\n.admin-container {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n.admin-container h1 {\n  font-weight: 800;\n  color: #333;\n}\n.encuesta-card {\n  position: relative;\n  border-radius: 20px;\n  margin-bottom: 15px;\n  border: none;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.encuesta-card.rating-high .status-accent {\n  background: #b7e0b4;\n}\n.encuesta-card.rating-mid .status-accent {\n  background: #f0d7b4;\n}\n.encuesta-card.rating-low .status-accent {\n  background: #ffb7b7;\n}\n.encuesta-card .status-accent {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 6px;\n}\n.encuesta-card .card-header-flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 15px;\n}\n.encuesta-card .user-meta .id-tag {\n  background: #f0f0f0;\n  padding: 2px 8px;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #555;\n}\n.encuesta-card .user-meta .date-text {\n  display: block;\n  font-size: 0.8rem;\n  color: #999;\n  margin-top: 4px;\n}\n.encuesta-card .rating-box {\n  text-align: right;\n}\n.encuesta-card .rating-box small {\n  text-transform: uppercase;\n  font-size: 0.65rem;\n  font-weight: 900;\n  letter-spacing: 0.5px;\n  color: #aaa;\n}\n.encuesta-card .section-title {\n  font-size: 0.7rem;\n  font-weight: 800;\n  color: #bbb;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n  letter-spacing: 1px;\n}\n.aspects-grid-labels {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.aspects-grid-labels .aspect-badge {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border-radius: 12px;\n  background: #f9f9f9;\n  color: #999;\n  font-size: 0.75rem;\n  font-weight: 600;\n  border: 1px solid #eee;\n}\n.aspects-grid-labels .aspect-badge i {\n  font-size: 0.9rem;\n}\n.aspects-grid-labels .aspect-badge.positivo {\n  background: #e8f5e9;\n  color: #2e7d32;\n  border-color: #c8e6c9;\n}\n.aspects-grid-labels .aspect-badge.negativo {\n  background: #ffebee;\n  color: #c62828;\n  border-color: #ffcdd2;\n}\n.suggestion-preview {\n  background: #fff9f0;\n  padding: 12px;\n  border-radius: 12px;\n  border: 1px dashed #f0d7b4;\n}\n.suggestion-preview .preview-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.65rem;\n  font-weight: 900;\n  color: #d4a373;\n  margin-bottom: 5px;\n}\n.suggestion-preview .preview-content {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #5d4037;\n  line-height: 1.4;\n  font-style: italic;\n}\n.aspects-summary {\n  display: flex;\n  gap: 15px;\n  justify-content: center;\n  padding: 10px 0;\n}\n.aspects-summary .aspect-dot {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f5f5f5;\n  color: #ccc;\n  font-size: 1rem;\n  transition: all 0.3s;\n}\n.aspects-summary .aspect-dot.positivo {\n  background: #b7e0b4;\n  color: #2e7d32;\n}\n.aspects-summary .aspect-dot.negativo {\n  background: #ffb7b7;\n  color: #c62828;\n}\n.feedback-text {\n  background: #fdfaf5;\n  padding: 15px;\n  border-radius: 15px;\n  border-left: 4px solid #f0d7b4;\n}\n.feedback-text h6 {\n  font-size: 0.85rem;\n  font-weight: 800;\n  color: #888;\n}\n.feedback-text p {\n  font-style: italic;\n  color: #444;\n  margin: 0;\n}\n.no-data i {\n  font-size: 4rem;\n  color: #ddd;\n}\n.no-data p {\n  color: #999;\n  font-weight: 600;\n}\n/*# sourceMappingURL=gestion-encuestas.page.css.map */\n"] }]
  }], () => [{ type: EncuestaService }, { type: NavController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GestionEncuestasPage, { className: "GestionEncuestasPage", filePath: "src/app/pages/admin/encuestas-admin/gestion-encuestas.page.ts", lineNumber: 14 });
})();
export {
  GestionEncuestasPage
};
//# debugId=aa6ba928-4965-514e-b9fd-72af5671e148
//# sourceMappingURL=gestion-encuestas.page-EX6CCLCI.js.map
