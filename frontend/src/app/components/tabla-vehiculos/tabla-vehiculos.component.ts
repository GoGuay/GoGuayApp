import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';
import { Usuario } from 'src/app/models/user/usuario.model';

@Component({
  selector: 'app-tabla-vehiculos',
  templateUrl: './tabla-vehiculos.component.html',
  styleUrls: ['./tabla-vehiculos.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule, MatIcon],
})
export class TablaVehiculosComponent implements OnInit {
  userData: Usuario = {} as Usuario;
  userLoggedIn: boolean = false;
  constructor(public funcionesComunes: FuncionesComunes) {}

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.userLoggedIn = !!(this.userData && this.userData.usuario.email);
  }

  /**
   * Poner los campos del vehículo en editables (selectores e input)
   * @param vehiculo
   */
  editarFilaVehiculo(vehiculo: any) {
    vehiculo.editandoVehiculo = !vehiculo.editandoVehiculo;

    if (vehiculo.editandoVehiculo) {
      this.funcionesComunes.marcaSeleccionada = vehiculo.marca;
      this.funcionesComunes.modeloSeleccionado = vehiculo.modelo;
      this.funcionesComunes.colorSeleccionado = vehiculo.color;
      this.funcionesComunes.matricula = vehiculo.matricula;
      this.funcionesComunes.filtrarModelos();
    }
  }

  filtrarModelosEditando(coche: any) {
    if (!coche.marca) return;

    const vehiculo = this.funcionesComunes.listadoCoches.find(
      (c) => c.marca === coche.marca
    );
    coche.modelos = vehiculo.modelos;
    // Reinicia el modelo si no existe en la nueva marca
    // if (!coche.modelosFiltrados.includes(coche.modelo)) {
    //   coche.modelos;
    // }
  }

  /**
   * Se encarga de enviar los datos al backend para guardar los nuevos datos del vehículo
   * @param vehiculo
   */
  guardarVehiculoEditado(vehiculo: any) {
    console.log('Guardando cambios en el vehículo: ', vehiculo);
    vehiculo.editandoVehiculo = false;
    this.funcionesComunes.editarVehiculo(vehiculo);
  }
}
