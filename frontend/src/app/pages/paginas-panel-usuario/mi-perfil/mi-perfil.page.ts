import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IonicModule, NavController, Platform } from '@ionic/angular';
import { MatDivider } from '@angular/material/divider';
import { Usuario } from 'src/app/models/user/usuario.model';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { FuncionesComunes } from '../../../core/funciones-comunes/funciones-comunes.service';
import { TablaVehiculosComponent } from 'src/app/components/tabla-vehiculos/vista-tabla-vehiculos/tabla-vehiculos.component';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { FuncionesUsuario } from '../../../core/funciones-usuario/funciones-usuario.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SpinnerComponent } from '../../../components/spinner/spinner.component';
import { MatDialog } from '@angular/material/dialog';
import { HelpModalComponent } from '../../../components/help-modal/help-modal.component';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    MatDivider,
    NavbarComponent,
    TablaVehiculosComponent,
    ToastModule,
    MatTooltipModule,
    SpinnerComponent,
  ],

  providers: [MessageService],
})
export class MiPerfilPage implements OnInit {
  @ViewChild('popover') popover!: HTMLIonPopoverElement;
  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;
  fechaNacimiento: string = '';
  editandoVehiculo: boolean = false;
  datosActualizados: any = {};

  isMobileWeb: boolean = false;
  isDesktop: boolean = true;
  botonHabilitado: boolean = false;

  nombreEditado: string = '';
  apellidosEditados: string = '';
  pronombreEditado: string = '';
  generoEditado: string = '';
  orientacionEditada: string = '';
  fechaNacimientoEditada: string = '';
  bioEditada: string = '';
  preferenciasSeleccionadas: string[] = [];
  comunComerciales: boolean = false;
  emailEditado: string = '';
  telefonoEditado: string = '';
  isOpen = false;
  edad: number = this.funcionesUsuario.calcularEdad(this.fechaNacimientoEditada);
  lang: string = ''; // Variable para almacenar el lenguaje seleccionado.

  imagenPerfilSrc: string = '../../../assets/user/logOn.gif'; // Variable para almacenar la imagen de perfil por defecto.
  imagenPerfilUsuario: string | null = null; // Variable para almacenar la imagen seleccionada por el usuario.
  cargando = false; // Variable que se utiliza para mostrar el spinner de carga
  perfilSinFoto: boolean = false;
  variableEjemplo: boolean = false;

  constructor(
    public funcionesComunes: FuncionesComunes,
    private userService: UserServicesService,
    public funcionesUsuario: FuncionesUsuario,
    private platform: Platform,
    private cdr: ChangeDetectorRef,
    private messageService: MessageService,
    public translate: TranslateService,
    private navCtrl: NavController,
    private dialog: MatDialog,
  ) {
    this.loadUserData();
    this.fechaNacimientoEditada = this.userData.usuario.fecha_nacimiento || '';
    this.lang = this.translate.currentLang;
    this.emailEditado = this.userData.usuario.email || '';
    this.telefonoEditado = this.userData.usuario.telefono || '';
    this.comunComerciales = this.userData.usuario.comunic_comerciales || false;
  }

  ngOnInit() {
    /**
     * usuario$ -->es un BehaviorSubject declarado en UserServicesService (usuario$ emite el último valor almacenado)
     * .subscribe((usuario) => { ... }) --> se suscribe a los cambios del observable, es decir, cada vez que usuario$ emite un valor se ejecuta la función que hay dentro del subscribe
     * if (usuario) --> verifica que el usuario no sea null o undefined
     * this.userData.usuario = usuario --> actualiza la variable local userData.usuario con los datos más recientes del observable (tendrá siempre info actualizada)
     * this.nombreEditado = usuario.nombre ... --> copia los datos del usuario a variables locales para usar en los formulario de edición.
     * this.actualizarFotoPerfil(usuario); --> llama a la función que asigna la imagen correcta a la variable imagenPerfilUsuario
     * this.userLoggedIn = !!usuario.email; --> Determina si hay un usuario logueado (true o false)
     * this.cdr.detectChanges() --> Fuerza a Angular a actualizar la vista inmediatamente.
     */
    this.userService.usuario$.subscribe((usuario) => {
      if (usuario) {
        this.userData.usuario = usuario;

        this.nombreEditado = usuario.nombre;
        this.apellidosEditados = usuario.apellidos || '';
        this.pronombreEditado = usuario.pronombre || '';
        this.generoEditado = usuario.genero || '';
        this.orientacionEditada = usuario.orientacion || '';
        this.fechaNacimientoEditada = usuario.fecha_nacimiento || '';
        this.bioEditada = usuario.biografia || '';
        this.preferenciasSeleccionadas = usuario.preferencias || [];
        this.actualizarFotoPerfil(usuario);

        this.userLoggedIn = !!usuario.email;

        this.cdr.detectChanges();
      }
    });

    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());

    //Asegurar que cada vehículo tiene una propiedad que sea "editandoVehiculo"
    this.funcionesComunes.vehiculos_usuario.forEach((vehiculo) => {
      vehiculo.editandoVehiculo = false;
    });

