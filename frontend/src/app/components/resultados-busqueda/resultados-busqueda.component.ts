import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TravelService } from '../../core/travel-services/travel.service';
import { FuncionesComunes } from '../../core/funciones-comunes/funciones-comunes.service';
import { UserServicesService } from '../../core/user-services/user-services.service';
import { MessagingService } from '../../core/menssaging-service/messaging.service';
import { Viaje } from '../../models/travel/viaje.model';
import { Usuario } from '../../models/user/usuario.model';
import { MatDialog } from '@angular/material/dialog';
import { ViajeSeleccionadoComponent } from '../viaje-seleccionado/viaje-seleccionado.component';
import { catchError, Observable, of, tap } from 'rxjs';
import { SpinnerComponent } from '../spinner/spinner.component';
import { LoadTravelLineComponent } from '../load-travel-line/load-travel-line.component';
import { IonicModule, NavController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';
import { CancelarSolicitudModalComponent } from '../cancelar-solicitud/cancelar-solicitud-modal.compmonent';


@Component({
  selector: 'app-resultados-busqueda',
  standalone: true,
  imports: [
    IonicModule,
    TranslateModule,
    CommonModule,
    SpinnerComponent,
    LoadTravelLineComponent
],
  templateUrl: './resultados-busqueda.component.html',
  styleUrls: ['./resultados-busqueda.component.scss'],
})
export class ResultadosBusquedaComponent implements OnInit {
  userLoggedIn: boolean = false;
  userData: Usuario | undefined = {} as Usuario;
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
    private dialog: MatDialog,
    public messagingService: MessagingService
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
    const storedData = localStorage.getItem('userData');
    this.userData = storedData ? JSON.parse(storedData) : { usuario: { id: -1 } };
    this.userLoggedIn = this.funcionesComunes.isUserLoggedIn();
    this.funcionesComunes.getBaseUrl();
  }

  cargarDatos() {
    const tieneFiltros =
      this.paramsBusqueda &&
      Object.keys(this.paramsBusqueda).length > 0 &&
      Object.values(this.paramsBusqueda).some(
        (val) => val !== '' && val !== null && val !== undefined
      );

      if (!tieneFiltros) {
        this.listado_viajes = [];
        this.isLoading = false;
        return;
      }

      this.isLoading = true;

      this.travelService.obtenerViajesFiltrados(this.paramsBusqueda).subscribe({
      next: (viajes) => {
        this.listado_viajes = viajes.map(viaje => {
          return {
            ...viaje,
            duracion_calculada: this.calcularDuracion(viaje.hora_salida, viaje.hora_llegada)
          };
        });
        this.cargarUsuariosParaViajes(this.listado_viajes);
      },
      error: (err) => {
        this.isLoading = false;
        this.listado_viajes = [];
      }
    });
  }

  private cargarUsuariosParaViajes(viajes: Viaje[]) {
    const idsUnicos = [...new Set(viajes.map((v) => v.usuario_id))];

    if (idsUnicos.length === 0) {
      this.isLoading = false;
      return;
    }

    const solicitudesUsuarios = idsUnicos.map((id) => {
      if (this.usuariosCache.has(id)) {
        return of(this.usuariosCache.get(id));
      }
      return this.userService
        .obtenerUsuarioPorID(id)
        .pipe(
          tap((user) => this.usuariosCache.set(id, user)),
          catchError(err => {
            console.error(`Error cargando usuario ${id}`, err);
            return of(null);
          })
        );
        });

        forkJoin(solicitudesUsuarios).subscribe({
          next: () => {
            this.listado_viajes.forEach((viaje) => {
              viaje.usuario = this.usuariosCache.get(viaje.usuario_id);
            });
            this.aplicarFiltro();
          },
          complete: () => {
            this.isLoading = false;
          }
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
      },
    });
  }

  /**
   * Función para obtener la lista de viajes completa
   */
  obtenerListaViajes() {
    this.isLoading = true;
    this.travelService.obtenerTodosLosViajes().subscribe((viajes) => {
      this.listado_viajes = viajes;

      const idsUnicos = [...new Set(viajes.map((v) => v.usuario_id))];

      const solicitudesUsuarios = idsUnicos.map((id) => {
        if (this.usuariosCache.has(id)) {
          return of(this.usuariosCache.get(id));
        }
        return this.userService
          .obtenerUsuarioPorID(id)
          .pipe(tap((user) => this.usuariosCache.set(id, user)));
      });

      forkJoin(solicitudesUsuarios).subscribe(() => {
        this.listado_viajes.forEach((viaje) => {
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
      data: { viaje },
    });
  }

  /**
   * Función para aplicar el filtro a la lista de viajes
   */
  aplicarFiltro() {
    if (this.filtroSeleccionado === 'precioAsc') {
      this.listado_viajes.sort(
        (a, b) => (a.precio_viaje || 0) - (b.precio_viaje || 0),
      );
    } else if (this.filtroSeleccionado === 'precioDesc') {
      this.listado_viajes.sort(
        (a, b) => (b.precio_viaje || 0) - (a.precio_viaje || 0),
      );
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

  /**
   * Función para marcar que la imagen de un viaje ha sido cargada, evitando mostrar 
   * el spinner en viajes que ya han cargado su imagen previamente.
   * 
   * @param viajeId ID del viaje cuya imagen ha sido cargada
   */
  marcarImagenComoCargada(viajeId: number) {
    this.imagenesCargadas[viajeId] = true;
  }


  /**
   * Función para calcular la duración de un trayecto entre dos horas.
   * 
   * @param horaSalida --> Hora de salida del viaje en formato "HH:mm"
   * @param horaLlegada --> Hora de llegada del viaje en formato "HH:mm"
   * @returns --> Duración del viaje en formato "Xh Ymin", "Xh" o "Ymin". Si las horas son iguales, 
   * devuelve un mensaje indicando que la duración no está disponible.
   */
  calcularDuracion(horaSalida: string, horaLlegada: string): string {
    if (!horaSalida || !horaLlegada) return '---';

    if (horaSalida === horaLlegada) {
      return 'Duración estimada no disponible'; 
    }

    const [h1, m1] = horaSalida.split(':').map(Number);
    const [h2, m2] = horaLlegada.split(':').map(Number);

    let minutosInicio = h1 * 60 + m1;
    let minutosFin = h2 * 60 + m2;

    if (minutosFin < minutosInicio) {
      minutosFin += 24 * 60; 
    }

    const diferenciaTotal = minutosFin - minutosInicio;
    const horas = Math.floor(diferenciaTotal / 60);
    const minutos = diferenciaTotal % 60;

    if (horas === 0) return `${minutos}min`;
    if (minutos === 0) return `${horas}h`;
    return `${horas}h ${minutos}min`;
  }


  unirseAViaje(viaje: Viaje) {
    if (!this.userLoggedIn) {
        this.redirigirAlLogin();
        return;
      }
      
      this.navCtrl.navigateForward(['/pago-reserva', viaje.id]);
  }


  estaUnido(viaje: Viaje): boolean {
    if (!this.userData?.usuario?.id) return false;
    return viaje.acompanantes?.some((a: any) => a.id === this.userData?.usuario.id) || false;
  }

  private solicitudAutomatica(viaje: Viaje) {
    const title_error = '¡Algo anda mal!';
    const title_viaje_confirmado = '¡Confirmado!';
    const message_viaje_confirmado = 'Te has unido al viaje correctamente.';

    if (this.estaUnido(viaje)) {
      this.funcionesComunes.openConfirmModal(title_error, 'Ya estás unido a este viaje.');
      return;
    }

    this.travelService.unirseAViaje(viaje.id).subscribe({
      next: (viajesActualizados: Viaje[]) => {
        // Buscamos el viaje actualizado en la respuesta para refrescar la UI local
        const actualizado = viajesActualizados.find(v => v.id === viaje.id);
        if (actualizado) {
          // Actualizamos la referencia en el listado para que cambie el botón
          Object.assign(viaje, actualizado);
          this.funcionesComunes.openConfirmModal(title_viaje_confirmado, message_viaje_confirmado);
        }
      },
      error: () => {
        this.funcionesComunes.openErrorModal(title_error, 'No se pudo procesar la reserva.');
      }
    });
  }

  /**
   * Solicitud que requiere aprobación (vía Chat)
   */
  private enviarSolicitudManual(viaje: Viaje) {
    const emisorId = this.userData?.usuario.id || 0;
    const receptorId = viaje.usuario_id;

    this.messagingService.iniciarChat(emisorId, receptorId).subscribe({
      next: (res) => {
        const convId = res.conversacion_id;
        const payload = {
          viaje_id: viaje.id,
          emisor_id: emisorId,
          receptor_id: receptorId,
          conversacion_id: convId,
        };

        this.messagingService.enviarSolicitudViaje(payload).subscribe(() => {
          this.funcionesComunes.openConfirmModal(
            'Solicitud enviada',
            'El conductor debe aceptar tu solicitud para unirte.'
          );
          this.navCtrl.navigateForward(['/chat', convId]);
        });
      },
    });
  }

  private redirigirAlLogin() {
    this.funcionesComunes
      .openConfirmModal('¡Atención!', 'Debes iniciar sesión para realizar esta acción.')
      .afterClosed()
      .subscribe((res) => {
        if (res) this.navCtrl.navigateRoot(['/login']);
      });
  }

  contactarConConductor(viaje: Viaje) {
    const emisorId = this.userData?.usuario?.id;
    const receptorId = viaje.usuario_id;

    // Validamos si tenemos los IDs necesarios antes de llamar al servicio
    if (emisorId && receptorId) {
      this.messagingService.iniciarChat(emisorId, receptorId).subscribe({
        next: (res) => {
          this.navCtrl.navigateForward(['/chat', res.conversacion_id]);
        },
        error: (err) => console.error('Error al iniciar chat:', err)
      });
    } else {
      // Si no hay emisorId, es que no está logueado
      this.redirigirAlLogin();
    }
  }

  abrirModalCancelacion(viaje: Viaje) {
    const dialogRef = this.dialog.open(CancelarSolicitudModalComponent, {
      width: '400px',
      data: { viaje: viaje },
      panelClass: 'custom-modal-cancelacion' 
    });

    dialogRef.afterClosed().subscribe(razon => {
      if (razon) {
        this.ejecutarCancelacion(viaje.id, razon);
      }
    });
  }

  private ejecutarCancelacion(viajeId: number, razon: string) {
    console.log(`Cancelando viaje ${viajeId} por la razón: ${razon}`);
    
  }
}
