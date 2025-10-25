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
import { VistaAcordeonVehiculosComponent } from '../../../components/tabla-vehiculos/vista-acordeon-vehiculos/vista-acordeon-vehiculos.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SpinnerComponent } from '../../../components/spinner/spinner.component';
import { MatDialog } from '@angular/material/dialog';
import { HelpModalComponent } from '../../../components/help-modal/help-modal.component';

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
    VistaAcordeonVehiculosComponent,
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
  edad: number = this.funcionesUsuario.calcularEdad(
    this.fechaNacimientoEditada
  );
  lang: string = ''; // Variable para almacenar el lenguaje seleccionado.

  imagenPerfilSrc: string = '../../../assets/user/logOn.gif'; // Variable para almacenar la imagen de perfil por defecto.
  usuario: any = {} as Usuario;
  imagenPerfilUsuario: string | null = null; // Variable para almacenar la imagen seleccionada por el usuario.
  cargando = false; // Variable que se utiliza para mostrar el spinner de carga

  constructor(
    public funcionesComunes: FuncionesComunes,
    private userService: UserServicesService,
    public funcionesUsuario: FuncionesUsuario,
    private platform: Platform,
    private cdr: ChangeDetectorRef,
    private messageService: MessageService,
    public translate: TranslateService,
    private navCtrl: NavController,
    private dialog: MatDialog
  ) {
    this.loadUserData();
    this.fechaNacimientoEditada = this.userData.usuario.fecha_nacimiento || '';
    this.lang = this.translate.currentLang;
    this.emailEditado = this.userData.usuario.email || '';
    this.telefonoEditado = this.userData.usuario.telefono || '';
    this.comunComerciales = this.userData.usuario.comunic_comerciales || false;
  }

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.userLoggedIn = !!(this.userData && this.userData.usuario.email);
    this.nombreEditado = this.userData.usuario.nombre;
    this.apellidosEditados = this.userData.usuario?.apellidos;
    this.pronombreEditado = this.userData.usuario?.pronombre || '';
    this.generoEditado = this.userData.usuario.genero || '';
    this.orientacionEditada = this.userData.usuario.orientacion || '';
    this.fechaNacimientoEditada = this.userData.usuario.fecha_nacimiento || '';
    this.bioEditada = this.userData.usuario.biografia || '';
    this.preferenciasSeleccionadas = this.userData.usuario.preferencias || [];

    //Asegurar que cada vehículo tiene una propiedad que sea "editandoVehiculo"
    this.funcionesComunes.vehiculos_usuario.forEach((vehiculo) => {
      vehiculo.editandoVehiculo = false;
    });

    this.actualizarEdad();
    this.obtenerUsuarioPorID(this.userData.usuario.id);
    this.funcionesComunes.getBaseUrl();
  }

  obtenerUsuarioPorID(id_usuario: number) {
    this.userService
      .obtenerUsuarioPorID(id_usuario)
      .subscribe((resultadoUsuario) => {
        this.usuario = resultadoUsuario;
      });
  }

  loadUserData(): void {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
  }

  checkScreenSize() {
    this.isDesktop = window.innerWidth > 576;
    console.log(
      'Tamaño detectado:',
      window.innerWidth,
      'isDesktop:',
      this.isDesktop
    );
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
    const apellidosChanged =
      this.apellidosEditados !== this.userData.usuario?.apellidos;
    const pronombreChanged =
      this.pronombreEditado !== this.userData.usuario?.pronombre;
    const generoChanged = this.generoEditado !== this.userData.usuario.genero;
    const orientacionChanged =
      this.orientacionEditada !== this.userData.usuario.orientacion;
    const fechaNacimientoChanged =
      this.fechaNacimientoEditada !== this.userData.usuario.fecha_nacimiento;
    const bioChanged = this.bioEditada !== this.userData.usuario.biografia;
    const preferenciasChanged =
      JSON.stringify(this.preferenciasSeleccionadas) !==
      JSON.stringify(this.userData.usuario.preferencias);

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
  onCheckboxChange(preferencia: string, event: Event) {
    const input = event.target as HTMLInputElement;
    if (input) {
      const isChecked = input.checked;
      const selectedPreferences = [...this.preferenciasSeleccionadas];

      if (isChecked) {
        // Añadir la preferencia si no está ya incluida
        if (!selectedPreferences.includes(preferencia)) {
          selectedPreferences.push(preferencia);
        }
      } else {
        // Eliminar la preferencia si está incluida
        const index = selectedPreferences.indexOf(preferencia);
        if (index !== -1) {
          selectedPreferences.splice(index, 1);
        }
        this.cdr.detectChanges();
      }
      this.preferenciasSeleccionadas = selectedPreferences;
      this.checkForChanges(); // Verificar si hay cambios
      this.cdr.detectChanges(); // Forzar la detección de cambios en Angular
    }
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
    console.log('userData:', this.userData); // Verifica que userData tenga los datos correctos

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

    this.userService
      .editarDatosUsuario(this.userData.usuario.id, nuevoUsuario)
      .subscribe(
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
      this.preferenciasSeleccionadas = this.preferenciasSeleccionadas.filter(
        (pref) => pref !== valor
      );
    }

    console.log('Preferencias actualizadas:', this.preferenciasSeleccionadas);
  }

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
          if (response && response.nuevaUrl) {
            this.imagenPerfilUsuario = response.nuevaUrl;
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

  eliminarFotoPerfil(usuario: any): any {
    this.userService.eliminarImagenPerfil(usuario.id).subscribe(
      (resultado) => {
        this.imagenPerfilUsuario = null;
        this.cdr.detectChanges();
        this.messageService.add({
          severity: 'success',
          summary: 'Imagen eliminada',
          detail: resultado.mensaje,
        });
        console.log('Resultado: ', resultado);
      },
      (error) => {
        console.error('Error al eliminar la foto del perfil:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo eliminar la imagen del perfil.',
        });
      }
    );
  }

  modalEliminarFotoPerfil(usuario: any) {
    const titulo: string = '¡ATENCIÓN: Vas a eliminar tu foto de perfil!';
    const mensaje: string =
      '¿Estás seguro que deseas eliminar tu foto de perfil?';

    const dialogRef = this.dialog.open(HelpModalComponent, {
      data: { title: titulo, message: mensaje, showAcceptButton: true },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((confirmar) => {
      if (confirmar) {
        this.eliminarFotoPerfil(usuario);
      }
    });
  }

  // eliminarFotoPerfil() {
  //   const usuarioId = this.userData.usuario.id;

  //   if (!confirm('¿Seguro que deseas eliminar tu foto de perfil?')) return;
  //   this.cargando = true;
  //   this.userService.eliminarImagenPerfil(usuarioId).subscribe({
  //     next: (response) => {
  //       this.cargando = false;
  //       this.imagenPerfilUsuario = null;
  //       this.messageService.add({
  //         severity: 'success',
  //         summary: 'Imagen eliminada',
  //         detail: response.mensaje,
  //       });
  //     },
  //     error: (error) => {
  //       this.cargando = false;
  //       console.error('Error al eliminar la foto del perfil:', error);
  //       this.messageService.add({
  //         severity: 'error',
  //         summary: 'Error',
  //         detail: 'No se pudo eliminar la imagen del perfil.',
  //       });
  //     },
  //   });
  // }

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
