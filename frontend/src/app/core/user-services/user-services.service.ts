import { Usuario } from './../../models/user/usuario.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { BehaviorSubject, catchError, map, Observable, of, throwError } from 'rxjs';
import { Monedero } from 'src/app/models/user/monedero.model';

@Injectable({
  providedIn: 'root',
})
export class UserServicesService {
  private apiUrl = 'http://127.0.0.1:5000';
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
  // Cambia la inicialización por una función más segura
  private getInitialUser(): Usuario['usuario'] | null {
    const data = localStorage.getItem('userData');
    if (!data) return null;
    try {
      const parsed = JSON.parse(data);
      return parsed?.usuario || null;
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
    this.usuarioSource.next(nuevoUsuario); // <--- aquí se emite un nuevo objeto
    this.userData.usuario = nuevoUsuario; // actualizar localStorage también
    localStorage.setItem('userData', JSON.stringify(this.userData));
  }

  monedero: any = null;

  private usuariosCache: Usuario[] = [];

  constructor(private http: HttpClient) { }

  /**
   * Para guardar de forma temporal los datos que haya introducido el usuario durante el registro
   * @param data
   */
  setUsuarioData(data: any) {
    this.usuarioDataSubject.next(data);
    if (data === null) {
      this.usuarioSource.next(null);
      this.userData = {} as Usuario;
    } else if (data.usuario) {
      this.usuarioSource.next(data.usuario);
    }
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
      }),
    );
  }

  /**
   * Función para obtener un usuario por su ID.
   * @param usuarioId Recibe el id del usuario seleccionado.
   * @returns Observable del objeto Usuario.
   */
  obtenerUsuarioPorID(usuarioId: number): Observable<any> {
    return this.http.get<Usuario>(`${this.apiUrl}/user/obtener_usuario_por_id/${usuarioId}`);
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
      }),
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
      }),
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
      }),
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
      },
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
      catchError(() => of(false)),
    );
  }

  enviar_sms(telefono: string) {
    return this.http.post(`${this.apiUrl}/user/enviar_sms`, { telefono });
  }

  verificar_codigo_sms(codigo: string, phone_number: string) {
    return this.http.post(`${this.apiUrl}/user/verificar_codigo`, {
      codigo,
      phone_number,
    });
  }

  // Función para verificar el documento del usuario.
  verificar_documento(id: number, documento: string) {
    return this.http.post(`${this.apiUrl}/user/verificar_documento/${id}`, { numero_documento: documento });
  }

  fotoDocumentoDelantera(imagen: FormData, usuarioId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/subirfoto_documentodelantera/${usuarioId}`, imagen).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error al actualizar la foto delantera de documento');
        return throwError(error);
      }),
    );
  }

  fotoDocumentoTrasera(imagen: FormData, usuarioId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/subirfoto_documentotrasera/${usuarioId}`, imagen).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error al actualizar la foto delantera de documento');
        return throwError(error);
      }),
    );
  }

  fotoCarnetDelantera(imagen: FormData, usuarioId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/subirfoto_carnetdelantera/${usuarioId}`, imagen).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error al actualizar la foto delantera del carnet');
        return throwError(error);
      }),
    );
  }

  fotoCarnetTrasera(imagen: FormData, usuarioId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/subirfoto_carnettrasera/${usuarioId}`, imagen).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error al actualizar la foto trasera del carnet');
        return throwError(error);
      }),
    );
  }

  // Verificar contraseña actual del usuario
  verificar_pw_actual(id: number, password: string) {
    return this.http.post<{ isValid: boolean }>(`${this.apiUrl}/user/comprobarpwactual`, {
      id,
      password,
    });
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
      },
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

  /* Cargar el monedero del usuario logueado.
   * @returns Observable con los datos del monedero.
   */
  cargarMonedero(usuarioId: number): Observable<Monedero> {
    if (!usuarioId) {
      return throwError(() => new Error('Usuario no definido'));
    }
    return this.http.get<Monedero>(`${this.apiUrl}/user/obtener_datos_monedero/${usuarioId}`).pipe(
      map((monedero) => {
        this.monedero = monedero;
        return monedero;
      }),
      catchError((error) => {
        console.error('Error al cargar el monedero:', error);
        return throwError(() => error);
      }),
    );
  }

  /**
   * Recargar saldo al monedero del usuario logueado.
   * @param cantidad Monto a recargar.
   * @returns Observable con el monedero actualizado.
   */
  recargarSaldo(cantidad: number, usuarioId: number): Observable<Monedero> {
    if (!usuarioId) {
      return throwError(() => new Error('Usuario no definido'));
    }

    const body = {
      usuario_id: usuarioId,
      cantidad,
      concepto: 'Recarga manual',
    };

    return this.http.post<Monedero>(`${this.apiUrl}/user/recargar`, body).pipe(
      map((monedero) => {
        this.monedero = monedero;
        return monedero;
      }),
      catchError((error) => {
        console.error('Error al recargar saldo:', error);
        return throwError(() => error);
      }),
    );
  }

  /**
   * Realizar un pago desde el monedero del usuario logueado.
   * @param cantidad Monto a descontar.
   * @returns Observable con el monedero actualizado.
   */
  pagar(cantidad: number, usuarioId: number): Observable<Monedero> {
    if (!usuarioId) {
      return throwError(() => new Error('Usuario no definido'));
    }

    const body = {
      usuario_id: usuarioId,
      cantidad,
      concepto: 'Pago',
    };

    return this.http.post<Monedero>(`${this.apiUrl}/user/pagar`, body).pipe(
      map((monedero) => {
        this.monedero = monedero;
        return monedero;
      }),
      catchError((error) => {
        console.error('Error al pagar con el monedero:', error);
        return throwError(() => error);
      }),
    );
  }

  /**
   * Función para obtener los movimientos del monedero del usuario logueado.
   * @param usuarioId ID del usuario cuyo monedero se quiere consultar.
   * @returns
   */
  obtenerMovimientos(usuarioId: number): Observable<any[]> {
    if (!usuarioId) {
      return throwError(() => new Error('Usuario no definido'));
    }

    return this.http.get<any[]>(`${this.apiUrl}/user/movimientos/${usuarioId}`).pipe(
      catchError((error) => {
        console.error('Error al obtener movimientos del monedero:', error);
        return throwError(() => error);
      }),
    );
  }
}
