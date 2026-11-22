import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { ModalController, NavController, IonFooter, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
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
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [IonCol, IonRow, IonGrid, IonToolbar, IonFooter,  MatIconModule, TranslateModule],
})
export class FooterComponent implements OnInit {
  dialog = inject(MatDialog);
  isAdmin: boolean = false;

  constructor(
    private navCtrl: NavController,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.comprobarRolAdmin();
  }

  comprobarRolAdmin() {
    try {
      const userDataString = localStorage.getItem('userData');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        const rol = userData?.rolPerfil || userData?.usuario?.rolPerfil;
        this.isAdmin = rol === 'admin';
      } else {
        this.isAdmin = false;
      }
    } catch (e) {
      this.isAdmin = false;
    }
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
      initialBreakpoint: 0.7,
    });
    await modal.present();
  }
}
