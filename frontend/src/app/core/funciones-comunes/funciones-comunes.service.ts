import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelpModalComponent } from 'src/app/components/help-modal/help-modal.component';
import { ModalErrorComponent } from 'src/app/components/modal-error/modal-error.component';
import { Usuario } from 'src/app/models/user/usuario.model';
import {
  CARS,
  Coches,
  COLORES,
  COLOURS,
} from 'src/app/models/vehiculos/marcas_modelos.model';
import { VehiculosServicesService } from '../vehiculos-services/vehiculos-services.service';
import { lastValueFrom } from 'rxjs';
import { UserServicesService } from '../user-services/user-services.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FuncionesComunes {
  userData: Usuario = {} as Usuario;

  sugerenciasOrigen: any[] = [];
  sugerenciasDestino: any[] = [];

  listadoCoches = CARS;
  marcaSeleccionada: string = '';
  modeloSeleccionado: string = '';
  colorSeleccionado: string = '';
  matricula: string = '';
  modelosFiltrados: string[] = [];
  listadoColores: string[] = COLORES;
  listColours: string[] = COLOURS;
  validacionIdioma: boolean = true;
  mostrarSelectorVehiculo: boolean = false;
  vehiculos_usuario: any[] = [];
  VehiculoYaAnadido: boolean = false;
  matriculaNoValida: boolean = false;

  usuario: any = {} as Usuario;

  constructor(
    private dialog: MatDialog,
    private vehicleService: VehiculosServicesService,
    private userService: UserServicesService,
    private router: Router
  ) {
    this.loadUserData();
  }

  /**
   * Función para recoger de "localStorage" los datos del usuario, si los hay.
   */
  loadUserData(): void {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
  }

  /**
   *      Función para validar si el usuario está logado o no.
   *
   * -> Verifica que "userData" existe.
   * -> Verifica si "userData" tiene datos.
   * -> Verifica si hay un "email" en los atributos del usuario.
   *
   * @returns Si todas las validaciones se cumplen, devuelve un TRUE, en caso contrario FALSE.
   */
  isUserLoggedIn(): boolean {
    if (!this.userData) return false;
    if (Object.keys(this.userData).length === 0) return false;
    if (!this.userData.usuario?.email) return false;
    return true;
  }

  /**
   * Función para obtener la url en la que está posicionado el usuario.
   *
   * @returns
   */
  getBaseUrl() {
    const url = this.router.url;
    const baseUrl = url.split('?')[0];
    localStorage.setItem('url_anterior', baseUrl);
    return baseUrl;
  }

  /**
   * Función para dar formato al selector de preferencias del viaje.
   *
   * -> Primero se valida el parámetro de entrada "preferencias"
   *    para conocer el estado del objeto que se recibe y evitar errores.
   *
   * @param viaje Recibe los datos del viaje seleccionado.
   * @returns
   */
  validacionPreferencias(preferencias: any): string {
    let preferencia: any;

    if (!preferencias || !preferencias.viaje) {
      preferencia = preferencias ? preferencias.preferencias : '';
    } else {
      preferencia = preferencias.viaje.usuario
        ? preferencias.viaje.usuario.preferencias
        : '';
    }

    if (!preferencia) {
      return '';
    }

    switch (preferencia) {
      case 'Silencio':
        return 'Prefiere viajar en silencio';
      case 'Dormir':
        return 'Prefiere ir durmiendo';
      case 'Escuchar música':
        return 'Prefiere ir escuchando música';
      case 'Hablar':
        return 'Prefiere ir hablando';
      default:
        return '';
    }
  }

  /**
   * Función para abrir la ventana modal con mensajes de error.
   *
   * @param title Recibe el título a mostrar.
   * @param message Recibe el mensaje a mostrar.
   */
  openErrorModal(title: string, message: string) {
    return this.dialog.open(ModalErrorComponent, {
      data: { title, message },
      panelClass: 'dialog-animate',
    });
  }

  /**
   * Función para abrir la ventana modal con los mensajes de confirmación.
   *
   * @param title Recibe el título a mostrar.
   * @param message Recibe el mensaje a mostrar.
   */
  openConfirmModal(title: string, message: string) {
    return this.dialog.open(HelpModalComponent, {
      data: { title, message },
      disableClose: true,
    });
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   *     FUNCIONES PARA LAS SUGERENCIAS DE VIAJES
   *
   * * * * * * * * * * * * * * * * * * * * * * * * * */

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
        .then((response) => response.json())
        .then((data) => {
          this.sugerenciasOrigen = data.filter(
            (item: any) =>
              item.address &&
              (item.address.city ||
                item.address.town ||
                item.address.village) &&
              item.address.country_code === 'es'
          );
        })
        .catch((error) => {
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
        .then((response) => response.json())
        .then((data) => {
          this.sugerenciasDestino = data.filter(
            (item: any) =>
              item.address &&
              (item.address.city ||
                item.address.town ||
                item.address.village) &&
              item.address.country_code === 'es'
          );
        })
        .catch((error) => {
          console.error('Error al obtener sugerencias de destino:', error);
        });
    } else {
      this.sugerenciasDestino = [];
    }
  }

  /**
   * Función para validar si un viaje ha terminado o no.   *
   * @param fecha_salida
   * @returns
   */
  esViajeFinalizado(fecha_salida: string, hora_llegada: string): boolean {
    // Crear objeto Date con la fecha de salida
    const fechaViaje = new Date(fecha_salida);

    // Extraer hora y minutos de hora_llegada
    const [hora, minutos] = hora_llegada.split(':').map(Number);

    // Añadir la hora de llegada a la fecha de salida
    fechaViaje.setHours(hora, minutos, 0, 0);

    // Obtener la fecha y hora actuales
    const ahora = new Date();

    // Comparar si el viaje ya terminó
    return ahora > fechaViaje;
  }

  /******************************************
   *                                        *
   *  FUNCIONES PARA EL PERFIL DEL USUARIO  *
   *                                        *
   *****************************************/

  /**
   * Función para obtener los datos del usuario.   *
   * @param id_usuario
   */
  obtenerDatosUsuario(id_usuario: number) {
    this.usuario = lastValueFrom(
      this.userService.obtenerUsuarioPorID(id_usuario)
    );
  }

  /******************************************
   *                                        *
   *  FUNCIONES PARA VEHÍCULOS              *
   *                                        *
   *****************************************/

  /**
   * Función para guardar un coche en la
   * lista de vehículos del usuario.
   */

  /**
   * Función para verificar si el usuario tiene vehículos
   */
  get noVehiculos(): boolean {
    return this.userData?.usuario?.vehiculos?.length === 0;
  }

  /**
   * Función para filtrar los modelos de los coches
   */
  filtrarModelos() {
    const coche = this.listadoCoches.find(
      (vehiculo) => vehiculo.marca === this.marcaSeleccionada
    );
    this.modelosFiltrados = coche ? coche.modelos : []; //si "coche" viene con algún dato, saca los modelos y los guarda en "modelosFiltrados". Si no (:), guarda un array vacio
    this.modeloSeleccionado = '';
  }

  /**
   * Para mostrar (o no) el selector de marca, modelo y color de coche
   */
  botonAnadirVehiculo() {
    this.mostrarSelectorVehiculo = !this.mostrarSelectorVehiculo;
  }

  /**
   * Función para obtener la lista de vehículos de un usuario.   *
   */
  obtenerVehiculos() {
    const id_usuario = this.userData.usuario.id;
    this.vehicleService
      .obtenerVehiculosUsuario(id_usuario)
      .subscribe((resultado) => {
        console.log('Vehículos: ', resultado.vehiculos);
        this.vehiculos_usuario = resultado.vehiculos;
      });
  }

  /**
   * Función para mostrar las imágenes de colores de los coches
   * según el color que se tenga seleccionado del coche.   *
   * @param color
   * @returns
   */
  mostrarColorCoche(color: string): string {
    const blanco: string = '../../../assets/ColoresCoches/Blanco.png';
    const negro: string = '../../../assets/ColoresCoches/Negro.png';
    const rojo: string = '../../../assets/ColoresCoches/Rojo.png';
    const amarillo: string = '../../../assets/ColoresCoches/Amarillo.png';
    const verde: string = '../../../assets/ColoresCoches/Verde.png';
    const gris: string = '../../../assets/ColoresCoches/Gris.png';
    const dorado: string = '../../../assets/ColoresCoches/Dorado.png';
    const marron: string = '../../../assets/ColoresCoches/Marrón.png';
    const morado: string = '../../../assets/ColoresCoches/Morado.png';
    const beige: string = '../../../assets/ColoresCoches/Beige.png';
    const perla: string = '../../../assets/ColoresCoches/Perla.png';
    const otro: string = '../../../assets/ColoresCoches/Otros.png';

    switch (color) {
      case 'blanco':
        return blanco;
      case 'negro':
        return negro;
      case 'rojo':
        return rojo;
      case 'amarillo':
        return amarillo;
      case 'verde':
        return verde;
      case 'gris':
        return gris;
      case 'dorado':
        return dorado;
      case 'marron':
        return marron;
      case 'morado':
        return morado;
      case 'beige':
        return beige;
      case 'perla':
        return perla;
      case 'otro':
        return otro;
      default:
        return '';
    }
  }

  /**
   * Función para editar los datos de un vehículo añadido
   * @param vehiculo
   */

  editarVehiculo(vehiculo: any): any {
    console.log('Vehiculo modificado: ', vehiculo);

    this.vehicleService
      .editarVehiculo(vehiculo.id, vehiculo)
      .subscribe((resultado) => {
        console.log('Resultado: ', resultado);
      });
  }

  /**
   * Función para validar que la matrícula tenga el formato 0000ABC
   */
  validarMatricula(): void {
    const regex = /^[0-9]{4}[A-Z]{3}$/;

    // Convertir a mayúsculas automáticamente
    this.matricula = this.matricula.toUpperCase();

    if (!regex.test(this.matricula)) {
      console.log(
        'Matrícula inválida. Debe tener 4 números seguidos de 3 letras (Ej: 1234ABC).'
      );
      this.matriculaNoValida = true;
    } else {
      this.matriculaNoValida = false;
    }
  }
}
