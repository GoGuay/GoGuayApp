import {
  MonederoService
} from "./chunk-2IIQDTSF.js";
import {
  addIcons,
  businessOutline,
  carSportOutline,
  cardOutline,
  checkmarkCircle,
  logoPaypal,
  sparkles
} from "./chunk-TDPVVR7R.js";
import {
  Toast,
  ToastModule
} from "./chunk-EP5DYYZX.js";
import {
  SpinnerComponent
} from "./chunk-XX3IZESI.js";
import {
  NavbarComponent
} from "./chunk-QIUENU5G.js";
import "./chunk-XGLFMII2.js";
import "./chunk-NAZ7DCPP.js";
import {
  FuncionesComunes
} from "./chunk-JVMVG56Z.js";
import "./chunk-FPL4PN3H.js";
import "./chunk-WO2ZSM4X.js";
import {
  HelpModalComponent
} from "./chunk-GYAYVE5N.js";
import "./chunk-ZTUWPCV2.js";
import {
  LanguageService
} from "./chunk-7NH46FL3.js";
import {
  MessageService
} from "./chunk-AF4L5EWO.js";
import {
  UserServicesService
} from "./chunk-YZOGC4HD.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-ZYMQAXGI.js";
import "./chunk-UIKNRIU5.js";
import "./chunk-FCE3VLZJ.js";
import {
  MatDialog
} from "./chunk-CGCOLBWN.js";
import "./chunk-H72L7N4J.js";
import {
  BooleanValueAccessorDirective,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonRadio,
  IonRadioGroup,
  IonSegment,
  IonSegmentButton,
  IonToggle,
  IonicModule,
  SelectValueAccessorDirective
} from "./chunk-6IWXE3BU.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-XHXT42RH.js";
import {
  ActivatedRoute,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NavController,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  PAYPAL_CLIENT_ID,
  PAYPAL_REDIRECT_URI,
  Router,
  ɵNgSelectMultipleOption
} from "./chunk-TU2LK3TM.js";
import {
  CommonModule,
  NgIf,
  NgSwitch,
  NgSwitchCase
} from "./chunk-7PPOBOFB.js";
import {
  Component,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
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

// node_modules/@paypal/paypal-js/dist/esm/paypal-js.js
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function findScript(url, attributes) {
  var currentScript = document.querySelector('script[src="'.concat(url, '"]'));
  if (currentScript === null)
    return null;
  var nextScript = createScriptElement(url, attributes);
  var currentScriptClone = currentScript.cloneNode();
  delete currentScriptClone.dataset.uidAuto;
  if (Object.keys(currentScriptClone.dataset).length !== Object.keys(nextScript.dataset).length) {
    return null;
  }
  var isExactMatch = true;
  Object.keys(currentScriptClone.dataset).forEach(function(key) {
    if (currentScriptClone.dataset[key] !== nextScript.dataset[key]) {
      isExactMatch = false;
    }
  });
  return isExactMatch ? currentScript : null;
}
function insertScriptElement(_a) {
  var url = _a.url, attributes = _a.attributes, onSuccess = _a.onSuccess, onError = _a.onError;
  var newScript = createScriptElement(url, attributes);
  newScript.onerror = onError;
  newScript.onload = onSuccess;
  document.head.insertBefore(newScript, document.head.firstElementChild);
}
function processOptions(options) {
  var customSdkBaseUrl = getOwnProperty(options, "sdkBaseUrl");
  var environment = getOwnProperty(options, "environment");
  options.environment;
  options.sdkBaseUrl;
  var rest = __rest(options, ["environment", "sdkBaseUrl"]);
  var sdkBaseUrl = customSdkBaseUrl || processSdkBaseUrl(environment);
  var optionsWithStringIndex = rest;
  var _a = Object.keys(optionsWithStringIndex).filter(function(key) {
    return typeof optionsWithStringIndex[key] !== "undefined" && optionsWithStringIndex[key] !== null && optionsWithStringIndex[key] !== "";
  }).reduce(function(accumulator, key) {
    var value = optionsWithStringIndex[key].toString();
    key = camelCaseToKebabCase(key);
    if (key.substring(0, 4) === "data" || key === "crossorigin") {
      accumulator.attributes[key] = value;
    } else {
      accumulator.queryParams[key] = value;
    }
    return accumulator;
  }, {
    queryParams: {},
    attributes: {}
  }), queryParams = _a.queryParams, attributes = _a.attributes;
  var merchantId = getOwnProperty(queryParams, "merchant-id");
  if (merchantId && merchantId.indexOf(",") !== -1) {
    attributes["data-merchant-id"] = merchantId;
    queryParams["merchant-id"] = "*";
  }
  return {
    url: "".concat(sdkBaseUrl, "?").concat(objectToQueryString(queryParams)),
    attributes
  };
}
function camelCaseToKebabCase(str) {
  var replacer = function(match, indexOfMatch) {
    return (indexOfMatch ? "-" : "") + match.toLowerCase();
  };
  return str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, replacer);
}
function objectToQueryString(params) {
  var queryString = "";
  Object.keys(params).forEach(function(key) {
    if (queryString.length !== 0)
      queryString += "&";
    queryString += key + "=" + params[key];
  });
  return queryString;
}
function processSdkBaseUrl(environment) {
  return environment === "sandbox" ? "https://www.sandbox.paypal.com/sdk/js" : "https://www.paypal.com/sdk/js";
}
function createScriptElement(url, attributes) {
  if (attributes === void 0) {
    attributes = {};
  }
  var newScript = document.createElement("script");
  newScript.src = url;
  Object.keys(attributes).forEach(function(key) {
    newScript.setAttribute(key, attributes[key]);
    if (key === "data-csp-nonce") {
      newScript.setAttribute("nonce", attributes["data-csp-nonce"]);
    }
  });
  return newScript;
}
function getOwnProperty(options, key) {
  return Object.prototype.hasOwnProperty.call(options, key) ? options[key] : void 0;
}
function loadScript(options, PromisePonyfill) {
  if (PromisePonyfill === void 0) {
    PromisePonyfill = Promise;
  }
  validateArguments(options, PromisePonyfill);
  if (typeof document === "undefined")
    return PromisePonyfill.resolve(null);
  var _a = processOptions(options), url = _a.url, attributes = _a.attributes;
  var namespace = getOwnProperty(attributes, "data-namespace") || "paypal";
  var existingWindowNamespace = getPayPalWindowNamespace(namespace);
  if (!getOwnProperty(attributes, "data-js-sdk-library")) {
    attributes["data-js-sdk-library"] = "paypal-js";
  }
  if (findScript(url, attributes) && existingWindowNamespace) {
    return PromisePonyfill.resolve(existingWindowNamespace);
  }
  return loadCustomScript({
    url,
    attributes
  }, PromisePonyfill).then(function() {
    var newWindowNamespace = getPayPalWindowNamespace(namespace);
    if (newWindowNamespace) {
      return newWindowNamespace;
    }
    throw new Error("The window.".concat(namespace, " global variable is not available."));
  });
}
function loadCustomScript(options, PromisePonyfill) {
  if (PromisePonyfill === void 0) {
    PromisePonyfill = Promise;
  }
  validateArguments(options, PromisePonyfill);
  var url = getOwnProperty(options, "url");
  var attributes = getOwnProperty(options, "attributes");
  if (typeof url !== "string" || url.length === 0) {
    throw new Error("Invalid url.");
  }
  if (typeof attributes !== "undefined" && typeof attributes !== "object") {
    throw new Error("Expected attributes to be an object.");
  }
  return new PromisePonyfill(function(resolve, reject) {
    if (typeof document === "undefined")
      return resolve();
    insertScriptElement({
      url,
      attributes,
      onSuccess: function() {
        return resolve();
      },
      onError: function() {
        var defaultError = new Error('The script "'.concat(url, '" failed to load. Check the HTTP status code and response body in DevTools to learn more.'));
        return reject(defaultError);
      }
    });
  });
}
function getPayPalWindowNamespace(namespace) {
  return window[namespace];
}
function validateArguments(options, PromisePonyfill) {
  if (typeof options !== "object" || options === null) {
    throw new Error("Expected an options object.");
  }
  var environment = getOwnProperty(options, "environment");
  if (environment && environment !== "production" && environment !== "sandbox") {
    throw new Error('The `environment` option must be either "production" or "sandbox".');
  }
  if (typeof PromisePonyfill !== "undefined" && typeof PromisePonyfill !== "function") {
    throw new Error("Expected PromisePonyfill to be a function.");
  }
}

