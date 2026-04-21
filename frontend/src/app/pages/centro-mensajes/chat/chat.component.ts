import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { NavbarComponent } from "src/app/shared/navbar/navbar.component";
import { IonContent, IonicModule, NavController } from "@ionic/angular";
import { ActivatedRoute, Router } from '@angular/router';
import { MessagingService } from 'src/app/core/menssaging-service/messaging.service';
import { Mensaje } from 'src/app/models/mensajes/mensaje.model';
import { Usuario } from 'src/app/models/user/usuario.model';
import { NotificacionesService } from 'src/app/core/notificaciones/notificaciones.service';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { SpinnerComponent } from "src/app/components/spinner/spinner.component";

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
    standalone: true,
    imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSliderModule,
    NavbarComponent,
    IonicModule,
    SpinnerComponent
],
    providers: []
})
export class ChatPage implements OnInit {

    @ViewChild(IonContent, { static: false }) content!: IonContent;

    userData: any = {} as Usuario;

    mostrarPreguntaTelefono: boolean = true;
    telefonoRecibido: string | null = null;
    cargandoPreferenciaTelefono: boolean = true;
    compartiendoMiTelefono: boolean = false;

    userLoggedIn: boolean = false;
    irAtrasImg: string = '../../../assets/sistema/atras.png';

    mensajes: any[] = [];
    texto = '';
    userId = 1;
    usuarioLogueadoId!: number;
    conversacionId!: number;
    detallesConversacion: any;

    cargandoSolicitud: { [key: number]: boolean } = {};
    solicitudesGestionadas: { [key: number]: 'aceptada' | 'rechazada' } = {};

    constructor(private route: ActivatedRoute,
        private messagingService: MessagingService,
        private notificacionesService: NotificacionesService,
        private travelService: TravelService,
        private navCtrl: NavController) { }

    ngOnInit() {
        this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
        this.usuarioLogueadoId = this.userData.usuario.id;
        this.conversacionId = Number(this.route.snapshot.paramMap.get('id'));

        this.cargarMensajes();
        this.marcarComoLeidos();
    }

    /**
     * Función para cargar los mensajes de la conversación.
     */
    cargarMensajes() {
        this.messagingService.getMensajes(this.conversacionId).subscribe(data => {
            this.mensajes = data;

            this.telefonoRecibido = null;
            this.compartiendoMiTelefono = false;

            data.forEach((m: any) => {
                if (m.texto.includes('TELEFONO USUARIO:')) {
                    if (m.emisor_id === this.usuarioLogueadoId) {
                        this.compartiendoMiTelefono = true;
                    } else {
                        this.telefonoRecibido = m.texto.split(':')[1].trim();
                    }
                }
            });

            this.mostrarPreguntaTelefono = !this.compartiendoMiTelefono;

            this.cargandoPreferenciaTelefono = false;
            this.scrollToBottom();
        });
    }

    /**
     * Función para enviar un nuevo mensaje.
     */
    enviar(viajeId?: any) {
        if (!this.texto.trim()) return;

        let receptorId = 0;
        if (this.mensajes.length > 0) {
            const primerMsj = this.mensajes[0];
            receptorId = primerMsj.emisor_id !== this.usuarioLogueadoId 
                        ? primerMsj.emisor_id 
                        : primerMsj.receptor_id;
        }

        const nuevoMensaje: any = {
            emisor_id: this.usuarioLogueadoId,
            receptor_id: receptorId,
            conversacion_id: this.conversacionId,
            texto: this.texto
        };

        if (viajeId) {
            nuevoMensaje.viaje_id = viajeId;
        }

        this.messagingService.enviarMensaje(nuevoMensaje).subscribe(res => {
            this.mensajes.push(res);
            this.texto = '';
            this.scrollToBottom();
        });
    }

    /**
     * Función para volver atrás.
     */
    goBack() {
        this.navCtrl.navigateBack('/messaging-center', {
            animated: false
        });
    }

    /**
     * Función para marcar los mensajes como leídos.
     */
    marcarComoLeidos() {
        this.messagingService.marcarComoLeido(this.conversacionId, this.usuarioLogueadoId).subscribe();
    }

    /**
     * Función para desplazar el contenido al final.
     */
    scrollToBottom() {
        setTimeout(() => {
            if (this.content) {
                this.content.scrollToBottom(300);
            }
        }, 100);
    }

    /**
     * Función para decidir si compartir o no el teléfono con el otro usuario de la conversación.
     * @param acepta --> Recibe un booleano indicando si el usuario acepta compartir su teléfono (true para aceptar, false para rechazar).
     */
    decidirCompartirTelefono(acepta: boolean) {
        if (acepta) {
            this.enviarNotificacionTelefono();
        } else {
            this.mostrarPreguntaTelefono = false;
        }
    }

