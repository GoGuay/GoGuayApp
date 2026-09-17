import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule, Platform } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { VehiculosServicesService } from 'src/app/core/vehiculos-services/vehiculos-services.service';
import { Usuario } from 'src/app/models/user/usuario.model';
import { SelectorGeneralComponent } from 'src/app/components/selector-general/selector-general.component';
import { BuscadorLocalidadesService } from 'src/app/core/buscador-localidades/buscador-localidades.service';
import { ControlLocalidad } from 'src/app/models/control-localidad/control-localidad.model';
import { CARS } from '../../../../../models/vehiculos/marcas_modelos.model';

@Component({
  selector: 'app-resumen-dinamico',
  standalone: true,
  imports: [
    MatIconModule,
    IonicModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    SelectorGeneralComponent,
  ],
  templateUrl: './resumen-dinamico.component.html',
  styleUrls: ['./resumen-dinamico.component.scss'],
})
export class ResumenDinamicoComponent implements OnInit, OnDestroy {
  userData: Usuario = {} as Usuario;
  currentViajeData: any = {};
  private destroy$ = new Subject<void>();
  editandoViaje: boolean = false;
  editandoOrigen: boolean = false;
  valorOriginalOrigen: string = '';
  copiaViajeData: any = {};
  isDesktop: boolean = false;
  mostrarResumenMobile: boolean = false;
  esSeleccionOrigenValida: boolean = false; // Controla si escogió de la lista o es válido

  origenCtrl: ControlLocalidad;
  destinoCtrl: ControlLocalidad;

  opcionesPlazas = [
    { valor: '1', descripcion: '1' },
    { valor: '2', descripcion: '2' },
    { valor: '3', descripcion: '3' },
    { valor: '4', descripcion: '4' },
  ];

  private mapaVehiculos = new Map<string, any>();
  opcionesVehiculos: { valor: string; descripcion: string }[] = [];

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  constructor(
    private travelService: TravelService,
    private vehiculosServicesService: VehiculosServicesService,
    private platform: Platform,
    public buscadorLocalidadesService: BuscadorLocalidadesService
  ) {
    this.origenCtrl = this.buscadorLocalidadesService.crearEstadoControl();
    this.destinoCtrl = this.buscadorLocalidadesService.crearEstadoControl();

    this.buscadorLocalidadesService.inicializarBuscador(this.origenCtrl);
    this.buscadorLocalidadesService.inicializarBuscador(this.destinoCtrl);
  }

