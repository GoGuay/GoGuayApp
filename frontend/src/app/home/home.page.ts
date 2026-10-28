import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { MatDividerModule } from '@angular/material/divider';
import { FooterComponent } from '../shared/footer/footer.component';
import { JumbotronComponent } from '../pages/jumbotron/jumbotron.component';
import { NuevoViajeGeneralComponent } from '../components/nuevo-viaje-general/nuevo-viaje-general.component';
import { TrayectosPopularesComponent } from '../components/eventos/eventos.component';
import { VentanaDudasComponent } from '../components/ventana-dudas/ventana-dudas.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { FuncionesComunes } from '../core/funciones-comunes/funciones-comunes.service';
import { IonicModule, ModalController, NavController } from '@ionic/angular';
import { BuscadorViajeHomeComponent } from '../components/buscador_viaje_home/buscador_viaje_home.component';
import { CommonModule } from '@angular/common';
import { NotificacionesService } from '../core/notificaciones/notificaciones.service';
import { UserServicesService } from '../core/user-services/user-services.service';
import { Usuario } from '../models/user/usuario.model';
import { ViajesRecomendadosIaComponent } from '../components/viajes-recomendados-ia/viajes-recomendados-ia.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MaricarChatComponent } from '../components/chat-maricar/chat-maricar.component';
import { sparkles, carSportOutline, closeOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { animate, style, transition, trigger } from '@angular/animations';
import { QrVerificacionComponent } from '../components/qr-verificacion/qr-verificacion.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  styleUrls: ['home.page.scss'],
  imports: [
    FooterComponent,
    JumbotronComponent,
    IonicModule,
    NuevoViajeGeneralComponent,
    MatDividerModule,
    TrayectosPopularesComponent,
    VentanaDudasComponent,
    TranslateModule,
    AnimateOnScrollModule,
    NavbarComponent,
    BuscadorViajeHomeComponent,
    CommonModule,
    ViajesRecomendadosIaComponent,
    ToastModule,
    QrVerificacionComponent
  ],
  animations: [
    trigger('popoverAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(12px) scale(0.92)' }),
        animate('250ms cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ]),
      transition(':leave', [
        animate('200ms cubic-bezier(0.4, 0, 1, 1)', style({ opacity: 0, transform: 'translateY(10px) scale(0.92)' }))
      ])
    ])
  ]
})
export class HomePage implements OnInit {
  @ViewChild(QrVerificacionComponent) qrComponent!: QrVerificacionComponent;

  userLoggedIn: boolean = false;
  mostrarJumbotron = true;
  iaActiva: boolean = true;
  usuario: any;
  userData: Usuario = {} as Usuario;
  messaging: string = '../../assets/sistema/messaging.png';

  mostrarBannerEncuesta: boolean = false;
  private tiempoNavegacion: any;
  asistenteActiva: boolean = true;
  mostrarPopoverMaricar: boolean = true;

