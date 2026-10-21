import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const googleCancelGuard = () => {
  const router = inject(Router);
  const flujoCancelado = localStorage.getItem('google_flow_cancelled');

  if (flujoCancelado) {
    localStorage.removeItem('google_flow_cancelled');
    router.navigateByUrl('/login');
    return false;
  }
  return true;
};
