import {
  BaseStyle,
  N,
  PrimeNG,
  Qt,
  S,
  base,
  te
} from "./chunk-HCR355QR.js";
import {
  MessageService,
  PrimeTemplate,
  R,
  SharedModule,
  a,
  c,
  g,
  h,
  k,
  l,
  m,
  s
} from "./chunk-WDE6N5F6.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  isPlatformServer
} from "./chunk-DD4MNYDA.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  ViewEncapsulation,
  afterRenderEffect,
  booleanAttribute,
  computed,
  effect,
  inject,
  input,
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
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YUKRBYLH.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-5SZB5ECT.js";

// node_modules/primeng/node_modules/@primeuix/utils/dist/classnames/index.mjs
function f(...e) {
  if (e) {
    let t2 = [];
    for (let i2 = 0; i2 < e.length; i2++) {
      let n = e[i2];
      if (!n) continue;
      let s3 = typeof n;
      if (s3 === "string" || s3 === "number") t2.push(n);
      else if (s3 === "object") {
        let c3 = Array.isArray(n) ? [f(...n)] : Object.entries(n).map(([r, o]) => o ? r : void 0);
        t2 = c3.length ? t2.concat(c3.filter((r) => !!r)) : t2;
      }
    }
    return t2.join(" ").trim();
  }
}

// node_modules/primeng/node_modules/@primeuix/utils/dist/mergeprops/index.mjs
var x = Object.defineProperty;
var d = Object.getOwnPropertySymbols;
var c2 = Object.prototype.hasOwnProperty;
var y = Object.prototype.propertyIsEnumerable;
var m2 = (t2, r, e) => r in t2 ? x(t2, r, { enumerable: true, configurable: true, writable: true, value: e }) : t2[r] = e;
var u = (t2, r) => {
  for (var e in r || (r = {})) c2.call(r, e) && m2(t2, e, r[e]);
  if (d) for (var e of d(r)) y.call(r, e) && m2(t2, e, r[e]);
  return t2;
};
function i(...t2) {
  if (t2) {
    let r = [];
    for (let e = 0; e < t2.length; e++) {
      let a2 = t2[e];
      if (!a2) continue;
      let o = typeof a2;
      if (o === "string" || o === "number") r.push(a2);
      else if (o === "object") {
        let f2 = Array.isArray(a2) ? [i(...a2)] : Object.entries(a2).map(([s3, n]) => n ? s3 : void 0);
        r = f2.length ? r.concat(f2.filter((s3) => !!s3)) : r;
      }
    }
    return r.join(" ").trim();
  }
}
function l2(t2) {
  return typeof t2 == "function" && "call" in t2 && "apply" in t2;
}
function p({ skipUndefined: t2 = false }, ...r) {
  return r == null ? void 0 : r.reduce((e, a2 = {}) => {
    for (let o in a2) {
      let f2 = a2[o];
      if (!(t2 && f2 === void 0)) if (o === "style") e.style = u(u({}, e.style), a2.style);
      else if (o === "class" || o === "className") e[o] = i(e[o], a2[o]);
      else if (l2(f2)) {
        let s3 = e[o];
        e[o] = s3 ? (...n) => {
          s3(...n), f2(...n);
        } : f2;
      } else e[o] = f2;
    }
    return e;
  }, {});
}
function w(...t2) {
  return p({ skipUndefined: false }, ...t2);
}

// node_modules/primeng/node_modules/@primeuix/utils/dist/uuid/index.mjs
var t = {};
function s2(n = "pui_id_") {
  return Object.hasOwn(t, n) || (t[n] = 0), t[n]++, `${n}${t[n]}`;
}

