export interface Mensaje {
  id?: number;
  emisor_id: number;
  receptor_id: number;
  conversacion_id: number;
  texto: string;
  fecha?: string;
}