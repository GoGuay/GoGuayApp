import { Component, OnInit, inject } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { TerminosComponent } from 'src/app/components/terminos/terminos.component';
import { CookiesComponent } from 'src/app/components/cookies/cookies.component';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [IonicModule, MatIconModule, TranslateModule],
})
export class FooterComponent implements OnInit {

  dialog = inject(MatDialog);

  constructor(private navCtrl: NavController) { }

  ngOnInit() {

  }

  openTerms() {
    this.dialog.open(TerminosComponent, {});
  }

  openCookies() {
    this.dialog.open(CookiesComponent, {});
  }

  openCondiciones() {
    this.navCtrl.navigateRoot('/condiciones-generales', {});
  }

  openAdmin() {
    this.navCtrl.navigateRoot('/login-admin', {});
  }
}
