import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';
import { Usuario } from 'src/app/models/user/usuario.model';
import { IonicModule } from '@ionic/angular';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.page.html',
  styleUrls: ['./sobre-nosotros.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    JumbotronComponent,
    NavbarComponent,
    TranslateModule
  ]
})
export class SobreNosotrosPage implements OnInit {
  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;
  mostrarJumbotron = true;

  constructor(private funcionesComunes: FuncionesComunes) { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.userLoggedIn = this.funcionesComunes.isUserLoggedIn();
    this.loadJumbotronSetting();
  }

  /**
   * Función para abrir los perfiles de Linkedin de cada uno.
   * 
   * @param perfil Recibe el nombre del perfil que se va a abrir.
   */
  openLinkedin(perfil: string) {
    if (perfil === 'Dani') {
      window.open('https://www.linkedin.com/in/daniel-garc%C3%ADa-d%C3%ADaz-0a970862/', '_blank');
    } else if (perfil === 'Tomas') {
      window.open('https://www.linkedin.com/in/jtomas88/', '_blank');
    }
  }

  /**
 * Función para abrir los perfiles de GitHub de cada uno.
 * 
 * @param perfil Recibe el nombre del perfil que se va a abrir.
 */
  openGitHub(perfil: string) {
    if (perfil === 'Dani') {
      window.open('https://github.com/Daniel160490', '_blank');
    } else if (perfil === 'Tomas') {
      window.open('https://github.com/JTomas88', '_blank');
    }
  }


  loadJumbotronSetting() {
    const jumbotronSetting = localStorage.getItem('mostrarJumbotron');
    this.mostrarJumbotron = jumbotronSetting === null ? true : jumbotronSetting === 'true';
  }
}
