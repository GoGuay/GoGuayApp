import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleServices {
  private apiUrl = 'http://127.0.0.1:5000';
  // private geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
  // private apiKey = 'AIzaSyD2GJTw7EJR95V_4UQj_zIOTHw_RVGvkOM';

  constructor(private http: HttpClient) {}

  obtenerLocalidad(localidad: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/apigoogle/buscar_localidad?q=${localidad}`).pipe(
      catchError((error) => {
        console.error('Error al obtener la localidad:', error);
        throw error;
      }),
    );
  }

  /**
   * Función para detectar el idioma en el que viene un texto
   * Creamos una variable body que es un objeto que contiene un atributo (texto) y se le asigna un valor (idiomaDetectado)
   * return: llama al servicio del backend y le pasa el objeto al backend en formato json.
   * pipe:  conecta con el backend por si en algún momento se recibe un error y se captura con el catchError
   * @param idiomaDetectado --> es el texto completo del que se quiere detectar el idioma
   * @returns 'es' || 'en'
   */
  detectarIdiomaTexto(idiomaDetectado: string): Observable<string> {
    const body = { texto: idiomaDetectado };
    return this.http.post<any>(`${this.apiUrl}/apigoogle/detectar_idioma`, body).pipe(
      catchError((error) => {
        console.error('Error al obtener el idioma:', error);
        throw error;
      }),
    );
  }

  /**
   * Función para traducir el texto del que hemos detectado el idioma.
   * Creamos una variable body que es un objeto que contiene 3 atributos que son:
   *    texto (recibe textoUsuario en parametros), idioma_destino (recibe idem), idioma_origen (recibe idem).
   * return: llama al servicio del backend y le pasa el objeto al backend en formato json.
   * pipe:  conecta con el backend por si en algún momento se recibe un error y se captura con el catchError
   * @param textoUsuario: es un string que recibe el texto que se quiere traducir
   * @param idioma_destino: string que recibe el idioma al que traducir.
   * @param idioma_origen: string que recibe el idioma en el que está el texto.
   * @returns devuelve un objeto con el texto traducido (esto se ve en la función del backend)
   */

  traducirIdiomaTexto(textoUsuario: string, idioma_destino: string, idioma_origen: string): Observable<any> {
    const body = {
      texto: textoUsuario,
      idioma_destino: idioma_destino,
      idioma_origen: idioma_origen,
    };
    return this.http.post<any>(`${this.apiUrl}/apigoogle/traducir_texto`, body).pipe(
      catchError((error) => {
        console.error('Error al traducir el texto:', error);
        throw error;
      }),
    );
  }

  // reverseGeocode(lat: number, lng: number): Observable<any> {
  //   const url = `${this.geocodeUrl}?latlng=${lat},${lng}&key=${this.apiKey}`;
  //   return this.http.get<any>(url);
  // }
}
