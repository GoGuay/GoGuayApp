import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController } from '@ionic/angular';
import { TravelService } from '../../core/travel-services/travel.service';
import { TranslateModule } from '@ngx-translate/core';
import { SpinnerComponent } from "../spinner/spinner.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-viajes-recomendados-ia',
  templateUrl: './viajes-recomendados-ia.component.html',
  styleUrls: ['./viajes-recomendados-ia.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, TranslateModule, SpinnerComponent, RouterLink],
})
export class ViajesRecomendadosIaComponent implements OnInit {
  recomendaciones: any[] = [];
  cargando: boolean = true;

  constructor(
    private travelService: TravelService,
    private navCtrl: NavController,
  ) {}

  ngOnInit() {
    this.cargarRecomendaciones();
  }

  cargarRecomendaciones() {
    const userDataString = localStorage.getItem('userData');
    if (!userDataString) {
      this.cargando = false;
      return;
    }

    const userData = JSON.parse(userDataString);
    const userId = userData.id || userData.usuario?.id;

    if (!userId) {
      this.cargando = false;
      return;
    }

    this.travelService.getViajesRecomendadosIA(userId).subscribe({
      next: (res: any) => {
        if (res && res.recomendaciones) {
          this.recomendaciones = res.recomendaciones;
        }
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar recomendaciones de IA:', err);
        this.cargando = false;
      },
    });
  }

  verDetalleViaje(viajeId: number) {
    this.navCtrl.navigateForward(`/detalles-viaje/${viajeId}`);
  }
  
}