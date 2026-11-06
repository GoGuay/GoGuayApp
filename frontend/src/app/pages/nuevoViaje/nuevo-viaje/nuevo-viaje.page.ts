import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule, ModalController, NavController } from '@ionic/angular';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatDialogModule } from '@angular/material/dialog';
import { TravelService } from '../../../core/travel-services/travel.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ToastModule } from 'primeng/toast';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { FuncionesComunes } from '../../../core/funciones-comunes/funciones-comunes.service';
import { SpinnerComponent } from '../../../components/spinner/spinner.component';
import { Location } from '@angular/common';
import { ControlLocalidad } from '../../../models/control-localidad/control-localidad.model';
import { BuscadorLocalidadesService } from '../../../core/buscador-localidades/buscador-localidades.service';
import { SelectorGeneralComponent } from 'src/app/components/selector-general/selector-general.component';
import { AbrirIncidenciaModalComponent } from 'src/app/components/abrir-incidencia-modal/abrir-incidencia-modal.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-nuevo-viaje',
  templateUrl: './nuevo-viaje.page.html',
  styleUrls: ['./nuevo-viaje.page.scss'],
  standalone: true,
  providers: [MessageService], 
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
    SelectorGeneralComponent,
    SpinnerComponent,
  ],
})
export class NuevoViajePage implements OnInit {
  userLoggedIn: boolean = false;
  origenCtrl: ControlLocalidad;
  destinoCtrl: ControlLocalidad;
  plazas: string = '';
  hora_seleccionada: string = '';

  title_help_carnet: string = '';
  message_help_carnet: string = '';
  message_help_auth: string = '';
  texto_spinner: string = 'Buscando ubicación...';

  spinnerActivo: boolean = false;
  irAtrasImg: string = '../../../assets/sistema/atras.png';

  opcionesPlazas = [
    { id: '1', descripcion: '1' },
    { id: '2', descripcion: '2' },
    { id: '3', descripcion: '3' },
    { id: '4', descripcion: '4' },
  ];

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) { }

  constructor(
    private navCtrl: NavController,
    private viajesService: TravelService,
    public funcionesComunes: FuncionesComunes,
    private translate: TranslateService,
    private cdr: ChangeDetectorRef,
    private location: Location,
    private travelService: TravelService,
    public buscadorLocalidadesService: BuscadorLocalidadesService,
    private route: ActivatedRoute,
    private modalController: ModalController,
    public messageService: MessageService
  ) {
    this.origenCtrl = this.buscadorLocalidadesService.crearEstadoControl();
    this.destinoCtrl = this.buscadorLocalidadesService.crearEstadoControl();

    this.buscadorLocalidadesService.inicializarBuscador(this.origenCtrl);
    this.buscadorLocalidadesService.inicializarBuscador(this.destinoCtrl);

    this.translate.get('NUEVOVIAJE.MENSAJE_AYUDA_CARNET').subscribe((traduccion: string) => {
      this.message_help_carnet = traduccion;
    });
    this.translate.get('NUEVOVIAJE.TITULO_MODAL_AYUDA').subscribe((traduccion: string) => {
      this.title_help_carnet = traduccion;
    });
    this.translate.get('NUEVOVIAJE.MENSAJE_AYUDA_LOGIN_REG').subscribe((traduccion: string) => {
      this.message_help_auth = traduccion;
    });
  }

  ngOnInit() {
    this.userLoggedIn = this.funcionesComunes.isUserLoggedIn();

    this.route.queryParams.subscribe((params) => {
      if (params['destino']) {
        const destinoSugerido = params['destino'];
        this.destinoCtrl.valorTexto = destinoSugerido;

        const viajeActual = this.travelService.getViajeData() || {};
        this.travelService.setViajeData({
          ...viajeActual,
          destino: destinoSugerido,
        });

        this.cdr.detectChanges();
      }
    });
  }

  get origen(): string {
    return this.origenCtrl.valorTexto;
  }
  set origen(val: string) {
    this.origenCtrl.valorTexto = val;
  }

  get destino(): string {
    return this.destinoCtrl.valorTexto;
  }
  set destino(val: string) {
    this.destinoCtrl.valorTexto = val;
  }

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
      this.viajesService.setViajeData(viajeData);
      this.navCtrl.navigateRoot('/data-viaje', { replaceUrl: true });
    }
  }

  goBack() {
    this.location.back();
  }

  buscarUbicacion() {
    this.spinnerActivo = true;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;

          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              if (data && data.address) {
                let city = data.address.city || data.address.town || data.address.village || '';
                if (city) {
                  this.origenCtrl.valorTexto = city;
                  const viajeData = {
                    ...this.travelService.getViajeData(),
                    origen: city,
                  };
                  this.travelService.setViajeData(viajeData);
                  this.cdr.detectChanges();
                  this.spinnerActivo = false;
                }
              }
            })
            .catch((error) => console.error('Error al obtener la ubicación:', error));
        },
        (error) => {
          console.error('Error de geolocalización:', error.message);
        }
      );
    }
  }

  seleccionarPlazas(opcion: any) {
    this.plazas = typeof opcion === 'object' ? opcion.descripcion || opcion.valor : opcion;
  }

  /**
   * Abre el modal para reportar incidencias asociadas a la creación de un viaje.
   */
  async abrirIncidenciaCreacionViaje() {
    const modal = await this.modalController.create({
      component: AbrirIncidenciaModalComponent,
      componentProps: {
        categoria: 'APP',
        subcategoriaPredeterminada: 'CREACION_VIAJE',
        tituloContexto: 'Problema al crear el viaje'
      },
      cssClass: 'modal-incidencia-custom'
    });

    await modal.present();
    const { role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.messageService.add({
        severity: 'success',
        summary: 'Incidencia enviada',
        detail: 'Hemos recibido tu consulta. Podrás ver el seguimiento en "Mis Incidencias".',
        life: 4000
      });
    }
  }
}