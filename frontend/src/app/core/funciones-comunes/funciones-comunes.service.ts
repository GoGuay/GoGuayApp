import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelpModalComponent } from 'src/app/components/help-modal/help-modal.component';
import { ModalErrorComponent } from 'src/app/components/modal-error/modal-error.component';
import { Usuario } from 'src/app/models/user/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class FuncionesComunes {

  userData: Usuario = {} as Usuario;

  sugerenciasOrigen: any[] = [];
  sugerenciasDestino: any[] = [];

  constructor(private dialog: MatDialog) {
    this.loadUserData();
  }

  /**
   * Función para recoger de "localStorage" los datos del usuario, si los hay.
   */
  loadUserData(): void {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
  }

  /**
   *      Función para validar si el usuario está logado o no.
   *
   * -> Verifica que "userData" existe.
   * -> Verifica si "userData" tiene datos.
   * -> Verifica si hay un "email" en los atributos del usuario.
   *
   * @returns Si todas las validaciones se cumplen, devuelve un TRUE, en caso contrario FALSE.
   */
  isUserLoggedIn(): boolean {
    if (!this.userData) return false;
    if (Object.keys(this.userData).length === 0) return false;
    if (!this.userData.usuario?.email) return false;

    return true;
  }

  /**
   * Función para dar formato al selector de preferencias del viaje.
   *
   * -> Primero se valida el parámetro de entrada "preferencias"
   *    para conocer el estado del objeto que se recibe y evitar errores.
   *
   * @param viaje Recibe los datos del viaje seleccionado.
   * @returns
   */
  validacionPreferencias(preferencias: any): string {
    let preferencia: any;

    if (!preferencias.viaje) {
      preferencia = preferencias.preferencias;
    } else {
      preferencia = preferencias.viaje.usuario.preferencias;
    }

    switch (preferencia) {
      case 'Silencio':
        return 'Prefiere viajar en silencio';
      case 'Dormir':
        return 'Prefiere ir durmiendo';
      case 'Escuchar música':
        return 'Prefiere ir escuchando música';
      case 'Hablar':
        return 'Prefiere ir hablando';
      default:
        return '';
    }
  }

  /**
   * Función para abrir la ventana modal con mensajes de error.
   *
   * @param title Recibe el título a mostrar.
   * @param message Recibe el mensaje a mostrar.
   */
  openErrorModal(title: string, message: string) {
    return this.dialog.open(ModalErrorComponent, {
      data: { title, message },
      panelClass: 'dialog-animate',
    });
  }

  /**
   * Función para abrir la ventana modal con los mensajes de confirmación.
   *
   * @param title Recibe el título a mostrar.
   * @param message Recibe el mensaje a mostrar.
   */
  openConfirmModal(title: string, message: string) {
    return this.dialog.open(HelpModalComponent, {
      data: { title, message },
      disableClose: true,
    });
  }


/* * * * * * * * * * * * * * * * * * * * * * * * * * 
 *
 *     FUNCIONES PARA LAS SUGERENCIAS DE VIAJES 
 * 
 * * * * * * * * * * * * * * * * * * * * * * * * * */ 


  /**
  * Función para obtener la lista de sugerencias para el origen
  * en función de lo que escriba el usuario en el input correspondiente.
  * 
  * @param evento Recibe el evento del input.
  */
   obtenerSugerenciasOrigen(evento: Event) {
    const contenidoInput = (evento.target as HTMLInputElement).value;
  
    if (contenidoInput.length > 2) {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${contenidoInput}&addressdetails=1&limit=5&countrycodes=ES`;
      
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.sugerenciasOrigen = data.filter((item: any) =>
            item.address && (item.address.city || item.address.town || item.address.village) &&
            item.address.country_code === 'es' 
          );
        })
        .catch(error => {
          console.error('Error al obtener sugerencias de origen:', error);
        });
    } else {
      this.sugerenciasOrigen = [];
    }
  }

  /**
  * Función para obtener la lista de sugerencias para el destino
  * en función de lo que escriba el usuario en el input correspondiente.
  * 
  * @param evento Recibe el evento del input.
  */
  obtenerSugerenciasDestino(evento: Event) {
    const contenidoInput = (evento.target as HTMLInputElement).value;
    if (contenidoInput.length > 2) {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${contenidoInput}&addressdetails=1&limit=5&countrycodes=ES`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.sugerenciasDestino = data.filter((item: any) =>
            item.address && (item.address.city || item.address.town || item.address.village) &&
            item.address.country_code === 'es'
          );
        })
        .catch(error => {
          console.error('Error al obtener sugerencias de destino:', error);
        });
    } else {
      this.sugerenciasDestino = [];
    }
  }

}
