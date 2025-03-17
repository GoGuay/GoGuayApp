import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-notificaciones',
  standalone: true,
  imports: [MatButtonModule, MatDivider, MatIcon],
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.scss'],
})
export class NotificacionesComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { titulo: string; notificacion: any }, 
    private dialogRef: MatDialogRef<NotificacionesComponent>
  ) { }

  ngOnInit() {
    console.log('Notificación: ', this.data);
    
   }


  close() {
    this.dialogRef.close();
  }
}
