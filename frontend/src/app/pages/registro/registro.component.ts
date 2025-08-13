import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HelpModalComponent } from 'src/app/components/help-modal/help-modal.component';
import { ModalErrorComponent } from 'src/app/components/modal-error/modal-error.component';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { FuncionesComunes } from '../../core/funciones-comunes/funciones-comunes.service';
import { DialogRef } from '@angular/cdk/dialog';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule,
    TranslateModule,
  ],
  providers: [UserServicesService],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  pasoActual: number = 1;
  formulario1: FormGroup;
  formulario2: FormGroup;
  formulario3: FormGroup;
  paso1: boolean = false;
  fechaNacimiento: string = '';
  botonHabilitadoContacto: boolean = false;
  emailValido: boolean = false;
  fechaValida: boolean = false;
  hoy: string = new Date().toISOString();
  mostrarPassword1: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserServicesService,
    private navCtrl: NavController,
    private dialog: MatDialog,
    private funcionesComunes: FuncionesComunes
  ) {
    this.formulario1 = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
        ],
      ],
      fecha_nacimiento: [{ value: '', disabled: true }, Validators.required],
    });
    this.fechaNacimiento = this.formulario1.get('fecha_nacimiento')?.value;

    this.formulario2 = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]],

      genero: ['', Validators.required],
      orientacion: ['', Validators.required],
    });

    this.formulario3 = this.fb.group({
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^(?=.*[A-Z])(?=.*[\\d\\W]).{6,}$'),
        ],
      ],
    });
  }

  ngOnInit() {
    if (this.pasoActual === 1) {
      this.paso1 = true;
    }
  }

  // Getter para la fecha actual
  get fechaMaxima() {
    const hoy = new Date();
    const dd = String(hoy.getDate()).padStart(2, '0');
    const mm = String(hoy.getMonth() + 1).padStart(2, '0');
    const yyyy = hoy.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  }

  get validarEmailYFecha() {
    const emailValido = this.formulario1.get('email')?.valid ?? false;
    const fechaNacimientoValida =
      this.formulario1.get('fecha_nacimiento')?.valid ?? false;
    return emailValido && fechaNacimientoValida && this.fechaValida;
  }

  botonMostrarPassword_1() {
    this.mostrarPassword1 = !this.mostrarPassword1;
  }

  // Función que se llama cuando hay un cambio en los inputs o checkboxes
  onInputChange() {
    this.botonHabilitadoContacto = this.formulario1.valid && this.fechaValida;
  }

  // Función para avanzar al siguiente formulario
  siguientePaso() {
    if (this.pasoActual === 1 && this.formulario1.valid) {
      const fechaValor = this.formulario1.get('fecha_nacimiento')?.value;
      if (!fechaValor || fechaValor.length !== 10) {
        // No avanzar si fecha incompleta
        return;
      }

      // Parsear fecha dd/mm/yyyy a Date
      const partes = fechaValor.split('-');
      if (partes.length !== 3) {
        return; // Formato inválido
      }
      const dia = parseInt(partes[0], 10);
      const mes = parseInt(partes[1], 10) - 1; // Enero = 0
      const anio = parseInt(partes[2], 10);

      const fechaSeleccionada = new Date(anio, mes, dia);
      const validacion = this.validacionEdad(fechaSeleccionada);

      if (validacion) {
        this.pasoActual++;
        this.paso1 = false;

        this.guardaDatosDelUsuarioEnServicio(this.formulario1.getRawValue());
      }
    } else if (this.pasoActual === 2 && this.formulario2.valid) {
      this.pasoActual++;
      this.paso1 = false;
      this.guardaDatosDelUsuarioEnServicio(this.formulario2.getRawValue());
    } else if (this.pasoActual === 3 && this.formulario3.valid) {
      this.guardaDatosDelUsuarioEnServicio(this.formulario3.getRawValue());
      this.mostrarContrato();
    }
  }

  guardaDatosDelUsuarioEnServicio(datos: any) {
    const usuarioDataTemp = this.userService.getUsuarioData() || {};
    console.log('datos...', datos);

    const datosUsuario = {
      ...usuarioDataTemp,
      ...datos,
    };
    this.userService.setUsuarioData(datosUsuario);
  }

  // Función para retroceder al formulario anterior
  pasoAnterior() {
    if (this.pasoActual > 1) {
      this.pasoActual--;
    }
  }

  // Función para mostrar el contrato de respeto
  mostrarContrato() {
    this.navCtrl.navigateRoot('/registro/contrato-registro');
  }

  // Función para registrar al usuario
  registrar() {
    if (
      this.formulario1.valid &&
      this.formulario2.valid &&
      this.formulario3.valid
    ) {
      const datosRegistro = {
        ...this.formulario1.value,
        ...this.formulario2.value,
        ...this.formulario3.value,
      };

      this.userService.registrarUsuario(datosRegistro).subscribe({
        next: (response) => {
          console.log('Respuesta registro: ', response);

          const title: string = `¡Bienvenido! ${response.usuario.nombre}`;
          const message: string = `
          <p>Tu usuario ha sido creado correctamente.</p>
          <p>Accede a la ventana de acceso de la aplicación para
            <br>
            <a class="text-center" href="/login">iniciar sesión</a>
          </p>
        `;
          this.openHelp(title, message);
          this.navCtrl.navigateRoot('/home');
        },
        error: (err) => {
          const title = 'Error!';
          const message = err.error.error;
          this.openError(title, message);
        },
      });
    }
  }

  // Función para mostrar ventana modal de error
  openError(title: string, message: string) {
    this.dialog.open(ModalErrorComponent, {
      data: { title, message },
      panelClass: 'dialog-animate',
    });
  }

  // Función para mostrar ventana modal con confirmación
  openHelp(title: string, message: string) {
    this.dialog.open(HelpModalComponent, {
      data: { title, message },
      panelClass: 'dialog-animate',
    });
  }

  // Función para volver al home
  volverAlHome() {
    this.navCtrl.navigateRoot('/home');
  }

  onFechaChange() {
    this.validarFechaCompleta();
  }

  validarFechaCompleta() {
    const fechaControl = this.formulario1.get('fecha_nacimiento');
    const fechaValor = fechaControl?.value;
    console.log('Validando fecha...', fechaValor);

    if (!fechaValor || fechaValor.length !== 10) {
      fechaControl?.setErrors({ incompleteDate: true });
      this.botonHabilitadoContacto = false;
      this.fechaValida = false;
      return;
    }
    const fechaLimite = '1930-01-01';
    if (fechaValor < fechaLimite) {
      fechaControl?.setErrors({ fechalimite: true });
      this.botonHabilitadoContacto = false;
      this.fechaValida = false;
      return;
    }
    // Parsear manualmente el día, mes y año
    const partes = fechaValor.split('-');
    if (partes.length !== 3) {
      fechaControl?.setErrors({ invalidDateFormat: true });
      this.botonHabilitadoContacto = false;
      this.fechaValida = false;
      return;
    }
    const anio = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1;
    const dia = parseInt(partes[2], 10);

    const fechaSeleccionada = new Date(anio, mes, dia);

    if (
      fechaSeleccionada.getFullYear() !== anio ||
      fechaSeleccionada.getMonth() !== mes ||
      fechaSeleccionada.getDate() !== dia
    ) {
      console.log('fecha seleccionada...', fechaSeleccionada);

      fechaControl?.setErrors({ invalidDate: true });
      this.botonHabilitadoContacto = false;
      this.fechaValida = false;
      return;
    }

    // Validar si el usuario tiene 18 años o más
    const edadValida = this.validacionEdad(fechaSeleccionada);
    this.fechaValida = edadValida;
    console.log('edadValida: ', edadValida);
    if (edadValida) {
      this.botonHabilitadoContacto = this.emailValido;
    } else {
      this.botonHabilitadoContacto = false;
    }
  }

  //Función para validad la EDAD del usuario por la fecha de nacimiento
  validacionEdad(fechaSeleccionada: Date): boolean {
    const fechaControl = this.formulario1.get('fecha_nacimiento');

    // Si no hay fecha seleccionada, retornamos false
    if (!fechaControl?.value) return false;

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    // Validar si la fecha seleccionada es futura
    if (fechaSeleccionada > hoy) {
      fechaControl?.setErrors({
        ...fechaControl?.errors,
        fechaFutura: true,
      });

      // Limpiar el error 'menorDeEdad' si la fecha es futura
      if (fechaControl?.hasError('menorDeEdad')) {
        fechaControl?.setErrors({
          ...fechaControl?.errors,
          menorDeEdad: null,
        });
      }

      return false;
    } else {
      if (fechaControl?.hasError('fechaFutura')) {
        fechaControl?.setErrors({
          ...fechaControl?.errors,
          fechaFutura: null,
        });
      }
    }

    // Calcular la edad solo si la fecha no es futura
    let edad = hoy.getFullYear() - fechaSeleccionada.getFullYear();
    const mes = hoy.getMonth() - fechaSeleccionada.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaSeleccionada.getDate())) {
      edad--;
    }

    if (edad < 18) {
      fechaControl?.setErrors({
        ...fechaControl?.errors,
        menorDeEdad: true,
      });
      return false;
    } else {
      if (fechaControl?.hasError('menorDeEdad')) {
        fechaControl?.setErrors({
          ...fechaControl?.errors,
          menorDeEdad: null,
        });
      }
      return true;
    }
  }

  comprobarEmailRegistrado(email: string) {
    this.userService.verificarEmailExistente(email).subscribe({
      next: (existe: boolean) => {
        const control = this.formulario1.get('email');
        const fechaControl = this.formulario1.get('fecha_nacimiento');
        if (control) {
          if (existe) {
            control.setErrors({ ...control.errors, emailRepetido: true });
            this.emailValido = false;
            fechaControl?.disable();
          } else {
            if (control.errors?.['emailRepetido']) {
              const { emailRepetido, ...rest } = control.errors;
              control.setErrors(Object.keys(rest).length > 0 ? rest : null);
            }
            if (!control.errors) {
              this.emailValido = true;
              fechaControl?.enable();
            }
          }
          // this.validarEmailYFecha();
        }
      },
      error: (err: any) => {
        console.error('Error al verificar email:', err);
      },
    });
  }

  /**
   * Función para comprobar si podemos continuar en el formulario
   */
  actualizarEstadoBoton() {
    this.botonHabilitadoContacto = this.emailValido && this.fechaValida;
  }

  validarCampo(controlName: string) {
    const control = this.formulario1.get(controlName);
    if (control) {
      control.markAsTouched();
      control.markAsDirty();
      control.updateValueAndValidity();

      if (controlName === 'email' && control.valid) {
        this.comprobarEmailRegistrado(control.value);
      } else if (controlName === 'email') {
        this.emailValido = false;
        this.formulario1.get('fecha_nacimiento')?.disable();
        this.botonHabilitadoContacto = false;
      }
    }
  }
}
