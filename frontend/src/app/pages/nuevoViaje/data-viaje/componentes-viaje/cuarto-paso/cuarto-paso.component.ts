import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-cuarto-paso',
  standalone: true,
  imports: [MatButtonModule, FormsModule, MatIcon, MatTooltipModule],
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

  precio: number | null = null;
  tercer_paso: boolean = false;
  cuarto_paso: boolean = false;

  constructor(private travelService: TravelService, private messageService: MessageService, private router: Router) { }

  ngOnInit() { }

  onCuartoPasoBack() {
    this.tercer_paso = true;
    this.cuarto_paso = false;
  }

  onCuartoPasoComplete() {
    console.log('Precio ingresado:', this.precio);
    console.log('Resumen del viaje antes de actualizar:', this.travelService.getViajeData());

    if (!this.precio || this.precio <= 0) {
      this.messageService.add({
        severity: 'error',
        summary: 'Precio no válido',
        detail: 'Por favor, introduce un precio válido para el viaje.',
        life: 3000
      });
      return;
    }

    const viajeData = this.travelService.getViajeData();
    if (!viajeData || !viajeData.origen || !viajeData.destino || !viajeData.hora_salida || !viajeData.ruta_seleccionada?.duracion) {
      this.messageService.add({
        severity: 'error',
        summary: 'Datos incompletos',
        detail: 'Por favor, asegúrate de que los datos del viaje estén completos.',
        life: 3000
      });
      console.error('Error: Faltan datos en viajeData', viajeData);
      return;
    }

    let hora_llegada = this.calcularHoraLlegada(viajeData.hora_salida, viajeData.ruta_seleccionada.duracion);

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

    this.router.navigate(['/resumen-viaje']).then(success => {
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
}