    this.actualizarEdad();
    this.obtenerUsuarioPorID(this.userData.usuario.id);
    this.funcionesComunes.getBaseUrl();
  }

  obtenerUsuarioPorID(id_usuario: number) {
    this.userService.obtenerUsuarioPorID(id_usuario).subscribe((resultadoUsuario) => {
      this.userData.usuario = resultadoUsuario;
    });
  }

  loadUserData(): void {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
  }

  checkScreenSize() {
    this.isDesktop = window.innerWidth > 576;
    console.log('Tamaño detectado:', window.innerWidth, 'isDesktop:', this.isDesktop);
    this.cdr.detectChanges();
  }

  // Función para verificar si ha habido cambios
  checkForChanges() {
    if (!this.userData || !this.userData.usuario) {
      this.botonHabilitado = false;
      return;
    }

    // Comparar los valores editados con los valores originales
    const nombreChanged = this.nombreEditado !== this.userData.usuario.nombre;
    const apellidosChanged = this.apellidosEditados !== this.userData.usuario?.apellidos;
    const pronombreChanged = this.pronombreEditado !== this.userData.usuario?.pronombre;
    const generoChanged = this.generoEditado !== this.userData.usuario.genero;
    const orientacionChanged = this.orientacionEditada !== this.userData.usuario.orientacion;
    const fechaNacimientoChanged = this.fechaNacimientoEditada !== this.userData.usuario.fecha_nacimiento;
    const bioChanged = this.bioEditada !== this.userData.usuario.biografia;
    const preferenciasChanged = JSON.stringify(this.preferenciasSeleccionadas) !== JSON.stringify(this.userData.usuario.preferencias);

    //Se habilita el botón sólo si hay cambios
    this.botonHabilitado =
      nombreChanged ||
      apellidosChanged ||
      pronombreChanged ||
      generoChanged ||
      orientacionChanged ||
      fechaNacimientoChanged ||
      bioChanged ||
      preferenciasChanged;
  }

  // Llamar a esta función cuando haya un cambio en los inputs o checkboxes
  onInputChange() {
    this.checkForChanges();
  }

  //Para detectar cambios en los checkbox de preferencias
  onCheckboxChange(clave: string, event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input) return;

    const prefs = [...this.preferenciasSeleccionadas];

    if (input.checked) {
      if (!prefs.includes(clave)) {
        prefs.push(clave);
      }
    } else {
      const index = prefs.indexOf(clave);
      if (index !== -1) {
        prefs.splice(index, 1);
      }
    }

    this.preferenciasSeleccionadas = prefs;
    this.checkForChanges();
    this.cdr.detectChanges();
  }

  /**
   * Función para actualizar la edad según la fecha de nacimiento
   */
  actualizarEdad() {
    this.edad = this.funcionesUsuario.calcularEdad(this.fechaNacimientoEditada);
  }

  /**
   *  Editar los datos del usuario, excepto correo y teléfono
   * @returns
   */
  editarDatos() {
    console.log('userData:', this.userData);

    if (
      !this.userData.usuario.nombre ||
      !this.userData.usuario.apellidos ||
      !this.userData.usuario.genero ||
      !this.userData.usuario.orientacion ||
      !this.userData.usuario.fecha_nacimiento
    ) {
      console.log('Falta algún dato obligatorio');
      return;
    }

    const nuevoUsuario = {
      nombre: this.nombreEditado,
      apellidos: this.apellidosEditados,
      pronombre: this.pronombreEditado,
      genero: this.generoEditado,
      orientacion: this.orientacionEditada,
      fecha_nacimiento: this.fechaNacimientoEditada,
      biografia: this.bioEditada,
      preferencias: this.preferenciasSeleccionadas,
      email: this.emailEditado,
      telefono: this.telefonoEditado,
    };
    console.log('Objeto modificado: ', nuevoUsuario);

    this.userService.editarDatosUsuario(this.userData.usuario.id, nuevoUsuario).subscribe(
      (response) => {
        console.log('Datos actualizado con exito', response);
        this.userData.usuario = { ...this.userData.usuario, ...nuevoUsuario };
        localStorage.setItem('userData', JSON.stringify(this.userData));
        this.funcionesUsuario.obtenerUsuario();
        this.botonHabilitado = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Datos guardados',
          detail: 'Se han guardado correctamente los datos',
        });
      },
      (error) => {
        console.error('Error al actualizar los datos', error);
      },
    );
  }

  /**
   * Actualiza y modifica las preferencias de viaje del usuario
   * @param event
   */
  actualizarPreferencias(event: any) {
    const valor = event.target.value;

    if (!Array.isArray(this.preferenciasSeleccionadas)) {
      this.preferenciasSeleccionadas = [];
    }
    if (event.target.checked) {
      if (!this.preferenciasSeleccionadas.includes(valor)) {
        this.preferenciasSeleccionadas.push(valor);
      }
    } else {
      this.preferenciasSeleccionadas = this.preferenciasSeleccionadas.filter((pref) => pref !== valor);
    }

    console.log('Preferencias actualizadas:', this.preferenciasSeleccionadas);
  }

  /**
   *
   * @param event --> tipo Event es propio de HTML (la foto subida, un archivo, etc.)
   * input recibe lo que viene de la propiedad target del event que será de un tipo Input de HTML (as HTMLInputElement)
   * this.cargando = true --> activa el spinner para hacer mientras por debajo todo lo que viene después (llamada al servicio)
   * Si la propiedad files del event.target tiene contenido y en la posición [0] tiene contenido, entonces:
   * crea un objeto con el new FormData, y con el .append le añadimos 'imagenPerfil' (que tiene que coincidir con lo que espera el backend, se tiene que llamar igual) y lo que haya en el input.files[0] --> crea un key-value. Key=fotoSubida, value lo que haya en el input.files[0]
   * usuarioID --> accede al usuario y saca su id
   * Llama a la función actualizarImagenPerfil de userService y le pasa el id del usuario y el formData con los datos del input.
   * Cuando recibe la respuesta: pone el cargando (spinner) en false, lo deja de mostar, pone perfilSinfoto en false porque ya va a tener una imagen
   * y si hay respuesta y la respuesta tiene la propiedad url con datos entonces:
   * le pasa esa url a imagenPerfilUusario y llama al messageServie para que muestre el mensaje en pantalla.
   * Por ultimo this.obtenerUsuarioPorID(usuarioId) --> actualiza todos los datos del usuario cuando todo ha terminado.
   *
   *
   */
  subirFotoPerfil(event: Event) {
    const input = event.target as HTMLInputElement;

    this.cargando = true;
    if (input.files && input.files[0]) {
      const formData = new FormData();
      formData.append('imagenPerfil', input.files[0]);

      const usuarioId = this.userData.usuario.id;

      this.userService.actualizarImagenPerfil(usuarioId, formData).subscribe({
        next: (response) => {
          this.cargando = false;
          this.perfilSinFoto = false;
          if (response && response.url) {
            this.imagenPerfilUsuario = response.url;
            this.messageService.add({
              severity: 'success',
              summary: 'Datos guardados',
              detail: 'La imagen de perfil se ha actualizado correctamente.',
            });
          }
          this.obtenerUsuarioPorID(usuarioId);
        },
        error: (error) => {
          console.error('Error al actualizar la imagen del perfil:', error);
        },
      });
    }
  }

  /**
   *
   * if (!this.userData?.usuario?.id) return --> Si no existe usuario logueado o no tiene id no hace nada
   * this.cargando = true --> muestra spinner de carga mientras se elimina la foto
   * this.userService.eliminarFotoPerfil ... --> Envía una solicitud para eliminar la foto del usuario
   * next: () => { ... } --> Se ejecuta si la petición fue exitosa --> Desactiva el spinner de carga -- No actualiza imagenPerfilUsuario porque lo hará la suscripción a usuario$
   * error: (err) => { ... } --> se ejecuta si hubiese algun error en la eliminación de la foto
   */
  eliminarFotoPerfil(): void {
    if (!this.userData?.usuario?.id) return;

    this.cargando = true;

    this.userService.eliminarFotoPerfil(this.userData.usuario.id).subscribe({
      next: () => {
        this.cargando = false;
        this.perfilSinFoto = true;

        this.messageService.add({
          severity: 'success',
          summary: 'Foto eliminada',
          detail: 'La foto de perfil se ha eliminado correctamente.',
        });
      },
      error: (err) => {
        this.cargando = false;
        console.error('Error al eliminar la foto de perfil:', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo eliminar la imagen del perfil.',
        });
      },
    });
  }

  /**
   *
   * Recibe el objeto "usuario" actualizado
   * usuario?.fotoPerfil --> verifica si el usuario tiene alguna foto de perfil, si existe se asigna a this.imagenPerfilUsuario
   * : ../../assets/user... --> asigna la imagen de perfil genérica
   */
  private actualizarFotoPerfil(usuario: Usuario['usuario'] | null) {
    this.imagenPerfilUsuario = usuario?.fotoPerfil ? usuario.fotoPerfil : '../../../assets/user/logOn.gif';
  }

  modalEliminarFotoPerfil(usuario: any) {
    const titulo: string = '¡ATENCIÓN: Vas a eliminar tu foto de perfil!';
    const mensaje: string = '¿Estás seguro que deseas eliminar tu foto de perfil?';

    const dialogRef = this.dialog.open(HelpModalComponent, {
      data: { title: titulo, message: mensaje, showAcceptButton: true },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((confirmar) => {
      if (confirmar) {
        this.eliminarFotoPerfil();
      }
    });
  }

  verPerfilPublico() {
    const usuario = { id: this.userData.usuario.id };

    this.navCtrl.navigateRoot(['/perfil-publico'], {
      queryParams: usuario,
    });
  }
  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
}
