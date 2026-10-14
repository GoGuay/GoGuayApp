import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { trigger, style, transition, animate } from '@angular/animations';
import { NavController } from 'node_modules/@ionic/angular';

@Component({
  selector: 'app-modal-error',
  standalone: true,
  imports: [MatButtonModule, MatIcon, MatDivider, CommonModule],
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.scss'],
  animations: [
    trigger('dialogAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [animate('300ms ease-in', style({ opacity: 0, transform: 'scale(0.9)' }))]),
    ]),
  ],
})
export class ModalErrorComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string; mostrarBotonRegistro?: boolean },
    private dialogRef: MatDialogRef<ModalErrorComponent>,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    console.log('data: ', this.data);
  }

  close() {
    this.dialogRef.close();
  }

  toRegistro(condicion: string) {
    this.navCtrl.navigateRoot(['/registro'], {
      animated: false,
    });
    this.dialogRef.close(condicion);
  }
}
