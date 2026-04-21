import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { IonicModule, NavController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-buscador-viaje-home',
  standalone: true,
  imports: [IonicModule, MatButtonModule, TranslateModule],
  templateUrl: './buscador_viaje_home.component.html',
  styleUrls: ['./buscador_viaje_home.component.scss'],
})
export class BuscadorViajeHomeComponent implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  openSearch() {
    this.navCtrl.navigateRoot(['/busqueda-viajes']);
  }
}
