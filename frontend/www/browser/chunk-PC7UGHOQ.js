import {
  MatTooltipModule
} from "./chunk-WLZS6EII.js";
import {
  MatTooltip
} from "./chunk-MY5ZJ3MY.js";
import {
  IonContent,
  IonPopover,
  IonicModule
} from "./chunk-V5JFS32A.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-ULJI5CAD.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-XCBA4FSK.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
  forwardRef,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-4LZZ5H7X.js";

// src/app/components/selector-general/selector-general.component.ts
var _c0 = ["popover"];
var _c1 = ["inputRef"];
function SelectorGeneralComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "i", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, ctx_r0.tooltipKey));
  }
}
function SelectorGeneralComponent_Conditional_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.popoverKey));
  }
}
function SelectorGeneralComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-popover", 11, 1);
    \u0275\u0275listener("didDismiss", function SelectorGeneralComponent_Conditional_6_Template_ion_popover_didDismiss_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.isOpen = false);
    });
    \u0275\u0275template(2, SelectorGeneralComponent_Conditional_6_ng_template_2_Template, 3, 3, "ng-template");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("isOpen", ctx_r0.isOpen);
  }
}
function SelectorGeneralComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 8);
  }
}
function SelectorGeneralComponent_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 14);
    \u0275\u0275listener("mousedown", function SelectorGeneralComponent_Conditional_13_For_2_Template_li_mousedown_0_listener($event) {
      const opcion_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r0.seleccionarOpcion(opcion_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opcion_r4 = ctx.$implicit;
    const \u0275$index_36_r5 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", \u0275$index_36_r5 === ctx_r0.indiceActivo);
    \u0275\u0275property("id", "opcion-" + ctx_r0.idUnico + "-" + \u0275$index_36_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.obtenerTextoOpcion(opcion_r4), " ");
  }
}
function SelectorGeneralComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 9);
    \u0275\u0275repeaterCreate(1, SelectorGeneralComponent_Conditional_13_For_2_Template, 2, 4, "li", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("id", "lista-sugerencias-" + ctx_r0.idUnico);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.sugerencias);
  }
}
var SelectorGeneralComponent = class _SelectorGeneralComponent {
  cdr;
  elementRef;
  translate;
  popover;
  inputRef;
  idUnico = "selector";
  labelKey = "";
  placeholderKey = "";
  tooltipKey = "";
  popoverKey = "";
  soloLectura = false;
  opciones = [];
  valor = "";
  ariaLabel = "";
  mostrarFlechaSelector = true;
  iconoPath = "";
  permitirTextoLibre = false;
  seleccionCambiada = new EventEmitter();
  alAbrir = new EventEmitter();
  textoCambiado = new EventEmitter();
  sugerencias = [];
  estaActivo = false;
  indiceActivo = -1;
  valorTexto = "";
  valorGuardadoActual = null;
  seleccionandoOpcionEnProceso = false;
  _valorValidoPrevio = "";
  onChange = (val) => {
  };
  onTouched = () => {
  };
  isOpen = false;
  isDesktop = window.innerWidth >= 992;
  ngOnInit() {
    if (this.valor !== void 0 && this.valor !== null && this.valor !== "") {
      this.writeValue(this.valor);
    }
    this.translate.onLangChange.subscribe(() => {
      this.actualizarTextoVisual();
    });
  }
  constructor(cdr, elementRef, translate) {
    this.cdr = cdr;
    this.elementRef = elementRef;
    this.translate = translate;
    window.addEventListener("resize", () => {
      this.isDesktop = window.innerWidth >= 992;
    });
  }
  onDocumentClick(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.estaActivo = false;
      this.sugerencias = [];
    }
  }
  ngOnChanges(changes) {
    var _a;
    if (changes["valor"] && !changes["valor"].firstChange) {
      this.writeValue(this.valor);
    }
    if (changes["opciones"] && ((_a = this.opciones) == null ? void 0 : _a.length) > 0) {
      if (!this.estaActivo) {
        this.actualizarTextoVisual();
      } else {
        this.sugerencias = [...this.opciones];
      }
    }
  }
  writeValue(value) {
    if (value !== void 0 && value !== null && value !== "") {
      this.valorGuardadoActual = value;
      this.actualizarTextoVisual();
    } else {
      this.valorGuardadoActual = null;
      this.valorTexto = "";
      this._valorValidoPrevio = "";
      this.cdr.detectChanges();
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  seleccionarOpcion(opcion) {
    this.seleccionandoOpcionEnProceso = true;
    const textoSeleccionado = this.obtenerTextoOpcion(opcion);
    this.valorTexto = textoSeleccionado;
    this._valorValidoPrevio = textoSeleccionado;
    const valorParaGuardar = typeof opcion === "string" ? opcion : opcion.valor !== void 0 ? opcion.valor : textoSeleccionado;
    this.valorGuardadoActual = valorParaGuardar;
    this.onChange(valorParaGuardar);
    this.seleccionCambiada.emit(opcion);
    this.sugerencias = [];
    this.estaActivo = false;
    this.indiceActivo = -1;
    setTimeout(() => {
      this.seleccionandoOpcionEnProceso = false;
    }, 400);
    if (this.inputRef && this.inputRef.nativeElement) {
      setTimeout(() => {
        this.enfocarSiguienteElemento(this.inputRef.nativeElement);
      }, 50);
    }
    this.cdr.detectChanges();
  }
  enfocarSiguienteElemento(elementoActual) {
    const focusableElements = Array.from(document.querySelectorAll('input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'));
    const index = focusableElements.indexOf(elementoActual);
    if (index > -1 && index + 1 < focusableElements.length) {
      focusableElements[index + 1].focus();
    } else {
      elementoActual.blur();
    }
  }
  filtrarOpciones(event) {
    const texto = event.target.value;
    this.valorTexto = texto;
    if (this.permitirTextoLibre) {
      this.onChange(texto);
      this.seleccionCambiada.emit(texto);
    }
    this.textoCambiado.emit(texto);
    this.estaActivo = true;
    this.indiceActivo = -1;
    this.alAbrir.emit();
    if (!texto.trim()) {
      this.sugerencias = [...this.opciones];
      return;
    }
    const filtro = texto.toLowerCase();
    this.sugerencias = this.opciones.filter((op) => this.obtenerTextoOpcion(op).toLowerCase().includes(filtro));
  }
  manejarNavegacionTeclado(event) {
    if (event.key === "Tab") {
      this.sugerencias = [];
      this.estaActivo = false;
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!this.estaActivo) {
        this.abrirSelector();
      } else if (this.sugerencias.length > 0) {
        this.indiceActivo = (this.indiceActivo + 1) % this.sugerencias.length;
        this.asegurarVisibilidadScroll();
      }
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (this.sugerencias.length > 0) {
        this.indiceActivo = (this.indiceActivo - 1 + this.sugerencias.length) % this.sugerencias.length;
        this.asegurarVisibilidadScroll();
      }
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (this.estaActivo && this.indiceActivo >= 0 && this.sugerencias[this.indiceActivo]) {
        this.seleccionarOpcion(this.sugerencias[this.indiceActivo]);
      }
    } else if (event.key === "Escape") {
      this.sugerencias = [];
      this.estaActivo = false;
    }
  }
  onInputBlur() {
    if (this.seleccionandoOpcionEnProceso) {
      return;
    }
    this.estaActivo = false;
    this.sugerencias = [];
    this.indiceActivo = -1;
    if (!this.permitirTextoLibre) {
      const textoEscrito = this.valorTexto ? this.valorTexto.trim() : "";
      if (textoEscrito === "") {
        this.valorGuardadoActual = null;
        this._valorValidoPrevio = "";
        this.valorTexto = "";
        this.onChange("");
        this.seleccionCambiada.emit(null);
        this.textoCambiado.emit("");
      } else {
        const opcionEnSugerencias = this.opciones.find((op) => this.obtenerTextoOpcion(op).toLowerCase() === textoEscrito.toLowerCase());
        if (opcionEnSugerencias) {
          this.seleccionarOpcion(opcionEnSugerencias);
        } else {
          this.valorTexto = this._valorValidoPrevio;
          if (this.inputRef && this.inputRef.nativeElement) {
            this.inputRef.nativeElement.value = this._valorValidoPrevio;
          }
          this.onChange(this.valorGuardadoActual);
          this.textoCambiado.emit(this._valorValidoPrevio);
        }
      }
    }
    this.cdr.detectChanges();
    this.onTouched();
  }
  manejarClickInput() {
    if (this.soloLectura) {
      if (this.estaActivo) {
        this.estaActivo = false;
        this.sugerencias = [];
      } else {
        this.abrirSelector();
      }
    }
  }
  asegurarVisibilidadScroll() {
    setTimeout(() => {
      const elementoActivo = document.getElementById(`sugerencia-${this.idUnico}-${this.indiceActivo}`);
      if (elementoActivo) {
        elementoActivo.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    });
  }
  obtenerTextoOpcion(opcion) {
    if (typeof opcion === "string")
      return opcion;
    if (!opcion)
      return "";
    const desc = opcion.descripcion || opcion.nombre || opcion.valor || "";
    const textoStr = String(desc);
    return textoStr.includes(".") ? this.translate.instant(textoStr) : textoStr;
  }
  presentPopover(event) {
    if (!this.isDesktop && this.popoverKey) {
      event.stopPropagation();
      this.isOpen = true;
    }
  }
  abrirSelector() {
    this.sugerencias = [...this.opciones];
    this.estaActivo = true;
    this.indiceActivo = -1;
    this.alAbrir.emit();
  }
  actualizarTextoVisual() {
    if (!this.valorGuardadoActual) {
      this.valorTexto = "";
      this._valorValidoPrevio = "";
      this.cdr.detectChanges();
      return;
    }
    if (!this.opciones || this.opciones.length === 0) {
      const textoFallback = typeof this.valorGuardadoActual === "string" ? this.valorGuardadoActual : "";
      this.valorTexto = textoFallback;
      this._valorValidoPrevio = textoFallback;
      this.cdr.detectChanges();
      return;
    }
    const opcionEncontrada = this.opciones.find((op) => (typeof op === "string" ? op : op.valor || op.descripcion || op.nombre) === this.valorGuardadoActual);
    if (opcionEncontrada) {
      this.valorTexto = this.obtenerTextoOpcion(opcionEncontrada);
    } else {
      this.valorTexto = typeof this.valorGuardadoActual === "string" ? this.valorGuardadoActual : "";
    }
    this._valorValidoPrevio = this.valorTexto;
    if (this.inputRef && this.inputRef.nativeElement) {
      this.inputRef.nativeElement.value = this.valorTexto;
    }
    this.cdr.detectChanges();
  }
  static \u0275fac = function SelectorGeneralComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectorGeneralComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(TranslateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectorGeneralComponent, selectors: [["app-selector-general"]], viewQuery: function SelectorGeneralComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5)(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.popover = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputRef = _t.first);
    }
  }, hostBindings: function SelectorGeneralComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function SelectorGeneralComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, \u0275\u0275resolveDocument);
    }
  }, inputs: { idUnico: "idUnico", labelKey: "labelKey", placeholderKey: "placeholderKey", tooltipKey: "tooltipKey", popoverKey: "popoverKey", soloLectura: "soloLectura", opciones: "opciones", valor: "valor", ariaLabel: "ariaLabel", mostrarFlechaSelector: "mostrarFlechaSelector", iconoPath: "iconoPath", permitirTextoLibre: "permitirTextoLibre" }, outputs: { seleccionCambiada: "seleccionCambiada", alAbrir: "alAbrir", textoCambiado: "textoCambiado" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _SelectorGeneralComponent),
      multi: true
    }
  ]), \u0275\u0275NgOnChangesFeature], decls: 14, vars: 20, consts: [["inputRef", ""], ["popover", ""], [1, "mb-3"], [1, "form-label", "d-flex", "align-items-center", "gap-2", 3, "for"], ["tabindex", "0", "role", "button", 1, "text-primary", 3, "matTooltip"], [3, "isOpen"], [1, "position-relative", "w-100"], ["type", "text", "autocomplete", "off", "spellcheck", "false", "role", "combobox", "aria-autocomplete", "list", 1, "form-control", "text-start", 2, "cursor", "pointer", 3, "input", "blur", "focusout", "click", "keydown", "id", "value", "placeholder", "readonly"], ["aria-hidden", "true", 1, "bi", "bi-chevron-down", "position-absolute", "text-muted", "flecha_selector"], ["role", "listbox", 1, "list-group", "lista_sugerencias", "position-absolute", "w-100", 2, "z-index", "1000", 3, "id"], ["aria-hidden", "true", 1, "bi-question-circle"], [3, "didDismiss", "isOpen"], [1, "ion-padding"], ["role", "option", "tabindex", "-1", 1, "", 3, "id", "active"], ["role", "option", "tabindex", "-1", 1, "", 3, "mousedown", "id"]], template: function SelectorGeneralComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "label", 3)(2, "span");
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, SelectorGeneralComponent_Conditional_5_Template, 3, 3, "span", 4);
      \u0275\u0275conditionalCreate(6, SelectorGeneralComponent_Conditional_6_Template, 3, 1, "ion-popover", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 6)(8, "input", 7, 0);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275listener("input", function SelectorGeneralComponent_Template_input_input_8_listener($event) {
        return ctx.filtrarOpciones($event);
      })("blur", function SelectorGeneralComponent_Template_input_blur_8_listener() {
        return ctx.onInputBlur();
      })("focusout", function SelectorGeneralComponent_Template_input_focusout_8_listener() {
        return ctx.onInputBlur();
      })("click", function SelectorGeneralComponent_Template_input_click_8_listener() {
        return ctx.manejarClickInput();
      })("keydown", function SelectorGeneralComponent_Template_input_keydown_8_listener($event) {
        return ctx.manejarNavegacionTeclado($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(12, SelectorGeneralComponent_Conditional_12_Template, 1, 0, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(13, SelectorGeneralComponent_Conditional_13_Template, 3, 1, "ul", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("for", "input-" + ctx.idUnico);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 14, ctx.labelKey));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tooltipKey ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isDesktop && ctx.popoverKey ? 6 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("id", "input-" + ctx.idUnico)("value", ctx.valorTexto)("placeholder", \u0275\u0275pipeBind1(10, 16, ctx.placeholderKey))("readonly", ctx.soloLectura);
      \u0275\u0275attribute("aria-expanded", ctx.sugerencias.length > 0 && ctx.estaActivo)("aria-label", ctx.ariaLabel || \u0275\u0275pipeBind1(11, 18, ctx.placeholderKey))("aria-controls", "lista-sugerencias-" + ctx.idUnico)("aria-activedescendant", ctx.indiceActivo >= 0 ? "opcion-" + ctx.idUnico + "-" + ctx.indiceActivo : null);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.mostrarFlechaSelector ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.sugerencias.length > 0 && ctx.estaActivo ? 13 : -1);
    }
  }, dependencies: [TranslateModule, MatTooltipModule, MatTooltip, IonicModule, IonContent, IonPopover, TranslatePipe], styles: ["\n  app-selector-general input, \n  app-selector-general select {\n  border: none !important;\n  box-shadow: none !important;\n  outline: none !important;\n}\ninput[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28) !important;\n}\n.lista_sugerencias[_ngcontent-%COMP%] {\n  position: absolute !important;\n  top: calc(100% + 4px) !important;\n  left: 0 !important;\n  right: 0 !important;\n  width: 100% !important;\n  max-width: 100% !important;\n  max-height: 220px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin: 0 !important;\n  padding: 6px !important;\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0;\n  border-radius: 20px !important;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n  z-index: 1000;\n}\n.lista_sugerencias[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: none !important;\n  border-radius: 12px !important;\n  margin-bottom: 4px;\n  padding: 10px 14px;\n  background-color: transparent;\n  transition: background-color 0.2s ease;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.lista_sugerencias[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover, \n.lista_sugerencias[_ngcontent-%COMP%]   .list-group-item.active[_ngcontent-%COMP%] {\n  background-color: #f0d7b4 !important;\n  color: black !important;\n}\n.lista_sugerencias[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.lista_sugerencias[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n  margin: 8px 0;\n}\n.lista_sugerencias[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.15);\n  border-radius: 10px;\n}\n.position-relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n.position-relative[_ngcontent-%COMP%]   .flecha_selector[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 18px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  font-size: 0.9rem;\n  color: #666663;\n}\n.mb-3.position-relative[_ngcontent-%COMP%], \n.mb-3[_ngcontent-%COMP%] {\n  position: relative !important;\n  width: 100%;\n  max-width: 350px;\n  margin: 0 auto;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100% !important;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=selector-general.component.css.map */"], changeDetection: 1 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectorGeneralComponent, [{
    type: Component,
    args: [{ selector: "app-selector-general", imports: [TranslateModule, MatTooltipModule, IonicModule], changeDetection: ChangeDetectionStrategy.Eager, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SelectorGeneralComponent),
        multi: true
      }
    ], template: `<div class="mb-3">
  <label
    [for]="'input-' + idUnico"
    class="form-label d-flex align-items-center gap-2"
  >
    <span>{{ labelKey | translate }}</span>
    @if (tooltipKey) {
      <span
        tabindex="0"
        class="text-primary"
        role="button"
        [matTooltip]="tooltipKey | translate"
      >
        <i
          class="bi-question-circle"
          aria-hidden="true"
        ></i>
      </span>
    }
    @if (!isDesktop && popoverKey) {
      <ion-popover
        #popover
        [isOpen]="isOpen"
        (didDismiss)="isOpen = false"
      >
        <ng-template>
          <ion-content class="ion-padding">{{ popoverKey | translate }}</ion-content>
        </ng-template>
      </ion-popover>
    }
  </label>

  <div class="position-relative w-100">
    <input
      #inputRef
      [id]="'input-' + idUnico"
      type="text"
      style="cursor: pointer"
      class="form-control text-start"
      [value]="valorTexto"
      (input)="filtrarOpciones($event)"
      (blur)="onInputBlur()"
      (focusout)="onInputBlur()"
      (click)="manejarClickInput()"
      (keydown)="manejarNavegacionTeclado($event)"
      autocomplete="off"
      spellcheck="false"
      [placeholder]="placeholderKey | translate"
      role="combobox"
      aria-autocomplete="list"
      [attr.aria-expanded]="sugerencias.length > 0 && estaActivo"
      [attr.aria-label]="ariaLabel || (placeholderKey | translate)"
      [attr.aria-controls]="'lista-sugerencias-' + idUnico"
      [attr.aria-activedescendant]="indiceActivo >= 0 ? 'opcion-' + idUnico + '-' + indiceActivo : null"
      [readonly]="soloLectura"
    />

    @if (mostrarFlechaSelector) {
      <i
        class="bi bi-chevron-down position-absolute text-muted flecha_selector"
        aria-hidden="true"
      ></i>
    }
  </div>

  <!-- Lista desplegable con scroll integrado -->
  @if (sugerencias.length > 0 && estaActivo) {
    <ul
      [id]="'lista-sugerencias-' + idUnico"
      class="list-group lista_sugerencias position-absolute w-100"
      role="listbox"
      style="z-index: 1000"
    >
      @for (opcion of sugerencias; track opcion; let i = $index) {
        <li
          [id]="'opcion-' + idUnico + '-' + i"
          class=""
          (mousedown)="$event.preventDefault(); seleccionarOpcion(opcion)"
          [class.active]="i === indiceActivo"
          role="option"
          tabindex="-1"
        >
          {{ obtenerTextoOpcion(opcion) }}
        </li>
      }
    </ul>
  }
</div>
`, styles: ["/* src/app/components/selector-general/selector-general.component.scss */\n::ng-deep app-selector-general input,\n::ng-deep app-selector-general select {\n  border: none !important;\n  box-shadow: none !important;\n  outline: none !important;\n}\ninput {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28) !important;\n}\n.lista_sugerencias {\n  position: absolute !important;\n  top: calc(100% + 4px) !important;\n  left: 0 !important;\n  right: 0 !important;\n  width: 100% !important;\n  max-width: 100% !important;\n  max-height: 220px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin: 0 !important;\n  padding: 6px !important;\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0;\n  border-radius: 20px !important;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n  z-index: 1000;\n}\n.lista_sugerencias .list-group-item {\n  cursor: pointer;\n  border: none !important;\n  border-radius: 12px !important;\n  margin-bottom: 4px;\n  padding: 10px 14px;\n  background-color: transparent;\n  transition: background-color 0.2s ease;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.lista_sugerencias .list-group-item:hover,\n.lista_sugerencias .list-group-item.active {\n  background-color: #f0d7b4 !important;\n  color: black !important;\n}\n.lista_sugerencias .list-group-item::-webkit-scrollbar {\n  width: 6px;\n}\n.lista_sugerencias .list-group-item::-webkit-scrollbar-track {\n  background: transparent;\n  margin: 8px 0;\n}\n.lista_sugerencias .list-group-item::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.15);\n  border-radius: 10px;\n}\n.position-relative {\n  position: relative;\n}\n.position-relative .flecha_selector {\n  position: absolute;\n  right: 18px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  font-size: 0.9rem;\n  color: #666663;\n}\n.mb-3.position-relative,\n.mb-3 {\n  position: relative !important;\n  width: 100%;\n  max-width: 350px;\n  margin: 0 auto;\n}\n.form-control {\n  width: 100% !important;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=selector-general.component.css.map */\n"] }]
  }], () => [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: TranslateService }], { popover: [{
    type: ViewChild,
    args: ["popover"]
  }], inputRef: [{
    type: ViewChild,
    args: ["inputRef"]
  }], idUnico: [{
    type: Input
  }], labelKey: [{
    type: Input
  }], placeholderKey: [{
    type: Input
  }], tooltipKey: [{
    type: Input
  }], popoverKey: [{
    type: Input
  }], soloLectura: [{
    type: Input
  }], opciones: [{
    type: Input
  }], valor: [{
    type: Input
  }], ariaLabel: [{
    type: Input
  }], mostrarFlechaSelector: [{
    type: Input
  }], iconoPath: [{
    type: Input
  }], permitirTextoLibre: [{
    type: Input
  }], seleccionCambiada: [{
    type: Output
  }], alAbrir: [{
    type: Output
  }], textoCambiado: [{
    type: Output
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectorGeneralComponent, { className: "SelectorGeneralComponent", filePath: "src/app/components/selector-general/selector-general.component.ts", lineNumber: 35 });
})();

export {
  SelectorGeneralComponent
};
//# debugId=0465dd75-efe5-541c-9c90-9ff81f4fb2b5
//# sourceMappingURL=chunk-PC7UGHOQ.js.map
