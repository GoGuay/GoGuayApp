import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { NotificacionesService } from 'src/app/core/notificaciones/notificaciones.service';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { Usuario } from 'src/app/models/user/usuario.model';
import { NavbarComponent } from "../../shared/navbar/navbar.component";

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, NavbarComponent]
})
export class NotificacionesPage implements OnInit {

  usuario: any;
  userData: Usuario = {} as Usuario;
  userLoggedIn: boolean = false;

  notificaciones: any[] = [];

  constructor(private notificationService: NotificacionesService, private userService: UserServicesService) { }

  ngOnInit() {
    this.loadUserData();
    this.userLoggedIn = !!(this.userData && this.userData.usuario.email);
    this.obtenerNotificaciones(this.userData.usuario.id);
    this.notificationService.clearToasts();
  }


  /**
   * Función para obtener todas las notificaciones del usuario que ha iniciadio sesión.
   * 
   * @param usuarioId 
   */
  obtenerNotificaciones(usuarioId: number) {
    this.notificationService.obtenerNotificaciones(usuarioId).subscribe((notificaciones) => {
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
}
