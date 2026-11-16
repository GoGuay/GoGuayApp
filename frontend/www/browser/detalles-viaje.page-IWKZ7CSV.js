import {
  MatAccordion,
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelHeader
} from "./chunk-7H7XQITT.js";
import "./chunk-VRWG7J2T.js";
import {
  MatFormFieldModule
} from "./chunk-SPEHEA2H.js";
import "./chunk-P2S3G5TM.js";
import "./chunk-ZZVULSY7.js";
import {
  ToastModule
} from "./chunk-DZI3S65K.js";
import {
  TravelService
} from "./chunk-XTA6HLG7.js";
import {
  MessagingService
} from "./chunk-C4WEIZGQ.js";
import "./chunk-3QY534IW.js";
import {
  FuncionesComunes
} from "./chunk-Z2B2BIHD.js";
import "./chunk-L23MUE74.js";
import "./chunk-X7SDTFSG.js";
import "./chunk-OLH4VKOB.js";
import {
  MessageService
} from "./chunk-Q5CK7R7A.js";
import {
  UserServicesService
} from "./chunk-43M6K65B.js";
import {
  MatButton,
  MatButtonModule,
  MatDivider
} from "./chunk-TFWCQLOE.js";
import "./chunk-REKVANIZ.js";
import "./chunk-6VCOWNW4.js";
import {
  MatIcon
} from "./chunk-ZPEWRVEX.js";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonicModule
} from "./chunk-V5JFS32A.js";
import "./chunk-ULJI5CAD.js";
import {
  ActivatedRoute,
  CommonModule,
  DatePipe,
  FormsModule,
  NavController,
  NgClass
} from "./chunk-XCBA4FSK.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Subscription,
  ViewChild,
  forwardRef,
  setClassMetadata,
  viewChild,
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
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
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
  __spreadProps,
  __spreadValues
} from "./chunk-MP5LG4CB.js";

