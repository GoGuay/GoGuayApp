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

    constructor(private dialog: MatDialog) {
        this.loadUserData();
    }

    /**
     * Función para recoger de "localStorage" los datos del usuario, si los hay.
     */
    private loadUserData(): void {
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
        this.dialog.open(ModalErrorComponent, {
            data: { title, message },
            panelClass: 'dialog-animate'
        });
    }


    /**
     * Función para abrir la ventana modal con los mensajes de confirmación.
     * 
     * @param title Recibe el título a mostrar.
     * @param message Recibe el mensaje a mostrar.
     */
    openConfirmModal(title: string, message: string) {
        this.dialog.open(HelpModalComponent, {
            data: { title, message },
            disableClose: true,
        });
    }

}