import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {NavController, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-nuevo-viaje-general',
  standalone: true,
  imports: [IonCol, IonRow, IonGrid,  MatButtonModule, TranslateModule],
  templateUrl: './nuevo-viaje-general.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./nuevo-viaje-general.component.scss'],
})
export class NuevoViajeGeneralComponent implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  /**
   * Función para navegar hasta el componente de "nuevo-viaje"
   */
  openNewTravel() {
    this.navCtrl.navigateRoot('/nuevo-viaje');
  }
}