// src/app/pages/mis-viajes/detalles-viaje/detalles-viaje.page.ts
var _c0 = (a0) => ({ "no-price": a0 });
function DetallesViajePage_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "p", 32);
    \u0275\u0275element(2, "i", 33);
    \u0275\u0275text(3, " Este viaje ya no dispone de plazas. \u{1F974} ");
    \u0275\u0275elementEnd()();
  }
}
function DetallesViajePage_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "p", 32);
    \u0275\u0275element(2, "i", 34);
    \u0275\u0275text(3, " Este viaje ya ha terminado. \u{1F974} ");
    \u0275\u0275elementEnd()();
  }
}
function DetallesViajePage_Conditional_57_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "account_circle");
    \u0275\u0275elementEnd();
  }
}
function DetallesViajePage_Conditional_57_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 40);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.viaje.usuario == null ? null : ctx_r1.viaje.usuario.fotoPerfil);
  }
}
function DetallesViajePage_Conditional_57_Template(rf, ctx) {
  var _a, _b, _c, _d, _e, _f, _g;
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "h2", 11);
    \u0275\u0275text(2, " Conductor ");
    \u0275\u0275elementStart(3, "mat-icon", 12);
    \u0275\u0275text(4, "airline_seat_recline_normal");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "mat-divider", 13);
    \u0275\u0275elementStart(6, "mat-accordion", 35)(7, "mat-expansion-panel", 36)(8, "mat-expansion-panel-header", 37)(9, "div", 38)(10, "div", 39);
    \u0275\u0275conditionalCreate(11, DetallesViajePage_Conditional_57_Conditional_11_Template, 2, 0, "mat-icon");
    \u0275\u0275conditionalCreate(12, DetallesViajePage_Conditional_57_Conditional_12_Template, 1, 1, "img", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 41);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 42)(16, "p")(17, "strong");
    \u0275\u0275text(18, "Nombre completo:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 43)(21, "strong");
    \u0275\u0275text(22, "Puntuaci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 44);
    \u0275\u0275element(24, "i", 45);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 46);
    \u0275\u0275listener("click", function DetallesViajePage_Conditional_57_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.masDetallesUsuario(ctx_r1.viaje.usuario_id));
    });
    \u0275\u0275text(27, " Ver Perfil P\xFAblico ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275conditional(!((_a = ctx_r1.viaje.usuario) == null ? void 0 : _a.fotoPerfil) ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((_b = ctx_r1.viaje.usuario) == null ? void 0 : _b.fotoPerfil) ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", (_c = ctx_r1.viaje.usuario) == null ? void 0 : _c.nombre, " ", (_d = ctx_r1.viaje.usuario) == null ? void 0 : _d.apellidos);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", (_e = ctx_r1.viaje.usuario) == null ? void 0 : _e.nombre, " ", (_f = ctx_r1.viaje.usuario) == null ? void 0 : _f.apellidos, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ((_g = ctx_r1.viaje.usuario) == null ? void 0 : _g.puntuacion_promedio) || "Sin valoraciones", " ");
  }
}
function DetallesViajePage_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Este viaje a\xFAn no tiene acompa\xF1antes aceptados.");
    \u0275\u0275elementEnd()();
  }
}
function DetallesViajePage_Conditional_65_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "account_circle");
    \u0275\u0275elementEnd();
  }
}
function DetallesViajePage_Conditional_65_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 40);
  }
  if (rf & 2) {
    const acomp_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", acomp_r4.fotoPerfil);
  }
}
function DetallesViajePage_Conditional_65_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-accordion", 35)(1, "mat-expansion-panel", 36)(2, "mat-expansion-panel-header", 37)(3, "div", 38)(4, "div", 39);
    \u0275\u0275conditionalCreate(5, DetallesViajePage_Conditional_65_For_2_Conditional_5_Template, 2, 0, "mat-icon");
    \u0275\u0275conditionalCreate(6, DetallesViajePage_Conditional_65_For_2_Conditional_6_Template, 1, 1, "img", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 41);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 42)(10, "p")(11, "strong");
    \u0275\u0275text(12, "Puntuaci\xF3n promedio:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "i", 48);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 49);
    \u0275\u0275listener("click", function DetallesViajePage_Conditional_65_For_2_Template_button_click_15_listener() {
      const acomp_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.masDetallesUsuario(acomp_r4.id));
    });
    \u0275\u0275text(16, " Ver Perfil P\xFAblico ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const acomp_r4 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!acomp_r4.fotoPerfil ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(acomp_r4.fotoPerfil ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", acomp_r4.nombre, " ", acomp_r4.apellidos);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", acomp_r4.puntuacion_promedio || 0, " ");
  }
}
function DetallesViajePage_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275repeaterCreate(1, DetallesViajePage_Conditional_65_For_2_Template, 17, 5, "mat-accordion", 35, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.viaje.acompanantes);
  }
}
function DetallesViajePage_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "i", 50);
    \u0275\u0275text(2, " Este viaje tiene reserva autom\xE1tica. \xA1Plaza confirmada al instante! ");
    \u0275\u0275elementEnd();
  }
}
function DetallesViajePage_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275text(2, " Tu reserva se enviar\xE1 como solicitud pendiente. El conductor tendr\xE1 que validarla manualmente. ");
    \u0275\u0275elementEnd();
  }
}
function DetallesViajePage_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "button", 52);
    \u0275\u0275listener("click", function DetallesViajePage_Conditional_69_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enviarSolicitudManual());
    });
    \u0275\u0275element(2, "i", 53);
    \u0275\u0275text(3, " Solicitar plaza en este viaje ");
    \u0275\u0275elementEnd()();
  }
}
function DetallesViajePage_Conditional_70_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "button", 58);
    \u0275\u0275listener("click", function DetallesViajePage_Conditional_70_Conditional_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.notificarLlegadaPasajero());
    });
    \u0275\u0275element(2, "i", 59);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.pasajeroYaAvisoLlegada);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.pasajeroYaAvisoLlegada ? "Ya has notificado tu llegada al punto" : "He llegado al punto de partida", " ");
  }
}
function DetallesViajePage_Conditional_70_Conditional_5_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275element(1, "i", 66);
    \u0275\u0275text(2, " \xA1Confirmado en el Punto! ");
    \u0275\u0275elementEnd();
  }
}
function DetallesViajePage_Conditional_70_Conditional_5_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function DetallesViajePage_Conditional_70_Conditional_5_For_5_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const acomp_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.confirmarLlegadaDesdeConductor(acomp_r8.id));
    });
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275text(2, " Confirmar asistencia ");
    \u0275\u0275elementEnd();
  }
}
function DetallesViajePage_Conditional_70_Conditional_5_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "span", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 43);
    \u0275\u0275conditionalCreate(4, DetallesViajePage_Conditional_70_Conditional_5_For_5_Conditional_4_Template, 3, 0, "span", 64);
    \u0275\u0275conditionalCreate(5, DetallesViajePage_Conditional_70_Conditional_5_For_5_Conditional_5_Template, 3, 0, "button", 65);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const acomp_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", acomp_r8.nombre, " ", acomp_r8.apellidos);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(acomp_r8.ha_llegado ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!acomp_r8.ha_llegado ? 5 : -1);
  }
}
function DetallesViajePage_Conditional_70_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "p", 60);
    \u0275\u0275text(2, " Verifica qu\xE9 pasajeros se encuentran f\xEDsicamente contigo en el veh\xEDculo: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 61);
    \u0275\u0275repeaterCreate(4, DetallesViajePage_Conditional_70_Conditional_5_For_5_Template, 6, 4, "div", 62, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.viaje.acompanantes);
  }
}
function DetallesViajePage_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "h3", 54);
    \u0275\u0275element(2, "span", 55);
    \u0275\u0275text(3, " Viaje en Curso - Control de Asistencia ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, DetallesViajePage_Conditional_70_Conditional_4_Template, 4, 2, "div", 56);
    \u0275\u0275conditionalCreate(5, DetallesViajePage_Conditional_70_Conditional_5_Template, 6, 0, "div", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.yaUnido && !ctx_r1.conductor ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.conductor ? 5 : -1);
  }
}
var DetallesViajePage = class _DetallesViajePage {
  funcionesComunes;
  travelService;
  usersService;
  navCtrl;
  route;
  cdRef;
  messagingService;
  messageService;
  viaje;
  yaUnido = false;
  preferencias = [];
  userID;
  conductor = false;
  userData = {};
  pasajeroYaAvisoLlegada = false;
  viajesSubscription = new Subscription();
  accordion = viewChild.required(
    MatAccordion,
    ...ngDevMode ? [{ debugName: "accordion" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor(funcionesComunes, travelService, usersService, navCtrl, route, cdRef, messagingService, messageService) {
    this.funcionesComunes = funcionesComunes;
    this.travelService = travelService;
    this.usersService = usersService;
    this.navCtrl = navCtrl;
    this.route = route;
    this.cdRef = cdRef;
    this.messagingService = messagingService;
    this.messageService = messageService;
  }
  ngOnInit() {
    const storedData = localStorage.getItem("userData");
    this.userData = storedData ? JSON.parse(storedData) : null;
    const viajeTemporal = this.travelService.getViajeData();
    if (viajeTemporal) {
      this.viaje = __spreadProps(__spreadValues({}, viajeTemporal), {
        acompanantes: viajeTemporal.acompanantes || []
      });
      this.inicializarLogica();
    } else {
      this.route.queryParams.subscribe((params) => {
        const viajeId = params["id"];
        if (viajeId) {
          this.travelService.getViaje(viajeId).subscribe({
            next: (v) => {
              this.viaje = __spreadProps(__spreadValues({}, v), {
                acompanantes: v.acompanantes || []
              });
              this.inicializarLogica();
            },
            error: (err) => {
              console.error("Error al recuperar el viaje por ID:", err);
              this.navCtrl.navigateRoot("/busqueda-viajes");
            }
          });
        } else {
          this.navCtrl.navigateRoot("/busqueda-viajes");
        }
      });
    }
  }
  inicializarLogica() {
    this.preferencias = this.funcionesComunes.validacionPreferencias(this.viaje.preferencias ?? []);
    this.checkSiYaAvisoLlegada();
    this.obtenerUsuarioActual();
    this.obtenerViajesActualizados();
    if (this.userData && this.userData.usuario) {
      this.validarSiEsConductor(this.userData.usuario.id, this.viaje);
      this.verificarSiEstaUnido();
    }
    this.cdRef.detectChanges();
  }
  ngOnDestroy() {
    if (this.viajesSubscription) {
      this.viajesSubscription.unsubscribe();
    }
  }
  /**
   * Obtiene los datos detallados del conductor del viaje.
   */
  obtenerUsuarioActual() {
    if (!this.viaje || !this.viaje.usuario_id)
      return;
    this.usersService.obtenerUsuarioPorID_busqueda_viajes(this.viaje.usuario_id).subscribe({
      next: (usuario) => {
        this.viaje = __spreadProps(__spreadValues({}, this.viaje), { usuario });
        this.userID = usuario.id;
        if (this.userData && this.userData.usuario) {
          this.verificarSiEstaUnido();
        }
        this.cdRef.markForCheck();
        this.cdRef.detectChanges();
      },
      error: (error) => console.error("Error al obtener el conductor:", error)
    });
  }
  /**
   * Escucha cambios en tiempo real sobre el viaje actual desde el BehaviorSubject del servicio.
   */
  obtenerViajesActualizados() {
    this.viajesSubscription = this.travelService.viajeData$.subscribe((viajes) => {
      if (viajes && Array.isArray(viajes) && this.viaje) {
        const viajeActualizado = viajes.find((v) => v.id === this.viaje.id);
        if (viajeActualizado) {
          this.viaje = __spreadValues({}, viajeActualizado);
          this.cdRef.markForCheck();
        }
      }
    });
  }
  /**
   * Comprueba si el usuario actual ya está aceptado en la lista de acompañantes.
   */
  verificarSiEstaUnido() {
    if (!this.userData || !this.userData.usuario || !this.viaje) {
      this.yaUnido = false;
      return;
    }
    const usuarioId = this.userData.usuario.id;
    this.travelService.getViaje(this.viaje.id).subscribe({
      next: (viajeServer) => {
        var _a;
        const usuarioTemporal = this.viaje.usuario;
        this.viaje = __spreadValues({}, viajeServer);
        if (!this.viaje.usuario)
          this.viaje.usuario = usuarioTemporal;
        this.yaUnido = ((_a = this.viaje.acompanantes) == null ? void 0 : _a.some((a) => a.id === usuarioId)) || false;
        this.cdRef.markForCheck();
      },
      error: (err) => console.error("Error al verificar uni\xF3n del pasajero:", err)
    });
  }
  /**
   * Envía una solicitud manual de reserva abriendo una sala de chat con el conductor.
   */
  enviarSolicitudManual() {
    var _a;
    if (!this.viaje)
      return;
    const emisorId = ((_a = this.userData) == null ? void 0 : _a.usuario.id) || 0;
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
        this.messagingService.enviarSolicitudViaje(payload).subscribe(() => {
          this.funcionesComunes.openConfirmModal("Solicitud enviada", "El conductor debe aceptar tu solicitud para unirte.");
          this.navCtrl.navigateForward(["/chat", convId]);
        });
      },
      error: (err) => console.error("Error al iniciar el flujo de solicitud:", err)
    });
  }
  /**
   * Redirige al perfil público del usuario especificado.
   */
  masDetallesUsuario(id_usuario) {
    const usuario = { id: id_usuario };
    this.navCtrl.navigateRoot(["/perfil-publico"], {
      queryParams: usuario
    });
  }
  validarSiEsConductor(usuario_id, viaje) {
    this.conductor = viaje && usuario_id === viaje.usuario_id;
  }
  formatData(date) {
    if (!date)
      return "";
    return date.split("T")[0].trim();
  }
  checkSiYaAvisoLlegada() {
    var _a, _b;
    if (this.yaUnido && ((_a = this.userData) == null ? void 0 : _a.usuario) && this.viaje) {
      const yo = (_b = this.viaje.acompanantes) == null ? void 0 : _b.find((a) => {
        var _a2;
        return a.id === ((_a2 = this.userData) == null ? void 0 : _a2.usuario.id);
      });
      this.pasajeroYaAvisoLlegada = (yo == null ? void 0 : yo.ha_llegado) || false;
    }
  }
  /**
   * Acción del Pasajero para alertar que ha llegado al punto de recogida.
   */
  notificarLlegadaPasajero() {
    var _a;
    if (!((_a = this.userData) == null ? void 0 : _a.usuario) || !this.viaje)
      return;
    const viajeId = this.viaje.id;
    const usuarioId = this.userData.usuario.id;
    this.travelService.notificarLlegadaPuntoPartida(viajeId, usuarioId).subscribe({
      next: () => {
        this.pasajeroYaAvisoLlegada = true;
        this.cdRef.detectChanges();
        this.funcionesComunes.openConfirmModal("\xA1Aviso enviado!", "El conductor ha sido notificado de que ya est\xE1s en el punto de encuentro.");
        this.verificarSiEstaUnido();
      },
      error: (err) => console.error("Error al notificar llegada:", err)
    });
  }
  /**
   * Acción del Conductor para validar la asistencia en directo de un acompañante.
   */
  confirmarLlegadaDesdeConductor(acompId) {
    if (!this.viaje)
      return;
    const viajeId = this.viaje.id;
    this.travelService.notificarLlegadaPuntoPartida(viajeId, acompId).subscribe({
      next: () => {
        var _a;
        const acompanante = (_a = this.viaje.acompanantes) == null ? void 0 : _a.find((a) => a.id === acompId);
        if (acompanante) {
          acompanante.ha_llegado = true;
        }
        this.cdRef.detectChanges();
        this.messageService.add({
          severity: "success",
          summary: "Llegada confirmada",
          detail: `Has marcado que el acompa\xF1ante ha llegado correctamente.`,
          life: 2e3
        });
      },
      error: (err) => console.error("Error al confirmar llegada desde conductor:", err)
    });
  }
  static \u0275fac = function DetallesViajePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetallesViajePage)(\u0275\u0275directiveInject(FuncionesComunes), \u0275\u0275directiveInject(TravelService), \u0275\u0275directiveInject(UserServicesService), \u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MessagingService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetallesViajePage, selectors: [["app-detalles-viaje"]], viewQuery: function DetallesViajePage_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.accordion, MatAccordion, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, decls: 71, vars: 24, consts: [[3, "translucent"], [1, "custom-toolbar-goguay"], ["slot", "start"], ["defaultHref", "/mis-viajes"], [1, "ion-padding", 3, "fullscreen"], [1, "main-page-container", "mt-3", "mb-5"], [1, "alert", "alert-danger", "text-center", "mb-4", "rounded-card", "shadow-sm", "animate__animated", "animate__fadeIn"], [1, "alert", "alert-warning", "text-center", "mb-4", "rounded-card", "shadow-sm", "animate__animated", "animate__fadeIn"], [1, "row", "g-4"], [1, "col-12", "col-md-6"], [1, "details-card", "p-4", "h-100", "shadow-sm"], [1, "section-title"], [1, "vertical-middle"], [1, "mb-3"], [1, "info-item-box"], [1, "fi", "fi-rr-marker", "text-primary", "me-2"], [1, "fi", "fi-rr-flag", "text-primary", "me-2"], [1, "fi", "fi-rr-calendar", "text-primary", "me-2"], [1, "fi", "fi-rr-clock", "text-primary", "me-2"], [1, "fi", "fi-rr-time-check", "text-primary", "me-2"], [1, "fi", "fi-rr-users", "text-primary", "me-2"], [1, "price-badge", "mt-4", 3, "ngClass"], [1, "small-text", "block"], [1, "price-value"], [1, "details-card", "p-4", "h-100", "shadow-sm", "d-flex", "flex-column", "gap-4"], [1, "empty-state", "text-center", "py-3", "bg-light", "rounded-card", "text-muted"], [1, "d-flex", "flex-column", "gap-2"], [1, "card", "card-reservation-info", "p-3", "mt-4", "text-center", "rounded-card", "border-0"], [1, "text-success", "fw-bold"], [1, "text-muted", "font-sm"], [1, "text-center", "mt-4", "pt-2"], [1, "acciones-en-curso", "p-4", "mt-4", "rounded-card", "shadow-sm", "bg-light-live"], [1, "mb-0", "fw-bold"], [1, "fi", "fi-rr-ban", "me-2"], [1, "fi", "fi-rr-hourglass-end", "me-2"], ["multi", "", 1, "headers-align", "custom-goguay-accordion"], [1, "border-card"], [1, "custom-header"], [1, "header-content", "d-flex", "align-items-center"], [1, "avatar-wrapper", "me-3"], ["alt", "Avatar", 1, "imgPerfilAcordeon", 3, "src"], [1, "nombre-usuario", "fw-bold"], [1, "panel-inner-content", "pt-2"], [1, "d-flex", "align-items-center"], [1, "badge-stars", "ms-2"], [1, "fi", "fi-ss-star", "me-1", "text-warning"], ["mat-raised-button", "", 1, "btn-goguay-secondary", "btn-sm", "mt-2", 3, "click"], [1, "fi", "fi-rr-info", "block", "mb-1", "font-large"], [1, "fi", "fi-ss-star", "text-warning"], ["mat-raised-button", "", 1, "btn-goguay-secondary", "btn-sm", 3, "click"], [1, "fi", "fi-rr-bolt", "bolt-icon", "me-2"], [1, "fi", "fi-rr-calendar-clock", "me-2", "text-warning", "font-medium"], ["mat-raised-button", "", 1, "btn-goguay-primary", "btn-lg", "px-5", 3, "click"], [1, "fi", "fi-rr-paper-plane", "me-2"], [1, "text-center", "text-live-title", "mb-3"], [1, "live-dot", "me-2"], [1, "d-grid", "gap-2", "max-width-button", "mx-auto"], [1, "max-width-panel", "mx-auto"], ["mat-raised-button", "", 1, "btn-llegada-pasajero", 3, "click", "disabled"], [1, "fi", "fi-rr-marker", "me-2"], [1, "small", "text-muted", "text-center", "mb-3", "font-weight-bold"], [1, "list-group", "gap-2"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "border-0", "card-passenger-row", "p-3", "rounded-card"], [1, "fw-bold", "text-dark"], [1, "badge-live-status", "rounded-pill", "animate__animated", "animate__pulse", "animate__infinite"], ["mat-raised-button", "", 1, "btn-confirm-arrival", "btn-sm"], [1, "fi", "fi-rs-marker", "me-1"], ["mat-raised-button", "", 1, "btn-confirm-arrival", "btn-sm", 3, "click"], [1, "fi", "fi-rr-check-circle", "me-1"]], template: function DetallesViajePage_Template(rf, ctx) {
    var _a, _b;
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      \u0275\u0275element(3, "ion-back-button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ion-title");
      \u0275\u0275text(5, "Detalles del viaje");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "ion-content", 4)(7, "div", 5);
      \u0275\u0275conditionalCreate(8, DetallesViajePage_Conditional_8_Template, 4, 0, "div", 6);
      \u0275\u0275conditionalCreate(9, DetallesViajePage_Conditional_9_Template, 4, 0, "div", 7);
      \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "h2", 11);
      \u0275\u0275text(14, " Trayecto ");
      \u0275\u0275elementStart(15, "mat-icon", 12);
      \u0275\u0275text(16, "emoji_transportation");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(17, "mat-divider", 13);
      \u0275\u0275elementStart(18, "div", 14)(19, "p")(20, "strong");
      \u0275\u0275element(21, "i", 15);
      \u0275\u0275text(22, " Origen: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p")(25, "strong");
      \u0275\u0275element(26, "i", 16);
      \u0275\u0275text(27, " Destino: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "p")(30, "strong");
      \u0275\u0275element(31, "i", 17);
      \u0275\u0275text(32, " Fecha de salida: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "p")(36, "strong");
      \u0275\u0275element(37, "i", 18);
      \u0275\u0275text(38, " Hora de salida: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "p")(41, "strong");
      \u0275\u0275element(42, "i", 19);
      \u0275\u0275text(43, " Llegada (Aprox.): ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "p")(46, "strong");
      \u0275\u0275element(47, "i", 20);
      \u0275\u0275text(48, " Plazas libres: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 21)(51, "span", 22);
      \u0275\u0275text(52, "Aportaci\xF3n por plaza");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "span", 23);
      \u0275\u0275text(54);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(55, "div", 9)(56, "div", 24);
      \u0275\u0275conditionalCreate(57, DetallesViajePage_Conditional_57_Template, 28, 7, "div");
      \u0275\u0275elementStart(58, "div")(59, "h2", 11);
      \u0275\u0275text(60, " Acompa\xF1antes ");
      \u0275\u0275elementStart(61, "mat-icon", 12);
      \u0275\u0275text(62, "groups");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(63, "mat-divider", 13);
      \u0275\u0275conditionalCreate(64, DetallesViajePage_Conditional_64_Template, 4, 0, "div", 25);
      \u0275\u0275conditionalCreate(65, DetallesViajePage_Conditional_65_Template, 3, 0, "div", 26);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(66, "div", 27);
      \u0275\u0275conditionalCreate(67, DetallesViajePage_Conditional_67_Template, 3, 0, "div", 28);
      \u0275\u0275conditionalCreate(68, DetallesViajePage_Conditional_68_Template, 3, 0, "div", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(69, DetallesViajePage_Conditional_69_Template, 4, 0, "div", 30);
      \u0275\u0275conditionalCreate(70, DetallesViajePage_Conditional_70_Template, 6, 2, "div", 31);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("translucent", false);
      \u0275\u0275advance(6);
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.viaje.plazas === 0 ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.funcionesComunes.esViajeFinalizado(ctx.viaje.fecha_salida, ctx.viaje.hora_llegada) ? 9 : -1);
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate1(" ", ctx.viaje.origen, " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.viaje.destino, " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(34, 19, ctx.formatData(ctx.viaje.fecha_salida), "dd-MM-yyyy"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.viaje.hora_salida, " h ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.viaje.hora_llegada, " h ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.viaje.plazas, " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(22, _c0, !ctx.viaje.precio_viaje));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.viaje.precio_viaje ? ctx.viaje.precio_viaje + " \u20AC" : "Gratuito");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.conductor ? 57 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(((_a = ctx.viaje.acompanantes) == null ? void 0 : _a.length) === 0 ? 64 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((_b = ctx.viaje.acompanantes) == null ? void 0 : _b.length) > 0 ? 65 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.viaje.reserva_automatica ? 67 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.viaje.reserva_automatica ? 68 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.conductor && !ctx.yaUnido && ctx.viaje.plazas > 0 ? 69 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.viaje.estado_viaje === "En Curso" ? 70 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    FormsModule,
    IonicModule,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonBackButton,
    MatDivider,
    MatIcon,
    MatButtonModule,
    MatButton,
    MatAccordion,
    MatExpansionModule,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatFormFieldModule,
    ToastModule,
    DatePipe
  ], styles: ["\n.custom-toolbar-goguay[_ngcontent-%COMP%] {\n  --%NS%background: #F0D7B4;\n  --%NS%color: #000000;\n}\n.custom-toolbar-goguay[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%] {\n  --%NS%color: #000000;\n}\n.main-page-container[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto;\n}\n.details-card[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 35px;\n  border: 1px solid #f0f0f0;\n}\n.rounded-card[_ngcontent-%COMP%] {\n  border-radius: 35px !important;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #333333;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.section-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #b3b5e6;\n}\n.info-item-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #444444;\n  margin-bottom: 12px;\n}\n.info-item-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #222222;\n  display: inline-block;\n  width: 160px;\n}\n.price-badge[_ngcontent-%COMP%] {\n  background-color: #F0D7B4;\n  border-radius: 35px;\n  padding: 12px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 4px 10px rgba(240, 215, 180, 0.3);\n}\n.price-badge[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #000000;\n}\n.price-badge.no-price[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n}\n.price-badge.no-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.custom-goguay-accordion[_ngcontent-%COMP%]   .border-card[_ngcontent-%COMP%] {\n  border-radius: 35px !important;\n  overflow: hidden;\n  border: 1px solid #eef0f5;\n  box-shadow: none !important;\n}\n.custom-goguay-accordion[_ngcontent-%COMP%]   .custom-header[_ngcontent-%COMP%] {\n  background-color: #fafafa !important;\n  height: 54px;\n}\n.imgPerfilAcordeon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid #b3b5e6;\n}\n.badge-stars[_ngcontent-%COMP%] {\n  background-color: #fffde7;\n  border: 1px solid #fbc02d;\n  color: #f57f17;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 600;\n  font-size: 0.85rem;\n}\n.card-reservation-info[_ngcontent-%COMP%] {\n  background-color: #f9fafc !important;\n  border: 1px dashed #b3b5e6 !important;\n}\n.btn-goguay-primary[_ngcontent-%COMP%] {\n  background-color: #b3b5e6 !important;\n  color: #000000 !important;\n  font-weight: 700 !important;\n  border-radius: 35px !important;\n  padding: 12px 32px !important;\n  box-shadow: 0 4px 12px rgba(179, 181, 230, 0.4) !important;\n  transition: transform 0.2s ease;\n}\n.btn-goguay-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 16px rgba(179, 181, 230, 0.5) !important;\n}\n.btn-goguay-secondary[_ngcontent-%COMP%] {\n  background-color: #F0D7B4 !important;\n  color: #000000 !important;\n  font-weight: 600 !important;\n  border-radius: 35px !important;\n  padding: 6px 16px !important;\n}\n.acciones-en-curso[_ngcontent-%COMP%] {\n  background-color: #fff9f0;\n  border: 2px solid #F0D7B4;\n  border-radius: 16px;\n}\n.acciones-en-curso[_ngcontent-%COMP%]   .text-live-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #d87d00;\n}\n.live-dot[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 10px;\n  background-color: #e65100;\n  border-radius: 50%;\n  display: inline-block;\n  animation: _ngcontent-%COMP%_pulseLive 1.5s infinite;\n}\n.btn-llegada-pasajero[_ngcontent-%COMP%] {\n  background-color: #4caf50 !important;\n  color: #ffffff !important;\n  font-weight: 700 !important;\n  border-radius: 35px !important;\n  padding: 14px 20px !important;\n  box-shadow: 0 4px 10px rgba(76, 175, 80, 0.3) !important;\n}\n.btn-llegada-pasajero[_ngcontent-%COMP%]:disabled {\n  background-color: #bcffc5 !important;\n  color: #2e7d32 !important;\n  box-shadow: none !important;\n}\n.card-passenger-row[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  border: 1px solid #f2f2f2 !important;\n}\n.badge-live-status[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n  padding: 6px 14px;\n  font-weight: 700;\n  font-size: 0.82rem;\n  border: 1px solid #2e7d32;\n}\n.btn-confirm-arrival[_ngcontent-%COMP%] {\n  background-color: #e1f5fe !important;\n  color: #0288d1 !important;\n  font-weight: 700 !important;\n  border-radius: 20px !important;\n}\n.btn-confirm-arrival[_ngcontent-%COMP%]:hover {\n  background-color: #0288d1 !important;\n  color: #fff !important;\n}\n.max-width-button[_ngcontent-%COMP%] {\n  max-width: 380px;\n}\n.max-width-panel[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n@keyframes _ngcontent-%COMP%_pulseLive {\n  0% {\n    transform: scale(0.95);\n    opacity: 0.5;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.95);\n    opacity: 0.5;\n  }\n}\n@media (max-width: 767px) {\n  .info-item-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n    margin-bottom: 2px;\n  }\n}\n/*# sourceMappingURL=detalles-viaje.page.css.map */"], changeDetection: 1 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetallesViajePage, [{
    type: Component,
    args: [{ selector: "app-detalles-viaje", standalone: true, changeDetection: ChangeDetectionStrategy.Eager, imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      MatDivider,
      MatIcon,
      MatButtonModule,
      MatAccordion,
      MatExpansionModule,
      MatFormFieldModule,
      ToastModule
    ], template: `<ion-header [translucent]="false">
  <ion-toolbar class="custom-toolbar-goguay">
    <ion-buttons slot="start">
      <ion-back-button defaultHref="/mis-viajes"></ion-back-button>
    </ion-buttons>
    <ion-title>Detalles del viaje</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content
  [fullscreen]="true"
  class="ion-padding"
>
  <div class="main-page-container mt-3 mb-5">
    @if (viaje.plazas === 0) {
    <div class="alert alert-danger text-center mb-4 rounded-card shadow-sm animate__animated animate__fadeIn">
      <p class="mb-0 fw-bold">
        <i class="fi fi-rr-ban me-2"></i>
        Este viaje ya no dispone de plazas. \u{1F974}
      </p>
    </div>
    } @if (funcionesComunes.esViajeFinalizado(viaje.fecha_salida, viaje.hora_llegada)) {
    <div class="alert alert-warning text-center mb-4 rounded-card shadow-sm animate__animated animate__fadeIn">
      <p class="mb-0 fw-bold">
        <i class="fi fi-rr-hourglass-end me-2"></i>
        Este viaje ya ha terminado. \u{1F974}
      </p>
    </div>
    }

    <div class="row g-4">
      <div class="col-12 col-md-6">
        <div class="details-card p-4 h-100 shadow-sm">
          <h2 class="section-title">
            Trayecto
            <mat-icon class="vertical-middle">emoji_transportation</mat-icon>
          </h2>
          <mat-divider class="mb-3"></mat-divider>

          <div class="info-item-box">
            <p>
              <strong>
                <i class="fi fi-rr-marker text-primary me-2"></i>
                Origen:
              </strong>
              {{ viaje.origen }}
            </p>
            <p>
              <strong>
                <i class="fi fi-rr-flag text-primary me-2"></i>
                Destino:
              </strong>
              {{ viaje.destino }}
            </p>
            <p>
              <strong>
                <i class="fi fi-rr-calendar text-primary me-2"></i>
                Fecha de salida:
              </strong>
              {{ formatData(viaje.fecha_salida) | date:'dd-MM-yyyy' }}
            </p>
            <p>
              <strong>
                <i class="fi fi-rr-clock text-primary me-2"></i>
                Hora de salida:
              </strong>
              {{ viaje.hora_salida }} h
            </p>
            <p>
              <strong>
                <i class="fi fi-rr-time-check text-primary me-2"></i>
                Llegada (Aprox.):
              </strong>
              {{ viaje.hora_llegada }} h
            </p>
            <p>
              <strong>
                <i class="fi fi-rr-users text-primary me-2"></i>
                Plazas libres:
              </strong>
              {{ viaje.plazas }}
            </p>
          </div>

          <div
            class="price-badge mt-4"
            [ngClass]="{'no-price': !viaje.precio_viaje}"
          >
            <span class="small-text block">Aportaci\xF3n por plaza</span>
            <span class="price-value">{{ viaje.precio_viaje ? (viaje.precio_viaje + ' \u20AC') : 'Gratuito' }}</span>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="details-card p-4 h-100 shadow-sm d-flex flex-column gap-4">
          @if (!conductor) {
          <div>
            <h2 class="section-title">
              Conductor
              <mat-icon class="vertical-middle">airline_seat_recline_normal</mat-icon>
            </h2>
            <mat-divider class="mb-3"></mat-divider>
            <mat-accordion
              class="headers-align custom-goguay-accordion"
              multi
            >
              <mat-expansion-panel class="border-card">
                <mat-expansion-panel-header class="custom-header">
                  <div class="header-content d-flex align-items-center">
                    <div class="avatar-wrapper me-3">
                      @if (!viaje.usuario?.fotoPerfil) {
                      <mat-icon>account_circle</mat-icon>
                      } @if (viaje.usuario?.fotoPerfil) {
                      <img
                        class="imgPerfilAcordeon"
                        [src]="$safeNavigationMigration(viaje.usuario?.fotoPerfil)"
                        alt="Avatar"
                      />
                      }
                    </div>
                    <span class="nombre-usuario fw-bold">{{ viaje.usuario?.nombre }} {{ viaje.usuario?.apellidos }}</span>
                  </div>
                </mat-expansion-panel-header>
                <div class="panel-inner-content pt-2">
                  <p>
                    <strong>Nombre completo:</strong>
                    {{ viaje.usuario?.nombre }} {{ viaje.usuario?.apellidos }}
                  </p>
                  <p class="d-flex align-items-center">
                    <strong>Puntuaci\xF3n:</strong>
                    <span class="badge-stars ms-2">
                      <i class="fi fi-ss-star me-1 text-warning"></i>
                      {{ viaje.usuario?.puntuacion_promedio || 'Sin valoraciones' }}
                    </span>
                  </p>
                  <button
                    mat-raised-button
                    class="btn-goguay-secondary btn-sm mt-2"
                    (click)="masDetallesUsuario(viaje.usuario_id)"
                  >
                    Ver Perfil P\xFAblico
                  </button>
                </div>
              </mat-expansion-panel>
            </mat-accordion>
          </div>
          }

          <div>
            <h2 class="section-title">
              Acompa\xF1antes
              <mat-icon class="vertical-middle">groups</mat-icon>
            </h2>
            <mat-divider class="mb-3"></mat-divider>

            @if (viaje.acompanantes?.length === 0) {
            <div class="empty-state text-center py-3 bg-light rounded-card text-muted">
              <i class="fi fi-rr-info block mb-1 font-large"></i>
              <span>Este viaje a\xFAn no tiene acompa\xF1antes aceptados.</span>
            </div>
            } @if (viaje.acompanantes?.length! > 0) {
            <div class="d-flex flex-column gap-2">
              @for (acomp of viaje.acompanantes; track acomp) {
              <mat-accordion
                class="headers-align custom-goguay-accordion"
                multi
              >
                <mat-expansion-panel class="border-card">
                  <mat-expansion-panel-header class="custom-header">
                    <div class="header-content d-flex align-items-center">
                      <div class="avatar-wrapper me-3">
                        @if (!acomp.fotoPerfil) {
                        <mat-icon>account_circle</mat-icon>
                        } @if (acomp.fotoPerfil) {
                        <img
                          class="imgPerfilAcordeon"
                          [src]="acomp.fotoPerfil"
                          alt="Avatar"
                        />
                        }
                      </div>
                      <span class="nombre-usuario fw-bold">{{ acomp.nombre }} {{ acomp.apellidos }}</span>
                    </div>
                  </mat-expansion-panel-header>
                  <div class="panel-inner-content pt-2">
                    <p>
                      <strong>Puntuaci\xF3n promedio:</strong>
                      <i class="fi fi-ss-star text-warning"></i>
                      {{ acomp.puntuacion_promedio || 0 }}
                    </p>
                    <button
                      mat-raised-button
                      class="btn-goguay-secondary btn-sm"
                      (click)="masDetallesUsuario(acomp.id)"
                    >
                      Ver Perfil P\xFAblico
                    </button>
                  </div>
                </mat-expansion-panel>
              </mat-accordion>
              }
            </div>
            }
          </div>
        </div>
      </div>
    </div>

    <div class="card card-reservation-info p-3 mt-4 text-center rounded-card border-0">
      @if (viaje.reserva_automatica) {
      <div class="text-success fw-bold">
        <i class="fi fi-rr-bolt bolt-icon me-2"></i>
        Este viaje tiene reserva autom\xE1tica. \xA1Plaza confirmada al instante!
      </div>
      } @if (!viaje.reserva_automatica) {
      <div class="text-muted font-sm">
        <i class="fi fi-rr-calendar-clock me-2 text-warning font-medium"></i>
        Tu reserva se enviar\xE1 como solicitud pendiente. El conductor tendr\xE1 que validarla manualmente.
      </div>
      }
    </div>

    @if (!conductor && !yaUnido && viaje.plazas! > 0) {
    <div class="text-center mt-4 pt-2">
      <button
        mat-raised-button
        class="btn-goguay-primary btn-lg px-5"
        (click)="enviarSolicitudManual()"
      >
        <i class="fi fi-rr-paper-plane me-2"></i>
        Solicitar plaza en este viaje
      </button>
    </div>
    } @if (viaje.estado_viaje === 'En Curso') {
    <div class="acciones-en-curso p-4 mt-4 rounded-card shadow-sm bg-light-live">
      <h3 class="text-center text-live-title mb-3">
        <span class="live-dot me-2"></span>
        Viaje en Curso - Control de Asistencia
      </h3>
      @if (yaUnido && !conductor) {
      <div class="d-grid gap-2 max-width-button mx-auto">
        <button
          mat-raised-button
          class="btn-llegada-pasajero"
          (click)="notificarLlegadaPasajero()"
          [disabled]="pasajeroYaAvisoLlegada"
        >
          <i class="fi fi-rr-marker me-2"></i>
          {{ pasajeroYaAvisoLlegada ? 'Ya has notificado tu llegada al punto' : 'He llegado al punto de partida' }}
        </button>
      </div>
      } @if (conductor) {
      <div class="max-width-panel mx-auto">
        <p class="small text-muted text-center mb-3 font-weight-bold">
          Verifica qu\xE9 pasajeros se encuentran f\xEDsicamente contigo en el veh\xEDculo:
        </p>
        <div class="list-group gap-2">
          @for (acomp of viaje.acompanantes; track acomp) {
          <div class="list-group-item d-flex justify-content-between align-items-center border-0 card-passenger-row p-3 rounded-card">
            <span class="fw-bold text-dark">{{ acomp.nombre }} {{ acomp.apellidos }}</span>
            <div class="d-flex align-items-center">
              @if (acomp.ha_llegado) {
              <span class="badge-live-status rounded-pill animate__animated animate__pulse animate__infinite">
                <i class="fi fi-rs-marker me-1"></i>
                \xA1Confirmado en el Punto!
              </span>
              } @if (!acomp.ha_llegado) {
              <button
                mat-raised-button
                class="btn-confirm-arrival btn-sm"
                (click)="confirmarLlegadaDesdeConductor(acomp.id)"
              >
                <i class="fi fi-rr-check-circle me-1"></i>
                Confirmar asistencia
              </button>
              }
            </div>
          </div>
          }
        </div>
      </div>
      }
    </div>
    }
  </div>
</ion-content>
`, styles: ["/* src/app/pages/mis-viajes/detalles-viaje/detalles-viaje.page.scss */\n.custom-toolbar-goguay {\n  --background: #F0D7B4;\n  --color: #000000;\n}\n.custom-toolbar-goguay ion-back-button {\n  --color: #000000;\n}\n.main-page-container {\n  max-width: 960px;\n  margin: 0 auto;\n}\n.details-card {\n  background-color: #ffffff;\n  border-radius: 35px;\n  border: 1px solid #f0f0f0;\n}\n.rounded-card {\n  border-radius: 35px !important;\n}\n.section-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #333333;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.section-title mat-icon {\n  color: #b3b5e6;\n}\n.info-item-box p {\n  font-size: 0.95rem;\n  color: #444444;\n  margin-bottom: 12px;\n}\n.info-item-box p strong {\n  color: #222222;\n  display: inline-block;\n  width: 160px;\n}\n.price-badge {\n  background-color: #F0D7B4;\n  border-radius: 35px;\n  padding: 12px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 4px 10px rgba(240, 215, 180, 0.3);\n}\n.price-badge .price-value {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #000000;\n}\n.price-badge.no-price {\n  background-color: #e8f5e9;\n}\n.price-badge.no-price .price-value {\n  color: #2e7d32;\n}\n.custom-goguay-accordion .border-card {\n  border-radius: 35px !important;\n  overflow: hidden;\n  border: 1px solid #eef0f5;\n  box-shadow: none !important;\n}\n.custom-goguay-accordion .custom-header {\n  background-color: #fafafa !important;\n  height: 54px;\n}\n.imgPerfilAcordeon {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid #b3b5e6;\n}\n.badge-stars {\n  background-color: #fffde7;\n  border: 1px solid #fbc02d;\n  color: #f57f17;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 600;\n  font-size: 0.85rem;\n}\n.card-reservation-info {\n  background-color: #f9fafc !important;\n  border: 1px dashed #b3b5e6 !important;\n}\n.btn-goguay-primary {\n  background-color: #b3b5e6 !important;\n  color: #000000 !important;\n  font-weight: 700 !important;\n  border-radius: 35px !important;\n  padding: 12px 32px !important;\n  box-shadow: 0 4px 12px rgba(179, 181, 230, 0.4) !important;\n  transition: transform 0.2s ease;\n}\n.btn-goguay-primary:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 16px rgba(179, 181, 230, 0.5) !important;\n}\n.btn-goguay-secondary {\n  background-color: #F0D7B4 !important;\n  color: #000000 !important;\n  font-weight: 600 !important;\n  border-radius: 35px !important;\n  padding: 6px 16px !important;\n}\n.acciones-en-curso {\n  background-color: #fff9f0;\n  border: 2px solid #F0D7B4;\n  border-radius: 16px;\n}\n.acciones-en-curso .text-live-title {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #d87d00;\n}\n.live-dot {\n  height: 10px;\n  width: 10px;\n  background-color: #e65100;\n  border-radius: 50%;\n  display: inline-block;\n  animation: pulseLive 1.5s infinite;\n}\n.btn-llegada-pasajero {\n  background-color: #4caf50 !important;\n  color: #ffffff !important;\n  font-weight: 700 !important;\n  border-radius: 35px !important;\n  padding: 14px 20px !important;\n  box-shadow: 0 4px 10px rgba(76, 175, 80, 0.3) !important;\n}\n.btn-llegada-pasajero:disabled {\n  background-color: #bcffc5 !important;\n  color: #2e7d32 !important;\n  box-shadow: none !important;\n}\n.card-passenger-row {\n  background-color: #ffffff !important;\n  border: 1px solid #f2f2f2 !important;\n}\n.badge-live-status {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n  padding: 6px 14px;\n  font-weight: 700;\n  font-size: 0.82rem;\n  border: 1px solid #2e7d32;\n}\n.btn-confirm-arrival {\n  background-color: #e1f5fe !important;\n  color: #0288d1 !important;\n  font-weight: 700 !important;\n  border-radius: 20px !important;\n}\n.btn-confirm-arrival:hover {\n  background-color: #0288d1 !important;\n  color: #fff !important;\n}\n.max-width-button {\n  max-width: 380px;\n}\n.max-width-panel {\n  max-width: 600px;\n}\n@keyframes pulseLive {\n  0% {\n    transform: scale(0.95);\n    opacity: 0.5;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.95);\n    opacity: 0.5;\n  }\n}\n@media (max-width: 767px) {\n  .info-item-box p strong {\n    width: 100%;\n    display: block;\n    margin-bottom: 2px;\n  }\n}\n/*# sourceMappingURL=detalles-viaje.page.css.map */\n"] }]
  }], () => [{ type: FuncionesComunes }, { type: TravelService }, { type: UserServicesService }, { type: NavController }, { type: ActivatedRoute }, { type: ChangeDetectorRef }, { type: MessagingService }, { type: MessageService }], { accordion: [{ type: ViewChild, args: [forwardRef(() => MatAccordion), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetallesViajePage, { className: "DetallesViajePage", filePath: "src/app/pages/mis-viajes/detalles-viaje/detalles-viaje.page.ts", lineNumber: 46 });
})();
export {
  DetallesViajePage
};
//# debugId=5c37063e-7afb-5707-93c8-1009a6ed9f9e
//# sourceMappingURL=detalles-viaje.page-IWKZ7CSV.js.map
