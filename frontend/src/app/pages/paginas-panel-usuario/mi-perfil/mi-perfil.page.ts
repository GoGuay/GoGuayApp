import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { MatDivider } from '@angular/material/divider';
import { Usuario } from 'src/app/models/user/usuario.model';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { CARS, COLORES } from '../../../models/vehiculos/marcas_modelos.model';
import { FuncionesComunes } from '../../../core/funciones-comunes/funciones-comunes.service';
import { MatIcon } from '@angular/material/icon';
import { TablaVehiculosComponent } from 'src/app/components/tabla-vehiculos/tabla-vehiculos.component';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    MatDivider,
    NavbarComponent,
    MatIcon,
    TablaVehiculosComponent,
  ],
})
export class MiPerfilPage implements OnInit {
  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;
  fechaNacimiento: string = '';
  edad: number = this.funcionesComunes.calcularEdad(this.fechaNacimiento);
  editandoVehiculo: boolean = false;
  datosActualizados: any = {};
  nombreEditado: string = '';
  apellidosEditados: string = '';
  pronombreEditado: string = '';
  generoEditado: string = '';
  orientacionEditada: string = '';
  fechaNacimientoEditada: string = '';
  bioEditada: string = '';
  preferenciasSeleccionadas: string[] = [];
  usuario: Usuario = {} as Usuario;

  constructor(
    public funcionesComunes: FuncionesComunes,
    private userService: UserServicesService
  ) {}

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.userLoggedIn = !!(this.userData && this.userData.usuario.email);
    console.log('Datos usuario: ', this.userData);
    this.obtenerUsuario();

    this.nombreEditado = this.userData.usuario.nombre;
    this.apellidosEditados = this.userData.usuario?.apellidos;
    this.pronombreEditado = this.userData.usuario?.pronombre || '';
    this.generoEditado = this.userData.usuario.genero || '';
    this.orientacionEditada = this.userData.usuario.orientacion || '';
    this.fechaNacimientoEditada = this.userData.usuario.fecha_nacimiento || '';
    this.bioEditada = this.userData.usuario.biografia || '';
    this.preferenciasSeleccionadas = this.userData.usuario.preferencias || [];

    if (this.userData.usuario.fecha_nacimiento) {
      this.fechaNacimiento = this.userData.usuario.fecha_nacimiento;
      this.edad = this.funcionesComunes.calcularEdad(this.fechaNacimiento);
    }

    this.funcionesComunes.obtenerVehiculos();

    //Asegurar que cada vehículo tiene una propiedad que sea "editandoVehiculo"
    this.funcionesComunes.vehiculos_usuario.forEach((vehiculo) => {
      vehiculo.editandoVehiculo = false;
    });
  }

  actualizarEdad() {
    this.edad = this.funcionesComunes.calcularEdad(this.fechaNacimiento);
  }

  obtenerUsuario() {
    this.userService
      .obtenerUsuarioPorID(this.userData.usuario.id)
      .subscribe((respuesta) => {
        this.usuario = respuesta;
      });
  }

  editarDatos() {
    if (
      !this.userData.usuario.nombre ||
      !this.userData.usuario.apellidos ||
      !this.userData.usuario.genero ||
      !this.userData.usuario.orientacion ||
      !this.userData.usuario.fecha_nacimiento
    ) {
      console.log('Falta algún dato obligatorio');
      return;
    }

    const nuevoUsuario = {
      nombre: this.nombreEditado,
      apellidos: this.apellidosEditados,
      pronombre: this.pronombreEditado,
      genero: this.generoEditado,
      orientacion: this.orientacionEditada,
      fecha_nacimiento: this.fechaNacimientoEditada,
      biografia: this.bioEditada,
      preferencias: this.preferenciasSeleccionadas,
    };
    console.log('Objeto modificado: ', nuevoUsuario);

    this.userService
      .editarDatosUsuario(this.userData.usuario.id, nuevoUsuario)
      .subscribe(
        (response) => {
          console.log('Datos actualizado con exito', response);
          this.userData.usuario = { ...this.userData.usuario, ...nuevoUsuario };
          localStorage.setItem('userData', JSON.stringify(this.userData));
          this.obtenerUsuario();
        },
        (error) => {
          console.error('Error al actualizar los datos', error);
        }
      );
  }

  actualizarPreferencias(event: any) {
    const valor = event.target.value;

    if (!Array.isArray(this.preferenciasSeleccionadas)) {
      this.preferenciasSeleccionadas = [];
    }
    if (event.target.checked) {
      if (!this.preferenciasSeleccionadas.includes(valor)) {
        this.preferenciasSeleccionadas.push(valor);
      }
    } else {
      this.preferenciasSeleccionadas = this.preferenciasSeleccionadas.filter(
        (pref) => pref !== valor
      );
    }

    console.log('Preferencias actualizadas:', this.preferenciasSeleccionadas);
  }
}
