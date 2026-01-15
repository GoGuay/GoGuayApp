// src/app/core/messaging/messaging.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mensaje } from 'src/app/models/mensajes/mensaje.model';

@Injectable({
    providedIn: 'root'
})
export class MessagingService {
    private apiUrl = 'http://127.0.0.1:5000';

    constructor(private http: HttpClient) { }

    // Obtener lista de chats del usuario
    getConversaciones(usuarioId: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/chat/conversaciones/${usuarioId}`);
    }

    // Obtener mensajes de una conversación específica
    getMensajes(conversacionId: number): Observable<Mensaje[]> {
        return this.http.get<Mensaje[]>(`${this.apiUrl}/chat/mensajes/${conversacionId}`);
    }

    // Enviar un nuevo mensaje
    enviarMensaje(mensaje: Mensaje): Observable<Mensaje> {
        return this.http.post<Mensaje>(`${this.apiUrl}/chat/enviar`, mensaje);
    }

    iniciarChat(emisorId: number, receptorId: number): Observable<{ conversacion_id: number }> {
        return this.http.post<{ conversacion_id: number }>(
            `${this.apiUrl}/chat/iniciar/${emisorId}/${receptorId}`,
            {}
        );
    }

    /**
     * Marca como leídos todos los mensajes recibidos en una conversación
     * @param conversacionId ID del chat
     * @param usuarioId ID del usuario que está leyendo (el receptor)
     */
    marcarComoLeido(conversacionId: number, usuarioId: number): Observable<any> {
        return this.http.patch(`${this.apiUrl}/chat/leer/${conversacionId}/${usuarioId}`, {});
    }
}