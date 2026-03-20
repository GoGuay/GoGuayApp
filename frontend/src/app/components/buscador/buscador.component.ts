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
import { GoogleServices } from 'src/app/core/google-services/google-services.service';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
} from 'rxjs/operators';
import { Subject } from 'rxjs';

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
  fecha_salida: Date = new Date();
  fecha_vuelta: Date | null = null;
  fechaMinima: Date = new Date();
  fechaMinimaVuelta: Date = new Date();

  sugerenciasOrigen: any[] = [];
  sugerenciasDestino: any[] = [];

  @ViewChild('inputOrigen') inputOrigen!: ElementRef;
  @ViewChild('inputDestino') inputDestino!: ElementRef;

  @Output() onSearch = new EventEmitter<any>();

  private buscadorOrigen$ = new Subject<string>();
  private buscadorDestino$ = new Subject<string>();

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
        filter((texto) => {
          const regexLetra = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]/;
          return regexLetra.test(texto);
        }),
        switchMap((texto) => {
          if (texto.length >= 3) {
            return this.googleService.obtenerLocalidad(texto);
          } else {
            this.sugerenciasOrigen = [];
            return [];
          }
        }),
      )
      .subscribe((respuesta: any) => {
        this.sugerenciasOrigen = respuesta;
      });

    /**
     * CEREBRO BUSQUEDA LOCALIDAD DESTINO
     */
    this.buscadorDestino$
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
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
   * Pasa la fecha_salida a formato simplificado (día Mes dd aaaa) y lo guardar en fechaStrg. Si coincide con hoy.dateString devuelve 'Hoy' e igual para 'Mañana' desde el archivo de traducciones.
   * return '' --> Si no es hoy, ni mañana. La función llega a este return y devuelve un string vacío --> coge lo que se haya seleccionado.
   */
  get textoBotonFechaIda(): string {
    if (!this.fecha_salida) return 'Seleccionar fecha';

    const hoy = new Date();
    const mañana = new Date();
    mañana.setDate(hoy.getDate() + 1);

    const fechaStr = this.fecha_salida.toDateString();
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
    this.fecha_salida = new Date();
    this.sugerenciasOrigen = [];
    this.sugerenciasDestino = [];
  }

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
    this.sugerenciasOrigen = [];
  }

  /**
   * Función para guardar la información de la localidad de destino seleccionada.   *
   * @param localidad -> Recibe la localidad seleccionada en la lista de sugerencias.
   */
  seleccionarLocalidadDestino(localidad: any) {
    this.destino = localidad.descripcion.split(',')[0].trim();
    this.sugerenciasDestino = [];
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
      fecha_salida: this.fecha_salida,
    };

    this.onSearch.emit(params);
    this.navCtrl.navigateForward('/busqueda-viajes', { queryParams: params });
  }
}
