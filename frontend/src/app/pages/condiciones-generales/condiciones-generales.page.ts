import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { IonContent, IonAccordionGroup, IonAccordion, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-condiciones-generales',
  templateUrl: './condiciones-generales.page.html',
  styleUrls: ['./condiciones-generales.page.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule, IonItem, IonLabel, MatIconModule, MatButtonModule, RouterModule, JumbotronComponent, NavbarComponent, TranslateModule, IonContent, IonAccordionGroup, IonAccordion],
})
export class CondicionesUsoComponent implements OnInit {
  userLoggedIn: boolean = true;
  mostrarJumbotron: boolean = true;

  constructor() {}

  ngOnInit() {}
}
