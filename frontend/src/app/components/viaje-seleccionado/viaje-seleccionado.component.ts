import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { Viaje } from 'src/app/models/travel/viaje.model';

@Component({
  selector: 'app-viaje-seleccionado',
  standalone: true,
  imports: [MatDivider, MatIcon, MatDialogContent, MatButtonModule, CommonModule],
  templateUrl: './viaje-seleccionado.component.html',
  styleUrls: ['./viaje-seleccionado.component.scss'],
})
export class ViajeSeleccionadoComponent implements OnInit {
  yaUnido: boolean = false;
  preferencias: string = '';
  userID!: number;

  constructor(
    private dialogRef: MatDialogRef<ViajeSeleccionadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { viaje: Viaje },
    private funcionesComunes: FuncionesComunes,
    private travelService: TravelService,
    private usersService: UserServicesService
  ) {
    this.preferencias = this.funcionesComunes.validacionPreferencias(this.data);
  }

  ngOnInit() {
    this.obtenerUsuarioActual();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  /**
   * Función para obtener los datos del usuario logado.
   * 
   */
  obtenerUsuarioActual() {
    this.usersService.obtenerUsuarioPorID(this.data.viaje.usuario_id).subscribe({
      next: (usuario) => {
        this.userID = usuario.usuario.id;
        this.verificarSiEstaUnido();
      },
      error: (error) => {
        console.error('Error al obtener el usuario:', error);
      }
    });
  }


  /**
   * Función para verificar si el usuario ya se ha unido a un viaje.
   * Si ya está unido, impide que lo vuelva a hacer.
   * 
   */
  verificarSiEstaUnido() {
    this.travelService.obtenerTodosLosViajes().subscribe({
      next: (misViajes: Viaje[]) => {
        this.yaUnido = misViajes.some(viaje => viaje.id === this.data.viaje.id);
      },
      error: (error) => {
        console.error('Error al obtener los viajes del usuario:', error);
      }
    });
  }


  /**
   * Función para unirse a un viaje.
   * 
   * 
   * @param viajeID Recibe el ID del viaje al que se quiere unir.
   * @returns Devuelve la confirmación de haberse unido al viaje.
   */
  unirseAViaje(viajeID: number) {
    const title_error: string = '¡Algo anda mal!';
    const message_ya_unico: string = '<p>Ya estás unido a este viaje.</p>';

    const title_viaje_confirmado: string = '¡Confirmado!';
    const message_viaje_confirmado: string = 'Te has unido al viaje correctamente.';

    const message_error: string = 'Ya estás unido a este viaje.';

    if (this.yaUnido) {
      this.funcionesComunes.openConfirmModal(title_error, message_ya_unico);
      return;
    }

    this.travelService.unirseAViaje(viajeID).subscribe({
      next: (response) => {
        this.funcionesComunes.openConfirmModal(title_viaje_confirmado, message_viaje_confirmado)
        this.yaUnido = true;
      },
      error: (error) => {
        this.funcionesComunes.openErrorModal(title_error, message_error)
      }
    });
  }

}
