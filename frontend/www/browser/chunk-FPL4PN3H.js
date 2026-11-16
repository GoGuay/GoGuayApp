import {
  MatButton,
  MatButtonModule,
  MatDivider,
  MatIconButton
} from "./chunk-ZYMQAXGI.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "./chunk-CGCOLBWN.js";
import {
  MatIcon
} from "./chunk-H72L7N4J.js";
import {
  HttpClient,
  Router,
  URLS_API
} from "./chunk-TU2LK3TM.js";
import {
  BehaviorSubject,
  Component,
  Inject,
  Injectable,
  catchError,
  setClassMetadata,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-HLETIGG3.js";
import {
  __async
} from "./chunk-5SZB5ECT.js";

// src/app/components/notificaciones/notificaciones.component.ts
var NotificacionesComponent = class _NotificacionesComponent {
  data;
  dialogRef;
  constructor(data, dialogRef) {
    this.data = data;
    this.dialogRef = dialogRef;
  }
  ngOnInit() {
    console.log("Notificaci\xF3n: ", this.data);
  }
  close() {
    this.dialogRef.close();
  }
  static \u0275fac = function NotificacionesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificacionesComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificacionesComponent, selectors: [["app-notificaciones"]], decls: 21, vars: 2, consts: [[1, "container"], [1, "modal-header", "d-flex", "align-items-center"], [1, "d-flex", "align-items-center"], [1, "icon_notification"], [1, "ms-2"], ["mat-icon-button", "", "aria-label", "Cerrar", 1, "close-button", 3, "click"], [1, "modal-body"], [1, "advertencia"], [1, "modal-footer"], ["mat-button", "", 1, "btn_bg", 3, "click"]], template: function NotificacionesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-icon", 3);
      \u0275\u0275text(4, "mark_email_unread");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 5);
      \u0275\u0275listener("click", function NotificacionesComponent_Template_button_click_7_listener() {
        return ctx.close();
      });
      \u0275\u0275elementStart(8, "mat-icon");
      \u0275\u0275text(9, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(10, "mat-divider");
      \u0275\u0275elementStart(11, "div", 6)(12, "p");
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 7)(15, "strong");
      \u0275\u0275text(16, "* ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, " Al aceptar el mensaje marcar\xE1s la notificaci\xF3n como le\xEDda.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 8)(19, "button", 9);
      \u0275\u0275listener("click", function NotificacionesComponent_Template_button_click_19_listener() {
        return ctx.close();
      });
      \u0275\u0275text(20, "Aceptar");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.data.titulo);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.data.notificacion[0].mensaje);
    }
  }, dependencies: [MatButtonModule, MatButton, MatIconButton, MatDivider, MatIcon], styles: ["\n\n.icon_notification[_ngcontent-%COMP%] {\n  color: #cf9456;\n  font-size: 2rem;\n  width: 30px;\n  height: 30px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.modal-body[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 1rem 0;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 1rem;\n}\n.container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding: 1rem;\n}\n.advertencia[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-style: italic;\n}\n/*# sourceMappingURL=notificaciones.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificacionesComponent, [{
    type: Component,
    args: [{ selector: "app-notificaciones", standalone: true, imports: [MatButtonModule, MatDivider, MatIcon], template: '<div class="container">\n  <div class="modal-header d-flex align-items-center">\n    <div class="d-flex align-items-center">\n      <mat-icon class="icon_notification">mark_email_unread</mat-icon>\n      <h2 class="ms-2">{{ data.titulo }}</h2>\n    </div>\n    <button mat-icon-button class="close-button" (click)="close()" aria-label="Cerrar">\n      <mat-icon>close</mat-icon>\n    </button>\n  </div>\n  <mat-divider></mat-divider>\n  <div class="modal-body">\n    <p>{{ data.notificacion[0].mensaje }}</p>\n    <span class="advertencia"><strong>* </strong> Al aceptar el mensaje marcar\xE1s la notificaci\xF3n como le\xEDda.</span>\n  </div>\n  <div class="modal-footer">\n    <button mat-button class="btn_bg" (click)="close()">Aceptar</button>\n  </div>\n</div>\n', styles: ["/* src/app/components/notificaciones/notificaciones.component.scss */\n.icon_notification {\n  color: #cf9456;\n  font-size: 2rem;\n  width: 30px;\n  height: 30px;\n}\n.modal-header {\n  font-size: 1.5rem;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.modal-body {\n  font-size: 1rem;\n  margin: 1rem 0;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 1rem;\n}\n.container {\n  overflow: hidden;\n  padding: 1rem;\n}\n.advertencia {\n  font-size: 0.8rem;\n  font-style: italic;\n}\n/*# sourceMappingURL=notificaciones.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificacionesComponent, { className: "NotificacionesComponent", filePath: "src/app/components/notificaciones/notificaciones.component.ts", lineNumber: 14 });
})();

// node_modules/@capacitor/core/dist/index.js
var createCapacitorPlatforms = (win) => {
  const defaultPlatformMap = /* @__PURE__ */ new Map();
  defaultPlatformMap.set("web", { name: "web" });
  const capPlatforms = win.CapacitorPlatforms || {
    currentPlatform: { name: "web" },
    platforms: defaultPlatformMap
  };
  const addPlatform2 = (name, platform) => {
    capPlatforms.platforms.set(name, platform);
  };
  const setPlatform2 = (name) => {
    if (capPlatforms.platforms.has(name)) {
      capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
    }
  };
  capPlatforms.addPlatform = addPlatform2;
  capPlatforms.setPlatform = setPlatform2;
  return capPlatforms;
};
var initPlatforms = (win) => win.CapacitorPlatforms = createCapacitorPlatforms(win);
var CapacitorPlatforms = /* @__PURE__ */ initPlatforms(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
var addPlatform = CapacitorPlatforms.addPlatform;
var setPlatform = CapacitorPlatforms.setPlatform;
var ExceptionCode;
(function(ExceptionCode2) {
  ExceptionCode2["Unimplemented"] = "UNIMPLEMENTED";
  ExceptionCode2["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));
var CapacitorException = class extends Error {
  constructor(message, code, data) {
    super(message);
    this.message = message;
    this.code = code;
    this.data = data;
  }
};
var getPlatformId = (win) => {
  var _a, _b;
  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return "android";
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return "ios";
  } else {
    return "web";
  }
};
var createCapacitor = (win) => {
  var _a, _b, _c, _d, _e;
  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins2 = cap.Plugins = cap.Plugins || {};
  const capPlatforms = win.CapacitorPlatforms;
  const defaultGetPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };
  const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;
  const defaultIsNativePlatform = () => getPlatform() !== "web";
  const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;
  const defaultIsPluginAvailable = (pluginName) => {
    const plugin = registeredPlugins.get(pluginName);
    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      return true;
    }
    if (getPluginHeader(pluginName)) {
      return true;
    }
    return false;
  };
  const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;
  const defaultGetPluginHeader = (pluginName) => {
    var _a2;
    return (_a2 = cap.PluginHeaders) === null || _a2 === void 0 ? void 0 : _a2.find((h) => h.name === pluginName);
  };
  const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;
  const handleError = (err) => win.console.error(err);
  const pluginMethodNoop = (_target, prop, pluginName) => {
    return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
  };
  const registeredPlugins = /* @__PURE__ */ new Map();
  const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);
    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }
    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;
    const loadPluginImplementation = () => __async(null, null, function* () {
      if (!jsImplementation && platform in jsImplementations) {
        jsImplementation = typeof jsImplementations[platform] === "function" ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
      } else if (capCustomPlatform !== null && !jsImplementation && "web" in jsImplementations) {
        jsImplementation = typeof jsImplementations["web"] === "function" ? jsImplementation = yield jsImplementations["web"]() : jsImplementation = jsImplementations["web"];
      }
      return jsImplementation;
    });
    const createPluginMethod = (impl, prop) => {
      var _a2, _b2;
      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find((m) => prop === m.name);
        if (methodHeader) {
          if (methodHeader.rtype === "promise") {
            return (options) => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a2 = impl[prop]) === null || _a2 === void 0 ? void 0 : _a2.bind(impl);
        }
      } else if (impl) {
        return (_b2 = impl[prop]) === null || _b2 === void 0 ? void 0 : _b2.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };
    const createPluginMethodWrapper = (prop) => {
      let remove;
      const wrapper = (...args) => {
        const p = loadPluginImplementation().then((impl) => {
          const fn = createPluginMethod(impl, prop);
          if (fn) {
            const p2 = fn(...args);
            remove = p2 === null || p2 === void 0 ? void 0 : p2.remove;
            return p2;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });
        if (prop === "addListener") {
          p.remove = () => __async(null, null, function* () {
            return remove();
          });
        }
        return p;
      };
      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
      Object.defineProperty(wrapper, "name", {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };
    const addListener = createPluginMethodWrapper("addListener");
    const removeListener = createPluginMethodWrapper("removeListener");
    const addListenerNative = (eventName, callback) => {
      const call = addListener({ eventName }, callback);
      const remove = () => __async(null, null, function* () {
        const callbackId = yield call;
        removeListener({
          eventName,
          callbackId
        }, callback);
      });
      const p = new Promise((resolve) => call.then(() => resolve({ remove })));
      p.remove = () => __async(null, null, function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };
    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case "$$typeof":
            return void 0;
          case "toJSON":
            return () => ({});
          case "addListener":
            return pluginHeader ? addListenerNative : addListener;
          case "removeListener":
            return removeListener;
          default:
            return createPluginMethodWrapper(prop);
        }
      }
    });
    Plugins2[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: /* @__PURE__ */ new Set([
        ...Object.keys(jsImplementations),
        ...pluginHeader ? [platform] : []
      ])
    });
    return proxy;
  };
  const registerPlugin2 = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin;
  if (!cap.convertFileSrc) {
    cap.convertFileSrc = (filePath) => filePath;
  }
  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.pluginMethodNoop = pluginMethodNoop;
  cap.registerPlugin = registerPlugin2;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled;
  cap.platform = cap.getPlatform();
  cap.isNative = cap.isNativePlatform();
  return cap;
};
var initCapacitorGlobal = (win) => win.Capacitor = createCapacitor(win);
var Capacitor = /* @__PURE__ */ initCapacitorGlobal(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
var registerPlugin = Capacitor.registerPlugin;
var Plugins = Capacitor.Plugins;
var WebPlugin = class {
  constructor(config) {
    this.listeners = {};
    this.retainedEventArguments = {};
    this.windowListeners = {};
    if (config) {
      console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
      this.config = config;
    }
  }
  addListener(eventName, listenerFunc) {
    let firstListener = false;
    const listeners = this.listeners[eventName];
    if (!listeners) {
      this.listeners[eventName] = [];
      firstListener = true;
    }
    this.listeners[eventName].push(listenerFunc);
    const windowListener = this.windowListeners[eventName];
    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }
    if (firstListener) {
      this.sendRetainedArgumentsForEvent(eventName);
    }
    const remove = () => __async(this, null, function* () {
      return this.removeListener(eventName, listenerFunc);
    });
    const p = Promise.resolve({ remove });
    return p;
  }
  removeAllListeners() {
    return __async(this, null, function* () {
      this.listeners = {};
      for (const listener in this.windowListeners) {
        this.removeWindowListener(this.windowListeners[listener]);
      }
      this.windowListeners = {};
    });
  }
  notifyListeners(eventName, data, retainUntilConsumed) {
    const listeners = this.listeners[eventName];
    if (!listeners) {
      if (retainUntilConsumed) {
        let args = this.retainedEventArguments[eventName];
        if (!args) {
          args = [];
        }
        args.push(data);
        this.retainedEventArguments[eventName] = args;
      }
      return;
    }
    listeners.forEach((listener) => listener(data));
  }
  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }
  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: (event) => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }
  unimplemented(msg = "not implemented") {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }
  unavailable(msg = "not available") {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }
  removeListener(eventName, listenerFunc) {
    return __async(this, null, function* () {
      const listeners = this.listeners[eventName];
      if (!listeners) {
        return;
      }
      const index = listeners.indexOf(listenerFunc);
      this.listeners[eventName].splice(index, 1);
      if (!this.listeners[eventName].length) {
        this.removeWindowListener(this.windowListeners[eventName]);
      }
    });
  }
  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }
  removeWindowListener(handle) {
    if (!handle) {
      return;
    }
    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }
  sendRetainedArgumentsForEvent(eventName) {
    const args = this.retainedEventArguments[eventName];
    if (!args) {
      return;
    }
    delete this.retainedEventArguments[eventName];
    args.forEach((arg) => {
      this.notifyListeners(eventName, arg);
    });
  }
};
var encode = (str) => encodeURIComponent(str).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
var decode = (str) => str.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
var CapacitorCookiesPluginWeb = class extends WebPlugin {
  getCookies() {
    return __async(this, null, function* () {
      const cookies = document.cookie;
      const cookieMap = {};
      cookies.split(";").forEach((cookie) => {
        if (cookie.length <= 0)
          return;
        let [key, value] = cookie.replace(/=/, "CAP_COOKIE").split("CAP_COOKIE");
        key = decode(key).trim();
        value = decode(value).trim();
        cookieMap[key] = value;
      });
      return cookieMap;
    });
  }
  setCookie(options) {
    return __async(this, null, function* () {
      try {
        const encodedKey = encode(options.key);
        const encodedValue = encode(options.value);
        const expires = `; expires=${(options.expires || "").replace("expires=", "")}`;
        const path = (options.path || "/").replace("path=", "");
        const domain = options.url != null && options.url.length > 0 ? `domain=${options.url}` : "";
        document.cookie = `${encodedKey}=${encodedValue || ""}${expires}; path=${path}; ${domain};`;
      } catch (error) {
        return Promise.reject(error);
      }
    });
  }
  deleteCookie(options) {
    return __async(this, null, function* () {
      try {
        document.cookie = `${options.key}=; Max-Age=0`;
      } catch (error) {
        return Promise.reject(error);
      }
    });
  }
  clearCookies() {
    return __async(this, null, function* () {
      try {
        const cookies = document.cookie.split(";") || [];
        for (const cookie of cookies) {
          document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, `=;expires=${(/* @__PURE__ */ new Date()).toUTCString()};path=/`);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    });
  }
  clearAllCookies() {
    return __async(this, null, function* () {
      try {
        yield this.clearCookies();
      } catch (error) {
        return Promise.reject(error);
      }
    });
  }
};
var CapacitorCookies = registerPlugin("CapacitorCookies", {
  web: () => new CapacitorCookiesPluginWeb()
});
var readBlobAsBase64 = (blob) => __async(null, null, function* () {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result;
      resolve(base64String.indexOf(",") >= 0 ? base64String.split(",")[1] : base64String);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(blob);
  });
});
var normalizeHttpHeaders = (headers = {}) => {
  const originalKeys = Object.keys(headers);
  const loweredKeys = Object.keys(headers).map((k) => k.toLocaleLowerCase());
  const normalized = loweredKeys.reduce((acc, key, index) => {
    acc[key] = headers[originalKeys[index]];
    return acc;
  }, {});
  return normalized;
};
var buildUrlParams = (params, shouldEncode = true) => {
  if (!params)
    return null;
  const output = Object.entries(params).reduce((accumulator, entry) => {
    const [key, value] = entry;
    let encodedValue;
    let item;
    if (Array.isArray(value)) {
      item = "";
      value.forEach((str) => {
        encodedValue = shouldEncode ? encodeURIComponent(str) : str;
        item += `${key}=${encodedValue}&`;
      });
      item.slice(0, -1);
    } else {
      encodedValue = shouldEncode ? encodeURIComponent(value) : value;
      item = `${key}=${encodedValue}`;
    }
    return `${accumulator}&${item}`;
  }, "");
  return output.substr(1);
};
var buildRequestInit = (options, extra = {}) => {
  const output = Object.assign({ method: options.method || "GET", headers: options.headers }, extra);
  const headers = normalizeHttpHeaders(options.headers);
  const type = headers["content-type"] || "";
  if (typeof options.data === "string") {
    output.body = options.data;
  } else if (type.includes("application/x-www-form-urlencoded")) {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(options.data || {})) {
      params.set(key, value);
    }
    output.body = params.toString();
  } else if (type.includes("multipart/form-data") || options.data instanceof FormData) {
    const form = new FormData();
    if (options.data instanceof FormData) {
      options.data.forEach((value, key) => {
        form.append(key, value);
      });
    } else {
      for (const key of Object.keys(options.data)) {
        form.append(key, options.data[key]);
      }
    }
    output.body = form;
    const headers2 = new Headers(output.headers);
    headers2.delete("content-type");
    output.headers = headers2;
  } else if (type.includes("application/json") || typeof options.data === "object") {
    output.body = JSON.stringify(options.data);
  }
  return output;
};
var CapacitorHttpPluginWeb = class extends WebPlugin {
  /**
   * Perform an Http request given a set of options
   * @param options Options to build the HTTP request
   */
  request(options) {
    return __async(this, null, function* () {
      const requestInit = buildRequestInit(options, options.webFetchExtra);
      const urlParams = buildUrlParams(options.params, options.shouldEncodeUrlParams);
      const url = urlParams ? `${options.url}?${urlParams}` : options.url;
      const response = yield fetch(url, requestInit);
      const contentType = response.headers.get("content-type") || "";
      let { responseType = "text" } = response.ok ? options : {};
      if (contentType.includes("application/json")) {
        responseType = "json";
      }
      let data;
      let blob;
      switch (responseType) {
        case "arraybuffer":
        case "blob":
          blob = yield response.blob();
          data = yield readBlobAsBase64(blob);
          break;
        case "json":
          data = yield response.json();
          break;
        case "document":
        case "text":
        default:
          data = yield response.text();
      }
      const headers = {};
      response.headers.forEach((value, key) => {
        headers[key] = value;
      });
      return {
        data,
        headers,
        status: response.status,
        url: response.url
      };
    });
  }
  /**
   * Perform an Http GET request given a set of options
   * @param options Options to build the HTTP request
   */
  get(options) {
    return __async(this, null, function* () {
      return this.request(Object.assign(Object.assign({}, options), { method: "GET" }));
    });
  }
  /**
   * Perform an Http POST request given a set of options
   * @param options Options to build the HTTP request
   */
  post(options) {
    return __async(this, null, function* () {
      return this.request(Object.assign(Object.assign({}, options), { method: "POST" }));
    });
  }
  /**
   * Perform an Http PUT request given a set of options
   * @param options Options to build the HTTP request
   */
  put(options) {
    return __async(this, null, function* () {
      return this.request(Object.assign(Object.assign({}, options), { method: "PUT" }));
    });
  }
  /**
   * Perform an Http PATCH request given a set of options
   * @param options Options to build the HTTP request
   */
  patch(options) {
    return __async(this, null, function* () {
      return this.request(Object.assign(Object.assign({}, options), { method: "PATCH" }));
    });
  }
  /**
   * Perform an Http DELETE request given a set of options
   * @param options Options to build the HTTP request
   */
  delete(options) {
    return __async(this, null, function* () {
      return this.request(Object.assign(Object.assign({}, options), { method: "DELETE" }));
    });
  }
};
var CapacitorHttp = registerPlugin("CapacitorHttp", {
  web: () => new CapacitorHttpPluginWeb()
});

