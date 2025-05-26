import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-token-expirado',
  templateUrl: './token-expirado.page.html',
  styleUrls: ['./token-expirado.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TokenExpiradoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
