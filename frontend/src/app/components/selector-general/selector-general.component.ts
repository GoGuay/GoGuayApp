import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  ElementRef,
  ViewChild,
  OnInit,
  ChangeDetectorRef,
  HostListener,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-selector-general',
  templateUrl: './selector-general.component.html',
  styleUrls: ['./selector-general.component.scss'],
  imports: [TranslateModule, MatTooltipModule, CommonModule, IonicModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectorGeneralComponent),
      multi: true,
    },
  ],
})
export class SelectorGeneralComponent implements ControlValueAccessor, OnChanges, OnInit {
  @ViewChild('popover') popover!: HTMLIonPopoverElement;
  @ViewChild('inputRef') inputRef!: ElementRef;
  @Input() idUnico: string = 'selector';
  @Input() labelKey: string = '';
  @Input() placeholderKey: string = '';
  @Input() tooltipKey: string = '';
  @Input() popoverKey: string = '';
  @Input() soloLectura: boolean = false;
  @Input() opciones: any[] = [];
  @Input() valor: any = '';
  @Input() ariaLabel: string = '';
  @Input() mostrarFlechaSelector: boolean = true;
  @Input() iconoPath: string = '';
  @Input() permitirTextoLibre: boolean = false; // ⭐️ NUEVO: Controla si permite texto libre o exige selección estricta

  @Output() seleccionCambiada = new EventEmitter<any>();
  @Output() alAbrir = new EventEmitter<void>();
  @Output() textoCambiado = new EventEmitter<string>();

  sugerencias: any[] = [];
  estaActivo: boolean = false;
  indiceActivo: number = -1;
  valorTexto: string = '';
  private valorGuardadoActual: any = null;
  onChange = (val: any) => {};
  onTouched = () => {};
  isOpen: boolean = false;
  isDesktop: boolean = window.innerWidth >= 992;

  ngOnInit() {
    this.translate.onLangChange.subscribe(() => {
      this.actualizarTextoVisual();
    });
  }

