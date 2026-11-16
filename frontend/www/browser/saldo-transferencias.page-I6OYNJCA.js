import {
  MonederoService
} from "./chunk-BZNV2GKX.js";
import {
  SelectorGeneralComponent
} from "./chunk-PC7UGHOQ.js";
import {
  AbrirIncidenciaModalComponent
} from "./chunk-TWC6M6CU.js";
import "./chunk-XVLCLCLR.js";
import "./chunk-TDPVVR7R.js";
import "./chunk-NNKIWL44.js";
import "./chunk-WLZS6EII.js";
import "./chunk-MY5ZJ3MY.js";
import {
  NavbarComponent
} from "./chunk-6PYX74OP.js";
import "./chunk-C4WEIZGQ.js";
import "./chunk-L23MUE74.js";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
  ModalController
} from "./chunk-FFMYI37T.js";
import {
  HelpModalComponent
} from "./chunk-X7SDTFSG.js";
import "./chunk-NX7SG6WM.js";
import {
  MessageService
} from "./chunk-Q5CK7R7A.js";
import {
  UserServicesService
} from "./chunk-43M6K65B.js";
import {
  MatDivider
} from "./chunk-TFWCQLOE.js";
import "./chunk-REKVANIZ.js";
import {
  MatDialog
} from "./chunk-6VCOWNW4.js";
import "./chunk-ZPEWRVEX.js";
import "./chunk-V5JFS32A.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-ULJI5CAD.js";
import {
  ActivatedRoute,
  CommonModule,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgClass,
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
  Router
} from "./chunk-XCBA4FSK.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
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
import {
  __async
} from "./chunk-MP5LG4CB.js";

