export interface Mensaje {
  id?: number;
  emisor_id: number;
  receptor_id: number;
  conversacion_id: number;
  texto: string;
  fecha?: string;
  viaje_id: number | null; // Agregado para relacionar el mensaje con un viaje específico
}