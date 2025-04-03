import { ChangeDetectorRef, Injectable, Optional } from '@angular/core';
import { Usuario } from 'src/app/models/user/usuario.model';
import { UserServicesService } from '../user-services/user-services.service';
import { FuncionesComunes } from '../funciones-comunes/funciones-comunes.service';
import { BehaviorSubject } from 'rxjs';
import { Coches } from 'src/app/models/vehiculos/marcas_modelos.model';
import { VehiculosServicesService } from '../vehiculos-services/vehiculos-services.service';
import { HelpModalComponent } from 'src/app/components/help-modal/help-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { DatosContactoComponent } from 'src/app/components/botones-panel-usuario/datos-contacto/datos-contacto.component';

@Injectable({
  providedIn: 'root',
})
export class FuncionesUsuario {
  userData: Usuario = {} as Usuario;

  nombreEditado: string = '';
  apellidosEditados: string = '';
  pronombreEditado: string = '';
  generoEditado: string = '';
  orientacionEditada: string = '';
  fechaNacimientoEditada: string = '';
  edad: number = this.calcularEdad(this.fechaNacimientoEditada);
  bioEditada: string = '';
  preferenciasSeleccionadas: string[] = [];
  comunComerciales: boolean = false;
  comunTerceros: boolean = false;
  emailEditado: string = '';
  telefonoEditado: string = '';
  usuario: Usuario = {} as Usuario;
  vehiculos_usuario: any[] = [];
  modificandoMarca: boolean = false;
  telefonoInvalido: boolean = false;
  botonHabilitadoMiPerfil: boolean = false;
  botonHabilitadoContacto: boolean = false;
  telefonoRef: any;
  formEmailTfno: FormGroup;

