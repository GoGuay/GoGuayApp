import {
  MatCheckboxModule,
  MatRadioModule,
  MatSliderModule
} from "./chunk-FVAB5XP6.js";
import "./chunk-HWP2RUZE.js";
import "./chunk-CSM5KVUU.js";
import {
  SpinnerComponent
} from "./chunk-AZFY3OZL.js";
import {
  NavbarComponent
} from "./chunk-YAGW6LPY.js";
import {
  MessagingService
} from "./chunk-N25HX3QD.js";
import "./chunk-TGPQDEZS.js";
import "./chunk-BLKEDZE4.js";
import "./chunk-N7S2XU3X.js";
import "./chunk-G5UZDB7B.js";
import "./chunk-WDE6N5F6.js";
import "./chunk-34RASOLQ.js";
import {
  MatButtonModule
} from "./chunk-ULIFZXTE.js";
import "./chunk-WBBLYEAR.js";
import "./chunk-LLKVXR72.js";
import "./chunk-Z2EGICVD.js";
import {
  AlertController,
  IonAvatar,
  IonBadge,
  IonButton,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonicModule,
  PopoverController
} from "./chunk-XTRPVKSN.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-PWPN4F54.js";
import {
  FormsModule,
  NavController,
  ReactiveFormsModule
} from "./chunk-DD4MNYDA.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
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
  __async
} from "./chunk-5SZB5ECT.js";

