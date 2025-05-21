import { Usuario } from './../../models/user/usuario.model';
import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { IonicModule, NavController } from '@ionic/angular';
import { MatIcon } from '@angular/material/icon';
import { HelpModalComponent } from 'src/app/components/help-modal/help-modal.component';
import {
  MAT_TOOLTIP_DEFAULT_OPTIONS,
  MatTooltipModule,
} from '@angular/material/tooltip';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';

@Component({
  selector: 'app-panel-usuario',
  templateUrl: './panel-usuario.page.html',
  styleUrls: ['./panel-usuario.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavbarComponent,
    TranslateModule,
    IonicModule,
    MatIcon,
    MatTooltipModule,
  ],
  providers: [
    {
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
      useValue: {
        showDelay: 500,
        hideDelay: 200,
        touchGestures: 'auto',
        position: 'below',
      },
    },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class PanelUsuarioPage implements OnInit {

  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;
  cargando = false;
  imagenPerfilSrc: string = '../../../assets/user/logOn.gif';
  usuario: Usuario = {} as Usuario;

  constructor(
    private dialog: MatDialog,
    private travelService: TravelService,
    private navCtrl: NavController,
    private funcionesComunes: FuncionesComunes,
    private cdr: ChangeDetectorRef,
    private userService: UserServicesService
  ) { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.userLoggedIn = !!(this.userData && this.userData.usuario.email);
    this.funcionesComunes.getBaseUrl();
  }
  openMiPerfil() {
    // this.dialog.open(MiPerfilComponent, {});
    this.navCtrl.navigateRoot(['/mi-perfil']);
  }
  openDatosContacto() {
    // this.dialog.open(DatosContactoComponent, {});
    this.navCtrl.navigateRoot(['/datos-contacto']);
  }
  openVerificarPerfil() {
    // this.dialog.open(VerificarPerfilComponent, {});
    this.navCtrl.navigateRoot(['/verificaciones-perfil']);
  }
  openSaldoTransferencias() {
    // this.dialog.open(SaldoTransferenciasComponent, {});
    this.navCtrl.navigateRoot(['/saldo-transferencias']);
  }

  /**
   * Función para obtener los viajes que ha creado el usuario.
   *
   */
  obtenerViajes() {
    this.travelService
      .getViajesUsuario(this.userData.usuario.id)
      .subscribe((result) => {
        console.log('Viajes del usuario: ', result);
      });
  }

  openHelpMiPerfil() {
    const titulo: string = 'Contenido Mi Perfil';
    const mensaje: string =
      'En esta sección podrás consultar y modificar tu información personal, así como añadir tus vehículos y preferencias en el viaje';
    this.dialog.open(HelpModalComponent, {
      data: { title: titulo, message: mensaje },
      disableClose: true,
      panelClass: 'custom-modal-width',
    });
    this.cdr.detectChanges(); // Fuerza la detección de cambios
  }
  openHelpDatosContacto() {
    const titulo: string = 'Contenido Datos de contacto';
    const mensaje: string =
      'Podrás modificar tu teléfono y correo electrónico, así como las preferencias para comunicarnos contigo.';
    this.dialog.open(HelpModalComponent, {
      data: { title: titulo, message: mensaje },
      disableClose: true,
    });
  }

  OpenHelpVerificaciones() {
    const titulo: string =
      'Contenido sobre la verificación de perfil y cambio de contraseña';
    const mensaje: string =
      'Puedes convertirte en un usuario verificado, subir foto de tu carnet de conducir para publicar viajes y cambiar tu contraseña de acceso.';
    this.dialog.open(HelpModalComponent, {
      data: { title: titulo, message: mensaje },
      disableClose: true,
    });
  }

  OpenHelpSaldo() {
    const titulo: string = 'Contenido sobre el Saldo y las transferencias';
    const mensaje: string =
      'Puedes consultar tu saldo disponible, métodos de recarga, últimos movimientos y transferir saldo disponible a tu cuenta bancaria';
    this.dialog.open(HelpModalComponent, {
      data: { title: titulo, message: mensaje },
      disableClose: true,
    });
  }

  openPerfilPublico(id_usuario: number) {
    const usuario = {
      id: id_usuario,
    };
    this.navCtrl.navigateRoot(['/perfil-publico'], {
      queryParams: usuario,
    });
  }

  openAjustes() {
    this.navCtrl.navigateRoot(['/ajustes-aplicacion'], {});
  }

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
 * Función para obtener los datos de un usuario
 * @param id_usuario Recibe el ID del usuario que está logado
 */
  obtenerUsuarioPorID(id_usuario: number) {
    this.userService.obtenerUsuarioPorID(id_usuario).subscribe((resultadoUsuario) => {
      this.usuario = resultadoUsuario;
    });
  }

}
