import {
  API_URL_BASE,
  HttpClient
} from "./chunk-XCBA4FSK.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-4LZZ5H7X.js";

// src/app/core/incidencias-service/incidencias-service.service.ts
var IncidenciasService = class _IncidenciasService {
  http;
  apiUrl = API_URL_BASE;
  constructor(http) {
    this.http = http;
  }
  /**
   * Obtiene la lista completa de incidencias del usuario
   * GET /api/incidencias/usuario/:id
   */
  obtenerIncidenciasUsuario(usuarioId) {
    return this.http.get(`${this.apiUrl}/incidencias/usuario/${usuarioId}`);
  }
  /**
  * Obtiene el listado global de incidencias para el panel de administración
  * GET /api/incidencias/admin/todas
  */
  obtenerTodasIncidenciasAdmin() {
    return this.http.get(`${this.apiUrl}/incidencias/admin/todas`);
  }
  /**
   * Registra una nueva incidencia en el sistema
   * POST /api/incidencias/crear
   */
  crearIncidencia(payload) {
    return this.http.post(`${this.apiUrl}/incidencias/crear`, payload);
  }
  /**
   * Añade una respuesta al hilo de seguimiento de la incidencia
   * POST /api/incidencias/:id/mensajes
   */
  enviarMensajeIncidencia(incidenciaId, emisorId, mensaje) {
    return this.http.post(`${this.apiUrl}/incidencias/${incidenciaId}/mensajes`, {
      emisor_id: emisorId,
      mensaje
    });
  }
  /**
   * Sube una imagen o documento adjunto asociado a la incidencia
   * POST /api/incidencias/:id/adjuntos
   */
  subirAdjunto(incidenciaId, archivo) {
    const formData = new FormData();
    formData.append("archivo", archivo);
    return this.http.post(`${this.apiUrl}/incidencias/${incidenciaId}/adjuntos`, formData);
  }
  /**
   * Modifica el estado de una incidencia (FINALIZADA, CANCELADA, EN_REVISION)
   * PATCH /api/incidencias/:id/estado
   */
  cambiarEstadoIncidencia(incidenciaId, nuevoEstado, motivoCancelacion, resolucionNotas) {
    return this.http.patch(`${this.apiUrl}/incidencias/${incidenciaId}/estado`, {
      nuevo_estado: nuevoEstado,
      motivo_cancelacion: motivoCancelacion || null,
      resolucion_notas: resolucionNotas || null
    });
  }
  /**
   * Cancela la incidencia a petición del usuario
   */
  cancelarIncidenciaPorUsuario(incidenciaId) {
    return this.cambiarEstadoIncidencia(incidenciaId, "CANCELADA", "POR_USUARIO");
  }
  static \u0275fac = function IncidenciasService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IncidenciasService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IncidenciasService, factory: _IncidenciasService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IncidenciasService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  IncidenciasService
};
//# debugId=46ac9161-f632-5143-b457-99ea943181e4
//# sourceMappingURL=chunk-XVLCLCLR.js.map
