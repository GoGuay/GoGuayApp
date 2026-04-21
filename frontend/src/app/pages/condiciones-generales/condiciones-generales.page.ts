import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-condiciones-generales',
    templateUrl: './condiciones-generales.page.html',
    styleUrls: ['./condiciones-generales.page.scss'],
    imports: [
        CommonModule,
        FormsModule,
        MatIconModule,
        IonicModule,
        MatButtonModule,
        RouterModule,
        JumbotronComponent,
        NavbarComponent,
        TranslateModule
    ],
})
export class CondicionesUsoComponent implements OnInit {

    userLoggedIn: boolean = true;
    mostrarJumbotron: boolean = true;

    constructor() { }

    ngOnInit() { }

}