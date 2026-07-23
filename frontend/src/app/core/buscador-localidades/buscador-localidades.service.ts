import { ElementRef, Injectable } from '@angular/core';
import { ControlLocalidad } from '../../models/control-localidad/control-localidad.model';
import { GoogleServices } from '../google-services/google-services.service';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  of,
  Subject,
  switchMap,
  tap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

/**
 * CEREBRO DE BÚSQUEDA DE LOCALIDAD ORIGEN
 * Con el pipe establecemos unos filtros para que los resultados sean mejores.
 * debounceTime --> espera a que el usuario deje de escribir por 400 milisegundos.
 * disctingUntilChanged --> permite detectar si ha habido cambios reales desde el ultimo dato que se le ha pasado.
 * switchMap(texto) --> recibe lo que el usuario está escribiendo, pero si hay una petición a la API en curso y el usuario ha escrito algo más,
 * corta esa 1ª petición y se centra en la segunda, por lo tanto solo tiene una llamada a la API a la vez y no varias.
 */
export class BuscadorLocalidadesService {
  private cacheConsultas: { [key: string]: any[] } = {};

  constructor(private googleServices: GoogleServices) {}

  /**
   * Crea la estructura de datos básica para gestionar un campo de autocompletado.
   */
  crearEstadoControl(): ControlLocalidad {
    return {
      valorTexto: '',
      sugerencias: [],
      indiceActivo: -1,
      ultimaLocalidadValida: null,
      estaActivo: false,
      buscandoSeleccion: false,
      buscador$: new Subject<string>(),
    };
  }

  /**
   * Configura la tubería RxJS (pipe) para escuchar lo que escribe el usuario.
   */
  inicializarBuscador(control: ControlLocalidad): void {
    const regexLetra = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]/;

    control.buscador$
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        filter(() => control.estaActivo),
        filter((texto) => !!texto && regexLetra.test(texto)),
        switchMap((texto) => {
          const termino = texto.toLowerCase().trim();

          if (this.cacheConsultas[termino]) {
            return of(this.cacheConsultas[termino]);
          }

          if (texto.length >= 3) {
            return this.googleServices
              .obtenerLocalidad(texto)
              .pipe(
                tap(
                  (resultados) => (this.cacheConsultas[termino] = resultados),
                ),
              );
          } else {
            control.sugerencias = [];
            return of([]);
          }
        }),
        filter(() => control.estaActivo),
      )
      .subscribe((respuesta: any[]) => {
        control.sugerencias = respuesta;
      });
  }

  /**
   * Procesa la selección de una localidad de la lista.
   */
  seleccionarLocalidad(
    control: ControlLocalidad,
    localidad: any,
    elementRef?: ElementRef,
  ): void {
    control.buscandoSeleccion = true;
    control.ultimaLocalidadValida = localidad;
    control.valorTexto = localidad.descripcion
      ? localidad.descripcion.split(',')[0].trim()
      : '';
    control.sugerencias = [];
    control.indiceActivo = -1;
    if (elementRef) {
      elementRef.nativeElement.focus();
    }
    // Liberamos la bandera tras un pequeño delay
    setTimeout(() => {
      control.buscandoSeleccion = false;
    }, 250);
  }

  /**
   * Valida si el texto introducido coincide con una opción válida seleccionada.
   */
  validarSeleccion(
    control: ControlLocalidad,
    elementRefInput?: ElementRef | HTMLInputElement,
  ): void {
    setTimeout(() => {
      if (control.buscandoSeleccion) return;
      const textoActual = control.valorTexto.trim();

      if (textoActual === '') {
        control.ultimaLocalidadValida = null;
        this.limpiarSugerencias(control);
        return;
      }

      const textoValido = control.ultimaLocalidadValida?.descripcion
        ?.split(',')[0]
        ?.trim();

      if (!control.ultimaLocalidadValida || textoActual !== textoValido) {
        control.valorTexto = '';
        control.ultimaLocalidadValida = null;
        this.limpiarSugerencias(control, elementRefInput, true);
      }
    }, 250);
  }

  //NAVEGACIÓN DEL TECLADO//

  private actualizarFocoItem(selectorCSSClase: string, indice: number): void {
    setTimeout(() => {
      const elementos = document.querySelectorAll(selectorCSSClase);
      (elementos[indice] as HTMLElement)?.focus();
    }, 10);
  }

  limpiarSugerencias(
    control: ControlLocalidad,
    elementRefInput?: ElementRef | HTMLInputElement,
    devolverFoco: boolean = false,
  ): void {
    control.sugerencias = [];
    control.indiceActivo = -1;
    control.buscador$.next('');
    if (devolverFoco && elementRefInput) {
      const el =
        'nativeElement' in elementRefInput
          ? elementRefInput.nativeElement
          : elementRefInput;
      el.focus();
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
  manejarNavegacionTeclado(
    event: KeyboardEvent,
    control: ControlLocalidad,
    selectorCSSClase: string,
    elementRefInput?: ElementRef,
  ): void {
    if (control.sugerencias.length === 0) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (control.indiceActivo < control.sugerencias.length - 1) {
        control.indiceActivo++;
        this.actualizarFocoItem(selectorCSSClase, control.indiceActivo);
      }
    } else if (event.key === 'ArrowUp') {
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
    } else if (event.key === 'Enter') {
      if (control.indiceActivo !== -1) {
        event.preventDefault();
        const seleccionada = control.sugerencias[control.indiceActivo];
        this.seleccionarLocalidad(control, seleccionada, elementRefInput);
      }
    } else if (event.key === 'Escape') {
      this.limpiarSugerencias(control, elementRefInput, true);
    }
  }
}
