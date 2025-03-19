import { Usuario } from './../../models/user/usuario.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { DatosContactoComponent } from 'src/app/components/botones-panel-usuario/datos-contacto/datos-contacto.component';
import { VerificarPerfilComponent } from 'src/app/components/botones-panel-usuario/verificar-perfil/verificar-perfil.component';
import { SaldoTransferenciasComponent } from 'src/app/components/botones-panel-usuario/saldo-transferencias/saldo-transferencias.component';
import { IonicModule } from '@ionic/angular';
import { MiPerfilComponent } from 'src/app/components/botones-panel-usuario/mi-perfil/mi-perfil.component';
import { MatIcon } from '@angular/material/icon';
import { HelpModalComponent } from 'src/app/components/help-modal/help-modal.component';
import { Router } from '@angular/router';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipModule } from '@angular/material/tooltip';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';

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
    MatTooltipModule
  ],
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
export class PanelUsuarioPage implements OnInit {
  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;

  constructor(
    private dialog: MatDialog,
    private travelService: TravelService,
    private router: Router,
    private funcionesComunes: FuncionesComunes
  ) {}

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.userLoggedIn = !!(this.userData && this.userData.usuario.email);
    this.funcionesComunes.getBaseUrl();
  }
  openMiPerfil() {
    this.dialog.open(MiPerfilComponent, {});
  }
  openDatosContacto() {
    this.dialog.open(DatosContactoComponent, {});
  }
  openVerificarPerfil() {
    this.dialog.open(VerificarPerfilComponent, {});
  }
  openSaldoTransferencias() {
    this.dialog.open(SaldoTransferenciasComponent, {});
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
    });
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
      id: id_usuario
    }
    this.router.navigate(['/perfil-publico'], {
      queryParams: usuario,
    });
  }
}
