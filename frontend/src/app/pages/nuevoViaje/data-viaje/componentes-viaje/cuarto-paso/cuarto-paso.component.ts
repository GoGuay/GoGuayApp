import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipModule } from '@angular/material/tooltip';
import { NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';

import viajeMock from '../../../../../../assets/mocks/viaje.mock.json'

@Component({
  selector: 'app-cuarto-paso',
  standalone: true,
  imports: [MatButtonModule, FormsModule, MatIcon, MatTooltipModule, CommonModule, ToastModule],
  providers: [
    {
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
      useValue: {
        showDelay: 500,
        hideDelay: 200,
        touchGestures: 'auto',
        position: 'below'
      }
    }
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './cuarto-paso.component.html',
  styleUrls: ['./cuarto-paso.component.scss'],
})
export class CuartoPasoComponent implements OnInit {

  tercer_paso: boolean = false;
  cuarto_paso: boolean = false;
  initialValue = 5;
  precio = this.initialValue;
  max = this.initialValue * 2;

  viajeMock: any = viajeMock;

  constructor(private travelService: TravelService, private messageService: MessageService, private navCtrl: NavController) { }

  ngOnInit() { }

  onCuartoPasoBack() {
    this.tercer_paso = true;
    this.cuarto_paso = false;
  }

  onCuartoPasoComplete() {
    const errores: string[] = [];
    const viajeData = this.travelService.getViajeData();
    // const viajeData = this.viajeMock;
    console.log('VIAJE MOCK: ', this.viajeMock);
    console.log('VIAJE: ', viajeData);

    
    if (!viajeData) {
      errores.push('viajeData');
    } else {
      if (!viajeData.origen) errores.push('No hay un lugar de origen seleccionado');
      if (!viajeData.destino) errores.push('No hay un lugar de destino seleccionado');
      if (!viajeData.hora_salida) errores.push('No hay una hora de salida seleccionada');
      if (!viajeData.ruta_seleccionada?.routes?.[0].legs?.[0]?.duration?.text) {
        errores.push('No hay una ruta seleccionada.');
      }
    }

    if (errores.length > 0) {
      this.messageService.add({
        severity: 'error',
        summary: 'Datos incompletos',
        detail: `Faltan los siguientes datos del viaje: ${errores.join(', ')}`,
        life: 3000
      });
      console.error('Error: Campos incompletos en viajeData →', errores, viajeData);
      return;
    }

    let horaEnRutaSeleccionada = viajeData.ruta_seleccionada?.routes?.[0].legs?.[0]?.duration?.text
    let hora_llegada = this.calcularHoraLlegada(viajeData.hora_salida, horaEnRutaSeleccionada);

    if (!hora_llegada) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error al calcular la hora de llegada',
        detail: 'Por favor, revisa la hora de salida y la duración del viaje.',
        life: 3000
      });
      return;
    }

    const viajeDataFinal = {
      ...viajeData,
      precio_viaje: this.precio,
      hora_llegada
    };

    this.travelService.setViajeData(viajeDataFinal);

    localStorage.setItem('viajeData', JSON.stringify(viajeDataFinal));
    this.navCtrl.navigateRoot(['/resumen-viaje']).then(success => {
      if (!success) {
        console.error('Error en la navegación a /resumen-viaje');
      }
    });

    this.tercer_paso = false;
  }

  /**
   * Función para calcular la hora de llegada
   * @param hora_salida string en formato "HH:mm"
   * @param duracion_viaje string en formato "Xh Ym"
   * @returns string en formato "HH:mm"
   */
  calcularHoraLlegada(hora_salida: string, duracion_viaje: string): string | null {
    try {
      let [horasSalida, minutosSalida] = hora_salida.split(':').map(Number);
      let salidaDate = new Date();
      salidaDate.setHours(horasSalida, minutosSalida, 0);

      let duracionHoras = 0;
      let duracionMinutos = 0;

      const duracionMatch = duracion_viaje.match(/(\d+)h\s*(\d+)?min?/);
      if (duracionMatch) {
        duracionHoras = Number(duracionMatch[1]) || 0;
        duracionMinutos = Number(duracionMatch[2]) || 0;
      }

      let llegadaDate = new Date(salidaDate);
      llegadaDate.setHours(llegadaDate.getHours() + duracionHoras);
      llegadaDate.setMinutes(llegadaDate.getMinutes() + duracionMinutos);

      return llegadaDate.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch (error) {
      console.error('Error al calcular hora de llegada:', error);
      return null;
    }
  }

  /**
   * Función para sumar a la cantidad del precio de la plaza del viaje.
   * 
   */
  sumarCantidad() {
    if (this.precio < this.max) {
      this.precio++;
    } 
    
    if (this.precio >= this.initialValue * 2){
      this.messageService.add({
        severity: 'error',
        summary: '¡Algo anda mal!',
        detail: `Por favor, intenta no abusar del precio.`,
        life: 3000
      });
    }
  }

  /**
   * Función para restar a la cantidad del precio de la plaza. 
   * 
   */
  restarCantidad() {
    if (this.precio > 3) {
      this.precio--;
    }

    if(this.precio <= 3){
      this.messageService.add({
        severity: 'error',
        summary: '¡Algo anda mal!',
        detail: `Por favor, intenta ajustar el precio de la plaza.`,
        life: 3000
      });
    }
  }

  /**
   * Función para obtener el precio de la plaza
   * Esta función modifica el color que se muestra en el precio.
   * 
   * @returns Devuelve el color que corresponde.
   */
  getprecioColor(): string {
    const ratio = this.precio / this.max;

    if (ratio <= 0.33) {
      return '#3498db'; // azul
    } else if (ratio <= 0.66) {
      return '#AAD1A7'; // verde
    } else {
      return '#e74c3c'; // rojo
    }
  }

  /**
   * Función para mostrar un mensaje emergente de ayuda al usuario.
   */
  ayudaPrecio(){
    this.messageService.add({
      severity: 'warn',
      summary: '¡Selección de precio por plaza!',
      detail: `Selecciona un precio justo para la plaza libre en tu viaje. Intenta no sobrepasarte en el precio para que sea más fácil encontrar acompañantes para tu viaje.`,
      life: 3000
    });
  }
}
