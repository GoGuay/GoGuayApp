import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { Usuario } from 'src/app/models/user/usuario.model';
import { ModalErrorComponent } from 'src/app/components/modal-error/modal-error.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
  ]
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  listaUsuarios: Usuario[] = [];

  constructor(private userService: UserServicesService, private router: Router, private dialog: MatDialog) {
    this.loginForm = new FormGroup({
      emailFormControl: new FormControl('', [Validators.required, Validators.email]),
      passwordFormControl: new FormControl('', [Validators.required]),
      check: new FormControl(false),
    });
  }

  ngOnInit() {
    this.obtenerUsuarios();

    /**
     * Recuperación de datos si el check "Recuérdame" está marcado.
     * Estos datos se recuperan de la caché
     */
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    const rememberMe = localStorage.getItem('remember_me') === 'true';

    if (rememberMe && savedEmail) {
      this.loginForm.patchValue({
        emailFormControl: savedEmail,
        passwordFormControl: savedPassword ? atob(savedPassword) : '',
        check: rememberMe,
      });
    }
  }

  /**
   * Función que verifica si un campo ha sido tocado
   * o si tiene algún error.
   * 
   * @param field Recibe la información del input
   * @returns Devuelve true o false en función de si hay error o no.
   */
  isFieldInvalid(field: string): boolean {
    const control = this.loginForm.get(field);
    return control?.touched && control?.invalid ? true : false;
  }

  /**
   * Función para obtener la información de todos los usuarios.
   */
  obtenerUsuarios() {
    this.userService.obtenerUsuarios().subscribe(
      (respuesta) => {
        this.listaUsuarios = respuesta;
      },
      (error) => {
        console.error('Error al obtener la lista de usuarios registrados:', error);
      }
    );
  }

  /**
   * Función para comprobar datos del usuario y poder hacer el login
   */
  login() {
    const email = this.loginForm.get('emailFormControl')?.value;
    const password = this.loginForm.get('passwordFormControl')?.value;
    const rememberMe = this.loginForm.value.check;
  
    /**
     * "btoa" convierte el string a Base64
     */
    const encodedPassword = btoa(password);
  
    this.userService.login(email, password).subscribe(
      (usuario) => {
        localStorage.setItem('userData', JSON.stringify(usuario));
        if (rememberMe) {
          localStorage.setItem('email', email);
          localStorage.setItem('password', encodedPassword);
          localStorage.setItem('remember_me', 'true');
        } else {
          localStorage.removeItem('email');
          localStorage.removeItem('password');
          localStorage.removeItem('remember_me');
        }
        this.router.navigate(['/home'], {
          queryParams: usuario
        });
      },
      (error) => {
        const title = 'Error!';
        this.openError(title, error.error.Error);
      }
    );
  }
  

  /**
   * Función para mostrar una ventana modal con un mensaje de error.
   * 
   * @param title Título que recibe la ventana modal
   * @param message Mensaje de error que recibe la ventana modal.
   */
  openError(title: string, message: string) {
    this.dialog.open(ModalErrorComponent, {
      data: { title, message },
      panelClass: 'dialog-animate'
    });
  }
}
