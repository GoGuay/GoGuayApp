import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule, NavController } from '@ionic/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { eye, lockClosed } from 'ionicons/icons';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
  tap,
} from 'rxjs/operators';
import { of, Subject } from 'rxjs';
import { GoogleServices } from '../../core/google-services/google-services.service';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [
    IonicModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss'],
})
export class BuscadorComponent implements OnInit {
  origen: string = '';
  destino: string = '';
  plazas: string = '';
  fecha_ida: Date = new Date();
  fecha_vuelta: Date | null = null;
  fechaMinima: Date = new Date();
  fechaMinimaVuelta: Date = new Date();

  sugerenciasOrigen: any[] = [];
  sugerenciasDestino: any[] = [];

  // Índices para el control de teclado
  indiceActivoOrigen: number = -1;
  indiceActivoDestino: number = -1;

  private ultimaLocalidadValidaOrigen: any = null;
  private ultimaLocalidadValidaDestino: any = null;

  @ViewChild('inputOrigen') inputOrigen!: ElementRef;
  @ViewChild('inputDestino') inputDestino!: ElementRef;

  @Output() onSearch = new EventEmitter<any>();

  private buscadorOrigen$ = new Subject<string>();
  private buscadorDestino$ = new Subject<string>();

  //Variable para guardar una búsqueda en caché. Para saber si ya ha sido buscada previamente o no.
  private cacheConsultas: { [key: string]: any[] } = {};

  estaEnOrigen: boolean = false;
  estaEnDestino: boolean = false;

