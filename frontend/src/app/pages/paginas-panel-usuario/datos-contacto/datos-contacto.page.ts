import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
    ReactiveFormsModule,
  ],
})
export class DatosContactoPage implements OnInit, AfterViewInit {
  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;
  botonHabilitado: boolean = false;
  emailRef: any;
  telefonoRef: any;
  formEmailTfno: FormGroup;

  constructor(
    private translate: TranslateService,
    public funcionesUsuario: FuncionesUsuario
  ) {
    this.formEmailTfno = new FormGroup({
      emailControl: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ]),
      telefonoControl: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]{9}$/),
      ]),
    });
  }

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

    // Solo habilitar el botón si hay cambios reales
    this.botonHabilitado = emailChanged || telefonoChanged;
  }

  // Función que se llama cuando hay un cambio en los inputs o checkboxes
  onInputChange() {
    this.botonHabilitado = this.formEmailTfno.valid;
  }
}
