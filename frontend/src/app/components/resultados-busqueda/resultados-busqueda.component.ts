import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { Viaje } from 'src/app/models/travel/viaje.model';
import { Usuario } from 'src/app/models/user/usuario.model';
import { MatDialog } from '@angular/material/dialog';
import { ViajeSeleccionadoComponent } from '../viaje-seleccionado/viaje-seleccionado.component';
import { Observable, of, tap } from 'rxjs';
import { SpinnerComponent } from "../spinner/spinner.component";
import { LoadTravelLineComponent } from "../load-travel-line/load-travel-line.component";
import { IonicModule, NavController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-resultados-busqueda',
  standalone: true,
  imports: [IonicModule, TranslateModule, CommonModule, SpinnerComponent, LoadTravelLineComponent, MatDivider],
  templateUrl: './resultados-busqueda.component.html',
  styleUrls: ['./resultados-busqueda.component.scss'],
})
export class ResultadosBusquedaComponent implements OnInit {

  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;
  listado_viajes: Viaje[] = [];
  usuarioPorID: Usuario | undefined;
  filtroSeleccionado: string = 'horaSalida';
  isLoading: boolean = false;
  imagenesCargadas: { [key: number]: boolean } = {};
  usuariosCache: Map<number, any> = new Map();


  /**
   * Variables de entrada para el filtro
   */
  @Input() paramsBusqueda: any;
  @Input() filtroOrden: string = 'horaSalida';


  constructor(
    private travelService: TravelService,
    private funcionesComunes: FuncionesComunes,
    private userService: UserServicesService,
    private navCtrl: NavController,
    private dialog: MatDialog
  ) { }

  /**
   * Función que se ejecuta cuando hay cambios en las variables de entrada
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes['filtroOrden'] && !changes['filtroOrden'].firstChange) {
      this.filtroSeleccionado = changes['filtroOrden'].currentValue;
      this.aplicarFiltro();
    }

    // Si cambian los parámetros de búsqueda, decidimos qué cargar
    if (changes['paramsBusqueda']) {
      this.cargarDatos();
    }
  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.userLoggedIn = this.funcionesComunes.isUserLoggedIn();
    this.obtenerListaViajes();
    this.funcionesComunes.getBaseUrl();
  }

  cargarDatos() {
    this.isLoading = true;

    // Verificamos si hay parámetros de búsqueda reales (no un objeto vacío)
    const tieneFiltros = this.paramsBusqueda && Object.values(this.paramsBusqueda).some(val => val !== '' && val !== null);

    const peticion = tieneFiltros
      ? this.travelService.obtenerViajesFiltrados(this.paramsBusqueda)
      : this.travelService.obtenerTodosLosViajes();

    peticion.subscribe({
      next: (viajes) => {
        this.listado_viajes = viajes;

        if (viajes.length === 0) {
          this.isLoading = false;
          return;
        }

        // Obtener usuarios de forma eficiente
        this.cargarUsuariosParaViajes(viajes);
      },
      error: (err) => {
        console.error('Error:', err);
        this.listado_viajes = [];
        this.isLoading = false;
      }
    });
  }

  private cargarUsuariosParaViajes(viajes: Viaje[]) {
    const idsUnicos = [...new Set(viajes.map(v => v.usuario_id))];

    const solicitudesUsuarios = idsUnicos.map(id => {
      if (this.usuariosCache.has(id)) {
        return of(this.usuariosCache.get(id));
      }
      return this.userService.obtenerUsuarioPorID(id).pipe(
        tap(user => this.usuariosCache.set(id, user))
      );
    });

    forkJoin(solicitudesUsuarios).subscribe(() => {
      this.listado_viajes.forEach(viaje => {
        viaje.usuario = this.usuariosCache.get(viaje.usuario_id);
      });
      this.aplicarFiltro();
      this.isLoading = false;
    });
  }


  /**
   * Función para obtener la lista de viajes filtrados según los parámetros de búsqueda.
   * @returns Devuelve la lista de viajes filtrados
   */
  obtenerViajesFiltrados() {
    this.isLoading = true;
    /**
     * Validación para evitar llamadas innecesarias al backend
     * cuando no hay filtros seleccionados.
     */
    if (!this.paramsBusqueda || Object.keys(this.paramsBusqueda).length === 0) {
      this.listado_viajes = [];
      this.isLoading = false;
      return;
    }
    this.travelService.obtenerViajesFiltrados(this.paramsBusqueda).subscribe({
      next: (viajes) => {
        this.listado_viajes = viajes;

        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al obtener viajes:', err);
        this.listado_viajes = [];
        this.isLoading = false;
      }
    });
  }

