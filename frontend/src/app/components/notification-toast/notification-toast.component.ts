import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NotificacionesService, ToastData } from 'src/app/core/notificaciones/notificaciones.service';
import { Usuario } from 'src/app/models/user/usuario.model';

export interface Notification {
  title: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  leida?: boolean;
}

@Component({
  selector: 'app-notification-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-toast.component.html',
  styleUrls: ['./notification-toast.component.scss'],
})
export class NotificationToastComponent implements OnInit {

  public _notifications = new Subject<Notification>();
  notifications$ = this._notifications.asObservable();
  toasts: ToastData[] = [];
  cerrandoToasts = new Set<ToastData>();
  userData: Usuario = {} as Usuario;

  constructor(private notificationService: NotificacionesService) { }

  ngOnInit() {
    this.loadUserData();
    this.obtenerNotificaciones(this.userData.usuario.id);
  }

  /**
    * Función para cargar los datos del usuario desde el localStorage.
    */
  loadUserData(): void {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
  }


  obtenerNotificaciones(usuarioId: number) {
    this.notificationService.obtenerNotificaciones(usuarioId).subscribe((notificaciones) => {
      if (notificaciones.length) {
        // Guarda todas las notificaciones en caso de que necesites accederlas después
        const noLeidas = notificaciones.filter((n: any) => !n.leida);
        console.log('Notificaciones no leídas:', noLeidas);
        
        this.toasts = noLeidas;

        if (noLeidas.length > 0) {
          this.notificationService.notificacionPendiente = noLeidas[0].mensaje;
          this.notificationService.esCreadorDelViaje = true;
          this.notificationService.leerNotificacion(noLeidas);
        }
      }
    });
  }

  show(notification: Notification) {
    this._notifications.next(notification);
  }

  cerrarToast(toast: ToastData) {
    this.cerrandoToasts.add(toast);

    setTimeout(() => {
      this.cerrandoToasts.delete(toast);
      this.notificationService.removeToast(toast);
    }, 400);
  }

}
