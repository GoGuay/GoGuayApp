import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController, ToastController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  peopleOutline,
  warningOutline,
  alertCircleOutline,
  shieldCheckmarkOutline,
  lockClosedOutline,
  lockOpenOutline,
  eyeOutline,
  star,
  carOutline,
  personOutline,
  closeOutline,
  checkmarkCircleOutline,
  banOutline,
} from 'ionicons/icons';
import { NavbarAdmin } from '../shared-admin/navbar-admin/navbar-admin.page';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';

@Component({
  selector: 'app-gestion-usuarios-admin',
  standalone: true,
  templateUrl: './gestion-usuarios-admin.page.html',
  styleUrls: ['./gestion-usuarios-admin.page.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [CommonModule, FormsModule, IonicModule, NavbarAdmin],
})
export class GestionUsuariosAdminPage implements OnInit {
  usuarios: any[] = [];
  usuariosFiltrados: any[] = [];
  cargando: boolean = true;
  avatarDefault: string = '../../../assets/User-Profile-PNG-Image.png';

  // Filtros
  textoBusqueda: string = '';
  filtroNivel: 'TODOS' | 'ALERTA' | 'CRITICO' | 'SUSPENDIDO' = 'TODOS';

  // Contadores de cabecera
  countAdvertencia: number = 0; // 6 a 13 pts
  countCritico: number = 0;     // 14 a 19 pts
  countSuspendido: number = 0;  // >= 20 pts o bloqueado manual

  // Modal Detalle Completo
  modalDetalleAbierto: boolean = false;
  usuarioSeleccionado: any = null;

  // Modal Aplicar Sanción
  modalSancionAbierto: boolean = false;
  motivoSancion: string = '';
  diasSuspension: number = 7;

  constructor(
    private userService: UserServicesService,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private cdr: ChangeDetectorRef
  ) {
    addIcons({
      arrowBackOutline,
      peopleOutline,
      warningOutline,
      alertCircleOutline,
      shieldCheckmarkOutline,
      lockClosedOutline,
      lockOpenOutline,
      eyeOutline,
      star,
      carOutline,
      personOutline,
      closeOutline,
      checkmarkCircleOutline,
      banOutline,
    });
  }

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.cargando = true;
    this.userService.obtenerUsuarios().subscribe({
      next: (res: any[]) => {
        this.usuarios = (res || []).map((u) => ({
          ...u,
          puntos_conductor: u.puntos_conductor ?? 0,
          puntos_pasajero: u.puntos_pasajero ?? 0,
          maxPuntos: Math.max(u.puntos_conductor ?? 0, u.puntos_pasajero ?? 0),
        }));

        this.usuarios.sort((a, b) => b.maxPuntos - a.maxPuntos);

        this.calcularMetricasAlertas();
        this.aplicarFiltros();
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error cargando usuarios:', err);
        this.cargando = false;
      },
    });
  }

  calcularMetricasAlertas() {
    this.countAdvertencia = this.usuarios.filter((u) => u.maxPuntos >= 6 && u.maxPuntos < 14).length;
    this.countCritico = this.usuarios.filter((u) => u.maxPuntos >= 14 && u.maxPuntos < 20).length;
    this.countSuspendido = this.usuarios.filter((u) => u.maxPuntos >= 20 || u.ya_ha_sido_suspendido).length;
  }

  cambiarFiltroNivel(nivel: 'TODOS' | 'ALERTA' | 'CRITICO' | 'SUSPENDIDO') {
    this.filtroNivel = nivel;
    this.aplicarFiltros();
  }

  onBuscar(event: any) {
    this.textoBusqueda = (event.target.value || '').toLowerCase().trim();
    this.aplicarFiltros();
  }

  aplicarFiltros() {
    this.usuariosFiltrados = this.usuarios.filter((u) => {
      const coincideTexto =
        !this.textoBusqueda ||
        (u.nombre || '').toLowerCase().includes(this.textoBusqueda) ||
        (u.apellidos || '').toLowerCase().includes(this.textoBusqueda) ||
        (u.email || '').toLowerCase().includes(this.textoBusqueda);

      if (!coincideTexto) return false;

      switch (this.filtroNivel) {
        case 'ALERTA':
          return u.maxPuntos >= 6 && u.maxPuntos < 14;
        case 'CRITICO':
          return u.maxPuntos >= 14 && u.maxPuntos < 20;
        case 'SUSPENDIDO':
          return u.maxPuntos >= 20 || u.ya_ha_sido_suspendido;
        default:
          return true;
      }
    });
  }

  getInfoNivel(puntos: number): { texto: string; clase: string; colorBarra: string } {
    if (puntos >= 20) {
      return { texto: 'Límite alcanzado (20/20)', clase: 'badge-danger-dark', colorBarra: '#d32f2f' };
    }
    if (puntos >= 14) {
      return { texto: 'Crítico · Nivel 1', clase: 'badge-critico', colorBarra: '#ef5350' };
    }
    if (puntos >= 6) {
      return { texto: 'Bajo Advertencia', clase: 'badge-advertencia', colorBarra: '#ffa726' };
    }
    return { texto: 'Óptimo', clase: 'badge-optimo', colorBarra: '#66bb6a' };
  }

  abrirDetalleUsuario(user: any) {
    this.usuarioSeleccionado = user;
    this.modalDetalleAbierto = true;
  }

  cerrarDetalleUsuario() {
    this.modalDetalleAbierto = false;
    this.usuarioSeleccionado = null;
  }

  abrirModalSancion(user: any) {
    this.usuarioSeleccionado = user;
    this.motivoSancion = user.motivo_bloqueo || '';
    this.diasSuspension = 7;
    this.modalSancionAbierto = true;
  }

  cerrarModalSancion() {
    this.modalSancionAbierto = false;
  }

  async confirmarSancion() {
    if (!this.usuarioSeleccionado) return;

    const suspender = !this.usuarioSeleccionado.ya_ha_sido_suspendido;
    const fechaHasta = new Date();
    fechaHasta.setDate(fechaHasta.getDate() + Number(this.diasSuspension));

    this.usuarioSeleccionado.ya_ha_sido_suspendido = suspender;
    this.usuarioSeleccionado.motivo_bloqueo = suspender ? this.motivoSancion : null;
    this.usuarioSeleccionado.bloqueado_hasta = suspender ? fechaHasta.toISOString() : null;

    this.calcularMetricasAlertas();
    this.aplicarFiltros();
    this.modalSancionAbierto = false;

    const toast = await this.toastCtrl.create({
      message: suspender
        ? `Usuario ${this.usuarioSeleccionado.nombre} sancionado correctamente.`
        : `Restricción levantada para ${this.usuarioSeleccionado.nombre}.`,
      duration: 2500,
      color: suspender ? 'warning' : 'success',
      position: 'bottom',
    });
    await toast.present();
  }

  volverAdmin() {
    this.navCtrl.navigateBack(['/admin-app']);
  }
}