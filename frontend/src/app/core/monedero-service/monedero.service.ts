import { Usuario } from './../../models/user/usuario.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, throwError } from 'rxjs';
import { API_URL_BASE } from '../../models/constantes/constantes.model';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface LoginResponse {
  access_token: string;
  refresh_token?: string;
  usuario: any;
}

@Injectable({
  providedIn: 'root',
})
export class MonederoService {
  private apiUrl = API_URL_BASE;
  userData: Usuario = {} as Usuario;

  constructor(private http: HttpClient) {}

  transferenciaSaldoMonedero(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/monedero/transferencia_desde_monedero/${id}`);
  }

  /**
   * Función para crear una orden de PayPal para la recarga del monedero.
   * @param cantidad Cantidad en euros que el usuario desea recargar.
   * @returns Observable con los datos de la orden de PayPal (incluyendo approve_url).
   */
  crearOrdenMonedero(cantidad: number): Observable<any> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(`${this.apiUrl}/monedero/create-wallet-order`, { cantidad }, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error al crear la orden de recarga del monedero:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Función para capturar y confirmar el pago de la recarga del monedero en PayPal.
   * @param orderId ID de la orden de PayPal devuelto tras la aprobación.
   * @returns Observable con la confirmación de la recarga y el nuevo saldo.
   */
  capturarOrdenMonedero(orderId: string): Observable<any> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(`${this.apiUrl}/monedero/capture-wallet-order/${orderId}`, {}, { headers }).pipe(
      map((response) => {
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error al capturar la orden de recarga del monedero:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Obtiene el saldo actual del monedero del usuario autenticado.
   */
  obtenerSaldoMonedero(): Observable<any> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.get<any>(`${this.apiUrl}/monedero/saldo-actual`, { headers }).pipe(
      catchError((error) => {
        console.error('Error al obtener el saldo del monedero:', error);
        return throwError(() => error);
      })
    );
  }

  obtenerMovimientosMonedero(usuarioId: number): Observable<any> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.get<any>(`${this.apiUrl}/monedero/obtener-movimientos-monedero/${usuarioId}`, { headers }).pipe(
      catchError((error) => {
        console.error('Error al obtener el saldo del monedero:', error);
        return throwError(() => error);
      })
    );
  }
}
