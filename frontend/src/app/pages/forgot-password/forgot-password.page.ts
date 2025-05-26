import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCol,
  IonRow,
} from '@ionic/angular/standalone';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { Usuario } from 'src/app/models/user/usuario.model';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  standalone: true,
  imports: [
    IonRow,
    IonCol,
    IonContent,
    CommonModule,
    FormsModule,
    NavbarComponent,
    TranslateModule,
  ],
})
export class ForgotPasswordPage implements OnInit {
  userLoggedIn: boolean = false;
  emailUsuario: string = '';
  userData: Usuario = {} as Usuario;

  constructor(private userService: UserServicesService) {}

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (this.userData?.usuario) {
      this.userLoggedIn = true;
      this.emailUsuario = this.userData.usuario.email || '';
    }
  }

  envio_email_reset_password(email: string) {
    this.userService
      .enviar_email_resetpassword(email)
      .subscribe((respuesta) => {
        console.log(respuesta);
      });
  }
}
