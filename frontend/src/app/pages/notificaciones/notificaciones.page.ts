import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificacionesService } from 'src/app/core/notificaciones/notificaciones.service';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { Usuario } from 'src/app/models/user/usuario.model';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { SpinnerComponent } from "src/app/components/spinner/spinner.component";
import { MatIcon } from "@angular/material/icon";
import { HelpModalComponent } from 'src/app/components/help-modal/help-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { Subject } from 'rxjs/internal/Subject';
import { timer } from 'rxjs/internal/observable/timer';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { switchMap } from 'rxjs/internal/operators/switchMap';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, IonicModule, SpinnerComponent, MatIcon, TranslateModule]
})
export class NotificacionesPage implements OnInit {

  usuario: any;
  userData: Usuario = {} as Usuario;
  userLoggedIn: boolean = false;
  iconoAjustes: string = '../../../assets/sistema/ajustes.png';
  notificaciones: any[] = [];

  mostrarSpinner: boolean = false;

  idResaltado: number | null = null;

  private destroy$ = new Subject<void>();

  constructor(
    private notificationService: NotificacionesService, 
    private userService: UserServicesService, 
    private router: Router, private dialog: MatDialog,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.idResaltado = this.notificationService.idNotificacionResaltada;
    this.loadUserData();
    
    this.userLoggedIn = !!(this.userData && this.userData.usuario && this.userData.usuario.email);
    
    if (this.userData?.usuario?.id) {
      this.iniciarEscuchaActiva(this.userData.usuario.id);
    }
    
    this.notificationService.clearToasts();
    
    if (this.idResaltado) {
      setTimeout(() => {
        this.idResaltado = null;
        this.notificationService.idNotificacionResaltada = null;
      }, 3000);
    }
  }

  /**
   * Función para iniciar la escucha activa de notificaciones mediante polling.
   * Se utiliza un timer que emite cada 5 segundos para realizar una petición al backend 
   * y obtener las notificaciones actualizadas del usuario.
   * La función takeUntil(this.destroy$) se utiliza para cancelar el polling
   *  automáticamente cuando el componente se destruye, evitando así fugas de memoria.
   * Si hay cambios en la lista de notificaciones (nueva notificación o cambio en el estado de lectura), 
   * se actualiza la interfaz con las nuevas notificaciones.
   * 
   * @param usuarioId --> ID del usuario para el cual se quieren obtener las notificaciones.
   */
  iniciarEscuchaActiva(usuarioId: number) {
    this.mostrarSpinner = this.notificaciones.length === 0; 

    timer(0, 5000)
      .pipe(
        takeUntil(this.destroy$), 
        switchMap(() => this.notificationService.obtenerNotificaciones(usuarioId))
      )
      .subscribe({
        next: (notificaciones) => {
          this.mostrarSpinner = false;

          if (this.haHabidoCambios(notificaciones)) {
            const mapeadas = notificaciones.map((n: any) => ({ 
              ...n, 
              expandido: n.expandido || false 
            }));

            this.notificaciones = mapeadas.sort((a: any, b: any) => Number(a.leida) - Number(b.leida));
            
            this.cdr.detectChanges(); 
            
            if (this.notificaciones.length > 0) {
              this.notificationService.notificacionPendiente = this.notificaciones[0].mensaje;
            }
          }
        },
        error: (err) => {
          this.mostrarSpinner = false;
          console.error('Error en el polling de notificaciones', err);
        }
      });
  }

  /**
   * Función para verificar si ha habido cambios en la lista de notificaciones.
   * Compara la nueva lista de notificaciones con la lista actual para determinar si ha habido cambios significativos.
   * Se considera que ha habido cambios si la longitud de las listas es diferente o si el número de notificaciones sin leer ha cambiado.
   * 
   * @param nuevas --> Nueva lista de notificaciones obtenida del backend.
   */
  private haHabidoCambios(nuevas: any[]): boolean {
    if (nuevas.length !== this.notificaciones.length) return true;
    
    // Opcional: verificar si alguna que era "no leída" ahora es "leída"
    const countSinLeerActual = this.notificaciones.filter(n => !n.leida).length;
    const countSinLeerNueva = nuevas.filter(n => !n.leida).length;
    
    return countSinLeerActual !== countSinLeerNueva;
  }

  /**
   * Función para obtener todas las notificaciones del usuario que ha iniciadio sesión.
   * 
   * @param usuarioId 
   */
  obtenerNotificaciones(usuarioId: number) {
    this.mostrarSpinner = true;
    this.notificationService.obtenerNotificaciones(usuarioId).subscribe({
      next: (notificaciones) => {
        this.mostrarSpinner = false;
        if (notificaciones && notificaciones.length) {
          const mapeadas = notificaciones.map((n: any) => ({ ...n, expandido: false }));
          this.notificaciones = mapeadas.sort((a: any, b: any) => Number(a.leida) - Number(b.leida));         

          this.notificationService.notificacionPendiente = notificaciones[0].mensaje;
          this.notificationService.esCreadorDelViaje = true;
          this.notificationService.leerNotificacion(notificaciones);
        }
      },
      error: (err) => {
        this.mostrarSpinner = false;
        console.error('Error al obtener notificaciones', err);
      }
    });
  }