  constructor(
    private translate: TranslateService,
    private funcionesComunes: FuncionesComunes,
    private notificacionesService: NotificacionesService,
    private userService: UserServicesService,
    private navCtrl: NavController,
    private modalController: ModalController,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) {
    addIcons({ sparkles, carSportOutline, closeOutline });
    this.loadUserData();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const token = params['token'];
      if (token) {
        this.userService.verificar_email(token).subscribe({
          next: (response) => {
            this.messageService.add({
              key: 'home-toast',
              severity: 'success',
              summary: 'Cuenta confirmada',
              detail: 'Tu cuenta se ha creado correctamente.',
            });
            localStorage.removeItem('pendienteConfirmacionRegistro');
            this.router.navigate([], {
              queryParams: {},
              replaceUrl: true,
            });
            const usuarioId = response?.usuario?.id;
            if (usuarioId) {
              this.obtenerUsuarioPorID(usuarioId);
              this.obtenerNotificaciones(usuarioId);
            }
          },
          error: (err) => {
            this.messageService.add({
              key: 'home-toast',
              severity: 'error',
              summary: 'Cuenta no creada',
              detail: 'Tu cuenta no se ha podido crear. Inténtalo de nuevo más tarde',
            });
            console.log('Error al crear la cuenta: ', err);
          },
        });
      }
    });

    if (!this.route.snapshot.queryParams['token']) {
      this.userLoggedIn = this.funcionesComunes.isUserLoggedIn();
      this.loadJumbotronSetting();
      this.loadIASetting();

      if (this.userLoggedIn) {
        this.obtenerUsuarioPorID(this.userData?.usuario?.id);
        this.obtenerNotificaciones(this.userData?.usuario?.id);
      }
    } else {
      this.loadJumbotronSetting();
      this.loadIASetting();
    }

    this.evaluarMostrarEncuesta();
  }

  ionViewWillEnter() {
    if (this.qrComponent) {
      this.qrComponent.comprobarViajeEnCurso();
    }
  }
  
  ionViewDidEnter() {
    this.iniciarTemporizadorEncuesta();
  }

  ionViewWillLeave() {
    if (this.tiempoNavegacion) {
      clearTimeout(this.tiempoNavegacion);
    }
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  loadJumbotronSetting() {
    const jumbotronSetting = localStorage.getItem('mostrarJumbotron');

    if (jumbotronSetting === null) {
      localStorage.setItem('mostrarJumbotron', 'true');
      this.mostrarJumbotron = true;
    } else {
      this.mostrarJumbotron = jumbotronSetting === 'true';
    }
  }

  loadIASetting() {
    const iaSetting = localStorage.getItem('iaActiva');
    const asistenteSetting = localStorage.getItem('asistenteActiva');
    if (iaSetting === null && asistenteSetting === null) {
      localStorage.setItem('iaActiva', 'true');
      localStorage.setItem('asistenteActiva', 'true');
      this.iaActiva = true;
      this.asistenteActiva = true;
    } else {
      this.iaActiva = iaSetting === 'true';
      this.asistenteActiva = asistenteSetting === 'true';
    }
  }

  obtenerNotificaciones(usuarioId: number) {
    if (!usuarioId) return;
    this.notificacionesService.obtenerNotificaciones(usuarioId).subscribe((notificaciones) => {
      if (notificaciones.length) {
        this.notificacionesService.notificacionPendiente = notificaciones[0].mensaje;
        this.notificacionesService.esCreadorDelViaje = true;
        this.notificacionesService.leerNotificacion(notificaciones);
      }
    });
  }

  obtenerUsuarioPorID(id_usuario: number) {
    if (!id_usuario) return;
    this.userService.obtenerUsuarioPorID(id_usuario).subscribe((resultadoUsuario) => {
      this.usuario = resultadoUsuario;
    });
  }

  loadUserData(): void {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
  }

  irAmensajes() {
    this.navCtrl.navigateRoot(['/messaging-center'], { animated: false });
  }

  /**
   * Inicia un temporizador para mostrar la encuesta de satisfacción después de un tiempo determinado.
   * @returns  
   */
  iniciarTemporizadorEncuesta() {
    const encuestaOculta = localStorage.getItem('encuesta_goguay_cerrada');
    if (encuestaOculta) return;

    const TIEMPO_ESPERA = 15 * 60 * 1000;

    this.tiempoNavegacion = setTimeout(() => {
      this.mostrarBannerEncuesta = true;
    }, TIEMPO_ESPERA);
  }

  /**
   * Cierra el banner de encuesta de satisfacción y establece en el almacenamiento local que la encuesta ha sido cerrada.
   * @returns void. No retorna ningún valor.
   */
  cerrarBannerEncuesta() {
    this.mostrarBannerEncuesta = false;
    localStorage.setItem('encuesta_goguay_cerrada', 'true');
    localStorage.removeItem('accion_valor_completada');
  }

  /**
   * Navega a la página de encuesta de satisfacción y oculta el banner de encuesta.
   * También establece en el almacenamiento local que la encuesta ha sido cerrada.
   * @returns void. No retorna ningún valor.
   */
  irAEncuesta() {
    this.mostrarBannerEncuesta = false;
    localStorage.setItem('encuesta_goguay_cerrada', 'true');
    localStorage.removeItem('accion_valor_completada');
    this.navCtrl.navigateForward('/encuesta-satisfaccion');
  }

  /**
   * Abre un modal con el chat de MariCar.
   * Este método crea un modal utilizando el componente MaricarChatComponent y lo presenta al usuario.
   * @returns devuelve void. No retorna ningún valor.
   */
  async abrirChatMariCar() {
    const modal = await this.modalController.create({
      component: MaricarChatComponent,
      cssClass: 'maricar-custom-modal'
    });
    await modal.present();
  }

  /**
   * Cierra el popover de MariCar y establece en el almacenamiento local que ha sido visto.
   * @param event Evento que desencadena la acción de cerrar el popover.
   */
  cerrarPopoverMaricar(event: Event) {
    event.stopPropagation();
    this.mostrarPopoverMaricar = false;
    localStorage.setItem('maricar_popover_visto', 'true');
  }

  /**
   * Función para evaluar si se debe mostrar la encuesta de satisfacción al usuario.
   * Se verifica si la encuesta ya fue cerrada o si el usuario completó una acción de valor.
   * Si el usuario completó una acción de valor, se muestra la encuesta después de 3 segundos.
   * Si no, se inicia un temporizador para mostrar la encuesta después de 15 minutos.
   * @returns 
   */
  evaluarMostrarEncuesta() {
    const encuestaCerrada = localStorage.getItem('encuesta_goguay_cerrada');
    const realizoAccion = localStorage.getItem('creacion_viaje_completado');

    if (encuestaCerrada) return;

    if (realizoAccion === 'true') {
      setTimeout(() => {
        this.mostrarBannerEncuesta = true;
      }, 3000);
    } else {
      this.iniciarTemporizadorEncuesta();
    }
  }
}
