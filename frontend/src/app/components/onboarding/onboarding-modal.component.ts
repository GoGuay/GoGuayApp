import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'app-onboarding-modal',
    standalone: true,
    imports: [IonicModule, CommonModule],
    templateUrl: './onboarding-modal.component.html',
    styleUrls: ['./onboarding-modal.component.scss'],
    animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(12px) scale(0.98)' }),
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)', 
          style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ]),
      transition(':leave', [
        animate('200ms cubic-bezier(0.4, 0, 0.2, 1)', 
          style({ opacity: 0, transform: 'translateY(-10px) scale(0.98)' }))
      ])
    ])
  ]
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