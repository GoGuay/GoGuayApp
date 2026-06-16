import {
  HttpInterceptorFn,
  HttpClient,
  HttpErrorResponse,
  HttpBackend,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, switchMap, throwError } from 'rxjs';

/**
 * Interceptor para añadir el token de autenticación a las solicitudes HTTP
 * 
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const httpBackend = inject(HttpBackend);
  const token = localStorage.getItem('access_token');
  let authReq = req;

  /**
   * Si existe un token de acceso, se clona la solicitud original y se añade el encabezado de autorización con el token.
   */
  if (token) {
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  /**
   * Procesa la solicitud con el token de autenticación o maneja errores de autenticación.
   */
  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 && req.headers.get('X-Skip-Interceptor') === 'true') {
        /**
         * Si la respuesta es 401 y la solicitud tiene el encabezado 'X-Skip-Interceptor', se lanza un error sin intentar refrescar el token.
         * Esta condición se ha añadido para evitar errores en la comprobación de la contraseña actual del usuario, 
         * ya que esta solicitud no requiere autenticación y no debería ser interceptada por el interceptor de autenticación.
         */
        return throwError(() => error);
      }
    
      if (error.status === 401) {
        const refreshToken = localStorage.getItem('refresh_token');
        const rememberMe = localStorage.getItem('remember_me') === 'true';

        if (!refreshToken) {
          limpiarSesionSegura(rememberMe);
          router.navigate(['/login']);
          return throwError(() => error);
        }

        const anonymousHttp = new HttpClient(httpBackend);
        const URL_REFRESH = 'http://localhost:5000/api/users/refresh';

        return anonymousHttp
          .post<{ access_token: string }>(
            URL_REFRESH,
            {},
            { headers: { Authorization: `Bearer ${refreshToken}` } },
          )
          .pipe(
            switchMap((res) => {
              localStorage.setItem('access_token', res.access_token);

              const retryReq = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${res.access_token}`,
                },
              });
              return next(retryReq);
            }),
            catchError((refreshErr) => {
              limpiarSesionSegura(rememberMe);
              router.navigate(['/login']);
              return throwError(() => refreshErr);
            }),
          );
      }
      return throwError(() => error);
    }),
  );
};

/**
 * Limpia los datos de la sesión actual (tokens e info del viaje) 
 * respetando estrictamente las preferencias de "Recordar usuario"
 * 
 */
function limpiarSesionSegura(rememberMe: boolean) {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('userData');
  localStorage.removeItem('rutaSeleccionada'); 

  if (!rememberMe) {
    localStorage.removeItem('remember_me');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  }
}