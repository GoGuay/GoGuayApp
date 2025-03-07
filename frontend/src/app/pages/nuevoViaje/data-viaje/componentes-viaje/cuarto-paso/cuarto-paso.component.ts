import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TravelService } from 'src/app/core/travel-services/travel.service';

@Component({
  selector: 'app-cuarto-paso',
  standalone: true,
  imports: [MatButtonModule, FormsModule],
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
    console.log('Resumen del viaje: ', this.travelService.getViajeData());
  
    // Verificar si el precio es válido
    if (!this.precio || this.precio <= 0) {
      this.messageService.add({
        severity: 'error',
        summary: 'Precio no válido',
        detail: 'Por favor, introduce un precio válido para el viaje.',
        life: 3000
      });
      return;
    }
  
    // Verificar que los datos del viaje sean completos
    const viajeData = this.travelService.getViajeData();
    if (!viajeData || !viajeData.origen || !viajeData.destino) {
      this.messageService.add({
        severity: 'error',
        summary: 'Datos incompletos',
        detail: 'Por favor, asegúrate de que los datos del viaje estén completos.',
        life: 3000
      });
      return;
    }
  
    // Agregar el precio al objeto viajeData
    const viajeDataConPrecio = {
      ...viajeData,
      precio_viaje: this.precio,
    };
    
    // Guardar los datos en el TravelService
    this.travelService.setViajeData(viajeDataConPrecio);
    console.log('Datos guardados en TravelService:', this.travelService.getViajeData());
  
    // Almacenar los datos en localStorage (si es necesario)
    localStorage.setItem('viajeData', JSON.stringify(viajeDataConPrecio));
  
    // Navegar a la página de resumen
    this.router.navigate(['/resumen-viaje']);
    this.tercer_paso = false;
  }
  
}
