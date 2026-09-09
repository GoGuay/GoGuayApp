import { Component, OnInit, ViewChild } from '@angular/core';
import { NgcCookieConsentService, NgcStatusChangeEvent } from 'ngx-cookieconsent';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { filter, Subscription } from 'rxjs';
import { LanguageService } from './core/lenguajes/languaje.service';
import { NotificationToastComponent } from './components/notification-toast/notification-toast.component';
import { NotificacionesService } from './core/notificaciones/notificaciones.service';
import { Usuario } from './models/user/usuario.model';
import {
  IonApp,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonFooter,
  IonRouterOutlet,
  IonMenuToggle,
} from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationStart, RouterModule } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    NotificationToastComponent,
    IonApp,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonFooter,
    IonRouterOutlet,
    TranslateModule,
    RouterModule,
    IonMenuToggle,
  ],
  providers: [MenuController],
})
export class AppComponent implements OnInit {
  @ViewChild(IonMenu) menu!: IonMenu;
  private consentGivenSubscription!: Subscription;
  userData: Usuario = {} as Usuario;
  currentTime: string = '';

  hours: string = '';
  minutes: string = '';

  constructor(
    private ccService: NgcCookieConsentService,
    private cookieService: CookieService,
    private languageService: LanguageService,
    private notificacionesService: NotificacionesService,
    private menuCtrl: MenuController,
    private router: Router
  ) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        console.log('🔄 Cambio de ruta detectado hacia:', event.url, ' | Causa:', event.navigationTrigger);
        console.trace('Pila de llamadas que ordenó la redirección:');
      }
    });
  }

  ngOnInit() {
    /**
     * Comprueba y actualiza la hora actual cada minuto.
     */
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);

    /**
     * Cierra el menú al navegar a una nueva ruta.
     */
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      if (this.menu) {
        this.menu.close();
      }
    });

    const consentStatus = localStorage.getItem('cookieConsentStatus');
    this.loadUserData();

    if (this.userData?.usuario?.id) {
      this.obtenerNotificaciones(this.userData.usuario.id);
    } else {
      this.checkUserDataUntilAvailable();
    }

    this.ccService.popupOpen$.subscribe(() => {
      console.log('El banner de cookies está visible');
    });

    this.ccService.popupClose$.subscribe(() => {
      console.log('El banner de cookies fue cerrado');
    });

    // Verificar el consentimiento de cookies
    const hasConsent = this.cookieService.check('analytics') || this.cookieService.check('advertising');
    if (!hasConsent) {
      console.log('No se han establecido preferencias de cookies.');
    }

    if (consentStatus === 'allow' || consentStatus === 'deny') {
      // Si ya se ha dado consentimiento, no mostrar el banner
      this.ccService.destroy();
    } else {
      this.consentGivenSubscription = this.ccService.statusChange$.subscribe((event: NgcStatusChangeEvent) => {
        const status = event.status;
        localStorage.setItem('cookieConsentStatus', status);
        this.ccService.destroy();
      });
    }

    /**
     * Se comprueba el idioma establecido.
     * Por defecto se establece el idioma castellano,
     * pero si en algún momento el usuario cambia el idioma,
     * recoge el idioma que se ha cambiado de la caché.
     */
    this.languageService.language$.subscribe((lang) => {
      console.log(`Idioma cambiado a: ${lang}`);
    });

    this.menuCtrl.enable(true, 'mobileMenu');
  }

  /**
   * Función para actualizar la hora actual cada minuto.
   */
  updateTime() {
    const now = new Date();
    this.hours = now.getHours().toString().padStart(2, '0');
    this.minutes = now.getMinutes().toString().padStart(2, '0');
  }

  checkUserDataUntilAvailable() {
    const interval = setInterval(() => {
      this.loadUserData();
      if (this.userData?.usuario?.id) {
        clearInterval(interval);
        this.obtenerNotificaciones(this.userData.usuario.id);
      }
    }, 500);
  }

  obtenerNotificaciones(usuarioId: number) {
    this.notificacionesService.obtenerNotificaciones(usuarioId).subscribe((notificaciones) => {
      if (notificaciones.length) {
        this.notificacionesService.notificacionPendiente = notificaciones[0].mensaje;
        this.notificacionesService.esCreadorDelViaje = true;
        this.notificacionesService.leerNotificacion(notificaciones);
      }
    });
  }

  loadUserData(): void {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
  }

  ngOnDestroy() {
    if (this.consentGivenSubscription) {
      this.consentGivenSubscription.unsubscribe();
    }
  }
}
