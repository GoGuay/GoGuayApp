import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coches } from 'src/app/models/vehiculos/marcas_modelos.model';

@Injectable({ providedIn: 'root' })
export class VehiculosServicesService {
  private apiUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) {}

  anadirVehiculo(vehiculo: Coches): Observable<any> {
    return this.http.post(this.apiUrl + '/vehicle/anadir_vehiculo', vehiculo);
  }

  obtenerVehiculosUsuario(usuario_id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/vehicle/obtenerVehiculos_usuario', {
      params: { usuario_id: usuario_id.toString() },
    });
  }
}
