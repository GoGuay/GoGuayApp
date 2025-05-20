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
  sinDocumentoTrasera: string = '../../../../assets/user/SinFotoTrasera.png';

  cargandoDelantera: boolean = false;
  cargandoTrasera: boolean = false;
  cargandoCarnetDelantera: boolean = false;
  cargandoCarnetTrasera: boolean = false;
  documentoDelantera: string = '';
  documentoTrasera: string = '';
  carnetTrasera: string = '';
  carnetDelantera: string = '';

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

  // Función para subir la foto delantera del documento de identidad
  fotoDocumentoDelantera(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cargandoDelantera = true;
    if (input.files && input.files[0]) {
      const formData = new FormData();
      formData.append('fotoDocumentoDelantera', input.files[0]);

      const usuarioId = this.userData.usuario.id;

      this.userService.fotoDocumentoDelantera(formData, usuarioId).subscribe({
        next: (response) => {
          this.cargandoDelantera = false;
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

  // Función para subir la foto trasera del documento de identidad
  fotoDocumentoTrasera(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cargandoTrasera = true;
    if (input.files && input.files[0]) {
      const formData = new FormData();
      formData.append('fotoDocumentoTrasera', input.files[0]);

      const usuarioId = this.userData.usuario.id;

      this.userService.fotoDocumentoTrasera(formData, usuarioId).subscribe({
        next: (response) => {
          this.cargandoTrasera = false;
          if (response && response.url) {
            this.documentoTrasera = response.url;
            console.log('fotoDocumentoTrasera:', this.documentoTrasera);
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

  // Función para cargar la foto delantera del carnet de conducir
  fotoCarnetDelantera(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cargandoCarnetDelantera = true;
    if (input.files && input.files[0]) {
      const formData = new FormData();
      formData.append('fotoCarnetCondDelantera', input.files[0]);

      const usuarioId = this.userData.usuario.id;

      this.userService.fotoCarnetDelantera(formData, usuarioId).subscribe({
        next: (response) => {
          this.cargandoCarnetDelantera = false;
          if (response && response.url) {
            this.carnetDelantera = response.url;
            console.log('carnet Delantera:', this.carnetDelantera);
            console.log('response :', response.url);
          }
          this.obtenerUsuarioPorID(usuarioId);
        },
        error: (error) => {
          console.error(
            'Error al subir la imagen delantera del carnet:',
            error
          );
        },
      });
    }
  }

  // Función para cargar la foto trasera del carnet de conducir
  fotoCarnetTrasera(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cargandoCarnetTrasera = true;
    if (input.files && input.files[0]) {
      const formData = new FormData();
      formData.append('fotoCarnetCondTrasera', input.files[0]);

      const usuarioId = this.userData.usuario.id;

      this.userService.fotoCarnetTrasera(formData, usuarioId).subscribe({
        next: (response) => {
          this.cargandoCarnetTrasera = false;
          if (response && response.url) {
            this.carnetTrasera = response.url;
            console.log('carnet Trasera:', this.carnetTrasera);
            console.log('response :', response.url);
          }
          this.obtenerUsuarioPorID(usuarioId);
        },
        error: (error) => {
          console.error('Error al subir la imagen trasera del carnet:', error);
        },
      });
    }
  }
}
