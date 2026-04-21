import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavController, IonicModule } from '@ionic/angular';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { ModalErrorComponent } from 'src/app/components/modal-error/modal-error.component';
import { SpinnerComponent } from "src/app/components/spinner/spinner.component";

@Component({
    selector: 'app-admin-login',
    templateUrl: './login-admin.page.html',
    styleUrls: ['./login-admin.page.scss'],
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        SpinnerComponent,
        MatDialogModule
    ]
})
export class AdminLoginPage implements OnInit {
    adminForm: FormGroup;
    spinner_de_carga: boolean = false;

    constructor(
        private userService: UserServicesService,
        public navCtrl: NavController,
        private dialog: MatDialog
    ) {
        this.adminForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required]),
            check: new FormControl(false),
        });
    }

    ngOnInit() {
        const savedEmail = localStorage.getItem('email');
        const savedPassword = localStorage.getItem('password');
        const rememberMe = localStorage.getItem('remember_me') === 'true';

        if (rememberMe && savedEmail) {
            this.adminForm.patchValue({
                emailFormControl: savedEmail,
                passwordFormControl: savedPassword ? atob(savedPassword) : '',
                check: rememberMe,
            });
        }
    }

    /**
     * Ejecuta el login validando que el usuario tenga rol 'admin'
     */
    async login() {
        if (this.adminForm.invalid) {
            this.adminForm.markAllAsTouched();
            return;
        }

        this.spinner_de_carga = true;
        const { email, password } = this.adminForm.value;

        this.userService.login(email, password).subscribe({
            next: (usuarioCompleto) => {
                if (usuarioCompleto.usuario.rolPerfil === 'admin') {

                    localStorage.setItem('userData', JSON.stringify(usuarioCompleto));
                    this.userService.actualizarEstadoUsuario(usuarioCompleto.usuario);
                    this.navCtrl.navigateRoot(['/admin-app']);

                } else {
                    this.spinner_de_carga = false;
                    this.openError('Acceso Restringido', 'Esta cuenta no tiene privilegios de administrador.');
                }
            },
            error: (error) => {
                this.spinner_de_carga = false;
                const errorMsg = error.error?.Error || 'Credenciales incorrectas.';
                this.openError('Error de acceso', errorMsg);
            }
        });
    }

    openError(title: string, message: string) {
        this.dialog.open(ModalErrorComponent, {
            data: { title, message },
            panelClass: 'dialog-animate'
        });
    }
}