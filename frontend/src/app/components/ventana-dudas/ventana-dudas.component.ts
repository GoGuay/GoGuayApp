import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-ventana-dudas',
  standalone: true,
  imports: [MatButton, RouterModule, TranslateModule, MatIcon],
  templateUrl: './ventana-dudas.component.html',
  styleUrls: ['./ventana-dudas.component.scss'],
})
export class VentanaDudasComponent  implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {}
  navigateToCentroAyuda() {
    this.navController.navigateForward(['/centro-ayuda'], { animated: false  });
  }
}
