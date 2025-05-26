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
} from '@ionic/angular/standalone';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatDivider } from '@angular/material/divider';

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
    NavbarComponent,
    TranslateModule,
    MatDivider,
    ReactiveFormsModule,
  ],
})
export class NuevaContrasenaPage implements OnInit {
  userLoggedIn: boolean = false;
  formulario: any;
  constructor(private fb: FormBuilder) {
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
}
