import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonRow, IonCol } from '@ionic/angular/standalone';
import { Usuario } from 'src/app/models/user/usuario.model';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { MatDivider } from '@angular/material/divider';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { lastValueFrom, Observable } from 'rxjs';
import { SpinnerComponent } from '../../../components/spinner/spinner.component';

@Component({
  selector: 'app-verificaciones-perfil',
  templateUrl: './verificaciones-perfil.page.html',
  styleUrls: ['./verificaciones-perfil.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NavbarComponent,
    MatDivider,
    TranslateModule,
    SpinnerComponent,
  ],
})
export class VerificacionesPerfilPage implements OnInit {
  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;
  usuario: any = {} as Usuario;
  emailUsuario: string = '';
  telefonoUsuario: string = '';
  subiendoDocumento: boolean = false;
  sinDocumentoDelantera: string =
    '../../../../assets/user/SinFotoDelantera.png';
  sinDocumentoTrasera: string =
    '../../../../assets/user/sinDocumentoTrasera.png';

  cargando: boolean = false;
  documentoDelantera: string = '';
  documentoTrasera: string = '';

  constructor(private userService: UserServicesService) {}

  async ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (this.userData?.usuario) {
      this.userLoggedIn = true;
    }
    if (this.userData && this.userData.usuario) {
      this.emailUsuario = this.userData.usuario.email || '';
      this.telefonoUsuario = this.userData.usuario.telefono || '';
    }
    await this.obtenerDatosUsuario(this.userData.usuario.id);
  }

  verificar_email(email: string) {
    this.userService.enviar_email_verif(email).subscribe((respuesta) => {
      console.log(respuesta);
    });
  }

  async obtenerDatosUsuario(id_usuario: number) {
    this.usuario = await lastValueFrom(
      this.userService.obtenerUsuarioPorID(id_usuario)
    );
  }

  /**
   * Función para obtener los datos de un usuario
   * @param id_usuario Recibe el ID del usuario que está logado
   */
  obtenerUsuarioPorID(id_usuario: number) {
    this.userService
      .obtenerUsuarioPorID(id_usuario)
      .subscribe((resultadoUsuario) => {
        this.usuario = resultadoUsuario;
      });
  }

  enviar_sms(telefono: string) {
    const teléfonoConPrefijo = '+93' + telefono;
    this.userService.enviar_sms(teléfonoConPrefijo).subscribe((respuesta) => {
      console.log('Respuesta: ', respuesta);
    });
  }

  fotoDocumentoDelantera(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cargando = true;
    if (input.files && input.files[0]) {
      const formData = new FormData();
      formData.append('fotoDocumentoDelantera', input.files[0]);

      const usuarioId = this.userData.usuario.id;

      this.userService.fotoDocumentoDelantera(formData, usuarioId).subscribe({
        next: (response) => {
          this.cargando = false;
          if (response && response.url) {
            this.documentoDelantera = response.url;
            console.log('fotodocumentodelantera:', this.documentoDelantera);
            console.log('response :', response.url);
          }
          this.obtenerUsuarioPorID(usuarioId);
        },
        error: (error) => {
          console.error(
            'Error al subir la imagen delantera del documento:',
            error
          );
        },
      });
    }
  }
}
