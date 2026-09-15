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

import { of, Subject } from 'rxjs';
import { ControlLocalidad } from 'src/app/models/control-localidad/control-localidad.model';
import { BuscadorLocalidadesService } from 'src/app/core/buscador-localidades/buscador-localidades.service';
import { ActivatedRoute } from '@angular/router';

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
  @ViewChild('inputOrigen') inputOrigen!: ElementRef;
  @ViewChild('inputDestino') inputDestino!: ElementRef;
  // Objetos centralizados de Origen y Destino
  origenCtrl: ControlLocalidad;
  destinoCtrl: ControlLocalidad;
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

  @Output() onSearch = new EventEmitter<any>();

  estaEnOrigen: boolean = false;
  estaEnDestino: boolean = false;

  constructor(
    public translate: TranslateService,
    private navCtrl: NavController,
    public buscadorLocalidadesService: BuscadorLocalidadesService,
    private route: ActivatedRoute
  ) {
    addIcons({ eye, lockClosed });

    // Inicialización de controles de origen y destino
    this.origenCtrl = this.buscadorLocalidadesService.crearEstadoControl();
    this.destinoCtrl = this.buscadorLocalidadesService.crearEstadoControl();

    this.buscadorLocalidadesService.inicializarBuscador(this.origenCtrl);
    this.buscadorLocalidadesService.inicializarBuscador(this.destinoCtrl);
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['destino']) {
        this.destinoCtrl.valorTexto = params['destino'];
      }
    });
  }

  // Getters auxiliares para mantener compatibilidad con el HTML existente
  get origen(): string {
    return this.origenCtrl.valorTexto;
  }
  set origen(val: string) {
    this.origenCtrl.valorTexto = val;
  }

  get destino(): string {
    return this.destinoCtrl.valorTexto;
  }
  set destino(val: string) {
    this.destinoCtrl.valorTexto = val;
  }

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
    this.origenCtrl.valorTexto = '';
    this.destinoCtrl.valorTexto = '';
    this.plazas = '';
    this.fecha_ida = new Date();
    this.buscadorLocalidadesService.limpiarSugerencias(this.origenCtrl);
    this.buscadorLocalidadesService.limpiarSugerencias(this.destinoCtrl);
    this.inputOrigen.nativeElement.focus();
  }

  /**
   * LLama al servicio de buscadorLocalidades y a la función seleccionarLocalidad, le pasa el origen, la localidad que recibe por parámetro de entrara y el inputOrigen
   * @param localidad
   */
  seleccionarLocalidadOrigen(localidad: any) {
    this.buscadorLocalidadesService.seleccionarLocalidad(
      this.origenCtrl,
      localidad,
      this.inputOrigen,
    );
  }

  seleccionarLocalidadDestino(localidad: any) {
    this.buscadorLocalidadesService.seleccionarLocalidad(
      this.destinoCtrl,
      localidad,
      this.inputDestino,
    );
  }

  limpiarSugerencias(
    tipo: 'origen' | 'destino',
    devolverFoco: boolean = false,
  ) {
    const control = tipo === 'origen' ? this.origenCtrl : this.destinoCtrl;
    const inputRef = tipo === 'origen' ? this.inputOrigen : this.inputDestino;

    this.buscadorLocalidadesService.limpiarSugerencias(
      control,
      inputRef,
      devolverFoco,
    );
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
      ...(this.fecha_vuelta && { fecha_vuelta: this.fecha_vuelta }),
    };

    this.onSearch.emit(params);
    this.navCtrl.navigateForward('/busqueda-viajes', { queryParams: params });
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

  //NAVEGACIÓN DEL TECLADO

  manejarNavegacionTeclado(
    event: KeyboardEvent,
    tipo: 'origen' | 'destino',
    index: number = -1,
  ) {
    const control = tipo === 'origen' ? this.origenCtrl : this.destinoCtrl;
    const selector =
      tipo === 'origen'
        ? '.lista_sugerencias_origen'
        : '.lista_sugerencias_destino';
    const inputRef = tipo === 'origen' ? this.inputOrigen : this.inputDestino;

    this.buscadorLocalidadesService.manejarNavegacionTeclado(
      event,
      control,
      selector,
      inputRef,
    );
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
}
