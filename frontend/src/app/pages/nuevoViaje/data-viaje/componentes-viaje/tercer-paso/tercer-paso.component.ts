import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { IonicModule } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ToastModule } from 'primeng/toast';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LeafletService } from 'src/app/core/leaflet/leaflet.service';

@Component({
  selector: 'app-tercer-paso',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule,
    MatDatepickerModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ToastModule,
    MatIconModule,
    NgxSpinnerModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './tercer-paso.component.html',
  styleUrls: ['./tercer-paso.component.scss']
})
export class TercerPasoComponent implements OnInit {
  map!: L.Map;
  routeControl: any;
  selectedRouteIndex: number | null = null;
  selectedRouteLayer: L.Polyline | null = null;
  origen: string = '';
  destino: string = '';
  routes: any[] = [];
  sugerenciasParadas: any[] = [];
  paradasSeleccionadas = new Set<{ nombre: string, coords: L.LatLng }>();
  isLoadingRoutes: boolean = false;
  cargandoSugerencias: boolean = false;
  isUpdatingRoute: boolean = false;
  rutaConParadasSeleccionada: boolean = false;
  marcaPeajes: boolean = false;

  origenCoords!: L.LatLng;
  destinoCoords!: L.LatLng;

  private lat = 40.4168;
  private lon = -3.7038;
  private titulo = 'Ubicación';

  constructor(private travelService: TravelService, private http: HttpClient, private mapService: LeafletService) {


  }

  ngOnInit() {

    setTimeout(() => {
      this.initMap();
    }, 300);

    this.travelService.viajeData$.subscribe((viajeData) => {
      this.origen = viajeData?.origen || '';
      this.destino = viajeData?.destino || '';
      if (this.origen && this.destino) {
        this.buscarCoordenadas();
      }
    });
  }

