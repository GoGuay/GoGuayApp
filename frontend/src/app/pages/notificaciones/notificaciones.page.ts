import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificacionesService } from 'src/app/core/notificaciones/notificaciones.service';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { Usuario } from 'src/app/models/user/usuario.model';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { SpinnerComponent } from "src/app/components/spinner/spinner.component";
import { MatIcon } from "@angular/material/icon";
import { HelpModalComponent } from 'src/app/components/help-modal/help-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, IonicModule, SpinnerComponent, MatIcon, TranslateModule]
})
export class NotificacionesPage implements OnInit {

  usuario: any;
  userData: Usuario = {} as Usuario;
  userLoggedIn: boolean = false;
  iconoAjustes: string = '../../../assets/sistema/ajustes.png';
  notificaciones: any[] = [];

  mostrarSpinner: boolean = false;

  idResaltado: number | null = null;

  constructor(
    private notificationService: NotificacionesService, 
    private userService: UserServicesService, 
    private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.idResaltado = this.notificationService.idNotificacionResaltada;
    this.loadUserData();
    
    this.userLoggedIn = !!(this.userData && this.userData.usuario && this.userData.usuario.email);
    
    if (this.userData?.usuario?.id) {
      this.obtenerNotificaciones(this.userData.usuario.id);
    }
    
    this.notificationService.clearToasts();
    
    if (this.idResaltado) {
      setTimeout(() => {
        this.idResaltado = null;
        this.notificationService.idNotificacionResaltada = null;
      }, 3000);
    }
  }


  /**
   * Función para obtener todas las notificaciones del usuario que ha iniciadio sesión.
   * 
   * @param usuarioId 
   */
  obtenerNotificaciones(usuarioId: number) {
    this.mostrarSpinner = true;
    this.notificationService.obtenerNotificaciones(usuarioId).subscribe({
      next: (notificaciones) => {
        this.mostrarSpinner = false;
        if (notificaciones && notificaciones.length) {
          
          this.notificaciones = notificaciones.sort((a: any, b: any) => Number(a.leida) - Number(b.leida));
          
          this.notificationService.notificacionPendiente = notificaciones[0].mensaje;
          this.notificationService.esCreadorDelViaje = true;
          this.notificationService.leerNotificacion(notificaciones);
        }
      },
      error: (err) => {
        this.mostrarSpinner = false;
        console.error('Error al obtener notificaciones', err);
      }
    });
  }

  /**
   * Función para cargar los datos del usuario desde el localStorage.
   */
  loadUserData(): void {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
  }

  toggleLeida(notificacion: any): void {
    const nuevoEstado = !notificacion.leida;
    notificacion.leida = !notificacion.leida;

    this.notificationService.toggleEstadoNotificacion(notificacion.id, nuevoEstado)
      .subscribe({
        next: () => {
          notificacion.leida = nuevoEstado;
        },
        error: () => {
          console.error('No se pudo actualizar el estado de la notificación');
        }
      });
  }

  /**
   * Función para navegar a la página de ajustes en la sección de notificaciones.
   */
  goToSettings() {
    this.router.navigate(['/ajustes-aplicacion'], { fragment: 'notificaciones-section' });
  }

  irAlChat(n: any) {
    if (!n.leida) {
      this.toggleLeida(n);
    }
    // Navega a la ruta de chat pasando el ID de la conversación
    this.router.navigate(['/chat', n.conversacion_id]);
  }


  /**
   * Función para eliminar todas las notificaciones del usuario. Se muestra un mensaje de confirmación antes de proceder a eliminar.
   * Solo se muestra el botón de eliminar todo si hay notificaciones en la lista.
   */
  borrarTodas() {
    const usuarioId = this.userData.usuario.id;

    const titulo = 'Vas a eliminar todas tus notificaciones';
    const mensaje = 'Esta acción no se puede deshacer. Se eliminarán todas tus notificaciones y no podrás recuperarlas. Si estás seguro de que quieres continuar, haz clic en "Aceptar".';

    const dialogRef = this.dialog.open(HelpModalComponent, {
      data: { title: titulo, message: mensaje, showAcceptButton: true },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((confirmar: any) => {
      if (confirmar) {
        this.notificationService.eliminarTodasNotificaciones(usuarioId).subscribe({
        next: () => {
            this.notificaciones = [];
            this.notificationService.mostrarToast({
              id: Date.now(),
              type: 'success',
              mensaje: 'Se han eliminado todas las notificaciones',
              leida: false
            });
          }, error: (err) => console.error('Error al limpiar historial:', err)
        });
      }
    });
  }

  /**
   * Función para eliminar una sola notificación por su ID.
   * @param id --> ID de la notificación a eliminar.
   */
  borrarUna(id: number) {
    this.notificationService.eliminarNotificacion(id).subscribe({
      next: () => {
        this.notificaciones = this.notificaciones.filter(notificacion => notificacion.id !== id);
        this.notificationService.mostrarToast({
          id: Date.now(),
          type: 'success',
          mensaje: 'Se ha eliminado la notificación',
          leida: false
        });
      }
    });
  }
}
