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
  //Coge los eventos del modelo Eventos que contiene un listado (array) de eventos.
  lista_eventos: Evento[] = Eventos;

  usuarioNoLogueado: boolean = false;
  ciudadesUnicas: string[] = [];
  title_help_auth: string = '';
  message_help_auth: string = '';
  ciudadSeleccionada: string = '';
  filtradosPorCiudad: Evento[] = [];

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

  //Lo que se usa nada más iniciar el componente.
  ngOnInit() {
    this.usuarioNoLogueado = this.funcionesComunes.isUserLoggedIn();
    this.lista_eventos = Eventos;
    this.ciudadesUnicas = [...new Set(this.lista_eventos.map((evento) => evento.ciudad))];
    this.ciudadesUnicas.sort();
  }

  /**
   * Función para crear un viaje desde el evento que se ha seleccionado (botón en el evento)
   * Creamos el objeto viajeData con los parámetros necesarios para crear el viaje (la fecha de inicio del evento y el destino)
   * Con las propiedades del viaje (destino y fecha_salida) le pasamos la propiedad del objeto de tipo Evento, que son la ciudad del evento y la fecha de inicio
   * del evento.
   *
   * @param element
   */
  crearViaje(eventoSeleccionado: Evento) {
    const viajeData = {
      destino: eventoSeleccionado.ciudad,
      fecha_salida: this.convertirFecha(eventoSeleccionado.fecha_inicio),
    };
    if (!this.usuarioNoLogueado) {
      this.funcionesComunes.openConfirmModal(this.title_help_auth, this.message_help_auth);
    } else {
      /**
       * Se almacena temporalmente los datos del viaje.
       */
      this.viajesService.setViajeData(viajeData);
      this.navCtrl.navigateRoot('/data-viaje');
    }
  }

  /***************************************************
   * FUNCIONES PARA SELECCIONAR LA CIUDAD EN EL HOME *
   ****************************************************
   */

  /**
   * Recorremos la lista de eventos, extrayendo la ciudad de cada evento y las guardamos en todasLasCiudades (array de strings) (guarda todas, incluso aunque se repitan).
   * Con new Set eliminamos los valores que se repitan del array de todasLasCiudades, y guardamos ese nuevo array en ciudadesUnicas
   *
   */
  obtener_ciudades_eventos() {
    const todasLasCiudades = this.lista_eventos.map((evento) => evento.ciudad);
    this.ciudadesUnicas = [...new Set(todasLasCiudades)];
  }

  /**
   * Para guardar en formato DATE una fecha que está guardada como string.
   * Le pasamos como parámetro la fecha en formato string. La función va a devolver un dato de tipo DATE.
   * Declaramos un array de string (dia,mes,anio). La función split separa el string cuando encuentra el símbolo /.
   * @return: Pasa cada uno de los strings numeros a formato número y guarda cada uno de esos números en formato DATE.
   * @param FechaStr
   */
  convertirFecha(FechaStr: string): Date {
    const [dia, mes, anio] = FechaStr.split('/');
    return new Date(Number(anio), Number(mes) - 1, Number(dia));
  }

  /**
   *
   * @param valor --> ciudad que selecciona el usuario.
   * Declaro filtrados: va a recorrer la lista_eventos, va a recorrer con el filter cada uno de los eventos (cadaEvento) y va sacar la ciudad. Cuando esa ciudad
   * coincida con valor, lo va a guardar en filtrados --> filtrados se convierte en un array de tipo Evento, guarda todos los eventos que contengan la misma ciudad (valor),
   * guarda el evento COMPLETO.
   * filtradosPorCiudad --> array de tipo Evento inicializado vacio arriba.
   * Con la función sort vamos a ordenar los eventos por fecha de inicio. Le pasamos 2 parámetros para que pueda comparar.
   * Declaramos fechaInicioA y le vamos a pasar lo que devuelva la función convertirFecha que a su vez recibe la fecha de inicio de inicioEventoA y lo mismo para fechaInicioB
   * Por tanto fechaInicioA y fechaInicioB tienen formato ANY para que luego se pueda hacer la comparación (resta)
   * Se resta el valor de fechaInicioA - fechaINicioB, si el resultado es negativo pone fechaInicioA primero.
   *
   *
   */
  actualizarCiudadSeleccionada(valor: string) {
    const filtrados = this.lista_eventos.filter((cadaEvento) => cadaEvento.ciudad === valor);
    this.filtradosPorCiudad = filtrados.sort((inicioEventoA, inicioEventoB) => {
      const fechaInicioA: any = this.convertirFecha(inicioEventoA.fecha_inicio);
      const fechaInicioB: any = this.convertirFecha(inicioEventoB.fecha_inicio);
      return fechaInicioA - fechaInicioB;
    });
  }
}
