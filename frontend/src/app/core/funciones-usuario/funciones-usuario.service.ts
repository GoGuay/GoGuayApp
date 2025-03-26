import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/user/usuario.model';
import { UserServicesService } from '../user-services/user-services.service';
import { FuncionesComunes } from '../funciones-comunes/funciones-comunes.service';
import { BehaviorSubject } from 'rxjs';

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
  emailEditado: string = '';
  telefonoEditado: string = '';
  usuario: Usuario = {} as Usuario;

  constructor(
    private userService: UserServicesService,
    private funcionesComunes: FuncionesComunes
  ) {
    this.loadUserData();

    this.fechaNacimientoEditada = this.userData.usuario.fecha_nacimiento || '';

    this.emailEditado = this.userData.usuario.email || '';
    this.telefonoEditado = this.userData.usuario.telefono || '';
  }

  loadUserData(): void {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
  }

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

  editarCorreoTelefono() {
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
        },
        (error) => {
          console.error('Error al actualizar los datos', error);
        }
      );
  }

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
}
