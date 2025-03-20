import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule, NavController } from '@ionic/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { eye, lockClosed } from 'ionicons/icons';
import { TranslateModule } from '@ngx-translate/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { GoogleServices } from 'src/app/core/google-services/google-services.service';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [
    IonicModule, 
    MatIconModule, 
    MatButtonModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatFormFieldModule, 
    CommonModule, 
    FormsModule,
    TranslateModule,
    ToastModule
  ],
  providers:[MessageService],
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss'],
})
export class BuscadorComponent implements OnInit {

  origen: string = '';
  destino: string = '';
  plazas: string = '';
  fecha_salida: string = '';

  sugerenciasOrigen: any[] = [];
  sugerenciasDestino: any[] = [];

  constructor(private navCtrl: NavController, private messageService: MessageService, private googleService: GoogleServices) {
    addIcons({ eye, lockClosed });
  }

  ngOnInit() {}

  /**
   * Función para envíar a la página concreta.
   * @queryParams => Envía los datos que se recogen en la búsqueda.
   */
  openSearchTravels() {
    const viajeData = {
      origen: this.origen,
      destino: this.destino,
      plazas: this.plazas,
      fecha_salida: this.fecha_salida
    };

    if (!viajeData.origen && !viajeData.destino && !viajeData.fecha_salida && !viajeData.plazas) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Campos incompletos',
        detail: 'Por favor, rellena al menos un campo para continuar.',
      });
      return;
    }
    this.navCtrl.navigateRoot('/busqueda-viajes', {
      queryParams: viajeData
    });

  }
  
  obtenerSugerenciasOrigen(evento: Event) {
    const contenidoInput = (evento.target as HTMLInputElement).value;
    this.googleService
      .obtenerLocalidad(contenidoInput)
      .subscribe((respuesta: any) => {
        this.sugerenciasOrigen = respuesta;
      });
  }
  
  obtenerSugerenciasDestino(evento: Event) {
    const contenidoInput = (evento.target as HTMLInputElement).value;
    this.googleService
      .obtenerLocalidad(contenidoInput)
      .subscribe((respuesta: any) => {
        this.sugerenciasDestino = respuesta;
      });
  }

    /**
   * Función para guardar la información de la localidad de origen seleccionada.
   * 
   * @param localidad -> Recibe la localidad seleccionada en la lista de sugerencias.
   */
    seleccionarLocalidadOrigen(localidad: any) {
      this.origen = localidad.descripcion.split(',')[0].trim();
      this.sugerenciasOrigen = [];
    }
  
  
    /**
     * Función para guardar la información de la localidad de destino seleccionada.
     * 
     * @param localidad -> Recibe la localidad seleccionada en la lista de sugerencias.
     */
    seleccionarLocalidadDestino(localidad: any) {
      this.destino = localidad.descripcion.split(',')[0].trim();
      this.sugerenciasDestino = [];
    }
}