  /**
   * Función que inicializa el mapa con unas coordenadas preestablecidas
   * para mantener el centro.
   * 
   */
  private initMap(): void {
    if (this.map) {
      this.map.remove();
    }

    this.map = L.map('map', {
      center: [this.lat, this.lon],
      zoom: 14,
      attributionControl: false
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);
  }


  /**
   * Función para obtener las coordenadas 
   * teniendo en cuenta los puntos de origen y de destino.
   * 
   */
  buscarCoordenadas() {
    this.isLoadingRoutes = true;
    const urlOrigen = `https://nominatim.openstreetmap.org/search?format=json&q=${this.origen}`;
    const urlDestino = `https://nominatim.openstreetmap.org/search?format=json&q=${this.destino}`;

    forkJoin({
      origen: this.http.get<any[]>(urlOrigen),
      destino: this.http.get<any[]>(urlDestino)
    }).subscribe(({ origen, destino }) => {
      if (origen.length === 0 || destino.length === 0) {
        console.error('No se encontraron coordenadas válidas.');
        alert('Direcciones no encontradas.');
        this.isLoadingRoutes = false;
        return;
      }

      this.origenCoords = L.latLng(origen[0].lat, origen[0].lon);
      this.destinoCoords = L.latLng(destino[0].lat, destino[0].lon);

      if (this.origenCoords && this.destinoCoords) {
        this.buscarRutas(this.origenCoords, this.destinoCoords);
      } else {
        console.error("Las coordenadas de origen o destino son inválidas.");
      }
    });
  }


  /**
   * Función para buscar una ruta en función del punto de destino y de origen.
   * 
   * 
   * @param origenCoords Coordenadas del punto de origen.
   * @param destinoCoords Coordenadas del punto de destino.
   * @returns Devuelve la lista de rutas sugeridas.
   */
  buscarRutas(origenCoords: L.LatLng, destinoCoords: L.LatLng) {
    if (!origenCoords || !destinoCoords) {
      console.error("Las coordenadas de origen o destino son inválidas:", origenCoords, destinoCoords);
      return;
    }

    console.log('Coordenadas origen:', origenCoords);
    console.log('Coordenadas destino:', destinoCoords);

    // Eliminar ruta anterior si existe
    if (this.routeControl) {
      this.map.removeControl(this.routeControl);
    }

    const iconDefault = L.icon({
      iconUrl: '../../../../../../assets/mapaIcons/marker.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });

    L.Marker.prototype.options.icon = iconDefault;

    if (!this.map) {
      this.map = L.map('map', {
        center: [this.lat, this.lon],
        zoom: 14,
        attributionControl: false
      });
    }

    // Agregar marcadores de origen y destino
    L.marker(origenCoords).addTo(this.map).bindPopup(this.origen).openPopup();
    L.marker(destinoCoords).addTo(this.map).bindPopup('Destino: '+this.destino).openPopup();

    this.mapService.L.marker([origenCoords.lat + 0.005, origenCoords.lng + 0.005]).bindPopup(this.destino);
    this.mapService.L.circleMarker([origenCoords.lat, origenCoords.lng]).addTo(this.map);


    // Configurar enrutador OSRM con o sin peajes
    const osrmOptions: any = {
      serviceUrl: 'https://router.project-osrm.org/route/v1',
      profile: 'car',
      steps: true,
    };

    if (!this.marcaPeajes) {
      osrmOptions.exclude = 'toll';
    }

    if (this.routeControl) {
      this.map.removeControl(this.routeControl);
      this.routeControl = null;
    }

    // Definir el control de rutas con el plan personalizado
    L.Routing.control({
      router: L.Routing.osrmv1({
        serviceUrl: `https://router.project-osrm.org/route/v1/`
      }),
      showAlternatives: true,
      fitSelectedRoutes: false,
      show: false,
      routeWhileDragging: true,
      waypoints: [
        this.mapService.L.latLng(origenCoords.lat, origenCoords.lng),
        this.mapService.L.latLng(destinoCoords.lat, destinoCoords.lng)
      ]
    })
      .on('routesfound', (event: any) => {
        console.log("Rutas encontradas:", event.routes);
        this.routes = event.routes.map((route: any) => ({
          distance: (route.summary.totalDistance / 1000).toFixed(2) + ' km',
          duration: Math.round(route.summary.totalTime / 60) + ' min',
          coordinates: route.coordinates,
        }));

        // Seleccionar la primera ruta por defecto
        if (this.routes.length > 0) {
          this.selectedRouteIndex = 0;
          this.mostrarRutaEnMapa(this.routes[0].coordinates);
        }

        this.isLoadingRoutes = false;
      })
      .on('routingerror', (error: any) => {
        console.error("Error al obtener rutas:", error);
        alert("No se pudieron obtener rutas. Intenta con otra dirección.");
        this.isLoadingRoutes = false;
      })
      .addTo(this.map);
  }


  mostrarRutaEnMapa(coordinates: any[]) {
    if (!this.map) return;
  
    if (this.selectedRouteLayer) {
      this.map.removeLayer(this.selectedRouteLayer);
    }
  
    if (coordinates.length < 2) {
      console.error("No hay suficientes coordenadas para dibujar la ruta.");
      return;
    }
  
    this.selectedRouteLayer = L.polyline(coordinates, {
      color: 'blue',
      weight: 6,
      opacity: 0.8
    }).addTo(this.map);
  
    this.map.fitBounds(this.selectedRouteLayer.getBounds());
  }
  

  


  onPeajeOptionChange(event: any) {
    this.marcaPeajes = event.target.id === 'peajes';
    if (this.routes.length > 0) {
      this.routes = [];
      this.buscarCoordenadas();
    }
  }

  seleccionarParada(parada: any) {
    if (this.paradasSeleccionadas.has(parada)) {
      this.paradasSeleccionadas.delete(parada);
    } else {
      this.paradasSeleccionadas.add(parada);
    }
  }


  actualizarRuta() {
    if (this.rutaConParadasSeleccionada) {
      this.isUpdatingRoute = true;

      const waypoints = [this.origenCoords,
      ...Array.from(this.paradasSeleccionadas).map(parada => parada.coords),
      this.destinoCoords];

      this.mostrarRutaEnMapa(waypoints);

      this.isUpdatingRoute = false;
    }
  }

  eliminarRutaSeleccionada() {
    this.paradasSeleccionadas.clear();
    this.rutaConParadasSeleccionada = false;
    this.routes = [];
    this.buscarCoordenadas();
  }

  /**
   * Función para seleccionar una ruta.
   * @param index 
   */
  selectRoute(index: number) {
    this.selectedRouteIndex = index;
    const route = this.routes[index];
  
    if (route) {
      this.mostrarRutaEnMapa(route.coordinates);
    }
  }
  


  // Método para verificar si la ruta está seleccionada
  isRouteSelected(index: number): boolean {
    return this.selectedRouteIndex === index;
  }
}
