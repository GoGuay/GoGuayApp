import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
import { MatIcon } from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Usuario } from 'src/app/models/user/usuario.model';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { MatDivider } from '@angular/material/divider';
import { FuncionesUsuario } from 'src/app/core/funciones-usuario/funciones-usuario.service';

@Component({
  selector: 'app-datos-contacto',
  templateUrl: './datos-contacto.page.html',
  styleUrls: ['./datos-contacto.page.scss'],
  standalone: true,
  imports: [
    IonCol,
    IonRow,
    IonContent,
    CommonModule,
    FormsModule,
    TranslateModule,
    NavbarComponent,
    MatDivider,
  ],
})
export class DatosContactoPage implements OnInit {
  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;
  constructor(
    private translate: TranslateService,
    public funcionesUsuario: FuncionesUsuario
  ) {}

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
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

  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }
}
