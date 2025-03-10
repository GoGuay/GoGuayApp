import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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


@Component({
  selector: 'app-perfil-publico',
  templateUrl: './perfil-publico.page.html',
  styleUrls: ['./perfil-publico.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NavbarComponent, MatDivider, MatIcon, MatTooltipModule],
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
  misViajes: any[] = [];
  imagenCabeceraSrc: string = '../../../assets/imgs/bridge1.jpg';
  imagenPerfilSrc: string = '../../../assets/User-Profile-PNG-Image.png';

  constructor(
    private route: ActivatedRoute,
    private funcionesComunes: FuncionesComunes,
    private userService: UserServicesService,
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
      this.obtenerViajes();
    });
  }

  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagenCabeceraSrc = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  onImageChangePerfil(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagenPerfilSrc = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  validacionPerilLogeado(id_usuario: number) {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (id_usuario === this.userData.usuario.id) {
      this.editar_perfil = true;
    } else {
      this.editar_perfil = false;
    }
  }

  /**
   * Función para obtener los datos de un usuario.
   * 
   * @param id_usuario 
   */
  obtenerUsuarioPorID(id_usuario: number) {
    this.userService.obtenerUsuarioPorID(id_usuario).subscribe((resultadoUsuario) => {
      this.usuario = resultadoUsuario;
      this.preferenciasViaje = this.funcionesComunes.validacionPreferencias(this.usuario);
    });
  }

  /**
   * Función para obtener los viajes a los que el usuario
   * se ha apuntado como pasajero.
   */
  obtenerViajes() {
    this.travelService.getViajesDeUsuario(this.userData.usuario.id)
      .subscribe((result) => {
        console.log('Viajes del usuario: ', result);
        
        this.misViajes = result;
      });
  }


  openDetalleViaje(viaje: Viaje) {
    this.dialog.open(ViajeSeleccionadoComponent, {
      data: { viaje }
    });
  }
}
