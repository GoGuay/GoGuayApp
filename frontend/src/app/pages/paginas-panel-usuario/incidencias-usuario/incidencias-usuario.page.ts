import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { 
  warningOutline, 
  timeOutline, 
  checkmarkCircleOutline, 
  closeCircleOutline, 
  chatbubblesOutline, 
  attachOutline,
  chevronDownOutline,
  chevronUpOutline,
  arrowBackOutline,
  sendOutline
} from 'ionicons/icons';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';

export interface IncidenciaItem {
  id: number;
  categoria: string;
  subcategoria: string;
  resumen: string;
  descripcion: string;
  estado: string;
  created_at: string;
  updated_at: string;
  resolucion_notas?: string;
  adjuntos: Array<{ id: number; url_archivo: string }>;
  mensajes: Array<{ id: number; emisor_id: number; mensaje: string; created_at: string }>;
  desplegado?: boolean;
  nuevoMensaje?: string;
}

@Component({
  selector: 'app-incidencias-usuario',
  templateUrl: './incidencias-usuario.page.html',
  styleUrls: ['./incidencias-usuario.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, NavbarComponent, FooterComponent]
})
export class IncidenciasUsuarioPage implements OnInit {
  incidencias: IncidenciaItem[] = [];
  incidenciasFiltradas: IncidenciaItem[] = [];
  filtroEstado: string = 'todas';
  cargando: boolean = true;
  userId: number | null = null;

  constructor(
    private navCtrl: NavController,
    private userService: UserServicesService,
    private funcionesComunes: FuncionesComunes
  ) {
    addIcons({
      warningOutline,
      timeOutline,
      checkmarkCircleOutline,
      closeCircleOutline,
      chatbubblesOutline,
      attachOutline,
      chevronDownOutline,
      chevronUpOutline,
      arrowBackOutline,
      sendOutline
    });
  }

  ngOnInit() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.userId = userData?.usuario?.id || null;

    if (this.userId) {
      this.cargarIncidencias();
    } else {
      this.cargando = false;
    }
  }

  cargarIncidencias() {
    this.cargando = true;
    setTimeout(() => {
      this.incidencias = [
        {
          id: 1,
          categoria: 'USUARIO',
          subcategoria: 'CONDUCTA',
          resumen: 'Pasajero no se presentó al punto de encuentro',
          descripcion: 'Esperé 15 minutos en el lugar acordado y el pasajero no respondió al chat ni acudió al coche.',
          estado: 'INICIADA',
          created_at: '2026-11-02T10:30:00',
          updated_at: '2026-11-02T10:30:00',
          adjuntos: [],
          mensajes: [
            { id: 1, emisor_id: 99, mensaje: 'Hemos recibido tu reporte. Un agente revisará lo sucedido.', created_at: '2026-11-02T11:00:00' }
          ]
        },
        {
          id: 2,
          categoria: 'PAGOS',
          subcategoria: 'MONEDERO',
          resumen: 'Cobro duplicado en reserva',
          descripcion: 'Se me ha realizado dos veces el cargo al intentar reservar el trayecto a Madrid.',
          estado: 'RESUELTA',
          created_at: '2026-10-28T16:15:00',
          updated_at: '2026-10-29T09:20:00',
          resolucion_notas: 'Se ha devuelto el importe duplicado a tu Monedero GoGuay.',
          adjuntos: [{ id: 10, url_archivo: 'https://via.placeholder.com/150' }],
          mensajes: []
        }
      ];

      this.aplicarFiltro();
      this.cargando = false;
    }, 600);
  }

  aplicarFiltro() {
    if (this.filtroEstado === 'todas') {
      this.incidenciasFiltradas = [...this.incidencias];
    } else {
      this.incidenciasFiltradas = this.incidencias.filter(
        (i) => i.estado.toLowerCase() === this.filtroEstado.toLowerCase()
      );
    }
  }

  toggleDesplegar(item: IncidenciaItem) {
    item.desplegado = !item.desplegado;
  }

  enviarRespuesta(item: IncidenciaItem) {
    if (!item.nuevoMensaje || !item.nuevoMensaje.trim()) return;

    const texto = item.nuevoMensaje.trim();
    item.nuevoMensaje = '';

    item.mensajes.push({
      id: Date.now(),
      emisor_id: this.userId || 0,
      mensaje: texto,
      created_at: new Date().toISOString()
    });
  }

  volver() {
    this.navCtrl.back();
  }
}