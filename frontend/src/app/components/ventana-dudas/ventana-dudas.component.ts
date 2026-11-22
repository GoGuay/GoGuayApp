import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NavController } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-ventana-dudas',
  standalone: true,
  imports: [MatButton, RouterModule, TranslateModule],
  templateUrl: './ventana-dudas.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./ventana-dudas.component.scss'],
})
export class VentanaDudasComponent implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}
  navigateToCentroAyuda() {
    this.navController.navigateForward(['/centro-ayuda'], { animated: false });
  }
}
