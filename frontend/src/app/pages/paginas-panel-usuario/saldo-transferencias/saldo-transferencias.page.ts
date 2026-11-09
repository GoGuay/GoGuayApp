import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonRow, IonGrid, IonCol, ModalController } from '@ionic/angular/standalone';
import { Usuario } from 'src/app/models/user/usuario.model';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovimientosMonedero } from 'src/app/models/movimientos_monedero/movimientos-monedero.model';
import { MatDivider } from '@angular/material/divider';
import { log } from 'console';
import { SelectorGeneralComponent } from 'src/app/components/selector-general/selector-general.component';
import { MatDialog } from '@angular/material/dialog';
import { HelpModalComponent } from 'src/app/components/help-modal/help-modal.component';
import { MonederoService } from 'src/app/core/monedero-service/monedero.service';
import { MessageService } from 'primeng/api';
import { AbrirIncidenciaModalComponent } from 'src/app/components/abrir-incidencia-modal/abrir-incidencia-modal.component';
declare var paypal: any;
@Component({
  selector: 'app-saldo-transferencias',
  templateUrl: './saldo-transferencias.page.html',
  styleUrls: ['./saldo-transferencias.page.scss'],
  standalone: true,
  imports: [
    IonCol,
    IonGrid,
    IonRow,
    IonContent,
    CommonModule,
    FormsModule,
    NavbarComponent,
    TranslateModule,
    MatDivider,
    SelectorGeneralComponent,
  ],
})
export class SaldoTransferenciasPage implements OnInit {
  userLoggedIn: boolean = false;
  userData: any = {};

  monedero: any = null;
  movimientos: MovimientosMonedero[] = [];
  cantidadRecarga: number = 5;

  tiene_cuenta_paypal: boolean = false;
  tiene_cuenta_bancaria: boolean = false;
  tiene_ambas: boolean = false;

  listaOpcionesTransferencias: any[] = [
    { valor: 'paypal', descripcion: 'Cuenta Paypal' },
    { valor: 'banco', descripcion: 'Cuenta Bancaria' },
  ];

  opcion_retirada_elegida: string = '';
  private usuarioSub!: Subscription;

  constructor(
    private userService: UserServicesService,
    private monederoService: MonederoService,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef,
    private router: Router,
    private translate: TranslateService,
    private dialog: MatDialog,
    private messageService: MessageService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log('Opciones de transferencia disponibles:', this.listaOpcionesTransferencias);
    this.usuarioSub = this.userService.usuario$.subscribe((usuarioActual) => {
      if (usuarioActual) {
        const tienePayPal = !!usuarioActual.cobro_paypal_email;
        const tieneBanco = !!(usuarioActual.cobro_titular && usuarioActual.cobro_iban);

        console.log('Usuario actual: ', usuarioActual);
        if (tienePayPal && tieneBanco) {
          this.tiene_cuenta_paypal = false;
          this.tiene_cuenta_bancaria = false;
          this.tiene_ambas = true;
        } else if (tienePayPal) {
          this.tiene_cuenta_paypal = true;
          this.tiene_cuenta_bancaria = false;
          this.tiene_ambas = false;
        } else if (tieneBanco) {
          this.tiene_cuenta_paypal = false;
          this.tiene_cuenta_bancaria = true;
          this.tiene_ambas = false;
        } else {
          this.tiene_cuenta_paypal = false;
          this.tiene_cuenta_bancaria = false;
          this.tiene_ambas = false;
        }

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
    this.monederoService.obtenerSaldoMonedero().subscribe({
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
    this.monederoService.obtenerMovimientosMonedero(usuario_id).subscribe({
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

    this.monederoService.crearOrdenMonedero(this.cantidadRecarga).subscribe({
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
          const token = localStorage.getItem('access_token') || '';
          console.log('Token recuperado:', token);

          return fetch('http://localhost:5000/api/monedero/create-wallet-order', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
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
    this.monederoService.capturarOrdenMonedero(orderId).subscribe({
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

  onCantidadChange() {
    if (!this.cantidadRecarga || this.cantidadRecarga <= 0) {
      this.cantidadRecarga = 5; // Mínimo por defecto
    }
    const container = document.getElementById('paypal-button-container');
    if (container) {
      container.innerHTML = '';
    }
    this.renderPaypal();
  }

  onInputChange(valorSeleccionado?: any) {
    console.log('Valor oninputchange: ', valorSeleccionado);

    const nuevoValor = (typeof valorSeleccionado === 'object' && valorSeleccionado !== null)
      ? valorSeleccionado.valor
      : valorSeleccionado;

    if (this.opcion_retirada_elegida === nuevoValor) {
      return;
    }
    this.opcion_retirada_elegida = nuevoValor;
    if (typeof valorSeleccionado === 'object' && valorSeleccionado !== null) {
      this.modalConfirmarTransferencia(valorSeleccionado.descripcion);
    }
  }

  // TODO¡¡¡¡¡¡PENDIENTE MENSAJES !!!!!!!  // ¡¡¡¡¡¡PENDIENTE MENSAJES !!!!!!!  // ¡¡¡¡¡¡PENDIENTE MENSAJES !!!!!!!  // ¡¡¡¡¡¡PENDIENTE MENSAJES !!!!!!!  // ¡¡¡¡¡¡PENDIENTE MENSAJES !!!!!!!
  modalConfirmarTransferencia(valorSeleccionado?: string) {
    console.log ('Valor seleccionado: ', valorSeleccionado)
    this.translate
      .get([
        'Transferencia a tu favor',
        `Vas a hacer una transferencia a través de ${valorSeleccionado}`,

      ])
      .subscribe((translations) => {
        const titulo = translations['Transferencia a tu favor'];
        const mensaje = translations[`Vas a hacer una transferencia a través de ${valorSeleccionado}`];

        const dialogRef = this.dialog.open(HelpModalComponent, {
          data: { title: titulo, message: mensaje,  showAcceptButton: true, eliminacion_cuenta: false },
          disableClose: true,
        });
        dialogRef.afterClosed().subscribe((confirmar) => {
          if (confirmar === 'registro') {
            //
          }else{
            this.opcion_retirada_elegida = ''
          }
        });
      });
  }

  transferirSaldoMonedero() {
    if (!this.userData?.usuario?.id) return;
    this.monederoService.transferenciaSaldoMonedero(this.userData.usuario.id).subscribe({
      next: (res) => {
        console.log('Respuesta backend al realizar transferencia: ', res);
      },
      error: (err) => {
        const tituloError = err.error?.error || 'Transferencia no realizada';
        const detalleError = err.error?.motivo || err.error?.message || 'Ha habido un error al hacer la transferencia.';

        this.messageService.add({
          severity: 'error',
          summary: tituloError,
          detail: detalleError,
          life: 5000,
        });
      },
    });
  }


  async abrirIncidenciaPago() {
    const modal = await this.modalController.create({
      component: AbrirIncidenciaModalComponent,
      componentProps: {
        categoria: 'APP',
        subcategoriaPredeterminada: 'PAGO',
        tituloContexto: 'Problema con saldo o pagos'
      },
      cssClass: 'modal-incidencia-custom'
    });

    await modal.present();
    const { role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.messageService.add({
        severity: 'success',
        summary: 'Incidencia enviada',
        detail: 'Hemos recibido tu consulta sobre el monedero. Podrás ver el seguimiento en "Mis Incidencias".',
        life: 4000
      });
    }
  }

  obtener_movimientos_monedero() { }
}
