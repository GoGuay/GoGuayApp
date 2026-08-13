import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule, NavController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { UserServicesService } from '../../../core/user-services/user-services.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ModalController } from '@ionic/angular/standalone';
import { ContratoRegistroComponent } from '../contrato-registro-final/contrato-registro.component';

@Component({
  selector: 'app-resumen-registro',
  imports: [
    ReactiveFormsModule,
    IonicModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    ContratoRegistroComponent,
  ],
  templateUrl: './resumen-registro.component.html',
  styleUrl: './resumen-registro.component.scss',
  standalone: true,
})
export class ResumenRegistroComponent implements OnInit {
  //Variables para almacenar los datos del usuario
  email: string = '';
  fecha_de_nacimiento: string = '';
  nombre: string = '';
  apellidos: string = '';
  telefono: string = '';
  genero: string = '';
  orientacion: string = '';
  datosResumen: any;
  formularioResumen!: FormGroup;
  emailValido: boolean = false;
  telefonoValido: boolean = false;
  fechaValida: boolean = false;

  mostrarCondiciones: boolean = false;
  condicionesAceptadas: boolean = false;

  //Se crea un objeto para guardar los valores originales de cada campo antes de editar
  original: { [campo: string]: boolean } = {};

  //Objeto para controlar si un campo está en modo edición.
  editando: { [campo: string]: boolean } = {};

  // Se crea un objeto para identificar a qué formulario pertecene cada atributo.
  campoFormularioMap: { [key: string]: string } = {
    email: 'formularioResumen',
    fecha_de_nacimiento: 'formularioResumen',
    nombre: 'formulario2',
    apellidos: 'formulario2',
    telefono: 'formulario2',
    genero: 'formulario2',
    orientacion: 'formulario2',
    password: 'formulario3',
  };

  generos: string[] = [
    'H_CIS',
    'M_CIS',
    'TRANS',
    'NO_BINARIO',
    'INTER',
    'NO_FLUIDO',
    'OTRO',
    'NO_RESPONDE',
  ];

  orientaciones: string[] = [
    'GAY',
    'LESBIANA',
    'BISEXUAL',
    'PANSEXUAL',
    'ASEXUAL',
    'DEMISEXUAL',
    'QUEER',
    'HETEROSEXUAL',
    'OTRO',
    'NO_RESPONDE',
  ];

