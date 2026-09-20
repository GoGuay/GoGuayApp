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
import { MovimientosMonedero } from 'src/app/models/movimientos_monedero/movimientos-monedero.model';
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
  movimientos: MovimientosMonedero[] = [];
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
        this.cargarMovimientos(this.userData.usuario.id);
      } else {
        const rawData = localStorage.getItem('userData');
        if (rawData) {
          this.userData = JSON.parse(rawData);
          this.userLoggedIn = !!(this.userData && (this.userData.usuario?.email || this.userData.email));
          if (this.userLoggedIn) {
            this.cargarMonedero();
            this.cargarMovimientos(this.userData.usuario.id);
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

  cargarMovimientos(usuario_id: number) {
    this.userService.obtenerMovimientosMonedero(usuario_id).subscribe({
      next: (response) => {
        this.movimientos = response.movimientos;
      },
      error: (err) => {
        console.error('Error al obtener los movimientos del monedero:', err);
      },
    });
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
          color: 'silver',
          shape: 'pill',
          label: 'checkout',
          height: 40,
        },
        createOrder: (data: any, actions: any) => {
          // 1. Obtén el token de autenticación (ajústalo según cómo lo guardes en tu app)
          const token = localStorage.getItem('access_token') || '';
          console.log('Token recuperado:', token); // <-- Revisa esto en la consola del navegador

          return fetch('http://localhost:5000/api/user/create-wallet-order', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`, // <-- ¡Añadido aquí!
            },
            body: JSON.stringify({ cantidad: this.cantidadRecarga }),
          })
            .then((res) => {
              if (!res.ok) {
                return res.json().then((err) => {
                  throw err;
                });
              }
              return res.json();
            })
            .then((order) => {
              const orderId = order.order_id || order.id;
              if (!orderId) {
                console.error('El backend no devolvió un ID de orden válido:', order);
              }
              return orderId;
            })
            .catch((error) => {
              console.error('Error al crear la orden de PayPal:', error);
            });
        },
        onApprove: (data: any, actions: any) => {
          this.capturarPagoPayPal(data.orderID);
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
        this.cargarMovimientos(this.userData.usuario.id);
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

  obtener_movimientos_monedero() {}
}
