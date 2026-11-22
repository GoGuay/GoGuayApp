import { ChangeDetectorRef, Component, OnInit, OnDestroy, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { IonContent,  ModalController, NavController, IonHeader, IonFab, IonFabButton, IonButton, IonBadge, IonFooter, IonIcon } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { MessagingService } from '../../../core/menssaging-service/messaging.service';
import { Usuario } from '../../../models/user/usuario.model';
import { NotificacionesService } from '../../../core/notificaciones/notificaciones.service';
import { TravelService } from '../../../core/travel-services/travel.service';
import { SpinnerComponent } from '../../../components/spinner/spinner.component';
import { Subject, forkJoin, of, timer, Observable } from 'rxjs';
import { exhaustMap, takeUntil, catchError, map, shareReplay, tap } from 'rxjs/operators';
import { addIcons } from 'ionicons';
import { LISTA_EMOJIS } from '../../../models/emojis/emojis.const';
import { send } from 'ionicons/icons';
import { AbrirIncidenciaModalComponent } from 'src/app/components/abrir-incidencia-modal/abrir-incidencia-modal.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: true,
  imports: [IonIcon, IonFooter, IonBadge, IonButton, IonFabButton, IonFab, IonHeader,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSliderModule,
    NavbarComponent,
    SpinnerComponent, IonContent],
  changeDetection: ChangeDetectionStrategy.Eager,
  providers: [],
})
export class ChatPage implements OnInit, OnDestroy {
  @ViewChild(IonContent, { static: false }) content!: IonContent;

  userData: any = {} as Usuario;

  mostrarPreguntaTelefono: boolean = true;
  telefonoRecibido: string | null = null;
  cargandoPreferenciaTelefono: boolean = true;
  compartiendoMiTelefono: boolean = false;

  cargandoChat: boolean = true;

  userLoggedIn: boolean = false;
  irAtrasImg: string = '../../../assets/sistema/atras.png';

  mensajes: any[] = [];
  texto = '';
  userId = 1;
  usuarioLogueadoId!: number;
  conversacionId!: number;
  detallesConversacion: any;

  cargandoSolicitud: { [key: number]: boolean } = {};
  solicitudesGestionadas: { [key: number]: 'Aceptada' | 'Rechazada' | 'Cancelada' } = {};

  mostrarEmojiPicker: boolean = false;
  listaEmojis = LISTA_EMOJIS;

