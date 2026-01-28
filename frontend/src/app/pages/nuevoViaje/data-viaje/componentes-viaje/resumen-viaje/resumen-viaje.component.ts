import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { IonicModule, NavController } from '@ionic/angular';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { Usuario } from 'src/app/models/user/usuario.model';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HelpModalComponent } from 'src/app/components/help-modal/help-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalErrorComponent } from 'src/app/components/modal-error/modal-error.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';
import { TranslateModule } from '@ngx-translate/core';
import { catchError, map, Observable, of, Subject, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { VehiculosServicesService } from 'src/app/core/vehiculos-services/vehiculos-services.service';


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
    MatDivider,
    MatButtonModule,
    CommonModule,
    TranslateModule,
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

    this.route.queryParams.subscribe(params => {
      const viajeId = params['id'];

      this.currentViajeData = this.travelService.getViajeData();
      this.obtenerViaje(viajeId);

      // Si no hay viajeId y los datos no están completos, redirigir al home
      if (
        !viajeId &&
        (
          !this.currentViajeData ||
          !this.currentViajeData?.coche ||
          !this.currentViajeData?.destino ||
          !this.currentViajeData?.fecha_salida ||
          !this.currentViajeData?.hora_salida ||
          !this.currentViajeData?.origen ||
          !this.currentViajeData?.plazas
        )
      ) {
        this.navCtrl.navigateRoot('/home');
        return;
      }
    });

    if (this.currentViajeData?.coche) {
      const coche = this.currentViajeData.coche;
      this.nombreVehiculo = `${coche.marca} ${coche.modelo}`;
      this.editableFields.coche = coche;
    }
  }

  /**
   * Función que se ejecuta después de que la vista haya sido inicializada
   * Aquí inicializamos el mapa si hay una ruta seleccionada
   */
  ngAfterViewInit() {
    if (this.currentViajeData?.ruta_seleccionada) {
      this.inicializarMapaResumen();
    }
  }

  /**
   * Función para inicializar el mapa en el resumen del viaje
   * @param mapOptions --> Contiene la configuración del mapa
   * 
   * 
   */
  inicializarMapaResumen() {
    const mapOptions = {
      disableDefaultUI: true,
      zoomControl: false,
      scrollwheel: false
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.directionsRenderer.setMap(this.map);

    this.directionsRenderer.setDirections(this.currentViajeData.ruta_seleccionada);
  }

  obtenerViaje(viaje_id: number) {
    this.travelService.getViaje(viaje_id).subscribe((resultado) => {
      console.log('Viaje a editar: ', resultado);
      this.currentViajeData = resultado;
    })
  }

  /**
   * Función para confirmar el viaje.
   * Al confirmar mostramos un mensaje de confirmación para informar al usuario
   * Y a continuación se guardam los datos en BBDD.
   *
   * Una vez confirmado el mensaje, se reenvía a la ventana home.
   */
  confirmarViaje() {
    const title: string = 'Confirmación de Viaje';
    const message: string = '<p>El viaje ha sido confirmado con éxito.</p><p>Si quieres, puedes crear un viaje de vuelta también.</p>';

    this.currentViajeData.usuario = this.userData.usuario; // <- Se añaden todos los datos del usuario que ha creado el viaje.
    this.currentViajeData.usuario_id = this.userData.usuario.id; // <- Se añade el ID del usuario que ha creado el viaje.
    this.currentViajeData.plazas = Number(this.currentViajeData.plazas);
    if (isNaN(this.currentViajeData.plazas)) {
      this.openError(
        'Error!',
        'El número de plazas no es válido. Por favor, verifica los datos.'
      );
      return;
    }

    const fechaSalida = new Date(this.currentViajeData.fecha_salida)
      .toISOString()
      .split('T')[0];
    this.currentViajeData.fecha_salida = fechaSalida;

    const duracion = this.calcularDuracionViaje(
      this.currentViajeData.fecha_salida,
      this.currentViajeData.hora_salida,
      this.currentViajeData.hora_llegada
    );

    if (!duracion) {
      this.openError('Error!', 'No se pudo calcular la duración del viaje.');
      return;
    }

    this.currentViajeData.tiempoTotal = duracion;
    this.currentViajeData.duracion_viaje = duracion;
    console.log('Resumen viaje: ', this.currentViajeData);

    const mensajeConfirmación = this.openHelp(
      'Confirmar viaje',
      'Si continuas se va a confirmar el viaje.',
      true, false, false
    );
    mensajeConfirmación.afterClosed().subscribe(() => {
      this.travelService.guardarViaje(this.currentViajeData).subscribe(
        (response) => {
          console.log('Viaje guardado con éxito:', response);
          this.openHelp(title, message, true, false, true);
        },
        (error) => {
          this.openError(
            'Error!',
            'Error al guardar el viaje. Por favor, inténtalo de nuevo más tarde.'
          );
          console.error('Error al guardar el viaje:', error);
        }
      );
    });
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

      // Si la llegada es anterior a la salida, asumimos que es al día siguiente
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
    this.navCtrl.navigateRoot('/data-viaje');
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
      this.currentViajeData[field] = this.editableFields[field];

      const viajeData = {
        ...this.travelService.getViajeData(),
        [field]: this.currentViajeData[field],
      };
      this.travelService.setViajeData(viajeData);
    } else {
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
    try {
      if (!hora_salida || !duracion_viaje) return null;

      // Paso 1: Parsear hora de salida
      const [horasSalida, minutosSalida] = hora_salida.split(':').map(Number);
      const salidaDate = new Date();
      salidaDate.setHours(horasSalida, minutosSalida, 0);

      // Paso 2: Parsear duración (ej. "1h 47 min" o "47 min")
      const horasMatch = duracion_viaje.match(/(\d+)\s*h/);
      const minutosMatch = duracion_viaje.match(/(\d+)\s*min/);

      const horas = horasMatch ? parseInt(horasMatch[1]) : 0;
      const minutos = minutosMatch ? parseInt(minutosMatch[1]) : 0;

      // Paso 3: Sumar duración a hora de salida
      const llegadaDate = new Date(salidaDate);
      llegadaDate.setHours(llegadaDate.getHours() + horas);
      llegadaDate.setMinutes(llegadaDate.getMinutes() + minutos);
      this.currentViajeData.duracion_viaje = llegadaDate.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
      });
      return llegadaDate.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch (error) {
      console.error('Error al calcular hora de llegada:', error);
      return null;
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

  /**
   * Función para actualizar la información del viaje desde el servicio.
   * Se suscribe a los cambios en los datos del viaje y actualiza las variables locales.
   */
  actualizarInformacion() {
    this.travelService.viajeData$
      .pipe(takeUntil(this.destroy$))
      .subscribe((viajeData) => {
        this.currentViajeData = viajeData ?? {};
        this.origen = this.currentViajeData?.origen || '';
        // this.selectedRoute = this.currentViajeData?.ruta_seleccionada || null;
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
    return this.vehiculosService.obtenerVehiculosUsuario(usuario_id).subscribe(vehiculos => {
      this.vehiculosUsuario = vehiculos;
    });
  }
}
