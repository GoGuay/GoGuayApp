import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { HelpModalComponent } from 'src/app/components/help-modal/help-modal.component';
import { ModalErrorComponent } from 'src/app/components/modal-error/modal-error.component';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, MatButtonModule],
  providers: [UserServicesService],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  pasoActual: number = 1;
  formulario1: FormGroup;
  formulario2: FormGroup;
  formulario3: FormGroup;
  paso1: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserServicesService, private router: Router, private dialog: MatDialog) {
    this.formulario1 = this.fb.group({
      email: ['', Validators.required],
      fnacimiento: ['', Validators.required],
    });

    this.formulario2 = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', Validators.required],
      genero: ['', Validators.required],
      orientacion: ['', Validators.required],
    });

    this.formulario3 = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    if (this.pasoActual === 1) {
      this.paso1 = true;
    }
  }

  // Función para avanzar al siguiente formulario
  siguientePaso() {
    if (this.pasoActual === 1 && this.formulario1.valid) {
      this.pasoActual++;
      this.paso1 = false;
    } else if (this.pasoActual === 2 && this.formulario2.valid) {
      this.pasoActual++;
      this.paso1 = false;
    } else if (this.pasoActual === 3 && this.formulario3.valid) {
      this.mostrarContrato();
    }
  }

  // Función para retroceder al formulario anterior
  pasoAnterior() {
    if (this.pasoActual > 1) {
      this.pasoActual--;
    }
  }

  // Función para mostrar el contrato de respeto
  mostrarContrato() {
    const contratoDialog = this.dialog.open(HelpModalComponent, {
      data: { 
        title: 'Contrato de Respeto',
        message: `
          <p>Al registrarte en nuestra aplicación, te comprometes a respetar a todos los usuarios, independientemente de su identidad de género, orientación sexual o cualquier otra característica personal.</p>
          
          <ul>
            <li>Tratar a todos los usuarios con amabilidad y empatía.</li>
            <li>No se tolerará ningún tipo de discriminación, acoso o conducta inapropiada.</li>
            <li>El incumplimiento de estas normas puede conllevar la suspensión de tu cuenta.</li>
          </ul>
  
          <p>Para conocer más detalles sobre nuestro código de conducta, haz clic en el siguiente botón:</p>
        `,
        showAcceptButton: true,
        showMoreInfoButton: true
      },
      panelClass: 'dialog-animate'
    });
  
    contratoDialog.afterClosed().subscribe((accepted: string) => {
      if (accepted === 'registro') {
        this.registrar();
      } else if (accepted === 'home') {
        this.volverAlHome();
      }
    });
  }
  

  // Función para registrar al usuario
  registrar() {
    if (this.formulario1.valid && this.formulario2.valid && this.formulario3.valid) {
      const datosRegistro = {
        ...this.formulario1.value,
        ...this.formulario2.value,
        ...this.formulario3.value,
      };

      this.userService.registrarUsuario(datosRegistro).subscribe({
        next: (response) => {
          console.log('Respuesta registro: ', response);
          
          const title: string = `¡Bienvenido! ${response.usuario.nombre}`;
          const message: string = `
          <p>Tu usuario ha sido creado correctamente.</p>
          <p>Accede a la ventana de acceso de la aplicación para 
            <br>
            <a class="text-center" href="/login">iniciar sesión</a>
          </p>
        `;
          this.openHelp(title, message);

          this.router.navigate(['/home']);
        },
        error: (err) => {
          const title = 'Error!';
          const message = err.error.error;
          this.openError(title, message);
        },
      });
    }
  }

  // Función para mostrar ventana modal de error
  openError(title: string, message: string) {
    this.dialog.open(ModalErrorComponent, {
      data: { title, message },
      panelClass: 'dialog-animate'
    });
  }

  // Función para mostrar ventana modal con confirmación
  openHelp(title: string, message: string) {
    this.dialog.open(HelpModalComponent, {
      data: { title, message },
      panelClass: 'dialog-animate'
    });
  }

  // Función para volver al home
  volverAlHome() {
    this.router.navigate(['/home']);
  }
}