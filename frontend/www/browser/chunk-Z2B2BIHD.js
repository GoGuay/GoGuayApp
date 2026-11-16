import {
  HelpModalComponent
} from "./chunk-X7SDTFSG.js";
import {
  ModalErrorComponent
} from "./chunk-OLH4VKOB.js";
import {
  UserServicesService
} from "./chunk-43M6K65B.js";
import {
  MatDialog
} from "./chunk-6VCOWNW4.js";
import {
  API_URL_BASE,
  HttpClient,
  Router
} from "./chunk-XCBA4FSK.js";
import {
  Injectable,
  catchError,
  lastValueFrom,
  of,
  setClassMetadata,
  throwError,
  timeout,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-4LZZ5H7X.js";

// src/app/core/vehiculos-services/vehiculos-services.service.ts
var VehiculosServicesService = class _VehiculosServicesService {
  http;
  apiUrl = API_URL_BASE;
  constructor(http) {
    this.http = http;
  }
  /**
   * Función para añadir un vehículo a la lista de vehículos del usuario
   * @param vehiculo
   * @returns
   */
  anadirVehiculo(vehiculo) {
    return this.http.post(this.apiUrl + "/vehicle/anadir_vehiculo", vehiculo);
  }
  /**
   * Para obtener los vehículos de un usuario
   * @param usuario_id
   * @returns
   */
  obtenerVehiculosUsuario(usuario_id) {
    return this.http.get(this.apiUrl + "/vehicle/obtenerVehiculos_usuario", {
      params: { usuario_id: usuario_id.toString() }
    });
  }
  /**
   * Función para editar los datos de un vehículo que está en la lista del usuario
   * @param vehiculo_id
   * @param vehiculoData
   * @returns
   */
  editarVehiculo(vehiculo_id, vehiculoData) {
    return this.http.put(`${this.apiUrl}/vehicle/editarVehiculo/${vehiculo_id}`, vehiculoData).pipe(catchError((error) => {
      console.error("Error al editar los datos del veh\xEDculo", error);
      return throwError(() => error);
    }));
  }
  /**
   * Función para eliminar un vehículo de la lista del usuario
   * @param vehiculo_id
   * @param vehiculoData
   * @returns
   */
  eliminarVehiculo(vehiculo_id, vehiculoData) {
    return this.http.delete(`${this.apiUrl}/vehicle/eliminarVehiculo/${vehiculo_id}`, vehiculoData).pipe(catchError((error) => {
      console.error("Error al eliminar el veh\xEDculo", error);
      return throwError(() => error);
    }));
  }
  /**
   * Función para obtener un vehículo por su ID
   * Esta función se utiliza para obtener un vehículo específico de la base de datos
   * @param vehiculo_id Recibe el ID del vehículo que se desea obtener
   * @returns Devuelve un Observable con los datos del vehículo
   */
  obtenerVehiculoID(id) {
    return this.http.get(`${this.apiUrl}/obtenerVehiculoID?id=${id}`);
  }
  static \u0275fac = function VehiculosServicesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VehiculosServicesService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VehiculosServicesService, factory: _VehiculosServicesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VehiculosServicesService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/core/google-services/google-services.service.ts
var GoogleServices = class _GoogleServices {
  http;
  apiUrl = API_URL_BASE;
  // private geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
  // private apiKey = 'AIzaSyD2GJTw7EJR95V_4UQj_zIOTHw_RVGvkOM';
  constructor(http) {
    this.http = http;
  }
  obtenerLocalidad(localidad) {
    return this.http.get(`${this.apiUrl}/apigoogle/buscar_localidad?q=${localidad}`).pipe(
      timeout(1e4),
      // Aumenta el tiempo límite a 10 segundos (10000 ms)
      catchError((error) => {
        console.error("Error al obtener la localidad:", error);
        throw error;
      })
    );
  }
  /**
   * Función para detectar el idioma en el que viene un texto
   * Creamos una variable body que es un objeto que contiene un atributo (texto) y se le asigna un valor (idiomaDetectado)
   * return: llama al servicio del backend y le pasa el objeto al backend en formato json.
   * pipe:  conecta con el backend por si en algún momento se recibe un error y se captura con el catchError
   * @param idiomaDetectado --> es el texto completo del que se quiere detectar el idioma
   * @returns 'es' || 'en'
   */
  detectarIdiomaTexto(idiomaDetectado) {
    const body = { texto: idiomaDetectado };
    return this.http.post(`${this.apiUrl}/apigoogle/detectar_idioma`, body).pipe(catchError((error) => {
      console.error("Error al obtener el idioma:", error);
      throw error;
    }));
  }
  /**
   * Función para traducir el texto del que hemos detectado el idioma.
   * Creamos una variable body que es un objeto que contiene 3 atributos que son:
   *    texto (recibe textoUsuario en parametros), idioma_destino (recibe idem), idioma_origen (recibe idem).
   * return: llama al servicio del backend y le pasa el objeto al backend en formato json.
   * pipe:  conecta con el backend por si en algún momento se recibe un error y se captura con el catchError
   * @param textoUsuario: es un string que recibe el texto que se quiere traducir
   * @param idioma_destino: string que recibe el idioma al que traducir.
   * @param idioma_origen: string que recibe el idioma en el que está el texto.
   * @returns devuelve un objeto con el texto traducido (esto se ve en la función del backend)
   */
  traducirIdiomaTexto(textoUsuario, idioma_destino, idioma_origen) {
    const body = {
      texto: textoUsuario,
      idioma_destino,
      idioma_origen
    };
    return this.http.post(`${this.apiUrl}/apigoogle/traducir_texto`, body).pipe(catchError((error) => {
      console.error("Error al traducir el texto:", error);
      throw error;
    }));
  }
  static \u0275fac = function GoogleServices_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GoogleServices)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GoogleServices, factory: _GoogleServices.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoogleServices, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/core/funciones-comunes/funciones-comunes.service.ts
var FuncionesComunes = class _FuncionesComunes {
  dialog;
  vehicleService;
  userService;
  router;
  googleService;
  userData = {};
  sugerenciasOrigen = [];
  sugerenciasDestino = [];
  validacionIdioma = true;
  cargandoOrigen = false;
  cargandoDestino = false;
  vehiculos_usuario = [];
  VehiculoYaAnadido = false;
  usuario = {};
  constructor(dialog, vehicleService, userService, router, googleService) {
    this.dialog = dialog;
    this.vehicleService = vehicleService;
    this.userService = userService;
    this.router = router;
    this.googleService = googleService;
    this.loadUserData();
  }
  /**
   * Función para recoger de "localStorage" los datos del usuario, si los hay.
   */
  loadUserData() {
    this.userData = JSON.parse(localStorage.getItem("userData") || "{}");
  }
  /**
   *      Función para validar si el usuario está logado o no.
   *
   * -> Verifica que "userData" existe.
   * -> Verifica si "userData" tiene datos.
   * -> Verifica si hay un "email" en los atributos del usuario.
   *
   * @returns Si todas las validaciones se cumplen, devuelve un TRUE, en caso contrario FALSE.
   */
  isUserLoggedIn() {
    var _a;
    if (!this.userData)
      return false;
    if (Object.keys(this.userData).length === 0)
      return false;
    if (!((_a = this.userData.usuario) == null ? void 0 : _a.email))
      return false;
    return true;
  }
  /**
   * Función para obtener la url en la que está posicionado el usuario.
   *
   * @returns
   */
  getBaseUrl() {
    const url = this.router.url;
    const baseUrl = url.split("?")[0];
    localStorage.setItem("url_anterior", baseUrl);
    return baseUrl;
  }
  /**
   * Función para dar formato al selector de preferencias del viaje.
   *
   * -> Primero se valida el parámetro de entrada "preferencias"
   *    para conocer el estado del objeto que se recibe y evitar errores.
   *
   * @param viaje Recibe los datos del viaje seleccionado.
   * @returns
   */
  validacionPreferencias(preferencias) {
    console.log("preferencias: ", preferencias);
    if (!preferencias || !Array.isArray(preferencias))
      return [];
    return preferencias.map((pref) => {
      switch (pref.toString().toLowerCase()) {
        case "silencio":
        case "silence":
          return "Prefiere viajar en silencio";
        case "dormir":
          return "Prefiere ir durmiendo";
        case "escuchar m\xFAsica":
          return "Prefiere ir escuchando m\xFAsica";
        case "hablar":
          return "Prefiere ir hablando";
        default:
          return pref;
      }
    }).filter((p) => p !== "");
  }
  /**
   * Función para abrir la ventana modal con mensajes de error.
   *
   * @param title Recibe el título a mostrar.
   * @param message Recibe el mensaje a mostrar.
   */
  openErrorModal(title, message) {
    return this.dialog.open(ModalErrorComponent, {
      data: { title, message },
      panelClass: "dialog-animate"
    });
  }
  /**
   * Función para abrir la ventana modal con los mensajes de confirmación.
   *
   * @param title Recibe el título a mostrar.
   * @param message Recibe el mensaje a mostrar.
   */
  openConfirmModal(title, message) {
    return this.dialog.open(HelpModalComponent, {
      data: { title, message },
      disableClose: true
    });
  }
  /* * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   *     FUNCIONES PARA LAS SUGERENCIAS DE VIAJES
   *
   * * * * * * * * * * * * * * * * * * * * * * * * * */
  /**
   * Función para obtener la lista de sugerencias para el origen
   * en función de lo que escriba el usuario en el input correspondiente.
   *
   * @param evento Recibe el evento del input.
   */
  sugerenciasTimeout;
  obtenerSugerenciasOrigen(evento) {
    const contenidoInput = evento.target.value;
    if (contenidoInput.trim().length >= 3) {
      return this.googleService.obtenerLocalidad(contenidoInput);
    } else {
      return of([]);
    }
  }
  /**
   * Función para obtener la lista de sugerencias para el destino
   * en función de lo que escriba el usuario en el input correspondiente.
   *
   * @param evento Recibe el evento del input.
   */
  sugerenciasDestinoTimeout;
  obtenerSugerenciasDestino(evento) {
    const contenidoInput = evento.target.value;
    if (contenidoInput.trim().length >= 3) {
      return this.googleService.obtenerLocalidad(contenidoInput);
    } else {
      return of([]);
    }
  }
  /**
   * Función para validar si un viaje ha terminado o no.   *
   * @param fecha_salida
   * @returns
   */
  esViajeFinalizado(fecha_salida, hora_llegada) {
    const fechaViaje = new Date(fecha_salida);
    const [hora, minutos] = hora_llegada.split(":").map(Number);
    fechaViaje.setHours(hora, minutos, 0, 0);
    const ahora = /* @__PURE__ */ new Date();
    return ahora > fechaViaje;
  }
  /******************************************
   *                                        *
   *  FUNCIONES PARA EL PERFIL DEL USUARIO  *
   *                                        *
   *****************************************/
  /**
   * Función para obtener los datos del usuario.   *
   * @param id_usuario
   */
  obtenerDatosUsuario(id_usuario) {
    this.usuario = lastValueFrom(this.userService.obtenerUsuarioPorID(id_usuario));
  }
  /******************************************
   *                                        *
   *  FUNCIONES PARA VEHÍCULOS              *
   *                                        *
   *****************************************/
  /**
   * Función para guardar un coche en la
   * lista de vehículos del usuario.
   */
  /**
   * Función para verificar si el usuario tiene vehículos
   */
  get noVehiculos() {
    var _a, _b, _c;
    return ((_c = (_b = (_a = this.userData) == null ? void 0 : _a.usuario) == null ? void 0 : _b.vehiculos) == null ? void 0 : _c.length) === 0;
  }
  /**
   * Función para editar los datos de un vehículo añadido
   * @param vehiculo
   */
  editarVehiculo(vehiculo) {
    console.log("Vehiculo modificado: ", vehiculo);
    this.vehicleService.editarVehiculo(vehiculo.id, vehiculo).subscribe((resultado) => {
      console.log("Resultado: ", resultado);
    });
  }
  static \u0275fac = function FuncionesComunes_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FuncionesComunes)(\u0275\u0275inject(MatDialog), \u0275\u0275inject(VehiculosServicesService), \u0275\u0275inject(UserServicesService), \u0275\u0275inject(Router), \u0275\u0275inject(GoogleServices));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FuncionesComunes, factory: _FuncionesComunes.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FuncionesComunes, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: MatDialog }, { type: VehiculosServicesService }, { type: UserServicesService }, { type: Router }, { type: GoogleServices }], null);
})();

export {
  VehiculosServicesService,
  GoogleServices,
  FuncionesComunes
};
//# debugId=f1202488-9a20-5382-b5b5-2cbfd0e37146
//# sourceMappingURL=chunk-Z2B2BIHD.js.map
