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
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleServices } from 'src/app/core/google-services/google-services.service';
import { LanguageService } from 'src/app/core/lenguajes/languaje.service';
import { VehiculosServicesService } from 'src/app/core/vehiculos-services/vehiculos-services.service';
import { CARS, COLORES } from 'src/app/models/vehiculos/marcas_modelos.model';

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
    MatDivider,
  ],

  providers: [MessageService],
})
export class MiPerfilPage implements OnInit {
  @ViewChild('popover') popover!: HTMLIonPopoverElement;
  userLoggedIn: boolean = false;
  userData: any = {} as Usuario;
  fechaNacimiento: string = '';
  editandoVehiculo: boolean = false;
  datosActualizados: any = {};
  mostrarSelectorVehiculo: boolean = false;
  isMobileWeb: boolean = false;
  isDesktop: boolean = true;
  botonHabilitado: boolean = false;
  vehiculos_usuario: any[] = [];
  nombreEditado: string = '';
  apellidosEditados: string = '';
  pronombreEditado: string = '';
  generoEditado: string = '';
  orientacionEditada: string = '';
  fechaNacimientoEditada: string = '';
  bioEditada: string = '';
  texto_spinner: string = 'Traduciendo...';
  preferenciasSeleccionadas: string[] = [];
  comunComerciales: boolean = false;
  emailEditado: string = '';
  telefonoEditado: string = '';
  isOpen = false;
  edad: number = this.funcionesUsuario.calcularEdad(this.fechaNacimientoEditada);
  marcaSeleccionada: string = '';
  modeloSeleccionado: string = '';
  colorSeleccionado: string = '';
  lang: string = this.languageService.getLanguage() || 'es'; // Variable para almacenar el lenguaje seleccionado.
  imagenPerfilSrc: string = '../../../assets/user/logOn.gif'; // Variable para almacenar la imagen de perfil por defecto.
  imagenPerfilUsuario: string | null = null; // Variable para almacenar la imagen seleccionada por el usuario.
  cargando = false; // Variable que se utiliza para mostrar el spinner de carga
  perfilSinFoto: boolean = false;
  variableEjemplo: boolean = false;
  spinnerActivo: boolean = false;

  vengoDeViaje: boolean = false;

  modificandoMarca: boolean = false;

  listadoCoches = CARS;
  listadoColores: string[] = COLORES;
  modelosFiltrados: string[] = [];

  pronombreCtrl = {
    valorTexto: '',
    estaActivo: false,
    indiceActivo: -1,
    sugerencias: [] as { valor: string; descripcion: string }[],
  };
  generoCtrl = {
    valorTexto: '',
    estaActivo: false,
    indiceActivo: -1,
    sugerencias: [] as any[],
  };
  orientacionCtrl = {
    valorTexto: '',
    estaActivo: false,
    indiceActivo: -1,
    sugerencias: [] as any[],
  };

  listaPronombresOriginales = [
    { valor: 'Él / He / Him', descripcion: 'Él / He / Him' },
    { valor: 'Ella / She / Her', descripcion: 'Ella / She / Her' },
    { valor: 'Elle / They / Them', descripcion: 'Elle / They / Them' },
    {
      valor: 'Otros',
      descripcion: 'MIPERFIL.INFO_PERSONAL.PRONOMBRE.OPC_OTROS',
    },
    {
      valor: 'No uso ninguno',
      descripcion: 'MIPERFIL.INFO_PERSONAL.PRONOMBRE.OPC_NOUSO',
    },
    {
      valor: 'Prefiero no responder',
      descripcion: 'MIPERFIL.INFO_PERSONAL.PRONOMBRE.OPC_NORESPONDO',
    },
  ];
  listaGenerosOriginales = [
    { valor: 'Mujer Cis', descripcion: 'SELECTOR_GENERO.M_CIS' },
    { valor: 'Hombre Cis', descripcion: 'SELECTOR_GENERO.H_CIS' },
    { valor: 'Transexual', descripcion: 'SELECTOR_GENERO.TRANS' },
    { valor: 'No binario', descripcion: 'SELECTOR_GENERO.NO_BINARIO' },
    { valor: 'Intergénero', descripcion: 'SELECTOR_GENERO.INTER' },
    { valor: 'No fluido', descripcion: 'SELECTOR_GENERO.NO_FLUIDO' },
    { valor: 'Otro', descripcion: 'SELECTOR_GENERO.OTRO' },
    { valor: 'Prefiero no responder', descripcion: 'SELECTOR_GENERO.NO_RESPONDE' },
  ];