// node_modules/@capacitor/push-notifications/dist/esm/index.js
var PushNotifications = registerPlugin("PushNotifications", {});

// src/app/core/notificaciones/notificaciones.service.ts
var NotificacionesService = class _NotificacionesService {
  http;
  dialog;
  router;
  apiUrl = URLS_API.NOTIFICATIONS;
  notificacionPendiente = null;
  esCreadorDelViaje = false;
  idNotificacionResaltada = null;
  toastSubject = new BehaviorSubject([]);
  toast$ = this.toastSubject.asObservable();
  // Array interno para almacenar toasts activos
  toasts = [];
  constructor(http, dialog, router) {
    this.http = http;
    this.dialog = dialog;
    this.router = router;
  }
  enviarTokenAlServidor(token, usuarioId) {
    return this.http.post(`${this.apiUrl}/usuarios/registrar-token`, {
      token,
      usuarioId
    }).subscribe({
      next: () => console.log("Token guardado en el servidor"),
      error: (err) => console.error("Error guardando token", err)
    });
  }
  inicializarPush(usuarioId) {
    if (Capacitor.getPlatform() === "web") {
      console.warn("Push Notifications no funcionan en web.");
      return;
    }
    this.configurarListeners(usuarioId);
  }
  configurarListeners(usuarioId) {
    PushNotifications.requestPermissions().then((result) => {
      if (result.receive === "granted") {
        PushNotifications.register();
      }
    });
    PushNotifications.addListener("registration", (token) => {
      console.log("Token:", token.value);
      this.enviarTokenAlServidor(token.value, usuarioId);
    });
    PushNotifications.addListener("pushNotificationActionPerformed", (notification) => {
      this.router.navigate(["/notificaciones"]);
    });
    PushNotifications.addListener("pushNotificationReceived", (notification) => {
      this.mostrarToast({
        id: Date.now(),
        type: "info",
        mensaje: notification.body || "Nueva notificaci\xF3n",
        leida: false
      });
    });
  }
  tieneNotificacionPendiente() {
    return this.notificacionPendiente !== null && this.esCreadorDelViaje;
  }
  /**
   * Función para leer una notificación pendiente.
   * Esta función verifica si hay una notificación pendiente y si el usuario es el creador del viaje.
   * @param notificaciones -> Lista de notificaciones recibidas.
   */
  leerNotificacion(notificaciones) {
    if (this.notificacionPendiente && this.esCreadorDelViaje) {
      const notificacionConId = notificaciones.find((n) => n.mensaje === this.notificacionPendiente);
      if (notificacionConId) {
        this.mostrarToast({
          id: notificacionConId.id,
          type: "info",
          mensaje: this.notificacionPendiente,
          leida: false
        });
      } else {
        this.mostrarToast({
          id: Date.now(),
          type: "info",
          mensaje: this.notificacionPendiente,
          leida: false
        });
      }
      this.notificacionPendiente = null;
      this.esCreadorDelViaje = false;
    }
  }
  /**
   * Función para abrir la ventana de notificaciones
   * @param notificacion
   */
  mostrarNotificaciones(notificacion) {
    const titulo = "Notificaci\xF3n";
    const dialogRef = this.dialog.open(NotificacionesComponent, {
      data: { titulo, notificacion }
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }
  /**
   * Servicio para marcar notificación como leída
   * @param notificacionId
   */
  marcarNotificacionComoLeida(notificacionId) {
    this.http.put(`${this.apiUrl}/notifications/marcar_notificacion_leida/${notificacionId}`, {}).subscribe(() => console.log("Notificaci\xF3n marcada como le\xEDda"), (error) => console.error("Error al marcar como le\xEDda:", error));
  }
  /**
   * Función para obtener las notificaciones de un usuario.
   * @param usuarioId ID del usuario.
   * @returns Lista de notificaciones para el usuario.
   */
  obtenerNotificaciones(usuarioId) {
    return this.http.get(`${this.apiUrl}/notifications/obtener_notificaciones/${usuarioId}`).pipe(catchError((error) => {
      console.error("Error al obtener notificaciones:", error);
      return throwError(() => error);
    }));
  }
  /**
   * Función para recibir las notificaciones de un viaje concreto.
   *
   * @param viaje_id ID del viaje
   * @returns Lista de las notificaciones para el viaje.
   */
  obtenerNotificacionesDeUnViaje(viaje_id) {
    return this.http.get(`${this.apiUrl}/notifications/obtener_notificaciones_viaje/${viaje_id}`).pipe(catchError((error) => {
      console.error("Error al obtener notificaciones del viaje:", error);
      return throwError(() => error);
    }));
  }
  /**
   * Función para mostrar el mensaje emergente de notificación.
   * @param data
   */
  mostrarToast(data) {
    const exists = this.toasts.some((t) => t.mensaje === data.mensaje && t.type === data.type);
    if (!exists) {
      this.toasts.push(data);
      this.toastSubject.next([...this.toasts]);
    }
  }
  /**
   * Función para limpiar los mensajes almacenados en el array de toasts.
   */
  clearToasts() {
    this.toasts = [];
    this.toastSubject.next([...this.toasts]);
  }
  removeToast(toast) {
    this.toasts = this.toasts.filter((t) => t !== toast);
    this.toastSubject.next([...this.toasts]);
  }
  /**
   * Marca una notificación como leída o no leída.
   * @param notificacionId ID de la notificación.
   * @param leida Estado booleano: true = leída, false = no leída.
   */
  toggleEstadoNotificacion(notificacionId, leida) {
    return this.http.put(`${this.apiUrl}/notifications/marcar_notificacion_leida/${notificacionId}`, { leida }).pipe(catchError((error) => {
      console.error("Error al cambiar estado de la notificaci\xF3n:", error);
      return throwError(() => error);
    }));
  }
  /**
   * Envía la solicitud al servidor para compartir el número de teléfono.
   * Esto disparará la notificación push al receptor en el backend.
   * @param data Objeto con conversacion_id y emisor_id
   */
  compartirTelefono(data) {
    return this.http.post(`${this.apiUrl}/chat/compartir-telefono`, data).pipe(catchError((error) => {
      console.error("Error al compartir el tel\xE9fono:", error);
      return throwError(() => error);
    }));
  }
  /**
   * Solicita al servidor eliminar los mensajes de sistema que comparten
   * el teléfono del usuario en una conversación específica.
   * @param data Objeto con conversacion_id y emisor_id
   */
  dejarDeCompartirTelefono(data) {
    return this.http.delete(`${this.apiUrl}/chat/dejar-de-compartir`, { body: data }).pipe(catchError((error) => {
      console.error("Error al dejar de compartir tel\xE9fono:", error);
      return throwError(() => error);
    }));
  }
  /**
   * Función para eliminar una notificación específica por su ID.
   * @param id --> ID de la notificación a eliminar.
   * @returns --> Devuelve un Observable con la respuesta del backend.
   */
  eliminarNotificacion(id) {
    return this.http.delete(`${this.apiUrl}/notifications/eliminar_notificacion/${id}`);
  }
  /**
   * Función para eliminar todas las notificaciones de un usuario.
   * @param usuarioId --> ID del usuario cuyas notificaciones se quieren eliminar.
   * @returns --> Devuelve un Observable con la respuesta del backend.
   */
  eliminarTodasNotificaciones(usuarioId) {
    return this.http.delete(`${this.apiUrl}/notifications/eliminar_todas_notificaciones/${usuarioId}`);
  }
  /**
   * Función para marcar todas las notificaciones de un usuario como leídas.
   * @param usuarioId --> ID del usuario cuyas notificaciones se quieren marcar como leídas.
   * @returns --> Devuelve un Observable con la respuesta del backend.
   */
  marcarTodasComoLeidas(usuarioId) {
    return this.http.put(`${this.apiUrl}/notifications/marcar_todas_leidas/${usuarioId}`, {});
  }
  static \u0275fac = function NotificacionesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificacionesService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(MatDialog), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificacionesService, factory: _NotificacionesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificacionesService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: MatDialog }, { type: Router }], null);
})();

export {
  NotificacionesService
};
/*! Bundled license information:

@capacitor/core/dist/index.js:
  (*! Capacitor: https://capacitorjs.com/ - MIT License *)
*/
//# sourceMappingURL=chunk-FPL4PN3H.js.map
