import {
  MessagingService
} from "./chunk-N25HX3QD.js";
import {
  NotificacionesService
} from "./chunk-TGPQDEZS.js";
import {
  IonHeader,
  IonMenuButton
} from "./chunk-BLKEDZE4.js";
import {
  HelpModalComponent
} from "./chunk-N7S2XU3X.js";
import {
  LanguageService
} from "./chunk-G5UZDB7B.js";
import {
  MessageService
} from "./chunk-WDE6N5F6.js";
import {
  UserServicesService
} from "./chunk-34RASOLQ.js";
import {
  MatDivider
} from "./chunk-ULIFZXTE.js";
import {
  MatDialog
} from "./chunk-LLKVXR72.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-Z2EGICVD.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-PWPN4F54.js";
import {
  CommonModule,
  FormsModule,
  NavController,
  NgClass,
  Platform
} from "./chunk-DD4MNYDA.js";
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  lastValueFrom,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YUKRBYLH.js";
import {
  __async
} from "./chunk-5SZB5ECT.js";

// src/app/shared/navbar/navbar.component.ts
var _c0 = (a0) => ({ "grayscale-filter": a0 });
function NavbarComponent_Conditional_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.numNotificaciones);
  }
}
function NavbarComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 16)(1, "a", 28);
    \u0275\u0275element(2, "img", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, NavbarComponent_Conditional_23_Conditional_3_Template, 2, 1, "span", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("animar-icono", ctx_r0.numNotificaciones > 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.numNotificaciones > 0 ? 3 : -1);
  }
}
function NavbarComponent_Conditional_24_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.numNotificacionesMensajes);
  }
}
function NavbarComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 17)(1, "a", 31);
    \u0275\u0275element(2, "img", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, NavbarComponent_Conditional_24_Conditional_3_Template, 2, 1, "span", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("animar-icono", ctx_r0.numNotificacionesMensajes > 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.numNotificacionesMensajes > 0 ? 3 : -1);
  }
}
function NavbarComponent_Conditional_25_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 35);
  }
}
function NavbarComponent_Conditional_25_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "img", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.usuario == null ? null : ctx_r0.usuario.fotoPerfil, \u0275\u0275sanitizeUrl);
  }
}
function NavbarComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "a", 34);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_25_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambioDireccionFlecha());
    });
    \u0275\u0275conditionalCreate(2, NavbarComponent_Conditional_25_Conditional_2_Template, 1, 0, "img", 35);
    \u0275\u0275conditionalCreate(3, NavbarComponent_Conditional_25_Conditional_3_Template, 2, 1, "div", 36);
    \u0275\u0275elementStart(4, "mat-icon", 37);
    \u0275\u0275text(5, " expand_more ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ul", 38)(7, "nav", 39)(8, "ul")(9, "li", 40)(10, "a", 41);
    \u0275\u0275element(11, "i", 42);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "li", 40)(15, "a", 43);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_25_Template_a_click_15_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.irAMisViajes());
    });
    \u0275\u0275element(16, "i", 44);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "li", 40)(20, "a", 45);
    \u0275\u0275element(21, "i", 46);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "li", 40)(25, "a", 47);
    \u0275\u0275element(26, "i", 48);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "li", 40)(30, "a", 49);
    \u0275\u0275element(31, "i", 50);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "li", 51)(35, "a", 52);
    \u0275\u0275element(36, "i", 53);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(39, "mat-divider", 54);
    \u0275\u0275elementStart(40, "li", 55)(41, "a", 56);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_25_Template_a_click_41_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.modalCerrarSesion());
    });
    \u0275\u0275elementStart(42, "mat-icon", 57);
    \u0275\u0275text(43, "power_settings_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!(ctx_r0.usuario == null ? null : ctx_r0.usuario.fotoPerfil) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.usuario == null ? null : ctx_r0.usuario.fotoPerfil) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotada", ctx_r0.isDropdownOpen);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("show", ctx_r0.isDropdownOpen);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 13, "NAVBAR.MENUUSUARIO.MI_PERFIL"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 15, "NAVBAR.MENUUSUARIO.MIS_VIAJES"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 17, "NAVBAR.MENUUSUARIO.DATOS_CONTACTO"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 19, "NAVBAR.MENUUSUARIO.VERIFICACION"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 21, "NAVBAR.MENUUSUARIO.SALDO"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 23, "NAVBAR.MENUUSUARIO.AJUSTES"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 25, "NAVBAR.MENUUSUARIO.SALIR"), " ");
  }
}
function NavbarComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "a", 34);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_26_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambioDireccionFlecha());
    });
    \u0275\u0275elementStart(2, "div", 36);
    \u0275\u0275element(3, "img", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-icon", 37);
    \u0275\u0275text(5, " expand_more ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ul", 60)(7, "li")(8, "a", 61);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "li")(12, "a", 62);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classProp("rotada", ctx_r0.isDropdownOpen);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("show", ctx_r0.isDropdownOpen);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 6, "NAVBAR.MENUUSUARIO.LOGIN"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 8, "NAVBAR.MENUUSUARIO.REGISTRO"), " ");
  }
}
function NavbarComponent_Conditional_37_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.numNotificaciones);
  }
}
function NavbarComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 16)(1, "a", 28);
    \u0275\u0275element(2, "img", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, NavbarComponent_Conditional_37_Conditional_3_Template, 2, 1, "span", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("animar-icono", ctx_r0.numNotificaciones > 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.numNotificaciones > 0 ? 3 : -1);
  }
}
function NavbarComponent_Conditional_38_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.numNotificacionesMensajes);
  }
}
function NavbarComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 17)(1, "a", 31);
    \u0275\u0275element(2, "img", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, NavbarComponent_Conditional_38_Conditional_3_Template, 2, 1, "span", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("animar-icono", ctx_r0.numNotificacionesMensajes > 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.numNotificacionesMensajes > 0 ? 3 : -1);
  }
}
function NavbarComponent_Conditional_39_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 35);
  }
}
function NavbarComponent_Conditional_39_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "img", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.usuario == null ? null : ctx_r0.usuario.fotoPerfil, \u0275\u0275sanitizeUrl);
  }
}
function NavbarComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "a", 34);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_39_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambioDireccionFlecha());
    });
    \u0275\u0275conditionalCreate(2, NavbarComponent_Conditional_39_Conditional_2_Template, 1, 0, "img", 35);
    \u0275\u0275conditionalCreate(3, NavbarComponent_Conditional_39_Conditional_3_Template, 2, 1, "div", 63);
    \u0275\u0275elementStart(4, "mat-icon", 37);
    \u0275\u0275text(5, " expand_more ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ul", 38)(7, "nav", 39)(8, "ul")(9, "li", 40)(10, "a", 41);
    \u0275\u0275element(11, "i", 42);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "li", 40)(15, "a", 43);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_39_Template_a_click_15_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.irAMisViajes());
    });
    \u0275\u0275element(16, "i", 44);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "li", 40)(20, "a", 45);
    \u0275\u0275element(21, "i", 46);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "li", 40)(25, "a", 47);
    \u0275\u0275element(26, "i", 48);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "li", 40)(30, "a", 49);
    \u0275\u0275element(31, "i", 50);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "li", 51)(35, "a", 52);
    \u0275\u0275element(36, "i", 53);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(39, "mat-divider", 54);
    \u0275\u0275elementStart(40, "li", 55)(41, "a", 56);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_39_Template_a_click_41_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.modalCerrarSesion());
    });
    \u0275\u0275elementStart(42, "mat-icon", 57);
    \u0275\u0275text(43, "power_settings_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!(ctx_r0.usuario == null ? null : ctx_r0.usuario.fotoPerfil) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.usuario == null ? null : ctx_r0.usuario.fotoPerfil) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotada", ctx_r0.isDropdownOpen);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("show", ctx_r0.isDropdownOpen);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 13, "NAVBAR.MENUUSUARIO.MI_PERFIL"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 15, "NAVBAR.MENUUSUARIO.MIS_VIAJES"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 17, "NAVBAR.MENUUSUARIO.DATOS_CONTACTO"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 19, "NAVBAR.MENUUSUARIO.VERIFICACION"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 21, "NAVBAR.MENUUSUARIO.SALDO"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 23, "NAVBAR.MENUUSUARIO.AJUSTES"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 25, "NAVBAR.MENUUSUARIO.SALIR"), " ");
  }
}
function NavbarComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "a", 34);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_40_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambioDireccionFlecha());
    });
    \u0275\u0275elementStart(2, "div", 63);
    \u0275\u0275element(3, "img", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-icon", 37);
    \u0275\u0275text(5, " expand_more ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ul", 60)(7, "li")(8, "a", 61);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "li")(12, "a", 62);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classProp("rotada", ctx_r0.isDropdownOpen);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("show", ctx_r0.isDropdownOpen);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 6, "NAVBAR.MENUUSUARIO.LOGIN"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 8, "NAVBAR.MENUUSUARIO.REGISTRO"), " ");
  }
}
var NavbarComponent = class _NavbarComponent {
  navCtrl;
  platform;
  languageService;
  userService;
  notificationService;
  messagingService;
  element;
  translate;
  messageService;
  cdr;
  dialog;
  /**
   * Variables que van a recibir información de otros componentes
   * mediante la anotación "Input()"
   */
  usuarioSub;
  backRoute = null;
  searchRoute = "/home";
  isLoggedIn = false;
  isPublishRoute = false;
  origin = "";
  logo = "../../../assets/logo/PRIDECAR.png";
  userData = {};
  usuario = null;
  /**
   * Variables para el título y el icono dinámicos.
   * Por defecto muestran "Buscar viaje" si no se le pasa ninguna información
   */
  dynamicTitle = "Buscar viaje";
  dynamicIcon = "search";
  validacionHomePage = true;
  menuOpen = false;
  isDropdownOpen = false;
  isLenguageDropdownOpen = false;
  isMobileWeb = false;
  isDesktop = false;
  menuType = "push";
  numNotificaciones = 0;
  numNotificacionesMensajes = 0;
  notificaciones = [];
  notificaciones_mensajes = [];
  selectedLanguage = "es";
  pollingSub;
  constructor(navCtrl, platform, languageService, userService, notificationService, messagingService, element, translate, messageService, cdr, dialog) {
    this.navCtrl = navCtrl;
    this.platform = platform;
    this.languageService = languageService;
    this.userService = userService;
    this.notificationService = notificationService;
    this.messagingService = messagingService;
    this.element = element;
    this.translate = translate;
    this.messageService = messageService;
    this.cdr = cdr;
    this.dialog = dialog;
    this.selectedLanguage = this.languageService.getLanguage() || "es";
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.loadUserData();
      this.setupPlatformConfig();
      const isUserDataEmpty = !this.userData || Object.keys(this.userData).length === 0;
      if (!isUserDataEmpty) {
        this.usuario = this.userData.usuario;
        this.isLoggedIn = true;
        const id = this.userData.usuario.id;
        this.obtenerNotificaciones(id);
        this.obtenerNotificacionesMensajes(id);
        this.iniciarPolling();
        this.cdr.detectChanges();
      } else {
        this.usuarioSub = this.userService.usuario$.subscribe((usuarioActualizado) => {
          if (usuarioActualizado && Object.keys(usuarioActualizado).length > 0) {
            this.usuario = usuarioActualizado;
            console.log("usuario: ", this.usuario);
            this.isLoggedIn = true;
            const id = usuarioActualizado.id;
            this.obtenerNotificaciones(id);
            this.obtenerNotificacionesMensajes(id);
            this.iniciarPolling();
          } else {
            this.resetUserStatus();
          }
          this.cdr.detectChanges();
        });
      }
    });
  }
  /**
   * Función para iniciar el polling (obtención) de notificaciones cada 10 segundos.
   */
  iniciarPolling() {
    if (this.pollingSub)
      clearInterval(this.pollingSub);
    this.pollingSub = setInterval(() => {
      var _a, _b;
      if (this.isLoggedIn && ((_b = (_a = this.userData) == null ? void 0 : _a.usuario) == null ? void 0 : _b.id)) {
        this.obtenerNotificaciones(this.userData.usuario.id);
        this.obtenerNotificacionesMensajes(this.userData.usuario.id);
      }
    }, 1e4);
  }
  /**
   * Función para cargar los datos del usuario desde el servicio de usuario.
   * Si el usuario tiene notificaciones no leídas, se actualiza el mensaje de la notificación pendiente.
   */
  resetUserStatus() {
    this.usuario = null;
    this.userData = {};
    this.isLoggedIn = false;
    this.numNotificaciones = 0;
    if (this.pollingSub)
      clearInterval(this.pollingSub);
  }
  /**
   * Función para obtener todas las notificaciones del usuario que ha iniciadio sesión.
   * 1º Actualiza el número de notificaciones no leídas.
   * 2º Si hay notificaciones no leídas, actualiza el mensaje de la notificación pendiente.
   */
  setupPlatformConfig() {
    this.isMobileWeb = this.platform.is("mobileweb");
    this.isDesktop = this.platform.is("desktop");
    if (this.searchRoute === "search") {
      this.searchRoute = "/busqueda-viajes";
      this.dynamicTitle = "Buscar viaje";
      this.dynamicIcon = "search";
    } else if (this.searchRoute === "newTravel") {
      this.searchRoute = "/nuevo-viaje";
      this.dynamicTitle = "Publicar viaje";
      this.dynamicIcon = "add";
    }
    this.validacionHomePage = this.searchRoute === "/home";
    this.isMobileWeb = this.platform.is("mobileweb");
    this.isDesktop = this.platform.is("desktop");
    if (this.searchRoute === "search") {
      this.searchRoute = "/busqueda-viajes";
      this.dynamicTitle = "Buscar viaje";
      this.dynamicIcon = "search";
    } else if (this.searchRoute === "newTravel") {
      this.searchRoute = "/nuevo-viaje";
      this.dynamicTitle = "Publicar viaje";
      this.dynamicIcon = "add";
    }
    if (this.searchRoute === "/home") {
      this.validacionHomePage = true;
    } else {
      this.validacionHomePage = false;
    }
  }
  /**
   * Función para obtener todas las notificaciones del usuario que ha iniciadio sesión.ç
   * 1º Actualiza el número de notificaciones no leídas.
   * 2º Si hay notificaciones no leídas, actualiza el mensaje de la notificación pendiente.
   * @param usuarioId Recibe el ID del usuario que está logueado.
   */
  obtenerNotificaciones(usuarioId) {
    if (!usuarioId)
      return;
    this.notificationService.obtenerNotificaciones(usuarioId).subscribe({
      next: (notificaciones) => {
        var _a;
        if (notificaciones && notificaciones.length) {
          this.notificaciones = notificaciones;
          this.numNotificaciones = notificaciones.filter((n) => !n.leida).length;
          if (this.numNotificaciones > 0) {
            this.notificationService.notificacionPendiente = (_a = notificaciones.find((n) => !n.leida)) == null ? void 0 : _a.mensaje;
            this.notificationService.esCreadorDelViaje = true;
          }
        } else {
          this.numNotificaciones = 0;
        }
      },
      error: (err) => {
        console.warn("No se pudieron obtener notificaciones:", err);
        this.numNotificaciones = 0;
      }
    });
  }
  // Desuscribirse al destruir el componente (para evitar fugas de memoria):
  ngOnDestroy() {
    var _a;
    (_a = this.usuarioSub) == null ? void 0 : _a.unsubscribe();
    if (this.pollingSub) {
      clearInterval(this.pollingSub);
    }
  }
  /**
   * Función para obtener la ruta desde donde
   * estaba el usuario posicionado anteriormente.
   *
   * @returns Devuelve la ruta a la que va de regreso.
   */
  getBackRoute() {
    switch (this.origin) {
      case "home":
        return "/home";
      case "/busqueda-viajes":
        return "/busqueda-viajes";
      case "/panel-usuario":
        return "/panel-usuario";
      case "/nuevo-viaje":
        return "/nuevo-viaje";
      case "/mi-perfil":
        return "/mi-perfil";
      default:
        return "/home";
    }
  }
  /**
   * Función para hacer la navegación en la dirección indicada
   */
  goBack() {
    const backRoute = this.getBackRoute();
    this.navCtrl.navigateRoot([backRoute]);
  }
  /**
   * Función para volver atrás en la aplicación.
   */
  navigateBack() {
    if (this.backRoute) {
      this.navCtrl.navigateRoot([this.backRoute]);
    }
  }
  /**
   * Función para obtener los datos del usuario que está logado.
   * @param id_usuario
   */
  obtenerDatosUsuario(id_usuario) {
    return __async(this, null, function* () {
      if (id_usuario) {
        this.usuario = yield lastValueFrom(this.userService.obtenerUsuarioPorID(id_usuario));
      }
    });
  }
  /**
   * Función para realizar el cambio de idiomas de la aplicación.
   * Al seleccionar un idioma, guarda la selección en la caché del navegador
   * para poder así mantener el idioma seleccionado durante la navegación.
   *
   * @param lang Recibe el idioma seleccionado en el selector de idiomas.
   */
  changeLanguage(selectedLanguage) {
    if (this.selectedLanguage === selectedLanguage) {
      return;
    }
    console.log(selectedLanguage);
    this.languageService.setLanguage(selectedLanguage);
    this.selectedLanguage = selectedLanguage;
    this.translate.use(selectedLanguage);
    this.translate.get(["AJUSTESAPP.OPCION_IDIOMA.ALERT_TITULO", "AJUSTESAPP.OPCION_IDIOMA.ALERT_MENSAJE"]).subscribe((translations) => {
      this.messageService.add({
        severity: "success",
        summary: translations["AJUSTESAPP.OPCION_IDIOMA.ALERT_TITULO"],
        detail: translations["AJUSTESAPP.OPCION_IDIOMA.ALERT_MENSAJE"],
        life: 3e3
      });
    });
  }
  onClick(event) {
    if (!this.element.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
      this.isLenguageDropdownOpen = false;
    }
  }
  /**
   * Función para controlar el botón de menú abierto o menú cerrado (Versión móvil)
   */
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  /**
   * Función para cambiar la dirección de la flecha del menú.
   */
  cambioDireccionFlecha() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  cambioDireccionFlechaIdioma() {
    this.isLenguageDropdownOpen = !this.isLenguageDropdownOpen;
  }
  /**
   * Función para cerrar la sesión del usuario.
   * 1º Guarda los datos en caso de que haya seleccionado "Recordarme"
   * 2º Limpia el localStorage
   * 3º Vacia la variable userData
   * 4º Redirige al usuario a la página de inicio.
   */
  logout() {
    const rememberMe = localStorage.getItem("remember_me") === "true";
    const email = localStorage.getItem("email") || "";
    const password = localStorage.getItem("password") || "";
    if (this.pollingSub)
      clearInterval(this.pollingSub);
    localStorage.clear();
    if (rememberMe) {
      localStorage.setItem("remember_me", "true");
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    }
    this.userService.setUsuarioData(null);
    this.userData = {};
    this.usuario = null;
    this.isLoggedIn = false;
    this.numNotificaciones = 0;
    this.cdr.detectChanges();
    this.navCtrl.navigateRoot(["/home"], { animated: true });
  }
  modalCerrarSesion() {
    const titulo = "\xA1ATENCI\xD3N: Vas a cerrar sesi\xF3n!";
    const mensaje = `\xBFEst\xE1s seguro que deseas cerrar sesi\xF3n?`;
    const dialogRef = this.dialog.open(HelpModalComponent, {
      data: { title: titulo, message: mensaje, showAcceptButton: true, autoFocus: false },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((confirmar) => {
      if (confirmar) {
        this.logout();
      }
    });
  }
  irAMisViajes() {
    const usuario = { id: this.userData.usuario.id };
    this.navCtrl.navigateRoot(["/mis-viajes"], {
      queryParams: usuario,
      animated: false
    });
  }
  loadUserData() {
    this.userData = JSON.parse(localStorage.getItem("userData") || "{}");
  }
  obtenerNotificacionesMensajes(usuarioId) {
    if (!usuarioId)
      return;
    this.messagingService.getConversaciones(usuarioId).subscribe({
      next: (conversaciones) => {
        this.numNotificacionesMensajes = conversaciones.reduce((total, conv) => total + (conv.no_leidos || 0), 0);
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.warn("Error al obtener notificaciones de mensajes:", err);
        this.numNotificacionesMensajes = 0;
      }
    });
  }
  static \u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavbarComponent)(\u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(LanguageService), \u0275\u0275directiveInject(UserServicesService), \u0275\u0275directiveInject(NotificacionesService), \u0275\u0275directiveInject(MessagingService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MatDialog));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function NavbarComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      }, \u0275\u0275resolveDocument);
    }
  }, inputs: { backRoute: "backRoute", searchRoute: "searchRoute", isLoggedIn: "isLoggedIn", isPublishRoute: "isPublishRoute", origin: "origin" }, features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 41, vars: 27, consts: [[1, "boxHeader"], [1, "navbar", "navbar-diseno"], [1, "container-desktop-nav", "desktop-only"], [1, "opciones-centradas", "m-0", "p-0"], [1, "nav-item"], ["href", "/busqueda-viajes", 1, "nav-link", "active"], [1, "nav-item", "logo-central-item"], ["href", "#"], ["src", "../../../assets/logo/PRIDECAR.png", "alt", "Logo", 1, "logo"], [1, "m-0", "text-center"], [1, "nav-item", "right-actions-wrapper"], ["href", "/nuevo-viaje", 1, "nav-link", "active"], [1, "right-user-controls", "d-flex", "align-items-center"], [1, "idiomas-container", "d-flex", "flex-column", "align-items-center", "justify-content-center", "me-2"], ["src", "../../../assets/sistema/bandera_es.svg", 1, "icon-idioma", 3, "click", "ngClass"], ["src", "../../../assets/sistema/bandera_uk.svg", 1, "icon-idioma", "mt-1", 3, "click", "ngClass"], ["type", "button", 1, "btn", "btnNotificaciones", "position-relative"], ["type", "button", 1, "btn", "btnMensajes", "position-relative"], [1, "nav-item", "dropdown", "ms-2"], [1, "mobile-navbar", "mobile-only", "w-100", "position-relative"], [1, "opciones-movil-centradas", "m-0", "p-0", "w-100"], [1, "d-flex", "align-items-center", "justify-content-start"], ["menu", "mobileMenu", "autoHide", "false"], [1, "d-flex", "justify-content-center", "align-items-center", 3, "click"], ["src", "../../../assets/logo/PRIDECAR.png", "alt", "Logo", 1, "logo_mobile"], [1, "d-flex", "align-items-center", "justify-content-end", "gap-2"], [1, "idiomas-container", "d-flex", "flex-column", "align-items-center", "justify-content-center"], [1, "nav-item", "dropdown"], ["href", "/notificaciones", 1, "nav-link", "active", "p-0", "d-flex", "align-items-center", "justify-content-center", "w-100", "h-100"], ["src", "../../../assets/sistema/campana.png", "alt", "Notificaciones", 1, "icono-notificacion"], [1, "badge-notificaciones"], ["href", "/messaging-center", 1, "nav-link", "active", "p-0", "d-flex", "align-items-center", "justify-content-center", "w-100", "h-100"], ["src", "../../../assets/sistema/messaging.png", "alt", "Mensajes", 1, "icono-mensaje"], [1, "badge-notificaciones_mensajes"], ["role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "d-flex", "align-items-center", "p-0", 3, "click"], ["src", "../../../assets/user/logOn.gif", "referrerpolicy", "no-referrer", 1, "caja-icono", "tamano-icono"], [1, "caja_imagen_perfil"], [1, "flecha-icono", "ms-1", "flecha-animada"], ["aria-labelledby", "navbarDropdown", "data-bs-auto-close", "false", 1, "dropdown-menu", "menuusuario"], [1, "nav", "nav-pills", "flex-column"], [1, "perfil", "nav-item", "dropdown"], ["href", "/mi-perfil", 1, "nav-link"], [1, "fi", "fi-rr-user", "icono_ajsutes", "me-1"], [1, "nav-link", 3, "click"], [1, "fi", "fi-rr-cars", "icono_ajsutes", "me-1"], ["href", "/datos-contacto", 1, "nav-link"], [1, "fi", "fi-rr-attribution-pen", "icono_ajsutes", "me-1"], ["href", "/verificaciones-perfil", 1, "nav-link"], [1, "fi", "fi-rs-badget-check-alt", "icono_ajsutes", "me-1"], ["href", "/saldo-transferencias", 1, "nav-link"], [1, "fi", "fi-rr-wallet", "icono_ajsutes", "me-1"], [1, "perfil", "nav-item", "dropdow"], ["href", "/ajustes-aplicacion", 1, "nav-link"], [1, "fi", "fi-rr-settings", "icono_ajsutes", "me-1"], [1, "mt-1", "mb-1"], [1, "logout", "d-flex", "align-items-center", "justify-content-center"], ["type", "button", 1, "dropdown-item", "d-flex", "align-items-center", 3, "click"], [1, "me-2"], ["alt", "Foto de perfil", "referrerpolicy", "no-referrer", 3, "src"], ["src", "../../../assets/user/logOff.gif", 1, "tamano-icono"], [1, "dropdown-menu", "menuusuario"], ["href", "/login", 1, "dropdown-item"], ["href", "/registro", 1, "dropdown-item"], [1, "caja_imagen_perfil_mobile"], ["alt", "Perfil", "referrerpolicy", "no-referrer", 3, "src"]], template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0);
      \u0275\u0275elementContainerStart(1);
      \u0275\u0275elementStart(2, "nav", 1)(3, "div", 2)(4, "ul", 3)(5, "li", 4)(6, "a", 5);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li", 6)(10, "a", 7);
      \u0275\u0275element(11, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "h1", 9);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "li", 10)(16, "a", 11);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 12)(20, "div", 13)(21, "img", 14);
      \u0275\u0275listener("click", function NavbarComponent_Template_img_click_21_listener() {
        return ctx.changeLanguage("es");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "img", 15);
      \u0275\u0275listener("click", function NavbarComponent_Template_img_click_22_listener() {
        return ctx.changeLanguage("en");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(23, NavbarComponent_Conditional_23_Template, 4, 3, "button", 16);
      \u0275\u0275conditionalCreate(24, NavbarComponent_Conditional_24_Template, 4, 3, "button", 17);
      \u0275\u0275conditionalCreate(25, NavbarComponent_Conditional_25_Template, 46, 27, "div", 18)(26, NavbarComponent_Conditional_26_Template, 15, 10, "div", 18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(27, "div", 19)(28, "ul", 20)(29, "li", 21);
      \u0275\u0275element(30, "ion-menu-button", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "li", 23);
      \u0275\u0275listener("click", function NavbarComponent_Template_li_click_31_listener() {
        return ctx.goBack();
      });
      \u0275\u0275element(32, "img", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "li", 25)(34, "div", 26)(35, "img", 14);
      \u0275\u0275listener("click", function NavbarComponent_Template_img_click_35_listener() {
        return ctx.changeLanguage("es");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "img", 15);
      \u0275\u0275listener("click", function NavbarComponent_Template_img_click_36_listener() {
        return ctx.changeLanguage("en");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(37, NavbarComponent_Conditional_37_Template, 4, 3, "button", 16);
      \u0275\u0275conditionalCreate(38, NavbarComponent_Conditional_38_Template, 4, 3, "button", 17);
      \u0275\u0275conditionalCreate(39, NavbarComponent_Conditional_39_Template, 46, 27, "div", 27)(40, NavbarComponent_Conditional_40_Template, 15, 10, "div", 27);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 13, "NAVBAR.BUSCAR_VIAJE"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 15, "TITLE"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 17, "NAVBAR.PUBLICAR_VIAJE"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(19, _c0, ctx.selectedLanguage !== "es"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(21, _c0, ctx.selectedLanguage !== "en"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoggedIn ? 23 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoggedIn ? 24 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoggedIn ? 25 : 26);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(23, _c0, ctx.selectedLanguage !== "es"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(25, _c0, ctx.selectedLanguage !== "en"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoggedIn ? 37 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoggedIn ? 38 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoggedIn ? 39 : 40);
    }
  }, dependencies: [MatIconModule, MatIcon, TranslateModule, CommonModule, NgClass, MatDivider, FormsModule, IonMenuButton, IonHeader, TranslatePipe], styles: ['@charset "UTF-8";\n\n\n.navbar-diseno[_ngcontent-%COMP%] {\n  background-color: #f0d7b4;\n}\n.boxHeader[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.container-desktop-nav[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  padding: 0 25px;\n  margin: 0 auto;\n}\n.opciones-centradas[_ngcontent-%COMP%] {\n  display: grid !important;\n  grid-template-columns: 1fr auto 1fr;\n  align-items: center;\n  width: 100%;\n  min-height: 80px;\n  list-style: none;\n}\n.opciones-centradas[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(1) {\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 40px;\n}\n.opciones-centradas[_ngcontent-%COMP%]    > li.col-left[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 30px;\n}\n.opciones-centradas[_ngcontent-%COMP%] {\n}\n.opciones-centradas[_ngcontent-%COMP%]    > li.logo-central-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  justify-self: center;\n  padding: 0 20px;\n}\n.opciones-centradas[_ngcontent-%COMP%] {\n}\n.opciones-centradas[_ngcontent-%COMP%]    > li.right-actions-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 40px;\n}\n.opciones-centradas[_ngcontent-%COMP%]    > li.col-right-link[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  padding-left: 30px;\n}\n.right-user-controls[_ngcontent-%COMP%] {\n  margin-right: 10%;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.logo[_ngcontent-%COMP%] {\n  max-width: 75px;\n  height: auto;\n  flex-shrink: 1;\n}\n.logo_mobile[_ngcontent-%COMP%] {\n  width: 60px;\n  border-radius: 50%;\n  object-fit: contain;\n}\n.perfil[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n.caja-icono[_ngcontent-%COMP%] {\n  height: 50px !important;\n  width: 50px !important;\n  border-radius: 50%;\n  mix-blend-mode: multiply;\n}\n.caja_imagen_perfil[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.caja_imagen_perfil[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.flecha-animada[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.flecha-animada.rotada[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  content: none;\n}\n.navbar[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n}\n.navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  left: auto !important;\n  z-index: 1050;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease-in-out;\n  display: block;\n  width: 260px;\n  border-radius: 35px;\n  padding: 15%;\n}\n.navbar[_ngcontent-%COMP%]   .dropdown-menu.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n.navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #f0d7b4;\n  border-radius: 35px;\n}\n.navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ff5733;\n  color: white;\n  font-weight: bold;\n}\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n  margin: 0;\n  color: black;\n}\n.nav-link[_ngcontent-%COMP%] {\n  color: black;\n  text-decoration: none;\n  white-space: nowrap;\n  font-size: clamp(0.85rem, 1.3vw, 1rem);\n  border-radius: 35px;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: black;\n  font-weight: bold;\n  transform: translateX(2px);\n}\n.icono_ajsutes[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.idiomas-container[_ngcontent-%COMP%] {\n  display: flex !important;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative !important;\n  top: auto !important;\n  right: auto !important;\n  min-width: 24px;\n  cursor: pointer;\n}\n.idiomas-container[_ngcontent-%COMP%]   .icon-idioma[_ngcontent-%COMP%] {\n  width: 20px;\n  height: auto;\n  border-radius: 2px;\n  transition: opacity 0.2s ease, filter 0.2s ease;\n}\n.idiomas-container[_ngcontent-%COMP%]   .icon-idioma[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.idiomas-container[_ngcontent-%COMP%]   .grayscale-filter[_ngcontent-%COMP%] {\n  filter: grayscale(100%);\n  opacity: 0.5;\n}\n.btnNotificaciones[_ngcontent-%COMP%], \n.btnMensajes[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  padding: 0;\n  background: none;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.badge-notificaciones[_ngcontent-%COMP%], \n.badge-notificaciones_mensajes[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  right: 16px;\n  background-color: red;\n  color: white;\n  font-size: 0.6rem;\n  font-weight: bold;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  pointer-events: none;\n  z-index: 10;\n}\n.icono-notificacion[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  object-fit: contain;\n  mix-blend-mode: multiply;\n}\n.icono-mensaje[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  object-fit: contain;\n  mix-blend-mode: multiply;\n}\n.icono-notificacion.animar-icono[_ngcontent-%COMP%], \n.icono-mensaje.animar-icono[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_movimientoIcono 1.2s ease-in-out infinite;\n  transform-origin: top center;\n}\n@keyframes _ngcontent-%COMP%_movimientoIcono {\n  0% {\n    transform: rotate(0deg);\n  }\n  15% {\n    transform: rotate(14deg);\n  }\n  30% {\n    transform: rotate(-12deg);\n  }\n  45% {\n    transform: rotate(10deg);\n  }\n  60% {\n    transform: rotate(-8deg);\n  }\n  75% {\n    transform: rotate(4deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n.desktop-only[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n.mobile-only[_ngcontent-%COMP%] {\n  display: none !important;\n}\n@media (max-width: 767px) {\n  .desktop-only[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .mobile-only[_ngcontent-%COMP%] {\n    display: block !important;\n    width: 100%;\n  }\n  .opciones-movil-centradas[_ngcontent-%COMP%] {\n    display: grid !important;\n    grid-template-columns: 45px auto 1fr;\n    align-items: center;\n    width: 100%;\n    min-height: 60px;\n    padding: 0 8px;\n    list-style: none;\n  }\n  .opciones-movil-centradas[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n  .opciones-movil-centradas[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(1) {\n    justify-content: flex-start;\n  }\n  .opciones-movil-centradas[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(2) {\n    justify-content: center;\n    justify-self: center;\n    cursor: pointer;\n  }\n  .opciones-movil-centradas[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(3) {\n    justify-content: flex-end;\n    gap: 6px;\n  }\n  .logo_mobile[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .btnNotificaciones[_ngcontent-%COMP%], \n   .btnMensajes[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n  }\n  .icono-notificacion[_ngcontent-%COMP%], \n   .icono-mensaje[_ngcontent-%COMP%] {\n    width: 22px;\n    height: 22px;\n  }\n  .caja_imagen_perfil_mobile[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .badge-notificaciones[_ngcontent-%COMP%], \n   .badge-notificaciones_mensajes[_ngcontent-%COMP%] {\n    top: 1px;\n    right: 2px;\n    width: 14px;\n    height: 14px;\n    font-size: 0.5rem;\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarComponent, [{
    type: Component,
    args: [{ selector: "app-navbar", standalone: true, imports: [MatIconModule, TranslateModule, CommonModule, MatDivider, FormsModule, IonMenuButton, IonHeader], providers: [MessageService], template: `<ion-header class="boxHeader">
  <ng-container>
    <nav class="navbar navbar-diseno">
      <!-- CONTENEDOR DE ESCRITORIO (\xDANICO Y SIN DUPLICADOS) -->
      <div class="container-desktop-nav desktop-only">
        <ul class="opciones-centradas m-0 p-0">
          <!-- 1. Columna Izquierda: Buscar Viaje -->
          <li class="nav-item">
            <a
              class="nav-link active"
              href="/busqueda-viajes"
            >
              {{ 'NAVBAR.BUSCAR_VIAJE' | translate }}
            </a>
          </li>

          <!-- 2. Columna Central: Logo y T\xEDtulo (Centrado absoluto en la pantalla) -->
          <li class="nav-item logo-central-item">
            <a href="#">
              <img
                src="../../../assets/logo/PRIDECAR.png"
                alt="Logo"
                class="logo"
              />
            </a>
            <h1 class="m-0 text-center">{{ 'TITLE' | translate }}</h1>
          </li>

          <!-- 3. Columna Derecha: Publicar Viaje + Controles de Usuario -->
          <li class="nav-item right-actions-wrapper">
            <a
              class="nav-link active"
              href="/nuevo-viaje"
            >
              {{ 'NAVBAR.PUBLICAR_VIAJE' | translate }}
            </a>

            <!-- Controles agrupados a la extrema derecha -->
            <div class="right-user-controls d-flex align-items-center">
              <!-- Selector de Idiomas -->
              <div class="idiomas-container d-flex flex-column align-items-center justify-content-center me-2">
                <img
                  src="../../../assets/sistema/bandera_es.svg"
                  class="icon-idioma"
                  [ngClass]="{ 'grayscale-filter': selectedLanguage !== 'es' }"
                  (click)="changeLanguage('es')"
                />
                <img
                  src="../../../assets/sistema/bandera_uk.svg"
                  class="icon-idioma mt-1"
                  [ngClass]="{ 'grayscale-filter': selectedLanguage !== 'en' }"
                  (click)="changeLanguage('en')"
                />
              </div>

              <!-- Bot\xF3n Notificaciones -->
              @if (isLoggedIn) {
                <button
                  class="btn btnNotificaciones position-relative"
                  type="button"
                >
                  <a
                    class="nav-link active p-0 d-flex align-items-center justify-content-center w-100 h-100"
                    href="/notificaciones"
                  >
                    <img
                      class="icono-notificacion"
                      [class.animar-icono]="numNotificaciones > 0"
                      src="../../../assets/sistema/campana.png"
                      alt="Notificaciones"
                    />
                  </a>
                  @if (numNotificaciones > 0) {
                    <span class="badge-notificaciones">{{ numNotificaciones }}</span>
                  }
                </button>
              }

              <!-- Bot\xF3n Mensajes -->
              @if (isLoggedIn) {
                <button
                  class="btn btnMensajes position-relative"
                  type="button"
                >
                  <a
                    class="nav-link active p-0 d-flex align-items-center justify-content-center w-100 h-100"
                    href="/messaging-center"
                  >
                    <img
                      class="icono-mensaje"
                      [class.animar-icono]="numNotificacionesMensajes > 0"
                      src="../../../assets/sistema/messaging.png"
                      alt="Mensajes"
                    />
                  </a>
                  @if (numNotificacionesMensajes > 0) {
                    <span class="badge-notificaciones_mensajes">{{ numNotificacionesMensajes }}</span>
                  }
                </button>
              }

              <!-- Men\xFA Desplegable de Usuario -->
              @if (isLoggedIn) {
                <div class="nav-item dropdown ms-2">
                  <a
                    class="nav-link dropdown-toggle d-flex align-items-center p-0"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    (click)="cambioDireccionFlecha()"
                  >
                    @if (!usuario?.fotoPerfil) {
                      <img
                        class="caja-icono tamano-icono"
                        src="../../../assets/user/logOn.gif"
                        referrerpolicy="no-referrer"
                      />
                    }
                    @if (usuario?.fotoPerfil) {
                      <div class="caja_imagen_perfil">
                        <img
                          [src]="usuario?.fotoPerfil"
                          alt="Foto de perfil"
                          referrerpolicy="no-referrer"
                        />
                      </div>
                    }
                    <mat-icon
                      class="flecha-icono ms-1 flecha-animada"
                      [class.rotada]="isDropdownOpen"
                    >
                      expand_more
                    </mat-icon>
                  </a>
                  <ul
                    class="dropdown-menu menuusuario"
                    aria-labelledby="navbarDropdown"
                    data-bs-auto-close="false"
                    [class.show]="isDropdownOpen"
                  >
                    <nav class="nav nav-pills flex-column">
                      <ul>
                        <li class="perfil nav-item dropdown">
                          <a
                            class="nav-link"
                            href="/mi-perfil"
                          >
                            <i class="fi fi-rr-user icono_ajsutes me-1"></i>
                            {{ 'NAVBAR.MENUUSUARIO.MI_PERFIL' | translate }}
                          </a>
                        </li>
                        <li class="perfil nav-item dropdown">
                          <a
                            class="nav-link"
                            (click)="irAMisViajes()"
                          >
                            <i class="fi fi-rr-cars icono_ajsutes me-1"></i>
                            {{ 'NAVBAR.MENUUSUARIO.MIS_VIAJES' | translate }}
                          </a>
                        </li>
                        <li class="perfil nav-item dropdown">
                          <a
                            class="nav-link"
                            href="/datos-contacto"
                          >
                            <i class="fi fi-rr-attribution-pen icono_ajsutes me-1"></i>
                            {{ 'NAVBAR.MENUUSUARIO.DATOS_CONTACTO' | translate }}
                          </a>
                        </li>
                        <li class="perfil nav-item dropdown">
                          <a
                            class="nav-link"
                            href="/verificaciones-perfil"
                          >
                            <i class="fi fi-rs-badget-check-alt icono_ajsutes me-1"></i>
                            {{ 'NAVBAR.MENUUSUARIO.VERIFICACION' | translate }}
                          </a>
                        </li>
                        <li class="perfil nav-item dropdown">
                          <a
                            class="nav-link"
                            href="/saldo-transferencias"
                          >
                            <i class="fi fi-rr-wallet icono_ajsutes me-1"></i>
                            {{ 'NAVBAR.MENUUSUARIO.SALDO' | translate }}
                          </a>
                        </li>
                        <li class="perfil nav-item dropdow">
                          <a
                            class="nav-link"
                            href="/ajustes-aplicacion"
                          >
                            <i class="fi fi-rr-settings icono_ajsutes me-1"></i>
                            {{ 'NAVBAR.MENUUSUARIO.AJUSTES' | translate }}
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <mat-divider class="mt-1 mb-1"></mat-divider>
                    <li class="logout d-flex align-items-center justify-content-center">
                      <a
                        class="dropdown-item d-flex align-items-center"
                        (click)="modalCerrarSesion()"
                        type="button"
                      >
                        <mat-icon class="me-2">power_settings_new</mat-icon>
                        {{ 'NAVBAR.MENUUSUARIO.SALIR' | translate }}
                      </a>
                    </li>
                  </ul>
                </div>
              } @else {
                <div class="nav-item dropdown ms-2">
                  <a
                    class="nav-link dropdown-toggle d-flex align-items-center p-0"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    (click)="cambioDireccionFlecha()"
                  >
                    <div class="caja_imagen_perfil">
                      <img
                        class="tamano-icono"
                        src="../../../assets/user/logOff.gif"
                      />
                    </div>
                    <mat-icon
                      class="flecha-icono ms-1 flecha-animada"
                      [class.rotada]="isDropdownOpen"
                    >
                      expand_more
                    </mat-icon>
                  </a>
                  <ul
                    class="dropdown-menu menuusuario"
                    [class.show]="isDropdownOpen"
                  >
                    <li>
                      <a
                        class="dropdown-item"
                        href="/login"
                      >
                        {{ 'NAVBAR.MENUUSUARIO.LOGIN' | translate }}
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="/registro"
                      >
                        {{ 'NAVBAR.MENUUSUARIO.REGISTRO' | translate }}
                      </a>
                    </li>
                  </ul>
                </div>
              }

              <!-- Men\xFA Login / Registro (No logueado) -->
            </div>
          </li>
        </ul>
      </div>

      <!-- VISTA M\xD3VIL -->
      <div class="mobile-navbar mobile-only w-100 position-relative">
        <ul class="opciones-movil-centradas m-0 p-0 w-100">
          <li class="d-flex align-items-center justify-content-start">
            <ion-menu-button
              menu="mobileMenu"
              autoHide="false"
            ></ion-menu-button>
          </li>

          <li
            class="d-flex justify-content-center align-items-center"
            (click)="goBack()"
          >
            <img
              src="../../../assets/logo/PRIDECAR.png"
              alt="Logo"
              class="logo_mobile"
            />
          </li>

          <li class="d-flex align-items-center justify-content-end gap-2">
            <div class="idiomas-container d-flex flex-column align-items-center justify-content-center">
              <img
                src="../../../assets/sistema/bandera_es.svg"
                class="icon-idioma"
                [ngClass]="{ 'grayscale-filter': selectedLanguage !== 'es' }"
                (click)="changeLanguage('es')"
              />
              <img
                src="../../../assets/sistema/bandera_uk.svg"
                class="icon-idioma mt-1"
                [ngClass]="{ 'grayscale-filter': selectedLanguage !== 'en' }"
                (click)="changeLanguage('en')"
              />
            </div>

            @if (isLoggedIn) {
              <button
                class="btn btnNotificaciones position-relative"
                type="button"
              >
                <a
                  class="nav-link active p-0 d-flex align-items-center justify-content-center w-100 h-100"
                  href="/notificaciones"
                >
                  <img
                    class="icono-notificacion"
                    [class.animar-icono]="numNotificaciones > 0"
                    src="../../../assets/sistema/campana.png"
                    alt="Notificaciones"
                  />
                </a>
                @if (numNotificaciones > 0) {
                  <span class="badge-notificaciones">{{ numNotificaciones }}</span>
                }
              </button>
            }

            @if (isLoggedIn) {
              <button
                class="btn btnMensajes position-relative"
                type="button"
              >
                <a
                  class="nav-link active p-0 d-flex align-items-center justify-content-center w-100 h-100"
                  href="/messaging-center"
                >
                  <img
                    class="icono-mensaje"
                    [class.animar-icono]="numNotificacionesMensajes > 0"
                    src="../../../assets/sistema/messaging.png"
                    alt="Mensajes"
                  />
                </a>
                @if (numNotificacionesMensajes > 0) {
                  <span class="badge-notificaciones_mensajes">{{ numNotificacionesMensajes }}</span>
                }
              </button>
            }

            @if (isLoggedIn) {
              <div class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle d-flex align-items-center p-0"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  (click)="cambioDireccionFlecha()"
                >
                  @if (!usuario?.fotoPerfil) {
                    <img
                      class="caja-icono tamano-icono"
                      src="../../../assets/user/logOn.gif"
                      referrerpolicy="no-referrer"
                    />
                  }
                  @if (usuario?.fotoPerfil) {
                    <div class="caja_imagen_perfil_mobile">
                      <img
                        [src]="usuario?.fotoPerfil"
                        alt="Perfil"
                        referrerpolicy="no-referrer"
                      />
                    </div>
                  }
                  <mat-icon
                    class="flecha-icono ms-1 flecha-animada"
                    [class.rotada]="isDropdownOpen"
                  >
                    expand_more
                  </mat-icon>
                </a>
                <ul
                  class="dropdown-menu menuusuario"
                  aria-labelledby="navbarDropdown"
                  data-bs-auto-close="false"
                  [class.show]="isDropdownOpen"
                >
                  <nav class="nav nav-pills flex-column">
                    <ul>
                      <li class="perfil nav-item dropdown">
                        <a
                          class="nav-link"
                          href="/mi-perfil"
                        >
                          <i class="fi fi-rr-user icono_ajsutes me-1"></i>
                          {{ 'NAVBAR.MENUUSUARIO.MI_PERFIL' | translate }}
                        </a>
                      </li>
                      <li class="perfil nav-item dropdown">
                        <a
                          class="nav-link"
                          (click)="irAMisViajes()"
                        >
                          <i class="fi fi-rr-cars icono_ajsutes me-1"></i>
                          {{ 'NAVBAR.MENUUSUARIO.MIS_VIAJES' | translate }}
                        </a>
                      </li>
                      <li class="perfil nav-item dropdown">
                        <a
                          class="nav-link"
                          href="/datos-contacto"
                        >
                          <i class="fi fi-rr-attribution-pen icono_ajsutes me-1"></i>
                          {{ 'NAVBAR.MENUUSUARIO.DATOS_CONTACTO' | translate }}
                        </a>
                      </li>
                      <li class="perfil nav-item dropdown">
                        <a
                          class="nav-link"
                          href="/verificaciones-perfil"
                        >
                          <i class="fi fi-rs-badget-check-alt icono_ajsutes me-1"></i>
                          {{ 'NAVBAR.MENUUSUARIO.VERIFICACION' | translate }}
                        </a>
                      </li>
                      <li class="perfil nav-item dropdown">
                        <a
                          class="nav-link"
                          href="/saldo-transferencias"
                        >
                          <i class="fi fi-rr-wallet icono_ajsutes me-1"></i>
                          {{ 'NAVBAR.MENUUSUARIO.SALDO' | translate }}
                        </a>
                      </li>
                      <li class="perfil nav-item dropdow">
                        <a
                          class="nav-link"
                          href="/ajustes-aplicacion"
                        >
                          <i class="fi fi-rr-settings icono_ajsutes me-1"></i>
                          {{ 'NAVBAR.MENUUSUARIO.AJUSTES' | translate }}
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <mat-divider class="mt-1 mb-1"></mat-divider>
                  <li class="logout d-flex align-items-center justify-content-center">
                    <a
                      class="dropdown-item d-flex align-items-center"
                      (click)="modalCerrarSesion()"
                      type="button"
                    >
                      <mat-icon class="me-2">power_settings_new</mat-icon>
                      {{ 'NAVBAR.MENUUSUARIO.SALIR' | translate }}
                    </a>
                  </li>
                </ul>
              </div>
            } @else {
              <div class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle d-flex align-items-center p-0"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  (click)="cambioDireccionFlecha()"
                >
                  <div class="caja_imagen_perfil_mobile">
                    <img
                      class="tamano-icono"
                      src="../../../assets/user/logOff.gif"
                    />
                  </div>
                  <mat-icon
                    class="flecha-icono ms-1 flecha-animada"
                    [class.rotada]="isDropdownOpen"
                  >
                    expand_more
                  </mat-icon>
                </a>
                <ul
                  class="dropdown-menu menuusuario"
                  [class.show]="isDropdownOpen"
                >
                  <li>
                    <a
                      class="dropdown-item"
                      href="/login"
                    >
                      {{ 'NAVBAR.MENUUSUARIO.LOGIN' | translate }}
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="/registro"
                    >
                      {{ 'NAVBAR.MENUUSUARIO.REGISTRO' | translate }}
                    </a>
                  </li>
                </ul>
              </div>
            }
          </li>
        </ul>
      </div>
    </nav>
  </ng-container>
</ion-header>
`, styles: ['@charset "UTF-8";\n\n/* src/app/shared/navbar/navbar.component.scss */\n.navbar-diseno {\n  background-color: #f0d7b4;\n}\n.boxHeader {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.container-desktop-nav {\n  width: 100%;\n  max-width: 100%;\n  padding: 0 25px;\n  margin: 0 auto;\n}\n.opciones-centradas {\n  display: grid !important;\n  grid-template-columns: 1fr auto 1fr;\n  align-items: center;\n  width: 100%;\n  min-height: 80px;\n  list-style: none;\n}\n.opciones-centradas > li:nth-child(1) {\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 40px;\n}\n.opciones-centradas > li.col-left {\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 30px;\n}\n.opciones-centradas {\n}\n.opciones-centradas > li.logo-central-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  justify-self: center;\n  padding: 0 20px;\n}\n.opciones-centradas {\n}\n.opciones-centradas > li.right-actions-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 40px;\n}\n.opciones-centradas > li.col-right-link {\n  display: flex;\n  justify-content: flex-start;\n  padding-left: 30px;\n}\n.right-user-controls {\n  margin-right: 10%;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.logo {\n  max-width: 75px;\n  height: auto;\n  flex-shrink: 1;\n}\n.logo_mobile {\n  width: 60px;\n  border-radius: 50%;\n  object-fit: contain;\n}\n.perfil .nav-link {\n  cursor: pointer !important;\n}\n.caja-icono {\n  height: 50px !important;\n  width: 50px !important;\n  border-radius: 50%;\n  mix-blend-mode: multiply;\n}\n.caja_imagen_perfil {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.caja_imagen_perfil img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.flecha-animada {\n  transition: transform 0.3s ease;\n}\n.flecha-animada.rotada {\n  transform: rotate(180deg);\n}\n.dropdown-toggle::after {\n  content: none;\n}\n.navbar {\n  position: relative;\n  z-index: 10;\n}\n.navbar .dropdown-menu {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  left: auto !important;\n  z-index: 1050;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease-in-out;\n  display: block;\n  width: 260px;\n  border-radius: 35px;\n  padding: 15%;\n}\n.navbar .dropdown-menu.show {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n.navbar .dropdown-menu li a:hover {\n  background-color: #f0d7b4;\n  border-radius: 35px;\n}\n.navbar .dropdown-menu .logout a:hover {\n  background-color: #ff5733;\n  color: white;\n  font-weight: bold;\n}\nul {\n  list-style: none;\n  padding-left: 0;\n  margin: 0;\n  color: black;\n}\n.nav-link {\n  color: black;\n  text-decoration: none;\n  white-space: nowrap;\n  font-size: clamp(0.85rem, 1.3vw, 1rem);\n  border-radius: 35px;\n}\n.nav-link:hover {\n  color: black;\n  font-weight: bold;\n  transform: translateX(2px);\n}\n.icono_ajsutes {\n  width: 24px;\n  height: 24px;\n}\n.idiomas-container {\n  display: flex !important;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative !important;\n  top: auto !important;\n  right: auto !important;\n  min-width: 24px;\n  cursor: pointer;\n}\n.idiomas-container .icon-idioma {\n  width: 20px;\n  height: auto;\n  border-radius: 2px;\n  transition: opacity 0.2s ease, filter 0.2s ease;\n}\n.idiomas-container .icon-idioma:hover {\n  opacity: 0.8;\n}\n.idiomas-container .grayscale-filter {\n  filter: grayscale(100%);\n  opacity: 0.5;\n}\n.btnNotificaciones,\n.btnMensajes {\n  width: 45px;\n  height: 45px;\n  padding: 0;\n  background: none;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.badge-notificaciones,\n.badge-notificaciones_mensajes {\n  position: absolute;\n  top: 6px;\n  right: 16px;\n  background-color: red;\n  color: white;\n  font-size: 0.6rem;\n  font-weight: bold;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  pointer-events: none;\n  z-index: 10;\n}\n.icono-notificacion {\n  width: 40px;\n  height: 40px;\n  object-fit: contain;\n  mix-blend-mode: multiply;\n}\n.icono-mensaje {\n  width: 28px;\n  height: 28px;\n  object-fit: contain;\n  mix-blend-mode: multiply;\n}\n.icono-notificacion.animar-icono,\n.icono-mensaje.animar-icono {\n  animation: movimientoIcono 1.2s ease-in-out infinite;\n  transform-origin: top center;\n}\n@keyframes movimientoIcono {\n  0% {\n    transform: rotate(0deg);\n  }\n  15% {\n    transform: rotate(14deg);\n  }\n  30% {\n    transform: rotate(-12deg);\n  }\n  45% {\n    transform: rotate(10deg);\n  }\n  60% {\n    transform: rotate(-8deg);\n  }\n  75% {\n    transform: rotate(4deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n.desktop-only {\n  display: flex !important;\n}\n.mobile-only {\n  display: none !important;\n}\n@media (max-width: 767px) {\n  .desktop-only {\n    display: none !important;\n  }\n  .mobile-only {\n    display: block !important;\n    width: 100%;\n  }\n  .opciones-movil-centradas {\n    display: grid !important;\n    grid-template-columns: 45px auto 1fr;\n    align-items: center;\n    width: 100%;\n    min-height: 60px;\n    padding: 0 8px;\n    list-style: none;\n  }\n  .opciones-movil-centradas > li {\n    display: flex;\n    align-items: center;\n  }\n  .opciones-movil-centradas > li:nth-child(1) {\n    justify-content: flex-start;\n  }\n  .opciones-movil-centradas > li:nth-child(2) {\n    justify-content: center;\n    justify-self: center;\n    cursor: pointer;\n  }\n  .opciones-movil-centradas > li:nth-child(3) {\n    justify-content: flex-end;\n    gap: 6px;\n  }\n  .logo_mobile {\n    width: 40px;\n    height: 40px;\n  }\n  .btnNotificaciones,\n  .btnMensajes {\n    width: 36px;\n    height: 36px;\n  }\n  .icono-notificacion,\n  .icono-mensaje {\n    width: 22px;\n    height: 22px;\n  }\n  .caja_imagen_perfil_mobile {\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .badge-notificaciones,\n  .badge-notificaciones_mensajes {\n    top: 1px;\n    right: 2px;\n    width: 14px;\n    height: 14px;\n    font-size: 0.5rem;\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */\n'] }]
  }], () => [{ type: NavController }, { type: Platform }, { type: LanguageService }, { type: UserServicesService }, { type: NotificacionesService }, { type: MessagingService }, { type: ElementRef }, { type: TranslateService }, { type: MessageService }, { type: ChangeDetectorRef }, { type: MatDialog }], { backRoute: [{
    type: Input
  }], searchRoute: [{
    type: Input
  }], isLoggedIn: [{
    type: Input
  }], isPublishRoute: [{
    type: Input
  }], origin: [{
    type: Input
  }], onClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src/app/shared/navbar/navbar.component.ts", lineNumber: 29 });
})();

export {
  NavbarComponent
};
//# sourceMappingURL=chunk-YAGW6LPY.js.map
