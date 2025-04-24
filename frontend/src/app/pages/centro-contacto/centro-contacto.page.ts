import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { Usuario } from 'src/app/models/user/usuario.model';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';
import { MatDivider } from '@angular/material/divider';
import { IonicModule } from '@ionic/angular';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-centro-contacto',
  templateUrl: './centro-contacto.page.html',
  styleUrls: ['./centro-contacto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NavbarComponent, MatDivider, MatButtonModule]
})
export class CentroContactoPage implements OnInit {

    userLoggedIn: boolean = false;
    userData: Usuario = {} as Usuario;

  constructor(private funcionesComunes: FuncionesComunes) { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.userLoggedIn = this.funcionesComunes.isUserLoggedIn();
  }

}
