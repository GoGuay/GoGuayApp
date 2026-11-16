import {
  BaseStyle,
  F,
  G,
  Gt,
  PrimeNG,
  StyleScope,
  _e,
  a,
  b as b2,
  base_default,
  be,
  markInstance,
  rt,
  showInvalidLicenseBanner,
  ue,
  wt,
  xt,
  zindexutils_default
} from "./chunk-3QY534IW.js";
import {
  A,
  C,
  K,
  MessageService,
  SharedModule,
  b,
  c,
  l,
  m,
  p,
  x
} from "./chunk-Q5CK7R7A.js";
import {
  CommonModule,
  DomSanitizer,
  NgTemplateOutlet,
  isPlatformServer
} from "./chunk-XCBA4FSK.js";
import {
  APP_ID,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DOCUMENT,
  Directive,
  ElementRef,
  HostBinding,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  Renderer2,
  SecurityContext,
  ViewEncapsulation,
  afterRenderEffect,
  booleanAttribute,
  computed,
  contentChild,
  effect,
  inject,
  input,
  isSignal,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  untracked,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4LZZ5H7X.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-MP5LG4CB.js";

// node_modules/primeng/node_modules/@primeuix/utils/dist/mergeprops/index.mjs
var x2 = Object.defineProperty;
var d = Object.getOwnPropertySymbols;
var c2 = Object.prototype.hasOwnProperty;
var y = Object.prototype.propertyIsEnumerable;
var p2 = (t2, o2, e4) => o2 in t2 ? x2(t2, o2, { enumerable: true, configurable: true, writable: true, value: e4 }) : t2[o2] = e4;
var i = (t2, o2) => {
  for (var e4 in o2 || (o2 = {})) c2.call(o2, e4) && p2(t2, e4, o2[e4]);
  if (d) for (var e4 of d(o2)) y.call(o2, e4) && p2(t2, e4, o2[e4]);
  return t2;
};
function f(...t2) {
  let o2 = [];
  for (let e4 = 0; e4 < t2.length; e4++) {
    let a4 = t2[e4];
    if (!a4) continue;
    let r = typeof a4;
    if (r === "string" || r === "number") o2.push(a4);
    else if (r === "object") {
      let n = Array.isArray(a4) ? [f(...a4)] : Object.entries(a4).map(([s, u]) => u ? s : void 0);
      o2 = n.length ? o2.concat(n.filter((s) => !!s)) : o2;
    }
  }
  return o2.join(" ").trim();
}
function l2(t2) {
  return typeof t2 == "function" && "call" in t2 && "apply" in t2;
}
function m2({ skipUndefined: t2 = false }, ...o2) {
  return o2 == null ? void 0 : o2.reduce((e4, a4 = {}) => {
    for (let r in a4) {
      let n = a4[r];
      if (!(t2 && n === void 0)) if (r === "style") e4.style = i(i({}, e4.style), a4.style);
      else if (r === "class" || r === "className") e4[r] = f(e4[r], a4[r]);
      else if (l2(n)) {
        let s = e4[r];
        e4[r] = s ? (...u) => {
          s(...u), n(...u);
        } : n;
      } else e4[r] = n;
    }
    return e4;
  }, {});
}
function P(...t2) {
  return m2({ skipUndefined: false }, ...t2);
}

// node_modules/primeng/fesm2022/primeng-dom.mjs
function blockBodyScroll(options) {
  xt(__spreadValues({
    variableName: _e("scrollbar.width").name
  }, options));
}
function unblockBodyScroll(options) {
  wt(__spreadValues({
    variableName: _e("scrollbar.width").name
  }, options));
}
function getShadowRoot(el) {
  return Gt(b2(el) ?? el);
}

// node_modules/primeng/fesm2022/primeng-useid.mjs
var UseId = class UseId2 {
  counters = /* @__PURE__ */ new Map();
  scope = ((appId) => appId === "ng" ? "" : `${appId}_`)(inject(APP_ID));
  next(prefix = "pui_id_") {
    const value = (this.counters.get(prefix) ?? 0) + 1;
    this.counters.set(prefix, value);
    return `${prefix}${this.scope}${value}`;
  }
  static \u0275fac = function UseId_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || UseId2)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: UseId2,
    factory: UseId2.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UseId, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-basecomponent.mjs
var BaseComponentStyle = class BaseComponentStyle2 extends BaseStyle {
  name = "common";
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseComponentStyle_BaseFactory = void 0;
    return function BaseComponentStyle_Factory(__ngFactoryType__) {
      return (\u0275BaseComponentStyle_BaseFactory || (\u0275BaseComponentStyle_BaseFactory = \u0275\u0275getInheritedFactory(BaseComponentStyle2)))(__ngFactoryType__ || BaseComponentStyle2);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: BaseComponentStyle2,
    factory: BaseComponentStyle2.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseComponentStyle, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
var PARENT_INSTANCE = new InjectionToken("PARENT_INSTANCE");
var BaseComponent = class BaseComponent2 {
  document = inject(DOCUMENT);
  platformId = inject(PLATFORM_ID);
  el = inject(ElementRef);
  injector = inject(Injector);
  cd = inject(ChangeDetectorRef);
  renderer = inject(Renderer2);
  config = inject(PrimeNG);
  $parentInstance = inject(PARENT_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  baseComponentStyle = inject(BaseComponentStyle);
  baseStyle = inject(BaseStyle);
  $styleScope = inject(StyleScope);
  scopedStyleEl;
  _scopedStyleName;
  parent = this.$params.parent;
  cn = a;
  _themeScopedListener;
  _instanceStyles;
  themeChangeListenerMap = /* @__PURE__ */ new Map();
  dt = input(...ngDevMode ? [void 0, { debugName: "dt" }] : (
    /* istanbul ignore next */
    []
  ));
  unstyled = input(...ngDevMode ? [void 0, { debugName: "unstyled" }] : (
    /* istanbul ignore next */
    []
  ));
  pt = input(...ngDevMode ? [void 0, { debugName: "pt" }] : (
    /* istanbul ignore next */
    []
  ));
  ptOptions = input(...ngDevMode ? [void 0, { debugName: "ptOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  $useId = inject(UseId);
  $attrSelector = this.$useId.next("pc");
  get $name() {
    return this["componentName"] || "UnknownComponent";
  }
  get $hostName() {
    const hostName = this["hostName"];
    return isSignal(hostName) ? hostName() : hostName;
  }
  get $el() {
    var _a;
    return (_a = this.el) == null ? void 0 : _a.nativeElement;
  }
  directivePT = signal(void 0, ...ngDevMode ? [{ debugName: "directivePT" }] : (
    /* istanbul ignore next */
    []
  ));
  directiveUnstyled = signal(void 0, ...ngDevMode ? [{ debugName: "directiveUnstyled" }] : (
    /* istanbul ignore next */
    []
  ));
  $unstyled = computed(() => {
    var _a;
    return this.unstyled() ?? this.directiveUnstyled() ?? ((_a = this.config) == null ? void 0 : _a.unstyled()) ?? false;
  }, ...ngDevMode ? [{ debugName: "$unstyled" }] : (
    /* istanbul ignore next */
    []
  ));
  $preflight = computed(() => {
    var _a;
    return !this.$unstyled() && ((_a = this.config) == null ? void 0 : _a.preflight()) === true;
  }, ...ngDevMode ? [{ debugName: "$preflight" }] : (
    /* istanbul ignore next */
    []
  ));
  $pt = computed(() => x(this.pt() || this.directivePT(), this.$params), ...ngDevMode ? [{ debugName: "$pt" }] : (
    /* istanbul ignore next */
    []
  ));
  get $globalPT() {
    var _a;
    return this._getPT((_a = this.config) == null ? void 0 : _a.pt(), void 0, (value) => x(value, this.$params));
  }
  get $defaultPT() {
    var _a;
    return this._getPT((_a = this.config) == null ? void 0 : _a.pt(), void 0, (value) => this._getOptionValue(value, this.$hostName || this.$name, this.$params) || x(value, this.$params));
  }
  _$styleCache;
  get $style() {
    if (!this._$styleCache) this._$styleCache = __spreadValues(__spreadValues({
      theme: void 0,
      css: void 0,
      classes: void 0,
      inlineStyles: void 0
    }, (this._getHostInstance(this) || {}).$style), this["_componentStyle"]);
    return this._$styleCache;
  }
  get $styleOptions() {
    var _a;
    return { nonce: (_a = this.config) == null ? void 0 : _a.csp().nonce };
  }
  _$paramsCache;
  get $params() {
    if (!this._$paramsCache) {
      const parentInstance = this._getHostInstance(this) || this.$parentInstance;
      this._$paramsCache = {
        instance: this,
        parent: { instance: parentInstance }
      };
    }
    return this._$paramsCache;
  }
  onInit() {
  }
  onChanges(_changes) {
  }
  onDoCheck() {
  }
  onAfterContentInit() {
  }
  onAfterContentChecked() {
  }
  onAfterViewInit() {
  }
  onAfterViewChecked() {
  }
  onDestroy() {
  }
  constructor() {
    effect((onCleanup) => {
      if (this.document && !isPlatformServer(this.platformId)) {
        if (this.dt()) {
          this._loadScopedThemeStyles(this.dt());
          this._themeScopedListener = () => this._loadScopedThemeStyles(this.dt());
          this._themeChangeListener("_themeScopedListener", this._themeScopedListener);
        } else this._unloadScopedThemeStyles();
      }
      onCleanup(() => {
        this._offThemeChangeListener("_themeScopedListener");
      });
    });
    effect((onCleanup) => {
      if (this.document && !isPlatformServer(this.platformId)) {
        if (!this.$unstyled()) {
          this._loadCoreStyles();
          this._themeChangeListener("_loadCoreStyles", this._loadCoreStyles);
        }
      }
      onCleanup(() => {
        this._offThemeChangeListener("_loadCoreStyles");
      });
    });
    this._hook("onBeforeInit");
  }
  ngOnInit() {
    this._$paramsCache = void 0;
    this._$styleCache = void 0;
    this.$styleScope.batch(() => {
      this._loadCoreStyles();
      this._loadStyles();
      this.$styleScope.connect(this.$el, this.injector);
    });
    this.onInit();
    this._hook("onInit");
  }
  ngOnChanges(changes) {
    this.onChanges(changes);
    this._hook("onChanges", changes);
  }
  ngDoCheck() {
    this.onDoCheck();
    this._hook("onDoCheck");
  }
  ngAfterContentInit() {
    this.onAfterContentInit();
    this._hook("onAfterContentInit");
  }
  ngAfterContentChecked() {
    this.onAfterContentChecked();
    this._hook("onAfterContentChecked");
  }
  ngAfterViewInit() {
    var _a;
    this.$markInstance(this.$el);
    if (((_a = this.config) == null ? void 0 : _a.verified()) === false) showInvalidLicenseBanner();
    this.onAfterViewInit();
    this._hook("onAfterViewInit");
  }
  ngAfterViewChecked() {
    this.onAfterViewChecked();
    this._hook("onAfterViewChecked");
  }
  ngOnDestroy() {
    var _a;
    this._removeThemeListeners();
    this._unloadScopedThemeStyles();
    this.onDestroy();
    if (this.$styleScope.isolated) {
      (_a = this._instanceStyles) == null ? void 0 : _a.forEach((name) => this.$styleScope.removeInstanceStyle(name));
      this._instanceStyles = void 0;
    }
    this._hook("onDestroy");
  }
  _mergeProps(fn, ...args) {
    return m(fn) ? fn(...args) : P(...args);
  }
  _getHostInstance(instance) {
    return instance ? this.$hostName ? this.$name === this.$hostName ? instance : this._getHostInstance(instance.$parentInstance) : instance.$parentInstance : void 0;
  }
  _getPropValue(name) {
    var _a;
    return this[name] || ((_a = this._getHostInstance(this)) == null ? void 0 : _a[name]);
  }
  _getOptionValue(options, key = "", params = {}) {
    return K(options, key, params);
  }
  _hook(hookName, ...args) {
    var _a;
    if (this.$hostName) return;
    if (!this.pt() && !this.directivePT() && !((_a = this.config) == null ? void 0 : _a.pt())) return;
    const selfHook = this._usePT(this._getPT(this.$pt(), this.$name), this._getOptionValue, `hooks.${hookName}`);
    const defaultHook = this._useDefaultPT(this._getOptionValue, `hooks.${hookName}`);
    selfHook == null ? void 0 : selfHook(...args);
    defaultHook == null ? void 0 : defaultHook(...args);
  }
  get $theme() {
    return this.$styleScope.theme;
  }
  get $base() {
    return this.$styleScope.coreStyleNames ?? base_default;
  }
  _load() {
    if (!this.$base.isStyleNameLoaded("base")) {
      this.baseStyle.loadBaseCSS(this.$styleOptions);
      this._loadGlobalStyles();
      this.$base.setLoadedStyleName("base");
    }
    if (this.$preflight() && !this.$base.isStyleNameLoaded("preflight")) {
      this.baseStyle.loadPreflight(this.$styleOptions);
      this.$base.setLoadedStyleName("preflight");
    }
    this._loadThemeStyles();
  }
  _loadStyles() {
    this._load();
    this._themeChangeListener("_load", () => this._load());
  }
  _loadGlobalStyles() {
    const globalCSS = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
    if (l(globalCSS)) this.baseStyle.load(globalCSS, __spreadValues({
      name: "global"
    }, this.$styleOptions), (computedStyle) => this.$styleScope.scopeCSS(computedStyle));
  }
  _loadCoreStyles() {
    var _a, _b;
    if (!this.$base.isStyleNameLoaded((_a = this.$style) == null ? void 0 : _a.name) && ((_b = this.$style) == null ? void 0 : _b.name)) {
      this.baseComponentStyle.loadCSS(this.$styleOptions);
      this.$style.loadCSS(this.$styleOptions);
      this.$base.setLoadedStyleName(this.$style.name);
    }
  }
  _loadThemeStyles() {
    var _a, _b, _c;
    if (this.$unstyled()) return;
    if (((_a = this.config) == null ? void 0 : _a.theme()) !== "none") this._loadThemeSheets();
    if (!this.$theme.isStyleNameLoaded("layer-order")) {
      const layerOrder = G(this.$preflight() ? F : void 0, (_c = (_b = this.$style) == null ? void 0 : _b.getLayerOrderThemeCSS) == null ? void 0 : _c.call(_b));
      this.baseStyle.load(layerOrder, __spreadValues({
        name: "layer-order",
        first: true
      }, this.$styleOptions));
      this.$theme.setLoadedStyleName("layer-order");
    }
  }
  _loadThemeSheets() {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j;
    if (!this.$theme.isStyleNameLoaded("common")) {
      const { primitive, semantic, global, style: style3 } = ((_b = (_a = this.$style) == null ? void 0 : _a.getCommonTheme) == null ? void 0 : _b.call(_a)) || {};
      this.baseStyle.load(primitive == null ? void 0 : primitive.css, __spreadValues({
        name: "primitive-variables",
        variables: true,
        raw: true
      }, this.$styleOptions));
      this.baseStyle.load(semantic == null ? void 0 : semantic.css, __spreadValues({
        name: "semantic-variables",
        variables: true,
        raw: true
      }, this.$styleOptions));
      this.baseStyle.load(global == null ? void 0 : global.css, __spreadValues({
        name: "global-variables",
        variables: true,
        raw: true
      }, this.$styleOptions));
      this.baseStyle.loadBaseStyle(__spreadValues({
        name: "global-style"
      }, this.$styleOptions), style3);
      this.$theme.setLoadedStyleName("common");
    }
    if (!this.$theme.isStyleNameLoaded((_c = this.$style) == null ? void 0 : _c.name) && ((_d = this.$style) == null ? void 0 : _d.name)) {
      const { css, style: style3 } = ((_f = (_e2 = this.$style) == null ? void 0 : _e2.getComponentTheme) == null ? void 0 : _f.call(_e2)) || {};
      this.baseStyle.load(css, __spreadValues({
        name: `${(_g = this.$style) == null ? void 0 : _g.name}-variables`,
        variables: true,
        raw: true
      }, this.$styleOptions));
      (_i = this.$style) == null ? void 0 : _i.loadStyle(__spreadValues({
        name: `${(_h = this.$style) == null ? void 0 : _h.name}-style`
      }, this.$styleOptions), style3);
      this.$theme.setLoadedStyleName((_j = this.$style) == null ? void 0 : _j.name);
    }
  }
  _loadScopedThemeStyles(preset) {
    var _a, _b, _c, _d, _e2, _f, _g;
    if (((_c = (_b = (_a = this.config) == null ? void 0 : _a.theme()) == null ? void 0 : _b.options) == null ? void 0 : _c.cssVariables) === false && ((_d = this.$style) == null ? void 0 : _d.name)) {
      if (this.$theme.addScopedToken({ [this.$style.name]: preset })) {
        this.$theme.deleteLoadedStyleName(this.$style.name);
        this._loadThemeStyles();
      }
    }
    const { css } = ((_f = (_e2 = this.$style) == null ? void 0 : _e2.getPresetTheme) == null ? void 0 : _f.call(_e2, preset, this.$instanceSelector)) || {};
    const scopedStyle = this.baseStyle.load(css, __spreadValues({
      name: `${this.$attrSelector}-${(_g = this.$style) == null ? void 0 : _g.name}`,
      raw: true
    }, this.$styleOptions));
    this._scopedStyleName = (scopedStyle == null ? void 0 : scopedStyle.name) ?? this._scopedStyleName;
    this.scopedStyleEl = scopedStyle == null ? void 0 : scopedStyle.el;
  }
  _unloadScopedThemeStyles() {
    if (this._scopedStyleName === void 0) return;
    this.baseStyle.useStyle.remove(this._scopedStyleName, this.scopedStyleEl);
    this._scopedStyleName = void 0;
    this.scopedStyleEl = void 0;
  }
  _themeChangeListener(id, callback = () => {
  }) {
    this._offThemeChangeListener(id);
    const hold = callback.bind(this);
    this.themeChangeListenerMap.set(id, hold);
    this.$styleScope.service.on("theme:change", hold);
  }
  _removeThemeListeners() {
    this._offThemeChangeListener("_themeScopedListener");
    this._offThemeChangeListener("_loadCoreStyles");
    this._offThemeChangeListener("_load");
  }
  _offThemeChangeListener(id) {
    if (this.themeChangeListenerMap.has(id)) {
      this.$styleScope.service.off("theme:change", this.themeChangeListenerMap.get(id));
      this.themeChangeListenerMap.delete(id);
    }
  }
  _getPTValue(obj = {}, key = "", params = {}, searchInDefaultPT = true) {
    var _a, _b, _c;
    const searchOut = /./g.test(key) && !!params[key.split(".")[0]];
    const { mergeSections = true, mergeProps: useMergeProps = false } = ((_a = this._getPropValue("ptOptions")) == null ? void 0 : _a()) || ((_c = (_b = this.config) == null ? void 0 : _b["ptOptions"]) == null ? void 0 : _c.call(_b)) || {};
    const global = searchInDefaultPT ? searchOut ? this._useGlobalPT(this._getPTClassValue, key, params) : this._useDefaultPT(this._getPTClassValue, key, params) : void 0;
    const self = searchOut ? void 0 : this._usePT(this._getPT(obj, this.$hostName || this.$name), this._getPTClassValue, key, __spreadProps(__spreadValues({}, params), {
      global: global || {}
    }));
    const datasets = this._getPTDatasets(key);
    return mergeSections || !mergeSections && self ? useMergeProps ? this._mergeProps(useMergeProps, global, self, datasets) : __spreadValues(__spreadValues(__spreadValues({}, global), self), datasets) : __spreadValues(__spreadValues({}, self), datasets);
  }
  _getPTDatasets(key = "") {
    var _a, _b;
    const datasetPrefix = "data-pc-";
    const isExtended = key === "root" && l((_a = this.$pt()) == null ? void 0 : _a["data-pc-section"]);
    return key !== "transition" && __spreadProps(__spreadValues({}, key === "root" && __spreadProps(__spreadValues({
      [`${datasetPrefix}name`]: C(isExtended ? (_b = this.$pt()) == null ? void 0 : _b["data-pc-section"] : this.$name)
    }, isExtended && { [`${datasetPrefix}extend`]: C(this.$name) }), {
      "data-pc-id": this.$attrSelector,
      [this.$attrSelector]: ""
    })), {
      [`${datasetPrefix}section`]: C(key.includes(".") ? key.split(".").at(-1) ?? "" : key)
    });
  }
  _getPTClassValue(options, key, params) {
    const value = this._getOptionValue(options, key, params);
    return c(value) || A(value) ? { class: value } : value;
  }
  _getPT(pt, key = "", callback) {
    const getValue = (value, checkSameKey = false) => {
      const computedValue = callback ? callback(value) : value;
      const _key = C(key);
      const _cKey = C(this.$hostName || this.$name);
      return (checkSameKey ? _key !== _cKey ? computedValue == null ? void 0 : computedValue[_key] : void 0 : computedValue == null ? void 0 : computedValue[_key]) ?? computedValue;
    };
    return pt != null && Object.prototype.hasOwnProperty.call(pt, "_usept") ? {
      _usept: pt["_usept"],
      originalValue: getValue(pt.originalValue),
      value: getValue(pt.value)
    } : getValue(pt, true);
  }
  _usePT(pt, callback, key, params) {
    var _a;
    const fn = (value) => callback == null ? void 0 : callback.call(this, value, key, params);
    if (pt != null && Object.prototype.hasOwnProperty.call(pt, "_usept")) {
      const { mergeSections = true, mergeProps: useMergeProps = false } = pt["_usept"] || ((_a = this.config) == null ? void 0 : _a["ptOptions"]()) || {};
      const originalValue = fn(pt.originalValue);
      const value = fn(pt.value);
      if (originalValue === void 0 && value === void 0) return void 0;
      else if (c(value)) return value;
      else if (c(originalValue)) return originalValue;
      return mergeSections || !mergeSections && value ? useMergeProps ? this._mergeProps(useMergeProps, originalValue, value) : __spreadValues(__spreadValues({}, originalValue), value) : value;
    }
    return fn(pt);
  }
  _useGlobalPT(callback, key, params) {
    return this._usePT(this.$globalPT, callback, key, params);
  }
  _useDefaultPT(callback, key, params) {
    return this._usePT(this.$defaultPT, callback, key, params);
  }
  ptm(key = "", params = {}) {
    return this._getPTValue(this.$pt(), key, __spreadValues(__spreadValues({}, this.$params), params));
  }
  ptms(keys, params = {}) {
    return keys.reduce((acc, arg) => {
      acc = P(acc, this.ptm(arg, params)) || {};
      return acc;
    }, {});
  }
  ptmo(obj = {}, key = "", params = {}) {
    return this._getPTValue(obj, key, __spreadValues({
      instance: this
    }, params), false);
  }
  cx(key, params = {}) {
    return !this.$unstyled() ? this.$styleScope.pcn(this._getOptionValue(this.$style.classes, key, __spreadValues(__spreadValues({}, this.$params), params))) : void 0;
  }
  pcn(...classes3) {
    return this.$styleScope.pcn(...classes3);
  }
  psel(selector) {
    return this.$styleScope.psel(selector);
  }
  get $bodyScrollOptions() {
    if (!this.$styleScope.isolated && this.$styleScope.classPrefix() === "p") return void 0;
    return {
      className: this.pcn("p-overflow-hidden"),
      variableName: this.$styleScope.resolvers.$dt("scrollbar.width").name
    };
  }
  $blockBodyScroll() {
    const options = this.$bodyScrollOptions;
    blockBodyScroll(options);
    this.$styleScope.lockBodyScroll(options);
  }
  $unblockBodyScroll() {
    unblockBodyScroll(this.$bodyScrollOptions);
    this.$styleScope.unlockBodyScroll();
  }
  sx(key = "", when = true, params = {}) {
    if (when) {
      const self = this._getOptionValue(this.$style.inlineStyles, key, __spreadValues(__spreadValues({}, this.$params), params));
      return __spreadValues(__spreadValues({}, this._getOptionValue(this.baseComponentStyle.inlineStyles, key, __spreadValues(__spreadValues({}, this.$params), params))), self);
    }
  }
  $markInstance(el) {
    markInstance(el, this.$attrSelector);
  }
  get $instanceSelector() {
    return `[data-pc-id~="${this.$attrSelector}"]`;
  }
  $keyedId(id) {
    return this.$styleScope.keyedId(id);
  }
  $isolatedStyle(name, css) {
    var _a, _b, _c;
    const id = `${this.$attrSelector}-${name}`;
    if (css === null) {
      this.$styleScope.removeInstanceStyle(id);
      (_a = this._instanceStyles) == null ? void 0 : _a.delete(id);
      return;
    }
    this.$styleScope.setInstanceStyle(id, css, (_c = (_b = this.config) == null ? void 0 : _b.csp()) == null ? void 0 : _c.nonce);
    (this._instanceStyles ??= /* @__PURE__ */ new Set()).add(id);
  }
  $overlayParent(target, overlay) {
    return this.$styleScope.overlayParent(target, overlay);
  }
  translate(key, subKey) {
    const value = this.config.getTranslation(key);
    return subKey ? value == null ? void 0 : value[subKey] : value;
  }
  static \u0275fac = function BaseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BaseComponent2)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: BaseComponent2,
    inputs: {
      dt: [1, "dt"],
      unstyled: [1, "unstyled"],
      pt: [1, "pt"],
      ptOptions: [1, "ptOptions"]
    },
    features: [\u0275\u0275ProvidersFeature([BaseComponentStyle, BaseStyle]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseComponent, [{
    type: Directive,
    args: [{
      standalone: true,
      providers: [BaseComponentStyle, BaseStyle]
    }]
  }], () => [], {
    dt: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "dt",
        required: false
      }]
    }],
    unstyled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "unstyled",
        required: false
      }]
    }],
    pt: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pt",
        required: false
      }]
    }],
    ptOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "ptOptions",
        required: false
      }]
    }]
  });
})();

