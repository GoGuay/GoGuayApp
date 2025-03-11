import { CommonModule } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { Subscription } from 'rxjs';
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
export class ViajeSeleccionadoComponent implements OnInit, OnDestroy {
  yaUnido: boolean = false;
  preferencias: string = '';
  userID!: number;
  viaje!: Viaje;
  viajesSubscription: Subscription = new Subscription(); // Para gestionar la suscripción

  constructor(
    private dialogRef: MatDialogRef<ViajeSeleccionadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { viaje: Viaje },
    private funcionesComunes: FuncionesComunes,
    private travelService: TravelService,
    private usersService: UserServicesService
  ) {
    this.preferencias = this.funcionesComunes.validacionPreferencias(this.data);
    this.viaje = { ...this.data.viaje }; // Inicializa con los datos del viaje
  }

  ngOnInit() {
    this.obtenerUsuarioActual();
    this.obtenerViajesActualizados(); // Inicia la suscripción
  }

  ngOnDestroy() {
    // Limpia la suscripción cuando el componente se destruya
    if (this.viajesSubscription) {
      this.viajesSubscription.unsubscribe();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

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

  obtenerViajesActualizados() {
    // Suscripción para escuchar los cambios en los viajes
    this.viajesSubscription = this.travelService.viajeData$.subscribe((viajes) => {
      // Actualiza el viaje si ha cambiado en la lista de viajes
      const viajeActualizado = viajes.find((viaje: Viaje) => viaje.id === this.viaje.id);
      if (viajeActualizado) {
        this.viaje = viajeActualizado; // Actualiza la información del viaje
      }
    });
  }

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
      next: () => {
        const dialogRef = this.funcionesComunes.openConfirmModal(title_viaje_confirmado, message_viaje_confirmado);
        this.yaUnido = true;
        dialogRef.afterClosed().subscribe(() => {
          // Los viajes se actualizarán automáticamente a través de la suscripción
        });
      },
      error: (error) => {
        this.funcionesComunes.openErrorModal(title_error, message_error);
      }
    });
  }
}
