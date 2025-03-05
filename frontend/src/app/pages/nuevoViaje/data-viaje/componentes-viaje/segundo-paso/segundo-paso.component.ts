import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { GoogleServices } from 'src/app/core/google-services/google-services.service';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { ChangeDetectorRef } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import * as L from 'leaflet';

@Component({
  selector: 'app-segundo-paso',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, MatIcon, MatButtonModule],
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


  currentViajeData: any;

  constructor(private travelService: TravelService, private googleService: GoogleServices, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    const currentViajeData = this.travelService.getViajeData();
    this.origen = currentViajeData.origen || '';
    this.destino = currentViajeData.destino || '';
    this.plazas = currentViajeData.plazas || '';
    this.hora_seleccionada = currentViajeData.hora_salida || '';
  }

  /**
 * Función para obtener la lista de sugerencias para el origen
 * en función de lo que escriba el usuario en el input correspondiente.
 * 
 * @param evento Recibe el evento del input.
 */
  obtenerSugerenciasOrigen(evento: Event) {
    const contenidoInput = (evento.target as HTMLInputElement).value;

    if (contenidoInput.length > 2) {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${contenidoInput}&addressdetails=1&limit=5&countrycodes=ES`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.sugerenciasOrigen = data
            .filter((item: any) => item.address && item.address.country_code === "es")
            .map((item: any) => {
              const city = item.address.city || item.address.town || item.address.village || "Ubicación desconocida";
              return {
                display_name: item.display_name,
                city: city,
                lat: item.lat,
                lon: item.lon
              };
            });
        })
        .catch(error => {
          console.error('Error al obtener sugerencias de origen:', error);
        });
    } else {
      this.sugerenciasOrigen = [];
    }
  }

  /**
  * Función para obtener la lista de sugerencias para el destino
  * en función de lo que escriba el usuario en el input correspondiente.
  * 
  * @param evento Recibe el evento del input.
  */
  obtenerSugerenciasDestino(evento: Event) {
    const contenidoInput = (evento.target as HTMLInputElement).value;

    if (contenidoInput.length > 2) {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${contenidoInput}&addressdetails=1&limit=5&countrycodes=ES`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.sugerenciasDestino = data
            .filter((item: any) => item.address && item.address.country_code === "es")
            .map((item: any) => {
              const city = item.address.city || item.address.town || item.address.village || "Ubicación desconocida";
              return {
                display_name: item.display_name,
                city: city,
                lat: item.lat,
                lon: item.lon
              };
            });
        })
        .catch(error => {
          console.error('Error al obtener sugerencias de destino:', error);
        });
    } else {
      this.sugerenciasDestino = [];
    }
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
    this.sugerenciasOrigen = [];
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
    this.sugerenciasDestino = [];
  }

  /**
   *    Función para obtener la ubicación del usuario.
   * 
   * -> Esta función solicita permisos al usuario para poder acceder a su localización,
   *    una vez se obtienen, a través de los servicios de Google se obtiene su ubicación.
   * 
   * -> Extraemos la información del resultado, recorriendo la lista de resultados
   *    para obtener el nombre de la población donde se encuentra.
   */
  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          this.mapCenter = { lat, lng };
          this.googleService.reverseGeocode(lat, lng).subscribe(
            (results) => {

              if (results && results.results.length > 0) {
                let city = '';

                for (const result of results.results) {
                  const addressComponents = result.address_components;
                  for (const component of addressComponents) {
                    if (component.types.includes('locality') || component.types.includes('administrative_area_level_2')) {
                      city = component.long_name;
                      break;
                    }
                  }
                  if (city) break;
                }

                if (city) {
                  this.origen = city;
                  const viajeData = {
                    ...this.travelService.getViajeData(),
                    origen: this.origen,
                  };
                  this.travelService.setViajeData(viajeData);
                  this.cdr.detectChanges();
                } else {
                  console.log('No se encontró la ciudad en los resultados.');
                }
              } else {
                console.log('No se encontraron resultados para la geolocalización.');
              }
            },
            (error) => {
              console.error('Error al obtener la dirección:', error);
            }
          );
        },
        (error) => {
          console.error('Error de geolocalización:', error.message);
        }
      );

    } else {
      console.error("La geolocalización no está soportada por este navegador.");
    }
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


}
