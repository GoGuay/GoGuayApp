import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { IonicModule } from '@ionic/angular';

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

  constructor() { }

  ngOnInit() {
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
}
