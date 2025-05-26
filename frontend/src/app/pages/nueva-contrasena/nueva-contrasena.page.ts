import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormsModule,
  Validators,
  FormGroup,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCol,
  IonRow,
  NavController,
} from '@ionic/angular/standalone';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatDivider } from '@angular/material/divider';
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

  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserServicesService
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
          alert(respuesta.mensaje || 'Contraseña actualizada correctamente');
          this.formulario.reset();
        },
        error: (err) => {
          alert(
            err.error.error ||
              err.error.Error ||
              'Error al cambiar la contraseña'
          );
        },
      });
  }

  comprobacion_token(token: string) {
    this.userService.comprobar_token(token).subscribe((respuesta) => {
      console.log('respuesta: ', respuesta);
      if (respuesta.error === 'Token expirado') {
        this.navCtrl.navigateRoot(['/token-expirado']);
      } else if (respuesta.error === 'Token ya utilizado') {
        this.navCtrl.navigateRoot(['/']);
      }
    });
  }
}
