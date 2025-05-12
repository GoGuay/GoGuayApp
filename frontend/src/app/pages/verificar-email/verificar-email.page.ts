import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';

@Component({
  selector: 'app-verificar-email',
  templateUrl: './verificar-email.page.html',
  styleUrls: ['./verificar-email.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule],
})
export class VerificarEmailPage implements OnInit {
  verified = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserServicesService
  ) {}

  ngOnInit() {
    const token = this.route.snapshot.paramMap.get('token');
    this.userService.verificar_email(token).subscribe((verificado) => {
      console.log(verificado);

      if (verificado) {
        this.verified = true;
      } else {
        this.verified = false;
      }
    });
  }
}
