import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { IonicModule, NavController } from '@ionic/angular';
import { LanguageService } from 'src/app/core/lenguajes/languaje.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MatDividerModule } from '@angular/material/divider';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { Usuario } from 'src/app/models/user/usuario.model';
import { HelpModalComponent } from 'src/app/components/help-modal/help-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ajustes-aplicacion',
  templateUrl: './ajustes-aplicacion.page.html',
  styleUrls: ['./ajustes-aplicacion.page.scss'],
  standalone: true,
  providers: [MessageService],
  imports: [
    CommonModule,
    FormsModule,
    NavbarComponent,
    IonicModule,
    ToastModule,
    MatDividerModule,
    TranslateModule,
    FormsModule,
  ],
})
export class AjustesAplicacionPage implements OnInit {
  selectedLanguage = 'es';
  mostrarBanner = true;
  notificacionesActivas = true;
  theme = 'light';
  mostrarJumbotron = true;
  password: string = '';

  email: string = '';
  userData: Usuario = {} as Usuario;

  usuarioBD: any = {} as Usuario;

  passwordActual: string = '';
  esValida: boolean | null = null;
  nuevaPassword1: string = '';
  nuevaPassword2: string = '';
  isPasswordActualValida: boolean | null = null;
  isNuevaPassword1Valida: boolean = false;
  isConfirmacionPasswordValida: boolean = false;
  errorMensaje: string = '';
  exitoMensaje: string = '';

  constructor(
    private navCtrl: NavController,
    private languageService: LanguageService,
    private messageService: MessageService,
    private userService: UserServicesService,
    private dialog: MatDialog,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.selectedLanguage = this.languageService.getLanguage();
    const savedJumbotronSetting = localStorage.getItem('mostrarJumbotron');
    this.mostrarJumbotron = savedJumbotronSetting === 'true';
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.obtenerUsuario();
  }

  obtenerUsuario() {
    this.userService
      .obtenerUsuarioPorID(this.userData.usuario.id)
      .subscribe((respuesta) => {
        this.usuarioBD = respuesta;
      });
  }
  /**
   * Función para guardar los ajustes seleccionados por el usuario
   */
  // guardarAjustes() {
  //   localStorage.setItem(
  //     'mostrarJumbotron',
  //     this.mostrarJumbotron ? 'true' : 'false'
  //   );
  //   if (this.selectedLanguage === 'es') {
  //     this.messageService.add({
  //       severity: 'success',
  //       summary: 'Ajustes del banner',
  //       detail: 'Se han modificado los ajustes del banner correctamente.',
  //       life: 3000,
  //     });
  //   } else if (this.selectedLanguage === 'en') {
  //     this.messageService.add({
  //       severity: 'success',
  //       summary: 'Banner Settings',
  //       detail: 'The banner settings have been updated successfully.',
  //       life: 3000,
  //     });
  //   }
  // }

  guardarAjustes() {
    localStorage.setItem(
      'mostrarJumbotron',
      this.mostrarJumbotron ? 'true' : 'false'
    );
    this.translate
      .get([
        'AJUSTESAPP.OPCION_BANNER.ALERT_TITULO',
        'AJUSTESAPP.OPCION_BANNER.ALERT_MENSAJE',
      ])
      .subscribe((translations) => {
        this.messageService.add({
          severity: 'success',
          summary: translations['AJUSTESAPP.OPCION_BANNER.ALERT_TITULO'],
          detail: translations['AJUSTESAPP.OPCION_BANNER.ALERT_MENSAJE'],
          life: 3000,
        });
      });
  }

  changeLanguage(event: Event) {
    const selectedLanguage = (event.target as HTMLSelectElement).value;
    console.log(selectedLanguage);

    this.languageService.setLanguage(selectedLanguage);
    this.selectedLanguage = selectedLanguage;
    this.translate.use(selectedLanguage);
    this.translate
      .get([
        'AJUSTESAPP.OPCION_IDIOMA.ALERT_TITULO',
        'AJUSTESAPP.OPCION_IDIOMA.ALERT_MENSAJE',
      ])
      .subscribe((translations) => {
        this.messageService.add({
          severity: 'success',
          summary: translations['AJUSTESAPP.OPCION_IDIOMA.ALERT_TITULO'],
          detail: translations['AJUSTESAPP.OPCION_IDIOMA.ALERT_MENSAJE'],
          life: 3000,
        });
      });
  }

  /**
   * Modal que se muestra cuando se pulsa el botón de eliminar usuario.
   */
  modalEliminarUsuario() {
    this.translate
      .get([
        'AJUSTESAPP.ELIMINARCTA.MODAL_TITULO',
        'AJUSTESAPP.ELIMINARCTA.MODAL_MENSAJE',
      ])
      .subscribe((translations) => {
        const titulo = translations['AJUSTESAPP.ELIMINARCTA.MODAL_TITULO'];
        const mensaje = translations['AJUSTESAPP.ELIMINARCTA.MODAL_MENSAJE'];

        const dialogRef = this.dialog.open(HelpModalComponent, {
          data: { title: titulo, message: mensaje, showAcceptButton: true },
          disableClose: true,
        });
        dialogRef.afterClosed().subscribe((confirmar) => {
          if (confirmar) {
            this.eliminar_usuario();
          }
        });
      });
  }

