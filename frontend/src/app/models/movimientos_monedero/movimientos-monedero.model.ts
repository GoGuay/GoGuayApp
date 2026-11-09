export interface MovimientosMonedero {
  id?: number;
  monedero_id?: number;
  fecha: string | Date;
  concepto: string;
  cantidad: number;
  saldo_anterior: number;
  saldo_actual: number;
  referencia_id?: string;
}
