import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ToastModule } from 'primeng/toast';
import { MatIconModule } from '@angular/material/icon';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Subject, takeUntil } from 'rxjs';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { MessageService } from 'primeng/api';

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
    GoogleMapsModule,
    MatButtonModule,
    ToastModule,
    MatIconModule,
    NgxSpinnerModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './tercer-paso.component.html',
  styleUrls: ['./tercer-paso.component.scss'],
})
export class TercerPasoComponent implements OnInit {

  @ViewChild('mapContainer') mapContainer?: ElementRef;
  mapCenter = { lat: 40.4168, lng: -3.7038 };
  zoom = 12;
  routes: google.maps.DirectionsRoute[] = [];
  selectedRoute: google.maps.DirectionsResult | null = null;

  origen: string = '';
  destino: string = '';
  hora_seleccionada: string = '';
  plazas: string = '';

  waypoints: google.maps.DirectionsWaypoint[] = [];

  private directionsService: google.maps.DirectionsService;
  private directionsRenderer: google.maps.DirectionsRenderer;
  private destroy$ = new Subject<void>();

  sugerenciasParadas: any[] = [];

  /**
   *  Variables para las validaciones necesarias.
   */
  cargandoSugerencias: boolean = false;
  segundo_paso: boolean = false;
  tercer_paso: boolean = false;
  cuarto_paso: boolean = false;
  isLoadingRoutes: boolean = false;
  rutaConParadasSeleccionada: boolean = false;
  isUpdatingRoute: boolean = false;
  marcaPeajes: boolean = true;
  clickMapaParada: boolean = true;

  paradasSeleccionadas = new Set<string>();

  @ViewChild(GoogleMap) googleMap!: GoogleMap;

  currentViajeData: any;

  /**
   * Configuración para mostrar diferentes opciones en el mapa.
   *
   */
  mapOptions: google.maps.MapOptions = {
    streetViewControl: false,
    fullscreenControl: false,
  };

  constructor(private router: Router,
    private travelService: TravelService,
    private messageService: MessageService,
    private spinner: NgxSpinnerService) {
    this.directionsService = new google.maps.DirectionsService();


    this.directionsRenderer = new google.maps.DirectionsRenderer({
      polylineOptions: {
        strokeColor: '#B3B5E6',
        strokeOpacity: 1.0,
        strokeWeight: 5,
      },
      suppressMarkers: false, // Mostrar los marcadores de inicio y fin
    });
  }

  ngOnInit() {
    this.travelService.viajeData$
      .pipe(takeUntil(this.destroy$)) // Elimina la suscripción al salir del componente.
      .subscribe((viajeData) => {
        this.selectedRoute = viajeData?.ruta_seleccionada || null;
        this.currentViajeData = viajeData;
        const nuevoOrigen = viajeData?.origen || 'Sin especificar';
        const nuevoDestino = viajeData?.destino || 'Sin especificar';

        /**
         * Hacemos una validación para ejecutar la función solo en caso
         * de que el origen y el destino estén correctos.
         * -----------------------------------------------------------
         */
        if (
          nuevoOrigen !== 'Sin especificar' &&
          nuevoDestino !== 'Sin especificar' &&
          (nuevoOrigen !== this.origen || nuevoDestino !== this.destino)
        ) {
          this.origen = nuevoOrigen;
          this.destino = nuevoDestino;
          this.buscarRutas(this.origen, this.destino);
        }
      });
  }


  ngAfterViewInit() {
    setTimeout(() => {
      if (this.googleMap?.googleMap) {
        this.directionsRenderer.setMap(this.googleMap.googleMap);
      } else {
        console.error('El mapa aún no está disponible.');
      }
    }, 500);
  }

