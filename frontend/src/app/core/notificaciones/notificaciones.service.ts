import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { NotificacionesComponent } from 'src/app/components/notificaciones/notificaciones.component';

export interface ToastData {
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
}

@Injectable({ providedIn: 'root' })
export class NotificacionesService {

    private apiUrl = 'http://127.0.0.1:5000';

    public notificacionPendiente: string | null = null;
    public esCreadorDelViaje: boolean = false;

    private toastSubject = new Subject<ToastData[]>();
    toast$ = this.toastSubject.asObservable();

    // Array interno para almacenar toasts activos
    private toasts: ToastData[] = [];

    constructor(private http: HttpClient, private dialog: MatDialog) { }

    tieneNotificacionPendiente(): boolean {
        return this.notificacionPendiente !== null && this.esCreadorDelViaje;
    }

    // Método para leer la notificación
    leerNotificacion(notificaciones: any): void {
        if (this.notificacionPendiente && this.esCreadorDelViaje) {
            console.log('NOTIF. PDTE: ', this.notificacionPendiente);

            this.mostrarToast({
                type: 'info',
                message: this.notificacionPendiente
            });

            // this.mostrarNotificaciones(notificaciones);

            this.notificacionPendiente = null;
            this.esCreadorDelViaje = false;
        }
    }

    /**
     * Función para abrir la ventana de notificaciones
     * @param notificacion 
     */
    mostrarNotificaciones(notificacion: any) {
        const titulo: string = 'Notificación';
        const dialogRef = this.dialog.open(NotificacionesComponent, {
            data: { titulo, notificacion }
        });

        dialogRef.afterClosed().subscribe(() => {
            this.marcarNotificacionComoLeida(notificacion[0].id);
        });
    }

    /**
     * Servicio para marcar notificación como leída
     * @param notificacionId 
     */
    marcarNotificacionComoLeida(notificacionId: number) {
        this.http.put(`${this.apiUrl}/travel/marcar_notificacion_leida/${notificacionId}`, {}).subscribe(
            () => console.log('Notificación marcada como leída'),
            (error) => console.error('Error al marcar como leída:', error)
        );
    }

    /**
     * Función para obtener las notificaciones de un usuario.
     * @param usuarioId ID del usuario.
     * @returns Lista de notificaciones para el usuario.
     */
    obtenerNotificaciones(usuarioId: number): Observable<any> {
        return this.http.get(`${this.apiUrl}/travel/obtener_notificaciones/${usuarioId}`).pipe(
            catchError((error) => {
                console.error('Error al obtener notificaciones:', error);
                return throwError(() => error);
            })
        );
    }

    /**
     * Función para recibir las notificaciones de un viaje concreto.
     * 
     * @param viaje_id ID del viaje
     * @returns Lista de las notificaciones para el viaje.
     */
    obtenerNotificacionesDeUnViaje(viaje_id: number): Observable<any> {
        return this.http.get(`${this.apiUrl}/travel/obtener_notificaciones_viaje/${viaje_id}`).pipe(
            catchError((error) => {
                console.error('Error al obtener notificaciones del viaje:', error);
                return throwError(() => error);
            })
        );
    }

    /**
     * Función para mostrar el mensaje emergente de notificación.
     * @param data 
     */
    mostrarToast(data: ToastData) {
        const exists = this.toasts.some(t => t.message === data.message && t.type === data.type);
        if (!exists) {
            this.toasts.push(data);
            this.toastSubject.next(this.toasts);
        }
    }

    /**
     * Función para limpiar los mensajes almacenados en el array de toasts.
     */
    clearToasts() {
        this.toasts = [];
        this.toastSubject.next(this.toasts);
    }

    removeToast(toast: ToastData) {
        this.toasts = this.toasts.filter(t => t !== toast);
        this.toastSubject.next(this.toasts);
    }
}