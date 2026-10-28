import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { TravelService } from '../../core/travel-services/travel.service';
import { Viaje } from '../../models/travel/viaje.model';
import { Subscription, interval } from 'rxjs';
import { QrModalContentComponent } from './qr-modal-content/qr-modal-content.component';

@Component({
    selector: 'app-qr-verificacion',
    templateUrl: './qr-verificacion.component.html',
    styleUrls: ['./qr-verificacion.component.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule]
})
export class QrVerificacionComponent implements OnInit, OnDestroy {
    viajeEnCurso: Viaje | null = null;
    esConductor: boolean = false;
    mostrarBoton: boolean = false;
    private subscrTimer!: Subscription;

    constructor(
        private travelService: TravelService,
        private modalCtrl: ModalController,
        private cdr: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.comprobarViajeEnCurso();
        this.subscrTimer = interval(5000).subscribe(() => this.comprobarViajeEnCurso());
    }

    ngOnDestroy() {
        if (this.subscrTimer) this.subscrTimer.unsubscribe();
    }

    comprobarViajeEnCurso() {
        const rawData = localStorage.getItem('userData') || localStorage.getItem('user') || '{}';
        let parsedData: any = {};

        try {
            parsedData = JSON.parse(rawData);
        } catch (e) {
            console.error('Error parseando userData del localStorage:', e);
        }

        const userId = parsedData?.usuario?.id || parsedData?.id || parsedData?.usuario_id || parsedData?.user?.id;

        if (!userId) {
            this.mostrarBoton = false;
            this.cdr.detectChanges();
            return;
        }

        const numericUserId = Number(userId);

        this.travelService.getViajeEnCursoUsuario(numericUserId).subscribe({
            next: (res: any) => {
                if (res && res.viaje) {
                    this.viajeEnCurso = res.viaje;

                    const conductorId = Number(res.viaje.usuario_id || res.viaje.usuario_creador?.id);
                    this.esConductor = conductorId === numericUserId;

                    const estadoActual = (res.viaje.estado_viaje || '').trim().toLowerCase();
                    this.mostrarBoton = estadoActual === 'en curso';
                } else {
                    this.mostrarBoton = false;
                }

                this.cdr.detectChanges();
            },
            error: (err) => {
                console.error('Error obteniendo viaje en curso:', err);
                this.mostrarBoton = false;
                this.cdr.detectChanges();
            }
        });
    }

    async abrirModalQR() {
        if (!this.viajeEnCurso) return;

        const modal = await this.modalCtrl.create({
            component: QrModalContentComponent,
            componentProps: {
                viaje: this.viajeEnCurso,
                esConductor: this.esConductor
            },
            cssClass: 'modal-qr-verificacion',
            breakpoints: [0, 0.75, 0.9],
            initialBreakpoint: 0.75
        });

        await modal.present();
    }
}