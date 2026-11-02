import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FuncionesComunes } from '../core/funciones-comunes/funciones-comunes.service';
import { MessageService } from 'primeng/api';

/**
 * Guard para verificar si el usuario está logueado antes de acceder a rutas
 */
export const AuthGuard: CanActivateFn = (route, state) => {
  const funcionesComunes = inject(FuncionesComunes);
  const router = inject(Router);
  const messageService = inject(MessageService);

  if (funcionesComunes.isUserLoggedIn()) {
    return true;
  }

  messageService.add({
    key: 'home-toast',
    severity: 'warn',
    summary: 'Acceso restringido',
    detail: 'Debes iniciar sesión para acceder a esta función de GoGuay.',
    life: 4000
  });

  return router.createUrlTree(['/login'], {
    queryParams: { returnUrl: state.url }
  });
};