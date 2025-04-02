import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import {
  CARS,
  COLORES,
  COLOURS,
} from '../../../models/vehiculos/marcas_modelos.model';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { FuncionesUsuario } from 'src/app/core/funciones-usuario/funciones-usuario.service';
import { TablaVehiculosComponent } from '../../tabla-vehiculos/tabla-vehiculos.component';
import { Usuario } from 'src/app/models/user/usuario.model';

@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDividerModule,
    MatIcon,
    TranslateModule,
    MatButtonModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TablaVehiculosComponent,
  ],
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.scss'],
})
export class MiPerfilComponent implements OnInit {
  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;
  edad: number = this.funcionesUsuario.calcularEdad(
    this.funcionesUsuario.fechaNacimientoEditada
  );
  constructor(
    public funcionescomunes: FuncionesComunes,
    private dialogRef: MatDialogRef<MiPerfilComponent>,
    private navCtrl: NavController,
    private userService: UserServicesService,
    public funcionesUsuario: FuncionesUsuario
  ) {}

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.userLoggedIn = !!(this.userData && this.userData.usuario.email);
    console.log('Datos usuario: ', this.userData);
    const idioma = localStorage.getItem('language');

    if (idioma === 'es') {
      this.funcionescomunes.validacionIdioma = true;
    } else {
      this.funcionescomunes.validacionIdioma = false;
    }

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

    this.funcionescomunes.obtenerVehiculos();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  filtrarModelos() {
    const coche = this.funcionescomunes.listadoCoches.find(
      (vehiculo) => vehiculo.marca === this.funcionescomunes.marcaSeleccionada
    );
    this.funcionescomunes.modelosFiltrados = coche ? coche.modelos : []; //si "coche" viene con algún dato, saca los modelos y los guarda en "modelosFiltrados". Si no (:), guarda un array vacio
    this.funcionescomunes.modeloSeleccionado = '';
  }

  openInfoVisible() {
    this.navCtrl.navigateRoot('/info-visible');
    this.closeDialog();
  }

  actualizarEdad() {
    this.edad = this.funcionesUsuario.calcularEdad(
      this.funcionesUsuario.fechaNacimientoEditada
    );
  }
}
