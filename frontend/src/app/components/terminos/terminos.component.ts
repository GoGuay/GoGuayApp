import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { IonicModule, IonModal } from '@ionic/angular';
import { AnimationController } from '@ionic/angular/standalone';


@Component({
  selector: 'app-terminos',
  standalone: true,
  imports: [  
    MatDialogContent,
    MatDividerModule,
    MatButtonModule,
    MatIcon,
    IonicModule
  ],
  templateUrl: './terminos.component.html',
  styleUrls: ['./terminos.component.scss'],
})
export class TerminosComponent  implements OnInit {
 
  fechaActual: string = '';
  email: string = 'gestion.prideride@gmail.com';
  
  constructor(private dialogRef: MatDialogRef<TerminosComponent>, private animationCtrl: AnimationController) { }

  ngOnInit() {
    const hoy = new Date();
    this.fechaActual = hoy.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
