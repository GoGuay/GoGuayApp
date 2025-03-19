import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Subscription } from 'rxjs';
import { FuncionesComunes } from 'src/app/core/funciones-comunes/funciones-comunes.service';
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { UserServicesService } from 'src/app/core/user-services/user-services.service';
import { Viaje } from 'src/app/models/travel/viaje.model';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Usuario } from 'src/app/models/user/usuario.model';
import { ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-viaje-seleccionado',
  standalone: true,
  imports: [ 
    MatDivider, 
    MatIcon, 
    MatDialogContent,
    MatDialogActions, 
    MatButtonModule, 
    CommonModule, 
    MatAccordion, 
    MatExpansionModule, 
    MatFormFieldModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
  templateUrl: './viaje-seleccionado.component.html',
  styleUrls: ['./viaje-seleccionado.component.scss'],
})
export class ViajeSeleccionadoComponent implements OnInit, OnDestroy {
  yaUnido: boolean = false;
  preferencias: string = '';
  userID!: number;
  viaje!: Viaje;
  viajesSubscription: Subscription = new Subscription(); 
  accordion = viewChild.required(MatAccordion);
  conductor: boolean = false;
  userData: Usuario = {} as Usuario;

  constructor(
    private dialogRef: MatDialogRef<ViajeSeleccionadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { viaje: Viaje },
    public funcionesComunes: FuncionesComunes,
    private travelService: TravelService,
    private usersService: UserServicesService,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {
    this.preferencias = this.funcionesComunes.validacionPreferencias(this.data);
    this.viaje = { ...this.data.viaje };
    this.verificarSiEstaUnido();
  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    console.log('DETALLES DEL VIAJE: ', this.data);
    
    this.obtenerUsuarioActual();
    this.obtenerViajesActualizados();
    this.validarSiEsConductor(this.userData.usuario.id, this.data.viaje);
  }

  ngOnDestroy() {
    if (this.viajesSubscription) {
      this.viajesSubscription.unsubscribe();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  /**
   * Función para obtener los datos del usuario logado.
   * 
   */
  obtenerUsuarioActual() {
    this.usersService.obtenerUsuarioPorID(this.data.viaje.usuario_id).subscribe({
      next: (usuario) => {
        this.userID = usuario.id;
        this.verificarSiEstaUnido();
      },
      error: (error) => {
        console.error('Error al obtener el usuario:', error);
      }
    });
  }

  /**
   * Función para obtener los datos del viaje seleccionado.
   * 
   */
  obtenerViajesActualizados() {
    this.viajesSubscription = this.travelService.viajeData$.subscribe((viajes) => {
      if (viajes && Array.isArray(viajes)) { 
        const viajeActualizado = viajes.find((viaje: Viaje) => viaje.id === this.viaje.id);
        if (viajeActualizado) {
          this.viaje = viajeActualizado;  
        }
      } else {
        console.warn('No se encontraron viajes actualizados o el formato no es correcto.');
      }
    });
  }

/**
 * Función para verificar si el usuario ya está unido al viaje seleccionado.
 */
verificarSiEstaUnido() {
  const userDataString = localStorage.getItem('userData');

  if (!userDataString) {
    console.error('No hay datos de usuario en el almacenamiento local.');
    this.yaUnido = false;
    return;
  }

  const userData = JSON.parse(userDataString);
  const usuarioId = userData.usuario.id;

  this.travelService.getViaje(this.data.viaje.id).subscribe({
    next: (viaje) => {
      // Se busca en la lista de acompañantes si el usuario ya está unido
      this.yaUnido = viaje.acompanantes.some((acompañante: any) => acompañante.id === usuarioId);
      this.cdRef.detectChanges();
    },
    error: (error) => {
      console.error('Error al obtener el viaje:', error);
      this.yaUnido = false;
      this.cdRef.detectChanges();
    }
  });
}


  /**
   * Función para unirse a un viaje.
   * 
   * @param viajeID 
   * @returns 
   */
  unirseAViaje(viajeID: number) {
    const title_error: string = '¡Algo anda mal!';
    const message_ya_unico: string = '<p>Ya estás unido a este viaje.</p>';
    const title_viaje_confirmado: string = '¡Confirmado!';
    const message_viaje_confirmado: string = 'Te has unido al viaje correctamente.';
    const message_error: string = 'Ya estás unido a este viaje.';
  
    if (this.yaUnido) {
      this.funcionesComunes.openConfirmModal(title_error, message_ya_unico);
      return;
    }
  
    this.travelService.unirseAViaje(viajeID).subscribe({
      next: (response) => {
        const viajesActualizados = response; 
  
        const viajeActualizado = viajesActualizados.find((viaje: any) => viaje.id === viajeID);
  
        if (viajeActualizado) {
          this.viaje = viajeActualizado; 
          this.viaje.plazas = viajeActualizado.plazas; 
  
          const dialogRef = this.funcionesComunes.openConfirmModal(title_viaje_confirmado, message_viaje_confirmado);
          this.yaUnido = true;

          this.cdRef.detectChanges(); 

          dialogRef.afterClosed().subscribe(() => {
            this.obtenerViajesActualizados()
           });
        } else {
          this.funcionesComunes.openErrorModal(title_error, 'No se encontró el viaje actualizado.');
        }
      },
      error: (error) => {
        this.funcionesComunes.openErrorModal(title_error, message_error);
      }
    });
  }
  

  /**
   * Función para redirigir al perfil público del usuario.
   * 
   * @param id_usuario 
   */
  masDetallesUsuario(id_usuario: number){
    const usuario = {
      id: id_usuario
    }
    this.router.navigate(['/perfil-publico'], {
      queryParams: usuario,
    });
    this.closeDialog();
  }
  
  /**
   * Función para validar si el usuario que está viendo los detalles 
   * es conductor en el viaje o no.
   * 
   * @param usuario_id 
   * @param viaje 
   */
  validarSiEsConductor(usuario_id: number, viaje: Viaje) {
    if(usuario_id === viaje.usuario_id) {
      this.conductor = true;
    } else {this.conductor = false;}
  }
}
