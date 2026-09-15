import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Subject, forkJoin, Observable, from, takeUntil } from 'rxjs';
import { SpinnerComponent } from '../../../../../components/spinner/spinner.component';
import { TravelService } from '../../../../../core/travel-services/travel.service';

// Interfaz extendida para saber si una ruta concreta devuelta por la API tiene peajes o no
interface RutaExtendida {
  route: google.maps.DirectionsRoute;
  tienePeajes: boolean;
  resultCompleto: google.maps.DirectionsResult;
}

@Component({
  selector: 'app-tercer-paso',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    GoogleMapsModule,
    MatButtonModule,
    MatIconModule,
    NgxSpinnerModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './tercer-paso.component.html',
  styleUrls: ['./tercer-paso.component.scss'],
})
export class TercerPasoComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(GoogleMap) googleMap!: GoogleMap;
  @ViewChild('mapContainer') mapContainer?: ElementRef;

  mapCenter = { lat: 40.4168, lng: -3.7038 };
  zoom = 12;

  rutasCombinadas: RutaExtendida[] = [];
  indiceRutaSeleccionada: number = -1;

  origen: string = '';
  destino: string = '';

  private directionsService!: google.maps.DirectionsService;
  private directionsRenderer!: google.maps.DirectionsRenderer;
  private destroy$ = new Subject<void>();

  isLoadingRoutes = false;
  apiCargada = false;

  mapOptions: google.maps.MapOptions = {
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
  };

  //Sobreescribe la linea que pinta google en los mapas.
  public directionsOptions: google.maps.DirectionsRendererOptions = {
    polylineOptions: {
      strokeColor: '#7B61FF',
      strokeOpacity: 1.0,
      strokeWeight: 6,
    },
    suppressMarkers: false,
    preserveViewport: false,
  };

  markerOrigin: google.maps.LatLngLiteral | null = null;

  constructor(
    private travelService: TravelService,
    private spinner: NgxSpinnerService,
  ) {}

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

        if (
          nuevoOrigen &&
          nuevoDestino &&
          (nuevoOrigen !== this.origen || nuevoDestino !== this.destino)
        ) {
          this.origen = nuevoOrigen;
          this.destino = nuevoDestino;
          this.buscarRutasCombinadas();
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
    this.directionsRenderer = new google.maps.DirectionsRenderer(
      this.directionsOptions,
    );
  }

  /**
   * Obtiene de forma simultánea rutas con peajes y rutas sin peajes, las unifica
   * y preselecciona la primera alternativa por defecto de manera limpia.
   */
  buscarRutasCombinadas(): void {
    if (!this.origen || !this.destino) return;
    this.isLoadingRoutes = true;
    this.spinner.show();
    this.rutasCombinadas = [];
    this.indiceRutaSeleccionada = -1;

    const reqConPeajes = from(
      this.directionsService.route({
        origin: this.origen,
        destination: this.destino,
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
        avoidTolls: false,
        region: 'ES',
      }),
    );

    const reqSinPeajes = from(
      this.directionsService.route({
        origin: this.origen,
        destination: this.destino,
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
        avoidTolls: true,
        region: 'ES',
      }),
    );

    forkJoin([reqConPeajes, reqSinPeajes]).subscribe({
      next: ([resCon, resSin]) => {
        this.spinner.hide();
        this.isLoadingRoutes = false;

        const listaTemporal: RutaExtendida[] = [];

        const evaluarPeaje = (
          route: google.maps.DirectionsRoute,
          solicitadoSinPeaje: boolean,
        ): boolean => {
          if (solicitadoSinPeaje) return false;
          if ((route as any).hasTolls != undefined) {
            return (route as any).hasTolls;
          }
          return route.legs.some((leg) =>
            leg.steps.some(
              (step) =>
                step.instructions.toLowerCase().includes('peaje') ||
                step.instructions.toLowerCase().includes('toll'),
            ),
          );
        };

        if (resCon && resCon.routes) {
          resCon.routes.forEach((route) => {
            listaTemporal.push({
              route,
              tienePeajes: evaluarPeaje(route, false),
              resultCompleto: resCon,
            });
          });
        }

        if (resSin && resSin.routes) {
          resSin.routes.forEach((routeSin) => {
            const esDuplicada = listaTemporal.some((r) => {
              const mismaDistancia =
                Math.abs(
                  (r.route.legs[0].distance?.value || 0) -
                    (routeSin.legs[0].distance?.value || 0),
                ) < 100;
              const mismoResumen = r.route.summary === routeSin.summary;
              return mismaDistancia && mismoResumen;
            });

            if (!esDuplicada) {
              listaTemporal.push({
                route: routeSin,
                tienePeajes: false,
                resultCompleto: resSin,
              });
            }
          });
        }

        this.rutasCombinadas = listaTemporal;

        if (this.rutasCombinadas.length > 0) {
          this.selectRoute(0);
        }
      },
      error: (err) => {
        console.error('Error cargando rutas combinadas:', err);
        this.spinner.hide();
        this.isLoadingRoutes = false;
      },
    });
  }

  /**
   * Se ejecuta al hacer click en cualquier tarjeta o cambiar el Radio Button de la ruta.
   */
  selectRoute(index: number): void {
    if (!this.rutasCombinadas?.[index]) return;

    this.indiceRutaSeleccionada = index;
    const rutaElegida = this.rutasCombinadas[index];

    const singleRouteResult: google.maps.DirectionsResult = {
      ...rutaElegida.resultCompleto,
      routes: [rutaElegida.route],
    };

    this.directionsRenderer.setOptions(this.directionsOptions);
    this.directionsRenderer.setDirections(singleRouteResult);
    this.procesarMetricasRuta(rutaElegida.route, singleRouteResult);
  }

  private procesarMetricasRuta(
    route: google.maps.DirectionsRoute,
    resultCompleto: google.maps.DirectionsResult,
  ) {
    let dist = 0,
      seg = 0;
    route.legs.forEach((l) => {
      dist += l.distance?.value || 0;
      seg += l.duration?.value || 0;
    });

    const info = {
      ...this.travelService.getViajeData(),
      distanciaTotal: Math.round(dist / 1000),
      tiempoTotal: `${Math.floor(seg / 3600)
        .toString()
        .padStart(2, '0')}:${Math.floor((seg % 3600) / 60)
        .toString()
        .padStart(2, '0')}`,
      ruta_seleccionada: resultCompleto,
    };

    this.travelService.setViajeData(info);
    localStorage.setItem('rutaSeleccionada', JSON.stringify(info));
  }

  onMapClick(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.markerOrigin = { lat: event.latLng.lat(), lng: event.latLng.lng() };
      new google.maps.Geocoder().geocode(
        { location: event.latLng },
        (res, stat) => {
          if (stat === 'OK' && res?.[0]) {
            this.origen = res[0].formatted_address;
            this.buscarRutasCombinadas();
          }
        },
      );
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