// node_modules/primeng/fesm2022/primeng-bind.mjs
var SANITIZED_SINKS = {
  innerhtml: SecurityContext.HTML,
  srcdoc: SecurityContext.HTML,
  href: SecurityContext.URL,
  src: SecurityContext.URL,
  action: SecurityContext.URL,
  formaction: SecurityContext.URL
};
var REJECTED_SINKS = /* @__PURE__ */ new Set(["outerhtml"]);
var Bind = class Bind2 {
  pBind = input(void 0, ...ngDevMode ? [{ debugName: "pBind" }] : (
    /* istanbul ignore next */
    []
  ));
  _attrs = signal(void 0, ...ngDevMode ? [{ debugName: "_attrs" }] : (
    /* istanbul ignore next */
    []
  ));
  attrs = computed(() => this._attrs() || this.pBind(), ...ngDevMode ? [{ debugName: "attrs" }] : (
    /* istanbul ignore next */
    []
  ));
  styles = computed(() => {
    var _a;
    return (_a = this.attrs()) == null ? void 0 : _a.style;
  }, ...ngDevMode ? [{ debugName: "styles" }] : (
    /* istanbul ignore next */
    []
  ));
  classes = computed(() => {
    var _a;
    return a((_a = this.attrs()) == null ? void 0 : _a.class);
  }, ...ngDevMode ? [{ debugName: "classes" }] : (
    /* istanbul ignore next */
    []
  ));
  listeners = [];
  el = inject(ElementRef);
  renderer = inject(Renderer2);
  sanitizer = inject(DomSanitizer);
  constructor() {
    effect(() => {
      const attrs = this.attrs() || {};
      const rest = Object.fromEntries(Object.entries(attrs).filter(([key]) => key !== "style" && key !== "class"));
      for (const [key, value] of Object.entries(rest)) {
        const normalizedKey = key.toLowerCase();
        if (normalizedKey.startsWith("on")) {
          if (typeof value === "function") {
            const eventName = normalizedKey.slice(2);
            if (!this.listeners.some((l3) => l3.eventName === eventName)) {
              const unlisten = this.renderer.listen(this.el.nativeElement, eventName, value);
              this.listeners.push({
                eventName,
                unlisten
              });
            }
          }
        } else if (value === null || value === void 0) this.renderer.removeAttribute(this.el.nativeElement, key);
        else if (REJECTED_SINKS.has(normalizedKey)) continue;
        else if (SANITIZED_SINKS[normalizedKey] !== void 0) {
          const safe = this.sanitizer.sanitize(SANITIZED_SINKS[normalizedKey], value.toString()) ?? "";
          this.renderer.setAttribute(this.el.nativeElement, key, safe);
          if (key in this.el.nativeElement) this.el.nativeElement[key] = safe;
        } else if (key === "data-pc-id") markInstance(this.el.nativeElement, value.toString());
        else {
          this.renderer.setAttribute(this.el.nativeElement, key, value.toString());
          if (key in this.el.nativeElement) this.el.nativeElement[key] = value;
        }
      }
    });
  }
  ngOnDestroy() {
    this.clearListeners();
  }
  setAttrs(attrs) {
    if (!b(this._attrs(), attrs)) this._attrs.set(attrs);
  }
  clearListeners() {
    this.listeners.forEach(({ unlisten }) => unlisten());
    this.listeners = [];
  }
  static \u0275fac = function Bind_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Bind2)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: Bind2,
    selectors: [["", "pBind", ""]],
    hostVars: 4,
    hostBindings: function Bind_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.styles());
        \u0275\u0275classMap(ctx.classes());
      }
    },
    inputs: {
      pBind: [1, "pBind"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Bind, [{
    type: Directive,
    args: [{
      selector: "[pBind]",
      standalone: true,
      host: {
        "[style]": "styles()",
        "[class]": "classes()"
      }
    }]
  }], () => [], { pBind: [{
    type: Input,
    args: [{
      isSignal: true,
      alias: "pBind",
      required: false
    }]
  }] });
})();
var BindModule = class BindModule2 {
  static \u0275fac = function BindModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BindModule2)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: BindModule2,
    imports: [Bind],
    exports: [Bind]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BindModule, [{
    type: NgModule,
    args: [{
      imports: [Bind],
      exports: [Bind]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/toast/index.mjs
var style = `
    .p-toast {
        width: dt('toast.width');
        white-space: pre-line;
        word-break: break-word;
    }

    .p-toast-message {
        --px-offset-y: calc(var(--px-swipe-amount-y) + (var(--px-toast-offset) + var(--px-toast-index) * var(--px-gap)) * var(--px-raise-factor));
        --px-offset-x: var(--px-swipe-amount-x);
        width: 100%;
        outline: none;
        position: absolute;
        touch-action: none;
        opacity: 0;
        transform: translateX(var(--px-offset-x)) translateY(calc(100% * var(--px-raise-factor) * -1));
        z-index: var(--px-toast-z-index);
        transition: transform dt('toast.transition.duration'), opacity dt('toast.transition.duration'), height dt('toast.transition.duration');
    }

    .p-toast-message:focus-visible {
        box-shadow: dt('toast.focus.ring.shadow');
        outline: dt('toast.focus.ring.width') dt('toast.focus.ring.style') dt('focus.ring.color');
        outline-offset: dt('toast.focus.ring.offset');
    }

    .p-toast-message[data-mounted] {
        opacity: 1;
        transform: translateY(0);
    }

    .p-toast-message:not([data-expanded]):not([data-front]) {
        overflow: hidden;
        height: var(--px-front-toast-height);
        transform: translateX(var(--px-offset-x)) translateY(calc(var(--px-raise-factor) * var(--px-toast-index) * var(--px-gap))) scale(calc(var(--px-toast-index) * -0.05 + 1));
    }

    .p-toast-message[data-mounted][data-expanded] {
        height: var(--px-initial-height);
        transform: translateX(var(--px-offset-x)) translateY(var(--px-offset-y));
    }

    .p-toast-message[data-expanded]::after {
        content: "";
        position: absolute;
        left: 0;
        height: calc(var(--px-gap) + 1px);
        width: 100%;
        bottom: 100%;
    }

    .p-toast-message:not([data-visible]) {
        opacity: 0;
        pointer-events: none;
        user-select: none;
    }

    .p-toast-message[data-removed][data-front]:not([data-swipe-out]) {
        opacity: 0;
        transform: translateX(var(--px-offset-x)) translateY(calc(var(--px-raise-factor) * -100%));
    }

    .p-toast-message[data-removed]:not([data-front]):not([data-swipe-out])[data-expanded] {
        opacity: 0;
        transform: translateX(var(--px-offset-x)) translateY(calc((var(--px-offset-y)) + (var(--px-raise-factor) * -100%)));
    }

    .p-toast-message[data-removed]:not([data-front]):not([data-swipe-out]):not([data-expanded]) {
        opacity: 0;
        transform: translateX(var(--px-offset-x)) translateY(calc(var(--px-raise-factor) * 40% * -1));
        transition:
            transform 500ms,
            opacity 200ms;
    }

    .p-toast-message[data-swiping] {
        transition: none;
        transform: translateX(var(--px-offset-x)) translateY(var(--px-offset-y)) !important;
    }

    .p-toast-message[data-swiped] {
        -webkit-user-select: none;
        user-select: none;
    }

    .p-toast-message[data-swipe-out][data-swipe-direction="up"] {
        opacity: 0;
        transform: translateX(var(--px-offset-x)) translateY(calc(var(--px-offset-y) - 100%)) !important;
    }

    .p-toast-message[data-swipe-out][data-swipe-direction="down"] {
        opacity: 0;
        transform: translateX(var(--px-offset-x)) translateY(calc(var(--px-offset-y) + 100%)) !important;
    }

    .p-toast-message[data-swipe-out][data-swipe-direction="left"] {
        opacity: 0;
        transform: translateX(calc(var(--px-offset-x) - 100%)) translateY(var(--px-offset-y)) !important;
    }

    .p-toast-message[data-swipe-out][data-swipe-direction="right"] {
        opacity: 0;
        transform: translateX(calc(var(--px-offset-x) + 100%)) translateY(var(--px-offset-y)) !important;
        transition:
            transform 500ms,
            opacity 200ms;
    }

    .p-toast-message-icon,
    .p-toast-message-icon svg,
    .p-toast-message-icon i {
        flex-shrink: 0;
        font-size: dt('toast.icon.size');
        width: dt('toast.icon.size');
        height: dt('toast.icon.size');
        margin: dt('toast.icon.margin');
    }

    .p-toast-message-content {
        display: flex;
        align-items: flex-start;
        padding: dt('toast.content.padding');
        gap: dt('toast.content.gap');
        min-height: 0;
        overflow: hidden;
        transition: padding 250ms ease-in;
    }

    .p-toast-message-text {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        gap: dt('toast.text.gap');
    }

    .p-toast-summary {
        font-weight: dt('toast.summary.font.weight');
        font-size: dt('toast.summary.font.size');
    }

    .p-toast-detail {
        font-weight: dt('toast.detail.font.weight');
        font-size: dt('toast.detail.font.size');
    }

    .p-toast-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: absolute;
        cursor: pointer;
        background: transparent;
        transition:
            background dt('toast.transition.duration'),
            color dt('toast.transition.duration'),
            outline-color dt('toast.transition.duration'),
            box-shadow dt('toast.transition.duration');
        outline-color: transparent;
        color: inherit;
        width: dt('toast.close.button.width');
        height: dt('toast.close.button.height');
        border-radius: dt('toast.close.button.border.radius');
        margin: 0;
        top: 0.25rem;
        right: 0.25rem;
        padding: 0;
        border: none;
        user-select: none;
    }

    .p-toast-close-button:dir(rtl) {
        left: 0.25rem;
        right: auto;
    }

    .p-toast-message-normal,
    .p-toast-message-info,
    .p-toast-message-success,
    .p-toast-message-warn,
    .p-toast-message-error,
    .p-toast-message-secondary,
    .p-toast-message-contrast {
        border-width: dt('toast.border.width');
        border-style: solid;
        backdrop-filter: blur(dt('toast.blur'));
        border-radius: dt('toast.border.radius');
    }

    .p-toast-close-icon,
    .p-toast-close-icon svg,
    .p-toast-close-icon i {
        font-size: dt('toast.close.icon.size');
        width: dt('toast.close.icon.size');
        height: dt('toast.close.icon.size');
    }

    .p-toast-close-button:focus-visible {
        outline-width: dt('focus.ring.width');
        outline-style: dt('focus.ring.style');
        outline-offset: dt('focus.ring.offset');
    }

    .p-toast-message-normal {
        background: dt('toast.normal.background');
        border-color: dt('toast.normal.border.color');
        color: dt('toast.normal.color');
        box-shadow: dt('toast.normal.shadow');
    }

    .p-toast-message-normal .p-toast-detail {
        color: dt('toast.normal.detail.color');
    }

    .p-toast-message-normal .p-toast-close-button:focus-visible {
        outline-color: dt('toast.normal.close.button.focus.ring.color');
        box-shadow: dt('toast.normal.close.button.focus.ring.shadow');
    }

    .p-toast-message-normal .p-toast-close-button:hover {
        background: dt('toast.normal.close.button.hover.background');
    }

    .p-toast-message-info {
        background: dt('toast.info.background');
        border-color: dt('toast.info.border.color');
        color: dt('toast.info.color');
        box-shadow: dt('toast.info.shadow');
    }

    .p-toast-message-info .p-toast-detail {
        color: dt('toast.info.detail.color');
    }

    .p-toast-message-info .p-toast-close-button:focus-visible {
        outline-color: dt('toast.info.close.button.focus.ring.color');
        box-shadow: dt('toast.info.close.button.focus.ring.shadow');
    }

    .p-toast-message-info .p-toast-close-button:hover {
        background: dt('toast.info.close.button.hover.background');
    }

    .p-toast-message-success {
        background: dt('toast.success.background');
        border-color: dt('toast.success.border.color');
        color: dt('toast.success.color');
        box-shadow: dt('toast.success.shadow');
    }

    .p-toast-message-success .p-toast-detail {
        color: dt('toast.success.detail.color');
    }

    .p-toast-message-success .p-toast-close-button:focus-visible {
        outline-color: dt('toast.success.close.button.focus.ring.color');
        box-shadow: dt('toast.success.close.button.focus.ring.shadow');
    }

    .p-toast-message-success .p-toast-close-button:hover {
        background: dt('toast.success.close.button.hover.background');
    }

    .p-toast-message-warn {
        background: dt('toast.warn.background');
        border-color: dt('toast.warn.border.color');
        color: dt('toast.warn.color');
        box-shadow: dt('toast.warn.shadow');
    }

    .p-toast-message-warn .p-toast-detail {
        color: dt('toast.warn.detail.color');
    }

    .p-toast-message-warn .p-toast-close-button:focus-visible {
        outline-color: dt('toast.warn.close.button.focus.ring.color');
        box-shadow: dt('toast.warn.close.button.focus.ring.shadow');
    }

    .p-toast-message-warn .p-toast-close-button:hover {
        background: dt('toast.warn.close.button.hover.background');
    }

    .p-toast-message-error {
        background: dt('toast.error.background');
        border-color: dt('toast.error.border.color');
        color: dt('toast.error.color');
        box-shadow: dt('toast.error.shadow');
    }

    .p-toast-message-error .p-toast-detail {
        color: dt('toast.error.detail.color');
    }

    .p-toast-message-error .p-toast-close-button:focus-visible {
        outline-color: dt('toast.error.close.button.focus.ring.color');
        box-shadow: dt('toast.error.close.button.focus.ring.shadow');
    }

    .p-toast-message-error .p-toast-close-button:hover {
        background: dt('toast.error.close.button.hover.background');
    }

    .p-toast-message-secondary {
        background: dt('toast.secondary.background');
        border-color: dt('toast.secondary.border.color');
        color: dt('toast.secondary.color');
        box-shadow: dt('toast.secondary.shadow');
    }

    .p-toast-message-secondary .p-toast-detail {
        color: dt('toast.secondary.detail.color');
    }

    .p-toast-message-secondary .p-toast-close-button:focus-visible {
        outline-color: dt('toast.secondary.close.button.focus.ring.color');
        box-shadow: dt('toast.secondary.close.button.focus.ring.shadow');
    }

    .p-toast-message-secondary .p-toast-close-button:hover {
        background: dt('toast.secondary.close.button.hover.background');
    }

    .p-toast-message-contrast {
        background: dt('toast.contrast.background');
        border-color: dt('toast.contrast.border.color');
        color: dt('toast.contrast.color');
        box-shadow: dt('toast.contrast.shadow');
    }
    
    .p-toast-message-contrast .p-toast-detail {
        color: dt('toast.contrast.detail.color');
    }

    .p-toast-message-contrast .p-toast-close-button:focus-visible {
        outline-color: dt('toast.contrast.close.button.focus.ring.color');
        box-shadow: dt('toast.contrast.close.button.focus.ring.shadow');
    }

    .p-toast-message-contrast .p-toast-close-button:hover {
        background: dt('toast.contrast.close.button.hover.background');
    }

    .p-toast {
        position: fixed;
        width: 18.75rem;
        z-index: 2000;
    }

    .p-toast-center {
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        top: 50%;
    }

    .p-toast-bottom-right {
        right: 2rem;
        bottom: 2rem;
    }

    .p-toast-bottom-center {
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
    }

    .p-toast-bottom-left {
        left: 2rem;
        bottom: 2rem;
    }

    .p-toast-top-right {
        right: 2rem;
        top: 2rem;
    }

    .p-toast-top-center {
        left: 50%;
        transform: translateX(-50%);
        top: 2rem;
    }

    .p-toast-top-left {
        left: 2rem;
        top: 2rem;
    }

    .p-toast-bottom-right .p-toast-message{
        --px-raise-factor: -1;
        bottom: 0;
        right: 0;
    }

    .p-toast-bottom-center .p-toast-message{
        --px-raise-factor: -1;
        bottom: 0;
    }

    .p-toast[data-position="bottom-left"] .p-toast-message{
        --px-raise-factor: -1;
        bottom: 0;
        left: 0;
    }

    .p-toast[data-position="top-right"] .p-toast-message{
        --px-raise-factor: 1;
        top: 0;
        right: 0;
    }

    .p-toast[data-position="top-center"] .p-toast-message{
        --px-raise-factor: 1;
        top: 0;
    }

    .p-toast[data-position="top-left"] .p-toast-message{
        --px-raise-factor: 1;
        top: 0;
        left: 0;
    }

    .p-toast[data-position="center"] .p-toast-message{
        --px-raise-factor: 1;
        top: 0;
    }
`;

// node_modules/@primeicons/core/dist/esm/utils.mjs
function a2(n) {
  if (!(n == null || n === "")) return typeof n == "number" || /^\d+(\.\d+)?$/.test(n) ? `${n}px` : `${n}`;
}

// node_modules/@primeicons/angular/node_modules/@primeuix/utils/dist/classnames/index.mjs
function a3(...t2) {
  let e4 = [];
  for (let n = 0; n < t2.length; n++) {
    let r = t2[n];
    if (!r) continue;
    let s = typeof r;
    if (s === "string" || s === "number") e4.push(r);
    else if (s === "object") {
      let o2 = Array.isArray(r) ? [a3(...r)] : Object.entries(r).map(([i2, f2]) => f2 ? i2 : void 0);
      e4 = o2.length ? e4.concat(o2.filter((i2) => !!i2)) : e4;
    }
  }
  return e4.join(" ").trim();
}

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-core.mjs
var ICON_TEMPLATE = `
        @for (node of iconNodes(); track node[1]['key'] || $index) {
            @switch (node[0]) {
                @case ('path') {
                    <svg:path
                        [attr.d]="node[1]['d']"
                        [attr.fill]="node[1]['fill']"
                        [attr.fill-opacity]="node[1]['fillOpacity']"
                        [attr.fill-rule]="node[1]['fillRule']"
                        [attr.clip-rule]="node[1]['clipRule']"
                        [attr.stroke]="node[1]['stroke']"
                        [attr.stroke-width]="node[1]['strokeWidth']"
                        [attr.stroke-opacity]="node[1]['strokeOpacity']"
                        [attr.opacity]="node[1]['opacity']"
                    />
                }
                @case ('circle') {
                    <svg:circle
                        [attr.cx]="node[1]['cx']"
                        [attr.cy]="node[1]['cy']"
                        [attr.r]="node[1]['r']"
                        [attr.fill]="node[1]['fill']"
                        [attr.fill-opacity]="node[1]['fillOpacity']"
                        [attr.opacity]="node[1]['opacity']"
                    />
                }
                @case ('rect') {
                    <svg:rect
                        [attr.x]="node[1]['x']"
                        [attr.y]="node[1]['y']"
                        [attr.width]="node[1]['width']"
                        [attr.height]="node[1]['height']"
                        [attr.rx]="node[1]['rx']"
                        [attr.ry]="node[1]['ry']"
                        [attr.fill]="node[1]['fill']"
                        [attr.fill-opacity]="node[1]['fillOpacity']"
                        [attr.opacity]="node[1]['opacity']"
                    />
                }
                @case ('line') {
                    <svg:line
                        [attr.x1]="node[1]['x1']"
                        [attr.y1]="node[1]['y1']"
                        [attr.x2]="node[1]['x2']"
                        [attr.y2]="node[1]['y2']"
                        [attr.stroke]="node[1]['stroke']"
                        [attr.stroke-opacity]="node[1]['strokeOpacity']"
                        [attr.opacity]="node[1]['opacity']"
                    />
                }
                @case ('polyline') {
                    <svg:polyline
                        [attr.points]="node[1]['points']"
                        [attr.fill]="node[1]['fill']"
                        [attr.fill-opacity]="node[1]['fillOpacity']"
                        [attr.opacity]="node[1]['opacity']"
                    />
                }
                @case ('polygon') {
                    <svg:polygon
                        [attr.points]="node[1]['points']"
                        [attr.fill]="node[1]['fill']"
                        [attr.fill-opacity]="node[1]['fillOpacity']"
                        [attr.opacity]="node[1]['opacity']"
                    />
                }
                @case ('ellipse') {
                    <svg:ellipse
                        [attr.cx]="node[1]['cx']"
                        [attr.cy]="node[1]['cy']"
                        [attr.rx]="node[1]['rx']"
                        [attr.ry]="node[1]['ry']"
                        [attr.fill]="node[1]['fill']"
                        [attr.fill-opacity]="node[1]['fillOpacity']"
                        [attr.opacity]="node[1]['opacity']"
                    />
                }
            }
        }
`;
var CoreIcon = class _CoreIcon {
  _iconSignal = signal(null, ...ngDevMode ? [{ debugName: "_iconSignal" }] : (
    /* istanbul ignore next */
    []
  ));
  get _icon() {
    return this._iconSignal();
  }
  set _icon(value) {
    this._iconSignal.set(value);
  }
  size = input(void 0, ...ngDevMode ? [{ debugName: "size" }] : (
    /* istanbul ignore next */
    []
  ));
  color = input(void 0, ...ngDevMode ? [{ debugName: "color" }] : (
    /* istanbul ignore next */
    []
  ));
  styleClass = input(void 0, ...ngDevMode ? [{ debugName: "styleClass" }] : (
    /* istanbul ignore next */
    []
  ));
  spin = input(void 0, ...ngDevMode ? [{ debugName: "spin" }] : (
    /* istanbul ignore next */
    []
  ));
  iconNodes = computed(() => {
    var _a;
    return ((_a = this._iconSignal()) == null ? void 0 : _a.nodes) ?? [];
  }, ...ngDevMode ? [{ debugName: "iconNodes" }] : (
    /* istanbul ignore next */
    []
  ));
  computedSize = computed(() => this.size() ?? 20, ...ngDevMode ? [{ debugName: "computedSize" }] : (
    /* istanbul ignore next */
    []
  ));
  computedClass = computed(() => {
    const icon = this._iconSignal();
    return a3("p-icon", (icon == null ? void 0 : icon.name) && `p-icon-${icon.name}`, this.spin() && "p-icon-spin", this.styleClass());
  }, ...ngDevMode ? [{ debugName: "computedClass" }] : (
    /* istanbul ignore next */
    []
  ));
  get hostWidth() {
    return this.computedSize();
  }
  get hostHeight() {
    return this.computedSize();
  }
  get hostViewBox() {
    var _a, _b;
    return (_b = (_a = this._iconSignal()) == null ? void 0 : _a.svg) == null ? void 0 : _b.viewBox;
  }
  get hostFill() {
    var _a, _b;
    return (_b = (_a = this._iconSignal()) == null ? void 0 : _a.svg) == null ? void 0 : _b.fill;
  }
  get hostXmlns() {
    var _a, _b;
    return (_b = (_a = this._iconSignal()) == null ? void 0 : _a.svg) == null ? void 0 : _b.xmlns;
  }
  hostAriaHidden = "true";
  get hostClass() {
    return this.computedClass();
  }
  get hostColor() {
    return this.color() || null;
  }
  get hostIconSize() {
    return a2(this.size()) ?? null;
  }
  static \u0275fac = function CoreIcon_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CoreIcon)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CoreIcon,
    hostVars: 12,
    hostBindings: function CoreIcon_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("width", ctx.hostWidth)("height", ctx.hostHeight)("viewBox", ctx.hostViewBox)("fill", ctx.hostFill)("xmlns", ctx.hostXmlns)("aria-hidden", ctx.hostAriaHidden);
        \u0275\u0275classMap(ctx.hostClass);
        \u0275\u0275styleProp("color", ctx.hostColor)("--%NS%px-icon-size", ctx.hostIconSize);
      }
    },
    inputs: {
      size: [1, "size"],
      color: [1, "color"],
      styleClass: [1, "styleClass"],
      spin: [1, "spin"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CoreIcon, [{
    type: Directive
  }], null, { size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], color: [{ type: Input, args: [{ isSignal: true, alias: "color", required: false }] }], styleClass: [{ type: Input, args: [{ isSignal: true, alias: "styleClass", required: false }] }], spin: [{ type: Input, args: [{ isSignal: true, alias: "spin", required: false }] }], hostWidth: [{
    type: HostBinding,
    args: ["attr.width"]
  }], hostHeight: [{
    type: HostBinding,
    args: ["attr.height"]
  }], hostViewBox: [{
    type: HostBinding,
    args: ["attr.viewBox"]
  }], hostFill: [{
    type: HostBinding,
    args: ["attr.fill"]
  }], hostXmlns: [{
    type: HostBinding,
    args: ["attr.xmlns"]
  }], hostAriaHidden: [{
    type: HostBinding,
    args: ["attr.aria-hidden"]
  }], hostClass: [{
    type: HostBinding,
    args: ["class"]
  }], hostColor: [{
    type: HostBinding,
    args: ["style.color"]
  }], hostIconSize: [{
    type: HostBinding,
    args: ["style.--px-icon-size"]
  }] });
})();

