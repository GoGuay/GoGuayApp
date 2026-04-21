import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // 1. Obtener el token del localStorage
  const token = localStorage.getItem('access_token');

  // 2. Si el token existe, clonamos la petición y añadimos el header
  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    // Enviamos la petición clonada con el token
    return next(cloned);
  }

  // 3. Si no hay token, enviamos la petición original sin tocarla
  return next(req);
};
