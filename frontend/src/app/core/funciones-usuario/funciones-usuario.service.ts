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
  usuario: Usuario = {} as Usuario;
  vehiculos_usuario: any[] = [];
  modificandoMarca: boolean = false;
  telefonoInvalido: boolean = false;
  botonHabilitadoMiPerfil: boolean = false;
  telefonoRef: any;

  constructor(
    private userService: UserServicesService,
    private funcionesComunes: FuncionesComunes,
    private vehiculosServices: VehiculosServicesService,

    private dialog: MatDialog
  ) {
    this.loadUserData();
  }

  loadUserData(): void {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
  }

  /*********************************************************
   * FUNCIONES RELACIONADAS CON "MI PERFIL"                  **
   ***********************************************************
   */

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
}
