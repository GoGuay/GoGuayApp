import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, throwError } from 'rxjs';
import { NotificacionesComponent } from 'src/app/components/notificaciones/notificaciones.component';

@Injectable({ providedIn: 'root' })
export class NotificacionesService {

    private apiUrl = 'http://127.0.0.1:5000';

    public notificacionPendiente: string | null = null;
    public esCreadorDelViaje: boolean = false;

    constructor(private http: HttpClient, private dialog: MatDialog) { }

    tieneNotificacionPendiente(): boolean {
        return this.notificacionPendiente !== null && this.esCreadorDelViaje;
    }

    // Método para leer la notificación
    leerNotificacion(): void {
        if (this.notificacionPendiente) {
            console.log('NOTIF. PDTE: ', this.notificacionPendiente);
            
            this.mostrarNotificaciones(this.notificacionPendiente);
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
}