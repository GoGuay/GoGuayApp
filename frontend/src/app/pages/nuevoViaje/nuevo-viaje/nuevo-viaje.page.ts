import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule, NavController } from '@ionic/angular';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatDialogModule } from '@angular/material/dialog';
import { TravelService } from '../../../core/travel-services/travel.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ToastModule } from 'primeng/toast';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { FuncionesComunes } from '../../../core/funciones-comunes/funciones-comunes.service';
import { SpinnerComponent } from '../../../components/spinner/spinner.component';
import { Location } from '@angular/common';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  of,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { GoogleServices } from '../../../core/google-services/google-services.service';
import { ControlLocalidad } from 'src/app/models/control-localidad/control-localidad.model';
import { BuscadorLocalidadesService } from 'src/app/core/buscador-localidades/buscador-localidades.service';

@Component({
  selector: 'app-nuevo-viaje',
  templateUrl: './nuevo-viaje.page.html',
  styleUrls: ['./nuevo-viaje.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    IonicModule,
    MatButtonModule,
    RouterModule,
    TranslateModule,
    NavbarComponent,
    MatDialogModule,
    MatTooltipModule,
    ToastModule,
    SpinnerComponent,
  ],
})
export class NuevoViajePage implements OnInit {
  userLoggedIn: boolean = false;
  isOpen: boolean = false;

  origenCtrl: ControlLocalidad;
  destinoCtrl: ControlLocalidad;
  plazas: string = '';
  hora_seleccionada: string = '';

  title_help_carnet: string = '';
  message_help_carnet: string = '';
  message_help_auth: string = '';

  sugerenciasOrigen: any[] = [];
  sugerenciasDestino: any[] = [];

  cargandoOrigen: boolean = false;
  cargandoDestino: boolean = false;

  indiceActivoOrigen: number = -1;
  indiceActivoDestino: number = -1;

  irAtrasImg: string = '../../../assets/sistema/atras.png';

  private buscadorOrigen$ = new Subject<string>();
  private buscadorDestino$ = new Subject<string>();
  estaEnOrigen: boolean = false;
  estaEnDestino: boolean = false;
  private ultimaLocalidadValidaOrigen: any = null;
  private ultimaLocalidadValidaDestino: any = null;

  private cacheConsultas: { [key: string]: any[] } = {};

  @ViewChild('inputOrigen') inputOrigen!: ElementRef;
  @ViewChild('inputDestino') inputDestino!: ElementRef;

  mapCenter: { lat: number; lng: number } = { lat: 40.4168, lng: -3.7038 };

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(valor: string) {
    this.plazas = valor;
    this.isOpen = false;
  }

  // Opcional: Cerrar si el usuario hace click fuera
  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  constructor(
    private navCtrl: NavController,
    private viajesService: TravelService,
    public funcionesComunes: FuncionesComunes,
    private translate: TranslateService,
    private cdr: ChangeDetectorRef,
    private location: Location,
    private elementRef: ElementRef,
    private travelService: TravelService,
    public buscadorLocalidadesService: BuscadorLocalidadesService,
  ) {
    // Inicialización de controles de origen y destino
    this.origenCtrl = this.buscadorLocalidadesService.crearEstadoControl();
    this.destinoCtrl = this.buscadorLocalidadesService.crearEstadoControl();

    this.buscadorLocalidadesService.inicializarBuscador(this.origenCtrl);
    this.buscadorLocalidadesService.inicializarBuscador(this.destinoCtrl);
    this.translate
      .get('NUEVOVIAJE.MENSAJE_AYUDA_CARNET')
      .subscribe((traduccion: string) => {
        this.message_help_carnet = traduccion;
      });
    this.translate
      .get('NUEVOVIAJE.TITULO_MODAL_AYUDA')
      .subscribe((traduccion: string) => {
        this.title_help_carnet = traduccion;
      });
    this.translate
      .get('NUEVOVIAJE.MENSAJE_AYUDA_LOGIN_REG')
      .subscribe((traduccion: string) => {
        this.message_help_auth = traduccion;
      });
  }

  ngOnInit() {
    this.userLoggedIn = this.funcionesComunes.isUserLoggedIn();
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
   * Función para navegar hasta la página "data-viaje"
   *
   */
  goTo() {
    const viajeData = {
      origen: this.origen,
      destino: this.destino,
      plazas: this.plazas,
      hora_salida: this.hora_seleccionada,
    };

    if (!this.userLoggedIn) {
      this.funcionesComunes.openConfirmModal(
        this.title_help_carnet,
        this.message_help_auth,
      );
    } else {
      /**
       * Se almacena temporalmente los datos del viaje.
       */
      this.viajesService.setViajeData(viajeData);
      this.navCtrl.navigateRoot('/data-viaje', { replaceUrl: true });
    }
  }

  /**
   * Obtiene una lista de sugerencias de búsqueda en la ciudad de destino.
   * @param evento
   */
  obtenerSugerenciasOrigen(evento: Event) {
    const contenidoInput = (evento.target as HTMLInputElement).value;
    this.origenCtrl.valorTexto = contenidoInput;
    this.origenCtrl.buscador$.next(contenidoInput);
  }

  /**
   * Obtiene una lista de sugerencias de búsqueda en la ciudad de destino.
   * @param evento
   */
  obtenerSugerenciasDestino(evento: Event) {
    const contenidoInput = (evento.target as HTMLInputElement).value;
    this.destinoCtrl.valorTexto = contenidoInput;
    this.destinoCtrl.buscador$.next(contenidoInput);
  }

  /**
   * Función para obtener la ubicación actual del usuario y buscar la ciudad correspondiente usando Nominatim.
   * Se actualiza el campo de origen con la ciudad obtenida.
   */
  buscarUbicacion() {
    this.cargandoOrigen = true;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          this.mapCenter = { lat, lng };

          // Llamada a Nominatim para obtener la dirección inversa
          const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;

          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              if (data && data.address) {
                let city =
                  data.address.city ||
                  data.address.town ||
                  data.address.village ||
                  '';
                if (city) {
                  this.origenCtrl = city;
                  const viajeData = {
                    ...this.travelService.getViajeData(),
                    origen: this.origenCtrl,
                  };
                  this.travelService.setViajeData(viajeData);
                  this.cargandoOrigen = false;
                  this.cdr.detectChanges();
                } else {
                  console.log('No se pudo obtener la ciudad.');
                }
              }
            })
            .catch((error) =>
              console.error(
                'Error al obtener la ubicación con Leaflet:',
                error,
              ),
            );
        },
        (error) => {
          console.error('Error de geolocalización:', error.message);
        },
      );
    } else {
      console.error('La geolocalización no está soportada por este navegador.');
    }
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

  goBack() {
    this.location.back();
  }
}