  @ViewChild('seccionCondiciones') seccionCondiciones!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private userService: UserServicesService,
    private navCtrl: NavController,
    private translateService: TranslateService,
    private modalCtrl: ModalController,
  ) {}

  ngOnInit() {
    //Obtenemos los datos del usuario guardados en caché
    const storedData = this.userService.getUsuarioData();

    //Extraemos los campos del objeto 'usuario', uno por uno
    this.email = storedData?.email ?? '';
    this.fecha_de_nacimiento = storedData?.fecha_nacimiento ?? '';
    this.nombre = storedData?.nombre ?? '';
    this.apellidos = storedData?.apellidos ?? '';
    this.telefono = storedData?.telefono ?? '';
    this.genero = storedData?.genero ?? '';
    this.orientacion = storedData?.orientacion ?? '';
    const EMAIL_REGEX =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    this.formularioResumen = this.fb.group({
      // Valor inicial + Validadores
      email: [
        this.email,
        [Validators.required, Validators.pattern(EMAIL_REGEX)],
      ],
      // Asegúrate de incluir los validadores para el resto de campos
      fecha_de_nacimiento: [this.fecha_de_nacimiento, Validators.required],
      nombre: [this.nombre, Validators.required],
      apellidos: [this.apellidos, Validators.required],
      telefono: [
        this.telefono,
        [Validators.required, Validators.pattern(/^[0-9]{9}$/)],
      ],
      genero: [this.genero, Validators.required],
      orientacion: [this.orientacion, Validators.required],
    });

    const datosRegistro = this.userService.getUsuarioData();
    if (datosRegistro === null) {
      this.navCtrl.navigateRoot('/registro');
    }
  }

  /**
   * Activa el modo edición para un campo específico
   * Guarda el valor original para poder comparar cambios
   */
  activarEdicion(campo: string) {
    Object.keys(this.editando).forEach((key) => {
      if (this.editando[key]) {
        this.formularioResumen.get(key)?.setValue(this.original[key]);
      }
      this.editando[key] = false;
    });
    // Guardar el valor original por si se cancela
    this.original[campo] = this.formularioResumen.get(campo)?.value;

    this.editando[campo] = true;
  }

  validarCampo(controlName: string, formulario: FormGroup) {
    const control = formulario.get(controlName);
    if (control) {
      control.markAsTouched();
      control.markAsDirty();
      control.updateValueAndValidity();

      if (control.valid) {
        if (controlName === 'email') {
          this.comprobarEmailRegistrado(control.value);
        } else if (controlName === 'telefono') {
          this.comprobarTelefonoRegistrado(control.value);
        }
      } else {
        // Si la validación síncrona (formato) falla:
        // Aseguramos que el error asíncrono (repetido) se borre para que solo se muestre el error de formato.
        if (controlName === 'email' && control.errors?.['emailRepetido']) {
          const { emailRepetido, ...rest } = control.errors;
          control.setErrors(Object.keys(rest).length > 0 ? rest : null);
        }
        if (
          controlName === 'telefono' &&
          control.errors?.['telefonoRepetido']
        ) {
          const { telefonoRepetido, ...rest } = control.errors;
          control.setErrors(Object.keys(rest).length > 0 ? rest : null);
        }
      }
    }
  }

  /**
   * Función para comprobar si un email ya se encuentra registrado previamente
   * @param email
   */
  comprobarEmailRegistrado(email: string) {
    const emailNormalizado = email.toLowerCase();
    this.userService.verificarEmailExistente(emailNormalizado).subscribe({
      next: (existe: boolean) => {
        const control = this.formularioResumen.get('email');
        const fechaControl = this.formularioResumen.get('fecha_de_nacimiento');
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
          // this.actualizarEstadoBoton();
        }
      },
      error: (err: any) => {
        console.error('Error al verificar email:', err);
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
        const control = this.formularioResumen.get('telefono');
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
              // this.escucharCambiosFormulario2('telefono');
            }
          }
          // this.actualizarEstadoBoton();
        }
      },
      error: (err: any) => {
        console.error('Error al verificar el teléfono:', err);
      },
    });
  }

  /**
   * Verifica si el valor del campo cambió desde su estado original
   */
  hayCambio(campo: string): boolean {
    const control = this.formularioResumen.get(campo);
    if (!control) return false;
    // Condición base: el valor debe haber cambiado
    const haCambiado = control.value !== this.original[campo];
    if (campo === 'email') {
      if (haCambiado) {
      }
    }
    return this.formularioResumen.get(campo)?.value !== this.original[campo];
  }

  /**
   * Guarda los cambios realizados en el campo y sale del modo edición
   * Guardamos el nuevo valor como el valor original
   */
  guardar(campo: string) {
    if (this.formularioResumen.controls[campo].invalid) {
      this.formularioResumen.controls[campo].markAsTouched();
      return;
    }

    const nuevoValor = this.formularioResumen.controls[campo].value;
    this.original[campo] = nuevoValor;
    this.editando[campo] = false;
    this.guardaDatosDelUsuarioEnServicio(campo, nuevoValor);
  }

  guardaDatosDelUsuarioEnServicio(clave: string, valor: any) {
    const usuarioDataTemp = this.userService.getUsuarioData() || {};
    const datosUsuario = {
      ...usuarioDataTemp,
      [clave]: valor,
    };

    this.userService.setUsuarioData(datosUsuario);
  }

  /**
   * Sale del modo edición sin guardar cambios
   * Restauramos el valor original si lo deseas
   */
  desactivarEdicion(campo: string) {
    this.formularioResumen.get(campo)?.setValue(this.original[campo]);
    this.editando[campo] = false;
  }

  /**
   * Obtiene dinámicamente el valor de un campo
   */
  getValorCampo(campo: string): any {
    return this.formularioResumen.get(campo)?.value ?? '';
  }

  /**
   * Establece dinámicamente el valor de un campo (necesario para ngModelChange)
   */
  setValorCampo(campo: string, valor: string): void {
    (this as any)[campo] = valor;
  }

  /**
   * Traduce el valor de la clave de género usando el servicio de traducción.
   * @param genero La clave de género (ej: 'HOMBRE_CIS').
   */
  validacionGenero(genero: string): string {
    if (!genero) return '';

    // 1. Construir la clave de traducción: 'VALORES.GENERO.HOMBRE_CIS'
    const clave = `SELECTOR_GENERO.${genero.toUpperCase()}`;

    // 2. Usar el servicio para obtener la traducción de forma instantánea.
    return this.translateService.instant(clave);
  }

  /**
   * Traduce el valor de la clave de orientación usando el servicio de traducción.
   * @param orientacion La clave de orientación (ej: 'GAY').
   */
  validacionOrientacion(orientacion: string): string {
    if (!orientacion) return '';

    // 1. Construir la clave de traducción: 'VALORES.ORIENTACION.GAY'
    const clave = `SELECTOR_ORIENTACION.${orientacion.toUpperCase()}`;

    // 2. Usar el servicio para obtener la traducción.
    return this.translateService.instant(clave);
  }

  /**
   * Convierte una cadena de formato 'kebab_case' a 'Título de caso'.
   * @param value La cadena de entrada.
   */
  transformToTitleCase(value: string): string {
    if (!value) return '';

    // Reemplazar guiones bajos globalmente con un espacio
    let result = value.replace(/_/g, ' ');

    // Capitalizar la primera letra y asegurar que el resto esté en minúsculas
    result = result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();

    return result;
  }

  // Getter para la fecha actual
  get fechaMaxima() {
    const hoy = new Date();
    const dd = String(hoy.getDate()).padStart(2, '0');
    const mm = String(hoy.getMonth() + 1).padStart(2, '0');
    const yyyy = hoy.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  }

  onFechaChange() {
    this.validarFechaCompleta();
  }

  validarFechaCompleta() {
    const fechaControl = this.formularioResumen.get('fecha_de_nacimiento');
    const fechaValor = fechaControl?.value;

    if (!fechaValor || fechaValor.length !== 10) {
      fechaControl?.setErrors({ incompleteDate: true });

      this.fechaValida = false;
      return;
    }
    const fechaLimite = '1930-01-01';
    if (fechaValor < fechaLimite) {
      fechaControl?.setErrors({ fechalimite: true });

      this.fechaValida = false;
      return;
    }
    // Parsear manualmente el día, mes y año
    const partes = fechaValor.split('-');
    if (partes.length !== 3) {
      fechaControl?.setErrors({ invalidDateFormat: true });

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

      this.fechaValida = false;
      return;
    }

    // Validar si el usuario tiene 18 años o más
    const edadValida = this.validacionEdad(fechaSeleccionada);
    this.fechaValida = edadValida;
    {
    }
  }

  //Función para validad la EDAD del usuario por la fecha de nacimiento
  validacionEdad(fechaSeleccionada: Date): boolean {
    const fechaControl = this.formularioResumen.get('fecha_de_nacimiento');

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
   * Función para mostrar las condiciones generales de uso al usuario
   */
  abrirCondicionesInline() {
    this.mostrarCondiciones = true;

    setTimeout(() => {
      this.seccionCondiciones.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
  }

  /**
   * Función para cerrar la ventana de las condiciones
   * una vez estas se han aceptado.
   */
  onTerminosConfirmados() {
    this.mostrarCondiciones = false;
    this.condicionesAceptadas = true;

    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 300);
  }

  /**
   * Función para finalizar el registro del usuario.,
   * Los datos que el usuario ha introducido se guardan en caché
   * y además se envían a BBDD.
   * Después de compeltar el proceso, se le redirige al Home de la aplicación.
   *
   */
  finalizarRegistro() {
    const datosRegistro = this.userService.getUsuarioData();
    console.log('datosRegistro: ', datosRegistro);

    this.userService.registrarUsuario(datosRegistro).subscribe({
      next: (response) => {
        localStorage.setItem('userData', JSON.stringify(response.usuario));
        this.userService.actualizarEstadoUsuario(response.usuario);
        this.navCtrl.navigateRoot('/home');
      },
      error: (err) => {
        console.error('Error al registrar', err);
      },
    });
  }
}
