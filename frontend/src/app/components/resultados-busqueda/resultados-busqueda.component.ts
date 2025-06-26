import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { Viaje } from 'src/app/models/travel/viaje.model';
import { Usuario } from 'src/app/models/user/usuario.model';
import { MatDialog } from '@angular/material/dialog';
import { ViajeSeleccionadoComponent } from '../viaje-seleccionado/viaje-seleccionado.component';
import { Observable } from 'rxjs';
import { SpinnerComponent } from "../spinner/spinner.component";
import { LoadTravelLineComponent } from "../load-travel-line/load-travel-line.component";
import { IonicModule, NavController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MatDivider } from '@angular/material/divider';

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

   @Input() paramsBusqueda: any;


  constructor(
    private travelService: TravelService,
    private funcionesComunes: FuncionesComunes,
    private userService: UserServicesService,
    private navCtrl: NavController,
    private dialog: MatDialog
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['paramsBusqueda'] && this.paramsBusqueda) {
      this.obtenerViajesFiltrados();
    }
  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.userLoggedIn = this.funcionesComunes.isUserLoggedIn();
    this.obtenerListaViajes();
    this.funcionesComunes.getBaseUrl();
  }


  obtenerViajesFiltrados() {
    this.isLoading = true;

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

      this.listado_viajes.forEach((viaje) => {
        this.obtenerUsuarioPorID(viaje.usuario_id).subscribe((usuario: any) => {
          viaje.usuario = usuario;
          console.log("DATOS DEL VIAJE: ",viaje);
          
        });
      });

      // Aplica el filtro inicial
      this.aplicarFiltro();
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
   * Función para cambiar el filtro seleccionado
   */
  cambiarFiltro(filtro: string) {
    this.isLoading = true;
    this.filtroSeleccionado = filtro;

    setTimeout(() => {
      this.aplicarFiltro();
      this.isLoading = false;
    }, 300);
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



}
