import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
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
  motivo_cancelacion?: string;
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
    private alertController: AlertController,
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
      sendOutline,
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
    } else if (this.filtroEstado === 'iniciada') {
      this.incidenciasFiltradas = this.incidencias.filter(
        (i) => i.estado === 'INICIADA' || i.estado === 'EN_REVISION'
      );
    } else if (this.filtroEstado === 'finalizada') {
      this.incidenciasFiltradas = this.incidencias.filter(
        (i) => i.estado === 'FINALIZADA' || i.estado === 'CANCELADA'
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

  /**
   * Pide confirmación al usuario para cancelar la incidencia
   */
  async confirmarCancelacion(item: IncidenciaItem) {
    const alert = await this.alertController.create({
      header: 'Cancelar Incidencia',
      message: `¿Estás seguro de que deseas cancelar la incidencia #${item.id}? Soporte no continuará revisando esta consulta.`,
      cssClass: 'goguay-alert-custom',
      buttons: [
        {
          text: 'No, mantener',
          role: 'cancel',
          cssClass: 'btn-alert-cancel'
        },
        {
          text: 'Sí, cancelar',
          role: 'destructive',
          cssClass: 'btn-alert-confirm-danger',
          handler: () => {
            this.cancelarIncidencia(item);
          }
        }
      ]
    });

    await alert.present();
  }

  /**
   * Ejecuta la llamada al servicio para cancelar la incidencia
   */
  private cancelarIncidencia(item: IncidenciaItem) {
    this.incidenciasService.cancelarIncidenciaPorUsuario(item.id).subscribe({
      next: (incidenciaActualizada) => {
        item.estado = 'CANCELADA';
        item.motivo_cancelacion = 'POR_USUARIO';
        this.aplicarFiltro();
      },
      error: (err) => {
        console.error('Error al cancelar la incidencia:', err);
      }
    });
  }

  volver() {
    this.navCtrl.back();
  }

  /**
   * Mapea los valores en Enum a texto amigable para la interfaz de usuario
   */
  formatearMotivoCancelacion(motivo?: string): string {
    if (!motivo) return '';
    if (motivo === 'POR_USUARIO') {
      return 'Por el usuario';
    }
    return motivo.replace('_', ' ');
  }
}