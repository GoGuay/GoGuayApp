import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HelpModalComponent } from 'src/app/components/help-modal/help-modal.component';
import { ModalErrorComponent } from 'src/app/components/modal-error/modal-error.component';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { FuncionesComunes } from '../../core/funciones-comunes/funciones-comunes.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, MatButtonModule, TranslateModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  pasoActual: number = 1;
  formulario1: FormGroup;
  formulario2: FormGroup;
  formulario3: FormGroup;
  paso1: boolean = true;

  fechaNacimiento: string = '';
  botonHabilitadoContacto: boolean = false;
  botonHabilitadoTelefono: boolean = false;
  emailValido: boolean = false;
  telefonoValido: boolean = false;
  fechaValida: boolean = false;
  hoy: string = new Date().toISOString();
  mostrarPassword1: boolean = false;
  mostrarPassword2: boolean = false;

  /**
   * Expresión regular estándar para la validación de correos electrónicos.
   * Verifica que el formato sea 'usuario@dominio.extension', permitiendo
   * caracteres alfanuméricos y símbolos permitidos, y obligando a una
   * extensión de dominio válida (ej: .com, .es).
   */
  EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //CONSTRUCTOR: Inyección de dependencias y validación de los formularios
  constructor(
    private fb: FormBuilder,
    private userService: UserServicesService,
    private navCtrl: NavController,
    private dialog: MatDialog,
    private funcionesComunes: FuncionesComunes,
    private translate: TranslateService,
  ) /**
   * Con el formBuilder creamos un grupo de formularios.
   * El formulario 1 va a tener dos campos:
   *  -email: se inicializa vacio (''), required indica que es obligatorio. Pattern comprueba que tenga el formato REGEX correcto
   *  -fecha_nacimiento: el campo esta vacío, y deshabilitado por defecto. required: obligatorio.
   */
  {
    this.formulario1 = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.EMAIL_REGEX)]],
      fecha_nacimiento: [{ value: '', disabled: true }, Validators.required],
    });

    this.formulario2 = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: [{ value: '', disabled: true }, Validators.required],
      telefono: [{ value: '', disabled: true }, [Validators.required, Validators.pattern(/^[0-9]{9}$/)]],
      genero: [{ value: '', disabled: true }, Validators.required],
      orientacion: [{ value: '', disabled: true }, Validators.required],
    });

    this.formulario3 = this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[A-Z])(?=.*[\\d\\W]).{6,}$')]],
        confirmarPassword: ['', Validators.required], // Asegúrate de que solo sea ''
      },
      { validators: this.passwordMatchValidator },
    );
  }

  ngOnInit() {
    this.configurarEscalera();
  }

  private configurarEscalera() {
    // PASO 1: Habilitar fecha solo si email es válido y verificado
    // La lógica de habilitar fecha se queda en comprobarEmailRegistrado para esperar al servidor

    // PASO 2: Escalera fluida
    this.formulario2.get('nombre')?.valueChanges.subscribe((val) => {
      this.gestionarControl(this.formulario2, 'apellidos', !!val);
    });

    this.formulario2.get('apellidos')?.valueChanges.subscribe((val) => {
      this.gestionarControl(this.formulario2, 'telefono', !!val);
    });

    this.formulario2.get('telefono')?.valueChanges.subscribe(() => {
      const control = this.formulario2.get('telefono');
      // Solo habilitar género si el teléfono cumple el patrón (9 dígitos)
      this.gestionarControl(this.formulario2, 'genero', !!control?.valid);
    });

    this.formulario2.get('genero')?.valueChanges.subscribe((val) => {
      this.gestionarControl(this.formulario2, 'orientacion', !!val);
    });

    // PASO 3: Escalera de contraseña
    // this.formulario3.get('password')?.valueChanges.subscribe(() => {
    //   const passValid = this.formulario3.get('password')?.valid;
    //   this.gestionarControl(this.formulario3, 'confirmarPassword', !!passValid);
    // });
  }
  private gestionarControl(form: FormGroup, name: string, habilitar: boolean) {
    const control = form.get(name);
    if (habilitar) {
      if (control?.disabled) control.enable({ emitEvent: false });
    } else {
      if (control?.enabled) {
        control.disable({ emitEvent: false });
        control.setValue('', { emitEvent: false });
      }
    }
  }

  // Getter de validación corregido para el Paso 2
  get isPaso2Valido(): boolean {
    // getRawValue permite obtener los valores aunque estén deshabilitados
    const values = this.formulario2.getRawValue();
    const todoLleno = values.nombre && values.apellidos && values.telefono && values.genero && values.orientacion;
    return !!(todoLleno && this.formulario2.valid);
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
    const fechaNacimientoValida = this.formulario1.get('fecha_nacimiento')?.valid ?? false;
    return emailValido && fechaNacimientoValida && this.fechaValida;
  }

  botonMostrarPassword_1() {
    this.mostrarPassword1 = !this.mostrarPassword1;
  }
  botonMostrarPassword_2() {
    this.mostrarPassword2 = !this.mostrarPassword2;
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
    this.guardaDatosDelUsuarioEnServicio(this.formulario3.getRawValue());
    this.guardaDatosDelUsuarioEnServicio(this.formulario3.getRawValue());
    this.navCtrl.navigateRoot('/registro/resumen-registro');
  }

  // Función para registrar al usuario
  registrar() {
    if (this.formulario1.valid && this.formulario2.valid && this.formulario3.valid) {
      const datosRegistro = {
        ...this.formulario1.value,
        ...this.formulario2.value,
        ...this.formulario3.value,
      };

      this.userService.registrarUsuario(datosRegistro).subscribe({
        next: (response) => {
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

    if (fechaSeleccionada.getFullYear() !== anio || fechaSeleccionada.getMonth() !== mes || fechaSeleccionada.getDate() !== dia) {
      fechaControl?.setErrors({ invalidDate: true });
      this.botonHabilitadoContacto = false;
      this.fechaValida = false;
      return;
    }

    // Validar si el usuario tiene 18 años o más
    const edadValida = this.validacionEdad(fechaSeleccionada);
    this.fechaValida = edadValida;
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

  /**
   * Función para comprobar si un email ya se encuentra registrado previamente
   * @param email
   */
  comprobarEmailRegistrado(email: string) {
    if (this.formulario1.get('email')?.invalid) return;

    this.userService.verificarEmailExistente(email.toLowerCase()).subscribe({
      next: (existe) => {
        const emailCtrl = this.formulario1.get('email');
        const fechaCtrl = this.formulario1.get('fecha_nacimiento');
        if (existe) {
          emailCtrl?.setErrors({ emailRepetido: true });
          this.emailValido = false;
          fechaCtrl?.disable();
        } else {
          this.emailValido = true;
          fechaCtrl?.enable();
        }
      },
    });
  }

  /**
   * Función para comprobar si un telefono ya se encuentra registrado previamente
   * @param telefono
   */
  comprobarTelefonoRegistrado(telefono: string) {
    this.userService.verificarTelefonoExistente(telefono).subscribe({
      next: (existe: boolean) => {
        const control = this.formulario2.get('telefono');
        if (control) {
          if (existe) {
            control.setErrors({ ...control.errors, telefonoRepetido: true });
            this.telefonoValido = false;
          } else {
            if (control.errors?.['telefonoRepetido']) {
              const { telefonoRepetido, ...rest } = control.errors;
              control.setErrors(Object.keys(rest).length > 0 ? rest : null);
            }
            if (!control.errors) {
              this.telefonoValido = true;
              this.escucharCambiosFormulario2('telefono');
            }
          }
          this.actualizarEstadoBoton();
        }
      },
      error: (err: any) => {
        console.error('Error al verificar el teléfono:', err);
      },
    });
  }

  /**
   * Función para comprobar si podemos continuar en el formulario
   */
  actualizarEstadoBoton() {
    this.botonHabilitadoContacto = this.emailValido && this.fechaValida;
    this.botonHabilitadoTelefono = this.telefonoValido;
  }

  validarCampo(controlName: string, formulario: FormGroup) {
    const control = formulario.get(controlName);
    if (control) {
      control.markAsTouched();
      control.markAsDirty();
      control.updateValueAndValidity();

      if (controlName === 'email') {
        this.comprobarEmailRegistrado(control.value);
      } else {
        this.emailValido = false;
        this.formulario1.get('fecha_nacimiento')?.disable();
        this.botonHabilitadoContacto = false;
      }

      if (controlName === 'telefono') {
        this.comprobarTelefonoRegistrado(control.value);
      } else {
        this.telefonoValido = false;
        this.botonHabilitadoTelefono = false;
      }
    }
  }

  escucharCambiosFormulario2(controlName: string) {
    if (controlName === 'nombre') {
      const controlNombre = this.formulario2.get('nombre');
      if (controlNombre?.valid) {
        this.formulario2.get('apellidos')?.enable();
      }
    }

    if (controlName === 'apellidos') {
      const controlApellidos = this.formulario2.get('apellidos');
      if (controlApellidos?.valid) {
        this.formulario2.get('telefono')?.enable();
      }
    }

    if (controlName === 'telefono') {
      const controlTelefono = this.formulario2.get('telefono');
      if (controlTelefono?.valid) {
        this.formulario2.get('genero')?.enable();
      }
    }

    if (controlName === 'genero') {
      const controlGenero = this.formulario2.get('genero');
      if (controlGenero?.valid) {
        this.formulario2.get('orientacion')?.enable();
      }
    }
  }

  /**
   * Función para avanzar entre los inputs con la tecla "Tab"
   * @param event
   * @param idSiguiente
   */
  // enfocarSiguiente(event: any, idSiguiente: string) {
  //   event.preventDefault(); // detiene el tab por defecto
  //   const siguiente = document.getElementById(idSiguiente);
  //   if (siguiente) siguiente.focus();
  // }

  /**
   * Si hay nuevaPassword y además es diferente a la actual, habilitamos isNuevaPassword1 y reseteamos el mensaje de error.
   * De lo contrario, dejamos de nuevoesNuevaPasswor1 en false y lanzamos mensaje de error.
   * Resetea el campo de nuevaPassword2 para que "obligue" al usuario a escribir algo y valida de nuevo.
   */
  // validarNuevaPassword() {
  //   if (this.password) {
  //     this.isNuevaPassword1Valida = true;
  //     this.errorMensaje = '';
  //   } else {
  //     this.isNuevaPassword1Valida = false;
  //     this.translate.get('AJUSTESAPP.PASSWORD.NUEVA_DIF_ACTUAL').subscribe((translation) => {
  //       this.errorMensaje = translation;
  //     });
  //   }
  //   this.confirmarPassword = '';
  //   this.isConfirmacionPasswordValida = false;
  // }

  /**
   * Si hay nuevaPassword2 y además es igual que la nuevaPassword1 pone la confirmación en true
   * DE lo contrario deja la confirmación en false y lanza un mensaje de error
   */
  // validarConfirmacionPassword() {
  //   if (this.confirmarPassword && this.confirmarPassword === this.password) {
  //     this.isNuevaPassword1Valida = true;
  //     this.errorMensaje = '';
  //   } else {
  //     this.isNuevaPassword1Valida = false;
  //     this.translate.get('AJUSTESAPP.PASSWORD.NO_COINCIDEN').subscribe((translation) => {
  //       this.errorMensaje = translation;
  //     });
  //   }
  // }

  // Este es el validador que sustituye a tus funciones manuales
  passwordMatchValidator(g: FormGroup) {
    const pass = g.get('password')?.value;
    const conf = g.get('confirmarPassword')?.value;

    // Si el campo de confirmar está vacío, no ponemos error todavía
    if (!conf) {
      return null;
    }

    if (pass !== conf) {
      g.get('confirmarPassword')?.setErrors({ noCoincide: true });
      return { mismatch: true };
    }

    // Si coinciden, limpiamos los errores
    return null;
  }

  manejarTabPassword(event: any) {
    // Capturamos la tecla Tab (puedes recibir KeyboardEvent o any)
    if (event.key === 'Tab' || event.keyCode === 9) {
      const passwordControl = this.formulario3.get('password');

      // Si pulsamos TAB hacia adelante Y (el password es inválido o está vacío)
      if (!event.shiftKey && (passwordControl?.invalid || !passwordControl?.value)) {
        console.log('TAB detectado - Password inválido. Forzando foco a Atrás...');

        // Detenemos el comportamiento original
        event.preventDefault();
        event.stopPropagation();

        // Buscamos el botón por ID
        const btnAtras = document.getElementById('btnAtras');
        if (btnAtras) {
          (btnAtras as HTMLElement).focus();
        }
      }
    }
  }
}
