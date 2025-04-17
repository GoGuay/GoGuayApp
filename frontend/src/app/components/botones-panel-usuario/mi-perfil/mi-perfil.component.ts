import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { FuncionesUsuario } from 'src/app/core/funciones-usuario/funciones-usuario.service';
import { TablaVehiculosComponent } from '../../tabla-vehiculos/vista-tabla-vehiculos/tabla-vehiculos.component';
import { Usuario } from 'src/app/models/user/usuario.model';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { VistaAcordeonVehiculosComponent } from '../../tabla-vehiculos/vista-acordeon-vehiculos/vista-acordeon-vehiculos.component';

@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDividerModule,
    MatIcon,
    TranslateModule,
    MatButtonModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    VistaAcordeonVehiculosComponent,
  ],
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.scss'],
})
export class MiPerfilComponent {
  // userLoggedIn: boolean = false;
  // userData: Usuario = {} as Usuario;
  // edad: number = this.funcionesUsuario.calcularEdad(
  //   this.funcionesUsuario.fechaNacimientoEditada
  // );
  // constructor(
  //   public funcionescomunes: FuncionesComunes,
  //   private dialogRef: MatDialogRef<MiPerfilComponent>,
  //   private navCtrl: NavController,
  //   private userService: UserServicesService,
  //   public funcionesUsuario: FuncionesUsuario
  // ) {}
  // ngOnInit() {
  //   this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
  //   this.userLoggedIn = !!(this.userData && this.userData.usuario.email);
  //   console.log('Datos usuario: ', this.userData);
  //   const idioma = localStorage.getItem('language');
  //   if (idioma === 'es') {
  //     this.funcionescomunes.validacionIdioma = true;
  //   } else {
  //     this.funcionescomunes.validacionIdioma = false;
  //   }
  //   this.funcionesUsuario.nombreEditado = this.userData.usuario.nombre;
  //   this.funcionesUsuario.apellidosEditados = this.userData.usuario?.apellidos;
  //   this.funcionesUsuario.pronombreEditado =
  //     this.userData.usuario?.pronombre || '';
  //   this.funcionesUsuario.generoEditado = this.userData.usuario.genero || '';
  //   this.funcionesUsuario.orientacionEditada =
  //     this.userData.usuario.orientacion || '';
  //   this.funcionesUsuario.fechaNacimientoEditada =
  //     this.userData.usuario.fecha_nacimiento || '';
  //   this.funcionesUsuario.bioEditada = this.userData.usuario.biografia || '';
  //   this.funcionesUsuario.preferenciasSeleccionadas =
  //     this.userData.usuario.preferencias || [];
  //   this.funcionescomunes.obtenerVehiculos();
  // }
  // closeDialog() {
  //   this.dialogRef.close();
  // }
  // filtrarModelos() {
  //   const coche = this.funcionescomunes.listadoCoches.find(
  //     (vehiculo) => vehiculo.marca === this.funcionescomunes.marcaSeleccionada
  //   );
  //   this.funcionescomunes.modelosFiltrados = coche ? coche.modelos : [];
  //   this.funcionescomunes.modeloSeleccionado = '';
  // }
  // openInfoVisible() {
  //   this.navCtrl.navigateRoot('/info-visible');
  //   this.closeDialog();
  // }
  // actualizarEdad() {
  //   this.edad = this.funcionesUsuario.calcularEdad(
  //     this.funcionesUsuario.fechaNacimientoEditada
  //   );
  // }
}
