import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { 
  warningOutline, 
  searchOutline, 
  filterOutline, 
  chatbubbleEllipsesOutline, 
  checkmarkCircleOutline, 
  closeCircleOutline, 
  timeOutline, 
  personOutline, 
  arrowBackOutline,
  alertCircleOutline
} from 'ionicons/icons';
import { NavbarAdmin } from '../shared-admin/navbar-admin/navbar-admin.page';
import { IncidenciasService, EstadoIncidencia } from 'src/app/core/incidencias-service/incidencias-service.service';

export interface IncidenciaAdmin {
  id: number;
  categoria: string;
  subcategoria: string;
  resumen: string;
  descripcion: string;
  estado: EstadoIncidencia;
  created_at: string;
  updated_at: string;
  usuario_remitente_id: number;
  usuario_reportado_id?: number | null;
  viaje_id?: number | null;
  resolucion_notas?: string;
  motivo_cancelacion?: string;
  usuario_remitente?: { id: number; nombre: string; email: string };
  usuario_reportado?: { id: number; nombre: string; email: string };
  adjuntos?: Array<{ id: number; url_archivo: string }>;
  mensajes?: Array<{ id: number; emisor_id: number; mensaje: string; created_at: string }>;
}

@Component({
  selector: 'app-incidencias-admin',
  templateUrl: './incidencias-admin.page.html',
  styleUrls: ['./incidencias-admin.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, NavbarAdmin]
})
export class IncidenciasAdminPage implements OnInit {
  filtroEstado: string = 'todas';
  busquedaQuery: string = '';
  incidenciaSeleccionada: IncidenciaAdmin | null = null;
  respuestaTexto: string = '';
  cargando: boolean = true;
  guardando: boolean = false;

  listaIncidencias: IncidenciaAdmin[] = [];
  incidenciasFiltradas: IncidenciaAdmin[] = [];

  constructor(
    public navCtrl: NavController,
    private incidenciasService: IncidenciasService
  ) {
    addIcons({
      warningOutline,
      searchOutline,
      filterOutline,
      chatbubbleEllipsesOutline,
      checkmarkCircleOutline,
      closeCircleOutline,
      timeOutline,
      personOutline,
      arrowBackOutline,
      alertCircleOutline
    });
  }

  ngOnInit() {
    this.cargarTodasLasIncidencias();
  }

  cargarTodasLasIncidencias() {
    this.cargando = true;
    this.incidenciasService.obtenerTodasIncidenciasAdmin().subscribe({
      next: (data: IncidenciaAdmin[]) => {
        this.listaIncidencias = data || [];
        this.aplicarFiltros();
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al obtener incidencias globales:', err);
        this.cargando = false;
      }
    });
  }

  aplicarFiltros() {
    this.incidenciasFiltradas = this.listaIncidencias.filter(item => {
      const coincideEstado = this.filtroEstado === 'todas' || item.estado.toLowerCase() === this.filtroEstado.toLowerCase();
      const q = this.busquedaQuery.toLowerCase().trim();
      
      const coincideBusqueda = !q || 
        item.id.toString().includes(q) ||
        item.resumen.toLowerCase().includes(q) ||
        item.descripcion.toLowerCase().includes(q) ||
        (item.usuario_remitente?.nombre && item.usuario_remitente.nombre.toLowerCase().includes(q)) ||
        (item.usuario_remitente?.email && item.usuario_remitente.email.toLowerCase().includes(q));

      return coincideEstado && coincideBusqueda;
    });
  }

  verDetalleIncidencia(item: IncidenciaAdmin) {
    this.incidenciaSeleccionada = item;
    this.respuestaTexto = item.resolucion_notas || '';
  }

  cerrarDetalle() {
    this.incidenciaSeleccionada = null;
    this.respuestaTexto = '';
  }

  cambiarEstado(nuevoEstado: EstadoIncidencia) {
    if (!this.incidenciaSeleccionada) return;

    this.guardando = true;
    this.incidenciasService.cambiarEstadoIncidencia(
      this.incidenciaSeleccionada.id,
      nuevoEstado,
      undefined,
      this.respuestaTexto.trim() || undefined
    ).subscribe({
      next: (res) => {
        if (this.incidenciaSeleccionada) {
          this.incidenciaSeleccionada.estado = nuevoEstado;
        }
        this.guardando = false;
        this.aplicarFiltros();
      },
      error: (err) => {
        console.error('Error cambiando el estado:', err);
        this.guardando = false;
      }
    });
  }

  guardarRespuesta() {
    if (!this.incidenciaSeleccionada) return;

    this.guardando = true;
    const estadoActual = this.incidenciaSeleccionada.estado;
    // Si estaba en INICIADA y se escribe una respuesta, pasa automáticamente a EN_REVISION
    const nuevoEstado: EstadoIncidencia = estadoActual === 'INICIADA' ? 'EN_REVISION' : estadoActual;

    this.incidenciasService.cambiarEstadoIncidencia(
      this.incidenciaSeleccionada.id,
      nuevoEstado,
      undefined,
      this.respuestaTexto.trim()
    ).subscribe({
      next: (res) => {
        if (this.incidenciaSeleccionada) {
          this.incidenciaSeleccionada.resolucion_notas = this.respuestaTexto.trim();
          this.incidenciaSeleccionada.estado = nuevoEstado;
        }
        this.guardando = false;
        this.aplicarFiltros();
      },
      error: (err) => {
        console.error('Error guardando la respuesta:', err);
        this.guardando = false;
      }
    });
  }

  formatearMotivo(motivo?: string): string {
    if (!motivo) return '';
    if (motivo === 'POR_USUARIO') return 'Por el usuario';
    return motivo.replace('_', ' ');
  }

  volverDashboard() {
    this.navCtrl.navigateBack(['/admin-app']);
  }
}