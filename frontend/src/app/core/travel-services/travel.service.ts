import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, switchMap, tap, throwError } from 'rxjs';
import { Viaje } from 'src/app/models/travel/viaje.model';
import { NotificacionesService } from '../notificaciones/notificaciones.service';
import { API_URL_BASE } from 'src/app/models/constantes/constantes.model';

@Injectable({
  providedIn: 'root',
})
export class TravelService {
  private apiUrl = API_URL_BASE;

  //Se declara un espacio en la memoria para almacenar datos referentes al viaje, de forma temporal.
  //Nadie puede ver lo que hay ni cambiar ningún dato.
  //Se inicia con null ya que no se puede inicializar vacío.
  private viajeDataSubject = new BehaviorSubject<any>(null);

  //Indicamos que viajeData$ se va a convertir en un objeto accesible desde otros componentes.
  //Se hace para poder ver los datos que haya del viaje en diferentes ambitos de la aplicación.
  //Pueden ver lo que hay pero hasta aquí no se puede cambiar ningún dato.
  viajeData$ = this.viajeDataSubject.asObservable();

  constructor(
    private http: HttpClient,
    private notificacionesService: NotificacionesService,
  ) { }

  /**
   * Función para guardar temporalmente los datos del viaje.
   * Con la función next guarda los datos del viaje que le hayamos pasado hasta ese momento (data)
   * @param data (datos del viaje)
   */
  setViajeData(data: any) {
    this.viajeDataSubject.next(data);
    localStorage.setItem('tempViaje', JSON.stringify(data));
  }

  getViajeData() {
    let data = this.viajeDataSubject.getValue();
    if (!data) {
      const saved = localStorage.getItem('tempViaje');
      if (saved) {
        data = JSON.parse(saved);
        this.viajeDataSubject.next(data);
      }
    }
    return data;
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

    this.clearTempViaje();
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
      params: { usuario_id: usuarioId.toString() },
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
      }),
    );
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
      viaje_id: viajeId,
    };

    return this.http.post(`${this.apiUrl}/travel/unirse_viaje`, requestBody).pipe(
      catchError((error) => {
        console.error('Error al unirse al viaje:', error);
        return throwError(() => error);
      }),
      // Una vez el usuario se ha unido correctamente, obtenemos los viajes actualizados
      // y notificamos a los suscriptores
      switchMap(() => this.obtenerTodosLosViajes()),
      tap((viajesActualizados) => this.viajeDataSubject.next(viajesActualizados)),
    );
  }

  /**
   * Función para obtener los viajes a los que un usuario se
   * apunta como pasajero.
   *
   * @param id_usuario Recibe el ID del usuario
   * @returns Devuelve la lista de viajes.
   */
  getViajesComoAcompañante(id_usuario: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/travel/viajes_como_acompanante/${id_usuario}`);
  }

  getViaje(viajeID: number) {
    return this.http.get<Viaje>(`${this.apiUrl}/travel/obtener_viaje/${viajeID}`);
  }

  /**
   * Función para eliminar un viaje.
   * @param viajeId ID del viaje que se quiere eliminar.
   * @returns Observable con la respuesta del backend.
   */
  eliminarViaje(viajeId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/travel/eliminar_viaje/${viajeId}`).pipe(
      catchError((error) => {
        console.error('Error al eliminar el viaje:', error);
        return throwError(() => error);
      }),
      switchMap(() => this.obtenerTodosLosViajes()),
      tap((viajesActualizados) => this.viajeDataSubject.next(viajesActualizados)),
    );
  }

  /**
   * Función para que un usuario salga de un viaje.
   *
   * @param viajeId ID del viaje del que el usuario quiere salir.
   * @returns Observable con la respuesta del backend.
   */
  salirDeViaje(viajeId: number): Observable<any> {
    const userDataString = localStorage.getItem('userData');

    if (!userDataString) {
      return throwError(() => new Error('No hay datos de usuario en el almacenamiento local.'));
    }

    const userData = JSON.parse(userDataString);
    const usuarioId = userData.usuario.id;

    return this.http.delete(`${this.apiUrl}/travel/eliminar_pasajero/${viajeId}/${usuarioId}`, { withCredentials: true }).pipe(
      catchError((error) => {
        console.error('Error al salir del viaje:', error);
        return throwError(() => error);
      }),
      switchMap((response: any) => {
        if (response.mensaje === 'Pasajero eliminado correctamente del viaje') {
          // Guarda la notificación si el usuario actual NO es el creador del viaje
          if (response.creador_id !== usuarioId) {
            this.notificacionesService.notificacionPendiente = response.aviso_enviado;
          }
          return this.obtenerTodosLosViajes();
        } else {
          return throwError(() => new Error('No se pudo eliminar el pasajero del viaje.'));
        }
      }),
      tap((viajesActualizados) => this.viajeDataSubject.next(viajesActualizados)),
    );
  }

  obtenerViajesFiltrados(params: any): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(`${this.apiUrl}/travel/viajes_filtrados`, {
      params,
    });
  }

  guardarPuntuacion(puntuacion: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/travel/puntuacion`, puntuacion);
  }

  clearTempViaje() {
    this.viajeDataSubject.next(null);
    localStorage.removeItem('tempViaje');
  }
}
