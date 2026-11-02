import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController, ModalController } from '@ionic/angular';
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

export interface Incidencia {
  id: string;
  usuarioReporta: { nombre: string; email: string; foto?: string };
  usuarioReportado?: { nombre: string; email: string };
  tipo: 'Conducta' | 'Pagos/Monedero' | 'Viaje/Reserva' | 'Fallo Técnico' | 'Otro';
  asunto: string;
  descripcion: string;
  fecha: string;
  estado: 'pendiente' | 'en_revision' | 'resuelta' | 'desestimada';
  prioridad: 'alta' | 'media' | 'baja';
  respuestaAdmin?: string;
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
  incidenciaSeleccionada: Incidencia | null = null;
  respuestaTexto: string = '';

  // Datos mock iniciales para pruebas del centro de incidencias
  listaIncidencias: Incidencia[] = [
    {
      id: 'INC-1001',
      usuarioReporta: { nombre: 'Carla R.', email: 'carla@love.es' },
      usuarioReportado: { nombre: 'Santi M.', email: 'santi@trans.org' },
      tipo: 'Conducta',
      asunto: 'Usuario no se presentó en el punto de encuentro',
      descripcion: 'El conductor esperó 20 minutos en el punto acordado pero el pasajero no respondió a las llamadas ni apareció.',
      fecha: '29/10/2026 18:30',
      estado: 'pendiente',
      prioridad: 'alta'
    },
    {
      id: 'INC-1002',
      usuarioReporta: { nombre: 'Alex G.', email: 'alex@pride.com' },
      tipo: 'Pagos/Monedero',
      asunto: 'Error en la recarga mediante PayPal',
      descripcion: 'Se descontó el saldo de mi cuenta de PayPal pero no se ha reflejado en el Monedero de GoGuay.',
      fecha: '28/10/2026 12:15',
      estado: 'en_revision',
      prioridad: 'media'
    },
    {
      id: 'INC-1003',
      usuarioReporta: { nombre: 'Lucía B.', email: 'lucia@app.es' },
      tipo: 'Fallo Técnico',
      asunto: 'No se genera el código QR de verificación',
      descripcion: 'Al pulsar el botón flotante en mi viaje activo la pantalla se queda en blanco sin cargar el QR.',
      fecha: '25/10/2026 09:40',
      estado: 'resuelta',
      prioridad: 'baja',
      respuestaAdmin: 'Se ha corregido la caché de la aplicación en la versión 2.4.1.'
    }
  ];

  incidenciasFiltradas: Incidencia[] = [];

  constructor(public navCtrl: NavController) {
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
    this.aplicarFiltros();
  }

  aplicarFiltros() {
    this.incidenciasFiltradas = this.listaIncidencias.filter(item => {
      const coincideEstado = this.filtroEstado === 'todas' || item.estado === this.filtroEstado;
      const q = this.busquedaQuery.toLowerCase().trim();
      const coincideBusqueda = !q || 
        item.id.toLowerCase().includes(q) ||
        item.asunto.toLowerCase().includes(q) ||
        item.usuarioReporta.nombre.toLowerCase().includes(q) ||
        item.usuarioReporta.email.toLowerCase().includes(q);

      return coincideEstado && coincideBusqueda;
    });
  }

  verDetalleIncidencia(item: Incidencia) {
    this.incidenciaSeleccionada = item;
    this.respuestaTexto = item.respuestaAdmin || '';
  }

  cerrarDetalle() {
    this.incidenciaSeleccionada = null;
    this.respuestaTexto = '';
  }

  cambiarEstado(nuevoEstado: 'pendiente' | 'en_revision' | 'resuelta' | 'desestimada') {
    if (!this.incidenciaSeleccionada) return;
    this.incidenciaSeleccionada.estado = nuevoEstado;
    if (this.respuestaTexto.trim()) {
      this.incidenciaSeleccionada.respuestaAdmin = this.respuestaTexto.trim();
    }
    this.aplicarFiltros();
  }

  guardarRespuesta() {
    if (!this.incidenciaSeleccionada || !this.respuestaTexto.trim()) return;
    this.incidenciaSeleccionada.respuestaAdmin = this.respuestaTexto.trim();
    if (this.incidenciaSeleccionada.estado === 'pendiente') {
      this.incidenciaSeleccionada.estado = 'en_revision';
    }
    this.aplicarFiltros();
  }

  volverDashboard() {
    this.navCtrl.navigateBack(['/admin-app']);
  }
}