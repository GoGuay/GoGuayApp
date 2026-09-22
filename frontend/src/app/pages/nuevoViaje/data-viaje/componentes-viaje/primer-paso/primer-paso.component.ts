import { ChangeDetectorRef, Component, ElementRef, HostListener, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { IonicModule, Platform } from '@ionic/angular';
import { FormControl, FormsModule } from '@angular/forms';
import { LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Subject, takeUntil } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { TravelService } from '../../../../../core/travel-services/travel.service';
import { VehiculosServicesService } from '../../../../../core/vehiculos-services/vehiculos-services.service';
import { TablaVehiculosComponent } from 'src/app/components/tabla-vehiculos/vista-tabla-vehiculos/tabla-vehiculos.component';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { SelectorGeneralComponent } from 'src/app/components/selector-general/selector-general.component';

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
    SelectorGeneralComponent,
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
  hora_seleccionada: Date | null = null;
  horaMinimaPermitida: Date | null = null;

  origen: string = '';
  destino: string = '';
  viajeros: string = '';
  hora_salida: string = '';
  plazas: string = '';
  cocheSeleccionado: any = null;
  horaAlarma = new FormControl('07:00 AM');

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

  opcionesPlazas = [
    { id: '1', descripcion: '1' },
    { id: '2', descripcion: '2' },
    { id: '3', descripcion: '3' },
    { id: '4', descripcion: '4' },
  ];

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

    const viajeData = this.travelService.getViajeData() || {};

    if (viajeData.fecha_salida) {
      this.fecha_seleccionada = viajeData.fecha_salida;
    } else {
      this.fecha_seleccionada = new Date().toISOString();
      this.guardaDatosDelViajeEnServicio('fecha_salida', this.fecha_seleccionada);
    }

    this.calcularHoraMinima();

    if (viajeData.hora_salida && typeof viajeData.hora_salida === 'string' && viajeData.hora_salida.includes(':')) {
      const [horas, minutos] = viajeData.hora_salida.split(':');
      const hDate = new Date();
      hDate.setHours(Number(horas), Number(minutos), 0, 0);
      this.hora_seleccionada = hDate;
    } else {
      const horaBase = new Date();
      horaBase.setTime(horaBase.getTime() + 60 * 60 * 1000);
      this.hora_seleccionada = horaBase;
      
      const horasStr = String(horaBase.getHours()).padStart(2, '0');
      const minutosStr = String(horaBase.getMinutes()).padStart(2, '0');
      this.guardaDatosDelViajeEnServicio('hora_salida', `${horasStr}:${minutosStr}`);
    }

    if (viajeData.plazas) {
      this.plazas = viajeData.plazas;
    }

    this.reservaAutomatica = viajeData.reserva_automatica ?? false;
    this.cocheSeleccionado = viajeData.coche || null;

    this.travelService.viajeData$.pipe(takeUntil(this.destroy$)).subscribe((viajeActualizado) => {
      if (viajeActualizado) {
        if (viajeActualizado.plazas !== undefined && viajeActualizado.plazas !== this.plazas) {
          this.plazas = viajeActualizado.plazas;
        }

        if (viajeActualizado.fecha_salida && viajeActualizado.fecha_salida !== this.fecha_seleccionada) {
          this.fecha_seleccionada = viajeActualizado.fecha_salida;
          this.calcularHoraMinima();
        }

        this.cdr.detectChanges();
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

  obtenerVehiculos() {
    const data = localStorage.getItem('userData');
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

  guardaDatosDelViajeEnServicio(clave: string, valor: any) {
    const currentViajeData = this.travelService.getViajeData() || {};
    const viajeData = {
      ...currentViajeData,
      [clave]: valor,
    };
    this.travelService.setViajeData(viajeData);
  }

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

  getTime(): string {
    if (!this.hora_seleccionada || isNaN(new Date(this.hora_seleccionada).getTime())) {
      return 'Ninguna hora seleccionada.';
    }
    const fecha = new Date(this.hora_seleccionada);
    return fecha.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  }

  onDateChange(event: any) {
    if (event && event.detail && event.detail.value) {
      this.fecha_seleccionada = event.detail.value;
    } else if (typeof event === 'string') {
      this.fecha_seleccionada = event;
    } else if (event instanceof Date) {
      this.fecha_seleccionada = event.toISOString();
    }
    this.guardaDatosDelViajeEnServicio('fecha_salida', this.fecha_seleccionada);
    this.calcularHoraMinima();

    const fechaViaje = this.fecha_seleccionada ? new Date(this.fecha_seleccionada).toDateString() : '';
    const fechaHoy = new Date().toDateString();

    if (fechaViaje === fechaHoy) {
      this.establecerHoraSegunFecha();
    } else {
      if (this.hora_seleccionada && this.horaMinimaPermitida) {
        const horas = this.hora_seleccionada.getHours();
        const minutos = this.hora_seleccionada.getMinutes();
        const propuesta = new Date();
        propuesta.setHours(horas, minutos, 0, 0);

        if (propuesta < this.horaMinimaPermitida) {
          this.establecerHoraSegunFecha();
        } else {
          this.validarHoraSeleccionadaConContexto();
        }
      } else {
        this.establecerHoraSegunFecha();
      }
    }
    this.cdr.detectChanges();
  }

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
      this.hora_seleccionada = null;
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
          this.hora_seleccionada = null;
          this.guardaDatosDelViajeEnServicio('hora_salida', '');
          return;
        }
      }
    }
    this.invalid_date = false;
    const horasString = String(horasSeleccionadas).padStart(2, '0');
    const minutosString = String(minutosSeleccionados).padStart(2, '0');

    const nuevaHoraDate = new Date();
    nuevaHoraDate.setHours(Number(horasString), Number(minutosString), 0, 0);
    this.hora_seleccionada = nuevaHoraDate;
    const horaFormateada = `${horasString}:${minutosString}`;
    this.guardaDatosDelViajeEnServicio('hora_salida', horaFormateada);
  }

  establecerHoraSegunFecha() {
    if (!this.fecha_seleccionada) return;

    const fechaViaje = new Date(this.fecha_seleccionada).toDateString();
    const fechaHoy = new Date().toDateString();
    const horaBase = new Date();

    if (fechaViaje === fechaHoy) {
      horaBase.setTime(horaBase.getTime() + 60 * 60 * 1000);
    } else {
      horaBase.setHours(8, 0, 0, 0);
    }
    this.hora_seleccionada = horaBase;
    this.invalid_date = false;
    this.calcularHoraMinima();

    const horasStr = String(horaBase.getHours()).padStart(2, '0');
    const minutosStr = String(horaBase.getMinutes()).padStart(2, '0');

    const actual = this.travelService.getViajeData()?.hora_salida;
    const nuevoFormato = `${horasStr}:${minutosStr}`;
    if (actual !== nuevoFormato) {
      this.guardaDatosDelViajeEnServicio('hora_salida', nuevoFormato);
    }
  }

  private validarHoraSeleccionadaConContexto() {
    if (!this.hora_seleccionada || !this.horaMinimaPermitida) {
      this.invalid_date = false;
      return;
    }

    const horas = this.hora_seleccionada.getHours();
    const minutos = this.hora_seleccionada.getMinutes();
    const propuesta = new Date();
    propuesta.setHours(horas, minutos, 0, 0);

    if (propuesta < this.horaMinimaPermitida) {
      this.invalid_date = true;
      this.hora_seleccionada = null;
      this.guardaDatosDelViajeEnServicio('hora_salida', '');
    } else {
      this.invalid_date = false;
      const horasStr = String(horas).padStart(2, '0');
      const minutosStr = String(minutos).padStart(2, '0');
      const horaFormateada = `${horasStr}:${minutosStr}`;
      this.guardaDatosDelViajeEnServicio('hora_salida', this.hora_seleccionada);
    }
  }

  seleccionarCoche(coche: any) {
    this.cocheSeleccionado = coche;
    this.guardaDatosDelViajeEnServicio('coche', coche);
  }

  checkScreenSize() {
    const anchoActual = window.innerWidth;
    this.isDesktop = this.platform.is('desktop') || anchoActual > 768;
  }

  seleccionarTipoReserva(esAutomatica: boolean) {
    this.reservaAutomatica = esAutomatica;
    this.guardaDatosDelViajeEnServicio('reserva_automatica', esAutomatica);
  }

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

        if (this.cocheSeleccionado && !this.userData.usuario.vehiculos.some((v: any) => v.id === this.cocheSeleccionado.id)) {
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

  /**
   * Captura la selección de plazas del selector general.
   */
  seleccionarPlazas(opcion: any) {
    let nuevaPlaza = '';

    if (opcion !== null && opcion !== undefined) {
      if (typeof opcion === 'object') {
        nuevaPlaza = opcion.valor || opcion.descripcion || opcion.id || String(opcion);
      } else {
        nuevaPlaza = String(opcion);
      }
    }

    this.plazas = nuevaPlaza;

    const currentViajeData = this.travelService.getViajeData() || {};
    const viajeData = {
      ...currentViajeData,
      plazas: nuevaPlaza
    };

    this.travelService.setViajeData(viajeData);
    this.cdr.detectChanges();
  }
}
