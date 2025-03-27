import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { IonicModule, Platform } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';
import { Usuario } from 'src/app/models/user/usuario.model';
import { HelpModalComponent } from '../help-modal/help-modal.component';
import { DialogConfig, DialogRef } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { Coches } from 'src/app/models/vehiculos/marcas_modelos.model';
import { VehiculosServicesService } from '../../core/vehiculos-services/vehiculos-services.service';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-tabla-vehiculos',
  templateUrl: './tabla-vehiculos.component.html',
  styleUrls: ['./tabla-vehiculos.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    MatIcon,
    HelpModalComponent,
    MatAccordion,
    MatExpansionModule,
    MatFormFieldModule,
  ],
})
export class TablaVehiculosComponent implements OnInit {
  userData: Usuario = {} as Usuario;
  userLoggedIn: boolean = false;
  modificandoMarca: boolean = false;
  vehiculos_usuario: any[] = [];
  isMobileWeb: boolean = false;
  isDesktop: boolean = true;

  constructor(
    public funcionesComunes: FuncionesComunes,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog,
    private vehiculosServicesService: VehiculosServicesService,
    private userService: UserServicesService,
    private platform: Platform
  ) {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
  }

  loadUserData(): void {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
  }

  ngOnInit() {
    this.loadUserData();
    this.obtenerVehiculos();
    this.isMobileWeb = this.platform.is('mobileweb');
    this.isDesktop = this.platform.is('desktop');
  }

  /**
   * Función para añadir un vehículo a la tabla
   */
  guardarVehiculo() {
    this.loadUserData();
    const nuevoCoche: Coches = {
      marca: this.funcionesComunes.marcaSeleccionada,
      modelo: this.funcionesComunes.modeloSeleccionado,
      color: this.funcionesComunes.colorSeleccionado,
      matricula: this.funcionesComunes.matricula,
    };
    nuevoCoche.usuario_id = this.userData.usuario.id;

    this.vehiculosServicesService
      .anadirVehiculo(nuevoCoche)
      .subscribe((resultado: any) => {
        console.log('Vehiculo guardado correctamente:', resultado);
        if (
          resultado.vehiculos_usuario &&
          resultado.vehiculos_usuario.length > 0
        ) {
          this.vehiculos_usuario = [...resultado.vehiculos_usuario];
        } else {
          console.error(
            'No se recibieron vehículos actualizados desde el backend.'
          );
        }

        this.userService
          .obtenerUsuarioPorID(this.userData.usuario.id)
          .subscribe((usuarioActualizado) => {
            localStorage.setItem('userData', JSON.stringify(this.userData));
            this.userData = usuarioActualizado;
            // this.botonAnadirVehiculo();
            console.log('Usuario actualizado:', this.userData);
            this.funcionesComunes.marcaSeleccionada = '';
            this.funcionesComunes.modeloSeleccionado = '';
            this.funcionesComunes.colorSeleccionado = '';
            this.funcionesComunes.matricula = '';

            this.funcionesComunes.mostrarSelectorVehiculo = false;

            this.cdr.detectChanges();
          });
      });
  }

  /**
   * Función para obtener la lista de vehículos de un usuario.   *
   */
  obtenerVehiculos() {
    const id_usuario = this.userData.usuario.id;
    this.vehiculosServicesService
      .obtenerVehiculosUsuario(id_usuario)
      .subscribe((resultado) => {
        console.log('Vehículos: ', resultado.vehiculos);
        this.vehiculos_usuario = resultado.vehiculos;
      });
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
    this.cdr.detectChanges();
    if (this.modificandoMarca) {
      this.modificandoMarca = false;
    }
  }

  /**
   * Función para eliminar un vehículo del usuario
   * @param vehiculo
   */
  eliminarVehiculo(vehiculo: any): any {
    this.vehiculosServicesService
      .eliminarVehiculo(vehiculo.id, vehiculo)
      .subscribe((resultado) => {
        this.vehiculos_usuario = this.vehiculos_usuario.filter(
          (coche) => coche.id !== vehiculo.id
        );
        this.cdr.detectChanges();

        this.userService
          .obtenerUsuarioPorID(this.userData.usuario.id)
          .subscribe((usuarioActualizado) => {
            this.userData = usuarioActualizado;
            console.log('Usuario actualizado:', this.userData);
          });
        console.log('Resultado: ', resultado);
      });
  }

  modalEliminarVehiculo(cocheAEliminar: any) {
    const titulo: string = '¡ATENCIÓN: Vas a eliminar un vehículo';
    const mensaje: string = `¿Estás seguro que deseas eliminar ${cocheAEliminar.marca} ${cocheAEliminar.modelo} ?`;
    const dialogRef = this.dialog.open(HelpModalComponent, {
      data: { title: titulo, message: mensaje, showAcceptButton: true },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((confirmar) => {
      if (confirmar) {
        this.eliminarVehiculo(cocheAEliminar);
        this.vehiculos_usuario;
      }
    });
  }
}
