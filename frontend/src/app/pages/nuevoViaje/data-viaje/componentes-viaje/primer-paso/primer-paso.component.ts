import { ChangeDetectorRef, Component, ElementRef, HostListener, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { IonicModule, Platform } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Subject, takeUntil } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { TravelService } from '../../../../../core/travel-services/travel.service';
import { VehiculosServicesService } from '../../../../../core/vehiculos-services/vehiculos-services.service';
import { TablaVehiculosComponent } from 'src/app/components/tabla-vehiculos/vista-tabla-vehiculos/tabla-vehiculos.component';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';

registerLocaleData(localeEs);

@Component({
  selector: 'app-primer-paso',
  standalone: true,
  imports: [
    IonicModule,
    MatCardModule,
    MatDatepickerModule,
    FormsModule,
    MatTimepickerModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    TranslateModule,
    TablaVehiculosComponent,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-ES' },
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
  ],
  templateUrl: './primer-paso.component.html',
  styleUrls: ['./primer-paso.component.scss'],
})
export class PrimerPasoComponent implements OnInit {
  userData: any = { usuario: { vehiculos: [] } };
  isOpen: boolean = false;

  private destroy$ = new Subject<void>();
  private readonly _adapter = inject<DateAdapter<unknown, unknown>>(DateAdapter);
  fecha_seleccionada: string | null = null;
  hora_seleccionada: string | null = null;
  horaMinimaPermitida: Date | null = null;

  origen: string = '';
  destino: string = '';
  viajeros: string = '';
  hora_salida: string = '';
  plazas: string = '';
  cocheSeleccionado: any = null;

  isDesktop: boolean = true;

  invalid_date: boolean = false;

  reservaAutomatica: boolean = false;

  hoy: string = new Date().toISOString();

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(valor: string) {
    this.plazas = valor;
    this.isOpen = false;
    this.guardaDatosDelViajeEnServicio('plazas', valor);
  }

  // Opcional: Cerrar si el usuario hace click fuera
  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  mostrarSelectorVehiculo: boolean = false;

