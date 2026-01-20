import { Component, HostListener, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIcon } from '@angular/material/icon';
import { IonicModule, Platform } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Usuario } from 'src/app/models/user/usuario.model';
import { VehiculosServicesService } from 'src/app/core/vehiculos-services/vehiculos-services.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

registerLocaleData(localeEs);

@Component({
  selector: 'app-primer-paso',
  standalone: true,
  imports: [
    IonicModule,
    MatIcon,
    MatCardModule,
    MatDatepickerModule,
    FormsModule,
    MatTimepickerModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-ES' },
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
  ],
  templateUrl: './primer-paso.component.html',
  styleUrls: ['./primer-paso.component.scss'],
})
export class PrimerPasoComponent implements OnInit {
  userData: Usuario = {} as Usuario;

  private readonly _adapter = inject<DateAdapter<unknown, unknown>>(DateAdapter);
  fecha_seleccionada: string | null = null;
  hora_seleccionada: string | null = null;

  origen: string = '';
  destino: string = '';
  viajeros: string = '';
  hora_salida: string = '';
  plazas: string = '';
  cocheSeleccionado: string = '';

  isMobileWeb: boolean = false;
  isDesktop: boolean = true;

  invalid_date: boolean = false;

  hoy: string = new Date().toISOString();

  constructor(
    private travelService: TravelService,
    private platform: Platform,
    private vehiculosServicesService: VehiculosServicesService,
    private router: Router,
  ) {
    this._adapter.setLocale('es-ES');
    this.obtenerVehiculos();
  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.isMobileWeb = this.platform.is('mobileweb');
    this.isDesktop = this.platform.is('desktop');

    console.log('MOBILE: ', this.isMobileWeb);
    console.log('DESKTOP: ', this.isDesktop);

    const date = new Date();
    this.fecha_seleccionada = date.toISOString();
    this.hora_seleccionada = date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    this.fecha_seleccionada = date.toISOString();
    this.hora_seleccionada = date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    const viajeData = this.travelService.getViajeData();

    if (viajeData) {
      this.sumarUnDiaAFecha(viajeData.fecha_salida);
      this.hora_seleccionada = viajeData.hora_salida || this.hora_seleccionada;
      this.viajeros = viajeData.viajeros || '0';
      this.plazas = viajeData.plazas || '';
      this.cocheSeleccionado = viajeData.coche || '';
    }

    this.guardaDatosDelViajeEnServicio('fecha_salida', this.fecha_seleccionada);
    this.guardaDatosDelViajeEnServicio('hora_salida', this.hora_seleccionada);
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
    if(!fechaDATE) {
      return '';
    }
    const fechaOriginal = new Date(fechaDATE);
    const fechaMasUnDia = new Date(fechaOriginal.getTime() + 86400000);
    return (this.fecha_seleccionada = fechaMasUnDia.toISOString().split('T')[0]);
  }

  /**
   * Función para obtener la lista de vehículos de un usuario.   *
   */
  obtenerVehiculos() {
    const usuario = JSON.parse(localStorage.getItem('userData') || '{}');
    this.vehiculosServicesService.obtenerVehiculosUsuario(usuario.usuario.id).subscribe((resultado) => {
      console.log('Vehículos: ', resultado.vehiculos);
      this.userData.usuario.vehiculos = resultado.vehiculos;
    });
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

  onDateChange(event: any) {
    this.fecha_seleccionada = event.detail.value;
    this.guardaDatosDelViajeEnServicio('fecha_salida', this.fecha_seleccionada);
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
    let timeValue: Date;

    if (this.isDesktop) {
      timeValue = new Date(event);
    } else {
      timeValue = new Date(event.detail.value);
    }

    if (isNaN(timeValue.getTime())) {
      this.invalid_date = true;
      this.hora_seleccionada = '';
    } else {
      this.invalid_date = false;
      this.hora_seleccionada = timeValue.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
    }

    this.guardaDatosDelViajeEnServicio('hora_salida', this.hora_seleccionada);
  }

  mostrarColorCoche(color: string): string {
    const blanco: string = '../../../../../../assets/ColoresCoches/Blanco.png';
    const negro: string = '../../../../../../assets/ColoresCoches/Negro.png';
    const rojo: string = '../../../../../../assets/ColoresCoches/Rojo.png';
    const amarillo: string = '../../../../../../assets/ColoresCoches/Amarillo.png';
    const verde: string = '../../../../../../assets/ColoresCoches/Verde.png';
    const gris: string = '../../../../../../assets/ColoresCoches/Gris.png';
    const dorado: string = '../../../../../../assets/ColoresCoches/Dorado.png';
    const marron: string = '../../../../../../assets/ColoresCoches/Marrón.png';
    const morado: string = '../../../../../../assets/ColoresCoches/Morado.png';
    const beige: string = '../../../../../../assets/ColoresCoches/Beige.png';
    const perla: string = '../../../../../../assets/ColoresCoches/Perla.png';
    const otro: string = '../../../../../../assets/ColoresCoches/Otros.png';

    switch (color) {
      case 'blanco':
        return blanco;
      case 'negro':
        return negro;
      case 'rojo':
        return rojo;
      case 'amarillo':
        return amarillo;
      case 'verde':
        return verde;
      case 'gris':
        return gris;
      case 'dorado':
        return dorado;
      case 'marron':
        return marron;
      case 'morado':
        return morado;
      case 'beige':
        return beige;
      case 'perla':
        return perla;
      case 'otro':
        return otro;
      default:
        return '';
    }
  }

  seleccionarCoche(coche: any) {
    this.cocheSeleccionado = coche;
    this.guardaDatosDelViajeEnServicio('coche', coche);
  }

  irARegistrarVehiculo() {
    this.router.navigate(['/mi-perfil']);
  }
}
