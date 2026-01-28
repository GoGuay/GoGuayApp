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

    abrirChat(conv: any) {
        this.navCtrl.navigateForward(['/chat', conv.id], {
            animated: false  // -> Elimina las animaciones de navegación de Ionic
        });
    }

    cargarConversaciones() {
        this.messagingService.getConversaciones(this.userData.usuario.id).subscribe(data => {
            this.conversaciones = data;
            console.log('Conversaciones cargadas:', this.conversaciones);
        });
    }

    goBack() {
        this.navCtrl.navigateBack('/home', {
            animated: false // -> Elimina las animaciones de navegación de Ionic
        });
    }

    irABuscar() {
        this.navCtrl.navigateForward('/busqueda-viajes');
    }

    async abrirOpciones(ev: any, conv: any) {
        ev.stopPropagation(); // Evita que se abra el chat al hacer clic en los puntos

        const popover = await this.popoverCtrl.create({
            component: 'popover-opciones', // Podemos usar un template o un componente
            event: ev,
            translucent: true,
            mode: 'ios',
            componentProps: { conversacion: conv }
        });

        // En lugar de un componente externo, para algo rápido podemos usar ActionSheetController
        // o crear un menú dinámico. Aquí te muestro cómo manejar las acciones:

        // Para este ejemplo, usaremos un Action Sheet que es más nativo para móviles:
        this.mostrarMenuAcciones(conv);
    }

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

    alternarEstadoLeido(conv: any) {
        const accionLeer = conv.no_leidos > 0;
        const usuarioId = this.userData.usuario.id;
        this.messagingService.cambiarEstadoLectura(conv.id, usuarioId, accionLeer).subscribe({
            next: () => {
                this.cargarConversaciones(); // Refresca la lista y los badges
            },
            error: (err) => console.error('Error al cambiar estado:', err)
        });
    }

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