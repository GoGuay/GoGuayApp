import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { Viaje } from 'src/app/models/travel/viaje.model';

@Component({
  selector: 'app-viaje-seleccionado',
  standalone: true,
  imports: [MatDivider, MatIcon, MatDialogContent, MatButtonModule, CommonModule],
  templateUrl: './viaje-seleccionado.component.html',
  styleUrls: ['./viaje-seleccionado.component.scss'],
})
export class ViajeSeleccionadoComponent implements OnInit {

  preferencias: string = '';
  constructor(private dialogRef: MatDialogRef<ViajeSeleccionadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { viaje: Viaje },
    private funcionesComunes: FuncionesComunes,
    private travelService: TravelService) 
  {
    this.preferencias = this.funcionesComunes.validacionPreferencias(this.data);
  }

  ngOnInit() { }


  closeDialog() {
    this.dialogRef.close();
  }

  unirseAViaje(viajeID: number){
    this.travelService.unirseAViaje(viajeID).subscribe({
      next: (response) => {
        console.log('Te has unido al viaje correctamente.', response);
        alert('Te has unido al viaje correctamente.');
      },
      error: (error) => {
        console.error('Hay un problema al unirte al viaje: ', error);
        alert(error.error?.error || 'Error al unirse al viaje.');
      }
    })
  }

}