  listaOrientacionesOriginales = [
    { valor: 'Gay', descripcion: 'SELECTOR_ORIENTACION.GAY' },
    { valor: 'Lesbiana', descripcion: 'SELECTOR_ORIENTACION.LESBIANA' },
    { valor: 'Bisexual', descripcion: 'SELECTOR_ORIENTACION.BISEXUAL' },
    { valor: 'Heterosexual', descripcion: 'SELECTOR_ORIENTACION.HETEROSEXUAL' },
    { valor: 'Pansexual', descripcion: 'SELECTOR_ORIENTACION.PANSEXUAL' },
    { valor: 'Demisexual', descripcion: 'SELECTOR_ORIENTACION.DEMISEXUAL' },
    { valor: 'Queer', descripcion: 'SELECTOR_ORIENTACION.QUEER' },
    { valor: 'Asexual', descripcion: 'SELECTOR_ORIENTACION.ASEXUAL' },
    { valor: 'Otro', descripcion: 'SELECTOR_ORIENTACION.OTRO' },
    { valor: 'Prefiero no responder', descripcion: 'SELECTOR_ORIENTACION.NO_RESPONDE' },
  ];

  constructor(
    public funcionesComunes: FuncionesComunes,
    private languageService: LanguageService,
    private userService: UserServicesService,
    private googleService: GoogleServices,
    public funcionesUsuario: FuncionesUsuario,
    private vehiculosServicesService: VehiculosServicesService,
    private platform: Platform,
    private cdr: ChangeDetectorRef,
    private messageService: MessageService,
    public translate: TranslateService,
    private navCtrl: NavController,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.loadUserData();
    const usr = this.userData?.usuario || (this.userData?.id ? this.userData : null);
    if (!usr) {
      console.warn('MiPerfil - No se encontró un usuario válido en el storage, redirigiendo al login.');
      this.navCtrl.navigateRoot('/login');
      return;
    }
    if (!this.userData.usuario && this.userData.id) {
      this.userData = { usuario: this.userData };
    }

    const usuarioValido = this.userData.usuario;
    this.fechaNacimientoEditada = usuarioValido?.fecha_nacimiento || '';
    this.lang = this.translate.currentLang;
    this.emailEditado = usuarioValido?.email || '';
    this.telefonoEditado = usuarioValido?.telefono || '';
    this.comunComerciales = usuarioValido?.comunic_comerciales || false;
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
        this.pronombreCtrl.valorTexto = usuario.pronombre || '';
        this.pronombreCtrl.sugerencias = [...this.listaPronombresOriginales];

        this.generoEditado = usuario.genero || '';
        this.generoCtrl.valorTexto = usuario.genero || '';
        this.generoCtrl.sugerencias = [...this.listaGenerosOriginales];

        this.orientacionEditada = usuario.orientacion || '';
        this.orientacionCtrl.valorTexto = usuario.orientacion || '';
        this.orientacionCtrl.sugerencias = [...this.listaOrientacionesOriginales];

        this.fechaNacimientoEditada = usuario.fecha_nacimiento || '';
        this.bioEditada = usuario.biografia || '';
        this.preferenciasSeleccionadas = usuario.preferencias || [];
        this.actualizarFotoPerfil(usuario);

        this.userLoggedIn = !!usuario.email;

        this.translate.onLangChange.subscribe((idiomaCambiado) => {
          this.lang = idiomaCambiado.lang;
          console.log('El idioma ha cambiado a:', this.lang);
          this.detectarIdioma_traducirTexto(this.bioEditada);
        });
        this.cdr.detectChanges();

        this.route.queryParams.subscribe((params) => {
          this.vengoDeViaje = params['from'] === 'newTravel';
        });
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

  /**
   * Función que detecta el idioma de un texto y lo traduce al idioma contrario (depende del que tenga la aplicación: es <--> en)   *
   * @param textoATraducir: es el texto a traducir
   * this.googleService.... --> llama primero a la función para detectar el idioma del texto ('detectarIdiomaTexto'), con el subscribe se queda pendiente
   * de los cambios que pueda haber para obtener un resultado.
   * if --> si el idioma de la app es diferente al atributo idioma del resultado (que será 'es' o 'en') entonces llama a la función para traducir el texto.
   * La función traducirIdiomaTexto necesita 3 parametros de entrada:
   *    - textoATraducir --> lo coge del parametro de entrada de la función.
   *    -this.lang --> el idioma en el que está la app actualmente.
   *    -resultado.idioma --> el resultado de detectarIdiomaTexto, que nos devuelve 'es' o 'en'.
   * Con el subscribe está pendiente de nuevo a los cambios, y recibo del backend un objeto que se llama resultadoTraducción, que tiene un atributo
   * que se llama texto_traducido que contiene la traducción del texto como tal y es lo que le paso a this.bioEditada.
   */
  detectarIdioma_traducirTexto(textoATraducir: string) {
    this.spinnerActivo = true;
    this.texto_spinner = 'MIPERFIL.INFO_PERSONAL.SPINNER_TRADUCIENDO';
    this.googleService.detectarIdiomaTexto(textoATraducir).subscribe((resultado: any) => {
      console.log('resultado: ', resultado);
      if (this.lang !== resultado.idioma) {
        this.googleService.traducirIdiomaTexto(textoATraducir, this.lang, resultado.idioma).subscribe((resultadoTraduccion: any) => {
          console.log('resultadoTraduccion: ', resultadoTraduccion);
          this.bioEditada = resultadoTraduccion.texto_traducido;
          this.spinnerActivo = false;
        });
      }
    });
  }

  //SELECTORES

  /**
   * Abre un selector y cierra automáticamente todos los demás de forma instantánea
   */
  abrirSelector(ctrlAActivar: any, listaOriginal: any[]) {
    // Cerramos todos los demás de inmediato
    this.pronombreCtrl.estaActivo = false;
    this.generoCtrl.estaActivo = false;
    this.orientacionCtrl.estaActivo = false;

    // Abrimos el que se ha seleccionado
    ctrlAActivar.estaActivo = true;
    ctrlAActivar.sugerencias = listaOriginal;
    ctrlAActivar.indiceActivo = -1;
  }

  /**
   * Función unificada para filtrar sugerencias en cualquier selector
   */
  filtrarOpciones(ctrl: any, listaOriginal: any[], tipoCampo: 'pronombre' | 'genero' | 'orientacion', event: any) {
    const texto = event.target.value.toLowerCase();
    ctrl.valorTexto = event.target.value;
    ctrl.indiceActivo = -1;

    if (tipoCampo === 'pronombre') this.pronombreEditado = ctrl.valorTexto;
    if (tipoCampo === 'genero') this.generoEditado = ctrl.valorTexto;
    if (tipoCampo === 'orientacion') this.orientacionEditada = ctrl.valorTexto;

    this.onInputChange();

    if (!texto.trim()) {
      ctrl.sugerencias = [...listaOriginal];
      return;
    }

    ctrl.sugerencias = listaOriginal.filter(
      (item) => item.valor.toLowerCase().includes(texto) || item.descripcion.toLowerCase().includes(texto)
    );
  }

  /**
   * Selecciona una opción de la lista y quita el foco del input
   */
  seleccionarOpcion(
    ctrl: any,
    opcion: { valor: string; descripcion: string },
    tipoCampo: 'pronombre' | 'genero' | 'orientacion',
    inputElement?: HTMLInputElement
  ) {
    ctrl.valorTexto = opcion.valor;
    if (tipoCampo === 'pronombre') this.pronombreEditado = opcion.valor;
    if (tipoCampo === 'genero') this.generoEditado = opcion.valor;
    if (tipoCampo === 'orientacion') this.orientacionEditada = opcion.valor;

    ctrl.sugerencias = [];
    ctrl.estaActivo = false;
    ctrl.indiceActivo = -1;
    this.onInputChange();

    // Quitar el foco para que desaparezca el cursor parpadeando
    if (inputElement) {
      inputElement.blur();
    }
  }

  /**
   * Función unificada para validar al perder el foco
   */
  validarSeleccionOpcion(ctrl: any, listaOriginal: any[], tipoCampo: 'pronombre' | 'genero' | 'orientacion') {
    setTimeout(() => {
      ctrl.sugerencias = [];
      ctrl.indiceActivo = -1;

      const encontrado = listaOriginal.find((item) => item.valor.toLowerCase() === ctrl.valorTexto.toLowerCase());
      if (!encontrado && ctrl.valorTexto.trim() !== '') {
        if (tipoCampo === 'pronombre') this.pronombreEditado = ctrl.valorTexto;
        if (tipoCampo === 'genero') this.generoEditado = ctrl.valorTexto;
        if (tipoCampo === 'orientacion') this.orientacionEditada = ctrl.valorTexto;
      }
      this.onInputChange();
    }, 200);
  }

  /**
   * Función unificada para la navegación por teclado (Flechas, Enter, Escape)
   */
  manejarNavegacionTeclado(event: KeyboardEvent, ctrl: any, listaOriginal: any[], tipoCampo: 'pronombre' | 'genero' | 'orientacion') {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (ctrl.sugerencias.length > 0) {
        ctrl.estaActivo = true;
        ctrl.indiceActivo = (ctrl.indiceActivo + 1) % ctrl.sugerencias.length;
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (ctrl.sugerencias.length > 0) {
        ctrl.indiceActivo = (ctrl.indiceActivo - 1 + ctrl.sugerencias.length) % ctrl.sugerencias.length;
      }
    } else if (event.key === 'Enter') {
      event.preventDefault();
      if (ctrl.indiceActivo >= 0 && ctrl.sugerencias[ctrl.indiceActivo]) {
        this.seleccionarOpcion(ctrl, ctrl.sugerencias[ctrl.indiceActivo], tipoCampo);
      }
    } else if (event.key === 'Escape') {
      ctrl.sugerencias = [];
      ctrl.estaActivo = false;
    }
  }

  //SELECTORES ^^

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
      }
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
    console.log('usuario: ', usuario);

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

