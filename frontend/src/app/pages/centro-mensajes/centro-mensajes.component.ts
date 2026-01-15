import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, NavController } from '@ionic/angular/standalone';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { NavbarComponent } from "src/app/shared/navbar/navbar.component";
import { IonicModule } from "@ionic/angular";
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MessagingService } from 'src/app/core/menssaging-service/messaging.service';

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

    constructor(private messagingService: MessagingService, private navCtrl: NavController) { }

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

}