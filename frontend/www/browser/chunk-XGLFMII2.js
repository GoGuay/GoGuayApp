import {
  API_URL_BASE,
  HttpClient
} from "./chunk-TU2LK3TM.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-HLETIGG3.js";

// src/app/core/menssaging-service/messaging.service.ts
var MessagingService = class _MessagingService {
  http;
  apiUrl = API_URL_BASE;
  constructor(http) {
    this.http = http;
  }
  // Obtener lista de chats del usuario
  getConversaciones(usuarioId) {
    return this.http.get(`${this.apiUrl}/chat/conversaciones/${usuarioId}`);
  }
  // Obtener mensajes de una conversación específica
  getMensajes(conversacionId) {
    return this.http.get(`${this.apiUrl}/chat/mensajes/${conversacionId}`);
  }
  // Enviar un nuevo mensaje
  enviarMensaje(mensaje) {
    return this.http.post(`${this.apiUrl}/chat/enviar`, mensaje);
  }
  iniciarChat(emisorId, receptorId) {
    return this.http.post(`${this.apiUrl}/chat/iniciar/${emisorId}/${receptorId}`, {});
  }
  /**
   * Marca como leídos todos los mensajes recibidos en una conversación
   * @param conversacionId ID del chat
   * @param usuarioId ID del usuario que está leyendo (el receptor)
   */
  marcarComoLeido(conversacionId, usuarioId) {
    return this.http.patch(`${this.apiUrl}/chat/leer/${conversacionId}/${usuarioId}`, {});
  }
  /**
   * Cambia el estado de lectura de todos los mensajes de una conversación
   * @param conversacionId ID del chat
   * @param usuarioId ID del usuario que realiza la acción
   * @param marcarComoLeido booleano (true para leer, false para no leído)
   */
  cambiarEstadoLectura(conversacionId, usuarioId, marcarComoLeido) {
    const estado = marcarComoLeido ? "leer" : "no-leer";
    const url = `${this.apiUrl}/chat/${estado}/${conversacionId}/${usuarioId}`;
    console.log("Llamando a:", url);
    return this.http.patch(url, {});
  }
  /**
   * Elimina una conversación completa y todos sus mensajes
   * @param conversacionId ID del chat a borrar
   */
  eliminarConversacion(conversacionId) {
    return this.http.delete(`${this.apiUrl}/chat/conversacion/${conversacionId}`);
  }
  /**
   * Función para enviar una solicitud de unirse a un viaje a través del chat.
   * @param mensaje  --> Recibe el mensaje que contiene la solicitud de unirse a un viaje (debe incluir el ID del viaje en el texto del mensaje).
   * @returns --> Devuelve un Observable con la respuesta del backend (el mensaje enviado con la solicitud de viaje).
   */
  enviarSolicitudViaje(mensaje) {
    return this.http.post(`${this.apiUrl}/chat/solicitar-unirse`, mensaje);
  }
  static \u0275fac = function MessagingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessagingService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MessagingService, factory: _MessagingService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessagingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  MessagingService
};
//# sourceMappingURL=chunk-XGLFMII2.js.map
