import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonicModule, ModalController } from '@ionic/angular';
import { TravelService } from '../../core/travel-services/travel.service';
import { Router } from '@angular/router';
import { send, closeOutline, sparkles, carSportOutline, checkmarkCircleOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
    selector: 'app-chat-maricar',
    templateUrl: './chat-maricar.component.html',
    styleUrls: ['./chat-maricar.component.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, IonicModule]
})
export class MaricarChatComponent {
    @ViewChild(IonContent, { static: false }) ionContent!: IonContent;

    mensajes: { remitente: 'ia' | 'usuario', texto: string }[] = [
        { remitente: 'ia', texto: '¡Hola! Soy MariCar, tu asistente de viajes. ¿A dónde te gustaría viajar y desde dónde salimos?' }
    ];

    inputUsuario: string = '';
    cargandoIA: boolean = false;

    creandoViajeEstado: boolean = false;
    viajeCreadoExito: boolean = false;
    mensajeCargaViaje: string = 'Calculando ruta y consumo de combustible...';

    constructor(
        private modalCtrl: ModalController,
        private travelService: TravelService,
        private router: Router
    ) {
        addIcons({ send, closeOutline, sparkles, carSportOutline, checkmarkCircleOutline });
    }

    onInputUsuarioChange(event: any) {
        const val = event.detail?.value || this.inputUsuario;
        if (val && val.length > 0) {
            this.inputUsuario = val.charAt(0).toUpperCase() + val.slice(1);
        } else {
            this.inputUsuario = '';
        }
    }

    enviarMensaje() {
        if (!this.inputUsuario.trim() || this.cargandoIA || this.creandoViajeEstado) return;

        const raw = this.inputUsuario.trim();
        const texto = raw.charAt(0).toUpperCase() + raw.slice(1);

        this.mensajes.push({ remitente: 'usuario', texto });
        this.inputUsuario = '';
        this.cargandoIA = true;

        this.hacerScrollAbajo();

        this.travelService.conversarConMariCar(this.mensajes).subscribe({
            next: (res: any) => {
                this.cargandoIA = false;
                this.mensajes.push({ remitente: 'ia', texto: res.mensaje_respuesta });

                this.hacerScrollAbajo();

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
                this.hacerScrollAbajo();
            }
        });
    }

    /**
     * Crea un viaje final mostrando un indicador de carga visual progresivo.
     */
    private crearViajeFinal(datosViaje: any) {
        this.creandoViajeEstado = true;
        this.viajeCreadoExito = false;
        this.mensajeCargaViaje = 'Calculando itinerario y huella de carbono...';
        this.hacerScrollAbajo();

        setTimeout(() => {
            if (this.creandoViajeEstado && !this.viajeCreadoExito) {
                this.mensajeCargaViaje = 'Guardando los datos de tu viaje en GoGuay...';
            }
        }, 1200);

        this.travelService.crearViajeIA(datosViaje).subscribe({
            next: () => {
                localStorage.setItem('creacion_viaje_completado', 'true');
                this.viajeCreadoExito = true;
                this.mensajeCargaViaje = '¡Viaje registrado con éxito! Redirigiendo a mis viajes...';
                this.hacerScrollAbajo();

                setTimeout(() => {
                    this.modalCtrl.dismiss();
                    this.router.navigate(['/mis-viajes']);
                }, 1800);
            },
            error: () => {
                this.creandoViajeEstado = false;
                this.mensajes.push({ remitente: 'ia', texto: 'Ocurrió un error guardando el viaje en la base de datos.' });
                this.hacerScrollAbajo();
            }
        });
    }

    private hacerScrollAbajo() {
        setTimeout(() => {
            if (this.ionContent) {
                this.ionContent.scrollToBottom(300);
            }
        }, 100);
    }

    cerrarModal() {
        this.modalCtrl.dismiss();
    }
}