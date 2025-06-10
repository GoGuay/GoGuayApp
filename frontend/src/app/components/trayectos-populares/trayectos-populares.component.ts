import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { IonicModule, NavController } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatTableModule } from '@angular/material/table';
import { Evento, Eventos } from '../../models/eventos/eventos'
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { MatDialog } from '@angular/material/dialog';
import { DetalleEventosComponent } from '../detalle-eventos/detalle-eventos.component';
import { MatIcon } from '@angular/material/icon';
import { HelpModalComponent } from '../help-modal/help-modal.component';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';

@Component({
  selector: 'app-trayectos-populares',
  standalone: true,
  imports: [IonicModule, MatButton, TranslateModule, CommonModule, MatTableModule, MatIcon],
  templateUrl: './trayectos-populares.component.html',
  styleUrls: ['./trayectos-populares.component.scss'],
})
export class TrayectosPopularesComponent implements OnInit {
  displayedColumns: string[] = ['ciudad', 'fecha', 'detalles', 'viaje'];
  dataSource: Evento[] = [];
  expandedRows: { [key: number]: boolean } = {};

  userLoggedIn: boolean = false;

  // Variables que se utilizan para realizar la traducción de los literales.
  title_help_auth: string = '';
  message_help_auth: string = '';

  constructor(private viajesService: TravelService,
    private navCtrl: NavController,
    public dialog: MatDialog,
    public funcionesComunes: FuncionesComunes,
    private translate: TranslateService) {

    this.translate
      .get('NUEVOVIAJE.TITULO_MODAL_AYUDA')
      .subscribe((traduccion: string) => {
        this.title_help_auth = traduccion;
      });
    this.translate
      .get('NUEVOVIAJE.MENSAJE_AYUDA_LOGIN_REG')
      .subscribe((traduccion: string) => {
        this.message_help_auth = traduccion;
      });
  }

  ngOnInit() {
    this.userLoggedIn = this.funcionesComunes.isUserLoggedIn();
    this.dataSource = Eventos;
  }


  toggleExpand(index: number) {
    this.expandedRows[index] = !this.expandedRows[index];
  }

  isExpanded(index: number): boolean {
    return this.expandedRows[index];
  }

  /**
   * Función para crear un viaje a en función del evento seleccionado.
   * @param element 
   */
  crearViaje(element: any) {
    const viajeData = {
      destino: element.ciudad
    };
    if (!this.userLoggedIn) {
      this.funcionesComunes.openConfirmModal(this.title_help_auth, this.message_help_auth);
    } else {
      /**
       * Se almacena temporalmente los datos del viaje.
       */
      this.viajesService.setViajeData(viajeData);
      this.navCtrl.navigateRoot('/data-viaje');
    }
  }

  /**
   * Función para abrir una modal con los detalles del evento.
   * @param evento Recibe la información del evento pulsado.
   */
  openDetallesModal(evento: any) {
    this.dialog.open(DetalleEventosComponent, {
      width: '400px',
      data: { evento }
    });
  }

  /**
   * Función para mostrar una ventana modal
   * con mensaje de ayuda.
   */
  openHelpModal() {
    const titulo: string = 'Centro de ayuda';
    const mensaje: string = `Al crear un viaje desde aquí, se seleccionará el lugar de destino del evento que hayas seleccionado.`;

    this.dialog.open(HelpModalComponent, {
      data: { title: titulo, message: mensaje, showAcceptButton: true },
      disableClose: true,
    });
  }
}
