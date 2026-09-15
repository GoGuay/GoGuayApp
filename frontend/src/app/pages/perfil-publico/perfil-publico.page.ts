import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { SpinnerComponent } from "../../components/spinner/spinner.component";
import { Subject, takeUntil } from 'rxjs';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { Usuario } from '../../models/user/usuario.model';
import { Viaje } from '../../models/travel/viaje.model';
import { FuncionesComunes } from '../../core/funciones-comunes/funciones-comunes.service';
import { UserServicesService } from '../../core/user-services/user-services.service';

@Component({
  selector: 'app-perfil-publico',
  templateUrl: './perfil-publico.page.html',
  styleUrls: ['./perfil-publico.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NavbarComponent, MatTooltipModule, SpinnerComponent],
  providers: [
    {
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
      useValue: { showDelay: 500, hideDelay: 200, touchGestures: 'auto', position: 'below' }
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class PerfilPublicoPage implements OnInit, OnDestroy {

  userLoggedIn: boolean = false;
  usuarioParams: any = {};
  usuario: any;
  editar_perfil: boolean = false;
  userData: Usuario = {} as Usuario;
  preferenciasViaje: string[] = [];
  
  misViajes: Viaje[] = [];
  misViajesAcompanante: Viaje[] = [];
  misViajesCreados: Viaje[] = [];
  
  // Imágenes
  imagenCabeceraSrc: string = '../../../assets/imgs/bridge1.jpg';
  imagenPerfilSrc: string = '../../../assets/user/logOn.gif';
  
  cargando = false;
  filtroViajes: string = 'todos';
  notificacionInterval: any;
  private destroy$ = new Subject<void>();

  urlParaVolver: string = '';

  constructor(
    private route: ActivatedRoute,
    public funcionesComunes: FuncionesComunes,
    private userService: UserServicesService,
    private dialog: MatDialog,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.userLoggedIn = this.funcionesComunes.isUserLoggedIn();
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');

    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      this.usuarioParams = params;
      const userId = parseInt(this.usuarioParams.id, 10);
      
      this.cargarDatosPerfil(userId);
      this.urlParaVolver = this.comprobarUrls(localStorage.getItem('url_anterior') || '');
    });
  }

  ngOnDestroy() {
    if (this.notificacionInterval) clearInterval(this.notificacionInterval);
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Función para cargar los datos necesarios del usuario
   * 
   * @param userId --> Recibe el ID del usuario que va a mostrar sus datos
   */
private cargarDatosPerfil(userId: number) {
    this.cargando = true; 

    this.userService.obtenerUsuarioPorID(userId).subscribe({
      next: (resultadoUsuario) => {
        this.usuario = resultadoUsuario;
        
        const prefs = this.usuario.preferencias;
        let listaPreferencias: string[] = [];

        if (prefs && typeof prefs === 'object' && !Array.isArray(prefs)) {
          const convivencia = prefs.convivencia_viaje || [];
          const ocio = prefs.intereses_ocio || [];
          listaPreferencias = [...convivencia, ...ocio];
        } else if (Array.isArray(prefs)) {
          listaPreferencias = prefs;
        }

        this.preferenciasViaje = listaPreferencias;
        
        this.validacionPerilLogeado(userId);

        setTimeout(() => {
          this.cargando = false;
        }, 300);
      },
      error: (error) => {
        console.error('Error al cargar perfil:', error);
        this.cargando = false; 
      }
    });
  }

  /**
   * Función para obtener los datos de un usuario.
   * 
   * @param id_usuario --> Recibe el id del usuario que se quiere buscar.
   */
  obtenerUsuarioPorID(id_usuario: number) {
    this.cargando = true;
    this.userService.obtenerUsuarioPorID(id_usuario).subscribe((resultadoUsuario) => {
      this.usuario = resultadoUsuario;
      this.preferenciasViaje = this.funcionesComunes.validacionPreferencias(this.usuario.preferencias);
    });
  }

  /**
   * Función para poder cambiar la imagen de cabecera o de perfil.
   * 
   * @param event --> Recibe la información del evento del input seleccionado.
   * @param tipo --> Recibe un String con el tipo de información para saber a donde pertenece la imagen que se quiere cambiar.
   */
  onImageChange(event: Event, tipo: 'cabecera' | 'perfil') {
    const input = event.target as HTMLInputElement;
    if (!input.files || !input.files[0]) return;

    this.cargando = true;
    const formData = new FormData();
    const usuarioId = this.userData.usuario.id;

    if (tipo === 'cabecera') {
      formData.append('imagenCabecera', input.files[0]);
      this.userService.actualizarImagenCabecera(usuarioId, formData).subscribe({
        next: (res) => this.finalizarCargaImagen(res.url, 'cabecera'),
        error: () => this.cargando = false
      });
    } else {
      formData.append('imagenPerfil', input.files[0]);
      this.userService.actualizarImagenPerfil(usuarioId, formData).subscribe({
        next: (res) => this.finalizarCargaImagen(res.nuevaUrl, 'perfil'),
        error: () => this.cargando = false
      });
    }
  }

  /**
   * Función para obtener la información de la imagen
   */
  private finalizarCargaImagen(url: string, tipo: 'cabecera' | 'perfil') {
    this.cargando = false;
    if (tipo === 'cabecera') this.imagenCabeceraSrc = url;
    else this.imagenPerfilSrc = url;
    this.obtenerUsuarioPorID(this.userData.usuario.id);
  }

  /**
   * Función para validar el perfil que está visualizando el perfil.
   * Esto se utiliza para saber si es el propio usuario logado el que está visualizando
   * la ventana.
   * Si es así, le aparecen las opciones de edición de la información.
   * 
   * @param id_usuario_perfil --> Recibe el ID del usuario.
   */
  validacionPerilLogeado(id_usuario_perfil: number) {
    this.editar_perfil = (id_usuario_perfil === this.userData.usuario.id);
  }

  /**
   * Función para comprobar la url desde la que se accede a esta ventana.
   * Esto se utiliza para poder regresar al mismo punto desde el que se accedió a esta ventana.
   *  
   * @param urlAnterior --> Recibe la url desde la que se ha accedido a esta ventana.
   */
  comprobarUrls(urlAnterior: string): string {
    const rutasValidas = ['/busqueda-viajes', '/panel-usuario', '/mi-perfil'];
    return rutasValidas.includes(urlAnterior) ? urlAnterior : '/panel-usuario';
  }


  /**
   * Función para redirigir a la ventana "mi-perfil"
   * para editar los datos del usuario que se van a mostrar aquí.
   * 
   */
  irAEditarPerfil() {
    this.navCtrl.navigateForward('/mi-perfil');
  }

}