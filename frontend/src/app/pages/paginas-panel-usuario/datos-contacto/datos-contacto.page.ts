import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonRow, IonCol, IonGrid } from '@ionic/angular/standalone';
import { MatIcon } from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Usuario } from 'src/app/models/user/usuario.model';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { MatDivider } from '@angular/material/divider';
import { FuncionesUsuario } from 'src/app/core/funciones-usuario/funciones-usuario.service';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-datos-contacto',
  templateUrl: './datos-contacto.page.html',
  styleUrls: ['./datos-contacto.page.scss'],
  standalone: true,
  imports: [
    IonGrid,
    IonCol,
    IonRow,
    IonContent,
    CommonModule,
    FormsModule,
    TranslateModule,
    NavbarComponent,
    MatDivider,
    ReactiveFormsModule,
    ToastModule,
  ],
  providers: [MessageService],
})
export class DatosContactoPage implements OnInit {
  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;
  emailRef: any;
  telefonoRef: any;
  comunTerceros: boolean = false;
  formEmailTfno: FormGroup;
  botonHabilitadoContacto: boolean = false;
  emailEditado: string = '';
  telefonoEditado: string = '';
  comunComerciales: boolean = false;

  constructor(
    private translate: TranslateService,
    public funcionesUsuario: FuncionesUsuario,
    private userService: UserServicesService,
    private messageService: MessageService
  ) {
    this.formEmailTfno = new FormGroup({
      emailControl: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
      telefonoControl: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]),
    });
    this.comunTerceros = this.userData.usuario?.comunic_terceros || false;
  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (this.userData?.usuario) {
      this.userLoggedIn = true;

      // Asignar valores iniciales
      this.emailEditado = this.userData.usuario.email || '';
      this.telefonoEditado = this.userData.usuario.telefono || '';
      this.formEmailTfno.patchValue({
        emailControl: this.emailEditado,
        telefonoControl: this.telefonoEditado,
      });

      this.comunComerciales = !!this.userData.usuario.comunic_comerciales;
      this.comunTerceros = !!this.userData.usuario.comunic_terceros;
    } else {
      this.userLoggedIn = false;
    }
  }

  //Para cambiar idioma -- no se está usando
  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }

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
    console.log('➡️ Llamando a editarDatosUsuario()...');
    this.userService.editarDatosUsuario(this.userData.usuario.id, nuevoUsuario).subscribe({
      next: (response) => {
        console.log('✅ Datos actualizados con éxito', response);
      },
      error: (error) => {
        console.error('❌ Error al actualizar los datos', error);
      },
      complete: () => {
        this.userData.usuario = { ...this.userData.usuario, ...nuevoUsuario };
        localStorage.setItem('userData', JSON.stringify(this.userData));
        this.funcionesUsuario.obtenerUsuario();
        this.botonHabilitadoContacto = false;
        this.messageService.add({
          severity: 'success',
          summary: this.translate.instant('DATOS_CONTACTO.TITULO_DATOSGUARDADOS'),
          detail: this.translate.instant('DATOS_CONTACTO.MENSAJE_DATOSGUARDADOS'),
        });
      },
    });
  }

  // Función que se llama cuando hay un cambio en los inputs o checkboxes
  onInputChange() {
    this.botonHabilitadoContacto = this.formEmailTfno.valid;
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
      // pronombre: this.pronombreEditado,
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

    this.userService.editarDatosUsuario(this.userData.usuario.id, nuevoUsuario).subscribe(
      (response) => {
        console.log('Datos actualizado con exito', response);
        this.userData.usuario = { ...this.userData.usuario, ...nuevoUsuario };
        localStorage.setItem('userData', JSON.stringify(this.userData));
        this.funcionesUsuario.obtenerUsuario();
      },
      (error) => {
        console.error('Error al actualizar los datos', error);
      }
    );
  }
}
