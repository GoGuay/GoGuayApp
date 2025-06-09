import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonGrid,
} from '@ionic/angular/standalone';
import { Usuario } from 'src/app/models/user/usuario.model';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';

@Component({
  selector: 'app-saldo-transferencias',
  templateUrl: './saldo-transferencias.page.html',
  styleUrls: ['./saldo-transferencias.page.scss'],
  standalone: true,
  imports: [
    IonGrid,
    IonCol,
    IonRow,
    IonContent,
    CommonModule,
    FormsModule,
    NavbarComponent,
    TranslateModule,
  ],
})
export class SaldoTransferenciasPage implements OnInit {

  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;

  monedero: any = null;
  movimientos: any[] = [];

  loadingSaldo = false;
  loadingMovimientos = false;
  errorMensaje = '';

  constructor(private userService: UserServicesService) { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.userLoggedIn = !!(this.userData && this.userData.usuario.email);

    if (this.userLoggedIn) {
      this.cargarMonedero();
      this.cargarMovimientos();
    }

  }


  cargarMonedero() {
    this.loadingSaldo = true;
    const usuarioId = this.userData?.usuario?.id;
    this.userService.cargarMonedero(usuarioId).subscribe({
      next: (monedero) => {
        this.monedero = monedero;
        this.loadingSaldo = false;
      },
      error: (error) => {
        console.error('Error al cargar monedero:', error);
        this.errorMensaje = 'No se pudo cargar el saldo';
        this.loadingSaldo = false;
      },
    });
  }

  cargarMovimientos() {
    this.loadingMovimientos = true;
    const usuarioId = this.userData?.usuario?.id;
    this.userService.obtenerMovimientos(usuarioId).subscribe({
      next: (movs) => {
        this.movimientos = movs;
        this.loadingMovimientos = false;
      },
      error: (error) => {
        console.error('Error al cargar movimientos:', error);
        this.errorMensaje = 'No se pudo cargar el historial de movimientos';
        this.loadingMovimientos = false;
      },
    });
  }
}
