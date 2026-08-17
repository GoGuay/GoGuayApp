import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule, Platform } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { GoogleServices } from 'src/app/core/google-services/google-services.service';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { VehiculosServicesService } from 'src/app/core/vehiculos-services/vehiculos-services.service';
import { Usuario } from 'src/app/models/user/usuario.model';
import { BuscadorLocalidadesService } from 'src/app/core/buscador-localidades/buscador-localidades.service';
import { ControlLocalidad } from 'src/app/models/control-localidad/control-localidad.model';

@Component({
  selector: 'app-resumen-dinamico',
  standalone: true,
  imports: [
    MatIconModule,
    IonicModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
  ],
  templateUrl: './resumen-dinamico.component.html',
  styleUrls: ['./resumen-dinamico.component.scss'],
})
export class ResumenDinamicoComponent implements OnInit {
  @ViewChild('inputOrigen') inputOrigen!: ElementRef;
  @ViewChild('inputDestino') inputDestino!: ElementRef;
  isOpen: boolean = false;
  isOpenCoche: boolean = false;

  userData: Usuario = {} as Usuario;
  currentViajeData: any;
  private destroy$ = new Subject<void>();
  editandoViaje: boolean = false;

  origenCtrl: ControlLocalidad;
  destinoCtrl: ControlLocalidad;
  hora_seleccionada: string = '';
  plazas: string = '';
  // selectedRoute: google.maps.DirectionsResult | null = null;

  copiaViajeData: any = {};

  sugerenciasOrigen: any[] = [];
  sugerenciasDestino: any[] = [];

  marcaModeloUnido: string = '';

  indiceActivoOrigen: number = -1;
  indiceActivoDestino: number = -1;

  isDesktop: boolean = false;
  mostrarResumenMobile: boolean = false;

  // Opcional: Cerrar si el usuario hace click fuera
  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
      this.isOpenCoche = false;
    }
  }

  constructor(
    private travelService: TravelService,
    private googleService: GoogleServices,
    private vehiculosServicesService: VehiculosServicesService,
    private platform: Platform,
    private elementRef: ElementRef,
    public buscadorLocalidadesService: BuscadorLocalidadesService,
  ) {
    // Inicialización de controles de origen y destino
    this.origenCtrl = this.buscadorLocalidadesService.crearEstadoControl();
    this.destinoCtrl = this.buscadorLocalidadesService.crearEstadoControl();

    this.buscadorLocalidadesService.inicializarBuscador(this.origenCtrl);
    this.buscadorLocalidadesService.inicializarBuscador(this.destinoCtrl);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();

    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.actualizarInformacion();
    this.obtenerVehiculos();
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

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) this.isOpenCoche = false;
  }

  toggleDropdownCoche() {
    this.isOpenCoche = !this.isOpenCoche;
    if (this.isOpenCoche) this.isOpen = false;
  }

  // 3. Función para seleccionar el coche
  selectCoche(coche: any) {
    if (this.currentViajeData) {
      this.currentViajeData.coche = coche;
    }
    this.isOpenCoche = false;
  }

  selectOption(valor: string) {
    if (this.currentViajeData) {
      this.currentViajeData.plazas = valor;
      this.travelService.setViajeData(this.currentViajeData);
    }
    this.isOpen = false;
  }
  /**
   * Función para comprobar el tamaño de la pantalla.
   */
  checkScreenSize() {
    const anchoActual = window.innerWidth;

    this.isDesktop = this.platform.is('desktop') || anchoActual > 768;

    if (this.isDesktop) {
      this.mostrarResumenMobile = true;
    } else if (!this.isDesktop && !this.mostrarResumenMobile) {
      this.mostrarResumenMobile = false;
    }
  }

  /**
   * Función para actualizar los datos del viaje
   */
  actualizarInformacion() {
    this.travelService.viajeData$
      .pipe(takeUntil(this.destroy$))
      .subscribe((viajeData) => {
        this.currentViajeData = viajeData ?? {};
        this.origen = this.currentViajeData?.origen || '';
        this.marcaModeloUnido = `${this.currentViajeData?.coche?.marca} ${this.currentViajeData?.coche?.modelo}`;
        // this.selectedRoute = this.currentViajeData?.ruta_seleccionada || null;
      });
  }

  /**
   * Función para obtener la fecha que ha seleccionado el usuario
   * y darle un formato.
   *
   * @returns Devuelve la fecha formateada si la hay, si no, devuelve un string vacío.
   */
  getFormattedDate(): string {
    if (this.currentViajeData?.fecha_salida) {
      const date = new Date(this.currentViajeData?.fecha_salida);
      return date.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });
    }
    return '';
  }

  toggleEditarViaje() {
    const datosUltimos = this.travelService.getViajeData();

    if (datosUltimos) {
      this.currentViajeData = { ...datosUltimos };
      // Sincronizamos variables locales si las usas para los inputs
      this.origen = this.currentViajeData.origen;
      this.destino = this.currentViajeData.destino;
    }

    // 2. Ahora sí, creamos la copia de seguridad para el "Cancelar"
    this.copiaViajeData = JSON.parse(JSON.stringify(this.currentViajeData));
    this.editandoViaje = true;
  }

  /**
   * Función para guardar de forma temporal los datos del viaje.
   * Actualiza el servicio para que el resto de componentes se sincronicen.
   *
   */
  guardarCambios() {
    const viajeActualizado = {
      ...this.currentViajeData,
      origen: this.origen,
      destino: this.destino,
    };

    this.travelService.setViajeData(viajeActualizado);

    this.editandoViaje = false;
  }

  seleccionarCoche() {}

  /**
   * Función para cancelar la edición del viaje que se está creando.
   */
  cancelarEdicion() {
    this.currentViajeData = JSON.parse(JSON.stringify(this.copiaViajeData));
    this.editandoViaje = false;
  }

  seleccionarLocalidadOrigen(localidad: any) {
    this.origen = localidad.descripcion.split(',')[0].trim();
    const viajeData = {
      ...this.travelService.getViajeData(),
      origen: this.origen,
    };
    this.travelService.setViajeData(viajeData);
    this.sugerenciasOrigen = [];
  }

  seleccionarLocalidadDestino(localidad: any) {
    this.destino = localidad.descripcion.split(',')[0].trim();
    const viajeData = {
      ...this.travelService.getViajeData(),
      destino: this.destino,
    };
    this.travelService.setViajeData(viajeData);
    this.sugerenciasDestino = [];
  }

  /**
   * Función para obtener la lista de vehículos de un usuario.   *
   */
  obtenerVehiculos() {
    const usuario = JSON.parse(localStorage.getItem('userData') || '{}');
    this.vehiculosServicesService
      .obtenerVehiculosUsuario(usuario.usuario.id)
      .subscribe((resultado) => {
        console.log('Vehículos: ', resultado.vehiculos);
        this.userData.usuario.vehiculos = resultado.vehiculos;
      });
  }

  /**
   * Función para mostrar u ocultar el resumen del viaje en móvil.
   */
  toggleResumenMobile() {
    this.mostrarResumenMobile = !this.mostrarResumenMobile;
  }

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
}
