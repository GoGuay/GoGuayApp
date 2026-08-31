import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { IonicModule } from '@ionic/angular';
import { NavbarAdmin } from '../shared-admin/navbar-admin/navbar-admin.page';
import { Evento } from 'src/app/models/eventos/eventos';
import { EventosServices } from 'src/app/core/eventos-services/eventos-services.service';
import { ToastModule } from 'primeng/toast';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-eventos-admin',
  templateUrl: './eventos-admin.page.html',
  styleUrls: ['./eventos-admin.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, MatDialogModule, NavbarAdmin, ToastModule],
})
export class EventosAdmin implements OnInit {
  eventForm: FormGroup;
  listaEventos: Evento[] = [];
  showForm = false;
  isEditing = false;
  editingEventId: number | null = null;

  constructor(
    private eventosService: EventosServices,
    private translate: TranslateService,
    private messageService: MessageService
  ) {
    this.eventForm = new FormGroup({
      nombre_evento: new FormControl('', [Validators.required]),
      ciudad: new FormControl('', [Validators.required]),
      fecha_inicio: new FormControl('', [Validators.required]),
      fecha_fin: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      imagen: new FormControl('', [Validators.required]),
      enlace_info: new FormControl(''),
    });
  }

  ngOnInit() {
    this.obtenerEventos();
  }

  /**
   * Función que se utiliza mara mostrar u ocultar el menú de añadir / editar un evento.
   */
  toggleForm() {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.resetForm();
    }
  }

  /**
   * Función para resetear el formularión del evento.
   *
   */
  private resetForm() {
    this.isEditing = false;
    this.editingEventId = null;
    this.eventForm.reset();
  }

  /**
   * Función para obtener todos los eventos de BBDD
   */
  obtenerEventos() {
    this.eventosService.obtenerTodosLosEventos().subscribe({
      next: (resultado) => (this.listaEventos = resultado),
      error: (err) => console.error('Error al obtener eventos', err),
    });
  }

  /**
   * Función para eliminar un evento seleccionado.
   *
   * @param id --> Recibe el id del evento seleccionado.
   */
  eliminarEvento(id: number) {
    const eventoAEliminar = this.listaEventos.find((e) => e.id === id);
    if (eventoAEliminar) {
      this.eventosService.eliminarEvento(id, eventoAEliminar).subscribe({
        next: () => {
          this.listaEventos = this.listaEventos.filter((e) => e.id !== id);
          this.translate.get('EVENTOS_ADMIN.MENSAJES.SUCCESS_TO_DELETE').subscribe((res) => {
            this.messageService.add({
              severity: 'info',
              summary: 'Borrado',
              detail: res,
              life: 3000,
            });
          });
        },
        error: (err) => {
          console.error('Error al eliminar el evento en el servidor', err);
        },
      });
    }
  }

  /**
   * Función para editar un evento seleccionado.
   *
   * @param id --> Recibe el id del evento seleccionado.
   */
  editarEvento(id: number) {
    const evento = this.listaEventos.find((e) => e.id === id);
    if (evento) {
      this.isEditing = true;
      this.editingEventId = id;
      this.showForm = true;

      this.eventForm.patchValue({
        nombre_evento: evento.nombre_evento,
        ciudad: evento.ciudad,
        fecha_inicio: this.formatoParaInput(evento.fecha_inicio),
        fecha_fin: this.formatoParaInput(evento.fecha_fin),
        descripcion: evento.descripcion,
        imagen: evento.imagen,
        enlace_info: evento.enlace_info,
      });
    }
  }

  /**
   * Función para guardar la información de un evento.
   * Esta función valida si el evento se está editando o creando desde cero.
   *
   * En función de lo que se esté haciendo en ese evento,
   * esta función llama al servicio de crear un nuevo evento o al servicio de editar un evento.
   *
   * @returns --> Devuelve la información del evento creado / editado.
   */
  guardarEvento() {
    if (this.eventForm.invalid) return;

    const formValues = this.eventForm.value;
    const eventoData = {
      ...formValues,
    };

    if (this.isEditing && this.editingEventId) {
      this.eventosService.editarEvento(this.editingEventId, eventoData).subscribe({
        next: () => {
          this.obtenerEventos();
          this.showToast('SUCCESS_TO_EDIT');
          this.toggleForm();
        },
        error: (err) => console.error('Error al editar', err),
      });
    } else {
      this.eventosService.anadirEvento(eventoData).subscribe({
        next: (resultado) => {
          this.listaEventos.unshift(resultado);
          this.toggleForm();
          this.showToast('SUCCESS_TO_ADD');
        },
      });
    }
  }

  /**
   * Función para dar un formato específico a la fecha,
   * esto se utiliza para evitar errores de fechas al enviar los datos a BBDD.
   *
   * @param fecha --> Recibe la fecha introducida en el input.
   * @returns --> Devuelve la fecha con el formato seleccionado.
   */
  private formatoParaInput(fecha: any): string {
    if (!fecha) return '';
    const d = new Date(fecha);
    return d.toISOString().split('T')[0];
  }

  /**
   * Función para mostrar en pantalla el mensaje de confirmación o error.
   *
   * @param mensajeKey --> Recibe el mensaje a mostrar.
   */
  private showToast(mensajeKey: string) {
    this.translate.get(['EVENTOS_ADMIN.MENSAJES.NOTIFICATION', `EVENTOS_ADMIN.MENSAJES.${mensajeKey}`]).subscribe((translations) => {
      this.messageService.add({
        severity: 'success',
        summary: translations['EVENTOS_ADMIN.MENSAJES.NOTIFICATION'],
        detail: translations[`EVENTOS_ADMIN.MENSAJES.${mensajeKey}`],
        life: 3000,
      });
    });
  }
}
