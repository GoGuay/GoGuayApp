import { Component, OnInit, model, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { provideNativeDateAdapter } from '@angular/material/core';
import { JumbotronComponent } from '../../jumbotron/jumbotron.component';
import { MatButtonModule } from '@angular/material/button';

import { PrimerPasoComponent } from './componentes-viaje/primer-paso/primer-paso.component';
import { SegundoPasoComponent } from './componentes-viaje/segundo-paso/segundo-paso.component';
import { Usuario } from 'src/app/models/user/usuario.model';
import { TravelService } from '../../../core/travel-services/travel.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ResumenDinamicoComponent } from './componentes-viaje/resumen-dinamico/resumen-dinamico.component';
import { TercerPasoComponent } from "./componentes-viaje/tercer-paso/tercer-paso.component";
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { CuartoPasoComponent } from "./componentes-viaje/cuarto-paso/cuarto-paso.component";

@Component({
  selector: 'app-data-viaje',
  templateUrl: './data-viaje.page.html',
  styleUrls: ['./data-viaje.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    ToastModule,
    JumbotronComponent,
    PrimerPasoComponent,
    SegundoPasoComponent,
    NavbarComponent,
    ResumenDinamicoComponent,
    TercerPasoComponent,
    CuartoPasoComponent
],
  providers: [provideNativeDateAdapter(), MessageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DataViajePage implements OnInit {
  selected = model<Date | null>(null);


  origen: string = '';
  destino: string = '';
  hora_seleccionada: string = '';
  plazas: string = '';

  primer_paso: boolean = true;
  segundo_paso: boolean = false;
  tercer_paso: boolean = false;
  cuarto_paso: boolean = false;


  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;

  isLoadingRoutes = false;
  rutaConParadasSeleccionada = false;
  isUpdatingRoute = false;
  sugerenciasParadas: any[] = [];
  mostrarJumbotron = true;

  constructor(
    private navCtrl: NavController,
    private travelService: TravelService,
    private messageService: MessageService,
  ) {


  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.userLoggedIn = !!(this.userData && this.userData.usuario.email);
    this.loadJumbotronSetting();
  }

    loadJumbotronSetting() {
    const jumbotronSetting = localStorage.getItem('mostrarJumbotron');
    this.mostrarJumbotron = jumbotronSetting === null ? true : jumbotronSetting === 'true';
  }


  /**
   * Función para completar el primer paso.
   * Antes de poder continuar, se comprueban los datos almacenados en el servicio.
   *
   * Si los datos están correctamente almacenados se permite continuar al siguiente paso.
   * En caso contrario, lanzamos un mensaje de error informando al usuario de lo ocurrido.
   */
  onPrimerPasoComplete() {
    const currentViajeData = this.travelService.getViajeData();

    if (!currentViajeData?.hora_salida || !currentViajeData?.plazas) {
      this.messageService.add({
        severity: 'error',
        summary: 'Faltan datos',
        detail: 'Por favor, completa todos los campos para continuar.',
        life: 3000,
      });
    } else {
      this.primer_paso = false;
      this.segundo_paso = true;
    }
  }

  /**
   * Permite volver al paso previo
   */
  onSegundoPasoBack() {
    this.segundo_paso = false;
    this.primer_paso = true;
  }

  /**
   * Función para completar el segundo paso.
   * Antes de poder continuar, se comprueban los datos almacenados en el servicio.
   *
   * Si los datos están correctamente almacenados se permite continuar al siguiente paso.
   * En caso contrario, lanzamos un mensaje de error informando al usuario de lo ocurrido.
   */
  onSegundoPasoComplete() {
    const currentViajeData = this.travelService.getViajeData();

    if (!currentViajeData?.origen || !currentViajeData?.destino) {
      this.messageService.add({
        severity: 'error',
        summary: 'Faltan datos',
        detail:
          'Por favor, elige un punto de partida y de llegada para poder continuar.',
        life: 3000,
      });
    } else {
      this.segundo_paso = false;
      this.tercer_paso = true;
    }
  }

  /**
   * Función para completar el tercer paso.
   * Antes de poder continuar, se comprueban los datos almacenados en el servicio.
   *
   * Si los datos están correctamente almacenados se permite continuar al siguiente paso.
   * En caso contrario, lanzamos un mensaje de error informando al usuario de lo ocurrido.
   */
  onTercerPasoComplete() {
    const currentViajeData = this.travelService.getViajeData();

    if (!currentViajeData?.origen || !currentViajeData?.destino) {
      this.messageService.add({
        severity: 'error',
        summary: 'Faltan datos',
        detail:
          'Por favor, elige un punto de partida y de llegada para poder continuar.',
        life: 3000,
      });
    } else {
      this.tercer_paso = false;
      this.cuarto_paso = true;
    }
  }

  /**
   * Permite volver al segundo paso.
   */
  onTercerPasoBack() {
    this.tercer_paso = false;
    this.segundo_paso = true;
  }

  onCuartoPasoBack(){
    this.cuarto_paso = false;
    this.tercer_paso = true;
  }

  onCuartoPasoComplete(){
    const currentViajeData = this.travelService.getViajeData();

    if (!currentViajeData?.origen || !currentViajeData?.destino) {
      this.messageService.add({
        severity: 'error',
        summary: 'Faltan datos',
        detail: 'Por favor, selecciona una ruta para poder continuar.',
        life: 3000
      });
    } else {
      this.navCtrl.navigateRoot(['/resumen-viaje'], {
        queryParams: currentViajeData
      });
    }
    this.cuarto_paso = false;
  }

  /**
   * Función para reiniciar los pasos para crear un viaje.
   *
   */
  reiniciarPasos() {
    this.primer_paso = true;
    this.segundo_paso = false;
    this.tercer_paso = false;
  }


}
