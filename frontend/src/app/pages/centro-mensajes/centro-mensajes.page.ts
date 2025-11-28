import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader } from '@ionic/angular/standalone';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { NavbarComponent } from "src/app/shared/navbar/navbar.component";
import { IonicModule } from "@ionic/angular";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-centro-mensajes',
    templateUrl: './centro-mensajes.page.html',
    styleUrls: ['./centro-mensajes.page.scss'],
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

    conversaciones = [
        { id: 1, nombre: 'Usuario Ejemplo', ultimoMensaje: 'Hola!' },
        { id: 2, nombre: 'Juan Pedro', ultimoMensaje: 'Buenas tardes!' }

    ];

    constructor(private router: Router, private location: Location) { }

    ngOnInit() { }

    abrirChat(conv: any) {
        this.router.navigate(['/chat', conv.id]);
    }

    goBack() {
        this.location.back();
    }

}