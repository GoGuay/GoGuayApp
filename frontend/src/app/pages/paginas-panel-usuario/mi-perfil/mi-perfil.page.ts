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
import { FuncionesUsuario } from '../../../core/funciones-usuario/funciones-usuario.service';

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
  editandoVehiculo: boolean = false;
  datosActualizados: any = {};
  edad: number = this.funcionesUsuario.calcularEdad(
    this.funcionesUsuario.fechaNacimientoEditada
  );

  constructor(
    public funcionesComunes: FuncionesComunes,
    private userService: UserServicesService,
    public funcionesUsuario: FuncionesUsuario
  ) {}

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.userLoggedIn = !!(this.userData && this.userData.usuario.email);
    console.log('Datos usuario: ', this.userData);

    this.funcionesUsuario.nombreEditado = this.userData.usuario.nombre;
    this.funcionesUsuario.apellidosEditados = this.userData.usuario?.apellidos;
    this.funcionesUsuario.pronombreEditado =
      this.userData.usuario?.pronombre || '';
    this.funcionesUsuario.generoEditado = this.userData.usuario.genero || '';
    this.funcionesUsuario.orientacionEditada =
      this.userData.usuario.orientacion || '';
    this.funcionesUsuario.fechaNacimientoEditada =
      this.userData.usuario.fecha_nacimiento || '';
    this.funcionesUsuario.bioEditada = this.userData.usuario.biografia || '';
    this.funcionesUsuario.preferenciasSeleccionadas =
      this.userData.usuario.preferencias || [];

    this.funcionesComunes.obtenerVehiculos();

    //Asegurar que cada vehículo tiene una propiedad que sea "editandoVehiculo"
    this.funcionesComunes.vehiculos_usuario.forEach((vehiculo) => {
      vehiculo.editandoVehiculo = false;
    });
  }

  actualizarEdad() {
    this.edad = this.funcionesUsuario.calcularEdad(
      this.funcionesUsuario.fechaNacimientoEditada
    );
  }
}
