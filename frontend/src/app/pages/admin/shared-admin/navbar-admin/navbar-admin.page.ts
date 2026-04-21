import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { IonicModule, NavController } from "@ionic/angular";

@Component({
    selector: 'app-navbar-admin',
    templateUrl: './navbar-admin.page.html',
    styleUrls: ['./navbar-admin.page.scss'],
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        MatDialogModule
    ]
})
export class NavbarAdmin implements OnInit {
    constructor(public navCtrl: NavController) { }
    ngOnInit() {

    }

    logout() {

    }

    goHome() {
        this.navCtrl.navigateRoot(['/admin-app']);
    }
}