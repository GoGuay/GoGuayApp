import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-encuesta-satisfaccion',
  templateUrl: './encuesta-satisfaccion.page.html',
  styleUrls: ['./encuesta-satisfaccion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, MatButtonModule,MatRadioModule]
})
export class EncuestaSatisfaccionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
