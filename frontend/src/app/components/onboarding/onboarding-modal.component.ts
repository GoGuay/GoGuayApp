import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
    selector: 'app-onboarding-modal',
    standalone: true,
    imports: [IonicModule, CommonModule],
    templateUrl: './onboarding-modal.component.html',
    styleUrls: ['./onboarding-modal.component.scss'],
})
export class OnboardingModalComponent {
    pasoActual: number = 1;
    readonly TOTAL_PASOS: number = 7;

    constructor(private modalCtrl: ModalController) { }

    siguientePaso() {
        if (this.pasoActual < this.TOTAL_PASOS) {
            this.pasoActual++;
        } else {
            this.finalizar();
        }
    }

    pasoAnterior() {
        if (this.pasoActual > 1) {
            this.pasoActual--;
        }
    }

    saltarOnboarding() {
        this.finalizar();
    }

    private finalizar() {
        localStorage.setItem('onboarding_visto', 'true');
        this.modalCtrl.dismiss();
    }
}