// src/app/pages/centro-mensajes/centro-mensajes.component.ts
function CentroMensajesPage_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner");
  }
}
function CentroMensajesPage_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "ion-icon", 10);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 11);
    \u0275\u0275listener("click", function CentroMensajesPage_Conditional_8_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.irABuscar());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "CENTRO_MENSAJES.VACIO_TITULO"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "CENTRO_MENSAJES.VACIO_DESC"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 7, "CENTRO_MENSAJES.BUSCAR_BOTON"), " ");
  }
}
function CentroMensajesPage_For_23_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r4.no_leidos, " ");
  }
}
function CentroMensajesPage_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-card", 12);
    \u0275\u0275listener("click", function CentroMensajesPage_For_23_Template_ion_card_click_0_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.abrirChat(c_r4));
    });
    \u0275\u0275elementStart(1, "ion-item", 13)(2, "ion-avatar", 14);
    \u0275\u0275element(3, "img", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-label", 16)(5, "h2", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 19);
    \u0275\u0275conditionalCreate(10, CentroMensajesPage_For_23_Conditional_10_Template, 2, 1, "ion-badge", 20);
    \u0275\u0275elementStart(11, "ion-button", 21);
    \u0275\u0275listener("click", function CentroMensajesPage_For_23_Template_ion_button_click_11_listener($event) {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.abrirOpciones($event, c_r4));
    });
    \u0275\u0275element(12, "i", 22);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", c_r4.otro_usuario_foto || "../../../assets/user/logOn.gif", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("font-weight-bold", c_r4.no_leidos > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r4.otro_usuario_nombre, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("mensaje-nuevo", c_r4.no_leidos > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r4.ultimoMensaje, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(c_r4.no_leidos > 0 ? 10 : -1);
  }
}
var CentroMensajesPage = class _CentroMensajesPage {
  messagingService;
  navCtrl;
  popoverCtrl;
  alertCtrl;
  translate;
  userLoggedIn = false;
  irAtrasImg = "../../../assets/sistema/atras.png";
  conversaciones = [];
  userData;
  loadMessages = false;
  constructor(messagingService, navCtrl, popoverCtrl, alertCtrl, translate) {
    this.messagingService = messagingService;
    this.navCtrl = navCtrl;
    this.popoverCtrl = popoverCtrl;
    this.alertCtrl = alertCtrl;
    this.translate = translate;
  }
  ngOnInit() {
    var _a, _b;
    this.userData = JSON.parse(localStorage.getItem("userData") || "{}");
    if ((_b = (_a = this.userData) == null ? void 0 : _a.usuario) == null ? void 0 : _b.id) {
      this.cargarConversaciones();
    }
  }
  /**
   * Carga las conversaciones al entrar a la página
   */
  ionViewWillEnter() {
    var _a, _b;
    if ((_b = (_a = this.userData) == null ? void 0 : _a.usuario) == null ? void 0 : _b.id) {
      this.cargarConversaciones();
    }
  }
  /**
   * Funcion que abre el chat de una conversacion
   *
   * @param conv Conversacion a la que se le va a abrir el chat
   */
  abrirChat(conv) {
    const usuarioId = this.userData.usuario.id;
    this.messagingService.marcarComoLeido(conv.id, usuarioId).subscribe({
      next: () => {
        this.navCtrl.navigateForward(["/chat", conv.id], {
          animated: false
        });
      },
      error: (err) => {
        console.error("No se pudo marcar como le\xEDdo al entrar", err);
        this.navCtrl.navigateForward(["/chat", conv.id], { animated: false });
      }
    });
  }
  /**
   * Funcion que carga las conversaciones
   */
  cargarConversaciones() {
    this.loadMessages = true;
    this.messagingService.getConversaciones(this.userData.usuario.id).subscribe((data) => {
      this.conversaciones = data;
      this.loadMessages = false;
      console.log("Conversaciones cargadas:", this.conversaciones);
    });
  }
  /**
   * Funcion que navega hacia la pagina de inicio
   */
  goBack() {
    this.navCtrl.navigateBack("/home", {
      animated: false
      // -> Elimina las animaciones de navegación de Ionic
    });
  }
  /**
   * Funcion que navega hacia la pagina de busqueda de viajes
   */
  irABuscar() {
    this.navCtrl.navigateForward("/busqueda-viajes");
  }
  /**
   * Funcion que abre el menu de opciones de una conversacion
   *
   * @param ev Evento que se dispara al hacer clic en el menu
   * @param conv Conversacion a la que se le va a abrir el menu
   */
  abrirOpciones(ev, conv) {
    return __async(this, null, function* () {
      ev.stopPropagation();
      yield this.popoverCtrl.create({
        component: "popover-opciones",
        event: ev,
        translucent: true,
        mode: "ios",
        componentProps: { conversacion: conv }
      });
      this.mostrarMenuAcciones(conv);
    });
  }
  /**
   * Funcion que muestra el menu de acciones de una conversacion
   *
   * @param conv Conversacion a la que se le va a mostrar el menu
   */
  mostrarMenuAcciones(conv) {
    return __async(this, null, function* () {
      const tHeader = this.translate.instant("CENTRO_MENSAJES.CHAT_OPCIONES.HEADER");
      const tDelete = this.translate.instant("CENTRO_MENSAJES.CHAT_OPCIONES.ELIMINAR");
      const tCancel = this.translate.instant("CENTRO_MENSAJES.CHAT_OPCIONES.CANCELAR");
      const tRead = this.translate.instant("CENTRO_MENSAJES.CHAT_OPCIONES.LEIDO");
      const tUnread = this.translate.instant("CENTRO_MENSAJES.CHAT_OPCIONES.NO_LEIDO");
      const actionSheet = yield this.alertCtrl.create({
        header: tHeader,
        cssClass: "custom-alert-chat",
        buttons: [
          {
            text: conv.no_leidos > 0 ? tRead : tUnread,
            handler: () => {
              this.alternarEstadoLeido(conv);
            }
          },
          {
            text: tDelete,
            role: "destructive",
            handler: () => {
              this.confirmarEliminacion(conv);
            }
          },
          {
            text: tCancel,
            role: "cancel"
          }
        ]
      });
      yield actionSheet.present();
    });
  }
  /**
   * Funcion que alterna el estado de lectura de una conversacion
   *
   * @param conv Conversacion a la que se le va a alterar el estado de lectura
   */
  alternarEstadoLeido(conv) {
    const marcarComoLeido = conv.no_leidos > 0;
    const usuarioId = this.userData.usuario.id;
    console.log(`Conversaci\xF3n ${conv.id}. Acci\xF3n: ${marcarComoLeido ? "Leer" : "No Leer"}`);
    this.messagingService.cambiarEstadoLectura(conv.id, usuarioId, marcarComoLeido).subscribe({
      next: () => {
        console.log("Cambio de estado exitoso");
        this.cargarConversaciones();
      },
      error: (err) => {
        console.error("Error al cambiar estado:", err);
      }
    });
  }
  /**
   * Funcion que confirma la eliminacion de una conversacion
   *
   * @param conv Conversacion a la que se le va a confirmar la eliminacion
   */
  confirmarEliminacion(conv) {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: "\xBFEliminar conversaci\xF3n?",
        cssClass: "custom-alert-delete-chat",
        message: "Esta acci\xF3n no se puede deshacer.",
        buttons: [
          { text: "Cancelar", role: "cancel" },
          {
            text: "Eliminar",
            handler: () => {
              this.messagingService.eliminarConversacion(conv.id).subscribe(() => {
                this.cargarConversaciones();
              });
            }
          }
        ]
      });
      yield alert.present();
    });
  }
  static \u0275fac = function CentroMensajesPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CentroMensajesPage)(\u0275\u0275directiveInject(MessagingService), \u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(PopoverController), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(TranslateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CentroMensajesPage, selectors: [["app-centro-mensajes"]], features: [\u0275\u0275ProvidersFeature([])], decls: 24, vars: 12, consts: [[3, "isLoggedIn"], ["fullscreen", ""], [1, "d-flex", "justify-content-center"], [1, "empty-state-container"], [1, "mt-3", "centroMensajes"], [1, "phone-share-box", "mb-2", "p-3"], [1, "card", "shadow-sm", "border-0", "text-center", "p-3", "alert-warning-custom"], [1, "d-flex", "align-items-center", "justify-content-center"], [1, "fi", "fi-rr-shield-check", "me-2", 2, "font-size", "20px"], [1, "chat_card"], ["name", "chatbubbles-outline", 1, "empty-icon"], [1, "btn", "btn_bg", 3, "click"], [1, "chat_card", 3, "click"], ["lines", "none", "detail", "false", 1, "item-chat"], ["slot", "start", 1, "avatar-chat"], [3, "src"], [1, "ion-text-wrap"], [1, "nombre-chat"], [1, "ultimo-mensaje-txt"], ["slot", "end", 1, "d-flex", "align-items-center"], ["color", "danger", 1, "me-2"], ["fill", "clear", "color", "dark", 1, "btn-opciones", 3, "click"], [1, "fi", "fi-rs-circle-ellipsis-vertical", "iconoAjustes"]], template: function CentroMensajesPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header");
      \u0275\u0275element(1, "app-navbar", 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "ion-content", 1)(3, "div", 2)(4, "h1");
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, CentroMensajesPage_Conditional_7_Template, 1, 0, "app-spinner");
      \u0275\u0275conditionalCreate(8, CentroMensajesPage_Conditional_8_Template, 11, 9, "div", 3);
      \u0275\u0275elementStart(9, "div", 2)(10, "div", 4)(11, "div", 5)(12, "div", 6)(13, "div", 7);
      \u0275\u0275element(14, "i", 8);
      \u0275\u0275elementStart(15, "span")(16, "strong");
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "ion-list");
      \u0275\u0275repeaterCreate(22, CentroMensajesPage_For_23_Template, 13, 8, "ion-card", 9, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("isLoggedIn", ctx.userLoggedIn);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "CENTRO_MENSAJES.TITULO"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loadMessages ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.conversaciones.length === 0 && !ctx.loadMessages ? 8 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 8, "CENTRO_MENSAJES.SEGURIDAD_BOLD"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 10, "CENTRO_MENSAJES.SEGURIDAD_TXT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.conversaciones);
    }
  }, dependencies: [
    FormsModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSliderModule,
    NavbarComponent,
    IonicModule,
    IonAvatar,
    IonBadge,
    IonButton,
    IonCard,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    SpinnerComponent,
    TranslateModule,
    TranslatePipe
  ], styles: ["\n.centroMensajes[_ngcontent-%COMP%] {\n  width: 60%;\n  max-width: 600px;\n}\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28) !important;\n  border-radius: 35px !important;\n}\n.chat_card[_ngcontent-%COMP%] {\n  border-radius: 35px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  margin-bottom: 16px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.chat_card[_ngcontent-%COMP%]   .mensaje-nuevo[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #000;\n}\n.chat_card[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%] {\n  --padding-top: 5px;\n  --padding-bottom: 5px;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  border-radius: 50%;\n  font-size: 0.8rem;\n}\n.chat_card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --inner-padding-end: 8px;\n  display: flex;\n  align-items: center;\n}\n.chat_card[_ngcontent-%COMP%]   .iconoAjustes[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #666;\n}\nion-item[_ngcontent-%COMP%] {\n  --background: #fff;\n  --border-radius: 15px;\n}\nion-list[_ngcontent-%COMP%] {\n  --background: transparent !important;\n  background: transparent !important;\n}\nion-item.chat_box[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.empty-state-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 60%;\n  text-align: center;\n  padding: 20px;\n  color: #666;\n}\n.empty-state-container[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 80px;\n  margin-bottom: 20px;\n  color: #ccc;\n}\n.empty-state-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n.empty-state-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  max-width: 250px;\n}\nion-button[fill=clear][_ngcontent-%COMP%] {\n  --padding-start: 4px;\n  --padding-top: 25px;\n  --padding-bottom: 25px;\n  margin: 0;\n  height: 24px;\n  border-radius: 50%;\n}\n.btn-opciones[_ngcontent-%COMP%] {\n  width: 40px !important;\n  height: 40px !important;\n  --padding-start: 0 !important;\n  --padding-end: 0 !important;\n  --padding-top: 0 !important;\n  --padding-bottom: 0 !important;\n  --margin-top: 0 !important;\n  --margin-bottom: 0 !important;\n  --border-radius: 50% !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-opciones[_ngcontent-%COMP%]::part(native) {\n  border-radius: 50%;\n}\n.btn-opciones[_ngcontent-%COMP%]   .iconoAjustes[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #666;\n  line-height: 1;\n}\n[slot=end][_ngcontent-%COMP%] {\n  margin-inline-start: 8px;\n  display: flex;\n  align-items: center;\n  align-self: center;\n}\n.chat_card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --inner-padding-end: 0;\n}\n@media (max-width: 768px) {\n  .centroMensajes[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=centro-mensajes.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CentroMensajesPage, [{
    type: Component,
    args: [{ selector: "app-centro-mensajes", standalone: true, imports: [
      FormsModule,
      MatButtonModule,
      MatRadioModule,
      MatCheckboxModule,
      ReactiveFormsModule,
      MatSliderModule,
      NavbarComponent,
      IonicModule,
      SpinnerComponent,
      TranslateModule
    ], providers: [], template: `<ion-header>
  <app-navbar [isLoggedIn]="userLoggedIn"></app-navbar>
</ion-header>

<ion-content fullscreen>
  <div class="d-flex justify-content-center">
    <h1>{{ 'CENTRO_MENSAJES.TITULO' | translate }}</h1>
  </div>

  @if (loadMessages) {
    <app-spinner></app-spinner>
  }
  @if (conversaciones.length === 0 && !loadMessages) {
    <div class="empty-state-container">
      <ion-icon
        name="chatbubbles-outline"
        class="empty-icon"
      ></ion-icon>
      <h3>{{ 'CENTRO_MENSAJES.VACIO_TITULO' | translate }}</h3>
      <p>{{ 'CENTRO_MENSAJES.VACIO_DESC' | translate }}</p>
      <button
        class="btn btn_bg"
        (click)="irABuscar()"
      >
        {{ 'CENTRO_MENSAJES.BUSCAR_BOTON' | translate }}
      </button>
    </div>
  }

  <div class="d-flex justify-content-center">
    <!-- Centro de chats -->
    <div class="mt-3 centroMensajes">
      <div class="phone-share-box mb-2 p-3">
        <div class="card shadow-sm border-0 text-center p-3 alert-warning-custom">
          <div class="d-flex align-items-center justify-content-center">
            <i
              class="fi fi-rr-shield-check me-2"
              style="font-size: 20px"
            ></i>
            <span>
              <strong>{{ 'CENTRO_MENSAJES.SEGURIDAD_BOLD' | translate }}</strong>
              {{ 'CENTRO_MENSAJES.SEGURIDAD_TXT' | translate }}
            </span>
          </div>
        </div>
      </div>

      <ion-list>
        @for (c of conversaciones; track c) {
          <ion-card
            class="chat_card"
            (click)="abrirChat(c)"
          >
            <ion-item
              lines="none"
              detail="false"
              class="item-chat"
            >
              <ion-avatar
                slot="start"
                class="avatar-chat"
              >
                <img [src]="c.otro_usuario_foto || '../../../assets/user/logOn.gif'" />
              </ion-avatar>
              <ion-label class="ion-text-wrap">
                <h2
                  [class.font-weight-bold]="c.no_leidos > 0"
                  class="nombre-chat"
                >
                  {{ c.otro_usuario_nombre }}
                </h2>
                <p
                  [class.mensaje-nuevo]="c.no_leidos > 0"
                  class="ultimo-mensaje-txt"
                >
                  {{ c.ultimoMensaje }}
                </p>
              </ion-label>
              <div
                slot="end"
                class="d-flex align-items-center"
              >
                @if (c.no_leidos > 0) {
                  <ion-badge
                    color="danger"
                    class="me-2"
                  >
                    {{ c.no_leidos }}
                  </ion-badge>
                }
                <ion-button
                  fill="clear"
                  color="dark"
                  (click)="abrirOpciones($event, c)"
                  class="btn-opciones"
                >
                  <i class="fi fi-rs-circle-ellipsis-vertical iconoAjustes"></i>
                </ion-button>
              </div>
            </ion-item>
          </ion-card>
        }
      </ion-list>
    </div>
  </div>

  <!-- <ion-fab vertical="bottom" horizontal="start" slot="fixed" class="fab-buscar" title="Volver atr\xE1s">
  <ion-fab-button aria-label="Buscar viaje" (click)="goBack()">
    <img [src]="irAtrasImg" alt="Buscar viaje" style="width: 24px; height: 24px;">
  </ion-fab-button>
</ion-fab> -->
</ion-content>
`, styles: ["/* src/app/pages/centro-mensajes/centro-mensajes.component.scss */\n.centroMensajes {\n  width: 60%;\n  max-width: 600px;\n}\n.card {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28) !important;\n  border-radius: 35px !important;\n}\n.chat_card {\n  border-radius: 35px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  margin-bottom: 16px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.chat_card .mensaje-nuevo {\n  font-weight: 600;\n  color: #000;\n}\n.chat_card ion-badge {\n  --padding-top: 5px;\n  --padding-bottom: 5px;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  border-radius: 50%;\n  font-size: 0.8rem;\n}\n.chat_card ion-item {\n  --inner-padding-end: 8px;\n  display: flex;\n  align-items: center;\n}\n.chat_card .iconoAjustes {\n  font-size: 24px;\n  color: #666;\n}\nion-item {\n  --background: #fff;\n  --border-radius: 15px;\n}\nion-list {\n  --background: transparent !important;\n  background: transparent !important;\n}\nion-item.chat_box {\n  margin: 10px;\n}\n.empty-state-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 60%;\n  text-align: center;\n  padding: 20px;\n  color: #666;\n}\n.empty-state-container .empty-icon {\n  font-size: 80px;\n  margin-bottom: 20px;\n  color: #ccc;\n}\n.empty-state-container h3 {\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n.empty-state-container p {\n  margin-bottom: 20px;\n  max-width: 250px;\n}\nion-button[fill=clear] {\n  --padding-start: 4px;\n  --padding-top: 25px;\n  --padding-bottom: 25px;\n  margin: 0;\n  height: 24px;\n  border-radius: 50%;\n}\n.btn-opciones {\n  width: 40px !important;\n  height: 40px !important;\n  --padding-start: 0 !important;\n  --padding-end: 0 !important;\n  --padding-top: 0 !important;\n  --padding-bottom: 0 !important;\n  --margin-top: 0 !important;\n  --margin-bottom: 0 !important;\n  --border-radius: 50% !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-opciones::part(native) {\n  border-radius: 50%;\n}\n.btn-opciones .iconoAjustes {\n  font-size: 20px;\n  color: #666;\n  line-height: 1;\n}\n[slot=end] {\n  margin-inline-start: 8px;\n  display: flex;\n  align-items: center;\n  align-self: center;\n}\n.chat_card ion-item {\n  --inner-padding-end: 0;\n}\n@media (max-width: 768px) {\n  .centroMensajes {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=centro-mensajes.component.css.map */\n"] }]
  }], () => [{ type: MessagingService }, { type: NavController }, { type: PopoverController }, { type: AlertController }, { type: TranslateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CentroMensajesPage, { className: "CentroMensajesPage", filePath: "src/app/pages/centro-mensajes/centro-mensajes.component.ts", lineNumber: 35 });
})();
export {
  CentroMensajesPage
};
//# sourceMappingURL=centro-mensajes.component-AIVZDXMN.js.map
