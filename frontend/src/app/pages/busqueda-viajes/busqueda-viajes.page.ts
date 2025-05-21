import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
} from '@ionic/angular/standalone';
import { BuscadorComponent } from '../../components/buscador/buscador.component';
import { MatIconModule } from '@angular/material/icon';
import { ResultadosBusquedaComponent } from 'src/app/components/resultados-busqueda/resultados-busqueda.component';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { Viaje } from 'src/app/models/travel/viaje.model';

@Component({
  selector: 'app-busqueda-viajes',
  templateUrl: './busqueda-viajes.page.html',
  styleUrls: ['./busqueda-viajes.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    BuscadorComponent,
    MatIconModule,
    ResultadosBusquedaComponent,
    JumbotronComponent,
    NavbarComponent
  ],
})
export class BusquedaViajesPage implements OnInit {

  userLoggedIn: boolean = false;

  mostrarJumbotron = true;
  /** Objeto para guardar los parámetros que vienen en la URL */
  busquedaParams: any = {};

  constructor(private route: ActivatedRoute, private funcionesComunes: FuncionesComunes) { }

  ngOnInit() {
    this.userLoggedIn = this.funcionesComunes.isUserLoggedIn();
    this.loadJumbotronSetting();
    /**
     * Aquí se obtienen los datos de los parámetros de la URL.
     */
    this.route.queryParams.subscribe((params) => {
      this.busquedaParams = params;
      console.log('Parámetros recibidos:', this.busquedaParams);
    });
  }

  loadJumbotronSetting() {
    const jumbotronSetting = localStorage.getItem('mostrarJumbotron');
    this.mostrarJumbotron = jumbotronSetting === null ? true : jumbotronSetting === 'true';
  }
}
