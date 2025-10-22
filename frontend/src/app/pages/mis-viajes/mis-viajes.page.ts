import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { IonicModule, NavController } from '@ionic/angular';
import { Viaje } from 'src/app/models/travel/viaje.model';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';
import { Usuario } from 'src/app/models/user/usuario.model';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { PuntuacionesComponent } from 'src/app/components/puntuaciones/puntuaciones.component';
import { Observable } from 'rxjs';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { ViajeSeleccionadoComponent } from 'src/app/components/viaje-seleccionado/viaje-seleccionado.component';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { ActivatedRoute } from '@angular/router';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';

@Component({
  selector: 'app-mis-viajes',
  templateUrl: './mis-viajes.page.html',
  styleUrls: ['./mis-viajes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NavbarComponent, MatIcon, JumbotronComponent]
})
export class MisViajesPage implements OnInit {

  /**
   * Parámetros para navbar
   */
  userLoggedIn: boolean = false;
  urlParaVolver: string = '';

  filtroViajes: string = 'todos';
  misViajes: Viaje[] = [];
  misViajesAcompanante: Viaje[] = [];
  misViajesCreados: Viaje[] = [];

  pasajero: boolean = false;
  conductor: boolean = false;

  preferenciasViaje: string = '';

  cargando = false;
  mostrarAyuda: boolean = false;

  imgNuevoViaje: string = '../../../assets/sistema/agregar.png';
  buscarViaje: string = '../../../assets/sistema/busqueda.png';

  /**
   * Datos del usuario
   */
  userData: any = {} as Usuario;
  usuarioParams: any = {};

  mostrarJumbotron = true;

  private _bottomSheet = inject(MatBottomSheet);

  constructor(public funcionesComunes: FuncionesComunes,
    private navCtrl: NavController, private userService: UserServicesService,
    private dialog: MatDialog, private travelService: TravelService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe((params) => {
      this.usuarioParams = params;
      const userId = parseInt(this.usuarioParams.id, 10);
      this.obtenerUsuarioPorID(userId);
      this.validacionPerilLogeado(userId);
      this.obtenerViajesComoAcompanante();
      this.obtenerViajesCreados();
      this.loadJumbotronSetting();
    });
  }

  /**
   * Función para cargar la configuración del jumbotron desde localStorage
   * Si no hay configuración guardada, se muestra por defecto
   */
  loadJumbotronSetting() {
    const jumbotronSetting = localStorage.getItem('mostrarJumbotron');
    this.mostrarJumbotron = jumbotronSetting === null ? true : jumbotronSetting === 'true';
  }

  /**
   * Función para obtener los datos de un usuario
   * @param id_usuario Recibe el ID del usuario que está logado
   */
  obtenerUsuarioPorID(id_usuario: number) {
    this.userService.obtenerUsuarioPorID(id_usuario).subscribe((resultadoUsuario) => {
      this.userData = resultadoUsuario;
      this.preferenciasViaje = this.funcionesComunes.validacionPreferencias(this.userData);
    });
  }

  obtenerUsuario(id_usuario: number): Observable<Usuario> {
    return this.userService.obtenerUsuarioPorID(id_usuario);
  }

  /**
 * Función para validar si el perfil es el del usuario logueado
 * 
 * @param id_usuario Recibe el ID del usuario.
 */
  validacionPerilLogeado(id_usuario: number) {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (id_usuario === this.userData.usuario.id) {
      // this.editar_perfil = true;
    } else {
      // this.editar_perfil = false;
    }
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
 * Función para validar si se puede puntuar un viaje o no.
 * 
 * @param viaje 
 */
  puedePuntuar(viaje: Viaje): boolean {
    const esFinalizado = this.funcionesComunes.esViajeFinalizado(viaje.fecha_salida, viaje.hora_salida);
    const esPasajero = this.misViajesAcompanante.some(v => v.id === viaje.id);
    const esCreador = viaje.usuario_id === this.userData.id;

    // Solo se puede puntuar si el viaje ha finalizado, si es pasajero (no creador) y si no es el creador
    return esFinalizado && esPasajero && !esCreador;
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
   * Función para puntuar un viaje
   */
  puntuarViaje() {
    this._bottomSheet.open(PuntuacionesComponent);
  }

  /**
   * Función para poder editar un viaje
   * @param viaje_id 
   */
  editarViaje(viaje_id: number) {
    const viaje = {
      id: viaje_id
    }
    this.navCtrl.navigateRoot('/resumen-viaje', {
      queryParams: viaje,
    });
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
      },
      error: (error) => {
        this.cargando = false;
        console.error('Error al salir del viaje:', error);
      }
    });
  }

  toggleAyuda() {
    this.mostrarAyuda = !this.mostrarAyuda;
  }
}
