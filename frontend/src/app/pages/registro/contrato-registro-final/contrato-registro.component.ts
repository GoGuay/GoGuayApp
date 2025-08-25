import { Component, OnInit } from '@angular/core';
import { ResumenRegistroComponent } from '../resumen-registro/resumen-registro.component';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contrato-registro',
  imports: [ResumenRegistroComponent],
  templateUrl: './contrato-registro.component.html',
  styleUrl: './contrato-registro.component.scss',
})
export class ContratoRegistroComponent implements OnInit {
  constructor(
    private userService: UserServicesService,
    private navCtrl: NavController
  ) {}

  ngOnInit(): void {}
  aceptarNormas() {
    const datosRegistro = this.userService.getUsuarioData();
    console.log('Datos del registro: ', datosRegistro);

    this.userService.registrarUsuario(datosRegistro).subscribe({
      next: (response) => {
        console.log('Respuesta registro: ', response);

        this.navCtrl.navigateRoot('/home');
      },
      error: (err) => {
        const title = 'Error!';
        const message = err.error.error;
        this.navCtrl.navigateRoot('/home');
      },
    });
  }
}
