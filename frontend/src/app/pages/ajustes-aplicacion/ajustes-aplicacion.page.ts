import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { IonicModule } from '@ionic/angular';
import { LanguageService } from 'src/app/core/lenguajes/languaje.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-ajustes-aplicacion',
  templateUrl: './ajustes-aplicacion.page.html',
  styleUrls: ['./ajustes-aplicacion.page.scss'],
  standalone: true,
  providers: [MessageService],
  imports: [CommonModule, FormsModule, NavbarComponent, IonicModule, ToastModule]
})
export class AjustesAplicacionPage implements OnInit {

  selectedLanguage = 'es';
  mostrarBanner = true;
  notificacionesActivas = true;
  theme = 'light';

  constructor(private languageService: LanguageService, private messageService: MessageService) { }

  ngOnInit() {
    this.selectedLanguage = this.languageService.getLanguage();
  }


  /**
   * Función para guardar los ajustes seleccionados por el usuario
   */
  guardarAjustes() {
    console.log('Idioma seleccionado:', this.selectedLanguage);
    console.log('Mostrar banner:', this.mostrarBanner);
    console.log('Notificaciones activas:', this.notificacionesActivas);
    console.log('Tema:', this.theme);
    alert('Ajustes guardados correctamente!');
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
