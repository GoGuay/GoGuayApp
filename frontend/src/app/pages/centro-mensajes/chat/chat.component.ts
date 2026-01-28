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
    userLoggedIn: boolean = false;
    irAtrasImg: string = '../../../assets/sistema/atras.png';

    mensajes: any[] = [];
    texto = '';
    userId = 1;
    usuarioLogueadoId!: number;
    conversacionId!: number;

    constructor(private route: ActivatedRoute, private messagingService: MessagingService, private navCtrl: NavController) { }

    ngOnInit() {
        const data = JSON.parse(localStorage.getItem('userData') || '{}');
        this.usuarioLogueadoId = data.usuario.id;
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
}