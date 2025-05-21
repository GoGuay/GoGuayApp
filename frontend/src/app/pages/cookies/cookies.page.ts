import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { Usuario } from 'src/app/models/user/usuario.model';
import { MatDivider } from '@angular/material/divider';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.page.html',
  styleUrls: ['./cookies.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    NavbarComponent,
    MatDivider,
    ToastModule
  ],
  providers: [MessageService]
})
export class CookiesPage implements OnInit {
  showPanel = true;
  preferences = {
    analytics: false,
    advertising: false
  };

  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;

  correo: string = 'gestion.prideride@gmail.com';

  constructor(private cookieService: CookieService, private messageService: MessageService) { }

  ngOnInit() {

    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.userLoggedIn = !!(this.userData && this.userData.usuario?.email);

    const analyticsCookie = this.cookieService.get('analytics');
    const advertisingCookie = this.cookieService.get('advertising');

    this.preferences.analytics = analyticsCookie === 'true';
    this.preferences.advertising = advertisingCookie === 'true';
  }

  /**
   * Función para guardar las preferencias.
   */
  savePreferences() {
    this.cookieService.set('analytics', String(this.preferences.analytics), 365);
    this.cookieService.set('advertising', String(this.preferences.advertising), 365);
  
    this.messageService.add({
      severity: 'success',
      summary: 'Cookies guardadas',
      detail: 'Se han guardado correctamente las cookies.',
    });
  
    // Recargar la página tras guardar
    setTimeout(() => {
      location.reload();
    }, 1000); 
  }

  /**
   * Función para aceptar todas las cookies.
   */
  acceptAllCookies() {
    this.preferences.analytics = true;
    this.preferences.advertising = true;
  
    this.cookieService.set('analytics', String(this.preferences.analytics), 365);
    this.cookieService.set('advertising', String(this.preferences.advertising), 365);
  
    this.messageService.add({
      severity: 'success',
      summary: 'Cookies guardadas',
      detail: 'Se han guardado correctamente las cookies.',
    });
  
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
  

  /**
   * Función para rechazar todas las cookies.
   */
  rejectAll() {
    // Rechazar todas menos esenciales
    this.preferences.analytics = false;
    this.preferences.advertising = false;

    // Guardar las preferencias
    this.savePreferences();
  }
}
