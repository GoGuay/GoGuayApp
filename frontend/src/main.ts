import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent, HttpLoaderFactory } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {
  NgcCookieConsentModule,
  NgcCookieConsentConfig,
} from 'ngx-cookieconsent';
import { importProvidersFrom } from '@angular/core';
import {
  HttpClient,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { authInterceptor } from './app/core/interceptor/auth.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { IonicModule } from '@ionic/angular';
import { radio } from 'ionicons/icons';

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: '',
  },
  position: 'bottom',
  theme: 'block',
  palette: {
    popup: {
      background: '#B7E0B4',
      text: '#000',
    },
    button: {
      background: '#b3b5e6',
      text: '#000'
    },
  },
  type: 'opt-in',
  content: {
    message:
      'GoGuay utiliza cookies propias con el objetivo de optimizar su visita.',
    allow: 'Aceptar',
    deny: 'Rechazar',
    link: 'Cookies.',
    href: '/cookies',
    policy: 'Política de cookies.',
  },
  elements: {
    messagelink: `
    <span id="cookieconsent:desc" class="cc-message">
      {{message}}
      <a aria-label="Leer mas sobre los términos del servicio" tabindex="2" class="cc-link" href="{{href}}" target="_blank" rel="noopener">{{link}}</a>
    </span>
    `,
  },
};

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({
      mode: 'md',
      rippleEffect: true,
    }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimationsAsync(),
    MessageService,
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
    provideAnimations(),
    importProvidersFrom(
      IonicModule.forRoot({ mode: 'md' }),
      NgcCookieConsentModule.forRoot(cookieConfig),
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      }),
    ),
  ],
});
