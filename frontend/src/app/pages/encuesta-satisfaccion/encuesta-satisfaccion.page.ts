import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, NavController } from '@ionic/angular/standalone';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HelpModalComponent } from 'src/app/components/help-modal/help-modal.component';

@Component({
  selector: 'app-encuesta-satisfaccion',
  templateUrl: './encuesta-satisfaccion.page.html',
  styleUrls: ['./encuesta-satisfaccion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, MatButtonModule, MatRadioModule]
})
export class EncuestaSatisfaccionPage implements OnInit {

  constructor(private dialog: MatDialog, private navCtrl: NavController) { }

  ngOnInit() {
  }

  verificarEncuesta() {
    const titulo: string = 'Encuesta realizada correctamente';
    const mensaje: string = 'Muchas gracias por realizar nuestra encuesta de satisfacción.';
    const dialogRef = this.dialog.open(HelpModalComponent, {
      data: { title: titulo, message: mensaje, showAcceptButton: true },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(() => {
      this.navCtrl.navigateRoot('/home');
    });

  }
}
