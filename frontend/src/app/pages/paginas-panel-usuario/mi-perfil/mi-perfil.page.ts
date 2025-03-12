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
  edad: number = this.calcularEdad(this.fechaNacimiento);

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
      this.edad = this.calcularEdad(this.fechaNacimiento);
    }

    this.funcionesComunes.obtenerVehiculos();
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

  calcularEdad(fechaNacimiento: string) {
    if (!fechaNacimiento) {
      return 0;
    }
    const fechaNac = new Date(fechaNacimiento);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mesDif = hoy.getMonth() - fechaNac.getMonth();

    if (mesDif < 0 || (mesDif === 0 && hoy.getDate() < fechaNac.getDate())) {
      edad--;
    }
    return edad;
  }
}
