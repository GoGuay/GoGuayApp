import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonRow, IonCol } from '@ionic/angular/standalone';
import { Usuario } from 'src/app/models/user/usuario.model';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { MatDivider } from '@angular/material/divider';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { lastValueFrom, Observable } from 'rxjs';
import { SpinnerComponent } from '../../../components/spinner/spinner.component';
import { ActivatedRoute } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-verificaciones-perfil',
  templateUrl: './verificaciones-perfil.page.html',
  styleUrls: ['./verificaciones-perfil.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NavbarComponent,
    MatDivider,
    TranslateModule,
    SpinnerComponent,
    ToastModule,
  ],

  providers: [MessageService],
})
export class VerificacionesPerfilPage implements OnInit {
  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;
  usuario: any = {} as Usuario;
  emailUsuario: string = '';
  telefonoUsuario: string = '';
  subiendoDocumento: boolean = false;
  sinDocumentoDelantera: string =
    '../../../../assets/user/SinFotoDelantera.png';
  sinDocumentoTrasera: string = '../../../../assets/user/SinFotoTrasera.png';

  cargandoDelantera: boolean = false;
  cargandoTrasera: boolean = false;
  cargandoCarnetDelantera: boolean = false;
  cargandoCarnetTrasera: boolean = false;
  documentoDelantera: string = '';
  documentoTrasera: string = '';
  carnetTrasera: string = '';
  carnetDelantera: string = '';
  codigoArray: string[] = ['', '', '', ''];
  codigo: string = '';
  focusedInput: number | null = null;
  botonCorreoVerificado: boolean = false;
  verification_id_sms: string = '';
  tipoDocumentoSeleccionado: string = '';
  numeroDocumento: string = '';
  documentoValido: boolean = false;
  mensajeErrorDocumento: string = '';
  codigoCompleto: boolean = false;
  inputsHabilitados: boolean = false;
  sms_enviado: boolean = false;
  codigo_erroneo: boolean = false;

  cargando: boolean = false;

  constructor(
    private userService: UserServicesService,
    private route: ActivatedRoute,
    private messageService: MessageService,
  ) {}

async ngOnInit() {
  this.cargando = true;

  try {
    this.tiempo_restante_sms();

    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
      if (this.userData?.usuario) {
        this.userLoggedIn = true;
        this.emailUsuario = this.userData.usuario.email || '';
        this.telefonoUsuario = this.userData.usuario.telefono || '';
      }

      const token = this.route.snapshot.queryParamMap.get('token');
      if (token) {
        const verificado = await lastValueFrom(this.userService.verificar_email(token));
        this.botonCorreoVerificado = !!verificado;
        this.cargando = false;
      }

      if (this.userData?.usuario?.id) {
        await this.obtenerDatosUsuario(this.userData.usuario.id);
      }

    } catch (error) {
      console.error("Error durante la carga:", error);
    } finally {
      this.cargando = false;
    }
  }

  envio_mail_verificar_correo(email: string) {
    this.botonCorreoVerificado = true; 
    if (this.usuario.emailVerificado) {
      this.messageService.add({
        severity: 'error',
        summary: 'Correo ya verificado',
        detail: 'Este correo ya ha sido verificado anteriormente',
        life: 3000,
      });
    } else {
      this.userService.enviar_email_verif(email).subscribe(
        (respuesta) => {
          console.log(respuesta);
          this.messageService.add({
            severity: 'success',
            summary: 'Correo enviado',
            detail: 'Por favor, verifica tu correo y sigue las instrucciones.',
            life: 3000,
          });
          setTimeout(() => {
            this.botonCorreoVerificado = false;
          }, 1800 * 1000); // 1800 segundos * 1000 ms
        },
        (error) => {
          console.error(error);
          // Si hubo error, puedes reactivar el botón inmediatamente
          this.botonCorreoVerificado = false;
        },
      );
    }
  }

  async obtenerDatosUsuario(id_usuario: number) {
    this.usuario = await lastValueFrom(
      this.userService.obtenerUsuarioPorID(id_usuario),
    );
  }

  /**
   * Función para obtener los datos de un usuario
   * @param id_usuario Recibe el ID del usuario que está logado
   */
  obtenerUsuarioPorID(id_usuario: number) {
    this.userService
      .obtenerUsuarioPorID(id_usuario)
      .subscribe((resultadoUsuario) => {
        this.usuario = resultadoUsuario;
      });
  }

