import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  modificandoMarca: boolean = false;

  constructor(
    public funcionesComunes: FuncionesComunes,
    private cdRef: ChangeDetectorRef
  ) {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
  }

  ngOnInit() {
    // this.userLoggedIn = !!(this.userData && this.userData.usuario.email);
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
    this.modificandoMarca = !this.modificandoMarca;
    if (!coche.marca) return;

    const vehiculo = this.funcionesComunes.listadoCoches.find(
      (c) => c.marca === coche.marca
    );
    this.funcionesComunes.modelosFiltrados = vehiculo.modelos;

    if (this.funcionesComunes.modelosFiltrados.length > 0) {
      coche.modelo = this.funcionesComunes.modelosFiltrados[0]; // Establecemos el modelo por defecto
    } else {
      coche.modelo = ''; // Si no hay modelos, dejamos el modelo vacío
    }
  }

  /**
   * Se encarga de enviar los datos al backend para guardar los nuevos datos del vehículo
   * @param vehiculo
   */
  guardarVehiculoEditado(vehiculo: any) {
    console.log('Guardando cambios en el vehículo: ', vehiculo);
    vehiculo.editandoVehiculo = false;
    this.funcionesComunes.editarVehiculo(vehiculo);
    if (this.modificandoMarca) {
      this.modificandoMarca = false;
    }
  }
}
