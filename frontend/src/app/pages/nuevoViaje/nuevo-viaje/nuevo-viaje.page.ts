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

  origen: string = '';
  destino: string = '';
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
    private googleService: GoogleServices,
    private elementRef: ElementRef,
    private travelService: TravelService,
  ) {
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
        this.cargandoOrigen = false;
        this.cdr.detectChanges();
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
        this.cargandoDestino = false;
        this.cdr.detectChanges();
      });
  }

  ngOnInit() {
    this.userLoggedIn = this.funcionesComunes.isUserLoggedIn();
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

  buscarSugerenciasOrigen(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const texto = inputElement.value;

    this.estaEnOrigen = true;
    this.estaEnDestino = false;
    this.cargandoOrigen = true;

    if (texto && texto.length >= 3) {
      this.buscadorOrigen$.next(texto);
    } else {
      this.sugerenciasOrigen = [];
      this.cargandoOrigen = false;
    }
  }

  /**
   * Función para empujar el texto de destino al flujo reactivo de Google
   */
  buscarSugerenciasDestino(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const texto = inputElement.value;

    this.estaEnOrigen = false;
    this.estaEnDestino = true;
    this.cargandoDestino = true;

    if (texto && texto.length >= 3) {
      this.buscadorDestino$.next(texto);
    } else {
      this.sugerenciasDestino = [];
      this.cargandoDestino = false;
    }
  }
  buscarUbicacion() {}

  /**
   * Función para guardar la información de la localidad de origen seleccionada.
   *
   * @param localidad -> Recibe la localidad seleccionada en la lista de sugerencias.
   */
  seleccionarLocalidadOrigen(localidad: any) {
    this.origen = localidad.descripcion.split(',')[0].trim();
    this.ultimaLocalidadValidaOrigen = localidad;

    const viajeData = {
      ...this.travelService.getViajeData(),
      origen: this.origen,
    };
    this.travelService.setViajeData(viajeData);
    this.sugerenciasOrigen = [];
    this.indiceActivoOrigen = -1;
  }

  /**
   * Función para guardar la información de la localidad de destino seleccionada.
   *
   * @param localidad -> Recibe la localidad seleccionada en la lista de sugerencias.
   */
  seleccionarLocalidadDestino(localidad: any) {
    this.destino = localidad.descripcion.split(',')[0].trim();
    this.ultimaLocalidadValidaDestino = localidad;

    const viajeData = {
      ...this.travelService.getViajeData(),
      destino: this.destino,
    };
    this.travelService.setViajeData(viajeData);
    this.sugerenciasDestino = [];
    this.indiceActivoDestino = -1;
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
