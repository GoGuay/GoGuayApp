import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { IonicModule, NavController } from '@ionic/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { Usuario } from '../../models/user/usuario.model';
import { FuncionesComunes } from '../../core/funciones-comunes/funciones-comunes.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-centro-contacto',
  templateUrl: './centro-contacto.page.html',
  styleUrls: ['./centro-contacto.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    NavbarComponent, 
    MatDividerModule, 
    MatButtonModule,
    ToastModule
  ],
  providers: [MessageService]
})
export class CentroContactoPage implements OnInit {

  userLoggedIn: boolean = false;
  userData: Usuario = {} as Usuario;
  contactoForm: FormGroup;
  cargando: boolean = false;

  constructor(
    private funcionesComunes: FuncionesComunes,
    private fb: FormBuilder,
    private messageService: MessageService,
    private navCtrl: NavController
  ) {
    this.contactoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', [Validators.required]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.userLoggedIn = this.funcionesComunes.isUserLoggedIn();

    if (this.userLoggedIn && this.userData.usuario) {
      this.contactoForm.patchValue({
        nombre: `${this.userData.usuario.nombre} ${this.userData.usuario.apellidos}`,
        email: this.userData.usuario.email
      });
    }
  }

  enviarFormulario() {
    if (this.contactoForm.invalid) {
      this.messageService.add({
        severity: 'error', 
        summary: 'Formulario incompleto', 
        detail: 'Por favor, rellena todos los campos correctamente.'
      });
      return;
    }

    this.cargando = true;
    
    console.log('Enviando datos a gestion.gogay@gmail.com:', this.contactoForm.value);

    setTimeout(() => {
      this.cargando = false;
      this.messageService.add({
        severity: 'success',
        summary: 'Mensaje enviado',
        detail: 'Hemos recibido tu consulta. Te responderemos muy pronto.',
        life: 3000
      });

      setTimeout(() => this.navCtrl.back(), 2000);
    }, 1500);
  }
}