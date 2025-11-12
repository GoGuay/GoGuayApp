import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { IonRow, IonCol } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-saldo-transferencias',
  standalone: true,
  imports: [
    IonCol,
    IonRow,
    MatDialogTitle,
    MatDialogContent,
    MatDividerModule,
    MatIcon,
    TranslateModule,
    MatButtonModule,
  ],
  templateUrl: './saldo-transferencias.component.html',
  styleUrls: ['./saldo-transferencias.component.scss'],
})
export class SaldoTransferenciasComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<SaldoTransferenciasComponent>) {}

  ngOnInit() {}

  closeDialog() {
    this.dialogRef.close();
  }
}
