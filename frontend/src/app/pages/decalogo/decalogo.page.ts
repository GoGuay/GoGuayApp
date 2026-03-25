import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { IonicModule } from '@ionic/angular';
import { Usuario } from 'src/app/models/user/usuario.model';
import { JumbotronComponent } from "../jumbotron/jumbotron.component";

@Component({
  selector: 'app-decalogo',
  templateUrl: './decalogo.page.html',
  styleUrls: ['./decalogo.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NavbarComponent,
    JumbotronComponent
  ],
})
export class DecalogoPage implements OnInit {

  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;

  mostrarJumbotron = true;

  constructor() { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.loadJumbotronSetting();
    if (this.userData && Object.keys(this.userData).length > 0 && this.userData.usuario.email) {
      this.userLoggedIn = true;
    } else {
      this.userLoggedIn = false;
    }
  }

  loadJumbotronSetting() {
    const jumbotronSetting = localStorage.getItem('mostrarJumbotron');
    this.mostrarJumbotron = jumbotronSetting === null ? true : jumbotronSetting === 'true';
  }
}
