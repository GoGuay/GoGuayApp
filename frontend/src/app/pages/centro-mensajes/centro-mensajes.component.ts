import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular/standalone';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { IonicModule } from "@ionic/angular";
import { MessagingService } from '../../core/menssaging-service/messaging.service';
import { PopoverController, AlertController } from '@ionic/angular';
import { SpinnerComponent } from "../../components/spinner/spinner.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-centro-mensajes',
    templateUrl: './centro-mensajes.component.html',
    styleUrls: ['./centro-mensajes.component.scss'],
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
        SpinnerComponent,
        TranslateModule
    ],
    providers: []
})
export class CentroMensajesPage implements OnInit {

    userLoggedIn: boolean = false;
    irAtrasImg: string = '../../../assets/sistema/atras.png';
    conversaciones: any[] = [];
    userData: any;
    loadMessages: boolean = false;

    constructor(
        private messagingService: MessagingService, 
        private navCtrl: NavController, 
        private popoverCtrl: PopoverController,
        private alertCtrl: AlertController,
        private translate: TranslateService) { }

    ngOnInit() {
        this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
        if (this.userData?.usuario?.id) {
            this.cargarConversaciones();
        }
    }

    /**
     * Carga las conversaciones al entrar a la página
     */
    ionViewWillEnter() {
        if (this.userData?.usuario?.id) {
            this.cargarConversaciones();
        }
    }

    /**
     * Funcion que abre el chat de una conversacion
     * 
     * @param conv Conversacion a la que se le va a abrir el chat
     */
    abrirChat(conv: any) {
        const usuarioId = this.userData.usuario.id;

        this.messagingService.marcarComoLeido(conv.id, usuarioId).subscribe({
            next: () => {
                this.navCtrl.navigateForward(['/chat', conv.id], {
                    animated: false
                });
            },
            error: (err) => {
                console.error("No se pudo marcar como leído al entrar", err);
                this.navCtrl.navigateForward(['/chat', conv.id], { animated: false });
            }
        });
    }

    /**
     * Funcion que carga las conversaciones
     */
    cargarConversaciones() {
        this.loadMessages = true;
        this.messagingService.getConversaciones(this.userData.usuario.id).subscribe(data => {
            this.conversaciones = data;
            this.loadMessages = false;
            console.log('Conversaciones cargadas:', this.conversaciones);
        });
    }

    /**
     * Funcion que navega hacia la pagina de inicio
     */
    goBack() {
        this.navCtrl.navigateBack('/home', {
            animated: false // -> Elimina las animaciones de navegación de Ionic
        });
    }

    /**
     * Funcion que navega hacia la pagina de busqueda de viajes
     */
    irABuscar() {
        this.navCtrl.navigateForward('/busqueda-viajes');
    }

    /**
     * Funcion que abre el menu de opciones de una conversacion
     * 
     * @param ev Evento que se dispara al hacer clic en el menu
     * @param conv Conversacion a la que se le va a abrir el menu
     */
    async abrirOpciones(ev: any, conv: any) {
        ev.stopPropagation();

        await this.popoverCtrl.create({
            component: 'popover-opciones',
            event: ev,
            translucent: true,
            mode: 'ios',
            componentProps: { conversacion: conv }
        });
        this.mostrarMenuAcciones(conv);
    }

    /**
     * Funcion que muestra el menu de acciones de una conversacion
     * 
     * @param conv Conversacion a la que se le va a mostrar el menu
     */
    async mostrarMenuAcciones(conv: any) {
        const tHeader = this.translate.instant('CENTRO_MENSAJES.CHAT_OPCIONES.HEADER');
        const tDelete = this.translate.instant('CENTRO_MENSAJES.CHAT_OPCIONES.ELIMINAR');
        const tCancel = this.translate.instant('CENTRO_MENSAJES.CHAT_OPCIONES.CANCELAR');
        const tRead = this.translate.instant('CENTRO_MENSAJES.CHAT_OPCIONES.LEIDO');
        const tUnread = this.translate.instant('CENTRO_MENSAJES.CHAT_OPCIONES.NO_LEIDO');

        const actionSheet = await this.alertCtrl.create({
            header: tHeader,
            cssClass: 'custom-alert-chat',
            buttons: [
                {
                    text: conv.no_leidos > 0 ? tRead : tUnread,
                    handler: () => {
                        this.alternarEstadoLeido(conv);
                    }
                },
                {
                    text: tDelete,
                    role: 'destructive',
                    handler: () => {
                        this.confirmarEliminacion(conv);
                    }
                },
                {
                    text: tCancel,
                    role: 'cancel'
                }
            ]
        });
        await actionSheet.present();
    }

    /**
     * Funcion que alterna el estado de lectura de una conversacion
     * 
     * @param conv Conversacion a la que se le va a alterar el estado de lectura
     */
    alternarEstadoLeido(conv: any) {
        const marcarComoLeido = conv.no_leidos > 0;
        const usuarioId = this.userData.usuario.id;

        console.log(`Conversación ${conv.id}. Acción: ${marcarComoLeido ? 'Leer' : 'No Leer'}`);

        this.messagingService.cambiarEstadoLectura(conv.id, usuarioId, marcarComoLeido).subscribe({
            next: () => {
                console.log('Cambio de estado exitoso');
                this.cargarConversaciones(); // Recarga la lista para ver el badge rojo
            },
            error: (err) => {
                console.error('Error al cambiar estado:', err);
            }
        });
    }

    /**
     * Funcion que confirma la eliminacion de una conversacion
     * 
     * @param conv Conversacion a la que se le va a confirmar la eliminacion
     */
    async confirmarEliminacion(conv: any) {
        const alert = await this.alertCtrl.create({
            header: '¿Eliminar conversación?',
            cssClass: 'custom-alert-delete-chat',
            message: 'Esta acción no se puede deshacer.',
            buttons: [
                { text: 'Cancelar', role: 'cancel' },
                {
                    text: 'Eliminar',
                    handler: () => {
                        this.messagingService.eliminarConversacion(conv.id).subscribe(() => {
                            this.cargarConversaciones();
                        });
                    }
                }
            ]
        });
        await alert.present();
    }
}