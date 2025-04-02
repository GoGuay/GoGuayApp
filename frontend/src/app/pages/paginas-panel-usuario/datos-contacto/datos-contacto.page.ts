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
  botonHabilitado: boolean = false;
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

  // Función que se llama cuando hay un cambio en los inputs o checkboxes
  onInputChange() {
    this.checkForChanges();
  }

  // Función que verifica si los valores han cambiado
  checkForChanges() {
    const emailChanged =
      this.funcionesUsuario.emailEditado !== this.userData.usuario.email;
    const telefonoChanged =
      this.funcionesUsuario.telefonoEditado !== this.userData.usuario.telefono;

    // Verifica si los checkboxes han cambiado
    const checkboxesChanged =
      this.funcionesUsuario.comunComerciales !==
        !!this.userData.usuario.comunic_comerciales ||
      this.funcionesUsuario.comunTerceros !==
        !!this.userData.usuario.comunic_terceros;

    this.botonHabilitado = emailChanged || telefonoChanged || checkboxesChanged;
  }
}