  /**
   * Función para saber si se está marcando la opción "Con peajes" o "Sin peajes"
   * Cada vez que se cambia la opción se vuelven a buscar las rutas,
   * pero cambiando la opción que incluya los peajes.
   *
   * @param event Información del input seleccionado.
   */
  onPeajeOptionChange(event: any): void {
    const evitarPeajes = event.target.id === 'sinPeajes';
    this.buscarRutas(this.origen, this.destino, evitarPeajes);
    this.routes = [];
  }

  /**
  * Función para buscar rutas.
  * --------------------------
  * Esta función utiliza un servicio propio de Google: "directionsService"
  * Dicho servicio nos devuelve una lista de rutas que van en función de los parámetros que
  * se le pasan, como pueden ser el origen y el destino.
  *
  * @param origen -> Lugar de origen del viaje
  * @param destino -> Lugar de destino del viaje
  * @returns Devuelve una lista de rutas sugeridas en función del Origen y Destino
  */
  buscarRutas(
    origen: string,
    destino: string,
    evitarPeajes: boolean = false
  ): void {
    this.isLoadingRoutes = true;
    this.spinner.show();
    setTimeout(() => {
      const currentViajeData = this.travelService.getViajeData();
      if (!origen || !destino) {
        console.error('El origen y destino deben estar definidos.');
        return;
      }

      if (!this.googleMap?.googleMap) {
        console.error("El mapa aún no está disponible.");
        return;
      }

      const fechaSalida = currentViajeData.fecha_salida
        ? new Date(currentViajeData.fecha_salida)
        : new Date();

      this.directionsService.route(
        {
          origin: origen,
          destination: destino,
          travelMode: google.maps.TravelMode.DRIVING,
          provideRouteAlternatives: true,
          drivingOptions: {
            departureTime: fechaSalida,
            trafficModel: google.maps.TrafficModel.OPTIMISTIC,
          },
          unitSystem: google.maps.UnitSystem.METRIC,
          region: 'ES',
          avoidTolls: evitarPeajes,
        },
        (response, status) => {
          this.isLoadingRoutes = false;
          this.spinner.hide();
          if (status === 'OK' && response) {
            if (response.request.avoidTolls === false) {
              this.marcaPeajes = true;
            } else {
              this.marcaPeajes = false;
            }
            this.routes = response.routes;
            this.directionsRenderer.setDirections(response);
            this.sugerenciasParadas = [];

          } else {
            console.error('Error al calcular rutas:', status);
            this.routes = [];
          }
        }
      );
    }, 2000)
  }



  /**
   * Función para actualizar la ruta cuando se añade una parada.
   * 
   * @returns Devuelve la ruta personalizada
   */
  actualizarRuta() {
    if (!this.origen || !this.destino) {
      console.error("El origen y destino deben estar definidos.");
      return;
    }

    this.isLoadingRoutes = true;

    this.directionsService.route(
      {
        origin: this.origen,
        destination: this.destino,
        waypoints: this.waypoints,
        travelMode: google.maps.TravelMode.DRIVING,
        optimizeWaypoints: true,
      },
      (response, status) => {
        this.isLoadingRoutes = false;

        if (status === "OK" && response) {
          this.routes = response.routes;
          this.selectedRoute = response;
          this.directionsRenderer.setDirections(response);

          this.rutaConParadasSeleccionada = true;

          // Calcula la distancia total y el tiempo total
          let distanciaTotal = 0;
          let tiempoTotal = 0;

          // Recorre cada tramo de la ruta (legs)
          for (let i = 0; i < response.routes[0].legs.length; i++) {
            const leg = response.routes[0].legs[i];

            // Verifica si 'leg.distance' está definido antes de acceder a su valor
            if (leg.distance && leg.distance.value) {
              distanciaTotal += leg.distance.value; // La distancia está en metros
            }

            // Verifica si 'leg.duration' está definido antes de acceder a su valor
            if (leg.duration && leg.duration.value) {
              tiempoTotal += leg.duration.value; // El tiempo está en segundos
            }
          }
          // Asegurar que la distancia se muestra sin decimales
          const distancia = Math.round(distanciaTotal / 1000); // Convertimos metros a km y redondeamos

          // Convertimos el tiempo total en horas y minutos
          const horas = Math.floor(tiempoTotal); // Parte entera de las horas
          const minutos = Math.round((tiempoTotal - horas) * 60); // Convertimos la parte decimal en minutos

          // Formateamos el tiempo en HH:mm
          const tiempoTotalFormato = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;

          console.log(`Distancia total: ${distancia} km`);
          console.log(`Tiempo total: ${tiempoTotalFormato} horas`);

          // Guarda la ruta actualizada con los datos de distancia y tiempo
          localStorage.setItem('rutaConParadas', JSON.stringify({
            origen: this.origen,
            destino: this.destino,
            waypoints: this.waypoints,
            selectedRoute: response,
            distanciaTotal: distancia,
            tiempoTotal: tiempoTotalFormato
          }));

        } else {
          console.error("Error al actualizar la ruta:", status);
        }
      }
    );
  }

