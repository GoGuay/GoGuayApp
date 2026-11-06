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

  constructor(private http: HttpClient) { }

  /**
   * Obtiene la lista completa de incidencias del usuario
   * GET /api/incidencias/usuario/:id
   */
  obtenerIncidenciasUsuario(usuarioId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/incidencias/usuario/${usuarioId}`);
  }

  /**
   * Registra una nueva incidencia en el sistema
   * POST /api/incidencias/crear
   */
  crearIncidencia(payload: IncidenciaPayload): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/incidencias/crear`, payload);
  }

  /**
   * Añade una respuesta al hilo de seguimiento de la incidencia
   * POST /api/incidencias/:id/mensajes
   */
  enviarMensajeIncidencia(incidenciaId: number, emisorId: number, mensaje: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/incidencias/${incidenciaId}/mensajes`, {
      emisor_id: emisorId,
      mensaje: mensaje
    });
  }

  /**
   * Sube una imagen o documento adjunto asociado a la incidencia
   * POST /api/incidencias/:id/adjuntos
   */
  subirAdjunto(incidenciaId: number, archivo: File): Observable<any> {
    const formData = new FormData();
    formData.append('archivo', archivo);
    return this.http.post<any>(`${this.apiUrl}/incidencias/${incidenciaId}/adjuntos`, formData);
  }

  /**
   * Modifica el estado de una incidencia (FINALIZADA, CANCELADA, EN_REVISION)
   * PATCH /api/incidencias/:id/estado
   */
  cambiarEstadoIncidencia(
    incidenciaId: number,
    nuevoEstado: EstadoIncidencia,
    motivoCancelacion?: TipoCancelacionIncidencia | string,
    resolucionNotas?: string
  ): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/incidencias/${incidenciaId}/estado`, {
      nuevo_estado: nuevoEstado,
      motivo_cancelacion: motivoCancelacion || null,
      resolucion_notas: resolucionNotas || null
    });
  }

  /**
   * Cancela la incidencia a petición del usuario
   */
  cancelarIncidenciaPorUsuario(incidenciaId: number): Observable<any> {
    return this.cambiarEstadoIncidencia(incidenciaId, 'CANCELADA', 'POR_USUARIO');
  }
}