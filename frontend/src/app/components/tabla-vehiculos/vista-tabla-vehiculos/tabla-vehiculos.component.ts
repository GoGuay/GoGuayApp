import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { IonicModule, Platform } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';
import { Usuario } from 'src/app/models/user/usuario.model';
import { HelpModalComponent } from '../../help-modal/help-modal.component';
import { MatDialog } from '@angular/material/dialog';
import {
  CARS,
  Coches,
  COLORES,
  COLOURS,
} from 'src/app/models/vehiculos/marcas_modelos.model';
import { VehiculosServicesService } from '../../../core/vehiculos-services/vehiculos-services.service';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FuncionesUsuario } from '../../../core/funciones-usuario/funciones-usuario.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MessageService } from 'primeng/api';

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
  @Input() vehiculos: any[] = [];
  @Input() modoSeleccion: boolean = false;
  @Input() cocheSeleccionado: any = null;
  @Input() mostrarSelectorVehiculo: boolean = false;

  // Estados del formulario pasados o gestionados aquí
  @Input() marcaSeleccionada: string = '';
  @Input() modeloSeleccionado: string = '';
  @Input() colorSeleccionado: string = '';
  @Input() matriculaNoValida: boolean = false;

  // Outputs para notificar al componente padre
  @Output() cocheSeleccionadoChange = new EventEmitter<any>();
  @Output() editarVehiculo = new EventEmitter<any>();
  @Output() eliminarVehiculo = new EventEmitter<any>();
  @Output() irARegistrarVehiculo = new EventEmitter<void>();
  @Output() vehiculoAnadidoExito = new EventEmitter<any>();
  @Output() mostrarSelectorVehiculoChange = new EventEmitter<boolean>();

  userData: any = {} as Usuario;
  userLoggedIn: boolean = false;

  listColours: string[] = COLOURS;
  vehiculos_usuario: any[] = [];
  listadoCoches = CARS;
  listadoColores: string[] = COLORES;
  modelosFiltrados: string[] = [];
  cocheEnEdicion: any = null;
  editandoCoche: boolean = false;

  constructor(
    public funcionesComunes: FuncionesComunes,
    public funcionesUsuario: FuncionesUsuario,
    private cdr: ChangeDetectorRef,
    private vehiculosServicesService: VehiculosServicesService,
    private userService: UserServicesService,
    private messageService: MessageService,
    private translate: TranslateService,
  ) {}

  ngOnInit() {
    this.loadUserData();
    console.log('coche en edicion: ', this.cocheEnEdicion);
  }

  loadUserData(): void {
    const data = localStorage.getItem('userData');
    if (data) {
      this.userData = JSON.parse(data);
    }
  }

  /**
   * Función para mostrar el color del coche seleccionado.
   * @param color --> Recibe el color del coche.
   * @returns Devuelve la ruta de la imagen del color del coche.
   */
  mostrarColorCoche(color: string): string {
    const blanco: string = '../../../../../../assets/ColoresCoches/Blanco.png';
    const negro: string = '../../../../../../assets/ColoresCoches/Negro.png';
    const rojo: string = '../../../../../../assets/ColoresCoches/Rojo.png';
    const amarillo: string =
      '../../../../../../assets/ColoresCoches/Amarillo.png';
    const verde: string = '../../../../../../assets/ColoresCoches/Verde.png';
    const gris: string = '../../../../../../assets/ColoresCoches/Gris.png';
    const dorado: string = '../../../../../../assets/ColoresCoches/Dorado.png';
    const marron: string = '../../../../../../assets/ColoresCoches/Marrón.png';
    const morado: string = '../../../../../../assets/ColoresCoches/Morado.png';
    const beige: string = '../../../../../../assets/ColoresCoches/Beige.png';
    const perla: string = '../../../../../../assets/ColoresCoches/Perla.png';
    const otro: string = '../../../../../../assets/ColoresCoches/Otros.png';

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
   * Poner los campos del vehículo en editables (selectores e input)
   * @param vehiculo
   */
  editarFilaVehiculo(vehiculo: any) {
    this.editandoCoche = true;
    this.cocheEnEdicion = vehiculo;
    console.log('coche en edicion en función: ', this.cocheEnEdicion);

    this.mostrarSelectorVehiculo = true;
    this.marcaSeleccionada = vehiculo.marca;
    this.modeloSeleccionado = vehiculo.modelo;
    this.colorSeleccionado = vehiculo.color;
    const cocheEncontrado = this.listadoCoches.find(
      (c) => c.marca === vehiculo.marca,
    );
    this.modelosFiltrados = cocheEncontrado ? cocheEncontrado.modelos : [];

    this.cdr.detectChanges();
  }

  /**
   * Función para añadir un vehículo a la tabla
   */
  guardarVehiculo() {
    if (
      !this.marcaSeleccionada ||
      !this.modeloSeleccionado ||
      !this.colorSeleccionado
    ) {
      return;
    }
    this.loadUserData();
    if (!this.userData.usuario && this.userData.id) {
      this.userData = { usuario: this.userData };
    }
    const nuevoCoche: Coches = {
      marca: this.marcaSeleccionada,
      modelo: this.modeloSeleccionado,
      color: this.colorSeleccionado,
    };
    nuevoCoche.usuario_id = this.userData.usuario.id;

    this.vehiculosServicesService
      .anadirVehiculo(nuevoCoche)
      .subscribe((resultado: any) => {
        console.log('Vehiculo guardado correctamente:', resultado);

        this.userService
          .obtenerUsuarioPorID(this.userData.usuario.id)
          .subscribe((usuarioActualizado) => {
            this.userData = usuarioActualizado;
            localStorage.setItem('userData', JSON.stringify(this.userData));

            if (usuarioActualizado?.vehiculos) {
              this.vehiculos = [...usuarioActualizado.vehiculos];
            } else if (usuarioActualizado?.usuario?.vehiculos) {
              this.vehiculos = [...usuarioActualizado.usuario.vehiculos];
            }

            this.translate
              .get('VEHICULOS.TITULO_GUARDANDOALEDITAR')
              .subscribe((vehiculoGuardadoMessage: string) => {
                this.messageService.add({
                  severity: 'success',
                  summary: vehiculoGuardadoMessage,
                  detail: this.translate.instant('VEHICULOS.GUARDANDONUEVO'),
                });
              });

            this.marcaSeleccionada = '';
            this.modeloSeleccionado = '';
            this.colorSeleccionado = '';
            this.mostrarSelectorVehiculo = false;
            this.vehiculoAnadidoExito.emit(usuarioActualizado);
            this.mostrarSelectorVehiculoChange.emit(false);
            this.cdr.detectChanges();
          });
      });
  }

  /**
   * Se encarga de enviar los datos al backend para guardar los nuevos datos del vehículo
   * @param vehiculo
   */
  guardarVehiculoEditado(vehiculo: any) {
    if (
      !this.marcaSeleccionada ||
      !this.modeloSeleccionado ||
      !this.colorSeleccionado
    ) {
      return;
    }
    console.log('Guardando cambios en el vehículo: ', vehiculo);
    vehiculo.editandoVehiculo = false;

    vehiculo.marca = this.marcaSeleccionada;
    vehiculo.modelo = this.modeloSeleccionado;
    vehiculo.color = this.colorSeleccionado;

    this.funcionesComunes.editarVehiculo(vehiculo);
    this.cdr.detectChanges();

    this.translate
      .get('VEHICULOS.TITULO_GUARDANDOALEDITAR')
      .subscribe((vehiculoGuardadoMessage: string) => {
        this.messageService.add({
          severity: 'success',
          summary: vehiculoGuardadoMessage,
          detail: this.translate.instant('VEHICULOS.GUARDANDOALEDITAR'),
        });
      });
    this.marcaSeleccionada = '';
    this.modeloSeleccionado = '';
    this.colorSeleccionado = '';
    this.mostrarSelectorVehiculo = false;
    this.editandoCoche = false;
    this.mostrarSelectorVehiculoChange.emit(false);
  }

  cancelarCoche() {
    this.mostrarSelectorVehiculo = false;
    this.marcaSeleccionada = '';
    this.modeloSeleccionado = '';
    this.colorSeleccionado = '';
    this.modelosFiltrados = [];
    this.editandoCoche = false;
    this.cocheEnEdicion = null;
    this.mostrarSelectorVehiculoChange.emit(false);
  }

  /**
   * Función para filtrar los modelos de los coches
   */
  filtrarModelos() {
    const coche = this.listadoCoches.find(
      (vehiculo) => vehiculo.marca === this.marcaSeleccionada,
    );
    this.modelosFiltrados = coche ? coche.modelos : [];
    this.modeloSeleccionado = '';
  }

  seleccionarCoche(coche: any) {
    if (this.modoSeleccion) {
      this.cocheSeleccionado = coche;
      this.cocheSeleccionadoChange.emit(coche);
    }
  }

  compareVehiculos(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  /**
   * Función para trackear el vehículo.
   *
   * @param index -> Índice del vehículo.
   * @param coche -> Vehículo a trackear.
   * @returns Devuelve el id del vehículo.
   */
  trackByVehiculo(index: number, coche: any) {
    return coche.id;
  }
}
