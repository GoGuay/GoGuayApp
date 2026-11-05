import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL_BASE } from 'src/app/models/constantes/constantes.model';

export type CategoriaIncidencia = 'USUARIO' | 'APP';
export type SubCategoriasIncidencias = 
  | 'PAGO' 
  | 'VIAJE_PRESENCIA_UBICACION' 
  | 'COMPORTAMIENTO' 
  | 'CREACION_VIAJE' 
  | 'ERROR_TECNICO_GENERAL' 
  | 'OTRO';
export type TipoAperturaIncidencia = 'USUARIO' | 'SISTEMA';
export type EstadoIncidencia = 'INICIADA' | 'EN_REVISION' | 'FINALIZADA' | 'CANCELADA';
export type TipoCancelacionIncidencia = 'POR_USUARIO' | 'POR_SISTEMA_NO_PROCEDE';

export interface IncidenciaPayload {
  categoria: CategoriaIncidencia;
  subcategoria: SubCategoriasIncidencias;
  tipo_apertura?: TipoAperturaIncidencia;
  usuario_remitente_id: number;
  usuario_reportado_id?: number | null;
  viaje_id?: number | null;
  resumen: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {
  private apiUrl = API_URL_BASE;

  constructor(private http: HttpClient) {}

  obtenerIncidenciasUsuario(usuarioId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/incidencias/usuario/${usuarioId}`);
  }

  crearIncidencia(payload: IncidenciaPayload): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/incidencias/crear`, payload);
  }

  enviarMensajeIncidencia(incidenciaId: number, emisorId: number, mensaje: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/incidencias/${incidenciaId}/mensajes`, {
      emisor_id: emisorId,
      mensaje: mensaje
    });
  }

  subirAdjunto(incidenciaId: number, archivo: File): Observable<any> {
    const formData = new FormData();
    formData.append('archivo', archivo);
    return this.http.post<any>(`${this.apiUrl}/incidencias/${incidenciaId}/adjuntos`, formData);
  }

  cancelarIncidenciaPorUsuario(incidenciaId: number): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/incidencias/${incidenciaId}/cancelar`, {
      motivo_cancelacion: 'POR_USUARIO'
    });
  }
}