import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NotificacionesService, ToastData } from 'src/app/core/notificaciones/notificaciones.service';

export interface Notification {
  title: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
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

  constructor(private notificationService: NotificacionesService) { }

  ngOnInit() {
    this.notificationService.toast$.subscribe((toasts: ToastData[]) => {
      this.toasts = toasts;
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
