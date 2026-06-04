import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TravelService } from '../../../../../core/travel-services/travel.service';
import { ChangeDetectorRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FuncionesComunes } from '../../../../../core/funciones-comunes/funciones-comunes.service';
import { SpinnerComponent } from "../../../../../components/spinner/spinner.component";

@Component({
  selector: 'app-segundo-paso',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, MatButtonModule, SpinnerComponent],
  templateUrl: './segundo-paso.component.html',
  styleUrls: ['./segundo-paso.component.scss'],
})
export class SegundoPasoComponent implements OnInit {

  origen: string = '';
  destino: string = '';
  plazas: string = '';
  hora_seleccionada: string = '';

  sugerenciasOrigen: any[] = [];
  sugerenciasDestino: any[] = [];

  currentLocation: { lat: number; lng: number } | null = null;

  mapCenter: { lat: number; lng: number } = { lat: 40.4168, lng: -3.7038 };

  cargandoOrigen: boolean = false;
  cargandoDestino: boolean = false;

  currentViajeData: any;

  constructor(private travelService: TravelService, private cdr: ChangeDetectorRef, public funcionesComunes: FuncionesComunes) { }

  ngOnInit() {
    const currentViajeData = this.travelService.getViajeData();
    this.origen = currentViajeData.origen || '';
    this.destino = currentViajeData.destino || '';
    this.plazas = currentViajeData.plazas || '';
    this.hora_seleccionada = currentViajeData.hora_salida || '';
  }


  /**
   * Función para guardar la información de la localidad de origen seleccionada.
   * 
   * @param localidad -> Recibe la localidad seleccionada en la lista de sugerencias.
   */
  seleccionarLocalidadOrigen(localidad: any) {
    this.origen = localidad.display_name.split(',')[0].trim();
    const viajeData = {
      ...this.travelService.getViajeData(),
      origen: this.origen,
    };
    this.travelService.setViajeData(viajeData);
    this.funcionesComunes.sugerenciasOrigen = [];
  }


  /**
   * Función para guardar la información de la localidad de destino seleccionada.
   * 
   * @param localidad -> Recibe la localidad seleccionada en la lista de sugerencias.
   */
  seleccionarLocalidadDestino(localidad: any) {
    this.destino = localidad.display_name.split(',')[0].trim();
    const viajeData = {
      ...this.travelService.getViajeData(),
      destino: this.destino,
    };
    this.travelService.setViajeData(viajeData);
    this.funcionesComunes.sugerenciasDestino = [];
  }


  getUserLocationWithLeaflet() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          this.mapCenter = { lat, lng };

          // Llamada a Nominatim para obtener la dirección inversa
          const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;

          fetch(url)
            .then(response => response.json())
            .then(data => {
              if (data && data.address) {
                let city = data.address.city || data.address.town || data.address.village || '';
                if (city) {
                  this.origen = city;
                  const viajeData = {
                    ...this.travelService.getViajeData(),
                    origen: this.origen,
                  };
                  this.travelService.setViajeData(viajeData);
                  this.cdr.detectChanges();
                } else {
                  console.log('No se pudo obtener la ciudad.');
                }
              }
            })
            .catch(error => console.error('Error al obtener la ubicación con Leaflet:', error));
        },
        (error) => {
          console.error('Error de geolocalización:', error.message);
        }
      );
    } else {
      console.error("La geolocalización no está soportada por este navegador.");
    }
  }


  buscarSugerenciasOrigen(event: Event) {
    this.cargandoOrigen = true;
    this.funcionesComunes.obtenerSugerenciasOrigen(event)
      .finally(() => {
        console.log("Búsqueda de sugerencias completada");
        this.cargandoOrigen = false;
        this.cdr.detectChanges(); // fuerza render del componente
      });
  }

  buscarSugerenciasDestino(event: Event) {
    this.cargandoDestino = true;
    this.funcionesComunes.obtenerSugerenciasDestino(event)
      .finally(() => {
        this.cargandoDestino = false;
        this.cdr.detectChanges();
      });
  }

}
