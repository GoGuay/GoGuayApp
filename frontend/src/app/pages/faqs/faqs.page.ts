import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';
import { Usuario } from 'src/app/models/user/usuario.model';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { VentanaDudasComponent } from "../../components/ventana-dudas/ventana-dudas.component";

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.page.html',
  styleUrls: ['./faqs.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    IonicModule,
    MatButtonModule,
    RouterModule,
    JumbotronComponent,
    NavbarComponent,
    VentanaDudasComponent
  ],
})
export class FaqsPage implements OnInit {
  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;
  mostrarJumbotron = true;

  constructor() { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.loadJumbotronSetting();
    if (
      this.userData &&
      Object.keys(this.userData).length > 0 &&
      this.userData.usuario.email
    ) {
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
