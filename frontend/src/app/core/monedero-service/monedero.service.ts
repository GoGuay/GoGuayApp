import { Usuario } from './../../models/user/usuario.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { API_URL_BASE, PAYPAL_CLIENT_ID, PAYPAL_REDIRECT_URI } from '../../models/constantes/constantes.model';

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

  private readonly PAYPAL_CLIENT_ID = PAYPAL_CLIENT_ID;
  private readonly PAYPAL_SANDBOX = true; // Cambiar a false en producción

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
  }

  transferenciaSaldoMonedero(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/monedero/transferencia_desde_monedero/${id}`);
  }

  /**
   * Función para crear una orden de PayPal para la recarga del monedero.
   * @param cantidad Cantidad en euros que el usuario desea recargar.
   * @returns Observable con los datos de la orden de PayPal (incluyendo approve_url).
   */
  crearOrdenMonedero(cantidad: number): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/monedero/create-wallet-order`, { cantidad }, { headers: this.getAuthHeaders() })
      .pipe(
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
    return this.http
      .post<any>(`${this.apiUrl}/monedero/capture-wallet-order/${orderId}`, {}, { headers: this.getAuthHeaders() })
      .pipe(
        map((response) => response),
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
    return this.http
      .get<any>(`${this.apiUrl}/monedero/saldo-actual`, { headers: this.getAuthHeaders() })
      .pipe(
        catchError((error) => {
          console.error('Error al obtener el saldo del monedero:', error);
          return throwError(() => error);
        })
      );
  }

  obtenerMovimientosMonedero(usuarioId: number): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/monedero/obtener-movimientos-monedero/${usuarioId}`, { headers: this.getAuthHeaders() })
      .pipe(
        catchError((error) => {
          console.error('Error al obtener los movimientos del monedero:', error);
          return throwError(() => error);
        })
      );
  }

  /**
   * Construye la URL de autorización OAuth 2.0 de PayPal para enlazar la cuenta del usuario.
   * @param redirectUrl URL de retorno de la aplicación (sin query params).
   */
  obtenerUrlAutorizacionPaypal(): string {
    const baseUrl = this.PAYPAL_SANDBOX
      ? 'https://www.sandbox.paypal.com/connect'
      : 'https://www.paypal.com/connect';


    const redirectUri = encodeURIComponent(PAYPAL_REDIRECT_URI);
    const scope = encodeURIComponent('openid email profile');

    return `${baseUrl}?flowEntry=static&client_id=${this.PAYPAL_CLIENT_ID}&response_type=code&scope=${scope}&redirect_uri=${redirectUri}&state=paypal_link`;
  }

  /**
   * Envía el código de autorización OAuth devuelto por PayPal al backend para vincular la cuenta.
   * @param usuarioId ID del usuario logueado.
   * @param code Código de autorización OAuth recibido en la URL.
   * @param redirectUri URL de retorno utilizada en la petición inicial.
   */
  vincularCuentaPaypal(usuarioId: number, payerId: string, emailPaypal: string): Observable<any> {
    return this.http
      .post<any>(
        `${this.apiUrl}/monedero/vincular-paypal`,
        {
          usuario_id: usuarioId,
          payer_id: payerId,
          email_paypal: emailPaypal,
        },
        { headers: this.getAuthHeaders() }
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al vincular la cuenta de PayPal:', error);
          return throwError(() => error);
        })
      );
  }

  /**
   * Desvincula la cuenta de PayPal asociada al perfil del usuario.
   * @param usuarioId ID del usuario logueado.
   */
  desvincularCuentaPaypal(usuarioId: number): Observable<any> {
    return this.http
      .post<any>(
        `${this.apiUrl}/monedero/desvincular-paypal`,
        { usuario_id: usuarioId },
        { headers: this.getAuthHeaders() }
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al desvincular la cuenta de PayPal:', error);
          return throwError(() => error);
        })
      );
  }
}