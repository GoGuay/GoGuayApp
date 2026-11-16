import {
  TranslateService
} from "./chunk-XHXT42RH.js";
import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-HLETIGG3.js";

// src/app/core/lenguajes/languaje.service.ts
var LanguageService = class _LanguageService {
  translate;
  languageSubject = new BehaviorSubject("es");
  language$ = this.languageSubject.asObservable();
  constructor(translate) {
    this.translate = translate;
    const savedLanguage = localStorage.getItem("language") || "es";
    this.setLanguage(savedLanguage);
  }
  setLanguage(lang) {
    this.translate.use(lang);
    localStorage.setItem("language", lang);
    this.languageSubject.next(lang);
  }
  getLanguage() {
    return this.languageSubject.getValue();
  }
  static \u0275fac = function LanguageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LanguageService)(\u0275\u0275inject(TranslateService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LanguageService, factory: _LanguageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: TranslateService }], null);
})();

export {
  LanguageService
};
//# sourceMappingURL=chunk-7NH46FL3.js.map
