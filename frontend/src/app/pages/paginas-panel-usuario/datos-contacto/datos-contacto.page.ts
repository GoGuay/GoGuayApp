import { Component, OnInit, AfterViewInit } from '@angular/core';
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
export class DatosContactoPage implements OnInit, AfterViewInit {
  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;
  botonHabilitado: boolean = false;
  emailRef: any;

  constructor(
    private translate: TranslateService,
    public funcionesUsuario: FuncionesUsuario
  ) {}

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (this.userData?.usuario) {
      this.userLoggedIn = true;

      // Asignar valores iniciales
      this.funcionesUsuario.emailEditado = this.userData.usuario.email || '';
      this.funcionesUsuario.telefonoEditado =
        this.userData.usuario.telefono || '';
      this.funcionesUsuario.comunComerciales =
        !!this.userData.usuario.comunic_comerciales;
      this.funcionesUsuario.comunTerceros =
        !!this.userData.usuario.comunic_terceros;
    } else {
      this.userLoggedIn = false;
    }
  }

  ngAfterViewInit() {
    // Usamos AfterViewInit para asegurarnos de que la vista esté completamente cargada
    this.checkForChanges();
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
    if (!this.userData || !this.userData.usuario) {
      this.botonHabilitado = false;
      return;
    }

    const emailChanged =
      this.funcionesUsuario.emailEditado.trim() !==
      (this.userData.usuario.email || '').trim();
    const telefonoChanged =
      this.funcionesUsuario.telefonoEditado.trim() !==
      (this.userData.usuario.telefono || '').trim();
    const checkboxesChanged =
      this.funcionesUsuario.comunComerciales !==
        !!this.userData.usuario.comunic_comerciales ||
      this.funcionesUsuario.comunTerceros !==
        !!this.userData.usuario.comunic_terceros;

    // Solo habilitar el botón si hay cambios reales
    this.botonHabilitado = emailChanged || telefonoChanged || checkboxesChanged;
  }
}