    /**
     * Función para enviar una notificación al otro usuario de la conversación 
     * con el teléfono del usuario logueado (compartir teléfono).
     * 
     * @returns --> Devuelve un booleano indicando si se compartió el teléfono correctamente o no (true para compartido, false para error).
     */
    enviarNotificacionTelefono() {
        const mensajeReferencia = this.mensajes[0];

        if (!mensajeReferencia) {
            console.error("No se pudo determinar el receptor_id porque no hay mensajes.");
            return;
        }


        const receptorId = mensajeReferencia.emisor_id !== this.usuarioLogueadoId
            ? mensajeReferencia.emisor_id
            : mensajeReferencia.receptor_id;

        if (!receptorId || receptorId === 0) {
            console.error("Error: receptorId inválido.");
            return;
        }

        const payload = {
            conversacion_id: this.conversacionId,
            emisor_id: this.usuarioLogueadoId,
        };

        this.notificacionesService.compartirTelefono(payload).subscribe({
            next: (res) => {
                this.mostrarPreguntaTelefono = false;
                this.cargarMensajes();
            },
            error: (err) => console.error('Error al compartir', err)
        });
    }

    /**
     * Función para dejar de compartir el teléfono (revocar acceso al teléfono). 
     * Solo se muestra si el usuario ha compartido su teléfono previamente.
     */
    dejarDeCompartir() {
        const payload = {
            conversacion_id: this.conversacionId,
            emisor_id: this.usuarioLogueadoId
        };

        this.notificacionesService.dejarDeCompartirTelefono(payload).subscribe({
            next: (res) => {
                console.log("Teléfono compartido con éxito.");
                this.mostrarPreguntaTelefono = false;
                this.cargarMensajes();
            },
            error: (err) => {
                console.error('Error al compartir teléfono', err);
                this.mostrarPreguntaTelefono = true;
                this.notificacionesService.mostrarToast({
                    id: Date.now(),
                    type: 'info',
                    mensaje: 'No se pudo revocar el acceso al teléfono',
                    leida: false
                });
            }
        });
    }

    /**
     * Función para mostrar la fecha en el chat solo cuando cambia el día entre mensajes.
     * @param index --> Recibe el índice del mensaje actual en el array de mensajes.
     * @returns --> Devuelve un booleano indicando si se debe mostrar la fecha o no (true para mostrar, false para ocultar).
     */
    mostrarFecha(index: number): boolean {
        if (index === 0) return true;

        const fechaActual = new Date(this.mensajes[index].fecha).setHours(0, 0, 0, 0);
        const fechaAnterior = new Date(this.mensajes[index - 1].fecha).setHours(0, 0, 0, 0);

        return fechaActual !== fechaAnterior;
    }

    /**
     * Función para gestionar una solicitud de unirse a un viaje (aceptar o rechazar).
     * @param mensaje --> Recibe el mensaje que contiene la solicitud de unirse a un viaje.
     * @param accion  --> Recibe la acción que se quiere realizar con la solicitud (aceptar o rechazar).
     */
    gestionarSolicitud(mensaje: any, accion: 'aceptar' | 'rechazar') {
        const viajeId = mensaje.texto.split(':')[1];
        const pasajeroId = mensaje.emisor_id;
        const mensajeId = mensaje.id;

        this.cargandoSolicitud[mensajeId] = true;

        if (accion === 'aceptar') {
            this.travelService.confirmarPasajeroManual(viajeId, pasajeroId).subscribe({
                next: () => {
                    this.solicitudesGestionadas[mensajeId] = 'aceptada';
                    this.cargandoSolicitud[mensajeId] = false;
                    this.enviarMensajeSistema("He aceptado tu solicitud. ¡Nos vemos en el viaje!", viajeId);
                },
                error: (err) => {
                    this.cargandoSolicitud[mensajeId] = false;
                }
            });
        } else {
            setTimeout(() => {
                this.solicitudesGestionadas[mensajeId] = 'rechazada';
                this.cargandoSolicitud[mensajeId] = false;
                this.enviarMensajeSistema("Lo siento, no puedo aceptarte en este viaje en este momento.");
            }, 1000);
        }
    }

    /**
     * Función para enviar un mensaje del sistema (respuestas a solicitudes de viaje).
     * 
     * @param texto --> Recibe el texto que se quiere enviar como mensaje del sistema (aceptación o rechazo de solicitud de viaje).
     */
    enviarMensajeSistema(texto: string, viajeId?: any) {
        this.texto = texto;
        this.enviar(viajeId);
    }
}