import { CommonModule } from '@angular/common';
import { Component, NgZone, OnInit, AfterViewInit } from '@angular/core';
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
import { NavController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { HelpModalComponent } from 'src/app/components/help-modal/help-modal.component';
import { ModalErrorComponent } from 'src/app/components/modal-error/modal-error.component';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
declare const google: any;

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
export class RegistroComponent implements OnInit, AfterViewInit {
  // ------------------------------------------------------------------
  // 1. PROPIEDADES Y ESTADOS
  // ------------------------------------------------------------------
  pasoActual: number = 1;
  paso1: boolean = true;

  formulario1: FormGroup;
  formulario2: FormGroup;
  formulario3: FormGroup;

  botonHabilitadoContacto: boolean = false;
  botonHabilitadoTelefono: boolean = false;

  emailValido: boolean = false;
  telefonoValido: boolean = false;
  fechaValida: boolean = false;

  mostrarPassword1: boolean = false;
  mostrarPassword2: boolean = false;

  cargandoTelefono: boolean = false;

  esGoogle: boolean = false;

  /** Regex estándar para emails con extensión (.com, .es, etc.) */
  readonly EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // ------------------------------------------------------------------
  // 2. CONSTRUCTOR Y CICLO DE VIDA
  // ------------------------------------------------------------------
  constructor(
    private fb: FormBuilder,
    private userService: UserServicesService,
    private navCtrl: NavController,
    private dialog: MatDialog,
    private ngZone: NgZone,

    /**
     * Con el formBuilder creamos un grupo de formularios.
     * El formulario 1 va a tener:
     *  -email: se inicializa vacio (''), required indica que es obligatorio. Pattern comprueba que tenga el formato REGEX correcto
     */

    // Formulario 1: Email
  ) {
    this.formulario1 = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.EMAIL_REGEX)]],
    });

    // Formulario 2: Datos Personales
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

    // Formulario 3: Contraseña
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

  ngAfterViewInit(): void {
    this.inicializarBotonGoogle();
  }

  // ------------------------------------------------------------------
  // 3. GETTERS
  // ------------------------------------------------------------------
  get isPaso2Valido(): boolean {
    const values = this.formulario2.getRawValue();
    const todoLleno =
      values.fecha_nacimiento &&
      values.nombre &&
      values.apellidos &&
      values.telefono &&
      values.genero &&
      values.orientacion;
    return !!(todoLleno && this.formulario2.valid && !this.cargandoTelefono);
  }

  get fechaMaxima() {
    const hoy = new Date();
    const dd = String(hoy.getDate()).padStart(2, '0');
    const mm = String(hoy.getMonth() + 1).padStart(2, '0');
    const yyyy = hoy.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  }

  // ------------------------------------------------------------------
  // 4. FLUJO DE NAVEGACIÓN PASO A PASO
  // ------------------------------------------------------------------

  // Función para avanzar al siguiente formulario
  siguientePaso() {
    if (this.pasoActual === 1 && this.formulario1.valid && this.emailValido) {
      this.formulario1.markAllAsTouched();
      this.pasoActual++;
      this.paso1 = false;
      this.guardaDatosDelUsuarioEnServicio(this.formulario1.getRawValue());
    } else if (this.pasoActual === 2 && this.isPaso2Valido) {
      this.formulario2.markAllAsTouched();
      this.guardaDatosDelUsuarioEnServicio(this.formulario2.getRawValue());
      if (this.esGoogle) {
        this.mostrarContrato();
      } else {
        this.pasoActual++;
        this.paso1 = false;
      }
    } else if (this.pasoActual === 3 && this.formulario3.valid) {
      this.formulario3.markAllAsTouched();
      this.guardaDatosDelUsuarioEnServicio(this.formulario3.getRawValue());
      this.mostrarContrato();
    }
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

  // Función para volver al home
  volverAlHome() {
    this.navCtrl.navigateRoot('/home');
  }

  guardaDatosDelUsuarioEnServicio(datos: any) {
    const usuarioDataTemp = this.userService.getUsuarioData() || {};
    console.log('usuarioDataTemp: ', usuarioDataTemp);

    const datosUsuario = {
      ...usuarioDataTemp,
      ...datos,
    };
    this.userService.setUsuarioData(datosUsuario);
  }

  // ------------------------------------------------------------------
  // 5. LÓGICA DE ESCALERA Y CONTROLES REACTIVOS
  // ------------------------------------------------------------------
  private gestionarControl(
    form: FormGroup,
    name: string,
    habilitar: boolean,
    defaultValue: any = '',
    resetearValor: boolean = false,
  ) {
    const control = form.get(name);
    if (habilitar) {
      if (control?.disabled) control.enable({ emitEvent: false });
    } else {
      if (control?.enabled) {
        control.disable({ emitEvent: false });
        if (resetearValor) {
          control.setValue(defaultValue, { emitEvent: false });
        }
      }
    }
  }

  private configurarEscalera() {
    this.formulario2.get('fecha_nacimiento')?.valueChanges.subscribe(() => {
      this.validarFechaCompleta();
      if (!this.esGoogle) {
        this.gestionarControl(
          this.formulario2,
          'nombre',
          this.fechaValida,
          '',
          false,
        );
      }
    });
    this.formulario2.get('nombre')?.valueChanges.subscribe(() => {
      const controlNombre = this.formulario2.get('nombre');
      this.gestionarControl(
        this.formulario2,
        'apellidos',
        !!controlNombre?.valid,
        '',
        false,
      );
    });

    this.formulario2.get('apellidos')?.valueChanges.subscribe(() => {
      const controlApellidos = this.formulario2.get('apellidos');
      this.gestionarControl(
        this.formulario2,
        'telefono',
        !!controlApellidos?.valid,
        '',
        false,
      );
    });

    this.formulario2.get('telefono')?.valueChanges.subscribe((val) => {
      const controlTel = this.formulario2.get('telefono');

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

  // ------------------------------------------------------------------
  // 6. VALIDACIONES PERSONALIZADAS Y API
  // ------------------------------------------------------------------

  validarCampo(controlName: string, formulario: FormGroup) {
    const control = formulario.get(controlName);
    if (!control) return;
    control.markAsTouched();
    control.markAsDirty();
    control.updateValueAndValidity();

    if (controlName === 'email') {
      if (control.invalid) {
        this.emailValido = false;
      } else {
        this.comprobarEmailRegistrado(control.value);
      }
    }
    if (controlName === 'telefono') {
      if (control.invalid) {
        this.telefonoValido = false;
      } else {
        this.comprobarTelefonoRegistrado(control.value);
      }
    }
  }

  comprobarEmailRegistrado(email: string) {
    const control = this.formulario1.get('email');

    if (!control || control.invalid || !email) {
      this.emailValido = false;
      return;
    }

    this.userService.verificarEmailExistente(email).subscribe({
      next: (existe: boolean) => {
        if (existe) {
          control.setErrors({ ...control.errors, emailRepetido: true });
          this.emailValido = false;
        } else {
          if (control.errors?.['emailRepetido']) {
            const { emailRepetido, ...rest } = control.errors;
            control.setErrors(Object.keys(rest).length > 0 ? rest : null);
          }

          if (control.valid) {
            this.emailValido = true;
          }
        }
      },
      error: (err: any) => {
        console.error('Error al verificar el correo:', err);
        this.emailValido = false;
      },
    });
  }

  comprobarTelefonoRegistrado(telefono: string) {
    const control = this.formulario2.get('telefono');
    if (!control || control.invalid || telefono.length !== 9) return;

    this.cargandoTelefono = true;
    this.telefonoValido = false;

    this.userService.verificarTelefonoExistente(telefono).subscribe({
      next: (existe: boolean) => {
        this.cargandoTelefono = false;
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
            this.gestionarControl(
              this.formulario2,
              'orientacion',
              true,
              'NO_RESPONDE',
            );
          }
        }
        this.actualizarEstadoBoton();
      },
      error: () => {
        this.cargandoTelefono = false;
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

  onFechaChange() {
    this.validarFechaCompleta();
  }

  validarFechaCompleta() {
    const fechaControl = this.formulario2.get('fecha_nacimiento');
    if (!fechaControl) return;
    fechaControl.markAsTouched();
    const fechaValor = fechaControl?.value;

    if (
      !fechaValor ||
      fechaValor.length !== 10 ||
      fechaValor.includes('a') ||
      fechaValor.includes('A')
    ) {
      fechaControl?.setErrors({ fechalimite: true });
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

    const edadValida = this.validacionEdad(fechaSeleccionada);
    this.fechaValida = edadValida;
    if (edadValida) {
      this.botonHabilitadoContacto = this.emailValido;
    } else {
      this.botonHabilitadoContacto = false;
    }
  }

  //Función para validar la EDAD del usuario por la fecha de nacimiento
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

  passwordMatchValidator(g: FormGroup) {
    const pass = g.get('password')?.value;
    const conf = g.get('confirmarPassword')?.value;

    if (!conf) {
      return null;
    }

    if (pass !== conf) {
      g.get('confirmarPassword')?.setErrors({ noCoincide: true });
      return { mismatch: true };
    }

    return null;
  }

  // ------------------------------------------------------------------
  // 7. MÉTODOS Y ACCIONES DE INTERFAZ / EVENTOS
  // ------------------------------------------------------------------

  /**
   * Función para comprobar si podemos continuar en el formulario
   */
  actualizarEstadoBoton() {
    this.botonHabilitadoContacto = this.emailValido;
    this.botonHabilitadoTelefono = this.telefonoValido;
  }

  botonMostrarPassword_1() {
    this.mostrarPassword1 = !this.mostrarPassword1;
  }
  botonMostrarPassword_2() {
    this.mostrarPassword2 = !this.mostrarPassword2;
  }

  onEmailInput() {
    const control = this.formulario1.get('email');
    if (!control) return;

    if (control.hasError('emailRepetido')) {
      const { emailRepetido, ...rest } = control.errors || {};
      control.setErrors(Object.keys(rest).length > 0 ? rest : null);
    }

    if (control.valid && control.value) {
      this.comprobarEmailRegistrado(control.value);
    } else {
      this.emailValido = false;
    }
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

  // Función para registrar al usuario
  registrar() {
    const esValido = this.esGoogle
      ? this.formulario1.valid && this.formulario2.valid
      : this.formulario1.valid &&
        this.formulario2.valid &&
        this.formulario3.valid;

    if (esValido) {
      const datosRegistro = {
        ...this.formulario1.value,
        ...this.formulario2.value,
        ...(this.esGoogle ? {} : this.formulario3.value),
        es_google: this.esGoogle,
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
          const message =
            err.error.error || 'Ocurrió un error al registrar el usuario';
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

  manejarTabPassword(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      const passwordControl = this.formulario3.get('password');
      if (
        !event.shiftKey &&
        (passwordControl?.invalid || !passwordControl?.value)
      ) {
        event.preventDefault();
        const btnAtras = document.getElementById('btnAtras');

        if (btnAtras) {
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
        fechaControl?.enable();

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

  // ------------------------------------------------------------------
  // 5. AUTENTICACIÓN Y GOOGLE (MÉTODOS PRIVADOS)
  // ------------------------------------------------------------------
  private inicializarBotonGoogle(intentos = 0): void {
    if (typeof google !== 'undefined' && google?.accounts?.id) {
      google.accounts.id.initialize({
        client_id: environment.googleClientId,
        callback: (response: any) =>
          this.procesarLoginGoogle(response.credential),
      });

      const contenedor = document.getElementById('btnGoogleContainer');
      if (contenedor) {
        google.accounts.id.renderButton(contenedor, {
          theme: 'outline',
          size: 'large',
          text: 'signup_with',
          locale: 'es',
        });
      }
    } else if (intentos < 10) {
      setTimeout(() => this.inicializarBotonGoogle(intentos + 1), 200);
    } else {
      console.error('No se pudo cargar la API de Google Identity');
    }
  }

  private procesarLoginGoogle(idToken: string): void {
    this.ngZone.run(() => {
      this.userService.loginConGoogle(idToken).subscribe({
        next: (res: any) => {
          if (res.usuarioExistente) {
            if (res.usuario) {
              localStorage.setItem('userData', JSON.stringify(res.usuario));
              this.userService.actualizarEstadoUsuario(res.usuario);
            }
            this.navCtrl.navigateRoot('/home');
          } else {
            this.prepararRegistroDesdeGoogle(res.datosGoogle);
          }
        },
        error: (err) => {
          console.error('Error al autenticar con Google:', err);
        },
      });
    });
  }

  private prepararRegistroDesdeGoogle(datosGoogle: any): void {
    console.log('DatosGoogle: ', datosGoogle);
    if (!datosGoogle) {
      console.warn('No se recibieron datosGoogle para precargar');
      return;
    }

    this.esGoogle = true;
    this.formulario1.patchValue({ email: datosGoogle.email });
    this.emailValido = true;
    this.guardaDatosDelUsuarioEnServicio(this.formulario1.getRawValue());
    const foto = datosGoogle.fotoPerfil || datosGoogle.foto_perfil;
    if (foto) {
      this.guardaDatosDelUsuarioEnServicio({ fotoPerfil: foto });
    }
    if (datosGoogle.nombre) {
      const controlNombre = this.formulario2.get('nombre');
      controlNombre?.enable();
      controlNombre?.setValue(datosGoogle.nombre);
    }
    if (datosGoogle.apellidos) {
      const controlApellidos = this.formulario2.get('apellidos');
      controlApellidos?.enable();
      controlApellidos?.setValue(datosGoogle.apellidos);
    }
    this.validarCampo('fecha_nacimiento', this.formulario2);
    this.validarCampo('telefono', this.formulario2);

    this.pasoActual = 2;
    this.paso1 = false;
  }
}
