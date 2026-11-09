import { Component, inject, OnInit, NgZone, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { Usuario } from 'src/app/models/user/usuario.model';
import { ModalErrorComponent } from 'src/app/components/modal-error/modal-error.component';
import { MatDialog } from '@angular/material/dialog';
import { NavController } from '@ionic/angular';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { environment } from 'src/environments/environment';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/core/lenguajes/languaje.service';
import { MessageService } from 'primeng/api';

declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, MatButtonModule, ReactiveFormsModule, SpinnerComponent, TranslateModule],
  providers: [MessageService],
})
export class LoginPage implements OnInit, AfterViewInit {
  loginForm: FormGroup;
  listaUsuarios: Usuario[] = [];
  spinner_de_carga: boolean = false;
  selectedLanguage: string = 'es';

  constructor(
    private userService: UserServicesService,
    private navCtrl: NavController,
    private dialog: MatDialog,
    private ngZone: NgZone,
    private translate: TranslateService,
    private languageService: LanguageService,
    private messageService: MessageService
  ) {
    this.loginForm = new FormGroup({
      emailFormControl: new FormControl('', [Validators.required, Validators.email]),
      passwordFormControl: new FormControl('', [Validators.required]),
      check: new FormControl(false),
    });
    this.selectedLanguage = this.languageService.getLanguage() || 'es';
  }

  ngOnInit() {
    this.obtenerUsuarios();

    /**
     * Recuperación de datos si el check "Recuérdame" está marcado.
     * Estos datos se recuperan de la caché
     */
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    const rememberMe = localStorage.getItem('remember_me') === 'true';

    if (rememberMe && savedEmail) {
      this.loginForm.patchValue({
        emailFormControl: savedEmail,
        passwordFormControl: savedPassword ? atob(savedPassword) : '',
        check: rememberMe,
      });
    }
  }

  ngAfterViewInit(): void {
    this.inicializarBotonGoogle();
  }

  ionViewDidEnter(): void {
    setTimeout(() => {
      this.inicializarBotonGoogle();
    }, 100);
  }

  changeLanguage(selectedLanguage: string) {
    if (this.selectedLanguage === selectedLanguage) {
      return;
    }
    console.log(selectedLanguage);

    this.languageService.setLanguage(selectedLanguage);
    this.selectedLanguage = selectedLanguage;
    this.translate.use(selectedLanguage);
    this.translate.get(['AJUSTESAPP.OPCION_IDIOMA.ALERT_TITULO', 'AJUSTESAPP.OPCION_IDIOMA.ALERT_MENSAJE']).subscribe((translations) => {
      this.messageService.add({
        severity: 'success',
        summary: translations['AJUSTESAPP.OPCION_IDIOMA.ALERT_TITULO'],
        detail: translations['AJUSTESAPP.OPCION_IDIOMA.ALERT_MENSAJE'],
        life: 3000,
      });
    });
  }

  /**
   * Función que verifica si un campo ha sido tocado
   * o si tiene algún error.
   *
   * @param field Recibe la información del input
   * @returns Devuelve true o false en función de si hay error o no.
   */
  isFieldInvalid(field: string): boolean {
    const control = this.loginForm.get(field);
    return control?.touched && control?.invalid ? true : false;
  }

  /**
   * Función para obtener la información de todos los usuarios.
   */
  obtenerUsuarios() {
    this.userService.obtenerUsuarios().subscribe(
      (respuesta) => {
        this.listaUsuarios = respuesta;
      },
      (error) => {
        console.error('Error al obtener la lista de usuarios registrados:', error);
      }
    );
  }

  /**
   * Función para comprobar datos del usuario y poder hacer el login
   */
  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.spinner_de_carga = true;

    const email = this.loginForm.get('emailFormControl')?.value;
    const password = this.loginForm.get('passwordFormControl')?.value;
    const rememberMe = this.loginForm.value.check;
    const encodedPassword = btoa(password);

