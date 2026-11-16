import {
  MonederoService
} from "./chunk-2IIQDTSF.js";
import {
  SelectorGeneralComponent
} from "./chunk-KKT6E5SK.js";
import {
  AbrirIncidenciaModalComponent
} from "./chunk-PP2LB3CA.js";
import "./chunk-TZ44Z4IZ.js";
import "./chunk-TDPVVR7R.js";
import "./chunk-XX3IZESI.js";
import "./chunk-5FOPRIRV.js";
import "./chunk-JAMMMALH.js";
import {
  NavbarComponent
} from "./chunk-QIUENU5G.js";
import "./chunk-XGLFMII2.js";
import "./chunk-FPL4PN3H.js";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
  ModalController
} from "./chunk-WO2ZSM4X.js";
import {
  HelpModalComponent
} from "./chunk-GYAYVE5N.js";
import "./chunk-7NH46FL3.js";
import {
  MessageService
} from "./chunk-AF4L5EWO.js";
import {
  UserServicesService
} from "./chunk-YZOGC4HD.js";
import {
  MatDivider
} from "./chunk-ZYMQAXGI.js";
import "./chunk-UIKNRIU5.js";
import "./chunk-FCE3VLZJ.js";
import {
  MatDialog
} from "./chunk-CGCOLBWN.js";
import "./chunk-H72L7N4J.js";
import "./chunk-6IWXE3BU.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-XHXT42RH.js";
import {
  ActivatedRoute,
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
  Router
} from "./chunk-TU2LK3TM.js";
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-7PPOBOFB.js";
import {
  ChangeDetectorRef,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HLETIGG3.js";
import "./chunk-7556B6PN.js";
import "./chunk-W7NNY2EY.js";
import "./chunk-5UBTS3LV.js";
import "./chunk-5U7ILDTA.js";
import "./chunk-DBFJ6K2U.js";
import "./chunk-46CSAHEN.js";
import "./chunk-ZANXXOCD.js";
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
import "./chunk-FZZSIR43.js";
import "./chunk-X4NBNE3H.js";
import "./chunk-Z325AMW6.js";
import "./chunk-GEKSWYBB.js";
import "./chunk-YAS4LRVC.js";
import {
  __async
} from "./chunk-5SZB5ECT.js";

// src/app/pages/paginas-panel-usuario/saldo-transferencias/saldo-transferencias.page.ts
function SaldoTransferenciasPage_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r1.monedero.saldo, "1.2-2"), " \u20AC ");
  }
}
function SaldoTransferenciasPage_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, 0, "EUR"), " ");
  }
}
function SaldoTransferenciasPage_button_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275text(1, " Retirar a Paypal ");
    \u0275\u0275elementEnd();
  }
}
function SaldoTransferenciasPage_button_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275text(1, " Transferir a cuenta ");
    \u0275\u0275elementEnd();
  }
}
function SaldoTransferenciasPage_app_selector_general_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-selector-general", 33);
    \u0275\u0275listener("seleccionCambiada", function SaldoTransferenciasPage_app_selector_general_37_Template_app_selector_general_seleccionCambiada_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInputChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("valor", ctx_r1.opcion_retirada_elegida)("opciones", ctx_r1.listaOpcionesTransferencias)("soloLectura", true);
  }
}
function SaldoTransferenciasPage_ng_container_61_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 35);
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
    \u0275\u0275elementStart(12, "td", 36);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mov_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 6, mov_r4.fecha, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 9, mov_r4.fecha, "HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(mov_r4.concepto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 12, mov_r4.saldo_anterior, "1.2-2"), " \u20AC");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", mov_r4.saldo_actual >= mov_r4.saldo_anterior ? "text-success" : "text-dark");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 15, mov_r4.saldo_actual, "1.2-2"), " \u20AC ");
  }
}
function SaldoTransferenciasPage_ng_container_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SaldoTransferenciasPage_ng_container_61_tr_1_Template, 15, 18, "tr", 34);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.movimientos);
  }
}
function SaldoTransferenciasPage_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 37);
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
    this.translate.get([
      "Transferencia a tu favor",
      `Vas a hacer una transferencia a trav\xE9s de ${valorSeleccionado}`
    ]).subscribe((translations) => {
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SaldoTransferenciasPage, selectors: [["app-saldo-transferencias"]], decls: 69, vars: 37, consts: [["sinSaldo", ""], ["noMovimientos", ""], [3, "backRoute", "searchRoute", "isLoggedIn"], [1, "saldo-content", 3, "fullscreen"], [1, "container", "py-1"], [1, "d-flex", "justify-content-center", "text-center", "mb-3"], [1, "d-flex", "justify-content-center", "text-center", "text-muted"], [1, "d-flex", "justify-content-center", "text-center", "text-muted", "mb-4"], [1, "d-flex", "justify-content-center"], [1, "card-saldo-box"], ["size", "4"], ["class", "d-flex justify-content-center text-primary", "style", "font-size: 32px; font-weight: bold", 4, "ngIf", "ngIfElse"], ["size", "8"], [1, "d-flex", "flex-column", "align-items-center", "w-100", "mb-3"], [1, "text-center"], [1, "d-flex", "justify-content-center", "mb-3", "w-100"], ["type", "number", "min", "5", "step", "5", "placeholder", "Cantidad a recargar (\u20AC)", 1, "form-control", "form-input", "text-center", "fw-bold", "text-primary", 2, "max-width", "220px", "font-size", "1.1rem", 3, "ngModelChange", "blur", "ngModel"], ["id", "paypal-button-container"], [1, "mt-3", "mb-3"], [1, "d-flex", "flex-column", "align-items-center", "w-100"], ["type", "number", "min", "1", "step", "5", "placeholder", "Cantidad a retirar (\u20AC)", 1, "form-control", "form-input", "text-center", "fw-bold", "text-primary", 2, "max-width", "220px", "font-size", "1.1rem", 3, "ngModelChange", "ngModel"], ["type", "button", "class", "btn btn_bg mb-3 mt-2", 4, "ngIf"], ["idUnico", "opcion_retirada_elegida", "labelKey", "Selecciona una opci\xF3n", "placeholderKey", "Selecciona", "tooltipKey", "", "popoverKey", "", 3, "valor", "opciones", "soloLectura", "seleccionCambiada", 4, "ngIf"], [1, "table-responsive", "w-100"], [1, "table", "table-striped", "tabla-saldos", "mx-auto", "shadow-sm"], ["scope", "col"], [4, "ngIf", "ngIfElse"], [1, "d-flex", "justify-content-start", "mb-2", "ms-2"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-warning", "d-flex", "align-items-center", "gap-1", "shadow-sm", "rounded-pill", "px-3", 3, "click"], [1, "fi", "fi-rr-info", "me-1"], [1, "d-flex", "justify-content-center", "text-primary", 2, "font-size", "32px", "font-weight", "bold"], [1, "d-flex", "justify-content-center", "text-muted", 2, "font-size", "24px", "font-weight", "bold"], ["type", "button", 1, "btn", "btn_bg", "mb-3", "mt-2"], ["idUnico", "opcion_retirada_elegida", "labelKey", "Selecciona una opci\xF3n", "placeholderKey", "Selecciona", "tooltipKey", "", "popoverKey", "", 3, "seleccionCambiada", "valor", "opciones", "soloLectura"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "fw-bold", 3, "ngClass"], ["colspan", "5", 1, "text-center", "py-3", "text-muted"]], template: function SaldoTransferenciasPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "app-navbar", 2);
      \u0275\u0275elementStart(1, "ion-content", 3)(2, "div", 4)(3, "div", 5)(4, "h1");
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 7);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "ion-grid")(14, "div", 8)(15, "ion-row", 9)(16, "ion-col", 10)(17, "h3");
      \u0275\u0275text(18, "TU SALDO");
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, SaldoTransferenciasPage_span_19_Template, 3, 4, "span", 11)(20, SaldoTransferenciasPage_ng_template_20_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "ion-col", 12)(23, "div", 13)(24, "p", 14);
      \u0275\u0275text(25, "Recarga tu monedero:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 15)(27, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function SaldoTransferenciasPage_Template_input_ngModelChange_27_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.cantidadRecarga, $event) || (ctx.cantidadRecarga = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("blur", function SaldoTransferenciasPage_Template_input_blur_27_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCantidadChange());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275element(28, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "mat-divider", 18);
      \u0275\u0275elementStart(30, "div", 19)(31, "p", 14);
      \u0275\u0275text(32, "Retira tu saldo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 15)(34, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function SaldoTransferenciasPage_Template_input_ngModelChange_34_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.cantidadRecarga, $event) || (ctx.cantidadRecarga = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(35, SaldoTransferenciasPage_button_35_Template, 2, 0, "button", 21)(36, SaldoTransferenciasPage_button_36_Template, 2, 0, "button", 21)(37, SaldoTransferenciasPage_app_selector_general_37_Template, 1, 3, "app-selector-general", 22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(38, "ion-row", 8)(39, "div", 23)(40, "h4", 8);
      \u0275\u0275text(41, "Movimientos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "table", 24)(43, "thead")(44, "tr")(45, "th", 25);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "th", 25);
      \u0275\u0275text(49);
      \u0275\u0275pipe(50, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "th", 25);
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "th", 25);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "th", 25);
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "tbody");
      \u0275\u0275template(61, SaldoTransferenciasPage_ng_container_61_Template, 2, 1, "ng-container", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275template(62, SaldoTransferenciasPage_ng_template_62_Template, 4, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(64, "div", 27)(65, "button", 28);
      \u0275\u0275listener("click", function SaldoTransferenciasPage_Template_button_click_65_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.abrirIncidenciaPago());
      });
      \u0275\u0275element(66, "i", 29);
      \u0275\u0275elementStart(67, "span");
      \u0275\u0275text(68, "\xBFProblemas con tu recarga o saldo? Reportar incidencia");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const sinSaldo_r5 = \u0275\u0275reference(21);
      const noMovimientos_r6 = \u0275\u0275reference(63);
      \u0275\u0275property("backRoute", "/home")("searchRoute", "search")("isLoggedIn", ctx.userLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 21, "SALDO.TITULO"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 23, "SALDO.SUBTITULO1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 25, "SALDO.SUBTITULO2"));
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.monedero)("ngIfElse", sinSaldo_r5);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.cantidadRecarga);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.cantidadRecarga);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tiene_cuenta_paypal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tiene_cuenta_bancaria);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tiene_ambas);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 27, "SALDO.MOV_FECHA"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 29, "SALDO.MOV_HORA"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 31, "SALDO.MOV_CONCEPTO"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 33, "SALDO.MOV_SALDO_ANTERIOR"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 35, "SALDO.MOV_SALDO_ACTUAL"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.movimientos && ctx.movimientos.length > 0)("ngIfElse", noMovimientos_r6);
    }
  }, dependencies: [
    IonCol,
    IonGrid,
    IonRow,
    IonContent,
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
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
  ], styles: ['@charset "UTF-8";\n\n\n\n.saldo-content[_ngcontent-%COMP%] {\n  --background: #fdfbf7;\n}\n.card-saldo-box[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 35px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  display: flex;\n  text-align: center;\n  align-items: center;\n  width: 50%;\n  padding-right: 1%;\n}\n#paypal-button-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 450px;\n  margin: 0 auto;\n}\n.form-input[_ngcontent-%COMP%] {\n  border-radius: 35px;\n  border: 1px solid #b3b5e6;\n  padding: 10px 15px;\n  font-size: 0.95rem;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #f0d7b4;\n  box-shadow: 0 0 0 0.2rem rgba(240, 215, 180, 0.25);\n}\n.btn_bg[_ngcontent-%COMP%] {\n  background-color: #f0d7b4;\n  color: #000000;\n  font-weight: bold;\n  border-radius: 35px;\n  border: none;\n  transition: transform 0.2s ease, background-color 0.2s ease;\n}\n.btn_bg[_ngcontent-%COMP%]:hover {\n  background-color: #e5c497;\n  transform: scale(1.02);\n}\n.tabla-saldos[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 550px;\n  background-color: #ffffff;\n  border-radius: 35px;\n  overflow: hidden;\n}\n.tabla-saldos[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f0d7b4 !important;\n  color: #000000;\n  padding-left: 30px !important;\n}\n.tarjeta1[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 30px;\n  background-color: #e9ecef;\n  border-radius: 35px !important;\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center;\n}\n@media (max-width: 576px) {\n  .card-saldo-box[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 2%;\n  }\n}\n/*# sourceMappingURL=saldo-transferencias.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SaldoTransferenciasPage, [{
    type: Component,
    args: [{ selector: "app-saldo-transferencias", standalone: true, imports: [
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
    ], template: `<app-navbar [backRoute]="'/home'" [searchRoute]="'search'" [isLoggedIn]="userLoggedIn"></app-navbar>

<ion-content [fullscreen]="true" class="saldo-content">
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
            <span *ngIf="monedero; else sinSaldo" class="d-flex justify-content-center text-primary"
              style="font-size: 32px; font-weight: bold">
              {{ monedero.saldo | number:'1.2-2' }} \u20AC
            </span>
            <ng-template #sinSaldo>
              <span class="d-flex justify-content-center text-muted" style="font-size: 24px; font-weight: bold">
                {{ 0 | currency: 'EUR' }}
              </span>
            </ng-template>
          </ion-col>
          <ion-col size="8">
            <div class="d-flex flex-column align-items-center w-100 mb-3">
              <p class="text-center">Recarga tu monedero:</p>
              <div class="d-flex justify-content-center mb-3 w-100">
                <input type="number" class="form-control form-input text-center fw-bold text-primary"
                  [(ngModel)]="cantidadRecarga" (blur)="onCantidadChange()" min="5" step="5"
                  placeholder="Cantidad a recargar (\u20AC)" style="max-width: 220px; font-size: 1.1rem" />
              </div>
              <div id="paypal-button-container"></div>
            </div>
            <mat-divider class="mt-3 mb-3"></mat-divider>
            <div class="d-flex flex-column align-items-center w-100">
              <p class="text-center">Retira tu saldo</p>
              <div class="d-flex justify-content-center mb-3 w-100">
                <input type="number" class="form-control form-input text-center fw-bold text-primary"
                  [(ngModel)]="cantidadRecarga" min="1" step="5" placeholder="Cantidad a retirar (\u20AC)"
                  style="max-width: 220px; font-size: 1.1rem" />
              </div>

              <!-- Bot\xF3n PayPal -->
              <button *ngIf="tiene_cuenta_paypal" type="button" class="btn btn_bg mb-3 mt-2">
                Retirar a Paypal
              </button>

              <!-- Bot\xF3n Banco -->
              <button *ngIf="tiene_cuenta_bancaria" type="button" class="btn btn_bg mb-3 mt-2">
                Transferir a cuenta
              </button>

              <!-- Selector General si tiene ambas -->
              <app-selector-general *ngIf="tiene_ambas" idUnico="opcion_retirada_elegida"
                labelKey="Selecciona una opci\xF3n" placeholderKey="Selecciona" tooltipKey="" popoverKey=""
                [valor]="opcion_retirada_elegida" [opciones]="listaOpcionesTransferencias"
                (seleccionCambiada)="onInputChange($event)" [soloLectura]="true"></app-selector-general>
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
              <ng-container *ngIf="movimientos && movimientos.length > 0; else noMovimientos">
                <tr *ngFor="let mov of movimientos">
                  <!-- Fecha -->
                  <th scope="row">{{ mov.fecha | date: 'dd/MM/yyyy' }}</th>

                  <!-- Hora -->
                  <td>{{ mov.fecha | date: 'HH:mm' }}</td>

                  <!-- Concepto (Recarga, Pago de viaje, Retirada...) -->
                  <td>{{ mov.concepto }}</td>

                  <!-- Saldo Anterior -->
                  <td>{{ mov.saldo_anterior | number:'1.2-2' }} \u20AC</td>

                  <!-- Saldo Actual (con color verde si aument\xF3, rojo si disminuy\xF3, o neutro) -->
                  <td class="fw-bold" [ngClass]="mov.saldo_actual >= mov.saldo_anterior ? 'text-success' : 'text-dark'">
                    {{ mov.saldo_actual | number:'1.2-2'}} \u20AC
                  </td>
                </tr>
              </ng-container>
            </tbody>
            <ng-template #noMovimientos>
              <tr>
                <td colspan="5" class="text-center py-3 text-muted">
                  {{ 'SALDO.NO_HAY_MOVIMIENTOS' | translate }}
                </td>
              </tr>
            </ng-template>
          </table>
        </div>
      </ion-row>

      <!-- Columna Derecha: Recarga de Saldo con PayPal (Usando m\xE9todo de pago preferido) -->
    </ion-grid>
  </div>

  <!-- BANNER / BOT\xD3N PARA REPORTAR PROBLEMAS CON PAGOS -->
  <div class="d-flex justify-content-start mb-2 ms-2">
    <button type="button"
      class="btn btn-sm btn-outline-warning d-flex align-items-center gap-1 shadow-sm rounded-pill px-3"
      (click)="abrirIncidenciaPago()">
      <i class="fi fi-rr-info me-1"></i>
      <span>\xBFProblemas con tu recarga o saldo? Reportar incidencia</span>
    </button>
  </div>

</ion-content>`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/paginas-panel-usuario/saldo-transferencias/saldo-transferencias.page.scss */\n.saldo-content {\n  --background: #fdfbf7;\n}\n.card-saldo-box {\n  background-color: #ffffff;\n  border-radius: 35px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  display: flex;\n  text-align: center;\n  align-items: center;\n  width: 50%;\n  padding-right: 1%;\n}\n#paypal-button-container {\n  width: 100%;\n  max-width: 450px;\n  margin: 0 auto;\n}\n.form-input {\n  border-radius: 35px;\n  border: 1px solid #b3b5e6;\n  padding: 10px 15px;\n  font-size: 0.95rem;\n}\n.form-input:focus {\n  border-color: #f0d7b4;\n  box-shadow: 0 0 0 0.2rem rgba(240, 215, 180, 0.25);\n}\n.btn_bg {\n  background-color: #f0d7b4;\n  color: #000000;\n  font-weight: bold;\n  border-radius: 35px;\n  border: none;\n  transition: transform 0.2s ease, background-color 0.2s ease;\n}\n.btn_bg:hover {\n  background-color: #e5c497;\n  transform: scale(1.02);\n}\n.tabla-saldos {\n  width: 100%;\n  max-width: 550px;\n  background-color: #ffffff;\n  border-radius: 35px;\n  overflow: hidden;\n}\n.tabla-saldos th {\n  background-color: #f0d7b4 !important;\n  color: #000000;\n  padding-left: 30px !important;\n}\n.tarjeta1 {\n  width: 50px;\n  height: 30px;\n  background-color: #e9ecef;\n  border-radius: 35px !important;\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center;\n}\n@media (max-width: 576px) {\n  .card-saldo-box {\n    width: 100%;\n    padding: 2%;\n  }\n}\n/*# sourceMappingURL=saldo-transferencias.page.css.map */\n'] }]
  }], () => [{ type: UserServicesService }, { type: MonederoService }, { type: ActivatedRoute }, { type: ChangeDetectorRef }, { type: Router }, { type: TranslateService }, { type: MatDialog }, { type: MessageService }, { type: ModalController }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SaldoTransferenciasPage, { className: "SaldoTransferenciasPage", filePath: "src/app/pages/paginas-panel-usuario/saldo-transferencias/saldo-transferencias.page.ts", lineNumber: 39 });
})();
export {
  SaldoTransferenciasPage
};
//# sourceMappingURL=saldo-transferencias.page-XFSD5AOZ.js.map
