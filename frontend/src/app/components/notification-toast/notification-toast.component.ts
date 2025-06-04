import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NotificacionesService } from 'src/app/core/notificaciones/notificaciones.service';
import { ToastData } from 'src/app/models/notificaciones/modificaciones-toast.model';
import { Notification } from 'src/app/models/notificaciones/notificaciones.model';
import { Usuario } from 'src/app/models/user/usuario.model';


/**
 * Componente para mostrar notificaciones en forma de toast.
 * Este componente se suscribe a un servicio de notificaciones y muestra las notificaciones
 */

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


  private guardarNotificacionesCerradas(ids: number[]) {
    localStorage.setItem('notificacionesCerradas', JSON.stringify(ids));
  }

  private obtenerNotificacionesCerradas(): number[] {
    return JSON.parse(localStorage.getItem('notificacionesCerradas') || '[]');
  }


  obtenerNotificaciones(usuarioId: number) {
    this.notificationService.obtenerNotificaciones(usuarioId).subscribe((notificaciones) => {
      if (notificaciones.length) {
        const notificacionesCerradas = this.obtenerNotificacionesCerradas();

        // Filtrar las que no están cerradas y no leídas
        const noLeidas = notificaciones.filter((n: any) =>
          !n.leida && !notificacionesCerradas.includes(n.id)
        );

        this.toasts = noLeidas;
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
      this.toasts = this.toasts.filter(t => t !== toast);

      // Guardar ID como cerrada
      const cerradas = this.obtenerNotificacionesCerradas();
      cerradas.push(toast.id); // Asegúrate que toast.id existe
      this.guardarNotificacionesCerradas(cerradas);

    }, 400);
  }
  
  cerrarTodosLosToasts() {
    this.toasts.forEach(t => this.cerrandoToasts.add(t));

    setTimeout(() => {
      const cerradas = this.obtenerNotificacionesCerradas();

      this.toasts.forEach(t => {
        if (!cerradas.includes(t.id)) {
          cerradas.push(t.id);
        }
      });

      this.guardarNotificacionesCerradas(cerradas);

      this.cerrandoToasts.clear();
      this.toasts = [];
    }, 400);
  }

}
