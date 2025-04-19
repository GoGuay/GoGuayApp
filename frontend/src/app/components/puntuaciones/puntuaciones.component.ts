import { Component, inject, OnInit } from '@angular/core';
import {
  MatBottomSheetModule,
  MatBottomSheetRef
} from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-puntuaciones',
  standalone: true,
  imports: [MatButtonModule, MatBottomSheetModule, MatListModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './puntuaciones.component.html',
  styleUrls: ['./puntuaciones.component.scss'],
})
export class PuntuacionesComponent implements OnInit {

  puntuacionForm: FormGroup;
  private _bottomSheetRef =
    inject<MatBottomSheetRef<PuntuacionesComponent>>(MatBottomSheetRef);

  calificacionSeleccionada: number = 0;
  estrellas = [1, 2, 3, 4, 5];

  constructor(private fb: FormBuilder) {
    this.puntuacionForm = this.fb.group({
      recomendacion: [0, Validators.required],
    });
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
    console.log('Calificación seleccionada:', this.calificacionSeleccionada);
  }

    verificarEncuesta() {
      console.log('Datos de la encuesta:', this.puntuacionForm.value);
      const titulo: string = 'Encuesta realizada correctamente';
      const mensaje: string = 'Muchas gracias por realizar nuestra encuesta de satisfacción.';
      
    }
}
