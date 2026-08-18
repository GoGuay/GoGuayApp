import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserServicesService } from '../core/user-services/user-services.service';

@Injectable({
  providedIn: 'root',
})
export class TokenValidGuard implements CanActivate {
  constructor(
    private userService: UserServicesService,
    private router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    const token = route.paramMap.get('token') || '';

    return this.userService.comprobar_token(token).pipe(
      map((res: any) => {
        if (res?.mensaje === 'Token válido') {
          return true;
        } else if (res?.error === 'Token expirado') {
          return this.router.createUrlTree(['/token-expirado']);
        } else if (res?.error === 'Token ya utilizado') {
          return this.router.createUrlTree(['/token-ya-usado']);
        } else {
          return this.router.createUrlTree(['/']);
        }
      }),
      catchError(() => of(this.router.createUrlTree(['/token-expirado']))),
    );
  }
}