  /**
   * Función para obtener la lista de viajes completa
   */
  obtenerListaViajes() {
    this.isLoading = true;
    this.travelService.obtenerTodosLosViajes().subscribe((viajes) => {
      this.listado_viajes = viajes;

      // 2. Creamos un set de IDs únicos para no repetir llamadas
      const idsUnicos = [...new Set(viajes.map(v => v.usuario_id))];

      const solicitudesUsuarios = idsUnicos.map(id => {
        // Si ya lo tenemos en caché, devolvemos un observable del valor
        if (this.usuariosCache.has(id)) {
          return of(this.usuariosCache.get(id));
        }
        // Si no, lo pedimos y lo guardamos en la caché al recibirlo
        return this.userService.obtenerUsuarioPorID(id).pipe(
          tap(user => this.usuariosCache.set(id, user))
        );
      });

      forkJoin(solicitudesUsuarios).subscribe(() => {
        // 3. Asignamos los usuarios desde la caché a los viajes
        this.listado_viajes.forEach(viaje => {
          viaje.usuario = this.usuariosCache.get(viaje.usuario_id);
        });
        this.aplicarFiltro();
        this.isLoading = false;
      });
    });
  }

  /**
   * Función para obtener los datos del usuario logado.
   * 
   * @param id_usuario 
   * @returns 
   */
  obtenerUsuarioPorID(id_usuario: number): Observable<any> {
    return this.userService.obtenerUsuarioPorID(id_usuario);
  }

  /**
   * Función para abrir el perfil público seleccionado.
   * 
   * @param id_usuario 
   */
  openPerfilPublico(id_usuario: number) {
    const usuario = { id: id_usuario };
    this.navCtrl.navigateRoot(['/perfil-publico'], {
      queryParams: usuario,
    });
  }

  /**
   * Función para abrir los detalles del viaje seleccionado.
   * 
   * @param viaje 
   */
  openDetalleViaje(viaje: Viaje) {
    this.dialog.open(ViajeSeleccionadoComponent, {
      data: { viaje }
    });
  }


  /**
   * Función para aplicar el filtro a la lista de viajes
   */
  aplicarFiltro() {
    if (this.filtroSeleccionado === 'precioAsc') {
      this.listado_viajes.sort((a, b) => (a.precio_viaje || 0) - (b.precio_viaje || 0));
    } else if (this.filtroSeleccionado === 'precioDesc') {
      this.listado_viajes.sort((a, b) => (b.precio_viaje || 0) - (a.precio_viaje || 0));
    } else if (this.filtroSeleccionado === 'horaSalida') {
      const horaActual = new Date();
      const horaActualMilisegundos = horaActual.getTime();

      this.listado_viajes.sort((a, b) => {
        const [horaA, minutosA] = a.hora_salida.split(':').map(Number);
        const [horaB, minutosB] = b.hora_salida.split(':').map(Number);

        const fechaA = new Date(horaActual);
        const fechaB = new Date(horaActual);

        fechaA.setHours(horaA, minutosA, 0, 0);
        fechaB.setHours(horaB, minutosB, 0, 0);

        const diferenciaA = Math.abs(fechaA.getTime() - horaActualMilisegundos);
        const diferenciaB = Math.abs(fechaB.getTime() - horaActualMilisegundos);

        return diferenciaA - diferenciaB;
      });
    } else if (this.filtroSeleccionado === 'recientes') {
      this.listado_viajes.sort((a, b) => b.id - a.id);
    }
    this.isLoading = false;
  }

  marcarImagenComoCargada(viajeId: number) {
    this.imagenesCargadas[viajeId] = true;
  }


}