  /**
   * Función para obtener un listado de ciudades que estén en el 
   * paso de una ruta seleccionada previamente.
   * 
   * @param puntosRuta Devuelve una lista de sugerencias para las paradas.
   */
  buscarCiudadesCercanas(puntosRuta: google.maps.LatLng[]) {
    this.cargandoSugerencias = true;
    const geocoder = new google.maps.Geocoder();
    const ciudadesDetectadas: Set<string> = new Set();

    puntosRuta.forEach((punto, index) => {
      setTimeout(() => {  // Aplica un retraso progresivo para evitar límites
        geocoder.geocode({ location: punto }, (results, status) => {
          if (status === "OK" && results?.length) {
            const ciudad = results.find((r) =>
              r.types.includes("locality") || r.types.includes("administrative_area_level_2")
            );

            if (ciudad) {
              ciudadesDetectadas.add(ciudad.formatted_address);
            }
          }

          // Verifica al final de todas las peticiones
          if (index === puntosRuta.length - 1) {
            this.sugerenciasParadas = Array.from(ciudadesDetectadas).map((nombre) => ({
              nombre,
              distancia: "En la ruta",
            }));

            this.cargandoSugerencias = false;
          }
        });
      }, index * 3000);  // 🔥 Retraso de 300ms entre cada petición
    });
  }


  /**
   * Función para actualizar la lista de sugerencias
   * de paradas en la ruta preseleccionada. 
   * 
   * @returns 
   */
  obtenerCiudadesEnRuta() {
    if (!this.selectedRoute) {
      console.error('No hay una ruta seleccionada.');
      return;
    }
    const puntosRuta: google.maps.LatLng[] = [];
    // Recorre todos los segmentos de la ruta
    this.selectedRoute.routes[0].legs.forEach((leg) => {
      leg.steps.forEach((step) => {
        puntosRuta.push(step.start_location);
        puntosRuta.push(step.end_location);
      });
    });

    this.buscarCiudadesCercanas(puntosRuta);
  }


  /**
   *    Función para poder seleccionar una parada
   * 
   * -> Esta función permite seleccionar una parada de la lista de 
   *    sugerencias que nos devuelve el servicio de Google
   * -> Y después añade dicha parada a la ruta.
   * 
   * @param parada 
   */
  seleccionarParada(parada: any) {
    console.log('Parada seleccionada:', parada);

    // Alternar la selección de la parada
    if (this.paradasSeleccionadas.has(parada.nombre)) {
      // Si la parada ya está seleccionada, la deseleccionamos
      this.paradasSeleccionadas.delete(parada.nombre);
      this.waypoints = this.waypoints.filter(wp => wp.location !== parada.nombre);
    } else {
      // Si la parada no está seleccionada, la agregamos
      const nuevoWaypoint: google.maps.DirectionsWaypoint = {
        location: parada.nombre,
        stopover: true,
      };

      this.waypoints.push(nuevoWaypoint);
      this.paradasSeleccionadas.add(parada.nombre);
    }

    // Actualizar la ruta con las nuevas paradas
    this.actualizarRuta();
  }

