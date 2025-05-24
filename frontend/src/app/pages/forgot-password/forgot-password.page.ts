import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCol,
  IonRow,
} from '@ionic/angular/standalone';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  standalone: true,
  imports: [
    IonRow,
    IonCol,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    NavbarComponent,
    TranslateModule,
  ],
})
export class ForgotPasswordPage implements OnInit {
  userLoggedIn: boolean = false;

  constructor() {}

  ngOnInit() {}
}
