import {
  HttpInterceptorFn,
  HttpClient,
  HttpErrorResponse,
  HttpBackend,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, switchMap, throwError, retry } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const httpBackend = inject(HttpBackend);
  const token = localStorage.getItem('access_token');
  let authReq = req;

  // 2. Si el token existe, clonamos la petición y añadimos el header
  if (token) {
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        const refreshToken = localStorage.getItem('refresh_token');
        if (!refreshToken) {
          localStorage.clear();
          router.navigate(['/login']);
          return throwError(() => error);
        }
        const anonymousHttp = new HttpClient(httpBackend);
        const URL_REFRESH = 'http://localhost:5000/api/users/refresh';

        return anonymousHttp
          .post<{
            access_token: string;
          }>(
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
              localStorage.clear();
              router.navigate(['/login']);
              return throwError(() => refreshErr);
            }),
          );
      }
      return throwError(() => error);
    }),
  );
};
