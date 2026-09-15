import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TravelService } from '../../../../../core/travel-services/travel.service';
import { ChangeDetectorRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FuncionesComunes } from '../../../../../core/funciones-comunes/funciones-comunes.service';
import { SpinnerComponent } from '../../../../../components/spinner/spinner.component';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime, distinctUntilChanged, filter, of, switchMap, tap } from 'rxjs';
import { GoogleServices } from '../../../../../core/google-services/google-services.service';

@Component({
  selector: 'app-segundo-paso',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    MatButtonModule,
    SpinnerComponent,
  ],
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

  private buscadorOrigen$ = new Subject<string>();
  private buscadorDestino$ = new Subject<string>();

  indiceActivoOrigen: number = -1;
  indiceActivoDestino: number = -1;

  estaEnOrigen: boolean = false;
  estaEnDestino: boolean = false;
  private ultimaLocalidadValidaOrigen: any = null;
  private ultimaLocalidadValidaDestino: any = null;

  @ViewChild('inputOrigen') inputOrigen!: ElementRef;
  @ViewChild('inputDestino') inputDestino!: ElementRef;

  private cacheConsultas: { [key: string]: any[] } = {};

  currentLocation: { lat: number; lng: number } | null = null;

  mapCenter: { lat: number; lng: number } = { lat: 40.4168, lng: -3.7038 };

  cargandoOrigen: boolean = false;
  cargandoDestino: boolean = false;

  currentViajeData: any;

  constructor(
    private travelService: TravelService,
    private cdr: ChangeDetectorRef,
    public funcionesComunes: FuncionesComunes,
    private googleService: GoogleServices
  ) {

    /**
     * CEREBRO BUSQUEDA LOCALIDAD ORIGEN: Escucha los cambios en el input de origen y realiza la búsqueda de localidades.
     * Se utiliza debounceTime para esperar 400ms después de que el usuario deje de escribir, y distinctUntilChanged para evitar búsquedas repetidas con el mismo texto.
     * Se filtra para asegurarse de que la búsqueda se realice solo cuando el usuario está escribiendo en el campo de origen y que el texto comience con una letra.
     * Luego, se realiza la búsqueda utilizando el servicio GoogleServices y se actualizan las sugerencias de origen.
     */
    this.buscadorOrigen$
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        filter(() => this.estaEnOrigen),
        filter((texto) => {
          const regexLetra = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]/;
          return regexLetra.test(texto);
        }),
        switchMap((texto) => {
          const termino = texto.toLowerCase().trim();
          if (this.cacheConsultas[termino]) {
            return of(this.cacheConsultas[termino]);
          }
          if (texto.length >= 3) {
            return this.googleService
              .obtenerLocalidad(texto)
              .pipe(
                tap(
                  (resultados) => (this.cacheConsultas[termino] = resultados),
                ),
              );
          } else {
            this.sugerenciasOrigen = [];
            return [];
          }
        }),
        filter(() => this.estaEnOrigen),
      )
      .subscribe((respuesta: any) => {
        this.sugerenciasOrigen = respuesta;
        this.cargandoOrigen = false;
        this.cdr.detectChanges();
      });

    /**
     * CEREBRO BUSQUEDA LOCALIDAD DESTINO: Escucha los cambios en el input de destino y realiza la búsqueda de localidades.
     * Funciona de manera similar a la búsqueda de origen, pero se aplica al campo de destino.
     * Se utiliza debounceTime para esperar 400ms después de que el usuario deje de escribir, y distinctUntilChanged para evitar búsquedas repetidas con el mismo texto.
     * Se filtra para asegurarse de que la búsqueda se realice solo cuando el usuario está escribiendo en el campo de destino y que el texto comience con una letra.
     * Luego, se realiza la búsqueda utilizando el servicio GoogleServices y se actualizan las sugerencias de destino.
     */
    this.buscadorDestino$
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        filter(() => this.estaEnDestino),
        filter((texto) => {
          const regexLetra = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]/;
          return regexLetra.test(texto);
        }),
        switchMap((texto) => {
          if (texto.length >= 3) {
            return this.googleService.obtenerLocalidad(texto);
          } else {
            this.sugerenciasDestino = [];
            return [];
          }
        }),
        filter(() => this.estaEnDestino),
      )
      .subscribe((respuesta: any) => {
        this.sugerenciasDestino = respuesta;
        this.cargandoDestino = false;
        this.cdr.detectChanges();
      });
  }

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
    this.ultimaLocalidadValidaOrigen = localidad;

    this.origen = localidad.descripcion.split(',')[0].trim();
    const viajeData = {
      ...this.travelService.getViajeData(),
      origen: this.origen,
    };
    this.travelService.setViajeData(viajeData);
    this.sugerenciasOrigen = [];
    this.indiceActivoOrigen = -1;
  }

  /**
   * Función para guardar la información de la localidad de destino seleccionada.
   *
   * @param localidad -> Recibe la localidad seleccionada en la lista de sugerencias.
   */
  seleccionarLocalidadDestino(localidad: any) {
    this.ultimaLocalidadValidaDestino = localidad;

    this.destino = localidad.descripcion.split(',')[0].trim();
    const viajeData = {
      ...this.travelService.getViajeData(),
      destino: this.destino,
    };
    this.travelService.setViajeData(viajeData);
    this.sugerenciasDestino = [];
    this.indiceActivoDestino = -1;
  }

  /**
   * Función para obtener la ubicación del usuario utilizando Leaflet.
   */
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
            .then((response) => response.json())
            .then((data) => {
              if (data && data.address) {
                let city =
                  data.address.city ||
                  data.address.town ||
                  data.address.village ||
                  '';
                if (city) {
                  this.origen = city;
                  
                  this.ultimaLocalidadValidaOrigen = { descripcion: city };

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
            .catch((error) =>
              console.error(
                'Error al obtener la ubicación con Leaflet:',
                error,
              ),
            );
        },
        (error) => {
          console.error('Error de geolocalización:', error.message);
        },
      );
    } else {
      console.error('La geolocalización no está soportada por este navegador.');
    }
  }

  /**
   * Función para buscar sugerencias de localidades de origen.
   *
   * @param event -> Recibe el evento de entrada del usuario.
   */
  buscarSugerenciasOrigen(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const texto = inputElement.value;

    this.estaEnOrigen = true;
    this.estaEnDestino = false;
    this.cargandoOrigen = true;

    if (texto && texto.length >= 3) {
      this.buscadorOrigen$.next(texto);
    } else {
      this.sugerenciasOrigen = [];
      this.cargandoOrigen = false;
    }
  }

  /**
   * Función para buscar sugerencias de localidades de destino.
   *
   * @param event -> Recibe el evento de entrada del usuario.
   */
  buscarSugerenciasDestino(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const texto = inputElement.value;

    this.estaEnOrigen = false;
    this.estaEnDestino = true;
    this.cargandoDestino = true;

    if (texto && texto.length >= 3) {
      this.buscadorDestino$.next(texto);
    } else {
      this.sugerenciasDestino = [];
      this.cargandoDestino = false;
    }
  }

  /**
   * Función para validar la selección de una localidad.
   *
   * @param tipo -> Recibe el tipo de localidad ('origen' o 'destino').
   */
  validarSeleccion(tipo: 'origen' | 'destino') {
    setTimeout(() => {
      if (tipo === 'origen') {
        const textoActual = this.origen.trim();
        const textoValido = this.ultimaLocalidadValidaOrigen?.descripcion
          .split(',')[0]
          .trim();

        if (textoActual === '') {
          this.ultimaLocalidadValidaOrigen = null;
          this.limpiarSugerencias('origen', false);
          return;
        }

        if (!this.ultimaLocalidadValidaOrigen || textoActual !== textoValido) {
          this.origen = '';
          this.ultimaLocalidadValidaOrigen = null;
          this.limpiarSugerencias('origen', true);
        }
      } else {
        const textoActual = this.destino.trim();

        if (textoActual === '') {
          this.ultimaLocalidadValidaDestino = null;
          this.limpiarSugerencias('destino', false);
          return;
        }
        const textoValido = this.ultimaLocalidadValidaDestino?.descripcion
          .split(',')[0]
          .trim();

        if (!this.ultimaLocalidadValidaDestino || textoActual !== textoValido) {
          this.destino = '';
          this.ultimaLocalidadValidaDestino = null;
          this.limpiarSugerencias('destino', true);
        }
      }
    }, 250);
  }

  limpiarSugerencias(
    tipo: 'origen' | 'destino',
    devolverFoco: boolean = false,
  ) {
    if (tipo === 'origen') {
      this.sugerenciasOrigen = [];
      this.indiceActivoOrigen = -1;
      this.buscadorOrigen$.next('');
      if (devolverFoco) {
        this.inputOrigen.nativeElement.focus();
      }
    } else {
      this.sugerenciasDestino = [];
      this.indiceActivoDestino = -1;
      this.buscadorDestino$.next('');
      if (devolverFoco) {
        this.inputDestino.nativeElement.focus();
      }
    }
  }

  manejarNavegacionTeclado(
    event: KeyboardEvent,
    tipo: 'origen' | 'destino',
    index: number = -1,
  ) {
    const sugerencias =
      tipo === 'origen' ? this.sugerenciasOrigen : this.sugerenciasDestino;
    let indiceActual =
      tipo === 'origen' ? this.indiceActivoOrigen : this.indiceActivoDestino;

    if (sugerencias.length === 0) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (indiceActual < sugerencias.length - 1) {
        indiceActual++;
        this.actualizarIndiceYFoco(tipo, indiceActual);
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (indiceActual > 0) {
        indiceActual--;
        this.actualizarIndiceYFoco(tipo, indiceActual);
      } else {
        this.actualizarIndiceYFoco(tipo, -1);
        const input = tipo === 'origen' ? this.inputOrigen : this.inputDestino;
        input.nativeElement.focus();
      }
    } else if (event.key === 'Enter') {
      // Si hay algo seleccionado en la lista, lo elegimos
      if (indiceActual !== -1) {
        event.preventDefault();
        const seleccionada = sugerencias[indiceActual];
        if (tipo === 'origen') {
          this.seleccionarLocalidadOrigen(seleccionada);
        } else {
          this.seleccionarLocalidadDestino(seleccionada);
        }
      }
    } else if (event.key === 'Escape') {
      this.limpiarSugerencias(tipo);
    }
  }


  private actualizarIndiceYFoco(
    tipo: 'origen' | 'destino',
    nuevoIndice: number,
  ) {
    if (tipo === 'origen') {
      this.indiceActivoOrigen = nuevoIndice;
    } else {
      this.indiceActivoDestino = nuevoIndice;
    }

    if (nuevoIndice !== -1) {
      // Selector dinámico basado en el tipo
      const selector =
        tipo === 'origen'
          ? '.lista_sugerencias_origen'
          : '.lista_sugerencias_destino';
      setTimeout(() => {
        const elementos = document.querySelectorAll(selector);
        (elementos[nuevoIndice] as HTMLElement)?.focus();
      }, 10);
    }
  }
}
