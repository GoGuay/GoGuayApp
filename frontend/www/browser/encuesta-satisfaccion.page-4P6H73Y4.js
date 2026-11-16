import {
  MatCheckboxModule,
  MatRadioModule,
  MatSliderModule
} from "./chunk-YYRMRNLE.js";
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
  plugin_legend,
  plugin_title,
  plugin_tooltip
} from "./chunk-DXGSREOA.js";
import {
  EncuestaService
} from "./chunk-4S7PJVI7.js";
import "./chunk-S774ORUL.js";
import "./chunk-LJVX26SN.js";
import {
  HelpModalComponent
} from "./chunk-GYAYVE5N.js";
import {
  MatButtonModule
} from "./chunk-ZYMQAXGI.js";
import "./chunk-UIKNRIU5.js";
import "./chunk-FCE3VLZJ.js";
import {
  MatDialog
} from "./chunk-CGCOLBWN.js";
import "./chunk-H72L7N4J.js";
import {
  IonContent,
  IonicModule
} from "./chunk-6IWXE3BU.js";
import "./chunk-XHXT42RH.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxLengthValidator,
  NG_VALUE_ACCESSOR,
  NavController,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-TU2LK3TM.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-7PPOBOFB.js";
import {
  Component,
  forwardRef,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-HLETIGG3.js";
import "./chunk-7556B6PN.js";
import "./chunk-W7NNY2EY.js";
import "./chunk-5UBTS3LV.js";
import "./chunk-5U7ILDTA.js";
import "./chunk-DBFJ6K2U.js";
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
import "./chunk-Z325AMW6.js";
import "./chunk-GEKSWYBB.js";
import "./chunk-YAS4LRVC.js";
import "./chunk-5SZB5ECT.js";

// src/app/pages/encuesta-satisfaccion/encuesta-satisfaccion.page.ts
function EncuestaSatisfaccionPage_div_19_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r2 = \u0275\u0275nextContext().index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getLabelRating(i_r2 + 1));
  }
}
function EncuestaSatisfaccionPage_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("click", function EncuestaSatisfaccionPage_div_19_Template_div_click_0_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.seleccionarCalificacion(i_r2 + 1));
    });
    \u0275\u0275element(1, "img", 25);
    \u0275\u0275template(2, EncuestaSatisfaccionPage_div_19_span_2_Template, 2, 1, "span", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", i_r2 < ctx_r2.calificacionSeleccionada);
    \u0275\u0275advance();
    \u0275\u0275property("src", i_r2 < ctx_r2.calificacionSeleccionada ? "../../../assets/rating/como.gif" : "../../../assets/rating/favorito.gif", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r2 < ctx_r2.calificacionSeleccionada);
  }
}
function EncuestaSatisfaccionPage_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "p", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30)(4, "button", 31);
    \u0275\u0275listener("click", function EncuestaSatisfaccionPage_div_27_Template_button_click_4_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleAspect(i_r5, "positivo"));
    });
    \u0275\u0275element(5, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 33);
    \u0275\u0275listener("click", function EncuestaSatisfaccionPage_div_27_Template_button_click_6_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleAspect(i_r5, "negativo"));
    });
    \u0275\u0275element(7, "i", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const aspecto_r6 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(aspecto_r6.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", (tmp_4_0 = ctx_r2.encuestaForm.get("positivo" + i_r5)) == null ? null : tmp_4_0.value);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", (tmp_5_0 = ctx_r2.encuestaForm.get("negativo" + i_r5)) == null ? null : tmp_5_0.value);
  }
}
Chart.register(BarController, BarElement, CategoryScale, LinearScale, plugin_tooltip, plugin_legend, plugin_title);
var EncuestaSatisfaccionPage = class _EncuestaSatisfaccionPage {
  dialog;
  navCtrl;
  fb;
  encuestaService;
  encuestaForm;
  aspectos = [
    { nombre: "Dise\xF1o y apariencia", icono: "fi-rr-palette" },
    { nombre: "Facilidad para buscar viajes", icono: "fi-rr-search" },
    { nombre: "Uso del Centro de Mensajes", icono: "fi-rr-comments" },
    { nombre: "Sensaci\xF3n de seguridad y respeto", icono: "fi-rr-shield-check" },
    { nombre: "Comprensi\xF3n de las normas", icono: "fi-rr-interrogation" }
  ];
  calificacionSeleccionada = 0;
  estrellas = [1, 2, 3, 4, 5];
  constructor(dialog, navCtrl, fb, encuestaService) {
    this.dialog = dialog;
    this.navCtrl = navCtrl;
    this.fb = fb;
    this.encuestaService = encuestaService;
    this.encuestaForm = this.fb.group({
      recomendacion: [0, Validators.required],
      sugerencias: [""]
    });
    this.aspectos.forEach((_, index) => {
      this.encuestaForm.addControl(`positivo${index}`, this.fb.control(false));
      this.encuestaForm.addControl(`negativo${index}`, this.fb.control(false));
    });
  }
  ngOnInit() {
  }
  toggleCheckbox(i, tipo) {
    if (tipo === "positivo") {
      this.encuestaForm.patchValue({ [`negativo${i}`]: false });
    } else {
      this.encuestaForm.patchValue({ [`positivo${i}`]: false });
    }
  }
  seleccionarCalificacion(valor) {
    if (this.calificacionSeleccionada === valor) {
      this.calificacionSeleccionada = 0;
      this.encuestaForm.patchValue({ recomendacion: 0 });
    } else {
      this.calificacionSeleccionada = valor;
      this.encuestaForm.patchValue({ recomendacion: valor });
    }
    console.log("Calificaci\xF3n seleccionada:", this.calificacionSeleccionada);
  }
  verificarEncuesta() {
    var _a;
    if (this.encuestaForm.invalid || this.calificacionSeleccionada === 0)
      return;
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    const userId = (_a = userData == null ? void 0 : userData.usuario) == null ? void 0 : _a.id;
    this.encuestaService.enviarEncuesta(this.encuestaForm.value, userId).subscribe({
      next: () => {
        const dialogRef = this.dialog.open(HelpModalComponent, {
          data: {
            title: "\xA1Gracias!",
            message: "Tu opini\xF3n nos ayuda a hacer de GoGuay un lugar m\xE1s seguro.",
            showAcceptButton: true
          },
          disableClose: true
        });
        dialogRef.afterClosed().subscribe(() => {
          this.navCtrl.navigateRoot("/home");
        });
      },
      error: (err) => {
        console.error("Error al enviar la encuesta", err);
      }
    });
  }
  getLabelRating(valor) {
    const labels = ["P\xE9simo", "Regular", "Bueno", "\xA1Genial!", "\xA1Excelente!"];
    return labels[valor - 1];
  }
  toggleAspect(index, tipo) {
    const ctrlPos = this.encuestaForm.get(`positivo${index}`);
    const ctrlNeg = this.encuestaForm.get(`negativo${index}`);
    if (tipo === "positivo") {
      const newVal = !(ctrlPos == null ? void 0 : ctrlPos.value);
      ctrlPos == null ? void 0 : ctrlPos.setValue(newVal);
      if (newVal)
        ctrlNeg == null ? void 0 : ctrlNeg.setValue(false);
    } else {
      const newVal = !(ctrlNeg == null ? void 0 : ctrlNeg.value);
      ctrlNeg == null ? void 0 : ctrlNeg.setValue(newVal);
      if (newVal)
        ctrlPos == null ? void 0 : ctrlPos.setValue(false);
    }
  }
  goBack() {
    this.navCtrl.back();
  }
  static \u0275fac = function EncuestaSatisfaccionPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EncuestaSatisfaccionPage)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(EncuestaService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EncuestaSatisfaccionPage, selectors: [["app-encuesta-satisfaccion"]], features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _EncuestaSatisfaccionPage),
      multi: true
    }
  ])], decls: 47, vars: 6, consts: [[3, "fullscreen"], [1, "main-wrapper"], [3, "ngSubmit", "formGroup"], [1, "welcome-section", "text-center", "animate__animated", "animate__fadeIn"], [1, "icon-circle"], [1, "fi", "fi-rr-heart"], [1, "container", "main_container"], [1, "survey-card", "mt-4"], [1, "card-header"], [1, "step-number"], [1, "stars-wrapper"], [1, "stars-container"], ["class", "star-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "aspects-grid"], ["class", "aspect-item", 4, "ngFor", "ngForOf"], [1, "survey-card", "mt-4", "mb-4"], [1, "textarea-wrapper"], ["placeholder", "Cu\xE9ntanos lo que quieras...", "maxlength", "500", "formControlName", "sugerencias", 1, "textArea", "form-control"], [1, "char-count", "mt-2"], [1, "actions-wrapper", "d-flex", "justify-content-center", "align-items-center", "gap-3", "pb-5", "mt-4"], ["type", "button", 1, "btn-back", 3, "click"], [1, "fi", "fi-rr-arrow-small-left", "me-2"], ["type", "submit", 1, "btn-send", 3, "disabled"], [1, "fi", "fi-rr-paper-plane", "ms-2"], [1, "star-item", 3, "click"], [1, "star-img", 3, "src"], ["class", "star-label", 4, "ngIf"], [1, "star-label"], [1, "aspect-item"], [1, "aspect-name"], [1, "toggle-buttons"], ["type", "button", 1, "btn-toggle", "pos", 3, "click"], [1, "fi", "fi-rr-smile"], ["type", "button", 1, "btn-toggle", "neg", 3, "click"], [1, "fi", "fi-rr-frown"]], template: function EncuestaSatisfaccionPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1)(2, "form", 2);
      \u0275\u0275listener("ngSubmit", function EncuestaSatisfaccionPage_Template_form_ngSubmit_2_listener() {
        return ctx.verificarEncuesta();
      });
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1");
      \u0275\u0275text(7, "\xA1Tu opini\xF3n nos mueve!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9, "Ay\xFAdanos a mejorar GoGuay en menos de 1 minuto.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "span", 9);
      \u0275\u0275text(14, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "h3");
      \u0275\u0275text(16, "\xBFQu\xE9 probabilidad hay de que nos recomiendes?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 10)(18, "div", 11);
      \u0275\u0275template(19, EncuestaSatisfaccionPage_div_19_Template, 3, 4, "div", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 7)(21, "div", 8)(22, "span", 9);
      \u0275\u0275text(23, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "h3");
      \u0275\u0275text(25, "\xBFQu\xE9 es lo que m\xE1s te gusta y qu\xE9 debemos mejorar?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 13);
      \u0275\u0275template(27, EncuestaSatisfaccionPage_div_27_Template, 8, 5, "div", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 15)(29, "div", 8)(30, "span", 9);
      \u0275\u0275text(31, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "h3");
      \u0275\u0275text(33, "\xBFAlguna sugerencia extra para nosotros?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 16);
      \u0275\u0275element(35, "textarea", 17);
      \u0275\u0275elementStart(36, "div", 18);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 19)(39, "button", 20);
      \u0275\u0275listener("click", function EncuestaSatisfaccionPage_Template_button_click_39_listener() {
        return ctx.goBack();
      });
      \u0275\u0275element(40, "i", 21);
      \u0275\u0275elementStart(41, "span");
      \u0275\u0275text(42, "Atr\xE1s");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "button", 22)(44, "span");
      \u0275\u0275text(45, "Enviar valoraci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275element(46, "i", 23);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_4_0;
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.encuestaForm);
      \u0275\u0275advance(17);
      \u0275\u0275property("ngForOf", ctx.estrellas);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.aspectos);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("", ((tmp_4_0 = ctx.encuestaForm.get("sugerencias")) == null ? null : tmp_4_0.value == null ? null : tmp_4_0.value.length) || 0, "/500");
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.calificacionSeleccionada === 0);
    }
  }, dependencies: [
    IonicModule,
    IonContent,
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    MaxLengthValidator,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    MatSliderModule
  ], styles: ["\n\n.main-wrapper[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #b3b5e6 0%,\n      #ffffff 100%);\n  min-height: 100%;\n}\n.welcome-section[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  background-color: #f0d7b4;\n  border-radius: 0 0 35px 35px;\n}\n.welcome-section[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 15px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n.welcome-section[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #b3b5e6;\n}\n.welcome-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1.8rem;\n  color: #333;\n}\n.welcome-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 1rem;\n}\n.survey-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 25px;\n  padding: 25px;\n  box-shadow: 0 10px 30px rgba(179, 181, 230, 0.15);\n  border: 1px solid rgba(179, 181, 230, 0.1);\n}\n.survey-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 15px;\n  margin-bottom: 20px;\n}\n.survey-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  background: #b3b5e6;\n  color: white;\n  width: 32px;\n  height: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 0.9rem;\n}\n.survey-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin: 0;\n  color: #444;\n}\n.stars-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  padding: 10px 0;\n}\n.stars-container[_ngcontent-%COMP%]   .star-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transition: transform 0.3s ease;\n  cursor: pointer;\n}\n.stars-container[_ngcontent-%COMP%]   .star-item.active[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n}\n.stars-container[_ngcontent-%COMP%]   .star-item[_ngcontent-%COMP%]   .star-img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n.stars-container[_ngcontent-%COMP%]   .star-item[_ngcontent-%COMP%]   .star-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #b3b5e6;\n  margin-top: 5px;\n  text-transform: uppercase;\n}\n.aspects-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.aspects-grid[_ngcontent-%COMP%]   .aspect-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 18px;\n  background: #fdfdfd;\n  border-radius: 15px;\n  border: 1px solid #eee;\n}\n.aspects-grid[_ngcontent-%COMP%]   .aspect-item[_ngcontent-%COMP%]   .aspect-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  color: #555;\n  font-size: 0.95rem;\n}\n.aspects-grid[_ngcontent-%COMP%]   .aspect-item[_ngcontent-%COMP%]   .toggle-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.aspects-grid[_ngcontent-%COMP%]   .aspect-item[_ngcontent-%COMP%]   .toggle-buttons[_ngcontent-%COMP%]   .btn-toggle[_ngcontent-%COMP%] {\n  border: none;\n  background: #eee;\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  color: #999;\n  transition: all 0.2s;\n}\n.aspects-grid[_ngcontent-%COMP%]   .aspect-item[_ngcontent-%COMP%]   .toggle-buttons[_ngcontent-%COMP%]   .btn-toggle.active.pos[_ngcontent-%COMP%] {\n  background: #b7e0b4;\n  color: white;\n}\n.aspects-grid[_ngcontent-%COMP%]   .aspect-item[_ngcontent-%COMP%]   .toggle-buttons[_ngcontent-%COMP%]   .btn-toggle.active.neg[_ngcontent-%COMP%] {\n  background: #ffb7b7;\n  color: white;\n}\n.textArea[_ngcontent-%COMP%] {\n  border: 2px solid #f0f0f0;\n  border-radius: 20px;\n  padding: 15px;\n  font-size: 0.95rem;\n}\n.textArea[_ngcontent-%COMP%]:focus {\n  border-color: #b3b5e6;\n  box-shadow: none;\n}\n.btn-send[_ngcontent-%COMP%] {\n  background: #b3b5e6;\n  color: white;\n  border: none;\n  padding: 15px 40px;\n  border-radius: 50px;\n  font-weight: 800;\n  font-size: 1.1rem;\n  box-shadow: 0 8px 20px rgba(179, 181, 230, 0.4);\n  transition: all 0.3s;\n}\n.btn-send[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  filter: grayscale(1);\n}\n.btn-send[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.btn-back[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 2px solid #b3b5e6;\n  color: #b3b5e6;\n  padding: 14px 25px;\n  border-radius: 50px;\n  font-weight: 700;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.btn-back[_ngcontent-%COMP%]:active {\n  background: rgba(179, 181, 230, 0.1);\n  transform: scale(0.95);\n}\n.actions-wrapper[_ngcontent-%COMP%] {\n  padding: 0 20px;\n}\n@media (max-width: 400px) {\n  .actions-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    width: 100%;\n  }\n  .actions-wrapper[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%], \n   .actions-wrapper[_ngcontent-%COMP%]   .btn-send[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=encuesta-satisfaccion.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EncuestaSatisfaccionPage, [{
    type: Component,
    args: [{ selector: "app-encuesta-satisfaccion", standalone: true, imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      MatButtonModule,
      MatRadioModule,
      MatCheckboxModule,
      ReactiveFormsModule,
      MatSliderModule
    ], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => EncuestaSatisfaccionPage),
        multi: true
      }
    ], template: `<ion-content [fullscreen]="true">
  <div class="main-wrapper">
    <form [formGroup]="encuestaForm" (ngSubmit)="verificarEncuesta()">
      
      <div class="welcome-section text-center animate__animated animate__fadeIn">
        <div class="icon-circle">
          <i class="fi fi-rr-heart"></i>
        </div>
        <h1>\xA1Tu opini\xF3n nos mueve!</h1>
        <p>Ay\xFAdanos a mejorar GoGuay en menos de 1 minuto.</p>
      </div>

      <div class="container main_container">
        
        <div class="survey-card mt-4">
          <div class="card-header">
            <span class="step-number">1</span>
            <h3>\xBFQu\xE9 probabilidad hay de que nos recomiendes?</h3>
          </div>
          <div class="stars-wrapper">
            <div class="stars-container">
              <div *ngFor="let estrella of estrellas; let i = index" class="star-item" 
                   (click)="seleccionarCalificacion(i + 1)"
                   [class.active]="i < calificacionSeleccionada">
                <img [src]="i < calificacionSeleccionada ? '../../../assets/rating/como.gif' : '../../../assets/rating/favorito.gif'" 
                     class="star-img">
                <span class="star-label" *ngIf="i < calificacionSeleccionada">{{ getLabelRating(i+1) }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="survey-card mt-4">
          <div class="card-header">
            <span class="step-number">2</span>
            <h3>\xBFQu\xE9 es lo que m\xE1s te gusta y qu\xE9 debemos mejorar?</h3>
          </div>
          
          <div class="aspects-grid">
            <div *ngFor="let aspecto of aspectos; let i = index" class="aspect-item">
              <p class="aspect-name">{{ aspecto.nombre }}</p>
              <div class="toggle-buttons">
                <button type="button" class="btn-toggle pos" 
                        [class.active]="encuestaForm.get('positivo'+i)?.value"
                        (click)="toggleAspect(i, 'positivo')">
                  <i class="fi fi-rr-smile"></i>
                </button>
                <button type="button" class="btn-toggle neg" 
                        [class.active]="encuestaForm.get('negativo'+i)?.value"
                        (click)="toggleAspect(i, 'negativo')">
                  <i class="fi fi-rr-frown"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="survey-card mt-4 mb-4">
          <div class="card-header">
            <span class="step-number">3</span>
            <h3>\xBFAlguna sugerencia extra para nosotros?</h3>
          </div>
          <div class="textarea-wrapper">
            <textarea class="textArea form-control" 
                      placeholder="Cu\xE9ntanos lo que quieras..."
                      maxlength="500" 
                      formControlName="sugerencias"></textarea>
            <div class="char-count mt-2">{{ encuestaForm.get('sugerencias')?.value?.length || 0 }}/500</div>
          </div>
        </div>

<div class="actions-wrapper d-flex justify-content-center align-items-center gap-3 pb-5 mt-4">
  
  <button type="button" class="btn-back" (click)="goBack()">
    <i class="fi fi-rr-arrow-small-left me-2"></i>
    <span>Atr\xE1s</span>
  </button>

  <button type="submit" class="btn-send" [disabled]="calificacionSeleccionada === 0">
    <span>Enviar valoraci\xF3n</span>
    <i class="fi fi-rr-paper-plane ms-2"></i>
  </button>
  
</div>

      </div>
    </form>
  </div>
</ion-content>`, styles: ["/* src/app/pages/encuesta-satisfaccion/encuesta-satisfaccion.page.scss */\n.main-wrapper {\n  background:\n    linear-gradient(\n      180deg,\n      #b3b5e6 0%,\n      #ffffff 100%);\n  min-height: 100%;\n}\n.welcome-section {\n  padding: 40px 20px;\n  background-color: #f0d7b4;\n  border-radius: 0 0 35px 35px;\n}\n.welcome-section .icon-circle {\n  width: 60px;\n  height: 60px;\n  background: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 15px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n.welcome-section .icon-circle i {\n  font-size: 1.5rem;\n  color: #b3b5e6;\n}\n.welcome-section h1 {\n  font-weight: 800;\n  font-size: 1.8rem;\n  color: #333;\n}\n.welcome-section p {\n  color: #666;\n  font-size: 1rem;\n}\n.survey-card {\n  background: white;\n  border-radius: 25px;\n  padding: 25px;\n  box-shadow: 0 10px 30px rgba(179, 181, 230, 0.15);\n  border: 1px solid rgba(179, 181, 230, 0.1);\n}\n.survey-card .card-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 15px;\n  margin-bottom: 20px;\n}\n.survey-card .card-header .step-number {\n  background: #b3b5e6;\n  color: white;\n  width: 32px;\n  height: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 0.9rem;\n}\n.survey-card .card-header h3 {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin: 0;\n  color: #444;\n}\n.stars-container {\n  display: flex;\n  justify-content: space-around;\n  padding: 10px 0;\n}\n.stars-container .star-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transition: transform 0.3s ease;\n  cursor: pointer;\n}\n.stars-container .star-item.active {\n  transform: scale(1.2);\n}\n.stars-container .star-item .star-img {\n  width: 50px;\n  height: 50px;\n}\n.stars-container .star-item .star-label {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #b3b5e6;\n  margin-top: 5px;\n  text-transform: uppercase;\n}\n.aspects-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.aspects-grid .aspect-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 18px;\n  background: #fdfdfd;\n  border-radius: 15px;\n  border: 1px solid #eee;\n}\n.aspects-grid .aspect-item .aspect-name {\n  margin: 0;\n  font-weight: 600;\n  color: #555;\n  font-size: 0.95rem;\n}\n.aspects-grid .aspect-item .toggle-buttons {\n  display: flex;\n  gap: 10px;\n}\n.aspects-grid .aspect-item .toggle-buttons .btn-toggle {\n  border: none;\n  background: #eee;\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  color: #999;\n  transition: all 0.2s;\n}\n.aspects-grid .aspect-item .toggle-buttons .btn-toggle.active.pos {\n  background: #b7e0b4;\n  color: white;\n}\n.aspects-grid .aspect-item .toggle-buttons .btn-toggle.active.neg {\n  background: #ffb7b7;\n  color: white;\n}\n.textArea {\n  border: 2px solid #f0f0f0;\n  border-radius: 20px;\n  padding: 15px;\n  font-size: 0.95rem;\n}\n.textArea:focus {\n  border-color: #b3b5e6;\n  box-shadow: none;\n}\n.btn-send {\n  background: #b3b5e6;\n  color: white;\n  border: none;\n  padding: 15px 40px;\n  border-radius: 50px;\n  font-weight: 800;\n  font-size: 1.1rem;\n  box-shadow: 0 8px 20px rgba(179, 181, 230, 0.4);\n  transition: all 0.3s;\n}\n.btn-send:disabled {\n  opacity: 0.5;\n  filter: grayscale(1);\n}\n.btn-send:active {\n  transform: scale(0.95);\n}\n.btn-back {\n  background: transparent;\n  border: 2px solid #b3b5e6;\n  color: #b3b5e6;\n  padding: 14px 25px;\n  border-radius: 50px;\n  font-weight: 700;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.btn-back:active {\n  background: rgba(179, 181, 230, 0.1);\n  transform: scale(0.95);\n}\n.actions-wrapper {\n  padding: 0 20px;\n}\n@media (max-width: 400px) {\n  .actions-wrapper {\n    flex-direction: column-reverse;\n    width: 100%;\n  }\n  .actions-wrapper .btn-back,\n  .actions-wrapper .btn-send {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=encuesta-satisfaccion.page.css.map */\n"] }]
  }], () => [{ type: MatDialog }, { type: NavController }, { type: FormBuilder }, { type: EncuestaService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EncuestaSatisfaccionPage, { className: "EncuestaSatisfaccionPage", filePath: "src/app/pages/encuesta-satisfaccion/encuesta-satisfaccion.page.ts", lineNumber: 57 });
})();
export {
  EncuestaSatisfaccionPage
};
//# sourceMappingURL=encuesta-satisfaccion.page-4P6H73Y4.js.map
