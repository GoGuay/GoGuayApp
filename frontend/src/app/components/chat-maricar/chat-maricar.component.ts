import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { TravelService } from '../../core/travel-services/travel.service';
import { Router } from '@angular/router';
import { send, closeOutline, sparkles, carSportOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
    selector: 'app-chat-maricar',
    templateUrl: './chat-maricar.component.html',
    styleUrls: ['./chat-maricar.component.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, IonicModule]
})
export class MaricarChatComponent {
    mensajes: { remitente: 'ia' | 'usuario', texto: string }[] = [
        { remitente: 'ia', texto: '¡Hola! Soy MariCar, tu asistente de viajes. ¿A dónde te gustaría viajar y desde dónde salimos?' }
    ];

    inputUsuario: string = '';
    cargandoIA: boolean = false;

    constructor(
        private modalCtrl: ModalController,
        private travelService: TravelService,
        private router: Router
    ) {
        addIcons({ send, closeOutline, sparkles, carSportOutline });
    }

    onInputUsuarioChange(event: any) {
        const val = event.detail?.value || this.inputUsuario;
        if (val && val.length > 0) {
            this.inputUsuario = val.charAt(0).toUpperCase() + val.slice(1);
        }
    }

    enviarMensaje() {
        if (!this.inputUsuario.trim() || this.cargandoIA) return;

        const texto = this.inputUsuario.trim().charAt(0).toUpperCase() + this.inputUsuario.trim().slice(1);
        this.mensajes.push({ remitente: 'usuario', texto });
        this.inputUsuario = '';
        this.cargandoIA = true;

        this.travelService.conversarConMariCar(this.mensajes).subscribe({
            next: (res: any) => {
                this.cargandoIA = false;
                this.mensajes.push({ remitente: 'ia', texto: res.mensaje_respuesta });

                if (res.datos_completos && res.viaje_data) {
                    this.crearViajeFinal(res.viaje_data);
                }
            },
            error: () => {
                this.cargandoIA = false;
                this.mensajes.push({
                    remitente: 'ia',
                    texto: 'He tenido un pequeño problema al conectarme. ¿Podrías indicarme de nuevo los datos?'
                });
            }
        });
    }

    private crearViajeFinal(datosViaje: any) {
        this.mensajes.push({ remitente: 'ia', texto: '¡Excelente! Estoy calculando el combustible y registrando tu viaje...' });

        this.travelService.crearViajeIA(datosViaje).subscribe({
            next: () => {
                this.mensajes.push({ remitente: 'ia', texto: '¡Listo! Tu viaje ha sido creado con éxito. Redirigiendo...' });
                setTimeout(() => {
                    this.modalCtrl.dismiss();
                    this.router.navigate(['/mis-viajes']);
                }, 1500);
            },
            error: () => {
                this.mensajes.push({ remitente: 'ia', texto: 'Ocurrió un error guardando el viaje en la base de datos.' });
            }
        });
    }

    cerrarModal() {
        this.modalCtrl.dismiss();
    }
}