  ngOnInit() {
    this.checkScreenSize();
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.actualizarInformacion();
    this.obtenerVehiculos();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  checkScreenSize() {
    const anchoActual = window.innerWidth;
    this.isDesktop = this.platform.is('desktop') || anchoActual > 768;

    if (this.isDesktop) {
      this.mostrarResumenMobile = true;
    } else if (!this.isDesktop && !this.mostrarResumenMobile) {
      this.mostrarResumenMobile = false;
    }
  }

  getCocheIdActual(): string {
    const coche = this.currentViajeData?.coche;
    if (!coche) return '';
    return coche.matricula || `${coche.marca}-${coche.modelo}-${coche.color}`;
  }

  /**
   * Sincronización bidireccional en tiempo real con el servicio de viajes
   */
  actualizarInformacion() {
    this.travelService.viajeData$.pipe(takeUntil(this.destroy$)).subscribe((viajeData) => {
      if (viajeData) {
        this.currentViajeData = { ...viajeData };

        if (viajeData.origen && viajeData.origen !== this.origenCtrl.valorTexto) {
          this.origenCtrl.valorTexto = viajeData.origen;
        }
        if (viajeData.destino && viajeData.destino !== this.destinoCtrl.valorTexto) {
          this.destinoCtrl.valorTexto = viajeData.destino;
        }
      }
    });
  }

  getFormattedDate(): string {
    if (this.currentViajeData?.fecha_salida) {
      const date = new Date(this.currentViajeData.fecha_salida);
      return date.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });
    }
    return '';
  }

  toggleEditarViaje() {
    const datosUltimos = this.travelService.getViajeData();
    if (datosUltimos) {
      this.currentViajeData = { ...datosUltimos };
      this.origenCtrl.valorTexto = this.currentViajeData.origen || '';
      this.destinoCtrl.valorTexto = this.currentViajeData.destino || '';
    }
    this.copiaViajeData = JSON.parse(JSON.stringify(this.currentViajeData));
    this.editandoViaje = true;
  }

  onFieldChange() {
    if (this.editandoViaje) {
      const viajeActualizado = {
        ...this.currentViajeData,
        origen: this.origenCtrl.valorTexto,
        destino: this.destinoCtrl.valorTexto,
      };
      this.travelService.setViajeData(viajeActualizado);
    }
  }

  /**
   * Captura y sincroniza instantáneamente el cambio de plazas
   */
  onPlazasCambiadas(opcion: any) {
    const plazas = typeof opcion === 'object' && opcion !== null ? opcion.valor || opcion.descripcion : opcion;
    this.currentViajeData.plazas = plazas;
    this.onFieldChange();
  }

  onCocheCambiado(opcion: any) {
    const idSeleccionado = typeof opcion === 'object' && opcion !== null ? opcion.valor || opcion : opcion;

    const cocheObjeto = this.mapaVehiculos.get(idSeleccionado) || idSeleccionado;
    this.currentViajeData.coche = cocheObjeto;
    this.onFieldChange();
  }

  guardarCambios() {
    this.onFieldChange();
    this.editandoViaje = false;
  }

  cancelarEdicion() {
    this.currentViajeData = JSON.parse(JSON.stringify(this.copiaViajeData));
    if (this.copiaViajeData.origen) this.origenCtrl.valorTexto = this.copiaViajeData.origen;
    if (this.copiaViajeData.destino) this.destinoCtrl.valorTexto = this.copiaViajeData.destino;

    this.travelService.setViajeData(this.currentViajeData);
    this.editandoViaje = false;
  }

  obtenerVehiculos() {
    const usuarioLocal = JSON.parse(localStorage.getItem('userData') || '{}');
    if (usuarioLocal?.usuario?.id) {
      this.vehiculosServicesService.obtenerVehiculosUsuario(usuarioLocal.usuario.id).subscribe((resultado) => {
        if (resultado?.vehiculos) {
          this.userData.usuario.vehiculos = resultado.vehiculos;
          this.mapaVehiculos.clear();

          this.opcionesVehiculos = resultado.vehiculos.map((coche: any) => {
            const idUnicoCoche = coche.matricula || `${coche.marca}-${coche.modelo}-${coche.color}`;
            this.mapaVehiculos.set(idUnicoCoche, coche);

            return {
              valor: idUnicoCoche,
              descripcion: `${coche.marca} ${coche.modelo || ''} (${coche.color || ''})`.trim(),
            };
          });
        }
      });
    }
  }

  toggleResumenMobile() {
    this.mostrarResumenMobile = !this.mostrarResumenMobile;
  }

  activarEdicionOrigen(): void {
    this.valorOriginalOrigen = this.currentViajeData?.origen || '';
    this.origenCtrl.valorTexto = this.currentViajeData?.origen || '';
    this.editandoOrigen = true;
  }

  cancelarEdicionOrigen(): void {
    this.origenCtrl.valorTexto = this.valorOriginalOrigen;
    this.editandoOrigen = false;
  }

  // Se ejecuta cuando el usuario escribe texto libremente en el input
  onTextoOrigenCambiado(texto: any): void {
    // Llamamos a tu servicio para que busque sugerencias
    this.buscadorLocalidadesService.obtenerSugerencias(this.origenCtrl, texto);

    // Si el usuario escribe algo a mano que no ha seleccionado formalmente de la lista,
    // invalidamos temporalmente la opción de guardar (a menos que coincida exactamente con el original)
    if (this.origenCtrl.valorTexto === this.valorOriginalOrigen) {
      this.esSeleccionOrigenValida = true;
    } else {
      this.esSeleccionOrigenValida = false;
    }
  }

  // Se ejecuta específicamente cuando el usuario HACE CLIC en una opción de la lista desplegable
  onSeleccionOrigenCambiada(evento: any): void {
    this.buscadorLocalidadesService.seleccionarLocalidad(this.origenCtrl, evento);

    // Como seleccionó un elemento de la lista, marcamos la selección como 100% válida
    this.esSeleccionOrigenValida = true;
  }

  hayCambioOrigen(): boolean {
    return this.origenCtrl.valorTexto !== this.valorOriginalOrigen;
  }

  guardarOrigen(): void {
    if (!this.esSeleccionOrigenValida) {
      return; // Doble seguridad por si intentan forzarlo
    }

    this.currentViajeData.origen = this.origenCtrl.valorTexto;
    this.editandoOrigen = false;
    this.esSeleccionOrigenValida = false;

    // Aquí tu lógica para persistir el cambio en API/Servicio
  }
}
