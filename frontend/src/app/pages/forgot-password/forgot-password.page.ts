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
  NavController,
} from '@ionic/angular/standalone';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Usuario } from 'src/app/models/user/usuario.model';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

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
    ToastModule,
  ],
  providers: [MessageService],
})
export class ForgotPasswordPage implements OnInit {
  userLoggedIn: boolean = false;
  emailUsuario: string = '';
  userData: Usuario = {} as Usuario;

  constructor(
    private navCtrl: NavController,
    private userService: UserServicesService,
    private messageService: MessageService,
    private translate: TranslateService,
  ) {}

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
        this.translate
          .get(['FORGOT_PW.TOAST_TITULO', 'FORGOT_PW.TOAST_CUERPO'])
          .subscribe((translations) => {
            this.messageService.add({
              severity: 'success',
              summary: translations['FORGOT_PW.TOAST_TITULO'],
              detail: translations['FORGOT_PW.TOAST_CUERPO'],
              life: 3000,
            });
          });
        setTimeout(() => {
          this.navCtrl.navigateRoot(['/login'], {
            animated: false,
          });
        }, 4000);
      });
  }
}
