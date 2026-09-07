import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
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
import { ActivatedRoute } from '@angular/router';

declare var paypal: any;

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
export class SaldoTransferenciasPage implements OnInit, AfterViewInit {
  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;

  monedero: any = null;
  movimientos: any[] = [];

  cantidadRecarga: number = 10; 
  loadingSaldo = false;
  loadingMovimientos = false;
  errorMensaje = '';

  constructor(
    private userService: UserServicesService,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const rawData = localStorage.getItem('userData');
    if (rawData) {
      this.userData = JSON.parse(rawData);
      this.userLoggedIn = !!(this.userData && this.userData.usuario?.email);
    }

    if (this.userLoggedIn) {
      this.cargarMonedero();
      this.cargarMovimientos();
    }

    // Comprobar si el usuario vuelve de PayPal (si usas redirección)
    this.route.queryParams.subscribe(params => {
      const tokenPayPal = params['token'];
      const success = params['success'];

      if (success === 'true' && tokenPayPal) {
        this.capturarPagoPayPal(tokenPayPal);
      }
    });
  }

  ngAfterViewInit() {
    setTimeout(() => this.renderPaypalButton(), 200);
  }

  cargarMonedero() {
  }

  cargarMovimientos() {
  }

  onCantidadChange() {
    if (this.cantidadRecarga && this.cantidadRecarga > 0) {
      setTimeout(() => {
        this.renderPaypalButton();
      }, 100);
    }
  }
  
  /**
   * Renderiza el componente interactivo de PayPal de forma idéntica al de reservas
   */
  renderPaypalButton() {
    const container = document.getElementById('paypal-button-container');
    if (!container) return;
    
    container.innerHTML = '';

    paypal.Buttons({
      style: {
        layout: 'vertical',
        color: 'blue',
        shape: 'rect',
        label: 'pay'
      },
      createOrder: (data: any, actions: any) => {
        if (!this.cantidadRecarga || this.cantidadRecarga <= 0) {
          alert('Por favor, introduce una cantidad válida para recargar.');
          throw new Error('Cantidad no válida');
        }

        // Llamamos a tu servicio existente para crear la orden de monedero
        return this.userService.crearOrdenMonedero(this.cantidadRecarga).toPromise()
          .then(response => response.order_id);
      },
      onApprove: (data: any, actions: any) => {
        // Llamamos a tu servicio existente para capturar la orden
        return this.userService.capturarOrdenMonedero(data.orderID).toPromise()
          .then(response => {
            console.log('¡Recarga completada con éxito!', response);
            if (response.nuevo_saldo !== undefined) {
              this.monedero = { saldo: response.nuevo_saldo };
            }
            this.cargarMovimientos();
            this.cdRef.detectChanges();
            alert('¡Saldo añadido a tu monedero correctamente!');
          });
      },
      onError: (err: any) => {
        console.error('Error en la pasarela de PayPal:', err);
      }
    }).render('#paypal-button-container');
  }

  capturarPagoPayPal(orderId: string) {
    this.userService.capturarOrdenMonedero(orderId).subscribe({
      next: (response) => {
        if (response.nuevo_saldo !== undefined) {
          this.monedero = { saldo: response.nuevo_saldo };
        }
        this.cargarMovimientos();
      },
      error: (err) => {
        console.error('Error al procesar la captura de PayPal:', err);
      }
    });
  }
}