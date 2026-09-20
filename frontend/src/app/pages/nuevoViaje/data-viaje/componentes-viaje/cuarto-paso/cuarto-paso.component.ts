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

    // Estimación justa basada en datos reales de combustible en España (aprox. 1.55€/L y consumo de 6.5L/100km)
    const consumoMedio = 6.5; 
    const precioCombustible = 1.55; 

    this.calcularLimites(distanciaKm, consumoMedio, precioCombustible, numPlazas);
    this.precio = this.calcularPrecioRecomendado(distanciaKm, consumoMedio, precioCombustible, numPlazas);

    this.precioMinRecomendado = Math.round(this.min);
    this.precioMaxRecomendado = Math.round(this.max);
  }

  /**
   * Calcula el precio recomendado justo por plaza compartido entre los pasajeros y el conductor
   */
  calcularPrecioRecomendado(distanciaKm: number, consumo: number, precioCombustible: number, plazas: number): number {
    // Coste total del combustible del viaje
    const costeViajeCombustible = (distanciaKm / 100) * consumo * precioCombustible;
    
    // Se divide el coste entre el número de plazas + el conductor (o ajuste equitativo) y se añade un factor de desgaste base
    const plazasTotales = plazas > 0 ? plazas : 3;
    const costePorPlaza = costeViajeCombustible / plazasTotales;

    // Añadimos un pequeño margen justo (15%) para mantenimiento y peajes/desgaste general
    let precioSugerido = costePorPlaza * 1.15;
    
    precioSugerido = Math.max(this.min, Math.min(this.max, precioSugerido));
    return Math.round(precioSugerido) || 5;
  }

  /**
   * Calcula los límites inferior y superior recomendados basados en la distancia y el combustible
   */
  calcularLimites(distanciaKm: number, consumo: number, precioCombustible: number, plazas: number) {
    const costeViaje = (distanciaKm / 100) * consumo * precioCombustible;
    const plazasTotales = plazas > 0 ? plazas : 3;

    // El mínimo cubre una parte proporcional justa del combustible
    this.min = Math.max(2, Math.round((costeViaje / plazasTotales) * 0.6));
    // El máximo cubre el combustible y una estimación justa de desgaste sin abusar
    this.max = Math.max(this.min + 2, Math.round((costeViaje / plazasTotales) * 1.5));
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
   * Lanza mensajes informativos si el precio se sale de los umbrales justos recomendados
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
        detail: `Estás por debajo del mínimo recomendado (${this.min}€). ¡Un viaje muy económico para los pasajeros!`,
        life: 2500
      });
    }
  }

  /**
   * Devuelve el color del precio según su valor con respecto al rango recomendado
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
   * Maneja la finalización del cuarto paso guardando el precio final
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
    return true; 
  }

  /**
   * Calcula la hora de llegada estimada
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
   * Muestra ayuda detallada sobre el cálculo del precio justo
   */
  ayudaPrecio() {
    this.messageService.add({
      key: 'precioToast',
      severity: 'info',
      summary: '¿Cómo calculamos el precio?',
      detail: 'Se calcula estimando el consumo medio de combustible en función de los kilómetros de la ruta y dividiéndolo equitativamente entre las plazas disponibles, añadiendo un pequeño margen justo para el mantenimiento.',
      life: 6000
    });
  }
}