import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonRow,
  IonCol,
  IonGrid,
} from '@ionic/angular/standalone';
import { Usuario } from 'src/app/models/user/usuario.model';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

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
    RouterLink,
  ],
})
export class SaldoTransferenciasPage implements OnInit {
  userLoggedIn: boolean = false;
  userData: any = {};

  monedero: any = null;
  movimientos: any[] = [];
  cantidadRecarga: number = 10; 

  private usuarioSub!: Subscription;

  constructor(
    private userService: UserServicesService,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // Nos suscribimos al observable del servicio para reflejar cambios en tiempo real si edita su perfil
    this.usuarioSub = this.userService.usuario$.subscribe((usuarioActual) => {
      if (usuarioActual) {
        this.userData = { usuario: usuarioActual };
        this.userLoggedIn = true;
      } else {
        const rawData = localStorage.getItem('userData');
        if (rawData) {
          this.userData = JSON.parse(rawData);
          this.userLoggedIn = !!(this.userData && (this.userData.usuario?.email || this.userData.email));
        }
      }
      this.cdRef.detectChanges();
    });

    if (this.userLoggedIn) {
      this.cargarMonedero();
      this.cargarMovimientos();
    }

    this.route.queryParams.subscribe(params => {
      const tokenPayPal = params['token'];
      const success = params['success'];

      if (success === 'true' && tokenPayPal) {
        this.capturarPagoPayPal(tokenPayPal);
      }
    });
  }

  ngOnDestroy() {
    if (this.usuarioSub) {
      this.usuarioSub.unsubscribe();
    }
  }

  cargarMonedero() {
    // Lógica para obtener el saldo real
  }

  cargarMovimientos() {
    // Lógica para obtener el historial
  }

  recargarConPayPalPersonalizado() {
    if (!this.cantidadRecarga || this.cantidadRecarga <= 0) {
      alert('Por favor, introduce una cantidad válida para recargar.');
      return;
    }

    this.userService.crearOrdenMonedero(this.cantidadRecarga).subscribe({
      next: (response) => {
        if (response && response.approve_url) {
          window.location.href = response.approve_url;
        }
      },
      error: (err) => {
        console.error('Error al iniciar la recarga:', err);
      }
    });
  }

  capturarPagoPayPal(orderId: string) {
    this.userService.capturarOrdenMonedero(orderId).subscribe({
      next: (response) => {
        console.log('¡Recarga completada con éxito!', response);
        if (response.nuevo_saldo !== undefined) {
          this.monedero = { saldo: response.nuevo_saldo };
        }
        this.cargarMovimientos();
        this.cdRef.detectChanges();
      },
      error: (err) => {
        console.error('Error al procesar la captura de PayPal:', err);
      }
    });
  }
}