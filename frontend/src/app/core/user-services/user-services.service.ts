import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Usuario } from 'src/app/models/user/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  private apiUrl = 'http://127.0.0.1:5000';

  private usuariosCache: Usuario[] = [];

  constructor(private http: HttpClient) { }

  /**
   * 
   * @returns 
   */
  obtenerUsuarios(): Observable<Usuario[]> {
    if (this.usuariosCache.length > 0) {
      return of(this.usuariosCache);
    }

    return this.http.get<Usuario[]>(`${this.apiUrl}/user/obtener_usuarios`).pipe(
      catchError((error) => {
        console.error('Error al obtener los usuarios registrados:', error);
        throw error;
      })
    )
  }

  /**
   * Función para obtener un usuario por su ID.
   * 
   * @param usuarioId Recibe el id del usuario seleccionado.
   * @returns Devuelve el objeto de Usuario al que pertenece su ID.
   */
  obtenerUsuarioPorID(usuarioId: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/user/obtener_usuario_por_id/${usuarioId}`);
  }

  
  /**
   * 
   * @param email 
   * @param password 
   * @returns 
   */
  login(email: string, password: string): Observable<Usuario> {
    const loginData = { email, password };
    return this.http.post<Usuario>(`${this.apiUrl}/user/login`, loginData);
  }

  /**
   * 
   * @param datos 
   * @returns 
   */
  registrarUsuario(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/registro`, datos);
  }


  /**
   * Función para eliminar un usuario.
   * 
   * @param id Recibe el id del usuario que se quiere eliminar
   * @returns 
   */
  eliminarUsuario(id: string){
    return this.http.delete<Usuario>(`${this.apiUrl}/user/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error al eliminar el usuario: ', error);
        return throwError(error);
      })
    )
  }

}
