import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { IonicModule } from '@ionic/angular';
import { LanguageService } from 'src/app/core/lenguajes/languaje.service';

@Component({
  selector: 'app-ajustes-aplicacion',
  templateUrl: './ajustes-aplicacion.page.html',
  styleUrls: ['./ajustes-aplicacion.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, IonicModule]
})
export class AjustesAplicacionPage implements OnInit {

  selectedLanguage = 'es';
  mostrarBanner = true;
  notificacionesActivas = true;
  theme = 'light';

  constructor(private languageService: LanguageService) { }

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
    this.languageService.setLanguage(selectedLanguage);
    this.selectedLanguage = selectedLanguage;
  }
}
