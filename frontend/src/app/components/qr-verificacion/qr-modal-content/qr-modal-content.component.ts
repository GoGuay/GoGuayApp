import { Component, ElementRef, ViewChild, AfterViewInit, Input, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import * as QRCode from 'qrcode';
import { TravelService } from 'src/app/core/travel-services/travel.service';

@Component({
  selector: 'app-qr-modal-content',
  templateUrl: './qr-modal-content.component.html',
  styleUrls: ['./qr-modal-content.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    ZXingScannerModule,
    ToastModule
  ],
  providers: [MessageService]
})
export class QrModalContentComponent implements AfterViewInit {
  @Input() viaje: any;
  @Input() esConductor: boolean = false;
  @Input() qrDataString: string = '';

  @ViewChild('qrCanvas') qrCanvas!: ElementRef<HTMLCanvasElement>;

  escaneando: boolean = false;
  verificacionCompletada: boolean = false;

  constructor(
    private modalCtrl: ModalController,
    private travelService: TravelService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    if (this.esConductor && this.viaje) {
      const payload = {
        viaje_id: this.viaje.id,
        conductor_id: this.viaje.usuario_id,
        timestamp: new Date().getTime()
      };
      this.qrDataString = JSON.stringify(payload);
    }
  }

  ngAfterViewInit() {
    if (this.esConductor && this.qrCanvas && this.qrDataString) {
      this.generarCodigoQR();
    }
  }

  generarCodigoQR() {
    QRCode.toCanvas(this.qrCanvas.nativeElement, this.qrDataString, {
      width: 240,
      margin: 2
    }, (error: any) => {
      if (error) console.error('Error al generar el QR:', error);
    });
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  onCodeScanned(resultString: string) {
    try {
      const dataScanned = JSON.parse(resultString);

      if (dataScanned.viaje_id === this.viaje.id) {
        this.escaneando = false;
        
        this.travelService.validarEmbarquePasajero(this.viaje.id).subscribe({
          next: () => {
            this.verificacionCompletada = true;
            this.messageService.add({
              severity: 'success',
              summary: '¡Abordo confirmado!',
              detail: 'Has verificado tu plaza en el vehículo correctamente.'
            });
          },
          error: (err) => {
            console.error('Error al validar embarque:', err);
          }
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'QR No Válido',
          detail: 'Este código QR no corresponde a tu viaje en curso.'
        });
      }
    } catch (e) {
      console.error('Código QR erróneo:', e);
    }
  }
}