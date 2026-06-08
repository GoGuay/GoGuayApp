import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelpModalComponent } from 'src/app/components/help-modal/help-modal.component';
import { ModalErrorComponent } from 'src/app/components/modal-error/modal-error.component';
import { Usuario } from 'src/app/models/user/usuario.model';
import { VehiculosServicesService } from '../vehiculos-services/vehiculos-services.service';
import { lastValueFrom } from 'rxjs';
import { UserServicesService } from '../user-services/user-services.service';
import { Router } from '@angular/router';
import { GoogleServices } from '../google-services/google-services.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FuncionesComunes {
  userData: Usuario = {} as Usuario;

  sugerenciasOrigen: any[] = [];
  sugerenciasDestino: any[] = [];

  validacionIdioma: boolean = true;

  cargandoOrigen: boolean = false;
  cargandoDestino: boolean = false;

  vehiculos_usuario: any[] = [];
  VehiculoYaAnadido: boolean = false;

  usuario: any = {} as Usuario;

  constructor(
    private dialog: MatDialog,
    private vehicleService: VehiculosServicesService,
    private userService: UserServicesService,
    private router: Router,
    private googleService: GoogleServices,
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
  validacionPreferencias(preferencias: any[]): string[] {
    console.log('preferencias: ', preferencias);
    if (!preferencias || !Array.isArray(preferencias)) return [];

    return preferencias
      .map((pref: any) => {
        switch (pref.toString().toLowerCase()) {
          case 'silencio':
          case 'silence':
            return 'Prefiere viajar en silencio';
          case 'dormir':
            return 'Prefiere ir durmiendo';
          case 'escuchar música':
            return 'Prefiere ir escuchando música';
          case 'hablar':
            return 'Prefiere ir hablando';
          default:
            return pref; // Si no coincide, devuelve el valor original
        }
      })
      .filter((p) => p !== ''); // Elimina elementos vacíos si los hubiera
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
  private sugerenciasTimeout: any;

  obtenerSugerenciasOrigen(evento: Event): Observable<any> {
    const contenidoInput = (evento.target as HTMLInputElement).value;

    if (contenidoInput.trim().length >= 3) {
      // Retornamos el Observable directamente
      return this.googleService.obtenerLocalidad(contenidoInput);
    } else {
      // Retornamos un Observable de un array vacío si no llega a 3 caracteres
      return of([]);
    }
  }

  /**
   * Función para obtener la lista de sugerencias para el destino
   * en función de lo que escriba el usuario en el input correspondiente.
   *
   * @param evento Recibe el evento del input.
   */
  private sugerenciasDestinoTimeout: any;

  obtenerSugerenciasDestino(evento: Event): Observable<any> {
    const contenidoInput = (evento.target as HTMLInputElement).value;

    if (contenidoInput.trim().length >= 3) {
      return this.googleService.obtenerLocalidad(contenidoInput);
    } else {
      return of([]);
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
      this.userService.obtenerUsuarioPorID(id_usuario),
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
}
