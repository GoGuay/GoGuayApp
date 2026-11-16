import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IonGrid } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [IonicModule, TranslateModule],
  templateUrl: './info.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
