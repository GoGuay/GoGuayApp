import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-token-ya-usado',
  templateUrl: './token-ya-usado.page.html',
  styleUrls: ['./token-ya-usado.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    NavbarComponent,
    TranslateModule,
  ],
})
export class TokenYaUsadoPage implements OnInit {
  userLoggedIn: boolean = false;

  constructor() {}

  ngOnInit() {}
}
