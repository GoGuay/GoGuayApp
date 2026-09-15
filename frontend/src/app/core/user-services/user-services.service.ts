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
export class UserServicesService {
  private apiUrl = API_URL_BASE;
  userData: Usuario = {} as Usuario;

  /**
   * usuarioDataSubject --> es privado, usado para guardar temporalmente datos del usuario
   * BehaviorSubject --> mantiene el último valor emitido y lo emite a cualquiera que esté suscrito a él.
   */
  private usuarioDataSubject = new BehaviorSubject<any>(null);

  /**
   * Versión pública como observable, que cualquier componente puede suscribirse a para recibir cambios sin poder modificarlos directamente.
   */
  usuarioData$ = this.usuarioDataSubject.asObservable();

  /**
   * usuarioSource --> es otro BehaviorSubject para almacenar el usuario logueado actual
   * Se inicializa con los datos guardados en el localStorage bajo la clave 'userData' si existen o 'null' si no hay datos
   */
  private getInitialUser(): Usuario['usuario'] | null {
    const data = localStorage.getItem('userData');
    if (!data) return null;
    try {
      const parsed = JSON.parse(data);
      if (parsed?.usuario) {
        return parsed.usuario;
      } else if (parsed?.id) {
        return parsed;
      }
      return null;
    } catch (e) {
      console.error('Error al parsear userData inicial:', e);
      return null;
    }
  }

  private usuarioSource = new BehaviorSubject<Usuario['usuario'] | null>(this.getInitialUser());

  /**
   * usuario$ es la versión pública observable para suscribirse desde cualquier componente
   */
  usuario$ = this.usuarioSource.asObservable();

  /**
   * usuarioActualizado --> es un objeto parcial con los cambios (puede contener solo algunos cambios)
   * ...usuarioActual --> guarda una copia de lo que contiene para no perder los cambios
   * this.usuarioSource.next(nuevoUsuario): --> emite el usuario actuaizado a todos los suscriptores de usuario$. Actualiza tambien userData.usuario y localStorage
   */
  actualizarEstadoUsuario(usuarioActualizado: Partial<Usuario['usuario']>) {
    const usuarioActual = this.usuarioSource.getValue() || ({} as Usuario['usuario']);
    const nuevoUsuario = { ...usuarioActual, ...usuarioActualizado };
    this.usuarioSource.next(nuevoUsuario);
    this.userData.usuario = nuevoUsuario;
    localStorage.setItem('userData', JSON.stringify(this.userData));
  }

  private usuariosCache: Usuario[] = [];

  constructor(private http: HttpClient) {}

  /**
   * Para guardar de forma temporal los datos que haya introducido el usuario durante el registro
   * @param data
   */
  setUsuarioData(data: any) {
    if (!data) {
      localStorage.removeItem('userData');
      this.usuarioDataSubject.next(null);
      this.usuarioSource.next(null);
      this.userData = {} as Usuario;
      return;
    }
    const usuarioFinal = data.usuario ? data.usuario : data;
    const objetoParaGuardar = data.usuario ? data : { usuario: data };

    localStorage.setItem('userData', JSON.stringify(objetoParaGuardar));
    this.usuarioDataSubject.next(objetoParaGuardar);
    this.usuarioSource.next(usuarioFinal);
    this.userData = objetoParaGuardar as Usuario;
  }

  /**
   * Obtiene los datos que haya temporales guardados en usuarioDataSubject
   * @returns
   */
  getUsuarioData() {
    return this.usuarioDataSubject.getValue();
  }

  /**
   * Función para obtener los usuarios registrados.
   * @returns Observable de una lista de usuarios.
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
    );
  }

  /**
   * Función para obtener un usuario por su ID.
   * @param usuarioId Recibe el id del usuario seleccionado.
   * @returns Observable del objeto Usuario.
   */
  obtenerUsuarioPorID(usuarioId: number): Observable<any> {
    const token = localStorage.getItem('access_token');
    console.log('Token: ', token);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(`${this.apiUrl}/user/obtener_usuario_por_id/${usuarioId}`, { headers });
  }

