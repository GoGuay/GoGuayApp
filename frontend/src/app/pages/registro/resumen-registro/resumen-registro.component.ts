import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule, NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular/standalone';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { UserServicesService } from '../../../core/user-services/user-services.service';
import { ContratoRegistroComponent } from '../contrato-registro-final/contrato-registro.component';

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: 'app-resumen-registro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MatIconModule,
    TranslateModule,
    ContratoRegistroComponent,
  ],
  templateUrl: './resumen-registro.component.html',
  styleUrl: './resumen-registro.component.scss',
})
export class ResumenRegistroComponent implements OnInit {
  @ViewChild('seccionCondiciones') seccionCondiciones!: ElementRef;

  formularioResumen!: FormGroup;

  // Colecciones de campos para la plantilla
  readonly camposColumna1 = [
    'email',
    'fecha_de_nacimiento',
    'nombre',
    'apellidos',
    'telefono',
  ];
  readonly camposColumna2 = ['genero', 'orientacion'];

  // Estados de interfaz y validaciones
  emailValido: boolean = false;
  telefonoValido: boolean = false;
  fechaValida: boolean = false;

  mostrarCondiciones: boolean = false;
  condicionesAceptadas: boolean = false;
  mostrarModalCondiciones: boolean = false;
  condicionesLeidas: boolean = false;
  checkCondiciones: boolean = false;
  lecturaCompletadaEnModal: boolean = false;

  // Objetos auxiliares para edición en vivo
  original: Record<string, any> = {};
  editando: Record<string, boolean> = {};

  readonly generos: string[] = [
    'H_CIS',
    'M_CIS',
    'TRANS',
    'NO_BINARIO',
    'INTER',
    'NO_FLUIDO',
    'OTRO',
    'NO_RESPONDE',
  ];

  readonly orientaciones: string[] = [
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

  constructor(
    private fb: FormBuilder,
    private userService: UserServicesService,
    private navCtrl: NavController,
    private translateService: TranslateService,
    private modalCtrl: ModalController,
  ) {}

  ngOnInit(): void {
    const storedData = this.userService.getUsuarioData();

    if (!storedData) {
      this.navCtrl.navigateRoot('/registro');
      return;
    }

    this.inicializarFormulario(storedData);
  }

  private inicializarFormulario(data: any): void {
    this.formularioResumen = this.fb.group({
      email: [
        data?.email ?? '',
        [Validators.required, Validators.pattern(EMAIL_REGEX)],
      ],
      fecha_de_nacimiento: [
        data?.fecha_nacimiento ?? '',
        [Validators.required],
      ],
      nombre: [data?.nombre ?? '', [Validators.required]],
      apellidos: [data?.apellidos ?? '', [Validators.required]],
      telefono: [
        data?.telefono ?? '',
        [Validators.required, Validators.pattern(/^[0-9]{9}$/)],
      ],
      genero: [data?.genero ?? '', [Validators.required]],
      orientacion: [data?.orientacion ?? '', [Validators.required]],
    });
  }

  // --- MÉTODOS DE EDICIÓN EN LÍNEA ---

  activarEdicion(campo: string): void {
    // Cancela cualquier otra edición activa y restaura sus valores iniciales
    Object.keys(this.editando).forEach((key) => {
      if (this.editando[key]) {
        this.formularioResumen.get(key)?.setValue(this.original[key]);
      }
      this.editando[key] = false;
    });

    // Guarda el valor original antes de entrar en edición
    this.original[campo] = this.formularioResumen.get(campo)?.value;
    this.editando[campo] = true;
  }

  desactivarEdicion(campo: string): void {
    this.formularioResumen.get(campo)?.setValue(this.original[campo]);
    this.editando[campo] = false;
  }

  hayCambio(campo: string): boolean {
    const control = this.formularioResumen.get(campo);
    if (!control) return false;
    return control.value !== this.original[campo];
  }

  guardar(campo: string): void {
    const control = this.formularioResumen.get(campo);

    if (!control || control.invalid) {
      control?.markAsTouched();
      return;
    }

    const nuevoValor = control.value;
    this.original[campo] = nuevoValor;
    this.editando[campo] = false;

    this.guardaDatosDelUsuarioEnServicio(campo, nuevoValor);
  }

  private guardaDatosDelUsuarioEnServicio(clave: string, valor: any): void {
    const usuarioDataTemp = this.userService.getUsuarioData() || {};
    const datosUsuario = {
      ...usuarioDataTemp,
      [clave]: valor,
    };
    this.userService.setUsuarioData(datosUsuario);
  }

  // --- VALIDACIONES DE FORMULARIO ---

  validarCampo(controlName: string): void {
    const control = this.formularioResumen.get(controlName);
    if (!control) return;

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
      this.limpiarErrorAsincrono(
        control,
        controlName === 'email' ? 'emailRepetido' : 'telefonoRepetido',
      );
    }
  }

  private limpiarErrorAsincrono(control: any, errorKey: string): void {
    if (control.errors?.[errorKey]) {
      const { [errorKey]: _, ...rest } = control.errors;
      control.setErrors(Object.keys(rest).length > 0 ? rest : null);
    }
  }

