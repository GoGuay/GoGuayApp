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

  editandoOrigen: boolean = false;
  editandoDestino: boolean = false;
  editandoCoche: boolean = false;
  editandoPlazas: boolean = false;
  editandoFecha: boolean = false;
  editandoHora: boolean = false;

  valorOriginalOrigen: string = '';
  valorOriginalDestino: string = '';
  valorOriginalCoche: any = null;
  valorOriginalPlazas: string = '';
  valorOriginalFecha: string = '';
  valorOriginalHora: string = '';

  copiaViajeData: any = {};
  isDesktop: boolean = false;
  mostrarResumenMobile: boolean = false;

  esSeleccionOrigenValida: boolean = false;
  esSeleccionDestinoValida: boolean = false;

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
        if (viajeData.plazas !== undefined) {
          this.currentViajeData.plazas = viajeData.plazas;
        }
      }
    });
  }

  // Devuelve la fecha formateada legible para el usuario
  getFormattedDate(): string {
   const fecha = this.currentViajeData?.fecha_salida;
    if (fecha) {
      const date = new Date(fecha);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('es-ES', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        });
      }
      return fecha; 
    }
    return '';
  }

  // Prepara la fecha en formato YYYY-MM-DD para que el input type="date" la reconozca al editar
  getInputDateValue(): string {
    const fecha = this.currentViajeData?.fecha_salida;
    if (!fecha) return '';
    const date = new Date(fecha);
    if (!isNaN(date.getTime())) {
      return date.toISOString().split('T')[0];
    }
    return fecha;
  }

  getFormattedTime(): string {
    if (this.currentViajeData?.hora_salida) {
      const hora = this.currentViajeData.hora_salida;
      if (hora.includes('T')) {
        const date = new Date(hora);
        return date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
      }
      return hora;
    }
    return '';
  }

  getFormattedCoche(): string {
    const coche = this.currentViajeData?.coche;
    if (!coche) return '';
    if (typeof coche === 'string') return coche;
    return `${coche.marca || ''} ${coche.modelo || ''} (${coche.color || ''})`.trim();
  }

  toggleEditarViaje() {
    const datosUltimos = this.travelService.getViajeData();
    if (datosUltimos) {
      this.currentViajeData = { ...datosUltimos };
      this.origenCtrl.valorTexto = this.currentViajeData.origen || '';
      this.destinoCtrl.valorTexto = this.currentViajeData.destino || '';
    }
    this.copiaViajeData = JSON.parse(JSON.stringify(this.currentViajeData));

    this.editandoOrigen = false;
    this.editandoDestino = false;
    this.editandoCoche = false;
    this.editandoPlazas = false;
    this.editandoFecha = false;
    this.editandoHora = false;
  }

  onFieldChange() {
    const viajeActualizado = {
      ...this.currentViajeData,
      origen: this.origenCtrl.valorTexto,
      destino: this.destinoCtrl.valorTexto,
    };
    this.travelService.setViajeData(viajeActualizado);
  }

  guardarCambios() {
    this.onFieldChange();
    this.editandoOrigen = false;
    this.editandoDestino = false;
    this.editandoCoche = false;
    this.editandoPlazas = false;
    this.editandoFecha = false;
    this.editandoHora = false;
  }

  cancelarEdicion() {
    this.currentViajeData = JSON.parse(JSON.stringify(this.copiaViajeData));
    if (this.copiaViajeData.origen) this.origenCtrl.valorTexto = this.copiaViajeData.origen;
    if (this.copiaViajeData.destino) this.destinoCtrl.valorTexto = this.copiaViajeData.destino;

    this.travelService.setViajeData(this.currentViajeData);
    this.editandoOrigen = false;
    this.editandoDestino = false;
    this.editandoCoche = false;
    this.editandoPlazas = false;
    this.editandoFecha = false;
    this.editandoHora = false;
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
    this.esSeleccionOrigenValida = true;
  }

  cancelarEdicionOrigen(): void {
    this.origenCtrl.valorTexto = this.valorOriginalOrigen;
    this.editandoOrigen = false;
  }

  hayCambioOrigen(): boolean {
    return this.origenCtrl.valorTexto !== this.valorOriginalOrigen;
  }

  guardarOrigen(): void {
    if (!this.esSeleccionOrigenValida) return;
    this.currentViajeData.origen = this.origenCtrl.valorTexto;
    this.travelService.setViajeData({ ...this.currentViajeData, origen: this.origenCtrl.valorTexto });
    this.editandoOrigen = false;
  }

  activarEdicionDestino(): void {
    this.valorOriginalDestino = this.currentViajeData?.destino || '';
    this.destinoCtrl.valorTexto = this.currentViajeData?.destino || '';
    this.editandoDestino = true;
    this.esSeleccionDestinoValida = true;
  }

  cancelarEdicionDestino(): void {
    this.destinoCtrl.valorTexto = this.valorOriginalDestino;
    this.editandoDestino = false;
  }

  hayCambioDestino(): boolean {
    return this.destinoCtrl.valorTexto !== this.valorOriginalDestino;
  }

  guardarDestino(): void {
    if (!this.esSeleccionDestinoValida) return;
    this.currentViajeData.destino = this.destinoCtrl.valorTexto;
    this.travelService.setViajeData({ ...this.currentViajeData, destino: this.destinoCtrl.valorTexto });
    this.editandoDestino = false;
  }

  activarEdicionCoche(): void {
    this.valorOriginalCoche = this.currentViajeData?.coche || null;
    this.editandoCoche = true;
  }

  cancelarEdicionCoche(): void {
    this.currentViajeData.coche = this.valorOriginalCoche;
    this.travelService.setViajeData({ ...this.currentViajeData });
    this.editandoCoche = false;
  }

  hayCambioCoche(): boolean {
    return this.currentViajeData?.coche !== this.valorOriginalCoche;
  }

  guardarCoche(): void {
    this.travelService.setViajeData({ ...this.currentViajeData });
    this.editandoCoche = false;
  }

  onCocheCambiado(opcion: any) {
    const idSeleccionado = typeof opcion === 'object' && opcion !== null ? opcion.valor || opcion : opcion;
    const cocheObjeto = this.mapaVehiculos.get(idSeleccionado) || idSeleccionado;
    this.currentViajeData.coche = cocheObjeto;
    this.travelService.setViajeData({ ...this.currentViajeData });
  }

  activarEdicionPlazas(): void {
    this.valorOriginalPlazas = this.currentViajeData?.plazas || '';
    this.editandoPlazas = true;
  }

  cancelarEdicionPlazas(): void {
    this.currentViajeData.plazas = this.valorOriginalPlazas;
    this.travelService.setViajeData({ ...this.currentViajeData });
    this.editandoPlazas = false;
  }

  hayCambioPlazas(): boolean {
    return this.currentViajeData?.plazas !== this.valorOriginalPlazas;
  }

  guardarPlazas(): void {
    this.travelService.setViajeData({ ...this.currentViajeData });
    this.editandoPlazas = false;
  }

  onPlazasCambiadas(opcion: any) {
    const plazas = typeof opcion === 'object' && opcion !== null ? opcion.valor || opcion.descripcion : opcion;
    this.currentViajeData.plazas = plazas;
    this.travelService.setViajeData({ ...this.currentViajeData });
  }

  activarEdicionFecha(): void {
    this.valorOriginalFecha = this.currentViajeData?.fecha_salida || '';
    this.editandoFecha = true;
  }

  cancelarEdicionFecha(): void {
    this.currentViajeData.fecha_salida = this.valorOriginalFecha;
    this.travelService.setViajeData({ ...this.currentViajeData });
    this.editandoFecha = false;
  }

  hayCambioFecha(): boolean {
    return this.currentViajeData?.fecha_salida !== this.valorOriginalFecha;
  }

  guardarFecha(): void {
    this.travelService.setViajeData({ ...this.currentViajeData });
    this.editandoFecha = false;
  }

  activarEdicionHora(): void {
    this.valorOriginalHora = this.currentViajeData?.hora_salida || '';
    this.editandoHora = true;
  }

  cancelarEdicionHora(): void {
    this.currentViajeData.hora_salida = this.valorOriginalHora;
    this.travelService.setViajeData({ ...this.currentViajeData });
    this.editandoHora = false;
  }

  hayCambioHora(): boolean {
    return this.currentViajeData?.hora_salida !== this.valorOriginalHora;
  }

  guardarHora(): void {
    this.travelService.setViajeData({ ...this.currentViajeData });
    this.editandoHora = false;
  }
}