  obtenerUsuarioPorID_busqueda_viajes(usuarioId: number): Observable<any> {
    return this.http.get<Usuario>(`${this.apiUrl}/user/obtener_usuario_por_id_busqueda_viajes/${usuarioId}`);
  }

  /**
   * Función para actualizar datos genéricos del usuario (como las preferencias).
   * @param usuarioId ID del usuario a actualizar.
   * @param datos Objeto con los campos a cambiar (ej: { preferencias: ['Hablar', 'Dormir'] }).
   * @returns Observable con el usuario actualizado.
   */
  actualizarUsuario(usuarioId: number, datos: Partial<Usuario['usuario']>): Observable<Usuario['usuario']> {
    return this.http.put<Usuario['usuario']>(`${this.apiUrl}/user/editarusuario/${usuarioId}`, datos).pipe(
      map((usuarioActualizado) => {
        // Sincronizamos el estado reactivo de la aplicación
        this.actualizarEstadoUsuario(usuarioActualizado);
        return usuarioActualizado;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error al actualizar datos del usuario: ', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Función para realizar login.
   * @param email Email del usuario.
   * @param password Contraseña del usuario.
   * @returns Observable con los datos del usuario.
   */
  login(email: string, password: string): Observable<LoginResponse> {
    const loginData = { email, password };

    return this.http.post<LoginResponse>(`${this.apiUrl}/user/login`, loginData).pipe(
      tap((response) => {
        console.log('Respuesta del login normal:', response);
        if (response && response.access_token) {
          localStorage.setItem('access_token', response.access_token);

          if (response.refresh_token) {
            localStorage.setItem('refresh_token', response.refresh_token);
          }

          console.log('Token detectado y guardado en localStorage');
        }
      })
    );
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
   * Función para comprobar si el correo electrónico ya existe en el proceso de registro
   * @param email
   * @returns true / false
   */
  verificarEmailExistente(email: string): Observable<boolean> {
    const url = `${this.apiUrl}/user/verificar-email-existente?email=${encodeURIComponent(email)}`;
    return this.http.get<{ existe: boolean }>(url).pipe(map((response) => response.existe));
  }

  /**
   * Función para comprobar si el telefono ya existe en el proceso de registro
   * @param telefono
   * @returns
   */
  verificarTelefonoExistente(telefono: string): Observable<boolean> {
    const url = `${this.apiUrl}/user/verificar-telefono-existente?telefono=${encodeURIComponent(telefono)}`;
    return this.http.get<{ existe: boolean }>(url).pipe(map((response) => response.existe));
  }

  /**
   * Función para eliminar un usuario.
   * @param id ID del usuario a eliminar.
   * @returns Observable con la respuesta del backend.
   */
  eliminarUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/user/eliminar_usuario/${id}`);
  }

  /**
   * .put --> llama al backend para actualizar la fotoerfil
   * Recibe una respuesta con resultado con url y publicId de la nueva imagen
   * Llama a "actualizarEstadoUsuario" con el nuevo campo fotoPerfil. Esto actualiza usuario$ (cualquiera componente suscrito ve la nueva foto), userData.usuario (copia local) y localStorage.
   * Devuelve el resultado del backend para usarlo en el componente (por eso el ngOnInit ya refleja la nueva foto sin recargar la pagina)
   */
  actualizarImagenPerfil(usuarioId: number, imagenPerfil: FormData): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/actualizar_imagen_perfil/${usuarioId}`, imagenPerfil).pipe(
      map((resultado: any) => {
        // Actualiza el BehaviorSubject con la nueva foto
        const usuarioActualizado: Partial<Usuario['usuario']> = {
          ...this.userData.usuario, // solo el objeto interno
          fotoPerfil: resultado.url,
          fotoPublicId: resultado.publicId,
        };

        this.actualizarEstadoUsuario(usuarioActualizado);
        return resultado;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error al actualizar la imagen de perfil: ', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * .delete --> llama al backend para eliminar la foto
   * Cuando termina llama a 'actualizarEstadoUsuario' con fotoPerfil: undefined y fotoPublicId: undefined
   * Esto provoca que usuario$ emita la versión actualizada del usuario (sin foto) y que cualquer componente suscrito (como el navbar) se actualice automaticamente
   * catchError: manejo de errores.
   */
  eliminarFotoPerfil(usuarioId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/user/eliminar_imagen_perfil/${usuarioId}`).pipe(
      map(() => {
        // Actualiza fotoPerfil y fotoPublicId a undefineduser
        this.actualizarEstadoUsuario({
          fotoPerfil: undefined,
          fotoPublicId: undefined,
        });
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error al eliminar la foto de perfil: ', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Función para actualizar la imagen de cabecera de un usuario.
   * @param usuarioId ID del usuario cuyo perfil se quiere actualizar.
   * @param imagenCabecera FormData con la imagen de cabecera.
   * @returns Observable con la respuesta del backend.
   */
  actualizarImagenCabecera(usuarioId: number, imagenCabecera: FormData): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/actualizar_imagen_cabecera/${usuarioId}`, imagenCabecera).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error al actualizar la imagen de cabecera: ', error);
        return throwError(error);
      })
    );
  }
  // Función para editar los cambios en la info personal del usuario
  editarDatosUsuario(usuarioId: number, userData: any): Observable<any> {
    const datosAActualizar = {};
    return this.http.put(`${this.apiUrl}/user/editarusuario/${usuarioId}`, userData);
  }

  /**
   * Función para el envío de mail de verificación del correo.
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
    return this.http.post(`${this.apiUrl}/user/verificar_email`, { token }).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }

  enviar_sms(telefono: string) {
    return this.http.post(`${this.apiUrl}/user/enviar_sms`, { telefono });
  }

  verificar_codigo_sms(codigo: string, telefono: string) {
    return this.http.post(`${this.apiUrl}/user/verificar_codigo`, {
      codigo,
      telefono,
    });
  }

  /**
   * Verificar contraseña actual del usuario
   * @param id
   * @param password
   * @returns
   */
  verificar_pw_actual(id: number, password: string) {
    return this.http.post<{ isValid: boolean }>(
      `${this.apiUrl}/user/comprobarpwactual`,
      {
        id,
        password,
      },
      {
        headers: { 'X-Skip-Interceptor': 'true' },
      }
    );
  }

  /**
   * Cambio password DESDE LA VENTANA DE AJUSTES
   * @param id
   * @param nuevaPassword
   * @returns
   */

  cambio_pw(id: number, nuevaPassword: string) {
    return this.http.put(`${this.apiUrl}/user/cambiopassword/${id}`, {
      password: nuevaPassword,
    });
  }

  /**
   * Función para el envío de mail de cambio de contraseña.
   * @param email
   * @returns
   */
  enviar_email_resetpassword(email: string): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/user/enviar_email_resetpassword`,
      { email: email },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  cambiar_pw_solicitado(token: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/restablecerpassword`, {
      token,
      password,
    });
  }

  comprobar_token(token: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/comprobacion_token`, {
      params: { token },
    });
  }

  /**
   * Función para autenticar con Google.
   * Envía el token recibido desde el SDK de Google al servidor para verificar/crear la sesión.
   * @param idToken Token JWT entregado por Google en el cliente.
   * @returns Observable con los datos de respuesta del backend.
   */
  loginConGoogle(idToken: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.apiUrl}/user/google-login`, {
        token: idToken,
      })
      .pipe(
        tap((response) => {
          console.log('Respuesta del login google:', response);

          if (response && response.access_token) {
            localStorage.setItem('access_token', response.access_token);
            if (response.refresh_token) {
              localStorage.setItem('refresh_token', response.refresh_token);
            }
            if (response.usuario) {
              this.setUsuarioData({ usuario: response.usuario });
            }
          }
        }),
        catchError((error: HttpErrorResponse) => {
          console.error('Error al realizar login con Google:', error);
          return throwError(() => error);
        })
      );
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
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(
      `${this.apiUrl}/user/create-wallet-order`,
      { cantidad },
      { headers }
    ).pipe(
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
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(
      `${this.apiUrl}/user/capture-wallet-order/${orderId}`,
      {},
      { headers }
    ).pipe(
      map((response) => {
        // Opcional: si quieres actualizar el estado del usuario o emitir algo si es necesario
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error al capturar la orden de recarga del monedero:', error);
        return throwError(() => error);
      })
    );
  }
}
