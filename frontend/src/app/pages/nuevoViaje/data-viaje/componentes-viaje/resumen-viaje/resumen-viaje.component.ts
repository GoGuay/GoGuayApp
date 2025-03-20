import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { IonicModule, NavController } from '@ionic/angular';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { Usuario } from 'src/app/models/user/usuario.model';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HelpModalComponent } from 'src/app/components/help-modal/help-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalErrorComponent } from 'src/app/components/modal-error/modal-error.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';
import { TranslateModule } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-resumen-viaje',
  standalone: true,
  imports: [
    IonicModule,
    MatIcon,
    MatCardModule,
    MatDatepickerModule,
    FormsModule,
    NavbarComponent,
    MatDivider,
    MatButtonModule,
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './resumen-viaje.component.html',
  styleUrls: ['./resumen-viaje.component.scss'],
})
export class ResumenViajeComponent implements OnInit {
  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;

  editMode: any = {};
  editableFields: any = {};

  origen: string = '';
  destino: string = '';

  currentViajeData: any;
  private destroy$ = new Subject<void>();

  constructor(
    private travelService: TravelService,
    private navCtrl: NavController,
    private dialog: MatDialog,
    public funcionesComunes: FuncionesComunes,
    private route: ActivatedRoute
  ) {}



  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const viajeId = params['id'];
  
      this.currentViajeData = this.travelService.getViajeData();
      this.obtenerViaje(viajeId);
      // Si no hay viajeId y los datos no están completos, redirigir al home
      if (
        !viajeId &&
        (
          !this.currentViajeData ||
          !this.currentViajeData.coche ||
          !this.currentViajeData.destino ||
          !this.currentViajeData.fecha_salida ||
          !this.currentViajeData.hora_salida ||
          !this.currentViajeData.origen ||
          !this.currentViajeData.plazas
        )
      ) {
        this.navCtrl.navigateRoot('/home');
        return;
      }
  
