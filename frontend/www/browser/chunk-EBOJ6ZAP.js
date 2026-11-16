import {
  API_URL_BASE,
  HttpClient,
  environment
} from "./chunk-XCBA4FSK.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-4LZZ5H7X.js";

// src/app/core/encuesta_satisfaccion-service/encuesta_satisfaccion.service.ts
var EncuestaService = class _EncuestaService {
  http;
  apiUrl = API_URL_BASE;
  constructor(http) {
    this.http = http;
  }
  enviarEncuesta(datosFormulario, usuarioId) {
    const payload = {
      usuario_id: usuarioId || null,
      recomendacion: datosFormulario.recomendacion,
      sugerencias: datosFormulario.sugerencias,
      aspectos: [
        { nombre: "diseno", estado: this.getCheckEstado(datosFormulario.positivo0, datosFormulario.negativo0) },
        { nombre: "busqueda", estado: this.getCheckEstado(datosFormulario.positivo1, datosFormulario.negativo1) },
        { nombre: "mensajes", estado: this.getCheckEstado(datosFormulario.positivo2, datosFormulario.negativo2) },
        { nombre: "seguridad", estado: this.getCheckEstado(datosFormulario.positivo3, datosFormulario.negativo3) },
        { nombre: "normas", estado: this.getCheckEstado(datosFormulario.positivo4, datosFormulario.negativo4) }
      ]
    };
    return this.http.post(this.apiUrl + "/encuesta/", payload);
  }
  getCheckEstado(pos, neg) {
    if (pos)
      return "positivo";
    if (neg)
      return "negativo";
    return "neutro";
  }
  getTodasLasEncuestas() {
    return this.http.get(`${environment.apiUrl}/encuesta/admin/obtener_encuestas`);
  }
  static \u0275fac = function EncuestaService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EncuestaService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EncuestaService, factory: _EncuestaService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EncuestaService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  EncuestaService
};
//# debugId=5a2eaa8e-1df8-5e01-a3d2-cd8109b3a79e
//# sourceMappingURL=chunk-EBOJ6ZAP.js.map
