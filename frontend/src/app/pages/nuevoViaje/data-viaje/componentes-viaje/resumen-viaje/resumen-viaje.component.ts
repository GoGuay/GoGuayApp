import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIcon } from '@angular/material/icon';
import { IonicModule, NavController } from '@ionic/angular';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { catchError, map, Observable, of, Subject, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../../../../shared/navbar/navbar.component';
import { SpinnerComponent } from '../../../../../components/spinner/spinner.component';
import { Usuario } from '../../../../../models/user/usuario.model';
import { TravelService } from '../../../../../core/travel-services/travel.service';
import { VehiculosServicesService } from '../../../../../core/vehiculos-services/vehiculos-services.service';
import { FuncionesComunes } from '../../../../../core/funciones-comunes/funciones-comunes.service';
import { HelpModalComponent } from '../../../../../components/help-modal/help-modal.component';
import { ModalErrorComponent } from '../../../../../components/modal-error/modal-error.component';


@Component({
  selector: 'app-resumen-viaje',
  standalone: true,
  imports: [
    IonicModule,
    MatIcon,
    MatCardModule,
    MatDatepickerModule,
    FormsModule,
    NavbarComponent,
    MatButtonModule,
    CommonModule,
    TranslateModule,
    SpinnerComponent
  ],
  templateUrl: './resumen-viaje.component.html',
  styleUrls: ['./resumen-viaje.component.scss'],
})
export class ResumenViajeComponent implements OnInit {

  /**
   * Referencia al elemento del mapa en el resumen del viaje
   * @type {ElementRef}
   */
  @ViewChild('mapResumen') mapElement!: ElementRef;
  map: any;
  directionsRenderer: any;


  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;

  editMode: any = {};
  editableFields: any = {};

  origen: string = '';
  destino: string = '';

  currentViajeData: any;
  private destroy$ = new Subject<void>();
  vehiculoSeleccionado: { marca: string; modelo: string } | null = null;
  nombreVehiculo: string = '';
  vehiculosUsuario: any[] = [];
  ruta_navegacion_origen: string = '';
  cargando_viaje: boolean = false;


  constructor(
    private travelService: TravelService,
    private vehiculosService: VehiculosServicesService,
    private navCtrl: NavController,
    private dialog: MatDialog,
    public funcionesComunes: FuncionesComunes,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');

    if (this.userData?.usuario?.email) {
      this.userLoggedIn = true;
      this.obtenerVehiculosUsuario(this.userData.usuario.id);
    } else {
      this.userLoggedIn = false;
    }

    this.actualizarInformacion();

    this.route.queryParams.subscribe(params => {
      const viajeId = params['id'];
      this.ruta_navegacion_origen = params['origin'];

      if (viajeId) {
        this.obtenerViaje(viajeId);
      }

      if (!viajeId && (!this.currentViajeData || !this.currentViajeData?.origen)) {
        this.navCtrl.navigateRoot('/home');
        return;
      }
    });

    console.log('CURRENT DATA: ', this.currentViajeData);
    
  }

  /**
   * Función que se ejecuta después de que la vista haya sido inicializada
   * Aquí inicializamos el mapa si hay una ruta seleccionada
   */
  ngAfterViewInit() {
    if (this.currentViajeData?.ruta_seleccionada) {
      this.intentarInicializarMapa();
    }
  }

  intentarInicializarMapa() {
    setTimeout(() => {
      if (this.mapElement && this.mapElement.nativeElement) {
        this.inicializarMapaResumen();
      } else {
        setTimeout(() => this.intentarInicializarMapa(), 200);
      }
    }, 100);
  }

  /**
   * Función para inicializar el mapa en el resumen del viaje
   * @param mapOptions --> Contiene la configuración del mapa
   * 
   * 
   */
  inicializarMapaResumen() {
    if (!this.mapElement) return;

    const mapOptions = {
      disableDefaultUI: true,
      zoomControl: false,
      scrollwheel: false,
      gestureHandling: 'none' 
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.directionsRenderer = new google.maps.DirectionsRenderer({
      suppressMarkers: false,
      map: this.map
    });

    setTimeout(() => {
      if (this.currentViajeData?.ruta_seleccionada) {
        this.directionsRenderer.setDirections(this.currentViajeData.ruta_seleccionada);

        google.maps.event.trigger(this.map, 'resize');

        const bounds = new google.maps.LatLngBounds();
        const route = this.currentViajeData.ruta_seleccionada.routes[0];
        
        if (route && route.overview_path) {
          route.overview_path.forEach((point: any) => bounds.extend(point));
          this.map.fitBounds(bounds);
        }
      }
    }, 500); 
  }

  obtenerViaje(viaje_id: number) {
    this.travelService.getViaje(viaje_id).subscribe((resultado) => {
      console.log('Viaje a editar: ', resultado);
      this.currentViajeData = resultado;
      this.setInitialCoche();
      if (this.currentViajeData?.ruta_seleccionada) {
        this.intentarInicializarMapa();
      }
    })
  }

  setInitialCoche() {
    if (!this.currentViajeData || this.vehiculosUsuario.length === 0) return;

    const idBuscado = this.currentViajeData.vehiculo || 
                      this.currentViajeData.vehiculo_id || 
                      (this.currentViajeData.coche?.id);

    if (idBuscado) {
      const cocheEncontrado = this.vehiculosUsuario.find(v => v.id === idBuscado);
      
      if (cocheEncontrado) {
        this.editableFields.coche = cocheEncontrado;
        this.nombreVehiculo = `${cocheEncontrado.marca} ${cocheEncontrado.modelo}`;
        this.currentViajeData.coche = cocheEncontrado;
      }
    }
  }

  /**
   * Función para confirmar el viaje.
   * Al confirmar mostramos un mensaje de confirmación para informar al usuario
   * Y a continuación se guardam los datos en BBDD.
   *
   * Una vez confirmado el mensaje, se reenvía a la ventana home.
   */
  confirmarViaje() {
    const esEdicion = this.ruta_navegacion_origen === 'mis-viajes';
    const title = esEdicion ? 'Actualizar Viaje' : 'Confirmación de Viaje';
    const message = esEdicion 
      ? '<p>Los cambios se han guardado correctamente y se ha notificado a tus acompañantes.</p>' 
      : '<p>El viaje ha sido confirmado con éxito.</p><p>Si quieres, puedes crear un viaje de vuelta también.</p>';

    this.currentViajeData.usuario_id = this.userData.usuario.id;
    this.currentViajeData.plazas = Number(this.currentViajeData.plazas);
    this.currentViajeData.origen = this.origen || this.currentViajeData.origen;
    this.currentViajeData.destino = this.destino || this.currentViajeData.destino;

    if (this.editableFields.coche) {
      this.currentViajeData.coche = { id: this.editableFields.coche.id };
    } else if (this.currentViajeData.vehiculo && !this.currentViajeData.coche) {
      this.currentViajeData.coche = { id: this.currentViajeData.vehiculo };
    }

    if (isNaN(this.currentViajeData.plazas)) {
      this.openError('Error!', 'El número de plazas no es válido.');
      return;
    }

    const fechaSalidaRaw = new Date(this.currentViajeData.fecha_salida);
    this.currentViajeData.fecha_salida = fechaSalidaRaw.toISOString().split('T')[0];

    const pregunta = esEdicion ? '¿Deseas guardar los cambios realizados?' : '¿Deseas confirmar el viaje?';
    const mensajeConfirmación = this.openHelp(title, pregunta, true, false, false);
    
    mensajeConfirmación.afterClosed().subscribe((res) => {
      if (res) {
        this.cargando_viaje = true;

        const peticion = esEdicion 
          ? this.travelService.editarViaje(this.currentViajeData.id, this.currentViajeData)
          : this.travelService.guardarViaje(this.currentViajeData);

        peticion.subscribe({
          next: (response) => {
            this.cargando_viaje = false;
            const modalExito = this.openHelp(title, message, true, false, !esEdicion);
            
            modalExito.afterClosed().subscribe(() => {
              this.navCtrl.navigateRoot(`/mis-viajes?id=${this.userData.usuario.id}`);
            });
          },
          error: (error) => {
            this.cargando_viaje = false;
            console.error("Error en la operación:", error);
            this.openError('Error!', 'No se han podido procesar los datos del viaje.');
          }
        });
      }
    });
  }


  private sumarDuracion(horaInicio: string, sumarH: number, sumarM: number): string {
    let [h, m] = horaInicio.split(':').map(Number);

    m += sumarM;
    h += Math.floor(m / 60);
    m = m % 60;
    h = (h + sumarH) % 24;

    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
  }

  /**
   * Calcula la duración entre la hora de salida y llegada.
   * @param fechaSalida Fecha del viaje en formato 'YYYY-MM-DD'
   * @param horaSalida Hora de salida en formato 'HH:mm'
   * @param horaLlegada Hora de llegada en formato 'HH:mm'
   * @returns Duración del viaje en formato 'HH:mm', o null si hay error.
   */
  calcularDuracionViaje(fechaSalida: string, horaSalida: string, horaLlegada: string): string | null {
    try {
      if (!fechaSalida || !horaSalida || !horaLlegada) return null;

      const salida = new Date(`${fechaSalida}T${horaSalida}`);
      let llegada = new Date(`${fechaSalida}T${horaLlegada}`);

      if (llegada < salida) {
        llegada.setDate(llegada.getDate() + 1);
      }

      const diffMs = llegada.getTime() - salida.getTime();
      const diffMinutes = Math.floor(diffMs / 60000);
      const hours = Math.floor(diffMinutes / 60);
      const minutes = diffMinutes % 60;

      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    } catch (error) {
      console.error('Error al calcular duración del viaje:', error);
      return null;
    }
  }

  /**
   * Función para dar un formato específico a la fecha.
   */
  getFormattedDate(): string {
    if (this.currentViajeData.fecha_salida) {
      const date = new Date(this.currentViajeData.fecha_salida);
      return date.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });
    }
    return 'Ninguna fecha seleccionada.';
  }

  /**
   * Función que nos va a devolver a la pantalla de inicio del viaje
   */
  volverAInicioDelViaje() {
    const userId = this.userData.usuario.id;
    if (this.ruta_navegacion_origen === 'mis-viajes') {
      this.navCtrl.navigateRoot(`/mis-viajes?id=${userId}`);
    } else {
      this.navCtrl.navigateRoot('/data-viaje');
    }

  }

  /**
   * Función para abrir la ventana emergente de ayuda
   * para informar al usuario.
   *
   * @param title Título que se va a mostrar en la ventana
   * @param message Mensaje que se va a mostrar en la ventana
   */
  openHelp(title: string, message: string, showAcceptButton: boolean, showMoreInfoButton: boolean, showReturnTripButton: boolean) {
    return this.dialog.open(HelpModalComponent, {
      data: { title, message, showAcceptButton, showMoreInfoButton, showReturnTripButton },
      disableClose: true,
    });
  }

  /**
   * Función para abrir la ventana emergente de error
   * para informar al usuario.
   *
   * @param title Título que se va a mostrar en la ventana
   * @param message Mensaje que se va a mostrar en la ventana
   */
  openError(title: string, message: string) {
    return this.dialog.open(ModalErrorComponent, {
      data: { title, message },
      disableClose: true,
    });
  }

  /**
   * Función para editar el input seleccionado.
   *
   * @param field Recibe los datos del input a editar
   */
  edicionInformacion(field: string) {
    if (this.editMode[field]) {
      if (field === 'origen') {
        this.currentViajeData.origen = this.origen;
      } else if (field === 'destino') {
        this.currentViajeData.destino = this.destino;
      } else if (field === 'coche') {
        this.currentViajeData.vehiculo = this.editableFields.coche.id;
        this.nombreVehiculo = `${this.editableFields.coche.marca} ${this.editableFields.coche.modelo}`;
      } else {
        this.currentViajeData[field] = this.editableFields[field];
      }

      if (field === 'origen' || field === 'destino') {
        this.recalcularRuta();
      }

      this.travelService.setViajeData(this.currentViajeData);
    } else {
      if (field === 'origen') this.origen = this.currentViajeData.origen;
      if (field === 'destino') this.destino = this.currentViajeData.destino;
      this.editableFields[field] = this.currentViajeData[field];
    }
    this.editMode[field] = !this.editMode[field];
  }

  /**
   * Función para calcular la hora de llegada del viaje
   * @param hora_salida
   * @param duracion_viaje
   * @returns
   */
  calcularHoraLlegada(hora_salida: string, duracion_viaje: string): string | null {
    if (!hora_salida || !duracion_viaje) return this.currentViajeData?.hora_llegada || '--:--';

    try {
      const [horasSalida, minutosSalida] = hora_salida.split(':').map(Number);
      const salidaDate = new Date();
      salidaDate.setHours(horasSalida, minutosSalida, 0);

      const horasMatch = duracion_viaje.match(/(\d+)\s*h/);
      const minutosMatch = duracion_viaje.match(/(\d+)\s*min/);

      const horas = horasMatch ? parseInt(horasMatch[1]) : 0;
      const minutos = minutosMatch ? parseInt(minutosMatch[1]) : 0;

      const llegadaDate = new Date(salidaDate);
      llegadaDate.setHours(llegadaDate.getHours() + horas);
      llegadaDate.setMinutes(llegadaDate.getMinutes() + minutos);

      const resultado = llegadaDate.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
      });

      this.currentViajeData.hora_llegada = resultado;
      this.currentViajeData.duracion_viaje = duracion_viaje; 

      return resultado;
    } catch (error) {
      console.error("Error calculando hora:", error);
      return this.currentViajeData?.hora_llegada || '--:--';
    }
  }

  /**
   * Función para recalcular la ruta si se modifica
   */
  recalcularRuta() {
    if (!this.currentViajeData.origen || !this.currentViajeData.destino) return;

    const directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin: this.currentViajeData.origen,
        destination: this.currentViajeData.destino,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK && result) {
          const duracionTexto = result.routes[0]?.legs[0]?.duration?.text || 'No especificado';
          
          this.currentViajeData.ruta_seleccionada = {
            ...result,
            tiempoTotal: duracionTexto 
          };
          
          if (this.directionsRenderer) {
            this.directionsRenderer.setDirections(result);
          }

          this.calcularHoraLlegada(this.currentViajeData.hora_salida, duracionTexto);
        } else {
          this.currentViajeData.ruta_seleccionada = { routes: [], tiempoTotal: 'No especificado' };
          console.error('Error al recalcular ruta:', status);
        }
      }
    );
  }

  /**
   * Función para guardar la información de la localidad de origen seleccionada.
   *
   * @param localidad -> Recibe la localidad seleccionada en la lista de sugerencias.
   */
  seleccionarLocalidadOrigen(localidad: any) {
    this.origen = localidad.display_name.split(',')[0].trim();
    this.currentViajeData.origen = this.origen;
    this.travelService.setViajeData(this.currentViajeData);
    this.funcionesComunes.sugerenciasOrigen = [];
  }

  /**
   * Función para guardar la información de la localidad de destino seleccionada.
   *
   * @param localidad -> Recibe la localidad seleccionada en la lista de sugerencias.
   */
  seleccionarLocalidadDestino(localidad: any) {
    this.destino = localidad.display_name.split(',')[0].trim();
    this.currentViajeData.destino = this.destino;
    this.travelService.setViajeData(this.currentViajeData);
    this.funcionesComunes.sugerenciasDestino = [];
  }

  /**
   * Función para actualizar la información del viaje desde el servicio.
   * Se suscribe a los cambios en los datos del viaje y actualiza las variables locales.
   */
  actualizarInformacion() {
    this.travelService.viajeData$
      .pipe(takeUntil(this.destroy$))
      .subscribe((viajeData) => {
        if (viajeData) {
          this.currentViajeData = { ...viajeData };
          this.origen = this.currentViajeData?.origen || '';
          this.destino = this.currentViajeData?.destino || '';
          
          this.editableFields.precio_viaje = this.currentViajeData?.precio_viaje || 0;
          
          if (this.currentViajeData?.coche && this.vehiculosUsuario.length > 0) {
            this.setInitialCoche();
          }
        }
      });
  }

  /**
   * Función para obtener el vehículo seleccionado por su ID.
   * Utiliza el servicio de vehículos para obtener los detalles del vehículo
   * @param vehiculo_id recibe el ID del vehículo seleccionado
   * @returns devuelve un Observable con el nombre del vehículo en formato "Marca Modelo"
   * Si ocurre un error, devuelve un Observable con el mensaje "Vehículo no encontrado"
   */
  obtenerVehiculo(vehiculo_id: number): Observable<string> {
    return this.vehiculosService.obtenerVehiculoID(vehiculo_id).pipe(
      map(vehiculo => `${vehiculo.marca} ${vehiculo.modelo}`),
      catchError(err => {
        console.error('Error al obtener vehículo:', err);
        return of('Vehículo no encontrado');
      })
    );
  }

  /**
   * Función para obtener los vehículos del usuario logado.
   * @param usuario_id --> ID del usuario logado
   * @returns --> Devuelve la lista de vehículos del usuario
   */
  obtenerVehiculosUsuario(usuario_id: number) {
    this.vehiculosService.obtenerVehiculosUsuario(usuario_id).subscribe(res => {
      this.vehiculosUsuario = Array.isArray(res) ? res : (res.vehiculos || []);
      this.setInitialCoche();
    });
  }

  /**
   * Función para conocer el vehículo seleccionado para el viaje
   */
  compareVehiculos(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

}
