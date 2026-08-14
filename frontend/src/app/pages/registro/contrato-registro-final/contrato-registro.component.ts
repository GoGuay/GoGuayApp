import {
  Component,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contrato-registro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contrato-registro.component.html',
  styleUrls: ['./contrato-registro.component.scss'],
})
export class ContratoRegistroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('elementoFinal')
  private elementoFinal!: ElementRef<HTMLDivElement>;

  @Output() lecturaCompletada = new EventEmitter<void>();
  @Output() solicitarCierre = new EventEmitter<void>();

  leido: boolean = false;
  private observer?: IntersectionObserver;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.iniciarObservadorScroll();
  }

  private iniciarObservadorScroll(): void {
    if (!this.elementoFinal?.nativeElement) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !this.leido) {
          this.leido = true;
          // Notifica al componente padre
          this.lecturaCompletada.emit();
          // Fuerza la actualización del DOM local
          this.cdr.detectChanges();
          // Detiene el observador una vez alcanzado el final
          this.destruirObservador();
        }
      },
      {
        // Detección flexible cuando el centinela entra en vista
        threshold: 0.1,
      },
    );

    this.observer.observe(this.elementoFinal.nativeElement);
  }

  notificarCierre(): void {
    this.solicitarCierre.emit();
  }

  private destruirObservador(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
  }

  ngOnDestroy(): void {
    this.destruirObservador();
  }
}