  /**
   * Función que se utiliza para seleccionar una ruta
   * de la lista de rutas sugeridas previamente.
   *
   * @param index -> Índice de la ruta seleccionada.
   */
  selectRoute(index: number): void {
    if (!this.routes || this.routes.length === 0) {
      console.error('No hay rutas disponibles.');
      return;
    }

    this.selectedRoute = {
      routes: [this.routes[index]],
      request: {} as google.maps.DirectionsRequest,
    } as google.maps.DirectionsResult;

    this.directionsRenderer.setDirections(this.selectedRoute);
    this.rutaConParadasSeleccionada = true;
    this.cargandoSugerencias = false;

    // Calcular distancia y tiempo total
    let distanciaTotal = 0;
    let tiempoTotal = 0;

    if (this.selectedRoute.routes[0].legs) {
      this.selectedRoute.routes[0].legs.forEach((leg) => {
        distanciaTotal += leg.distance?.value || 0; // metros
        tiempoTotal += leg.duration?.value || 0; // segundos
      });
    }


    // Asegurar que la distancia se muestra sin decimales
    const distancia = Math.round(distanciaTotal / 1000); // Convertimos metros a km y redondeamos

    // Convertimos el tiempo total en horas y minutos
    const horas = Math.floor(tiempoTotal); // Parte entera de las horas
    const minutos = Math.round((tiempoTotal - horas) * 60); // Convertimos la parte decimal en minutos

    // Formateamos el tiempo en HH:mm
    const tiempoTotalFormato = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;

    console.log(`Distancia total: ${distancia} km`);
    console.log(`Tiempo total: ${tiempoTotalFormato} horas`);

    // Guardar la ruta en el servicio
    const viajeData = {
      ...this.travelService.getViajeData(),
      ruta_seleccionada: this.selectedRoute,
      distanciaTotal: distancia,
      tiempoTotal: tiempoTotalFormato
    };

    this.travelService.setViajeData(viajeData);

    // Guardar en localStorage
    localStorage.setItem('rutaSeleccionada', JSON.stringify(viajeData));

    // this.obtenerCiudadesEnRuta();

    // Desplaza la vista al mapa después de seleccionar la ruta
    setTimeout(() => {
      const mapEl = document.getElementById('mapContainer');
      if (mapEl) {
        mapEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 250);
  }

  /**
   * Función para desplazar la vista al elemento HTML especificado.
   * @param element Elemento HTML al que se quiere desplazar la vista.
   */
  scrollToElement(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    const absoluteY = window.pageYOffset + rect.top;
    const duration = 2000; // Más lenta = más suave
    const startY = window.scrollY;
    const distance = absoluteY - startY;
    const startTime = performance.now();

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const scroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeOutCubic(progress);

      window.scrollTo(0, startY + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  }



  /**
   * Función para eliminar la ruta que se ha seleccionado
   * 
   */
  eliminarRutaSeleccionada() {
    // Eliminar la ruta seleccionada y restablecer los waypoints
    this.selectedRoute = null;
    this.waypoints = [];
    this.paradasSeleccionadas.clear();

    // Limpiar la vista del mapa
    this.directionsRenderer.setDirections(this.selectedRoute);

    // Eliminar la ruta de la memoria o del servicio
    localStorage.removeItem('rutaConParadas');
    this.travelService.setViajeData({
      ...this.travelService.getViajeData(),
      ruta_seleccionada: null,
    });

    // Resetear cualquier estado adicional necesario
    this.rutaConParadasSeleccionada = false;
    this.sugerenciasParadas = [];
    this.cargandoSugerencias = false;

    this.buscarRutas(this.origen, this.destino);
  }


}