  volverAViaje() {
    this.router.navigate(['/data-viaje']);
  }

  /**
   * Función para eliminar un vehículo del usuario
   * @param vehiculo
   */
  eliminarVehiculo(vehiculo: any): any {
    this.vehiculosServicesService.eliminarVehiculo(vehiculo.id, vehiculo).subscribe({
      next: (resultado) => {
        // 1. Actualizamos el array local de vehículos de forma segura
        if (this.userData?.usuario?.vehiculos) {
          this.userData.usuario.vehiculos = this.userData.usuario.vehiculos.filter((coche: any) => coche.id !== vehiculo.id);
        }

        // 2. Sincronizamos inmediatamente el localStorage y el servicio de usuario
        const userDataActual = this.userService.getUsuarioData() || JSON.parse(localStorage.getItem('userData') || '{}');

        if (!this.userData.usuario && this.userData.id) {
          this.userData = { usuario: this.userData };
        }

        if (userDataActual && userDataActual.usuario) {
          userDataActual.usuario.vehiculos = this.userData.usuario.vehiculos;
          localStorage.setItem('userData', JSON.stringify(userDataActual));

          // Si tu servicio tiene un método de actualización de estado, úsalo:
          if (typeof this.userService.setUsuarioData === 'function') {
            this.userService.setUsuarioData(userDataActual);
          }
        }
        if (this.userData?.usuario?.id) {
          this.userService.obtenerUsuarioPorID(this.userData.usuario.id).subscribe((usuarioActualizado) => {
            this.userData = usuarioActualizado;
            localStorage.setItem('userData', JSON.stringify(this.userData));
            this.cdr.detectChanges();
          });
        }
        this.cdr.detectChanges();
        this.messageService.add({
          severity: 'success',
          summary: 'Vehículo eliminado',
          detail: 'El vehículo se ha eliminado correctamente.',
        });
      },
      error: (err) => {
        console.error('Error al eliminar el vehículo en backend:', err);
      },
    });
  }

