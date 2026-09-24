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

    this.formEmailTfno.get('telefonoControl')?.valueChanges.subscribe((telefono) => {
      if (telefono && telefono.length === 9) {
        const inputTelefono = document.getElementById('telefonoControl');
        if (inputTelefono) {
          inputTelefono.blur(); // 👈 Quita el foco automáticamente
        }
        this.comprobarTelefonoRegistrado(telefono);
      }
    });
    this.formEmailTfno.get('emailControl')?.valueChanges.subscribe((email) => {
      const emailControl = this.formEmailTfno.get('emailControl');
      if (email && emailControl?.valid && email.includes('@') && email.includes('.')) {
        const inputEmail = document.getElementById('emailControl');
        if (inputEmail && document.activeElement === inputEmail) {
          inputEmail.blur();
        }

        this.comprobarEmailRegistrado(email);
      }
    });
  }

  comprobarTelefonoRegistrado(telefono: string) {
    const control = this.formEmailTfno.get('telefonoControl');
    if (!control || control.invalid || telefono.length !== 9) return;

    if (telefono === this.userData.usuario.telefono) {
      this.removerErrorControl(control, 'telefonoRepetido');
      this.onInputChange();
      return;
    }
    this.userService.verificarTelefonoExistente(telefono).subscribe({
      next: (existe: boolean) => {
        if (existe) {
          control.setErrors({ ...control.errors, telefonoRepetido: true });
        } else {
          this.removerErrorControl(control, 'telefonoRepetido');
        }
        this.onInputChange();
      },
      error: (err: any) => {
        console.error('Error al verificar el teléfono:', err);
        this.onInputChange();
      },
    });
  }

  comprobarEmailRegistrado(email: string) {
    const control = this.formEmailTfno.get('emailControl');
    if (!control || control.invalid || !email) return;

    if (email === this.userData.usuario.email) {
      this.removerErrorControl(control, 'emailRepetido');
      this.onInputChange();
      return;
    }

    this.userService.verificarEmailExistente(email).subscribe({
      next: (existe: boolean) => {
        if (existe) {
          // Si ya está registrado por otra persona, ponemos el error
          control.setErrors({ ...control.errors, emailRepetido: true });
        } else {
          // Si está libre, quitamos el error de repetido
          this.removerErrorControl(control, 'emailRepetido');
        }
        this.onInputChange(); // Actualiza el estado del botón de guardar
      },
      error: (err: any) => {
        console.error('Error al verificar el correo:', err);
        this.onInputChange();
      },
    });
  }

  // Función auxiliar para limpiar solo el error de repetición sin romper otros validadores
  removerErrorControl(control: any, nombreError: string) {
    if (control.errors?.[nombreError]) {
      const { [nombreError]: removed, ...rest } = control.errors;
      control.setErrors(Object.keys(rest).length > 0 ? rest : null);
    }
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
    const formValues = this.formEmailTfno.value;
    const nuevoUsuario = {
      nombre: this.userData.usuario.nombre,
      apellidos: this.userData.usuario.apellidos,
      pronombre: this.userData.usuario.pronombre,
      genero: this.userData.usuario.genero,
      orientacion: this.userData.usuario.orientacion,
      fecha_nacimiento: this.userData.usuario.fecha_nacimiento,
      biografia: this.userData.usuario.biografia,
      preferencias: this.userData.usuario.preferencias,
      email: formValues.emailControl,
      telefono: formValues.telefonoControl,
    };
    console.log('Objeto modificado: ', nuevoUsuario);
    this.userService.editarDatosUsuario(this.userData.usuario.id, nuevoUsuario).subscribe({
      next: (response) => {
        console.log('Datos actualizados con éxito', response);
      },
      error: (error) => {
        console.error('Error al actualizar los datos', error);
        const mensajeError = error.error?.error || 'Error al actualizar los datos';
        this.messageService.add({
          severity: 'error',
          summary: this.translate.instant('DATOS_CONTACTO.ERROR_TITULO'),
          detail: this.translate.instant('DATOS_CONTACTO.ERROR_MENSAJE_YAEXISTEDATO'),
        });
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