  constructor(
    private cdr: ChangeDetectorRef,
    private elementRef: ElementRef,
    private translate: TranslateService
  ) {
    window.addEventListener('resize', () => {
      this.isDesktop = window.innerWidth >= 992;
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.estaActivo = false;
      this.sugerencias = [];
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['valor'] && !changes['valor'].firstChange) {
      this.writeValue(this.valor);
    }

    if (changes['opciones'] && this.opciones?.length > 0) {
      if (!this.estaActivo) {
        this.actualizarTextoVisual();
      } else {
        this.sugerencias = [...this.opciones];
      }
    }
  }

  writeValue(value: any): void {
    if (value === this.valorTexto) {
      return;
    }
    if (value !== undefined && value !== null && value !== '') {
      this.valorGuardadoActual = value;
      this.valorTexto = value;
      this.actualizarTextoVisual();
    } else {
      this.valorGuardadoActual = null;
      this.valorTexto = '';
      this.cdr.detectChanges();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  seleccionarOpcion(opcion: any) {
    const textoSeleccionado = this.obtenerTextoOpcion(opcion);
    this.valorTexto = textoSeleccionado;

    const valorParaGuardar = typeof opcion === 'string' ? opcion : (opcion.valor !== undefined ? opcion.valor : textoSeleccionado);
    this.valorGuardadoActual = valorParaGuardar;
    
    this.onChange(valorParaGuardar);
    this.seleccionCambiada.emit(opcion);

    this.sugerencias = [];
    this.estaActivo = false;
    this.indiceActivo = -1;

    if (this.inputRef && this.inputRef.nativeElement) {
      setTimeout(() => {
        this.enfocarSiguienteElemento(this.inputRef.nativeElement);
      }, 50);
    }
  }

  private enfocarSiguienteElemento(elementoActual: HTMLElement) {
    const focusableElements = Array.from(
      document.querySelectorAll(
        'input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
      )
    ) as HTMLElement[];

    const index = focusableElements.indexOf(elementoActual);

    if (index > -1 && index + 1 < focusableElements.length) {
      focusableElements[index + 1].focus();
    } else {
      elementoActual.blur();
    }
  }

  filtrarOpciones(event: any) {
    const texto = event.target.value;
    this.valorTexto = texto;
    
    // Si permite texto libre, propagamos el texto directamente
    if (this.permitirTextoLibre) {
      this.onChange(texto);
      this.seleccionCambiada.emit(texto);
    }

    this.textoCambiado.emit(texto);
    this.estaActivo = true;
    this.indiceActivo = -1;
    this.alAbrir.emit();

    if (!texto.trim()) {
      this.sugerencias = [...this.opciones];
      return;
    }

    const filtro = texto.toLowerCase();
    this.sugerencias = this.opciones.filter((op) => this.obtenerTextoOpcion(op).toLowerCase().includes(filtro));
  }

  manejarNavegacionTeclado(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      this.sugerencias = [];
      this.estaActivo = false;
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!this.estaActivo) {
        this.abrirSelector();
      } else if (this.sugerencias.length > 0) {
        this.indiceActivo = (this.indiceActivo + 1) % this.sugerencias.length;
        this.asegurarVisibilidadScroll();
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (this.sugerencias.length > 0) {
        this.indiceActivo = (this.indiceActivo - 1 + this.sugerencias.length) % this.sugerencias.length;
        this.asegurarVisibilidadScroll();
      }
    } else if (event.key === 'Enter') {
      event.preventDefault();
      if (this.estaActivo && this.indiceActivo >= 0 && this.sugerencias[this.indiceActivo]) {
        this.seleccionarOpcion(this.sugerencias[this.indiceActivo]);
      }
    } else if (event.key === 'Escape') {
      this.sugerencias = [];
      this.estaActivo = false;
    }
  }

  onInputBlur() {
    setTimeout(() => {
      this.estaActivo = false;
      this.sugerencias = [];
      this.indiceActivo = -1;

      // ⭐️ VALIDACIÓN ESTRICTA: Si no permite texto libre, verificamos si lo escrito coincide con una opción válida
      if (!this.permitirTextoLibre && this.valorTexto.trim() !== '') {
        const opcionValida = this.opciones.find(
          (op) => this.obtenerTextoOpcion(op).toLowerCase() === this.valorTexto.toLowerCase()
        );

        if (!opcionValida) {
          // Si no coincide con ninguna opción de la lista, limpiamos el campo
          this.valorTexto = '';
          this.valorGuardadoActual = null;
          this.onChange('');
          this.seleccionCambiada.emit(null);
          this.textoCambiado.emit('');
        }
      }

      this.cdr.detectChanges();
    }, 150);
    this.onTouched();
  }

  manejarClickInput() {
    if (this.soloLectura) {
      if (this.estaActivo) {
        this.estaActivo = false;
        this.sugerencias = [];
      } else {
        this.abrirSelector();
      }
    }
  }

  private asegurarVisibilidadScroll() {
    setTimeout(() => {
      const elementoActivo = document.getElementById(`sugerencia-${this.idUnico}-${this.indiceActivo}`);
      if (elementoActivo) {
        elementoActivo.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    });
  }

  obtenerTextoOpcion(opcion: any): string {
    if (typeof opcion === 'string') return opcion;
    if (!opcion) return '';
    const desc = opcion.descripcion || opcion.nombre || '';
    return desc.includes('.') ? this.translate.instant(desc) : desc;
  }

  presentPopover(event: Event) {
    if (!this.isDesktop && this.popoverKey) {
      event.stopPropagation();
      this.isOpen = true;
    }
  }

  abrirSelector() {
    this.sugerencias = [...this.opciones];
    this.estaActivo = true;
    this.indiceActivo = -1;
    this.alAbrir.emit();
  }

  private actualizarTextoVisual() {
    if (!this.valorGuardadoActual) {
      this.valorTexto = '';
      this.cdr.detectChanges();
      return;
    }

    if (!this.opciones || this.opciones.length === 0) {
      return;
    }

    const opcionEncontrada = this.opciones.find(
      (op) => (typeof op === 'string' ? op : op.valor) === this.valorGuardadoActual
    );

    if (opcionEncontrada) {
      this.valorTexto = this.obtenerTextoOpcion(opcionEncontrada);
    } else {
      this.valorTexto = typeof this.valorGuardadoActual === 'string' ? this.valorGuardadoActual : '';
    }

    this.cdr.detectChanges();
  }
}