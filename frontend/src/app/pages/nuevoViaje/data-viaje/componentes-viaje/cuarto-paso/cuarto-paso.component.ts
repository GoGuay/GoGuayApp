import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipModule } from '@angular/material/tooltip';
import { TravelService } from '../../../../../core/travel-services/travel.service';

@Component({
  selector: 'app-cuarto-paso',
  standalone: true,
  imports: [MatButtonModule, FormsModule, MatTooltipModule, CommonModule, ToastModule],
  providers: [
    {
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
      useValue: {
        showDelay: 400,
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

  precio = 5;
  
  min: number = 0;
  max: number = 0;

  precioMinRecomendado = 0;
  precioMaxRecomendado = 0;

  constructor(
    private travelService: TravelService, 
    private messageService: MessageService, 
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    const viajeData = this.travelService.getViajeData();

    if (!viajeData?.ruta_seleccionada?.routes?.[0]?.legs?.[0]) {
      this.navCtrl.navigateRoot(['/nuevo-viaje']);
      return;
    }

    const leg = viajeData.ruta_seleccionada.routes[0].legs[0];
    const distanciaKm = leg.distance.value / 1000;
    const numPlazas = Number(viajeData.plazas) || 3;

    this.calcularLimites(distanciaKm);
    this.precio = this.calcularPrecioRecomendado(distanciaKm, 6, 1.55, numPlazas);

    this.precioMinRecomendado = Math.round(this.min);
    this.precioMaxRecomendado = Math.round(this.max);
  }

  /**
   * Calcula el precio recomendado basado en la distancia, consumo y número de plazas
   */
  calcularPrecioRecomendado(distanciaKm: number, consumo: number, precioGasolina: number, plazas: number): number {
    const costeViaje = (distanciaKm / 100) * consumo * precioGasolina;
    let precioSugerido = (costeViaje / plazas) * 1.15;
    
    precioSugerido = Math.max(this.min, Math.min(this.max, precioSugerido));
    return Math.round(precioSugerido) || 5;
  }

  /**
   * Calcula los límites del precio basados en la distancia
   */
  calcularLimites(distanciaKm: number) {
    this.min = Math.max(2, Math.round(distanciaKm * 0.04));
    this.max = Math.round(distanciaKm * 0.14);
  }

  /**
   * Suma una unidad al precio
   */
  sumarCantidad() {
    if (this.precio < 99) { 
      this.precio++;
      this.comprobarUmbralesPrecio();
    }
  }

  /**
   * Resta una unidad al precio
   */
  restarCantidad() {
    if (this.precio > 1) { 
      this.precio--;
      this.comprobarUmbralesPrecio();
    }
  }

  /**
   * Lanza mensajes de aviso sin bloquear la interacción si el precio es muy elevado o muy bajo
   */
  private comprobarUmbralesPrecio() {
    if (this.precio > this.max) {
      this.messageService.add({
        key: 'precioToast',
        severity: 'warn',
        summary: 'Precio elevado',
        detail: `Has superado el precio recomendado (${this.max}€). Podría costarte encontrar pasajeros.`,
        life: 2500
      });
    } else if (this.precio < this.min) {
      this.messageService.add({
        key: 'precioToast',
        severity: 'info',
        summary: 'Precio económico',
        detail: `Estás por debajo del mínimo recomendado (${this.min}€). ¡Un chollo para los pasajeros!`,
        life: 2500
      });
    }
  }

  /**
   * Devuelve el color del precio según su valor
   */
  getprecioColor(): string {
    if (this.precio < this.min) {
      return '#3498db'; 
    } else if (this.precio <= this.max) {
      return '#e0a667'; 
    } else {
      return '#eb445a'; 
    }
  }

  /**
   * Maneja la finalización del cuarto paso
   */
  onCuartoPasoComplete(): boolean {
    const viajeData = this.travelService.getViajeData();
    const durationText = viajeData?.ruta_seleccionada?.routes?.[0]?.legs?.[0]?.duration?.text;

    if (!viajeData?.hora_salida || !durationText) {
      this.messageService.add({
        key: 'precioToast',
        severity: 'error',
        summary: 'Error de sincronización',
        detail: 'Faltan parámetros del itinerario. Regresa al paso anterior.',
        life: 3000
      });
      return false;
    }

    const hora_llegada = this.calcularHoraLlegada(viajeData.hora_salida, durationText);

    const viajeDataFinal = {
      ...viajeData,
      precio_viaje: this.precio,
      hora_llegada
    };

    this.travelService.setViajeData(viajeDataFinal);
    console.log('Precio inyectado con éxito en el servicio:', viajeDataFinal);
    
    return true; 
  }

  /**
   * Calcula la hora de llegada basada en la hora de salida y la duración del viaje
   */
  calcularHoraLlegada(hora_salida: string, duracion_viaje: string): string | null {
    try {
      let [horasSalida, minutosSalida] = hora_salida.split(':').map(Number);
      let salidaDate = new Date();
      salidaDate.setHours(horasSalida, minutosSalida, 0, 0);

      let totalMinutosDuracion = 0;

      const horasMatch = duracion_viaje.match(/(\d+)\s*h/);
      const minutosMatch = duracion_viaje.match(/(\d+)\s*min/);

      if (horasMatch) totalMinutosDuracion += Number(horasMatch[1]) * 60;
      if (minutosMatch) totalMinutosDuracion += Number(minutosMatch[1]);

      let llegadaDate = new Date(salidaDate.getTime() + totalMinutosDuracion * 60 * 1000);

      return llegadaDate.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch (error) {
      console.error('Error calculando hora de llegada:', error);
      return null;
    }
  }

  /**
   * Muestra información de ayuda sobre la estrategia de precios
   */
  ayudaPrecio() {
    this.messageService.add({
      key: 'precioToast',
      severity: 'info',
      summary: 'Estrategia de precios',
      detail: 'El precio se calcula según la distancia del trayecto y el coste medio de combustible dividido entre las plazas.',
      life: 5000
    });
  }
}