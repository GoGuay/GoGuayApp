import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import { construct } from 'ionicons/icons';
import { UserServicesService } from '../../../core/user-services/user-services.service';
import { Subject, takeUntil } from 'rxjs';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-resumen-registro',
  imports: [
    ReactiveFormsModule,
    IonicModule,
    MatIconModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './resumen-registro.component.html',
  styleUrl: './resumen-registro.component.scss',
})
export class ResumenRegistroComponent implements OnInit {
  //Variables para almacenar los datos del usuario
  email: string = '';
  fecha_nacimiento: string = '';
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
    fecha_nacimiento: 'formulario1',
    nombre: 'formulario2',
    apellidos: 'formulario2',
    telefono: 'formulario2',
    genero: 'formulario2',
    orientacion: 'formulario2',
    password: 'formulario3',
  };

  generos: string[] = [
    'HOMBRE_CIS',
    'MUJER_CIS',
    'TRANSEXUAL',
    'NO_BINARIO',
    'INTERGENERO',
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
    'OTRO',
    'NO_RESPONDE',
  ];

  constructor(
    private fb: FormBuilder,
    private userService: UserServicesService
  ) {}

  ngOnInit() {
    //Obtenemos los datos del usuario guardados en caché
    const storedData = localStorage.getItem('usuarioData');

    //Convertimos los datos obtenidos en un objeto con parse, si no hay datos se asigna un objeto vacio
    const usuario = storedData ? JSON.parse(storedData) : {};
    //Extraemos los campos del objeto 'usuario', uno por uno
    this.email = usuario?.email ?? '';
    this.fecha_nacimiento = usuario?.fecha_nacimiento ?? '';
    this.nombre = usuario?.nombre ?? '';
    this.apellidos = usuario?.apellidos ?? '';
    this.telefono = usuario?.telefono ?? '';
    this.genero = usuario?.genero ?? '';
    this.orientacion = usuario?.orientacion ?? '';

    this.formularioResumen = this.fb.group({
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
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]],

      genero: ['', Validators.required],
      orientacion: ['', Validators.required],
    });

    //Inicializar el FormGroup con los valores actuales
    this.formularioResumen = this.fb.group({
      email: [this.email],
      fecha_nacimiento: [this.fecha_nacimiento],
      nombre: [this.nombre],
      apellidos: [this.apellidos],
      telefono: [this.telefono],
      genero: [this.genero],
      orientacion: [this.orientacion],
    });
  }

  /**
   * Activa el modo edición para un campo específico
   * Guarda el valor original para poder comparar cambios
   */
  activarEdicion(campo: string) {
    this.editando[campo] = true;
    this.original[campo] = (this as any)[campo];
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
    this.editando[campo] = false;
    (this as any)[campo] = this.original[campo];
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
   *
   * Crea un objeto map, donde la clave es el texto en mayúscula y el valor es el texto que se debe mostrar.
   * Busca en ese mapa si existe una traducción para el valor recibido en genero
   * Si existe -> la devuelve. Si no existe -> devuelve el valor en mayúsculas
   */
  validacionGenero(genero: string): string {
    const map: { [key: string]: string } = {
      HOMBRE_CIS: 'Hombre CIS',
      MUJER_CIS: 'Mujer CIS',
      TRANSEXUAL: 'Transexual',
      NO_BINARIO: 'No binario',
      INTERGENERO: 'Intergénero',
      NO_FLUIDO: 'No fluido',
      OTRO: 'Otro',
      NO_RESPONDE: 'Prefiero no responder',
    };
    return map[genero] ?? '';
  }

  validacionOrientacion(orientacion: string): string {
    const map: { [key: string]: string } = {
      GAY: 'Gay',
      LESBIANA: 'Lesbiana',
      BISEXUAL: 'Bisexual',
      PANSEXUAL: 'Pansexual',
      ASEXUAL: 'Asexual',
      DEMISEXUAL: 'Demisexual',
      QUEER: 'Queer',
      OTRO: 'Otro',
      NO_RESPONDE: 'Prefiero no responder',
    };
    return map[orientacion] ?? '';
  }
}