  constructor(
    private userService: UserServicesService,
    private funcionesComunes: FuncionesComunes,
    private vehiculosServices: VehiculosServicesService,
    @Optional()
    private cerrarCompDatosContacto: MatDialogRef<DatosContactoComponent>,

    private dialog: MatDialog
  ) {
    this.loadUserData();

    this.fechaNacimientoEditada = this.userData.usuario.fecha_nacimiento || '';

    this.emailEditado = this.userData.usuario.email || '';
    this.telefonoEditado = this.userData.usuario.telefono || '';
    this.comunComerciales = this.userData.usuario.comunic_comerciales || false;
    this.comunTerceros = this.userData.usuario.comunic_terceros || false;
    this.formEmailTfno = new FormGroup({
      emailControl: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ]),
      telefonoControl: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]{9}$/),
      ]),
    });
  }

  loadUserData(): void {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
  }

  /*********************************************************
   * FUNCIONES RELACIONADAS CON "MI PERFI"                  **
   ***********************************************************
   */

  /**
   *  Editar los datos del usuario, excepto correo y teléfono
   * @returns
   */
  editarDatos() {
    console.log('userData:', this.userData); // Verifica que userData tenga los datos correctos

    if (
      !this.userData.usuario.nombre ||
      !this.userData.usuario.apellidos ||
      !this.userData.usuario.genero ||
      !this.userData.usuario.orientacion ||
      !this.userData.usuario.fecha_nacimiento
    ) {
      console.log('Falta algún dato obligatorio');
      return;
    }

    const nuevoUsuario = {
      nombre: this.nombreEditado,
      apellidos: this.apellidosEditados,
      pronombre: this.pronombreEditado,
      genero: this.generoEditado,
      orientacion: this.orientacionEditada,
      fecha_nacimiento: this.fechaNacimientoEditada,
      biografia: this.bioEditada,
      preferencias: this.preferenciasSeleccionadas,
      email: this.emailEditado,
      telefono: this.telefonoEditado,
    };
    console.log('Objeto modificado: ', nuevoUsuario);

    this.userService
      .editarDatosUsuario(this.userData.usuario.id, nuevoUsuario)
      .subscribe(
        (response) => {
          console.log('Datos actualizado con exito', response);
          this.userData.usuario = { ...this.userData.usuario, ...nuevoUsuario };
          localStorage.setItem('userData', JSON.stringify(this.userData));
          this.obtenerUsuario();
        },
        (error) => {
          console.error('Error al actualizar los datos', error);
        }
      );
  }

  /**
   * Se obtiene un usuario a través del id
   */
  obtenerUsuario() {
    this.userService
      .obtenerUsuarioPorID(this.userData.usuario.id)
      .subscribe((respuesta) => {
        this.usuario = respuesta;
      });
  }

  /**
   * Función para calcular la edad de un usuario en función de su fecha de nacimiento
   * @param fechaNacimiento
   * @returns
   */
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

  /**
   * Actualiza y modifica las preferencias de viaje del usuario
   * @param event
   */
  actualizarPreferencias(event: any) {
    const valor = event.target.value;

    if (!Array.isArray(this.preferenciasSeleccionadas)) {
      this.preferenciasSeleccionadas = [];
    }
    if (event.target.checked) {
      if (!this.preferenciasSeleccionadas.includes(valor)) {
        this.preferenciasSeleccionadas.push(valor);
      }
    } else {
      this.preferenciasSeleccionadas = this.preferenciasSeleccionadas.filter(
        (pref) => pref !== valor
      );
    }

    console.log('Preferencias actualizadas:', this.preferenciasSeleccionadas);
  }

  /*********************************************************
   * FUNCIONES RELACIONADAS CON LOS VEHÍCULOS DEL USUARIO **
   *********************************************************
   */

  /**
   * Función para guardar un vehículo al pulsar el botón "Añadir vehículo"
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

    this.vehiculosServices
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
          });
      });
  }

  /**
   * Modal para que se levante una ventana modal para confirmar la eliminación de un vehículo
   * @param cocheAEliminar
   */
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
   * Función para eliminar un vehículo de la lista del usuario
   * @param vehiculo
   */
  eliminarVehiculo(vehiculo: any): any {
    this.vehiculosServices
      .eliminarVehiculo(vehiculo.id, vehiculo)
      .subscribe((resultado) => {
        this.vehiculos_usuario = this.vehiculos_usuario.filter(
          (coche) => coche.id !== vehiculo.id
        );

        this.userService
          .obtenerUsuarioPorID(this.userData.usuario.id)
          .subscribe((usuarioActualizado) => {
            this.userData = usuarioActualizado;
            console.log('Usuario actualizado:', this.userData);
          });
        console.log('Resultado: ', resultado);
      });
  }

  /**
   * Función para guardar un vehículo una vez editado
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
      coche.modelo = this.funcionesComunes.modelosFiltrados[0];
    } else {
      coche.modelo = '';
    }
  }

  /**
   * Obtener los vehículos que tiene un usuario en su lista
   */
  obtenerVehiculos() {
    const id_usuario = this.userData.usuario.id;
    this.vehiculosServices
      .obtenerVehiculosUsuario(id_usuario)
      .subscribe((resultado) => {
        console.log('Vehículos: ', resultado.vehiculos);
        this.vehiculos_usuario = resultado.vehiculos;
      });
  }

  /*********************************************************
   * FUNCIONES RELACIONADAS CON DATOS DE CONTACTO **
   *********************************************************
   */

  /**
   * Edita los datos de correo y teléfono del usuario
   * @returns
   */
  editarCorreoTelefono(): any {
    console.log('userData:', this.userData); // Verifica que userData tenga los datos correctos

    if (
      !this.userData.usuario.nombre ||
      !this.userData.usuario.apellidos ||
      !this.userData.usuario.genero ||
      !this.userData.usuario.orientacion ||
      !this.userData.usuario.fecha_nacimiento
    ) {
      console.log('Falta algún dato obligatorio');
      return;
    }

    const nuevoUsuario = {
      nombre: this.userData.usuario.nombre,
      apellidos: this.userData.usuario.apellidos,
      pronombre: this.pronombreEditado,
      genero: this.userData.usuario.genero,
      orientacion: this.userData.usuario.orientacion,
      fecha_nacimiento: this.userData.usuario.fecha_nacimiento,
      biografia: this.userData.usuario.biografia,
      preferencias: this.userData.usuario.preferencias,
      email: this.emailEditado,
      telefono: this.telefonoEditado,
    };
    console.log('Objeto modificado: ', nuevoUsuario);

    this.userService
      .editarDatosUsuario(this.userData.usuario.id, nuevoUsuario)
      .subscribe(
        (response) => {
          console.log('Datos actualizado con exito', response);
          this.userData.usuario = { ...this.userData.usuario, ...nuevoUsuario };
          localStorage.setItem('userData', JSON.stringify(this.userData));
          this.obtenerUsuario();
          return response;
        },
        (error) => {
          console.error('Error al actualizar los datos', error);
        }
      );
  }

  /**
   * Edita las preferencias de comunicación del usuario
   * @returns
   */
  preferenciasComunicacion() {
    if (
      !this.userData.usuario.nombre ||
      !this.userData.usuario.apellidos ||
      !this.userData.usuario.genero ||
      !this.userData.usuario.orientacion ||
      !this.userData.usuario.fecha_nacimiento
    ) {
      console.log('Falta algún dato obligatorio');
      return;
    }
    const nuevoUsuario = {
      nombre: this.userData.usuario.nombre,
      apellidos: this.userData.usuario.apellidos,
      pronombre: this.pronombreEditado,
      genero: this.userData.usuario.genero,
      orientacion: this.userData.usuario.orientacion,
      fecha_nacimiento: this.userData.usuario.fecha_nacimiento,
      biografia: this.userData.usuario.biografia,
      preferencias: this.userData.usuario.preferencias,
      email: this.emailEditado || this.userData.usuario.email,
      telefono: this.telefonoEditado || this.userData.usuario.telefono,
      comunic_comerciales: this.comunComerciales,
      comunic_terceros: this.comunTerceros,
    };
    console.log('Objeto modificado: ', nuevoUsuario);

    this.userService
      .editarDatosUsuario(this.userData.usuario.id, nuevoUsuario)
      .subscribe(
        (response) => {
          console.log('Datos actualizado con exito', response);
          this.userData.usuario = { ...this.userData.usuario, ...nuevoUsuario };
          localStorage.setItem('userData', JSON.stringify(this.userData));
          this.obtenerUsuario();
        },
        (error) => {
          console.error('Error al actualizar los datos', error);
        }
      );
  }

  // Función que se llama cuando hay un cambio en los inputs o checkboxes
  onInputChange() {
    this.botonHabilitadoContacto = this.formEmailTfno.valid;
  }
}
