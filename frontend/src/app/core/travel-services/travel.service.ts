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

  /**
   * Función para obtener los datos del viaje almacenados temporalmente.
   * Primero intenta obtener los datos del viaje del BehaviorSubject.
   * Si no hay datos en el BehaviorSubject, intenta obtenerlos del localStorage (en caso de que se hayan guardado previamente).
   * Si encuentra datos en el localStorage, los parsea y los guarda en el BehaviorSubject para que estén disponibles en toda la aplicación.
   * @returns --> Devuelve los datos del viaje almacenados temporalmente, o null si no hay datos disponibles.
   * Esta función se llama desde el componente de creación/edición de viaje para cargar los datos del viaje que se están editando, o para recuperar los datos del viaje si el usuario ha navegado fuera del componente y luego ha vuelto.
   */
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

  /**
   * Función para obtener los detalles de un viaje específico.
   * @param viajeID --> ID del viaje del que se quieren obtener los detalles.
   * @returns --> Observable con los detalles del viaje solicitado.
   */
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

  /**
   * Función para obtener los viajes filtrados según los criterios de búsqueda.
   * @param params --> Objeto con los parámetros de búsqueda (origen, destino, fecha, etc.)
   * @returns --> Observable con la lista de viajes que cumplen los criterios de búsqueda.
   * Si no se pasan parámetros, devuelve todos los viajes.
   */
  obtenerViajesFiltrados(params: any): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(`${this.apiUrl}/travel/viajes_filtrados`, {
      params,
    });
  }

  /**
   * Función para guardar la puntuación de un viaje.
   * Se utiliza para que los usuarios puedan valorar su experiencia en un viaje después de haberlo realizado.
   * La puntuación se guarda en la Base de Datos y se asocia al viaje y al usuario que la ha dado.
   * @param puntuacion --> Objeto con la información de la puntuación (viaje_id, usuario_id, puntuacion, comentario, etc.)
   * @returns --> Observable con la respuesta del backend después de guardar la puntuación.
   * Esta función se llama desde el componente de valoración de viaje, después de que el usuario haya enviado su valoración.
   */
  guardarPuntuacion(puntuacion: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/travel/puntuacion`, puntuacion);
  }

  /**
   * Función para limpiar los datos del viaje almacenados temporalmente.
   * Elimina los datos del viaje del BehaviorSubject y también del localStorage.
   * Se llama a esta función después de guardar un viaje para asegurarse de que no quedan datos residuales.
   * También se puede llamar si el usuario decide cancelar la creación o edición de un viaje, para limpiar cualquier dato temporal que se haya guardado.
   */
  clearTempViaje() {
    this.viajeDataSubject.next(null);
    localStorage.removeItem('tempViaje');
  }

  /**
   * Función para confirmar un pasajero manualmente (sin aceptar la solicitud de viaje).
   * Esta función se utiliza cuando el creador del viaje quiere confirmar a un pasajero que se ha apuntado al viaje, sin necesidad de que el pasajero haya enviado una solicitud formal o sin necesidad de aceptar la solicitud.
   * Es útil para agilizar el proceso de confirmación en casos donde el creador del viaje ya conoce al pasajero o tiene una relación previa con él.
   * @param viajeId --> ID del viaje del que se quiere confirmar al pasajero.
   * @param pasajeroId --> ID del pasajero que se quiere confirmar.
   * @returns --> Observable con la respuesta del backend y actualización de la lista de viajes.
   */
  confirmarPasajeroManual(viajeId: number, pasajeroId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/travel/confirmar_pasajero_manual`, { viaje_id: viajeId, pasajero_id: pasajeroId }).pipe(
      catchError((error) => {
        console.error('Error al confirmar pasajero manualmente:', error);
        return throwError(() => error);
      }),
      switchMap(() => this.obtenerTodosLosViajes()),
      tap((viajesActualizados) => this.viajeDataSubject.next(viajesActualizados)),
    );  
  }

  /**
   * Función para obtener las solicitudes pendientes de un usuario.
   * @param usuarioId --> ID del usuario del que se quieren obtener las solicitudes pendientes.
   * @returns --> Observable con la lista de viajes a los que el usuario 
   * se ha apuntado pero aún no han sido aceptados o rechazados por el creador del viaje.
   */
  getMisSolicitudesPendientes(usuarioId: number): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(`${this.apiUrl}/travel/mis_solicitudes/${usuarioId}`).pipe(
      catchError((error) => {
        console.error('Error al obtener mis solicitudes:', error);
        return throwError(() => error);
      })
    );
  }
  
  /**
   * Función para cancelar una solicitud manual de un usuario.
   * @param viajeId --> ID del viaje del que se quiere cancelar la solicitud.
   * @returns --> Observable con la respuesta del backend.
   */
  cancelarSolicitudManual(viajeId: number): Observable<any> {
    const userDataString = localStorage.getItem('userData');
    
    if (!userDataString) {
      return throwError(() => new Error('No hay datos de usuario logueado.'));
    }

    const userData = JSON.parse(userDataString);
    const usuarioId = userData.usuario.id;

    return this.http.post(`${this.apiUrl}/travel/cancelar_solicitud_manual`, { 
      viaje_id: viajeId, 
      usuario_id: usuarioId 
    }).pipe(
      catchError((error) => {
        console.error('Error al cancelar solicitud manualmente:', error);
        return throwError(() => error);
      }),
      switchMap(() => this.obtenerTodosLosViajes()),
      tap((viajesActualizados) => this.viajeDataSubject.next(viajesActualizados)),
    );
  }

  /**
   * Función para rechazar un pasajero manualmente.
   * @param viajeId --> ID del viaje del que se quiere rechazar al pasajero.
   * @param pasajeroId --> ID del pasajero que se quiere rechazar.
   * @returns --> Observable con la respuesta del backend.
   */
  rechazarPasajeroManual(viajeId: number, pasajeroId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/travel/rechazar_pasajero_manual`, { 
      viaje_id: viajeId, 
      pasajero_id: pasajeroId 
    }).pipe(
      catchError((error) => {
        console.error('Error al rechazar pasajero:', error);
        return throwError(() => error);
      }),
      switchMap(() => this.obtenerTodosLosViajes()),
      tap((viajesActualizados) => this.viajeDataSubject.next(viajesActualizados))
    );
  }
}
