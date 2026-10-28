import { Component, OnInit, inject } from '@angular/core';
import { IonicModule, ModalController, NavController } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { TerminosComponent } from '../../components/terminos/terminos.component';
import { CookiesComponent } from '../../components/cookies/cookies.component';
import { TranslateModule } from '@ngx-translate/core';
import { OnboardingModalComponent } from 'src/app/components/onboarding/onboarding-modal.component';


@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [IonicModule, MatIconModule, TranslateModule],
})
export class FooterComponent implements OnInit {

  dialog = inject(MatDialog);

  constructor(private navCtrl: NavController, private modalController: ModalController) { }

  ngOnInit() {}

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

  openFAQs() {
    this.navCtrl.navigateRoot('/faqs', {});
  }

  openDecalogo() {
    this.navCtrl.navigateRoot('/decalogo', {});
  }

  openQuienesSomos() {
    this.navCtrl.navigateRoot('/sobre-nosotros', {});
  }

  async abrirOnboarding() {
    const modal = await this.modalController.create({
      component: OnboardingModalComponent,
      cssClass: 'modal-qr-verificacion',
      breakpoints: [0, 0.7],
      initialBreakpoint: 0.7
    });
    await modal.present();
  }
}
