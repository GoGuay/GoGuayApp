import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Coches } from 'src/app/models/vehiculos/marcas_modelos.model';

@Injectable({ providedIn: 'root' })
export class VehiculosServicesService {
  private apiUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) {}

  /**
   * Función para añadir un vehículo a la lista de vehículos del usuario
   * @param vehiculo
   * @returns
   */

  anadirVehiculo(vehiculo: Coches): Observable<any> {
    return this.http.post(this.apiUrl + '/vehicle/anadir_vehiculo', vehiculo);
  }

  /**
   * Para obtener los vehículos de un usuario
   * @param usuario_id
   * @returns
   */
  obtenerVehiculosUsuario(usuario_id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/vehicle/obtenerVehiculos_usuario', {
      params: { usuario_id: usuario_id.toString() },
    });
  }

  /**
   * Función para editar los datos de un vehículo que está en la lista del usuario
   * @param vehiculo_id
   * @param vehiculoData
   * @returns
   */
  editarVehiculo(vehiculo_id: number, vehiculoData: any): Observable<any> {
    return this.http
      .put(`${this.apiUrl}/vehicle/editarVehiculo/${vehiculo_id}`, vehiculoData)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al editar los datos del vehículo', error);
          return throwError(() => error);
        })
      );
  }

  /**
   * Función para eliminar un vehículo de la lista del usuario
   * @param vehiculo_id
   * @param vehiculoData
   * @returns
   */
  eliminarVehiculo(vehiculo_id: number, vehiculoData: any): Observable<any> {
    return this.http
      .delete(
        `${this.apiUrl}/vehicle/eliminarVehiculo/${vehiculo_id}`,
        vehiculoData
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al eliminar el vehículo', error);
          return throwError(() => error);
        })
      );
  }
}
