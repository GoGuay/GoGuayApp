import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NavController, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-buscador-viaje-home',
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, MatButtonModule, TranslateModule],
  templateUrl: './buscador_viaje_home.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./buscador_viaje_home.component.scss'],
})
export class BuscadorViajeHomeComponent implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  openSearch() {
    this.navCtrl.navigateRoot(['/busqueda-viajes']);
  }
}