  comprobarEmailRegistrado(email: string): void {
    const emailNormalizado = email.toLowerCase();

    this.userService.verificarEmailExistente(emailNormalizado).subscribe({
      next: (existe: boolean) => {
        const control = this.formularioResumen.get('email');
        const fechaControl = this.formularioResumen.get('fecha_de_nacimiento');

        if (!control) return;

        if (existe) {
          control.setErrors({ ...control.errors, emailRepetido: true });
          this.emailValido = false;
          fechaControl?.disable();
        } else {
          this.limpiarErrorAsincrono(control, 'emailRepetido');
          if (!control.errors) {
            this.emailValido = true;
            fechaControl?.enable();
          }
        }
      },
      error: (err) => console.error('Error al verificar email:', err),
    });
  }

  comprobarTelefonoRegistrado(telefono: string): void {
    this.userService.verificarTelefonoExistente(telefono).subscribe({
      next: (existe: boolean) => {
        const control = this.formularioResumen.get('telefono');
        if (!control) return;

        if (existe) {
          control.setErrors({ ...control.errors, telefonoRepetido: true });
          this.telefonoValido = false;
        } else {
          this.limpiarErrorAsincrono(control, 'telefonoRepetido');
          if (!control.errors) {
            this.telefonoValido = true;
          }
        }
      },
      error: (err) => console.error('Error al verificar el teléfono:', err),
    });
  }

  onFechaChange(): void {
    this.validarFechaCompleta();
  }

  validarFechaCompleta(): void {
    const fechaControl = this.formularioResumen.get('fecha_de_nacimiento');
    const fechaValor = fechaControl?.value;

    if (!fechaValor || fechaValor.length !== 10) {
      fechaControl?.setErrors({ incompleteDate: true });
      this.fechaValida = false;
      return;
    }

    if (fechaValor < '1930-01-01') {
      fechaControl?.setErrors({ fechalimite: true });
      this.fechaValida = false;
      return;
    }

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

    this.fechaValida = this.validacionEdad(fechaSeleccionada);
  }

  validacionEdad(fechaSeleccionada: Date): boolean {
    const fechaControl = this.formularioResumen.get('fecha_de_nacimiento');
    if (!fechaControl?.value) return false;

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    if (fechaSeleccionada > hoy) {
      fechaControl.setErrors({ ...fechaControl.errors, fechaFutura: true });
      this.limpiarErrorAsincrono(fechaControl, 'menorDeEdad');
      return false;
    }

    this.limpiarErrorAsincrono(fechaControl, 'fechaFutura');

    let edad = hoy.getFullYear() - fechaSeleccionada.getFullYear();
    const mes = hoy.getMonth() - fechaSeleccionada.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaSeleccionada.getDate())) {
      edad--;
    }

    if (edad < 18) {
      fechaControl.setErrors({ ...fechaControl.errors, menorDeEdad: true });
      return false;
    }

    this.limpiarErrorAsincrono(fechaControl, 'menorDeEdad');
    return true;
  }

  // --- MÉTODOS DE FORMATO Y AYUDA ---

  getValorCampo(campo: string): any {
    return this.formularioResumen.get(campo)?.value ?? '';
  }

  campoInvalidYTouched(campo: string): boolean {
    const control = this.formularioResumen.get(campo);
    return !!(control && control.invalid && control.touched);
  }

  tieneError(campo: string, errorName: string): boolean {
    return !!this.formularioResumen.get(campo)?.hasError(errorName);
  }

  transformToTitleCase(value: string): string {
    if (!value) return '';
    const result = value.replace(/_/g, ' ');
    return result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
  }

  validacionGenero(genero: string): string {
    return genero
      ? this.translateService.instant(`SELECTOR_GENERO.${genero.toUpperCase()}`)
      : '';
  }

  validacionOrientacion(orientacion: string): string {
    return orientacion
      ? this.translateService.instant(
          `SELECTOR_ORIENTACION.${orientacion.toUpperCase()}`,
        )
      : '';
  }

  get fechaMaxima(): string {
    const hoy = new Date();
    const dd = String(hoy.getDate()).padStart(2, '0');
    const mm = String(hoy.getMonth() + 1).padStart(2, '0');
    const yyyy = hoy.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  }

  // --- MANEJO DE MODALES Y REGISTRO ---

  abrirModalCondiciones(): void {
    this.mostrarModalCondiciones = true;
    document.body.style.overflow = 'hidden';
  }

  cerrarModalCondiciones(): void {
    this.mostrarModalCondiciones = false;
    document.body.style.overflow = 'auto';
  }

  alCompletarLectura(): void {
    this.lecturaCompletadaEnModal = true;
    this.condicionesAceptadas = true;
  }

  finalizarRegistro(): void {
    if (!this.condicionesAceptadas || this.formularioResumen.invalid) return;

    const datosRegistro = {
      ...this.userService.getUsuarioData(),
      ...this.formularioResumen.value,
      es_google: true,
    };

    this.userService.registrarUsuario(datosRegistro).subscribe({
      next: (response) => {
        if (response && response.access_token) {
          localStorage.setItem('access_token', response.access_token);
          if (response.refresh_token) {
            localStorage.setItem('refresh_token', response.refresh_token);
          }
        }

        localStorage.setItem('userData', JSON.stringify(response.usuario));
        this.userService.actualizarEstadoUsuario(response.usuario);
        this.navCtrl.navigateRoot('/home');
      },
      error: (err) => {
        console.error('Error al registrar usuario:', err);
      },
    });
  }
}
