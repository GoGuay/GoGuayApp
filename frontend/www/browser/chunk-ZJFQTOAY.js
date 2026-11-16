import {
  GoogleServices
} from "./chunk-TMB2KEQX.js";
import {
  Injectable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  filter,
  of,
  setClassMetadata,
  switchMap,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YUKRBYLH.js";

// src/app/core/buscador-localidades/buscador-localidades.service.ts
var BuscadorLocalidadesService = class _BuscadorLocalidadesService {
  googleServices;
  cacheConsultas = {};
  constructor(googleServices) {
    this.googleServices = googleServices;
  }
  /**
   * Crea la estructura de datos básica para gestionar un campo de autocompletado.
   */
  crearEstadoControl() {
    return {
      valorTexto: "",
      sugerencias: [],
      indiceActivo: -1,
      ultimaLocalidadValida: null,
      estaActivo: false,
      buscandoSeleccion: false,
      buscador$: new Subject()
    };
  }
  /**
   * Configura la tubería RxJS (pipe) para escuchar lo que escribe el usuario.
   */
  inicializarBuscador(control) {
    const regexLetra = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]/;
    control.buscador$.pipe(debounceTime(400), distinctUntilChanged(), filter(() => control.estaActivo), filter((texto) => !!texto && regexLetra.test(texto)), switchMap((texto) => {
      const termino = texto.toLowerCase().trim();
      if (this.cacheConsultas[termino]) {
        return of(this.cacheConsultas[termino]);
      }
      if (texto.length >= 3) {
        return this.googleServices.obtenerLocalidad(texto).pipe(tap((resultados) => this.cacheConsultas[termino] = resultados));
      } else {
        control.sugerencias = [];
        return of([]);
      }
    }), filter(() => control.estaActivo)).subscribe((respuesta) => {
      control.sugerencias = respuesta;
    });
  }
  /**
   * Procesa la selección de una localidad de la lista.
   */
  seleccionarLocalidad(control, localidad, elementRefInput) {
    control.buscandoSeleccion = true;
    control.ultimaLocalidadValida = localidad;
    control.valorTexto = localidad.descripcion ? localidad.descripcion.split(",")[0].trim() : "";
    control.sugerencias = [];
    control.indiceActivo = -1;
    if (elementRefInput) {
      const el = "nativeElement" in elementRefInput ? elementRefInput.nativeElement : elementRefInput;
      el.focus();
    }
    setTimeout(() => {
      control.buscandoSeleccion = false;
    }, 250);
  }
  /**
   * Valida si el texto introducido coincide con una opción válida seleccionada.
   */
  validarSeleccion(control, elementRefInput) {
    setTimeout(() => {
      var _a, _b, _c;
      if (control.buscandoSeleccion)
        return;
      const textoActual = control.valorTexto.trim();
      if (textoActual === "") {
        control.ultimaLocalidadValida = null;
        this.limpiarSugerencias(control);
        return;
      }
      const textoValido = (_c = (_b = (_a = control.ultimaLocalidadValida) == null ? void 0 : _a.descripcion) == null ? void 0 : _b.split(",")[0]) == null ? void 0 : _c.trim();
      if (!control.ultimaLocalidadValida || textoActual !== textoValido) {
        control.valorTexto = "";
        control.ultimaLocalidadValida = null;
        this.limpiarSugerencias(control, elementRefInput, true);
      }
    }, 250);
  }
  //NAVEGACIÓN DEL TECLADO//
  actualizarFocoItem(selectorCSSClase, indice) {
    setTimeout(() => {
      var _a;
      const elementos = document.querySelectorAll(selectorCSSClase);
      (_a = elementos[indice]) == null ? void 0 : _a.focus();
    }, 10);
  }
  limpiarSugerencias(control, elementRefInput, devolverFoco = false) {
    control.sugerencias = [];
    control.indiceActivo = -1;
    control.buscador$.next("");
    if (devolverFoco && elementRefInput) {
      const el = typeof elementRefInput === "object" && elementRefInput !== null && "nativeElement" in elementRefInput ? elementRefInput.nativeElement : elementRefInput;
      if (el && typeof el.focus === "function") {
        el.focus();
      }
    }
  }
  /**
   *
   * @param event --> información de la tecla pulsada (flecha abajo, Esc, etc)
   * @param tipo --> para saber si estamos trabajando con el input de 'origen' o 'destino'.
   * @param index --> si es -1 el usuario pulsó la tecla estando dentro del input. Si es 0,1,2...significa que el usuario ya esta navegando en la lista de sugerencias.
   *
   * Condicional sugerencias: si el tipo es origen, elige sugerenciasOrigen. Si no es ese tipo, coge sugerenciasDestino. Si el array de sugerencias es 0 sale de la función.
   * Condicional indiceActual: si el tipo es origen indiceActual pasa a valer lo que esté en la definición de indiceActivoOrigen (-1), si no pasa a valor lo que tenga indiceActivoDestino (-1).
   * Si el evento es tecla abajo:
   *  -event.preventDefault --> indicamos que somos nosotros quienes vamos a manejar con la tecla, impedimos la accion natural que tiene el navegador.
   *  - Si indiceActual es menor que el array de sugerencias -1 (para igual el tamaño del array al número del índice), le sumamos 1 indiceActual y llamamos a actualizarIndiceyFoco
   * Si el evento es tecla arriba:
   *  -
   */
  manejarNavegacionTeclado(event, control, selectorCSSClase, elementRefInput) {
    if (control.sugerencias.length === 0)
      return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (control.indiceActivo < control.sugerencias.length - 1) {
        control.indiceActivo++;
        this.actualizarFocoItem(selectorCSSClase, control.indiceActivo);
      }
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (control.indiceActivo > 0) {
        control.indiceActivo--;
        this.actualizarFocoItem(selectorCSSClase, control.indiceActivo);
      } else {
        control.indiceActivo = -1;
        if (elementRefInput) {
          elementRefInput.nativeElement.focus();
        }
      }
    } else if (event.key === "Enter") {
      if (control.indiceActivo !== -1) {
        event.preventDefault();
        const seleccionada = control.sugerencias[control.indiceActivo];
        this.seleccionarLocalidad(control, seleccionada, elementRefInput);
      }
    } else if (event.key === "Escape") {
      this.limpiarSugerencias(control, elementRefInput, true);
    }
  }
  obtenerSugerencias(control, evento) {
    const texto = typeof evento === "string" ? evento : evento.target.value;
    control.valorTexto = texto;
    control.buscador$.next(texto);
  }
  static \u0275fac = function BuscadorLocalidadesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BuscadorLocalidadesService)(\u0275\u0275inject(GoogleServices));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BuscadorLocalidadesService, factory: _BuscadorLocalidadesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuscadorLocalidadesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: GoogleServices }], null);
})();

export {
  BuscadorLocalidadesService
};
//# sourceMappingURL=chunk-ZJFQTOAY.js.map
