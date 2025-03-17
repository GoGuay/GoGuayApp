import { Component, inject, OnInit } from '@angular/core';
import {
  MatBottomSheetModule,
  MatBottomSheetRef
} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-puntuaciones',
  standalone: true,
  imports: [MatButtonModule, MatBottomSheetModule, MatListModule, MatIcon],
  templateUrl: './puntuaciones.component.html',
  styleUrls: ['./puntuaciones.component.scss'],
})
export class PuntuacionesComponent implements OnInit {

  private _bottomSheetRef =
    inject<MatBottomSheetRef<PuntuacionesComponent>>(MatBottomSheetRef);


  constructor() { }

  ngOnInit() { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
