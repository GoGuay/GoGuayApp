import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { IonMenuButton, IonHeader } from '@ionic/angular/standalone';

import { MatIconModule } from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Usuario } from '../../models/user/usuario.model';
import { CommonModule } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { LanguageService } from '../../core/lenguajes/languaje.service';
import { UserServicesService } from '../../core/user-services/user-services.service';
import { lastValueFrom, Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NotificacionesService } from '../../core/notificaciones/notificaciones.service';
import { MessageService } from 'primeng/api';
import { ChangeDetectorRef } from '@angular/core';
import { MessagingService } from '../../core/menssaging-service/messaging.service';
import { HelpModalComponent } from '../../components/help-modal/help-modal.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, TranslateModule, CommonModule, MatDivider, FormsModule, IonMenuButton, IonHeader],
  providers: [MessageService],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  /**
   * Variables que van a recibir información de otros componentes
   * mediante la anotación "Input()"
   */
  private usuarioSub!: Subscription;
  @Input() backRoute: string | null = null;
  @Input() searchRoute: string | null = '/home';
  @Input() isLoggedIn: boolean = false;
  @Input() isPublishRoute: boolean = false;
  @Input() origin: string = '';

  logo: string = '../../../assets/logo/PRIDECAR.png';
  userData: Usuario = {} as Usuario;
  usuario: Usuario['usuario'] | null = null;

  /**
   * Variables para el título y el icono dinámicos.
   * Por defecto muestran "Buscar viaje" si no se le pasa ninguna información
   */
  dynamicTitle: string = 'Buscar viaje';
  dynamicIcon: string = 'search';

  validacionHomePage: boolean = true;
  menuOpen = false;
  isDropdownOpen = false;
  isLenguageDropdownOpen = false;

  isMobileWeb: boolean = false;
  isDesktop: boolean = false;

  menuType: string = 'push';

  numNotificaciones: number = 0;
  numNotificacionesMensajes: number = 0;
  notificaciones: any[] = [];
  notificaciones_mensajes: any[] = [];
  selectedLanguage: string = this.languageService.getLanguage() || 'es';

  private pollingSub!: any;

  constructor(
    private navCtrl: NavController,
    private platform: Platform,
    private languageService: LanguageService,
    private userService: UserServicesService,
    private notificationService: NotificacionesService,
    private messagingService: MessagingService,
    private element: ElementRef,
    private translate: TranslateService,
    private messageService: MessageService,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog
  ) {

  }

  async ngOnInit() {
    this.loadUserData();
    this.setupPlatformConfig();

    this.usuarioSub = this.userService.usuario$.subscribe(
      (usuarioActualizado) => {
        if (usuarioActualizado) {
          this.usuario = usuarioActualizado;
          this.isLoggedIn = true;
          
          const id = usuarioActualizado.id;
          this.obtenerNotificaciones(id);
          this.obtenerNotificacionesMensajes(id);
          this.iniciarPolling();
        } else {
          this.resetUserStatus();
        }
        this.cdr.detectChanges();
      }
    );
  }

  /**
   * Función para iniciar el polling (obtención) de notificaciones cada 10 segundos.
   */
  iniciarPolling() {
    if (this.pollingSub) clearInterval(this.pollingSub);
    this.pollingSub = setInterval(() => {
      if (this.isLoggedIn && this.userData?.usuario?.id) {
        this.obtenerNotificaciones(this.userData.usuario.id);
        this.obtenerNotificacionesMensajes(this.userData.usuario.id);
      }
    }, 10000);
  }


  /**
   * Función para cargar los datos del usuario desde el servicio de usuario.
   * Si el usuario tiene notificaciones no leídas, se actualiza el mensaje de la notificación pendiente.
   */
  private resetUserStatus() {
    this.usuario = null;
    this.userData = {} as Usuario;
    this.isLoggedIn = false;
    this.numNotificaciones = 0;
    if (this.pollingSub) clearInterval(this.pollingSub);
  }


  /**
   * Función para obtener todas las notificaciones del usuario que ha iniciadio sesión.
   * 1º Actualiza el número de notificaciones no leídas.
   * 2º Si hay notificaciones no leídas, actualiza el mensaje de la notificación pendiente.
   */
  setupPlatformConfig(){
    this.isMobileWeb = this.platform.is('mobileweb');
    this.isDesktop = this.platform.is('desktop');

    if (this.searchRoute === 'search') {
      this.searchRoute = '/busqueda-viajes';
      this.dynamicTitle = 'Buscar viaje';
      this.dynamicIcon = 'search';
    } else if (this.searchRoute === 'newTravel') {
      this.searchRoute = '/nuevo-viaje';
      this.dynamicTitle = 'Publicar viaje';
      this.dynamicIcon = 'add';
    }

    this.validacionHomePage = this.searchRoute === '/home';

    /**
    * Comprobación para saber si la aplicación está ejecutándose en navegador(PC) o móvil.
    */
    this.isMobileWeb = this.platform.is('mobileweb');
    this.isDesktop = this.platform.is('desktop');

    if (this.searchRoute === 'search') {
      this.searchRoute = '/busqueda-viajes';
      this.dynamicTitle = 'Buscar viaje';
      this.dynamicIcon = 'search';
    } else if (this.searchRoute === 'newTravel') {
      this.searchRoute = '/nuevo-viaje';
      this.dynamicTitle = 'Publicar viaje';
      this.dynamicIcon = 'add';
    }

    if (this.searchRoute === '/home') {
      this.validacionHomePage = true;
    } else {
      this.validacionHomePage = false;
    }
  }

  /**
   * Función para obtener todas las notificaciones del usuario que ha iniciadio sesión.ç
   * 1º Actualiza el número de notificaciones no leídas.
   * 2º Si hay notificaciones no leídas, actualiza el mensaje de la notificación pendiente.
   * @param usuarioId Recibe el ID del usuario que está logueado.
   */
  obtenerNotificaciones(usuarioId: number) {
    if (!usuarioId) return; // Validación de seguridad

    this.notificationService.obtenerNotificaciones(usuarioId).subscribe({
      next: (notificaciones) => {
        if (notificaciones && notificaciones.length) {
          this.notificaciones = notificaciones;
          this.numNotificaciones = notificaciones.filter((n: any) => !n.leida).length;

          if (this.numNotificaciones > 0) {
            this.notificationService.notificacionPendiente = notificaciones.find((n: any) => !n.leida)?.mensaje;
            this.notificationService.esCreadorDelViaje = true;
          }
        } else {
          this.numNotificaciones = 0;
        }
      },
      error: (err) => {
        console.warn('No se pudieron obtener notificaciones:', err);
        this.numNotificaciones = 0;
      }
    });
  }


  // Desuscribirse al destruir el componente (para evitar fugas de memoria):
  ngOnDestroy() {
    this.usuarioSub?.unsubscribe();

    if (this.pollingSub) {
      clearInterval(this.pollingSub);
    }
  }

  /**
   * Función para obtener la ruta desde donde
   * estaba el usuario posicionado anteriormente.
   *
   * @returns Devuelve la ruta a la que va de regreso.
   */
  getBackRoute(): string {
    switch (this.origin) {
      case 'home':
        return '/home';
      case '/busqueda-viajes':
        return '/busqueda-viajes';
      case '/panel-usuario':
        return '/panel-usuario';
      case '/nuevo-viaje':
        return '/nuevo-viaje';
      case '/mi-perfil':
        return '/mi-perfil';
      default:
        return '/home';
    }
  }

  /**
   * Función para hacer la navegación en la dirección indicada
   */
  goBack() {
    const backRoute = this.getBackRoute();
    this.navCtrl.navigateRoot([backRoute]);
  }

  /**
   * Función para volver atrás en la aplicación.
   */
  navigateBack() {
    if (this.backRoute) {
      this.navCtrl.navigateRoot([this.backRoute]);
    }
  }

  /**
   * Función para obtener los datos del usuario que está logado.
   * @param id_usuario
   */
  async obtenerDatosUsuario(id_usuario: number) {
    if (id_usuario) {
      this.usuario = await lastValueFrom(
        this.userService.obtenerUsuarioPorID(id_usuario)
      );
    }
  }

  /**
   * Función para realizar el cambio de idiomas de la aplicación.
   * Al seleccionar un idioma, guarda la selección en la caché del navegador
   * para poder así mantener el idioma seleccionado durante la navegación.
   *
   * @param lang Recibe el idioma seleccionado en el selector de idiomas.
   */
  changeLanguage(selectedLanguage: string) {
    // Recibe el idioma directamente
    // Comprobar si ya es el idioma seleccionado para evitar recargas innecesarias
    if (this.selectedLanguage === selectedLanguage) {
      return;
    }

    // Ya no necesitas (event.target as HTMLSelectElement).value;
    console.log(selectedLanguage);

    this.languageService.setLanguage(selectedLanguage);
    this.selectedLanguage = selectedLanguage;
    this.translate.use(selectedLanguage);

    //Lanza la notificación
    this.translate.get(['AJUSTESAPP.OPCION_IDIOMA.ALERT_TITULO', 'AJUSTESAPP.OPCION_IDIOMA.ALERT_MENSAJE']).subscribe((translations) => {
      this.messageService.add({
        severity: 'success',
        summary: translations['AJUSTESAPP.OPCION_IDIOMA.ALERT_TITULO'],
        detail: translations['AJUSTESAPP.OPCION_IDIOMA.ALERT_MENSAJE'],
        life: 3000,
      });
    });
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.element.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
      this.isLenguageDropdownOpen = false;
    }
  }

  /**
   * Función para controlar el botón de menú abierto o menú cerrado (Versión móvil)
   */
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  /**
   * Función para cambiar la dirección de la flecha del menú.
   */
  cambioDireccionFlecha() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  cambioDireccionFlechaIdioma() {
    this.isLenguageDropdownOpen = !this.isLenguageDropdownOpen;
  }

  /**
   * Función para cerrar la sesión del usuario.
   * 1º Guarda los datos en caso de que haya seleccionado "Recordarme"
   * 2º Limpia el localStorage
   * 3º Vacia la variable userData
   * 4º Redirige al usuario a la página de inicio.
   */
  logout() {
    const rememberMe = localStorage.getItem('remember_me') === 'true';
    const email = localStorage.getItem('email') || '';
    const password = localStorage.getItem('password') || '';

    if (this.pollingSub) clearInterval(this.pollingSub);
    localStorage.clear();

    if (rememberMe) {
      localStorage.setItem('remember_me', 'true');
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
    }

    this.userService.setUsuarioData(null);

    this.userData = {} as Usuario;
    this.usuario = null;
    this.isLoggedIn = false;
    this.numNotificaciones = 0;

    this.cdr.detectChanges();

    this.navCtrl.navigateRoot(['/home'], { animated: true });
  }

  modalCerrarSesion() {
    const titulo: string = '¡ATENCIÓN: Vas a cerrar sesión!';
    const mensaje: string = `¿Estás seguro que deseas cerrar sesión?`;
    const dialogRef = this.dialog.open(HelpModalComponent, {
      data: { title: titulo, message: mensaje, showAcceptButton: true, autoFocus: false },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((confirmar) => {
      if (confirmar) {
        this.logout();
      }
    });
  }

  irAMisViajes() {
    const usuario = { id: this.userData.usuario.id };

    this.navCtrl.navigateRoot(['/mis-viajes'], {
      queryParams: usuario,
      animated: false
    });
  }

  loadUserData(): void {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
  }

  obtenerNotificacionesMensajes(usuarioId: number) {
    if (!usuarioId) return;

    this.messagingService.getConversaciones(usuarioId).subscribe({
      next: (conversaciones) => {

        this.numNotificacionesMensajes = conversaciones.reduce(
          (total, conv) => total + (conv.no_leidos || 0), 0
        );
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.warn('Error al obtener notificaciones de mensajes:', err);
        this.numNotificacionesMensajes = 0;
      }
    });
  }
}
