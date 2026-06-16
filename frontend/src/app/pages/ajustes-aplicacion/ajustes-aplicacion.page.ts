import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { IonContent, IonicModule, NavController } from '@ionic/angular';
import { LanguageService } from '../../core/lenguajes/languaje.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MatDividerModule } from '@angular/material/divider';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { UserServicesService } from '../../core/user-services/user-services.service';
import { Usuario } from '../../models/user/usuario.model';
import { HelpModalComponent } from '../../components/help-modal/help-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { FuncionesComunes } from '../../core/funciones-comunes/funciones-comunes.service';
import { addIcons } from 'ionicons';
import { logoPaypal, cardOutline, businessOutline } from 'ionicons/icons';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

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
  userLoggedIn: boolean = false;

  selectedLanguage = 'es';
  mostrarBanner = true;
  notificacionesActivas = true;
  theme = 'light';
  mostrarJumbotron = true;

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
  interactuoConPassword: boolean = false;
  errorMensaje: string = '';
  exitoMensaje: string = '';

  preferenciasSeleccionadas: string[] = [];
  aceptaMascotas: boolean = false;
  fuma: boolean = false;
  leGustaMusica: boolean = false;
  leGustaHablar: boolean = false;
  leGustaSilencio: boolean = false;
  soloMujeres: boolean = false;
  darkTheme: boolean = false;
  usuario: Usuario['usuario'] | null = null;
  isLoggedIn: boolean = false;
  numNotificaciones: number = 0;

  notifPush: boolean = true;
  notifEmail: boolean = true;
  notifSMS: boolean = false;

  segmentoSeleccionado: string = 'app';

  metodoPagoPredeterminado: string = 'paypal';
  emailPaypal: string = '';
  numeroTarjeta: string = '';
  fechaCaducidad: string = '';
  cvvTarjeta: string = '';

  metodoCobroPredeterminado: string = 'transferencia';
  cobroEmailPaypal: string = '';
  cobroIBAN: string = '';
  cobroTitular: string = '';

  @ViewChild(IonContent) content!: IonContent;

  constructor(
    private navCtrl: NavController,
    private languageService: LanguageService,
    private messageService: MessageService,
    private userService: UserServicesService,
    private dialog: MatDialog,
    private translate: TranslateService,
    private route: ActivatedRoute,
    private funcionesComunes: FuncionesComunes,
    private _bottomSheet: MatBottomSheet,
  ) {
    addIcons({ logoPaypal, cardOutline, businessOutline });
  }

  ngOnInit() {
    this.userLoggedIn = this.funcionesComunes.isUserLoggedIn();
    this.selectedLanguage = this.languageService.getLanguage();
    const savedJumbotronSetting = localStorage.getItem('mostrarJumbotron');
    this.mostrarJumbotron =
      savedJumbotronSetting === null ? true : savedJumbotronSetting === 'true';
    this.notificacionesActivas =
      localStorage.getItem('notificacionesActivas') !== 'false';
    this.notifPush = localStorage.getItem('notifPush') !== 'false';
    this.notifEmail = localStorage.getItem('notifEmail') !== 'false';
    this.notifSMS = localStorage.getItem('notifSMS') === 'true';

    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.obtenerUsuario();
  }

  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            const yOffset = element.offsetTop;
            this.content.scrollToPoint(0, yOffset, 600);
          }
        }, 600);
      }
    });
  }

  obtenerUsuario() {
    this.userService
      .obtenerUsuarioPorID(this.userData.usuario.id)
      .subscribe((respuesta) => {
        this.usuarioBD = respuesta;
        this.metodoPagoPredeterminado =
          respuesta.metodo_pago_preferido || 'paypal';
      });
  }

  guardarAjustes() {
    localStorage.setItem('mostrarJumbotron', this.mostrarJumbotron.toString());
    localStorage.setItem(
      'notificacionesActivas',
      this.notificacionesActivas.toString(),
    );
    localStorage.setItem('notifPush', this.notifPush.toString());
    localStorage.setItem('notifEmail', this.notifEmail.toString());
    localStorage.setItem('notifSMS', this.notifSMS.toString());

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
          life: 2000,
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

  onMetodoPagoChange() {
    console.log('Cambiando a:', this.metodoPagoPredeterminado);
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
      (err) => console.error('Error del backedn: ', err),
    );
    localStorage.removeItem('userData');
    this.navCtrl.navigateRoot(['/'], {});
  }

  /**
   * FUNCIÓN PARA COMPROBAR LA CONTRASEÑA ACTUAL Y DESHABILITAR/HABILITAR los siguientes campos
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

    if (!this.passwordActual || this.passwordActual.length < 6) { 
      this.isPasswordActualValida = false;
      this.errorMensaje = '';
      return;
    }

    this.userService
      .verificar_pw_actual(this.userData.usuario.id, this.passwordActual.trim())
      .subscribe({
        next: (res) => {
          this.isPasswordActualValida = res.isValid;

          if (res.isValid) {
            this.errorMensaje = '';
            console.log('Contraseña actual verificada correctamente');
          } else {
            this.translate
              .get('AJUSTESAPP.PASSWORD.CONTRAS_ACTUAL_INCO')
              .subscribe((translation) => {
                this.errorMensaje = translation;
              });
            console.log('Contraseña actual incorrecta');
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

  /**
   * Función para manejar el botón de cambio de contraseña
   */
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

  /**
   * Función para mostrar u ocultar el jumbotron de la home al activar o desactivar la opción en ajustes de aplicación
   */
  mostrarJumbotronChange() {
    localStorage.setItem('mostrarJumbotron', this.mostrarJumbotron.toString());
    this.messageService.add({
      severity: 'success',
      summary: 'Ajuste actualizado',
      detail: 'Se ha cambiado el ajuste de visualización de la cabecera.',
      life: 2000,
    });
  }

  /**
   * Función para cerrar sesión
   */
  async logout() {
    const rememberMe = localStorage.getItem('remember_me') === 'true';
    const email = localStorage.getItem('email') || '';
    const password = localStorage.getItem('password') || '';
    const alert = await this.dialog.open(HelpModalComponent, {
      data: {
        title: 'Cerrar Sesión',
        message: '¿Estás seguro de que quieres salir de Pridecar?',
        showAcceptButton: true,
      },
    });

    alert.afterClosed().subscribe((confirmado) => {
      if (confirmado) {
        if (rememberMe) {
          localStorage.setItem('remember_me', 'true');
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
        }

        this.userService.setUsuarioData(null);

        this.userData = {} as Usuario;
        this.usuario = null;
        this.isLoggedIn = false;
        this.numNotificaciones = 0;

        this.navCtrl.navigateRoot(['/home'], { animated: true });
      }
    });
  }

  /**
   * Función para guardar el método de pago preferido del usuario.
   * Recoge los datos del formulario y los envía al backend para actualizar el perfil del usuario.
   *
   */
  guardarMetodoPago() {
    const datosPago = {
      metodo_pago_preferido: this.metodoPagoPredeterminado,
      paypal_email: this.emailPaypal,
      tarjeta_numero: this.numeroTarjeta,
      tarjeta_exp: this.fechaCaducidad,
    };

    this.userService
      .actualizarUsuario(this.userData.usuario.id, datosPago)
      .subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: 'Datos de pago actualizados correctamente',
          });
        },
      });
  }

  /**
   * Función para guardar el método de cobro preferido del usuario.
   * Recoge los datos del formulario y los envía al backend para actualizar el perfil del usuario.
   */
  guardarConfiguracionCobro() {
    const datosCobro = {
      metodo_cobro_preferido: this.metodoCobroPredeterminado,
      cobro_paypal_email: this.cobroEmailPaypal,
      cobro_iban: this.cobroIBAN,
      cobro_titular: this.cobroTitular,
    };

    this.userService
      .actualizarUsuario(this.userData.usuario.id, datosCobro)
      .subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: 'Datos de cobro actualizados correctamente',
          });
        },
      });
  }

  /**
   * Función para abrir el centro de ayuda al hacer click en la opción del menú. Redirige a la página de centro de ayuda.
   */
  irACentroAyuda() {
    this.navCtrl.navigateForward('/centro-ayuda');
  }

  /**
   * Función para abrir la página de términos y condiciones al hacer click en la opción del menú. Redirige a la página de términos y condiciones.
   */
  irATerminos() {
    this.navCtrl.navigateForward('/condiciones-generales');
  }

  /**
   * Función para abrir la página de valoración de la aplicación al hacer click en la opción del menú. Redirige a la página de encuesta de satisfacción.
   */
  valorarApp() {
    this.navCtrl.navigateForward('/encuesta-satisfaccion');
  }
}
