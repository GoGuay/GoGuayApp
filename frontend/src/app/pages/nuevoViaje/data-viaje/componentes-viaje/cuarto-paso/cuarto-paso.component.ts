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
  min: number = 0;
  max = this.initialValue * 2;

  precioMinRecomendado = 0;
  precioMaxRecomendado = 0;

  viajeMock: any = viajeMock;

  constructor(private travelService: TravelService, private messageService: MessageService, private navCtrl: NavController) { }

  ngOnInit() {
    const viajeData = this.travelService.getViajeData();

    const distanciaKm = viajeData.ruta_seleccionada.routes[0].legs[0].distance.value / 1000;

    this.calcularLimites(distanciaKm);
    this.initialValue = this.calcularPrecioRecomendado(distanciaKm);
    this.precio = this.initialValue;
    this.max = this.initialValue * 2;

    // Rango recomendado para mostrar al usuario
    this.precioMinRecomendado = Math.round(distanciaKm * 0.03);
    this.precioMaxRecomendado = Math.round(distanciaKm * 0.12);
  }


  calcularPrecioRecomendado(
    distanciaKm: number,
    consumo: number = 6,
    precioGasolina: number = 1.55,
    plazas: number = 3
  ) {
    // 1. Coste total del viaje
    const costeViaje = (distanciaKm / 100) * consumo * precioGasolina;

    // 2. Coste por pasajero
    let precio = costeViaje / plazas;

    // 3. Margen tipo BlaBlaCar
    precio *= 1.15;

    // 4. Límites basados en distancia
    const minimo = distanciaKm * 0.03;
    const maximo = distanciaKm * 0.12;

    // 5. Clamp
    precio = Math.max(minimo, Math.min(maximo, precio));

    // 6. Redondeo
    return Math.round(precio);
  }

  calcularLimites(distanciaKm: number) {
    this.min = distanciaKm * 0.03;
    this.max = distanciaKm * 0.12;
  }

  onCuartoPasoBack() {
    this.tercer_paso = true;
    this.cuarto_paso = false;
  }

  onCuartoPasoComplete() {
    const errores: string[] = [];
    const viajeData = this.travelService.getViajeData();

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
      return;
    }

    let horaEnRutaSeleccionada = viajeData.ruta_seleccionada?.routes?.[0].legs?.[0]?.duration?.text
    let hora_llegada = this.calcularHoraLlegada(viajeData.hora_salida, horaEnRutaSeleccionada);

    const viajeDataFinal = {
      ...viajeData,
      precio_viaje: this.precio,
      hora_llegada
    };

    this.travelService.setViajeData(viajeDataFinal);

    localStorage.setItem('viajeData', JSON.stringify(viajeDataFinal));
    this.navCtrl.navigateRoot(['/resumen-viaje']);
  }


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
      return null;
    }
  }


  sumarCantidad() {
    if (this.precio < this.max) {
      this.precio++;
    }

    if (this.precio >= this.max) {
      this.messageService.add({
        severity: 'error',
        summary: 'Precio demasiado alto',
        detail: `El precio máximo razonable para este viaje es de ${Math.round(this.max)}€.`,
        life: 3000
      });
    }
  }

  restarCantidad() {
    if (this.precio > this.min) {
      this.precio--;
    }

    if (this.precio <= this.min) {
      this.messageService.add({
        severity: 'error',
        summary: 'Precio demasiado bajo',
        detail: `El precio mínimo recomendado para este viaje es de ${Math.round(this.min)}€.`,
        life: 3000
      });
    }
  }
  getprecioColor(): string {
    const ratio = this.precio / this.max;

    if (ratio <= 0.33) return '#3498db';
    if (ratio <= 0.66) return '#AAD1A7';
    return '#e74c3c';
  }

  ayudaPrecio() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Precio por plaza',
      detail: `Selecciona un precio justo para tu viaje. Los precios razonables atraen más pasajeros.`,
      life: 3000
    });
  }
}
