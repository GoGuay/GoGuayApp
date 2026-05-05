import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select"; 
import { Viaje } from '../../models/travel/viaje.model';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-cancelar-solicitud-modal',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    MatButtonModule, 
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIcon
  ],
  templateUrl: './cancelar-solicitud-modal.component.html',
  styleUrls: ['./cancelar-solicitud-modal.component.scss'],
})
export class CancelarSolicitudModalComponent implements OnInit {
  
  motivoSeleccionado: string = '';
  razonAbierta: string = '';
  esConfirmada: boolean = false;

  motivosPendientes = [
    "Se ha dado el botón de reserva por error",
    "Cambios de plan o anulación del viaje",
    "Problema personal",
    "Enfermedad",
    "Otros motivos"
  ];

  motivosConfirmados = [
    "Tras 15 minutos en el punto de encuentro, el conductor no aparece",
    "Se ha intentado contactar con el conductor pero no responde",
    "Se ha cambiado el punto de encuentro y la hora y no me viene bien",
    "He encontrado otra forma para hacer el viaje",
    "Enfermedad",
    "Problema personal",
    "Otros motivos"
  ];

  constructor(
    public dialogRef: MatDialogRef<CancelarSolicitudModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { viaje: Viaje, yaUnido: boolean }
  ) {
    this.esConfirmada = data.yaUnido;
  }

  ngOnInit(): void {}

  get resultadoCancelacion(): string {
    return this.motivoSeleccionado === 'Otros motivos' ? this.razonAbierta : this.motivoSeleccionado;
  }

  get esFormularioValido(): boolean {
    if (!this.motivoSeleccionado) return false;
    if (this.motivoSeleccionado === 'Otros motivos') return this.razonAbierta.trim().length > 0;
    return true;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  
}