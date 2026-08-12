import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
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
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule,
    TranslateModule,
    FormsModule,
  ],
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
   * Verifica que el formato sea 'usuario@dominio.extension', permitiendo caracteres alfanuméricos y símbolos permitidos, y obligando a una extensión de dominio válida (ej: .com, .es).
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
    private translate: TranslateService /**
     * Con el formBuilder creamos un grupo de formularios.
     * El formulario 1 va a tener:
     *  -email: se inicializa vacio (''), required indica que es obligatorio. Pattern comprueba que tenga el formato REGEX correcto
     */,
  ) {
    this.formulario1 = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.EMAIL_REGEX)]],
    });

    /**
     * Inicialización del Formulario 2: Datos Personales.
     * * @description
     * Define los controles para la segunda pantalla del registro.
     * - Regla de flujo: Solo el nombre está activo inicialmente.
     * - Validación Teléfono: Expresión regular para exactamente 9 números.
     */
    this.formulario2 = this.fb.group({
      fecha_nacimiento: ['', Validators.required],
      nombre: [{ value: '', disabled: true }, Validators.required],
      apellidos: [{ value: '', disabled: true }, Validators.required],
      telefono: [
        { value: '', disabled: true },
        [Validators.required, Validators.pattern(/^[0-9]{9}$/)],
      ],
      genero: [{ value: 'NO_RESPONDE', disabled: true }, Validators.required],
      orientacion: [
        { value: 'NO_RESPONDE', disabled: true },
        Validators.required,
      ],
    });

    /**
     * Inicialización del formuarlio 3: Contraseña.
     * * @description
     * Contraseña segura: mínimo 6 dígitos. Pattern: debe llevar al menos una mayúscula y al menos un nº o carácter especial.
     * confirmarPassword: campo en blanco y obligatorio.
     * passwordMatchValidator: es un validador de formulario. Compara las 2 contraseñas. Si no son idénticas marca el formulario como inválido.
     */
    this.formulario3 = this.fb.group(
      {
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern('^(?=.*[A-Z])(?=.*[\\d\\W]).{6,}$'),
          ],
        ],
        confirmarPassword: ['', Validators.required], // Asegúrate de que solo sea ''
      },
      { validators: this.passwordMatchValidator },
    );
  }

  ngOnInit() {
    this.configurarEscalera();
  }

  /**
   *
   * @param form --> recibe el nombre del formulario
   * @param name --> recibe el nombre del campo
   * @param habilitar --> booleano que indica si se debe habilitar (true) o deshabilitar (false)
   * * @description
   * Guardamos en control el nombre del campo a tratar (nombre, apellidos, etc)
   * Si habilitar es true y si el campo esta deshabilitado entonces ponemos el campo en habilitado y con el emitEvent:false le indicamos que ese cambio se quede ahí y no lo propague al resto del formulario para que no haya errores.
   * Si habilitar es false y el campo está habilitado: ponemos el campo en deshabilitado y no propagamos ese cambio y seteamos el control borrando su contenido.Esto sirve por si el usuario borra algo que hubiese escrito, por ejemplo.
   */
  private gestionarControl(
    form: FormGroup,
    name: string,
    habilitar: boolean,
    defaultValue: any = '',
  ) {
    const control = form.get(name);
    if (habilitar) {
      if (control?.disabled) control.enable({ emitEvent: false });
    } else {
      if (control?.enabled) {
        control.disable({ emitEvent: false });
        control.setValue(defaultValue, { emitEvent: false });
      }
    }
  }

  /**
   * Gestiona la lógica de desbloqueo en escalera de los inputs: Escucha los cambios de valor de cada input y habilita el siguiente. Empieza a funcionar directamente en el formulario2, ya que en el formulario1 actua la función comprobarEmailRegistrado.
   * En el formulario2 se suscribe a los cambios que tenga el campo 'nombre'. Cuando detecta algún cambio llama a la función gestionarControl y le dice que en el formulario2 habilite el campo 'apellidos'.
   *
   *
   */
  private configurarEscalera() {
    // 1. Fecha de Nacimiento -> Nombre
    this.formulario2.get('fecha_nacimiento')?.valueChanges.subscribe(() => {
      // Evalúa el formato y mayoría de edad (actualiza this.fechaValida)
      this.validarFechaCompleta();
      this.gestionarControl(this.formulario2, 'nombre', this.fechaValida);
    });

    // 2. Nombre -> Apellidos
    this.formulario2.get('nombre')?.valueChanges.subscribe(() => {
      const controlNombre = this.formulario2.get('nombre');
      this.gestionarControl(
        this.formulario2,
        'apellidos',
        !!controlNombre?.valid,
      );
    });

    // 3. Apellidos -> Teléfono
    this.formulario2.get('apellidos')?.valueChanges.subscribe(() => {
      const controlApellidos = this.formulario2.get('apellidos');
      this.gestionarControl(
        this.formulario2,
        'telefono',
        !!controlApellidos?.valid,
      );
    });

    // 4. Teléfono -> Género
    this.formulario2.get('telefono')?.valueChanges.subscribe((val) => {
      const controlTel = this.formulario2.get('telefono');

      // Si no tiene 9 dígitos exactos, bloqueamos Género y Orientación inmediatamente
      if (!controlTel?.valid || val?.length !== 9) {
        this.telefonoValido = false;
        this.gestionarControl(this.formulario2, 'genero', false, 'NO_RESPONDE');
        this.gestionarControl(
          this.formulario2,
          'orientacion',
          false,
          'NO_RESPONDE',
        );
      }
    });

    // 5. Género -> Orientación
    this.formulario2.get('genero')?.valueChanges.subscribe(() => {
      const controlGenero = this.formulario2.get('genero');
      const generoValidoYHabilitado =
        !!controlGenero?.enabled && !!controlGenero?.valid;

      this.gestionarControl(
        this.formulario2,
        'orientacion',
        generoValidoYHabilitado,
        'NO_RESPONDE',
      );
    });
  }
  // Getter de validación corregido para el Paso 2
  get isPaso2Valido(): boolean {
    // getRawValue permite obtener los valores aunque estén deshabilitados
    const values = this.formulario2.getRawValue();
    const todoLleno =
      values.fecha_nacimiento &&
      values.nombre &&
      values.apellidos &&
      values.telefono &&
      values.genero &&
      values.orientacion;
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

  botonMostrarPassword_1() {
    this.mostrarPassword1 = !this.mostrarPassword1;
  }
  botonMostrarPassword_2() {
    this.mostrarPassword2 = !this.mostrarPassword2;
  }

  // Función que se llama cuando hay un cambio en los inputs o checkboxes
  onInputChange() {
    const emailControl = this.formulario1.get('email');
    if (emailControl?.hasError('emailRepetido')) {
      const errors = { ...emailControl.errors };
      delete errors['emailRepetido'];
      emailControl.setErrors(Object.keys(errors).length > 0 ? errors : null);
    }
    this.botonHabilitadoContacto = this.formulario1.valid && this.emailValido;
  }

  // Función para avanzar al siguiente formulario
  siguientePaso() {
    if (this.pasoActual === 1 && this.formulario1.valid && this.emailValido) {
      this.pasoActual++;
      this.paso1 = false;
      this.guardaDatosDelUsuarioEnServicio(this.formulario1.getRawValue());
    } else if (this.pasoActual === 2 && this.isPaso2Valido) {
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
      if (this.pasoActual == 1) {
        this.paso1 = true;
      }
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
    const fechaControl = this.formulario2.get('fecha_nacimiento');
    if (!fechaControl) return;
    fechaControl.markAsTouched();
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

    if (
      fechaSeleccionada.getFullYear() !== anio ||
      fechaSeleccionada.getMonth() !== mes ||
      fechaSeleccionada.getDate() !== dia
    ) {
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
    const fechaControl = this.formulario2.get('fecha_nacimiento');

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
        if (existe) {
          emailCtrl?.setErrors({ emailRepetido: true });
          this.emailValido = false;
        } else {
          this.emailValido = true;
        }
      },
    });
  }

  /**
   * Función para comprobar si un telefono ya se encuentra registrado previamente
   * @param telefono
   */
  comprobarTelefonoRegistrado(telefono: string) {
    const control = this.formulario2.get('telefono');
    if (!control || control.invalid || telefono.length !== 9) return;

    this.userService.verificarTelefonoExistente(telefono).subscribe({
      next: (existe: boolean) => {
        if (existe) {
          control.setErrors({ ...control.errors, telefonoRepetido: true });
          this.telefonoValido = false;
          this.gestionarControl(
            this.formulario2,
            'genero',
            false,
            'NO_RESPONDE',
          );
          this.gestionarControl(
            this.formulario2,
            'orientacion',
            false,
            'NO_RESPONDE',
          );
        } else {
          if (control.errors?.['telefonoRepetido']) {
            const { telefonoRepetido, ...rest } = control.errors;
            control.setErrors(Object.keys(rest).length > 0 ? rest : null);
          }

          if (control.valid) {
            this.telefonoValido = true;
            this.gestionarControl(
              this.formulario2,
              'genero',
              true,
              'NO_RESPONDE',
            );
          }
        }
        this.actualizarEstadoBoton();
      },
      error: () => {
        this.telefonoValido = false;
        this.gestionarControl(this.formulario2, 'genero', false, 'NO_RESPONDE');
        this.gestionarControl(
          this.formulario2,
          'orientacion',
          false,
          'NO_RESPONDE',
        );
      },
    });
  }

  /**
   * Función para comprobar si podemos continuar en el formulario
   */
  actualizarEstadoBoton() {
    this.botonHabilitadoContacto = this.emailValido;
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

  manejarTabPassword(event: KeyboardEvent) {
    // Solo actuamos si se presiona Tab
    if (event.key === 'Tab') {
      const passwordControl = this.formulario3.get('password');

      // CASO: TAB hacia ADELANTE y el campo NO es válido
      if (
        !event.shiftKey &&
        (passwordControl?.invalid || !passwordControl?.value)
      ) {
        // Detenemos el salto al input de "Confirmar Password"
        event.preventDefault();

        // Buscamos el botón Atrás
        const btnAtras = document.getElementById('btnAtras');

        if (btnAtras) {
          // Usamos un pequeño timeout para asegurar que el foco se asiente
          setTimeout(() => {
            btnAtras.focus();
          }, 0);
        }
      }
    }
  }

  saltarAFecha(event: KeyboardEvent) {
    if (event.key === 'Tab' && !event.shiftKey) {
      const emailControl = this.formulario1.get('email');
      const fechaControl = this.formulario1.get('fecha_nacimiento');

      if (emailControl?.valid) {
        event.preventDefault();

        // Habilitamos el control en el formulario de Angular
        fechaControl?.enable();

        // Ahora que Angular sabe que está habilitado, esperamos al DOM
        setTimeout(() => {
          const campoFecha = document.getElementById(
            'fnacimiento',
          ) as HTMLInputElement;
          if (campoFecha) {
            campoFecha.focus();
            campoFecha.click();
          }
        }, 50);
      }
    }
  }
}
