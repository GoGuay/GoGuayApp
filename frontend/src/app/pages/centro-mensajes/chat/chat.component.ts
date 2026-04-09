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
        IonicModule
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

    constructor(private route: ActivatedRoute,
        private messagingService: MessagingService,
        private notificacionesService: NotificacionesService,
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

            const mensajeDelOtro = data.find((m: any) =>
                m.texto.startsWith('TELEFONO USUARIO: ') &&
                m.emisor_id !== this.usuarioLogueadoId
            );
            this.telefonoRecibido = mensajeDelOtro ? mensajeDelOtro.texto.split(':')[1] : null;

            this.compartiendoMiTelefono = data.some((m: any) =>
                m.texto.startsWith('TELEFONO USUARIO: ') &&
                m.emisor_id === this.usuarioLogueadoId
            );

            this.mostrarPreguntaTelefono = !this.compartiendoMiTelefono;
            this.cargandoPreferenciaTelefono = false;

            this.scrollToBottom();
        });
    }

    /**
     * Función para enviar un nuevo mensaje.
     */
    enviar() {
        if (!this.texto.trim()) return;

        const nuevoMensaje: Mensaje = {
            emisor_id: this.usuarioLogueadoId,
            receptor_id: 0,
            conversacion_id: this.conversacionId,
            texto: this.texto
        };

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

    decidirCompartirTelefono(acepta: boolean) {
        if (acepta) {
            this.enviarNotificacionTelefono();
        } else {
            this.mostrarPreguntaTelefono = false;
        }
    }

    enviarNotificacionTelefono() {
        const receptorId = this.mensajes.find(m => m.emisor_id === this.usuarioLogueadoId)?.receptor_id;

        if (!receptorId) {
            console.error("No se pudo determinar el receptor_id. Prueba a enviar un mensaje de texto primero.");
            return;
        }

        const payload: Mensaje = {
            conversacion_id: this.conversacionId,
            emisor_id: this.usuarioLogueadoId,
            receptor_id: receptorId,
            texto: `TELEFONO USUARIO: ${this.userData.usuario.telefono}`
        };

        this.messagingService.enviarMensaje(payload).subscribe({
            next: () => {
                this.mostrarPreguntaTelefono = false;
                this.cargarMensajes();
            },
            error: (err) => console.error('Error al compartir teléfono', err)
        });
    }

    /**
     * 
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

    mostrarFecha(index: number): boolean {
        if (index === 0) return true;

        const fechaActual = new Date(this.mensajes[index].fecha).setHours(0, 0, 0, 0);
        const fechaAnterior = new Date(this.mensajes[index - 1].fecha).setHours(0, 0, 0, 0);

        return fechaActual !== fechaAnterior;
    }
}