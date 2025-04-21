import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { IonicModule, Platform } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';
import { Usuario } from 'src/app/models/user/usuario.model';
import { HelpModalComponent } from '../../help-modal/help-modal.component';
import { DialogConfig, DialogRef } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import {
  CARS,
  Coches,
  COLORES,
  COLOURS,
} from 'src/app/models/vehiculos/marcas_modelos.model';
import { VehiculosServicesService } from '../../../core/vehiculos-services/vehiculos-services.service';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FuncionesUsuario } from '../../../core/funciones-usuario/funciones-usuario.service';
import { MatTooltipModule } from '@angular/material/tooltip';

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
    MatExpansionModule,
    MatFormFieldModule,
    MatTooltipModule,
  ],
})
export class TablaVehiculosComponent implements OnInit {
  userData: Usuario = {} as Usuario;
  userLoggedIn: boolean = false;
  modificandoMarca: boolean = false;
  vehiculos_usuario: any[] = [];
  listadoCoches = CARS;
  listadoColores: string[] = COLORES;
  modelosFiltrados: string[] = [];
  mostrarSelectorVehiculo: boolean = false;
  marcaSeleccionada: string = '';
  modeloSeleccionado: string = '';
  colorSeleccionado: string = '';
  listColours: string[] = COLOURS;
  matricula: string = '';
  matriculaNoValida: boolean = false;

  constructor(
    public funcionesComunes: FuncionesComunes,
    public funcionesUsuario: FuncionesUsuario,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog,
    private vehiculosServicesService: VehiculosServicesService,
    private userService: UserServicesService,
    private platform: Platform
  ) {
    this.loadUserData();
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
  }

  loadUserData(): void {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
  }

  ngOnInit() {
    this.loadUserData();
    this.obtenerVehiculos();
  }

  /**
   * Función para añadir un vehículo a la tabla
   */
  guardarVehiculo() {
    this.loadUserData();
    const nuevoCoche: Coches = {
      marca: this.marcaSeleccionada,
      modelo: this.modeloSeleccionado,
      color: this.colorSeleccionado,
      matricula: this.matricula,
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
            console.log('Usuario actualizado:', this.userData);
            this.marcaSeleccionada = '';
            this.modeloSeleccionado = '';
            this.colorSeleccionado = '';
            this.matricula = '';
            this.mostrarSelectorVehiculo = false;
            this.cdr.detectChanges();
            this.obtenerVehiculos();
          });
      });
  }

  /**
   * Función para obtener la lista de vehículos de un usuario.   *
   */
  obtenerVehiculos() {
    const usuario = JSON.parse(localStorage.getItem('userData') || '{}');
    this.vehiculosServicesService
      .obtenerVehiculosUsuario(usuario.usuario.id)
      .subscribe((resultado) => {
        console.log('Vehículos: ', resultado.vehiculos);
        this.funcionesUsuario.vehiculos_usuario = resultado.vehiculos;
      });
  }

  /**
   * Poner los campos del vehículo en editables (selectores e input)
   * @param vehiculo
   */
  editarFilaVehiculo(vehiculo: any) {
    vehiculo.editandoVehiculo = !vehiculo.editandoVehiculo;

    if (vehiculo.editandoVehiculo) {
      this.marcaSeleccionada = vehiculo.marca;
      this.modeloSeleccionado = vehiculo.modelo;
      this.colorSeleccionado = vehiculo.color;
      this.matricula = vehiculo.matricula;
      this.filtrarModelos();
    }
  }

  filtrarModelosEditando(coche: any) {
    this.modificandoMarca = !this.modificandoMarca;
    if (!coche.marca) return;

    const vehiculo = this.listadoCoches.find((c) => c.marca === coche.marca);
    this.modelosFiltrados = vehiculo.modelos;

    if (this.modelosFiltrados.length > 0) {
      coche.modelo = this.modelosFiltrados[0]; // Establecemos el modelo por defecto
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
    this.marcaSeleccionada = '';
    this.modeloSeleccionado = '';
    this.colorSeleccionado = '';
    this.matricula = '';

    this.mostrarSelectorVehiculo = false;
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
        this.obtenerVehiculos();
        this.mostrarSelectorVehiculo = false;
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

  /**
   * Función para mostrar las imágenes de colores de los coches
   * según el color que se tenga seleccionado del coche.   *
   * @param color
   * @returns
   */
  mostrarColorCoche(color: string): string {
    const blanco: string = '../../../assets/ColoresCoches/Blanco.png';
    const negro: string = '../../../assets/ColoresCoches/Negro.png';
    const rojo: string = '../../../assets/ColoresCoches/Rojo.png';
    const amarillo: string = '../../../assets/ColoresCoches/Amarillo.png';
    const verde: string = '../../../assets/ColoresCoches/Verde.png';
    const gris: string = '../../../assets/ColoresCoches/Gris.png';
    const dorado: string = '../../../assets/ColoresCoches/Dorado.png';
    const marron: string = '../../../assets/ColoresCoches/Marrón.png';
    const morado: string = '../../../assets/ColoresCoches/Morado.png';
    const beige: string = '../../../assets/ColoresCoches/Beige.png';
    const perla: string = '../../../assets/ColoresCoches/Perla.png';
    const otro: string = '../../../assets/ColoresCoches/Otros.png';

    switch (color) {
      case 'blanco':
        return blanco;
      case 'negro':
        return negro;
      case 'rojo':
        return rojo;
      case 'amarillo':
        return amarillo;
      case 'verde':
        return verde;
      case 'gris':
        return gris;
      case 'dorado':
        return dorado;
      case 'marron':
        return marron;
      case 'morado':
        return morado;
      case 'beige':
        return beige;
      case 'perla':
        return perla;
      case 'otro':
        return otro;
      default:
        return '';
    }
  }

  /**
   * Para mostrar (o no) el selector de marca, modelo y color de coche
   */
  botonAnadirVehiculo() {
    this.mostrarSelectorVehiculo = !this.mostrarSelectorVehiculo;
  }

  /**
   * Función para validar que la matrícula tenga el formato 0000ABC
   */
  validarMatricula(): void {
    const regex = /^[0-9]{4}[A-Z]{3}$/;

    // Convertir a mayúsculas automáticamente
    this.matricula = this.matricula.toUpperCase();

    if (!regex.test(this.matricula)) {
      console.log(
        'Matrícula inválida. Debe tener 4 números seguidos de 3 letras (Ej: 1234ABC).'
      );
      this.matriculaNoValida = true;
    } else {
      this.matriculaNoValida = false;
    }
  }

  esMatriculaValida(matricula: string): boolean {
    const regex = /^[0-9]{4}[A-Za-z]{3}$/;
    return regex.test(matricula);
  }

  /**
   * Función para filtrar los modelos de los coches
   */
  filtrarModelos() {
    const coche = this.listadoCoches.find(
      (vehiculo) => vehiculo.marca === this.marcaSeleccionada
    );
    this.modelosFiltrados = coche ? coche.modelos : []; //si "coche" viene con algún dato, saca los modelos y los guarda en "modelosFiltrados". Si no (:), guarda un array vacio
    this.modeloSeleccionado = '';
  }
}
