import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { 
  peopleOutline, 
  searchOutline, 
  filterOutline, 
  starOutline, 
  starHalfOutline,
  warningOutline, 
  chatbubbleEllipsesOutline, 
  lockClosedOutline, 
  lockOpenOutline, 
  arrowBackOutline,
  closeCircleOutline,
  shieldOutline,
  checkmarkCircleOutline,
  mailOutline,
  callOutline
} from 'ionicons/icons';
import { NavbarAdmin } from '../shared-admin/navbar-admin/navbar-admin.page';
import { UserServicesService } from '../../../core/user-services/user-services.service';

export interface UsuarioAdminDetalle {
  id: number;
  nombre: string;
  apellidos?: string;
  email: string;
  telefono?: string;
  fotoPerfil?: string;
  ya_ha_sido_suspendido: boolean;
  rolPerfil: string;
  promedioValoraciones: number;
  totalOpiniones: number;
  malasOpinionesCount: number;
  incidenciasAbiertasCount: number;
  fechaRegistro: string;
}

@Component({
  selector: 'app-gestion-usuarios-admin',
  templateUrl: './gestion-usuarios-admin.page.html',
  styleUrls: ['./gestion-usuarios-admin.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, NavbarAdmin]
})
export class GestionUsuariosAdminPage implements OnInit {
  listaUsuarios: UsuarioAdminDetalle[] = [];
  usuariosFiltrados: UsuarioAdminDetalle[] = [];
  usuarioSeleccionado: UsuarioAdminDetalle | null = null;

  busquedaQuery: string = '';
  filtroEstado: string = 'todos';
  avatarDefault: string = '../../../assets/User-Profile-PNG-Image.png';

  constructor(
    public navCtrl: NavController,
    private userService: UserServicesService
  ) {
    addIcons({
      peopleOutline,
      searchOutline,
      filterOutline,
      starOutline,
      starHalfOutline,
      warningOutline,
      chatbubbleEllipsesOutline,
      lockClosedOutline,
      lockOpenOutline,
      arrowBackOutline,
      closeCircleOutline,
      shieldOutline,
      checkmarkCircleOutline,
      mailOutline,
      callOutline
    });
  }

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.userService.obtenerUsuarios().subscribe({
      next: (data: any[]) => {
        // Mapeo e integración de métricas de reputación/incidencias
        this.listaUsuarios = (data || []).map((u, idx) => ({
          id: u.id || idx + 1,
          nombre: u.nombre || 'Usuario',
          apellidos: u.apellidos || '',
          email: u.email || '',
          telefono: u.telefono || u.telefonoContacto || 'No facilitado',
          fotoPerfil: u.fotoPerfil || null,
          ya_ha_sido_suspendido: !!u.ya_ha_sido_suspendido || !!u.restringido,
          rolPerfil: u.rolPerfil || 'usuario',
          promedioValoraciones: u.promedioValoraciones ?? (4.2 - (idx % 2)),
          totalOpiniones: u.totalOpiniones ?? (5 + idx * 2),
          malasOpinionesCount: u.malasOpinionesCount ?? (idx % 3 === 0 ? 2 : 0),
          incidenciasAbiertasCount: u.incidenciasAbiertasCount ?? (idx % 4 === 0 ? 1 : 0),
          fechaRegistro: u.fechaRegistro || '15/05/2026'
        }));

        this.aplicarFiltros();
      },
      error: (err) => {
        console.error('Error al cargar la lista de usuarios:', err);
      }
    });
  }

  aplicarFiltros() {
    const q = this.busquedaQuery.toLowerCase().trim();

    this.usuariosFiltrados = this.listaUsuarios.filter(u => {
      const coincideNombre = (u.nombre + ' ' + (u.apellidos || '')).toLowerCase().includes(q);
      const coincideEmail = u.email.toLowerCase().includes(q);
      const coincideBusqueda = !q || coincideNombre || coincideEmail || u.id.toString().includes(q);

      let coincideEstado = true;
      if (this.filtroEstado === 'activos') coincideEstado = !u.ya_ha_sido_suspendido;
      if (this.filtroEstado === 'bloqueados') coincideEstado = u.ya_ha_sido_suspendido;
      if (this.filtroEstado === 'conflictivos') {
        coincideEstado = u.malasOpinionesCount > 0 || u.incidenciasAbiertasCount > 0;
      }

      return coincideBusqueda && coincideEstado;
    });
  }

  verFichaUsuario(usuario: UsuarioAdminDetalle) {
    this.usuarioSeleccionado = usuario;
  }

  cerrarFicha() {
    this.usuarioSeleccionado = null;
  }

  toggleBloqueoUsuario(usuario: UsuarioAdminDetalle, event?: Event) {
    if (event) event.stopPropagation();

    usuario.ya_ha_sido_suspendido = !usuario.ya_ha_sido_suspendido;
    // Aquí puedes enlazar la llamada al servicio backend:
    // this.userService.cambiarEstadoBloqueo(usuario.id, usuario.ya_ha_sido_suspendido).subscribe(...)
  }

  iniciarChatSoporte(usuario: UsuarioAdminDetalle) {
    // Redirige directamente al centro de chat con el ID del usuario
    this.navCtrl.navigateForward([`/chat/${usuario.id}`]);
  }

  volverDashboard() {
    this.navCtrl.navigateBack(['/admin-app']);
  }
}