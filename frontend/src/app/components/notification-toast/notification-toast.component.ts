import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificacionesService } from 'src/app/core/notificaciones/notificaciones.service';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { ToastData } from 'src/app/models/notificaciones/modificaciones-toast.model';
import { Usuario } from 'src/app/models/user/usuario.model';

@Component({
  selector: 'app-notification-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-toast.component.html',
  styleUrls: ['./notification-toast.component.scss'],
})
export class NotificationToastComponent implements OnInit, OnDestroy {

  @Input() usuario!: Usuario;

  toasts: ToastData[] = [];
  cerrandoToasts = new Set<ToastData>();
  private toastSub!: Subscription;
  userData: Usuario | null = null;

  constructor(private notificationService: NotificacionesService, private cdr: ChangeDetectorRef, private userService: UserServicesService) { }

  ngOnInit() {
    this.userService.usuario$.subscribe(user => {
      if (user) {
        this.checkLogin();
      }
    });
  }

  private checkLogin() {
    const datosDelUsuario = localStorage.getItem('userData');

    if (!datosDelUsuario) {
      console.log('NotificationToast: No hay sesión activa.');
      return; // Si no hay datos, no hacemos nada
    }

    try {
      this.userData = JSON.parse(datosDelUsuario);

      // Validamos que la estructura interna exista antes de proceder
      if (this.userData && this.userData.usuario && this.userData.usuario.id) {
        this.cargarNotificacionesIniciales(this.userData.usuario.id);
        this.suscribirANuevasNotificaciones();
      }
    } catch (e) {
      console.error('Error al parsear userData', e);
    }
  }


  private suscribirANuevasNotificaciones() {
    this.toastSub = this.notificationService.toast$.subscribe((nuevasToasts) => {
      const cerradas = this.obtenerNotificacionesCerradas();
      nuevasToasts.forEach(toast => {
        if (!cerradas.includes(toast.id) && !this.toasts.find(t => t.id === toast.id)) {
          this.toasts.push(toast);
        }
      });
      this.cdr.detectChanges();
    });
  }

  private cargarNotificacionesIniciales(userId: number) {
    this.notificationService.obtenerNotificaciones(userId).subscribe({
      next: (notificaciones) => {
        const cerradas = this.obtenerNotificacionesCerradas();
        const noLeidas = notificaciones.filter((n: any) => !n.leida && !cerradas.includes(n.id));

        noLeidas.forEach((n: any) => this.notificationService.mostrarToast({
          id: n.id,
          type: 'info',
          mensaje: n.mensaje,
          leida: false
        }));
      },
      error: (err) => console.error('Error al cargar notificaciones iniciales:', err)
    });
  }

  ngOnDestroy() {
    this.toastSub?.unsubscribe();
  }

  loadUserData(): void {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
  }

  private guardarNotificacionesCerradas(ids: number[]) {
    localStorage.setItem('notificacionesCerradas', JSON.stringify(ids));
  }

  private obtenerNotificacionesCerradas(): number[] {
    return JSON.parse(localStorage.getItem('notificacionesCerradas') || '[]');
  }

  cerrarToast(toast: ToastData) {
    this.cerrandoToasts.add(toast);
    setTimeout(() => {
      this.cerrandoToasts.delete(toast);
      this.toasts = this.toasts.filter(t => t !== toast);

      const cerradas = this.obtenerNotificacionesCerradas();
      cerradas.push(toast.id);
      this.guardarNotificacionesCerradas(cerradas);
      this.notificationService.marcarNotificacionComoLeida(toast.id);

    }, 400);
  }

  cerrarTodosLosToasts() {
    this.toasts.forEach(t => this.cerrandoToasts.add(t));

    setTimeout(() => {
      const cerradas = this.obtenerNotificacionesCerradas();
      this.toasts.forEach(t => {
        if (!cerradas.includes(t.id)) cerradas.push(t.id);
      });

      this.guardarNotificacionesCerradas(cerradas);
      this.cerrandoToasts.clear();
      this.toasts = [];
    }, 400);
  }
}
