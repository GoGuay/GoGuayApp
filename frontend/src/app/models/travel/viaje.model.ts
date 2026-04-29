import { Usuario } from "../user/usuario.model";

export interface Viaje {
  id: number;
  origen: string;
  destino: string;
  plazas: number;
  hora_salida: string;
  hora_llegada: string;
  fecha_salida: string;
  duracion_viaje: string;
  precio_viaje?: number;
  ruta_seleccionada?: any;
  estado_viaje?: 'Pendiente' | 'En curso' | 'Finalizado' | 'Cancelado';
  usuario_id: number;
  created_at: string;
  usuario?: any; 
  usuario_creador?: any;
  acompanantes?: any;
  notificaciones?: any;
  preferencias?: [];
  reserva_automatica?: boolean;
  estado_solicitud_propia?: 'pendiente' | 'aceptado' | 'rechazado' | null;
  solicitudes_pendientes?: any[] | undefined;
}