  enviar_sms(telefono: string) {
    const teléfonoConPrefijo = '+34' + telefono;
    this.userService
      .enviar_sms(teléfonoConPrefijo)
      .subscribe((respuesta: any) => {
        console.log('Respuesta: ', respuesta);
        if (respuesta.verification_sid) {
          this.verification_id_sms = respuesta.verification_sid;
          this.inputsHabilitados = true;
          this.sms_enviado = true;
          // Guardar el timestamp del envío en localStorage
          const ahora = Date.now();
          localStorage.setItem('sms_enviado_timestamp', ahora.toString());
          setTimeout(() => {
            this.sms_enviado = false;
            /*
          Borra la hora a la que se ha enviado el sms de la caché
          */
            localStorage.removeItem('sms_enviado_timestamp');
          }, 600000);
        }
      });
  }

  // Para concatener los 4 digitos del codigo sms
  updateCodigo() {
    this.codigo = this.codigoArray.join('');
    this.codigoCompleto =
      this.codigo.length === 6 && /^\d{6}$/.test(this.codigo);
  }

  // Avanzar al siguiente input automáticamente
  moveNext(
    currentInput: HTMLInputElement,
    nextInput: HTMLInputElement,
    index: number,
  ) {
    if (currentInput.value.length === 1 && nextInput) {
      nextInput.focus();
    }
    this.updateCodigo();
  }

  // Retrocede al input anterior al pulsar Backspace
  handleBackspace(event: KeyboardEvent, index: number) {
    const input = event.target as HTMLInputElement;

    if (event.key === 'Backspace') {
      event.preventDefault();

      if (this.codigoArray[index]) {
        // Borra el dígito actual
        this.codigoArray[index] = '';
        this.updateCodigo();
      } else if (index > 0) {
        // Si el input está vacío, retrocede al anterior
        const prevInput = input.previousElementSibling as HTMLInputElement;
        if (prevInput) {
          prevInput.focus();
          this.codigoArray[index - 1] = '';
          this.updateCodigo();
        }
      }
    }
  }

  /**
   * Función para verificar el codigo que le ha llegado al cliente por sms.
   * @param codigo
   */
  verificar_codigo_sms(codigo: string) {
    try {
      this.userService
        .verificar_codigo_sms(codigo, this.usuario.telefono)
        .subscribe((respuesta: any) => {
          console.log('Respuesta: ', respuesta);
          if (respuesta.success) {
            this.codigo_erroneo = false;
            this.usuario.telefonoVerificado = true;
            this.codigoArray = [];
          }
        });
    } catch (e) {
      this.codigo_erroneo = true;
    }
  }

  //Para que el usuario pueda pegar el codigo del sms en los inputs
  handlePaste(event: ClipboardEvent) {
    event.preventDefault(); // Evita que el texto se pegue automáticamente en el input

    const pasteData = event.clipboardData?.getData('text') || '';
    const digits = pasteData.replace(/\D/g, '').slice(0, 6); // Solo números, máximo 6 dígitos

    for (let i = 0; i < digits.length; i++) {
      this.codigoArray[i] = digits[i]; // Cada dígito va a un input
    }

    // Si el pegado tiene menos de 6 dígitos, vaciamos los inputs restantes
    for (let i = digits.length; i < 6; i++) {
      this.codigoArray[i] = '';
    }

    this.updateCodigo(); // Actualiza el string completo y habilita el botón si hay 6 dígitos

    // Opcional: poner el foco en el primer input vacío
    const firstEmptyIndex = this.codigoArray.findIndex((c) => !c);
    if (firstEmptyIndex !== -1) {
      const input =
        document.querySelectorAll<HTMLInputElement>('.digit-input')[
          firstEmptyIndex
        ];
      input?.focus();
    }
  }

  /**
   * Función para calcular cuando se ha clicado el botón de envío de sms por ultima y cuanto falta para que se vuelva a habilitar
   * Recoge el valor de sms_enviado_timestamp de la caché. Si hay dato resta
   */
  tiempo_restante_sms() {
    const timestamp = localStorage.getItem('sms_enviado_timestamp');
    if (timestamp) {
      const tiempoPasado = Date.now() - parseInt(timestamp, 10);
      const diezMinutos = 600000; // 10 minutos en ms

      if (tiempoPasado < diezMinutos) {
        this.sms_enviado = true;

        // Calcular cuánto falta para reactivar el botón
        const tiempoRestante = diezMinutos - tiempoPasado;
        setTimeout(() => {
          this.sms_enviado = false;
          localStorage.removeItem('sms_enviado_timestamp');
        }, tiempoRestante);
      } else {
        this.sms_enviado = false;
        localStorage.removeItem('sms_enviado_timestamp');
      }
    }
  }
}
