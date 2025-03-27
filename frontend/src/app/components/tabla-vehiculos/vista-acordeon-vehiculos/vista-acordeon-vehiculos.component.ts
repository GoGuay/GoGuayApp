import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';
import { FuncionesUsuario } from 'src/app/core/funciones-usuario/funciones-usuario.service';

@Component({
  selector: 'app-vista-acordeon-vehiculos',
  standalone: true,
  imports: [
    TranslateModule,
    MatAccordion,
    MatExpansionModule,
    CommonModule,
    IonicModule,
    FormsModule,
    MatIcon,
  ],
  templateUrl: './vista-acordeon-vehiculos.component.html',
  styleUrls: ['./vista-acordeon-vehiculos.component.scss'],
})
export class VistaAcordeonVehiculosComponent implements OnInit {
  constructor(
    public funcionesComunes: FuncionesComunes,
    public funcionesUsuario: FuncionesUsuario
  ) {}

  ngOnInit() {
    console.log('Coches', this.funcionesUsuario.vehiculos_usuario);
    this.funcionesUsuario.obtenerVehiculos();
  }
}