  constructor(
    public translate: TranslateService,
    private navCtrl: NavController,
    private messageService: MessageService,
    private googleService: GoogleServices,
  ) {
    addIcons({ eye, lockClosed });

    /**
     * CEREBRO DE BÚSQUEDA DE LOCALIDAD ORIGEN
     * Con el pipe establecemos unos filtros para que los resultados sean mejores.
     * debounceTime --> espera a que el usuario deje de escribir por 400 milisegundos.
     * disctingUntilChanged --> permite detectar si ha habido cambios reales desde el ultimo dato que se le ha pasado.
     * switchMap(texto) --> recibe lo que el usuario está escribiendo, pero si hay una petición a la API en curso y el usuario ha escrito algo más,
     * corta esa 1ª petición y se centra en la segunda, por lo tanto solo tiene una llamada a la API a la vez y no varias.
     */
    this.buscadorOrigen$
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        filter(() => this.estaEnOrigen),
        filter((texto) => {
          const regexLetra = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]/;
          return regexLetra.test(texto);
        }),
        switchMap((texto) => {
          const termino = texto.toLowerCase().trim();
          if (this.cacheConsultas[termino]) {
            return of(this.cacheConsultas[termino]);
          }
          if (texto.length >= 3) {
            return this.googleService
              .obtenerLocalidad(texto)
              .pipe(
                tap(
                  (resultados) => (this.cacheConsultas[termino] = resultados),
                ),
              );
          } else {
            this.sugerenciasOrigen = [];
            return [];
          }
        }),
        filter(() => this.estaEnOrigen),
      )
      .subscribe((respuesta: any) => {
        this.sugerenciasOrigen = respuesta;
      });

    /**
     * CEREBRO BUSQUEDA LOCALIDAD DESTINO: Funciona igual que la de origen
     */
    this.buscadorDestino$
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        filter(() => this.estaEnDestino),
        filter((texto) => {
          const regexLetra = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]/;
          return regexLetra.test(texto);
        }),
        switchMap((texto) => {
          if (texto.length >= 3) {
            return this.googleService.obtenerLocalidad(texto);
          } else {
            this.sugerenciasDestino = [];
            return [];
          }
        }),
        filter(() => this.estaEnDestino),
      )
      .subscribe((respuesta: any) => {
        this.sugerenciasDestino = respuesta;
      });
  }

  ngOnInit() {}

  /**
   * Lógica para el texto del botón del calendario ( Hoy / Mañana / Fecha)
   * Si no hay fecha de salida, devuelve mensaje y sale.
   * Establece con new Date los días de hoy y mañana.
   * Pasa la fecha_ida a formato simplificado (día Mes dd aaaa) y lo guardar en fechaStrg. Si coincide con hoy.dateString devuelve 'Hoy' e igual para 'Mañana' desde el archivo de traducciones.
   * return '' --> Si no es hoy, ni mañana. La función llega a este return y devuelve un string vacío --> coge lo que se haya seleccionado.
   */
  get textoBotonFechaIda(): string {
    if (!this.fecha_ida) return 'Seleccionar fecha';

    const hoy = new Date();
    const mañana = new Date();
    mañana.setDate(hoy.getDate() + 1);

    const fechaStr = this.fecha_ida.toDateString();
    if (fechaStr === hoy.toDateString()) return 'BUSCADOR.HOY';
    if (fechaStr === mañana.toDateString()) return 'BUSCADOR.MAÑANA';

    return '';
  }

  get textoBotonFechaVuelta(): string {
    if (!this.fecha_vuelta) return 'Seleccionar fecha';

    const hoy = new Date();
    const mañana = new Date();
    mañana.setDate(hoy.getDate() + 1);

    const fechaStr = this.fecha_vuelta.toDateString();
    if (fechaStr === hoy.toDateString()) return 'BUSCADOR.HOY';
    if (fechaStr === mañana.toDateString()) return 'BUSCADOR.MAÑANA';

    return '';
  }

  /**
   * Función para limpiar los campos de búsqueda (botón Limpiar Búsqueda)
   */
  limpiarBusqueda() {
    this.origen = '';
    this.destino = '';
    this.plazas = '';
    this.fecha_ida = new Date();
    this.sugerenciasOrigen = [];
    this.sugerenciasDestino = [];
    this.inputOrigen.nativeElement.focus();
  }

  /**
   * INTERACCIÓN DE BÚSQUEDA Y TECLADO
   */

  /**
   * Obtiene una lista de sugerencias de búsqueda en la ciudad de origen.
   * @param evento
   */
  obtenerSugerenciasOrigen(evento: Event) {
    const contenidoInput = (evento.target as HTMLInputElement).value;
    this.buscadorOrigen$.next(contenidoInput);
  }

  /**
   * Obtiene una lista de sugerencias de búsqueda en la ciudad de destino.
   * @param evento
   */
  obtenerSugerenciasDestino(evento: Event) {
    const contenidoInput = (evento.target as HTMLInputElement).value;
    this.buscadorDestino$.next(contenidoInput);
  }

  /**
   * Función para guardar la información de la localidad de origen seleccionada.   *
   * @param localidad -> Recibe la localidad seleccionada en la lista de sugerencias.
   */
  seleccionarLocalidadOrigen(localidad: any) {
    this.origen = localidad.descripcion.split(',')[0].trim();
    this.ultimaLocalidadValidaOrigen = localidad;
    this.sugerenciasOrigen = [];
    this.indiceActivoOrigen = -1;
    this.inputOrigen.nativeElement.focus();
  }

  /**
   * Función para guardar la información de la localidad de destino seleccionada.   *
   * @param localidad -> Recibe la localidad seleccionada en la lista de sugerencias.
   */
  seleccionarLocalidadDestino(localidad: any) {
    this.destino = localidad.descripcion.split(',')[0].trim();
    this.ultimaLocalidadValidaDestino = localidad;
    this.sugerenciasDestino = [];
    this.indiceActivoDestino = -1;
    this.inputDestino.nativeElement.focus();
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
    tipo: 'origen' | 'destino',
    index: number = -1,
  ) {
    const sugerencias =
      tipo === 'origen' ? this.sugerenciasOrigen : this.sugerenciasDestino;
    let indiceActual =
      tipo === 'origen' ? this.indiceActivoOrigen : this.indiceActivoDestino;

    if (sugerencias.length === 0) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (indiceActual < sugerencias.length - 1) {
        indiceActual++;
        this.actualizarIndiceYFoco(tipo, indiceActual);
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (indiceActual > 0) {
        indiceActual--;
        this.actualizarIndiceYFoco(tipo, indiceActual);
      } else {
        this.actualizarIndiceYFoco(tipo, -1);
        const input = tipo === 'origen' ? this.inputOrigen : this.inputDestino;
        input.nativeElement.focus();
      }
    } else if (event.key === 'Enter') {
      // Si hay algo seleccionado en la lista, lo elegimos
      if (indiceActual !== -1) {
        event.preventDefault();
        const seleccionada = sugerencias[indiceActual];
        if (tipo === 'origen') {
          this.seleccionarLocalidadOrigen(seleccionada);
        } else {
          this.seleccionarLocalidadDestino(seleccionada);
        }
      }
    } else if (event.key === 'Escape') {
      this.limpiarSugerencias(tipo);
    }
  }

  private actualizarIndiceYFoco(
    tipo: 'origen' | 'destino',
    nuevoIndice: number,
  ) {
    if (tipo === 'origen') {
      this.indiceActivoOrigen = nuevoIndice;
    } else {
      this.indiceActivoDestino = nuevoIndice;
    }

    if (nuevoIndice !== -1) {
      // Selector dinámico basado en el tipo
      const selector =
        tipo === 'origen'
          ? '.lista_sugerencias_origen'
          : '.lista_sugerencias_destino';
      setTimeout(() => {
        const elementos = document.querySelectorAll(selector);
        (elementos[nuevoIndice] as HTMLElement)?.focus();
      }, 10);
    }
  }

  limpiarSugerencias(
    tipo: 'origen' | 'destino',
    devolverFoco: boolean = false,
  ) {
    if (tipo === 'origen') {
      this.sugerenciasOrigen = [];
      this.indiceActivoOrigen = -1;
      this.buscadorOrigen$.next('');
      if (devolverFoco) {
        this.inputOrigen.nativeElement.focus();
      }
    } else {
      this.sugerenciasDestino = [];
      this.indiceActivoDestino = -1;
      this.buscadorDestino$.next('');
      if (devolverFoco) {
        this.inputDestino.nativeElement.focus();
      }
    }
  }

  buscar() {
    if (!this.origen || this.origen.trim() === '') {
      this.inputOrigen.nativeElement.focus();
      return;
    }

    if (!this.destino || this.destino.trim() === '') {
      this.inputDestino.nativeElement.focus();
      return;
    }
    const params = {
      origen: this.origen,
      destino: this.destino,
      plazas: this.plazas,
      fecha_ida: this.fecha_ida,
      // Esto solo añade la propiedad si fecha_vuelta no es null
      ...(this.fecha_vuelta && { fecha_vuelta: this.fecha_vuelta }),
    };

    this.onSearch.emit(params);
    this.navCtrl.navigateForward('/busqueda-viajes', { queryParams: params });
  }

  validarSeleccion(tipo: 'origen' | 'destino') {
    setTimeout(() => {
      if (tipo === 'origen') {
        const textoActual = this.origen.trim();
        const textoValido = this.ultimaLocalidadValidaOrigen?.descripcion
          .split(',')[0]
          .trim();

        if (textoActual === '') {
          this.ultimaLocalidadValidaOrigen = null;
          this.limpiarSugerencias('origen', false);
          return;
        }

        if (!this.ultimaLocalidadValidaOrigen || textoActual !== textoValido) {
          this.origen = '';
          this.ultimaLocalidadValidaOrigen = null;
          this.limpiarSugerencias('origen', true);
        }
      } else {
        const textoActual = this.destino.trim();

        if (textoActual === '') {
          this.ultimaLocalidadValidaDestino = null;
          this.limpiarSugerencias('destino', false);
          return;
        }
        const textoValido = this.ultimaLocalidadValidaDestino?.descripcion
          .split(',')[0]
          .trim();

        if (!this.ultimaLocalidadValidaDestino || textoActual !== textoValido) {
          this.destino = '';
          this.ultimaLocalidadValidaDestino = null;
          this.limpiarSugerencias('destino', true);
        }
      }
    }, 250);
  }

  onFechaIdaChange(evento: any) {
    const fechaSeleccionada = evento.value;
    this.fecha_ida = fechaSeleccionada;

    // Actualizamos el límite mínimo de la vuelta para que coincida con la ida
    this.fechaMinimaVuelta = fechaSeleccionada;

    // Si el usuario ya había elegido una vuelta y ahora es inválida (anterior a la nueva ida)
    // la reseteamos a null para que sea opcional otra vez
    if (this.fecha_vuelta && this.fecha_vuelta < fechaSeleccionada) {
      this.fecha_vuelta = null;
    }
  }
}
