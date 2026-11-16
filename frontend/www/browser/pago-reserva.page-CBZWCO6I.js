import {
  SpinnerComponent
} from "./chunk-AZFY3OZL.js";
import {
  TravelService
} from "./chunk-BRLSMG3J.js";
import {
  MessagingService
} from "./chunk-N25HX3QD.js";
import {
  FuncionesComunes
} from "./chunk-TMB2KEQX.js";
import "./chunk-TGPQDEZS.js";
import "./chunk-N7S2XU3X.js";
import "./chunk-CIEE2FXQ.js";
import "./chunk-34RASOLQ.js";
import "./chunk-ULIFZXTE.js";
import "./chunk-WBBLYEAR.js";
import "./chunk-LLKVXR72.js";
import "./chunk-Z2EGICVD.js";
import {
  BooleanValueAccessorDirective,
  IonBackButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
  IonicModule
} from "./chunk-XTRPVKSN.js";
import "./chunk-PWPN4F54.js";
import {
  ActivatedRoute,
  CommonModule,
  DatePipe,
  FormsModule,
  NavController,
  NgControlStatus,
  NgModel
} from "./chunk-DD4MNYDA.js";
import {
  ChangeDetectorRef,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YUKRBYLH.js";
import "./chunk-NEFVXLXQ.js";
import "./chunk-UGUZQALC.js";
import "./chunk-4JA4ETJA.js";
import "./chunk-RI33YQSB.js";
import "./chunk-7NBG2LBA.js";
import "./chunk-7WJRAT5Y.js";
import "./chunk-XSENUJ4A.js";
import "./chunk-K6BOSGGR.js";
import "./chunk-HM6RSKJQ.js";
import "./chunk-QU22HLHJ.js";
import "./chunk-HMGJJ2JN.js";
import "./chunk-GV4SC633.js";
import "./chunk-XEOOW4LE.js";
import "./chunk-TNIKZTJG.js";
import "./chunk-QD6KASZP.js";
import "./chunk-ZO2Q2TV5.js";
import "./chunk-NZ2QYBMG.js";
import "./chunk-5MFCCRYD.js";
import "./chunk-LYPF3I3J.js";
import "./chunk-PHWUJLET.js";
import "./chunk-ZBCCTIRL.js";
import "./chunk-KLZ5YPL6.js";
import "./chunk-SWNU2J3M.js";
import "./chunk-FPPEK4XH.js";
import "./chunk-MEOWV5C6.js";
import "./chunk-DI3VEDFV.js";
import "./chunk-5SZB5ECT.js";

// src/app/pages/pago-reserva/pago-reserva.page.ts
function PagoReservaPage_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 6)(2, "ion-buttons", 7);
    \u0275\u0275element(3, "ion-back-button", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-title");
    \u0275\u0275text(5, "Volver");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("translucent", true);
  }
}
function PagoReservaPage_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "app-spinner");
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Preparando plataforma de pago...");
    \u0275\u0275elementEnd()();
  }
}
function PagoReservaPage_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 9)(2, "h5");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 10);
    \u0275\u0275element(5, "i", 11);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 12)(9, "span");
    \u0275\u0275text(10, "Total a pagar:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 13);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 14)(14, "p", 15);
    \u0275\u0275text(15, "Selecciona tu m\xE9todo de pago seguro");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "div", 16);
    \u0275\u0275elementStart(17, "div", 17)(18, "ion-item", 18)(19, "ion-checkbox", 19);
    \u0275\u0275twoWayListener("ngModelChange", function PagoReservaPage_Conditional_4_Template_ion_checkbox_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.guardarMetodo, $event) || (ctx_r1.guardarMetodo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(20, "ion-label", 20);
    \u0275\u0275text(21, "Guardar este m\xE9todo para futuros viajes");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Tu viaje a ", ctx_r1.viaje.destino);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 4, ctx_r1.viaje.fecha_salida, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.viaje.precio_viaje, " \u20AC");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.guardarMetodo);
  }
}
function PagoReservaPage_Conditional_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1, "Tu plaza ha sido confirmada y el pago procesado con \xE9xito.");
    \u0275\u0275elementEnd();
  }
}
function PagoReservaPage_Conditional_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1, "Tu solicitud ha sido enviada al conductor. El pago se encuentra retenido.");
    \u0275\u0275elementEnd();
  }
}
function PagoReservaPage_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 21);
    \u0275\u0275element(2, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 23);
    \u0275\u0275text(4, "\xA1Reserva completada!");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, PagoReservaPage_Conditional_5_Conditional_5_Template, 2, 0, "p", 24);
    \u0275\u0275conditionalCreate(6, PagoReservaPage_Conditional_5_Conditional_6_Template, 2, 0, "p", 24);
    \u0275\u0275elementStart(7, "div", 25)(8, "button", 26);
    \u0275\u0275listener("click", function PagoReservaPage_Conditional_5_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.irA("/home"));
    });
    \u0275\u0275element(9, "i", 27);
    \u0275\u0275text(10, " Volver a Inicio ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 28);
    \u0275\u0275listener("click", function PagoReservaPage_Conditional_5_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.irA("/mis-viajes"));
    });
    \u0275\u0275element(12, "i", 29);
    \u0275\u0275text(13, " Ver Mis Viajes ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 30);
    \u0275\u0275listener("click", function PagoReservaPage_Conditional_5_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.irA("detalles"));
    });
    \u0275\u0275text(15, " Ver detalles del trayecto ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.viaje.reserva_automatica ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.viaje.reserva_automatica ? 6 : -1);
  }
}
var PagoReservaPage = class _PagoReservaPage {
  route;
  travelService;
  navCtrl;
  cdRef;
  funcionesComunes;
  messagingService;
  viaje;
  pagoConfirmado = false;
  cargando = true;
  userData;
  yaUnido = false;
  guardarMetodo = false;
  constructor(route, travelService, navCtrl, cdRef, funcionesComunes, messagingService) {
    this.route = route;
    this.travelService = travelService;
    this.navCtrl = navCtrl;
    this.cdRef = cdRef;
    this.funcionesComunes = funcionesComunes;
    this.messagingService = messagingService;
  }
  ngOnInit() {
    const viajeId = Number(this.route.snapshot.paramMap.get("id"));
    const storageData = localStorage.getItem("userData");
    this.userData = storageData ? JSON.parse(storageData) : null;
    if (viajeId) {
      this.cargarDetallesViaje(viajeId);
    }
  }
  /**
   * Función para cargar los detalles del viaje.
   * @param id El ID del viaje a cargar.
   */
  cargarDetallesViaje(id) {
    this.travelService.getViaje(id).subscribe({
      next: (res) => {
        this.viaje = res;
        this.cargando = false;
        this.cdRef.detectChanges();
        setTimeout(() => this.renderPaypal(), 150);
      },
      error: () => this.navCtrl.back()
    });
  }
  /**
   * Función para renderizar el botón de pago de PayPal.
   */
  renderPaypal() {
    paypal.Buttons({
      style: {
        layout: "vertical",
        color: "blue",
        shape: "rect",
        label: "pay"
      },
      createOrder: (data, actions) => {
        return fetch("http://localhost:5000/api/user/create-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ viaje_id: this.viaje.id })
        }).then((res) => res.json()).then((order) => order.order_id);
      },
      onApprove: (data, actions) => {
        return fetch(`http://localhost:5000/api/user/capture-order/${data.orderID}`, {
          method: "POST"
        }).then((res) => res.json()).then(() => {
          this.pagoConfirmado = true;
          this.cdRef.detectChanges();
          this.procesarReservaPostPago();
        });
      }
    }).render("#paypal-button-container");
  }
  /**
   * Función para redirigir a la página de detalles del viaje o a la página principal después del pago, dependiendo de la ruta dada.
   * Si la ruta es 'detalles', se redirige a la página de detalles del viaje.
   * De lo contrario, se redirige a la página principal.
   * Esto se puede usar para mostrar un mensaje de éxito después del pago o para volver a la lista de viajes.
   * @param ruta --> La ruta a la que se desea redirigir después del pago. Puede ser 'detalles' o cualquier otra ruta.
   */
  irA(ruta) {
    if (ruta === "detalles") {
      this.navCtrl.navigateBack(["/home"]);
    } else {
      this.navCtrl.navigateRoot([ruta]);
    }
  }
  /**
   * Función para convertir la fecha del evento al formato requerido por el backend.
   */
  procesarReservaPostPago() {
    if (this.viaje.reserva_automatica) {
      this.solicitudAutomatica(this.viaje.id);
    } else {
      this.enviarSolicitudManual();
    }
  }
  /**
   * Función para enviar la solicitud de reserva al conductor
   * después de que el pago se haya capturado correctamente.
   *
   * @param viajeID El ID del viaje al que se desea unir automáticamente.
   */
  solicitudAutomatica(viajeID) {
    this.travelService.unirseAViaje(viajeID).subscribe({
      next: (response) => {
        this.yaUnido = true;
        console.log("Unido autom\xE1ticamente tras pago");
        this.cdRef.detectChanges();
      },
      error: (error) => {
        this.funcionesComunes.openErrorModal("Error en reserva", "El pago se realiz\xF3 pero hubo un error al asignarte el asiento. Contacta a soporte.");
      }
    });
  }
  /**
   * Función para enviar la solicitud de reserva al conductor
   * después de que el pago se haya capturado correctamente.
   *
   * Si el viaje no tiene reserva automática,
   * se inicia un chat entre el pasajero y el conductor (si no existe)
   * y se envía la solicitud de reserva.
   *
   * Si el viaje tiene reserva automática,
   * se llama a la función solicitudAutomatica que intenta unir al usuario al viaje directamente.
   */
  enviarSolicitudManual() {
    var _a, _b;
    const emisorId = ((_b = (_a = this.userData) == null ? void 0 : _a.usuario) == null ? void 0 : _b.id) || 0;
    const receptorId = this.viaje.usuario_id;
    this.messagingService.iniciarChat(emisorId, receptorId).subscribe({
      next: (res) => {
        const convId = res.conversacion_id;
        const payload = {
          viaje_id: this.viaje.id,
          emisor_id: emisorId,
          receptor_id: receptorId,
          conversacion_id: convId
        };
        this.messagingService.enviarSolicitudViaje(payload).subscribe({
          next: () => {
            console.log("Solicitud manual enviada tras pago");
            this.cdRef.detectChanges();
          },
          error: () => {
            this.funcionesComunes.openErrorModal("Error en solicitud", "Pago capturado pero no se pudo enviar la solicitud al conductor.");
          }
        });
      }
    });
  }
  static \u0275fac = function PagoReservaPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PagoReservaPage)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(TravelService), \u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(FuncionesComunes), \u0275\u0275directiveInject(MessagingService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PagoReservaPage, selectors: [["app-pago-reserva"]], decls: 6, vars: 4, consts: [[3, "translucent"], [1, "ion-padding"], [1, "container-full"], [1, "text-center", "mt-5"], [1, "pago-central"], [1, "exito-container", "text-center", "animate__animated", "animate__zoomIn"], [1, "custom-toolbar-goguay"], ["slot", "start"], ["defaultHref", "/busqueda-viajes"], [1, "resumen-viaje", "card", "p-3", "mb-4", "shadow-sm"], [1, "text-muted"], [1, "fi", "fi-rr-calendar", "me-2"], [1, "precio-total", "d-flex", "justify-content-between", "align-items-center", "mt-2"], [1, "h3", "mb-0", "text-primary"], [1, "metodos-pago"], [1, "text-center", "small", "mb-3"], ["id", "paypal-button-container"], [1, "checkbox-container-custom", "mt-3"], ["lines", "none", "button", "true", "detail", "false", 1, "ion-no-padding"], ["color", "primary", "labelPlacement", "end", "justify", "start", 3, "ngModelChange", "ngModel"], [1, "small", "text-muted", "ps-2"], [1, "icon-box", "mb-4"], [1, "fi", "fi-rs-badge-check", "text-success", 2, "font-size", "5rem"], [1, "fw-bold"], [1, "text-muted", "px-4"], [1, "botones-navegacion", "mt-5", "d-grid", "gap-3"], [1, "btn", "btn-goguay", "btn-lg", "py-3", 3, "click"], [1, "fi", "fi-rr-home", "me-2"], [1, "btn", "btn-outline-dark", "btn-lg", "py-3", 3, "click"], [1, "fi", "fi-rr-steering-wheel", "me-2"], [1, "btn", "btn-link", "mt-2", 3, "click"]], template: function PagoReservaPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, PagoReservaPage_Conditional_0_Template, 6, 1, "ion-header", 0);
      \u0275\u0275elementStart(1, "ion-content", 1)(2, "div", 2);
      \u0275\u0275conditionalCreate(3, PagoReservaPage_Conditional_3_Template, 4, 0, "div", 3);
      \u0275\u0275conditionalCreate(4, PagoReservaPage_Conditional_4_Template, 22, 7, "div", 4);
      \u0275\u0275conditionalCreate(5, PagoReservaPage_Conditional_5_Template, 16, 2, "div", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.pagoConfirmado ? 0 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.cargando ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.cargando && !ctx.pagoConfirmado ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.pagoConfirmado ? 5 : -1);
    }
  }, dependencies: [
    CommonModule,
    IonicModule,
    IonButtons,
    IonCheckbox,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonTitle,
    IonToolbar,
    BooleanValueAccessorDirective,
    IonBackButton,
    SpinnerComponent,
    FormsModule,
    NgControlStatus,
    NgModel,
    DatePipe
  ], styles: ["\n.container-full[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 80vh;\n  justify-content: center;\n  align-items: center;\n}\n.pago-central[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 500px;\n  margin: 0 auto;\n}\n.pago-central[_ngcontent-%COMP%]   .resumen-viaje[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  border: none;\n  background: white;\n  border-left: 5px solid #B3B5E6;\n}\n.pago-central[_ngcontent-%COMP%]   .resumen-viaje[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #222;\n  margin-bottom: 5px;\n}\n.pago-central[_ngcontent-%COMP%]   .resumen-viaje[_ngcontent-%COMP%]   .precio-total[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  border-top: 1px dashed #ddd;\n}\n.metodos-pago[_ngcontent-%COMP%]   .checkbox-container-custom[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-radius: 35px;\n  margin: 0 10px 20px 10px;\n  padding: 5px 20px;\n  border: 1px solid #eee;\n  display: block !important;\n  visibility: visible !important;\n}\n.metodos-pago[_ngcontent-%COMP%]   .checkbox-container-custom[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  --min-height: 48px;\n  margin: 0;\n  --border-radius: 35px;\n  --background-hover: rgba(0, 0, 0, 0.04);\n  --ripple-color: rgba(0, 0, 0, 0.1);\n  border-radius: 35px;\n  overflow: hidden;\n}\n.metodos-pago[_ngcontent-%COMP%]   .checkbox-container-custom[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  opacity: 1;\n  color: #666 !important;\n}\n.metodos-pago[_ngcontent-%COMP%]   .checkbox-container-custom[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%] {\n  --size: 20px;\n  --border-radius: 10px;\n  margin-right: 5px;\n}\n.metodos-pago[_ngcontent-%COMP%]   #paypal-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  min-height: 150px;\n  width: 100%;\n  margin-top: 15px;\n  z-index: 1;\n}\n.metodos-pago[_ngcontent-%COMP%]   #paypal-button-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 100% !important;\n  max-width: 100% !important;\n}\n.exito-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 100%;\n  padding: 20px;\n}\n.exito-container[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  filter: drop-shadow(0 4px 10px rgba(183, 224, 180, 0.3));\n}\n.exito-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #1a1a1a;\n  margin-bottom: 15px;\n}\n.exito-container[_ngcontent-%COMP%]   .botones-navegacion[_ngcontent-%COMP%] {\n  max-width: 350px;\n  margin: 0 auto;\n}\n.exito-container[_ngcontent-%COMP%]   .botones-navegacion[_ngcontent-%COMP%]   .btn-goguay[_ngcontent-%COMP%] {\n  background: #B3B5E6;\n  color: white;\n  border-radius: 35px;\n  font-weight: 600;\n  box-shadow: 0 8px 15px rgba(179, 181, 230, 0.2);\n  transition: transform 0.2s;\n}\n.exito-container[_ngcontent-%COMP%]   .botones-navegacion[_ngcontent-%COMP%]   .btn-goguay[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.exito-container[_ngcontent-%COMP%]   .botones-navegacion[_ngcontent-%COMP%]   .btn-outline-dark[_ngcontent-%COMP%] {\n  border-radius: 35px;\n  box-shadow: 0 8px 15px rgba(179, 181, 230, 0.2);\n  padding: 12px;\n  border-width: 2px;\n}\n.custom-toolbar-goguay[_ngcontent-%COMP%] {\n  --background: #f0d7b4;\n  --color: #ffffff;\n}\n.custom-toolbar-goguay[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%] {\n  --color: #000000;\n}\n@media (max-width: 576px) {\n  .pago-central[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n}\n/*# sourceMappingURL=pago-reserva.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagoReservaPage, [{
    type: Component,
    args: [{ selector: "app-pago-reserva", standalone: true, imports: [
      CommonModule,
      IonicModule,
      SpinnerComponent,
      FormsModule
    ], template: `@if (!pagoConfirmado) {
<ion-header [translucent]="true">
  <ion-toolbar class="custom-toolbar-goguay">
    <ion-buttons slot="start">
      <ion-back-button defaultHref="/busqueda-viajes"></ion-back-button>
    </ion-buttons>
    <ion-title>Volver</ion-title>
  </ion-toolbar>
</ion-header>
}

<ion-content class="ion-padding">
  <div class="container-full">
    <!-- CARGANDO -->
    @if (cargando) {
    <div class="text-center mt-5">
      <app-spinner></app-spinner>
      <p>Preparando plataforma de pago...</p>
    </div>
    }

    <!-- PAGO -->
    @if (!cargando && !pagoConfirmado) {
    <div class="pago-central">
      <div class="resumen-viaje card p-3 mb-4 shadow-sm">
        <h5>Tu viaje a {{ viaje.destino }}</h5>
        <p class="text-muted">
          <i class="fi fi-rr-calendar me-2"></i>
          {{ viaje.fecha_salida | date:'dd/MM/yyyy' }}
        </p>
        <div class="precio-total d-flex justify-content-between align-items-center mt-2">
          <span>Total a pagar:</span>
          <span class="h3 mb-0 text-primary">{{ viaje.precio_viaje }} \u20AC</span>
        </div>
      </div>
      <div class="metodos-pago">
        <p class="text-center small mb-3">Selecciona tu m\xE9todo de pago seguro</p>
        <div id="paypal-button-container"></div>
        <div class="checkbox-container-custom mt-3">
          <ion-item
            lines="none"
            class="ion-no-padding"
            button="true"
            detail="false"
          >
            <ion-checkbox
              [(ngModel)]="guardarMetodo"
              color="primary"
              labelPlacement="end"
              justify="start"
            >
              <ion-label class="small text-muted ps-2">Guardar este m\xE9todo para futuros viajes</ion-label>
            </ion-checkbox>
          </ion-item>
        </div>
      </div>
    </div>
    }

    <!-- OPCIONES DE NAVEGACI\xD3N -->
    @if (pagoConfirmado) {
    <div class="exito-container text-center animate__animated animate__zoomIn">
      <div class="icon-box mb-4">
        <i
          class="fi fi-rs-badge-check text-success"
          style="font-size: 5rem"
        ></i>
      </div>
      <h2 class="fw-bold">\xA1Reserva completada!</h2>
      @if (viaje.reserva_automatica) {
      <p class="text-muted px-4">Tu plaza ha sido confirmada y el pago procesado con \xE9xito.</p>
      } @if (!viaje.reserva_automatica) {
      <p class="text-muted px-4">Tu solicitud ha sido enviada al conductor. El pago se encuentra retenido.</p>
      }
      <div class="botones-navegacion mt-5 d-grid gap-3">
        <button
          class="btn btn-goguay btn-lg py-3"
          (click)="irA('/home')"
        >
          <i class="fi fi-rr-home me-2"></i>
          Volver a Inicio
        </button>
        <button
          class="btn btn-outline-dark btn-lg py-3"
          (click)="irA('/mis-viajes')"
        >
          <i class="fi fi-rr-steering-wheel me-2"></i>
          Ver Mis Viajes
        </button>
        <button
          class="btn btn-link mt-2"
          (click)="irA('detalles')"
        >
          Ver detalles del trayecto
        </button>
      </div>
    </div>
    }
  </div>
</ion-content>
`, styles: ["/* src/app/pages/pago-reserva/pago-reserva.page.scss */\n.container-full {\n  display: flex;\n  flex-direction: column;\n  min-height: 80vh;\n  justify-content: center;\n  align-items: center;\n}\n.pago-central {\n  width: 100%;\n  max-width: 500px;\n  margin: 0 auto;\n}\n.pago-central .resumen-viaje {\n  border-radius: 16px;\n  border: none;\n  background: white;\n  border-left: 5px solid #B3B5E6;\n}\n.pago-central .resumen-viaje h5 {\n  font-weight: 700;\n  color: #222;\n  margin-bottom: 5px;\n}\n.pago-central .resumen-viaje .precio-total {\n  padding-top: 15px;\n  border-top: 1px dashed #ddd;\n}\n.metodos-pago .checkbox-container-custom {\n  background-color: #f8f9fa;\n  border-radius: 35px;\n  margin: 0 10px 20px 10px;\n  padding: 5px 20px;\n  border: 1px solid #eee;\n  display: block !important;\n  visibility: visible !important;\n}\n.metodos-pago .checkbox-container-custom ion-item {\n  --background: transparent;\n  --min-height: 48px;\n  margin: 0;\n  --border-radius: 35px;\n  --background-hover: rgba(0, 0, 0, 0.04);\n  --ripple-color: rgba(0, 0, 0, 0.1);\n  border-radius: 35px;\n  overflow: hidden;\n}\n.metodos-pago .checkbox-container-custom ion-item ion-label {\n  font-size: 0.85rem;\n  opacity: 1;\n  color: #666 !important;\n}\n.metodos-pago .checkbox-container-custom ion-item ion-checkbox {\n  --size: 20px;\n  --border-radius: 10px;\n  margin-right: 5px;\n}\n.metodos-pago #paypal-button-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  min-height: 150px;\n  width: 100%;\n  margin-top: 15px;\n  z-index: 1;\n}\n.metodos-pago #paypal-button-container div {\n  width: 100% !important;\n  max-width: 100% !important;\n}\n.exito-container {\n  width: 100%;\n  max-height: 100%;\n  padding: 20px;\n}\n.exito-container .icon-box i {\n  filter: drop-shadow(0 4px 10px rgba(183, 224, 180, 0.3));\n}\n.exito-container h2 {\n  color: #1a1a1a;\n  margin-bottom: 15px;\n}\n.exito-container .botones-navegacion {\n  max-width: 350px;\n  margin: 0 auto;\n}\n.exito-container .botones-navegacion .btn-goguay {\n  background: #B3B5E6;\n  color: white;\n  border-radius: 35px;\n  font-weight: 600;\n  box-shadow: 0 8px 15px rgba(179, 181, 230, 0.2);\n  transition: transform 0.2s;\n}\n.exito-container .botones-navegacion .btn-goguay:active {\n  transform: scale(0.98);\n}\n.exito-container .botones-navegacion .btn-outline-dark {\n  border-radius: 35px;\n  box-shadow: 0 8px 15px rgba(179, 181, 230, 0.2);\n  padding: 12px;\n  border-width: 2px;\n}\n.custom-toolbar-goguay {\n  --background: #f0d7b4;\n  --color: #ffffff;\n}\n.custom-toolbar-goguay ion-back-button {\n  --color: #000000;\n}\n@media (max-width: 576px) {\n  .pago-central {\n    padding: 10px;\n  }\n}\n/*# sourceMappingURL=pago-reserva.page.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: TravelService }, { type: NavController }, { type: ChangeDetectorRef }, { type: FuncionesComunes }, { type: MessagingService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PagoReservaPage, { className: "PagoReservaPage", filePath: "src/app/pages/pago-reserva/pago-reserva.page.ts", lineNumber: 26 });
})();
export {
  PagoReservaPage
};
//# sourceMappingURL=pago-reserva.page-CBZWCO6I.js.map
