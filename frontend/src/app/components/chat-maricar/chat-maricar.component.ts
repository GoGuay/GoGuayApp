import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonicModule, ModalController } from '@ionic/angular';
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
    @ViewChild(IonContent, { static: false }) ionContent!: IonContent;
    
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

    /**
     * Función que se ejecuta cuando el usuario cambia el valor del input.
     * Convierte la primera letra del input a mayúscula y actualiza el valor de inputUsuario.
     * @param event representa el evento de cambio del input, que contiene el valor ingresado por el usuario.
     */
    onInputUsuarioChange(event: any) {
        const val = event.detail?.value || this.inputUsuario;
        if (val && val.length > 0) {
            this.inputUsuario = val.charAt(0).toUpperCase() + val.slice(1);
        }
    }

    /**
     * Función para enviar un mensaje al asistente MariCar. 
     * Valida que el input del usuario no esté vacío y que no haya una respuesta pendiente de la IA.
     * Luego, agrega el mensaje del usuario a la lista de mensajes y llama al servicio para obtener la respuesta de la IA.
     * @returns devuelve void. No retorna ningún valor.
     */
    enviarMensaje() {
        if (!this.inputUsuario.trim() || this.cargandoIA) return;

        const texto = this.inputUsuario.trim().charAt(0).toUpperCase() + this.inputUsuario.trim().slice(1);
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
     * Crea un viaje final basado en los datos proporcionados.
     * @param datosViaje respuesta de la IA con los datos del viaje a crear.
     */
    private crearViajeFinal(datosViaje: any) {
        this.mensajes.push({ remitente: 'ia', texto: '¡Excelente! Estoy calculando el combustible y registrando tu viaje...' });

        this.travelService.crearViajeIA(datosViaje).subscribe({
            next: () => {
                localStorage.setItem('creacion_viaje_completado', 'true');
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

    /**
     * Hace scroll hacia abajo del contenido del chat para mostrar el último mensaje.
     * Se utiliza un setTimeout para esperar a que el DOM se actualice antes de hacer el scroll.
     */
    private hacerScrollAbajo() {
        setTimeout(() => {
            if (this.ionContent) {
                this.ionContent.scrollToBottom(300); // 300ms de animación suave
            }
        }, 100);
    }

    /**
     * Cierra el modal del chat de MariCar.
     */
    cerrarModal() {
        this.modalCtrl.dismiss();
    }
}