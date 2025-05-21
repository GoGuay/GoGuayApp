import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { IonicModule } from '@ionic/angular';
import { LanguageService } from 'src/app/core/lenguajes/languaje.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MatDividerModule } from '@angular/material/divider';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-ajustes-aplicacion',
  templateUrl: './ajustes-aplicacion.page.html',
  styleUrls: ['./ajustes-aplicacion.page.scss'],
  standalone: true,
  providers: [MessageService],
  imports: [CommonModule, FormsModule, NavbarComponent, IonicModule, ToastModule, MatDividerModule, TranslateModule]
})
export class AjustesAplicacionPage implements OnInit {

  selectedLanguage = 'es';
  mostrarBanner = true;
  notificacionesActivas = true;
  theme = 'light';
  mostrarJumbotron = true;

  constructor(private languageService: LanguageService, private messageService: MessageService) { }

  ngOnInit() {
    this.selectedLanguage = this.languageService.getLanguage();
    const savedJumbotronSetting = localStorage.getItem('mostrarJumbotron');
    this.mostrarJumbotron = savedJumbotronSetting === 'true';
  }


  /**
   * Función para guardar los ajustes seleccionados por el usuario
   */
  guardarAjustes() {
    localStorage.setItem('mostrarJumbotron', this.mostrarJumbotron ? 'true' : 'false');
    if (this.selectedLanguage === 'es') {
      this.messageService.add({
        severity: 'success',
        summary: 'Ajustes del banner',
        detail: 'Se han modificado los ajustes del banner correctamente.',
        life: 3000,
      });
    } else if (this.selectedLanguage === 'en') {
      this.messageService.add({
        severity: 'success',
        summary: 'Banner Settings',
        detail: 'The banner settings have been updated successfully.',
        life: 3000,
      });
    }
  }

  changeLanguage(event: Event) {
    const selectedLanguage = (event.target as HTMLSelectElement).value;
    console.log(selectedLanguage);

    this.languageService.setLanguage(selectedLanguage);
    this.selectedLanguage = selectedLanguage;
    if (selectedLanguage === 'es') {
      this.messageService.add({
        severity: 'success',
        summary: 'Cambio de idioma',
        detail: 'Se ha modificado el idioma correctamente.',
        life: 3000,
      });
    } else if (selectedLanguage === 'en') {
      this.messageService.add({
        severity: 'success',
        summary: 'Language Change',
        detail: 'The language has been changed successfully.',
        life: 3000,
      });
    }

  }
}
