import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { addIcons } from 'ionicons';
import { warningOutline, closeOutline, cloudUploadOutline } from 'ionicons/icons';
import { firstValueFrom } from 'rxjs';
import { 
  IncidenciasService, 
  CategoriaIncidencia, 
  SubCategoriasIncidencias,
  IncidenciaPayload 
} from 'src/app/core/incidencias-service/incidencias-service.service';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-abrir-incidencia-modal',
  templateUrl: './abrir-incidencia-modal.component.html',
  styleUrls: ['./abrir-incidencia-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonicModule, TranslateModule, SpinnerComponent]
})
export class AbrirIncidenciaModalComponent implements OnInit {
  @Input() categoria: CategoriaIncidencia = 'APP';
  @Input() subcategoriaPredeterminada: SubCategoriasIncidencias = 'ERROR_TECNICO_GENERAL';
  @Input() viajeId?: number | null = null;
  @Input() usuarioReportadoId?: number | null = null;
  @Input() tituloContexto: string = 'Reportar Incidencia';

  incidenciaForm!: FormGroup;
  enviando: boolean = false;
  archivosAdjuntos: File[] = [];

  subcategoriasDisponibles: { valor: SubCategoriasIncidencias; etiqueta: string }[] = [];

  constructor(
    private modalCtrl: ModalController,
    private incidenciasService: IncidenciasService
  ) {
    addIcons({ warningOutline, closeOutline, cloudUploadOutline });
  }

  ngOnInit() {
    this.configurarSubcategorias();

    this.incidenciaForm = new FormGroup({
      subcategoria: new FormControl(this.subcategoriaPredeterminada, [Validators.required]),
      resumen: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(15)])
    });
  }

  configurarSubcategorias() {
    if (this.categoria === 'USUARIO') {
      this.subcategoriasDisponibles = [
        { valor: 'COMPORTAMIENTO', etiqueta: 'Comportamiento inapropiado' },
        { valor: 'VIAJE_PRESENCIA_UBICACION', etiqueta: 'No presentado / Punto de encuentro' },
        { valor: 'OTRO', etiqueta: 'Otro motivo sobre usuario' }
      ];
    } else {
      this.subcategoriasDisponibles = [
        { valor: 'CREACION_VIAJE', etiqueta: 'Error al crear/publicar viaje' },
        { valor: 'PAGO', etiqueta: 'Problemas con pagos o monedero' },
        { valor: 'ERROR_TECNICO_GENERAL', etiqueta: 'Fallo técnico general' },
        { valor: 'OTRO', etiqueta: 'Otras consultas' }
      ];
    }
  }

  /**
   * Captura los archivos seleccionados por el usuario (máximo 3)
   */
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const filesArray = Array.from(input.files);
      for (const file of filesArray) {
        if (this.archivosAdjuntos.length < 3) {
          this.archivosAdjuntos.push(file);
        }
      }
    }
  }

  /**
   * Elimina un archivo de la lista de adjuntos locales
   */
  eliminarAdjunto(index: number) {
    this.archivosAdjuntos.splice(index, 1);
  }

  enviarIncidencia() {
    if (this.incidenciaForm.invalid) {
      this.incidenciaForm.markAllAsTouched();
      return;
    }

    this.enviando = true;
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const usuarioRemitenteId = userData?.usuario?.id;

    const payload: IncidenciaPayload = {
      categoria: this.categoria,
      subcategoria: this.incidenciaForm.value.subcategoria,
      tipo_apertura: 'USUARIO',
      usuario_remitente_id: usuarioRemitenteId,
      usuario_reportado_id: this.usuarioReportadoId || null,
      viaje_id: this.viajeId || null,
      resumen: this.incidenciaForm.value.resumen,
      descripcion: this.incidenciaForm.value.descripcion
    };

    this.incidenciasService.crearIncidencia(payload).subscribe({
      next: (res) => {
        if (this.archivosAdjuntos.length > 0 && res?.id) {
          this.subirAdjuntosPendientes(res.id);
        } else {
          this.enviando = false;
          this.modalCtrl.dismiss({ enviada: true, incidencia: res }, 'confirm');
        }
      },
      error: (err) => {
        console.error('Error guardando incidencia:', err);
        this.enviando = false;
      }
    });
  }

  private async subirAdjuntosPendientes(incidenciaId: number) {
    try {
      const uploads = this.archivosAdjuntos.map(file => 
        firstValueFrom(this.incidenciasService.subirAdjunto(incidenciaId, file))
      );
      await Promise.all(uploads);
    } catch (error) {
      console.error('Error al subir adjuntos:', error);
    } finally {
      this.enviando = false;
      this.modalCtrl.dismiss({ enviada: true }, 'confirm');
    }
  }

  cerrarModal() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
}