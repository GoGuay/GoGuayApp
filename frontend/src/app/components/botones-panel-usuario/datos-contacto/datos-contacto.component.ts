import { DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { IonRow, IonCol, NavController } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { FuncionesUsuario } from 'src/app/core/funciones-usuario/funciones-usuario.service';
import { Usuario } from 'src/app/models/user/usuario.model';

@Component({
  selector: 'app-datos-contacto',
  standalone: true,
  imports: [
    IonCol,
    IonRow,
    CommonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDividerModule,
    MatIcon,
    TranslateModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './datos-contacto.component.html',
  styleUrls: ['./datos-contacto.component.scss'],
})
export class DatosContactoComponent {
  // userLoggedIn: boolean = false;
  // userData: Usuario = {} as Usuario;
  // constructor(
  //   private dialogRef: MatDialogRef<DatosContactoComponent>,
  //   private navCtrl: NavController,
  //   public funcionesUsuario: FuncionesUsuario
  // ) {}
  // ngOnInit() {
  // this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
  // if (this.userData?.usuario) {
  //   this.userLoggedIn = true;
  // Asignar valores iniciales
  //     this.funcionesUsuario.emailEditado = this.userData.usuario.email || '';
  //     this.funcionesUsuario.telefonoEditado =
  //       this.userData.usuario.telefono || '';
  //     this.funcionesUsuario.comunComerciales =
  //       !!this.userData.usuario.comunic_comerciales;
  //     this.funcionesUsuario.comunTerceros =
  //       !!this.userData.usuario.comunic_terceros;
  //   } else {
  //     this.userLoggedIn = false;
  //   }
  // }
  // openDatosContacto() {
  //   this.navCtrl.navigateRoot('/info-visible');
  //   this.closeDialog();
  // }
  // closeDialog() {
  //   this.dialogRef.close();
  // }
  // clickEditar() {
  //   const dialogRef = this.funcionesUsuario
  //     .editarCorreoTelefono()
  //     .subscribe((respuesta: any) => {
  //       console.log('Respuesta: ', respuesta);
  //     });
  //   console.log(dialogRef);
  // }
  // onFileSelected(event: Event): void {
  //   const input = event.target as HTMLInputElement;
  //   if (input.files) {
  //     const fileNames = Array.from(input.files).map((file) => file.name);
  //     console.log('Archivos seleccionados:', fileNames);
  //     // Aquí puedes manejar los archivos, por ejemplo, enviarlos a un servidor
  //     alert(
  //       `${fileNames.length} imágenes seleccionadas: ${fileNames.join(', ')}`
  //     );
  //   }
  // }
}
