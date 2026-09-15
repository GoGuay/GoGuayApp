import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { API_URL_BASE } from '../../models/constantes/constantes.model';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
  private apiUrl  = API_URL_BASE;

  constructor(private http: HttpClient) { }

  enviarEncuesta(datosFormulario: any, usuarioId?: number): Observable<any> {
    const payload = {
      usuario_id: usuarioId || null,
      recomendacion: datosFormulario.recomendacion,
      sugerencias: datosFormulario.sugerencias,
      aspectos: [
        { nombre: 'diseno', estado: this.getCheckEstado(datosFormulario.positivo0, datosFormulario.negativo0) },
        { nombre: 'busqueda', estado: this.getCheckEstado(datosFormulario.positivo1, datosFormulario.negativo1) },
        { nombre: 'mensajes', estado: this.getCheckEstado(datosFormulario.positivo2, datosFormulario.negativo2) },
        { nombre: 'seguridad', estado: this.getCheckEstado(datosFormulario.positivo3, datosFormulario.negativo3) },
        { nombre: 'normas', estado: this.getCheckEstado(datosFormulario.positivo4, datosFormulario.negativo4) }
      ]
    };

    return this.http.post(this.apiUrl + '/encuesta/', payload);
  }

  private getCheckEstado(pos: boolean, neg: boolean): string {
    if (pos) return 'positivo';
    if (neg) return 'negativo';
    return 'neutro';
  }

  getTodasLasEncuestas(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/encuesta/admin/obtener_encuestas`);
  }
}