// src/app/pages/ajustes-aplicacion/ajustes-aplicacion.page.ts
function AjustesAplicacionPage_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div", 17)(3, "div", 18)(4, "h3");
    \u0275\u0275element(5, "i", 19);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "mat-divider");
    \u0275\u0275elementStart(9, "select", 20);
    \u0275\u0275listener("change", function AjustesAplicacionPage_div_16_Template_select_change_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeLanguage($event));
    });
    \u0275\u0275elementStart(10, "option", 21);
    \u0275\u0275text(11, " Espa\xF1ol ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 22);
    \u0275\u0275text(13, " English ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 17)(15, "div", 18)(16, "h3");
    \u0275\u0275element(17, "i", 23);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "mat-divider");
    \u0275\u0275elementStart(21, "div", 24)(22, "div", 25)(23, "span");
    \u0275\u0275text(24, "Notificaciones m\xF3vil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "ion-toggle", 26);
    \u0275\u0275twoWayListener("ngModelChange", function AjustesAplicacionPage_div_16_Template_ion_toggle_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.notifPush, $event) || (ctx_r1.notifPush = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function AjustesAplicacionPage_div_16_Template_ion_toggle_ionChange_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.guardarAjustes());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 25)(27, "span");
    \u0275\u0275text(28, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "ion-toggle", 26);
    \u0275\u0275twoWayListener("ngModelChange", function AjustesAplicacionPage_div_16_Template_ion_toggle_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.notifEmail, $event) || (ctx_r1.notifEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function AjustesAplicacionPage_div_16_Template_ion_toggle_ionChange_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.guardarAjustes());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 25)(31, "span");
    \u0275\u0275text(32, "SMS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "ion-toggle", 26);
    \u0275\u0275twoWayListener("ngModelChange", function AjustesAplicacionPage_div_16_Template_ion_toggle_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.notifSMS, $event) || (ctx_r1.notifSMS = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function AjustesAplicacionPage_div_16_Template_ion_toggle_ionChange_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.guardarAjustes());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 25)(35, "span");
    \u0275\u0275text(36, "Alertas en app");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "ion-toggle", 26);
    \u0275\u0275twoWayListener("ngModelChange", function AjustesAplicacionPage_div_16_Template_ion_toggle_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.notificacionesActivas, $event) || (ctx_r1.notificacionesActivas = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function AjustesAplicacionPage_div_16_Template_ion_toggle_ionChange_37_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.guardarAjustes());
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(38, "div", 17)(39, "div", 27)(40, "h3");
    \u0275\u0275element(41, "i", 28);
    \u0275\u0275text(42, " Ajustes visuales ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "mat-divider");
    \u0275\u0275elementStart(44, "div", 29)(45, "span");
    \u0275\u0275text(46, "Mostrar imagen de cabecera");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "ion-toggle", 26);
    \u0275\u0275twoWayListener("ngModelChange", function AjustesAplicacionPage_div_16_Template_ion_toggle_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.mostrarJumbotron, $event) || (ctx_r1.mostrarJumbotron = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function AjustesAplicacionPage_div_16_Template_ion_toggle_ionChange_47_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mostrarJumbotronChange());
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "div", 17)(49, "div", 18)(50, "h3");
    \u0275\u0275element(51, "i", 30);
    \u0275\u0275text(52, " Recomendaciones con IA ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "mat-divider");
    \u0275\u0275elementStart(54, "div", 29)(55, "span");
    \u0275\u0275text(56, "Activar Smart Match y sugerencias de IA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "ion-toggle", 26);
    \u0275\u0275twoWayListener("ngModelChange", function AjustesAplicacionPage_div_16_Template_ion_toggle_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.iaActiva, $event) || (ctx_r1.iaActiva = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function AjustesAplicacionPage_div_16_Template_ion_toggle_ionChange_57_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.guardarAjustesIA());
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(58, "div", 17)(59, "div", 18)(60, "h3")(61, "div", 31);
    \u0275\u0275element(62, "ion-icon", 32)(63, "ion-icon", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, " Asistente Maricar ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(65, "mat-divider");
    \u0275\u0275elementStart(66, "div", 29)(67, "span");
    \u0275\u0275text(68, "Activar Asistente Maricar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "ion-toggle", 26);
    \u0275\u0275twoWayListener("ngModelChange", function AjustesAplicacionPage_div_16_Template_ion_toggle_ngModelChange_69_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.asistenteActiva, $event) || (ctx_r1.asistenteActiva = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function AjustesAplicacionPage_div_16_Template_ion_toggle_ionChange_69_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.guardarAjustesAsistente());
    });
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 11, "AJUSTESAPP.OPCION_IDIOMA.TITULO"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("selected", ctx_r1.selectedLanguage === "es");
    \u0275\u0275advance(2);
    \u0275\u0275property("selected", ctx_r1.selectedLanguage === "en");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 13, "AJUSTESAPP.OPCION_NOTIFICACION.TITULO"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.notifPush);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.notifEmail);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.notifSMS);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.notificacionesActivas);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.mostrarJumbotron);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.iaActiva);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.asistenteActiva);
  }
}
function AjustesAplicacionPage_div_17_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275element(1, "div", 79);
    \u0275\u0275elementEnd();
  }
}
function AjustesAplicacionPage_div_17_div_19_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 81);
    \u0275\u0275element(2, "ion-icon", 82);
    \u0275\u0275elementStart(3, "div", 83)(4, "div", 84);
    \u0275\u0275text(5, "Cuenta PayPal vinculada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 85);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "button", 86);
    \u0275\u0275listener("click", function AjustesAplicacionPage_div_17_div_19_div_2_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.desvincularPaypal());
    });
    \u0275\u0275text(9, " Desvincular ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.emailPaypal);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.vinculandoPaypal);
  }
}
function AjustesAplicacionPage_div_17_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275template(1, AjustesAplicacionPage_div_17_div_19_div_1_Template, 2, 0, "div", 76)(2, AjustesAplicacionPage_div_17_div_19_div_2_Template, 10, 2, "div", 77);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.paypalVinculado);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.paypalVinculado);
  }
}
function AjustesAplicacionPage_div_17_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 87)(2, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function AjustesAplicacionPage_div_17_div_26_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.titular_cuenta_bancaria, $event) || (ctx_r1.titular_cuenta_bancaria = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 89);
    \u0275\u0275text(4, "Titular de la cuenta");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 87)(6, "input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function AjustesAplicacionPage_div_17_div_26_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.numero_cuenta_bancaria, $event) || (ctx_r1.numero_cuenta_bancaria = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label", 91);
    \u0275\u0275text(8, "N\xFAmero de cuenta (IBAN)");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.titular_cuenta_bancaria);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.numero_cuenta_bancaria);
  }
}
function AjustesAplicacionPage_div_17_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMensaje, " ");
  }
}
function AjustesAplicacionPage_div_17_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.exitoMensaje, " ");
  }
}
function AjustesAplicacionPage_div_17_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94)(1, "div", 95);
    \u0275\u0275element(2, "app-spinner");
    \u0275\u0275elementStart(3, "span", 96);
    \u0275\u0275text(4, "Procesando solicitud de eliminaci\xF3n...");
    \u0275\u0275elementEnd()()();
  }
}
function AjustesAplicacionPage_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div", 34)(3, "div", 27)(4, "h3", 35);
    \u0275\u0275element(5, "i", 36);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "mat-divider");
    \u0275\u0275elementStart(9, "div", 24)(10, "p", 37);
    \u0275\u0275text(11, "\xBFD\xF3nde quieres recibir el dinero de tus viajes compartidos?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ion-radio-group", 26);
    \u0275\u0275twoWayListener("ngModelChange", function AjustesAplicacionPage_div_17_Template_ion_radio_group_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.metodoCobroPredeterminado, $event) || (ctx_r1.metodoCobroPredeterminado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function AjustesAplicacionPage_div_17_Template_ion_radio_group_ionChange_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMetodoCobroChange());
    });
    \u0275\u0275elementStart(13, "div", 38)(14, "ion-item", 39);
    \u0275\u0275element(15, "ion-icon", 40);
    \u0275\u0275elementStart(16, "ion-label");
    \u0275\u0275text(17, "PayPal");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "ion-radio", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, AjustesAplicacionPage_div_17_div_19_Template, 3, 2, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 43)(21, "ion-item", 39);
    \u0275\u0275element(22, "ion-icon", 44);
    \u0275\u0275elementStart(23, "ion-label");
    \u0275\u0275text(24, "Transferencia Bancaria (IBAN)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "ion-radio", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, AjustesAplicacionPage_div_17_div_26_Template, 9, 2, "div", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "button", 46);
    \u0275\u0275listener("click", function AjustesAplicacionPage_div_17_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.guardarConfiguracionCobro());
    });
    \u0275\u0275text(28, " Actualizar Preferencias de Cobro ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 47)(30, "div", 18)(31, "h3");
    \u0275\u0275element(32, "i", 48);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "mat-divider");
    \u0275\u0275elementStart(36, "div", 24)(37, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function AjustesAplicacionPage_div_17_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.passwordActual, $event) || (ctx_r1.passwordActual = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function AjustesAplicacionPage_div_17_Template_input_input_37_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.comprobarContrasenaActual());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function AjustesAplicacionPage_div_17_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.nuevaPassword1, $event) || (ctx_r1.nuevaPassword1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function AjustesAplicacionPage_div_17_Template_input_input_38_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.validarNuevaPassword());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function AjustesAplicacionPage_div_17_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.nuevaPassword2, $event) || (ctx_r1.nuevaPassword2 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function AjustesAplicacionPage_div_17_Template_input_input_39_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.validarConfirmacionPassword());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, AjustesAplicacionPage_div_17_div_40_Template, 2, 1, "div", 52)(41, AjustesAplicacionPage_div_17_div_41_Template, 2, 1, "div", 53);
    \u0275\u0275elementStart(42, "button", 54);
    \u0275\u0275listener("click", function AjustesAplicacionPage_div_17_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.botonCambioPassword());
    });
    \u0275\u0275text(43, " Actualizar Contrase\xF1a ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 47)(45, "div", 55)(46, "h3", 56);
    \u0275\u0275element(47, "i", 57);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "mat-divider");
    \u0275\u0275elementStart(51, "div", 24)(52, "p", 58);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "button", 59);
    \u0275\u0275listener("click", function AjustesAplicacionPage_div_17_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.modalEliminarUsuario());
    });
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(58, AjustesAplicacionPage_div_17_div_58_Template, 5, 0, "div", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 34)(60, "div", 27)(61, "h3");
    \u0275\u0275element(62, "i", 61);
    \u0275\u0275text(63, " Mis Incidencias ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(64, "mat-divider");
    \u0275\u0275elementStart(65, "div", 62)(66, "div", 63);
    \u0275\u0275listener("click", function AjustesAplicacionPage_div_17_Template_div_click_66_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.irACentroDeIncidencias());
    });
    \u0275\u0275elementStart(67, "div", 64);
    \u0275\u0275element(68, "i", 61);
    \u0275\u0275elementStart(69, "span");
    \u0275\u0275text(70, "Ver Incidencias");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(71, "i", 65);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(72, "div", 34)(73, "div", 27)(74, "h3");
    \u0275\u0275element(75, "i", 66);
    \u0275\u0275text(76, " Soporte y Legal ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(77, "mat-divider");
    \u0275\u0275elementStart(78, "div", 62)(79, "div", 67);
    \u0275\u0275listener("click", function AjustesAplicacionPage_div_17_Template_div_click_79_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.irACentroAyuda());
    });
    \u0275\u0275elementStart(80, "div", 64);
    \u0275\u0275element(81, "i", 68);
    \u0275\u0275elementStart(82, "span");
    \u0275\u0275text(83, "Centro de Ayuda / FAQ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(84, "i", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 67);
    \u0275\u0275listener("click", function AjustesAplicacionPage_div_17_Template_div_click_85_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.irATerminos());
    });
    \u0275\u0275elementStart(86, "div", 64);
    \u0275\u0275element(87, "i", 69);
    \u0275\u0275elementStart(88, "span");
    \u0275\u0275text(89, "Condiciones Generales de Uso");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(90, "i", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 70);
    \u0275\u0275listener("click", function AjustesAplicacionPage_div_17_Template_div_click_91_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.valorarApp());
    });
    \u0275\u0275elementStart(92, "div", 64);
    \u0275\u0275element(93, "i", 71);
    \u0275\u0275elementStart(94, "span");
    \u0275\u0275text(95, "Valorar GoGuay");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(96, "i", 65);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(97, "div", 72)(98, "button", 73);
    \u0275\u0275listener("click", function AjustesAplicacionPage_div_17_Template_button_click_98_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275element(99, "i", 74);
    \u0275\u0275text(100, " Cerrar Sesi\xF3n ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 17, "AJUSTESAPP.METODOS_COBRO.TITULO"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.metodoCobroPredeterminado);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.metodoCobroPredeterminado === "paypal");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.metodoCobroPredeterminado === "transferencia");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 19, "AJUSTESAPP.PASSWORD.TITULO"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.passwordActual);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nuevaPassword1);
    \u0275\u0275property("disabled", !ctx_r1.isPasswordActualValida);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nuevaPassword2);
    \u0275\u0275property("disabled", !ctx_r1.isNuevaPassword1Valida);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMensaje);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.exitoMensaje);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.isConfirmacionPasswordValida);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 21, "AJUSTESAPP.ELIMINARCTA.TITULO"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 23, "AJUSTESAPP.ELIMINARCTA.INFO_ELIMINAR_CTA"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 25, "BOTON.ELIMINAR_CTA"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.cargandoEliminacion);
  }
}
var AjustesAplicacionPage = class _AjustesAplicacionPage {
  navCtrl;
  languageService;
  messageService;
  userService;
  dialog;
  translate;
  route;
  router;
  funcionesComunes;
  monederoService;
  userLoggedIn = false;
  selectedLanguage = "es";
  mostrarBanner = true;
  notificacionesActivas = true;
  theme = "light";
  mostrarJumbotron = true;
  email = "";
  userData = {};
  usuarioBD = {};
  passwordActual = "";
  esValida = null;
  nuevaPassword1 = "";
  nuevaPassword2 = "";
  isPasswordActualValida = null;
  isNuevaPassword1Valida = false;
  isConfirmacionPasswordValida = false;
  interactuoConPassword = false;
  errorMensaje = "";
  exitoMensaje = "";
  preferenciasSeleccionadas = [];
  aceptaMascotas = false;
  fuma = false;
  leGustaMusica = false;
  leGustaHablar = false;
  leGustaSilencio = false;
  soloMujeres = false;
  darkTheme = false;
  usuario = null;
  isLoggedIn = false;
  numNotificaciones = 0;
  notifPush = true;
  notifEmail = true;
  notifSMS = false;
  segmentoSeleccionado = "app";
  metodoPagoPredeterminado = "paypal";
  emailPaypal = "";
  numeroTarjeta = "";
  fechaCaducidad = "";
  cvvTarjeta = "";
  paypalVinculado = false;
  vinculandoPaypal = false;
  paypalPayerId = null;
  metodoCobroPredeterminado = "transferencia";
  cobroEmailPaypal;
  numero_cuenta_bancaria;
  titular_cuenta_bancaria;
  iaActiva = true;
  asistenteActiva = true;
  cargandoEliminacion = false;
  content;
  constructor(navCtrl, languageService, messageService, userService, dialog, translate, route, router, funcionesComunes, monederoService) {
    this.navCtrl = navCtrl;
    this.languageService = languageService;
    this.messageService = messageService;
    this.userService = userService;
    this.dialog = dialog;
    this.translate = translate;
    this.route = route;
    this.router = router;
    this.funcionesComunes = funcionesComunes;
    this.monederoService = monederoService;
    addIcons({ logoPaypal, cardOutline, businessOutline, sparkles, carSportOutline, checkmarkCircle });
  }
  ngOnInit() {
    var _a;
    this.userLoggedIn = this.funcionesComunes.isUserLoggedIn();
    this.selectedLanguage = this.languageService.getLanguage();
    const savedJumbotronSetting = localStorage.getItem("mostrarJumbotron");
    this.mostrarJumbotron = savedJumbotronSetting === null ? true : savedJumbotronSetting === "true";
    this.notificacionesActivas = localStorage.getItem("notificacionesActivas") !== "false";
    this.notifPush = localStorage.getItem("notifPush") !== "false";
    this.notifEmail = localStorage.getItem("notifEmail") !== "false";
    this.notifSMS = localStorage.getItem("notifSMS") === "true";
    this.route.queryParams.subscribe((params) => {
      if (params["tab"] === "cuenta") {
        this.segmentoSeleccionado = "cuenta";
        this.intentarRenderizarPaypal();
      }
      if (params["code"] && params["state"] === "paypal_link") {
        this.segmentoSeleccionado = "cuenta";
        this.metodoCobroPredeterminado = "paypal";
        this.procesarCallbackPaypal(params["code"]);
      }
    });
    const savedIASetting = localStorage.getItem("iaActiva");
    const savedAsistenteSetting = localStorage.getItem("asistenteActiva");
    this.iaActiva = savedIASetting === null ? true : savedIASetting === "true";
    this.asistenteActiva = savedAsistenteSetting === null ? true : savedAsistenteSetting === "true";
    this.userData = JSON.parse(localStorage.getItem("userData") || "{}");
    if ((_a = this.userData) == null ? void 0 : _a.usuario) {
      this.cobroEmailPaypal = this.userData.usuario.cobro_paypal_email;
      this.titular_cuenta_bancaria = this.userData.usuario.cobro_titular;
      this.numero_cuenta_bancaria = this.userData.usuario.cobro_iban;
      this.metodoCobroPredeterminado = this.userData.usuario.metodo_cobro_preferido || "transferencia";
      this.paypalVinculado = !!this.cobroEmailPaypal;
    }
    this.obtenerUsuario();
  }
  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            const yOffset = element.offsetTop;
            this.content.scrollToPoint(0, yOffset, 600);
          }
        }, 600);
      }
    });
  }
  onSegmentoChange() {
    if (this.segmentoSeleccionado === "cuenta") {
      this.intentarRenderizarPaypal();
    }
  }
  onMetodoCobroChange() {
    if (this.metodoCobroPredeterminado === "paypal") {
      this.intentarRenderizarPaypal();
    }
  }
  intentarRenderizarPaypal() {
    if (this.segmentoSeleccionado === "cuenta" && this.metodoCobroPredeterminado === "paypal" && !this.paypalVinculado) {
      setTimeout(() => {
        this.renderizarBotonPaypal();
      }, 100);
    }
  }
  obtenerUsuario() {
    this.userService.obtenerUsuarioPorID(this.userData.usuario.id).subscribe((respuesta) => {
      this.usuarioBD = respuesta;
      console.log(this.usuarioBD);
      this.emailPaypal = this.usuarioBD.paypal_email;
      this.metodoPagoPredeterminado = respuesta.metodo_pago_preferido || "paypal";
      if (!this.paypalVinculado) {
        this.intentarRenderizarPaypal();
      }
    });
  }
  guardarAjustes() {
    localStorage.setItem("mostrarJumbotron", this.mostrarJumbotron.toString());
    localStorage.setItem("notificacionesActivas", this.notificacionesActivas.toString());
    localStorage.setItem("notifPush", this.notifPush.toString());
    localStorage.setItem("notifEmail", this.notifEmail.toString());
    localStorage.setItem("notifSMS", this.notifSMS.toString());
    this.translate.get(["AJUSTESAPP.OPCION_BANNER.ALERT_TITULO", "AJUSTESAPP.OPCION_BANNER.ALERT_MENSAJE"]).subscribe((translations) => {
      this.messageService.add({
        severity: "success",
        summary: translations["AJUSTESAPP.OPCION_BANNER.ALERT_TITULO"],
        detail: translations["AJUSTESAPP.OPCION_BANNER.ALERT_MENSAJE"],
        life: 2e3
      });
    });
  }
  changeLanguage(event) {
    const selectedLanguage = event.target.value;
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
  onMetodoPagoChange() {
    console.log("Cambiando a:", this.metodoPagoPredeterminado);
  }
  /**
   * Modal que se muestra cuando se pulsa el botón de eliminar usuario.
   */
  modalEliminarUsuario() {
    this.translate.get(["AJUSTESAPP.ELIMINARCTA.MODAL_TITULO", "AJUSTESAPP.ELIMINARCTA.MODAL_MENSAJE", "AJUSTESAPP.ELIMINARCTA.MODAL_DESCRIPCION"]).subscribe((translations) => {
      const titulo = translations["AJUSTESAPP.ELIMINARCTA.MODAL_TITULO"];
      const mensaje = translations["AJUSTESAPP.ELIMINARCTA.MODAL_MENSAJE"];
      const descripcion = translations["AJUSTESAPP.ELIMINARCTA.MODAL_DESCRIPCION"];
      const dialogRef = this.dialog.open(HelpModalComponent, {
        data: { title: titulo, message: mensaje, descripcion, showAcceptButton: true, eliminacion_cuenta: true },
        disableClose: true
      });
      dialogRef.afterClosed().subscribe((confirmar) => {
        if (confirmar) {
          this.eliminar_usuario();
        }
      });
    });
  }
  /**
   * Funcion para eliminar el usuario. Se llama en el botón de confirmación de la modal
   */
  eliminar_usuario() {
    var _a, _b;
    if (!((_b = (_a = this.userData) == null ? void 0 : _a.usuario) == null ? void 0 : _b.id))
      return;
    this.cargandoEliminacion = true;
    this.userService.eliminarUsuario(this.userData.usuario.id).subscribe({
      next: (res) => {
        console.log("Respuesta backend eliminar usuario: ", res);
        localStorage.clear();
        this.userService.setUsuarioData(null);
        this.router.navigate(["/home"], {
          queryParams: { cuentaEliminada: "true" },
          replaceUrl: true
        });
      },
      error: (err) => {
        var _a2, _b2, _c;
        this.cargandoEliminacion = false;
        const tituloError = ((_a2 = err.error) == null ? void 0 : _a2.error) || "No se pudo eliminar";
        const detalleError = ((_b2 = err.error) == null ? void 0 : _b2.motivo) || ((_c = err.error) == null ? void 0 : _c.message) || "Revisa los requisitos para poder eliminar la cuenta.";
        this.messageService.add({
          severity: "error",
          summary: tituloError,
          detail: detalleError,
          life: 5e3
        });
      }
    });
  }
  /**
   * FUNCIÓN PARA COMPROBAR LA CONTRASEÑA ACTUAL Y DESHABILITAR/HABILITAR los siguientes campos
   * Si no hay contraseña actual escrita, corta la función y deja todo en deshabilitado.
   * Si hay contraseña actual, llama al servicio para comprobar si la contraseña es la correcta del usuario.
   * Si el backend responde correctamente , actualiza el estado de isPasswordActualValida con true o false.
   * Si la contraseña NO es válida, muestra error y bloquea los siguientes inputs, si la contraseña SI es válida
   * sólo limpia el mensaje de error.
   * Borra el contenido de nuevaPassword1, nuevaPassword2 y deja isNuevaPassword1Valida en false y también isConfirmaciónPasswordValida en false.
   * Si hay algun otro error (de red, backend...) muestra un mensaje genérico y bloquea el flujo.
   *
   */
  comprobarContrasenaActual() {
    if (!this.passwordActual || this.passwordActual.length < 6) {
      this.isPasswordActualValida = false;
      this.errorMensaje = "";
      return;
    }
    this.userService.verificar_pw_actual(this.userData.usuario.id, this.passwordActual.trim()).subscribe({
      next: (res) => {
        this.isPasswordActualValida = res.isValid;
        if (res.isValid) {
          this.errorMensaje = "";
          console.log("Contrase\xF1a actual verificada correctamente");
        } else {
          this.translate.get("AJUSTESAPP.PASSWORD.CONTRAS_ACTUAL_INCO").subscribe((translation) => {
            this.errorMensaje = translation;
          });
          console.log("Contrase\xF1a actual incorrecta");
        }
        this.nuevaPassword1 = "";
        this.nuevaPassword2 = "";
        this.isNuevaPassword1Valida = false;
        this.isConfirmacionPasswordValida = false;
      },
      error: () => {
        this.isPasswordActualValida = false;
      }
    });
  }
  /**
   * Si hay nuevaPassword y además es diferente a la actual, habilitamos isNuevaPassword1 y reseteamos el mensaje de error.
   * De lo contrario, dejamos de nuevoesNuevaPasswor1 en false y lanzamos mensaje de error.
   * Resetea el campo de nuevaPassword2 para que "obligue" al usuario a escribir algo y valida de nuevo.
   */
  validarNuevaPassword() {
    if (this.nuevaPassword1 && this.nuevaPassword1 !== this.passwordActual) {
      this.isNuevaPassword1Valida = true;
      this.errorMensaje = "";
    } else {
      this.isNuevaPassword1Valida = false;
      this.translate.get("AJUSTESAPP.PASSWORD.NUEVA_DIF_ACTUAL").subscribe((translation) => {
        this.errorMensaje = translation;
      });
    }
    this.nuevaPassword2 = "";
    this.isConfirmacionPasswordValida = false;
  }
  /**
   * Si hay nuevaPassword2 y además es igual que la nuevaPassword1 pone la confirmación en true
   * DE lo contrario deja la confirmación en false y lanza un mensaje de error
   */
  validarConfirmacionPassword() {
    if (this.nuevaPassword2 && this.nuevaPassword2 === this.nuevaPassword1) {
      this.isConfirmacionPasswordValida = true;
      this.errorMensaje = "";
    } else {
      this.isConfirmacionPasswordValida = false;
      this.translate.get("AJUSTESAPP.PASSWORD.NO_COINCIDEN").subscribe((translation) => {
        this.errorMensaje = translation;
      });
    }
  }
  /**
   * Función para manejar el botón de cambio de contraseña
   */
  botonCambioPassword() {
    if (!this.isConfirmacionPasswordValida)
      return;
    this.userService.cambio_pw(this.userData.usuario.id, this.nuevaPassword1).subscribe({
      next: () => {
        this.translate.get("AJUSTESAPP.PASSWORD.CAMBIADA_OK").subscribe((translation) => {
          this.exitoMensaje = translation;
        });
        this.errorMensaje = "";
        this.passwordActual = "";
        this.nuevaPassword1 = "";
        this.nuevaPassword2 = "";
        this.isPasswordActualValida = null;
        this.isNuevaPassword1Valida = false;
        this.isConfirmacionPasswordValida = false;
      },
      error: (err) => {
        this.translate.get("AJUSTESAPP.PASSWORD.NO_CAMBIADA").subscribe((translation) => {
          this.exitoMensaje = translation;
        });
        this.exitoMensaje = "";
      }
    });
  }
  /**
   * Función para mostrar u ocultar el jumbotron de la home al activar o desactivar la opción en ajustes de aplicación
   */
  mostrarJumbotronChange() {
    localStorage.setItem("mostrarJumbotron", this.mostrarJumbotron.toString());
    this.messageService.add({
      severity: "success",
      summary: "Ajuste actualizado",
      detail: "Se ha cambiado el ajuste de visualizaci\xF3n de la cabecera.",
      life: 2e3
    });
  }
  /**
   * Función para cerrar sesión
   */
  logout() {
    return __async(this, null, function* () {
      const rememberMe = localStorage.getItem("remember_me") === "true";
      const email = localStorage.getItem("email") || "";
      const password = localStorage.getItem("password") || "";
      const alert = yield this.dialog.open(HelpModalComponent, {
        data: {
          title: "Cerrar Sesi\xF3n",
          message: "\xBFEst\xE1s seguro de que quieres salir de Pridecar?",
          showAcceptButton: true
        }
      });
      alert.afterClosed().subscribe((confirmado) => {
        if (confirmado) {
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
          this.navCtrl.navigateRoot(["/home"], { animated: true });
        }
      });
    });
  }
  /**
   * Función para guardar el método de pago preferido del usuario.
   * Recoge los datos del formulario y los envía al backend para actualizar el perfil del usuario.
   *
   */
  guardarMetodoPago() {
    const datosPago = {
      metodo_pago_preferido: this.metodoPagoPredeterminado,
      paypal_email: this.emailPaypal,
      tarjeta_numero: this.numeroTarjeta,
      tarjeta_exp: this.fechaCaducidad
    };
    this.userService.actualizarUsuario(this.userData.usuario.id, datosPago).subscribe({
      next: () => {
        this.messageService.add({
          severity: "success",
          summary: "\xC9xito",
          detail: "Datos de pago actualizados correctamente"
        });
      }
    });
  }
  /**
   * Función para guardar el método de cobro preferido del usuario.
   * Recoge los datos del formulario y los envía al backend para actualizar el perfil del usuario.
   */
  guardarConfiguracionCobro() {
    const datosCobro = {
      metodo_cobro_preferido: this.metodoCobroPredeterminado,
      cobro_paypal_email: this.cobroEmailPaypal,
      cobro_iban: this.numero_cuenta_bancaria,
      cobro_titular: this.titular_cuenta_bancaria
    };
    this.userService.actualizarUsuario(this.userData.usuario.id, datosCobro).subscribe({
      next: () => {
        this.messageService.add({
          severity: "success",
          summary: "\xC9xito",
          detail: "Datos de cobro actualizados correctamente"
        });
      }
    });
  }
  /**
   * Función para abrir el centro de ayuda al hacer click en la opción del menú. Redirige a la página de centro de ayuda.
   */
  irACentroAyuda() {
    this.navCtrl.navigateForward("/centro-ayuda");
  }
  /**
   * Función para abrir el centro de incidencias al hacer click en la opción del menú. Redirige a la página de mis incidencias.
   */
  irACentroDeIncidencias() {
    this.navCtrl.navigateForward("/mis-incidencias");
  }
  /**
   * Función para abrir la página de términos y condiciones al hacer click en la opción del menú. Redirige a la página de términos y condiciones.
   */
  irATerminos() {
    this.navCtrl.navigateForward("/condiciones-generales");
  }
  /**
   * Función para abrir la página de valoración de la aplicación al hacer click en la opción del menú. Redirige a la página de encuesta de satisfacción.
   */
  valorarApp() {
    this.navCtrl.navigateForward("/encuesta-satisfaccion");
  }
  guardarAjustesIA() {
    localStorage.setItem("iaActiva", this.iaActiva.toString());
    this.messageService.add({
      severity: "success",
      summary: "Ajuste actualizado",
      detail: this.iaActiva ? "Recomendaciones de IA activadas." : "Recomendaciones de IA desactivadas.",
      life: 2e3
    });
  }
  guardarAjustesAsistente() {
    localStorage.setItem("asistenteActiva", this.asistenteActiva.toString());
    this.messageService.add({
      severity: "success",
      summary: "Ajuste actualizado",
      detail: this.asistenteActiva ? "Asistente MariCar activado." : "Asistente MariCar desactivado.",
      life: 2e3
    });
  }
  conectarConPaypal() {
    this.vinculandoPaypal = true;
    window.location.href = this.monederoService.obtenerUrlAutorizacionPaypal();
  }
  renderizarBotonPaypal() {
    return __async(this, null, function* () {
      if (this.paypalVinculado)
        return;
      try {
        const paypal = yield loadScript({
          clientId: PAYPAL_CLIENT_ID,
          currency: "EUR",
          intent: "authorize",
          disableFunding: "card,credit,sepa"
        });
        if (!(paypal == null ? void 0 : paypal.Buttons))
          return;
        const contenedor = document.getElementById("paypal-button-container");
        if (contenedor) {
          contenedor.innerHTML = "";
        }
        yield paypal.Buttons({
          style: {
            layout: "horizontal",
            color: "blue",
            shape: "pill",
            label: "paypal",
            tagline: false
          },
          createOrder: (_data, actions) => {
            return actions.order.create({
              intent: "AUTHORIZE",
              purchase_units: [
                {
                  description: "Verificaci\xF3n de cuenta PayPal - GoGuay",
                  amount: { currency_code: "EUR", value: "0.01" }
                }
              ]
            });
          },
          onApprove: (_data, actions) => __async(this, null, function* () {
            var _a, _b, _c, _d;
            if (!actions.order || !((_b = (_a = this.userData) == null ? void 0 : _a.usuario) == null ? void 0 : _b.id))
              return;
            this.vinculandoPaypal = true;
            const detalles = yield actions.order.get();
            const payerId = (_c = detalles.payer) == null ? void 0 : _c.payer_id;
            const emailPaypal = (_d = detalles.payer) == null ? void 0 : _d.email_address;
            if (payerId && emailPaypal) {
              this.monederoService.vincularCuentaPaypal(this.userData.usuario.id, payerId, emailPaypal).subscribe({
                next: (res) => {
                  this.paypalVinculado = true;
                  this.emailPaypal = emailPaypal;
                  this.vinculandoPaypal = false;
                },
                error: (err) => {
                  console.error("Error guardando vinculaci\xF3n:", err);
                  this.vinculandoPaypal = false;
                }
              });
            }
          }),
          onError: (err) => {
            console.error("Error en popup de PayPal:", err);
            this.vinculandoPaypal = false;
          }
        }).render("#paypal-button-container");
      } catch (error) {
        console.error("No se pudo cargar el SDK de PayPal:", error);
      }
    });
  }
  procesarCallbackPaypal(code) {
    var _a, _b;
    if (!((_b = (_a = this.userData) == null ? void 0 : _a.usuario) == null ? void 0 : _b.id))
      return;
    this.vinculandoPaypal = true;
    this.monederoService.vincularCuentaPaypal(this.userData.usuario.id, code, PAYPAL_REDIRECT_URI).subscribe({
      next: (res) => {
        var _a2;
        this.vinculandoPaypal = false;
        this.paypalVinculado = true;
        this.cobroEmailPaypal = res.paypal_email;
        this.emailPaypal = res.paypal_email;
        this.paypalPayerId = res.paypal_payer_id;
        this.metodoCobroPredeterminado = "paypal";
        if ((_a2 = this.userData) == null ? void 0 : _a2.usuario) {
          this.userData.usuario.cobro_paypal_email = res.paypal_email;
          this.userData.usuario.paypal_email = res.paypal_email;
          this.userData.usuario.paypal_payer_id = res.paypal_payer_id;
          this.userData.usuario.metodo_cobro_preferido = "paypal";
          localStorage.setItem("userData", JSON.stringify(this.userData));
        }
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { tab: "cuenta" },
          replaceUrl: true
        });
        this.messageService.add({
          severity: "success",
          summary: "PayPal vinculado",
          detail: `Cuenta ${res.paypal_email} enlazada correctamente.`,
          life: 3500
        });
      },
      error: (err) => {
        var _a2;
        this.vinculandoPaypal = false;
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { tab: "cuenta" },
          replaceUrl: true
        });
        this.messageService.add({
          severity: "error",
          summary: "Error de vinculaci\xF3n",
          detail: ((_a2 = err.error) == null ? void 0 : _a2.message) || "No se pudo enlazar tu cuenta de PayPal.",
          life: 4e3
        });
      }
    });
  }
  desvincularPaypal() {
    var _a, _b;
    if (!((_b = (_a = this.userData) == null ? void 0 : _a.usuario) == null ? void 0 : _b.id))
      return;
    this.vinculandoPaypal = true;
    this.monederoService.desvincularCuentaPaypal(this.userData.usuario.id).subscribe({
      next: () => {
        var _a2;
        this.vinculandoPaypal = false;
        this.paypalVinculado = false;
        this.cobroEmailPaypal = void 0;
        this.emailPaypal = "";
        this.paypalPayerId = null;
        this.metodoCobroPredeterminado = "transferencia";
        if ((_a2 = this.userData) == null ? void 0 : _a2.usuario) {
          this.userData.usuario.cobro_paypal_email = void 0;
          this.userData.usuario.paypal_email = void 0;
          this.userData.usuario.paypal_payer_id = void 0;
          this.userData.usuario.metodo_cobro_preferido = "transferencia";
          localStorage.setItem("userData", JSON.stringify(this.userData));
        }
        this.messageService.add({
          severity: "info",
          summary: "PayPal desvinculado",
          detail: "Tu cuenta de PayPal ha sido desenlazada.",
          life: 3e3
        });
      },
      error: () => {
        this.vinculandoPaypal = false;
      }
    });
  }
  static \u0275fac = function AjustesAplicacionPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AjustesAplicacionPage)(\u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(LanguageService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(UserServicesService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FuncionesComunes), \u0275\u0275directiveInject(MonederoService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AjustesAplicacionPage, selectors: [["app-ajustes-aplicacion"]], viewQuery: function AjustesAplicacionPage_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(IonContent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.content = _t.first);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 24, vars: 14, consts: [[3, "backRoute", "searchRoute", "isLoggedIn"], [3, "fullscreen"], [1, "container", "py-4"], [1, "text-center", "mb-2"], ["src", "../../../assets/sistema/ajustes.gif", 1, "ajustIcon"], [1, "segment-wrapper", "mb-4"], ["mode", "ios", 1, "custom-segment", 3, "ngModelChange", "ionChange", "ngModel"], ["value", "app"], ["value", "cuenta"], [3, "ngSwitch"], ["class", "animate__animated animate__fadeIn", 4, "ngSwitchCase"], ["position", "bottom-center"], [1, "footer-info", "text-center", "mt-5", "mb-5"], [1, "info-text", "opacity-50"], ["src", "../../../assets/logo/PRIDECAR.png", 1, "icon_logo", "ms-1"], [1, "animate__animated", "animate__fadeIn"], [1, "row", "g-4"], [1, "col-12", "col-md-6", "col-lg-4"], [1, "box-section", "goguay-border", "h-100"], [1, "fi", "fi-rr-world", "me-2"], [1, "form-select", "mt-3", "custom-select", 3, "change"], ["value", "es", 3, "selected"], ["value", "en", 3, "selected"], [1, "fi", "fi-rr-bell", "me-2"], [1, "mt-3"], [1, "notif-option"], [3, "ngModelChange", "ionChange", "ngModel"], [1, "box-section", "goguay-border"], [1, "fi", "fi-rr-picture", "me-2"], [1, "notif-option", "mt-3"], [1, "fi", "fi-rr-magic-wand", "me-2", "text-primary"], [1, "maricar-chat-avatar", "me-2"], ["name", "car-sport-outline", 1, "chat-car"], ["name", "sparkles", 1, "chat-sparkle"], [1, "col-12", "mt-3"], [1, "cobros-title"], [1, "fi", "fi-rr-coins", "me-2"], [1, "small", "text-muted", "mb-3"], [1, "payment-option-card"], ["lines", "none", 1, "rounded-pill-item"], ["name", "logo-paypal", "slot", "start", 1, "paypal-icon"], ["slot", "end", "value", "paypal"], ["class", "p-3 animate__animated animate__fadeIn", 4, "ngIf"], [1, "payment-option-card", "mt-2"], ["name", "business-outline", "slot", "start", 1, "bank-icon"], ["slot", "end", "value", "transferencia"], [1, "btn", "btn_bg", "w-100", "mt-3", 3, "click"], [1, "col-12", "col-md-6"], [1, "fi", "fi-rr-lock", "me-2"], ["type", "password", "placeholder", "Contrase\xF1a actual", "autocomplete", "new-password", "maxlength", "30", 1, "form-control", "mb-2", 3, "ngModelChange", "input", "ngModel"], ["type", "password", "placeholder", "Nueva contrase\xF1a", "maxlength", "30", 1, "form-control", "mb-2", 3, "ngModelChange", "input", "ngModel", "disabled"], ["type", "password", "placeholder", "Confirmar nueva contrase\xF1a", "maxlength", "30", 1, "form-control", "mb-3", 3, "ngModelChange", "input", "ngModel", "disabled"], ["class", "alert alert-danger py-2 small mb-3", 4, "ngIf"], ["class", "alert alert-success py-2 small mb-3", 4, "ngIf"], [1, "btn", "btn_bg", "w-100", 3, "click", "disabled"], [1, "box-section", "border-danger", "h-100"], [1, "text-danger"], [1, "fi", "fi-rr-trash", "me-2"], [1, "small", "text-muted"], [1, "btn", "btn-outline-danger", "w-100", "mt-4", 3, "click"], ["class", "spinner-loading-overlay", 4, "ngIf"], [1, "fi", "fi-rr-triangle-warning", "me-3", "warning-icon"], [1, "list-help", "mt-3"], [1, "warning-item", 3, "click"], [1, "d-flex", "align-items-center"], [1, "fi", "fi-rr-angle-small-right"], [1, "fi", "fi-rr-interrogation", "me-2"], [1, "help-item", 3, "click"], [1, "fi", "fi-rr-life-ring", "me-3"], [1, "fi", "fi-rr-document-signed", "me-3"], [1, "help-item", "rating-item", 3, "click"], [1, "fi", "fi-rr-star", "me-3"], [1, "col-12", "text-center", "mt-5"], [1, "btn", "btn-logout", 3, "click"], [1, "fi", "fi-rs-log-out", "me-2"], [1, "p-3", "animate__animated", "animate__fadeIn"], ["class", "text-center", 4, "ngIf"], ["class", "paypal-linked-card", 4, "ngIf"], [1, "text-center"], ["id", "paypal-button-container", 1, "paypal-sdk-wrapper"], [1, "paypal-linked-card"], [1, "d-flex", "align-items-center", "gap-2"], ["name", "checkmark-circle", 1, "text-success", "paypal-check-icon"], [1, "div_paypal_vinculado"], [1, "fw-bold", "small", "text-dark"], [1, "text-muted", "small"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", "rounded-pill", "px-3", 3, "click", "disabled"], [1, "form-floating", "mb-2"], ["type", "text", "id", "cobroTitular", "placeholder", "Nombre del titular", 1, "form-control", "custom-input", 3, "ngModelChange", "ngModel"], ["for", "cobroTitular"], ["type", "text", "id", "cobroIBAN", "placeholder", "ES00 0000...", 1, "form-control", "custom-input", 3, "ngModelChange", "ngModel"], ["for", "cobroIBAN"], [1, "alert", "alert-danger", "py-2", "small", "mb-3"], [1, "alert", "alert-success", "py-2", "small", "mb-3"], [1, "spinner-loading-overlay"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "bg-white", "p-4", "rounded-4", "shadow-lg"], [1, "fw-bold", "mt-3", "text-dark", "small"]], template: function AjustesAplicacionPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar", 0);
      \u0275\u0275elementStart(1, "ion-content", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275element(6, "img", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5)(8, "ion-segment", 6);
      \u0275\u0275twoWayListener("ngModelChange", function AjustesAplicacionPage_Template_ion_segment_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.segmentoSeleccionado, $event) || (ctx.segmentoSeleccionado = $event);
        return $event;
      });
      \u0275\u0275listener("ionChange", function AjustesAplicacionPage_Template_ion_segment_ionChange_8_listener() {
        return ctx.onSegmentoChange();
      });
      \u0275\u0275elementStart(9, "ion-segment-button", 7)(10, "ion-label");
      \u0275\u0275text(11, "Ajustes de App");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "ion-segment-button", 8)(13, "ion-label");
      \u0275\u0275text(14, "Ajustes de Cuenta");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 9);
      \u0275\u0275template(16, AjustesAplicacionPage_div_16_Template, 70, 15, "div", 10)(17, AjustesAplicacionPage_div_17_Template, 101, 27, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "p-toast", 11);
      \u0275\u0275elementStart(19, "div", 12)(20, "p", 13);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275element(23, "img", 14);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("backRoute", "/home")("searchRoute", "search")("isLoggedIn", ctx.userLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 10, "AJUSTESAPP.TITULO"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.segmentoSeleccionado);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngSwitch", ctx.segmentoSeleccionado);
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "app");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "cuenta");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 12, "AJUSTESAPP.DERECHOS_TXT"), " ");
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    FormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    NgControlStatus,
    MaxLengthValidator,
    NgModel,
    NavbarComponent,
    IonicModule,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonRadio,
    IonRadioGroup,
    IonSegment,
    IonSegmentButton,
    IonToggle,
    BooleanValueAccessorDirective,
    SelectValueAccessorDirective,
    ToastModule,
    Toast,
    MatDividerModule,
    MatDivider,
    TranslateModule,
    SpinnerComponent,
    TranslatePipe
  ], styles: ['\n\n.box-section[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  padding: 20px;\n  width: 100%;\n  border-radius: 15px;\n  background-color: rgba(248, 249, 250, 0.1764705882);\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.box-section-2[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  flex-direction: column;\n  margin-bottom: 20px;\n  padding: 20px;\n  width: 100%;\n  min-height: 300px;\n  border-radius: 15px;\n  background-color: rgba(248, 249, 250, 0.1764705882);\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  justify-content: flex-start;\n}\n.boton_guardar[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  border-color: #007bff;\n  padding: 10px 20px;\n  border-radius: 25px;\n  color: white;\n  transition: background-color 0.3s;\n}\n.container.text-center[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 500px;\n}\n.info-text[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.selectIdiomas[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  width: 60%;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.ajustIcon[_ngcontent-%COMP%] {\n  height: 50px !important;\n  width: 50px !important;\n  border-radius: 50%;\n  mix-blend-mode: multiply !important;\n}\n.icon_logo[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n}\n.selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n}\na[_ngcontent-%COMP%] {\n  color: #b3b5e6 !important;\n}\n.box-section[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n  border-radius: 35px;\n  padding: 20px;\n  height: 100%;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n  border: none;\n}\n.box-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-bottom: 15px;\n  display: flex;\n  align-items: center;\n}\n.goguay-border[_ngcontent-%COMP%] {\n  position: relative;\n  border: none;\n  border-radius: 35px;\n  background-color: #fff;\n  overflow: hidden;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n}\n.goguay-border[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 6px;\n  background:\n    linear-gradient(\n      to bottom,\n      #ffb3ba,\n      #ffdfba,\n      #ffffba,\n      #baffc9,\n      #bae1ff,\n      #e0baff);\n  border-radius: 35px 0 0 35px;\n  z-index: 1;\n}\n.notif-option[_ngcontent-%COMP%], \n.pref-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px solid #f8f9fa;\n}\n.notif-option[_ngcontent-%COMP%]:last-child, \n.pref-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.notif-option[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.notif-option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.pref-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.pref-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #555;\n}\n.btn-goguay[_ngcontent-%COMP%] {\n  background: #bae1ff;\n  color: #1565c0;\n  font-weight: 700;\n  border-radius: 35px;\n  border: none;\n  padding: 10px;\n}\n.btn-goguay[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.btn-outline-danger[_ngcontent-%COMP%] {\n  border-radius: 35px;\n  border: 1px solid #e0b6b6;\n}\n.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background: #e0b6b6 !important;\n  color: black;\n}\n.btn-logout[_ngcontent-%COMP%] {\n  background: #2d3436;\n  color: white !important;\n  padding: 12px 30px;\n  border-radius: 35px;\n  font-weight: 600;\n}\n.btn-logout[_ngcontent-%COMP%]:hover {\n  background: #e0b6b6 !important;\n  color: black !important;\n}\n.custom-select[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid #ddd;\n  font-size: 0.9rem;\n}\n.ajustIcon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  vertical-align: middle;\n}\n.form-select[_ngcontent-%COMP%] {\n  border-radius: 35px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.custom-segment[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: 0 auto;\n  --background: #f4f5f8;\n  border-radius: 35px;\n  padding: 4px;\n}\n.custom-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --indicator-color: #b3b5e6;\n  --color: #666;\n  --color-checked: #000;\n  font-weight: 600;\n  --border-radius: 35px !important;\n}\n.notif-option[_ngcontent-%COMP%], \n.pref-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n}\n.box-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.payment-option-card[_ngcontent-%COMP%] {\n  border: 1px solid rgba(238, 238, 238, 0);\n  border-radius: 35px;\n  background: #fdfdfd;\n  transition: all 0.2s ease;\n}\n.payment-option-card[_ngcontent-%COMP%]:hover {\n  border-color: #b3b5e6;\n  background: #f8f9ff;\n}\n.payment-option-card[_ngcontent-%COMP%]   .rounded-pill-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  --min-height: 55px;\n  --padding-start: 15px;\n  --padding-end: 15px;\n  --border-radius: 35px;\n}\n.payment-option-card[_ngcontent-%COMP%]   .rounded-pill-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  display: block !important;\n  min-width: 24px;\n  min-height: 24px;\n  font-size: 24px;\n  visibility: visible !important;\n  opacity: 1 !important;\n}\n.payment-option-card[_ngcontent-%COMP%]   .rounded-pill-item[_ngcontent-%COMP%]   ion-icon.paypal-icon[_ngcontent-%COMP%] {\n  color: #003087;\n}\n.payment-option-card[_ngcontent-%COMP%]   .rounded-pill-item[_ngcontent-%COMP%]   ion-icon.card-icon[_ngcontent-%COMP%] {\n  color: #444;\n}\n.payment-option-card[_ngcontent-%COMP%]   .rounded-pill-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n}\n.list-help[_ngcontent-%COMP%]   .warning-icon[_ngcontent-%COMP%] {\n  color: #F8E196 !important;\n  font-size: 1.2rem;\n}\n.list-help[_ngcontent-%COMP%]   .help-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 10px;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: background 0.2s ease;\n  border-bottom: 1px solid #f8f9fa;\n}\n.list-help[_ngcontent-%COMP%]   .help-item[_ngcontent-%COMP%]:hover {\n  background-color: #f4f5f8;\n}\n.list-help[_ngcontent-%COMP%]   .help-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #b3b5e6;\n}\n.list-help[_ngcontent-%COMP%]   .help-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #444;\n}\n.list-help[_ngcontent-%COMP%]   .help-item[_ngcontent-%COMP%]   .fi-rr-angle-small-right[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n.list-help[_ngcontent-%COMP%]   .rating-item[_ngcontent-%COMP%] {\n  background: rgba(183, 224, 180, 0.1);\n  margin-top: 10px;\n  border: 1px dashed #b7e0b4;\n}\n.list-help[_ngcontent-%COMP%]   .rating-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.list-help[_ngcontent-%COMP%]   .rating-item[_ngcontent-%COMP%]:hover {\n  background: rgba(183, 224, 180, 0.2);\n}\n.list-help[_ngcontent-%COMP%]   .warning-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 10px;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: background 0.2s ease;\n  border-bottom: 1px solid #f8f9fa;\n}\n.list-help[_ngcontent-%COMP%]   .warning-item[_ngcontent-%COMP%]:hover {\n  background-color: #fffde8;\n}\n.list-help[_ngcontent-%COMP%]   .warning-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #444;\n}\n.list-help[_ngcontent-%COMP%]   .warning-item[_ngcontent-%COMP%]   .fi-rr-angle-small-right[_ngcontent-%COMP%] {\n  color: #ccc;\n}\nh3[_ngcontent-%COMP%]   .warning-icon[_ngcontent-%COMP%] {\n  color: #F8E196 !important;\n}\n.maricar-chat-avatar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 22px;\n  height: 22px;\n  background: #fdfbf7;\n  border: 1.5px solid #90caf9;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.maricar-chat-avatar[_ngcontent-%COMP%]   .chat-car[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #34495e;\n}\n.maricar-chat-avatar[_ngcontent-%COMP%]   .chat-sparkle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  font-size: 0.75rem;\n  color: #1565c0;\n  animation: brilloMovimiento 4s ease infinite;\n}\n.div_paypal_vinculado[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 35px;\n}\n.btn-paypal-connect[_ngcontent-%COMP%] {\n  background-color: #003087;\n  color: #ffffff !important;\n  border: 2px solid #003087;\n  border-radius: 35px;\n  padding: 0.6rem 1.75rem;\n  font-weight: 600;\n  font-size: 0.92rem;\n  width: auto;\n  max-width: auto;\n  margin: 0 auto;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.55rem;\n  box-shadow: 0 4px 12px rgba(0, 48, 135, 0.22);\n  transition:\n    background-color 0.2s ease,\n    color 0.2s ease,\n    transform 0.15s ease;\n}\n.btn-paypal-connect[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.btn-paypal-connect[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  transition: color 0.2s ease;\n}\n.btn-paypal-connect[_ngcontent-%COMP%]   .btn-paypal-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.btn-paypal-connect[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #e6f0ff;\n  color: #000000 !important;\n  transform: translateY(-1px);\n}\n.btn-paypal-connect[_ngcontent-%COMP%]:hover:not(:disabled)   span[_ngcontent-%COMP%], \n.btn-paypal-connect[_ngcontent-%COMP%]:hover:not(:disabled)   ion-icon[_ngcontent-%COMP%] {\n  color: #000000 !important;\n}\n.btn-paypal-connect[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-paypal-connect[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.paypal-linked-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.85rem 1rem;\n  border-radius: 0.75rem;\n  border: 1px solid #dee2e6;\n  background-color: #f8f9fa;\n}\n.paypal-linked-card[_ngcontent-%COMP%]   .paypal-check-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n@media (max-width: 768px) {\n  .box-section[_ngcontent-%COMP%] {\n    padding: 20px;\n    position: relative;\n    overflow: visible;\n  }\n  .boton_guardar[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n  }\n  .goguay-border[_ngcontent-%COMP%] {\n    position: relative;\n    border: none;\n    border-radius: 35px;\n    background-color: #fff;\n    overflow: hidden;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n  }\n  .goguay-border[_ngcontent-%COMP%]::before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    width: 6px;\n    background:\n      linear-gradient(\n        to bottom,\n        #ffb3ba,\n        #ffdfba,\n        #ffffba,\n        #baffc9,\n        #bae1ff,\n        #e0baff);\n    border-radius: 35px 0 0 35px;\n    z-index: 1;\n  }\n}\n/*# sourceMappingURL=ajustes-aplicacion.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AjustesAplicacionPage, [{
    type: Component,
    args: [{ selector: "app-ajustes-aplicacion", standalone: true, providers: [MessageService], imports: [
      CommonModule,
      FormsModule,
      NavbarComponent,
      IonicModule,
      ToastModule,
      MatDividerModule,
      TranslateModule,
      FormsModule,
      SpinnerComponent
    ], template: `<app-navbar [backRoute]="'/home'" [searchRoute]="'search'" [isLoggedIn]="userLoggedIn"></app-navbar>

<ion-content [fullscreen]="true">
  <div class="container py-4">
    <h1 class="text-center mb-2">
      {{ "AJUSTESAPP.TITULO" | translate }}
      <img class="ajustIcon" src="../../../assets/sistema/ajustes.gif" />
    </h1>

    <!-- Selector de Pesta\xF1as -->
    <div class="segment-wrapper mb-4">
      <ion-segment [(ngModel)]="segmentoSeleccionado" (ionChange)="onSegmentoChange()" mode="ios" class="custom-segment">
        <ion-segment-button value="app">
          <ion-label>Ajustes de App</ion-label>
        </ion-segment-button>
        <ion-segment-button value="cuenta">
          <ion-label>Ajustes de Cuenta</ion-label>
        </ion-segment-button>
      </ion-segment>
    </div>

    <!-- Contenido din\xE1mico seg\xFAn el segmento -->
    <div [ngSwitch]="segmentoSeleccionado">
      <!-- PESTA\xD1A 1: AJUSTES DE APP -->
      <div *ngSwitchCase="'app'" class="animate__animated animate__fadeIn">
        <div class="row g-4">
          <!-- Idioma -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="box-section goguay-border h-100">
              <h3>
                <i class="fi fi-rr-world me-2"></i>
                {{ "AJUSTESAPP.OPCION_IDIOMA.TITULO" | translate }}
              </h3>
              <mat-divider></mat-divider>
              <select class="form-select mt-3 custom-select" (change)="changeLanguage($event)">
                <option value="es" [selected]="selectedLanguage === 'es'">
                  Espa\xF1ol
                </option>
                <option value="en" [selected]="selectedLanguage === 'en'">
                  English
                </option>
              </select>
            </div>
          </div>

          <!-- Notificaciones -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="box-section goguay-border h-100">
              <h3>
                <i class="fi fi-rr-bell me-2"></i>
                {{ "AJUSTESAPP.OPCION_NOTIFICACION.TITULO" | translate }}
              </h3>
              <mat-divider></mat-divider>
              <div class="mt-3">
                <div class="notif-option">
                  <span>Notificaciones m\xF3vil</span>
                  <ion-toggle [(ngModel)]="notifPush" (ionChange)="guardarAjustes()"></ion-toggle>
                </div>
                <div class="notif-option">
                  <span>Email</span>
                  <ion-toggle [(ngModel)]="notifEmail" (ionChange)="guardarAjustes()"></ion-toggle>
                </div>
                <div class="notif-option">
                  <span>SMS</span>
                  <ion-toggle [(ngModel)]="notifSMS" (ionChange)="guardarAjustes()"></ion-toggle>
                </div>
                <div class="notif-option">
                  <span>Alertas en app</span>
                  <ion-toggle [(ngModel)]="notificacionesActivas" (ionChange)="guardarAjustes()"></ion-toggle>
                </div>
              </div>
            </div>
          </div>

          <!-- Visuales -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="box-section goguay-border">
              <h3>
                <i class="fi fi-rr-picture me-2"></i>
                Ajustes visuales
              </h3>
              <mat-divider></mat-divider>
              <div class="notif-option mt-3">
                <span>Mostrar imagen de cabecera</span>
                <ion-toggle [(ngModel)]="mostrarJumbotron" (ionChange)="mostrarJumbotronChange()"></ion-toggle>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="box-section goguay-border h-100">
              <h3>
                <i class="fi fi-rr-magic-wand me-2 text-primary"></i>
                Recomendaciones con IA
              </h3>
              <mat-divider></mat-divider>
              <div class="notif-option mt-3">
                <span>Activar Smart Match y sugerencias de IA</span>
                <ion-toggle [(ngModel)]="iaActiva" (ionChange)="guardarAjustesIA()"></ion-toggle>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="box-section goguay-border h-100">
              <h3>
                <div class="maricar-chat-avatar me-2">
                  <ion-icon name="car-sport-outline" class="chat-car"></ion-icon>
                  <ion-icon name="sparkles" class="chat-sparkle"></ion-icon>
                </div>
                Asistente Maricar
              </h3>
              <mat-divider></mat-divider>
              <div class="notif-option mt-3">
                <span>Activar Asistente Maricar</span>
                <ion-toggle [(ngModel)]="asistenteActiva" (ionChange)="guardarAjustesAsistente()"></ion-toggle>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- PESTA\xD1A 2: AJUSTES DE CUENTA -->
      <div *ngSwitchCase="'cuenta'" class="animate__animated animate__fadeIn">
        <div class="row g-4">
          <!-- SECCI\xD3N: PREFERENCIAS DE COBRO (Donde recibes dinero) -->
          <div class="col-12 mt-3">
            <div class="box-section goguay-border">
              <h3 class="cobros-title">
                <i class="fi fi-rr-coins me-2"></i>
                {{ 'AJUSTESAPP.METODOS_COBRO.TITULO' | translate }}
              </h3>
              <mat-divider></mat-divider>

              <div class="mt-3">
                <p class="small text-muted mb-3">\xBFD\xF3nde quieres recibir el dinero de tus viajes compartidos?</p>

                <ion-radio-group [(ngModel)]="metodoCobroPredeterminado" (ionChange)="onMetodoCobroChange()">
                  <!-- CUENTA PAYPAL -->
                  <div class="payment-option-card">
                    <ion-item lines="none" class="rounded-pill-item">
                      <ion-icon name="logo-paypal" slot="start" class="paypal-icon"></ion-icon>
                      <ion-label>PayPal</ion-label>
                      <ion-radio slot="end" value="paypal"></ion-radio>
                    </ion-item>

                    <div *ngIf="metodoCobroPredeterminado === 'paypal'" class="p-3 animate__animated animate__fadeIn">
                      <!-- Estado 1: Cuenta a\xFAn NO vinculada -->
                      <div *ngIf="!paypalVinculado" class="text-center">
                        <div id="paypal-button-container" class="paypal-sdk-wrapper"></div>
                      </div>

                      <!-- Estado 2: Cuenta YA vinculada -->
                      <div *ngIf="paypalVinculado" class="paypal-linked-card">
                        <div class="d-flex align-items-center gap-2">
                          <ion-icon name="checkmark-circle" class="text-success paypal-check-icon"></ion-icon>
                          <div class="div_paypal_vinculado">
                            <div class="fw-bold small text-dark">Cuenta PayPal vinculada</div>
                            <div class="text-muted small">{{ emailPaypal }}</div>
                          </div>
                        </div>

                        <button type="button" class="btn btn-sm btn-outline-danger rounded-pill px-3"
                          [disabled]="vinculandoPaypal" (click)="desvincularPaypal()">
                          Desvincular
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- COBRO TRANSFERENCIA BANCARIA -->
                  <div class="payment-option-card mt-2">
                    <ion-item lines="none" class="rounded-pill-item">
                      <ion-icon name="business-outline" slot="start" class="bank-icon"></ion-icon>
                      <ion-label>Transferencia Bancaria (IBAN)</ion-label>
                      <ion-radio slot="end" value="transferencia"></ion-radio>
                    </ion-item>

                    <div *ngIf="metodoCobroPredeterminado === 'transferencia'"
                      class="p-3 animate__animated animate__fadeIn">
                      <div class="form-floating mb-2">
                        <input type="text" class="form-control custom-input" id="cobroTitular"
                          placeholder="Nombre del titular" [(ngModel)]="titular_cuenta_bancaria" />
                        <label for="cobroTitular">Titular de la cuenta</label>
                      </div>
                      <div class="form-floating mb-2">
                        <input type="text" class="form-control custom-input" id="cobroIBAN" placeholder="ES00 0000..."
                          [(ngModel)]="numero_cuenta_bancaria" />
                        <label for="cobroIBAN">N\xFAmero de cuenta (IBAN)</label>
                      </div>
                    </div>
                  </div>
                </ion-radio-group>

                <button class="btn btn_bg w-100 mt-3" (click)="guardarConfiguracionCobro()">
                  Actualizar Preferencias de Cobro
                </button>
              </div>
            </div>
          </div>

          <!-- Password -->
          <div class="col-12 col-md-6">
            <div class="box-section goguay-border h-100">
              <h3>
                <i class="fi fi-rr-lock me-2"></i>
                {{ 'AJUSTESAPP.PASSWORD.TITULO' | translate }}
              </h3>
              <mat-divider></mat-divider>
              <div class="mt-3">
                <input type="password" class="form-control mb-2" placeholder="Contrase\xF1a actual"
                  [(ngModel)]="passwordActual" autocomplete="new-password" maxlength="30"
                  (input)="comprobarContrasenaActual()" />

                <input type="password" class="form-control mb-2" placeholder="Nueva contrase\xF1a"
                  [(ngModel)]="nuevaPassword1" [disabled]="!isPasswordActualValida" maxlength="30"
                  (input)="validarNuevaPassword()" />

                <input type="password" class="form-control mb-3" placeholder="Confirmar nueva contrase\xF1a"
                  [(ngModel)]="nuevaPassword2" [disabled]="!isNuevaPassword1Valida" maxlength="30"
                  (input)="validarConfirmacionPassword()" />

                <div *ngIf="errorMensaje" class="alert alert-danger py-2 small mb-3">
                  {{ errorMensaje }}
                </div>
                <div *ngIf="exitoMensaje" class="alert alert-success py-2 small mb-3">
                  {{ exitoMensaje }}
                </div>

                <button class="btn btn_bg w-100" [disabled]="!isConfirmacionPasswordValida"
                  (click)="botonCambioPassword()">
                  Actualizar Contrase\xF1a
                </button>
              </div>
            </div>
          </div>

          <!-- Eliminar Cuenta -->
          <div class="col-12 col-md-6">
            <div class="box-section border-danger h-100">
              <h3 class="text-danger">
                <i class="fi fi-rr-trash me-2"></i>
                {{ "AJUSTESAPP.ELIMINARCTA.TITULO" | translate }}
              </h3>
              <mat-divider></mat-divider>
              <div class="mt-3">
                <p class="small text-muted">{{ "AJUSTESAPP.ELIMINARCTA.INFO_ELIMINAR_CTA"| translate }}</p>
                <button class="btn btn-outline-danger w-100 mt-4" (click)="modalEliminarUsuario()">
                  {{ "BOTON.ELIMINAR_CTA" | translate }}
                </button>
              </div>
              <div *ngIf="cargandoEliminacion" class="spinner-loading-overlay">
                <div
                  class="d-flex flex-column align-items-center justify-content-center bg-white p-4 rounded-4 shadow-lg">
                  <app-spinner></app-spinner>
                  <span class="fw-bold mt-3 text-dark small">Procesando solicitud de eliminaci\xF3n...</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 mt-3">
            <div class="box-section goguay-border">
              <h3>
                <i class="fi fi-rr-triangle-warning me-3 warning-icon"></i>
                Mis Incidencias
              </h3>
              <mat-divider></mat-divider>

              <div class="list-help mt-3">
                <!-- Centro de Incidencias -->
                <div class="warning-item" (click)="irACentroDeIncidencias()">
                  <div class="d-flex align-items-center">
                    <i class="fi fi-rr-triangle-warning me-3 warning-icon"></i>
                    <span>Ver Incidencias</span>
                  </div>
                  <i class="fi fi-rr-angle-small-right"></i>
                </div>
              </div>
            </div>
          </div>

          <!-- SECCI\xD3N: AYUDA Y LEGAL -->
          <div class="col-12 mt-3">
            <div class="box-section goguay-border">
              <h3>
                <i class="fi fi-rr-interrogation me-2"></i>
                Soporte y Legal
              </h3>
              <mat-divider></mat-divider>

              <div class="list-help mt-3">
                <!-- Centro de Ayuda -->
                <div class="help-item" (click)="irACentroAyuda()">
                  <div class="d-flex align-items-center">
                    <i class="fi fi-rr-life-ring me-3"></i>
                    <span>Centro de Ayuda / FAQ</span>
                  </div>
                  <i class="fi fi-rr-angle-small-right"></i>
                </div>

                <!-- Condiciones de Uso -->
                <div class="help-item" (click)="irATerminos()">
                  <div class="d-flex align-items-center">
                    <i class="fi fi-rr-document-signed me-3"></i>
                    <span>Condiciones Generales de Uso</span>
                  </div>
                  <i class="fi fi-rr-angle-small-right"></i>
                </div>

                <!-- Valorar App -->
                <div class="help-item rating-item" (click)="valorarApp()">
                  <div class="d-flex align-items-center">
                    <i class="fi fi-rr-star me-3"></i>
                    <span>Valorar GoGuay</span>
                  </div>
                  <i class="fi fi-rr-angle-small-right"></i>
                </div>
              </div>
            </div>
          </div>

          <!-- Bot\xF3n Logout -->
          <div class="col-12 text-center mt-5">
            <button class="btn btn-logout" (click)="logout()">
              <i class="fi fi-rs-log-out me-2"></i>
              Cerrar Sesi\xF3n
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Fin NgSwitch -->

    <p-toast position="bottom-center"></p-toast>

    <div class="footer-info text-center mt-5 mb-5">
      <p class="info-text opacity-50">
        {{ "AJUSTESAPP.DERECHOS_TXT" | translate }}
        <img class="icon_logo ms-1" src="../../../assets/logo/PRIDECAR.png" />
      </p>
    </div>
  </div>
</ion-content>`, styles: ['/* src/app/pages/ajustes-aplicacion/ajustes-aplicacion.page.scss */\n.box-section {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  padding: 20px;\n  width: 100%;\n  border-radius: 15px;\n  background-color: rgba(248, 249, 250, 0.1764705882);\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.box-section-2 {\n  margin-top: 20px;\n  flex-direction: column;\n  margin-bottom: 20px;\n  padding: 20px;\n  width: 100%;\n  min-height: 300px;\n  border-radius: 15px;\n  background-color: rgba(248, 249, 250, 0.1764705882);\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  justify-content: flex-start;\n}\n.boton_guardar {\n  margin-top: 2rem;\n}\n.btn-primary {\n  background-color: #007bff;\n  border-color: #007bff;\n  padding: 10px 20px;\n  border-radius: 25px;\n  color: white;\n  transition: background-color 0.3s;\n}\n.container.text-center {\n  width: 100%;\n  max-width: 500px;\n}\n.info-text {\n  font-size: 10px;\n}\n.selectIdiomas {\n  border-radius: 15px;\n  width: 60%;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.ajustIcon {\n  height: 50px !important;\n  width: 50px !important;\n  border-radius: 50%;\n  mix-blend-mode: multiply !important;\n}\n.icon_logo {\n  height: 20px;\n  width: 20px;\n}\n.selector {\n  display: flex;\n  align-items: center;\n  position: relative;\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n}\na {\n  color: #b3b5e6 !important;\n}\n.box-section {\n  position: relative;\n  background: white;\n  border-radius: 35px;\n  padding: 20px;\n  height: 100%;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n  border: none;\n}\n.box-section h3 {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-bottom: 15px;\n  display: flex;\n  align-items: center;\n}\n.goguay-border {\n  position: relative;\n  border: none;\n  border-radius: 35px;\n  background-color: #fff;\n  overflow: hidden;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n}\n.goguay-border::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 6px;\n  background:\n    linear-gradient(\n      to bottom,\n      #ffb3ba,\n      #ffdfba,\n      #ffffba,\n      #baffc9,\n      #bae1ff,\n      #e0baff);\n  border-radius: 35px 0 0 35px;\n  z-index: 1;\n}\n.notif-option,\n.pref-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px solid #f8f9fa;\n}\n.notif-option:last-child,\n.pref-row:last-child {\n  border-bottom: none;\n}\n.notif-option span,\n.notif-option label,\n.pref-row span,\n.pref-row label {\n  font-size: 0.9rem;\n  color: #555;\n}\n.btn-goguay {\n  background: #bae1ff;\n  color: #1565c0;\n  font-weight: 700;\n  border-radius: 35px;\n  border: none;\n  padding: 10px;\n}\n.btn-goguay:disabled {\n  opacity: 0.5;\n}\n.btn-outline-danger {\n  border-radius: 35px;\n  border: 1px solid #e0b6b6;\n}\n.btn-outline-danger:hover {\n  background: #e0b6b6 !important;\n  color: black;\n}\n.btn-logout {\n  background: #2d3436;\n  color: white !important;\n  padding: 12px 30px;\n  border-radius: 35px;\n  font-weight: 600;\n}\n.btn-logout:hover {\n  background: #e0b6b6 !important;\n  color: black !important;\n}\n.custom-select {\n  border-radius: 10px;\n  border: 1px solid #ddd;\n  font-size: 0.9rem;\n}\n.ajustIcon {\n  width: 40px;\n  height: 40px;\n  vertical-align: middle;\n}\n.form-select {\n  border-radius: 35px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.custom-segment {\n  max-width: 500px;\n  margin: 0 auto;\n  --background: #f4f5f8;\n  border-radius: 35px;\n  padding: 4px;\n}\n.custom-segment ion-segment-button {\n  --indicator-color: #b3b5e6;\n  --color: #666;\n  --color-checked: #000;\n  font-weight: 600;\n  --border-radius: 35px !important;\n}\n.notif-option,\n.pref-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n}\n.box-section {\n  display: flex;\n  flex-direction: column;\n}\n.payment-option-card {\n  border: 1px solid rgba(238, 238, 238, 0);\n  border-radius: 35px;\n  background: #fdfdfd;\n  transition: all 0.2s ease;\n}\n.payment-option-card:hover {\n  border-color: #b3b5e6;\n  background: #f8f9ff;\n}\n.payment-option-card .rounded-pill-item {\n  --background: transparent;\n  --min-height: 55px;\n  --padding-start: 15px;\n  --padding-end: 15px;\n  --border-radius: 35px;\n}\n.payment-option-card .rounded-pill-item ion-icon {\n  display: block !important;\n  min-width: 24px;\n  min-height: 24px;\n  font-size: 24px;\n  visibility: visible !important;\n  opacity: 1 !important;\n}\n.payment-option-card .rounded-pill-item ion-icon.paypal-icon {\n  color: #003087;\n}\n.payment-option-card .rounded-pill-item ion-icon.card-icon {\n  color: #444;\n}\n.payment-option-card .rounded-pill-item ion-label {\n  font-weight: 500;\n  color: #333;\n}\n.list-help .warning-icon {\n  color: #F8E196 !important;\n  font-size: 1.2rem;\n}\n.list-help .help-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 10px;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: background 0.2s ease;\n  border-bottom: 1px solid #f8f9fa;\n}\n.list-help .help-item:hover {\n  background-color: #f4f5f8;\n}\n.list-help .help-item i {\n  font-size: 1.2rem;\n  color: #b3b5e6;\n}\n.list-help .help-item span {\n  font-weight: 500;\n  color: #444;\n}\n.list-help .help-item .fi-rr-angle-small-right {\n  color: #ccc;\n}\n.list-help .rating-item {\n  background: rgba(183, 224, 180, 0.1);\n  margin-top: 10px;\n  border: 1px dashed #b7e0b4;\n}\n.list-help .rating-item i {\n  color: #28a745;\n}\n.list-help .rating-item:hover {\n  background: rgba(183, 224, 180, 0.2);\n}\n.list-help .warning-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 10px;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: background 0.2s ease;\n  border-bottom: 1px solid #f8f9fa;\n}\n.list-help .warning-item:hover {\n  background-color: #fffde8;\n}\n.list-help .warning-item span {\n  font-weight: 500;\n  color: #444;\n}\n.list-help .warning-item .fi-rr-angle-small-right {\n  color: #ccc;\n}\nh3 .warning-icon {\n  color: #F8E196 !important;\n}\n.maricar-chat-avatar {\n  position: relative;\n  width: 22px;\n  height: 22px;\n  background: #fdfbf7;\n  border: 1.5px solid #90caf9;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.maricar-chat-avatar .chat-car {\n  font-size: 1.2rem;\n  color: #34495e;\n}\n.maricar-chat-avatar .chat-sparkle {\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  font-size: 0.75rem;\n  color: #1565c0;\n  animation: brilloMovimiento 4s ease infinite;\n}\n.div_paypal_vinculado {\n  width: 100%;\n  border-radius: 35px;\n}\n.btn-paypal-connect {\n  background-color: #003087;\n  color: #ffffff !important;\n  border: 2px solid #003087;\n  border-radius: 35px;\n  padding: 0.6rem 1.75rem;\n  font-weight: 600;\n  font-size: 0.92rem;\n  width: auto;\n  max-width: auto;\n  margin: 0 auto;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.55rem;\n  box-shadow: 0 4px 12px rgba(0, 48, 135, 0.22);\n  transition:\n    background-color 0.2s ease,\n    color 0.2s ease,\n    transform 0.15s ease;\n}\n.btn-paypal-connect span,\n.btn-paypal-connect ion-icon {\n  color: #ffffff !important;\n  transition: color 0.2s ease;\n}\n.btn-paypal-connect .btn-paypal-icon {\n  font-size: 1.2rem;\n}\n.btn-paypal-connect:hover:not(:disabled) {\n  background-color: #e6f0ff;\n  color: #000000 !important;\n  transform: translateY(-1px);\n}\n.btn-paypal-connect:hover:not(:disabled) span,\n.btn-paypal-connect:hover:not(:disabled) ion-icon {\n  color: #000000 !important;\n}\n.btn-paypal-connect:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-paypal-connect:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.paypal-linked-card {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.85rem 1rem;\n  border-radius: 0.75rem;\n  border: 1px solid #dee2e6;\n  background-color: #f8f9fa;\n}\n.paypal-linked-card .paypal-check-icon {\n  font-size: 1.5rem;\n}\n@media (max-width: 768px) {\n  .box-section {\n    padding: 20px;\n    position: relative;\n    overflow: visible;\n  }\n  .boton_guardar {\n    margin-top: 2rem;\n  }\n  .goguay-border {\n    position: relative;\n    border: none;\n    border-radius: 35px;\n    background-color: #fff;\n    overflow: hidden;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\n  }\n  .goguay-border::before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    width: 6px;\n    background:\n      linear-gradient(\n        to bottom,\n        #ffb3ba,\n        #ffdfba,\n        #ffffba,\n        #baffc9,\n        #bae1ff,\n        #e0baff);\n    border-radius: 35px 0 0 35px;\n    z-index: 1;\n  }\n}\n/*# sourceMappingURL=ajustes-aplicacion.page.css.map */\n'] }]
  }], () => [{ type: NavController }, { type: LanguageService }, { type: MessageService }, { type: UserServicesService }, { type: MatDialog }, { type: TranslateService }, { type: ActivatedRoute }, { type: Router }, { type: FuncionesComunes }, { type: MonederoService }], { content: [{
    type: ViewChild,
    args: [IonContent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AjustesAplicacionPage, { className: "AjustesAplicacionPage", filePath: "src/app/pages/ajustes-aplicacion/ajustes-aplicacion.page.ts", lineNumber: 45 });
})();
export {
  AjustesAplicacionPage
};
/*! Bundled license information:

@paypal/paypal-js/dist/esm/paypal-js.js:
  (*!
   * paypal-js v11.3.0 (2026-10-20T19:15:43.823Z)
   * Copyright 2020-present, PayPal, Inc. All rights reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
//# sourceMappingURL=ajustes-aplicacion.page-OHXBXY5K.js.map