  constructor(
    private travelService: TravelService,
    private platform: Platform,
    private vehiculosServicesService: VehiculosServicesService,
    private router: Router,
    private elementRef: ElementRef,
    private userService: UserServicesService,
    private cdr: ChangeDetectorRef
  ) {
    this._adapter.setLocale('es-ES');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  ngOnInit() {
    const datosUsuarioLocal = JSON.parse(localStorage.getItem('userData') || '{}');

    if (datosUsuarioLocal) {
      this.userData = datosUsuarioLocal;
    }

    this.checkScreenSize();

    this.obtenerVehiculos();

    const date = new Date();
    this.fecha_seleccionada = date.toISOString();

    this.calcularHoraMinima();

    const fechaConMargen = new Date(date.getTime() + 65 * 60 * 1000);

    this.hora_seleccionada = fechaConMargen.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    this.fecha_seleccionada = date.toISOString();
    this.hora_seleccionada = date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    const viajeData = this.travelService.getViajeData();
    console.log('[PrimerPaso] Datos del viaje obtenidos al iniciar:', viajeData);
    console.log('[PrimerPaso] Coche seleccionado actualmente:', this.cocheSeleccionado);

    if (viajeData) {
      this.sumarUnDiaAFecha(viajeData.fecha_salida);
      this.hora_seleccionada = viajeData.hora_salida || this.hora_seleccionada;
      this.viajeros = viajeData.viajeros || '0';
      this.plazas = viajeData.plazas || '';
      const cocheEnServicio = viajeData.coche;
      const existeVehiculo = cocheEnServicio && this.userData?.usuario?.vehiculos?.some((v: any) => v.id === cocheEnServicio.id);

      if (existeVehiculo) {
        this.cocheSeleccionado = cocheEnServicio;
      } else {
        this.cocheSeleccionado = null;
        this.guardaDatosDelViajeEnServicio('coche', null);
      }

      this.reservaAutomatica = viajeData.reserva_automatica ?? false;
      this.calcularHoraMinima();
    }

    this.guardaDatosDelViajeEnServicio('fecha_salida', this.fecha_seleccionada);
    this.guardaDatosDelViajeEnServicio('hora_salida', this.hora_seleccionada);

    this.travelService.viajeData$.pipe(takeUntil(this.destroy$)).subscribe((viajeData) => {
      if (viajeData) {
        this.cocheSeleccionado = viajeData.coche || '';
        this.plazas = viajeData.plazas || '';
        this.fecha_seleccionada = viajeData.fecha_salida || this.fecha_seleccionada;
        this.hora_seleccionada = viajeData.hora_salida || this.hora_seleccionada;
      }
    });
  }

  ionViewWillEnter() {
    this.cargarDatosUsuarioActuales();
  }

  cargarDatosUsuarioActuales() {
    this.userService.usuario$.subscribe((usuario) => {
      if (usuario) {
        this.userData = { usuario: usuario };

        if (this.cocheSeleccionado) {
          const existe = usuario.vehiculos?.some((v: any) => v.id === this.cocheSeleccionado.id);
          if (!existe) {
            this.cocheSeleccionado = null;
          }
        }

        this.cdr.detectChanges();
      }
    });
  }

  /**
   * @param fechaDate --> string
   * Le pasamos a fechaOriginal la fechaDATE convertida en tipo DATE gracias al new Date
   * DE fechaOiriginal sacamos todo el tiempo en milisegundos con getTime y le sumamos los milisegundos que tendría un día. ESto lo seguimos
   * manteniendo en formato fecha con new Date para el siguiente paso, y le pasamos el valor a fechaMasUnDia (toISOStrging resta un día al seleccionado.)
   * @return fecha_seleccionada está como variable global y recibe el valor de fechaMasUnDia en formato string, y cortado hasta la T debido al formato
   * DATE.
   */
  sumarUnDiaAFecha(fechaDATE: string): string {
    if (!fechaDATE) {
      return '';
    }
    const fechaOriginal = new Date(fechaDATE);
    const fechaMasUnDia = new Date(fechaOriginal.getTime() + 86400000);
    return (this.fecha_seleccionada = fechaMasUnDia.toISOString().split('T')[0]);
  }

  calcularHoraMinima() {
    if (!this.fecha_seleccionada) {
      this.horaMinimaPermitida = null;
      return;
    }

    const fechaViaje = new Date(this.fecha_seleccionada).toDateString();
    const fechaHoy = new Date().toDateString();

    if (fechaViaje === fechaHoy) {
      const ahora = new Date();
      this.horaMinimaPermitida = new Date(ahora.getTime() + 60 * 60 * 1000);
    } else {
      this.horaMinimaPermitida = null;
    }
  }

  filtroHora = (time: Date | null): boolean => {
    if (!time) return true;

    if (!this.fecha_seleccionada) return true;
    const fechaViaje = new Date(this.fecha_seleccionada).toDateString();
    const fechaHoy = new Date().toDateString();
    if (fechaViaje !== fechaHoy) return true;

    const ahora = new Date();
    const limiteMinimo = new Date(ahora.getTime() + 60 * 60 * 1000);

    const horaCelda = new Date();
    horaCelda.setHours(time.getHours(), time.getMinutes(), 0, 0);

    return horaCelda >= limiteMinimo;
  };

  /**
   * Función para obtener la lista de vehículos de un usuario.   *
   */
  obtenerVehiculos() {
    const data = localStorage.getItem('userData');
    console.log('data: ', data);

    if (!data) return;

    const usuarioLocal = JSON.parse(data);
    const id = usuarioLocal.usuario?.id;

    if (id) {
      this.vehiculosServicesService.obtenerVehiculosUsuario(id).subscribe({
        next: (resultado) => {
          if (resultado && resultado.vehiculos && resultado.vehiculos.length > 0) {
            this.userData.usuario.vehiculos = [...resultado.vehiculos];

            if (!this.cocheSeleccionado) {
              this.cocheSeleccionado = resultado.vehiculos[0];
              this.guardaDatosDelViajeEnServicio('coche', this.cocheSeleccionado);
            }
          }
          usuarioLocal.usuario.vehiculos = resultado.vehiculos;
          localStorage.setItem('userData', JSON.stringify(usuarioLocal));
        },
        error: (err) => console.error('Error cargando vehículos:', err),
      });
    }
  }

  /**
   * Función para guardar los datos temporalmente en el servicio de los viajes.
   * -> Esta función recibe dos parámetros de entrada: "clave" y "valor"
   *
   * @param clave Es el nombre que va a recibir el atributo del objeto "Viaje"
   * @param valor Es el valor que va a recibir el atributo.
   * ------------------------------------------------------------------
   * -> La función mantiene los datos que hubiera guardados anteriormente
   *    en el objeto "ViajeData" y añade o modifica los nuevos.
   */
  guardaDatosDelViajeEnServicio(clave: string, valor: any) {
    const currentViajeData = this.travelService.getViajeData() || {};

    console.log('Datos del viaje a crear: ', currentViajeData);

    const viajeData = {
      ...currentViajeData,
      [clave]: valor,
    };
    this.travelService.setViajeData(viajeData);
  }

  /**
   * Función para obtener la fecha actual y darle un formato específico.
   *
   * @returns Si hay una fecha seleccionada la devuelve en el formato configurado,
   * en el caso de no tener una fecha seleccionada devuelve el string.
   */
  getFormattedDate(): string {
    if (this.fecha_seleccionada) {
      const date = new Date(this.fecha_seleccionada);
      return date.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });
    }
    return 'Ninguna fecha seleccionada.';
  }

  /**
   * Función para obtener la hora actual.
   *
   * @returns Devuelve la hora seleccionada.
   */
  getTime(): string {
    return this.hora_seleccionada ? this.hora_seleccionada : 'Ninguna hora seleccionada.';
  }

  /**
   * Función para manejar el cambio de fecha.
   * @param event -> Recibe la información del evento en el input de la selección de fecha.
   */
  onDateChange(event: any) {
    this.fecha_seleccionada = event.detail.value;
    this.guardaDatosDelViajeEnServicio('fecha_salida', this.fecha_seleccionada);

    this.calcularHoraMinima();

    if (this.hora_seleccionada) {
      this.validarHoraSeleccionadaConContexto();
    }
  }

  /**
   * Función para seleccionar la hora.
   * ---------------------------------
   * -> Recibe la información del evento en el input de la hora.
   * -> Damos un formato a la hora de 2 dígitos tanto para la hora como para los minutos.
   * -> Llamamos a la función que recibe los datos de la hora seleccionada
   *    para guardarlos en el servicio de los viajes.
   *
   * @param event -> Recibe la información del evento en el input de la selección de hora.
   */
  onTimeChange(event: any) {
    if (!event) return;

    let timeValue: Date;

    if (event instanceof Date) {
      timeValue = event;
    } else if (event.detail && event.detail.value) {
      timeValue = new Date(event.detail.value);
    } else {
      timeValue = new Date(event);
    }

    if (isNaN(timeValue.getTime())) {
      this.invalid_date = true;
      this.hora_seleccionada = '';
      this.guardaDatosDelViajeEnServicio('hora_salida', '');
      return;
    }

    const horasSeleccionadas = timeValue.getHours();
    const minutosSeleccionados = timeValue.getMinutes();

    if (this.fecha_seleccionada) {
      const fechaViaje = new Date(this.fecha_seleccionada).toDateString();
      const fechaHoy = new Date().toDateString();

      if (fechaViaje === fechaHoy) {
        const ahora = new Date();

        const horaPropuesta = new Date();
        horaPropuesta.setHours(horasSeleccionadas, minutosSeleccionados, 0, 0);

        const limiteMinimo = new Date(ahora.getTime() + 60 * 60 * 1000);

        if (horaPropuesta < limiteMinimo) {
          this.invalid_date = true;
          this.hora_seleccionada = '';
          this.guardaDatosDelViajeEnServicio('hora_salida', '');
          return;
        }
      }
    }

    this.invalid_date = false;
    const horasString = String(horasSeleccionadas).padStart(2, '0');
    const minutosString = String(minutosSeleccionados).padStart(2, '0');

    this.hora_seleccionada = `${horasString}:${minutosString}`;
    this.guardaDatosDelViajeEnServicio('hora_salida', this.hora_seleccionada);
  }

  /**
   * Función para validar la hora seleccionada con el contexto de la fecha.
   */
  private validarHoraSeleccionadaConContexto() {
    if (!this.hora_seleccionada || !this.horaMinimaPermitida) {
      this.invalid_date = false;
      return;
    }

    const [horas, minutos] = this.hora_seleccionada.split(':').map(Number);
    const propuesta = new Date();
    propuesta.setHours(horas, minutos, 0, 0);

    if (propuesta < this.horaMinimaPermitida) {
      this.invalid_date = true;
      this.hora_seleccionada = '';
      this.guardaDatosDelViajeEnServicio('hora_salida', '');
    } else {
      this.invalid_date = false;
      this.guardaDatosDelViajeEnServicio('hora_salida', this.hora_seleccionada);
    }
  }

  /**
   * Función para seleccionar el coche con el que quiere realizar el viaje.
   * @param coche --> Recibe la información del coche seleccionado.
   */
  seleccionarCoche(coche: any) {
    this.cocheSeleccionado = coche;
    this.guardaDatosDelViajeEnServicio('coche', coche);
  }

  /**
   * Función para comprobar el tamaño de la pantalla.
   */
  checkScreenSize() {
    const anchoActual = window.innerWidth;
    this.isDesktop = this.platform.is('desktop') || anchoActual > 768;
  }

  /**
   * Función para seleccionar el tipo de reserva.
   * @param esAutomatica --> Recibe la selección del tipo de reserva que hace el usuario.
   */
  seleccionarTipoReserva(esAutomatica: boolean) {
    this.reservaAutomatica = esAutomatica;
    this.guardaDatosDelViajeEnServicio('reserva_automatica', esAutomatica);
  }

  /**
   * Función para destruir el componente.
   */
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  cargarUsuarioYVehiculos() {
    const usuarioLocal = JSON.parse(localStorage.getItem('userData') || '{}');

    if (usuarioLocal?.usuario?.id) {
      this.userService.obtenerUsuarioPorID(usuarioLocal.usuario.id).subscribe((usuarioActualizado) => {
        this.userData = usuarioActualizado;
        localStorage.setItem('userData', JSON.stringify(this.userData));
        console.log('Vehículos actuales del usuario:', this.userData.usuario.vehiculos);
        console.log('Coche actualmente seleccionado:', this.cocheSeleccionado);
        if (this.cocheSeleccionado && !this.userData.usuario.vehiculos.some((v: any) => v.id === this.cocheSeleccionado.id)) {
          console.log('¡El coche seleccionado ya no existe! Limpiando...');
          this.cocheSeleccionado = null;
          this.guardaDatosDelViajeEnServicio('coche', null);
        } else if (!this.cocheSeleccionado && this.userData.usuario.vehiculos.length > 0) {
          this.cocheSeleccionado = this.userData.usuario.vehiculos[0];
          this.guardaDatosDelViajeEnServicio('coche', this.cocheSeleccionado);
        }
      });
    }
  }
  botonAnadirVehiculo() {
    this.mostrarSelectorVehiculo = !this.mostrarSelectorVehiculo;
  }
}
