export interface Evento {
  id: number;
  nombre_evento: string;
  ciudad: string;
  fecha_inicio: string;
  fecha_fin: string;
  descripcion: string;
  imagen: string;
  enlace_info?: string;
}
