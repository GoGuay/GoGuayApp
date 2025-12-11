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
  imports: [IonicModule, CommonModule, FormsModule, NavbarComponent, MatDivider, TranslateModule, SpinnerComponent, ToastModule],

  providers: [MessageService],
})
export class VerificacionesPerfilPage implements OnInit {
  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;
  usuario: any = {} as Usuario;
  emailUsuario: string = '';
  telefonoUsuario: string = '';
  subiendoDocumento: boolean = false;
  sinDocumentoDelantera: string = '../../../../assets/user/SinFotoDelantera.png';
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

  constructor(
    private userService: UserServicesService,
    private route: ActivatedRoute,
    private messageService: MessageService,
  ) {}

  async ngOnInit() {
    const token = this.route.snapshot.queryParamMap.get('token');
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (this.userData?.usuario) {
      this.userLoggedIn = true;
    }
    if (this.userData && this.userData.usuario) {
      this.emailUsuario = this.userData.usuario.email || '';
      this.telefonoUsuario = this.userData.usuario.telefono || '';
    }
    console.log('Token: ', token);

    if (token) {
      this.userService.verificar_email(token).subscribe((verificado) => {
        console.log(verificado);

        if (verificado) {
          this.botonCorreoVerificado = true;
          this.obtenerDatosUsuario(this.userData.usuario.id);
        } else {
          this.botonCorreoVerificado = false;
        }
      });
    }
    await this.obtenerDatosUsuario(this.userData.usuario.id);
  }

  envio_mail_verificar_correo(email: string) {
    this.botonCorreoVerificado = true; // deshabilitar el botón inmediatamente
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
    this.usuario = await lastValueFrom(this.userService.obtenerUsuarioPorID(id_usuario));
  }

  /**
   * Función para obtener los datos de un usuario
   * @param id_usuario Recibe el ID del usuario que está logado
   */
  obtenerUsuarioPorID(id_usuario: number) {
    this.userService.obtenerUsuarioPorID(id_usuario).subscribe((resultadoUsuario) => {
      this.usuario = resultadoUsuario;
    });
  }

  enviar_sms(telefono: string) {
    const teléfonoConPrefijo = '+34' + telefono;
    this.userService.enviar_sms(teléfonoConPrefijo).subscribe((respuesta: any) => {
      console.log('Respuesta: ', respuesta);
      if (respuesta.verification_sid) {
        this.verification_id_sms = respuesta.verification_sid;
        this.inputsHabilitados = true;
      }
    });
  }

  // Para concatener los 4 digitos del codigo sms
  updateCodigo() {
    this.codigo = this.codigoArray.join('');
    this.codigoCompleto = this.codigo.length === 6 && /^\d{6}$/.test(this.codigo);
  }

  // Avanzar al siguiente input automáticamente
  moveNext(currentInput: HTMLInputElement, nextInput: HTMLInputElement, index: number) {
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
    this.userService.verificar_codigo_sms(codigo, this.usuario.telefono).subscribe((respuesta) => {
      console.log('Respues: ', respuesta);
    });
  }

  // Función para subir la foto delantera del documento de identidad
  fotoDocumentoDelantera(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cargandoDelantera = true;
    if (input.files && input.files[0]) {
      const formData = new FormData();
      formData.append('fotoDocumentoDelantera', input.files[0]);

      const usuarioId = this.userData.usuario.id;

      this.userService.fotoDocumentoDelantera(formData, usuarioId).subscribe({
        next: (response) => {
          this.cargandoDelantera = false;
          if (response && response.url) {
            this.documentoDelantera = response.url;
            console.log('fotodocumentodelantera:', this.documentoDelantera);
            console.log('response :', response.url);
          }
          this.obtenerUsuarioPorID(usuarioId);
        },
        error: (error) => {
          console.error('Error al subir la imagen delantera del documento:', error);
        },
      });
    }
  }

  // Función para subir la foto trasera del documento de identidad
  fotoDocumentoTrasera(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cargandoTrasera = true;
    if (input.files && input.files[0]) {
      const formData = new FormData();
      formData.append('fotoDocumentoTrasera', input.files[0]);

      const usuarioId = this.userData.usuario.id;

      this.userService.fotoDocumentoTrasera(formData, usuarioId).subscribe({
        next: (response) => {
          this.cargandoTrasera = false;
          if (response && response.url) {
            this.documentoTrasera = response.url;
            console.log('fotoDocumentoTrasera:', this.documentoTrasera);
            console.log('response :', response.url);
          }
          this.obtenerUsuarioPorID(usuarioId);
        },
        error: (error) => {
          console.error('Error al subir la imagen delantera del documento:', error);
        },
      });
    }
  }

