import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonItem, IonLabel, NavController, IonHeader, IonToolbar, IonButtons, IonTitle, IonBackButton, IonCheckbox } from '@ionic/angular/standalone';
import { TravelService } from '../../core/travel-services/travel.service';
import { Viaje } from '../../models/travel/viaje.model';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { FuncionesComunes } from '../../core/funciones-comunes/funciones-comunes.service';
import { MessagingService } from '../../core/menssaging-service/messaging.service';
import { FormsModule } from '@angular/forms';
import { PagosService } from 'src/app/core/pagos-service/pagos.service';
import { lastValueFrom } from 'rxjs';

declare var paypal: any;

@Component({
  selector: 'app-pago-reserva',
  templateUrl: './pago-reserva.page.html',
  styleUrls: ['./pago-reserva.page.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [IonHeader, CommonModule, SpinnerComponent, FormsModule, IonContent, IonItem, IonLabel, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonCheckbox],
})
export class PagoReservaPage implements OnInit {
  viaje!: Viaje;
  pagoConfirmado: boolean = false;
  cargando: boolean = true;
  userData: any;
  yaUnido: boolean = false;
  guardarMetodo: boolean = false;
  paypalTransactionId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private travelService: TravelService,
    private navCtrl: NavController,
    private cdRef: ChangeDetectorRef,
    private funcionesComunes: FuncionesComunes,
    private messagingService: MessagingService,
    private pagosService: PagosService
  ) {}

  ngOnInit() {
    const viajeId = Number(this.route.snapshot.paramMap.get('id'));
    const storageData = localStorage.getItem('userData');
    this.userData = storageData ? JSON.parse(storageData) : null;

    if (viajeId) {
      this.cargarDetallesViaje(viajeId);
    }
  }

  /**
   * Función para cargar los detalles del viaje.
   * @param id El ID del viaje a cargar.
   */
  cargarDetallesViaje(id: number) {
    this.travelService.getViaje(id).subscribe({
      next: (res) => {
        this.viaje = res;
        this.cargando = false;
        this.cdRef.detectChanges();
        setTimeout(() => this.renderPaypal(), 150);
      },
      error: () => this.navCtrl.back(),
    });
  }

  /**
   * Función para renderizar el botón de pago de PayPal.
   */
  renderPaypal() {
    paypal
      .Buttons({
        style: {
          layout: 'vertical',
          color: 'blue',
          shape: 'rect',
          label: 'pay',
          tagline: false,
        },
        createOrder: async () => {
          const pasajeroId = this.userData?.usuario?.id;
          const order = await lastValueFrom(this.pagosService.crearOrdenPaypal(this.viaje.id, pasajeroId));
          return order.order_id;
        },
        onApprove: async (data: any) => {
          const captureData = await lastValueFrom(this.pagosService.autorizarOrdenPaypal(data.orderID, this.guardarMetodo));
          const payments = captureData?.purchase_units?.[0]?.payments;
          this.paypalTransactionId =
            payments?.authorizations?.[0]?.id || payments?.captures?.[0]?.id || captureData?.authorization_id || null;

          const payerId = captureData?.payer?.payer_id;
          const payerEmail = captureData?.payer?.email_address;
          console.log('captureData: ', captureData);

          if (payerId && this.userData?.usuario) {
            this.userData.usuario.paypal_payer_id = payerId;
            this.userData.usuario.paypal_vinculado = true;
            if (payerEmail) {
              this.userData.usuario.paypal_email = payerEmail;
            }
            localStorage.setItem('userData', JSON.stringify(this.userData));
          }

          this.pagoConfirmado = true;
          this.cdRef.detectChanges();
          this.procesarReservaPostPago();
        },
      })
      .render('#paypal-button-container');
  }

  /**
   * Función para redirigir a la página de detalles del viaje o a la página principal después del pago, dependiendo de la ruta dada.
   * Si la ruta es 'detalles', se redirige a la página de detalles del viaje.
   * De lo contrario, se redirige a la página principal.
   * Esto se puede usar para mostrar un mensaje de éxito después del pago o para volver a la lista de viajes.
   * @param ruta --> La ruta a la que se desea redirigir después del pago. Puede ser 'detalles' o cualquier otra ruta.
   */
  irA(ruta: string) {
    if (ruta === 'detalles') {
      this.navCtrl.navigateBack(['/home']);
    } else {
      this.navCtrl.navigateRoot([ruta]);
    }
  }

  /**
   * Función para convertir la fecha del evento al formato requerido por el backend.
   */
  procesarReservaPostPago() {
    if (this.viaje.reserva_automatica) {
      this.solicitudAutomatica(this.viaje.id);
    } else {
      this.enviarSolicitudManual();
    }
  }

  /**
   * Función para enviar la solicitud de reserva al conductor
   * después de que el pago se haya capturado correctamente.
   *
   * @param viajeID El ID del viaje al que se desea unir automáticamente.
   */
  solicitudAutomatica(viajeID: number) {
    this.travelService.unirseAViaje(viajeID).subscribe({
      next: (response) => {
        this.yaUnido = true;
        console.log('Unido automáticamente tras pago');
        this.cdRef.detectChanges();
      },
      error: (error) => {
        this.funcionesComunes.openErrorModal(
          'Error en reserva',
          'El pago se realizó pero hubo un error al asignarte el asiento. Contacta a soporte.'
        );
      },
    });
  }

  /**
   * Función para enviar la solicitud de reserva al conductor
   * después de que el pago se haya capturado correctamente.
   *
   * Si el viaje no tiene reserva automática,
   * se inicia un chat entre el pasajero y el conductor (si no existe)
   * y se envía la solicitud de reserva.
   *
   * Si el viaje tiene reserva automática,
   * se llama a la función solicitudAutomatica que intenta unir al usuario al viaje directamente.
   */
  enviarSolicitudManual() {
    const emisorId = this.userData?.usuario?.id || 0;
    const receptorId = this.viaje.usuario_id;

    this.messagingService.iniciarChat(emisorId, receptorId).subscribe({
      next: (res) => {
        const convId = res.conversacion_id;
        const payload = {
          viaje_id: this.viaje.id,
          emisor_id: emisorId,
          receptor_id: receptorId,
          conversacion_id: convId,
          paypal_auth_id: this.paypalTransactionId
        };

        this.messagingService.enviarSolicitudViaje(payload).subscribe({
          next: () => {
            console.log('Solicitud manual enviada tras pago');
            this.cdRef.detectChanges();
          },
          error: () => {
            this.funcionesComunes.openErrorModal('Error en solicitud', 'Pago capturado pero no se pudo enviar la solicitud al conductor.');
          },
        });
      },
    });
  }
}
