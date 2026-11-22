import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {  NavController, IonHeader, IonToolbar, IonButtons, IonButton, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.page.html',
  styleUrls: ['./navbar-admin.page.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [IonTitle, IonButton, IonButtons, IonToolbar, IonHeader, FormsModule, ReactiveFormsModule, MatDialogModule],
})
export class NavbarAdmin implements OnInit {
  constructor(public navCtrl: NavController) {}
  ngOnInit() {}

  logout() {}

  goHome() {
    this.navCtrl.navigateRoot(['/admin-app']);
  }
}
