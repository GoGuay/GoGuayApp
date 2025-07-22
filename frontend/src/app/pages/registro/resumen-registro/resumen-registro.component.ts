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
    this.email = usuario?.formulario1?.email ?? '';
    this.fecha_nacimiento = usuario?.formulario1?.fecha_nacimiento ?? '';
    this.nombre = usuario?.formulario2?.nombre ?? '';
    this.apellidos = usuario?.formulario2?.apellidos ?? '';
    this.telefono = usuario?.formulario2?.telefono ?? '';
    this.genero = usuario?.formulario2?.genero ?? '';
    this.orientacion = usuario?.formulario2?.orientacion ?? '';

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

    // this.datosResumen = localStorage.getItem('usuarioData') || {};
    // this.obtenerDatos();
  }

  // obtenerDatos() {
  //   const datoParseado = JSON.parse(this.datosResumen);

  //   this.email = datoParseado?.formulario1?.email ?? '';
  //   this.fecha_nacimiento = datoParseado?.formulario1.fecha_nacimiento ?? '';
  //   this.nombre = datoParseado?.formulario2.nombre ?? '';
  //   this.apellidos = datoParseado?.formulario2.apellidos ?? '';
  //   this.telefono = datoParseado?.formulario2.telefono ?? '';
  //   this.genero = datoParseado?.formulario2.genero ?? '';
  //   this.orientacion = datoParseado?.formulario2.orientacion ?? '';
  // }

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
    return (this as any)[campo] !== this.original[campo];
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

    const nombreFormulario = this.campoFormularioMap[campo];
    if (nombreFormulario) {
      this.guardaDatosDelUsuarioEnServicio(nombreFormulario, campo, nuevoValor);
    } else {
      console.warn(`No se encontró formulario para el campo: ${campo}`);
    }
  }

  guardaDatosDelUsuarioEnServicio(
    nombreFormulario: string,
    clave: string,
    valor: any
  ) {
    const usuarioDataTemp = this.userService.getUsuarioData() || {};
    const formulario = usuarioDataTemp[nombreFormulario] || {};

    formulario[clave] = valor;

    const datosUsuario = {
      ...usuarioDataTemp,
      [nombreFormulario]: formulario,
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
    return (this as any)[campo];
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