// node_modules/@primeicons/core/dist/esm/icons/check.mjs
var e = { name: "check", meta: { tags: ["check", "done", "complete", "ok", "approve"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M17.4697 3.96973C17.7626 3.67684 18.2373 3.67684 18.5302 3.96973C18.8231 4.26262 18.8231 4.73738 18.5302 5.03028L7.53022 16.0303C7.23732 16.3232 6.76256 16.3232 6.46967 16.0303L1.46967 11.0303C1.17678 10.7374 1.17678 10.2626 1.46967 9.96973C1.76256 9.67684 2.23732 9.67684 2.53022 9.96973L6.99994 14.4395L17.4697 3.96973Z", fill: "currentColor", key: "9v7b3r" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-check.mjs
var Check = class _Check extends CoreIcon {
  constructor() {
    super();
    this._icon = e;
  }
  static \u0275fac = function Check_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Check)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function Check_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Check_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Check_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Check_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Check_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Check_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Check_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Check_For_1_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, Check_For_1_Case_0_Template, 1, 9, "path")(1, Check_For_1_Case_1_Template, 1, 6, "circle")(2, Check_For_1_Case_2_Template, 1, 9, "rect")(3, Check_For_1_Case_3_Template, 1, 7, "line")(4, Check_For_1_Case_4_Template, 1, 4, "polyline")(5, Check_For_1_Case_5_Template, 1, 4, "polygon")(6, Check_For_1_Case_6_Template, 1, 7, "ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        \u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _Check,
      selectors: [["svg", "data-p-icon", "check"]],
      features: [\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function Check_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275repeaterCreate(0, Check_For_1_Template, 7, 1, null, null, _forTrack0);
        }
        if (rf & 2) {
          \u0275\u0275repeater(ctx.iconNodes());
        }
      },
      encapsulation: 2,
      changeDetection: 1
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Check, [{
    type: Component,
    args: [{
      selector: 'svg[data-p-icon="check"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/@primeicons/core/dist/esm/icons/exclamation-triangle.mjs
var t = { name: "exclamation-triangle", meta: { tags: ["exclamation-triangle", "warning", "alert", "danger", "caution"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M10 2.25C10.2691 2.25005 10.5179 2.39429 10.6514 2.62793L18.6514 16.6279C18.7839 16.8599 18.7825 17.1448 18.6485 17.376C18.5143 17.6072 18.2673 17.75 18 17.75H2C1.73266 17.75 1.48576 17.6072 1.35156 17.376C1.21753 17.1448 1.21609 16.86 1.34863 16.6279L9.34864 2.62793C9.48218 2.39428 9.73089 2.25 10 2.25ZM3.29297 16.25H16.7071L10 4.51172L3.29297 16.25ZM10 13.25C10.4142 13.2501 10.75 13.5858 10.75 14V14.5C10.75 14.9142 10.4142 15.2499 10 15.25C9.5858 15.25 9.25001 14.9142 9.25001 14.5V14C9.25001 13.5858 9.5858 13.25 10 13.25ZM10 7.25C10.4142 7.25007 10.75 7.58583 10.75 8V11.5C10.75 11.9142 10.4142 12.2499 10 12.25C9.5858 12.25 9.25001 11.9142 9.25001 11.5V8C9.25001 7.58579 9.5858 7.25 10 7.25Z", fill: "currentColor", key: "dk1648" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-exclamation-triangle.mjs
var ExclamationTriangle = class _ExclamationTriangle extends CoreIcon {
  constructor() {
    super();
    this._icon = t;
  }
  static \u0275fac = function ExclamationTriangle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExclamationTriangle)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function ExclamationTriangle_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ExclamationTriangle_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ExclamationTriangle_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ExclamationTriangle_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ExclamationTriangle_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ExclamationTriangle_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ExclamationTriangle_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ExclamationTriangle_For_1_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ExclamationTriangle_For_1_Case_0_Template, 1, 9, "path")(1, ExclamationTriangle_For_1_Case_1_Template, 1, 6, "circle")(2, ExclamationTriangle_For_1_Case_2_Template, 1, 9, "rect")(3, ExclamationTriangle_For_1_Case_3_Template, 1, 7, "line")(4, ExclamationTriangle_For_1_Case_4_Template, 1, 4, "polyline")(5, ExclamationTriangle_For_1_Case_5_Template, 1, 4, "polygon")(6, ExclamationTriangle_For_1_Case_6_Template, 1, 7, "ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        \u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _ExclamationTriangle,
      selectors: [["svg", "data-p-icon", "exclamation-triangle"]],
      features: [\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function ExclamationTriangle_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275repeaterCreate(0, ExclamationTriangle_For_1_Template, 7, 1, null, null, _forTrack0);
        }
        if (rf & 2) {
          \u0275\u0275repeater(ctx.iconNodes());
        }
      },
      encapsulation: 2,
      changeDetection: 1
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExclamationTriangle, [{
    type: Component,
    args: [{
      selector: 'svg[data-p-icon="exclamation-triangle"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/@primeicons/core/dist/esm/icons/info-circle.mjs
var o = { name: "info-circle", meta: { tags: ["info-circle", "information", "help", "details"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1ZM10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5ZM10 8.25C10.4142 8.25 10.75 8.58579 10.75 9V14C10.75 14.4142 10.4142 14.75 10 14.75C9.58579 14.75 9.25 14.4142 9.25 14V9C9.25 8.58579 9.58579 8.25 10 8.25ZM10 5.25C10.4142 5.25 10.75 5.58579 10.75 6V6.5C10.75 6.91421 10.4142 7.25 10 7.25C9.58579 7.25 9.25 6.91421 9.25 6.5V6C9.25 5.58579 9.58579 5.25 10 5.25Z", fill: "currentColor", key: "l9ro38" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-info-circle.mjs
var InfoCircle = class _InfoCircle extends CoreIcon {
  constructor() {
    super();
    this._icon = o;
  }
  static \u0275fac = function InfoCircle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InfoCircle)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function InfoCircle_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function InfoCircle_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function InfoCircle_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function InfoCircle_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function InfoCircle_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function InfoCircle_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function InfoCircle_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function InfoCircle_For_1_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, InfoCircle_For_1_Case_0_Template, 1, 9, "path")(1, InfoCircle_For_1_Case_1_Template, 1, 6, "circle")(2, InfoCircle_For_1_Case_2_Template, 1, 9, "rect")(3, InfoCircle_For_1_Case_3_Template, 1, 7, "line")(4, InfoCircle_For_1_Case_4_Template, 1, 4, "polyline")(5, InfoCircle_For_1_Case_5_Template, 1, 4, "polygon")(6, InfoCircle_For_1_Case_6_Template, 1, 7, "ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        \u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _InfoCircle,
      selectors: [["svg", "data-p-icon", "info-circle"]],
      features: [\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function InfoCircle_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275repeaterCreate(0, InfoCircle_For_1_Template, 7, 1, null, null, _forTrack0);
        }
        if (rf & 2) {
          \u0275\u0275repeater(ctx.iconNodes());
        }
      },
      encapsulation: 2,
      changeDetection: 1
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoCircle, [{
    type: Component,
    args: [{
      selector: 'svg[data-p-icon="info-circle"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/@primeicons/core/dist/esm/icons/times.mjs
var e2 = { name: "times", meta: { tags: ["times", "close", "cancel", "delete", "remove"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M14.4199 4.51962C14.7128 4.22696 15.1876 4.22685 15.4805 4.51962C15.7731 4.81246 15.7731 5.28732 15.4805 5.58016L11.0606 10L15.4805 14.4199C15.773 14.7129 15.7732 15.1877 15.4805 15.4805C15.1877 15.7732 14.7128 15.773 14.4199 15.4805L10 11.0606L5.58014 15.4805C5.2873 15.7731 4.81245 15.7731 4.5196 15.4805C4.22682 15.1876 4.22692 14.7128 4.5196 14.4199L8.93949 10L4.5196 5.58016C4.22676 5.28727 4.22673 4.8125 4.5196 4.51962C4.81248 4.22677 5.28726 4.22678 5.58014 4.51962L10 8.93951L14.4199 4.51962Z", fill: "currentColor", key: "ow8ecl" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-times.mjs
var Times = class _Times extends CoreIcon {
  constructor() {
    super();
    this._icon = e2;
  }
  static \u0275fac = function Times_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Times)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function Times_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Times_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Times_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Times_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Times_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Times_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Times_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Times_For_1_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, Times_For_1_Case_0_Template, 1, 9, "path")(1, Times_For_1_Case_1_Template, 1, 6, "circle")(2, Times_For_1_Case_2_Template, 1, 9, "rect")(3, Times_For_1_Case_3_Template, 1, 7, "line")(4, Times_For_1_Case_4_Template, 1, 4, "polyline")(5, Times_For_1_Case_5_Template, 1, 4, "polygon")(6, Times_For_1_Case_6_Template, 1, 7, "ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        \u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _Times,
      selectors: [["svg", "data-p-icon", "times"]],
      features: [\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function Times_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275repeaterCreate(0, Times_For_1_Template, 7, 1, null, null, _forTrack0);
        }
        if (rf & 2) {
          \u0275\u0275repeater(ctx.iconNodes());
        }
      },
      encapsulation: 2,
      changeDetection: 1
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Times, [{
    type: Component,
    args: [{
      selector: 'svg[data-p-icon="times"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/@primeicons/core/dist/esm/icons/times-circle.mjs
var e3 = { name: "times-circle", meta: { tags: ["times-circle", "close", "cancel", "delete", "times"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1ZM10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5ZM12.4697 6.46973C12.7626 6.17683 13.2374 6.17683 13.5303 6.46973C13.8232 6.76262 13.8232 7.23738 13.5303 7.53027L11.0605 10L13.5303 12.4697C13.8232 12.7626 13.8232 13.2374 13.5303 13.5303C13.2374 13.8232 12.7626 13.8232 12.4697 13.5303L10 11.0605L7.53027 13.5303C7.23738 13.8232 6.76262 13.8232 6.46973 13.5303C6.17683 13.2374 6.17683 12.7626 6.46973 12.4697L8.93945 10L6.46973 7.53027C6.17683 7.23738 6.17683 6.76262 6.46973 6.46973C6.76262 6.17683 7.23738 6.17683 7.53027 6.46973L10 8.93945L12.4697 6.46973Z", fill: "currentColor", key: "8rdmue" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-times-circle.mjs
var TimesCircle = class _TimesCircle extends CoreIcon {
  constructor() {
    super();
    this._icon = e3;
  }
  static \u0275fac = function TimesCircle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimesCircle)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function TimesCircle_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function TimesCircle_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function TimesCircle_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function TimesCircle_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function TimesCircle_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function TimesCircle_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function TimesCircle_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = \u0275\u0275nextContext().$implicit;
        \u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function TimesCircle_For_1_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, TimesCircle_For_1_Case_0_Template, 1, 9, "path")(1, TimesCircle_For_1_Case_1_Template, 1, 6, "circle")(2, TimesCircle_For_1_Case_2_Template, 1, 9, "rect")(3, TimesCircle_For_1_Case_3_Template, 1, 7, "line")(4, TimesCircle_For_1_Case_4_Template, 1, 4, "polyline")(5, TimesCircle_For_1_Case_5_Template, 1, 4, "polygon")(6, TimesCircle_For_1_Case_6_Template, 1, 7, "ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        \u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _TimesCircle,
      selectors: [["svg", "data-p-icon", "times-circle"]],
      features: [\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function TimesCircle_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275repeaterCreate(0, TimesCircle_For_1_Template, 7, 1, null, null, _forTrack0);
        }
        if (rf & 2) {
          \u0275\u0275repeater(ctx.iconNodes());
        }
      },
      encapsulation: 2,
      changeDetection: 1
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimesCircle, [{
    type: Component,
    args: [{
      selector: 'svg[data-p-icon="times-circle"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/@primeuix/motion/node_modules/@primeuix/utils/dist/object/index.mjs
function se(e4) {
  if (e4 === "auto") return 0;
  if (typeof e4 == "number") return e4;
  let t2 = Number(e4.replace(",", ".").replace(/[^\d.]/g, ""));
  return Number.isNaN(t2) || /ms\s*$/.test(e4) ? t2 : t2 * 1e3;
}

// node_modules/@primeuix/motion/node_modules/@primeuix/utils/dist/dom/index.mjs
function D(t2, e4) {
  return t2 ? t2.classList ? t2.classList.contains(e4) : new RegExp("(^| )" + e4 + "( |$)", "gi").test(t2.className) : false;
}
function M(t2, e4) {
  if (t2 && e4) {
    let o2 = (n) => {
      D(t2, n) || (t2.classList ? t2.classList.add(n) : t2.className += " " + n);
    };
    [e4].flat().filter(Boolean).forEach((n) => n.split(" ").forEach(o2));
  }
}
function W(t2, e4) {
  if (t2 && e4) {
    let o2 = (n) => {
      t2.classList ? t2.classList.remove(n) : t2.className = t2.className.replace(new RegExp("(^|\\b)" + n.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [e4].flat().filter(Boolean).forEach((n) => n.split(" ").forEach(o2));
  }
}
function v(t2) {
  let e4 = { width: 0, height: 0 };
  if (t2) {
    let [o2, n] = [t2.style.visibility, t2.style.display], r = t2.getBoundingClientRect();
    t2.style.visibility = "hidden", t2.style.display = "block", e4.width = r.width || t2.offsetWidth, e4.height = r.height || t2.offsetHeight, t2.style.display = n, t2.style.visibility = o2;
  }
  return e4;
}
function le() {
  return typeof window == "undefined" || !window.matchMedia ? false : window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function xe(t2, e4, o2 = null, n) {
  e4 && (t2 != null && t2.style) && t2.style.setProperty(e4, o2, n);
}

// node_modules/@primeuix/motion/dist/index.mjs
var J = Object.defineProperty;
var N = Object.getOwnPropertySymbols;
var K2 = Object.prototype.hasOwnProperty;
var Q = Object.prototype.propertyIsEnumerable;
var S = (t2, o2, e4) => o2 in t2 ? J(t2, o2, { enumerable: true, configurable: true, writable: true, value: e4 }) : t2[o2] = e4;
var x3 = (t2, o2) => {
  for (var e4 in o2 || (o2 = {})) K2.call(o2, e4) && S(t2, e4, o2[e4]);
  if (N) for (var e4 of N(o2)) Q.call(o2, e4) && S(t2, e4, o2[e4]);
  return t2;
};
var k = (t2, o2, e4) => new Promise((i2, u) => {
  var a4 = (s) => {
    try {
      h(e4.next(s));
    } catch (f2) {
      u(f2);
    }
  }, M2 = (s) => {
    try {
      h(e4.throw(s));
    } catch (f2) {
      u(f2);
    }
  }, h = (s) => s.done ? i2(s.value) : Promise.resolve(s.value).then(a4, M2);
  h((e4 = e4.apply(t2, o2)).next());
});
var p3 = "animation";
var E = "transition";
var Z = ["data-enter-phase", "data-enter-from", "data-enter-to", "data-enter-active", "data-leave-phase", "data-leave-from", "data-leave-to", "data-leave-active"];
function j(t2) {
  return t2 ? t2.disabled || !!(t2.safe && le()) : false;
}
function V(t2, o2) {
  return t2 ? x3(x3({}, t2), Object.entries(o2).reduce((e4, [i2, u]) => {
    var a4;
    return e4[i2] = (a4 = t2[i2]) != null ? a4 : u, e4;
  }, {})) : x3({}, o2);
}
function _(t2) {
  let { name: o2, enterClass: e4, leaveClass: i2 } = t2 || {};
  return { enter: { from: (e4 == null ? void 0 : e4.from) || `${o2}-enter-from`, to: (e4 == null ? void 0 : e4.to) || `${o2}-enter-to`, active: (e4 == null ? void 0 : e4.active) || `${o2}-enter-active` }, leave: { from: (i2 == null ? void 0 : i2.from) || `${o2}-leave-from`, to: (i2 == null ? void 0 : i2.to) || `${o2}-leave-to`, active: (i2 == null ? void 0 : i2.active) || `${o2}-leave-active` } };
}
function C2(t2) {
  return { enter: { onBefore: t2 == null ? void 0 : t2.onBeforeEnter, onStart: t2 == null ? void 0 : t2.onEnter, onAfter: t2 == null ? void 0 : t2.onAfterEnter, onCancelled: t2 == null ? void 0 : t2.onEnterCancelled }, leave: { onBefore: t2 == null ? void 0 : t2.onBeforeLeave, onStart: t2 == null ? void 0 : t2.onLeave, onAfter: t2 == null ? void 0 : t2.onAfterLeave, onCancelled: t2 == null ? void 0 : t2.onLeaveCancelled } };
}
function R(t2, o2) {
  let e4 = window.getComputedStyle(t2), i2 = (d2) => {
    let l3 = e4[`${d2}Duration`].split(", ").map(se), m3 = e4[`${d2}Delay`].split(", ").map(se);
    return m3.length < l3.length && m3.length > 0 && (m3 = l3.map((v2, b3) => m3[b3 % m3.length])), [m3, l3];
  }, [u, a4] = i2(E), [M2, h] = i2(p3), s = Math.max(...a4.map((d2, l3) => d2 + u[l3])), f2 = Math.max(...h.map((d2, l3) => d2 + M2[l3])), r, n = 0, c3 = 0;
  return o2 === E ? s > 0 && (r = E, n = s, c3 = a4.length) : o2 === p3 ? f2 > 0 && (r = p3, n = f2, c3 = h.length) : (n = Math.max(s, f2), r = n > 0 ? s > f2 ? E : p3 : void 0, c3 = r ? r === E ? a4.length : h.length : 0), { type: r, timeout: n, count: c3 };
}
function q(t2, o2) {
  return typeof t2 == "number" ? t2 : t2 != null && typeof t2 == "object" && t2[o2] != null ? t2[o2] : null;
}
function W2(t2, o2) {
  return t2 ? `--${t2}-${o2}` : `--${o2}`;
}
function g(t2, o2, e4) {
  let { autoHeight: i2, autoWidth: u, cssVarPrefix: a4 } = o2, M2 = typeof e4 == "object";
  i2 && xe(t2, W2(a4, "height"), M2 ? e4.height : e4), u && xe(t2, W2(a4, "width"), M2 ? e4.width : e4);
}
function P2(t2, o2) {
  if (!o2.autoHeight && !o2.autoWidth) return;
  let e4 = t2.scrollHeight, i2 = t2.scrollWidth;
  if (!e4 || !i2) {
    let u = v(t2);
    e4 || (e4 = u.height), i2 || (i2 = u.width);
  }
  g(t2, o2, { height: e4 + "px", width: i2 + "px" });
}
function z(t2, o2) {
  t2.setAttribute(`data-${o2}-phase`, "");
}
function O(t2, o2, e4) {
  t2.removeAttribute("data-enter-from"), t2.removeAttribute("data-enter-to"), t2.removeAttribute("data-leave-from"), t2.removeAttribute("data-leave-to"), t2.setAttribute(`data-${o2}-${e4}`, ""), t2.setAttribute(`data-${o2}-active`, "");
}
function T(t2) {
  t2.removeAttribute("data-enter-phase"), t2.removeAttribute("data-leave-phase");
}
function B(t2) {
  Z.forEach((o2) => t2.removeAttribute(o2));
}
var tt = Object.freeze({ name: "p", safe: true, disabled: false, enter: true, leave: true, autoHeight: true, autoWidth: true, cssVarPrefix: "" });
function dt(t2, o2) {
  if (!t2) throw new Error("Element is required.");
  let e4 = {}, i2 = false, u = {}, a4 = null, M2 = {}, h = (r) => {
    for (let n of Object.keys(e4)) delete e4[n];
    if (Object.assign(e4, V(r, tt)), !e4.enter && !e4.leave) throw new Error("Enter or leave must be true.");
    M2 = C2(e4), i2 = j(e4), u = _(e4), a4 = null;
  }, s = (r) => k(null, null, function* () {
    a4 == null || a4();
    let n = t2, { onBefore: c3, onStart: d2, onAfter: l3, onCancelled: m3 } = M2[r] || {}, v2 = { element: t2 };
    if (z(n, r), i2) {
      c3 == null || c3(v2), d2 == null || d2(v2), l3 == null || l3(v2), T(n), g(n, e4, r === "enter" ? "auto" : "0px");
      return;
    }
    let { from: b3, active: A2, to: H } = u[r] || {};
    return c3 == null || c3(v2), r === "enter" ? g(n, e4, "0px") : r === "leave" && P2(n, e4), M(n, b3), M(n, A2), O(n, r, "from"), n.offsetHeight, r === "enter" ? P2(n, e4) : r === "leave" && g(n, e4, "0px"), W(n, b3), M(n, H), O(n, r, "to"), d2 == null || d2(v2), new Promise((D2) => {
      let U = q(e4.duration, r), w = () => {
        W(n, [H, A2]), a4 = null, B(n), T(n);
      }, G2 = () => {
        w(), l3 == null || l3(v2), D2(), r === "enter" ? g(n, e4, "auto") : r === "leave" && g(n, e4, "0px");
      }, L = () => {
      };
      a4 = () => {
        L(), w(), m3 == null || m3(v2), D2();
      }, L = ot(n, e4.type, U, G2);
    });
  });
  h(o2), g(t2, e4, "0px");
  let f2 = { enter: () => e4.enter ? s("enter") : Promise.resolve(), leave: () => e4.leave ? s("leave") : Promise.resolve(), cancel: () => {
    a4 == null || a4(), a4 = null;
  }, update: (r, n) => {
    if (!r) throw new Error("Element is required.");
    t2 = r, f2.cancel(), n && h(n);
  } };
  return e4.appear && f2.enter(), f2;
}
var et = 0;
function ot(t2, o2, e4, i2) {
  let u = t2._motionEndId = ++et, a4 = () => {
    u === t2._motionEndId && i2();
  };
  if (e4 != null) {
    let m3 = setTimeout(a4, e4);
    return () => clearTimeout(m3);
  }
  let { type: M2, timeout: h, count: s } = R(t2, o2);
  if (!M2) return i2(), () => {
  };
  let f2 = M2 + "end", r = 0, n = () => {
    t2.removeEventListener(f2, d2, true), clearTimeout(l3);
  }, c3 = () => {
    n(), a4();
  }, d2 = (m3) => {
    m3.target === t2 && ++r >= s && c3();
  };
  t2.addEventListener(f2, d2, { capture: true });
  let l3 = setTimeout(() => {
    r < s && c3();
  }, h + 1);
  return n;
}

// node_modules/primeng/fesm2022/primeng-motion.mjs
var originalStyles = /* @__PURE__ */ new WeakMap();
function applyHiddenStyles(element, strategy) {
  if (!element) return;
  if (!originalStyles.has(element)) originalStyles.set(element, {
    display: element.style.display,
    visibility: element.style.visibility,
    maxHeight: element.style.maxHeight
  });
  switch (strategy) {
    case "display":
      element.style.display = "none";
      break;
    case "visibility":
      element.style.visibility = "hidden";
      element.style.maxHeight = "0";
  }
}
function resetStyles(element, strategy) {
  if (!element) return;
  const original = originalStyles.get(element) ?? element.style;
  switch (strategy) {
    case "display":
      element.style.display = (original == null ? void 0 : original.display) || "";
      break;
    case "visibility":
      element.style.visibility = (original == null ? void 0 : original.visibility) || "";
      element.style.maxHeight = (original == null ? void 0 : original.maxHeight) || "";
  }
  originalStyles.delete(element);
}
var style2 = `
    .p-motion {
        display: block;
    }
`;
var classes = { root: "p-motion" };
var MotionStyle = class MotionStyle2 extends BaseStyle {
  name = "motion";
  style = style2;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MotionStyle_BaseFactory = void 0;
    return function MotionStyle_Factory(__ngFactoryType__) {
      return (\u0275MotionStyle_BaseFactory || (\u0275MotionStyle_BaseFactory = \u0275\u0275getInheritedFactory(MotionStyle2)))(__ngFactoryType__ || MotionStyle2);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: MotionStyle2,
    factory: MotionStyle2.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MotionStyle, [{ type: Injectable }], null, null);
})();
var MotionClasses;
(function(MotionClasses2) {
  MotionClasses2["root"] = "p-motion";
})(MotionClasses || (MotionClasses = {}));
var MOTION_INSTANCE = new InjectionToken("MOTION_INSTANCE");
var Motion = class Motion2 extends BaseComponent {
  $pcMotion = inject(MOTION_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, { self: true });
  _componentStyle = inject(MotionStyle);
  visible = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "visible" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: (value) => value ?? false
  }));
  mountOnEnter = input(true, ...ngDevMode ? [{ debugName: "mountOnEnter" }] : (
    /* istanbul ignore next */
    []
  ));
  unmountOnLeave = input(true, ...ngDevMode ? [{ debugName: "unmountOnLeave" }] : (
    /* istanbul ignore next */
    []
  ));
  name = input(void 0, ...ngDevMode ? [{ debugName: "name" }] : (
    /* istanbul ignore next */
    []
  ));
  type = input(void 0, ...ngDevMode ? [{ debugName: "type" }] : (
    /* istanbul ignore next */
    []
  ));
  safe = input(void 0, ...ngDevMode ? [{ debugName: "safe" }] : (
    /* istanbul ignore next */
    []
  ));
  disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : (
    /* istanbul ignore next */
    []
  ));
  appear = input(false, ...ngDevMode ? [{ debugName: "appear" }] : (
    /* istanbul ignore next */
    []
  ));
  enter = input(true, ...ngDevMode ? [{ debugName: "enter" }] : (
    /* istanbul ignore next */
    []
  ));
  leave = input(true, ...ngDevMode ? [{ debugName: "leave" }] : (
    /* istanbul ignore next */
    []
  ));
  duration = input(void 0, ...ngDevMode ? [{ debugName: "duration" }] : (
    /* istanbul ignore next */
    []
  ));
  hideStrategy = input("display", ...ngDevMode ? [{ debugName: "hideStrategy" }] : (
    /* istanbul ignore next */
    []
  ));
  enterFromClass = input(void 0, ...ngDevMode ? [{ debugName: "enterFromClass" }] : (
    /* istanbul ignore next */
    []
  ));
  enterToClass = input(void 0, ...ngDevMode ? [{ debugName: "enterToClass" }] : (
    /* istanbul ignore next */
    []
  ));
  enterActiveClass = input(void 0, ...ngDevMode ? [{ debugName: "enterActiveClass" }] : (
    /* istanbul ignore next */
    []
  ));
  leaveFromClass = input(void 0, ...ngDevMode ? [{ debugName: "leaveFromClass" }] : (
    /* istanbul ignore next */
    []
  ));
  leaveToClass = input(void 0, ...ngDevMode ? [{ debugName: "leaveToClass" }] : (
    /* istanbul ignore next */
    []
  ));
  leaveActiveClass = input(void 0, ...ngDevMode ? [{ debugName: "leaveActiveClass" }] : (
    /* istanbul ignore next */
    []
  ));
  options = input({}, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "options" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: (value) => value ?? {}
  }));
  onBeforeEnter = output();
  onEnter = output();
  onAfterEnter = output();
  onEnterCancelled = output();
  onBeforeLeave = output();
  onLeave = output();
  onAfterLeave = output();
  onLeaveCancelled = output();
  motionOptions = computed(() => {
    var _a, _b, _c, _d, _e2, _f;
    const options = this.options();
    return {
      name: options.name ?? this.name(),
      type: options.type ?? this.type(),
      safe: options.safe ?? this.safe(),
      disabled: options.disabled ?? this.disabled(),
      appear: false,
      enter: options.enter ?? this.enter(),
      leave: options.leave ?? this.leave(),
      duration: options.duration ?? this.duration(),
      enterClass: {
        from: ((_a = options.enterClass) == null ? void 0 : _a.from) ?? (!options.name ? this.enterFromClass() : void 0),
        to: ((_b = options.enterClass) == null ? void 0 : _b.to) ?? (!options.name ? this.enterToClass() : void 0),
        active: ((_c = options.enterClass) == null ? void 0 : _c.active) ?? (!options.name ? this.enterActiveClass() : void 0)
      },
      leaveClass: {
        from: ((_d = options.leaveClass) == null ? void 0 : _d.from) ?? (!options.name ? this.leaveFromClass() : void 0),
        to: ((_e2 = options.leaveClass) == null ? void 0 : _e2.to) ?? (!options.name ? this.leaveToClass() : void 0),
        active: ((_f = options.leaveClass) == null ? void 0 : _f.active) ?? (!options.name ? this.leaveActiveClass() : void 0)
      },
      onBeforeEnter: options.onBeforeEnter ?? this.handleBeforeEnter,
      onEnter: options.onEnter ?? this.handleEnter,
      onAfterEnter: options.onAfterEnter ?? this.handleAfterEnter,
      onEnterCancelled: options.onEnterCancelled ?? this.handleEnterCancelled,
      onBeforeLeave: options.onBeforeLeave ?? this.handleBeforeLeave,
      onLeave: options.onLeave ?? this.handleLeave,
      onAfterLeave: options.onAfterLeave ?? this.handleAfterLeave,
      onLeaveCancelled: options.onLeaveCancelled ?? this.handleLeaveCancelled
    };
  }, ...ngDevMode ? [{ debugName: "motionOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  motion;
  isInitialMount = true;
  cancelled = false;
  destroyed = false;
  rendered = signal(false, ...ngDevMode ? [{ debugName: "rendered" }] : (
    /* istanbul ignore next */
    []
  ));
  handleBeforeEnter = (event) => !this.destroyed && this.onBeforeEnter.emit(event);
  handleEnter = (event) => !this.destroyed && this.onEnter.emit(event);
  handleAfterEnter = (event) => !this.destroyed && this.onAfterEnter.emit(event);
  handleEnterCancelled = (event) => !this.destroyed && this.onEnterCancelled.emit(event);
  handleBeforeLeave = (event) => !this.destroyed && this.onBeforeLeave.emit(event);
  handleLeave = (event) => !this.destroyed && this.onLeave.emit(event);
  handleAfterLeave = (event) => !this.destroyed && this.onAfterLeave.emit(event);
  handleLeaveCancelled = (event) => !this.destroyed && this.onLeaveCancelled.emit(event);
  constructor() {
    super();
    effect(() => {
      const hideStrategy = this.hideStrategy();
      if (this.isInitialMount) {
        applyHiddenStyles(this.$el, hideStrategy);
        this.rendered.set(this.visible() && this.mountOnEnter() || !this.mountOnEnter());
      } else if (this.visible() && !this.rendered()) {
        applyHiddenStyles(this.$el, hideStrategy);
        this.rendered.set(true);
      }
    });
    effect(() => {
      if (!this.motion) this.motion = dt(this.$el, this.motionOptions());
    });
    afterRenderEffect(() => __async(this, null, function* () {
      var _a, _b, _c;
      if (!this.$el) return;
      const shouldAppear = this.isInitialMount && this.visible() && this.appear();
      const hideStrategy = this.hideStrategy();
      if (this.visible()) {
        yield ue();
        resetStyles(this.$el, hideStrategy);
        if (shouldAppear || !this.isInitialMount) {
          this.applyMotionDuration("enter");
          (_a = this.motion) == null ? void 0 : _a.enter();
        }
      } else if (!this.isInitialMount) {
        yield ue();
        this.applyMotionDuration("leave");
        (_c = (_b = this.motion) == null ? void 0 : _b.leave()) == null ? void 0 : _c.then(() => __async(this, null, function* () {
          if (this.$el && !this.cancelled && !this.visible()) {
            applyHiddenStyles(this.$el, hideStrategy);
            if (this.unmountOnLeave()) {
              yield ue();
              if (!this.cancelled) this.rendered.set(false);
            }
          }
        }));
      }
      this.isInitialMount = false;
    }));
  }
  applyMotionDuration(phase) {
    const options = untracked(this.motionOptions);
    const ms = q(options.duration, phase);
    if (ms == null || !this.$el) return;
    const el = this.$el;
    const durationValue = `${ms}ms`;
    if (options.type === "transition") el.style.transitionDuration = durationValue;
    else el.style.animationDuration = durationValue;
  }
  onAfterViewChecked() {
    var _a;
    const optionsAttrs = ((_a = this.options()) == null ? void 0 : _a.root) || {};
    this.bindDirectiveInstance.setAttrs(__spreadValues(__spreadValues({}, this.ptms(["host", "root"])), optionsAttrs));
  }
  onDestroy() {
    var _a, _b;
    this.destroyed = true;
    this.cancelled = true;
    (_a = this.motion) == null ? void 0 : _a.cancel();
    this.motion = void 0;
    resetStyles(this.$el, this.hideStrategy());
    (_b = this.$el) == null ? void 0 : _b.remove();
    this.isInitialMount = true;
  }
  static \u0275fac = function Motion_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Motion2)();
  };
  static \u0275cmp = (function() {
    const _c0 = ["*"];
    function Motion_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projection(0);
      }
    }
    return /* @__PURE__ */ \u0275\u0275defineComponent({
      type: Motion2,
      selectors: [["p-motion"]],
      hostVars: 2,
      hostBindings: function Motion_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classMap(ctx.cx("root"));
        }
      },
      inputs: {
        visible: [1, "visible"],
        mountOnEnter: [1, "mountOnEnter"],
        unmountOnLeave: [1, "unmountOnLeave"],
        name: [1, "name"],
        type: [1, "type"],
        safe: [1, "safe"],
        disabled: [1, "disabled"],
        appear: [1, "appear"],
        enter: [1, "enter"],
        leave: [1, "leave"],
        duration: [1, "duration"],
        hideStrategy: [1, "hideStrategy"],
        enterFromClass: [1, "enterFromClass"],
        enterToClass: [1, "enterToClass"],
        enterActiveClass: [1, "enterActiveClass"],
        leaveFromClass: [1, "leaveFromClass"],
        leaveToClass: [1, "leaveToClass"],
        leaveActiveClass: [1, "leaveActiveClass"],
        options: [1, "options"]
      },
      outputs: {
        onBeforeEnter: "onBeforeEnter",
        onEnter: "onEnter",
        onAfterEnter: "onAfterEnter",
        onEnterCancelled: "onEnterCancelled",
        onBeforeLeave: "onBeforeLeave",
        onLeave: "onLeave",
        onAfterLeave: "onAfterLeave",
        onLeaveCancelled: "onLeaveCancelled"
      },
      features: [\u0275\u0275ProvidersFeature([
        MotionStyle,
        {
          provide: MOTION_INSTANCE,
          useExisting: Motion2
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Motion2
        }
      ]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 1,
      template: function Motion_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275conditionalCreate(0, Motion_Conditional_0_Template, 1, 0);
        }
        if (rf & 2) {
          \u0275\u0275conditional(ctx.rendered() ? 0 : -1);
        }
      },
      dependencies: [CommonModule, BindModule],
      encapsulation: 2
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Motion, [{
    type: Component,
    args: [{
      selector: "p-motion",
      standalone: true,
      imports: [CommonModule, BindModule],
      template: `
        @if (rendered()) {
            <ng-content />
        }
    `,
      providers: [
        MotionStyle,
        {
          provide: MOTION_INSTANCE,
          useExisting: Motion
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Motion
        }
      ],
      host: { "[class]": "cx('root')" },
      hostDirectives: [Bind]
    }]
  }], () => [], {
    visible: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "visible",
        required: false
      }]
    }],
    mountOnEnter: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "mountOnEnter",
        required: false
      }]
    }],
    unmountOnLeave: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "unmountOnLeave",
        required: false
      }]
    }],
    name: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "name",
        required: false
      }]
    }],
    type: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "type",
        required: false
      }]
    }],
    safe: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "safe",
        required: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    appear: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "appear",
        required: false
      }]
    }],
    enter: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "enter",
        required: false
      }]
    }],
    leave: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "leave",
        required: false
      }]
    }],
    duration: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "duration",
        required: false
      }]
    }],
    hideStrategy: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "hideStrategy",
        required: false
      }]
    }],
    enterFromClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "enterFromClass",
        required: false
      }]
    }],
    enterToClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "enterToClass",
        required: false
      }]
    }],
    enterActiveClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "enterActiveClass",
        required: false
      }]
    }],
    leaveFromClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "leaveFromClass",
        required: false
      }]
    }],
    leaveToClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "leaveToClass",
        required: false
      }]
    }],
    leaveActiveClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "leaveActiveClass",
        required: false
      }]
    }],
    options: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "options",
        required: false
      }]
    }],
    onBeforeEnter: [{
      type: Output,
      args: ["onBeforeEnter"]
    }],
    onEnter: [{
      type: Output,
      args: ["onEnter"]
    }],
    onAfterEnter: [{
      type: Output,
      args: ["onAfterEnter"]
    }],
    onEnterCancelled: [{
      type: Output,
      args: ["onEnterCancelled"]
    }],
    onBeforeLeave: [{
      type: Output,
      args: ["onBeforeLeave"]
    }],
    onLeave: [{
      type: Output,
      args: ["onLeave"]
    }],
    onAfterLeave: [{
      type: Output,
      args: ["onAfterLeave"]
    }],
    onLeaveCancelled: [{
      type: Output,
      args: ["onLeaveCancelled"]
    }]
  });
})();
var MOTION_DIRECTIVE_INSTANCE = new InjectionToken("MOTION_DIRECTIVE_INSTANCE");
var MotionDirective = class MotionDirective2 extends BaseComponent {
  $pcMotionDirective = inject(MOTION_DIRECTIVE_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  visible = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "visible" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotion",
    transform: (value) => value ?? false
  }));
  name = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "name" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionName"
  }));
  type = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "type" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionType"
  }));
  safe = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "safe" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionSafe"
  }));
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "disabled" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionDisabled"
  }));
  appear = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "appear" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionAppear"
  }));
  enter = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "enter" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionEnter"
  }));
  leave = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "leave" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionLeave"
  }));
  duration = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "duration" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionDuration"
  }));
  hideStrategy = input("display", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "hideStrategy" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionHideStrategy"
  }));
  enterFromClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "enterFromClass" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionEnterFromClass"
  }));
  enterToClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "enterToClass" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionEnterToClass"
  }));
  enterActiveClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "enterActiveClass" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionEnterActiveClass"
  }));
  leaveFromClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "leaveFromClass" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionLeaveFromClass"
  }));
  leaveToClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "leaveToClass" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionLeaveToClass"
  }));
  leaveActiveClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "leaveActiveClass" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionLeaveActiveClass"
  }));
  options = input({}, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "options" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionOptions",
    transform: (value) => value ?? {}
  }));
  onBeforeEnter = output({ alias: "pMotionOnBeforeEnter" });
  onEnter = output({ alias: "pMotionOnEnter" });
  onAfterEnter = output({ alias: "pMotionOnAfterEnter" });
  onEnterCancelled = output({ alias: "pMotionOnEnterCancelled" });
  onBeforeLeave = output({ alias: "pMotionOnBeforeLeave" });
  onLeave = output({ alias: "pMotionOnLeave" });
  onAfterLeave = output({ alias: "pMotionOnAfterLeave" });
  onLeaveCancelled = output({ alias: "pMotionOnLeaveCancelled" });
  motionOptions = computed(() => {
    var _a, _b, _c, _d, _e2, _f;
    const options = this.options() ?? {};
    return {
      name: options.name ?? this.name(),
      type: options.type ?? this.type(),
      safe: options.safe ?? this.safe(),
      disabled: options.disabled ?? this.disabled(),
      appear: false,
      enter: options.enter ?? this.enter(),
      leave: options.leave ?? this.leave(),
      duration: options.duration ?? this.duration(),
      enterClass: {
        from: ((_a = options.enterClass) == null ? void 0 : _a.from) ?? (!options.name ? this.enterFromClass() : void 0),
        to: ((_b = options.enterClass) == null ? void 0 : _b.to) ?? (!options.name ? this.enterToClass() : void 0),
        active: ((_c = options.enterClass) == null ? void 0 : _c.active) ?? (!options.name ? this.enterActiveClass() : void 0)
      },
      leaveClass: {
        from: ((_d = options.leaveClass) == null ? void 0 : _d.from) ?? (!options.name ? this.leaveFromClass() : void 0),
        to: ((_e2 = options.leaveClass) == null ? void 0 : _e2.to) ?? (!options.name ? this.leaveToClass() : void 0),
        active: ((_f = options.leaveClass) == null ? void 0 : _f.active) ?? (!options.name ? this.leaveActiveClass() : void 0)
      },
      onBeforeEnter: options.onBeforeEnter ?? this.handleBeforeEnter,
      onEnter: options.onEnter ?? this.handleEnter,
      onAfterEnter: options.onAfterEnter ?? this.handleAfterEnter,
      onEnterCancelled: options.onEnterCancelled ?? this.handleEnterCancelled,
      onBeforeLeave: options.onBeforeLeave ?? this.handleBeforeLeave,
      onLeave: options.onLeave ?? this.handleLeave,
      onAfterLeave: options.onAfterLeave ?? this.handleAfterLeave,
      onLeaveCancelled: options.onLeaveCancelled ?? this.handleLeaveCancelled
    };
  }, ...ngDevMode ? [{ debugName: "motionOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  motion;
  isInitialMount = true;
  cancelled = false;
  destroyed = false;
  handleBeforeEnter = (event) => !this.destroyed && this.onBeforeEnter.emit(event);
  handleEnter = (event) => !this.destroyed && this.onEnter.emit(event);
  handleAfterEnter = (event) => !this.destroyed && this.onAfterEnter.emit(event);
  handleEnterCancelled = (event) => !this.destroyed && this.onEnterCancelled.emit(event);
  handleBeforeLeave = (event) => !this.destroyed && this.onBeforeLeave.emit(event);
  handleLeave = (event) => !this.destroyed && this.onLeave.emit(event);
  handleAfterLeave = (event) => !this.destroyed && this.onAfterLeave.emit(event);
  handleLeaveCancelled = (event) => !this.destroyed && this.onLeaveCancelled.emit(event);
  constructor() {
    super();
    afterRenderEffect(() => {
      var _a, _b, _c;
      if (!this.$el) return;
      this.motion ??= dt(this.$el, untracked(this.motionOptions));
      const shouldAppear = this.isInitialMount && this.visible() && this.appear();
      const hideStrategy = this.hideStrategy();
      if (this.visible()) {
        resetStyles(this.$el, hideStrategy);
        if (shouldAppear || !this.isInitialMount) {
          this.applyMotionDuration("enter");
          (_a = this.motion) == null ? void 0 : _a.enter();
        }
      } else if (!this.isInitialMount) {
        this.applyMotionDuration("leave");
        (_c = (_b = this.motion) == null ? void 0 : _b.leave()) == null ? void 0 : _c.then(() => {
          if (this.$el && !this.cancelled && !this.visible()) applyHiddenStyles(this.$el, hideStrategy);
        });
      } else applyHiddenStyles(this.$el, hideStrategy);
      this.isInitialMount = false;
    });
  }
  applyMotionDuration(phase) {
    const options = untracked(this.motionOptions);
    const ms = q(options.duration, phase);
    if (ms == null || !this.$el) return;
    const el = this.$el;
    const durationValue = `${ms}ms`;
    if (options.type === "transition") el.style.transitionDuration = durationValue;
    else el.style.animationDuration = durationValue;
  }
  onDestroy() {
    var _a, _b;
    this.destroyed = true;
    this.cancelled = true;
    (_a = this.motion) == null ? void 0 : _a.cancel();
    this.motion = void 0;
    resetStyles(this.$el, this.hideStrategy());
    (_b = this.$el) == null ? void 0 : _b.remove();
    this.isInitialMount = true;
  }
  static \u0275fac = function MotionDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MotionDirective2)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: MotionDirective2,
    selectors: [["", "pMotion", ""]],
    inputs: {
      visible: [1, "pMotion", "visible"],
      name: [1, "pMotionName", "name"],
      type: [1, "pMotionType", "type"],
      safe: [1, "pMotionSafe", "safe"],
      disabled: [1, "pMotionDisabled", "disabled"],
      appear: [1, "pMotionAppear", "appear"],
      enter: [1, "pMotionEnter", "enter"],
      leave: [1, "pMotionLeave", "leave"],
      duration: [1, "pMotionDuration", "duration"],
      hideStrategy: [1, "pMotionHideStrategy", "hideStrategy"],
      enterFromClass: [1, "pMotionEnterFromClass", "enterFromClass"],
      enterToClass: [1, "pMotionEnterToClass", "enterToClass"],
      enterActiveClass: [1, "pMotionEnterActiveClass", "enterActiveClass"],
      leaveFromClass: [1, "pMotionLeaveFromClass", "leaveFromClass"],
      leaveToClass: [1, "pMotionLeaveToClass", "leaveToClass"],
      leaveActiveClass: [1, "pMotionLeaveActiveClass", "leaveActiveClass"],
      options: [1, "pMotionOptions", "options"]
    },
    outputs: {
      onBeforeEnter: "pMotionOnBeforeEnter",
      onEnter: "pMotionOnEnter",
      onAfterEnter: "pMotionOnAfterEnter",
      onEnterCancelled: "pMotionOnEnterCancelled",
      onBeforeLeave: "pMotionOnBeforeLeave",
      onLeave: "pMotionOnLeave",
      onAfterLeave: "pMotionOnAfterLeave",
      onLeaveCancelled: "pMotionOnLeaveCancelled"
    },
    features: [\u0275\u0275ProvidersFeature([
      MotionStyle,
      {
        provide: MOTION_DIRECTIVE_INSTANCE,
        useExisting: MotionDirective2
      },
      {
        provide: PARENT_INSTANCE,
        useExisting: MotionDirective2
      }
    ]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MotionDirective, [{
    type: Directive,
    args: [{
      selector: "[pMotion]",
      standalone: true,
      providers: [
        MotionStyle,
        {
          provide: MOTION_DIRECTIVE_INSTANCE,
          useExisting: MotionDirective
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: MotionDirective
        }
      ]
    }]
  }], () => [], {
    visible: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotion",
        required: false
      }]
    }],
    name: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionName",
        required: false
      }]
    }],
    type: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionType",
        required: false
      }]
    }],
    safe: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionSafe",
        required: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionDisabled",
        required: false
      }]
    }],
    appear: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionAppear",
        required: false
      }]
    }],
    enter: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionEnter",
        required: false
      }]
    }],
    leave: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionLeave",
        required: false
      }]
    }],
    duration: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionDuration",
        required: false
      }]
    }],
    hideStrategy: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionHideStrategy",
        required: false
      }]
    }],
    enterFromClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionEnterFromClass",
        required: false
      }]
    }],
    enterToClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionEnterToClass",
        required: false
      }]
    }],
    enterActiveClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionEnterActiveClass",
        required: false
      }]
    }],
    leaveFromClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionLeaveFromClass",
        required: false
      }]
    }],
    leaveToClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionLeaveToClass",
        required: false
      }]
    }],
    leaveActiveClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionLeaveActiveClass",
        required: false
      }]
    }],
    options: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionOptions",
        required: false
      }]
    }],
    onBeforeEnter: [{
      type: Output,
      args: ["pMotionOnBeforeEnter"]
    }],
    onEnter: [{
      type: Output,
      args: ["pMotionOnEnter"]
    }],
    onAfterEnter: [{
      type: Output,
      args: ["pMotionOnAfterEnter"]
    }],
    onEnterCancelled: [{
      type: Output,
      args: ["pMotionOnEnterCancelled"]
    }],
    onBeforeLeave: [{
      type: Output,
      args: ["pMotionOnBeforeLeave"]
    }],
    onLeave: [{
      type: Output,
      args: ["pMotionOnLeave"]
    }],
    onAfterLeave: [{
      type: Output,
      args: ["pMotionOnAfterLeave"]
    }],
    onLeaveCancelled: [{
      type: Output,
      args: ["pMotionOnLeaveCancelled"]
    }]
  });
})();
var MotionModule = class MotionModule2 {
  static \u0275fac = function MotionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MotionModule2)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: MotionModule2,
    imports: [Motion, MotionDirective],
    exports: [Motion, MotionDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Motion]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MotionModule, [{
    type: NgModule,
    args: [{
      imports: [Motion, MotionDirective],
      exports: [Motion, MotionDirective]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-toast.mjs
var inlineStyles = { root: ({ instance }) => {
  const position = instance.position();
  return {
    position: "fixed",
    top: position === "top-right" || position === "top-left" || position === "top-center" ? "20px" : position === "center" ? "50%" : null,
    right: position === "top-right" || position === "bottom-right" ? "20px" : null,
    bottom: position === "bottom-left" || position === "bottom-right" || position === "bottom-center" ? "20px" : null,
    left: position === "top-left" || position === "bottom-left" ? "20px" : position === "center" || position === "top-center" || position === "bottom-center" ? "50%" : null
  };
} };
var classes2 = {
  root: ({ instance }) => ["p-toast p-component", `p-toast-${instance.position()}`],
  message: ({ instance }) => ({
    "p-toast-message": true,
    "p-toast-message-normal": instance.message().severity === "normal" || instance.message().severity === void 0,
    "p-toast-message-info": instance.message().severity === "info",
    "p-toast-message-warn": instance.message().severity === "warn",
    "p-toast-message-error": instance.message().severity === "error",
    "p-toast-message-success": instance.message().severity === "success",
    "p-toast-message-secondary": instance.message().severity === "secondary",
    "p-toast-message-contrast": instance.message().severity === "contrast"
  }),
  messageContent: "p-toast-message-content",
  messageIcon: ({ instance }) => ({
    "p-toast-message-icon": true,
    pi: !!instance.message().icon
  }),
  messageText: "p-toast-message-text",
  summary: "p-toast-summary",
  detail: "p-toast-detail",
  closeButton: "p-toast-close-button",
  closeIcon: ({ instance }) => ({
    "p-toast-close-icon": true,
    pi: !!instance.message().closeIcon
  })
};
var ToastStyle = class ToastStyle2 extends BaseStyle {
  name = "toast";
  style = style;
  classes = classes2;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToastStyle_BaseFactory = void 0;
    return function ToastStyle_Factory(__ngFactoryType__) {
      return (\u0275ToastStyle_BaseFactory || (\u0275ToastStyle_BaseFactory = \u0275\u0275getInheritedFactory(ToastStyle2)))(__ngFactoryType__ || ToastStyle2);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: ToastStyle2,
    factory: ToastStyle2.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastStyle, [{ type: Injectable }], null, null);
})();
var ToastClasses;
(function(ToastClasses2) {
  ToastClasses2["root"] = "p-toast";
  ToastClasses2["message"] = "p-toast-message";
  ToastClasses2["messageContent"] = "p-toast-message-content";
  ToastClasses2["messageIcon"] = "p-toast-message-icon";
  ToastClasses2["messageText"] = "p-toast-message-text";
  ToastClasses2["summary"] = "p-toast-summary";
  ToastClasses2["detail"] = "p-toast-detail";
  ToastClasses2["closeButton"] = "p-toast-close-button";
  ToastClasses2["closeIcon"] = "p-toast-close-icon";
})(ToastClasses || (ToastClasses = {}));
var SWIPE_THRESHOLD = 50;
var VELOCITY_THRESHOLD = 0.11;
var SWIPE_OUT_DURATION = 500;
var ToastItem = class ToastItem2 extends BaseComponent {
  static severityIcons = {
    success: "check",
    info: "info-circle",
    error: "times-circle",
    warn: "exclamation-triangle",
    secondary: "info-circle",
    contrast: "info-circle"
  };
  message = input(...ngDevMode ? [void 0, { debugName: "message" }] : (
    /* istanbul ignore next */
    []
  ));
  index = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "index" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  life = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "life" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  template = input(...ngDevMode ? [void 0, { debugName: "template" }] : (
    /* istanbul ignore next */
    []
  ));
  headlessTemplate = input(...ngDevMode ? [void 0, { debugName: "headlessTemplate" }] : (
    /* istanbul ignore next */
    []
  ));
  motionOptions = input(...ngDevMode ? [void 0, { debugName: "motionOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  clearAll = input(null, ...ngDevMode ? [{ debugName: "clearAll" }] : (
    /* istanbul ignore next */
    []
  ));
  stackExpanded = input(false, ...ngDevMode ? [{ debugName: "stackExpanded" }] : (
    /* istanbul ignore next */
    []
  ));
  stackIsHovered = input(false, ...ngDevMode ? [{ debugName: "stackIsHovered" }] : (
    /* istanbul ignore next */
    []
  ));
  stackIndex = input(0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "stackIndex" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  stackTotal = input(0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "stackTotal" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  stackOffset = input(0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "stackOffset" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  stackIsVisible = input(false, ...ngDevMode ? [{ debugName: "stackIsVisible" }] : (
    /* istanbul ignore next */
    []
  ));
  stackIsInteracting = input(false, ...ngDevMode ? [{ debugName: "stackIsInteracting" }] : (
    /* istanbul ignore next */
    []
  ));
  position = input("top-right", ...ngDevMode ? [{ debugName: "position" }] : (
    /* istanbul ignore next */
    []
  ));
  onAnimationStart = output();
  onAnimationEnd = output();
  onClose = output();
  onHeightChange = output();
  _componentStyle = inject(ToastStyle);
  timeout = null;
  visible = signal(void 0, ...ngDevMode ? [{ debugName: "visible" }] : (
    /* istanbul ignore next */
    []
  ));
  showCloseButton = computed(() => {
    var _a;
    return ((_a = this.message()) == null ? void 0 : _a.closable) !== false;
  }, ...ngDevMode ? [{ debugName: "showCloseButton" }] : (
    /* istanbul ignore next */
    []
  ));
  severityIcon = computed(() => {
    var _a;
    return ToastItem2.severityIcons[(_a = this.message()) == null ? void 0 : _a.severity] ?? null;
  }, ...ngDevMode ? [{ debugName: "severityIcon" }] : (
    /* istanbul ignore next */
    []
  ));
  isDestroyed = false;
  mounted = signal(false, ...ngDevMode ? [{ debugName: "mounted" }] : (
    /* istanbul ignore next */
    []
  ));
  measuredHeight = signal(0, ...ngDevMode ? [{ debugName: "measuredHeight" }] : (
    /* istanbul ignore next */
    []
  ));
  removed = signal(false, ...ngDevMode ? [{ debugName: "removed" }] : (
    /* istanbul ignore next */
    []
  ));
  offsetBeforeRemove = signal(0, ...ngDevMode ? [{ debugName: "offsetBeforeRemove" }] : (
    /* istanbul ignore next */
    []
  ));
  swiping = signal(false, ...ngDevMode ? [{ debugName: "swiping" }] : (
    /* istanbul ignore next */
    []
  ));
  isSwiped = signal(false, ...ngDevMode ? [{ debugName: "isSwiped" }] : (
    /* istanbul ignore next */
    []
  ));
  swipeOut = signal(false, ...ngDevMode ? [{ debugName: "swipeOut" }] : (
    /* istanbul ignore next */
    []
  ));
  swipeDirection = signal(null, ...ngDevMode ? [{ debugName: "swipeDirection" }] : (
    /* istanbul ignore next */
    []
  ));
  swipeOutDirection = signal(null, ...ngDevMode ? [{ debugName: "swipeOutDirection" }] : (
    /* istanbul ignore next */
    []
  ));
  swipeAmountX = signal(0, ...ngDevMode ? [{ debugName: "swipeAmountX" }] : (
    /* istanbul ignore next */
    []
  ));
  swipeAmountY = signal(0, ...ngDevMode ? [{ debugName: "swipeAmountY" }] : (
    /* istanbul ignore next */
    []
  ));
  pointerStartPosition = null;
  swipeStartTime = 0;
  dataMounted = computed(() => this.mounted() ? "" : null, ...ngDevMode ? [{ debugName: "dataMounted" }] : (
    /* istanbul ignore next */
    []
  ));
  dataFront = computed(() => this.stackIndex() === 0 ? "" : null, ...ngDevMode ? [{ debugName: "dataFront" }] : (
    /* istanbul ignore next */
    []
  ));
  dataExpanded = computed(() => this.stackExpanded() ? "" : null, ...ngDevMode ? [{ debugName: "dataExpanded" }] : (
    /* istanbul ignore next */
    []
  ));
  dataVisible = computed(() => this.stackIsVisible() ? "" : null, ...ngDevMode ? [{ debugName: "dataVisible" }] : (
    /* istanbul ignore next */
    []
  ));
  dataRemoved = computed(() => this.removed() ? "" : null, ...ngDevMode ? [{ debugName: "dataRemoved" }] : (
    /* istanbul ignore next */
    []
  ));
  dataSwiping = computed(() => this.swiping() ? "" : null, ...ngDevMode ? [{ debugName: "dataSwiping" }] : (
    /* istanbul ignore next */
    []
  ));
  dataSwiped = computed(() => this.isSwiped() ? "" : null, ...ngDevMode ? [{ debugName: "dataSwiped" }] : (
    /* istanbul ignore next */
    []
  ));
  dataSwipeOut = computed(() => this.swipeOut() ? "" : null, ...ngDevMode ? [{ debugName: "dataSwipeOut" }] : (
    /* istanbul ignore next */
    []
  ));
  dataSwipeDirection = computed(() => this.swipeOutDirection() ? this.swipeOutDirection() : null, ...ngDevMode ? [{ debugName: "dataSwipeDirection" }] : (
    /* istanbul ignore next */
    []
  ));
  dataDismissible = computed(() => {
    var _a;
    return String(((_a = this.message()) == null ? void 0 : _a.closable) !== false);
  }, ...ngDevMode ? [{ debugName: "dataDismissible" }] : (
    /* istanbul ignore next */
    []
  ));
  stackStyles = computed(() => {
    const idx = this.stackIndex();
    const total = this.stackTotal();
    return {
      "--px-toast-index": this.removed() ? this.stackIndex() : idx,
      "--px-toast-z-index": total - idx,
      "--px-initial-height": this.measuredHeight() + "px",
      "--px-toast-offset": (this.removed() ? this.offsetBeforeRemove() : this.stackOffset()) + "px",
      "--px-swipe-amount-x": this.swipeAmountX() + "px",
      "--px-swipe-amount-y": this.swipeAmountY() + "px",
      "z-index": total - idx
    };
  }, ...ngDevMode ? [{ debugName: "stackStyles" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    super();
    effect(() => {
      if (this.clearAll()) this.visible.set(false);
    });
    effect(() => {
      if (this.swipeOut()) return;
      const hovered = this.stackIsHovered();
      const interacting = this.stackIsInteracting();
      const swiping = this.swiping();
      if (hovered || interacting || swiping) this.pauseStackTimer();
      else this.startStackTimer();
    });
  }
  remainingTime = 0;
  timerStartTime = 0;
  headlessContext = computed(() => ({
    $implicit: this.message(),
    closeFn: this.onCloseIconClick
  }), ...ngDevMode ? [{ debugName: "headlessContext" }] : (
    /* istanbul ignore next */
    []
  ));
  messageContext = computed(() => ({
    $implicit: this.message(),
    closeFn: this.onCloseIconClick
  }), ...ngDevMode ? [{ debugName: "messageContext" }] : (
    /* istanbul ignore next */
    []
  ));
  dataP = computed(() => {
    const msg = this.message();
    return this.cn({ [msg == null ? void 0 : msg.severity]: msg == null ? void 0 : msg.severity });
  }, ...ngDevMode ? [{ debugName: "dataP" }] : (
    /* istanbul ignore next */
    []
  ));
  onCloseIconClick = (event) => {
    this.clearTimeout();
    this.handleFocusOnRemove();
    this.closeStack();
    event == null ? void 0 : event.preventDefault();
  };
  closeStack() {
    this.markRemoved();
    this.visible.set(false);
  }
  isDismissible() {
    var _a;
    return ((_a = this.message()) == null ? void 0 : _a.closable) !== false;
  }
  markRemoved() {
    if (this.isDestroyed) return;
    this.offsetBeforeRemove.set(this.stackOffset());
    this.removed.set(true);
    this.onHeightChange.emit({
      index: this.index(),
      height: 0,
      removed: true
    });
  }
  onPointerDown = (event) => {
    if (event.button !== 0) return;
    if (!this.isDismissible()) return;
    this.swipeStartTime = Date.now();
    this.offsetBeforeRemove.set(this.stackOffset());
    try {
      event.target.setPointerCapture(event.pointerId);
    } catch (e4) {
    }
    this.swiping.set(true);
    this.pointerStartPosition = {
      x: event.clientX,
      y: event.clientY
    };
  };
  onPointerMove = (event) => {
    var _a;
    if (!this.pointerStartPosition || !this.isDismissible()) return;
    if ((((_a = window.getSelection()) == null ? void 0 : _a.toString().length) ?? 0) > 0) return;
    const yDelta = event.clientY - this.pointerStartPosition.y;
    const xDelta = event.clientX - this.pointerStartPosition.x;
    const isRealSwipe = Math.abs(xDelta) > 1 || Math.abs(yDelta) > 1;
    const positionParts = (this.position() ?? "top-right").split("-");
    const side = positionParts[0];
    const align = positionParts[1];
    if (!this.swipeDirection() && isRealSwipe) this.swipeDirection.set(Math.abs(xDelta) > Math.abs(yDelta) ? "x" : "y");
    let nextX = 0;
    let nextY = 0;
    if (this.swipeDirection() === "x") nextX = align === "left" && xDelta < 0 || align === "right" && xDelta > 0 ? xDelta : this.applyDampening(xDelta);
    else if (this.swipeDirection() === "y") nextY = side === "top" && yDelta < 0 || side === "bottom" && yDelta > 0 ? yDelta : this.applyDampening(yDelta);
    if (Math.abs(nextX) > 0 || Math.abs(nextY) > 0) this.isSwiped.set(true);
    this.swipeAmountX.set(nextX);
    this.swipeAmountY.set(nextY);
  };
  onPointerUp = () => {
    if (this.swipeOut() || !this.isDismissible()) return;
    this.swiping.set(false);
    this.pointerStartPosition = null;
    const swipeAmount = this.swipeDirection() === "x" ? this.swipeAmountX() : this.swipeAmountY();
    const elapsed = Date.now() - (this.swipeStartTime || Date.now());
    const velocity = elapsed > 0 ? Math.abs(swipeAmount) / elapsed : 0;
    if (Math.abs(swipeAmount) >= SWIPE_THRESHOLD || velocity > VELOCITY_THRESHOLD) {
      this.offsetBeforeRemove.set(this.stackOffset());
      if (this.swipeDirection() === "x") this.swipeOutDirection.set(this.swipeAmountX() > 0 ? "right" : "left");
      else this.swipeOutDirection.set(this.swipeAmountY() > 0 ? "down" : "up");
      this.swipeOut.set(true);
      this.markRemoved();
      this.scheduleSwipeOutClose();
      return;
    }
    this.swipeAmountX.set(0);
    this.swipeAmountY.set(0);
    this.isSwiped.set(false);
    this.swipeDirection.set(null);
  };
  onDragEnd = () => {
    this.swiping.set(false);
    this.swipeDirection.set(null);
    this.pointerStartPosition = null;
  };
  applyDampening(delta) {
    const dampenedDelta = delta * (1 / (1.5 + Math.abs(delta) / 20));
    return Math.abs(dampenedDelta) < Math.abs(delta) ? dampenedDelta : delta;
  }
  scheduleSwipeOutClose() {
    this.clearTimeout();
    this.timeout = setTimeout(() => {
      this.visible.set(false);
    }, SWIPE_OUT_DURATION);
  }
  handleFocusOnRemove() {
    var _a, _b;
    const el = this.el.nativeElement;
    const activeEl = rt(el);
    if (!(el == null ? void 0 : el.contains(activeEl))) return;
    const next = (_a = el.nextElementSibling) == null ? void 0 : _a.querySelector('[data-pc-section="closebutton"]');
    const prev = (_b = el.previousElementSibling) == null ? void 0 : _b.querySelector('[data-pc-section="closebutton"]');
    requestAnimationFrame(() => {
      if (next) next.focus({ preventScroll: true });
      else if (prev) prev.focus({ preventScroll: true });
    });
  }
  get closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : void 0;
  }
  onBeforeEnter(event) {
    this.onAnimationStart.emit(event.element);
  }
  onAfterEnter() {
    this.measureStackHeight();
  }
  onAfterLeave(event) {
    if (!this.visible() && !this.isDestroyed) {
      this.onClose.emit({
        index: this.index(),
        message: this.message()
      });
      if (!this.isDestroyed) this.onAnimationEnd.emit(event.element);
    }
  }
  onAfterViewInit() {
    this.visible.set(true);
    this.measureStackHeight();
  }
  measureStackHeight() {
    if (this.mounted()) return;
    const el = this.el.nativeElement.querySelector("[data-stack]");
    if (!el) return;
    const orig = el.style.height;
    el.style.height = "auto";
    const height = el.getBoundingClientRect().height;
    el.style.height = orig;
    this.measuredHeight.set(height);
    this.onHeightChange.emit({
      index: this.index(),
      height
    });
    this.mounted.set(true);
  }
  startStackTimer() {
    const msg = this.message();
    if (msg == null ? void 0 : msg.sticky) return;
    this.clearTimeout();
    if (this.remainingTime <= 0) this.remainingTime = (msg == null ? void 0 : msg.life) || this.life() || 3e3;
    this.timerStartTime = Date.now();
    this.timeout = setTimeout(() => {
      this.handleFocusOnRemove();
      this.closeStack();
    }, this.remainingTime);
  }
  pauseStackTimer() {
    if (this.timerStartTime > 0 && this.timeout) {
      const elapsed = Date.now() - this.timerStartTime;
      this.remainingTime = Math.max(0, this.remainingTime - elapsed);
    }
    this.clearTimeout();
  }
  clearTimeout() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }
  onDestroy() {
    this.isDestroyed = true;
    this.clearTimeout();
    this.visible.set(false);
  }
  static \u0275fac = function ToastItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ToastItem2)();
  };
  static \u0275cmp = (function() {
    function ToastItem_Conditional_2_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0);
      }
    }
    function ToastItem_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ToastItem_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 3);
      }
      if (rf & 2) {
        const ctx_r0 = \u0275\u0275nextContext();
        \u0275\u0275property("ngTemplateOutlet", ctx_r0.headlessTemplate())("ngTemplateOutletContext", ctx_r0.headlessContext());
      }
    }
    function ToastItem_Conditional_3_Conditional_1_Conditional_0_Template(rf, ctx) {
      var _a;
      if (rf & 1) {
        \u0275\u0275element(0, "span", 4);
      }
      if (rf & 2) {
        const ctx_r0 = \u0275\u0275nextContext(3);
        \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("messageIcon"), (_a = ctx_r0.message()) == null ? void 0 : _a.icon));
        \u0275\u0275property("pBind", ctx_r0.ptm("messageIcon"));
      }
    }
    function ToastItem_Conditional_3_Conditional_1_Conditional_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275element(0, "svg", 9);
      }
      if (rf & 2) {
        const ctx_r0 = \u0275\u0275nextContext(4);
        \u0275\u0275classMap(ctx_r0.cx("messageIcon"));
        \u0275\u0275property("pBind", ctx_r0.ptm("messageIcon"));
        \u0275\u0275attribute("aria-hidden", true);
      }
    }
    function ToastItem_Conditional_3_Conditional_1_Conditional_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275element(0, "svg", 10);
      }
      if (rf & 2) {
        const ctx_r0 = \u0275\u0275nextContext(4);
        \u0275\u0275classMap(ctx_r0.cx("messageIcon"));
        \u0275\u0275property("pBind", ctx_r0.ptm("messageIcon"));
        \u0275\u0275attribute("aria-hidden", true);
      }
    }
    function ToastItem_Conditional_3_Conditional_1_Conditional_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275element(0, "svg", 11);
      }
      if (rf & 2) {
        const ctx_r0 = \u0275\u0275nextContext(4);
        \u0275\u0275classMap(ctx_r0.cx("messageIcon"));
        \u0275\u0275property("pBind", ctx_r0.ptm("messageIcon"));
        \u0275\u0275attribute("aria-hidden", true);
      }
    }
    function ToastItem_Conditional_3_Conditional_1_Conditional_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275element(0, "svg", 12);
      }
      if (rf & 2) {
        const ctx_r0 = \u0275\u0275nextContext(4);
        \u0275\u0275classMap(ctx_r0.cx("messageIcon"));
        \u0275\u0275property("pBind", ctx_r0.ptm("messageIcon"));
        \u0275\u0275attribute("aria-hidden", true);
      }
    }
    function ToastItem_Conditional_3_Conditional_1_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ToastItem_Conditional_3_Conditional_1_Conditional_1_Case_0_Template, 1, 4, "svg", 5)(1, ToastItem_Conditional_3_Conditional_1_Conditional_1_Case_1_Template, 1, 4, "svg", 6)(2, ToastItem_Conditional_3_Conditional_1_Conditional_1_Case_2_Template, 1, 4, "svg", 7)(3, ToastItem_Conditional_3_Conditional_1_Conditional_1_Case_3_Template, 1, 4, "svg", 8);
      }
      if (rf & 2) {
        let tmp_4_0 = void 0;
        const ctx_r0 = \u0275\u0275nextContext(3);
        \u0275\u0275conditional((tmp_4_0 = ctx_r0.severityIcon()) === "check" ? 0 : tmp_4_0 === "times-circle" ? 1 : tmp_4_0 === "exclamation-triangle" ? 2 : tmp_4_0 === "info-circle" ? 3 : -1);
      }
    }
    function ToastItem_Conditional_3_Conditional_1_Template(rf, ctx) {
      var _a, _b, _c;
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ToastItem_Conditional_3_Conditional_1_Conditional_0_Template, 1, 3, "span", 2)(1, ToastItem_Conditional_3_Conditional_1_Conditional_1_Template, 4, 1);
        \u0275\u0275elementStart(2, "div", 4)(3, "div", 4);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const ctx_r0 = \u0275\u0275nextContext(2);
        \u0275\u0275conditional(((_a = ctx_r0.message()) == null ? void 0 : _a.icon) ? 0 : ctx_r0.severityIcon() ? 1 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx_r0.cx("messageText"));
        \u0275\u0275property("pBind", ctx_r0.ptm("messageText"));
        \u0275\u0275attribute("data-p", ctx_r0.dataP());
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx_r0.cx("summary"));
        \u0275\u0275property("pBind", ctx_r0.ptm("summary"));
        \u0275\u0275attribute("data-p", ctx_r0.dataP());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", (_b = ctx_r0.message()) == null ? void 0 : _b.summary, " ");
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx_r0.cx("detail"));
        \u0275\u0275property("pBind", ctx_r0.ptm("detail"));
        \u0275\u0275attribute("data-p", ctx_r0.dataP());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate((_c = ctx_r0.message()) == null ? void 0 : _c.detail);
      }
    }
    function ToastItem_Conditional_3_Conditional_2_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0);
      }
    }
    function ToastItem_Conditional_3_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ToastItem_Conditional_3_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 3);
      }
      if (rf & 2) {
        const ctx_r0 = \u0275\u0275nextContext(2);
        \u0275\u0275property("ngTemplateOutlet", ctx_r0.template())("ngTemplateOutletContext", ctx_r0.messageContext());
      }
    }
    function ToastItem_Conditional_3_Conditional_3_Conditional_2_Template(rf, ctx) {
      var _a;
      if (rf & 1) {
        \u0275\u0275element(0, "span", 4);
      }
      if (rf & 2) {
        const ctx_r0 = \u0275\u0275nextContext(3);
        \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("closeIcon"), (_a = ctx_r0.message()) == null ? void 0 : _a.closeIcon));
        \u0275\u0275property("pBind", ctx_r0.ptm("closeIcon"));
      }
    }
    function ToastItem_Conditional_3_Conditional_3_Conditional_3_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275element(0, "svg", 15);
      }
      if (rf & 2) {
        const ctx_r0 = \u0275\u0275nextContext(3);
        \u0275\u0275classMap(ctx_r0.cx("closeIcon"));
        \u0275\u0275property("pBind", ctx_r0.ptm("closeIcon"));
        \u0275\u0275attribute("aria-hidden", true);
      }
    }
    function ToastItem_Conditional_3_Conditional_3_Template(rf, ctx) {
      var _a;
      if (rf & 1) {
        const _r2 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div")(1, "button", 13);
        \u0275\u0275listener("click", function ToastItem_Conditional_3_Conditional_3_Template_button_click_1_listener($event) {
          \u0275\u0275restoreView(_r2);
          const ctx_r0 = \u0275\u0275nextContext(2);
          return \u0275\u0275resetView(ctx_r0.onCloseIconClick($event));
        })("keydown.enter", function ToastItem_Conditional_3_Conditional_3_Template_button_keydown_enter_1_listener($event) {
          \u0275\u0275restoreView(_r2);
          const ctx_r0 = \u0275\u0275nextContext(2);
          return \u0275\u0275resetView(ctx_r0.onCloseIconClick($event));
        });
        \u0275\u0275conditionalCreate(2, ToastItem_Conditional_3_Conditional_3_Conditional_2_Template, 1, 3, "span", 2)(3, ToastItem_Conditional_3_Conditional_3_Conditional_3_Template, 1, 4, "svg", 14);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const ctx_r0 = \u0275\u0275nextContext(2);
        \u0275\u0275advance();
        \u0275\u0275property("pBind", ctx_r0.ptm("closeButton"));
        \u0275\u0275attribute("class", ctx_r0.cx("closeButton"))("aria-label", ctx_r0.closeAriaLabel)("data-p", ctx_r0.dataP());
        \u0275\u0275advance();
        \u0275\u0275conditional(((_a = ctx_r0.message()) == null ? void 0 : _a.closeIcon) ? 2 : 3);
      }
    }
    function ToastItem_Conditional_3_Template(rf, ctx) {
      var _a;
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 4);
        \u0275\u0275conditionalCreate(1, ToastItem_Conditional_3_Conditional_1_Template, 7, 15);
        \u0275\u0275conditionalCreate(2, ToastItem_Conditional_3_Conditional_2_Template, 1, 2, "ng-container");
        \u0275\u0275conditionalCreate(3, ToastItem_Conditional_3_Conditional_3_Template, 4, 5, "div");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = \u0275\u0275nextContext();
        \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("messageContent"), (_a = ctx_r0.message()) == null ? void 0 : _a.contentStyleClass));
        \u0275\u0275property("pBind", ctx_r0.ptm("messageContent"));
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx_r0.template() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx_r0.template() ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx_r0.showCloseButton() ? 3 : -1);
      }
    }
    return /* @__PURE__ */ \u0275\u0275defineComponent({
      type: ToastItem2,
      selectors: [["p-toast-item"]],
      inputs: {
        message: [1, "message"],
        index: [1, "index"],
        life: [1, "life"],
        template: [1, "template"],
        headlessTemplate: [1, "headlessTemplate"],
        motionOptions: [1, "motionOptions"],
        clearAll: [1, "clearAll"],
        stackExpanded: [1, "stackExpanded"],
        stackIsHovered: [1, "stackIsHovered"],
        stackIndex: [1, "stackIndex"],
        stackTotal: [1, "stackTotal"],
        stackOffset: [1, "stackOffset"],
        stackIsVisible: [1, "stackIsVisible"],
        stackIsInteracting: [1, "stackIsInteracting"],
        position: [1, "position"]
      },
      outputs: {
        onAnimationStart: "onAnimationStart",
        onAnimationEnd: "onAnimationEnd",
        onClose: "onClose",
        onHeightChange: "onHeightChange"
      },
      features: [\u0275\u0275ProvidersFeature([ToastStyle]), \u0275\u0275InheritDefinitionFeature],
      decls: 4,
      vars: 21,
      consts: [["container", ""], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", "data-stack", "", 3, "pMotionOnBeforeEnter", "pMotionOnAfterEnter", "pMotionOnAfterLeave", "pointerdown", "pointermove", "pointerup", "dragend", "pMotion", "pMotionAppear", "pMotionOptions", "pBind"], [3, "pBind", "class"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "pBind"], ["data-p-icon", "check", 3, "pBind", "class"], ["data-p-icon", "times-circle", 3, "pBind", "class"], ["data-p-icon", "exclamation-triangle", 3, "pBind", "class"], ["data-p-icon", "info-circle", 3, "pBind", "class"], ["data-p-icon", "check", 3, "pBind"], ["data-p-icon", "times-circle", 3, "pBind"], ["data-p-icon", "exclamation-triangle", 3, "pBind"], ["data-p-icon", "info-circle", 3, "pBind"], ["type", "button", "autofocus", "", 3, "click", "keydown.enter", "pBind"], ["data-p-icon", "times", 3, "pBind", "class"], ["data-p-icon", "times", 3, "pBind"]],
      template: function ToastItem_Template(rf, ctx) {
        var _a, _b;
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 1, 0);
          \u0275\u0275listener("pMotionOnBeforeEnter", function ToastItem_Template_div_pMotionOnBeforeEnter_0_listener($event) {
            return ctx.onBeforeEnter($event);
          })("pMotionOnAfterEnter", function ToastItem_Template_div_pMotionOnAfterEnter_0_listener() {
            return ctx.onAfterEnter();
          })("pMotionOnAfterLeave", function ToastItem_Template_div_pMotionOnAfterLeave_0_listener($event) {
            return ctx.onAfterLeave($event);
          })("pointerdown", function ToastItem_Template_div_pointerdown_0_listener($event) {
            return ctx.onPointerDown($event);
          })("pointermove", function ToastItem_Template_div_pointermove_0_listener($event) {
            return ctx.onPointerMove($event);
          })("pointerup", function ToastItem_Template_div_pointerup_0_listener() {
            return ctx.onPointerUp();
          })("dragend", function ToastItem_Template_div_dragend_0_listener() {
            return ctx.onDragEnd();
          });
          \u0275\u0275conditionalCreate(2, ToastItem_Conditional_2_Template, 1, 2, "ng-container")(3, ToastItem_Conditional_3_Template, 4, 6, "div", 2);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275styleMap(ctx.stackStyles());
          \u0275\u0275classMap(ctx.cn(ctx.cx("message"), (_a = ctx.message()) == null ? void 0 : _a.styleClass));
          \u0275\u0275property("pMotion", ctx.visible())("pMotionAppear", true)("pMotionOptions", ctx.motionOptions())("pBind", ctx.ptm("message"));
          \u0275\u0275attribute("id", (_b = ctx.message()) == null ? void 0 : _b.id)("data-p", ctx.dataP())("data-mounted", ctx.dataMounted())("data-removed", ctx.dataRemoved())("data-front", ctx.dataFront())("data-expanded", ctx.dataExpanded())("data-visible", ctx.dataVisible())("data-swiping", ctx.dataSwiping())("data-swiped", ctx.dataSwiped())("data-swipe-out", ctx.dataSwipeOut())("data-swipe-direction", ctx.dataSwipeDirection())("data-dismissible", ctx.dataDismissible());
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.headlessTemplate() ? 2 : 3);
        }
      },
      dependencies: [NgTemplateOutlet, Check, InfoCircle, TimesCircle, ExclamationTriangle, Times, SharedModule, Bind, MotionModule, MotionDirective],
      encapsulation: 2
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastItem, [{
    type: Component,
    args: [{
      selector: "p-toast-item",
      standalone: true,
      imports: [
        NgTemplateOutlet,
        Check,
        InfoCircle,
        TimesCircle,
        ExclamationTriangle,
        Times,
        SharedModule,
        Bind,
        MotionModule
      ],
      template: `
        <div
            #container
            [pMotion]="visible()"
            [pMotionAppear]="true"
            [pMotionOptions]="motionOptions()"
            (pMotionOnBeforeEnter)="onBeforeEnter($event)"
            (pMotionOnAfterEnter)="onAfterEnter()"
            (pMotionOnAfterLeave)="onAfterLeave($event)"
            [attr.id]="message()?.id"
            [pBind]="ptm('message')"
            [class]="cn(cx('message'), message()?.styleClass)"
            [style]="stackStyles()"
            (pointerdown)="onPointerDown($event)"
            (pointermove)="onPointerMove($event)"
            (pointerup)="onPointerUp()"
            (dragend)="onDragEnd()"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            [attr.data-p]="dataP()"
            data-stack=""
            [attr.data-mounted]="dataMounted()"
            [attr.data-removed]="dataRemoved()"
            [attr.data-front]="dataFront()"
            [attr.data-expanded]="dataExpanded()"
            [attr.data-visible]="dataVisible()"
            [attr.data-swiping]="dataSwiping()"
            [attr.data-swiped]="dataSwiped()"
            [attr.data-swipe-out]="dataSwipeOut()"
            [attr.data-swipe-direction]="dataSwipeDirection()"
            [attr.data-dismissible]="dataDismissible()"
        >
            @if (headlessTemplate()) {
                <ng-container *ngTemplateOutlet="headlessTemplate(); context: headlessContext()"></ng-container>
            } @else {
                <div [pBind]="ptm('messageContent')" [class]="cn(cx('messageContent'), message()?.contentStyleClass)">
                    @if (!template()) {
                        @if (message()?.icon) {
                            <span [pBind]="ptm('messageIcon')" [class]="cn(cx('messageIcon'), message()?.icon)"></span>
                        } @else if (severityIcon()) {
                            @switch (severityIcon()) {
                                @case ('check') {
                                    <svg data-p-icon="check" [pBind]="ptm('messageIcon')" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                                @case ('times-circle') {
                                    <svg data-p-icon="times-circle" [pBind]="ptm('messageIcon')" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                                @case ('exclamation-triangle') {
                                    <svg data-p-icon="exclamation-triangle" [pBind]="ptm('messageIcon')" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                                @case ('info-circle') {
                                    <svg data-p-icon="info-circle" [pBind]="ptm('messageIcon')" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                            }
                        }
                        <div [pBind]="ptm('messageText')" [class]="cx('messageText')" [attr.data-p]="dataP()">
                            <div [pBind]="ptm('summary')" [class]="cx('summary')" [attr.data-p]="dataP()">
                                {{ message()?.summary }}
                            </div>
                            <div [pBind]="ptm('detail')" [class]="cx('detail')" [attr.data-p]="dataP()">{{ message()?.detail }}</div>
                        </div>
                    }
                    @if (template()) {
                        <ng-container *ngTemplateOutlet="template(); context: messageContext()"></ng-container>
                    }
                    @if (showCloseButton()) {
                        <div>
                            <button
                                [pBind]="ptm('closeButton')"
                                type="button"
                                [attr.class]="cx('closeButton')"
                                (click)="onCloseIconClick($event)"
                                (keydown.enter)="onCloseIconClick($event)"
                                [attr.aria-label]="closeAriaLabel"
                                autofocus
                                [attr.data-p]="dataP()"
                            >
                                @if (message()?.closeIcon) {
                                    <span [pBind]="ptm('closeIcon')" [class]="cn(cx('closeIcon'), message()?.closeIcon)"></span>
                                } @else {
                                    <svg [pBind]="ptm('closeIcon')" data-p-icon="times" [class]="cx('closeIcon')" [attr.aria-hidden]="true" />
                                }
                            </button>
                        </div>
                    }
                </div>
            }
        </div>
    `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ToastStyle]
    }]
  }], () => [], {
    message: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "message",
        required: false
      }]
    }],
    index: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "index",
        required: false
      }]
    }],
    life: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "life",
        required: false
      }]
    }],
    template: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "template",
        required: false
      }]
    }],
    headlessTemplate: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "headlessTemplate",
        required: false
      }]
    }],
    motionOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "motionOptions",
        required: false
      }]
    }],
    clearAll: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "clearAll",
        required: false
      }]
    }],
    stackExpanded: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "stackExpanded",
        required: false
      }]
    }],
    stackIsHovered: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "stackIsHovered",
        required: false
      }]
    }],
    stackIndex: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "stackIndex",
        required: false
      }]
    }],
    stackTotal: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "stackTotal",
        required: false
      }]
    }],
    stackOffset: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "stackOffset",
        required: false
      }]
    }],
    stackIsVisible: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "stackIsVisible",
        required: false
      }]
    }],
    stackIsInteracting: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "stackIsInteracting",
        required: false
      }]
    }],
    position: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "position",
        required: false
      }]
    }],
    onAnimationStart: [{
      type: Output,
      args: ["onAnimationStart"]
    }],
    onAnimationEnd: [{
      type: Output,
      args: ["onAnimationEnd"]
    }],
    onClose: [{
      type: Output,
      args: ["onClose"]
    }],
    onHeightChange: [{
      type: Output,
      args: ["onHeightChange"]
    }]
  });
})();
var TOAST_INSTANCE = new InjectionToken("TOAST_INSTANCE");
var Toast = class Toast2 extends BaseComponent {
  componentName = "Toast";
  $pcToast = inject(TOAST_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, { self: true });
  key = input(...ngDevMode ? [void 0, { debugName: "key" }] : (
    /* istanbul ignore next */
    []
  ));
  autoZIndex = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "autoZIndex" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  baseZIndex = input(0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "baseZIndex" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  life = input(3e3, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "life" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  position = input("top-right", ...ngDevMode ? [{ debugName: "position" }] : (
    /* istanbul ignore next */
    []
  ));
  mode = input("stacked", ...ngDevMode ? [{ debugName: "mode" }] : (
    /* istanbul ignore next */
    []
  ));
  stackGap = input(8, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "stackGap" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  stackVisibleLimit = input(3, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "stackVisibleLimit" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  preventOpenDuplicates = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "preventOpenDuplicates" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  preventDuplicates = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "preventDuplicates" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  motionOptions = input(...ngDevMode ? [void 0, { debugName: "motionOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  computedMotionOptions = computed(() => __spreadValues(__spreadValues({}, this.ptm("motion")), this.motionOptions()), ...ngDevMode ? [{ debugName: "computedMotionOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  breakpoints = input(...ngDevMode ? [void 0, { debugName: "breakpoints" }] : (
    /* istanbul ignore next */
    []
  ));
  onClose = output();
  messageTemplate = contentChild("message", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "messageTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  headlessTemplate = contentChild("headless", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "headlessTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  messageSubscription;
  clearSubscription;
  messages;
  messageArchive;
  closingMessages = /* @__PURE__ */ new WeakSet();
  messageService = inject(MessageService);
  _componentStyle = inject(ToastStyle);
  styleElement = null;
  id = this.$useId.next("pn_id_");
  clearAllTrigger = signal(null, ...ngDevMode ? [{ debugName: "clearAllTrigger" }] : (
    /* istanbul ignore next */
    []
  ));
  hovered = signal(false, ...ngDevMode ? [{ debugName: "hovered" }] : (
    /* istanbul ignore next */
    []
  ));
  isInteracting = signal(false, ...ngDevMode ? [{ debugName: "isInteracting" }] : (
    /* istanbul ignore next */
    []
  ));
  heights = signal([], ...ngDevMode ? [{ debugName: "heights" }] : (
    /* istanbul ignore next */
    []
  ));
  sortedHeights = computed(() => [...this.heights()].sort((a4, b3) => b3.index - a4.index), ...ngDevMode ? [{ debugName: "sortedHeights" }] : (
    /* istanbul ignore next */
    []
  ));
  frontToastHeight = computed(() => {
    var _a;
    return ((_a = this.sortedHeights()[0]) == null ? void 0 : _a.height) ?? 0;
  }, ...ngDevMode ? [{ debugName: "frontToastHeight" }] : (
    /* istanbul ignore next */
    []
  ));
  stackOffsets = computed(() => {
    const sorted = this.sortedHeights();
    const offsets = [0];
    for (let i2 = 1; i2 < sorted.length; i2++) offsets[i2] = offsets[i2 - 1] + sorted[i2 - 1].height;
    return offsets;
  }, ...ngDevMode ? [{ debugName: "stackOffsets" }] : (
    /* istanbul ignore next */
    []
  ));
  visualStackIndices = computed(() => {
    const map = /* @__PURE__ */ new Map();
    this.sortedHeights().forEach((entry, idx) => map.set(entry.index, idx));
    return map;
  }, ...ngDevMode ? [{ debugName: "visualStackIndices" }] : (
    /* istanbul ignore next */
    []
  ));
  visibleIndices = computed(() => new Set(this.sortedHeights().slice(0, this.stackVisibleLimit()).map((x4) => x4.index)), ...ngDevMode ? [{ debugName: "visibleIndices" }] : (
    /* istanbul ignore next */
    []
  ));
  raiseFactor = computed(() => {
    return this.position().startsWith("bottom") ? -1 : 1;
  }, ...ngDevMode ? [{ debugName: "raiseFactor" }] : (
    /* istanbul ignore next */
    []
  ));
  isExpanded = computed(() => this.mode() === "expanded" || this.hovered(), ...ngDevMode ? [{ debugName: "isExpanded" }] : (
    /* istanbul ignore next */
    []
  ));
  hostDataExpanded = computed(() => this.isExpanded() ? "" : null, ...ngDevMode ? [{ debugName: "hostDataExpanded" }] : (
    /* istanbul ignore next */
    []
  ));
  stackTotal = computed(() => {
    var _a;
    return ((_a = this.messages) == null ? void 0 : _a.length) ?? 0;
  }, ...ngDevMode ? [{ debugName: "stackTotal" }] : (
    /* istanbul ignore next */
    []
  ));
  dataP = computed(() => {
    const pos = this.position();
    return this.cn({ [pos]: pos });
  }, ...ngDevMode ? [{ debugName: "dataP" }] : (
    /* istanbul ignore next */
    []
  ));
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  getStackIndex(domIndex) {
    var _a;
    return this.visualStackIndices().get(domIndex) ?? (((_a = this.messages) == null ? void 0 : _a.length) ?? 0) - 1 - domIndex;
  }
  getStackOffset(domIndex) {
    const visualIdx = this.visualStackIndices().get(domIndex) ?? 0;
    return this.stackOffsets()[visualIdx] ?? 0;
  }
  isStackVisible(domIndex) {
    return this.visibleIndices().has(domIndex);
  }
  onInit() {
    this.messageSubscription = this.messageService.messageObserver.subscribe((messages) => {
      if (messages) {
        if (Array.isArray(messages)) {
          const filteredMessages = messages.filter((m3) => this.canAdd(m3));
          this.add(filteredMessages);
        } else if (this.canAdd(messages)) this.add([messages]);
      }
    });
    this.clearSubscription = this.messageService.clearObserver.subscribe((key) => {
      if (key) {
        if (this.key() === key) this.clearAll();
      } else this.clearAll();
      this.cd.markForCheck();
    });
  }
  clearAll() {
    this.clearAllTrigger.set({});
    this.heights.set([]);
    this.hovered.set(false);
    this.isInteracting.set(false);
    this.messageArchive = void 0;
  }
  onAfterViewInit() {
    if (this.breakpoints()) this.createStyle();
  }
  add(messages) {
    this.messages = this.messages ? [...this.messages, ...messages] : [...messages];
    if (this.preventDuplicates()) this.messageArchive = this.messageArchive ? [...this.messageArchive, ...messages] : [...messages];
    this.cd.markForCheck();
  }
  canAdd(message) {
    let allow = this.key() === message.key;
    if (allow && this.preventOpenDuplicates()) {
      const openMessages = (this.messages ?? []).filter((m3) => !this.closingMessages.has(m3));
      allow = !this.containsMessage(openMessages, message);
    }
    if (allow && this.preventDuplicates()) allow = !this.containsMessage(this.messageArchive ?? [], message);
    return allow;
  }
  containsMessage(collection, message) {
    if (!collection) return false;
    return collection.find((m3) => m3.summary === message.summary && m3.detail == message.detail && m3.severity === message.severity) != null;
  }
  onMessageClose(event) {
    var _a, _b;
    (_a = this.messages) == null ? void 0 : _a.splice(event.index, 1);
    this.heights.update((h) => h.filter((x4) => x4.index !== event.index).map((x4) => x4.index > event.index ? __spreadProps(__spreadValues({}, x4), {
      index: x4.index - 1
    }) : x4));
    if ((((_b = this.messages) == null ? void 0 : _b.length) ?? 0) <= 1) this.hovered.set(false);
    this.onClose.emit({ message: event.message });
    this.onAnimationEnd();
    this.cd.detectChanges();
  }
  onAnimationStart() {
    var _a, _b, _c;
    this.renderer.setAttribute((_a = this.el) == null ? void 0 : _a.nativeElement, this.id, "");
    if (this.autoZIndex() && ((_b = this.el) == null ? void 0 : _b.nativeElement.style.zIndex) === "") zindexutils_default.set("modal", (_c = this.el) == null ? void 0 : _c.nativeElement, this.baseZIndex() || this.config.zIndex.modal);
  }
  onAnimationEnd() {
    var _a;
    if (this.autoZIndex() && p(this.messages)) zindexutils_default.clear((_a = this.el) == null ? void 0 : _a.nativeElement);
  }
  onContainerMouseEnter() {
    this.hovered.set(true);
  }
  onContainerMouseLeave(event) {
    var _a;
    if (this.isInteracting()) return;
    const container = (_a = this.el) == null ? void 0 : _a.nativeElement;
    const relatedTarget = event.relatedTarget;
    if (relatedTarget && (container == null ? void 0 : container.contains(relatedTarget))) return;
    this.hovered.set(false);
  }
  onContainerPointerDown(event) {
    const target = event.target;
    if (target && target.closest('[data-dismissible="false"]')) return;
    this.isInteracting.set(true);
  }
  onContainerPointerUp() {
    this.isInteracting.set(false);
  }
  onItemHeightChange(event) {
    var _a;
    if (event.removed) {
      const closing = (_a = this.messages) == null ? void 0 : _a[event.index];
      if (closing) this.closingMessages.add(closing);
      this.heights.update((h) => h.filter((x4) => x4.index !== event.index));
      return;
    }
    this.heights.update((h) => {
      const existing = h.findIndex((x4) => x4.index === event.index);
      if (existing >= 0) {
        const copy = [...h];
        copy[existing] = event;
        return copy;
      }
      return [...h, event].sort((a4, b3) => a4.index - b3.index);
    });
  }
  createStyle() {
    var _a, _b, _c, _d;
    if (this.$styleScope.isolated) {
      this.$isolatedStyle("breakpoints", this.psel(this.breakpointsCSS()));
      return;
    }
    if (!this.styleElement) {
      const styleEl = this.renderer.createElement("style");
      be(styleEl, "nonce", (_b = (_a = this.config) == null ? void 0 : _a.csp()) == null ? void 0 : _b.nonce);
      this.renderer.appendChild(getShadowRoot(this.el.nativeElement) ?? this.document.head, styleEl);
      const innerHTML = this.breakpointsCSS();
      this.renderer.setProperty(styleEl, "innerHTML", this.psel(innerHTML));
      be(styleEl, "nonce", (_d = (_c = this.config) == null ? void 0 : _c.csp()) == null ? void 0 : _d.nonce);
      this.styleElement = styleEl;
    }
  }
  breakpointsCSS() {
    const bp = this.breakpoints();
    let innerHTML = "";
    for (let breakpoint in bp) {
      let breakpointStyle = "";
      for (let styleProp in bp[breakpoint]) breakpointStyle += styleProp + ":" + bp[breakpoint][styleProp] + " !important;";
      innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-toast[${this.id}] {
                           ${breakpointStyle}
                        }
                    }
                `;
    }
    return innerHTML;
  }
  destroyStyle() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
    }
  }
  onDestroy() {
    if (this.messageSubscription) this.messageSubscription.unsubscribe();
    if (this.el && this.autoZIndex()) zindexutils_default.clear(this.el.nativeElement);
    if (this.clearSubscription) this.clearSubscription.unsubscribe();
    this.destroyStyle();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Toast_BaseFactory = void 0;
    return function Toast_Factory(__ngFactoryType__) {
      return (\u0275Toast_BaseFactory || (\u0275Toast_BaseFactory = \u0275\u0275getInheritedFactory(Toast2)))(__ngFactoryType__ || Toast2);
    };
  })();
  static \u0275cmp = (function() {
    const _c0 = ["message"];
    const _c1 = ["headless"];
    function Toast_For_1_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "p-toast-item", 1);
        \u0275\u0275listener("onClose", function Toast_For_1_Template_p_toast_item_onClose_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          const ctx_r1 = \u0275\u0275nextContext();
          return \u0275\u0275resetView(ctx_r1.onMessageClose($event));
        })("onAnimationEnd", function Toast_For_1_Template_p_toast_item_onAnimationEnd_0_listener() {
          \u0275\u0275restoreView(_r1);
          const ctx_r1 = \u0275\u0275nextContext();
          return \u0275\u0275resetView(ctx_r1.onAnimationEnd());
        })("onAnimationStart", function Toast_For_1_Template_p_toast_item_onAnimationStart_0_listener() {
          \u0275\u0275restoreView(_r1);
          const ctx_r1 = \u0275\u0275nextContext();
          return \u0275\u0275resetView(ctx_r1.onAnimationStart());
        })("onHeightChange", function Toast_For_1_Template_p_toast_item_onHeightChange_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          const ctx_r1 = \u0275\u0275nextContext();
          return \u0275\u0275resetView(ctx_r1.onItemHeightChange($event));
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const msg_r3 = ctx.$implicit;
        const \u0275$index_1_r4 = ctx.$index;
        const ctx_r1 = \u0275\u0275nextContext();
        \u0275\u0275property("message", msg_r3)("index", \u0275$index_1_r4)("life", ctx_r1.life())("clearAll", ctx_r1.clearAllTrigger())("template", ctx_r1.messageTemplate())("headlessTemplate", ctx_r1.headlessTemplate())("pt", ctx_r1.pt())("unstyled", ctx_r1.unstyled())("motionOptions", ctx_r1.computedMotionOptions())("stackExpanded", ctx_r1.isExpanded())("stackIsHovered", ctx_r1.hovered())("stackIsInteracting", ctx_r1.isInteracting())("stackIndex", ctx_r1.getStackIndex(\u0275$index_1_r4))("stackTotal", ctx_r1.stackTotal())("stackOffset", ctx_r1.getStackOffset(\u0275$index_1_r4))("stackIsVisible", ctx_r1.isStackVisible(\u0275$index_1_r4))("position", ctx_r1.position());
      }
    }
    return /* @__PURE__ */ \u0275\u0275defineComponent({
      type: Toast2,
      selectors: [["p-toast"]],
      contentQueries: function Toast_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuerySignal(dirIndex, ctx.messageTemplate, _c0, 4)(dirIndex, ctx.headlessTemplate, _c1, 4);
        }
        if (rf & 2) {
          \u0275\u0275queryAdvance(2);
        }
      },
      hostVars: 13,
      hostBindings: function Toast_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("mouseenter", function Toast_mouseenter_HostBindingHandler() {
            return ctx.onContainerMouseEnter();
          })("mouseleave", function Toast_mouseleave_HostBindingHandler($event) {
            return ctx.onContainerMouseLeave($event);
          })("pointerdown", function Toast_pointerdown_HostBindingHandler($event) {
            return ctx.onContainerPointerDown($event);
          })("pointerup", function Toast_pointerup_HostBindingHandler() {
            return ctx.onContainerPointerUp();
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("data-p", ctx.dataP())("data-position", ctx.position())("data-expanded", ctx.hostDataExpanded());
          \u0275\u0275styleMap(ctx.sx("root"));
          \u0275\u0275classMap(ctx.cx("root"));
          \u0275\u0275styleProp("--%NS%px-gap", ctx.stackGap(), "px")("--%NS%px-front-toast-height", ctx.frontToastHeight(), "px")("--%NS%px-raise-factor", ctx.raiseFactor());
        }
      },
      inputs: {
        key: [1, "key"],
        autoZIndex: [1, "autoZIndex"],
        baseZIndex: [1, "baseZIndex"],
        life: [1, "life"],
        position: [1, "position"],
        mode: [1, "mode"],
        stackGap: [1, "stackGap"],
        stackVisibleLimit: [1, "stackVisibleLimit"],
        preventOpenDuplicates: [1, "preventOpenDuplicates"],
        preventDuplicates: [1, "preventDuplicates"],
        motionOptions: [1, "motionOptions"],
        breakpoints: [1, "breakpoints"]
      },
      outputs: {
        onClose: "onClose"
      },
      features: [\u0275\u0275ProvidersFeature([
        ToastStyle,
        {
          provide: TOAST_INSTANCE,
          useExisting: Toast2
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Toast2
        }
      ]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      consts: [[3, "message", "index", "life", "clearAll", "template", "headlessTemplate", "pt", "unstyled", "motionOptions", "stackExpanded", "stackIsHovered", "stackIsInteracting", "stackIndex", "stackTotal", "stackOffset", "stackIsVisible", "position"], [3, "onClose", "onAnimationEnd", "onAnimationStart", "onHeightChange", "message", "index", "life", "clearAll", "template", "headlessTemplate", "pt", "unstyled", "motionOptions", "stackExpanded", "stackIsHovered", "stackIsInteracting", "stackIndex", "stackTotal", "stackOffset", "stackIsVisible", "position"]],
      template: function Toast_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275repeaterCreate(0, Toast_For_1_Template, 1, 17, "p-toast-item", 0, \u0275\u0275repeaterTrackByIdentity);
        }
        if (rf & 2) {
          \u0275\u0275repeater(ctx.messages);
        }
      },
      dependencies: [ToastItem, SharedModule],
      encapsulation: 2
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Toast, [{
    type: Component,
    args: [{
      selector: "p-toast",
      standalone: true,
      imports: [ToastItem, SharedModule],
      template: `
        @for (msg of messages; track msg; let i = $index) {
            <p-toast-item
                [message]="msg"
                [index]="i"
                [life]="life()"
                [clearAll]="clearAllTrigger()"
                (onClose)="onMessageClose($event)"
                (onAnimationEnd)="onAnimationEnd()"
                (onAnimationStart)="onAnimationStart()"
                [template]="messageTemplate()"
                [headlessTemplate]="headlessTemplate()"
                [pt]="pt()"
                [unstyled]="unstyled()"
                [motionOptions]="computedMotionOptions()"
                [stackExpanded]="isExpanded()"
                [stackIsHovered]="hovered()"
                [stackIsInteracting]="isInteracting()"
                [stackIndex]="getStackIndex(i)"
                [stackTotal]="stackTotal()"
                [stackOffset]="getStackOffset(i)"
                [stackIsVisible]="isStackVisible(i)"
                [position]="position()"
                (onHeightChange)="onItemHeightChange($event)"
            ></p-toast-item>
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [
        ToastStyle,
        {
          provide: TOAST_INSTANCE,
          useExisting: Toast
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Toast
        }
      ],
      host: {
        "[class]": "cx('root')",
        "[style]": "sx('root')",
        "[attr.data-p]": "dataP()",
        "[attr.data-position]": "position()",
        "[attr.data-expanded]": "hostDataExpanded()",
        "[style.--px-gap.px]": "stackGap()",
        "[style.--px-front-toast-height.px]": "frontToastHeight()",
        "[style.--px-raise-factor]": "raiseFactor()",
        "(mouseenter)": "onContainerMouseEnter()",
        "(mouseleave)": "onContainerMouseLeave($event)",
        "(pointerdown)": "onContainerPointerDown($event)",
        "(pointerup)": "onContainerPointerUp()"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    key: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "key",
        required: false
      }]
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "autoZIndex",
        required: false
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "baseZIndex",
        required: false
      }]
    }],
    life: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "life",
        required: false
      }]
    }],
    position: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "position",
        required: false
      }]
    }],
    mode: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "mode",
        required: false
      }]
    }],
    stackGap: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "stackGap",
        required: false
      }]
    }],
    stackVisibleLimit: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "stackVisibleLimit",
        required: false
      }]
    }],
    preventOpenDuplicates: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "preventOpenDuplicates",
        required: false
      }]
    }],
    preventDuplicates: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "preventDuplicates",
        required: false
      }]
    }],
    motionOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "motionOptions",
        required: false
      }]
    }],
    breakpoints: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "breakpoints",
        required: false
      }]
    }],
    onClose: [{
      type: Output,
      args: ["onClose"]
    }],
    messageTemplate: [{
      type: ContentChild,
      args: ["message", {
        descendants: false,
        isSignal: true
      }]
    }],
    headlessTemplate: [{
      type: ContentChild,
      args: ["headless", {
        descendants: false,
        isSignal: true
      }]
    }]
  });
})();
var ToastModule = class ToastModule2 {
  static \u0275fac = function ToastModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ToastModule2)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: ToastModule2,
    imports: [Toast, SharedModule],
    exports: [Toast, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Toast, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastModule, [{
    type: NgModule,
    args: [{
      imports: [Toast, SharedModule],
      exports: [Toast, SharedModule]
    }]
  }], null, null);
})();

export {
  BaseComponent,
  Toast,
  ToastModule
};
//# debugId=3e00947e-7649-5819-9950-5c9d9626b8f3
//# sourceMappingURL=chunk-DZI3S65K.js.map
