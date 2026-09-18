import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonRow, IonCol, IonGrid } from '@ionic/angular/standalone';
import { Usuario } from 'src/app/models/user/usuario.model';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
declare var paypal: any;
@Component({
  selector: 'app-saldo-transferencias',
  templateUrl: './saldo-transferencias.page.html',
  styleUrls: ['./saldo-transferencias.page.scss'],
  standalone: true,
  imports: [IonGrid, IonCol, IonRow, IonContent, CommonModule, FormsModule, NavbarComponent, TranslateModule, RouterLink],
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
    private cdRef: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.usuarioSub = this.userService.usuario$.subscribe((usuarioActual) => {
      if (usuarioActual) {
        this.userData = { usuario: usuarioActual };
        this.userLoggedIn = true;
        this.cargarMonedero();
        this.cargarMovimientos();
      } else {
        const rawData = localStorage.getItem('userData');
        if (rawData) {
          this.userData = JSON.parse(rawData);
          this.userLoggedIn = !!(this.userData && (this.userData.usuario?.email || this.userData.email));
          if (this.userLoggedIn) {
            this.cargarMonedero();
            this.cargarMovimientos();
          }
        }
      }
      this.cdRef.detectChanges();
    });

    this.route.queryParams.subscribe((params) => {
      const tokenPayPal = params['token'];
      const success = params['success'];

      if (success === 'true' && tokenPayPal) {
        this.capturarPagoPayPal(tokenPayPal);
      }
    });

    this.renderPaypal();
  }

  ngOnDestroy() {
    if (this.usuarioSub) {
      this.usuarioSub.unsubscribe();
    }
  }

  cargarMonedero() {
    this.userService.obtenerSaldoMonedero().subscribe({
      next: (response) => {
        this.monedero = { saldo: response.saldo };
        this.cdRef.detectChanges();
      },
      error: (err) => {
        console.error('Error al cargar el saldo:', err);
      },
    });
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
      },
    });
  }

  renderPaypal() {
    paypal
      .Buttons({
        style: {
          layout: 'vertical',
          color: 'blue',
          shape: 'rect',
          label: 'pay',
        },
        createOrder: (data: any, actions: any) => {
          return fetch('http://localhost:5000/api/user/create-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cantidad: this.cantidadRecarga }),
          })
            .then((res) => res.json())
            .then((order) => order.order_id);
        },
        onApprove: (data: any, actions: any) => {
          return fetch(`http://localhost:5000/api/user/capture-order/${data.orderID}`, {
            method: 'POST',
          })
            .then((res) => res.json())
            .then((response) => {
              console.log('Pago de monedero completado:', response);

              // Actualizamos la vista y el saldo localmente o llamamos a tus funciones
              if (response.nuevo_saldo !== undefined) {
                this.monedero = { saldo: response.nuevo_saldo };
              }
              this.cargarMonedero();
              this.cargarMovimientos();
              this.cdRef.detectChanges();
            });
        },
      })
      .render('#paypal-button-container');
  }

  capturarPagoPayPal(orderId: string) {
    this.userService.capturarOrdenMonedero(orderId).subscribe({
      next: (response) => {
        console.log('¡Recarga completada con éxito!', response);
        if (response.nuevo_saldo !== undefined) {
          this.monedero = { saldo: response.nuevo_saldo };
        }
        this.cargarMonedero();
        this.cargarMovimientos();
        this.cdRef.detectChanges();

        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: {},
          replaceUrl: true,
        });
      },
      error: (err) => {
        console.error('Error al procesar la captura de PayPal:', err);
        if (err.error?.detalle?.details?.[0]?.issue === 'ORDER_ALREADY_CAPTURED') {
          this.router.navigate([], {
            relativeTo: this.route,
            queryParams: {},
            replaceUrl: true,
          });
        }
      },
    });
  }
}
