import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonRow, IonCol } from '@ionic/angular/standalone';
import { Usuario } from 'src/app/models/user/usuario.model';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { MatDivider } from '@angular/material/divider';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';

@Component({
  selector: 'app-verificaciones-perfil',
  templateUrl: './verificaciones-perfil.page.html',
  styleUrls: ['./verificaciones-perfil.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NavbarComponent,
    MatDivider,
    TranslateModule,
  ],
})
export class VerificacionesPerfilPage implements OnInit {
  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;
  emailUsuario: string = '';
  telefonoUsuario: string = '';

  constructor(private userService: UserServicesService) {}

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (this.userData?.usuario) {
      this.userLoggedIn = true;
    }
    if (this.userData && this.userData.usuario) {
      this.emailUsuario = this.userData.usuario.email || '';
      this.telefonoUsuario = this.userData.usuario.telefono || '';
    }
  }
  verificar_email(email: string) {
    this.userService.enviar_email_verif(email).subscribe((respuesta) => {
      console.log(respuesta);
    });
  }

  enviar_sms(telefono: string) {
    const teléfonoConPrefijo = '+93' + telefono;
    this.userService.enviar_sms(teléfonoConPrefijo).subscribe((respuesta) => {
      console.log('Respuesta: ', respuesta);
    });
  }
}
