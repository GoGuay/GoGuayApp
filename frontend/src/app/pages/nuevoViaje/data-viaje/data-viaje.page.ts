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
import { Usuario } from '../../../models/user/usuario.model';
import { TravelService } from '../../../core/travel-services/travel.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ResumenDinamicoComponent } from './componentes-viaje/resumen-dinamico/resumen-dinamico.component';
import { TercerPasoComponent } from "./componentes-viaje/tercer-paso/tercer-paso.component";
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
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

  // Control de visibilidad de Pasos secuenciales
  primer_paso: boolean = true;
  segundo_paso: boolean = false;
  tercer_paso: boolean = false;
  cuarto_paso: boolean = false;

  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;
  mostrarJumbotron: boolean = true;

  constructor(
    private navCtrl: NavController,
    private travelService: TravelService,
    private messageService: MessageService,
  ) {}

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.userLoggedIn = !!(this.userData && this.userData.usuario?.email);
    this.loadJumbotronSetting();
  }

  loadJumbotronSetting() {
    const jumbotronSetting = localStorage.getItem('mostrarJumbotron');
    this.mostrarJumbotron = jumbotronSetting === null ? true : jumbotronSetting === 'true';
  }

  /**
   * PASO 1 -> PASO 2
   */
  onPrimerPasoComplete() {
    const currentViajeData = this.travelService.getViajeData();

    if (!currentViajeData?.hora_salida || !currentViajeData?.plazas || !currentViajeData?.coche) {
      this.messageService.add({
        severity: 'error',
        summary: 'Faltan datos',
        detail: 'Por favor, completa todos los campos del vehículo y horarios para continuar.',
        life: 3000,
      });
    } else {
      this.primer_paso = false;
      this.segundo_paso = true;
    }
  }

  /**
   * PASO 2 -> PASO 1
   */
  onSegundoPasoBack() {
    this.segundo_paso = false;
    this.primer_paso = true;
  }

  /**
   * PASO 2 -> PASO 3
   */
  onSegundoPasoComplete() {
    const currentViajeData = this.travelService.getViajeData();

    if (!currentViajeData?.origen || !currentViajeData?.destino) {
      this.messageService.add({
        severity: 'error',
        summary: 'Direcciones incompletas',
        detail: 'Por favor, elige un punto de partida y de llegada válido para trazar la ruta.',
        life: 3000,
      });
    } else {
      this.segundo_paso = false;
      this.tercer_paso = true;
    }
  }

  /**
   * PASO 3 -> PASO 2
   */
  onTercerPasoBack() {
    this.tercer_paso = false;
    this.segundo_paso = true;
  }

  /**
   * PASO 3 -> PASO 4
   * CORREGIDO: Ahora comprueba que exista la ruta seleccionada de forma efectiva
   */
  onTercerPasoComplete() {
    const currentViajeData = this.travelService.getViajeData();

    console.log('Validando datos del Paso 3 en el servicio:', currentViajeData);

    if (!currentViajeData?.ruta_seleccionada || !currentViajeData?.distanciaTotal) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Selecciona una ruta',
        detail: 'Por favor, elige una de las alternativas disponibles en el listado para continuar.',
        life: 3000,
      });
    } else {
      this.tercer_paso = false;
      this.cuarto_paso = true;
    }
  }

  /**
   * PASO 4 -> PASO 3
   */
  onCuartoPasoBack() {
    this.cuarto_paso = false;
    this.tercer_paso = true;
  }

  /**
   * PASO 4 -> FINALIZAR PUBLICACIÓN
   */
  onCuartoPasoComplete() {
    const currentViajeData = this.travelService.getViajeData();
    console.log('Validando datos del Paso 3 en el servicio:', currentViajeData);

    if (!currentViajeData?.origen || !currentViajeData?.destino || !currentViajeData?.ruta_seleccionada) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error de flujo',
        detail: 'Faltan parámetros esenciales de la ruta. Por favor, revisa los pasos anteriores.',
        life: 3000
      });
    } else {
      this.navCtrl.navigateRoot(['/resumen-viaje'], {
        queryParams: currentViajeData
      });
      this.reiniciarPasos();
    }
  }

  publicarViajeFinal(componenteHijo: any) {
    const guardadoCorrecto = componenteHijo.onCuartoPasoComplete();

    if (guardadoCorrecto) {
      const viajeDataFinalizado = this.travelService.getViajeData();
      
      console.log('Navegando al resumen con datos completos:', viajeDataFinalizado);
      
      this.navCtrl.navigateRoot(['/resumen-viaje'], {
        queryParams: { origin: 'creacion' } 
      });
      
      this.cuarto_paso = false;
    }
  }

  /**
   * Reinicio total del asistente
   */
  reiniciarPasos() {
    this.primer_paso = true;
    this.segundo_paso = false;
    this.tercer_paso = false;
    this.cuarto_paso = false;
  }
}