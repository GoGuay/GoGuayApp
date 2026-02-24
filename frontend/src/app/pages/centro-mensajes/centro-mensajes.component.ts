import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular/standalone';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { NavbarComponent } from "src/app/shared/navbar/navbar.component";
import { IonicModule } from "@ionic/angular";
import { MessagingService } from 'src/app/core/menssaging-service/messaging.service';
import { PopoverController, AlertController } from '@ionic/angular';

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
        IonicModule
    ],
    providers: []
})
export class CentroMensajesPage implements OnInit {

    userLoggedIn: boolean = false;
    irAtrasImg: string = '../../../assets/sistema/atras.png';
    conversaciones: any[] = [];
    userData: any;

    constructor(private messagingService: MessagingService, private navCtrl: NavController, private popoverCtrl: PopoverController,
        private alertCtrl: AlertController) { }

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
                // Navegamos al chat
                this.navCtrl.navigateForward(['/chat', conv.id], {
                    animated: false
                });
            },
            error: (err) => {
                console.error("No se pudo marcar como leído al entrar", err);
                // Navegamos de todos modos aunque falle la marca
                this.navCtrl.navigateForward(['/chat', conv.id], { animated: false });
            }
        });
    }

    /**
     * Funcion que carga las conversaciones
     */
    cargarConversaciones() {
        this.messagingService.getConversaciones(this.userData.usuario.id).subscribe(data => {
            this.conversaciones = data;
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

        const popover = await this.popoverCtrl.create({
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
        const actionSheet = await this.alertCtrl.create({
            header: 'Opciones de chat',
            cssClass: 'custom-alert-chat',
            buttons: [
                {
                    text: conv.no_leidos > 0 ? 'Marcar como leído' : 'Marcar como no leído',
                    handler: () => {
                        this.alternarEstadoLeido(conv);
                    }
                },
                {
                    text: 'Eliminar conversación',
                    role: 'destructive',
                    handler: () => {
                        this.confirmarEliminacion(conv);
                    }
                },
                {
                    text: 'Cancelar',
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