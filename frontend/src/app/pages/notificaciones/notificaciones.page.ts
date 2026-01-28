import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { NotificacionesService } from 'src/app/core/notificaciones/notificaciones.service';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { Usuario } from 'src/app/models/user/usuario.model';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { SpinnerComponent } from "src/app/components/spinner/spinner.component";

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, IonicModule, SpinnerComponent]
})
export class NotificacionesPage implements OnInit {

  usuario: any;
  userData: Usuario = {} as Usuario;
  userLoggedIn: boolean = false;
  iconoAjustes: string = '../../../assets/sistema/ajustes.png';
  notificaciones: any[] = [];

  mostrarSpinner: boolean = false;

  idResaltado: number | null = null;

  constructor(private notificationService: NotificacionesService, private userService: UserServicesService, private router: Router) { }

  ngOnInit() {
    this.idResaltado = this.notificationService.idNotificacionResaltada;
    this.loadUserData();
    this.userLoggedIn = !!(this.userData && this.userData.usuario.email);
    this.obtenerNotificaciones(this.userData.usuario.id);
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
    this.notificationService.obtenerNotificaciones(usuarioId).subscribe((notificaciones) => {
      this.mostrarSpinner = false;
      if (notificaciones.length) {
        this.notificaciones = notificaciones;
        this.notificationService.notificacionPendiente = notificaciones[0].mensaje;
        this.notificationService.esCreadorDelViaje = true;
        this.notificationService.leerNotificacion(notificaciones);
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
}
