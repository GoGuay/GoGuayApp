import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';
import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { Usuario } from 'src/app/models/user/usuario.model';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipModule } from '@angular/material/tooltip';
import { ViajeSeleccionadoComponent } from 'src/app/components/viaje-seleccionado/viaje-seleccionado.component';
import { Viaje } from 'src/app/models/travel/viaje.model';
import { MatDialog } from '@angular/material/dialog';
import { SpinnerComponent } from "../../components/spinner/spinner.component";
import { NotificacionesService } from 'src/app/core/notificaciones/notificaciones.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { PuntuacionesComponent } from 'src/app/components/puntuaciones/puntuaciones.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-perfil-publico',
  templateUrl: './perfil-publico.page.html',
  styleUrls: ['./perfil-publico.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NavbarComponent, MatDivider, MatIcon, MatTooltipModule, SpinnerComponent],
  providers: [
    {
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
      useValue: {
        showDelay: 500,
        hideDelay: 200,
        touchGestures: 'auto',
        position: 'below'
      }
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class PerfilPublicoPage implements OnInit {

  userLoggedIn: boolean = false;
  usuarioParams: any = {};
  usuario: any;
  editar_perfil: boolean = false;
  userData: Usuario = {} as Usuario;
  preferenciasViaje: string = '';
  misViajesAcompanante: Viaje[] = [];
  misViajesCreados: Viaje[] = [];
  misViajes: Viaje[] = [];
  imagenCabeceraSrc: string = '../../../assets/imgs/bridge1.jpg';
  imagenPerfilSrc: string = '../../../assets/User-Profile-PNG-Image.png';
  filtroViajes: string = 'todos';
  cargando = false;
  pasajero: boolean = false;
  conductor: boolean = false;
  notificacionLeida: boolean = false;

  private _bottomSheet = inject(MatBottomSheet);

  constructor(
    private route: ActivatedRoute,
    private funcionesComunes: FuncionesComunes,
    private userService: UserServicesService,
    private notificacionesService: NotificacionesService,
    private travelService: TravelService,
    private dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.userLoggedIn = this.funcionesComunes.isUserLoggedIn();
    this.route.queryParams.subscribe((params) => {
      this.usuarioParams = params;
      const userId = parseInt(this.usuarioParams.id, 10);
      this.obtenerUsuarioPorID(userId);
      this.validacionPerilLogeado(userId);
      this.obtenerViajesComoAcompanante();
      this.obtenerViajesCreados();
    });

    this.comprobarNotificaciones(); 
    /**
     * Se comprueba cada 10 segundos si el usuario tiene notificaiones
     * en algún viaje en los que es conductor.
     */
    setInterval(() => {
      this.comprobarNotificaciones();
    }, 10000);
  }

  /**
   * Función para obtener las notificaciones del usuario logado
   * Además se obtienen las notificaciones pertenecientes a cada viaje.
   * 
   * 
   */
  comprobarNotificaciones(): void {
    this.notificacionesService.obtenerNotificaciones(this.usuarioParams.id).subscribe(
      (notificaciones) => {
        if (notificaciones && notificaciones.length > 0) {
          this.notificacionesService.notificacionPendiente = notificaciones;
          this.notificacionesService.esCreadorDelViaje = true;
          notificaciones.forEach((notificacion: any) => {
            this.notificacionesService.obtenerNotificacionesDeUnViaje(notificacion.viaje_id).subscribe(
              (respuesta) => {
                if(respuesta[0].leida === true){
                  this.notificacionLeida = true;
                } else {
                  this.notificacionLeida = false;
                }
                const viaje = this.misViajes.find(v => v.id === notificacion.viaje_id);
                console.log('viaje ', viaje);
                
                if (viaje) {
                  viaje.notificaciones = respuesta;
                }
              }
            );
          });
        } else {
          this.notificacionesService.notificacionPendiente = null;
          this.notificacionesService.esCreadorDelViaje = false;
        }
      },
      (error) => {
        console.error('Error al obtener notificaciones:', error);
      }
    );
  }
  

  /**
   * Función para obtener los datos de un usuario
   * @param id_usuario Recibe el ID del usuario que está logado
   */
  obtenerUsuarioPorID(id_usuario: number) {
    this.userService.obtenerUsuarioPorID(id_usuario).subscribe((resultadoUsuario) => {
      this.usuario = resultadoUsuario;
      this.preferenciasViaje = this.funcionesComunes.validacionPreferencias(this.usuario);
    });
  }

  /**
   * Función para obtener los viajes a los que el usuario se ha apuntado como pasajero
   */
  obtenerViajesComoAcompanante() {
    this.travelService.getViajesComoAcompañante(this.userData.usuario.id)
      .subscribe((result) => {
        this.misViajesAcompanante = result;
        this.filtrarViajes();
      });
  }

  /**
   * Función para obtener la lista de viajes que ha creado el usuario
   */
  obtenerViajesCreados() {
    this.travelService.getViajesUsuario(this.userData.usuario.id)
      .subscribe((result) => {
        this.misViajesCreados = result.viajes;
        this.misViajesCreados.forEach((viaje) => {
          this.obtenerUsuario(viaje.usuario_id).subscribe((usuario: any) => {
            viaje.usuario = usuario;
          });
        })
        this.filtrarViajes();
      });
  }


  obtenerUsuario(id_usuario: number): Observable<any> {
    return this.userService.obtenerUsuarioPorID(id_usuario);
  }

  /**
   * Función para filtrar los viajes según el filtro seleccionado
   */
  filtrarViajes() {
    if (this.filtroViajes === 'todos') {
      this.misViajes = [...this.misViajesAcompanante, ...this.misViajesCreados];
      this.conductor = false; 
      this.pasajero = false;
    } else if (this.filtroViajes === 'conductor') {
      this.misViajes = [...this.misViajesCreados];
      this.conductor = true;  // El usuario es conductor
      this.pasajero = false;
    } else if (this.filtroViajes === 'pasajero') {
      this.misViajes = [...this.misViajesAcompanante];
      this.conductor = false; // El usuario es pasajero
      this.pasajero = true;
    }
  }

  /**
   * Función para abrir una modal con los detalles del viaje seleccionado
   * @param viaje Recibe la información del viaje seleccionado.
   */
  openDetalleViaje(viaje: Viaje) {
    this.obtenerUsuario(viaje.usuario_id).subscribe((usuario: any) => {
      viaje.usuario = usuario;
    });
    this.dialog.open(ViajeSeleccionadoComponent, {
      data: { viaje }
    });
  }

  /**
   * Función para modificar la imagen de la cabecera
   * 
   * @param event Recibe la información del input de la imagen
   */
  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cargando = true;
    if (input.files && input.files[0]) {
      const formData = new FormData();
      formData.append('imagenCabecera', input.files[0]);

      const usuarioId = this.userData.usuario.id;

      this.userService.actualizarImagenCabecera(usuarioId, formData).subscribe({
        next: (response) => {
          this.cargando = false;
          if (response && response.url) {
            this.imagenCabeceraSrc = response.url;
          }
          this.obtenerUsuarioPorID(usuarioId);
        },
        error: (error) => {
          console.error('Error al actualizar la imagen de cabecera:', error);
        }
      });
    }
  }

  /**
   * Función para modificar la imagen del perfil
   * 
   * @param event Recibe la información del input de la imagen
   */
  onImageChangePerfil(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cargando = true;
    if (input.files && input.files[0]) {
      const formData = new FormData();
      formData.append('imagenPerfil', input.files[0]);

      const usuarioId = this.userData.usuario.id;

      this.userService.actualizarImagenPerfil(usuarioId, formData).subscribe({
        next: (response) => {
          this.cargando = false;
          if (response && response.nuevaUrl) {
            this.imagenPerfilSrc = response.nuevaUrl;
          }
          this.obtenerUsuarioPorID(usuarioId);
        },
        error: (error) => {
          console.error('Error al actualizar la imagen del perfil:', error);
        }
      });
    }
  }

  /**
   * Función para validar si el perfil es el del usuario logueado
   * 
   * @param id_usuario Recibe el ID del usuario.
   */
  validacionPerilLogeado(id_usuario: number) {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (id_usuario === this.userData.usuario.id) {
      this.editar_perfil = true;
    } else {
      this.editar_perfil = false;
    }
  }

  /**
   * Función para validar si un viaje ha terminado o no.
   * 
   * @param fecha_salida 
   * @returns 
   */
  esViajeFinalizado(fecha_salida: string, hora_salida: string): boolean {
    const fechaViaje = new Date(fecha_salida);
    const horaViaje = hora_salida.split(":");
    fechaViaje.setHours(parseInt(horaViaje[0]), parseInt(horaViaje[1]));

    const hoy = new Date();

    return fechaViaje < hoy;
  }

  /**
   * Función para validar si se puede puntuar un viaje o no.
   * 
   * @param viaje 
   */
  puedePuntuar(viaje: Viaje): boolean {
    const esFinalizado = this.esViajeFinalizado(viaje.fecha_salida, viaje.hora_salida);
    const esPasajero = this.misViajesAcompanante.some(v => v.id === viaje.id);
    const esCreador = viaje.usuario_id === this.userData.usuario.id;

    // Solo se puede puntuar si el viaje ha finalizado, si es pasajero (no creador) y si no es el creador
    return esFinalizado && esPasajero && !esCreador;
  }

  /**
   * Función para eliminar un viaje.
   * 
   * @param viajeId 
   */
  eliminarViaje(viajeId: number) {
    this.travelService.eliminarViaje(viajeId).subscribe({
      next: () => {
        console.log('Viaje eliminado con éxito.');
        this.obtenerViajesCreados();
      },
      error: (error) => {
        console.error('Error al eliminar el viaje:', error);
      }
    });
  }

  /**
   * Función para que un usuario salga de un viaje
   * @param viajeId ID del viaje
   */
  salirDeViaje(viajeId: number) {
    this.cargando = true;
    this.travelService.salirDeViaje(viajeId).subscribe({
      next: () => {
        this.cargando = false;
        console.log('El usuario ha salido del viaje con éxito');
        this.obtenerViajesComoAcompanante();
        this.obtenerViajesCreados();
        this.comprobarNotificaciones(); 
      },
      error: (error) => {
        this.cargando = false;
        console.error('Error al salir del viaje:', error);
      }
    });
  }

  /**
   * Función para poder leer las notificaciones del viaje
   * 
   */
  leerNotificacion(notificaciones: any): void {
    this.notificacionesService.leerNotificacion(notificaciones);
  }

  /**
   * Función para saber si tiene notificaciones pendientes en el viaje.
   * 
   * @returns Devuelve las notificaciones que tenga el viaje
   */
  tieneNotificacionPendiente(): boolean {
    return this.notificacionesService.tieneNotificacionPendiente();
  }

  /**
   * Función para puntuar un viaje
   */
  puntuarViaje(){
    this._bottomSheet.open(PuntuacionesComponent);
  }
}