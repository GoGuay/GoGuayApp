import { Component, forwardRef, OnInit, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, NavController } from '@ionic/angular/standalone';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { HelpModalComponent } from '../../components/help-modal/help-modal.component';
import { EncuestaService } from '../../core/encuesta_satisfaccion-service/encuesta_satisfaccion.service';
import { 
  Chart, 
  BarController, 
  BarElement, 
  CategoryScale, 
  LinearScale, 
  Tooltip, 
  Legend,
  Title
} from 'chart.js';


Chart.register(
  BarController, 
  BarElement, 
  CategoryScale, 
  LinearScale, 
  Tooltip, 
  Legend,
  Title
);

@Component({
  selector: 'app-encuesta-satisfaccion',
  templateUrl: './encuesta-satisfaccion.page.html',
  styleUrls: ['./encuesta-satisfaccion.page.scss'],
  standalone: true,
  imports: [
    IonContent,  
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
    { nombre: 'Diseño y apariencia', icono: 'fi-rr-palette' },
    { nombre: 'Facilidad para buscar viajes', icono: 'fi-rr-search' },
    { nombre: 'Uso del Centro de Mensajes', icono: 'fi-rr-comments' }, 
    { nombre: 'Sensación de seguridad y respeto', icono: 'fi-rr-shield-check' }, 
    { nombre: 'Comprensión de las normas', icono: 'fi-rr-interrogation' }
  ];

  calificacionSeleccionada: number = 0; 
  estrellas = [1, 2, 3, 4, 5];

  constructor(
    private dialog: MatDialog, 
    private navCtrl: NavController, 
    private fb: FormBuilder,
    private encuestaService: EncuestaService)
    
  { 
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
    if (this.encuestaForm.invalid || this.calificacionSeleccionada === 0) return;

    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const userId = userData?.usuario?.id;

    this.encuestaService.enviarEncuesta(this.encuestaForm.value, userId).subscribe({
      next: () => {
        const dialogRef = this.dialog.open(HelpModalComponent, {
          data: { 
            title: '¡Gracias!', 
            message: 'Tu opinión nos ayuda a hacer de GoGuay un lugar más seguro.', 
            showAcceptButton: true 
          },
          disableClose: true
        });

        dialogRef.afterClosed().subscribe(() => {
          this.navCtrl.navigateRoot('/home');
        });
      },
      error: (err) => {
        console.error('Error al enviar la encuesta', err);
      }
    });
  
  }

  getLabelRating(valor: number): string {
    const labels = ['Pésimo', 'Regular', 'Bueno', '¡Genial!', '¡Excelente!'];
    return labels[valor - 1];
  }

  toggleAspect(index: number, tipo: 'positivo' | 'negativo') {
    const ctrlPos = this.encuestaForm.get(`positivo${index}`);
    const ctrlNeg = this.encuestaForm.get(`negativo${index}`);

    if (tipo === 'positivo') {
      const newVal = !ctrlPos?.value;
      ctrlPos?.setValue(newVal);
      if (newVal) ctrlNeg?.setValue(false);
    } else {
      const newVal = !ctrlNeg?.value;
      ctrlNeg?.setValue(newVal);
      if (newVal) ctrlPos?.setValue(false);
    }
  }

  goBack() {
    this.navCtrl.back();
  }
}