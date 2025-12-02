import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule, NavController } from '@ionic/angular';
import { construct } from 'ionicons/icons';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { UserServicesService } from '../../../core/user-services/user-services.service';
import { Subject, takeUntil } from 'rxjs';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-resumen-registro',
  imports: [ReactiveFormsModule, IonicModule, MatIconModule, CommonModule, FormsModule, TranslateModule],
  templateUrl: './resumen-registro.component.html',
  styleUrl: './resumen-registro.component.scss',
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

  //Se crea un objeto para guardar los valores originales de cada campo antes de editar
  original: { [campo: string]: boolean } = {};

  //Objeto para controlar si un campo está en modo edición.
  editando: { [campo: string]: boolean } = {};

  // Se crea un objeto para identificar a qué formulario pertecene cada atributo.
  campoFormularioMap: { [key: string]: string } = {
    email: 'formulario1',
    fecha_de_nacimiento: 'formulario1',
    nombre: 'formulario2',
    apellidos: 'formulario2',
    telefono: 'formulario2',
    genero: 'formulario2',
    orientacion: 'formulario2',
    password: 'formulario3',
  };

  generos: string[] = ['HOMBRE_CIS', 'MUJER_CIS', 'TRANSEXUAL', 'NO_BINARIO', 'INTERGENERO', 'NO_FLUIDO', 'OTRO', 'NO_RESPONDE'];

  orientaciones: string[] = ['GAY', 'LESBIANA', 'BISEXUAL', 'PANSEXUAL', 'ASEXUAL', 'DEMISEXUAL', 'QUEER', 'OTRO', 'NO_RESPONDE'];

  constructor(
    private fb: FormBuilder,
    private userService: UserServicesService,
    private navCtrl: NavController,
    private translateService: TranslateService,
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

    this.formularioResumen = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      fecha_de_nacimiento: [{ value: '', disabled: true }, Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]],

      genero: ['', Validators.required],
      orientacion: ['', Validators.required],
    });

    //Inicializar el FormGroup con los valores actuales
    this.formularioResumen = this.fb.group({
      email: [this.email],
      fecha_de_nacimiento: [this.fecha_de_nacimiento],
      nombre: [this.nombre],
      apellidos: [this.apellidos],
      telefono: [this.telefono],
      genero: [this.genero],
      orientacion: [this.orientacion],
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

  /**
   * Verifica si el valor del campo cambió desde su estado original
   */
  hayCambio(campo: string): boolean {
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

  aceptarNormas() {
    const datosRegistro = this.userService.getUsuarioData();

    this.userService.registrarUsuario(datosRegistro).subscribe({
      next: (response) => {
        this.navCtrl.navigateRoot('/home');
      },
      error: (err) => {
        this.navCtrl.navigateRoot('/home');
      },
    });
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
}
