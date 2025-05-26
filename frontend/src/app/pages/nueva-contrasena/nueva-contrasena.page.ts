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
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-nueva-contrasena',
  templateUrl: './nueva-contrasena.page.html',
  styleUrls: ['./nueva-contrasena.page.scss'],
  standalone: true,
  imports: [
    IonRow,
    IonCol,
    IonContent,
    CommonModule,
    FormsModule,
    NavbarComponent,
    TranslateModule,
    MatDivider,
  ],
})
export class NuevaContrasenaPage implements OnInit {
  userLoggedIn: boolean = false;
  constructor() {}

  ngOnInit() {}
}
