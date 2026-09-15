import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotificacionesService } from '../../core/notificaciones/notificaciones.service';
import { UserServicesService } from '../../core/user-services/user-services.service';
import { ToastData } from '../../models/notificaciones/modificaciones-toast.model';
import { Usuario } from '../../models/user/usuario.model';
import { CommonModule } from '@angular/common';

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
  userData: Usuario | null = null;

  private toastSub!: Subscription;
  private toastTimeouts = new Map<number, any>();
  private readonly TIEMPO_VISIBLE = 9999;

  constructor(
    private notificationService: NotificacionesService,
    private cdr: ChangeDetectorRef,
    private userService: UserServicesService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.userService.usuario$.subscribe((user) => {
      if (user) {
        this.checkLogin();
      }
    });
  }

  private checkLogin() {
    const datosDelUsuario = localStorage.getItem('userData');

    // 1. Validar que exista y que no sea la cadena "undefined" ni "null"
    if (
      !datosDelUsuario ||
      datosDelUsuario === 'undefined' ||
      datosDelUsuario === 'null'
    ) {
      return;
    }

    try {
      const parsedData = JSON.parse(datosDelUsuario);

      const usuarioId = parsedData?.usuario?.id || parsedData?.id;

      if (usuarioId) {
        this.userData = parsedData;
        this.cargarNotificacionesIniciales(usuarioId);
        this.suscribirANuevasNotificaciones();
      }
    } catch (e) {
      console.error('Error al parsear userData:', e);
      localStorage.removeItem('userData');
    }
  }

  private suscribirANuevasNotificaciones() {
    this.toastSub = this.notificationService.toast$.subscribe(
      (nuevasToasts) => {
        const cerradas = this.obtenerNotificacionesCerradas();
        nuevasToasts.forEach((toast) => {
          if (
            !cerradas.includes(toast.id) &&
            !this.toasts.find((t) => t.id === toast.id)
          ) {
            this.toasts.push(toast);
            this.iniciarTemporizador(toast);
          }
        });
        this.cdr.detectChanges();
      },
    );
  }

  private cargarNotificacionesIniciales(userId: number) {
    this.notificationService.obtenerNotificaciones(userId).subscribe({
      next: (notificaciones) => {
        const cerradas = this.obtenerNotificacionesCerradas();
        const noLeidas = notificaciones.filter(
          (n: any) => !n.leida && !cerradas.includes(n.id),
        );

        noLeidas.forEach((n: any) =>
          this.notificationService.mostrarToast({
            id: n.id,
            type: 'info',
            mensaje: n.mensaje,
            leida: false,
          }),
        );
      },
      error: (err) =>
        console.error('Error al cargar notificaciones iniciales:', err),
    });
  }

  /**
   * Configura la destrucción automática de la notificación
   */
  iniciarTemporizador(toast: ToastData) {
    this.limpiarTemporizador(toast.id);

    const timeoutId = setTimeout(() => {
      this.cerrarToast(toast);
    }, this.TIEMPO_VISIBLE);

    this.toastTimeouts.set(toast.id, timeoutId);
  }

  /**
   * Pausa el temporizador si el usuario interactúa o pasa el cursor sobre el elemento
   */
  limpiarTemporizador(toastId: number) {
    if (this.toastTimeouts.has(toastId)) {
      clearTimeout(this.toastTimeouts.get(toastId));
      this.toastTimeouts.delete(toastId);
    }
  }

  ngOnDestroy() {
    this.toastSub?.unsubscribe();
    this.toastTimeouts.forEach((timeout) => clearTimeout(timeout));
    this.toastTimeouts.clear();
  }

  private guardarNotificacionesCerradas(ids: number[]) {
    localStorage.setItem('notificacionesCerradas', JSON.stringify(ids));
  }

  private obtenerNotificacionesCerradas(): number[] {
    return JSON.parse(localStorage.getItem('notificacionesCerradas') || '[]');
  }

  onCerrarClick(event: Event, toast: any) {
    event.stopPropagation();
    this.cerrarToast(toast);
  }

  cerrarToast(toast: ToastData, desdeRedireccion?: boolean) {
    this.limpiarTemporizador(toast.id);

    if (this.cerrandoToasts.has(toast)) return;
    this.cerrandoToasts.add(toast);

    setTimeout(() => {
      this.cerrandoToasts.delete(toast);
      this.toasts = this.toasts.filter((t) => t !== toast);

      const cerradas = this.obtenerNotificacionesCerradas();
      if (!cerradas.includes(toast.id)) {
        cerradas.push(toast.id);
        this.guardarNotificacionesCerradas(cerradas);
      }

      if (!desdeRedireccion) {
        this.notificationService.marcarNotificacionComoLeida(toast.id);
      }
      this.cdr.detectChanges();
    }, 400);
  }

  cerrarTodosLosToasts() {
    this.toasts.forEach((t) => {
      this.limpiarTemporizador(t.id);
      this.cerrandoToasts.add(t);
    });

    setTimeout(() => {
      const cerradas = this.obtenerNotificacionesCerradas();
      this.toasts.forEach((t) => {
        if (!cerradas.includes(t.id)) cerradas.push(t.id);
      });

      this.guardarNotificacionesCerradas(cerradas);
      this.cerrandoToasts.clear();
      this.toasts = [];
      this.cdr.detectChanges();
    }, 400);
  }

  redirigirANotificacion(n: any) {
    const redireccion: boolean = true;
    this.notificationService.idNotificacionResaltada = n.id;
    this.cerrarToast(n, redireccion);
    this.cerrarTodosLosToasts();
    this.router.navigate(['/notificaciones']);
  }
}