  /**
   * Función para cargar los datos del usuario desde el localStorage.
   */
  loadUserData(): void {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
  }

  /**
   * Función para alternar el estado de una notificación entre leída y no leída.
   * Se actualiza el estado de la notificación en la interfaz y se envía la actualización al backend.
   * Si ocurre un error al actualizar el estado, se muestra un mensaje de error en la consola.
   * 
   * @param notificacion --> Notificación cuyo estado se quiere alternar entre leída y no leída. 
   */
  toggleLeida(notificacion: any): void {
    const nuevoEstado = !notificacion.leida;
    notificacion.leida = !notificacion.leida;

    this.notificationService.toggleEstadoNotificacion(notificacion.id, nuevoEstado)
      .subscribe({
        next: () => {
          notificacion.leida = nuevoEstado;
          this.cdr.detectChanges();
        },
        error: () => {
          console.error('No se pudo actualizar el estado de la notificación');
        }
      });
  }

  /**
   * Función para verificar si hay notificaciones sin leer. 
   * Devuelve true si al menos una notificación no ha sido leída, 
   * y false si todas las notificaciones están marcadas como leídas.
   * 
   */
  get haySinLeer(): boolean {
    return this.notificaciones.some(n => !n.leida);
  }

  /**
   * Función para marcar todas las notificaciones del usuario como leídas. 
   * Se actualiza el estado de cada notificación en la interfaz y 
   * se muestra un mensaje de confirmación al usuario.
   * 
   */
  marcarTodasComoLeidas() {
    const usuarioId = this.userData.usuario.id;
    
    this.notificationService.marcarTodasComoLeidas(usuarioId).subscribe({
      next: () => {
        this.notificaciones.forEach(n => n.leida = true);
        this.notificaciones.sort((a: any, b: any) => Number(a.leida) - Number(b.leida));
        this.cdr.detectChanges();

        this.notificationService.mostrarToast({
          id: Date.now(),
          type: 'success',
          mensaje: 'Todas las notificaciones marcadas como leídas',
          leida: false
        });
      },
      error: (err) => console.error('Error al marcar todas como leídas', err)
    });
  }

  /**
   * Función para navegar a la página de ajustes en la sección de notificaciones.
   */
  goToSettings() {
    this.router.navigate(['/ajustes-aplicacion'], { fragment: 'notificaciones-section' });
  }

  /**
   * Función para navegar a la página de chat relacionada con una notificación específica.
   * @param n --> Notificación para la cual se quiere ir al chat. 
   * Si la notificación no ha sido leída, se marca como leída antes de navegar.
   * Se navega a la ruta de chat pasando el ID de la conversación asociado a la notificación.
   * 
   */
  irAlChat(n: any) {
    if (!n.leida) {
      this.toggleLeida(n);
    }
    // Navega a la ruta de chat pasando el ID de la conversación
    this.router.navigate(['/chat', n.conversacion_id]);
  }


  /**
   * Función para eliminar todas las notificaciones del usuario. Se muestra un mensaje de confirmación antes de proceder a eliminar.
   * Solo se muestra el botón de eliminar todo si hay notificaciones en la lista.
   */
  borrarTodas() {
    const usuarioId = this.userData.usuario.id;

    const titulo = 'Vas a eliminar todas tus notificaciones';
    const mensaje = 'Esta acción no se puede deshacer. Se eliminarán todas tus notificaciones y no podrás recuperarlas. Si estás seguro de que quieres continuar, haz clic en "Aceptar".';

    const dialogRef = this.dialog.open(HelpModalComponent, {
      data: { title: titulo, message: mensaje, showAcceptButton: true },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((confirmar: any) => {
      if (confirmar) {
        this.notificationService.eliminarTodasNotificaciones(usuarioId).subscribe({
        next: () => {
            this.notificaciones = [];
            this.cdr.detectChanges();
            this.notificationService.mostrarToast({
              id: Date.now(),
              type: 'success',
              mensaje: 'Se han eliminado todas las notificaciones',
              leida: false
            });
          }, error: (err) => console.error('Error al limpiar historial:', err)
        });
      }
    });
  }

  /**
   * Función para eliminar una sola notificación por su ID.
   * @param id --> ID de la notificación a eliminar.
   */
  borrarUna(id: number) {
    this.notificationService.eliminarNotificacion(id).subscribe({
      next: () => {
        this.notificaciones = this.notificaciones.filter(notificacion => notificacion.id !== id);
        this.cdr.detectChanges();
        this.notificationService.mostrarToast({
          id: Date.now(),
          type: 'success',
          mensaje: 'Se ha eliminado la notificación',
          leida: false
        });
      }
    });
  }

  /**
   * Función que se ejecuta al destruir el componente. Se utiliza para limpiar los recursos y evitar fugas de memoria.
   * Se emite un valor en el Subject destroy$ para indicar que el componente se está destruyendo, 
   * lo que hace que cualquier suscripción que utilice takeUntil(this.destroy$) se complete automáticamente.
   * Luego se completa el Subject destroy$ para liberar los recursos asociados.
   */
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
