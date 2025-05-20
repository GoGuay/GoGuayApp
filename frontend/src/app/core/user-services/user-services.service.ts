import { Usuario } from './../../models/user/usuario.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServicesService {
  private apiUrl = 'http://127.0.0.1:5000';
  userData: Usuario = {} as Usuario;

  private usuariosCache: Usuario[] = [];

  constructor(private http: HttpClient) {}

  /**
   * Función para obtener los usuarios registrados.
   * @returns Observable de una lista de usuarios.
   */
  obtenerUsuarios(): Observable<Usuario[]> {
    if (this.usuariosCache.length > 0) {
      return of(this.usuariosCache);
    }

    return this.http
      .get<Usuario[]>(`${this.apiUrl}/user/obtener_usuarios`)
      .pipe(
        catchError((error) => {
          console.error('Error al obtener los usuarios registrados:', error);
          throw error;
        })
      );
  }

  /**
   * Función para obtener un usuario por su ID.
   * @param usuarioId Recibe el id del usuario seleccionado.
   * @returns Observable del objeto Usuario.
   */
  obtenerUsuarioPorID(usuarioId: number): Observable<any> {
    return this.http.get<Usuario>(
      `${this.apiUrl}/user/obtener_usuario_por_id/${usuarioId}`
    );
  }

  /**
   * Función para realizar login.
   * @param email Email del usuario.
   * @param password Contraseña del usuario.
   * @returns Observable con los datos del usuario.
   */
  login(email: string, password: string): Observable<Usuario> {
    const loginData = { email, password };
    return this.http.post<Usuario>(`${this.apiUrl}/user/login`, loginData);
  }

  /**
   * Función para registrar un nuevo usuario.
   * @param datos Datos del nuevo usuario.
   * @returns Observable de la respuesta del backend.
   */
  registrarUsuario(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/registro`, datos);
  }

  /**
   * Función para eliminar un usuario.
   * @param id ID del usuario a eliminar.
   * @returns Observable con la respuesta del backend.
   */
  eliminarUsuario(id: string): Observable<Usuario> {
    return this.http
      .delete<Usuario>(`${this.apiUrl}/user/eliminar_usuario/${id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al eliminar el usuario: ', error);
          return throwError(error);
        })
      );
  }

  /**
   * Función para actualizar la imagen de perfil de un usuario.
   * @param usuarioId ID del usuario cuyo perfil se quiere actualizar.
   * @param imagenPerfil FormData con la imagen de perfil.
   * @returns Observable con la respuesta del backend.
   */
  actualizarImagenPerfil(
    usuarioId: number,
    imagenPerfil: FormData
  ): Observable<any> {
    return this.http
      .put(
        `${this.apiUrl}/user/actualizar_imagen_perfil/${usuarioId}`,
        imagenPerfil
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al actualizar la imagen de perfil: ', error);
          return throwError(error);
        })
      );
  }

  /**
   * Función para actualizar la imagen de cabecera de un usuario.
   * @param usuarioId ID del usuario cuyo perfil se quiere actualizar.
   * @param imagenCabecera FormData con la imagen de cabecera.
   * @returns Observable con la respuesta del backend.
   */
  actualizarImagenCabecera(
    usuarioId: number,
    imagenCabecera: FormData
  ): Observable<any> {
    return this.http
      .put(
        `${this.apiUrl}/user/actualizar_imagen_cabecera/${usuarioId}`,
        imagenCabecera
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al actualizar la imagen de cabecera: ', error);
          return throwError(error);
        })
      );
  }
  // Función para editar los cambios en la info personal del usuario
  editarDatosUsuario(usuarioId: number, userData: any): Observable<any> {
    const datosAActualizar = {};
    return this.http.put(
      `${this.apiUrl}/user/editarusuario/${usuarioId}`,
      userData
    );
  }

  /**
   * Función para el envío de mail de verificación.
   * @param email
   * @returns
   */
  enviar_email_verif(email: string): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/user/enviar_email`,
      { email: email },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  /**
   * Función para verificar el correo que le ha llegado al usuario.
   * @param token
   * @returns
   */
  verificar_email(token: any): Observable<boolean> {
    return this.http
      .post(`${this.apiUrl}/user/verificar_email`, { token })
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  enviar_sms(telefono: string) {
    return this.http.post(`${this.apiUrl}/user/enviar_sms`, { telefono });
  }

  fotoDocumentoDelantera(imagen: FormData, usuarioId: number): Observable<any> {
    return this.http
      .put(`${this.apiUrl}/user/subirfoto_documento/${usuarioId}`, imagen)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al actualizar la foto delantera de documento');
          return throwError(error);
        })
      );
  }
}
