import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detalle-eventos',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './detalle-eventos.component.html',
  styleUrls: ['./detalle-eventos.component.scss'],
})
export class DetalleEventosComponent  implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DetalleEventosComponent>
  ) {}

  ngOnInit() {
    console.log(this.data);
    
  }

}
