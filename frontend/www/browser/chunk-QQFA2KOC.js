import {
  API_URL_BASE,
  HttpClient
} from "./chunk-XCBA4FSK.js";
import {
  Injectable,
  catchError,
  setClassMetadata,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-4LZZ5H7X.js";

// src/app/core/eventos-services/eventos-services.service.ts
var EventosServices = class _EventosServices {
  http;
  apiUrl = API_URL_BASE;
  constructor(http) {
    this.http = http;
  }
  /**
   * Función para añadir un nuevo evento.
   *
   * @param evento --> Recibe el objeto Evento.
   * @returns --> Devuelve el mensaje de confirmación con el evento creado.
   */
  anadirEvento(evento) {
    return this.http.post(this.apiUrl + "/evento/anadir_evento", evento);
  }
  /**
   *
   */
  obtenerTodosLosEventos() {
    return this.http.get(`${this.apiUrl}/evento/obtener_eventos`).pipe(catchError((error) => {
      console.error("Error al obtener los usuarios registrados:", error);
      throw error;
    }));
  }
  /**
   * Función para obtener el evento por su id.
   *
   * @param evento_id --> ID del evento.
   * @returns --> Devuelve el evento.
   */
  obtener_evento_id(evento_id) {
    return this.http.get(`${this.apiUrl}/evento/obtener_evento_id?id=${evento_id}`);
  }
  /**
   * Función para editar un evento seleccionado.
   *
   * @param id_evento --> ID del evento seleccionado.
   * @param evento --> Objeto del evento completo.
   * @returns --> Devuelve el mensaje de confirmación/error.
   */
  editarEvento(id_evento, evento) {
    return this.http.put(`${this.apiUrl}/evento/editar_evento/${id_evento}`, evento).pipe(catchError((error) => {
      return throwError(() => error);
    }));
  }
  /**
   * Función para eliminar un evento seleccionado.
   *
   * @param id_evento --> ID del evento seleccionado.
   * @param evento --> Objeto del evento completo.
   * @returns --> Devuelve el mensaje de confirmación/error.
   */
  eliminarEvento(id_evento, evento) {
    return this.http.delete(`${this.apiUrl}/evento/eliminar_evento/${id_evento}`, evento).pipe(catchError((error) => {
      return throwError(() => error);
    }));
  }
  static \u0275fac = function EventosServices_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventosServices)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventosServices, factory: _EventosServices.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventosServices, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  EventosServices
};
//# debugId=f0d12609-74fa-5159-901a-0d771938f05e
//# sourceMappingURL=chunk-QQFA2KOC.js.map
