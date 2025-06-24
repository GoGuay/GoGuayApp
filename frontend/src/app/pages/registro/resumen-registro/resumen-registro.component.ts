import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import { construct } from 'ionicons/icons';
import { UserServicesService } from '../../../core/user-services/user-services.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-resumen-registro',
  imports: [IonicModule, MatIconModule, CommonModule],
  templateUrl: './resumen-registro.component.html',
  styleUrl: './resumen-registro.component.scss',
})
export class ResumenRegistroComponent implements OnInit {
  private destroy$ = new Subject<void>();
  email: string = '';
  fecha_nacimiento: string = '';
  nombre: string = '';
  apellidos: string = '';
  telefono: string = '';
  genero: string = '';
  orientacion: string = '';
  datosResumen: any;

  constructor(private userService: UserServicesService) {}

  ngOnInit() {
    this.datosResumen = localStorage.getItem('usuarioData');
    this.obtenerDatos();
  }

  obtenerDatos() {
    const datoParseado = JSON.parse(this.datosResumen);

    this.email = datoParseado?.formulario1?.email ?? '';
    this.fecha_nacimiento = datoParseado?.formulario1.fecha_nacimiento ?? '';
    this.nombre = datoParseado?.formulario2.nombre ?? '';
    this.apellidos = datoParseado?.formulario2.apellidos ?? '';
    this.telefono = datoParseado?.formulario2.telefono ?? '';
    this.genero = datoParseado?.formulario2.genero ?? '';
    this.orientacion = datoParseado?.formulario2.orientacion ?? '';
  }

  validacionGenero(genero: string): string {
    if (!genero) {
      return '';
    }

    switch (genero) {
      case 'HOMBRE_CIS':
        return 'Hombre CIS';
      case 'MUJER_CIS':
        return 'Mujer CIS';
      case 'TRANSEXUAL':
        return 'Transexual';
      case 'NO_BINARIO':
        return 'No binario';
      case 'INTERGENERO':
        return 'Intergénero';
      case 'NO_FLUIDO':
        return 'No fluido';
      case 'OTRO':
        return 'Otro';
      case 'NO_RESPONDE':
        return 'Prefiere no responder';
      default:
        return '';
    }
  }
}
