import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatDivider } from '@angular/material/divider';
import { Usuario } from 'src/app/models/user/usuario.model';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';

@Component({
  selector: 'app-centro-ayuda',
  templateUrl: './centro-ayuda.page.html',
  styleUrls: ['./centro-ayuda.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, IonicModule, MatButtonModule, RouterModule, MatDivider, NavbarComponent]
})
export class CentroAyudaPage implements OnInit {

  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;

  constructor() {

  }

  ngOnInit() {

    /**
     * Se recoge la información del usuario de la caché si la hay,
     * en caso de no haber información, userData sería un objeto vacío {}.
     */
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    /**
     * Se comprueba el contenido de "userData", si contiene información y adeás hay datos
     * en el atributo "email" de "userData" entonces "userLoggedIn" pasaría a tener el valor "true".
     * 
     * Si "userLoggedIn" tiene el valor "true" esto significa que el usuario está logado correctamente.
     * En el caso contrario, su valor sería "false".
     */
    if (this.userData && Object.keys(this.userData).length > 0 && this.userData.usuario.email) {
      this.userLoggedIn = true;
    } else {
      this.userLoggedIn = false;
    }
  }
}