  // Caché en memoria para no repetir consultas de viajes ya obtenidos
  private viajesCache = new Map<number, any>();
  private viajeIdPorMensaje = new Map<number, number>();
  private stopPolling$ = new Subject<void>();
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private messagingService: MessagingService,
    private notificacionesService: NotificacionesService,
    private travelService: TravelService,
    private navCtrl: NavController,
    private cdr: ChangeDetectorRef,
    private modalController: ModalController,
    public messageService: MessageService
  ) {
    addIcons({ send });
  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.usuarioLogueadoId = this.userData?.usuario?.id;
    this.conversacionId = Number(this.route.snapshot.paramMap.get('id'));
  }

  /**
   * Inicia una única fuente de datos al entrar en la vista (evita llamadas duplicadas entre ngOnInit e ionViewWillEnter).
   */
  ionViewWillEnter() {
    this.cargandoChat = true;
    this.viajesCache.clear();
    this.iniciarPollingMensajes();
  }

  /**
   * Detiene el polling cuando el usuario sale de la pantalla de chat.
   */
  ionViewWillLeave() {
    this.stopPolling$.next();
  }

  /**
   * Polling controlado con exhaustMap: espera a que termine la petición actual antes de lanzar la siguiente.
   */
  private iniciarPollingMensajes() {
    this.stopPolling$.next();

    timer(0, 5000)
      .pipe(
        takeUntil(this.stopPolling$),
        takeUntil(this.destroy$),
        exhaustMap(() =>
          this.messagingService.getMensajes(this.conversacionId).pipe(
            catchError((err) => {
              console.error('Error al obtener mensajes del chat:', err);
              this.cargandoChat = false;
              this.cdr.detectChanges();
              return of(null);
            })
          )
        )
      )
      .subscribe((data) => {
        if (!data) return;

        const esPrimeraCarga = this.cargandoChat;
        const ultimoIdAnterior = this.mensajes.length ? this.mensajes[this.mensajes.length - 1].id : null;
        const ultimoIdNuevo = data.length ? data[data.length - 1].id : null;
        const hayCambios = esPrimeraCarga || data.length !== this.mensajes.length || ultimoIdAnterior !== ultimoIdNuevo;

        if (hayCambios) {
          this.mensajes = data;
          this.sincronizarEstadoCompleto(data, esPrimeraCarga || ultimoIdAnterior !== ultimoIdNuevo);
          this.marcarComoLeidos();
        }
      });
  }

  cargarMensajes() {
    this.messagingService.getMensajes(this.conversacionId).subscribe({
      next: (data) => {
        this.mensajes = data;
        this.sincronizarEstadoCompleto(data, true);
      },
      error: (err) => {
        console.error('Error al cargar mensajes:', err);
        this.cargandoChat = false;
        this.cdr.detectChanges();
      },
    });
  }

  esMensajeSolicitud(m: any): boolean {
    return !!m?.texto && m.texto.includes('Solicitud para unirse al viaje');
  }

  extraerViajeId(m: any): number {
    if (m?.viaje_id) {
      return Number(m.viaje_id);
    }
    if (m?.id && this.viajeIdPorMensaje.has(m.id)) {
      return this.viajeIdPorMensaje.get(m.id)!;
    }
    if (m?.texto && m.texto.includes(':')) {
      const posibleId = Number(m.texto.split(':')[1]);
      if (!isNaN(posibleId) && posibleId > 0) {
        return posibleId;
      }
    }
    return 0;
  }

  /**
   * Sincronización optimizada:
   * 1. Deduplica IDs de viaje para consultar cada viaje como máximo 1 vez.
   * 2. Reutiliza caché en memoria.
   * 3. Si faltan viaje_id en mensajes antiguos, pide getViajesUsuario una sola vez para todos.
   */
