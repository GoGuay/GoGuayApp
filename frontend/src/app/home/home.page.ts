import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { MatDividerModule } from '@angular/material/divider';
import { FooterComponent } from '../shared/footer/footer.component';
import { JumbotronComponent } from "../pages/jumbotron/jumbotron.component";
import { NuevoViajeGeneralComponent } from "../components/nuevo-viaje-general/nuevo-viaje-general.component";
import { TrayectosPopularesComponent } from '../components/trayectos-populares/trayectos-populares.component';
import { VentanaDudasComponent } from '../components/ventana-dudas/ventana-dudas.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { FuncionesComunes } from '../core/funciones-comunes/funciones-comunes.service';
import { IonicModule } from '@ionic/angular';
import { BuscaUnViajePrincipalComponent } from "../components/busca-un-viaje-principal/busca-un-viaje-principal.component";
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
    BuscaUnViajePrincipalComponent,
    CommonModule
  ]
})
export class HomePage implements OnInit {

  userLoggedIn: boolean = false;
  mostrarJumbotron = true;
  usuario: any;
  userData: Usuario = {} as Usuario;

  constructor(private translate: TranslateService,
    private funcionesComunes: FuncionesComunes,
    private notificacionesService: NotificacionesService,
    private userService: UserServicesService) { }

  ngOnInit(): void {
    this.userLoggedIn = this.funcionesComunes.isUserLoggedIn();
    this.loadJumbotronSetting();
    this.loadUserData();
    this.obtenerUsuarioPorID(this.userData.usuario.id);
    this.obtenerNotificaciones(this.userData.usuario.id);
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  loadJumbotronSetting() {
    const jumbotronSetting = localStorage.getItem('mostrarJumbotron');
    this.mostrarJumbotron = jumbotronSetting === null ? true : jumbotronSetting === 'true';
  }

  obtenerNotificaciones(usuarioId: number) {
    this.notificacionesService.obtenerNotificaciones(usuarioId).subscribe((notificaciones) => {
      if (notificaciones.length) {
        this.notificacionesService.notificacionPendiente = notificaciones[0].mensaje;
        this.notificacionesService.esCreadorDelViaje = true; 
        this.notificacionesService.leerNotificacion(notificaciones);
      }
    });
  }

  obtenerUsuarioPorID(id_usuario: number) {
    this.userService.obtenerUsuarioPorID(id_usuario).subscribe((resultadoUsuario) => {
      this.usuario = resultadoUsuario;
    });
  }

  loadUserData(): void {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
  }
}