// src/app/pages/paginas-panel-usuario/saldo-transferencias/saldo-transferencias.page.ts
function SaldoTransferenciasPage_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r0.monedero.saldo, "1.2-2"), " \u20AC ");
  }
}
function SaldoTransferenciasPage_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, 0, "EUR"), " ");
  }
}
function SaldoTransferenciasPage_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275text(1, " Retirar a Paypal ");
    \u0275\u0275elementEnd();
  }
}
function SaldoTransferenciasPage_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275text(1, " Transferir a cuenta ");
    \u0275\u0275elementEnd();
  }
}
function SaldoTransferenciasPage_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-selector-general", 28);
    \u0275\u0275listener("seleccionCambiada", function SaldoTransferenciasPage_Conditional_36_Template_app_selector_general_seleccionCambiada_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onInputChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("valor", ctx_r0.opcion_retirada_elegida)("opciones", ctx_r0.listaOpcionesTransferencias)("soloLectura", true);
  }
}
function SaldoTransferenciasPage_Conditional_60_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 30);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mov_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 6, mov_r3.fecha, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 9, mov_r3.fecha, "HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(mov_r3.concepto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 12, mov_r3.saldo_anterior, "1.2-2"), " \u20AC");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", mov_r3.saldo_actual >= mov_r3.saldo_anterior ? "text-success" : "text-dark");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 15, mov_r3.saldo_actual, "1.2-2"), " \u20AC ");
  }
}
function SaldoTransferenciasPage_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SaldoTransferenciasPage_Conditional_60_For_1_Template, 15, 18, "tr", null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.movimientos);
  }
}
function SaldoTransferenciasPage_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 31);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "SALDO.NO_HAY_MOVIMIENTOS"), " ");
  }
}
var SaldoTransferenciasPage = class _SaldoTransferenciasPage {
  userService;
  monederoService;
  route;
  cdRef;
  router;
  translate;
  dialog;
  messageService;
  modalController;
  userLoggedIn = false;
  userData = {};
  monedero = null;
  movimientos = [];
  cantidadRecarga = 5;
  tiene_cuenta_paypal = false;
  tiene_cuenta_bancaria = false;
  tiene_ambas = false;
  listaOpcionesTransferencias = [
    { valor: "paypal", descripcion: "Cuenta Paypal" },
    { valor: "banco", descripcion: "Cuenta Bancaria" }
  ];
  opcion_retirada_elegida = "";
  usuarioSub;
  constructor(userService, monederoService, route, cdRef, router, translate, dialog, messageService, modalController) {
    this.userService = userService;
    this.monederoService = monederoService;
    this.route = route;
    this.cdRef = cdRef;
    this.router = router;
    this.translate = translate;
    this.dialog = dialog;
    this.messageService = messageService;
    this.modalController = modalController;
  }
  ngOnInit() {
    console.log("Opciones de transferencia disponibles:", this.listaOpcionesTransferencias);
    this.usuarioSub = this.userService.usuario$.subscribe((usuarioActual) => {
      var _a;
      if (usuarioActual) {
        const tienePayPal = !!usuarioActual.cobro_paypal_email;
        const tieneBanco = !!(usuarioActual.cobro_titular && usuarioActual.cobro_iban);
        console.log("Usuario actual: ", usuarioActual);
        if (tienePayPal && tieneBanco) {
          this.tiene_cuenta_paypal = false;
          this.tiene_cuenta_bancaria = false;
          this.tiene_ambas = true;
        } else if (tienePayPal) {
          this.tiene_cuenta_paypal = true;
          this.tiene_cuenta_bancaria = false;
          this.tiene_ambas = false;
        } else if (tieneBanco) {
          this.tiene_cuenta_paypal = false;
          this.tiene_cuenta_bancaria = true;
          this.tiene_ambas = false;
        } else {
          this.tiene_cuenta_paypal = false;
          this.tiene_cuenta_bancaria = false;
          this.tiene_ambas = false;
        }
        this.userData = { usuario: usuarioActual };
        this.userLoggedIn = true;
        this.cargarMonedero();
        this.cargarMovimientos(this.userData.usuario.id);
      } else {
        const rawData = localStorage.getItem("userData");
        if (rawData) {
          this.userData = JSON.parse(rawData);
          this.userLoggedIn = !!(this.userData && (((_a = this.userData.usuario) == null ? void 0 : _a.email) || this.userData.email));
          if (this.userLoggedIn) {
            this.cargarMonedero();
            this.cargarMovimientos(this.userData.usuario.id);
          }
        }
      }
      this.cdRef.detectChanges();
    });
    this.route.queryParams.subscribe((params) => {
      const tokenPayPal = params["token"];
      const success = params["success"];
      if (success === "true" && tokenPayPal) {
        this.capturarPagoPayPal(tokenPayPal);
      }
    });
    this.renderPaypal();
  }
  ngOnDestroy() {
    if (this.usuarioSub) {
      this.usuarioSub.unsubscribe();
    }
  }
  cargarMonedero() {
    this.monederoService.obtenerSaldoMonedero().subscribe({
      next: (response) => {
        this.monedero = { saldo: response.saldo };
        this.cdRef.detectChanges();
      },
      error: (err) => {
        console.error("Error al cargar el saldo:", err);
      }
    });
  }
  cargarMovimientos(usuario_id) {
    this.monederoService.obtenerMovimientosMonedero(usuario_id).subscribe({
      next: (response) => {
        this.movimientos = response.movimientos;
      },
      error: (err) => {
        console.error("Error al obtener los movimientos del monedero:", err);
      }
    });
  }
  recargarConPayPalPersonalizado() {
    if (!this.cantidadRecarga || this.cantidadRecarga <= 0) {
      alert("Por favor, introduce una cantidad v\xE1lida para recargar.");
      return;
    }
    this.monederoService.crearOrdenMonedero(this.cantidadRecarga).subscribe({
      next: (response) => {
        if (response && response.approve_url) {
          window.location.href = response.approve_url;
        }
      },
      error: (err) => {
        console.error("Error al iniciar la recarga:", err);
      }
    });
  }
  renderPaypal() {
    paypal.Buttons({
      style: {
        layout: "vertical",
        color: "silver",
        shape: "pill",
        label: "checkout",
        height: 40
      },
      createOrder: (data, actions) => {
        const token = localStorage.getItem("access_token") || "";
        console.log("Token recuperado:", token);
        return fetch("http://localhost:5000/api/monedero/create-wallet-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ cantidad: this.cantidadRecarga })
        }).then((res) => {
          if (!res.ok) {
            return res.json().then((err) => {
              throw err;
            });
          }
          return res.json();
        }).then((order) => {
          const orderId = order.order_id || order.id;
          if (!orderId) {
            console.error("El backend no devolvi\xF3 un ID de orden v\xE1lido:", order);
          }
          return orderId;
        }).catch((error) => {
          console.error("Error al crear la orden de PayPal:", error);
        });
      },
      onApprove: (data, actions) => {
        this.capturarPagoPayPal(data.orderID);
      }
    }).render("#paypal-button-container");
  }
  capturarPagoPayPal(orderId) {
    this.monederoService.capturarOrdenMonedero(orderId).subscribe({
      next: (response) => {
        console.log("\xA1Recarga completada con \xE9xito!", response);
        if (response.nuevo_saldo !== void 0) {
          this.monedero = { saldo: response.nuevo_saldo };
        }
        this.cargarMonedero();
        this.cargarMovimientos(this.userData.usuario.id);
        this.cdRef.detectChanges();
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: {},
          replaceUrl: true
        });
      },
      error: (err) => {
        var _a, _b, _c, _d;
        console.error("Error al procesar la captura de PayPal:", err);
        if (((_d = (_c = (_b = (_a = err.error) == null ? void 0 : _a.detalle) == null ? void 0 : _b.details) == null ? void 0 : _c[0]) == null ? void 0 : _d.issue) === "ORDER_ALREADY_CAPTURED") {
          this.router.navigate([], {
            relativeTo: this.route,
            queryParams: {},
            replaceUrl: true
          });
        }
      }
    });
  }
  onCantidadChange() {
    if (!this.cantidadRecarga || this.cantidadRecarga <= 0) {
      this.cantidadRecarga = 5;
    }
    const container = document.getElementById("paypal-button-container");
    if (container) {
      container.innerHTML = "";
    }
    this.renderPaypal();
  }
  onInputChange(valorSeleccionado) {
    console.log("Valor oninputchange: ", valorSeleccionado);
    const nuevoValor = typeof valorSeleccionado === "object" && valorSeleccionado !== null ? valorSeleccionado.valor : valorSeleccionado;
    if (this.opcion_retirada_elegida === nuevoValor) {
      return;
    }
    this.opcion_retirada_elegida = nuevoValor;
    if (typeof valorSeleccionado === "object" && valorSeleccionado !== null) {
      this.modalConfirmarTransferencia(valorSeleccionado.descripcion);
    }
  }
  // TODO¡¡¡¡¡¡PENDIENTE MENSAJES !!!!!!!  // ¡¡¡¡¡¡PENDIENTE MENSAJES !!!!!!!  // ¡¡¡¡¡¡PENDIENTE MENSAJES !!!!!!!  // ¡¡¡¡¡¡PENDIENTE MENSAJES !!!!!!!  // ¡¡¡¡¡¡PENDIENTE MENSAJES !!!!!!!
  modalConfirmarTransferencia(valorSeleccionado) {
    console.log("Valor seleccionado: ", valorSeleccionado);
    this.translate.get(["Transferencia a tu favor", `Vas a hacer una transferencia a trav\xE9s de ${valorSeleccionado}`]).subscribe((translations) => {
      const titulo = translations["Transferencia a tu favor"];
      const mensaje = translations[`Vas a hacer una transferencia a trav\xE9s de ${valorSeleccionado}`];
      const dialogRef = this.dialog.open(HelpModalComponent, {
        data: { title: titulo, message: mensaje, showAcceptButton: true, eliminacion_cuenta: false },
        disableClose: true
      });
      dialogRef.afterClosed().subscribe((confirmar) => {
        if (confirmar === "registro") {
        } else {
          this.opcion_retirada_elegida = "";
        }
      });
    });
  }
  transferirSaldoMonedero() {
    var _a, _b;
    if (!((_b = (_a = this.userData) == null ? void 0 : _a.usuario) == null ? void 0 : _b.id))
      return;
    this.monederoService.transferenciaSaldoMonedero(this.userData.usuario.id).subscribe({
      next: (res) => {
        console.log("Respuesta backend al realizar transferencia: ", res);
      },
      error: (err) => {
        var _a2, _b2, _c;
        const tituloError = ((_a2 = err.error) == null ? void 0 : _a2.error) || "Transferencia no realizada";
        const detalleError = ((_b2 = err.error) == null ? void 0 : _b2.motivo) || ((_c = err.error) == null ? void 0 : _c.message) || "Ha habido un error al hacer la transferencia.";
        this.messageService.add({
          severity: "error",
          summary: tituloError,
          detail: detalleError,
          life: 5e3
        });
      }
    });
  }
  abrirIncidenciaPago() {
    return __async(this, null, function* () {
      const modal = yield this.modalController.create({
        component: AbrirIncidenciaModalComponent,
        componentProps: {
          categoria: "APP",
          subcategoriaPredeterminada: "PAGO",
          tituloContexto: "Problema con saldo o pagos"
        },
        cssClass: "modal-incidencia-custom"
      });
      yield modal.present();
      const { role } = yield modal.onWillDismiss();
      if (role === "confirm") {
        this.messageService.add({
          severity: "success",
          summary: "Incidencia enviada",
          detail: 'Hemos recibido tu consulta sobre el monedero. Podr\xE1s ver el seguimiento en "Mis Incidencias".',
          life: 4e3
        });
      }
    });
  }
  obtener_movimientos_monedero() {
  }
  static \u0275fac = function SaldoTransferenciasPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SaldoTransferenciasPage)(\u0275\u0275directiveInject(UserServicesService), \u0275\u0275directiveInject(MonederoService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ModalController));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SaldoTransferenciasPage, selectors: [["app-saldo-transferencias"]], decls: 67, vars: 35, consts: [[3, "backRoute", "searchRoute", "isLoggedIn"], [1, "saldo-content", 3, "fullscreen"], [1, "container", "py-1"], [1, "d-flex", "justify-content-center", "text-center", "mb-3"], [1, "d-flex", "justify-content-center", "text-center", "text-muted"], [1, "d-flex", "justify-content-center", "text-center", "text-muted", "mb-4"], [1, "d-flex", "justify-content-center"], [1, "card-saldo-box"], ["size", "4"], [1, "d-flex", "justify-content-center", "text-primary", 2, "font-size", "32px", "font-weight", "bold"], [1, "d-flex", "justify-content-center", "text-muted", 2, "font-size", "24px", "font-weight", "bold"], ["size", "8"], [1, "d-flex", "flex-column", "align-items-center", "w-100", "mb-3"], [1, "text-center"], [1, "d-flex", "justify-content-center", "mb-3", "w-100"], ["type", "number", "min", "5", "step", "5", "placeholder", "Cantidad a recargar (\u20AC)", 1, "form-control", "form-input", "text-center", "fw-bold", "text-primary", 2, "max-width", "220px", "font-size", "1.1rem", 3, "ngModelChange", "blur", "ngModel"], ["id", "paypal-button-container"], [1, "mt-3", "mb-3"], [1, "d-flex", "flex-column", "align-items-center", "w-100"], ["type", "number", "min", "1", "step", "5", "placeholder", "Cantidad a retirar (\u20AC)", 1, "form-control", "form-input", "text-center", "fw-bold", "text-primary", 2, "max-width", "220px", "font-size", "1.1rem", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn_bg", "mb-3", "mt-2"], ["idUnico", "opcion_retirada_elegida", "labelKey", "Selecciona una opci\xF3n", "placeholderKey", "Selecciona", "tooltipKey", "", "popoverKey", "", 3, "valor", "opciones", "soloLectura"], [1, "table-responsive", "w-100"], [1, "table", "table-striped", "tabla-saldos", "mx-auto", "shadow-sm"], ["scope", "col"], [1, "d-flex", "justify-content-start", "mb-2", "ms-2"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-warning", "d-flex", "align-items-center", "gap-1", "shadow-sm", "rounded-pill", "px-3", 3, "click"], [1, "fi", "fi-rr-info", "me-1"], ["idUnico", "opcion_retirada_elegida", "labelKey", "Selecciona una opci\xF3n", "placeholderKey", "Selecciona", "tooltipKey", "", "popoverKey", "", 3, "seleccionCambiada", "valor", "opciones", "soloLectura"], ["scope", "row"], [1, "fw-bold", 3, "ngClass"], ["colspan", "5", 1, "text-center", "py-3", "text-muted"]], template: function SaldoTransferenciasPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar", 0);
      \u0275\u0275elementStart(1, "ion-content", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "p", 4);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 5);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "ion-grid")(14, "div", 6)(15, "ion-row", 7)(16, "ion-col", 8)(17, "h3");
      \u0275\u0275text(18, "TU SALDO");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(19, SaldoTransferenciasPage_Conditional_19_Template, 3, 4, "span", 9)(20, SaldoTransferenciasPage_Conditional_20_Template, 3, 4, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "ion-col", 11)(22, "div", 12)(23, "p", 13);
      \u0275\u0275text(24, "Recarga tu monedero:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 14)(26, "input", 15);
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function SaldoTransferenciasPage_Template_input_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.cantidadRecarga, $event) || (ctx.cantidadRecarga = $event);
        return $event;
      });
      \u0275\u0275listener("blur", function SaldoTransferenciasPage_Template_input_blur_26_listener() {
        return ctx.onCantidadChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275element(27, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "mat-divider", 17);
      \u0275\u0275elementStart(29, "div", 18)(30, "p", 13);
      \u0275\u0275text(31, "Retira tu saldo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 14)(33, "input", 19);
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function SaldoTransferenciasPage_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.cantidadRecarga, $event) || (ctx.cantidadRecarga = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(34, SaldoTransferenciasPage_Conditional_34_Template, 2, 0, "button", 20);
      \u0275\u0275conditionalCreate(35, SaldoTransferenciasPage_Conditional_35_Template, 2, 0, "button", 20);
      \u0275\u0275conditionalCreate(36, SaldoTransferenciasPage_Conditional_36_Template, 1, 3, "app-selector-general", 21);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(37, "ion-row", 6)(38, "div", 22)(39, "h4", 6);
      \u0275\u0275text(40, "Movimientos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "table", 23)(42, "thead")(43, "tr")(44, "th", 24);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "th", 24);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "th", 24);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th", 24);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th", 24);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "tbody");
      \u0275\u0275conditionalCreate(60, SaldoTransferenciasPage_Conditional_60_Template, 2, 0)(61, SaldoTransferenciasPage_Conditional_61_Template, 4, 3, "tr");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(62, "div", 25)(63, "button", 26);
      \u0275\u0275listener("click", function SaldoTransferenciasPage_Template_button_click_63_listener() {
        return ctx.abrirIncidenciaPago();
      });
      \u0275\u0275element(64, "i", 27);
      \u0275\u0275elementStart(65, "span");
      \u0275\u0275text(66, "\xBFProblemas con tu recarga o saldo? Reportar incidencia");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("backRoute", "/home")("searchRoute", "search")("isLoggedIn", ctx.userLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 19, "SALDO.TITULO"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 21, "SALDO.SUBTITULO1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 23, "SALDO.SUBTITULO2"));
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.monedero ? 19 : 20);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.cantidadRecarga);
      \u0275\u0275control();
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.cantidadRecarga);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.tiene_cuenta_paypal ? 34 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.tiene_cuenta_bancaria ? 35 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.tiene_ambas ? 36 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 25, "SALDO.MOV_FECHA"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 27, "SALDO.MOV_HORA"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 29, "SALDO.MOV_CONCEPTO"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 31, "SALDO.MOV_SALDO_ANTERIOR"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 33, "SALDO.MOV_SALDO_ACTUAL"));
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.movimientos && ctx.movimientos.length > 0 ? 60 : 61);
    }
  }, dependencies: [
    IonCol,
    IonGrid,
    IonRow,
    IonContent,
    CommonModule,
    NgClass,
    FormsModule,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    MinValidator,
    NgModel,
    NavbarComponent,
    TranslateModule,
    MatDivider,
    SelectorGeneralComponent,
    DecimalPipe,
    CurrencyPipe,
    DatePipe,
    TranslatePipe
  ], styles: ['@charset "UTF-8";\n\n\n.saldo-content[_ngcontent-%COMP%] {\n  --%NS%background: #fdfbf7;\n}\n.card-saldo-box[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 35px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  display: flex;\n  text-align: center;\n  align-items: center;\n  width: 50%;\n  padding-right: 1%;\n}\n#paypal-button-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 450px;\n  margin: 0 auto;\n}\n.form-input[_ngcontent-%COMP%] {\n  border-radius: 35px;\n  border: 1px solid #b3b5e6;\n  padding: 10px 15px;\n  font-size: 0.95rem;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #f0d7b4;\n  box-shadow: 0 0 0 0.2rem rgba(240, 215, 180, 0.25);\n}\n.btn_bg[_ngcontent-%COMP%] {\n  background-color: #f0d7b4;\n  color: #000000;\n  font-weight: bold;\n  border-radius: 35px;\n  border: none;\n  transition: transform 0.2s ease, background-color 0.2s ease;\n}\n.btn_bg[_ngcontent-%COMP%]:hover {\n  background-color: #e5c497;\n  transform: scale(1.02);\n}\n.tabla-saldos[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 550px;\n  background-color: #ffffff;\n  border-radius: 35px;\n  overflow: hidden;\n}\n.tabla-saldos[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f0d7b4 !important;\n  color: #000000;\n  padding-left: 30px !important;\n}\n.tarjeta1[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 30px;\n  background-color: #e9ecef;\n  border-radius: 35px !important;\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center;\n}\n@media (max-width: 576px) {\n  .card-saldo-box[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 2%;\n  }\n}\n/*# sourceMappingURL=saldo-transferencias.page.css.map */'], changeDetection: 1 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SaldoTransferenciasPage, [{
    type: Component,
    args: [{ selector: "app-saldo-transferencias", standalone: true, changeDetection: ChangeDetectionStrategy.Eager, imports: [
      IonCol,
      IonGrid,
      IonRow,
      IonContent,
      CommonModule,
      FormsModule,
      NavbarComponent,
      TranslateModule,
      MatDivider,
      SelectorGeneralComponent
    ], template: `<app-navbar
  [backRoute]="'/home'"
  [searchRoute]="'search'"
  [isLoggedIn]="userLoggedIn"
></app-navbar>

<ion-content
  [fullscreen]="true"
  class="saldo-content"
>
  <div class="container py-1">
    <!-- Cabecera de la secci\xF3n -->
    <div class="d-flex justify-content-center text-center mb-3">
      <h1>{{ 'SALDO.TITULO' | translate }}</h1>
    </div>
    <p class="d-flex justify-content-center text-center text-muted">{{ 'SALDO.SUBTITULO1' | translate }}</p>
    <p class="d-flex justify-content-center text-center text-muted mb-4">{{ 'SALDO.SUBTITULO2' | translate }}</p>

    <ion-grid>
      <!-- Bloque de Saldo Actual -->
      <div class="d-flex justify-content-center">
        <ion-row class="card-saldo-box">
          <ion-col size="4">
            <h3>TU SALDO</h3>
            @if (monedero) {
            <span
              class="d-flex justify-content-center text-primary"
              style="font-size: 32px; font-weight: bold"
            >
              {{ monedero.saldo | number:'1.2-2' }} \u20AC
            </span>
            } @else {
            <span
              class="d-flex justify-content-center text-muted"
              style="font-size: 24px; font-weight: bold"
            >
              {{ 0 | currency: 'EUR' }}
            </span>
            }
          </ion-col>
          <ion-col size="8">
            <div class="d-flex flex-column align-items-center w-100 mb-3">
              <p class="text-center">Recarga tu monedero:</p>
              <div class="d-flex justify-content-center mb-3 w-100">
                <input
                  type="number"
                  class="form-control form-input text-center fw-bold text-primary"
                  [(ngModel)]="cantidadRecarga"
                  (blur)="onCantidadChange()"
                  min="5"
                  step="5"
                  placeholder="Cantidad a recargar (\u20AC)"
                  style="max-width: 220px; font-size: 1.1rem"
                />
              </div>
              <div id="paypal-button-container"></div>
            </div>
            <mat-divider class="mt-3 mb-3"></mat-divider>
            <div class="d-flex flex-column align-items-center w-100">
              <p class="text-center">Retira tu saldo</p>
              <div class="d-flex justify-content-center mb-3 w-100">
                <input
                  type="number"
                  class="form-control form-input text-center fw-bold text-primary"
                  [(ngModel)]="cantidadRecarga"
                  min="1"
                  step="5"
                  placeholder="Cantidad a retirar (\u20AC)"
                  style="max-width: 220px; font-size: 1.1rem"
                />
              </div>

              <!-- Bot\xF3n PayPal -->
              @if (tiene_cuenta_paypal) {
              <button
                type="button"
                class="btn btn_bg mb-3 mt-2"
              >
                Retirar a Paypal
              </button>
              }

              <!-- Bot\xF3n Banco -->
              @if (tiene_cuenta_bancaria) {
              <button
                type="button"
                class="btn btn_bg mb-3 mt-2"
              >
                Transferir a cuenta
              </button>
              }

              <!-- Selector General si tiene ambas -->
              @if (tiene_ambas) {
              <app-selector-general
                idUnico="opcion_retirada_elegida"
                labelKey="Selecciona una opci\xF3n"
                placeholderKey="Selecciona"
                tooltipKey=""
                popoverKey=""
                [valor]="opcion_retirada_elegida"
                [opciones]="listaOpcionesTransferencias"
                (seleccionCambiada)="onInputChange($event)"
                [soloLectura]="true"
              ></app-selector-general>
              }
            </div>
          </ion-col>
        </ion-row>
      </div>

      <!-- Tabla de Movimientos del Monedero -->
      <ion-row class="d-flex justify-content-center">
        <div class="table-responsive w-100">
          <h4 class="d-flex justify-content-center">Movimientos</h4>
          <table class="table table-striped tabla-saldos mx-auto shadow-sm">
            <thead>
              <tr>
                <th scope="col">{{ 'SALDO.MOV_FECHA' | translate }}</th>
                <th scope="col">{{ 'SALDO.MOV_HORA' | translate }}</th>
                <!-- Nueva cabecera opcional para hora -->
                <th scope="col">{{ 'SALDO.MOV_CONCEPTO' | translate }}</th>
                <th scope="col">{{ 'SALDO.MOV_SALDO_ANTERIOR' | translate }}</th>
                <th scope="col">{{ 'SALDO.MOV_SALDO_ACTUAL' | translate }}</th>
              </tr>
            </thead>
            <tbody>
              @if (movimientos && movimientos.length > 0) { @for (mov of movimientos; track mov) {
              <tr>
                <!-- Fecha -->
                <th scope="row">{{ mov.fecha | date: 'dd/MM/yyyy' }}</th>
                <!-- Hora -->
                <td>{{ mov.fecha | date: 'HH:mm' }}</td>
                <!-- Concepto (Recarga, Pago de viaje, Retirada...) -->
                <td>{{ mov.concepto }}</td>
                <!-- Saldo Anterior -->
                <td>{{ mov.saldo_anterior | number:'1.2-2' }} \u20AC</td>
                <!-- Saldo Actual (con color verde si aument\xF3, rojo si disminuy\xF3, o neutro) -->
                <td
                  class="fw-bold"
                  [ngClass]="mov.saldo_actual >= mov.saldo_anterior ? 'text-success' : 'text-dark'"
                >
                  {{ mov.saldo_actual | number:'1.2-2'}} \u20AC
                </td>
              </tr>
              } } @else {
              <tr>
                <td
                  colspan="5"
                  class="text-center py-3 text-muted"
                >
                  {{ 'SALDO.NO_HAY_MOVIMIENTOS' | translate }}
                </td>
              </tr>
              }
            </tbody>
          </table>
        </div>
      </ion-row>

      <!-- Columna Derecha: Recarga de Saldo con PayPal (Usando m\xE9todo de pago preferido) -->
    </ion-grid>
  </div>

  <!-- BANNER / BOT\xD3N PARA REPORTAR PROBLEMAS CON PAGOS -->
  <div class="d-flex justify-content-start mb-2 ms-2">
    <button
      type="button"
      class="btn btn-sm btn-outline-warning d-flex align-items-center gap-1 shadow-sm rounded-pill px-3"
      (click)="abrirIncidenciaPago()"
    >
      <i class="fi fi-rr-info me-1"></i>
      <span>\xBFProblemas con tu recarga o saldo? Reportar incidencia</span>
    </button>
  </div>
</ion-content>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/paginas-panel-usuario/saldo-transferencias/saldo-transferencias.page.scss */\n.saldo-content {\n  --background: #fdfbf7;\n}\n.card-saldo-box {\n  background-color: #ffffff;\n  border-radius: 35px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  display: flex;\n  text-align: center;\n  align-items: center;\n  width: 50%;\n  padding-right: 1%;\n}\n#paypal-button-container {\n  width: 100%;\n  max-width: 450px;\n  margin: 0 auto;\n}\n.form-input {\n  border-radius: 35px;\n  border: 1px solid #b3b5e6;\n  padding: 10px 15px;\n  font-size: 0.95rem;\n}\n.form-input:focus {\n  border-color: #f0d7b4;\n  box-shadow: 0 0 0 0.2rem rgba(240, 215, 180, 0.25);\n}\n.btn_bg {\n  background-color: #f0d7b4;\n  color: #000000;\n  font-weight: bold;\n  border-radius: 35px;\n  border: none;\n  transition: transform 0.2s ease, background-color 0.2s ease;\n}\n.btn_bg:hover {\n  background-color: #e5c497;\n  transform: scale(1.02);\n}\n.tabla-saldos {\n  width: 100%;\n  max-width: 550px;\n  background-color: #ffffff;\n  border-radius: 35px;\n  overflow: hidden;\n}\n.tabla-saldos th {\n  background-color: #f0d7b4 !important;\n  color: #000000;\n  padding-left: 30px !important;\n}\n.tarjeta1 {\n  width: 50px;\n  height: 30px;\n  background-color: #e9ecef;\n  border-radius: 35px !important;\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center;\n}\n@media (max-width: 576px) {\n  .card-saldo-box {\n    width: 100%;\n    padding: 2%;\n  }\n}\n/*# sourceMappingURL=saldo-transferencias.page.css.map */\n'] }]
  }], () => [{ type: UserServicesService }, { type: MonederoService }, { type: ActivatedRoute }, { type: ChangeDetectorRef }, { type: Router }, { type: TranslateService }, { type: MatDialog }, { type: MessageService }, { type: ModalController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SaldoTransferenciasPage, { className: "SaldoTransferenciasPage", filePath: "src/app/pages/paginas-panel-usuario/saldo-transferencias/saldo-transferencias.page.ts", lineNumber: 40 });
})();
export {
  SaldoTransferenciasPage
};
//# debugId=69917936-e791-526b-8d37-ecd3b500a90b
//# sourceMappingURL=saldo-transferencias.page-I6OYNJCA.js.map