private sincronizarEstadoCompleto(mensajes: any[], hacerScroll: boolean = false) {
    this.telefonoRecibido = null;
    this.compartiendoMiTelefono = false;

    const mensajesSolicitudSinResolver: { mensaje: any; index: number }[] = [];
    const idsViajesAConsultar = new Set<number>();
    let requiereFallbackViajes = false;

    mensajes.forEach((m: any, index: number) => {
      if (!m.id) return;

      if (!m.viaje_id && this.viajeIdPorMensaje.has(m.id)) {
        m.viaje_id = this.viajeIdPorMensaje.get(m.id);
      }

      if (m.texto.includes('TELEFONO USUARIO:')) {
        if (m.emisor_id === this.usuarioLogueadoId) {
          this.compartiendoMiTelefono = true;
        } else {
          this.telefonoRecibido = m.texto.split(':')[1]?.trim() || null;
        }
      }

      if (this.esMensajeSolicitud(m)) {
        const pasajeroId = m.emisor_id;

        const mensajesPosteriores = mensajes.slice(index + 1);
        const respuestaConductor = mensajesPosteriores.find(
          (msg) =>
            msg.emisor_id !== pasajeroId &&
            (msg.texto.includes('He aceptado tu solicitud') || msg.texto.includes('Lo siento, no puedo aceptarte'))
        );

        if (respuestaConductor) {
          this.solicitudesGestionadas[m.id] = respuestaConductor.texto.includes('He aceptado tu solicitud')
            ? 'Aceptada'
            : 'Rechazada';
          return;
        }

        if (!this.solicitudesGestionadas[m.id]) {
          const viajeId = this.extraerViajeId(m);
          mensajesSolicitudSinResolver.push({ mensaje: m, index });

          if (viajeId > 0) {
            this.viajeIdPorMensaje.set(m.id, viajeId);
            if (!this.viajesCache.has(viajeId)) {
              idsViajesAConsultar.add(viajeId);
            }
          } else {
            requiereFallbackViajes = true;
          }
        }
      }
    });

    this.mostrarPreguntaTelefono = !this.compartiendoMiTelefono;
    this.cargandoPreferenciaTelefono = false;

    if (mensajesSolicitudSinResolver.length === 0) {
      this.finalizarCargaChat(hacerScroll);
      return;
    }

    const peticiones$: Observable<any>[] = [];

    idsViajesAConsultar.forEach((viajeId) => {
      peticiones$.push(
        this.travelService.getViaje(viajeId).pipe(
          tap((viaje) => {
            if (viaje) this.viajesCache.set(viajeId, viaje);
          }),
          catchError(() => of(null))
        )
      );
    });

    if (requiereFallbackViajes) {
      const viajesConductor$ = this.travelService.getViajesUsuario(this.usuarioLogueadoId).pipe(
        map((res: any) => res?.viajes || []),
        catchError(() => of([]))
      );

      const viajesAcompanante$ = this.travelService.getViajesComoAcompanante(this.usuarioLogueadoId).pipe(
        map((res: any) => (Array.isArray(res) ? res : res?.viajes || [])),
        catchError(() => of([]))
      );

      peticiones$.push(
        forkJoin([viajesConductor$, viajesAcompanante$]).pipe(
          tap(([comoConductor, comoAcompanante]) => {
            [...comoConductor, ...comoAcompanante].forEach((v: any) => {
              if (v?.id) this.viajesCache.set(v.id, v);
            });
          }),
          shareReplay(1)
        )
      );
    }

    const ejecutar$ = peticiones$.length > 0 ? forkJoin(peticiones$) : of([]);

    ejecutar$.subscribe(() => {
      const todosLosViajesCacheados = Array.from(this.viajesCache.values());

      mensajesSolicitudSinResolver.forEach(({ mensaje: m }) => {
        const mensajeId = m.id as number;
        const pasajeroId = m.emisor_id;
        const viajeId = this.extraerViajeId(m);
        let viaje = viajeId > 0 ? this.viajesCache.get(viajeId) : null;

        // Buscar coincidencia estricta por origen y destino
        if (!viaje && todosLosViajesCacheados.length > 0) {
          const coincidentes = todosLosViajesCacheados.filter(
            (v: any) => m.texto.includes(v.origen) && m.texto.includes(v.destino)
          );

          viaje =
            coincidentes.find((v: any) => v.solicitudes_pendientes?.some((p: any) => p.id === pasajeroId)) ||
            coincidentes.find((v: any) => v.acompanantes?.some((p: any) => p.id === pasajeroId)) ||
            coincidentes[0] ||
            null;

          if (viaje) {
            m.viaje_id = viaje.id;
            this.viajeIdPorMensaje.set(mensajeId, viaje.id);
          }
        }

        if (!viaje) {
          this.solicitudesGestionadas[mensajeId] = 'Rechazada';
          return;
        }

        const estaAceptado =
          viaje.acompanantes?.some((p: any) => p.id === pasajeroId) || viaje.estado_solicitud_propia === 'Aceptada';

        const estaPendiente =
          viaje.solicitudes_pendientes?.some((p: any) => p.id === pasajeroId) ||
          viaje.estado_solicitud_propia === 'Pendiente';

        if (estaAceptado) {
          this.solicitudesGestionadas[mensajeId] = 'Aceptada';
        } else if (estaPendiente) {
          delete this.solicitudesGestionadas[mensajeId];
        } else {
          this.solicitudesGestionadas[mensajeId] = 'Rechazada';
        }
      });

      this.finalizarCargaChat(hacerScroll);
    });
  }

  private finalizarCargaChat(hacerScroll: boolean) {
    this.cargandoChat = false;
    this.cdr.detectChanges();
    if (hacerScroll) {
      this.scrollToBottom();
    }
  }

  enviar(viajeId?: any) {
    if (!this.texto.trim()) return;

    let receptorId = 0;
    if (this.mensajes.length > 0) {
      const primerMsj = this.mensajes[0];
      receptorId = primerMsj.emisor_id !== this.usuarioLogueadoId ? primerMsj.emisor_id : primerMsj.receptor_id;
    }

    const nuevoMensaje: any = {
      emisor_id: this.usuarioLogueadoId,
      receptor_id: receptorId,
      conversacion_id: this.conversacionId,
      texto: this.texto,
    };

    if (viajeId) {
      nuevoMensaje.viaje_id = viajeId;
    }

    this.messagingService.enviarMensaje(nuevoMensaje).subscribe((res) => {
      this.mensajes.push(res);
      this.texto = '';
      this.scrollToBottom();
    });
  }

  goBack() {
    this.navCtrl.navigateBack('/messaging-center', {
      animated: false,
    });
  }

  toggleEmojiPicker() {
    this.mostrarEmojiPicker = !this.mostrarEmojiPicker;
  }

  addEmoji(emoji: string) {
    this.texto += emoji;
  }

  marcarComoLeidos() {
    this.messagingService.marcarComoLeido(this.conversacionId, this.usuarioLogueadoId).subscribe();
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.content) {
        this.content.scrollToBottom(300);
      }
    }, 100);
  }

  decidirCompartirTelefono(acepta: boolean) {
    if (acepta) {
      this.enviarNotificacionTelefono();
    } else {
      this.mostrarPreguntaTelefono = false;
    }
  }

  enviarNotificacionTelefono() {
    const mensajeReferencia = this.mensajes[0];
    if (!mensajeReferencia) return;

    const receptorId = mensajeReferencia.emisor_id !== this.usuarioLogueadoId ? mensajeReferencia.emisor_id : mensajeReferencia.receptor_id;

    if (!receptorId || receptorId === 0) return;

    const payload = {
      conversacion_id: this.conversacionId,
      emisor_id: this.usuarioLogueadoId,
    };

    this.notificacionesService.compartirTelefono(payload).subscribe({
      next: () => {
        this.mostrarPreguntaTelefono = false;
        this.cargarMensajes();
      },
      error: (err) => console.error('Error al compartir', err),
    });
  }

  dejarDeCompartir() {
    const payload = {
      conversacion_id: this.conversacionId,
      emisor_id: this.usuarioLogueadoId,
    };

    this.notificacionesService.dejarDeCompartirTelefono(payload).subscribe({
      next: () => {
        this.mostrarPreguntaTelefono = false;
        this.cargarMensajes();
      },
      error: (err) => {
        console.error('Error al dejar de compartir teléfono', err);
        this.mostrarPreguntaTelefono = true;
        this.notificacionesService.mostrarToast({
          id: Date.now(),
          type: 'info',
          mensaje: 'No se pudo revocar el acceso al teléfono',
          leida: false,
        });
      },
    });
  }

  mostrarFecha(index: number): boolean {
    if (index === 0) return true;

    const fechaActual = new Date(this.mensajes[index].fecha).setHours(0, 0, 0, 0);
    const fechaAnterior = new Date(this.mensajes[index - 1].fecha).setHours(0, 0, 0, 0);

    return fechaActual !== fechaAnterior;
  }

  gestionarSolicitud(mensaje: any, accion: 'aceptar' | 'rechazar') {
    const mensajeId = mensaje.id;
    if (this.cargandoSolicitud[mensajeId]) return;

    this.cargandoSolicitud[mensajeId] = true;
    this.cdr.detectChanges();

    const pasajeroId = mensaje.emisor_id;
    const viajeIdExistente = this.extraerViajeId(mensaje);

    if (viajeIdExistente > 0) {
      this.ejecutarAccionSolicitud(viajeIdExistente, pasajeroId, mensajeId, accion);
      return;
    }

    // Fallback en caliente si el mensaje antiguo aún no tenía resuelto el viaje_id
    this.travelService.getViajesUsuario(this.usuarioLogueadoId).pipe(
      map((res: any) => res?.viajes || []),
      catchError(() => of([]))
    ).subscribe((viajes: any[]) => {
      const coincidentes = viajes.filter(
        (v: any) => mensaje.texto?.includes(v.origen) && mensaje.texto?.includes(v.destino)
      );

      const viajeEncontrado =
        coincidentes.find((v: any) => v.solicitudes_pendientes?.some((p: any) => p.id === pasajeroId)) ||
        coincidentes[0] ||
        null;

      if (!viajeEncontrado?.id) {
        console.error('No se encontró ningún viaje coincidente para esta solicitud:', mensaje);
        this.cargandoSolicitud[mensajeId] = false;
        this.cdr.detectChanges();
        return;
      }

      mensaje.viaje_id = viajeEncontrado.id;
      this.viajeIdPorMensaje.set(mensajeId, viajeEncontrado.id);
      this.ejecutarAccionSolicitud(viajeEncontrado.id, pasajeroId, mensajeId, accion);
    });
  }

  private ejecutarAccionSolicitud(
    viajeId: number,
    pasajeroId: number,
    mensajeId: number,
    accion: 'aceptar' | 'rechazar'
  ) {
    if (accion === 'aceptar') {
      this.travelService.confirmarPasajeroManual(viajeId, pasajeroId).subscribe({
        next: () => {
          this.solicitudesGestionadas[mensajeId] = 'Aceptada';
          this.viajesCache.delete(viajeId);
          this.cargandoSolicitud[mensajeId] = false;
          this.travelService.notificarCambioViajes();
          this.enviarMensajeSistema('He aceptado tu solicitud. ¡Nos vemos en el viaje!', viajeId);
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Error al aceptar pasajero:', err);
          this.cargandoSolicitud[mensajeId] = false;
          this.cdr.detectChanges();
        },
      });
    } else {
      this.travelService.rechazarPasajeroManual(viajeId, pasajeroId).subscribe({
        next: () => {
          this.solicitudesGestionadas[mensajeId] = 'Rechazada';
          this.viajesCache.delete(viajeId);
          this.cargandoSolicitud[mensajeId] = false;
          this.travelService.notificarCambioViajes();
          this.enviarMensajeSistema('Lo siento, no puedo aceptarte en este viaje en este momento.', viajeId);
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Error al rechazar pasajero:', err);
          this.cargandoSolicitud[mensajeId] = false;
          this.cdr.detectChanges();
        },
      });
    }
  }

  handleEnter(event: any) {
    if (event.keyCode === 13 && !event.shiftKey) {
      event.preventDefault();
      this.enviar();
    }
  }

  enviarMensajeSistema(texto: string, viajeId?: any) {
    this.texto = texto;
    this.enviar(viajeId);
  }

  async abrirIncidenciaBusqueda() {
    const modal = await this.modalController.create({
      component: AbrirIncidenciaModalComponent,
      componentProps: {
        categoria: 'APP',
        subcategoriaPredeterminada: 'OTRO',
        tituloContexto: 'Incidencia con el chat',
      },
      cssClass: 'modal-incidencia-custom',
    });

    await modal.present();
    const { role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.messageService.add({
        severity: 'success',
        summary: 'Incidencia enviada',
        detail: 'Gracias por informarnos. Revisaremos el problema con el chat.',
        life: 4000,
      });
    }
  }

  ngOnDestroy() {
    this.stopPolling$.next();
    this.stopPolling$.complete();
    this.destroy$.next();
    this.destroy$.complete();
  }
}
