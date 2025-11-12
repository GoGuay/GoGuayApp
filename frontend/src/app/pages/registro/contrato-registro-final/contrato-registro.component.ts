import { Component, OnInit } from '@angular/core';
import { ResumenRegistroComponent } from '../resumen-registro/resumen-registro.component';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contrato-registro',
  imports: [ResumenRegistroComponent, RouterModule],
  templateUrl: './contrato-registro.component.html',
  styleUrl: './contrato-registro.component.scss',
})
export class ContratoRegistroComponent implements OnInit {
  constructor(
    private userService: UserServicesService,
    private navCtrl: NavController
  ) {}

  ngOnInit(): void {
    const datosRegistro = this.userService.getUsuarioData();
    if (datosRegistro === null) {
      this.navCtrl.navigateRoot('/registro');
    }
  }
  aceptarNormas() {
    const datosRegistro = this.userService.getUsuarioData();

    this.userService.registrarUsuario(datosRegistro).subscribe({
      next: (response) => {
        this.navCtrl.navigateRoot('/home');
      },
      error: (err) => {
        this.navCtrl.navigateRoot('/home');
      },
    });
  }
}
