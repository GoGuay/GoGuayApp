import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-nuevo-viaje-general',
  standalone: true,
  imports: [IonicModule, MatButtonModule, TranslateModule],
  templateUrl: './nuevo-viaje-general.component.html',
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
