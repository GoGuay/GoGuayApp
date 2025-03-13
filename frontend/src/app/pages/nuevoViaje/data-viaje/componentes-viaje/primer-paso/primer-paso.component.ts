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
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';
import { Usuario } from 'src/app/models/user/usuario.model';

registerLocaleData(localeEs);

@Component({
  selector: 'app-primer-paso',
  standalone: true,
  imports: [IonicModule,
    MatIcon,
    MatCardModule,
    MatDatepickerModule,
    FormsModule,
    MatTimepickerModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
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

  private readonly _adapter = inject<DateAdapter<unknown, unknown>>(DateAdapter);;
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

  constructor(private travelService: TravelService, private platform: Platform, private funcionesComunes: FuncionesComunes) {
    this._adapter.setLocale('es-ES');
  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.isMobileWeb = this.platform.is('mobileweb');
    this.isDesktop = this.platform.is('desktop');

    const date = new Date();
    this.fecha_seleccionada = date.toISOString();
    this.hora_seleccionada = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    this.fecha_seleccionada = date.toISOString();
    this.hora_seleccionada = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const viajeData = this.travelService.getViajeData();

    if (viajeData) {
      this.fecha_seleccionada = viajeData.fecha_salida || this.fecha_seleccionada;
      this.hora_seleccionada = viajeData.hora_salida || this.hora_seleccionada;
      this.viajeros = viajeData.viajeros || '0';
      this.plazas = viajeData.plazas || '';
      this.cocheSeleccionado = viajeData.coche || '';
    }

    this.guardaDatosDelViajeEnServicio('fecha_salida', this.fecha_seleccionada);
    this.guardaDatosDelViajeEnServicio('hora_salida', this.hora_seleccionada);
    
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
      return date.toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' });
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
      this.hora_seleccionada = timeValue.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    this.guardaDatosDelViajeEnServicio('hora_salida', this.hora_seleccionada);
  }


}
