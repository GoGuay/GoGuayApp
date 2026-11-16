import {
  NavbarAdmin
} from "./chunk-ZCKXGVIL.js";
import {
  EventosServices
} from "./chunk-QQFA2KOC.js";
import {
  Toast,
  ToastModule
} from "./chunk-DZI3S65K.js";
import "./chunk-3QY534IW.js";
import {
  MessageService
} from "./chunk-Q5CK7R7A.js";
import {
  MatDialogModule
} from "./chunk-6VCOWNW4.js";
import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCol,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonThumbnail,
  IonicModule
} from "./chunk-V5JFS32A.js";
import {
  TranslateService
} from "./chunk-ULJI5CAD.js";
import {
  CommonModule,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-XCBA4FSK.js";
import {
  ChangeDetectionStrategy,
  Component,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
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
import {
  __spreadValues
} from "./chunk-MP5LG4CB.js";

// src/app/pages/admin/eventos-admin/eventos-admin.page.ts
function EventosAdmin_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-card", 6)(1, "h2", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 12);
    \u0275\u0275listener("ngSubmit", function EventosAdmin_Conditional_12_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.guardarEvento());
    });
    \u0275\u0275elementStart(4, "ion-item", 13)(5, "ion-label", 14);
    \u0275\u0275text(6, "Nombre del evento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 15);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ion-item", 13)(9, "ion-label", 14);
    \u0275\u0275text(10, "Ciudad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 16);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "ion-row")(13, "ion-col", 17)(14, "ion-item", 13)(15, "ion-label", 14);
    \u0275\u0275text(16, "Fecha Inicio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 18);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "ion-col", 17)(19, "ion-item", 13)(20, "ion-label", 14);
    \u0275\u0275text(21, "Fecha Fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 19);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "ion-item", 13)(24, "ion-label", 14);
    \u0275\u0275text(25, "URL Imagen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 20);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "ion-item", 13)(28, "ion-label", 14);
    \u0275\u0275text(29, "Enlace Info (Opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 21);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "ion-item", 13)(32, "ion-label", 14);
    \u0275\u0275text(33, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "textarea", 22);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "button", 23);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.isEditing ? "Editar Evento" : "Nuevo Evento");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.eventForm);
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.eventForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing ? "Actualizar cambios" : "Publicar en la App", " ");
  }
}
function EventosAdmin_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-thumbnail", 24);
    \u0275\u0275element(2, "img", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-label", 26)(4, "h2", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275element(7, "i", 28);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275element(10, "i", 29);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "ion-button", 30);
    \u0275\u0275listener("click", function EventosAdmin_For_19_Template_ion_button_click_12_listener() {
      const evento_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editarEvento(evento_r4.id));
    });
    \u0275\u0275element(13, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ion-button", 32);
    \u0275\u0275listener("click", function EventosAdmin_For_19_Template_ion_button_click_14_listener() {
      const evento_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.eliminarEvento(evento_r4.id));
    });
    \u0275\u0275element(15, "i", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const evento_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", evento_r4.imagen);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(evento_r4.nombre_evento);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", evento_r4.ciudad, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", evento_r4.fecha_inicio, " - ", evento_r4.fecha_fin, " ");
  }
}
var EventosAdmin = class _EventosAdmin {
  eventosService;
  translate;
  messageService;
  eventForm;
  listaEventos = [];
  showForm = false;
  isEditing = false;
  editingEventId = null;
  constructor(eventosService, translate, messageService) {
    this.eventosService = eventosService;
    this.translate = translate;
    this.messageService = messageService;
    this.eventForm = new FormGroup({
      nombre_evento: new FormControl("", [Validators.required]),
      ciudad: new FormControl("", [Validators.required]),
      fecha_inicio: new FormControl("", [Validators.required]),
      fecha_fin: new FormControl("", [Validators.required]),
      descripcion: new FormControl("", [Validators.required]),
      imagen: new FormControl("", [Validators.required]),
      enlace_info: new FormControl("")
    });
  }
  ngOnInit() {
    this.obtenerEventos();
  }
  /**
   * Función que se utiliza mara mostrar u ocultar el menú de añadir / editar un evento.
   */
  toggleForm() {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.resetForm();
    }
  }
  /**
   * Función para resetear el formularión del evento.
   *
   */
  resetForm() {
    this.isEditing = false;
    this.editingEventId = null;
    this.eventForm.reset();
  }
  /**
   * Función para obtener todos los eventos de BBDD
   */
  obtenerEventos() {
    this.eventosService.obtenerTodosLosEventos().subscribe({
      next: (resultado) => this.listaEventos = resultado,
      error: (err) => console.error("Error al obtener eventos", err)
    });
  }
  /**
   * Función para eliminar un evento seleccionado.
   *
   * @param id --> Recibe el id del evento seleccionado.
   */
  eliminarEvento(id) {
    const eventoAEliminar = this.listaEventos.find((e) => e.id === id);
    if (eventoAEliminar) {
      this.eventosService.eliminarEvento(id, eventoAEliminar).subscribe({
        next: () => {
          this.listaEventos = this.listaEventos.filter((e) => e.id !== id);
          this.translate.get("EVENTOS_ADMIN.MENSAJES.SUCCESS_TO_DELETE").subscribe((res) => {
            this.messageService.add({
              severity: "info",
              summary: "Borrado",
              detail: res,
              life: 3e3
            });
          });
        },
        error: (err) => {
          console.error("Error al eliminar el evento en el servidor", err);
        }
      });
    }
  }
  /**
   * Función para editar un evento seleccionado.
   *
   * @param id --> Recibe el id del evento seleccionado.
   */
  editarEvento(id) {
    const evento = this.listaEventos.find((e) => e.id === id);
    if (evento) {
      this.isEditing = true;
      this.editingEventId = id;
      this.showForm = true;
      this.eventForm.patchValue({
        nombre_evento: evento.nombre_evento,
        ciudad: evento.ciudad,
        fecha_inicio: this.formatoParaInput(evento.fecha_inicio),
        fecha_fin: this.formatoParaInput(evento.fecha_fin),
        descripcion: evento.descripcion,
        imagen: evento.imagen,
        enlace_info: evento.enlace_info
      });
    }
  }
  /**
   * Función para guardar la información de un evento.
   * Esta función valida si el evento se está editando o creando desde cero.
   *
   * En función de lo que se esté haciendo en ese evento,
   * esta función llama al servicio de crear un nuevo evento o al servicio de editar un evento.
   *
   * @returns --> Devuelve la información del evento creado / editado.
   */
  guardarEvento() {
    if (this.eventForm.invalid)
      return;
    const formValues = this.eventForm.value;
    const eventoData = __spreadValues({}, formValues);
    if (this.isEditing && this.editingEventId) {
      this.eventosService.editarEvento(this.editingEventId, eventoData).subscribe({
        next: () => {
          this.obtenerEventos();
          this.showToast("SUCCESS_TO_EDIT");
          this.toggleForm();
        },
        error: (err) => console.error("Error al editar", err)
      });
    } else {
      this.eventosService.anadirEvento(eventoData).subscribe({
        next: (resultado) => {
          this.listaEventos.unshift(resultado);
          this.toggleForm();
          this.showToast("SUCCESS_TO_ADD");
        }
      });
    }
  }
  /**
   * Función para dar un formato específico a la fecha,
   * esto se utiliza para evitar errores de fechas al enviar los datos a BBDD.
   *
   * @param fecha --> Recibe la fecha introducida en el input.
   * @returns --> Devuelve la fecha con el formato seleccionado.
   */
  formatoParaInput(fecha) {
    if (!fecha)
      return "";
    const d = new Date(fecha);
    return d.toISOString().split("T")[0];
  }
  /**
   * Función para mostrar en pantalla el mensaje de confirmación o error.
   *
   * @param mensajeKey --> Recibe el mensaje a mostrar.
   */
  showToast(mensajeKey) {
    this.translate.get(["EVENTOS_ADMIN.MENSAJES.NOTIFICATION", `EVENTOS_ADMIN.MENSAJES.${mensajeKey}`]).subscribe((translations) => {
      this.messageService.add({
        severity: "success",
        summary: translations["EVENTOS_ADMIN.MENSAJES.NOTIFICATION"],
        detail: translations[`EVENTOS_ADMIN.MENSAJES.${mensajeKey}`],
        life: 3e3
      });
    });
  }
  static \u0275fac = function EventosAdmin_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventosAdmin)(\u0275\u0275directiveInject(EventosServices), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventosAdmin, selectors: [["app-eventos-admin"]], decls: 21, vars: 5, consts: [[1, "ion-padding", 3, "fullscreen"], [1, "container"], [1, "text-center"], ["size", "12", "size-md", "4"], ["color", "primary", 1, "button_gestion", 3, "click"], [1, "fi", 3, "ngClass"], [1, "card_nuevo_evento", "ion-padding", "animate__animated", "animate__fadeIn"], [1, "ion-margin-top"], [1, "container_eventos"], ["lines", "full", 1, "lista_eventos"], ["position", "bottom-center"], [1, "ion-padding-start"], [3, "ngSubmit", "formGroup"], ["lines", "none", 1, "custom-input", "mb-3"], ["position", "stacked"], ["formControlName", "nombre_evento", "type", "text", "placeholder", "Ej: Mado Madrid"], ["formControlName", "ciudad", "type", "text", "placeholder", "Ej: Barcelona"], ["size", "6"], ["formControlName", "fecha_inicio", "type", "date", "placeholder", "DD/MM/YYYY"], ["formControlName", "fecha_fin", "type", "date", "placeholder", "DD/MM/YYYY"], ["formControlName", "imagen", "type", "text", "placeholder", "https://..."], ["formControlName", "enlace_info", "type", "text", "placeholder", "Web oficial"], ["formControlName", "descripcion", "rows", "3", 1, "native-textarea"], [1, "btn", "btn_bg", 3, "disabled"], ["slot", "start"], [2, "border-radius", "8px", 3, "src"], [1, "ion-text-wrap"], [2, "font-weight", "bold"], [1, "fi", "fi-rr-marker"], [1, "fi", "fi-rr-calendar"], ["slot", "end", "fill", "clear", "color", "success", 3, "click"], [1, "fi", "fi-rr-edit"], ["slot", "end", "fill", "clear", "color", "danger", 3, "click"], [1, "fi", "fi-rr-trash"]], template: function EventosAdmin_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar-admin");
      \u0275\u0275elementStart(1, "ion-content", 0)(2, "div", 1)(3, "h1", 2);
      \u0275\u0275text(4, "Gesti\xF3n de Eventos GoGuay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "ion-row")(6, "ion-col", 3)(7, "ion-card", 4);
      \u0275\u0275listener("click", function EventosAdmin_Template_ion_card_click_7_listener() {
        return ctx.toggleForm();
      });
      \u0275\u0275elementStart(8, "ion-card-header")(9, "ion-card-subtitle");
      \u0275\u0275element(10, "i", 5);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(12, EventosAdmin_Conditional_12_Template, 37, 4, "ion-card", 6);
      \u0275\u0275elementStart(13, "div", 7)(14, "h2");
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 8)(17, "ion-list", 9);
      \u0275\u0275repeaterCreate(18, EventosAdmin_For_19_Template, 16, 5, "ion-item", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(20, "p-toast", 10);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngClass", ctx.showForm ? "fi-rr-cross-small" : "fi-rr-plus");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.showForm ? "Cancelar" : "A\xF1adir nuevo evento", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showForm ? 12 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Eventos activos (", ctx.listaEventos.length, ")");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.listaEventos);
    }
  }, dependencies: [CommonModule, NgClass, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, IonicModule, IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCol, IonContent, IonItem, IonLabel, IonList, IonRow, IonThumbnail, MatDialogModule, NavbarAdmin, ToastModule, Toast], styles: ["\n.button_gestion[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 35px;\n}\n.button_gestion[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  filter: brightness(1.1);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);\n}\n.button_gestion[_ngcontent-%COMP%]:active {\n  transform: translateY(-2px);\n  filter: brightness(0.9);\n}\n.button_gestion[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: rgb(0, 0, 0);\n}\n.custom-input[_ngcontent-%COMP%] {\n  --%NS%background: #f4f5f8;\n  --%NS%border-radius: 35px;\n}\n.custom-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.custom-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  outline: none;\n  padding: 10px 0;\n  width: 100%;\n}\n.custom-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border: none !important;\n}\n.user-list[_ngcontent-%COMP%] {\n  border-radius: 35px;\n  overflow: hidden;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);\n}\n.container_eventos[_ngcontent-%COMP%] {\n  padding: 1%;\n}\n.lista_eventos[_ngcontent-%COMP%] {\n  border-radius: 35px;\n  padding-bottom: 0px;\n  padding-top: 0px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);\n}\nh2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin: 20px 0;\n}\n.card_nuevo_evento[_ngcontent-%COMP%] {\n  border-radius: 35px;\n}\n/*# sourceMappingURL=eventos-admin.page.css.map */"], changeDetection: 1 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventosAdmin, [{
    type: Component,
    args: [{ selector: "app-eventos-admin", standalone: true, changeDetection: ChangeDetectionStrategy.Eager, imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, MatDialogModule, NavbarAdmin, ToastModule], template: `<app-navbar-admin></app-navbar-admin>

<ion-content
  [fullscreen]="true"
  class="ion-padding"
>
  <div class="container">
    <h1 class="text-center">Gesti\xF3n de Eventos GoGuay</h1>

    <!-- BOTON PARA CREAR NUEVOS EVENTOS  -->
    <ion-row>
      <ion-col
        size="12"
        size-md="4"
      >
        <ion-card
          color="primary"
          class="button_gestion"
          (click)="toggleForm()"
        >
          <ion-card-header>
            <ion-card-subtitle>
              <i
                class="fi"
                [ngClass]="showForm ? 'fi-rr-cross-small' : 'fi-rr-plus'"
              ></i>
              {{ showForm ? 'Cancelar' : 'A\xF1adir nuevo evento' }}
            </ion-card-subtitle>
          </ion-card-header>
        </ion-card>
      </ion-col>
    </ion-row>

    <!-- CREACI\xD3N DE EVENTOS  -->
    @if (showForm) {
    <ion-card class="card_nuevo_evento ion-padding animate__animated animate__fadeIn">
      <h2 class="ion-padding-start">{{ isEditing ? 'Editar Evento' : 'Nuevo Evento' }}</h2>
      <form
        [formGroup]="eventForm"
        (ngSubmit)="guardarEvento()"
      >
        <ion-item
          lines="none"
          class="custom-input mb-3"
        >
          <ion-label position="stacked">Nombre del evento</ion-label>
          <input
            formControlName="nombre_evento"
            type="text"
            placeholder="Ej: Mado Madrid"
          />
        </ion-item>
        <ion-item
          lines="none"
          class="custom-input mb-3"
        >
          <ion-label position="stacked">Ciudad</ion-label>
          <input
            formControlName="ciudad"
            type="text"
            placeholder="Ej: Barcelona"
          />
        </ion-item>
        <ion-row>
          <ion-col size="6">
            <ion-item
              lines="none"
              class="custom-input mb-3"
            >
              <ion-label position="stacked">Fecha Inicio</ion-label>
              <input
                formControlName="fecha_inicio"
                type="date"
                placeholder="DD/MM/YYYY"
              />
            </ion-item>
          </ion-col>
          <ion-col size="6">
            <ion-item
              lines="none"
              class="custom-input mb-3"
            >
              <ion-label position="stacked">Fecha Fin</ion-label>
              <input
                formControlName="fecha_fin"
                type="date"
                placeholder="DD/MM/YYYY"
              />
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-item
          lines="none"
          class="custom-input mb-3"
        >
          <ion-label position="stacked">URL Imagen</ion-label>
          <input
            formControlName="imagen"
            type="text"
            placeholder="https://..."
          />
        </ion-item>
        <ion-item
          lines="none"
          class="custom-input mb-3"
        >
          <ion-label position="stacked">Enlace Info (Opcional)</ion-label>
          <input
            formControlName="enlace_info"
            type="text"
            placeholder="Web oficial"
          />
        </ion-item>
        <ion-item
          lines="none"
          class="custom-input mb-3"
        >
          <ion-label position="stacked">Descripci\xF3n</ion-label>
          <textarea
            formControlName="descripcion"
            rows="3"
            class="native-textarea"
          ></textarea>
        </ion-item>
        <button
          [disabled]="eventForm.invalid"
          class="btn btn_bg"
        >
          {{ isEditing ? 'Actualizar cambios' : 'Publicar en la App' }}
        </button>
      </form>
    </ion-card>
    }

    <!-- LISTADO DE EVENTOS  -->
    <div class="ion-margin-top">
      <h2>Eventos activos ({{ listaEventos.length }})</h2>
      <div class="container_eventos">
        <ion-list
          lines="full"
          class="lista_eventos"
        >
          @for (evento of listaEventos; track evento) {
          <ion-item>
            <ion-thumbnail slot="start">
              <img
                [src]="evento.imagen"
                style="border-radius: 8px"
              />
            </ion-thumbnail>
            <ion-label class="ion-text-wrap">
              <h2 style="font-weight: bold">{{ evento.nombre_evento }}</h2>
              <p>
                <i class="fi fi-rr-marker"></i>
                {{ evento.ciudad }}
              </p>
              <p>
                <i class="fi fi-rr-calendar"></i>
                {{ evento.fecha_inicio }} - {{ evento.fecha_fin }}
              </p>
            </ion-label>
            <ion-button
              slot="end"
              fill="clear"
              color="success"
              (click)="editarEvento(evento.id)"
            >
              <i class="fi fi-rr-edit"></i>
            </ion-button>
            <ion-button
              slot="end"
              fill="clear"
              color="danger"
              (click)="eliminarEvento(evento.id)"
            >
              <i class="fi fi-rr-trash"></i>
            </ion-button>
          </ion-item>
          }
        </ion-list>
      </div>
    </div>

    <p-toast position="bottom-center"></p-toast>
  </div>
</ion-content>
`, styles: ["/* src/app/pages/admin/eventos-admin/eventos-admin.page.scss */\n.button_gestion {\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 35px;\n}\n.button_gestion:hover {\n  transform: translateY(-5px);\n  filter: brightness(1.1);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);\n}\n.button_gestion:active {\n  transform: translateY(-2px);\n  filter: brightness(0.9);\n}\n.button_gestion ion-card-subtitle {\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: rgb(0, 0, 0);\n}\n.custom-input {\n  --background: #f4f5f8;\n  --border-radius: 35px;\n}\n.custom-input input,\n.custom-input textarea {\n  background: transparent;\n  border: none;\n  outline: none;\n  padding: 10px 0;\n  width: 100%;\n}\n.custom-input input:focus {\n  outline: none !important;\n  border: none !important;\n}\n.user-list {\n  border-radius: 35px;\n  overflow: hidden;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);\n}\n.container_eventos {\n  padding: 1%;\n}\n.lista_eventos {\n  border-radius: 35px;\n  padding-bottom: 0px;\n  padding-top: 0px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);\n}\nh2 {\n  font-weight: 700;\n  margin: 20px 0;\n}\n.card_nuevo_evento {\n  border-radius: 35px;\n}\n/*# sourceMappingURL=eventos-admin.page.css.map */\n"] }]
  }], () => [{ type: EventosServices }, { type: TranslateService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventosAdmin, { className: "EventosAdmin", filePath: "src/app/pages/admin/eventos-admin/eventos-admin.page.ts", lineNumber: 21 });
})();
export {
  EventosAdmin
};
//# debugId=4cbe1c27-4b30-55e8-aa24-86e98661b68b
//# sourceMappingURL=eventos-admin.page-WT3JDNZ3.js.map
