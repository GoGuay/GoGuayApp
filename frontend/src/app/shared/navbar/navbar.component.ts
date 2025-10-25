import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { IonicModule, NavController, Platform } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Usuario } from 'src/app/models/user/usuario.model';
import { CommonModule } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { Router, RouterLink } from '@angular/router';
import { LanguageService } from 'src/app/core/lenguajes/languaje.service';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { lastValueFrom, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    IonicModule,
    MatIconModule,
    TranslateModule,
    CommonModule,
    MatDivider,
    RouterLink,
  ],
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

  constructor(
    private navCtrl: NavController,
    private platform: Platform,
    private languageService: LanguageService,
    private userService: UserServicesService,
    private element: ElementRef
  ) {
    this.loadUserData();
  }

  async ngOnInit() {
    // Suscribirse a cambios en el usuario
    this.usuarioSub = this.userService.usuario$.subscribe(
      (usuarioActualizado) => {
        if (usuarioActualizado) {
          this.usuario = usuarioActualizado; // objeto interno directamente
          this.isLoggedIn = true;
        } else {
          this.usuario = null;
          this.isLoggedIn = false;
        }
      }
    );

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
    await this.obtenerDatosUsuario(this.userData?.usuario?.id);
    this.isLoggedIn = this.userData?.usuario?.email ? true : false;
  }

  // Desuscribirse al destruir el componente (para evitar fugas de memoria):
  ngOnDestroy() {
    this.usuarioSub?.unsubscribe();
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
  changeLanguage(lang: string) {
    this.languageService.setLanguage(lang);
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

  logout() {
    localStorage.clear();

    this.userData = {} as Usuario;
    this.usuario = null;
    this.isLoggedIn = false;

    // Navegar al home sin recargar la página
    this.navCtrl.navigateRoot(['/home']);
  }

  openPerfilPublico() {
    const usuario = { id: this.userData.usuario.id };

    this.navCtrl.navigateRoot(['/perfil-publico'], {
      queryParams: usuario,
    });
  }

  irAMisViajes() {
    const usuario = { id: this.userData.usuario.id };

    this.navCtrl.navigateRoot(['/mis-viajes'], {
      queryParams: usuario,
    });
  }

  loadUserData(): void {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
  }
}