      // Verificación del usuario logueado
      this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
      if (
        this.userData &&
        Object.keys(this.userData).length > 0 &&
        this.userData.usuario.email
      ) {
        this.userLoggedIn = true;
      } else {
        this.userLoggedIn = false;
      }
    });
  }
  
  obtenerViaje(viaje_id: number){
    this.travelService.getViaje(viaje_id).subscribe((resultado) => {
      console.log('Viaje a editar: ', resultado);
      this.currentViajeData = resultado;
    })
  }

  /**
   * Función para confirmar el viaje.
   * Al confirmar mostramos un mensaje de confirmación para informar al usuario
   * Y a continuación se guardam los datos en BBDD.
   *
   * Una vez confirmado el mensaje, se reenvía a la ventana home.
   */
  confirmarViaje() {
    const title: string = 'Confirmación de Viaje';
    const message: string = 'El viaje ha sido confirmado con éxito.';

    this.currentViajeData.usuario = this.userData.usuario; // <- Se añaden todos los datos del usuario que ha creado el viaje.
    this.currentViajeData.usuario_id = this.userData.usuario.id; // <- Se añade el ID del usuario que ha creado el viaje.
    this.currentViajeData.plazas = Number(this.currentViajeData.plazas);
    if (isNaN(this.currentViajeData.plazas)) {
      this.openError(
        'Error!',
        'El número de plazas no es válido. Por favor, verifica los datos.'
      );
      return;
    }

    const fechaSalida = new Date(this.currentViajeData.fecha_salida)
      .toISOString()
      .split('T')[0];
    this.currentViajeData.fecha_salida = fechaSalida;
    console.log('Resumen viaje: ', this.currentViajeData);

    const mensajeConfirmación = this.openHelp(
      'Confirmar viaje',
      'Si continuas se va a confirmar el viaje.'
    );
    mensajeConfirmación.afterClosed().subscribe(() => {
      this.travelService.guardarViaje(this.currentViajeData).subscribe(
        (response) => {
          const dialogRef = this.openHelp(title, message);
          console.log('Viaje guardado correctamente:', response);
          dialogRef.afterClosed().subscribe(() => {
            this.navCtrl.navigateRoot('/home');
          });
        },
        (error) => {
          this.openError(
            'Error!',
            'Error al guardar el viaje. Por favor, inténtalo de nuevo más tarde.'
          );
          console.error('Error al guardar el viaje:', error);
        }
      );
    });
  }

  /**
   * Función para dar un formato específico a la fecha.
   */
  getFormattedDate(): string {
    if (this.currentViajeData.fecha_salida) {
      const date = new Date(this.currentViajeData.fecha_salida);
      return date.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });
    }
    return 'Ninguna fecha seleccionada.';
  }

  /**
   * Función que nos va a devolver a la pantalla de inicio del viaje
   */
  volverAInicioDelViaje() {
    this.navCtrl.navigateRoot('/data-viaje');
  }

  /**
   * Función para abrir la ventana emergente de ayuda
   * para informar al usuario.
   *
   * @param title Título que se va a mostrar en la ventana
   * @param message Mensaje que se va a mostrar en la ventana
   */
  openHelp(title: string, message: string) {
    return this.dialog.open(HelpModalComponent, {
      data: { title, message },
      disableClose: true,
    });
  }

  /**
   * Función para abrir la ventana emergente de error
   * para informar al usuario.
   *
   * @param title Título que se va a mostrar en la ventana
   * @param message Mensaje que se va a mostrar en la ventana
   */
  openError(title: string, message: string) {
    return this.dialog.open(ModalErrorComponent, {
      data: { title, message },
      disableClose: true,
    });
  }

  /**
   * Función para editar el input seleccionado.
   *
   * @param field Recibe los datos del input a editar
   */
  edicionInformacion(field: string) {
    if (this.editMode[field]) {
      this.currentViajeData[field] = this.editableFields[field];

      const viajeData = {
        ...this.travelService.getViajeData(),
        [field]: this.currentViajeData[field],
      };
      this.travelService.setViajeData(viajeData);
    } else {
      this.editableFields[field] = this.currentViajeData[field];
    }
    this.editMode[field] = !this.editMode[field];
  }

  /**
   * Función para calcular la hora de llegada del viaje
   * @param hora_salida
   * @param duracion_viaje
   * @returns
   */
  calcularHoraLlegada(
    hora_salida: string,
    duracion_viaje: string
  ): string | null {
    try {
      let [horasSalida, minutosSalida] = hora_salida.split(':').map(Number);
      let salidaDate = new Date();
      salidaDate.setHours(horasSalida, minutosSalida, 0);

      let duracionHoras = 0;
      let duracionMinutos = 0;

      const duracionMatch = duracion_viaje.match(/(\d+)h\s*(\d+)?min?/);
      if (duracionMatch) {
        duracionHoras = Number(duracionMatch[1]) || 0;
        duracionMinutos = Number(duracionMatch[2]) || 0;
      }

      let llegadaDate = new Date(salidaDate);
      llegadaDate.setHours(llegadaDate.getHours() + duracionHoras);
      llegadaDate.setMinutes(llegadaDate.getMinutes() + duracionMinutos);

      return llegadaDate.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch (error) {
      console.error('Error al calcular hora de llegada:', error);
      return null;
    }
  }

  /**
   * Función para guardar la información de la localidad de origen seleccionada.
   *
   * @param localidad -> Recibe la localidad seleccionada en la lista de sugerencias.
   */
  seleccionarLocalidadOrigen(localidad: any) {
    this.origen = localidad.display_name.split(',')[0].trim();
    const viajeData = {
      ...this.travelService.getViajeData(),
      origen: this.origen,
    };
    this.travelService.setViajeData(viajeData);
    this.funcionesComunes.sugerenciasOrigen = [];
  }

  /**
   * Función para guardar la información de la localidad de destino seleccionada.
   *
   * @param localidad -> Recibe la localidad seleccionada en la lista de sugerencias.
   */
  seleccionarLocalidadDestino(localidad: any) {
    this.destino = localidad.display_name.split(',')[0].trim();
    const viajeData = {
      ...this.travelService.getViajeData(),
      destino: this.destino,
    };
    this.travelService.setViajeData(viajeData);
    this.funcionesComunes.sugerenciasDestino = [];
  }

  actualizarInformacion() {
    this.travelService.viajeData$
      .pipe(takeUntil(this.destroy$))
      .subscribe((viajeData) => {
        this.currentViajeData = viajeData ?? {};
        this.origen = this.currentViajeData?.origen || '';
        // this.selectedRoute = this.currentViajeData?.ruta_seleccionada || null;
      });
  }
}