  modalEliminarVehiculo(cocheAEliminar: any) {
    const titulo: string = '¡ATENCIÓN: Vas a eliminar un vehículo';
    const mensaje: string = `¿Estás seguro que deseas eliminar ${cocheAEliminar.marca} ${cocheAEliminar.modelo} ?`;
    const dialogRef = this.dialog.open(HelpModalComponent, {
      data: { title: titulo, message: mensaje, showAcceptButton: true },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((confirmar) => {
      if (confirmar) {
        this.eliminarVehiculo(cocheAEliminar);
      }
    });
  }

  /**
   * Función para obtener la lista de vehículos de un usuario.   *
   */
  obtenerVehiculos() {
    const userDataString = localStorage.getItem('userData');
    if (!userDataString) return;

    const usuario = JSON.parse(userDataString);
    if (!usuario?.usuario?.id) return;

    this.vehiculosServicesService.obtenerVehiculosUsuario(usuario.usuario.id).subscribe({
      next: (resultado: any) => {
        const listaVehiculos = resultado?.vehiculos || [];
        console.log('Vehículos: ', listaVehiculos);

        this.funcionesUsuario.vehiculos_usuario = listaVehiculos;
      },
      error: (err) => {
        console.error('Error al obtener los vehículos:', err);
        this.funcionesUsuario.vehiculos_usuario = [];
      },
    });
  }

  filtrarModelosEditando(coche: any) {
    if (!coche.marca) return;
    const vehiculo = this.listadoCoches.find((c) => c.marca === coche.marca);
    this.modelosFiltrados = vehiculo.modelos;

    if (this.modelosFiltrados.length > 0 && !this.modelosFiltrados.includes(coche.modelo)) {
      this.modeloSeleccionado = this.modelosFiltrados[0];
    }
  }

  /**
   * Función para mostrar las imágenes de colores de los coches
   * según el color que se tenga seleccionado del coche.   *
   * @param color
   * @returns
   */
  mostrarColorCoche(color: string): string {
    const blanco: string = '../../../assets/ColoresCoches/Blanco.png';
    const negro: string = '../../../assets/ColoresCoches/Negro.png';
    const rojo: string = '../../../assets/ColoresCoches/Rojo.png';
    const amarillo: string = '../../../assets/ColoresCoches/Amarillo.png';
    const verde: string = '../../../assets/ColoresCoches/Verde.png';
    const gris: string = '../../../assets/ColoresCoches/Gris.png';
    const dorado: string = '../../../assets/ColoresCoches/Dorado.png';
    const marron: string = '../../../assets/ColoresCoches/Marrón.png';
    const morado: string = '../../../assets/ColoresCoches/Morado.png';
    const beige: string = '../../../assets/ColoresCoches/Beige.png';
    const perla: string = '../../../assets/ColoresCoches/Perla.png';
    const otro: string = '../../../assets/ColoresCoches/Otros.png';

    switch (color) {
      case 'blanco':
        return blanco;
      case 'negro':
        return negro;
      case 'rojo':
        return rojo;
      case 'amarillo':
        return amarillo;
      case 'verde':
        return verde;
      case 'gris':
        return gris;
      case 'dorado':
        return dorado;
      case 'marron':
        return marron;
      case 'morado':
        return morado;
      case 'beige':
        return beige;
      case 'perla':
        return perla;
      case 'otro':
        return otro;
      default:
        return '';
    }
  }

  /**
   * Para mostrar (o no) el selector de marca, modelo y color de coche
   */
  botonAnadirVehiculo() {
    this.mostrarSelectorVehiculo = !this.mostrarSelectorVehiculo;
  }

  actualizarListaVehiculos(usuarioActualizado: any) {
    // Comprobamos si el backend devuelve el objeto envuelto en { usuario: { ... } } o plano
    if (usuarioActualizado && usuarioActualizado.usuario) {
      this.userData = usuarioActualizado;
    } else if (usuarioActualizado && (usuarioActualizado.id || usuarioActualizado.vehiculos)) {
      // Si viene plano, lo reestructuramos para mantener la compatibilidad con el HTML del padre
      this.userData = {
        ...(this.userData || {}),
        usuario: usuarioActualizado,
      };
    } else {
      this.userData = usuarioActualizado;
    }

    // Sincronizamos el localStorage con el objeto completo actualizado
    localStorage.setItem('userData', JSON.stringify(this.userData));

    this.mostrarSelectorVehiculo = false;
    this.cdr.detectChanges();
  }
}
