import { Component, OnInit } from '@angular/core';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { CookieService } from 'ngx-cookie-service';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDividerModule,
    MatButtonModule,
    MatIcon
  ],
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss'],
})
export class CookiesComponent implements OnInit {

  constructor(
    private cookieService: CookieService, 
    private navCtrl: NavController, 
    private dialogRef: MatDialogRef<CookiesComponent>
  ) { }

  ngOnInit() { }

  acceptAllCookies() {
    this.cookieService.set('analytics', 'true', 365);
    this.cookieService.set('preferences', 'true', 365);
    this.cookieService.set('essential', 'true', 365);
    this.hideBanner();
    this.closeDialog();
  }

  rejectAllCookies() {
    this.cookieService.deleteAll();
    this.cookieService.set('essential', 'true', 365);
    this.hideBanner();
    this.closeDialog();
  }

  openCookiePreferences() {
    this.navCtrl.navigateRoot('/cookies');
    this.closeDialog();
  }

  hideBanner() {
    document.getElementById('cookie-banner')?.classList.add('hidden');
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
