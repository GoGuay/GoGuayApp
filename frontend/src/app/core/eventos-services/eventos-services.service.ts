import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { API_URL_BASE } from "src/app/models/constantes/constantes.model";
import { Evento } from "src/app/models/eventos/eventos";

@Injectable({ providedIn: 'root' })
export class EventosServices {

    private apiUrl = API_URL_BASE;

    constructor(private http: HttpClient) { }

    /**
     * Función para añadir un nuevo evento.
     * 
     * @param evento --> Recibe el objeto Evento.
     * @returns --> Devuelve el mensaje de confirmación con el evento creado.
     */
    anadirEvento(evento: Evento): Observable<any> {
        return this.http.post(this.apiUrl + '/evento/anadir_evento', evento);
    }

    /**
     * 
     */
    obtenerTodosLosEventos(): Observable<Evento[]> {
        return this.http
            .get<Evento[]>(`${this.apiUrl}/evento/obtener_eventos`)
            .pipe(
                catchError((error) => {
                    console.error('Error al obtener los usuarios registrados:', error);
                    throw error;
                }),
            )
    }


    /**
     * Función para obtener el evento por su id.
     * 
     * @param evento_id --> ID del evento.
     * @returns --> Devuelve el evento.
     */
    obtener_evento_id(evento_id: number) {
        return this.http.get(`${this.apiUrl}/evento/obtener_evento_id?id=${evento_id}`);
    }

    /**
     * Función para editar un evento seleccionado.
     * 
     * @param id_evento --> ID del evento seleccionado.
     * @param evento --> Objeto del evento completo.
     * @returns --> Devuelve el mensaje de confirmación/error.
     */
    editarEvento(id_evento: number, evento: Evento): Observable<any> {
        return this.http.put(`${this.apiUrl}/evento/editar_evento/${id_evento}`, evento)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(() => error);
                })
            );
    }


    /**
     * Función para eliminar un evento seleccionado.
     * 
     * @param id_evento --> ID del evento seleccionado.
     * @param evento --> Objeto del evento completo.
     * @returns --> Devuelve el mensaje de confirmación/error.
     */
    eliminarEvento(id_evento: number, evento: any): Observable<any> {
        return this.http
            .delete(`${this.apiUrl}/evento/eliminar_evento/${id_evento}`, evento)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(() => error);
                })
            )
    }

}