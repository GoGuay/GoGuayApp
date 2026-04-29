import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, catchError, Observable, Subject, throwError } from 'rxjs';
import { NotificacionesComponent } from 'src/app/components/notificaciones/notificaciones.component';
import { ToastData } from 'src/app/models/notificaciones/modificaciones-toast.model';
import { URLS_API } from '../../models/constantes/constantes.model';
import { PushNotifications, ActionPerformed } from '@capacitor/push-notifications';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';


@Injectable({ providedIn: 'root' })
export class NotificacionesService {

    private apiUrl = URLS_API.NOTIFICATIONS;

    public notificacionPendiente: string | null = null;
    public esCreadorDelViaje: boolean = false;
    public idNotificacionResaltada: number | null = null;

    private toastSubject = new BehaviorSubject<ToastData[]>([]);
    toast$ = this.toastSubject.asObservable();

    // Array interno para almacenar toasts activos
    private toasts: ToastData[] = [];

    constructor(private http: HttpClient, private dialog: MatDialog, private router: Router) { }

    enviarTokenAlServidor(token: string, usuarioId: number) {
        return this.http.post(`${this.apiUrl}/usuarios/registrar-token`, {
            token: token,
            usuarioId: usuarioId
        }).subscribe({
            next: () => console.log('Token guardado en el servidor'),
            error: (err) => console.error('Error guardando token', err)
        });
    }

    inicializarPush(usuarioId: number) {
        if (Capacitor.getPlatform() === 'web') {
            console.warn('Push Notifications no funcionan en web.');
            return;
        }

        this.configurarListeners(usuarioId);
    }


    private configurarListeners(usuarioId: number) {
        PushNotifications.requestPermissions().then(result => {
            if (result.receive === 'granted') {
                PushNotifications.register();
            }
        });

        PushNotifications.addListener('registration', (token) => {
            console.log('Token:', token.value);
            this.enviarTokenAlServidor(token.value, usuarioId);
        });

        PushNotifications.addListener('pushNotificationActionPerformed', (notification: ActionPerformed) => {
            this.router.navigate(['/notificaciones']);
        });


        PushNotifications.addListener('pushNotificationReceived', (notification) => {
            this.mostrarToast({
                id: Date.now(),
                type: 'info',
                mensaje: notification.body || 'Nueva notificación',
                leida: false
            });
        });
    }
    tieneNotificacionPendiente(): boolean {
        return this.notificacionPendiente !== null && this.esCreadorDelViaje;
    }

    /**
     * Función para leer una notificación pendiente.
     * Esta función verifica si hay una notificación pendiente y si el usuario es el creador del viaje.
     * @param notificaciones -> Lista de notificaciones recibidas.
     */
    leerNotificacion(notificaciones: any): void {
        if (this.notificacionPendiente && this.esCreadorDelViaje) {
            const notificacionConId = notificaciones.find((n: any) => n.mensaje === this.notificacionPendiente);
            if (notificacionConId) {
                this.mostrarToast({
                    id: notificacionConId.id,
                    type: 'info',
                    mensaje: this.notificacionPendiente,
                    leida: false
                });
            } else {
                // Si no hay id disponible, asignar un id temporal o manejar el caso
                this.mostrarToast({
                    id: Date.now(),
                    type: 'info',
                    mensaje: this.notificacionPendiente,
                    leida: false
                });
            }

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
            // this.marcarNotificacionComoLeida(notificacion[0].id);
        });
    }

    /**
     * Servicio para marcar notificación como leída
     * @param notificacionId 
     */
    marcarNotificacionComoLeida(notificacionId: number) {
        this.http.put(`${this.apiUrl}/notifications/marcar_notificacion_leida/${notificacionId}`, {}).subscribe(
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
        return this.http.get(`${this.apiUrl}/notifications/obtener_notificaciones/${usuarioId}`).pipe(
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
        return this.http.get(`${this.apiUrl}/notifications/obtener_notificaciones_viaje/${viaje_id}`).pipe(
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
        const exists = this.toasts.some(t => t.mensaje === data.mensaje && t.type === data.type);
        if (!exists) {
            this.toasts.push(data);
            this.toastSubject.next([...this.toasts]);
        }
    }

    /**
     * Función para limpiar los mensajes almacenados en el array de toasts.
     */
    clearToasts() {
        this.toasts = [];
        this.toastSubject.next([...this.toasts]);
    }

    removeToast(toast: ToastData) {
        this.toasts = this.toasts.filter(t => t !== toast);
        this.toastSubject.next([...this.toasts]);
    }


    /**
     * Marca una notificación como leída o no leída.
     * @param notificacionId ID de la notificación.
     * @param leida Estado booleano: true = leída, false = no leída.
     */
    toggleEstadoNotificacion(notificacionId: number, leida: boolean): Observable<any> {
        return this.http.put(`${this.apiUrl}/notifications/marcar_notificacion_leida/${notificacionId}`, { leida }).pipe(
            catchError((error) => {
                console.error('Error al cambiar estado de la notificación:', error);
                return throwError(() => error);
            })
        );
    }

    /**
     * Envía la solicitud al servidor para compartir el número de teléfono.
     * Esto disparará la notificación push al receptor en el backend.
     * @param data Objeto con conversacion_id y emisor_id
     */
    compartirTelefono(data: { conversacion_id: number, emisor_id: number }): Observable<any> {
        return this.http.post(`${this.apiUrl}/chat/compartir-telefono`, data).pipe(
            catchError((error) => {
                console.error('Error al compartir el teléfono:', error);
                return throwError(() => error);
            })
        );
    }

    /**
     * Solicita al servidor eliminar los mensajes de sistema que comparten
     * el teléfono del usuario en una conversación específica.
     * @param data Objeto con conversacion_id y emisor_id
     */
    dejarDeCompartirTelefono(data: { conversacion_id: number, emisor_id: number }): Observable<any> {
        return this.http.delete(`${this.apiUrl}/chat/dejar-de-compartir`, { body: data }).pipe(
            catchError((error) => {
                console.error('Error al dejar de compartir teléfono:', error);
                return throwError(() => error);
            })
        );
    }

    /**
     * Función para eliminar una notificación específica por su ID.
     * @param id --> ID de la notificación a eliminar.
     * @returns --> Devuelve un Observable con la respuesta del backend.
     */
    eliminarNotificacion(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/notifications/eliminar_notificacion/${id}`);
    }

    
    /**
     * Función para eliminar todas las notificaciones de un usuario.
     * @param usuarioId --> ID del usuario cuyas notificaciones se quieren eliminar.
     * @returns --> Devuelve un Observable con la respuesta del backend.
     */
    eliminarTodasNotificaciones(usuarioId: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/notifications/eliminar_todas_notificaciones/${usuarioId}`);
    }

    /**
     * Función para marcar todas las notificaciones de un usuario como leídas.
     * @param usuarioId --> ID del usuario cuyas notificaciones se quieren marcar como leídas.
     * @returns --> Devuelve un Observable con la respuesta del backend.
     */
    marcarTodasComoLeidas(usuarioId: number): Observable<any> {
        return this.http.put(`${this.apiUrl}/notifications/marcar_todas_leidas/${usuarioId}`, {});
    }

}