// node_modules/primeng/fesm2022/primeng-basecomponent.mjs
var BaseComponentStyle = class _BaseComponentStyle extends BaseStyle {
  name = "common";
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseComponentStyle_BaseFactory;
    return function BaseComponentStyle_Factory(__ngFactoryType__) {
      return (\u0275BaseComponentStyle_BaseFactory || (\u0275BaseComponentStyle_BaseFactory = \u0275\u0275getInheritedFactory(_BaseComponentStyle)))(__ngFactoryType__ || _BaseComponentStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BaseComponentStyle,
    factory: _BaseComponentStyle.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseComponentStyle, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PARENT_INSTANCE = new InjectionToken("PARENT_INSTANCE");
var BaseComponent = class _BaseComponent {
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
  scopedStyleEl;
  parent = this.$params.parent;
  cn = f;
  _themeScopedListener;
  themeChangeListenerMap = /* @__PURE__ */ new Map();
  /******************** Inputs ********************/
  /**
   * Defines scoped design tokens of the component.
   * @defaultValue undefined
   * @group Props
   */
  dt = input(...ngDevMode ? [void 0, {
    debugName: "dt"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Indicates whether the component should be rendered without styles.
   * @defaultValue undefined
   * @group Props
   */
  unstyled = input(...ngDevMode ? [void 0, {
    debugName: "unstyled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Used to pass attributes to DOM elements inside the component.
   * @defaultValue undefined
   * @group Props
   */
  pt = input(...ngDevMode ? [void 0, {
    debugName: "pt"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Used to configure passthrough(pt) options of the component.
   * @group Props
   * @defaultValue undefined
   */
  ptOptions = input(...ngDevMode ? [void 0, {
    debugName: "ptOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /******************** Computed ********************/
  $attrSelector = s2("pc");
  get $name() {
    return this["componentName"] || "UnknownComponent";
  }
  get $hostName() {
    return this["hostName"];
  }
  get $el() {
    var _a;
    return (_a = this.el) == null ? void 0 : _a.nativeElement;
  }
  directivePT = signal(void 0, ...ngDevMode ? [{
    debugName: "directivePT"
  }] : (
    /* istanbul ignore next */
    []
  ));
  directiveUnstyled = signal(void 0, ...ngDevMode ? [{
    debugName: "directiveUnstyled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  $unstyled = computed(() => {
    var _a;
    return this.unstyled() ?? this.directiveUnstyled() ?? ((_a = this.config) == null ? void 0 : _a.unstyled()) ?? false;
  }, ...ngDevMode ? [{
    debugName: "$unstyled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  $pt = computed(() => {
    return m(this.pt() || this.directivePT(), this.$params);
  }, ...ngDevMode ? [{
    debugName: "$pt"
  }] : (
    /* istanbul ignore next */
    []
  ));
  get $globalPT() {
    var _a;
    return this._getPT((_a = this.config) == null ? void 0 : _a.pt(), void 0, (value) => m(value, this.$params));
  }
  get $defaultPT() {
    var _a;
    return this._getPT((_a = this.config) == null ? void 0 : _a.pt(), void 0, (value) => this._getOptionValue(value, this.$hostName || this.$name, this.$params) || m(value, this.$params));
  }
  get $style() {
    return __spreadValues(__spreadValues({
      theme: void 0,
      css: void 0,
      classes: void 0,
      inlineStyles: void 0
    }, (this._getHostInstance(this) || {}).$style), this["_componentStyle"]);
  }
  get $styleOptions() {
    var _a;
    return {
      nonce: (_a = this.config) == null ? void 0 : _a.csp().nonce
    };
  }
  get $params() {
    const parentInstance = this._getHostInstance(this) || this.$parentInstance;
    return {
      instance: this,
      parent: {
        instance: parentInstance
      }
    };
  }
  /******************** Lifecycle Hooks ********************/
  onInit() {
  }
  onChanges(changes) {
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
  /******************** Angular Lifecycle Hooks ********************/
  constructor() {
    effect((onCleanup) => {
      if (this.document && !isPlatformServer(this.platformId)) {
        if (this.dt()) {
          this._loadScopedThemeStyles(this.dt());
          this._themeScopedListener = () => this._loadScopedThemeStyles(this.dt());
          this._themeChangeListener("_themeScopedListener", this._themeScopedListener);
        } else {
          this._unloadScopedThemeStyles();
        }
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
  /**
   * ⚠ Do not override ngOnInit!
   *
   * Use 'onInit()' in subclasses instead.
   */
  ngOnInit() {
    this._loadCoreStyles();
    this._loadStyles();
    this.onInit();
    this._hook("onInit");
  }
  /**
   * ⚠ Do not override ngOnChanges!
   *
   * Use 'onChanges(changes: SimpleChanges)' in subclasses instead.
   */
  ngOnChanges(changes) {
    this.onChanges(changes);
    this._hook("onChanges", changes);
  }
  /**
   * ⚠ Do not override ngDoCheck!
   *
   * Use 'onDoCheck()' in subclasses instead.
   */
  ngDoCheck() {
    this.onDoCheck();
    this._hook("onDoCheck");
  }
  /**
   * ⚠ Do not override ngAfterContentInit!
   *
   * Use 'onAfterContentInit()' in subclasses instead.
   */
  ngAfterContentInit() {
    this.onAfterContentInit();
    this._hook("onAfterContentInit");
  }
  /**
   * ⚠ Do not override ngAfterContentChecked!
   *
   * Use 'onAfterContentChecked()' in subclasses instead.
   */
  ngAfterContentChecked() {
    this.onAfterContentChecked();
    this._hook("onAfterContentChecked");
  }
  /**
   * ⚠ Do not override ngAfterViewInit!
   *
   * Use 'onAfterViewInit()' in subclasses instead.
   */
  ngAfterViewInit() {
    var _a;
    (_a = this.$el) == null ? void 0 : _a.setAttribute(this.$attrSelector, "");
    this.onAfterViewInit();
    this._hook("onAfterViewInit");
  }
  /**
   * ⚠ Do not override ngAfterViewChecked!
   *
   * Use 'onAfterViewChecked()' in subclasses instead.
   */
  ngAfterViewChecked() {
    this.onAfterViewChecked();
    this._hook("onAfterViewChecked");
  }
  /**
   * ⚠ Do not override ngOnDestroy!
   *
   * Use 'onDestroy()' in subclasses instead.
   */
  ngOnDestroy() {
    this._removeThemeListeners();
    this._unloadScopedThemeStyles();
    this.onDestroy();
    this._hook("onDestroy");
  }
  /******************** Methods ********************/
  _mergeProps(fn, ...args) {
    return c(fn) ? fn(...args) : w(...args);
  }
  _getHostInstance(instance) {
    return instance ? this.$hostName ? this.$name === this.$hostName ? instance : this._getHostInstance(instance.$parentInstance) : instance.$parentInstance : void 0;
  }
  _getPropValue(name) {
    var _a;
    return this[name] || ((_a = this._getHostInstance(this)) == null ? void 0 : _a[name]);
  }
  _getOptionValue(options, key = "", params = {}) {
    return R(options, key, params);
  }
  _hook(hookName, ...args) {
    if (!this.$hostName) {
      const selfHook = this._usePT(this._getPT(this.$pt(), this.$name), this._getOptionValue, `hooks.${hookName}`);
      const defaultHook = this._useDefaultPT(this._getOptionValue, `hooks.${hookName}`);
      selfHook == null ? void 0 : selfHook(...args);
      defaultHook == null ? void 0 : defaultHook(...args);
    }
  }
  /********** Load Styles **********/
  _load() {
    if (!base.isStyleNameLoaded("base")) {
      this.baseStyle.loadBaseCSS(this.$styleOptions);
      this._loadGlobalStyles();
      base.setLoadedStyleName("base");
    }
    this._loadThemeStyles();
  }
  _loadStyles() {
    this._load();
    this._themeChangeListener("_load", () => this._load());
  }
  _loadGlobalStyles() {
    const globalCSS = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
    s(globalCSS) && this.baseStyle.load(globalCSS, __spreadValues({
      name: "global"
    }, this.$styleOptions));
  }
  _loadCoreStyles() {
    var _a, _b;
    if (!base.isStyleNameLoaded((_a = this.$style) == null ? void 0 : _a.name) && ((_b = this.$style) == null ? void 0 : _b.name)) {
      this.baseComponentStyle.loadCSS(this.$styleOptions);
      this.$style.loadCSS(this.$styleOptions);
      base.setLoadedStyleName(this.$style.name);
    }
  }
  _loadThemeStyles() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    if (this.$unstyled() || ((_a = this.config) == null ? void 0 : _a.theme()) === "none") return;
    if (!S.isStyleNameLoaded("common")) {
      const {
        primitive,
        semantic,
        global,
        style: style3
      } = ((_c = (_b = this.$style) == null ? void 0 : _b.getCommonTheme) == null ? void 0 : _c.call(_b)) || {};
      this.baseStyle.load(primitive == null ? void 0 : primitive.css, __spreadValues({
        name: "primitive-variables"
      }, this.$styleOptions));
      this.baseStyle.load(semantic == null ? void 0 : semantic.css, __spreadValues({
        name: "semantic-variables"
      }, this.$styleOptions));
      this.baseStyle.load(global == null ? void 0 : global.css, __spreadValues({
        name: "global-variables"
      }, this.$styleOptions));
      this.baseStyle.loadBaseStyle(__spreadValues({
        name: "global-style"
      }, this.$styleOptions), style3);
      S.setLoadedStyleName("common");
    }
    if (!S.isStyleNameLoaded((_d = this.$style) == null ? void 0 : _d.name) && ((_e = this.$style) == null ? void 0 : _e.name)) {
      const {
        css: css2,
        style: style3
      } = ((_g = (_f = this.$style) == null ? void 0 : _f.getComponentTheme) == null ? void 0 : _g.call(_f)) || {};
      (_i = this.$style) == null ? void 0 : _i.load(css2, __spreadValues({
        name: `${(_h = this.$style) == null ? void 0 : _h.name}-variables`
      }, this.$styleOptions));
      (_k = this.$style) == null ? void 0 : _k.loadStyle(__spreadValues({
        name: `${(_j = this.$style) == null ? void 0 : _j.name}-style`
      }, this.$styleOptions), style3);
      S.setLoadedStyleName((_l = this.$style) == null ? void 0 : _l.name);
    }
    if (!S.isStyleNameLoaded("layer-order")) {
      const layerOrder = (_n = (_m = this.$style) == null ? void 0 : _m.getLayerOrderThemeCSS) == null ? void 0 : _n.call(_m);
      this.baseStyle.load(layerOrder, __spreadValues({
        name: "layer-order",
        first: true
      }, this.$styleOptions));
      S.setLoadedStyleName("layer-order");
    }
  }
  _loadScopedThemeStyles(preset) {
    var _a, _b, _c, _d;
    const {
      css: css2
    } = ((_b = (_a = this.$style) == null ? void 0 : _a.getPresetTheme) == null ? void 0 : _b.call(_a, preset, `[${this.$attrSelector}]`)) || {};
    const scopedStyle = (_d = this.$style) == null ? void 0 : _d.load(css2, __spreadValues({
      name: `${this.$attrSelector}-${(_c = this.$style) == null ? void 0 : _c.name}`
    }, this.$styleOptions));
    this.scopedStyleEl = scopedStyle == null ? void 0 : scopedStyle.el;
  }
  _unloadScopedThemeStyles() {
    var _a;
    (_a = this.scopedStyleEl) == null ? void 0 : _a.remove();
  }
  _themeChangeListener(id, callback = () => {
  }) {
    this._offThemeChangeListener(id);
    base.clearLoadedStyleNames();
    const hold = callback.bind(this);
    this.themeChangeListenerMap.set(id, hold);
    N.on("theme:change", hold);
  }
  _removeThemeListeners() {
    this._offThemeChangeListener("_themeScopedListener");
    this._offThemeChangeListener("_loadCoreStyles");
    this._offThemeChangeListener("_load");
  }
  _offThemeChangeListener(id) {
    if (this.themeChangeListenerMap.has(id)) {
      N.off("theme:change", this.themeChangeListenerMap.get(id));
      this.themeChangeListenerMap.delete(id);
    }
  }
  /********** Passthrough **********/
  _getPTValue(obj = {}, key = "", params = {}, searchInDefaultPT = true) {
    var _a, _b, _c;
    const searchOut = /./g.test(key) && !!params[key.split(".")[0]];
    const {
      mergeSections = true,
      mergeProps: useMergeProps = false
    } = ((_a = this._getPropValue("ptOptions")) == null ? void 0 : _a()) || ((_c = (_b = this.config) == null ? void 0 : _b["ptOptions"]) == null ? void 0 : _c.call(_b)) || {};
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
    const isExtended = key === "root" && s((_a = this.$pt()) == null ? void 0 : _a["data-pc-section"]);
    return key !== "transition" && __spreadProps(__spreadValues({}, key === "root" && __spreadProps(__spreadValues({
      [`${datasetPrefix}name`]: g(isExtended ? (_b = this.$pt()) == null ? void 0 : _b["data-pc-section"] : this.$name)
    }, isExtended && {
      [`${datasetPrefix}extend`]: g(this.$name)
    }), {
      [`${this.$attrSelector}`]: ""
      // @todo - use `data-pc-id: this.$attrSelector` instead.
    })), {
      [`${datasetPrefix}section`]: g(key.includes(".") ? key.split(".").at(-1) ?? "" : key)
    });
  }
  _getPTClassValue(options, key, params) {
    const value = this._getOptionValue(options, key, params);
    return a(value) || h(value) ? {
      class: value
    } : value;
  }
  _getPT(pt, key = "", callback) {
    const getValue = (value, checkSameKey = false) => {
      const computedValue = callback ? callback(value) : value;
      const _key = g(key);
      const _cKey = g(this.$hostName || this.$name);
      return (checkSameKey ? _key !== _cKey ? computedValue == null ? void 0 : computedValue[_key] : void 0 : computedValue == null ? void 0 : computedValue[_key]) ?? computedValue;
    };
    return (pt == null ? void 0 : pt.hasOwnProperty("_usept")) ? {
      _usept: pt["_usept"],
      originalValue: getValue(pt.originalValue),
      value: getValue(pt.value)
    } : getValue(pt, true);
  }
  _usePT(pt, callback, key, params) {
    var _a;
    const fn = (value) => callback == null ? void 0 : callback.call(this, value, key, params);
    if (pt == null ? void 0 : pt.hasOwnProperty("_usept")) {
      const {
        mergeSections = true,
        mergeProps: useMergeProps = false
      } = pt["_usept"] || ((_a = this.config) == null ? void 0 : _a["ptOptions"]()) || {};
      const originalValue = fn(pt.originalValue);
      const value = fn(pt.value);
      if (originalValue === void 0 && value === void 0) return void 0;
      else if (a(value)) return value;
      else if (a(originalValue)) return originalValue;
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
  /******************** Exposed API ********************/
  ptm(key = "", params = {}) {
    return this._getPTValue(this.$pt(), key, __spreadValues(__spreadValues({}, this.$params), params));
  }
  ptms(keys, params = {}) {
    return keys.reduce((acc, arg) => {
      acc = w(acc, this.ptm(arg, params)) || {};
      return acc;
    }, {});
  }
  ptmo(obj = {}, key = "", params = {}) {
    return this._getPTValue(obj, key, __spreadValues({
      instance: this
    }, params), false);
  }
  cx(key, params = {}) {
    return !this.$unstyled() ? f(this._getOptionValue(this.$style.classes, key, __spreadValues(__spreadValues({}, this.$params), params))) : void 0;
  }
  sx(key = "", when = true, params = {}) {
    if (when) {
      const self = this._getOptionValue(this.$style.inlineStyles, key, __spreadValues(__spreadValues({}, this.$params), params));
      const base2 = this._getOptionValue(this.baseComponentStyle.inlineStyles, key, __spreadValues(__spreadValues({}, this.$params), params));
      return __spreadValues(__spreadValues({}, base2), self);
    }
    return void 0;
  }
  static \u0275fac = function BaseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseComponent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseComponent,
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
var Bind = class _Bind {
  el;
  renderer;
  /**
   * Dynamic attributes, properties, and event listeners to be applied to the host element.
   * @group Props
   */
  pBind = input(void 0, ...ngDevMode ? [{
    debugName: "pBind"
  }] : (
    /* istanbul ignore next */
    []
  ));
  _attrs = signal(void 0, ...ngDevMode ? [{
    debugName: "_attrs"
  }] : (
    /* istanbul ignore next */
    []
  ));
  attrs = computed(() => this._attrs() || this.pBind(), ...ngDevMode ? [{
    debugName: "attrs"
  }] : (
    /* istanbul ignore next */
    []
  ));
  styles = computed(() => {
    var _a;
    return (_a = this.attrs()) == null ? void 0 : _a.style;
  }, ...ngDevMode ? [{
    debugName: "styles"
  }] : (
    /* istanbul ignore next */
    []
  ));
  classes = computed(() => {
    var _a;
    return f((_a = this.attrs()) == null ? void 0 : _a.class);
  }, ...ngDevMode ? [{
    debugName: "classes"
  }] : (
    /* istanbul ignore next */
    []
  ));
  listeners = [];
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
    effect(() => {
      const _a = this.attrs() || {}, {
        style: style3,
        class: className
      } = _a, rest = __objRest(_a, [
        "style",
        "class"
      ]);
      for (const [key, value] of Object.entries(rest)) {
        if (key.startsWith("on") && typeof value === "function") {
          const eventName = key.slice(2).toLowerCase();
          if (!this.listeners.some((l3) => l3.eventName === eventName)) {
            const unlisten = this.renderer.listen(this.el.nativeElement, eventName, value);
            this.listeners.push({
              eventName,
              unlisten
            });
          }
        } else if (value === null || value === void 0) {
          this.renderer.removeAttribute(this.el.nativeElement, key);
        } else {
          this.renderer.setAttribute(this.el.nativeElement, key, value.toString());
          if (key in this.el.nativeElement) {
            this.el.nativeElement[key] = value;
          }
        }
      }
    });
  }
  ngOnDestroy() {
    this.clearListeners();
  }
  setAttrs(attrs) {
    if (!k(this._attrs(), attrs)) {
      this._attrs.set(attrs);
    }
  }
  clearListeners() {
    this.listeners.forEach(({
      unlisten
    }) => unlisten());
    this.listeners = [];
  }
  static \u0275fac = function Bind_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Bind)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _Bind,
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
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    pBind: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pBind",
        required: false
      }]
    }]
  });
})();
var BindModule = class _BindModule {
  static \u0275fac = function BindModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BindModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BindModule,
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

// node_modules/primeng/fesm2022/primeng-icons-baseicon.mjs
var _c0 = ["*"];
var css = (
  /*css*/
  `
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`
);
var BaseIconStyle = class _BaseIconStyle extends BaseStyle {
  name = "baseicon";
  css = css;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseIconStyle_BaseFactory;
    return function BaseIconStyle_Factory(__ngFactoryType__) {
      return (\u0275BaseIconStyle_BaseFactory || (\u0275BaseIconStyle_BaseFactory = \u0275\u0275getInheritedFactory(_BaseIconStyle)))(__ngFactoryType__ || _BaseIconStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BaseIconStyle,
    factory: _BaseIconStyle.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseIconStyle, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var BaseIconClasses;
(function(BaseIconClasses2) {
  BaseIconClasses2["root"] = "p-icon";
})(BaseIconClasses || (BaseIconClasses = {}));
var BaseIcon = class _BaseIcon extends BaseComponent {
  spin = false;
  _componentStyle = inject(BaseIconStyle);
  getClassNames() {
    return f("p-icon", {
      "p-icon-spin": this.spin
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseIcon_BaseFactory;
    return function BaseIcon_Factory(__ngFactoryType__) {
      return (\u0275BaseIcon_BaseFactory || (\u0275BaseIcon_BaseFactory = \u0275\u0275getInheritedFactory(_BaseIcon)))(__ngFactoryType__ || _BaseIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _BaseIcon,
    selectors: [["ng-component"]],
    hostAttrs: ["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
    hostVars: 2,
    hostBindings: function BaseIcon_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
      }
    },
    inputs: {
      spin: [2, "spin", "spin", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([BaseIconStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BaseIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseIcon, [{
    type: Component,
    args: [{
      template: ` <ng-content></ng-content> `,
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [BaseIconStyle],
      host: {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "[class]": "getClassNames()"
      }
    }]
  }], null, {
    spin: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-check.mjs
var _c02 = ["data-p-icon", "check"];
var CheckIcon = class _CheckIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckIcon_BaseFactory;
    return function CheckIcon_Factory(__ngFactoryType__) {
      return (\u0275CheckIcon_BaseFactory || (\u0275CheckIcon_BaseFactory = \u0275\u0275getInheritedFactory(_CheckIcon)))(__ngFactoryType__ || _CheckIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CheckIcon,
    selectors: [["", "data-p-icon", "check"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c02,
    decls: 1,
    vars: 0,
    consts: [["d", "M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z", "fill", "currentColor"]],
    template: function CheckIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path", 0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="check"]',
      standalone: true,
      template: `
        <svg:path
            d="M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z"
            fill="currentColor"
        />
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-exclamationtriangle.mjs
var _c03 = ["data-p-icon", "exclamation-triangle"];
var ExclamationTriangleIcon = class _ExclamationTriangleIcon extends BaseIcon {
  pathId;
  onInit() {
    this.pathId = "url(#" + s2() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ExclamationTriangleIcon_BaseFactory;
    return function ExclamationTriangleIcon_Factory(__ngFactoryType__) {
      return (\u0275ExclamationTriangleIcon_BaseFactory || (\u0275ExclamationTriangleIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ExclamationTriangleIcon)))(__ngFactoryType__ || _ExclamationTriangleIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ExclamationTriangleIcon,
    selectors: [["", "data-p-icon", "exclamation-triangle"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c03,
    decls: 7,
    vars: 2,
    consts: [["d", "M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z", "fill", "currentColor"], ["d", "M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z", "fill", "currentColor"], ["d", "M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function ExclamationTriangleIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "g");
        \u0275\u0275domElement(1, "path", 0)(2, "path", 1)(3, "path", 2);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(4, "defs")(5, "clipPath", 3);
        \u0275\u0275domElement(6, "rect", 4);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(5);
        \u0275\u0275domProperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExclamationTriangleIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="exclamation-triangle"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z"
                fill="currentColor"
            />
            <svg:path
                d="M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z"
                fill="currentColor"
            />
            <svg:path
                d="M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-infocircle.mjs
var _c04 = ["data-p-icon", "info-circle"];
var InfoCircleIcon = class _InfoCircleIcon extends BaseIcon {
  pathId;
  onInit() {
    this.pathId = "url(#" + s2() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InfoCircleIcon_BaseFactory;
    return function InfoCircleIcon_Factory(__ngFactoryType__) {
      return (\u0275InfoCircleIcon_BaseFactory || (\u0275InfoCircleIcon_BaseFactory = \u0275\u0275getInheritedFactory(_InfoCircleIcon)))(__ngFactoryType__ || _InfoCircleIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InfoCircleIcon,
    selectors: [["", "data-p-icon", "info-circle"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c04,
    decls: 5,
    vars: 2,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function InfoCircleIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "g");
        \u0275\u0275domElement(1, "path", 0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "defs")(3, "clipPath", 1);
        \u0275\u0275domElement(4, "rect", 2);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275domProperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoCircleIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="info-circle"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-times.mjs
var _c05 = ["data-p-icon", "times"];
var TimesIcon = class _TimesIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TimesIcon_BaseFactory;
    return function TimesIcon_Factory(__ngFactoryType__) {
      return (\u0275TimesIcon_BaseFactory || (\u0275TimesIcon_BaseFactory = \u0275\u0275getInheritedFactory(_TimesIcon)))(__ngFactoryType__ || _TimesIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TimesIcon,
    selectors: [["", "data-p-icon", "times"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c05,
    decls: 1,
    vars: 0,
    consts: [["d", "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z", "fill", "currentColor"]],
    template: function TimesIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path", 0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimesIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="times"]',
      standalone: true,
      template: `
        <svg:path
            d="M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z"
            fill="currentColor"
        />
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-timescircle.mjs
var _c06 = ["data-p-icon", "times-circle"];
var TimesCircleIcon = class _TimesCircleIcon extends BaseIcon {
  pathId;
  onInit() {
    this.pathId = "url(#" + s2() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TimesCircleIcon_BaseFactory;
    return function TimesCircleIcon_Factory(__ngFactoryType__) {
      return (\u0275TimesCircleIcon_BaseFactory || (\u0275TimesCircleIcon_BaseFactory = \u0275\u0275getInheritedFactory(_TimesCircleIcon)))(__ngFactoryType__ || _TimesCircleIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TimesCircleIcon,
    selectors: [["", "data-p-icon", "times-circle"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c06,
    decls: 5,
    vars: 2,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function TimesCircleIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "g");
        \u0275\u0275domElement(1, "path", 0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "defs")(3, "clipPath", 1);
        \u0275\u0275domElement(4, "rect", 2);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275domProperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimesCircleIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="times-circle"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
    }]
  }], null, null);
})();

// node_modules/@primeuix/motion/node_modules/@primeuix/utils/dist/dom/index.mjs
function R2(t2, e) {
  return t2 ? t2.classList ? t2.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t2.className) : false;
}
function W(t2, e) {
  if (t2 && e) {
    let o = (n) => {
      R2(t2, n) || (t2.classList ? t2.classList.add(n) : t2.className += " " + n);
    };
    [e].flat().filter(Boolean).forEach((n) => n.split(" ").forEach(o));
  }
}
function P(t2, e) {
  if (t2 && e) {
    let o = (n) => {
      t2.classList ? t2.classList.remove(n) : t2.className = t2.className.replace(new RegExp("(^|\\b)" + n.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [e].flat().filter(Boolean).forEach((n) => n.split(" ").forEach(o));
  }
}
function w2(t2) {
  let e = { width: 0, height: 0 };
  if (t2) {
    let [o, n] = [t2.style.visibility, t2.style.display], r = t2.getBoundingClientRect();
    t2.style.visibility = "hidden", t2.style.display = "block", e.width = r.width || t2.offsetWidth, e.height = r.height || t2.offsetHeight, t2.style.display = n, t2.style.visibility = o;
  }
  return e;
}
function qt() {
  return typeof window == "undefined" || !window.matchMedia ? false : window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function te2(t2, e, o = null, n) {
  var r;
  e && ((r = t2 == null ? void 0 : t2.style) == null || r.setProperty(e, o, n));
}

// node_modules/@primeuix/motion/node_modules/@primeuix/utils/dist/object/index.mjs
function oe(e) {
  return e === "auto" ? 0 : typeof e == "number" ? e : Number(e.replace(/[^\d.]/g, "").replace(",", ".")) * 1e3;
}

// node_modules/@primeuix/motion/dist/index.mjs
var j = Object.defineProperty;
var T = Object.getOwnPropertySymbols;
var q = Object.prototype.hasOwnProperty;
var V = Object.prototype.propertyIsEnumerable;
var D = (t2, n, e) => n in t2 ? j(t2, n, { enumerable: true, configurable: true, writable: true, value: e }) : t2[n] = e;
var p2 = (t2, n) => {
  for (var e in n || (n = {})) q.call(n, e) && D(t2, e, n[e]);
  if (T) for (var e of T(n)) V.call(n, e) && D(t2, e, n[e]);
  return t2;
};
var N2 = (t2, n, e) => new Promise((o, m3) => {
  var i2 = (r) => {
    try {
      f2(e.next(r));
    } catch (u2) {
      m3(u2);
    }
  }, M = (r) => {
    try {
      f2(e.throw(r));
    } catch (u2) {
      m3(u2);
    }
  }, f2 = (r) => r.done ? o(r.value) : Promise.resolve(r.value).then(i2, M);
  f2((e = e.apply(t2, n)).next());
});
var E = "animation";
var v = "transition";
function H(t2) {
  return t2 ? t2.disabled || !!(t2.safe && qt()) : false;
}
function k2(t2, n) {
  return t2 ? p2(p2({}, t2), Object.entries(n).reduce((e, [o, m3]) => {
    var i2;
    return e[o] = (i2 = t2[o]) != null ? i2 : m3, e;
  }, {})) : n;
}
function L(t2) {
  let { name: n, enterClass: e, leaveClass: o } = t2 || {};
  return { enter: { from: (e == null ? void 0 : e.from) || `${n}-enter-from`, to: (e == null ? void 0 : e.to) || `${n}-enter-to`, active: (e == null ? void 0 : e.active) || `${n}-enter-active` }, leave: { from: (o == null ? void 0 : o.from) || `${n}-leave-from`, to: (o == null ? void 0 : o.to) || `${n}-leave-to`, active: (o == null ? void 0 : o.active) || `${n}-leave-active` } };
}
function W2(t2) {
  return { enter: { onBefore: t2 == null ? void 0 : t2.onBeforeEnter, onStart: t2 == null ? void 0 : t2.onEnter, onAfter: t2 == null ? void 0 : t2.onAfterEnter, onCancelled: t2 == null ? void 0 : t2.onEnterCancelled }, leave: { onBefore: t2 == null ? void 0 : t2.onBeforeLeave, onStart: t2 == null ? void 0 : t2.onLeave, onAfter: t2 == null ? void 0 : t2.onAfterLeave, onCancelled: t2 == null ? void 0 : t2.onLeaveCancelled } };
}
function A(t2, n) {
  let e = window.getComputedStyle(t2), o = (l3) => {
    let c3 = e[`${l3}Delay`], h2 = e[`${l3}Duration`];
    return [c3.split(", ").map(oe), h2.split(", ").map(oe)];
  }, [m3, i2] = o(v), [M, f2] = o(E), r = Math.max(...i2.map((l3, c3) => l3 + m3[c3])), u2 = Math.max(...f2.map((l3, c3) => l3 + M[c3])), a2, s3 = 0, d2 = 0;
  return n === v ? r > 0 && (a2 = v, s3 = r, d2 = i2.length) : n === E ? u2 > 0 && (a2 = E, s3 = u2, d2 = f2.length) : (s3 = Math.max(r, u2), a2 = s3 > 0 ? r > u2 ? v : E : void 0, d2 = a2 ? a2 === v ? i2.length : f2.length : 0), { type: a2, timeout: s3, count: d2 };
}
function $(t2, n) {
  return typeof t2 == "number" ? t2 : typeof t2 == "object" && t2[n] != null ? t2[n] : null;
}
function S2(t2, n = true, e = false) {
  if (!n && !e) return;
  let o = w2(t2);
  n && te2(t2, "--pui-motion-height", o.height + "px"), e && te2(t2, "--pui-motion-width", o.width + "px");
}
var U = { name: "p", safe: true, disabled: false, enter: true, leave: true, autoHeight: true, autoWidth: false };
function tt(t2, n) {
  if (!t2) throw new Error("Element is required.");
  let e = {}, o = false, m3 = {}, i2 = null, M = {}, f2 = (a2) => {
    if (Object.assign(e, k2(a2, U)), !e.enter && !e.leave) throw new Error("Enter or leave must be true.");
    M = W2(e), o = H(e), m3 = L(e), i2 = null;
  }, r = (a2) => N2(null, null, function* () {
    i2 == null || i2();
    let { onBefore: s3, onStart: d2, onAfter: l3, onCancelled: c3 } = M[a2] || {}, h2 = { element: t2 };
    if (o) {
      s3 == null || s3(h2), d2 == null || d2(h2), l3 == null || l3(h2);
      return;
    }
    let { from: g2, active: y2, to: P2 } = m3[a2] || {};
    return S2(t2, e.autoHeight, e.autoWidth), s3 == null || s3(h2), W(t2, g2), W(t2, y2), t2.offsetHeight, P(t2, g2), W(t2, P2), d2 == null || d2(h2), new Promise((b) => {
      let C = $(e.duration, a2), x2 = () => {
        P(t2, [P2, y2]), i2 = null;
      }, R3 = () => {
        x2(), l3 == null || l3(h2), b();
      };
      i2 = () => {
        x2(), c3 == null || c3(h2), b();
      }, G(t2, e.type, C, R3);
    });
  });
  f2(n);
  let u2 = { enter: () => e.enter ? r("enter") : Promise.resolve(), leave: () => e.leave ? r("leave") : Promise.resolve(), cancel: () => {
    i2 == null || i2(), i2 = null;
  }, update: (a2, s3) => {
    if (!a2) throw new Error("Element is required.");
    t2 = a2, u2.cancel(), f2(s3);
  } };
  return e.appear && u2.enter(), u2;
}
var z = 0;
function G(t2, n, e, o) {
  let m3 = t2._motionEndId = ++z, i2 = () => {
    m3 === t2._motionEndId && o();
  };
  if (e != null) return setTimeout(i2, e);
  let { type: M, timeout: f2, count: r } = A(t2, n);
  if (!M) {
    o();
    return;
  }
  let u2 = M + "end", a2 = 0, s3 = () => {
    t2.removeEventListener(u2, d2, true), i2();
  }, d2 = (l3) => {
    l3.target === t2 && ++a2 >= r && s3();
  };
  t2.addEventListener(u2, d2, { capture: true, once: true }), setTimeout(() => {
    a2 < r && s3();
  }, f2 + 1);
}

// node_modules/primeng/fesm2022/primeng-motion.mjs
var _c07 = ["*"];
function Motion_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
var originalStyles = /* @__PURE__ */ new WeakMap();
function applyHiddenStyles(element, strategy) {
  if (!element) return;
  if (!originalStyles.has(element)) {
    originalStyles.set(element, {
      display: element.style.display,
      visibility: element.style.visibility,
      maxHeight: element.style.maxHeight,
      overflow: element.style.overflow
    });
  }
  switch (strategy) {
    case "display":
      element.style.display = "none";
      break;
    case "visibility":
      element.style.visibility = "hidden";
      element.style.maxHeight = "0";
      element.style.overflow = "hidden";
      break;
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
      element.style.overflow = (original == null ? void 0 : original.overflow) || "";
      break;
  }
  originalStyles.delete(element);
}
var style = (
  /*css*/
  `
    .p-motion {
        display: block;
    }
`
);
var classes = {
  root: "p-motion"
};
var MotionStyle = class _MotionStyle extends BaseStyle {
  name = "motion";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MotionStyle_BaseFactory;
    return function MotionStyle_Factory(__ngFactoryType__) {
      return (\u0275MotionStyle_BaseFactory || (\u0275MotionStyle_BaseFactory = \u0275\u0275getInheritedFactory(_MotionStyle)))(__ngFactoryType__ || _MotionStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MotionStyle,
    factory: _MotionStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MotionStyle, [{
    type: Injectable
  }], null, null);
})();
var MotionClasses;
(function(MotionClasses2) {
  MotionClasses2["root"] = "p-motion";
})(MotionClasses || (MotionClasses = {}));
var MOTION_INSTANCE = new InjectionToken("MOTION_INSTANCE");
var Motion = class _Motion extends BaseComponent {
  $pcMotion = inject(MOTION_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    const options = this.options();
    const optionsAttrs = (options == null ? void 0 : options.root) || {};
    this.bindDirectiveInstance.setAttrs(__spreadValues(__spreadValues({}, this.ptms(["host", "root"])), optionsAttrs));
  }
  _componentStyle = inject(MotionStyle);
  /******************** Inputs ********************/
  /**
   * Whether the element is visible or not.
   * @group Props
   */
  visible = input(false, ...ngDevMode ? [{
    debugName: "visible"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Whether to mount the element on enter.
   * @group Props
   */
  mountOnEnter = input(true, ...ngDevMode ? [{
    debugName: "mountOnEnter"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Whether to unmount the element on leave.
   * @group Props
   */
  unmountOnLeave = input(true, ...ngDevMode ? [{
    debugName: "unmountOnLeave"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The name of the motion. It can be a predefined motion name or a custom one.
   * phases:
   *     [name]-enter
   *     [name]-enter-active
   *     [name]-enter-to
   *     [name]-leave
   *     [name]-leave-active
   *     [name]-leave-to
   * @group Props
   */
  name = input(void 0, ...ngDevMode ? [{
    debugName: "name"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The type of the motion, valid values 'transition' and 'animation'.
   * @group Props
   */
  type = input(void 0, ...ngDevMode ? [{
    debugName: "type"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Whether the motion is safe.
   * @group Props
   */
  safe = input(void 0, ...ngDevMode ? [{
    debugName: "safe"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Whether the motion is disabled.
   * @group Props
   */
  disabled = input(false, ...ngDevMode ? [{
    debugName: "disabled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Whether the motion should appear.
   * @group Props
   */
  appear = input(false, ...ngDevMode ? [{
    debugName: "appear"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Whether the motion should enter.
   * @group Props
   */
  enter = input(true, ...ngDevMode ? [{
    debugName: "enter"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Whether the motion should leave.
   * @group Props
   */
  leave = input(true, ...ngDevMode ? [{
    debugName: "leave"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The duration of the motion.
   * @group Props
   */
  duration = input(void 0, ...ngDevMode ? [{
    debugName: "duration"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The hide strategy of the motion, valid values 'display' and 'visibility'.
   * @group Props
   */
  hideStrategy = input("display", ...ngDevMode ? [{
    debugName: "hideStrategy"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The enter from class of the motion.
   * @group Props
   */
  enterFromClass = input(void 0, ...ngDevMode ? [{
    debugName: "enterFromClass"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The enter to class of the motion.
   * @group Props
   */
  enterToClass = input(void 0, ...ngDevMode ? [{
    debugName: "enterToClass"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The enter active class of the motion.
   * @group Props
   */
  enterActiveClass = input(void 0, ...ngDevMode ? [{
    debugName: "enterActiveClass"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The leave from class of the motion.
   * @group Props
   */
  leaveFromClass = input(void 0, ...ngDevMode ? [{
    debugName: "leaveFromClass"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The leave to class of the motion.
   * @group Props
   */
  leaveToClass = input(void 0, ...ngDevMode ? [{
    debugName: "leaveToClass"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The leave active class of the motion.
   * @group Props
   */
  leaveActiveClass = input(void 0, ...ngDevMode ? [{
    debugName: "leaveActiveClass"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /******************** All Inputs ********************/
  /**
   * The motion options.
   * @group Props
   */
  options = input({}, ...ngDevMode ? [{
    debugName: "options"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /******************** Outputs ********************/
  /**
   * Callback fired before the enter transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onBeforeEnter = output();
  /**
   * Callback fired when the enter transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onEnter = output();
  /**
   * Callback fired after the enter transition/animation ends.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onAfterEnter = output();
  /**
   * Callback fired when the enter transition/animation is cancelled.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onEnterCancelled = output();
  /**
   * Callback fired before the leave transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onBeforeLeave = output();
  /**
   * Callback fired when the leave transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onLeave = output();
  /**
   * Callback fired after the leave transition/animation ends.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onAfterLeave = output();
  /**
   * Callback fired when the leave transition/animation is cancelled.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onLeaveCancelled = output();
  /******************** Computed ********************/
  motionOptions = computed(() => {
    var _a, _b, _c, _d, _e, _f;
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
        to: ((_e = options.leaveClass) == null ? void 0 : _e.to) ?? (!options.name ? this.leaveToClass() : void 0),
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
  }, ...ngDevMode ? [{
    debugName: "motionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  motion;
  isInitialMount = true;
  cancelled = false;
  destroyed = false;
  rendered = signal(false, ...ngDevMode ? [{
    debugName: "rendered"
  }] : (
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
      if (!this.motion) {
        this.motion = tt(this.$el, this.motionOptions());
      } else {
      }
    });
    afterRenderEffect(() => __async(this, null, function* () {
      var _a, _b, _c;
      if (!this.$el) return;
      const shouldAppear = this.isInitialMount && this.visible() && this.appear();
      const hideStrategy = this.hideStrategy();
      if (this.visible()) {
        yield Qt();
        resetStyles(this.$el, hideStrategy);
        if (shouldAppear || !this.isInitialMount) {
          this.applyMotionDuration("enter");
          (_a = this.motion) == null ? void 0 : _a.enter();
        }
      } else if (!this.isInitialMount) {
        yield Qt();
        this.applyMotionDuration("leave");
        (_c = (_b = this.motion) == null ? void 0 : _b.leave()) == null ? void 0 : _c.then(() => __async(this, null, function* () {
          if (this.$el && !this.cancelled && !this.visible()) {
            applyHiddenStyles(this.$el, hideStrategy);
            if (this.unmountOnLeave()) {
              yield Qt();
              if (!this.cancelled) {
                this.rendered.set(false);
              }
            }
          }
        }));
      }
      this.isInitialMount = false;
    }));
  }
  applyMotionDuration(phase) {
    const options = untracked(this.motionOptions);
    const ms = $(options.duration, phase);
    if (ms == null || !this.$el) return;
    const el = this.$el;
    const durationValue = `${ms}ms`;
    if (options.type === "transition") {
      el.style.transitionDuration = durationValue;
    } else {
      el.style.animationDuration = durationValue;
    }
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
    return new (__ngFactoryType__ || _Motion)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Motion,
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
    features: [\u0275\u0275ProvidersFeature([MotionStyle, {
      provide: MOTION_INSTANCE,
      useExisting: _Motion
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Motion
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c07,
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
      providers: [MotionStyle, {
        provide: MOTION_INSTANCE,
        useExisting: Motion
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Motion
      }],
      host: {
        "[class]": "cx('root')"
      },
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
var MotionDirective = class _MotionDirective extends BaseComponent {
  $pcMotionDirective = inject(MOTION_DIRECTIVE_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  /******************** Inputs ********************/
  /**
   * Whether the element is visible or not.
   * @group Props
   */
  visible = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "visible"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotion"
  }));
  /**
   * The name of the motion. It can be a predefined motion name or a custom one.
   * phases:
   *     [name]-enter
   *     [name]-enter-active
   *     [name]-enter-to
   *     [name]-leave
   *     [name]-leave-active
   *     [name]-leave-to
   * @group Props
   */
  name = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "name"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionName"
  }));
  /**
   * The type of the motion, valid values 'transition' and 'animation'.
   * @group Props
   */
  type = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "type"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionType"
  }));
  /**
   * Whether the motion is safe.
   * @group Props
   */
  safe = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "safe"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionSafe"
  }));
  /**
   * Whether the motion is disabled.
   * @group Props
   */
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionDisabled"
  }));
  /**
   * Whether the motion should appear.
   * @group Props
   */
  appear = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "appear"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionAppear"
  }));
  /**
   * Whether the motion should enter.
   * @group Props
   */
  enter = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "enter"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionEnter"
  }));
  /**
   * Whether the motion should leave.
   * @group Props
   */
  leave = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "leave"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionLeave"
  }));
  /**
   * The duration of the motion.
   * @group Props
   */
  duration = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "duration"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionDuration"
  }));
  /**
   * The hide strategy of the motion, valid values 'display' and 'visibility'.
   * @group Props
   */
  hideStrategy = input("display", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "hideStrategy"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionHideStrategy"
  }));
  /**
   * The enter from class of the motion.
   * @group Props
   */
  enterFromClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "enterFromClass"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionEnterFromClass"
  }));
  /**
   * The enter to class of the motion.
   * @group Props
   */
  enterToClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "enterToClass"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionEnterToClass"
  }));
  /**
   * The enter active class of the motion.
   * @group Props
   */
  enterActiveClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "enterActiveClass"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionEnterActiveClass"
  }));
  /**
   * The leave from class of the motion.
   * @group Props
   */
  leaveFromClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "leaveFromClass"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionLeaveFromClass"
  }));
  /**
   * The leave to class of the motion.
   * @group Props
   */
  leaveToClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "leaveToClass"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionLeaveToClass"
  }));
  /**
   * The leave active class of the motion.
   * @group Props
   */
  leaveActiveClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "leaveActiveClass"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionLeaveActiveClass"
  }));
  /******************** All Inputs ********************/
  /**
   * The motion options.
   * @group Props
   */
  options = input({}, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "options"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionOptions"
  }));
  /******************** Outputs ********************/
  /**
   * Callback fired before the enter transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onBeforeEnter = output({
    alias: "pMotionOnBeforeEnter"
  });
  /**
   * Callback fired when the enter transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onEnter = output({
    alias: "pMotionOnEnter"
  });
  /**
   * Callback fired after the enter transition/animation ends.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onAfterEnter = output({
    alias: "pMotionOnAfterEnter"
  });
  /**
   * Callback fired when the enter transition/animation is cancelled.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onEnterCancelled = output({
    alias: "pMotionOnEnterCancelled"
  });
  /**
   * Callback fired before the leave transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onBeforeLeave = output({
    alias: "pMotionOnBeforeLeave"
  });
  /**
   * Callback fired when the leave transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onLeave = output({
    alias: "pMotionOnLeave"
  });
  /**
   * Callback fired after the leave transition/animation ends.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onAfterLeave = output({
    alias: "pMotionOnAfterLeave"
  });
  /**
   * Callback fired when the leave transition/animation is cancelled.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onLeaveCancelled = output({
    alias: "pMotionOnLeaveCancelled"
  });
  /******************** Computed ********************/
  motionOptions = computed(() => {
    var _a, _b, _c, _d, _e, _f;
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
        to: ((_e = options.leaveClass) == null ? void 0 : _e.to) ?? (!options.name ? this.leaveToClass() : void 0),
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
  }, ...ngDevMode ? [{
    debugName: "motionOptions"
  }] : (
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
    effect(() => {
      if (!this.motion) {
        this.motion = tt(this.$el, this.motionOptions());
      } else {
      }
    });
    afterRenderEffect(() => {
      var _a, _b, _c;
      if (!this.$el) return;
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
          if (this.$el && !this.cancelled && !this.visible()) {
            applyHiddenStyles(this.$el, hideStrategy);
          }
        });
      } else {
        applyHiddenStyles(this.$el, hideStrategy);
      }
      this.isInitialMount = false;
    });
  }
  applyMotionDuration(phase) {
    const options = untracked(this.motionOptions);
    const ms = $(options.duration, phase);
    if (ms == null || !this.$el) return;
    const el = this.$el;
    const durationValue = `${ms}ms`;
    if (options.type === "transition") {
      el.style.transitionDuration = durationValue;
    } else {
      el.style.animationDuration = durationValue;
    }
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
    return new (__ngFactoryType__ || _MotionDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MotionDirective,
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
    features: [\u0275\u0275ProvidersFeature([MotionStyle, {
      provide: MOTION_DIRECTIVE_INSTANCE,
      useExisting: _MotionDirective
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _MotionDirective
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MotionDirective, [{
    type: Directive,
    args: [{
      selector: "[pMotion]",
      standalone: true,
      providers: [MotionStyle, {
        provide: MOTION_DIRECTIVE_INSTANCE,
        useExisting: MotionDirective
      }, {
        provide: PARENT_INSTANCE,
        useExisting: MotionDirective
      }]
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
var MotionModule = class _MotionModule {
  static \u0275fac = function MotionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MotionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MotionModule,
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

// node_modules/primeng/fesm2022/primeng-utils.mjs
function ZIndexUtils() {
  let zIndexes = [];
  const generateZIndex = (key, baseZIndex) => {
    let lastZIndex = zIndexes.length > 0 ? zIndexes[zIndexes.length - 1] : { key, value: baseZIndex };
    let newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 2;
    zIndexes.push({ key, value: newZIndex });
    return newZIndex;
  };
  const revertZIndex = (zIndex) => {
    zIndexes = zIndexes.filter((obj) => obj.value !== zIndex);
  };
  const getCurrentZIndex = () => {
    return zIndexes.length > 0 ? zIndexes[zIndexes.length - 1].value : 0;
  };
  const getZIndex = (el) => {
    return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
  };
  return {
    get: getZIndex,
    set: (key, el, baseZIndex) => {
      if (el) {
        el.style.zIndex = String(generateZIndex(key, baseZIndex));
      }
    },
    clear: (el) => {
      if (el) {
        revertZIndex(getZIndex(el));
        el.style.zIndex = "";
      }
    },
    getCurrent: () => getCurrentZIndex(),
    generateZIndex,
    revertZIndex
  };
}
var zindexutils = ZIndexUtils();

// node_modules/@primeuix/styles/dist/toast/index.mjs
var style2 = "\n    .p-toast {\n        width: dt('toast.width');\n        white-space: pre-line;\n        word-break: break-word;\n    }\n\n    .p-toast-message {\n        margin: 0 0 1rem 0;\n        display: grid;\n        grid-template-rows: 1fr;\n    }\n\n    .p-toast-message-icon {\n        flex-shrink: 0;\n        font-size: dt('toast.icon.size');\n        width: dt('toast.icon.size');\n        height: dt('toast.icon.size');\n    }\n\n    .p-toast-message-content {\n        display: flex;\n        align-items: flex-start;\n        padding: dt('toast.content.padding');\n        gap: dt('toast.content.gap');\n        min-height: 0;\n        overflow: hidden;\n        transition: padding 250ms ease-in;\n    }\n\n    .p-toast-message-text {\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column;\n        gap: dt('toast.text.gap');\n    }\n\n    .p-toast-summary {\n        font-weight: dt('toast.summary.font.weight');\n        font-size: dt('toast.summary.font.size');\n    }\n\n    .p-toast-detail {\n        font-weight: dt('toast.detail.font.weight');\n        font-size: dt('toast.detail.font.size');\n    }\n\n    .p-toast-close-button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n        cursor: pointer;\n        background: transparent;\n        transition:\n            background dt('toast.transition.duration'),\n            color dt('toast.transition.duration'),\n            outline-color dt('toast.transition.duration'),\n            box-shadow dt('toast.transition.duration');\n        outline-color: transparent;\n        color: inherit;\n        width: dt('toast.close.button.width');\n        height: dt('toast.close.button.height');\n        border-radius: dt('toast.close.button.border.radius');\n        margin: -25% 0 0 0;\n        right: -25%;\n        padding: 0;\n        border: none;\n        user-select: none;\n    }\n\n    .p-toast-close-button:dir(rtl) {\n        margin: -25% 0 0 auto;\n        left: -25%;\n        right: auto;\n    }\n\n    .p-toast-message-info,\n    .p-toast-message-success,\n    .p-toast-message-warn,\n    .p-toast-message-error,\n    .p-toast-message-secondary,\n    .p-toast-message-contrast {\n        border-width: dt('toast.border.width');\n        border-style: solid;\n        backdrop-filter: blur(dt('toast.blur'));\n        border-radius: dt('toast.border.radius');\n    }\n\n    .p-toast-close-icon {\n        font-size: dt('toast.close.icon.size');\n        width: dt('toast.close.icon.size');\n        height: dt('toast.close.icon.size');\n    }\n\n    .p-toast-close-button:focus-visible {\n        outline-width: dt('focus.ring.width');\n        outline-style: dt('focus.ring.style');\n        outline-offset: dt('focus.ring.offset');\n    }\n\n    .p-toast-message-info {\n        background: dt('toast.info.background');\n        border-color: dt('toast.info.border.color');\n        color: dt('toast.info.color');\n        box-shadow: dt('toast.info.shadow');\n    }\n\n    .p-toast-message-info .p-toast-detail {\n        color: dt('toast.info.detail.color');\n    }\n\n    .p-toast-message-info .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.info.close.button.focus.ring.color');\n        box-shadow: dt('toast.info.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-info .p-toast-close-button:hover {\n        background: dt('toast.info.close.button.hover.background');\n    }\n\n    .p-toast-message-success {\n        background: dt('toast.success.background');\n        border-color: dt('toast.success.border.color');\n        color: dt('toast.success.color');\n        box-shadow: dt('toast.success.shadow');\n    }\n\n    .p-toast-message-success .p-toast-detail {\n        color: dt('toast.success.detail.color');\n    }\n\n    .p-toast-message-success .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.success.close.button.focus.ring.color');\n        box-shadow: dt('toast.success.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-success .p-toast-close-button:hover {\n        background: dt('toast.success.close.button.hover.background');\n    }\n\n    .p-toast-message-warn {\n        background: dt('toast.warn.background');\n        border-color: dt('toast.warn.border.color');\n        color: dt('toast.warn.color');\n        box-shadow: dt('toast.warn.shadow');\n    }\n\n    .p-toast-message-warn .p-toast-detail {\n        color: dt('toast.warn.detail.color');\n    }\n\n    .p-toast-message-warn .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.warn.close.button.focus.ring.color');\n        box-shadow: dt('toast.warn.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-warn .p-toast-close-button:hover {\n        background: dt('toast.warn.close.button.hover.background');\n    }\n\n    .p-toast-message-error {\n        background: dt('toast.error.background');\n        border-color: dt('toast.error.border.color');\n        color: dt('toast.error.color');\n        box-shadow: dt('toast.error.shadow');\n    }\n\n    .p-toast-message-error .p-toast-detail {\n        color: dt('toast.error.detail.color');\n    }\n\n    .p-toast-message-error .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.error.close.button.focus.ring.color');\n        box-shadow: dt('toast.error.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-error .p-toast-close-button:hover {\n        background: dt('toast.error.close.button.hover.background');\n    }\n\n    .p-toast-message-secondary {\n        background: dt('toast.secondary.background');\n        border-color: dt('toast.secondary.border.color');\n        color: dt('toast.secondary.color');\n        box-shadow: dt('toast.secondary.shadow');\n    }\n\n    .p-toast-message-secondary .p-toast-detail {\n        color: dt('toast.secondary.detail.color');\n    }\n\n    .p-toast-message-secondary .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.secondary.close.button.focus.ring.color');\n        box-shadow: dt('toast.secondary.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-secondary .p-toast-close-button:hover {\n        background: dt('toast.secondary.close.button.hover.background');\n    }\n\n    .p-toast-message-contrast {\n        background: dt('toast.contrast.background');\n        border-color: dt('toast.contrast.border.color');\n        color: dt('toast.contrast.color');\n        box-shadow: dt('toast.contrast.shadow');\n    }\n    \n    .p-toast-message-contrast .p-toast-detail {\n        color: dt('toast.contrast.detail.color');\n    }\n\n    .p-toast-message-contrast .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.contrast.close.button.focus.ring.color');\n        box-shadow: dt('toast.contrast.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-contrast .p-toast-close-button:hover {\n        background: dt('toast.contrast.close.button.hover.background');\n    }\n\n    .p-toast-top-center {\n        transform: translateX(-50%);\n    }\n\n    .p-toast-bottom-center {\n        transform: translateX(-50%);\n    }\n\n    .p-toast-center {\n        min-width: 20vw;\n        transform: translate(-50%, -50%);\n    }\n\n    .p-toast-message-enter-active {\n        animation: p-animate-toast-enter 300ms ease-out;\n    }\n\n    .p-toast-message-leave-active {\n        animation: p-animate-toast-leave 250ms ease-in;\n    }\n\n    .p-toast-message-leave-to .p-toast-message-content {\n        padding-top: 0;\n        padding-bottom: 0;\n    }\n\n    @keyframes p-animate-toast-enter {\n        from {\n            opacity: 0;\n            transform: scale(0.6);\n        }\n        to {\n            opacity: 1;\n            grid-template-rows: 1fr;\n        }\n    }\n\n     @keyframes p-animate-toast-leave {\n        from {\n            opacity: 1;\n        }\n        to {\n            opacity: 0;\n            margin-bottom: 0;\n            grid-template-rows: 0fr;\n            transform: translateY(-100%) scale(0.6);\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-toast.mjs
var _c08 = (a0, a1) => ({
  $implicit: a0,
  closeFn: a1
});
var _c1 = (a0) => ({
  $implicit: a0
});
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
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.headlessTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c08, ctx_r0.message, ctx_r0.onCloseIconClick));
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("messageIcon"), ctx_r0.message == null ? null : ctx_r0.message.icon));
    \u0275\u0275property("pBind", ctx_r0.ptm("messageIcon"));
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_0_Template(rf, ctx) {
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
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_1_Template(rf, ctx) {
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
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r0.cx("messageIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("messageIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 14);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r0.cx("messageIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("messageIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_4_Template(rf, ctx) {
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
function ToastItem_Conditional_3_ng_container_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_0_Template, 1, 4, ":svg:svg", 7)(1, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_1_Template, 1, 4, ":svg:svg", 8)(2, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_2_Template, 1, 4, ":svg:svg", 9)(3, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_3_Template, 1, 4, ":svg:svg", 10)(4, ToastItem_Conditional_3_ng_container_1_Conditional_2_Case_4_Template, 1, 4, ":svg:svg", 8);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((tmp_4_0 = ctx_r0.message.severity) === "success" ? 0 : tmp_4_0 === "info" ? 1 : tmp_4_0 === "error" ? 2 : tmp_4_0 === "warn" ? 3 : 4);
  }
}
function ToastItem_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275conditionalCreate(1, ToastItem_Conditional_3_ng_container_1_Conditional_1_Template, 1, 3, "span", 2)(2, ToastItem_Conditional_3_ng_container_1_Conditional_2_Template, 5, 1);
    \u0275\u0275elementStart(3, "div", 6)(4, "div", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.message.icon ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("pBind", ctx_r0.ptm("messageText"))("ngClass", ctx_r0.cx("messageText"));
    \u0275\u0275attribute("data-p", ctx_r0.dataP);
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("summary"))("ngClass", ctx_r0.cx("summary"));
    \u0275\u0275attribute("data-p", ctx_r0.dataP);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.message.summary, " ");
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("detail"))("ngClass", ctx_r0.cx("detail"));
    \u0275\u0275attribute("data-p", ctx_r0.dataP);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.message.detail);
  }
}
function ToastItem_Conditional_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToastItem_Conditional_3_Conditional_3_Conditional_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("closeIcon"), ctx_r0.message == null ? null : ctx_r0.message.closeIcon));
    \u0275\u0275property("pBind", ctx_r0.ptm("closeIcon"));
  }
}
function ToastItem_Conditional_3_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToastItem_Conditional_3_Conditional_3_Conditional_2_span_0_Template, 1, 3, "span", 17);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r0.message.closeIcon);
  }
}
function ToastItem_Conditional_3_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cx("closeIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("closeIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function ToastItem_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 15);
    \u0275\u0275listener("click", function ToastItem_Conditional_3_Conditional_3_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onCloseIconClick($event));
    })("keydown.enter", function ToastItem_Conditional_3_Conditional_3_Template_button_keydown_enter_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onCloseIconClick($event));
    });
    \u0275\u0275conditionalCreate(2, ToastItem_Conditional_3_Conditional_3_Conditional_2_Template, 1, 1, "span", 2)(3, ToastItem_Conditional_3_Conditional_3_Conditional_3_Template, 1, 4, ":svg:svg", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("closeButton"));
    \u0275\u0275attribute("class", ctx_r0.cx("closeButton"))("aria-label", ctx_r0.closeAriaLabel)("data-p", ctx_r0.dataP);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.message.closeIcon ? 2 : 3);
  }
}
function ToastItem_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, ToastItem_Conditional_3_ng_container_1_Template, 8, 12, "ng-container", 5)(2, ToastItem_Conditional_3_ng_container_2_Template, 1, 0, "ng-container", 3);
    \u0275\u0275conditionalCreate(3, ToastItem_Conditional_3_Conditional_3_Template, 4, 5, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("messageContent"), ctx_r0.message == null ? null : ctx_r0.message.contentStyleClass));
    \u0275\u0275property("pBind", ctx_r0.ptm("messageContent"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.template);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", \u0275\u0275pureFunction1(7, _c1, ctx_r0.message));
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.message == null ? null : ctx_r0.message.closable) !== false ? 3 : -1);
  }
}
var _c2 = ["message"];
var _c3 = ["headless"];
function Toast_p_toastItem_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-toastItem", 1);
    \u0275\u0275listener("onClose", function Toast_p_toastItem_0_Template_p_toastItem_onClose_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMessageClose($event));
    })("onAnimationEnd", function Toast_p_toastItem_0_Template_p_toastItem_onAnimationEnd_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationEnd());
    })("onAnimationStart", function Toast_p_toastItem_0_Template_p_toastItem_onAnimationStart_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationStart());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("message", msg_r3)("index", i_r4)("life", ctx_r1.life)("clearAll", ctx_r1.clearAllTrigger())("template", ctx_r1.template || ctx_r1._template)("headlessTemplate", ctx_r1.headlessTemplate || ctx_r1._headlessTemplate)("pt", ctx_r1.pt)("unstyled", ctx_r1.unstyled())("motionOptions", ctx_r1.computedMotionOptions());
  }
}
var inlineStyles = {
  root: ({
    instance
  }) => {
    const {
      _position
    } = instance;
    return {
      position: "fixed",
      top: _position === "top-right" || _position === "top-left" || _position === "top-center" ? "20px" : _position === "center" ? "50%" : null,
      right: (_position === "top-right" || _position === "bottom-right") && "20px",
      bottom: (_position === "bottom-left" || _position === "bottom-right" || _position === "bottom-center") && "20px",
      left: _position === "top-left" || _position === "bottom-left" ? "20px" : _position === "center" || _position === "top-center" || _position === "bottom-center" ? "50%" : null
    };
  }
};
var classes2 = {
  root: ({
    instance
  }) => ["p-toast p-component", `p-toast-${instance._position}`],
  message: ({
    instance
  }) => ({
    "p-toast-message": true,
    "p-toast-message-info": instance.message.severity === "info" || instance.message.severity === void 0,
    "p-toast-message-warn": instance.message.severity === "warn",
    "p-toast-message-error": instance.message.severity === "error",
    "p-toast-message-success": instance.message.severity === "success",
    "p-toast-message-secondary": instance.message.severity === "secondary",
    "p-toast-message-contrast": instance.message.severity === "contrast"
  }),
  messageContent: "p-toast-message-content",
  messageIcon: ({
    instance
  }) => ({
    "p-toast-message-icon": true,
    [`pi ${instance.message.icon}`]: !!instance.message.icon
  }),
  messageText: "p-toast-message-text",
  summary: "p-toast-summary",
  detail: "p-toast-detail",
  closeButton: "p-toast-close-button",
  closeIcon: ({
    instance
  }) => ({
    "p-toast-close-icon": true,
    [`pi ${instance.message.closeIcon}`]: !!instance.message.closeIcon
  })
};
var ToastStyle = class _ToastStyle extends BaseStyle {
  name = "toast";
  style = style2;
  classes = classes2;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToastStyle_BaseFactory;
    return function ToastStyle_Factory(__ngFactoryType__) {
      return (\u0275ToastStyle_BaseFactory || (\u0275ToastStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ToastStyle)))(__ngFactoryType__ || _ToastStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ToastStyle,
    factory: _ToastStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastStyle, [{
    type: Injectable
  }], null, null);
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
var TOAST_INSTANCE = new InjectionToken("TOAST_INSTANCE");
var ToastItem = class _ToastItem extends BaseComponent {
  zone;
  message;
  index;
  life;
  template;
  headlessTemplate;
  showTransformOptions;
  hideTransformOptions;
  showTransitionOptions;
  hideTransitionOptions;
  motionOptions = input(...ngDevMode ? [void 0, {
    debugName: "motionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  clearAll = input(null, ...ngDevMode ? [{
    debugName: "clearAll"
  }] : (
    /* istanbul ignore next */
    []
  ));
  onAnimationStart = output();
  onAnimationEnd = output();
  onBeforeEnter(event) {
    this.onAnimationStart.emit(event.element);
  }
  onAfterLeave(event) {
    if (!this.visible() && !this.isDestroyed) {
      this.onClose.emit({
        index: this.index,
        message: this.message
      });
      if (!this.isDestroyed) {
        this.onAnimationEnd.emit(event.element);
      }
    }
  }
  onClose = new EventEmitter();
  _componentStyle = inject(ToastStyle);
  timeout;
  visible = signal(void 0, ...ngDevMode ? [{
    debugName: "visible"
  }] : (
    /* istanbul ignore next */
    []
  ));
  isDestroyed = false;
  isClosing = false;
  constructor(zone) {
    super();
    this.zone = zone;
    effect(() => {
      if (this.clearAll()) {
        this.visible.set(false);
      }
    });
  }
  onAfterViewInit() {
    var _a;
    ((_a = this.message) == null ? void 0 : _a.sticky) && this.visible.set(true);
    this.initTimeout();
  }
  initTimeout() {
    var _a;
    if (!((_a = this.message) == null ? void 0 : _a.sticky)) {
      this.clearTimeout();
      this.zone.runOutsideAngular(() => {
        var _a2;
        this.visible.set(true);
        this.timeout = setTimeout(() => {
          this.visible.set(false);
        }, ((_a2 = this.message) == null ? void 0 : _a2.life) || this.life || 3e3);
      });
    }
  }
  clearTimeout() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }
  onMouseEnter() {
    this.clearTimeout();
  }
  onMouseLeave() {
    if (!this.isClosing) {
      this.initTimeout();
    }
  }
  onCloseIconClick = (event) => {
    this.isClosing = true;
    this.clearTimeout();
    this.visible.set(false);
    event.preventDefault();
  };
  get closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : void 0;
  }
  onDestroy() {
    this.isDestroyed = true;
    this.clearTimeout();
    this.visible.set(false);
  }
  get dataP() {
    var _a, _b;
    return this.cn({
      [(_a = this.message) == null ? void 0 : _a.severity]: (_b = this.message) == null ? void 0 : _b.severity
    });
  }
  static \u0275fac = function ToastItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastItem)(\u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ToastItem,
    selectors: [["p-toastItem"]],
    inputs: {
      message: "message",
      index: [2, "index", "index", numberAttribute],
      life: [2, "life", "life", numberAttribute],
      template: "template",
      headlessTemplate: "headlessTemplate",
      showTransformOptions: "showTransformOptions",
      hideTransformOptions: "hideTransformOptions",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      motionOptions: [1, "motionOptions"],
      clearAll: [1, "clearAll"]
    },
    outputs: {
      onAnimationStart: "onAnimationStart",
      onAnimationEnd: "onAnimationEnd",
      onClose: "onClose"
    },
    features: [\u0275\u0275ProvidersFeature([ToastStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 4,
    vars: 10,
    consts: [["container", ""], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 3, "pMotionOnBeforeEnter", "pMotionOnAfterLeave", "mouseenter", "mouseleave", "pMotion", "pMotionAppear", "pMotionName", "pMotionOptions", "pBind"], [3, "pBind", "class"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "pBind"], [4, "ngIf"], [3, "pBind", "ngClass"], ["data-p-icon", "check", 3, "pBind", "class"], ["data-p-icon", "info-circle", 3, "pBind", "class"], ["data-p-icon", "times-circle", 3, "pBind", "class"], ["data-p-icon", "exclamation-triangle", 3, "pBind", "class"], ["data-p-icon", "check", 3, "pBind"], ["data-p-icon", "info-circle", 3, "pBind"], ["data-p-icon", "times-circle", 3, "pBind"], ["data-p-icon", "exclamation-triangle", 3, "pBind"], ["type", "button", "autofocus", "", 3, "click", "keydown.enter", "pBind"], ["data-p-icon", "times", 3, "pBind", "class"], [3, "pBind", "class", 4, "ngIf"], ["data-p-icon", "times", 3, "pBind"]],
    template: function ToastItem_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275listener("pMotionOnBeforeEnter", function ToastItem_Template_div_pMotionOnBeforeEnter_0_listener($event) {
          return ctx.onBeforeEnter($event);
        })("pMotionOnAfterLeave", function ToastItem_Template_div_pMotionOnAfterLeave_0_listener($event) {
          return ctx.onAfterLeave($event);
        })("mouseenter", function ToastItem_Template_div_mouseenter_0_listener() {
          return ctx.onMouseEnter();
        })("mouseleave", function ToastItem_Template_div_mouseleave_0_listener() {
          return ctx.onMouseLeave();
        });
        \u0275\u0275conditionalCreate(2, ToastItem_Conditional_2_Template, 1, 5, "ng-container")(3, ToastItem_Conditional_3_Template, 4, 9, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("message"), ctx.message == null ? null : ctx.message.styleClass));
        \u0275\u0275property("pMotion", ctx.visible())("pMotionAppear", true)("pMotionName", "p-toast-message")("pMotionOptions", ctx.motionOptions())("pBind", ctx.ptm("message"));
        \u0275\u0275attribute("id", ctx.message == null ? null : ctx.message.id)("data-p", ctx.dataP);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.headlessTemplate ? 2 : 3);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, CheckIcon, ExclamationTriangleIcon, InfoCircleIcon, TimesIcon, TimesCircleIcon, SharedModule, Bind, MotionModule, MotionDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastItem, [{
    type: Component,
    args: [{
      selector: "p-toastItem",
      standalone: true,
      imports: [CommonModule, CheckIcon, ExclamationTriangleIcon, InfoCircleIcon, TimesIcon, TimesCircleIcon, SharedModule, Bind, MotionModule],
      template: `
        <div
            #container
            [pMotion]="visible()"
            [pMotionAppear]="true"
            [pMotionName]="'p-toast-message'"
            [pMotionOptions]="motionOptions()"
            (pMotionOnBeforeEnter)="onBeforeEnter($event)"
            (pMotionOnAfterLeave)="onAfterLeave($event)"
            [attr.id]="message?.id"
            [pBind]="ptm('message')"
            [class]="cn(cx('message'), message?.styleClass)"
            (mouseenter)="onMouseEnter()"
            (mouseleave)="onMouseLeave()"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            [attr.data-p]="dataP"
        >
            @if (headlessTemplate) {
                <ng-container *ngTemplateOutlet="headlessTemplate; context: { $implicit: message, closeFn: onCloseIconClick }"></ng-container>
            } @else {
                <div [pBind]="ptm('messageContent')" [class]="cn(cx('messageContent'), message?.contentStyleClass)">
                    <ng-container *ngIf="!template">
                        @if (message.icon) {
                            <span [pBind]="ptm('messageIcon')" [class]="cn(cx('messageIcon'), message?.icon)"></span>
                        } @else {
                            @switch (message.severity) {
                                @case ('success') {
                                    <svg [pBind]="ptm('messageIcon')" data-p-icon="check" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                                @case ('info') {
                                    <svg [pBind]="ptm('messageIcon')" data-p-icon="info-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                                @case ('error') {
                                    <svg [pBind]="ptm('messageIcon')" data-p-icon="times-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                                @case ('warn') {
                                    <svg [pBind]="ptm('messageIcon')" data-p-icon="exclamation-triangle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                                @default {
                                    <svg [pBind]="ptm('messageIcon')" data-p-icon="info-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                            }
                        }
                        <div [pBind]="ptm('messageText')" [ngClass]="cx('messageText')" [attr.data-p]="dataP">
                            <div [pBind]="ptm('summary')" [ngClass]="cx('summary')" [attr.data-p]="dataP">
                                {{ message.summary }}
                            </div>
                            <div [pBind]="ptm('detail')" [ngClass]="cx('detail')" [attr.data-p]="dataP">{{ message.detail }}</div>
                        </div>
                    </ng-container>
                    <ng-container *ngTemplateOutlet="template; context: { $implicit: message }"></ng-container>
                    @if (message?.closable !== false) {
                        <div>
                            <button
                                [pBind]="ptm('closeButton')"
                                type="button"
                                [attr.class]="cx('closeButton')"
                                (click)="onCloseIconClick($event)"
                                (keydown.enter)="onCloseIconClick($event)"
                                [attr.aria-label]="closeAriaLabel"
                                autofocus
                                [attr.data-p]="dataP"
                            >
                                @if (message.closeIcon) {
                                    <span [pBind]="ptm('closeIcon')" *ngIf="message.closeIcon" [class]="cn(cx('closeIcon'), message?.closeIcon)"></span>
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
  }], () => [{
    type: NgZone
  }], {
    message: [{
      type: Input
    }],
    index: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    life: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    template: [{
      type: Input
    }],
    headlessTemplate: [{
      type: Input
    }],
    showTransformOptions: [{
      type: Input
    }],
    hideTransformOptions: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
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
    onAnimationStart: [{
      type: Output,
      args: ["onAnimationStart"]
    }],
    onAnimationEnd: [{
      type: Output,
      args: ["onAnimationEnd"]
    }],
    onClose: [{
      type: Output
    }]
  });
})();
var Toast = class _Toast extends BaseComponent {
  componentName = "Toast";
  $pcToast = inject(TOAST_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Key of the message in case message is targeted to a specific toast component.
   * @group Props
   */
  key;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * The default time to display messages for in milliseconds.
   * @group Props
   */
  life = 3e3;
  /**
   * Inline class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Position of the toast in viewport.
   * @group Props
   */
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    this.cd.markForCheck();
  }
  /**
   * It does not add the new message if there is already a toast displayed with the same content
   * @group Props
   */
  preventOpenDuplicates = false;
  /**
   * Displays only once a message with the same content.
   * @group Props
   */
  preventDuplicates = false;
  /**
   * Transform options of the show animation.
   * @group Props
   * @deprecated since v21.0.0. Use `motionOptions` instead.
   */
  showTransformOptions = "translateY(100%)";
  /**
   * Transform options of the hide animation.
   * @group Props
   * @deprecated since v21.0.0. Use `motionOptions` instead.
   */
  hideTransformOptions = "translateY(-100%)";
  /**
   * Transition options of the show animation.
   * @group Props
   * @deprecated since v21.0.0. Use `motionOptions` instead.
   */
  showTransitionOptions = "300ms ease-out";
  /**
   * Transition options of the hide animation.
   * @group Props
   * @deprecated since v21.0.0. Use `motionOptions` instead.
   */
  hideTransitionOptions = "250ms ease-in";
  /**
   * The motion options.
   * @group Props
   */
  motionOptions = input(void 0, ...ngDevMode ? [{
    debugName: "motionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  computedMotionOptions = computed(() => {
    return __spreadValues(__spreadValues({}, this.ptm("motion")), this.motionOptions());
  }, ...ngDevMode ? [{
    debugName: "computedMotionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Object literal to define styles per screen size.
   * @group Props
   */
  breakpoints;
  /**
   * Callback to invoke when a message is closed.
   * @param {ToastCloseEvent} event - custom close event.
   * @group Emits
   */
  onClose = new EventEmitter();
  /**
   * Custom message template.
   * @param {ToastMessageTemplateContext} context - message context.
   * @see {@link ToastMessageTemplateContext}
   * @group Templates
   */
  template;
  /**
   * Custom headless template.
   * @param {ToastHeadlessTemplateContext} context - headless context.
   * @see {@link ToastHeadlessTemplateContext}
   * @group Templates
   */
  headlessTemplate;
  messageSubscription;
  clearSubscription;
  messages;
  messagesArchieve;
  _position = "top-right";
  messageService = inject(MessageService);
  _componentStyle = inject(ToastStyle);
  styleElement;
  id = s2("pn_id_");
  templates;
  clearAllTrigger = signal(null, ...ngDevMode ? [{
    debugName: "clearAllTrigger"
  }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    super();
  }
  onInit() {
    this.messageSubscription = this.messageService.messageObserver.subscribe((messages) => {
      if (messages) {
        if (Array.isArray(messages)) {
          const filteredMessages = messages.filter((m3) => this.canAdd(m3));
          this.add(filteredMessages);
        } else if (this.canAdd(messages)) {
          this.add([messages]);
        }
      }
    });
    this.clearSubscription = this.messageService.clearObserver.subscribe((key) => {
      if (key) {
        if (this.key === key) {
          this.clearAll();
        }
      } else {
        this.clearAll();
      }
      this.cd.markForCheck();
    });
  }
  clearAll() {
    this.clearAllTrigger.set({});
  }
  _template;
  _headlessTemplate;
  onAfterContentInit() {
    var _a;
    (_a = this.templates) == null ? void 0 : _a.forEach((item) => {
      switch (item.getType()) {
        case "message":
          this._template = item.template;
          break;
        case "headless":
          this._headlessTemplate = item.template;
          break;
        default:
          this._template = item.template;
          break;
      }
    });
  }
  onAfterViewInit() {
    if (this.breakpoints) {
      this.createStyle();
    }
  }
  add(messages) {
    this.messages = this.messages ? [...this.messages, ...messages] : [...messages];
    if (this.preventDuplicates) {
      this.messagesArchieve = this.messagesArchieve ? [...this.messagesArchieve, ...messages] : [...messages];
    }
    this.cd.markForCheck();
  }
  canAdd(message) {
    let allow = this.key === message.key;
    if (allow && this.preventOpenDuplicates) {
      allow = !this.containsMessage(this.messages, message);
    }
    if (allow && this.preventDuplicates) {
      allow = !this.containsMessage(this.messagesArchieve, message);
    }
    return allow;
  }
  containsMessage(collection, message) {
    if (!collection) {
      return false;
    }
    return collection.find((m3) => {
      return m3.summary === message.summary && m3.detail == message.detail && m3.severity === message.severity;
    }) != null;
  }
  onMessageClose(event) {
    var _a;
    (_a = this.messages) == null ? void 0 : _a.splice(event.index, 1);
    this.onClose.emit({
      message: event.message
    });
    this.onAnimationEnd();
    this.cd.detectChanges();
  }
  onAnimationStart() {
    var _a, _b, _c;
    this.renderer.setAttribute((_a = this.el) == null ? void 0 : _a.nativeElement, this.id, "");
    if (this.autoZIndex && ((_b = this.el) == null ? void 0 : _b.nativeElement.style.zIndex) === "") {
      zindexutils.set("modal", (_c = this.el) == null ? void 0 : _c.nativeElement, this.baseZIndex || this.config.zIndex.modal);
    }
  }
  onAnimationEnd() {
    var _a;
    if (this.autoZIndex && l(this.messages)) {
      zindexutils.clear((_a = this.el) == null ? void 0 : _a.nativeElement);
    }
  }
  createStyle() {
    var _a, _b, _c, _d;
    if (!this.styleElement) {
      this.styleElement = this.renderer.createElement("style");
      this.styleElement.type = "text/css";
      te(this.styleElement, "nonce", (_b = (_a = this.config) == null ? void 0 : _a.csp()) == null ? void 0 : _b.nonce);
      this.renderer.appendChild(this.document.head, this.styleElement);
      let innerHTML = "";
      for (let breakpoint in this.breakpoints) {
        let breakpointStyle = "";
        for (let styleProp in this.breakpoints[breakpoint]) {
          breakpointStyle += styleProp + ":" + this.breakpoints[breakpoint][styleProp] + " !important;";
        }
        innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-toast[${this.id}] {
                           ${breakpointStyle}
                        }
                    }
                `;
      }
      this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
      te(this.styleElement, "nonce", (_d = (_c = this.config) == null ? void 0 : _c.csp()) == null ? void 0 : _d.nonce);
    }
  }
  destroyStyle() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
    }
  }
  onDestroy() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
    if (this.el && this.autoZIndex) {
      zindexutils.clear(this.el.nativeElement);
    }
    if (this.clearSubscription) {
      this.clearSubscription.unsubscribe();
    }
    this.destroyStyle();
  }
  get dataP() {
    return this.cn({
      [this.position]: this.position
    });
  }
  static \u0275fac = function Toast_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Toast)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Toast,
    selectors: [["p-toast"]],
    contentQueries: function Toast_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c2, 5)(dirIndex, _c3, 5)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.template = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headlessTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 5,
    hostBindings: function Toast_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-p", ctx.dataP);
        \u0275\u0275styleMap(ctx.sx("root"));
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      key: "key",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      life: [2, "life", "life", numberAttribute],
      styleClass: "styleClass",
      position: "position",
      preventOpenDuplicates: [2, "preventOpenDuplicates", "preventOpenDuplicates", booleanAttribute],
      preventDuplicates: [2, "preventDuplicates", "preventDuplicates", booleanAttribute],
      showTransformOptions: "showTransformOptions",
      hideTransformOptions: "hideTransformOptions",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      motionOptions: [1, "motionOptions"],
      breakpoints: "breakpoints"
    },
    outputs: {
      onClose: "onClose"
    },
    features: [\u0275\u0275ProvidersFeature([ToastStyle, {
      provide: TOAST_INSTANCE,
      useExisting: _Toast
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Toast
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [[3, "message", "index", "life", "clearAll", "template", "headlessTemplate", "pt", "unstyled", "motionOptions", "onClose", "onAnimationEnd", "onAnimationStart", 4, "ngFor", "ngForOf"], [3, "onClose", "onAnimationEnd", "onAnimationStart", "message", "index", "life", "clearAll", "template", "headlessTemplate", "pt", "unstyled", "motionOptions"]],
    template: function Toast_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, Toast_p_toastItem_0_Template, 1, 9, "p-toastItem", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngForOf", ctx.messages);
      }
    },
    dependencies: [CommonModule, NgForOf, ToastItem, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Toast, [{
    type: Component,
    args: [{
      selector: "p-toast",
      standalone: true,
      imports: [CommonModule, ToastItem, SharedModule],
      template: `
        <p-toastItem
            *ngFor="let msg of messages; let i = index"
            [message]="msg"
            [index]="i"
            [life]="life"
            [clearAll]="clearAllTrigger()"
            (onClose)="onMessageClose($event)"
            (onAnimationEnd)="onAnimationEnd()"
            (onAnimationStart)="onAnimationStart()"
            [template]="template || _template"
            [headlessTemplate]="headlessTemplate || _headlessTemplate"
            [pt]="pt"
            [unstyled]="unstyled()"
            [motionOptions]="computedMotionOptions()"
        ></p-toastItem>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ToastStyle, {
        provide: TOAST_INSTANCE,
        useExisting: Toast
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Toast
      }],
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[style]": "sx('root')",
        "[attr.data-p]": "dataP"
      },
      hostDirectives: [Bind]
    }]
  }], () => [], {
    key: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    life: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    preventOpenDuplicates: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    preventDuplicates: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTransformOptions: [{
      type: Input
    }],
    hideTransformOptions: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
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
      type: Input
    }],
    onClose: [{
      type: Output
    }],
    template: [{
      type: ContentChild,
      args: ["message"]
    }],
    headlessTemplate: [{
      type: ContentChild,
      args: ["headless"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ToastModule = class _ToastModule {
  static \u0275fac = function ToastModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToastModule,
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
//# sourceMappingURL=chunk-H4X3A5HG.js.map
