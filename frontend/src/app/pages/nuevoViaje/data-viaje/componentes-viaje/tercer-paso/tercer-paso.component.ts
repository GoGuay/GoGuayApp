import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Subject, takeUntil } from 'rxjs';
import { SpinnerComponent } from '../../../../../components/spinner/spinner.component';
import { TravelService } from '../../../../../core/travel-services/travel.service';

@Component({
  selector: 'app-tercer-paso',
  standalone: true,
  imports: [
    IonicModule, CommonModule, FormsModule, RouterModule,
    MatCardModule, GoogleMapsModule, MatButtonModule, 
    MatIconModule, NgxSpinnerModule, MatProgressSpinnerModule, SpinnerComponent
  ],
  templateUrl: './tercer-paso.component.html',
  styleUrls: ['./tercer-paso.component.scss'],
})
export class TercerPasoComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(GoogleMap) googleMap!: GoogleMap;
  @ViewChild('mapContainer') mapContainer?: ElementRef;

  mapCenter = { lat: 40.4168, lng: -3.7038 };
  zoom = 12;
  routes: google.maps.DirectionsRoute[] = [];
  selectedRoute: google.maps.DirectionsResult | null = null;
  origen: string = '';
  destino: string = '';
  waypoints: google.maps.DirectionsWaypoint[] = [];

  private directionsService!: google.maps.DirectionsService;
  private directionsRenderer!: google.maps.DirectionsRenderer;
  private destroy$ = new Subject<void>();

  isLoadingRoutes = false;
  isUpdatingRoute = false;
  rutaConParadasSeleccionada = false;
  marcaPeajes = true;
  apiCargada = false;

  mapOptions: google.maps.MapOptions = {
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false
  };

  // ESTILO DE RUTA: Violeta sólido sin puntos
  public directionsOptions: google.maps.DirectionsRendererOptions = {
    polylineOptions: {
      strokeColor: '#7B61FF',
      strokeOpacity: 1.0,
      strokeWeight: 6,
    },
    suppressMarkers: false,
    preserveViewport: false
  };

  markerOrigin: google.maps.LatLngLiteral | null = null;

  constructor(private travelService: TravelService, private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.validarCargaGoogleMaps();
    this.escucharCambiosViaje();
  }

  private validarCargaGoogleMaps() {
    if (typeof google !== 'undefined' && google.maps) {
      this.apiCargada = true;
      this.inicializarServiciosMapas();
    } else {
      const checkGoogle = setInterval(() => {
        if (typeof google !== 'undefined' && google.maps) {
          this.apiCargada = true;
          this.inicializarServiciosMapas();
          clearInterval(checkGoogle);
        }
      }, 500);
    }
  }

  private escucharCambiosViaje() {
    this.travelService.viajeData$
      .pipe(takeUntil(this.destroy$))
      .subscribe((viajeData) => {
        const nuevoOrigen = viajeData?.origen || '';
        const nuevoDestino = viajeData?.destino || '';

        if (nuevoOrigen && nuevoDestino && (nuevoOrigen !== this.origen || nuevoDestino !== this.destino)) {
          this.origen = nuevoOrigen;
          this.destino = nuevoDestino;
          this.buscarRutas(this.origen, this.destino, !this.marcaPeajes);
        }
      });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.googleMap?.googleMap && this.directionsRenderer) {
        this.directionsRenderer.setMap(this.googleMap.googleMap);
      }
    }, 1000);
  }

  private inicializarServiciosMapas() {
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer(this.directionsOptions);
  }

  onPeajeOptionChange(event: any): void {
    this.marcaPeajes = event.target.id === 'peajes';
    this.buscarRutas(this.origen, this.destino, !this.marcaPeajes);
  }

  buscarRutas(origen: any, destino: string, evitarPeajes: boolean = false): void {
    if (!origen || !destino) return;
    this.isLoadingRoutes = true;
    this.spinner.show();
    this.rutaConParadasSeleccionada = false;

    this.directionsService.route({
      origin: origen,
      destination: destino,
      travelMode: google.maps.TravelMode.DRIVING,
      provideRouteAlternatives: true,
      avoidTolls: evitarPeajes,
      region: 'ES'
    }, (response, status) => {
      this.spinner.hide();
      this.isLoadingRoutes = false;
      if (status === 'OK' && response) {
        this.routes = response.routes;
        this.directionsRenderer.setOptions(this.directionsOptions);
        this.directionsRenderer.setDirections(response);
      }
    });
  }

  selectRoute(index: number): void {
    if (!this.routes?.[index]) return;
    this.rutaConParadasSeleccionada = true; 
    this.selectedRoute = {
      routes: [this.routes[index]],
      request: {} as google.maps.DirectionsRequest,
    } as google.maps.DirectionsResult;

    this.directionsRenderer.setOptions(this.directionsOptions);
    this.directionsRenderer.setDirections(this.selectedRoute);
    this.procesarMetricasRuta(this.selectedRoute);

    setTimeout(() => {
      document.getElementById('mapContainer')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 250);
  }

  eliminarRutaSeleccionada() {
    this.rutaConParadasSeleccionada = false;
    this.selectedRoute = null;
    this.directionsRenderer.setDirections({ routes: [] } as any);
    this.buscarRutas(this.origen, this.destino, !this.marcaPeajes);
  }

  private procesarMetricasRuta(result: google.maps.DirectionsResult) {
    let dist = 0, seg = 0;
    result.routes[0].legs.forEach(l => {
      dist += l.distance?.value || 0;
      seg += l.duration?.value || 0;
    });
    const info = {
      ...this.travelService.getViajeData(),
      distanciaTotal: Math.round(dist / 1000),
      tiempoTotal: `${Math.floor(seg/3600).toString().padStart(2,'0')}:${Math.floor((seg%3600)/60).toString().padStart(2,'0')}`,
      ruta_seleccionada: result
    };
    this.travelService.setViajeData(info);
    localStorage.setItem('rutaSeleccionada', JSON.stringify(info));
  }

  onMapClick(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.markerOrigin = { lat: event.latLng.lat(), lng: event.latLng.lng() };
      new google.maps.Geocoder().geocode({ location: event.latLng }, (res, stat) => {
        if (stat === 'OK' && res?.[0]) {
          this.origen = res[0].formatted_address;
          this.buscarRutas(this.origen, this.destino, !this.marcaPeajes);
        }
      });
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}