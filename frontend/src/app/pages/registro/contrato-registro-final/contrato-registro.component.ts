import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { IonCheckbox } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contrato-registro',
  imports: [RouterModule, IonCheckbox, CommonModule, FormsModule],
  templateUrl: './contrato-registro.component.html',
  styleUrl: './contrato-registro.component.scss',
})
export class ContratoRegistroComponent implements OnInit {
  @Output() terminosAceptados = new EventEmitter<void>();

  checkEdadTerminos: boolean = false;
  checkCarnet: boolean = false;
  checkDecalogo: boolean = false;

  constructor(
    private userService: UserServicesService,
    private navCtrl: NavController
  ) { }

  ngOnInit(): void {
    const datosRegistro = this.userService.getUsuarioData();
    if (datosRegistro === null) {
      this.navCtrl.navigateRoot('/registro');
    }
  }

  aceptarNormas() {
    this.terminosAceptados.emit();
  }

  verCondiciones() {
    this.navCtrl.navigateRoot('/condiciones-generales');
  }
}
