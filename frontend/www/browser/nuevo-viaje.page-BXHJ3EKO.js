import {
  SelectorGeneralComponent
} from "./chunk-677CIR45.js";
import {
  BuscadorLocalidadesService
} from "./chunk-ZJFQTOAY.js";
import {
  AbrirIncidenciaModalComponent
} from "./chunk-JAM6IO7S.js";
import "./chunk-UORRCZJ6.js";
import "./chunk-TDPVVR7R.js";
import {
  ToastModule
} from "./chunk-H4X3A5HG.js";
import {
  SpinnerComponent
} from "./chunk-AZFY3OZL.js";
import {
  MatTooltipModule
} from "./chunk-WRNS2BOT.js";
import {
  TravelService
} from "./chunk-BRLSMG3J.js";
import "./chunk-OYP26GS3.js";
import {
  NavbarComponent
} from "./chunk-YAGW6LPY.js";
import "./chunk-N25HX3QD.js";
import "./chunk-HCR355QR.js";
import {
  FuncionesComunes
} from "./chunk-TMB2KEQX.js";
import "./chunk-TGPQDEZS.js";
import "./chunk-BLKEDZE4.js";
import "./chunk-N7S2XU3X.js";
import "./chunk-CIEE2FXQ.js";
import "./chunk-G5UZDB7B.js";
import {
  MessageService
} from "./chunk-WDE6N5F6.js";
import "./chunk-34RASOLQ.js";
import {
  MatButtonModule
} from "./chunk-ULIFZXTE.js";
import "./chunk-WBBLYEAR.js";
import {
  MatDialogModule
} from "./chunk-LLKVXR72.js";
import {
  MatIconModule
} from "./chunk-Z2EGICVD.js";
import {
  IonContent,
  IonRippleEffect,
  IonRow,
  IonicModule,
  ModalController,
  RouterLinkDelegateDirective
} from "./chunk-XTRPVKSN.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-PWPN4F54.js";
import {
  ActivatedRoute,
  FormsModule,
  Location,
  NavController,
  NgControlStatus,
  NgModel,
  RouterLink,
  RouterModule
} from "./chunk-DD4MNYDA.js";
import {
  ChangeDetectorRef,
  Component,
  HostListener,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
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
import "./chunk-MOKADOCG.js";
import "./chunk-4UX5YYJM.js";
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
import "./chunk-FUL4CNB6.js";
import "./chunk-AIOHWISL.js";
import "./chunk-FPPEK4XH.js";
import "./chunk-MEOWV5C6.js";
import "./chunk-DI3VEDFV.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-5SZB5ECT.js";

// src/app/pages/nuevoViaje/nuevo-viaje/nuevo-viaje.page.ts
function NuevoViajePage_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner", 9);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("texto_spinner", \u0275\u0275pipeBind1(1, 2, ctx_r0.texto_spinner))("tamano_completo", false);
  }
}
function NuevoViajePage_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 22)(6, "button", 28);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("click", function NuevoViajePage_Conditional_29_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.funcionesComunes.openConfirmModal(ctx_r0.title_help_carnet, ctx_r0.message_help_auth));
    });
    \u0275\u0275element(8, "img", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 3, "NUEVOVIAJE.NUEVO_VIAJE.ARIALABEL_AVISO_INICIOSESION"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "NUEVOVIAJE.NO_REGISTRADO_LOGIN"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 7, "NUEVOVIAJE.NUEVO_VIAJE.ARIALABEL_AYUDA_INICIO_REGISTRO"));
  }
}
var NuevoViajePage = class _NuevoViajePage {
  navCtrl;
  viajesService;
  funcionesComunes;
  translate;
  cdr;
  location;
  travelService;
  buscadorLocalidadesService;
  route;
  modalController;
  messageService;
  userLoggedIn = false;
  origenCtrl;
  destinoCtrl;
  plazas = "";
  hora_seleccionada = "";
  title_help_carnet = "";
  message_help_carnet = "";
  message_help_auth = "";
  texto_spinner = "Buscando ubicaci\xF3n...";
  spinnerActivo = false;
  irAtrasImg = "../../../assets/sistema/atras.png";
  opcionesPlazas = [
    { id: "1", descripcion: "1" },
    { id: "2", descripcion: "2" },
    { id: "3", descripcion: "3" },
    { id: "4", descripcion: "4" }
  ];
  closeDropdown(event) {
  }
  constructor(navCtrl, viajesService, funcionesComunes, translate, cdr, location, travelService, buscadorLocalidadesService, route, modalController, messageService) {
    this.navCtrl = navCtrl;
    this.viajesService = viajesService;
    this.funcionesComunes = funcionesComunes;
    this.translate = translate;
    this.cdr = cdr;
    this.location = location;
    this.travelService = travelService;
    this.buscadorLocalidadesService = buscadorLocalidadesService;
    this.route = route;
    this.modalController = modalController;
    this.messageService = messageService;
    this.origenCtrl = this.buscadorLocalidadesService.crearEstadoControl();
    this.destinoCtrl = this.buscadorLocalidadesService.crearEstadoControl();
    this.buscadorLocalidadesService.inicializarBuscador(this.origenCtrl);
    this.buscadorLocalidadesService.inicializarBuscador(this.destinoCtrl);
    this.translate.get("NUEVOVIAJE.MENSAJE_AYUDA_CARNET").subscribe((traduccion) => {
      this.message_help_carnet = traduccion;
    });
    this.translate.get("NUEVOVIAJE.TITULO_MODAL_AYUDA").subscribe((traduccion) => {
      this.title_help_carnet = traduccion;
    });
    this.translate.get("NUEVOVIAJE.MENSAJE_AYUDA_LOGIN_REG").subscribe((traduccion) => {
      this.message_help_auth = traduccion;
    });
  }
  ngOnInit() {
    this.userLoggedIn = this.funcionesComunes.isUserLoggedIn();
    this.route.queryParams.subscribe((params) => {
      if (params["destino"]) {
        const destinoSugerido = params["destino"];
        this.destinoCtrl.valorTexto = destinoSugerido;
        const viajeActual = this.travelService.getViajeData() || {};
        this.travelService.setViajeData(__spreadProps(__spreadValues({}, viajeActual), {
          destino: destinoSugerido
        }));
        this.cdr.detectChanges();
      }
    });
  }
  get origen() {
    return this.origenCtrl.valorTexto;
  }
  set origen(val) {
    this.origenCtrl.valorTexto = val;
  }
  get destino() {
    return this.destinoCtrl.valorTexto;
  }
  set destino(val) {
    this.destinoCtrl.valorTexto = val;
  }
  goTo() {
    const viajeData = {
      origen: this.origen,
      destino: this.destino,
      plazas: this.plazas,
      hora_salida: this.hora_seleccionada
    };
    if (!this.userLoggedIn) {
      this.funcionesComunes.openConfirmModal(this.title_help_carnet, this.message_help_auth);
    } else {
      this.viajesService.setViajeData(viajeData);
      this.navCtrl.navigateRoot("/data-viaje", { replaceUrl: true });
    }
  }
  goBack() {
    this.location.back();
  }
  buscarUbicacion() {
    this.spinnerActivo = true;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
        fetch(url).then((response) => response.json()).then((data) => {
          if (data && data.address) {
            let city = data.address.city || data.address.town || data.address.village || "";
            if (city) {
              this.origenCtrl.valorTexto = city;
              const viajeData = __spreadProps(__spreadValues({}, this.travelService.getViajeData()), {
                origen: city
              });
              this.travelService.setViajeData(viajeData);
              this.cdr.detectChanges();
              this.spinnerActivo = false;
            }
          }
        }).catch((error) => console.error("Error al obtener la ubicaci\xF3n:", error));
      }, (error) => {
        console.error("Error de geolocalizaci\xF3n:", error.message);
      });
    }
  }
  seleccionarPlazas(opcion) {
    this.plazas = typeof opcion === "object" ? opcion.descripcion || opcion.valor : opcion;
  }
  /**
   * Abre el modal para reportar incidencias asociadas a la creación de un viaje.
   */
  abrirIncidenciaCreacionViaje() {
    return __async(this, null, function* () {
      const modal = yield this.modalController.create({
        component: AbrirIncidenciaModalComponent,
        componentProps: {
          categoria: "APP",
          subcategoriaPredeterminada: "CREACION_VIAJE",
          tituloContexto: "Problema al crear el viaje"
        },
        cssClass: "modal-incidencia-custom"
      });
      yield modal.present();
      const { role } = yield modal.onWillDismiss();
      if (role === "confirm") {
        this.messageService.add({
          severity: "success",
          summary: "Incidencia enviada",
          detail: 'Hemos recibido tu consulta. Podr\xE1s ver el seguimiento en "Mis Incidencias".',
          life: 4e3
        });
      }
    });
  }
  static \u0275fac = function NuevoViajePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NuevoViajePage)(\u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(TravelService), \u0275\u0275directiveInject(FuncionesComunes), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(TravelService), \u0275\u0275directiveInject(BuscadorLocalidadesService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NuevoViajePage, selectors: [["app-nuevo-viaje"]], hostBindings: function NuevoViajePage_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function NuevoViajePage_click_HostBindingHandler($event) {
        return ctx.closeDropdown($event);
      }, \u0275\u0275resolveDocument);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 52, vars: 46, consts: [[3, "backRoute", "searchRoute", "isLoggedIn"], ["role", "main", 3, "fullscreen"], [1, "primera-seccion"], [1, "imagen-fondo"], [1, "formulario-viaje"], [1, "contenido_formulario"], ["id", "label-origen", 1, "text-start"], [1, "input-container", "mb-4"], ["idUnico", "input-origen", "aria-labelledby", "label-origen", "placeholderKey", "PLACEHOLDER.DONDE_COMIENZA", 1, "w-100", 3, "ngModelChange", "seleccionCambiada", "alAbrir", "textoCambiado", "opciones", "ngModel", "soloLectura", "mostrarFlechaSelector"], ["aria-live", "polite", "role", "status", 3, "texto_spinner", "tamano_completo"], [1, "input-container"], ["type", "button", 1, "btn", "btn_bg", "mb-3", 3, "click"], ["aria-hidden", "true", 1, "fi", "fi-rr-marker"], ["id", "label-destino", 1, "text-start"], ["idUnico", "input-destino", "aria-labelledby", "label-destino", "placeholderKey", "PLACEHOLDER.HASTA_DONDE", 1, "w-100", 3, "ngModelChange", "textoCambiado", "seleccionCambiada", "alAbrir", "opciones", "ngModel", "soloLectura", "mostrarFlechaSelector"], ["id", "label-plazas", 1, "text-start", "mt-4"], [1, "input-container", "mb-3"], ["idUnico", "input-plazas", "aria-labelledby", "label-plazas", "placeholderKey", "PLACEHOLDER.NUM_PLAZAS", 1, "w-100", 3, "ngModelChange", "seleccionCambiada", "opciones", "ngModel", "valor", "soloLectura", "mostrarFlechaSelector"], ["role", "region", 1, "alert"], ["type", "button", 1, "btn-publicar", "ion-activatable", "ripple-parent", "circle", 3, "click"], [1, "segunda-seccion"], [1, "centro-ayuda"], [1, "d-flex", "justify-content-center"], ["type", "button", "routerLink", "/centro-ayuda", 1, "btn", "btn_bg", "consulta"], ["src", "../../../../assets/sistema/interrogatorio.png", "alt", "", "aria-hidden", "true", 1, "marcador-icon", "input-icon"], [1, "d-flex", "justify-content-start", "mb-2", "ms-2"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-warning", "d-flex", "align-items-center", "gap-1", "shadow-sm", "rounded-pill", "px-3", 3, "click"], [1, "fi", "fi-rr-info", "me-1"], ["type", "button", 1, "help_btn", "d-flex", "justify-content-center", 3, "click"]], template: function NuevoViajePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar", 0);
      \u0275\u0275elementStart(1, "ion-content", 1)(2, "ion-row", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "label", 6);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7)(10, "app-selector-general", 8);
      \u0275\u0275twoWayListener("ngModelChange", function NuevoViajePage_Template_app_selector_general_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.origenCtrl.valorTexto, $event) || (ctx.origenCtrl.valorTexto = $event);
        return $event;
      });
      \u0275\u0275listener("seleccionCambiada", function NuevoViajePage_Template_app_selector_general_seleccionCambiada_10_listener($event) {
        return ctx.buscadorLocalidadesService.seleccionarLocalidad(ctx.origenCtrl, $event);
      })("alAbrir", function NuevoViajePage_Template_app_selector_general_alAbrir_10_listener() {
        return ctx.origenCtrl.estaActivo = true;
      })("textoCambiado", function NuevoViajePage_Template_app_selector_general_textoCambiado_10_listener($event) {
        return ctx.buscadorLocalidadesService.obtenerSugerencias(ctx.origenCtrl, $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(11, NuevoViajePage_Conditional_11_Template, 2, 4, "app-spinner", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 10)(13, "button", 11);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275listener("click", function NuevoViajePage_Template_button_click_13_listener() {
        return ctx.buscarUbicacion();
      });
      \u0275\u0275elementStart(15, "span");
      \u0275\u0275element(16, "i", 12);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "label", 13);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 10)(23, "app-selector-general", 14);
      \u0275\u0275twoWayListener("ngModelChange", function NuevoViajePage_Template_app_selector_general_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.destinoCtrl.valorTexto, $event) || (ctx.destinoCtrl.valorTexto = $event);
        return $event;
      });
      \u0275\u0275listener("textoCambiado", function NuevoViajePage_Template_app_selector_general_textoCambiado_23_listener($event) {
        return ctx.buscadorLocalidadesService.obtenerSugerencias(ctx.destinoCtrl, $event);
      })("seleccionCambiada", function NuevoViajePage_Template_app_selector_general_seleccionCambiada_23_listener($event) {
        return ctx.buscadorLocalidadesService.seleccionarLocalidad(ctx.destinoCtrl, $event);
      })("alAbrir", function NuevoViajePage_Template_app_selector_general_alAbrir_23_listener() {
        return ctx.destinoCtrl.estaActivo = true;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "label", 15);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 16)(28, "app-selector-general", 17);
      \u0275\u0275twoWayListener("ngModelChange", function NuevoViajePage_Template_app_selector_general_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.plazas, $event) || (ctx.plazas = $event);
        return $event;
      });
      \u0275\u0275listener("seleccionCambiada", function NuevoViajePage_Template_app_selector_general_seleccionCambiada_28_listener($event) {
        return ctx.seleccionarPlazas($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(29, NuevoViajePage_Conditional_29_Template, 9, 9, "div", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "button", 19);
      \u0275\u0275listener("click", function NuevoViajePage_Template_button_click_30_listener() {
        return ctx.goTo();
      });
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275element(33, "ion-ripple-effect");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(34, "ion-row", 20)(35, "div", 21)(36, "h2");
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "p");
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 22)(43, "button", 23);
      \u0275\u0275element(44, "img", 24);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(47, "div", 25)(48, "button", 26);
      \u0275\u0275listener("click", function NuevoViajePage_Template_button_click_48_listener() {
        return ctx.abrirIncidenciaCreacionViaje();
      });
      \u0275\u0275element(49, "i", 27);
      \u0275\u0275elementStart(50, "span");
      \u0275\u0275text(51, "\xBFProblemas creando un viaje? Reportar incidencia");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("backRoute", "/home")("searchRoute", "search")("isLoggedIn", ctx.userLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 28, "NUEVOVIAJE.NUEVO_VIAJE.ORIGEN"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("opciones", ctx.origenCtrl.sugerencias);
      \u0275\u0275twoWayProperty("ngModel", ctx.origenCtrl.valorTexto);
      \u0275\u0275property("soloLectura", false)("mostrarFlechaSelector", false);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.spinnerActivo ? 11 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 30, "NUEVOVIAJE.NUEVO_VIAJE.ARIALABEL_BOTON_MI_UBICACION"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 32, "NUEVOVIAJE.NUEVO_VIAJE.BOT\xD3N_MI_UBICACION"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 34, "NUEVOVIAJE.NUEVO_VIAJE.DESTINO"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("opciones", ctx.destinoCtrl.sugerencias);
      \u0275\u0275twoWayProperty("ngModel", ctx.destinoCtrl.valorTexto);
      \u0275\u0275property("soloLectura", false)("mostrarFlechaSelector", false);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 36, "NUEVOVIAJE.NUEVO_VIAJE.PLAZAS_DISPONIBLES"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("opciones", ctx.opcionesPlazas);
      \u0275\u0275twoWayProperty("ngModel", ctx.plazas);
      \u0275\u0275property("valor", ctx.plazas)("soloLectura", true)("mostrarFlechaSelector", true);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.userLoggedIn ? 29 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 38, "NUEVOVIAJE.NUEVO_VIAJE.BOT\xD3N_PUBLICA_TU_VIAJE"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 40, "CENTRODEAYUDA.TITULO"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 42, "CENTRODEAYUDA.SUBTITULO"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 44, "BOTON.CENTROAYUDA"), " ");
    }
  }, dependencies: [
    FormsModule,
    NgControlStatus,
    NgModel,
    MatIconModule,
    IonicModule,
    IonContent,
    IonRippleEffect,
    IonRow,
    RouterLinkDelegateDirective,
    MatButtonModule,
    RouterModule,
    RouterLink,
    TranslateModule,
    NavbarComponent,
    MatDialogModule,
    MatTooltipModule,
    ToastModule,
    SelectorGeneralComponent,
    SpinnerComponent,
    TranslatePipe
  ], styles: ['@charset "UTF-8";\n\n\n[_nghost-%COMP%] {\n  --mat-form-field-filled-container-color: white;\n  --mat-sys-surface-variant: white;\n  --mat-sys-primary: #e0a667;\n  --ion-color-success: #e0a667;\n  --ion-color-success-shade: #e0a667;\n  --ion-color-success-tint: #e0a667;\n}\n.primera-seccion[_ngcontent-%COMP%] {\n  position: relative;\n  height: 700px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  border-radius: 0px 0px 35px 35px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.imagen-fondo[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.imagen-fondo[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url("./media/bridge1.jpg");\n  background-size: cover;\n  background-position: center;\n  z-index: -1;\n  -webkit-animation: fondo_animacion 5s ease-out both;\n  animation: fondo_animacion 5s ease-out both;\n}\n.formulario-viaje[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: rgba(255, 255, 255, 0.22);\n  -webkit-backdrop-filter: blur(25px) saturate(180%);\n  backdrop-filter: blur(25px) saturate(180%);\n  border-radius: 44px;\n  box-shadow:\n    0 25px 50px rgba(0, 0, 0, 0.3),\n    inset 0 1px 0 rgba(255, 255, 255, 0.9),\n    inset 0 -1px 0 rgba(255, 255, 255, 0.3),\n    inset 0 0 0 1px rgba(255, 255, 255, 0.5);\n  border: none;\n  text-align: center;\n  z-index: 1;\n  width: 370px;\n  overflow: visible;\n}\n.contenido_formulario[_ngcontent-%COMP%] {\n  padding: 26px;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.contenido_formulario[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.95);\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);\n  margin-bottom: 6px;\n  font-size: 0.88rem;\n  text-align: left;\n  margin-left: 10px;\n}\n.input-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin-bottom: 12px;\n  width: 100%;\n}\n.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 38px;\n  padding-right: 45px !important;\n  text-align: left;\n  margin-top: 2px;\n}\n.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.65);\n}\n.input-container[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  width: 22px;\n  height: 22px;\n  color: #fff;\n  z-index: 2;\n}\n.btn-publicar[_ngcontent-%COMP%] {\n  background: rgba(179, 181, 230, 0.75);\n  -webkit-backdrop-filter: blur(25px) saturate(180%);\n  backdrop-filter: blur(25px) saturate(180%);\n  border-top: 1px solid rgba(255, 255, 255, 0.4);\n  color: #fff;\n  border: none;\n  padding: 12px 0;\n  border-radius: 0px 0px 42px 42px;\n  font-size: 16px;\n  width: 100%;\n  height: 60px;\n  font-weight: 600;\n  letter-spacing: 0.3px;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);\n  transition: all 0.3s ease;\n}\n.btn-publicar[_ngcontent-%COMP%]:hover {\n  background-color: rgba(207, 148, 86, 0.6);\n  color: white;\n}\n  app-selector-general input, \n  app-selector-general select {\n  border: none !important;\n  box-shadow: none !important;\n  outline: none !important;\n}\n.consulta[_ngcontent-%COMP%] {\n  background-color: #b3b5e6;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.marcador-icon[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  color: #000000;\n}\n.alert[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  border: 1px solid #cf9456;\n  padding: 10px;\n  margin-top: 10px;\n}\n.help_btn[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n.help_btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px !important;\n  height: 24px !important;\n  max-width: 24px !important;\n  max-height: 24px !important;\n}\n.help_btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.segunda-seccion[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.centro-incidencias[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n  padding: 20px;\n  border-radius: 35px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  width: 100%;\n  max-width: 500px;\n}\n.centro-incidencias[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 24px;\n  color: #333;\n}\n.centro-incidencias[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #555;\n}\n.centro-ayuda[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n  padding: 20px;\n  border-radius: 35px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  width: 100%;\n  max-width: 500px;\n}\n.centro-ayuda[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 24px;\n  color: #333;\n}\n.centro-ayuda[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #555;\n}\n.centro-ayuda[_ngcontent-%COMP%]   .btn_bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.centro-ayuda[_ngcontent-%COMP%]   img.input-icon[_ngcontent-%COMP%], \n.centro-ayuda[_ngcontent-%COMP%]   img.marcador-icon[_ngcontent-%COMP%] {\n  width: 22px !important;\n  height: 22px !important;\n  max-width: 22px !important;\n  max-height: 22px !important;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 8px;\n}\n.centro-ayuda[_ngcontent-%COMP%] {\n}\n.centro-ayuda[_ngcontent-%COMP%]   .spinner-input-inline[_ngcontent-%COMP%] {\n  position: absolute !important;\n  top: 50% !important;\n  right: 15px !important;\n  transform: translateY(-50%) !important;\n  width: 28px !important;\n  height: 28px !important;\n  z-index: 10 !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  pointer-events: none;\n  border-radius: 35px !important;\n  overflow: hidden !important;\n}\n.centro-ayuda[_ngcontent-%COMP%]   .spinner-input-inline[_ngcontent-%COMP%]     .spinner-container, \n.centro-ayuda[_ngcontent-%COMP%]   .spinner-input-inline[_ngcontent-%COMP%]     div {\n  border-radius: 35px !important;\n  overflow: hidden !important;\n  background: transparent !important;\n}\n.centro-ayuda[_ngcontent-%COMP%]   .spinner-input-inline[_ngcontent-%COMP%]     p, \n.centro-ayuda[_ngcontent-%COMP%]   .spinner-input-inline[_ngcontent-%COMP%]     span {\n  display: none !important;\n}\n.centro-ayuda[_ngcontent-%COMP%]   .spinner-input-inline[_ngcontent-%COMP%]     .spinner, \n.centro-ayuda[_ngcontent-%COMP%]   .spinner-input-inline[_ngcontent-%COMP%]     svg {\n  display: block !important;\n  width: 24px !important;\n  height: 24px !important;\n  max-width: 24px !important;\n  max-height: 24px !important;\n}\n/*# sourceMappingURL=nuevo-viaje.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NuevoViajePage, [{
    type: Component,
    args: [{ selector: "app-nuevo-viaje", standalone: true, providers: [MessageService], imports: [
      FormsModule,
      MatIconModule,
      IonicModule,
      MatButtonModule,
      RouterModule,
      TranslateModule,
      NavbarComponent,
      MatDialogModule,
      MatTooltipModule,
      ToastModule,
      SelectorGeneralComponent,
      SpinnerComponent
    ], template: `<app-navbar
  [backRoute]="'/home'"
  [searchRoute]="'search'"
  [isLoggedIn]="userLoggedIn"
></app-navbar>

<ion-content
  [fullscreen]="true"
  role="main"
>
  <ion-row class="primera-seccion">
    <div class="imagen-fondo">
      <div class="formulario-viaje">
        <div class="contenido_formulario">
          <label
            id="label-origen"
            class="text-start"
          >
            {{'NUEVOVIAJE.NUEVO_VIAJE.ORIGEN' | translate}}
          </label>
          <div class="input-container mb-4">
            <app-selector-general
              idUnico="input-origen"
              aria-labelledby="label-origen"
              placeholderKey="PLACEHOLDER.DONDE_COMIENZA"
              class="w-100"
              [opciones]="origenCtrl.sugerencias"
              [(ngModel)]="origenCtrl.valorTexto"
              [soloLectura]="false"
              [mostrarFlechaSelector]="false"
              (seleccionCambiada)="buscadorLocalidadesService.seleccionarLocalidad(origenCtrl, $event)"
              (alAbrir)="origenCtrl.estaActivo = true"
              (textoCambiado)="buscadorLocalidadesService.obtenerSugerencias(origenCtrl, $event)"
            ></app-selector-general>
            @if (spinnerActivo) {
            <app-spinner
              [texto_spinner]="texto_spinner | translate"
              [tamano_completo]="false"
              aria-live="polite"
              role="status"
            ></app-spinner>
            }
          </div>

          <div class="input-container">
            <button
              type="button"
              class="btn btn_bg mb-3"
              (click)="buscarUbicacion()"
              [attr.aria-label]="'NUEVOVIAJE.NUEVO_VIAJE.ARIALABEL_BOTON_MI_UBICACION' | translate"
            >
              <span>
                <i
                  class="fi fi-rr-marker"
                  aria-hidden="true"
                ></i>
                {{'NUEVOVIAJE.NUEVO_VIAJE.BOT\xD3N_MI_UBICACION' | translate}}
              </span>
            </button>
          </div>

          <label
            id="label-destino"
            class="text-start"
          >
            {{'NUEVOVIAJE.NUEVO_VIAJE.DESTINO' | translate}}
          </label>
          <div class="input-container">
            <app-selector-general
              idUnico="input-destino"
              aria-labelledby="label-destino"
              placeholderKey="PLACEHOLDER.HASTA_DONDE"
              class="w-100"
              [opciones]="destinoCtrl.sugerencias"
              [(ngModel)]="destinoCtrl.valorTexto"
              [soloLectura]="false"
              [mostrarFlechaSelector]="false"
              (textoCambiado)="buscadorLocalidadesService.obtenerSugerencias(destinoCtrl, $event)"
              (seleccionCambiada)="buscadorLocalidadesService.seleccionarLocalidad(destinoCtrl, $event)"
              (alAbrir)="destinoCtrl.estaActivo = true"
            ></app-selector-general>
          </div>

          <!-- SELECTOR DE PLAZAS  -->
          <label
            id="label-plazas"
            class="text-start mt-4"
          >
            {{'NUEVOVIAJE.NUEVO_VIAJE.PLAZAS_DISPONIBLES' | translate}}
          </label>
          <div class="input-container mb-3">
            <app-selector-general
              idUnico="input-plazas"
              aria-labelledby="label-plazas"
              placeholderKey="PLACEHOLDER.NUM_PLAZAS"
              class="w-100"
              [opciones]="opcionesPlazas"
              [(ngModel)]="plazas"
              [valor]="plazas"
              [soloLectura]="true"
              [mostrarFlechaSelector]="true"
              (seleccionCambiada)="seleccionarPlazas($event)"
            ></app-selector-general>
          </div>

          @if (!userLoggedIn) {
          <div
            class="alert"
            role="region"
            [attr.aria-label]="'NUEVOVIAJE.NUEVO_VIAJE.ARIALABEL_AVISO_INICIOSESION' | translate"
          >
            <p>{{ 'NUEVOVIAJE.NO_REGISTRADO_LOGIN' | translate }}</p>
            <div class="d-flex justify-content-center">
              <button
                type="button"
                class="help_btn d-flex justify-content-center"
                [attr.aria-label]="'NUEVOVIAJE.NUEVO_VIAJE.ARIALABEL_AYUDA_INICIO_REGISTRO' | translate"
                (click)="funcionesComunes.openConfirmModal(title_help_carnet, message_help_auth)"
              >
                <img
                  src="../../../../assets/sistema/interrogatorio.png"
                  class="marcador-icon input-icon"
                  alt=""
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
          }
        </div>
        <!-- BOT\xD3N PUBLICAR  -->
        <button
          type="button"
          class="btn-publicar ion-activatable ripple-parent circle"
          (click)="goTo()"
        >
          {{'NUEVOVIAJE.NUEVO_VIAJE.BOT\xD3N_PUBLICA_TU_VIAJE' | translate}}
          <ion-ripple-effect></ion-ripple-effect>
        </button>
      </div>
    </div>
  </ion-row>

  <ion-row class="segunda-seccion">
    <div class="centro-ayuda">
      <h2>{{ 'CENTRODEAYUDA.TITULO' | translate }}</h2>
      <p>{{ 'CENTRODEAYUDA.SUBTITULO' | translate }}</p>
      <div class="d-flex justify-content-center">
        <button
          type="button"
          class="btn btn_bg consulta"
          routerLink="/centro-ayuda"
        >
          <img
            src="../../../../assets/sistema/interrogatorio.png"
            class="marcador-icon input-icon"
            alt=""
            aria-hidden="true"
          />
          {{ 'BOTON.CENTROAYUDA' | translate }}
        </button>
      </div>
    </div>
  </ion-row>

  <div class="d-flex justify-content-start mb-2 ms-2">
    <button
      type="button"
      class="btn btn-sm btn-outline-warning d-flex align-items-center gap-1 shadow-sm rounded-pill px-3"
      (click)="abrirIncidenciaCreacionViaje()"
    >
      <i class="fi fi-rr-info me-1"></i>
      <span>\xBFProblemas creando un viaje? Reportar incidencia</span>
    </button>
  </div>
</ion-content>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/nuevoViaje/nuevo-viaje/nuevo-viaje.page.scss */\n:host {\n  --mat-form-field-filled-container-color: white;\n  --mat-sys-surface-variant: white;\n  --mat-sys-primary: #e0a667;\n  --ion-color-success: #e0a667;\n  --ion-color-success-shade: #e0a667;\n  --ion-color-success-tint: #e0a667;\n}\n.primera-seccion {\n  position: relative;\n  height: 700px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  border-radius: 0px 0px 35px 35px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.imagen-fondo {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.imagen-fondo::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url("./media/bridge1.jpg");\n  background-size: cover;\n  background-position: center;\n  z-index: -1;\n  -webkit-animation: fondo_animacion 5s ease-out both;\n  animation: fondo_animacion 5s ease-out both;\n}\n.formulario-viaje {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: rgba(255, 255, 255, 0.22);\n  -webkit-backdrop-filter: blur(25px) saturate(180%);\n  backdrop-filter: blur(25px) saturate(180%);\n  border-radius: 44px;\n  box-shadow:\n    0 25px 50px rgba(0, 0, 0, 0.3),\n    inset 0 1px 0 rgba(255, 255, 255, 0.9),\n    inset 0 -1px 0 rgba(255, 255, 255, 0.3),\n    inset 0 0 0 1px rgba(255, 255, 255, 0.5);\n  border: none;\n  text-align: center;\n  z-index: 1;\n  width: 370px;\n  overflow: visible;\n}\n.contenido_formulario {\n  padding: 26px;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.contenido_formulario label {\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.95);\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);\n  margin-bottom: 6px;\n  font-size: 0.88rem;\n  text-align: left;\n  margin-left: 10px;\n}\n.input-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin-bottom: 12px;\n  width: 100%;\n}\n.input-container input {\n  padding-left: 38px;\n  padding-right: 45px !important;\n  text-align: left;\n  margin-top: 2px;\n}\n.input-container input::placeholder {\n  color: rgba(255, 255, 255, 0.65);\n}\n.input-container .input-icon {\n  position: absolute;\n  left: 12px;\n  width: 22px;\n  height: 22px;\n  color: #fff;\n  z-index: 2;\n}\n.btn-publicar {\n  background: rgba(179, 181, 230, 0.75);\n  -webkit-backdrop-filter: blur(25px) saturate(180%);\n  backdrop-filter: blur(25px) saturate(180%);\n  border-top: 1px solid rgba(255, 255, 255, 0.4);\n  color: #fff;\n  border: none;\n  padding: 12px 0;\n  border-radius: 0px 0px 42px 42px;\n  font-size: 16px;\n  width: 100%;\n  height: 60px;\n  font-weight: 600;\n  letter-spacing: 0.3px;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);\n  transition: all 0.3s ease;\n}\n.btn-publicar:hover {\n  background-color: rgba(207, 148, 86, 0.6);\n  color: white;\n}\n::ng-deep app-selector-general input,\n::ng-deep app-selector-general select {\n  border: none !important;\n  box-shadow: none !important;\n  outline: none !important;\n}\n.consulta {\n  background-color: #b3b5e6;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.marcador-icon {\n  height: 25px;\n  width: 25px;\n  color: #000000;\n}\n.alert {\n  border-radius: 15px;\n  border: 1px solid #cf9456;\n  padding: 10px;\n  margin-top: 10px;\n}\n.help_btn {\n  border-radius: 50%;\n}\n.help_btn img {\n  width: 24px !important;\n  height: 24px !important;\n  max-width: 24px !important;\n  max-height: 24px !important;\n}\n.help_btn:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.segunda-seccion {\n  padding: 20px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.centro-incidencias {\n  background-color: #f9f9f9;\n  padding: 20px;\n  border-radius: 35px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  width: 100%;\n  max-width: 500px;\n}\n.centro-incidencias h2 {\n  margin-bottom: 10px;\n  font-size: 24px;\n  color: #333;\n}\n.centro-incidencias p {\n  font-size: 16px;\n  color: #555;\n}\n.centro-ayuda {\n  background-color: #f9f9f9;\n  padding: 20px;\n  border-radius: 35px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  width: 100%;\n  max-width: 500px;\n}\n.centro-ayuda h2 {\n  margin-bottom: 10px;\n  font-size: 24px;\n  color: #333;\n}\n.centro-ayuda p {\n  font-size: 16px;\n  color: #555;\n}\n.centro-ayuda .btn_bg img,\n.centro-ayuda img.input-icon,\n.centro-ayuda img.marcador-icon {\n  width: 22px !important;\n  height: 22px !important;\n  max-width: 22px !important;\n  max-height: 22px !important;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 8px;\n}\n.centro-ayuda {\n}\n.centro-ayuda .spinner-input-inline {\n  position: absolute !important;\n  top: 50% !important;\n  right: 15px !important;\n  transform: translateY(-50%) !important;\n  width: 28px !important;\n  height: 28px !important;\n  z-index: 10 !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  pointer-events: none;\n  border-radius: 35px !important;\n  overflow: hidden !important;\n}\n.centro-ayuda .spinner-input-inline ::ng-deep .spinner-container,\n.centro-ayuda .spinner-input-inline ::ng-deep div {\n  border-radius: 35px !important;\n  overflow: hidden !important;\n  background: transparent !important;\n}\n.centro-ayuda .spinner-input-inline ::ng-deep p,\n.centro-ayuda .spinner-input-inline ::ng-deep span {\n  display: none !important;\n}\n.centro-ayuda .spinner-input-inline ::ng-deep .spinner,\n.centro-ayuda .spinner-input-inline ::ng-deep svg {\n  display: block !important;\n  width: 24px !important;\n  height: 24px !important;\n  max-width: 24px !important;\n  max-height: 24px !important;\n}\n/*# sourceMappingURL=nuevo-viaje.page.css.map */\n'] }]
  }], () => [{ type: NavController }, { type: TravelService }, { type: FuncionesComunes }, { type: TranslateService }, { type: ChangeDetectorRef }, { type: Location }, { type: TravelService }, { type: BuscadorLocalidadesService }, { type: ActivatedRoute }, { type: ModalController }, { type: MessageService }], { closeDropdown: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NuevoViajePage, { className: "NuevoViajePage", filePath: "src/app/pages/nuevoviaje/nuevo-viaje/nuevo-viaje.page.ts", lineNumber: 44 });
})();
export {
  NuevoViajePage
};
//# sourceMappingURL=nuevo-viaje.page-BXHJ3EKO.js.map
