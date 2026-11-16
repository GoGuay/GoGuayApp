import {
  CARS,
  COLORES,
  TablaVehiculosComponent
} from "./chunk-DY3MYF2F.js";
import {
  FuncionesUsuario
} from "./chunk-WEKBOLNN.js";
import {
  SelectorGeneralComponent
} from "./chunk-677CIR45.js";
import "./chunk-FEWBZDDR.js";
import "./chunk-Q4RAWFUE.js";
import {
  Toast,
  ToastModule
} from "./chunk-H4X3A5HG.js";
import {
  SpinnerComponent
} from "./chunk-AZFY3OZL.js";
import {
  MatTooltipModule
} from "./chunk-WRNS2BOT.js";
import {
  MatTooltip
} from "./chunk-OYP26GS3.js";
import {
  NavbarComponent
} from "./chunk-YAGW6LPY.js";
import "./chunk-N25HX3QD.js";
import "./chunk-HCR355QR.js";
import {
  FuncionesComunes,
  GoogleServices,
  VehiculosServicesService
} from "./chunk-TMB2KEQX.js";
import "./chunk-TGPQDEZS.js";
import "./chunk-BLKEDZE4.js";
import {
  HelpModalComponent
} from "./chunk-N7S2XU3X.js";
import "./chunk-CIEE2FXQ.js";
import {
  LanguageService
} from "./chunk-G5UZDB7B.js";
import {
  MessageService
} from "./chunk-WDE6N5F6.js";
import {
  UserServicesService
} from "./chunk-34RASOLQ.js";
import {
  MatDivider
} from "./chunk-ULIFZXTE.js";
import "./chunk-WBBLYEAR.js";
import {
  MatDialog
} from "./chunk-LLKVXR72.js";
import "./chunk-Z2EGICVD.js";
import {
  IonCol,
  IonContent,
  IonRow,
  IonicModule
} from "./chunk-XTRPVKSN.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-PWPN4F54.js";
import {
  ActivatedRoute,
  CommonModule,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NavController,
  NgControlStatus,
  NgModel,
  NgStyle,
  RequiredValidator,
  Router
} from "./chunk-DD4MNYDA.js";
import {
  ChangeDetectorRef,
  Component,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-YUKRBYLH.js";
import "./chunk-NEFVXLXQ.js";
import "./chunk-UGUZQALC.js";
import "./chunk-4JA4ETJA.js";
import "./chunk-RI33YQSB.js";
import "./chunk-7NBG2LBA.js";
import "./chunk-MOKADOCG.js";
import "./chunk-4UX5YYJM.js";
import "./chunk-7WJRAT5Y.js";
import "./chunk-XSENUJ4A.js";
import "./chunk-K6BOSGGR.js";
import "./chunk-HM6RSKJQ.js";
import "./chunk-QU22HLHJ.js";
import "./chunk-HMGJJ2JN.js";
import "./chunk-GV4SC633.js";
import "./chunk-XEOOW4LE.js";
import "./chunk-TNIKZTJG.js";
import "./chunk-QD6KASZP.js";
import "./chunk-ZO2Q2TV5.js";
import "./chunk-NZ2QYBMG.js";
import "./chunk-5MFCCRYD.js";
import "./chunk-LYPF3I3J.js";
import "./chunk-PHWUJLET.js";
import "./chunk-ZBCCTIRL.js";
import "./chunk-KLZ5YPL6.js";
import "./chunk-SWNU2J3M.js";
import "./chunk-FUL4CNB6.js";
import "./chunk-AIOHWISL.js";
import "./chunk-FPPEK4XH.js";
import "./chunk-MEOWV5C6.js";
import "./chunk-DI3VEDFV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-5SZB5ECT.js";

// src/app/pages/paginas-panel-usuario/mi-perfil/mi-perfil.page.ts
var _c0 = ["popover"];
var _c1 = (a0) => ({ "color": a0 });
function MiPerfilPage_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "app-spinner");
    \u0275\u0275elementEnd();
  }
}
function MiPerfilPage_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "button", 83);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("click", function MiPerfilPage_Conditional_29_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.modalEliminarFotoPerfil(ctx_r3.userData.usuario));
    });
    \u0275\u0275element(4, "img", 84);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "BOTONES.MIPERFIL.ELIMINAR_FOTO_PERFIL_MATTOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 4, "BOTONES.MIPERFIL.ELIMINAR_FOTO_PERFIL_ARIALABEL"));
  }
}
function MiPerfilPage_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "MIPERFIL.INFO_PERSONAL.NOMBRE_OBLIGATORIO"));
  }
}
function MiPerfilPage_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "MIPERFIL.INFO_PERSONAL.APELLIDOS_OBLIGATORIO"));
  }
}
function MiPerfilPage_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner", 47);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("texto_spinner", \u0275\u0275pipeBind1(1, 2, ctx_r3.texto_spinner))("tamano_completo", false);
  }
}
var MiPerfilPage = class _MiPerfilPage {
  funcionesComunes;
  languageService;
  userService;
  googleService;
  funcionesUsuario;
  vehiculosServicesService;
  cdr;
  messageService;
  translate;
  navCtrl;
  dialog;
  route;
  router;
  popover;
  userLoggedIn = false;
  userData = {};
  fechaNacimiento = "";
  editandoVehiculo = false;
  datosActualizados = {};
  mostrarSelectorVehiculo = false;
  isMobileWeb = false;
  isDesktop = true;
  botonHabilitado = false;
  vehiculos_usuario = [];
  nombreEditado = "";
  apellidosEditados = "";
  pronombreEditado = "";
  generoEditado = "";
  orientacionEditada = "";
  fechaNacimientoEditada = "";
  bioEditada = "";
  texto_spinner = "Traduciendo...";
  preferenciasSeleccionadas = [];
  comunComerciales = false;
  emailEditado = "";
  telefonoEditado = "";
  isOpen = false;
  edad = 0;
  marcaSeleccionada = "";
  modeloSeleccionado = "";
  colorSeleccionado = "";
  lang = "es";
  imagenPerfilSrc = "../../../assets/user/logOn.gif";
  imagenPerfilUsuario = null;
  cargando = false;
  perfilSinFoto = false;
  variableEjemplo = false;
  spinnerActivo = false;
  vengoDeViaje = false;
  modificandoMarca = false;
  listadoCoches = CARS;
  listadoColores = COLORES;
  modelosFiltrados = [];
  orientacionCtrl = {
    idUnico: "orientacion",
    valorTexto: "",
    estaActivo: false,
    indiceActivo: -1,
    sugerencias: []
  };
  listaPronombresOriginales = [
    { valor: "el_he_him", descripcion: "MIPERFIL.INFO_PERSONAL.PRONOMBRE.OPC_EL" },
    { valor: "ella_she_her", descripcion: "MIPERFIL.INFO_PERSONAL.PRONOMBRE.OPC_ELLA" },
    { valor: "elle_they_them", descripcion: "MIPERFIL.INFO_PERSONAL.PRONOMBRE.OPC_ELLE" },
    { valor: "otros", descripcion: "MIPERFIL.INFO_PERSONAL.PRONOMBRE.OPC_OTROS" },
    { valor: "no_uso", descripcion: "MIPERFIL.INFO_PERSONAL.PRONOMBRE.OPC_NOUSO" },
    { valor: "no_responde", descripcion: "MIPERFIL.INFO_PERSONAL.PRONOMBRE.OPC_NORESPONDO" }
  ];
  listaGenerosOriginales = [
    { valor: "Mujer Cis", descripcion: "SELECTOR_GENERO.M_CIS" },
    { valor: "Hombre Cis", descripcion: "SELECTOR_GENERO.H_CIS" },
    { valor: "Transexual", descripcion: "SELECTOR_GENERO.TRANS" },
    { valor: "No binario", descripcion: "SELECTOR_GENERO.NO_BINARIO" },
    { valor: "Interg\xE9nero", descripcion: "SELECTOR_GENERO.INTER" },
    { valor: "No fluido", descripcion: "SELECTOR_GENERO.NO_FLUIDO" },
    { valor: "Otro", descripcion: "SELECTOR_GENERO.OTRO" },
    { valor: "Prefiero no responder", descripcion: "SELECTOR_GENERO.NO_RESPONDE" }
  ];
  listaOrientacionesOriginales = [
    { valor: "Gay", descripcion: "SELECTOR_ORIENTACION.GAY" },
    { valor: "Lesbiana", descripcion: "SELECTOR_ORIENTACION.LESBIANA" },
    { valor: "Bisexual", descripcion: "SELECTOR_ORIENTACION.BISEXUAL" },
    { valor: "Heterosexual", descripcion: "SELECTOR_ORIENTACION.HETEROSEXUAL" },
    { valor: "Pansexual", descripcion: "SELECTOR_ORIENTACION.PANSEXUAL" },
    { valor: "Demisexual", descripcion: "SELECTOR_ORIENTACION.DEMISEXUAL" },
    { valor: "Queer", descripcion: "SELECTOR_ORIENTACION.QUEER" },
    { valor: "Asexual", descripcion: "SELECTOR_ORIENTACION.ASEXUAL" },
    { valor: "Otro", descripcion: "SELECTOR_ORIENTACION.OTRO" },
    { valor: "Prefiero no responder", descripcion: "SELECTOR_ORIENTACION.NO_RESPONDE" }
  ];
  interesesOcioSeleccionados = [];
  constructor(funcionesComunes, languageService, userService, googleService, funcionesUsuario, vehiculosServicesService, cdr, messageService, translate, navCtrl, dialog, route, router) {
    var _a, _b;
    this.funcionesComunes = funcionesComunes;
    this.languageService = languageService;
    this.userService = userService;
    this.googleService = googleService;
    this.funcionesUsuario = funcionesUsuario;
    this.vehiculosServicesService = vehiculosServicesService;
    this.cdr = cdr;
    this.messageService = messageService;
    this.translate = translate;
    this.navCtrl = navCtrl;
    this.dialog = dialog;
    this.route = route;
    this.router = router;
    this.lang = this.languageService.getLanguage() || "es";
    this.loadUserData();
    const usr = ((_a = this.userData) == null ? void 0 : _a.usuario) || (((_b = this.userData) == null ? void 0 : _b.id) ? this.userData : null);
    if (!usr) {
      console.warn("MiPerfil - No se encontr\xF3 un usuario v\xE1lido en el storage, redirigiendo al login.");
      this.navCtrl.navigateRoot("/login");
      return;
    }
    if (!this.userData.usuario && this.userData.id) {
      this.userData = { usuario: this.userData };
    }
    const usuarioValido = this.userData.usuario;
    this.fechaNacimientoEditada = this.formatearFechaInput(usuarioValido == null ? void 0 : usuarioValido.fecha_nacimiento);
    this.edad = this.funcionesUsuario.calcularEdad(this.fechaNacimientoEditada);
    this.emailEditado = (usuarioValido == null ? void 0 : usuarioValido.email) || "";
    this.telefonoEditado = (usuarioValido == null ? void 0 : usuarioValido.telefono) || "";
    this.comunComerciales = (usuarioValido == null ? void 0 : usuarioValido.comunic_comerciales) || false;
  }
  ngOnInit() {
    this.userService.usuario$.subscribe((usuario) => {
      if (usuario) {
        this.userData.usuario = usuario;
        this.nombreEditado = usuario.nombre;
        this.apellidosEditados = usuario.apellidos || "";
        this.pronombreEditado = usuario.pronombre || "";
        this.generoEditado = usuario.genero || "";
        this.orientacionEditada = usuario.orientacion || "";
        this.orientacionCtrl.valorTexto = usuario.orientacion || "";
        this.orientacionCtrl.sugerencias = [...this.listaOrientacionesOriginales];
        this.cdr.detectChanges();
        this.fechaNacimientoEditada = this.formatearFechaInput(usuario.fecha_nacimiento);
        this.bioEditada = usuario.biografia || "";
        const prefsUsuario = usuario.preferencias;
        if (prefsUsuario && typeof prefsUsuario === "object" && !Array.isArray(prefsUsuario)) {
          this.preferenciasSeleccionadas = prefsUsuario.convivencia_viaje || [];
          this.interesesOcioSeleccionados = prefsUsuario.intereses_ocio || [];
        } else {
          this.preferenciasSeleccionadas = Array.isArray(prefsUsuario) ? prefsUsuario : [];
          this.interesesOcioSeleccionados = [];
        }
        this.actualizarFotoPerfil(usuario);
        setTimeout(() => {
          this.pronombreEditado = usuario.pronombre || "";
          this.generoEditado = usuario.genero || "";
          this.orientacionEditada = usuario.orientacion || "";
          this.cdr.detectChanges();
        });
        this.userLoggedIn = !!usuario.email;
        this.translate.onLangChange.subscribe((idiomaCambiado) => {
          this.lang = idiomaCambiado.lang;
          console.log("El idioma ha cambiado a:", this.lang);
          this.detectarIdioma_traducirTexto(this.bioEditada);
          const prefsUsuario2 = usuario.preferencias;
          if (prefsUsuario2 && typeof prefsUsuario2 === "object" && !Array.isArray(prefsUsuario2)) {
            this.preferenciasSeleccionadas = prefsUsuario2.convivencia_viaje || [];
            this.interesesOcioSeleccionados = prefsUsuario2.intereses_ocio || [];
          } else {
            this.preferenciasSeleccionadas = Array.isArray(prefsUsuario2) ? prefsUsuario2 : [];
            this.interesesOcioSeleccionados = [];
          }
        });
        this.cdr.detectChanges();
        this.route.queryParams.subscribe((params) => {
          this.vengoDeViaje = params["from"] === "newTravel";
        });
      }
    });
    this.funcionesComunes.vehiculos_usuario.forEach((vehiculo) => {
      vehiculo.editandoVehiculo = false;
    });
    this.actualizarEdad();
    this.funcionesComunes.getBaseUrl();
  }
  /**
   * Función que detecta el idioma de un texto y lo traduce al idioma contrario (depende del que tenga la aplicación: es <--> en)   *
   * @param textoATraducir: es el texto a traducir
   * this.googleService.... --> llama primero a la función para detectar el idioma del texto ('detectarIdiomaTexto'), con el subscribe se queda pendiente
   * de los cambios que pueda haber para obtener un resultado.
   * if --> si el idioma de la app es diferente al atributo idioma del resultado (que será 'es' o 'en') entonces llama a la función para traducir el texto.
   * La función traducirIdiomaTexto necesita 3 parametros de entrada:
   *    - textoATraducir --> lo coge del parametro de entrada de la función.
   *    -this.lang --> el idioma en el que está la app actualmente.
   *    -resultado.idioma --> el resultado de detectarIdiomaTexto, que nos devuelve 'es' o 'en'.
   * Con el subscribe está pendiente de nuevo a los cambios, y recibo del backend un objeto que se llama resultadoTraducción, que tiene un atributo
   * que se llama texto_traducido que contiene la traducción del texto como tal y es lo que le paso a this.bioEditada.
   */
  detectarIdioma_traducirTexto(textoATraducir) {
    this.spinnerActivo = true;
    this.texto_spinner = "MIPERFIL.INFO_PERSONAL.SPINNER_TRADUCIENDO";
    this.googleService.detectarIdiomaTexto(textoATraducir).subscribe((resultado) => {
      if (this.lang !== resultado.idioma) {
        this.googleService.traducirIdiomaTexto(textoATraducir, this.lang, resultado.idioma).subscribe((resultadoTraduccion) => {
          console.log("resultadoTraduccion: ", resultadoTraduccion);
          this.bioEditada = resultadoTraduccion.texto_traducido;
          this.spinnerActivo = false;
        });
      }
    });
  }
  obtenerUsuarioPorID(id_usuario) {
    this.userService.obtenerUsuarioPorID(id_usuario).subscribe((resultadoUsuario) => {
      this.userData.usuario = resultadoUsuario;
    });
  }
  loadUserData() {
    this.userData = JSON.parse(localStorage.getItem("userData") || "{}");
  }
  // Función para verificar si ha habido cambios
  checkForChanges() {
    var _a, _b;
    if (!this.userData || !this.userData.usuario) {
      this.botonHabilitado = false;
      return;
    }
    const nombreVacio = !this.nombreEditado || this.nombreEditado.trim() === "";
    const apellidosVacios = !this.apellidosEditados || this.apellidosEditados.trim() === "";
    if (nombreVacio || apellidosVacios) {
      this.botonHabilitado = false;
      return;
    }
    const preferenciasActualesEstructuradas = {
      convivencia_viaje: this.preferenciasSeleccionadas,
      intereses_ocio: this.interesesOcioSeleccionados
    };
    const nombreChanged = this.nombreEditado !== this.userData.usuario.nombre;
    const apellidosChanged = this.apellidosEditados !== ((_a = this.userData.usuario) == null ? void 0 : _a.apellidos);
    const pronombreChanged = this.pronombreEditado !== ((_b = this.userData.usuario) == null ? void 0 : _b.pronombre);
    const generoChanged = this.generoEditado !== this.userData.usuario.genero;
    const orientacionChanged = this.orientacionEditada !== this.userData.usuario.orientacion;
    const fechaNacimientoChanged = this.fechaNacimientoEditada !== this.userData.usuario.fecha_nacimiento;
    const bioChanged = this.bioEditada !== this.userData.usuario.biografia;
    const preferenciasChanged = JSON.stringify(preferenciasActualesEstructuradas) !== JSON.stringify(this.userData.usuario.preferencias);
    this.botonHabilitado = nombreChanged || apellidosChanged || pronombreChanged || generoChanged || orientacionChanged || fechaNacimientoChanged || bioChanged || preferenciasChanged;
  }
  // Llamar a esta función cuando haya un cambio en los inputs o checkboxes
  onInputChange() {
    this.checkForChanges();
  }
  //Para detectar cambios en los checkbox de preferencias
  onCheckboxChange(clave, event) {
    const input = event.target;
    if (!input)
      return;
    const prefs = [...this.preferenciasSeleccionadas];
    if (input.checked) {
      if (!prefs.includes(clave)) {
        prefs.push(clave);
      }
    } else {
      const index = prefs.indexOf(clave);
      if (index !== -1) {
        prefs.splice(index, 1);
      }
    }
    this.preferenciasSeleccionadas = prefs;
    this.checkForChanges();
    this.cdr.detectChanges();
  }
  formatearFechaInput(fechaStr) {
    if (!fechaStr)
      return "";
    if (/^\d{4}-\d{2}-\d{2}$/.test(fechaStr)) {
      return fechaStr;
    }
    if (fechaStr.includes("T") && !fechaStr.includes(",")) {
      return fechaStr.split("T")[0];
    }
    const fecha = new Date(fechaStr);
    if (!isNaN(fecha.getTime())) {
      const year = fecha.getFullYear();
      const month = String(fecha.getMonth() + 1).padStart(2, "0");
      const day = String(fecha.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
    return "";
  }
  /**
   * Función para actualizar la edad según la fecha de nacimiento
   */
  actualizarEdad() {
    this.edad = this.funcionesUsuario.calcularEdad(this.fechaNacimientoEditada);
  }
  onOcioCheckboxChange(clave, event) {
    const input = event.target;
    if (!input)
      return;
    const intereses = [...this.interesesOcioSeleccionados];
    if (input.checked) {
      if (!intereses.includes(clave)) {
        intereses.push(clave);
      }
    } else {
      const index = intereses.indexOf(clave);
      if (index !== -1) {
        intereses.splice(index, 1);
      }
    }
    this.interesesOcioSeleccionados = intereses;
    this.checkForChanges();
    this.cdr.detectChanges();
  }
  /**
   *  Editar los datos del usuario, excepto correo y teléfono
   * @returns
   */
  editarDatos() {
    console.log("userData:", this.userData);
    if (!this.nombreEditado || this.nombreEditado.trim() === "" || !this.apellidosEditados || this.apellidosEditados.trim() === "" || !this.userData.usuario.genero || !this.userData.usuario.orientacion || !this.userData.usuario.fecha_nacimiento) {
      console.log("Falta alg\xFAn dato obligatorio");
      return;
    }
    const nuevoUsuario = {
      nombre: this.nombreEditado.trim(),
      apellidos: this.apellidosEditados.trim(),
      pronombre: this.pronombreEditado,
      genero: this.generoEditado,
      orientacion: this.orientacionEditada,
      fecha_nacimiento: this.fechaNacimientoEditada,
      biografia: this.bioEditada,
      preferencias: {
        convivencia_viaje: this.preferenciasSeleccionadas,
        intereses_ocio: this.interesesOcioSeleccionados
      },
      email: this.emailEditado,
      telefono: this.telefonoEditado
    };
    console.log("Objeto modificado: ", nuevoUsuario);
    this.userService.editarDatosUsuario(this.userData.usuario.id, nuevoUsuario).subscribe((response) => {
      console.log("Datos actualizado con exito", response);
      this.userService.actualizarEstadoUsuario(nuevoUsuario);
      this.botonHabilitado = false;
      this.translate.get(["AJUSTESAPP.CAMBIOS_GUARDADOS.TITULO", "AJUSTESAPP.CAMBIOS_GUARDADOS.SUBTITULO"]).subscribe((translations) => {
        this.messageService.add({
          severity: "success",
          summary: translations["AJUSTESAPP.CAMBIOS_GUARDADOS.TITULO"],
          detail: translations["AJUSTESAPP.CAMBIOS_GUARDADOS.SUBTITULO"],
          life: 2e3
        });
      });
    }, (error) => {
      console.error("Error al actualizar los datos", error);
    });
  }
  /**
   * Actualiza y modifica las preferencias de viaje del usuario
   * @param event
   */
  actualizarPreferencias(event) {
    const valor = event.target.value;
    if (!Array.isArray(this.preferenciasSeleccionadas)) {
      this.preferenciasSeleccionadas = [];
    }
    if (event.target.checked) {
      if (!this.preferenciasSeleccionadas.includes(valor)) {
        this.preferenciasSeleccionadas.push(valor);
      }
    } else {
      this.preferenciasSeleccionadas = this.preferenciasSeleccionadas.filter((pref) => pref !== valor);
    }
    console.log("Preferencias actualizadas:", this.preferenciasSeleccionadas);
  }
  /**
   *
   * @param event --> tipo Event es propio de HTML (la foto subida, un archivo, etc.)
   * input recibe lo que viene de la propiedad target del event que será de un tipo Input de HTML (as HTMLInputElement)
   * this.cargando = true --> activa el spinner para hacer mientras por debajo todo lo que viene después (llamada al servicio)
   * Si la propiedad files del event.target tiene contenido y en la posición [0] tiene contenido, entonces:
   * crea un objeto con el new FormData, y con el .append le añadimos 'imagenPerfil' (que tiene que coincidir con lo que espera el backend, se tiene que llamar igual) y lo que haya en el input.files[0] --> crea un key-value. Key=fotoSubida, value lo que haya en el input.files[0]
   * usuarioID --> accede al usuario y saca su id
   * Llama a la función actualizarImagenPerfil de userService y le pasa el id del usuario y el formData con los datos del input.
   * Cuando recibe la respuesta: pone el cargando (spinner) en false, lo deja de mostar, pone perfilSinfoto en false porque ya va a tener una imagen
   * y si hay respuesta y la respuesta tiene la propiedad url con datos entonces:
   * le pasa esa url a imagenPerfilUusario y llama al messageServie para que muestre el mensaje en pantalla.
   * Por ultimo this.obtenerUsuarioPorID(usuarioId) --> actualiza todos los datos del usuario cuando todo ha terminado.
   *
   *
   */
  subirFotoPerfil(event) {
    const input = event.target;
    this.cargando = true;
    if (input.files && input.files[0]) {
      const formData = new FormData();
      formData.append("imagenPerfil", input.files[0]);
      const usuarioId = this.userData.usuario.id;
      this.userService.actualizarImagenPerfil(usuarioId, formData).subscribe({
        next: (response) => {
          this.cargando = false;
          this.perfilSinFoto = false;
          if (response && response.url) {
            this.imagenPerfilUsuario = response.url;
            this.messageService.add({
              severity: "success",
              summary: "Datos guardados",
              detail: "La imagen de perfil se ha actualizado correctamente."
            });
          }
          this.obtenerUsuarioPorID(usuarioId);
        },
        error: (error) => {
          console.error("Error al actualizar la imagen del perfil:", error);
        }
      });
    }
  }
  /**
   *
   * if (!this.userData?.usuario?.id) return --> Si no existe usuario logueado o no tiene id no hace nada
   * this.cargando = true --> muestra spinner de carga mientras se elimina la foto
   * this.userService.eliminarFotoPerfil ... --> Envía una solicitud para eliminar la foto del usuario
   * next: () => { ... } --> Se ejecuta si la petición fue exitosa --> Desactiva el spinner de carga -- No actualiza imagenPerfilUsuario porque lo hará la suscripción a usuario$
   * error: (err) => { ... } --> se ejecuta si hubiese algun error en la eliminación de la foto
   */
  eliminarFotoPerfil() {
    var _a, _b;
    if (!((_b = (_a = this.userData) == null ? void 0 : _a.usuario) == null ? void 0 : _b.id))
      return;
    this.cargando = true;
    this.userService.eliminarFotoPerfil(this.userData.usuario.id).subscribe({
      next: () => {
        this.cargando = false;
        this.perfilSinFoto = true;
        this.messageService.add({
          severity: "success",
          summary: "Foto eliminada",
          detail: "La foto de perfil se ha eliminado correctamente."
        });
      },
      error: (err) => {
        this.cargando = false;
        console.error("Error al eliminar la foto de perfil:", err);
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "No se pudo eliminar la imagen del perfil."
        });
      }
    });
  }
  /**
   *
   * Recibe el objeto "usuario" actualizado
   * usuario?.fotoPerfil --> verifica si el usuario tiene alguna foto de perfil, si existe se asigna a this.imagenPerfilUsuario
   * : ../../assets/user... --> asigna la imagen de perfil genérica
   */
  actualizarFotoPerfil(usuario) {
    console.log("usuario: ", usuario);
    this.imagenPerfilUsuario = (usuario == null ? void 0 : usuario.fotoPerfil) ? usuario.fotoPerfil : "../../../assets/user/logOn.gif";
  }
  modalEliminarFotoPerfil(usuario) {
    const titulo = "\xA1ATENCI\xD3N: Vas a eliminar tu foto de perfil!";
    const mensaje = "\xBFEst\xE1s seguro que deseas eliminar tu foto de perfil?";
    const dialogRef = this.dialog.open(HelpModalComponent, {
      data: { title: titulo, message: mensaje, showAcceptButton: true },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((confirmar) => {
      if (confirmar) {
        this.eliminarFotoPerfil();
      }
    });
  }
  verPerfilPublico() {
    const usuario = { id: this.userData.usuario.id };
    this.navCtrl.navigateRoot(["/perfil-publico"], {
      queryParams: usuario
    });
  }
  eliminarVehiculo(vehiculo) {
    this.vehiculosServicesService.eliminarVehiculo(vehiculo.id, vehiculo).subscribe({
      next: () => {
        var _a, _b, _c, _d, _e;
        if ((_b = (_a = this.userData) == null ? void 0 : _a.usuario) == null ? void 0 : _b.vehiculos) {
          this.userData.usuario.vehiculos = this.userData.usuario.vehiculos.filter((coche) => coche.id !== vehiculo.id);
        }
        const usuarioId = ((_d = (_c = this.userData) == null ? void 0 : _c.usuario) == null ? void 0 : _d.id) || ((_e = this.userData) == null ? void 0 : _e.id);
        if (usuarioId) {
          this.userService.obtenerUsuarioPorID(usuarioId).subscribe((usuarioActualizado) => {
            this.userData = usuarioActualizado.usuario ? usuarioActualizado : { usuario: usuarioActualizado };
            localStorage.setItem("userData", JSON.stringify(this.userData));
            if (typeof this.userService.setUsuarioData === "function") {
              this.userService.setUsuarioData(this.userData);
            }
            this.cdr.detectChanges();
          });
        }
        const colorKey = vehiculo.color ? `TABLA_VEHICULOS.SELECTOR_COLOR.${vehiculo.color.toUpperCase()}` : "";
        const colorTraducido = colorKey ? this.translate.instant(colorKey) : vehiculo.color;
        this.messageService.add({
          severity: "success",
          summary: this.translate.instant("TABLA_VEHICULOS.ELIMINAR.CONFIRMACION_TITULO"),
          detail: this.translate.instant("TABLA_VEHICULOS.ELIMINAR.CONFIRMACION_MENSAJE", {
            marca: vehiculo.marca,
            modelo: vehiculo.modelo,
            color: colorTraducido
          })
        });
      },
      error: (err) => {
        console.error("Error al eliminar el veh\xEDculo en backend:", err);
        const colorKey = vehiculo.color ? `TABLA_VEHICULOS.SELECTOR_COLOR.${vehiculo.color.toUpperCase()}` : "";
        const colorTraducido = colorKey ? this.translate.instant(colorKey) : vehiculo.color;
        this.messageService.add({
          severity: "error",
          summary: this.translate.instant("TABLA_VEHICULOS.ELIMINAR.ERROR_AL_ELIMINAR"),
          detail: this.translate.instant("TABLA_VEHICULOS.ELIMINAR.ERROR_AL_ELIMINAR", {
            marca: vehiculo.marca,
            modelo: vehiculo.modelo,
            color: colorTraducido
          })
        });
      }
    });
  }
  modalEliminarVehiculo(cocheAEliminar) {
    const titulo = this.translate.instant("TABLA_VEHICULOS.ELIMINAR.MODAL_TITULO");
    const colorKey = cocheAEliminar.color ? `SELECTOR_COLOR.${cocheAEliminar.color.toUpperCase()}` : "";
    const colorTraducido = colorKey ? this.translate.instant(colorKey) : cocheAEliminar.color;
    const mensaje = this.translate.instant("TABLA_VEHICULOS.ELIMINAR.MODAL_PREGUNTA", {
      marca: cocheAEliminar.marca,
      modelo: (cocheAEliminar == null ? void 0 : cocheAEliminar.modelo) || cocheAEliminar.modelo,
      color: colorTraducido
    });
    const dialogRef = this.dialog.open(HelpModalComponent, {
      data: { title: titulo, message: mensaje, showAcceptButton: true },
      width: "750px",
      maxWidth: "90vw",
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((confirmar) => {
      if (confirmar) {
        this.eliminarVehiculo(cocheAEliminar);
      }
    });
  }
  /**
   * Función para obtener la lista de vehículos de un usuario.   *
   */
  obtenerVehiculos() {
    var _a;
    const userDataString = localStorage.getItem("userData");
    if (!userDataString)
      return;
    const usuario = JSON.parse(userDataString);
    if (!((_a = usuario == null ? void 0 : usuario.usuario) == null ? void 0 : _a.id))
      return;
    this.vehiculosServicesService.obtenerVehiculosUsuario(usuario.usuario.id).subscribe({
      next: (resultado) => {
        const listaVehiculos = (resultado == null ? void 0 : resultado.vehiculos) || [];
        console.log("Veh\xEDculos: ", listaVehiculos);
        this.funcionesUsuario.vehiculos_usuario = listaVehiculos;
      },
      error: (err) => {
        console.error("Error al obtener los veh\xEDculos:", err);
        this.funcionesUsuario.vehiculos_usuario = [];
      }
    });
  }
  filtrarModelosEditando(coche) {
    if (!coche.marca)
      return;
    const vehiculo = this.listadoCoches.find((c) => c.marca === coche.marca);
    this.modelosFiltrados = vehiculo.modelos;
    if (this.modelosFiltrados.length > 0 && !this.modelosFiltrados.includes(coche.modelo)) {
      this.modeloSeleccionado = this.modelosFiltrados[0];
    }
  }
  /**
   * Función para mostrar las imágenes de colores de los coches
   * según el color que se tenga seleccionado del coche.   *
   * @param color
   * @returns
   */
  mostrarColorCoche(color) {
    const blanco = "../../../assets/ColoresCoches/Blanco.png";
    const negro = "../../../assets/ColoresCoches/Negro.png";
    const rojo = "../../../assets/ColoresCoches/Rojo.png";
    const amarillo = "../../../assets/ColoresCoches/Amarillo.png";
    const verde = "../../../assets/ColoresCoches/Verde.png";
    const gris = "../../../assets/ColoresCoches/Gris.png";
    const dorado = "../../../assets/ColoresCoches/Dorado.png";
    const marron = "../../../assets/ColoresCoches/Marr\xF3n.png";
    const morado = "../../../assets/ColoresCoches/Morado.png";
    const beige = "../../../assets/ColoresCoches/Beige.png";
    const perla = "../../../assets/ColoresCoches/Perla.png";
    const otro = "../../../assets/ColoresCoches/Otros.png";
    switch (color) {
      case "blanco":
        return blanco;
      case "negro":
        return negro;
      case "rojo":
        return rojo;
      case "amarillo":
        return amarillo;
      case "verde":
        return verde;
      case "gris":
        return gris;
      case "dorado":
        return dorado;
      case "marron":
        return marron;
      case "morado":
        return morado;
      case "beige":
        return beige;
      case "perla":
        return perla;
      case "otro":
        return otro;
      default:
        return "";
    }
  }
  /**
   * Para mostrar (o no) el selector de marca, modelo y color de coche
   */
  botonAnadirVehiculo() {
    this.mostrarSelectorVehiculo = !this.mostrarSelectorVehiculo;
  }
  actualizarListaVehiculos(usuarioActualizado) {
    if (usuarioActualizado && usuarioActualizado.usuario) {
      this.userData = usuarioActualizado;
    } else if (usuarioActualizado && (usuarioActualizado.id || usuarioActualizado.vehiculos)) {
      this.userData = __spreadProps(__spreadValues({}, this.userData || {}), {
        usuario: usuarioActualizado
      });
    } else {
      this.userData = usuarioActualizado;
    }
    localStorage.setItem("userData", JSON.stringify(this.userData));
    this.mostrarSelectorVehiculo = false;
    this.cdr.detectChanges();
  }
  static \u0275fac = function MiPerfilPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MiPerfilPage)(\u0275\u0275directiveInject(FuncionesComunes), \u0275\u0275directiveInject(LanguageService), \u0275\u0275directiveInject(UserServicesService), \u0275\u0275directiveInject(GoogleServices), \u0275\u0275directiveInject(FuncionesUsuario), \u0275\u0275directiveInject(VehiculosServicesService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MiPerfilPage, selectors: [["app-mi-perfil"]], viewQuery: function MiPerfilPage_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.popover = _t.first);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 184, vars: 179, consts: [["fileInputPerfil", ""], ["nombreInput", "ngModel"], ["apellidosInput", "ngModel"], [3, "backRoute", "searchRoute", "isLoggedIn"], [3, "fullscreen"], [1, "container-fluid"], [1, "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-center", "mb-4"], ["size", "12", "size-md", "6", 1, "line"], [1, "text-center", "mb-3"], [1, "container", "text-center"], [1, "row", "align-items-center", "justify-content-center", "mb-3", "fila-foto"], [1, "col-auto"], ["type", "button", 1, "btn", "btn_bg", "boton", 3, "click", "matTooltip"], ["src", "../../../../assets/sistema/mas.png", "alt", "", "aria-hidden", "true", 1, "edit_btn"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], [1, "img_container"], ["referrerpolicy", "no-referrer", 1, "img_profile", 3, "src"], [1, "overlay"], [1, "row", "justify-content-center", "mb-4"], ["type", "button", 1, "btn", "btn_bg", "ver-perfil-btn", 3, "click", "matTooltip"], [1, "fila-datos"], [1, "col_nombre_apellidos"], [1, "mb-3"], ["for", "nombre", 1, "form-label"], ["type", "text", "id", "nombre", "name", "nombre", "required", "", 1, "form-control", "w-100", 3, "ngModelChange", "ngModel"], [1, "text-danger", "mt-1", "small"], ["for", "apellidos", 1, "form-label"], ["type", "text", "id", "apellidos", "name", "apellidos", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "fila-selectores"], [1, "col-pronombre"], ["idUnico", "pronombre", "labelKey", "MIPERFIL.INFO_PERSONAL.PRONOMBRE.LABEL", "placeholderKey", "MIPERFIL.INFO_PERSONAL.PRONOMBRE.ESCOGE_OPCION", "tooltipKey", "MIPERFIL.INFO_PERSONAL.PRONOMBRE.INFO", "popoverKey", "MIPERFIL.INFO_PERSONAL.PRONOMBRE.INFO", 3, "ngModelChange", "seleccionCambiada", "opciones", "valor", "ngModel", "soloLectura"], [1, "col-genero"], ["idUnico", "genero", "labelKey", "SELECTOR_GENERO.LABEL", "placeholderKey", "SELECTOR_GENERO.SELECCIONA", "tooltipKey", "SELECTOR_GENERO.INFO", "popoverKey", "SELECTOR_GENERO.INFO", 3, "ngModelChange", "seleccionCambiada", "opciones", "valor", "ngModel", "soloLectura"], [1, "col-orientacion", "text-center"], ["idUnico", "orientacion", "labelKey", "SELECTOR_ORIENTACION.LABEL", "placeholderKey", "SELECTOR_ORIENTACION.SELECCIONA", "tooltipKey", "SELECTOR_ORIENTACION.INFO", "popoverKey", "SELECTOR_ORIENTACION.INFO", 3, "ngModelChange", "seleccionCambiada", "valor", "opciones", "ngModel", "soloLectura"], [1, "justify-content-center"], [1, "col_fecha_edad", "justify-content-center"], ["for", "fnacimiento", 1, "form-label", "d-flex", "justify-content-center"], ["type", "date", "id", "fnacimiento", "name", "fnacimiento", "aria-describedby", "fechaNacimientoHelp", 1, "form-control", 3, "ngModelChange", "ngModel"], ["id", "fechaNacimientoHelp", 1, "visually-hidden"], [1, "mb-3", "cajon_edad"], ["for", "edad", 1, "form-label", "d-flex", "justify-content-center"], ["type", "text", "id", "edad", "readonly", "", 1, "form-control", 3, "value"], ["for", "bio", 1, "form-label"], [2, "position", "relative"], ["id", "bio", "rows", "5", "maxlength", "250", "name", "bio", "aria-describedby", "bioHelp", 1, "form-control", "bio", 3, "ngModelChange", "placeholder", "ngModel"], [3, "texto_spinner", "tamano_completo"], ["aria-live", "polite", "aria-atomic", "true", 2, "text-align", "right", "font-size", "0.8rem", "margin-top", "5px", 3, "ngStyle"], ["id", "bioHelp", 1, "visually-hidden"], ["size", "12", "size-md", "5", 1, "mx-md-5"], [1, "modal_eliminar", 3, "mostrarSelectorVehiculoChange", "eliminarVehiculo", "irARegistrarVehiculo", "vehiculoAnadidoExito", "modoSeleccion", "vehiculos", "mostrarSelectorVehiculo"], [1, "d-flex", "justify-content-center", "mt-4"], [1, "mb-2"], [1, "h4", "text-center", "mb-4"], [1, "form-label", "mb-3"], [1, "form-check"], ["type", "checkbox", "id", "pref-talk", 1, "form-check-input", 3, "change", "value", "checked"], ["for", "pref-talk", 1, "form-check-label"], ["type", "checkbox", "id", "pref-music", 1, "form-check-input", 3, "change", "value", "checked"], ["for", "pref-music", 1, "form-check-label"], ["type", "checkbox", "id", "pref-sleep", 1, "form-check-input", 3, "change", "value", "checked"], ["for", "pref-sleep", 1, "form-check-label"], ["type", "checkbox", "id", "pref-silence", 1, "form-check-input", 3, "change", "value", "checked"], ["for", "pref-silence", 1, "form-check-label"], [1, "mb-1", "mt-2"], ["type", "checkbox", "id", "pref-pets", 1, "form-check-input", 3, "change", "value", "checked"], ["for", "pref-pets", 1, "form-check-label"], ["type", "checkbox", "id", "pref-smoke", 1, "form-check-input", 3, "change", "value", "checked"], ["for", "pref-smoke", 1, "form-check-label"], [1, "form-label-text"], ["type", "checkbox", "id", "ocio-playa", 1, "form-check-input", 3, "change", "value", "checked"], ["for", "ocio-playa", 1, "form-check-label"], ["type", "checkbox", "id", "ocio-festivo", 1, "form-check-input", 3, "change", "value", "checked"], ["for", "ocio-festivo", 1, "form-check-label"], ["type", "checkbox", "id", "ocio-cultura", 1, "form-check-input", 3, "change", "value", "checked"], ["for", "ocio-cultura", 1, "form-check-label"], ["type", "checkbox", "id", "ocio-rural", 1, "form-check-input", 3, "change", "value", "checked"], ["for", "ocio-rural", 1, "form-check-label"], [1, "mb-1", "mt-3"], [1, "d-flex", "justify-content-center", "ms-1", "mt-5", "mb-3"], ["position", "bottom-center"], ["type", "button", "mat-raised-button", "", 1, "btn", "btn_bg", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn_bg", "boton", "btn_delete", 3, "click", "matTooltip"], ["src", "../../../../assets/sistema/cruz.png", "alt", "", "aria-hidden", "true", 1, "edit_btn"]], template: function MiPerfilPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "app-navbar", 3);
      \u0275\u0275elementStart(1, "ion-content", 4)(2, "div", 5)(3, "div", 6)(4, "h1");
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "p", 7);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "ion-row", 6)(11, "ion-col", 8)(12, "h4", 9);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 10)(16, "div", 11)(17, "div", 12)(18, "button", 13);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275listener("click", function MiPerfilPage_Template_button_click_18_listener() {
        \u0275\u0275restoreView(_r1);
        const fileInputPerfil_r2 = \u0275\u0275reference(23);
        return \u0275\u0275resetView(fileInputPerfil_r2.click());
      });
      \u0275\u0275element(21, "img", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "input", 15, 0);
      \u0275\u0275listener("change", function MiPerfilPage_Template_input_change_22_listener($event) {
        return ctx.subirFotoPerfil($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 12)(25, "div", 16);
      \u0275\u0275element(26, "img", 17);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275conditionalCreate(28, MiPerfilPage_Conditional_28_Template, 2, 0, "div", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(29, MiPerfilPage_Conditional_29_Template, 5, 6, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 19)(31, "div", 12)(32, "button", 20);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275listener("click", function MiPerfilPage_Template_button_click_32_listener() {
        return ctx.verPerfilPublico();
      });
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "ion-row", 21)(37, "ion-col", 22)(38, "div", 23)(39, "label", 24);
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "input", 25, 1);
      \u0275\u0275twoWayListener("ngModelChange", function MiPerfilPage_Template_input_ngModelChange_42_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.nombreEditado, $event) || (ctx.nombreEditado = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function MiPerfilPage_Template_input_ngModelChange_42_listener() {
        return ctx.onInputChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(44, MiPerfilPage_Conditional_44_Template, 3, 3, "div", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 23)(46, "label", 27);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "input", 28, 2);
      \u0275\u0275twoWayListener("ngModelChange", function MiPerfilPage_Template_input_ngModelChange_49_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.apellidosEditados, $event) || (ctx.apellidosEditados = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function MiPerfilPage_Template_input_ngModelChange_49_listener() {
        return ctx.onInputChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(51, MiPerfilPage_Conditional_51_Template, 3, 3, "div", 26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "ion-row", 29)(53, "ion-col", 30)(54, "app-selector-general", 31);
      \u0275\u0275twoWayListener("ngModelChange", function MiPerfilPage_Template_app_selector_general_ngModelChange_54_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.pronombreEditado, $event) || (ctx.pronombreEditado = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("seleccionCambiada", function MiPerfilPage_Template_app_selector_general_seleccionCambiada_54_listener() {
        return ctx.onInputChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "ion-col", 32)(56, "app-selector-general", 33);
      \u0275\u0275twoWayListener("ngModelChange", function MiPerfilPage_Template_app_selector_general_ngModelChange_56_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.generoEditado, $event) || (ctx.generoEditado = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("seleccionCambiada", function MiPerfilPage_Template_app_selector_general_seleccionCambiada_56_listener() {
        return ctx.onInputChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "ion-col", 34)(58, "app-selector-general", 35);
      \u0275\u0275twoWayListener("ngModelChange", function MiPerfilPage_Template_app_selector_general_ngModelChange_58_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.orientacionEditada, $event) || (ctx.orientacionEditada = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("seleccionCambiada", function MiPerfilPage_Template_app_selector_general_seleccionCambiada_58_listener() {
        return ctx.onInputChange();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "ion-row")(60, "ion-col")(61, "ion-row", 36)(62, "ion-col", 37)(63, "div", 23)(64, "label", 38);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "input", 39);
      \u0275\u0275twoWayListener("ngModelChange", function MiPerfilPage_Template_input_ngModelChange_67_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.fechaNacimientoEditada, $event) || (ctx.fechaNacimientoEditada = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function MiPerfilPage_Template_input_ngModelChange_67_listener() {
        return ctx.actualizarEdad();
      })("ngModelChange", function MiPerfilPage_Template_input_ngModelChange_67_listener() {
        return ctx.onInputChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "small", 40);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 41)(72, "label", 42);
      \u0275\u0275text(73);
      \u0275\u0275pipe(74, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(75, "input", 43);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "div", 23)(77, "label", 44);
      \u0275\u0275text(78);
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 45)(81, "textarea", 46);
      \u0275\u0275pipe(82, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function MiPerfilPage_Template_textarea_ngModelChange_81_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.bioEditada, $event) || (ctx.bioEditada = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function MiPerfilPage_Template_textarea_ngModelChange_81_listener() {
        return ctx.onInputChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(83, MiPerfilPage_Conditional_83_Template, 2, 4, "app-spinner", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 48);
      \u0275\u0275text(85);
      \u0275\u0275pipe(86, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "span", 49);
      \u0275\u0275text(88);
      \u0275\u0275pipe(89, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(90, "ion-col", 50)(91, "app-tabla-vehiculos", 51);
      \u0275\u0275twoWayListener("mostrarSelectorVehiculoChange", function MiPerfilPage_Template_app_tabla_vehiculos_mostrarSelectorVehiculoChange_91_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.mostrarSelectorVehiculo, $event) || (ctx.mostrarSelectorVehiculo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("eliminarVehiculo", function MiPerfilPage_Template_app_tabla_vehiculos_eliminarVehiculo_91_listener($event) {
        return ctx.modalEliminarVehiculo($event);
      })("irARegistrarVehiculo", function MiPerfilPage_Template_app_tabla_vehiculos_irARegistrarVehiculo_91_listener() {
        return ctx.botonAnadirVehiculo();
      })("vehiculoAnadidoExito", function MiPerfilPage_Template_app_tabla_vehiculos_vehiculoAnadidoExito_91_listener($event) {
        return ctx.actualizarListaVehiculos($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "ion-row", 52)(93, "fieldset", 53)(94, "legend", 54);
      \u0275\u0275text(95);
      \u0275\u0275pipe(96, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "div", 55)(98, "p")(99, "strong");
      \u0275\u0275text(100);
      \u0275\u0275pipe(101, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(102, "div", 56)(103, "input", 57);
      \u0275\u0275pipe(104, "translate");
      \u0275\u0275listener("change", function MiPerfilPage_Template_input_change_103_listener($event) {
        return ctx.onCheckboxChange("talk", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "label", 58);
      \u0275\u0275text(106);
      \u0275\u0275pipe(107, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "div", 56)(109, "input", 59);
      \u0275\u0275pipe(110, "translate");
      \u0275\u0275listener("change", function MiPerfilPage_Template_input_change_109_listener($event) {
        return ctx.onCheckboxChange("music", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "label", 60);
      \u0275\u0275text(112);
      \u0275\u0275pipe(113, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "div", 56)(115, "input", 61);
      \u0275\u0275pipe(116, "translate");
      \u0275\u0275listener("change", function MiPerfilPage_Template_input_change_115_listener($event) {
        return ctx.onCheckboxChange("sleep", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "label", 62);
      \u0275\u0275text(118);
      \u0275\u0275pipe(119, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "div", 56)(121, "input", 63);
      \u0275\u0275pipe(122, "translate");
      \u0275\u0275listener("change", function MiPerfilPage_Template_input_change_121_listener($event) {
        return ctx.onCheckboxChange("Silencio", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "label", 64);
      \u0275\u0275text(124);
      \u0275\u0275pipe(125, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(126, "mat-divider", 65);
      \u0275\u0275elementStart(127, "label", 53)(128, "strong");
      \u0275\u0275text(129);
      \u0275\u0275pipe(130, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "div", 56)(132, "input", 66);
      \u0275\u0275pipe(133, "translate");
      \u0275\u0275listener("change", function MiPerfilPage_Template_input_change_132_listener($event) {
        return ctx.onCheckboxChange("Mascotas", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "label", 67);
      \u0275\u0275text(135);
      \u0275\u0275pipe(136, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "div", 56)(138, "input", 68);
      \u0275\u0275pipe(139, "translate");
      \u0275\u0275listener("change", function MiPerfilPage_Template_input_change_138_listener($event) {
        return ctx.onCheckboxChange("Fumar", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "label", 69);
      \u0275\u0275text(141);
      \u0275\u0275pipe(142, "translate");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(143, "ion-row", 52)(144, "fieldset", 53)(145, "legend", 54);
      \u0275\u0275text(146);
      \u0275\u0275pipe(147, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "div", 55)(149, "span", 70);
      \u0275\u0275text(150);
      \u0275\u0275pipe(151, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "div", 56)(153, "input", 71);
      \u0275\u0275pipe(154, "translate");
      \u0275\u0275listener("change", function MiPerfilPage_Template_input_change_153_listener($event) {
        return ctx.onOcioCheckboxChange("playa", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "label", 72);
      \u0275\u0275text(156);
      \u0275\u0275pipe(157, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(158, "div", 56)(159, "input", 73);
      \u0275\u0275pipe(160, "translate");
      \u0275\u0275listener("change", function MiPerfilPage_Template_input_change_159_listener($event) {
        return ctx.onOcioCheckboxChange("ambiente festivo", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "label", 74);
      \u0275\u0275text(162);
      \u0275\u0275pipe(163, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(164, "div", 56)(165, "input", 75);
      \u0275\u0275pipe(166, "translate");
      \u0275\u0275listener("change", function MiPerfilPage_Template_input_change_165_listener($event) {
        return ctx.onOcioCheckboxChange("cultura", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "label", 76);
      \u0275\u0275text(168);
      \u0275\u0275pipe(169, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(170, "div", 56)(171, "input", 77);
      \u0275\u0275pipe(172, "translate");
      \u0275\u0275listener("change", function MiPerfilPage_Template_input_change_171_listener($event) {
        return ctx.onOcioCheckboxChange("turismo rural", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "label", 78);
      \u0275\u0275text(174);
      \u0275\u0275pipe(175, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(176, "mat-divider", 79);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "ion-row", 80)(178, "div");
      \u0275\u0275element(179, "p-toast", 81);
      \u0275\u0275elementStart(180, "button", 82);
      \u0275\u0275pipe(181, "translate");
      \u0275\u0275listener("click", function MiPerfilPage_Template_button_click_180_listener() {
        return ctx.editarDatos();
      });
      \u0275\u0275text(182);
      \u0275\u0275pipe(183, "translate");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      const nombreInput_r5 = \u0275\u0275reference(43);
      const apellidosInput_r6 = \u0275\u0275reference(50);
      \u0275\u0275property("backRoute", "/home")("searchRoute", "search")("isLoggedIn", ctx.userLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("fullscreen", true);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 89, "MIPERFIL.TITULO"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 91, "MIPERFIL.DESCRIPCION"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 93, "MIPERFIL.INFO_PERSONAL.TITULO"));
      \u0275\u0275advance(5);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(19, 95, "BOTONES.MIPERFIL.ANADIR_FOTO_PERFIL_MATTOOLTIP"));
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(20, 97, "BOTONES.MIPERFIL.ANADIR_FOTO_PERFIL_ARIALABEL"));
      \u0275\u0275advance(8);
      \u0275\u0275property("src", ctx.imagenPerfilUsuario, \u0275\u0275sanitizeUrl);
      \u0275\u0275attribute("alt", \u0275\u0275pipeBind1(27, 99, "MIPERFIL.INFO_PERSONAL.ALT_IMG_PERFIL"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.cargando ? 28 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.perfilSinFoto ? 29 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", \u0275\u0275interpolate(\u0275\u0275pipeBind1(33, 101, "BOTONES.MIPERFIL.ASI_ME_VEN_LOS_DEMAS")));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 103, "BOTONES.MIPERFIL.ASI_ME_VEN_LOS_DEMAS"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 105, "MIPERFIL.INFO_PERSONAL.LABEL_NOMBRE"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.nombreEditado);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(nombreInput_r5.invalid && (nombreInput_r5.dirty || nombreInput_r5.touched) ? 44 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 107, "MIPERFIL.INFO_PERSONAL.LABEL_APELLIDOS"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.apellidosEditados);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(apellidosInput_r6.invalid && (apellidosInput_r6.dirty || apellidosInput_r6.touched) ? 51 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("opciones", ctx.listaPronombresOriginales)("valor", ctx.pronombreEditado);
      \u0275\u0275twoWayProperty("ngModel", ctx.pronombreEditado);
      \u0275\u0275property("soloLectura", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("opciones", ctx.listaGenerosOriginales)("valor", ctx.generoEditado);
      \u0275\u0275twoWayProperty("ngModel", ctx.generoEditado);
      \u0275\u0275property("soloLectura", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("valor", ctx.orientacionEditada)("opciones", ctx.listaOrientacionesOriginales);
      \u0275\u0275twoWayProperty("ngModel", ctx.orientacionEditada);
      \u0275\u0275property("soloLectura", true);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(66, 109, "MIPERFIL.INFO_PERSONAL.LABEL_FECHANACIMIENTO"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.fechaNacimientoEditada);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(70, 111, "MIPERFIL.FECHA_NACIMIENTO_AYUDA"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(74, 113, "MIPERFIL.INFO_PERSONAL.LABEL_EDAD"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.edad);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(79, 115, "MIPERFIL.INFO_PERSONAL.LABEL_SOBRETI"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(82, 117, "MIPERFIL.INFO_PERSONAL.PLACEHOLDER_SOBRETI")));
      \u0275\u0275twoWayProperty("ngModel", ctx.bioEditada);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.spinnerActivo ? 83 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(177, _c1, (ctx.bioEditada.length || 0) >= 200 ? "red" : "gray"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate2(" ", ctx.bioEditada.length || 0, " / 250 ", \u0275\u0275pipeBind1(86, 119, "MIPERFIL.INFO_PERSONAL.CARACTERES"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(89, 121, "MIPERFIL.INFO_PERSONAL.AYUDA_SOBRETI"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("modoSeleccion", false)("vehiculos", (ctx.userData == null ? null : ctx.userData.usuario == null ? null : ctx.userData.usuario.vehiculos) || (ctx.userData == null ? null : ctx.userData.vehiculos));
      \u0275\u0275twoWayProperty("mostrarSelectorVehiculo", ctx.mostrarSelectorVehiculo);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(96, 123, "MIPERFIL.PREF_VIAJE.LABEL"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(101, 125, "MIPERFIL.PREF_VIAJE.SUBTITULO"));
      \u0275\u0275advance(3);
      \u0275\u0275property("value", \u0275\u0275pipeBind1(104, 127, "MIPERFIL.PREF_VIAJE.OPC_HABLAR"))("checked", ctx.preferenciasSeleccionadas.includes("talk"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(107, 129, "MIPERFIL.PREF_VIAJE.OPC_HABLAR"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("value", \u0275\u0275pipeBind1(110, 131, "MIPERFIL.PREF_VIAJE.OPC_MUSICA"))("checked", ctx.preferenciasSeleccionadas.includes("music"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(113, 133, "MIPERFIL.PREF_VIAJE.OPC_MUSICA"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("value", \u0275\u0275pipeBind1(116, 135, "MIPERFIL.PREF_VIAJE.OPC_DORMIR"))("checked", ctx.preferenciasSeleccionadas.includes("sleep"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(119, 137, "MIPERFIL.PREF_VIAJE.OPC_DORMIR"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("value", \u0275\u0275pipeBind1(122, 139, "MIPERFIL.PREF_VIAJE.OPC_SILENCIO"))("checked", ctx.preferenciasSeleccionadas.includes("Silencio"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(125, 141, "MIPERFIL.PREF_VIAJE.OPC_SILENCIO"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(130, 143, "MIPERFIL.PREF_VIAJE.LABEL_OTRAS"));
      \u0275\u0275advance(3);
      \u0275\u0275property("value", \u0275\u0275pipeBind1(133, 145, "MIPERFIL.PREF_VIAJE.MASCOTAS"))("checked", ctx.preferenciasSeleccionadas.includes("Mascotas"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(136, 147, "MIPERFIL.PREF_VIAJE.MASCOTAS"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("value", \u0275\u0275pipeBind1(139, 149, "MIPERFIL.PREF_VIAJE.FUMAR"))("checked", ctx.preferenciasSeleccionadas.includes("Fumar"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(142, 151, "MIPERFIL.PREF_VIAJE.FUMAR"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(147, 153, "MIPERFIL.PREF_IA.LABEL"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(151, 155, "MIPERFIL.PREF_IA.SUBTITULO"));
      \u0275\u0275advance(3);
      \u0275\u0275property("value", \u0275\u0275pipeBind1(154, 157, "MIPERFIL.PREF_IA.PLAYA"))("checked", ctx.interesesOcioSeleccionados.includes("playa"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(157, 159, "MIPERFIL.PREF_IA.PLAYA"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("value", \u0275\u0275pipeBind1(160, 161, "MIPERFIL.PREF_IA.OCIO_NOCTURNO"))("checked", ctx.interesesOcioSeleccionados.includes("ambiente festivo"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(163, 163, "MIPERFIL.PREF_IA.OCIO_NOCTURNO"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("value", \u0275\u0275pipeBind1(166, 165, "MIPERFIL.PREF_IA.CULTURA"))("checked", ctx.interesesOcioSeleccionados.includes("cultura"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(169, 167, "MIPERFIL.PREF_IA.CULTURA"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("value", \u0275\u0275pipeBind1(172, 169, "MIPERFIL.PREF_IA.RURAL"))("checked", ctx.interesesOcioSeleccionados.includes("turismo rural"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(175, 171, "MIPERFIL.PREF_IA.RURAL"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", !ctx.botonHabilitado);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(181, 173, "BOTONES.MIPERFIL.GUARDAR"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(183, 175, "BOTON.GUARDAR"), " ");
    }
  }, dependencies: [
    IonicModule,
    IonCol,
    IonContent,
    IonRow,
    CommonModule,
    NgStyle,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    RequiredValidator,
    MaxLengthValidator,
    NgModel,
    TranslateModule,
    MatDivider,
    NavbarComponent,
    TablaVehiculosComponent,
    ToastModule,
    Toast,
    MatTooltipModule,
    MatTooltip,
    SpinnerComponent,
    SelectorGeneralComponent,
    TranslatePipe
  ], styles: ['@charset "UTF-8";\n\n\n.fila-foto[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 2rem;\n  width: 100%;\n  flex-wrap: nowrap;\n  text-align: center;\n  position: relative;\n  margin: 0 auto;\n}\n.position-relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n.modal_eliminar[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.lista_sugerencias[_ngcontent-%COMP%] {\n  max-height: 220px;\n  overflow-y: auto;\n  margin-top: 2px;\n}\n.lista_sugerencias[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.lista_sugerencias[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover, \n.lista_sugerencias[_ngcontent-%COMP%]   .list-group-item.active[_ngcontent-%COMP%] {\n  background-color: #F0D7B4 !important;\n  color: black !important;\n}\n  app-selector-general input, \n  app-selector-general select {\n  border: none !important;\n  box-shadow: none !important;\n  outline: none !important;\n}\n#input-pronombre[_ngcontent-%COMP%]::placeholder {\n  font-size: 0.99rem;\n  opacity: 0.7;\n}\n.flecha_selector[_ngcontent-%COMP%] {\n  right: 15px;\n  top: 67%;\n  transform: translateY(-50%);\n  pointer-events: none;\n}\n.fila-foto[_ngcontent-%COMP%]    > .col-auto[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.img_container[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.line[_ngcontent-%COMP%] {\n  border-right: none !important;\n  border-bottom: none;\n}\n.img_profile[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n  border: 2px solid #ccc;\n}\n.boton[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.btn_delete[_ngcontent-%COMP%] {\n  background-color: #e0b6b6 !important;\n}\n.btn_delete[_ngcontent-%COMP%]:hover {\n  background-color: #f0d7b4 !important;\n}\n.ver-perfil-btn[_ngcontent-%COMP%] {\n  width: auto;\n  min-width: 250px;\n  white-space: nowrap;\n  font-weight: 500;\n  background-color: #a758e8;\n  color: white;\n  border-radius: 25px;\n  padding: 8px 16px;\n  transition: background-color 0.3s;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.ver-perfil-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e0a667;\n}\n.btn_bg[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.container-fluid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.container-fluid[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.bio[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.fila-datos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 10px;\n  width: 100%;\n}\n.col_nombre_apellidos[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 2;\n  gap: 10px;\n  justify-content: center;\n}\n.col_fecha_edad[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 100%;\n  max-width: 500px;\n  gap: 20px;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n}\n.col_fecha_edad[_ngcontent-%COMP%]   .mb-3[_ngcontent-%COMP%]:not(.cajon_edad) {\n  flex: 1.5;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.col_fecha_edad[_ngcontent-%COMP%]   .mb-3[_ngcontent-%COMP%]:not(.cajon_edad)   input[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 150px;\n  text-align: center;\n}\n.col_fecha_edad[_ngcontent-%COMP%]   .cajon_edad[_ngcontent-%COMP%] {\n  flex: 0.8;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.col_fecha_edad[_ngcontent-%COMP%]   .cajon_edad[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 80px;\n  text-align: center;\n}\n.fila-datos[_ngcontent-%COMP%]   .col-nombre-apellidos[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%], \n.fila-datos[_ngcontent-%COMP%]   .col-pronombre[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.contenedor_tabla[_ngcontent-%COMP%] {\n  width: 400px;\n}\n@media (max-width: 576px) {\n  .fila-foto[_ngcontent-%COMP%] {\n    gap: 1rem;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: nowrap;\n  }\n  .img_container[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n    border-radius: 50%;\n    overflow: hidden;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n    margin: 0 auto;\n  }\n  .img_profile[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n    object-fit: cover;\n    border-radius: 50%;\n    border: 2px solid #ccc;\n  }\n  .boton[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n  .ver-perfil-btn[_ngcontent-%COMP%] {\n    width: 210px;\n    font-weight: 100;\n    font-size: 14px;\n    background-color: #a758e8;\n    color: white;\n    border-radius: 25px;\n    padding: 8px 16px;\n    transition: background-color 0.3s;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  }\n  .fila-selectores[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n  }\n  .fila-selectores[_ngcontent-%COMP%]   .col-pronombre[_ngcontent-%COMP%], \n   .fila-selectores[_ngcontent-%COMP%]   .col-genero[_ngcontent-%COMP%] {\n    flex: 0 0 50%;\n    max-width: 100%;\n  }\n  .col-orientacion[_ngcontent-%COMP%] {\n    flex: 0 0 70%;\n    max-width: 70%;\n    margin: 10px auto 0 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .col-orientacion[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n    text-align: center;\n  }\n  .fila-selectores[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    width: 100% !important;\n    font-size: 0.8rem !important;\n  }\n  .line[_ngcontent-%COMP%] {\n    border-right: none !important;\n    border-bottom: none !important;\n    padding-bottom: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  .input_edad[_ngcontent-%COMP%] {\n    width: 60px;\n  }\n  .custom-responsive-modal[_ngcontent-%COMP%] {\n    width: 800px;\n    max-width: 800px;\n  }\n}\n@media (max-width: 992px) {\n  .line[_ngcontent-%COMP%] {\n    border-right: 2px dashed rgba(224, 166, 103, 0.4) !important;\n  }\n  .col-orientacion[_ngcontent-%COMP%]   .flecha_selector[_ngcontent-%COMP%] {\n    top: 76%;\n    transform: translateY(-50%);\n  }\n}\n@media (max-width: 767px) {\n    .custom-responsive-modal .mat-mdc-dialog-container, \n     .custom-responsive-modal .mat-dialog-container {\n    max-width: 92vw !important;\n    width: 92vw !important;\n    margin: 0 auto !important;\n  }\n}\n@media (min-width: 768px) {\n    .custom-responsive-modal .mat-mdc-dialog-container, \n     .custom-responsive-modal .mat-dialog-container {\n    max-width: 500px !important;\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=mi-perfil.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MiPerfilPage, [{
    type: Component,
    args: [{ selector: "app-mi-perfil", standalone: true, imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      TranslateModule,
      MatDivider,
      NavbarComponent,
      TablaVehiculosComponent,
      ToastModule,
      MatTooltipModule,
      SpinnerComponent,
      MatDivider,
      SelectorGeneralComponent
    ], providers: [MessageService], template: `<app-navbar
  [backRoute]="'/home'"
  [searchRoute]="'search'"
  [isLoggedIn]="userLoggedIn"
></app-navbar>

<ion-content [fullscreen]="true">
  <div class="container-fluid">
    <div class="d-flex justify-content-center">
      <h1>{{'MIPERFIL.TITULO' | translate}}</h1>
    </div>
    <p class="d-flex justify-content-center mb-4">{{'MIPERFIL.DESCRIPCION' | translate}}</p>

    <!-- Modificaci\xF3n de datos personales -->
    <ion-row class="d-flex justify-content-center">
      <ion-col
        class="line"
        size="12"
        size-md="6"
      >
        <h4 class="text-center mb-3">{{'MIPERFIL.INFO_PERSONAL.TITULO' | translate}}</h4>
        <div class="container text-center">
          <!-- === Fila 1: botones + imagen centrada === -->
          <div class="row align-items-center justify-content-center mb-3 fila-foto">
            <!-- Bot\xF3n agregar foto -->
            <div class="col-auto">
              <button
                type="button"
                class="btn btn_bg boton"
                [matTooltip]="'BOTONES.MIPERFIL.ANADIR_FOTO_PERFIL_MATTOOLTIP' | translate"
                [attr.aria-label]="'BOTONES.MIPERFIL.ANADIR_FOTO_PERFIL_ARIALABEL' | translate"
                (click)="fileInputPerfil.click()"
              >
                <img
                  class="edit_btn"
                  src="../../../../assets/sistema/mas.png"
                  alt=""
                  aria-hidden="true"
                />
              </button>
              <input
                type="file"
                #fileInputPerfil
                accept="image/*"
                (change)="subirFotoPerfil($event)"
                style="display: none"
              />
            </div>
            <!-- Imagen centrada -->
            <div class="col-auto">
              <div class="img_container">
                <img
                  class="img_profile"
                  [src]="imagenPerfilUsuario"
                  referrerpolicy="no-referrer"
                  [attr.alt]="'MIPERFIL.INFO_PERSONAL.ALT_IMG_PERFIL' | translate"
                />
                @if (cargando) {
                <div class="overlay">
                  <app-spinner></app-spinner>
                </div>
                }
              </div>
            </div>
            <!-- Bot\xF3n eliminar foto -->
            @if (!perfilSinFoto) {
            <div class="col-auto">
              <button
                type="button"
                class="btn btn_bg boton btn_delete"
                [matTooltip]="'BOTONES.MIPERFIL.ELIMINAR_FOTO_PERFIL_MATTOOLTIP' | translate"
                [attr.aria-label]="'BOTONES.MIPERFIL.ELIMINAR_FOTO_PERFIL_ARIALABEL' | translate"
                (click)="modalEliminarFotoPerfil(userData.usuario)"
              >
                <img
                  class="edit_btn"
                  src="../../../../assets/sistema/cruz.png"
                  alt=""
                  aria-hidden="true"
                />
              </button>
            </div>
            }
          </div>

          <!-- === Fila 2: bot\xF3n "As\xED me ven los dem\xE1s" === -->
          <div class="row justify-content-center mb-4">
            <div class="col-auto">
              <button
                type="button"
                class="btn btn_bg ver-perfil-btn"
                matTooltip="{{ 'BOTONES.MIPERFIL.ASI_ME_VEN_LOS_DEMAS' | translate }}"
                (click)="verPerfilPublico()"
              >
                {{'BOTONES.MIPERFIL.ASI_ME_VEN_LOS_DEMAS' | translate}}
              </button>
            </div>
          </div>
        </div>

        <ion-row class="fila-datos">
          <ion-col class="col_nombre_apellidos">
            <div class="mb-3">
              <label
                for="nombre"
                class="form-label"
              >
                {{'MIPERFIL.INFO_PERSONAL.LABEL_NOMBRE' | translate}}
              </label>
              <input
                type="text"
                class="form-control w-100"
                id="nombre"
                [(ngModel)]="nombreEditado"
                name="nombre"
                #nombreInput="ngModel"
                required
                (ngModelChange)="onInputChange()"
              />
              @if (nombreInput.invalid && (nombreInput.dirty || nombreInput.touched)) {
              <div class="text-danger mt-1 small">{{'MIPERFIL.INFO_PERSONAL.NOMBRE_OBLIGATORIO' | translate}}</div>
              }
            </div>
            <div class="mb-3">
              <label
                for="apellidos"
                class="form-label"
              >
                {{'MIPERFIL.INFO_PERSONAL.LABEL_APELLIDOS' | translate}}
              </label>
              <input
                type="text"
                class="form-control"
                id="apellidos"
                [(ngModel)]="apellidosEditados"
                name="apellidos"
                #apellidosInput="ngModel"
                required
                (ngModelChange)="onInputChange()"
              />
              @if (apellidosInput.invalid && (apellidosInput.dirty || apellidosInput.touched)) {
              <div class="text-danger mt-1 small">{{'MIPERFIL.INFO_PERSONAL.APELLIDOS_OBLIGATORIO' | translate}}</div>
              }
            </div>
          </ion-col>
        </ion-row>

        <ion-row class="fila-selectores">
          <!-- 1. Pronombre -->
          <ion-col class="col-pronombre">
            <app-selector-general
              idUnico="pronombre"
              labelKey="MIPERFIL.INFO_PERSONAL.PRONOMBRE.LABEL"
              placeholderKey="MIPERFIL.INFO_PERSONAL.PRONOMBRE.ESCOGE_OPCION"
              tooltipKey="MIPERFIL.INFO_PERSONAL.PRONOMBRE.INFO"
              popoverKey="MIPERFIL.INFO_PERSONAL.PRONOMBRE.INFO"
              [opciones]="listaPronombresOriginales"
              [valor]="pronombreEditado"
              [(ngModel)]="pronombreEditado"
              (seleccionCambiada)="onInputChange()"
              [soloLectura]="true"
            ></app-selector-general>
          </ion-col>

          <!-- 2. G\xE9nero -->
          <ion-col class="col-genero">
            <app-selector-general
              idUnico="genero"
              labelKey="SELECTOR_GENERO.LABEL"
              placeholderKey="SELECTOR_GENERO.SELECCIONA"
              tooltipKey="SELECTOR_GENERO.INFO"
              popoverKey="SELECTOR_GENERO.INFO"
              [opciones]="listaGenerosOriginales"
              [valor]="generoEditado"
              [(ngModel)]="generoEditado"
              (seleccionCambiada)="onInputChange()"
              [soloLectura]="true"
            ></app-selector-general>
          </ion-col>

          <!-- 3. Orientaci\xF3n -->
          <ion-col class="col-orientacion text-center">
            <app-selector-general
              idUnico="orientacion"
              labelKey="SELECTOR_ORIENTACION.LABEL"
              placeholderKey="SELECTOR_ORIENTACION.SELECCIONA"
              tooltipKey="SELECTOR_ORIENTACION.INFO"
              popoverKey="SELECTOR_ORIENTACION.INFO"
              [valor]="orientacionEditada"
              [opciones]="listaOrientacionesOriginales"
              [(ngModel)]="orientacionEditada"
              (seleccionCambiada)="onInputChange()"
              [soloLectura]="true"
            ></app-selector-general>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <!-- Fecha de nacimiento -->
            <ion-row class="justify-content-center">
              <ion-col class="col_fecha_edad justify-content-center">
                <div class="mb-3">
                  <label
                    for="fnacimiento"
                    class="form-label d-flex justify-content-center"
                  >
                    {{'MIPERFIL.INFO_PERSONAL.LABEL_FECHANACIMIENTO' | translate}}
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    id="fnacimiento"
                    [(ngModel)]="fechaNacimientoEditada"
                    name="fnacimiento"
                    (ngModelChange)="actualizarEdad()"
                    (ngModelChange)="onInputChange()"
                    aria-describedby="fechaNacimientoHelp"
                  />
                  <small
                    id="fechaNacimientoHelp"
                    class="visually-hidden"
                  >
                    {{ 'MIPERFIL.FECHA_NACIMIENTO_AYUDA' | translate }}
                  </small>
                </div>
                <div class="mb-3 cajon_edad">
                  <label
                    for="edad"
                    class="form-label d-flex justify-content-center"
                  >
                    {{ 'MIPERFIL.INFO_PERSONAL.LABEL_EDAD' | translate }}
                  </label>

                  <input
                    type="text"
                    id="edad"
                    class="form-control"
                    [value]="edad"
                    readonly
                  />
                </div>
              </ion-col>
            </ion-row>

            <!-- Sobre t\xED -->
            <div class="mb-3">
              <label
                for="bio"
                class="form-label"
              >
                {{'MIPERFIL.INFO_PERSONAL.LABEL_SOBRETI' | translate}}
              </label>
              <div style="position: relative">
                <textarea
                  class="form-control bio"
                  id="bio"
                  rows="5"
                  maxlength="250"
                  placeholder="{{'MIPERFIL.INFO_PERSONAL.PLACEHOLDER_SOBRETI' | translate}}"
                  [(ngModel)]="bioEditada"
                  name="bio"
                  aria-describedby="bioHelp"
                  (ngModelChange)="onInputChange()"
                ></textarea>
                @if (spinnerActivo) {
                <app-spinner
                  [texto_spinner]="texto_spinner | translate"
                  [tamano_completo]="false"
                ></app-spinner>
                }
              </div>

              <div
                [ngStyle]="{'color': (bioEditada.length || 0) >= 200 ? 'red' : 'gray'}"
                style="text-align: right; font-size: 0.8rem; margin-top: 5px"
                aria-live="polite"
                aria-atomic="true"
              >
                {{ bioEditada.length || 0 }} / 250 {{ 'MIPERFIL.INFO_PERSONAL.CARACTERES' | translate }}
              </div>

              <span
                id="bioHelp"
                class="visually-hidden"
              >
                {{ 'MIPERFIL.INFO_PERSONAL.AYUDA_SOBRETI' | translate }}
              </span>
            </div>
          </ion-col>
        </ion-row>
      </ion-col>

      <!-- Columna: Tabla vech\xEDculos y preferencias de viaje -->
      <ion-col
        size="12"
        size-md="5"
        class="mx-md-5"
      >
        <!-- Tabla vehiculos -->
        <app-tabla-vehiculos
          [modoSeleccion]="false"
          [vehiculos]="userData?.usuario?.vehiculos || userData?.vehiculos"
          [(mostrarSelectorVehiculo)]="mostrarSelectorVehiculo"
          (eliminarVehiculo)="modalEliminarVehiculo($event)"
          (irARegistrarVehiculo)="botonAnadirVehiculo()"
          (vehiculoAnadidoExito)="actualizarListaVehiculos($event)"
          class="modal_eliminar"
        ></app-tabla-vehiculos>

        <!-- Preferencias -->
        <ion-row class="d-flex justify-content-center mt-4">
          <fieldset class="mb-2">
            <legend class="h4 text-center mb-4">{{ 'MIPERFIL.PREF_VIAJE.LABEL' | translate }}</legend>

            <div class="form-label mb-3">
              <p><strong>{{ 'MIPERFIL.PREF_VIAJE.SUBTITULO' | translate }}</strong></p>
            </div>
            <!-- HABLAR -->
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                [value]=" 'MIPERFIL.PREF_VIAJE.OPC_HABLAR' | translate "
                (change)="onCheckboxChange('talk', $event)"
                [checked]="preferenciasSeleccionadas.includes('talk')"
                id="pref-talk"
              />
              <label
                class="form-check-label"
                for="pref-talk"
              >
                {{ 'MIPERFIL.PREF_VIAJE.OPC_HABLAR' | translate }}
              </label>
            </div>

            <!-- M\xDASICA -->
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                [value]=" 'MIPERFIL.PREF_VIAJE.OPC_MUSICA' | translate "
                (change)="onCheckboxChange('music', $event)"
                [checked]="preferenciasSeleccionadas.includes('music')"
                id="pref-music"
              />
              <label
                class="form-check-label"
                for="pref-music"
              >
                {{ 'MIPERFIL.PREF_VIAJE.OPC_MUSICA' | translate }}
              </label>
            </div>

            <!-- DORMIR -->
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                [value]=" 'MIPERFIL.PREF_VIAJE.OPC_DORMIR' | translate "
                (change)="onCheckboxChange('sleep', $event)"
                [checked]="preferenciasSeleccionadas.includes('sleep')"
                id="pref-sleep"
              />
              <label
                class="form-check-label"
                for="pref-sleep"
              >
                {{ 'MIPERFIL.PREF_VIAJE.OPC_DORMIR' | translate }}
              </label>
            </div>

            <!-- SILENCIO -->
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                [value]=" 'MIPERFIL.PREF_VIAJE.OPC_SILENCIO' | translate "
                (change)="onCheckboxChange('Silencio', $event)"
                [checked]="preferenciasSeleccionadas.includes('Silencio')"
                id="pref-silence"
              />
              <label
                class="form-check-label"
                for="pref-silence"
              >
                {{ 'MIPERFIL.PREF_VIAJE.OPC_SILENCIO' | translate }}
              </label>
            </div>

            <mat-divider class="mb-1 mt-2"></mat-divider>
            <label class="mb-2">
              <strong>{{ 'MIPERFIL.PREF_VIAJE.LABEL_OTRAS' | translate }}</strong>
            </label>

            <!-- MASCOTAS -->
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                [value]=" 'MIPERFIL.PREF_VIAJE.MASCOTAS' | translate "
                (change)="onCheckboxChange('Mascotas', $event)"
                [checked]="preferenciasSeleccionadas.includes('Mascotas')"
                id="pref-pets"
              />
              <label
                class="form-check-label"
                for="pref-pets"
              >
                {{ 'MIPERFIL.PREF_VIAJE.MASCOTAS' | translate }}
              </label>
            </div>

            <!-- FUMAR -->
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                [value]=" 'MIPERFIL.PREF_VIAJE.FUMAR'| translate "
                (change)="onCheckboxChange('Fumar', $event)"
                [checked]="preferenciasSeleccionadas.includes('Fumar')"
                id="pref-smoke"
              />
              <label
                class="form-check-label"
                for="pref-smoke"
              >
                {{'MIPERFIL.PREF_VIAJE.FUMAR' | translate }}
              </label>
            </div>
          </fieldset>
        </ion-row>
      </ion-col>
    </ion-row>

    <!-- INTERESES DE OCIO Y DESTINOS -->
    <ion-row class="d-flex justify-content-center mt-4">
      <fieldset class="mb-2">
        <!-- Legend para lectores de pantalla -->
        <legend class="h4 text-center mb-4">{{ 'MIPERFIL.PREF_IA.LABEL' | translate }}</legend>

        <div class="form-label mb-3">
          <span class="form-label-text">{{ 'MIPERFIL.PREF_IA.SUBTITULO' | translate }}</span>
        </div>

        <!-- PLAYA -->
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            [value]="'MIPERFIL.PREF_IA.PLAYA' | translate"
            (change)="onOcioCheckboxChange('playa', $event)"
            [checked]="interesesOcioSeleccionados.includes('playa')"
            id="ocio-playa"
          />
          <label
            class="form-check-label"
            for="ocio-playa"
          >
            {{ 'MIPERFIL.PREF_IA.PLAYA' | translate }}
          </label>
        </div>

        <!-- AMBIENTE FESTIVO -->
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            [value]="'MIPERFIL.PREF_IA.OCIO_NOCTURNO' | translate"
            (change)="onOcioCheckboxChange('ambiente festivo', $event)"
            [checked]="interesesOcioSeleccionados.includes('ambiente festivo')"
            id="ocio-festivo"
          />
          <label
            class="form-check-label"
            for="ocio-festivo"
          >
            {{ 'MIPERFIL.PREF_IA.OCIO_NOCTURNO' | translate }}
          </label>
        </div>

        <!-- CULTURA -->
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            [value]="'MIPERFIL.PREF_IA.CULTURA' | translate"
            (change)="onOcioCheckboxChange('cultura', $event)"
            [checked]="interesesOcioSeleccionados.includes('cultura')"
            id="ocio-cultura"
          />
          <label
            class="form-check-label"
            for="ocio-cultura"
          >
            {{ 'MIPERFIL.PREF_IA.CULTURA' | translate }}
          </label>
        </div>

        <!-- TURISMO RURAL -->
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            [value]="'MIPERFIL.PREF_IA.RURAL' | translate"
            (change)="onOcioCheckboxChange('turismo rural', $event)"
            [checked]="interesesOcioSeleccionados.includes('turismo rural')"
            id="ocio-rural"
          />
          <label
            class="form-check-label"
            for="ocio-rural"
          >
            {{ 'MIPERFIL.PREF_IA.RURAL' | translate }}
          </label>
        </div>

        <mat-divider class="mb-1 mt-3"></mat-divider>
      </fieldset>
    </ion-row>

    <!-- Bot\xF3n para guardar los cambios -->
    <ion-row class="d-flex justify-content-center ms-1 mt-5 mb-3">
      <div>
        <p-toast position="bottom-center"></p-toast>
        <button
          type="button"
          class="btn btn_bg"
          [attr.aria-label]="'BOTONES.MIPERFIL.GUARDAR' | translate"
          mat-raised-button
          [disabled]="!botonHabilitado"
          (click)="editarDatos()"
        >
          {{'BOTON.GUARDAR' | translate}}
        </button>
      </div>
    </ion-row>
  </div>
</ion-content>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/paginas-panel-usuario/mi-perfil/mi-perfil.page.scss */\n.fila-foto {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 2rem;\n  width: 100%;\n  flex-wrap: nowrap;\n  text-align: center;\n  position: relative;\n  margin: 0 auto;\n}\n.position-relative {\n  position: relative;\n}\n.modal_eliminar {\n  width: 200px;\n}\n.lista_sugerencias {\n  max-height: 220px;\n  overflow-y: auto;\n  margin-top: 2px;\n}\n.lista_sugerencias .list-group-item {\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.lista_sugerencias .list-group-item:hover,\n.lista_sugerencias .list-group-item.active {\n  background-color: #F0D7B4 !important;\n  color: black !important;\n}\n::ng-deep app-selector-general input,\n::ng-deep app-selector-general select {\n  border: none !important;\n  box-shadow: none !important;\n  outline: none !important;\n}\n#input-pronombre::placeholder {\n  font-size: 0.99rem;\n  opacity: 0.7;\n}\n.flecha_selector {\n  right: 15px;\n  top: 67%;\n  transform: translateY(-50%);\n  pointer-events: none;\n}\n.fila-foto > .col-auto {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.img_container {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.line {\n  border-right: none !important;\n  border-bottom: none;\n}\n.img_profile {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n  border: 2px solid #ccc;\n}\n.boton {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.btn_delete {\n  background-color: #e0b6b6 !important;\n}\n.btn_delete:hover {\n  background-color: #f0d7b4 !important;\n}\n.ver-perfil-btn {\n  width: auto;\n  min-width: 250px;\n  white-space: nowrap;\n  font-weight: 500;\n  background-color: #a758e8;\n  color: white;\n  border-radius: 25px;\n  padding: 8px 16px;\n  transition: background-color 0.3s;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.ver-perfil-btn:hover {\n  background-color: #e0a667;\n}\n.btn_bg {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.container-fluid input,\n.container-fluid select,\n.bio {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n}\n.fila-datos {\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 10px;\n  width: 100%;\n}\n.col_nombre_apellidos {\n  display: flex;\n  flex: 2;\n  gap: 10px;\n  justify-content: center;\n}\n.col_fecha_edad {\n  display: flex;\n  flex: 0 0 100%;\n  max-width: 500px;\n  gap: 20px;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n}\n.col_fecha_edad .mb-3:not(.cajon_edad) {\n  flex: 1.5;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.col_fecha_edad .mb-3:not(.cajon_edad) input {\n  width: 100%;\n  max-width: 150px;\n  text-align: center;\n}\n.col_fecha_edad .cajon_edad {\n  flex: 0.8;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.col_fecha_edad .cajon_edad input {\n  width: 100%;\n  max-width: 80px;\n  text-align: center;\n}\n.fila-datos .col-nombre-apellidos ion-col,\n.fila-datos .col-pronombre ion-col {\n  flex: 1;\n  min-width: 0;\n}\n.contenedor_tabla {\n  width: 400px;\n}\n@media (max-width: 576px) {\n  .fila-foto {\n    gap: 1rem;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: nowrap;\n  }\n  .img_container {\n    width: 80px;\n    height: 80px;\n    border-radius: 50%;\n    overflow: hidden;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n    margin: 0 auto;\n  }\n  .img_profile {\n    width: 80px;\n    height: 80px;\n    object-fit: cover;\n    border-radius: 50%;\n    border: 2px solid #ccc;\n  }\n  .boton {\n    width: 32px;\n    height: 32px;\n  }\n  .ver-perfil-btn {\n    width: 210px;\n    font-weight: 100;\n    font-size: 14px;\n    background-color: #a758e8;\n    color: white;\n    border-radius: 25px;\n    padding: 8px 16px;\n    transition: background-color 0.3s;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.28);\n  }\n  .fila-selectores {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n  }\n  .fila-selectores .col-pronombre,\n  .fila-selectores .col-genero {\n    flex: 0 0 50%;\n    max-width: 100%;\n  }\n  .col-orientacion {\n    flex: 0 0 70%;\n    max-width: 70%;\n    margin: 10px auto 0 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .col-orientacion label {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n    text-align: center;\n  }\n  .fila-selectores select {\n    width: 100% !important;\n    font-size: 0.8rem !important;\n  }\n  .line {\n    border-right: none !important;\n    border-bottom: none !important;\n    padding-bottom: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  .input_edad {\n    width: 60px;\n  }\n  .custom-responsive-modal {\n    width: 800px;\n    max-width: 800px;\n  }\n}\n@media (max-width: 992px) {\n  .line {\n    border-right: 2px dashed rgba(224, 166, 103, 0.4) !important;\n  }\n  .col-orientacion .flecha_selector {\n    top: 76%;\n    transform: translateY(-50%);\n  }\n}\n@media (max-width: 767px) {\n  ::ng-deep .custom-responsive-modal .mat-mdc-dialog-container,\n  ::ng-deep .custom-responsive-modal .mat-dialog-container {\n    max-width: 92vw !important;\n    width: 92vw !important;\n    margin: 0 auto !important;\n  }\n}\n@media (min-width: 768px) {\n  ::ng-deep .custom-responsive-modal .mat-mdc-dialog-container,\n  ::ng-deep .custom-responsive-modal .mat-dialog-container {\n    max-width: 500px !important;\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=mi-perfil.page.css.map */\n'] }]
  }], () => [{ type: FuncionesComunes }, { type: LanguageService }, { type: UserServicesService }, { type: GoogleServices }, { type: FuncionesUsuario }, { type: VehiculosServicesService }, { type: ChangeDetectorRef }, { type: MessageService }, { type: TranslateService }, { type: NavController }, { type: MatDialog }, { type: ActivatedRoute }, { type: Router }], { popover: [{
    type: ViewChild,
    args: ["popover"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MiPerfilPage, { className: "MiPerfilPage", filePath: "src/app/pages/paginas-panel-usuario/mi-perfil/mi-perfil.page.ts", lineNumber: 48 });
})();
export {
  MiPerfilPage
};
//# sourceMappingURL=mi-perfil.page-23DONBAU.js.map
