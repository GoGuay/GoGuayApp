import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { IonicModule, NavController } from '@ionic/angular';
import { LanguageService } from 'src/app/core/lenguajes/languaje.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MatDividerModule } from '@angular/material/divider';
import { TranslateModule } from '@ngx-translate/core';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { Usuario } from 'src/app/models/user/usuario.model';
import { HelpModalComponent } from 'src/app/components/help-modal/help-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ajustes-aplicacion',
  templateUrl: './ajustes-aplicacion.page.html',
  styleUrls: ['./ajustes-aplicacion.page.scss'],
  standalone: true,
  providers: [MessageService],
  imports: [
    CommonModule,
    FormsModule,
    NavbarComponent,
    IonicModule,
    ToastModule,
    MatDividerModule,
    TranslateModule,
  ],
})
export class AjustesAplicacionPage implements OnInit {
  selectedLanguage = 'es';
  mostrarBanner = true;
  notificacionesActivas = true;
  theme = 'light';
  mostrarJumbotron = true;

  userData: Usuario = {} as Usuario;

  constructor(
    private navCtrl: NavController,
    private languageService: LanguageService,
    private messageService: MessageService,
    private userService: UserServicesService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.selectedLanguage = this.languageService.getLanguage();
    const savedJumbotronSetting = localStorage.getItem('mostrarJumbotron');
    this.mostrarJumbotron = savedJumbotronSetting === 'true';
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
  }

  /**
   * Función para guardar los ajustes seleccionados por el usuario
   */
  guardarAjustes() {
    localStorage.setItem(
      'mostrarJumbotron',
      this.mostrarJumbotron ? 'true' : 'false'
    );
    if (this.selectedLanguage === 'es') {
      this.messageService.add({
        severity: 'success',
        summary: 'Ajustes del banner',
        detail: 'Se han modificado los ajustes del banner correctamente.',
        life: 3000,
      });
    } else if (this.selectedLanguage === 'en') {
      this.messageService.add({
        severity: 'success',
        summary: 'Banner Settings',
        detail: 'The banner settings have been updated successfully.',
        life: 3000,
      });
    }
  }

  changeLanguage(event: Event) {
    const selectedLanguage = (event.target as HTMLSelectElement).value;
    console.log(selectedLanguage);

    this.languageService.setLanguage(selectedLanguage);
    this.selectedLanguage = selectedLanguage;
    if (selectedLanguage === 'es') {
      this.messageService.add({
        severity: 'success',
        summary: 'Cambio de idioma',
        detail: 'Se ha modificado el idioma correctamente.',
        life: 3000,
      });
    } else if (selectedLanguage === 'en') {
      this.messageService.add({
        severity: 'success',
        summary: 'Language Change',
        detail: 'The language has been changed successfully.',
        life: 3000,
      });
    }
  }

  eliminar_usuario() {
    console.log('Elminando al usuario con id: ', this.userData.usuario.id);

    this.userService.eliminarUsuario(this.userData.usuario.id).subscribe(
      (res) => console.log('Respuesta del backend: ', res),
      (err) => console.error('Error del backedn: ', err)
    );
    localStorage.removeItem('userData');
    this.navCtrl.navigateRoot(['/'], {});
  }

  modalEliminarUsuario() {
    const titulo: string = '¡ATENCIÓN: Vas a eliminar tu usuario';
    const mensaje: string = `¿Estás seguro que deseas eliminar usuario?`;
    const dialogRef = this.dialog.open(HelpModalComponent, {
      data: { title: titulo, message: mensaje, showAcceptButton: true },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((confirmar) => {
      if (confirmar) {
        this.eliminar_usuario();
      }
    });
  }
}
