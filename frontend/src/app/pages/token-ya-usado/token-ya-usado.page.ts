import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-token-ya-usado',
  templateUrl: './token-ya-usado.page.html',
  styleUrls: ['./token-ya-usado.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TokenYaUsadoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
