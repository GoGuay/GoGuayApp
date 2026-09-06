import { Component, OnInit } from '@angular/core';
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
import { IonicModule, NavController } from '@ionic/angular';
import { BuscadorViajeHomeComponent } from '../components/buscador_viaje_home/buscador_viaje_home.component';
import { CommonModule } from '@angular/common';
import { NotificacionesService } from '../core/notificaciones/notificaciones.service';
import { UserServicesService } from '../core/user-services/user-services.service';
import { Usuario } from '../models/user/usuario.model';

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
  ],
})
export class HomePage implements OnInit {
  userLoggedIn: boolean = false;
  mostrarJumbotron = true;
  iaActiva: boolean = true;
  usuario: any;
  userData: Usuario = {} as Usuario;
  messaging: string = '../../assets/sistema/messaging.png';

  mostrarBannerEncuesta: boolean = false;
  private tiempoNavegacion: any;

  constructor(
    private translate: TranslateService,
    private funcionesComunes: FuncionesComunes,
    private notificacionesService: NotificacionesService,
    private userService: UserServicesService,
    private navCtrl: NavController,
  ) {
    this.loadUserData();
  }

  ngOnInit(): void {
    this.userLoggedIn = this.funcionesComunes.isUserLoggedIn();
    this.loadJumbotronSetting();
    this.loadIASetting();

    if (this.userLoggedIn) {
      this.obtenerUsuarioPorID(this.userData?.usuario?.id);
      this.obtenerNotificaciones(this.userData?.usuario?.id);
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
    if (iaSetting === null) {
      localStorage.setItem('iaActiva', 'true');
      this.iaActiva = true;
    } else {
      this.iaActiva = iaSetting === 'true';
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

  iniciarTemporizadorEncuesta() {
    const encuestaOculta = localStorage.getItem('encuesta_goguay_cerrada');
    if (encuestaOculta) return;

    this.tiempoNavegacion = setTimeout(() => {
      this.mostrarBannerEncuesta = true;
    }, 180000); 
  }

  cerrarBannerEncuesta() {
    this.mostrarBannerEncuesta = false;
    localStorage.setItem('encuesta_goguay_cerrada', 'true');
  }

  irAEncuesta() {
    this.mostrarBannerEncuesta = false;
    localStorage.setItem('encuesta_goguay_cerrada', 'true');
    this.navCtrl.navigateForward('/encuesta-satisfaccion');
  }
}
