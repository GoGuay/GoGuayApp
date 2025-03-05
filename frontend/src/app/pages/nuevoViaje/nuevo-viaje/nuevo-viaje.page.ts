import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatDialogModule } from '@angular/material/dialog';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ToastModule } from 'primeng/toast';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';

@Component({
  selector: 'app-nuevo-viaje',
  templateUrl: './nuevo-viaje.page.html',
  styleUrls: ['./nuevo-viaje.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    IonicModule,
    MatButtonModule,
    RouterModule,
    TranslateModule,
    NavbarComponent,
    MatDialogModule,
    MatTooltipModule,
    ToastModule,
  ],
})
export class NuevoViajePage implements OnInit {
  userLoggedIn: boolean = false;

  origen: string = '';
  destino: string = '';
  plazas: string = '';
  hora_seleccionada: string = '';

  title_help_carnet: string = '';
  message_help_carnet: string = '';
  message_help_auth: string = '';

  sugerenciasOrigen: any[] = [];
  sugerenciasDestino: any[] = [];

  constructor(
    private router: Router,
    private viajesService: TravelService,
    public funcionesComunes: FuncionesComunes,
    private translate: TranslateService
  ) {
    this.translate
      .get('NUEVOVIAJE.MENSAJE_AYUDA_CARNET')
      .subscribe((traduccion: string) => {
        this.message_help_carnet = traduccion;
      });
    this.translate
      .get('NUEVOVIAJE.TITULO_MODAL_AYUDA')
      .subscribe((traduccion: string) => {
        this.title_help_carnet = traduccion;
      });
    this.translate
      .get('NUEVOVIAJE.MENSAJE_AYUDA_LOGIN_REG')
      .subscribe((traduccion: string) => {
        this.message_help_auth = traduccion;
      });
  }

  ngOnInit() {
    this.userLoggedIn = this.funcionesComunes.isUserLoggedIn();
  }

  /**
   * Función para navegar hasta la página "data-viaje"
   *
   */
  goTo() {
    const viajeData = {
      origen: this.origen,
      destino: this.destino,
      plazas: this.plazas,
      hora_salida: this.hora_seleccionada,
    };

    if (!this.userLoggedIn) {
      this.funcionesComunes.openConfirmModal(this.title_help_carnet, this.message_help_auth);
    } else {
      /**
       * Se almacena temporalmente los datos del viaje.
       */
      this.viajesService.setViajeData(viajeData);
      this.router.navigate(['/data-viaje']);
    }
  }


  /**
   * Función para guardar la información de la localidad de origen seleccionada.
   *
   * @param localidad -> Recibe la localidad seleccionada en la lista de sugerencias.
   */
  seleccionarLocalidadOrigen(localidad: any) {
    this.origen = localidad.descripcion.split(',')[0].trim();
    this.funcionesComunes.sugerenciasOrigen = [];
  }

  /**
   * Función para guardar la información de la localidad de destino seleccionada.
   *
   * @param localidad -> Recibe la localidad seleccionada en la lista de sugerencias.
   */
  seleccionarLocalidadDestino(localidad: any) {
    this.destino = localidad.descripcion.split(',')[0].trim();
    this.funcionesComunes.sugerenciasDestino = [];
  }
}
