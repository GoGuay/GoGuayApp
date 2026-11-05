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
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';
import { IncidenciasService } from 'src/app/core/incidencias-service/incidencias-service.service';

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
  enviandoMensaje?: boolean;
}

@Component({
  selector: 'app-incidencias-usuario',
  templateUrl: './incidencias-usuario.page.html',
  styleUrls: ['./incidencias-usuario.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, NavbarComponent]
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
    private funcionesComunes: FuncionesComunes,
    private incidenciasService: IncidenciasService
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
    if (!this.userId) return;
    this.cargando = true;

    this.incidenciasService.obtenerIncidenciasUsuario(this.userId).subscribe({
      next: (data: any[]) => {
        this.incidencias = (data || []).map((item) => ({
          ...item,
          desplegado: false,
          nuevoMensaje: ''
        }));
        this.aplicarFiltro();
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error cargando incidencias:', err);
        this.cargando = false;
      }
    });
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
    if (!item.nuevoMensaje || !item.nuevoMensaje.trim() || !this.userId || item.enviandoMensaje) return;

    const texto = item.nuevoMensaje.trim();
    item.enviandoMensaje = true;

    this.incidenciasService.enviarMensajeIncidencia(item.id, this.userId, texto).subscribe({
      next: (nuevoMsgServidor) => {
        item.mensajes.push(nuevoMsgServidor);
        item.nuevoMensaje = '';
        item.enviandoMensaje = false;
      },
      error: (err) => {
        console.error('Error al enviar mensaje de incidencia:', err);
        item.enviandoMensaje = false;
      }
    });
  }

  volver() {
    this.navCtrl.back();
  }
}