import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule, NavController } from '@ionic/angular';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatDialogModule } from '@angular/material/dialog';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { GoogleServices } from 'src/app/core/google-services/google-services.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ToastModule } from 'primeng/toast';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';
import { SpinnerComponent } from "../../../components/spinner/spinner.component";

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
    SpinnerComponent
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

  cargandoOrigen: boolean = false;
  cargandoDestino: boolean = false;

  constructor(
    private navCtrl: NavController,
    private viajesService: TravelService,
    public funcionesComunes: FuncionesComunes,
    private translate: TranslateService,
    private cdr: ChangeDetectorRef,
    private router: Router
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
      this.navCtrl.navigateRoot('/data-viaje', { replaceUrl: true });

    }
  }


  buscarSugerenciasOrigen(event: Event) {
    this.cargandoOrigen = true;
    this.funcionesComunes.obtenerSugerenciasOrigen(event)
      .finally(() => {
        console.log("Búsqueda de sugerencias completada");
        this.cargandoOrigen = false;
        this.cdr.detectChanges(); // fuerza render del componente
      });
  }

  buscarSugerenciasDestino(event: Event) {
    this.cargandoDestino = true;
    this.funcionesComunes.obtenerSugerenciasDestino(event)
      .finally(() => {
        this.cargandoDestino = false;
        this.cdr.detectChanges();
      });
  }

  /**
  * Función para obtener la lista de sugerencias para el origen
  * en función de lo que escriba el usuario en el input correspondiente.
  * 
  * @param evento Recibe el evento del input.
  */
  obtenerSugerenciasOrigen(evento: Event) {
    const contenidoInput = (evento.target as HTMLInputElement).value;

    if (contenidoInput.length > 2) {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${contenidoInput}&addressdetails=1&limit=5&countrycodes=ES`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.sugerenciasOrigen = data.filter((item: any) =>
            item.address && (item.address.city || item.address.town || item.address.village) &&
            item.address.country_code === 'es'
          );
        })
        .catch(error => {
          console.error('Error al obtener sugerencias de origen:', error);
        });
    } else {
      this.sugerenciasOrigen = [];
    }
  }

  /**
  * Función para obtener la lista de sugerencias para el destino
  * en función de lo que escriba el usuario en el input correspondiente.
  * 
  * @param evento Recibe el evento del input.
  */
  obtenerSugerenciasDestino(evento: Event) {
    const contenidoInput = (evento.target as HTMLInputElement).value;
    if (contenidoInput.length > 2) {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${contenidoInput}&addressdetails=1&limit=5&countrycodes=ES`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.sugerenciasDestino = data.filter((item: any) =>
            item.address && (item.address.city || item.address.town || item.address.village) &&
            item.address.country_code === 'es'
          );
        })
        .catch(error => {
          console.error('Error al obtener sugerencias de destino:', error);
        });
    } else {
      this.sugerenciasDestino = [];
    }
  }

  /**
   * Función para guardar la información de la localidad de origen seleccionada.
   * 
   * @param localidad -> Recibe la localidad seleccionada en la lista de sugerencias.
   */
  seleccionarLocalidadOrigen(localidad: any) {
    this.origen = localidad.display_name.split(',')[0].trim();
    const viajeData = {
      ...this.viajesService.getViajeData(),
      origen: this.origen,
    };
    this.viajesService.setViajeData(viajeData);
    this.funcionesComunes.sugerenciasOrigen = [];
  }


  /**
   * Función para guardar la información de la localidad de destino seleccionada.
   * 
   * @param localidad -> Recibe la localidad seleccionada en la lista de sugerencias.
   */
  seleccionarLocalidadDestino(localidad: any) {
    this.destino = localidad.display_name.split(',')[0].trim();
    const viajeData = {
      ...this.viajesService.getViajeData(),
      destino: this.destino,
    };
    this.viajesService.setViajeData(viajeData);
    this.funcionesComunes.sugerenciasDestino = [];
  }
}
