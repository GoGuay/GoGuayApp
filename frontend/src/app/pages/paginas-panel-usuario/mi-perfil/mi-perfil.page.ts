import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { MatDivider } from '@angular/material/divider';
import { Usuario } from 'src/app/models/user/usuario.model';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    MatDivider,
    NavbarComponent,
  ],
})
export class MiPerfilPage implements OnInit {
  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;

  constructor() {}

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.userLoggedIn = !!(this.userData && this.userData.usuario.email);
    console.log('Datos usuario: ', this.userData);

    // Si el usuario no tiene un género guardado, asignar vacío ("")
    if (!this.userData.usuario.genero) {
      this.userData.usuario.genero = '';
    }

    // Si el usuario no tiene un pronombre guardado, asignar vacío ("")
    if (!this.userData.usuario.pronombre) {
      this.userData.usuario.pronombre = '';
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files) {
      const fileNames = Array.from(input.files).map((file) => file.name);
      console.log('Archivos seleccionados:', fileNames);

      // Aquí puedes manejar los archivos, por ejemplo, enviarlos a un servidor
      alert(
        `${fileNames.length} imágenes seleccionadas: ${fileNames.join(', ')}`
      );
    }
  }
}
