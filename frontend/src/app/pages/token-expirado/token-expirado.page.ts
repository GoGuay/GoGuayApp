import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCol,
  IonGrid,
  IonRow,
} from '@ionic/angular/standalone';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-token-expirado',
  templateUrl: './token-expirado.page.html',
  styleUrls: ['./token-expirado.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    NavbarComponent,
    TranslateModule,
  ],
})
export class TokenExpiradoPage implements OnInit {
  userLoggedIn: boolean = false;
  constructor() {}

  ngOnInit() {}
}