    this.userService.login(email, password).subscribe({
      next: (usuarioCompleto) => {
        // 1. Guardamos en localStorage
        localStorage.setItem('userData', JSON.stringify(usuarioCompleto));

        // 2. ACTUALIZACIÓN CLAVE: Informamos al servicio para que toda la app se entere
        // Esto disparará automáticamente las notificaciones y actualizará el Navbar
        this.userService.actualizarEstadoUsuario(usuarioCompleto.usuario);

        // 3. Gestión de "Recuérdame"
        if (rememberMe) {
          localStorage.setItem('email', email);
          localStorage.setItem('password', encodedPassword);
          localStorage.setItem('remember_me', 'true');
        } else {
          localStorage.removeItem('email');
          localStorage.removeItem('password');
          localStorage.removeItem('remember_me');
        }

        // 4. Navegación
        this.navCtrl.navigateRoot(['/home']);
      },
      error: (error) => {
        this.spinner_de_carga = false;

        const title = 'Error!';
        const errorMsg = error.error?.Error || 'Error al iniciar sesión. Inténtalo de nuevo.';
        this.openError(title, errorMsg);
      },
    });
  }

  /**
   * Función para mostrar una ventana modal con un mensaje de error.
   *
   * @param title Título que recibe la ventana modal
   * @param message Mensaje de error que recibe la ventana modal.
   */
  openError(title: string, message: string) {
    const dialogRef = this.dialog.open(ModalErrorComponent, {
      data: { title, message, mostrarBotonRegistro: true },
      panelClass: 'dialog-animate',
    });

    dialogRef.afterClosed().subscribe((condicion) => {
      if (condicion === 'registro') {
        this.navCtrl.navigateRoot(['/registro'], {
          animated: false,
        });
      } else if (condicion === 'reenviarCorreo') {
        this.navCtrl.navigateRoot(['/home'], {
          animated: false,
        });
      } else {
        this.navCtrl.navigateRoot(['/home'], {
          animated: false,
        });
      }
    });
  }

  /**
   * Función para inicializar el botón de inicio de sesión con Google.
   * @param intentos - Número de intentos realizados para inicializar el botón.
   * Se utiliza para reintentar en caso de que la API de Google no esté disponible.
   */
  private inicializarBotonGoogle(intentos = 0): void {
    if (typeof google !== 'undefined' && google?.accounts?.id) {
      google.accounts.id.initialize({
        client_id: environment.googleClientId,
        callback: (response: any) => this.procesarLoginGoogle(response.credential),
      });

      const contenedor = document.getElementById('btnGoogleContainer');
      if (contenedor) {
        google.accounts.id.renderButton(contenedor, {
          theme: 'outline',
          size: 'large',
          text: 'signin_with',
          locale: 'es',
        });
      }
    } else if (intentos < 10) {
      setTimeout(() => this.inicializarBotonGoogle(intentos + 1), 200);
    } else {
      console.error('No se pudo cargar la API de Google Identity');
    }
  }
  /**
   * Función para procesar el login con Google.
   * Se encarga de enviar el token de Google al backend para autenticar al usuario.
   *
   * @param idToken - Token de identificación proporcionado por Google después de la autenticación.
   */
  private procesarLoginGoogle(idToken: string): void {
    this.spinner_de_carga = true;
    this.ngZone.run(() => {
      this.userService.loginConGoogle(idToken).subscribe({
        next: (res: any) => {
          if (res.usuarioExistente && res.usuario) {
            localStorage.setItem('userData', JSON.stringify(res.usuario));
            this.userService.actualizarEstadoUsuario(res.usuario);
            if (res.usuario.registroFinalizado === false && res.usuario.emailVerificado === false) {
              const title = 'Error!';
              const errorMsg = 'Error al iniciar sesión. Inténtalo de nuevo.';
              this.openError(title, errorMsg);
            }
            this.navCtrl.navigateRoot('/home');
          } else {
            localStorage.setItem('tempGoogleToken', idToken);
            this.openError('Acceso denegado', 'Este correo de Google no está registrado en nuestra base de datos.');
          }
        },
        error: (err) => {
          console.error('Error al autenticar con Google:', err);
        },
      });
    });
  }

  reenviarCorreoFinReg(){

  }
}
