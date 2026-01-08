import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatTableModule } from '@angular/material/table';
import { Evento, Eventos } from '../../models/eventos/eventos';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { MatDialog } from '@angular/material/dialog';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';

@Component({
  selector: 'app-trayectos-populares',
  standalone: true,
  imports: [IonicModule, TranslateModule, CommonModule, MatTableModule],
  templateUrl: './trayectos-populares.component.html',
  styleUrls: ['./trayectos-populares.component.scss'],
})
export class TrayectosPopularesComponent implements OnInit {
  displayedColumns: string[] = ['ciudad', 'fecha', 'detalles', 'viaje'];
  lista_eventos: Evento[] = Eventos;
  expandedRows: { [key: number]: boolean } = {};

  userLoggedIn: boolean = false;

  ciudadesUnicas: string[] = [];

  // Variables que se utilizan para realizar la traducción de los literales.
  title_help_auth: string = '';
  message_help_auth: string = '';

  ciudadSeleccionada: string = '';
  eventosFiltradosPorCiudad: Evento[] = [];

  constructor(
    private viajesService: TravelService,
    private navCtrl: NavController,
    public dialog: MatDialog,
    public funcionesComunes: FuncionesComunes,
    private translate: TranslateService,
  ) {
    this.translate.get('NUEVOVIAJE.TITULO_MODAL_AYUDA').subscribe((traduccion: string) => {
      this.title_help_auth = traduccion;
    });
    this.translate.get('NUEVOVIAJE.MENSAJE_AYUDA_LOGIN_REG').subscribe((traduccion: string) => {
      this.message_help_auth = traduccion;
    });
  }

  ngOnInit() {
    this.userLoggedIn = this.funcionesComunes.isUserLoggedIn();
    this.lista_eventos = Eventos;
    this.ciudadesUnicas = [...new Set(this.lista_eventos.map((evento) => evento.ciudad))];
    this.ciudadesUnicas.sort();
  }

  /**
   * Función para crear un viaje a en función del evento seleccionado.
   * @param element
   */
  crearViaje(element: any) {
    const viajeData = {
      destino: element.ciudad,
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

  obtener_ciudades_eventos() {
    // Extraemos solo los nombres de las ciudades
    const todasLasCiudades = this.lista_eventos.map((evento) => evento.ciudad);

    // 'Set' elimina automáticamente los nombres repetidos
    this.ciudadesUnicas = [...new Set(todasLasCiudades)];
  }

  actualizarCiudadSeleccionada(valor: string) {
    this.ciudadSeleccionada = valor;

    const filtrados = this.lista_eventos.filter((evento) => evento.ciudad === valor);
    this.eventosFiltradosPorCiudad = filtrados.sort((a, b) => {
      const fechaInicio = this.convertirFecha(a.fecha_inicio);
      const fechaFin = this.convertirFecha(b.fecha_fin);
      return fechaInicio.getTime() - fechaFin.getTime();
    });
  }

  /**
   * Transdorma el string "DD/MM/AAAA" en un objeto Date comparable
   * En JavaScript los meses empiezan en 0 (enero), por eso restamos 1 al mes.
   * @param FechaStr
   * @returns
   */
  convertirFecha(FechaStr: string): Date {
    const [dia, mes, anio] = FechaStr.split('/');
    return new Date(Number(anio), Number(mes) - 1, Number(dia));
  }
}
