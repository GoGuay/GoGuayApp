import {
  IncidenciasService
} from "./chunk-XVLCLCLR.js";
import {
  addIcons,
  closeOutline,
  cloudUploadOutline,
  warningOutline
} from "./chunk-TDPVVR7R.js";
import {
  SpinnerComponent
} from "./chunk-NNKIWL44.js";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonToolbar,
  IonicModule,
  ModalController
} from "./chunk-V5JFS32A.js";
import {
  TranslateModule
} from "./chunk-ULJI5CAD.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-XCBA4FSK.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  firstValueFrom,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4LZZ5H7X.js";
import {
  __async
} from "./chunk-MP5LG4CB.js";

// src/app/components/abrir-incidencia-modal/abrir-incidencia-modal.component.ts
function AbrirIncidenciaModalComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Viaje #", ctx_r1.viajeId);
  }
}
function AbrirIncidenciaModalComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    \u0275\u0275property("value", opt_r3.valor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r3.etiqueta, " ");
  }
}
function AbrirIncidenciaModalComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, "Escribe un t\xEDtulo corto explicativo.");
    \u0275\u0275elementEnd();
  }
}
function AbrirIncidenciaModalComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, "Describe lo sucedido con al menos 15 caracteres.");
    \u0275\u0275elementEnd();
  }
}
function AbrirIncidenciaModalComponent_Conditional_46_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-icon", 33);
    \u0275\u0275listener("click", function AbrirIncidenciaModalComponent_Conditional_46_For_2_Template_ion_icon_click_3_listener() {
      const \u0275$index_91_r6 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.eliminarAdjunto(\u0275$index_91_r6));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", file_r7.name, " ");
  }
}
function AbrirIncidenciaModalComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275repeaterCreate(1, AbrirIncidenciaModalComponent_Conditional_46_For_2_Template, 4, 1, "div", 31, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.archivosAdjuntos);
  }
}
function AbrirIncidenciaModalComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Enviar Incidencia");
    \u0275\u0275elementEnd();
  }
}
function AbrirIncidenciaModalComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner");
  }
}
var AbrirIncidenciaModalComponent = class _AbrirIncidenciaModalComponent {
  modalCtrl;
  incidenciasService;
  categoria = "APP";
  subcategoriaPredeterminada = "ERROR_TECNICO_GENERAL";
  viajeId = null;
  usuarioReportadoId = null;
  tituloContexto = "Reportar Incidencia";
  incidenciaForm;
  enviando = false;
  archivosAdjuntos = [];
  subcategoriasDisponibles = [];
  constructor(modalCtrl, incidenciasService) {
    this.modalCtrl = modalCtrl;
    this.incidenciasService = incidenciasService;
    addIcons({ warningOutline, closeOutline, cloudUploadOutline });
  }
  ngOnInit() {
    this.configurarSubcategorias();
    this.incidenciaForm = new FormGroup({
      subcategoria: new FormControl(this.subcategoriaPredeterminada, [Validators.required]),
      resumen: new FormControl("", [Validators.required, Validators.maxLength(100)]),
      descripcion: new FormControl("", [Validators.required, Validators.minLength(15)])
    });
  }
  configurarSubcategorias() {
    if (this.categoria === "USUARIO") {
      this.subcategoriasDisponibles = [
        { valor: "COMPORTAMIENTO", etiqueta: "Comportamiento inapropiado" },
        { valor: "VIAJE_PRESENCIA_UBICACION", etiqueta: "No presentado / Punto de encuentro" },
        { valor: "OTRO", etiqueta: "Otro motivo sobre usuario" }
      ];
    } else {
      this.subcategoriasDisponibles = [
        { valor: "CREACION_VIAJE", etiqueta: "Error al crear/publicar viaje" },
        { valor: "PAGO", etiqueta: "Problemas con pagos o monedero" },
        { valor: "ERROR_TECNICO_GENERAL", etiqueta: "Fallo t\xE9cnico general" },
        { valor: "OTRO", etiqueta: "Otras consultas" }
      ];
    }
  }
  /**
   * Captura los archivos seleccionados por el usuario (máximo 3)
   */
  onFileSelected(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      const filesArray = Array.from(input.files);
      for (const file of filesArray) {
        if (this.archivosAdjuntos.length < 3) {
          this.archivosAdjuntos.push(file);
        }
      }
    }
  }
  /**
   * Elimina un archivo de la lista de adjuntos locales
   */
  eliminarAdjunto(index) {
    this.archivosAdjuntos.splice(index, 1);
  }
  enviarIncidencia() {
    var _a;
    if (this.incidenciaForm.invalid) {
      this.incidenciaForm.markAllAsTouched();
      return;
    }
    this.enviando = true;
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    const usuarioRemitenteId = (_a = userData == null ? void 0 : userData.usuario) == null ? void 0 : _a.id;
    const payload = {
      categoria: this.categoria,
      subcategoria: this.incidenciaForm.value.subcategoria,
      tipo_apertura: "USUARIO",
      usuario_remitente_id: usuarioRemitenteId,
      usuario_reportado_id: this.usuarioReportadoId || null,
      viaje_id: this.viajeId || null,
      resumen: this.incidenciaForm.value.resumen,
      descripcion: this.incidenciaForm.value.descripcion
    };
    this.incidenciasService.crearIncidencia(payload).subscribe({
      next: (res) => {
        if (this.archivosAdjuntos.length > 0 && (res == null ? void 0 : res.id)) {
          this.subirAdjuntosPendientes(res.id);
        } else {
          this.enviando = false;
          this.modalCtrl.dismiss({ enviada: true, incidencia: res }, "confirm");
        }
      },
      error: (err) => {
        console.error("Error guardando incidencia:", err);
        this.enviando = false;
      }
    });
  }
  subirAdjuntosPendientes(incidenciaId) {
    return __async(this, null, function* () {
      try {
        const uploads = this.archivosAdjuntos.map((file) => firstValueFrom(this.incidenciasService.subirAdjunto(incidenciaId, file)));
        yield Promise.all(uploads);
      } catch (error) {
        console.error("Error al subir adjuntos:", error);
      } finally {
        this.enviando = false;
        this.modalCtrl.dismiss({ enviada: true }, "confirm");
      }
    });
  }
  cerrarModal() {
    this.modalCtrl.dismiss(null, "cancel");
  }
  static \u0275fac = function AbrirIncidenciaModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbrirIncidenciaModalComponent)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(IncidenciasService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AbrirIncidenciaModalComponent, selectors: [["app-abrir-incidencia-modal"]], inputs: { categoria: "categoria", subcategoriaPredeterminada: "subcategoriaPredeterminada", viajeId: "viajeId", usuarioReportadoId: "usuarioReportadoId", tituloContexto: "tituloContexto" }, decls: 50, vars: 10, consts: [["fileInput", ""], [1, "ion-no-border"], [1, "modal-toolbar"], [1, "d-flex", "align-items-center", "justify-content-between", "px-3", "py-2"], [1, "d-flex", "align-items-center", "gap-2"], [1, "icon-warning-bubble"], ["name", "warning-outline"], [1, "fw-bold", "m-0", "modal-title"], [1, "text-muted", "xsmall", "m-0"], ["fill", "clear", "color", "dark", 1, "btn-close-modal", 3, "click"], ["name", "close-outline", "slot", "icon-only"], [1, "modal-incidencia-content", "ion-padding"], [3, "ngSubmit", "formGroup"], [1, "context-pill", "mb-3"], [1, "text-muted", "small"], [1, "badge-cat", "ms-1"], [1, "badge-viaje", "ms-1"], [1, "form-group", "mb-3"], [1, "form-label-custom"], ["formControlName", "subcategoria", 1, "form-select", "custom-select-goguay"], [3, "value"], ["type", "text", "formControlName", "resumen", "placeholder", "Ej: Error al pulsar el bot\xF3n de crear viaje", "maxlength", "100", 1, "form-control", "custom-input-goguay"], [1, "text-danger", "xsmall", "mt-1"], ["formControlName", "descripcion", "rows", "4", "placeholder", "Explica detalladamente la situaci\xF3n para que podamos ayudarte lo antes posible...", 1, "form-control", "custom-textarea-goguay"], [1, "form-group", "mb-4"], [1, "upload-zone", "text-center", "p-3", "rounded-4", "cursor-pointer", 3, "click"], ["name", "cloud-upload-outline", 1, "fs-3", "text-muted", "mb-1"], [1, "small", "m-0", "text-muted"], ["type", "file", "accept", "image/*", "multiple", "", 1, "d-none", 3, "change"], [1, "mt-2", "d-flex", "flex-wrap", "gap-2"], ["type", "submit", 1, "btn-submit-incidencia", "w-100", 3, "disabled"], [1, "attachment-chip", "px-2", "py-1", "rounded-pill", "bg-white", "border", "d-flex", "align-items-center", "gap-1", "small"], [1, "text-truncate", 2, "max-width", "140px"], ["name", "close-outline", 1, "cursor-pointer", "text-danger", 3, "click"]], template: function AbrirIncidenciaModalComponent_Template(rf, ctx) {
    var _a, _b, _c, _d;
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "ion-header", 1)(1, "ion-toolbar", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
      \u0275\u0275element(5, "ion-icon", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div")(7, "h3", 7);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 8);
      \u0275\u0275text(10, "GoGuay Soporte");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "ion-button", 9);
      \u0275\u0275listener("click", function AbrirIncidenciaModalComponent_Template_ion_button_click_11_listener() {
        return ctx.cerrarModal();
      });
      \u0275\u0275element(12, "ion-icon", 10);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "ion-content", 11)(14, "form", 12);
      \u0275\u0275listener("ngSubmit", function AbrirIncidenciaModalComponent_Template_form_ngSubmit_14_listener() {
        return ctx.enviarIncidencia();
      });
      \u0275\u0275elementStart(15, "div", 13)(16, "span", 14);
      \u0275\u0275text(17, "Categor\xEDa:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 15);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(20, AbrirIncidenciaModalComponent_Conditional_20_Template, 2, 1, "span", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 17)(22, "label", 18);
      \u0275\u0275text(23, "Motivo o tipo de problema");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "select", 19);
      \u0275\u0275controlCreate();
      \u0275\u0275repeaterCreate(25, AbrirIncidenciaModalComponent_For_26_Template, 2, 2, "option", 20, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 17)(28, "label", 18);
      \u0275\u0275text(29, "T\xEDtulo o resumen breve");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "input", 21);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(31, AbrirIncidenciaModalComponent_Conditional_31_Template, 2, 0, "div", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 17)(33, "label", 18);
      \u0275\u0275text(34, "Detalla lo que ha ocurrido");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "textarea", 23);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(36, AbrirIncidenciaModalComponent_Conditional_36_Template, 2, 0, "div", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 24)(38, "label", 18);
      \u0275\u0275text(39, "Capturas o comprobantes (opcional)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 25);
      \u0275\u0275listener("click", function AbrirIncidenciaModalComponent_Template_div_click_40_listener() {
        \u0275\u0275restoreView(_r1);
        const fileInput_r4 = \u0275\u0275reference(45);
        return \u0275\u0275resetView(fileInput_r4.click());
      });
      \u0275\u0275element(41, "ion-icon", 26);
      \u0275\u0275elementStart(42, "p", 27);
      \u0275\u0275text(43, "Haz clic para adjuntar im\xE1genes (M\xE1x 3)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "input", 28, 0);
      \u0275\u0275listener("change", function AbrirIncidenciaModalComponent_Template_input_change_44_listener($event) {
        return ctx.onFileSelected($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(46, AbrirIncidenciaModalComponent_Conditional_46_Template, 3, 0, "div", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "button", 30);
      \u0275\u0275conditionalCreate(48, AbrirIncidenciaModalComponent_Conditional_48_Template, 2, 0, "span");
      \u0275\u0275conditionalCreate(49, AbrirIncidenciaModalComponent_Conditional_49_Template, 1, 0, "app-spinner");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.tituloContexto);
      \u0275\u0275advance(6);
      \u0275\u0275property("formGroup", ctx.incidenciaForm);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.categoria);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.viajeId ? 20 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.subcategoriasDisponibles);
      \u0275\u0275advance(5);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(((_a = ctx.incidenciaForm.get("resumen")) == null ? void 0 : _a.touched) && ((_b = ctx.incidenciaForm.get("resumen")) == null ? void 0 : _b.invalid) ? 31 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(((_c = ctx.incidenciaForm.get("descripcion")) == null ? void 0 : _c.touched) && ((_d = ctx.incidenciaForm.get("descripcion")) == null ? void 0 : _d.invalid) ? 36 : -1);
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.archivosAdjuntos.length > 0 ? 46 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.enviando || ctx.incidenciaForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.enviando ? 48 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.enviando ? 49 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, IonicModule, IonButton, IonContent, IonHeader, IonIcon, IonToolbar, TranslateModule, SpinnerComponent], styles: ["\n.modal-toolbar[_ngcontent-%COMP%] {\n  --%NS%background: #ffffff;\n}\n.modal-incidencia-content[_ngcontent-%COMP%] {\n  --%NS%background: #E9EDD5 !important;\n}\n.icon-warning-bubble[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background-color: #F8E196;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-warning-bubble[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #2c2c2c;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #2c2c2c;\n}\n.context-pill[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 8px 16px;\n  border-radius: 20px;\n  display: inline-flex;\n  align-items: center;\n}\n.context-pill[_ngcontent-%COMP%]   .badge-cat[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #2c2c2c;\n  background: #F0D7B4;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n}\n.context-pill[_ngcontent-%COMP%]   .badge-viaje[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #ffffff;\n  background: #b3b5e6;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n}\n.form-label-custom[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #444;\n  margin-bottom: 4px;\n  display: block;\n}\n.custom-select-goguay[_ngcontent-%COMP%], \n.custom-input-goguay[_ngcontent-%COMP%], \n.custom-textarea-goguay[_ngcontent-%COMP%] {\n  border-radius: 20px !important;\n  border: 1.5px solid #e2e8f0;\n  padding: 10px 14px;\n  font-size: 0.9rem;\n  background: #ffffff;\n}\n.custom-select-goguay[_ngcontent-%COMP%]:focus, \n.custom-input-goguay[_ngcontent-%COMP%]:focus, \n.custom-textarea-goguay[_ngcontent-%COMP%]:focus {\n  border-color: #b3b5e6;\n  box-shadow: 0 0 0 3px rgba(179, 181, 230, 0.25);\n  outline: none;\n}\n.custom-textarea-goguay[_ngcontent-%COMP%] {\n  border-radius: 20px !important;\n}\n.upload-zone[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 2px dashed #b3b5e6;\n  transition: all 0.2s ease;\n}\n.upload-zone[_ngcontent-%COMP%]:hover {\n  background: #f8f9ff;\n}\n.btn-submit-incidencia[_ngcontent-%COMP%] {\n  background: #b3b5e6;\n  color: #ffffff;\n  font-weight: 700;\n  padding: 14px;\n  border-radius: 35px;\n  border: none;\n  box-shadow: 0 6px 18px rgba(179, 181, 230, 0.4);\n  transition: all 0.25s ease;\n}\n.btn-submit-incidencia[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background: #9d9fe0;\n  transform: translateY(-2px);\n}\n.btn-submit-incidencia[disabled][_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.xsmall[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=abrir-incidencia-modal.component.css.map */"], changeDetection: 1 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbrirIncidenciaModalComponent, [{
    type: Component,
    args: [{ selector: "app-abrir-incidencia-modal", standalone: true, changeDetection: ChangeDetectionStrategy.Eager, imports: [ReactiveFormsModule, IonicModule, TranslateModule, SpinnerComponent], template: `<ion-header class="ion-no-border">
  <ion-toolbar class="modal-toolbar">
    <div class="d-flex align-items-center justify-content-between px-3 py-2">
      <div class="d-flex align-items-center gap-2">
        <div class="icon-warning-bubble">
          <ion-icon name="warning-outline"></ion-icon>
        </div>
        <div>
          <h3 class="fw-bold m-0 modal-title">{{ tituloContexto }}</h3>
          <p class="text-muted xsmall m-0">GoGuay Soporte</p>
        </div>
      </div>
      <ion-button
        fill="clear"
        color="dark"
        (click)="cerrarModal()"
        class="btn-close-modal"
      >
        <ion-icon
          name="close-outline"
          slot="icon-only"
        ></ion-icon>
      </ion-button>
    </div>
  </ion-toolbar>
</ion-header>

<ion-content class="modal-incidencia-content ion-padding">
  <form
    [formGroup]="incidenciaForm"
    (ngSubmit)="enviarIncidencia()"
  >
    <!-- Categor\xEDa -->
    <div class="context-pill mb-3">
      <span class="text-muted small">Categor\xEDa:</span>
      <span class="badge-cat ms-1">{{ categoria }}</span>
      @if (viajeId) {
        <span class="badge-viaje ms-1">Viaje #{{ viajeId }}</span>
      }
    </div>

    <!-- Motivo -->
    <div class="form-group mb-3">
      <label class="form-label-custom">Motivo o tipo de problema</label>
      <select
        formControlName="subcategoria"
        class="form-select custom-select-goguay"
      >
        @for (opt of subcategoriasDisponibles; track opt) {
          <option [value]="opt.valor">
            {{ opt.etiqueta }}
          </option>
        }
      </select>
    </div>

    <!-- Resumen -->
    <div class="form-group mb-3">
      <label class="form-label-custom">T\xEDtulo o resumen breve</label>
      <input
        type="text"
        formControlName="resumen"
        class="form-control custom-input-goguay"
        placeholder="Ej: Error al pulsar el bot\xF3n de crear viaje"
        maxlength="100"
      />
      @if (incidenciaForm.get('resumen')?.touched && incidenciaForm.get('resumen')?.invalid) {
        <div class="text-danger xsmall mt-1">Escribe un t\xEDtulo corto explicativo.</div>
      }
    </div>

    <!-- Descripci\xF3n -->
    <div class="form-group mb-3">
      <label class="form-label-custom">Detalla lo que ha ocurrido</label>
      <textarea
        formControlName="descripcion"
        rows="4"
        class="form-control custom-textarea-goguay"
        placeholder="Explica detalladamente la situaci\xF3n para que podamos ayudarte lo antes posible..."
      ></textarea>
      @if (incidenciaForm.get('descripcion')?.touched && incidenciaForm.get('descripcion')?.invalid) {
        <div class="text-danger xsmall mt-1">Describe lo sucedido con al menos 15 caracteres.</div>
      }
    </div>

    <!-- Adjuntos -->
    <div class="form-group mb-4">
      <label class="form-label-custom">Capturas o comprobantes (opcional)</label>
      <div
        class="upload-zone text-center p-3 rounded-4 cursor-pointer"
        (click)="fileInput.click()"
      >
        <ion-icon
          name="cloud-upload-outline"
          class="fs-3 text-muted mb-1"
        ></ion-icon>
        <p class="small m-0 text-muted">Haz clic para adjuntar im\xE1genes (M\xE1x 3)</p>
        <input
          #fileInput
          type="file"
          (change)="onFileSelected($event)"
          accept="image/*"
          class="d-none"
          multiple
        />
      </div>

      <!-- Lista de archivos seleccionados -->
      @if (archivosAdjuntos.length > 0) {
        <div class="mt-2 d-flex flex-wrap gap-2">
          @for (file of archivosAdjuntos; track file; let idx = $index) {
            <div class="attachment-chip px-2 py-1 rounded-pill bg-white border d-flex align-items-center gap-1 small">
              <span
                class="text-truncate"
                style="max-width: 140px"
              >
                {{ file.name }}
              </span>
              <ion-icon
                name="close-outline"
                class="cursor-pointer text-danger"
                (click)="eliminarAdjunto(idx)"
              ></ion-icon>
            </div>
          }
        </div>
      }
    </div>

    <!-- Bot\xF3n de Env\xEDo -->
    <button
      type="submit"
      class="btn-submit-incidencia w-100"
      [disabled]="enviando || incidenciaForm.invalid"
    >
      @if (!enviando) {
        <span>Enviar Incidencia</span>
      }
      @if (enviando) {
        <app-spinner></app-spinner>
      }
    </button>
  </form>
</ion-content>
`, styles: ["/* src/app/components/abrir-incidencia-modal/abrir-incidencia-modal.component.scss */\n.modal-toolbar {\n  --background: #ffffff;\n}\n.modal-incidencia-content {\n  --background: #E9EDD5 !important;\n}\n.icon-warning-bubble {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background-color: #F8E196;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-warning-bubble ion-icon {\n  font-size: 20px;\n  color: #2c2c2c;\n}\n.modal-title {\n  font-size: 1.1rem;\n  color: #2c2c2c;\n}\n.context-pill {\n  background: #ffffff;\n  padding: 8px 16px;\n  border-radius: 20px;\n  display: inline-flex;\n  align-items: center;\n}\n.context-pill .badge-cat {\n  font-weight: 700;\n  color: #2c2c2c;\n  background: #F0D7B4;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n}\n.context-pill .badge-viaje {\n  font-weight: 700;\n  color: #ffffff;\n  background: #b3b5e6;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n}\n.form-label-custom {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #444;\n  margin-bottom: 4px;\n  display: block;\n}\n.custom-select-goguay,\n.custom-input-goguay,\n.custom-textarea-goguay {\n  border-radius: 20px !important;\n  border: 1.5px solid #e2e8f0;\n  padding: 10px 14px;\n  font-size: 0.9rem;\n  background: #ffffff;\n}\n.custom-select-goguay:focus,\n.custom-input-goguay:focus,\n.custom-textarea-goguay:focus {\n  border-color: #b3b5e6;\n  box-shadow: 0 0 0 3px rgba(179, 181, 230, 0.25);\n  outline: none;\n}\n.custom-textarea-goguay {\n  border-radius: 20px !important;\n}\n.upload-zone {\n  background: #ffffff;\n  border: 2px dashed #b3b5e6;\n  transition: all 0.2s ease;\n}\n.upload-zone:hover {\n  background: #f8f9ff;\n}\n.btn-submit-incidencia {\n  background: #b3b5e6;\n  color: #ffffff;\n  font-weight: 700;\n  padding: 14px;\n  border-radius: 35px;\n  border: none;\n  box-shadow: 0 6px 18px rgba(179, 181, 230, 0.4);\n  transition: all 0.25s ease;\n}\n.btn-submit-incidencia:hover:not([disabled]) {\n  background: #9d9fe0;\n  transform: translateY(-2px);\n}\n.btn-submit-incidencia[disabled] {\n  opacity: 0.6;\n}\n.xsmall {\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=abrir-incidencia-modal.component.css.map */\n"] }]
  }], () => [{ type: ModalController }, { type: IncidenciasService }], { categoria: [{
    type: Input
  }], subcategoriaPredeterminada: [{
    type: Input
  }], viajeId: [{
    type: Input
  }], usuarioReportadoId: [{
    type: Input
  }], tituloContexto: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AbrirIncidenciaModalComponent, { className: "AbrirIncidenciaModalComponent", filePath: "src/app/components/abrir-incidencia-modal/abrir-incidencia-modal.component.ts", lineNumber: 25 });
})();

export {
  AbrirIncidenciaModalComponent
};
//# debugId=2e06684a-054b-52e7-9fe3-4eb9ca1a057e
//# sourceMappingURL=chunk-TWC6M6CU.js.map
