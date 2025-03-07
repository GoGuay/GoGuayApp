import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import {
  CARS,
  COLORES,
  COLOURS,
} from '../../../models/vehiculos/marcas_modelos.model';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';

@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDividerModule,
    MatIcon,
    TranslateModule,
    MatButtonModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.scss'],
})
export class MiPerfilComponent implements OnInit {
  constructor(
    public funcionescomunes: FuncionesComunes,
    private dialogRef: MatDialogRef<MiPerfilComponent>,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.funcionescomunes.listadoCoches);
    const idioma = localStorage.getItem('language');

    if (idioma === 'es') {
      this.funcionescomunes.validacionIdioma = true;
    } else {
      this.funcionescomunes.validacionIdioma = false;
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  filtrarModelos() {
    const coche = this.funcionescomunes.listadoCoches.find(
      (vehiculo) => vehiculo.marca === this.funcionescomunes.marcaSeleccionada
    );
    this.funcionescomunes.modelosFiltrados = coche ? coche.modelos : []; //si "coche" viene con algún dato, saca los modelos y los guarda en "modelosFiltrados". Si no (:), guarda un array vacio
    this.funcionescomunes.modeloSeleccionado = '';
  }

  openInfoVisible() {
    this.router.navigate(['/info-visible'], {});
    this.closeDialog();
  }
}