  // Función para cargar la foto delantera del carnet de conducir
  fotoCarnetDelantera(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cargandoCarnetDelantera = true;
    if (input.files && input.files[0]) {
      const formData = new FormData();
      formData.append('fotoCarnetCondDelantera', input.files[0]);

      const usuarioId = this.userData.usuario.id;

      this.userService.fotoCarnetDelantera(formData, usuarioId).subscribe({
        next: (response) => {
          this.cargandoCarnetDelantera = false;
          if (response && response.url) {
            this.carnetDelantera = response.url;
            console.log('carnet Delantera:', this.carnetDelantera);
            console.log('response :', response.url);
          }
          this.obtenerUsuarioPorID(usuarioId);
        },
        error: (error) => {
          console.error('Error al subir la imagen delantera del carnet:', error);
        },
      });
    }
  }

  // Función para cargar la foto trasera del carnet de conducir
  fotoCarnetTrasera(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cargandoCarnetTrasera = true;
    if (input.files && input.files[0]) {
      const formData = new FormData();
      formData.append('fotoCarnetCondTrasera', input.files[0]);

      const usuarioId = this.userData.usuario.id;

      this.userService.fotoCarnetTrasera(formData, usuarioId).subscribe({
        next: (response) => {
          this.cargandoCarnetTrasera = false;
          if (response && response.url) {
            this.carnetTrasera = response.url;
            console.log('carnet Trasera:', this.carnetTrasera);
            console.log('response :', response.url);
          }
          this.obtenerUsuarioPorID(usuarioId);
        },
        error: (error) => {
          console.error('Error al subir la imagen trasera del carnet:', error);
        },
      });
    }
  }

  /**
   * Valida el número de documento según el tipo seleccionado
   */
  validarDocumento(): void {
    const doc = this.numeroDocumento?.toUpperCase() || '';

    if (!this.tipoDocumentoSeleccionado || !doc) {
      this.documentoValido = false;
      return;
    }

    if (this.tipoDocumentoSeleccionado === 'DNI') {
      // DNI: 8 dígitos + letra A-Z
      const dniRegex = /^[0-9]{8}[A-Z]$/;
      this.documentoValido = dniRegex.test(doc);
    } else if (this.tipoDocumentoSeleccionado === 'NIE') {
      // NIE: X/Y/Z + 7 dígitos + letra A-Z
      const nieRegex = /^[XYZ][0-9]{7}[A-Z]$/;
      this.documentoValido = nieRegex.test(doc);
    } else {
      this.documentoValido = false;
    }
  }

  validarDocumentoBlur(): void {
    // Convertir a mayúscula para consistencia
    const doc = (this.numeroDocumento || '').toUpperCase();
    this.documentoValido = false;
    this.mensajeErrorDocumento = '';

    if (!this.tipoDocumentoSeleccionado || !doc) return;

    if (this.tipoDocumentoSeleccionado === 'DNI') {
      // Validar formato: 8 dígitos + letra
      const dniRegex = /^[0-9]{8}[A-Z]$/;
      if (!dniRegex.test(doc)) {
        this.mensajeErrorDocumento = 'El DNI debe tener 8 números y 1 letra (A-Z).';
        return;
      }

      // Validar letra del DNI
      const numeros = parseInt(doc.slice(0, 8), 10);
      const letra = doc.charAt(8);
      const letrasDNI = 'TRWAGMYFPDXBNJZSQVHLCKE';
      const letraCorrecta = letrasDNI[numeros % 23];

      if (letra !== letraCorrecta) {
        this.mensajeErrorDocumento = 'El número o letra del documento no es correcto';
        return;
      }

      // Si pasó todas las validaciones
      this.documentoValido = true;
    } else if (this.tipoDocumentoSeleccionado === 'NIE') {
      // Validar formato: X/Y/Z + 7 dígitos + letra
      const nieRegex = /^[XYZ][0-9]{7}[A-Z]$/;
      if (!nieRegex.test(doc)) {
        this.mensajeErrorDocumento = 'El NIE debe empezar con X/Y/Z, tener 7 números y 1 letra al final (A-Z).';
        return;
      }

      // Reemplazar letra inicial por número según fórmula
      let numeroInicial: string;
      switch (doc.charAt(0)) {
        case 'X':
          numeroInicial = '0';
          break;
        case 'Y':
          numeroInicial = '1';
          break;
        case 'Z':
          numeroInicial = '2';
          break;
        default:
          numeroInicial = '0';
      }

      const numeros = parseInt(numeroInicial + doc.slice(1, 8), 10);
      const letra = doc.charAt(8);
      const letrasDNI = 'TRWAGMYFPDXBNJZSQVHLCKE';
      const letraCorrecta = letrasDNI[numeros % 23];

      if (letra !== letraCorrecta) {
        this.mensajeErrorDocumento = 'El número o letra/s del documento no es correcto';
        return;
      }

      // Si pasó todas las validaciones
      this.documentoValido = true;
    }
  }

  //Borra el input del tipo de documento si se cambia de un tipo a otro
  onTipoDocumentoChange(nuevoTipo: string) {
    this.numeroDocumento = '';
    this.documentoValido = false;
    this.mensajeErrorDocumento = '';
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
      const input = document.querySelectorAll<HTMLInputElement>('.digit-input')[firstEmptyIndex];
      input?.focus();
    }
  }
}
