import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormsModule,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import {
  IonContent,
  IonCol,
  IonRow,
  NavController,
} from '@ionic/angular/standalone';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { ActivatedRoute } from '@angular/router';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';

/**
 * Valida si las 2 contraseñas introducidas son iguales
 * Recibe el formulario completo y extrae los 2 valores: nuevaPassword1 y nuevaPassword2
 * Si no son iguales retorna un objeto de error {noCoinciden: true}
 * Si coinciden, retorna null.
 * AbstractControl es el tipo de dato que representa el formulario completo.
 * ValidationErrors indica que puede devolver errores o null.
 * @param group
 * @returns
 */
function passwordsCoincidentes(
  group: AbstractControl
): ValidationErrors | null {
  const pass1 = group.get('nuevaPassword1')?.value;
  const pass2 = group.get('nuevaPassword2')?.value;
  return pass1 && pass2 && pass1 !== pass2 ? { noCoinciden: true } : null;
}

@Component({
  selector: 'app-nueva-contrasena',
  templateUrl: './nueva-contrasena.page.html',
  styleUrls: ['./nueva-contrasena.page.scss'],
  standalone: true,
  imports: [
    IonRow,
    IonCol,
    IonContent,
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
})
export class NuevaContrasenaPage implements OnInit {
  userLoggedIn: boolean = false;
  formulario: any;
  mostrarPassword1: boolean = false;
  mostrarPassword2: boolean = false;
  token!: string;
  mensajeOkCambiada: boolean = false;
  nuevaPassword1: string = '';
  nuevaPassword2: string = '';
  isNuevaPassword1Valida: boolean = false;
  errorMensaje: string = '';
  isConfirmacionPasswordValida: boolean = false;

  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserServicesService,
    private translate: TranslateService
  ) {
    this.formulario = this.fb.group(
      {
        nuevaPassword1: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern('^(?=.*[A-Z])(?=.*[\\d\\W]).{6,}$'),
          ],
        ],
        nuevaPassword2: [{ value: '', disabled: true }, Validators.required],
      },
      {
        validators: passwordsCoincidentes,
      }
    );
  }

  ngOnInit(): void {
    /**
     * Extraemos el token de la url
     */
    this.token = this.route.snapshot.paramMap.get('token') || '';

    this.comprobacion_token(this.token);

    this.formulario
      .get('nuevaPassword1')
      ?.statusChanges.subscribe((status: string) => {
        const pass2 = this.formulario.get('nuevaPassword2');
        if (status === 'VALID') {
          pass2?.enable();
        } else {
          pass2?.disable();
          pass2?.reset();
        }
      });
  }

  botonMostrarPassword_1() {
    this.mostrarPassword1 = !this.mostrarPassword1;
  }

  botonMostrarPassword_2() {
    this.mostrarPassword2 = !this.mostrarPassword2;
  }

  boton_cambio_pw() {
    if (this.formulario.invalid) return;

    const nuevaPassword = this.formulario.get('nuevaPassword1')?.value;

    this.userService
      .cambiar_pw_solicitado(this.token, nuevaPassword)
      .subscribe({
        next: (respuesta: any) => {
          this.formulario.reset();
          this.mensajeOkCambiada = true;
        },
        error: (err) => {
          if (err.error.error === 'Token ya utilizado') {
            this.navCtrl.navigateRoot(['/token-ya-usado']);
          }
          console.log(err);
        },
      });
  }

  comprobacion_token(token: string) {
    this.userService.comprobar_token(token).subscribe((respuesta) => {
      console.log('respuesta: ', respuesta);
      if (respuesta.error === 'Token expirado') {
        this.navCtrl.navigateRoot(['/token-expirado']);
      } else if (respuesta.error === 'Token ya utilizado') {
        this.navCtrl.navigateRoot(['/token-ya-usado']);
      }
    });
  }

  redireccion_home() {
    localStorage.removeItem('userData');
    setTimeout(() => {
      this.navCtrl.navigateRoot(['/']);
    }, 250);
  }

  redireccion_con_cache() {
    setTimeout(() => {
      this.navCtrl.navigateRoot(['/']);
    }, 250);
  }

  /**
   * Si hay nuevaPassword y además es diferente a la actual, habilitamos isNuevaPassword1 y reseteamos el mensaje de error.
   * De lo contrario, dejamos de nuevoesNuevaPasswor1 en false y lanzamos mensaje de error.
   * Resetea el campo de nuevaPassword2 para que "obligue" al usuario a escribir algo y valida de nuevo.
   */
  validarNuevaPassword() {
    if (this.nuevaPassword1 && this.nuevaPassword1) {
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
}
