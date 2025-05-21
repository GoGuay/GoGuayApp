import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { Usuario } from 'src/app/models/user/usuario.model';
import { MatDivider } from '@angular/material/divider';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.page.html',
  styleUrls: ['./terminos.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, NavbarComponent, MatDivider]
})
export class TerminosPage implements OnInit {


  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;
  fechaActual: string = '';
  email: string = 'gestion.prideride@gmail.com';

  constructor() { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.userLoggedIn = !!(this.userData && this.userData.usuario.email);

    const hoy = new Date();
    this.fechaActual = hoy.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  }

}
