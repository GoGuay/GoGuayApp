import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { IonRow, IonCol } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-verificar-perfil',
  standalone: true,
  imports: [IonCol, IonRow, MatDialogTitle, MatDialogContent, MatDividerModule, MatIcon, TranslateModule, MatButtonModule],
  templateUrl: './verificar-perfil.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./verificar-perfil.component.scss'],
})
export class VerificarPerfilComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<VerificarPerfilComponent>) {}

  ngOnInit() {}

  closeDialog() {
    this.dialogRef.close();
  }
}
