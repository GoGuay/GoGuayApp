import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonGrid, IonCol, IonRow } from "@ionic/angular/standalone";

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [IonRow, IonCol, IonGrid, TranslateModule],
  templateUrl: './info.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