  /**
   * Funcion para eliminar el usuario. Se llama en el botón de confirmación de la modal
   */
  eliminar_usuario() {
    console.log('Elminando al usuario con id: ', this.userData.usuario.id);

    this.userService.eliminarUsuario(this.userData.usuario.id).subscribe(
      (res) => console.log('Respuesta del backend: ', res),
      (err) => console.error('Error del backedn: ', err)
    );
    localStorage.removeItem('userData');
    this.navCtrl.navigateRoot(['/'], {});
  }

  /**FUNCIÓN PARA COMPROBAR LA CONTRASEÑA ACTUAL Y DESHABILITAR/HABILITAR los siguientes campos
   * Si no hay contraseña actual escrita, corta la función y deja todo en deshabilitado.
   * Si hay contraseña actual, llama al servicio para comprobar si la contraseña es la correcta del usuario.
   * Si el backend responde correctamente , actualiza el estado de isPasswordActualValida con true o false.
   * Si la contraseña NO es válida, muestra error y bloquea los siguientes inputs, si la contraseña SI es válida
   * sólo limpia el mensaje de error.
   * Borra el contenido de nuevaPassword1, nuevaPassword2 y deja isNuevaPassword1Valida en false y también isConfirmaciónPasswordValida en false.
   * Si hay algun otro error (de red, backend...) muestra un mensaje genérico y bloquea el flujo.
   *
   */
  comprobarContrasenaActual() {
    if (!this.passwordActual) {
      this.isPasswordActualValida = false;
      this.errorMensaje = '';
      return;
    }

    this.userService
      .verificar_pw_actual(this.userData.usuario.id, this.passwordActual)
      .subscribe({
        next: (res) => {
          this.isPasswordActualValida = res.isValid;

          if (res.isValid) {
            this.errorMensaje = '';
            console.log('✅ Contraseña actual verificada correctamente');
          } else {
            this.translate
              .get('AJUSTESAPP.PASSWORD.CONTRAS_ACTUAL_INCO')
              .subscribe((translation) => {
                this.errorMensaje = '❌ ' + translation;
              });
            console.log('❌ Contraseña actual incorrecta');
          }
          this.nuevaPassword1 = '';
          this.nuevaPassword2 = '';
          this.isNuevaPassword1Valida = false;
          this.isConfirmacionPasswordValida = false;
        },
        error: () => {
          this.isPasswordActualValida = false;
        },
      });
  }

  /**
   * Si hay nuevaPassword y además es diferente a la actual, habilitamos isNuevaPassword1 y reseteamos el mensaje de error.
   * De lo contrario, dejamos de nuevoesNuevaPasswor1 en false y lanzamos mensaje de error.
   * Resetea el campo de nuevaPassword2 para que "obligue" al usuario a escribir algo y valida de nuevo.
   */
  validarNuevaPassword() {
    if (this.nuevaPassword1 && this.nuevaPassword1 !== this.passwordActual) {
      this.isNuevaPassword1Valida = true;
      this.errorMensaje = '';
    } else {
      this.isNuevaPassword1Valida = false;
      this.translate
        .get('AJUSTESAPP.PASSWORD.NUEVA_DIF_ACTUAL')
        .subscribe((translation) => {
          this.errorMensaje = translation;
        });
    }
    this.nuevaPassword2 = '';
    this.isConfirmacionPasswordValida = false;
  }

  /**
   * Si hay nuevaPassword2 y además es igual que la nuevaPassword1 pone la confirmación en true
   * DE lo contrario deja la confirmación en false y lanza un mensaje de error
   */
  validarConfirmacionPassword() {
    if (this.nuevaPassword2 && this.nuevaPassword2 === this.nuevaPassword1) {
      this.isConfirmacionPasswordValida = true;
      this.errorMensaje = '';
    } else {
      this.isConfirmacionPasswordValida = false;
      this.translate
        .get('AJUSTESAPP.PASSWORD.NO_COINCIDEN')
        .subscribe((translation) => {
          this.errorMensaje = translation;
        });
    }
  }

  botonCambioPassword() {
    if (!this.isConfirmacionPasswordValida) return;
    this.userService
      .cambio_pw(this.userData.usuario.id, this.nuevaPassword1)
      .subscribe({
        next: () => {
          this.translate
            .get('AJUSTESAPP.PASSWORD.CAMBIADA_OK')
            .subscribe((translation) => {
              this.exitoMensaje = translation;
            });
          this.errorMensaje = '';
          this.passwordActual = '';

          this.nuevaPassword1 = '';
          this.nuevaPassword2 = '';
          this.isPasswordActualValida = null;
          this.isNuevaPassword1Valida = false;
          this.isConfirmacionPasswordValida = false;
        },
        error: (err) => {
          this.translate
            .get('AJUSTESAPP.PASSWORD.NO_CAMBIADA')
            .subscribe((translation) => {
              this.exitoMensaje = translation;
            });
          this.exitoMensaje = '';
        },
      });
  }
}
