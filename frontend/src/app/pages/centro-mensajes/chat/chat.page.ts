import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { NavbarComponent } from "src/app/shared/navbar/navbar.component";
import { IonicModule } from "@ionic/angular";
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.page.html',
    styleUrls: ['./chat.page.scss'],
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

    userLoggedIn: boolean = false;
    irAtrasImg: string = '../../../assets/sistema/atras.png';

    mensajes: any[] = [];
    texto = '';
    userId = 1;
    conversacionId!: number;

    constructor(private route: ActivatedRoute, private location: Location) { }

    ngOnInit() {
        this.conversacionId = Number(this.route.snapshot.paramMap.get('id'));
        this.cargarMensajes();
    }

    cargarMensajes() { }

    enviar() { }

    
    goBack() {
        this.location.back();
    }
}