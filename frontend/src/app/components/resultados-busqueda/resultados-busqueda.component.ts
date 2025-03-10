import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { Viaje } from 'src/app/models/travel/viaje.model';
import { Usuario } from 'src/app/models/user/usuario.model';
import { ViajeSeleccionadoComponent } from '../viaje-seleccionado/viaje-seleccionado.component';
import { MatDialog } from '@angular/material/dialog';
import { SpinnerComponent } from "../spinner/spinner/spinner.component";


@Component({
  selector: 'app-resultados-busqueda',
  standalone: true,
  imports: [IonicModule, MatIcon, TranslateModule, CommonModule, SpinnerComponent],
  templateUrl: './resultados-busqueda.component.html',
  styleUrls: ['./resultados-busqueda.component.scss'],
})
export class ResultadosBusquedaComponent implements OnInit {

  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;
  listado_viajes: Viaje[] = [];
  usuarioPorID: Usuario | undefined;

  constructor(private travelService: TravelService,
    private funcionesComunes: FuncionesComunes, private userService: UserServicesService,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.userLoggedIn = this.funcionesComunes.isUserLoggedIn();
    this.obtenerListaViajes();
  }


  /**
   * Función para obtener la lista de viajes
   * que se han publicado.
   * 
   */
  obtenerListaViajes() {
    this.travelService.obtenerTodosLosViajes().subscribe((viajes) => {
      this.listado_viajes = viajes;

      this.listado_viajes.forEach((viaje) => {
        this.obtenerUsuarioPorID(viaje.usuario_id).subscribe((usuario: any) => {
          viaje.usuario = usuario;
          console.log(viaje);

        });
      });

      console.log('Listado de viajes con usuario:', this.listado_viajes);
    });
  }


  /**
   * Función para obtener un usuario por su ID.
   * 
   * @param id_usuario Recibe el ID del usuario a obtener datos.
   */
  obtenerUsuarioPorID(id_usuario: number): Observable<any> {
    return this.userService.obtenerUsuarioPorID(id_usuario);
  }

  openPerfilPublico(id_usuario: number) {
    const usuario = {
      id: id_usuario
    }
    this.router.navigate(['/perfil-publico'], {
      queryParams: usuario,
    });
  }


  /**
   * Función para abrir un viaje y obtener mas detalles
   */
  openDetalleViaje(viaje: Viaje) {
    this.dialog.open(ViajeSeleccionadoComponent, {
      data: { viaje }
    });
  }
  
}
