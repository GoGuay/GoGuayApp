import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Viaje } from 'src/app/models/travel/viaje.model';

@Injectable({
  providedIn: 'root',
})
export class TravelService {
  private apiUrl = 'http://127.0.0.1:5000';

  private viajeDataSubject = new BehaviorSubject<any>(null);
  viajeData$ = this.viajeDataSubject.asObservable();

  constructor(private http: HttpClient) { }

  /**
   * Función para guardar temporalmente los datos del viaje.
   * @param data
   */
  setViajeData(data: any) {
    this.viajeDataSubject.next(data);
  }

  getViajeData() {
    return this.viajeDataSubject.getValue();
  }

  /**
   * Función para guardar los datos del viaje en la Base de Datos.
   * 
   * @param viajeData 
   * @returns 
   */
  guardarViaje(viajeData: any): Observable<any> {
    const userDataString = localStorage.getItem('userData');

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const usuarioId = userData.usuario.id;

      viajeData.usuario_id = usuarioId;
    }

    return this.http.post(this.apiUrl + '/travel/crear_viaje', viajeData);
  }

  /**
   * Función para obtener los viajes que ha creado un usuario.
   * 
   * @param usuarioId Recibe el id del usuario a consultar.
   * @returns Devuelve la lista de viajes de ese usuario.
   */
  getViajesUsuario(usuarioId: number): Observable<any> {
    return this.http.get(this.apiUrl + '/travel/obtener_viajes_usuario', {
      params: { usuario_id: usuarioId.toString() }
    });
  }

  /**
   * Función para obtener la lista de viajes publicados.
   * 
   * @returns Devuelve la lista de viajes que se han publicado.
   */
  obtenerTodosLosViajes(): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(`${this.apiUrl}/travel/obtener_viajes`).pipe(
      catchError((error) => {
        console.error('Error al obtener la lista de viajes: ', error);
        throw error;
      })
    )
  }

  /**
   * Función para que un usuario se una a un viaje.
   * 
   * @param viajeId ID del viaje al que el usuario quiere unirse.
   * @returns Observable con la respuesta del backend.
   */
  unirseAViaje(viajeId: number): Observable<any> {
    const userDataString = localStorage.getItem('userData');

    if (!userDataString) {
      return throwError(() => new Error('No hay datos de usuario en el almacenamiento local.'));
    }

    const userData = JSON.parse(userDataString);
    const usuarioId = userData.usuario.id;

    const requestBody = {
      usuario_id: usuarioId,
      viaje_id: viajeId
    };

    return this.http.post(`${this.apiUrl}/travel/unirse_viaje`, requestBody).pipe(
      catchError((error) => {
        console.error('Error al unirse al viaje:', error);
        return throwError(() => error);
      })
    );
  }


  /**
   * Función para obtener los viajes a los que un usuario se 
   * apunta como pasajero.
   * 
   * @param id_usuario Recibe el ID del usuario
   * @returns Devuelve la lista de viajes.
   */
  getViajesDeUsuario(id_usuario: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/travel/viajes_del_usuario/${id_usuario}`);
  }


  getViaje(viajeID: number) {
    return this.http.get<Viaje>(`travel/viajes/${viajeID}`);
  }

}
