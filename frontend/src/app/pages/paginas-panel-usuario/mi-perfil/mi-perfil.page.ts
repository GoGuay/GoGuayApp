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
  ],
})
export class MiPerfilPage implements OnInit {
  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;
  fechaNacimiento: string = '';
  edad: number = this.funcionesComunes.calcularEdad(this.fechaNacimiento);
  editandoVehiculo: boolean = false;

  constructor(public funcionesComunes: FuncionesComunes) {}

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.userLoggedIn = !!(this.userData && this.userData.usuario.email);
    console.log('Datos usuario: ', this.userData);

    // Si el usuario no tiene un género guardado, asignar vacío ("")
    if (!this.userData.usuario.genero) {
      this.userData.usuario.genero = '';
    }

    // Si el usuario no tiene un pronombre guardado, asignar vacío ("")
    if (!this.userData.usuario.pronombre) {
      this.userData.usuario.pronombre = '';
    }
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

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files) {
      const fileNames = Array.from(input.files).map((file) => file.name);
      console.log('Archivos seleccionados:', fileNames);

      // Aquí puedes manejar los archivos, por ejemplo, enviarlos a un servidor
      alert(
        `${fileNames.length} imágenes seleccionadas: ${fileNames.join(', ')}`
      );
    }
  }
  editarFilaVehiculo(vehiculo: any) {
    vehiculo.editandoVehiculo = !vehiculo.editandoVehiculo;
  }

  guardarVehículoEditado(vehiculo: any) {
    console.log('Guardando cambios en el vehículo: ', vehiculo);
    vehiculo.editandoVehiculo = false;
  }
}
