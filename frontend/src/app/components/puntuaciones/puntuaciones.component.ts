import { Component, Inject, inject, OnInit } from '@angular/core';
import {
  MatBottomSheetModule,
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA
} from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Viaje } from 'src/app/models/travel/viaje.model';
import { TravelService } from 'src/app/core/travel-services/travel.service';

@Component({
  selector: 'app-puntuaciones',
  standalone: true,
  imports: [MatButtonModule, MatBottomSheetModule, MatListModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './puntuaciones.component.html',
  styleUrls: ['./puntuaciones.component.scss'],
})
export class PuntuacionesComponent implements OnInit {

  puntuacionForm: FormGroup;
  viaje: Viaje;
  nombre_usuario: string;
  usuario_votado: boolean = false;
  creador_del_viaje: boolean = false;

  private _bottomSheetRef = inject<MatBottomSheetRef<PuntuacionesComponent>>(MatBottomSheetRef);


  calificacionSeleccionada: number = 0;
  estrellas = [1, 2, 3, 4, 5];

  constructor(private fb: FormBuilder, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any, private travelService: TravelService) {

    this.puntuacionForm = this.fb.group({
      recomendacion: [0, Validators.required],
    });

    this.viaje = this.data.viaje;
    this.nombre_usuario = this.viaje.usuario_creador.nombre;
    this.usuario_votado = this.viaje.usuario_creador.puntuacion_promedio;

    const userDataLocal = JSON.parse(localStorage.getItem('userData') || '{}');
    const idLogueado = userDataLocal.usuario?.id;

    if (idLogueado === this.viaje.usuario_id) {
      this.creador_del_viaje = true;
    }

    console.log('Datos del conductor:', this.viaje);
  }

  ngOnInit() { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  seleccionarCalificacion(valor: number) {
    if (this.calificacionSeleccionada === valor) {
      this.calificacionSeleccionada = 0;
      this.puntuacionForm.patchValue({ recomendacion: 0 });
    } else {
      this.calificacionSeleccionada = valor;
      this.puntuacionForm.patchValue({ recomendacion: valor });
    }
  }

  verificarEncuesta() {
    console.log('Datos de la encuesta:', this.puntuacionForm.value);
    const titulo: string = 'Encuesta realizada correctamente';
    const mensaje: string = 'Muchas gracias por realizar nuestra encuesta de satisfacción.';

  }

  /**
   * Puntua el viaje realizado
   */
  puntuarViaje() {

    if (this.creador_del_viaje) {
      console.error("No puedes puntuar tu propio viaje");
      return;
    }

    if (this.calificacionSeleccionada === 0) {
      console.error("Debes seleccionar al menos una estrella");
      return;
    }

    const userDataLocal = JSON.parse(localStorage.getItem('userData') || '{}');
    const evaluadorId = userDataLocal.usuario?.id;

    const dataPuntuacion = {
      puntuacion: this.calificacionSeleccionada,
      comentario: this.puntuacionForm.value.recomendacion_texto || '',
      usuario_id: this.viaje.usuario_id,
      evaluador_id: evaluadorId,
      viaje_id: this.viaje.id
    };

    this.travelService.guardarPuntuacion(dataPuntuacion).subscribe({
      next: (res) => {
        console.log('Puntuación guardada con éxito', res);
        this._bottomSheetRef.dismiss(true);
      },
      error: (err) => {
        console.error('Error al guardar la puntuación', err);
      }
    });
  }
}
