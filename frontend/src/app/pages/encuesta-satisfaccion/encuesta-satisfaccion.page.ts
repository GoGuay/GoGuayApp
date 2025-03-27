import { Component, forwardRef, OnInit, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, NavController } from '@ionic/angular/standalone';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { HelpModalComponent } from 'src/app/components/help-modal/help-modal.component';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-encuesta-satisfaccion',
  templateUrl: './encuesta-satisfaccion.page.html',
  styleUrls: ['./encuesta-satisfaccion.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    CommonModule, 
    FormsModule, 
    MatButtonModule, 
    MatRadioModule, 
    MatCheckboxModule, 
    ReactiveFormsModule, 
    MatSliderModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EncuestaSatisfaccionPage),
      multi: true
    }
  ]
})
export class EncuestaSatisfaccionPage implements OnInit {

  encuestaForm: FormGroup;
  aspectos = [
    { nombre: 'Diseño' },
    { nombre: 'Facilidad para buscar un viaje' },
    { nombre: 'Localización de información relevante' },
    { nombre: 'Comprensión de términos y reglas de uso' }
  ];

  calificacionSeleccionada: number = 0; 
  estrellas = [1, 2, 3, 4, 5];

  constructor(private dialog: MatDialog, private navCtrl: NavController, private fb: FormBuilder) { 
    this.encuestaForm = this.fb.group({
      recomendacion: [0, Validators.required],
      sugerencias: ['']
    });
    this.aspectos.forEach((_, index) => {
      this.encuestaForm.addControl(`positivo${index}`, this.fb.control(false));
      this.encuestaForm.addControl(`negativo${index}`, this.fb.control(false));
    });
  }

  ngOnInit() { }

  toggleCheckbox(i: number, tipo: string) {
    if (tipo === 'positivo') {
      this.encuestaForm.patchValue({ [`negativo${i}`]: false });
    } else {
      this.encuestaForm.patchValue({ [`positivo${i}`]: false });
    }
  }

  seleccionarCalificacion(valor: number) {
    if (this.calificacionSeleccionada === valor) {
      this.calificacionSeleccionada = 0; 
      this.encuestaForm.patchValue({ recomendacion: 0 });
    } else {
      this.calificacionSeleccionada = valor; 
      this.encuestaForm.patchValue({ recomendacion: valor });
    }
    console.log('Calificación seleccionada:', this.calificacionSeleccionada);
  }

  verificarEncuesta() {
    console.log('Datos de la encuesta:', this.encuestaForm.value);
    const titulo: string = 'Encuesta realizada correctamente';
    const mensaje: string = 'Muchas gracias por realizar nuestra encuesta de satisfacción.';
    const dialogRef = this.dialog.open(HelpModalComponent, {
      data: { title: titulo, message: mensaje, showAcceptButton: true },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(() => {
      this.navCtrl.navigateRoot('/home');
    });
  }
}