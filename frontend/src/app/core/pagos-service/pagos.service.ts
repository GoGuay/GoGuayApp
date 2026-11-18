import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_URL_BASE } from 'src/app/models/constantes/constantes.model';

@Injectable({
  providedIn: 'root',
})
export class PagosService {
  private apiUrl = API_URL_BASE;

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token') || '';
    return new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    });
  }

  /**
   * Crea una orden en PayPal con intención AUTHORIZE para retener el importe del viaje.
   */
  crearOrdenPaypal(viajeId: number, pasajeroId: number): Observable<any> {
    return this.http
      .post<any>(
        `${this.apiUrl}/pagos/create-order`,
        {
          viaje_id: viajeId,
          pasajero_id: pasajeroId,
        },
        { headers: this.getAuthHeaders() }
      )
      .pipe(catchError(this.handleError));
  }

  /**
   * Autoriza/retiene los fondos tras aprobar en el popup de PayPal
   * y guarda el authorization_id y paypal_payer_id en base de datos.
   */
  autorizarOrdenPaypal(orderId: string, guardarMetodo: boolean = true): Observable<any> {
    return this.http
      .post<any>(
        `${this.apiUrl}/pagos/capture-order/${orderId}`,
        { guardar_metodo: guardarMetodo },
        { headers: this.getAuthHeaders() }
      )
      .pipe(catchError(this.handleError));
  }

  /**
   * Ejecuta la captura definitiva del dinero retenido (cuando el conductor acepta o finaliza el viaje).
   */
  capturarPagoRetenido(viajeId: number, pasajeroId: number): Observable<any> {
    return this.http
      .post<any>(
        `${this.apiUrl}/pagos/capturar-retenido`,
        {
          viaje_id: viajeId,
          pasajero_id: pasajeroId,
        },
        { headers: this.getAuthHeaders() }
      )
      .pipe(catchError(this.handleError));
  }

  /**
   * Solicita una transferencia bancaria (IBAN) o desembolso al conductor.
   */
  solicitarTransferenciaBancaria(usuarioId: number, importe: number, iban: string): Observable<any> {
    return this.http
      .post<any>(
        `${this.apiUrl}/pagos/transferencia-bancaria`,
        {
          usuario_id: usuarioId,
          importe,
          iban,
        },
        { headers: this.getAuthHeaders() }
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error en PagosService:', error);
    return throwError(() => error);
  }
}
