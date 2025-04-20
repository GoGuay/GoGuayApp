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
import { UserServicesService } from 'src/app/core/user-services/user-services.service';

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
export class DatosContactoPage implements OnInit {
  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;
  botonHabilitado: boolean = false;
  emailRef: any;
  telefonoRef: any;
  comunComerciales: boolean = false;
  comunTerceros: boolean = false;
  botonHabilitadoContacto: boolean = false;
  formEmailTfno: FormGroup;
  usuario: Usuario = {} as Usuario;
  emailEditado: string = '';
  telefonoEditado: string = '';

  constructor(
    private translate: TranslateService,
    public funcionesUsuario: FuncionesUsuario,
    private userService: UserServicesService
  ) {
    this.loadUserData();

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

    this.comunTerceros = this.userData.usuario.comunic_terceros || false;
  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (this.userData?.usuario) {
      this.userLoggedIn = true;

      // Asignar valores iniciales
      this.emailEditado = this.userData.usuario.email || '';
      this.telefonoEditado = this.userData.usuario.telefono || '';
      this.comunComerciales = !!this.userData.usuario.comunic_comerciales;
      this.comunTerceros = !!this.userData.usuario.comunic_terceros;
    } else {
      this.userLoggedIn = false;
    }
  }

  loadUserData(): void {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
  }

  //Para cambiar idioma -- no se está usando
  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }

  /**
   * Edita los datos de correo y teléfono del usuario
   * @returns
   */
  editarCorreoTelefono(): any {
    console.log('userData:', this.userData); // Verifica que userData tenga los datos correctos

    if (
      !this.userData.usuario.nombre ||
      !this.userData.usuario.apellidos ||
      !this.userData.usuario.genero ||
      !this.userData.usuario.orientacion ||
      !this.userData.usuario.fecha_nacimiento
    ) {
      console.log('Falta algún dato obligatorio');
      return;
    }

    const nuevoUsuario = {
      nombre: this.userData.usuario.nombre,
      apellidos: this.userData.usuario.apellidos,
      pronombre: this.userData.usuario.pronombre,
      genero: this.userData.usuario.genero,
      orientacion: this.userData.usuario.orientacion,
      fecha_nacimiento: this.userData.usuario.fecha_nacimiento,
      biografia: this.userData.usuario.biografia,
      preferencias: this.userData.usuario.preferencias,
      email: this.emailEditado,
      telefono: this.telefonoEditado,
    };
    console.log('Objeto modificado: ', nuevoUsuario);

    this.userService
      .editarDatosUsuario(this.userData.usuario.id, nuevoUsuario)
      .subscribe(
        (response) => {
          console.log('Datos actualizado con exito', response);
          this.userData.usuario = { ...this.userData.usuario, ...nuevoUsuario };
          localStorage.setItem('userData', JSON.stringify(this.userData));
          this.obtenerUsuario();
          this.botonHabilitadoContacto = false;
          return response;
        },
        (error) => {
          console.error('Error al actualizar los datos', error);
        }
      );
  }

  /**
   * Edita las preferencias de comunicación del usuario
   * @returns
   */
  preferenciasComunicacion() {
    if (
      !this.userData.usuario.nombre ||
      !this.userData.usuario.apellidos ||
      !this.userData.usuario.genero ||
      !this.userData.usuario.orientacion ||
      !this.userData.usuario.fecha_nacimiento
    ) {
      console.log('Falta algún dato obligatorio');
      return;
    }
    const nuevoUsuario = {
      nombre: this.userData.usuario.nombre,
      apellidos: this.userData.usuario.apellidos,
      pronombre: this.userData.usuario.pronombre,
      genero: this.userData.usuario.genero,
      orientacion: this.userData.usuario.orientacion,
      fecha_nacimiento: this.userData.usuario.fecha_nacimiento,
      biografia: this.userData.usuario.biografia,
      preferencias: this.userData.usuario.preferencias,
      // email: this.emailEditado || this.userData.usuario.email,
      // telefono: this.telefonoEditado || this.userData.usuario.telefono,
      comunic_comerciales: this.comunComerciales,
      comunic_terceros: this.comunTerceros,
    };
    console.log('Objeto modificado: ', nuevoUsuario);

    this.userService
      .editarDatosUsuario(this.userData.usuario.id, nuevoUsuario)
      .subscribe(
        (response) => {
          console.log('Datos actualizado con exito', response);
          this.userData.usuario = { ...this.userData.usuario, ...nuevoUsuario };
          localStorage.setItem('userData', JSON.stringify(this.userData));
          this.obtenerUsuario();
        },
        (error) => {
          console.error('Error al actualizar los datos', error);
        }
      );
  }

  /**
   * Se obtiene un usuario a través del id
   */
  obtenerUsuario() {
    this.userService
      .obtenerUsuarioPorID(this.userData.usuario.id)
      .subscribe((respuesta) => {
        this.usuario = respuesta;
      });
  }

  // Función que se llama cuando hay un cambio en los inputs o checkboxes
  onInputChange() {
    this.botonHabilitadoContacto = this.formEmailTfno.valid;
  }
}
