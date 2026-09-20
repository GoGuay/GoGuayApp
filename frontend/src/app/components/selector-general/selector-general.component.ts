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
  @Input() permitirTextoLibre: boolean = false;

  @Output() seleccionCambiada = new EventEmitter<any>();
  @Output() alAbrir = new EventEmitter<void>();
  @Output() textoCambiado = new EventEmitter<string>();

  sugerencias: any[] = [];
  estaActivo: boolean = false;
  indiceActivo: number = -1;
  valorTexto: string = '';
  private valorGuardadoActual: any = null;
  private seleccionandoOpcionEnProceso: boolean = false;
  private _valorValidoPrevio: string = '';

  onChange = (val: any) => { };
  onTouched = () => { };
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
    if (value !== undefined && value !== null && value !== '') {
      this.valorGuardadoActual = value;
      this.actualizarTextoVisual();
    } else {
      this.valorGuardadoActual = null;
      this.valorTexto = '';
      this._valorValidoPrevio = '';
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
    this.seleccionandoOpcionEnProceso = true;

    const textoSeleccionado = this.obtenerTextoOpcion(opcion);
    this.valorTexto = textoSeleccionado;
    this._valorValidoPrevio = textoSeleccionado;

    const valorParaGuardar = typeof opcion === 'string' ? opcion : (opcion.valor !== undefined ? opcion.valor : textoSeleccionado);

    this.valorGuardadoActual = valorParaGuardar;
    this.onChange(valorParaGuardar);
    this.seleccionCambiada.emit(opcion);

    this.sugerencias = [];
    this.estaActivo = false;
    this.indiceActivo = -1;

    setTimeout(() => {
      this.seleccionandoOpcionEnProceso = false;
    }, 400);

    if (this.inputRef && this.inputRef.nativeElement) {
      setTimeout(() => {
        this.enfocarSiguienteElemento(this.inputRef.nativeElement);
      }, 50);
    }
    this.cdr.detectChanges();
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
    if (this.seleccionandoOpcionEnProceso) {
      return;
    }

    this.estaActivo = false;
    this.sugerencias = [];
    this.indiceActivo = -1;

    if (!this.permitirTextoLibre) {
      const textoEscrito = this.valorTexto ? this.valorTexto.trim() : '';

      if (textoEscrito === '') {
        this.valorGuardadoActual = null;
        this._valorValidoPrevio = '';
        this.valorTexto = '';
        this.onChange('');
        this.seleccionCambiada.emit(null);
        this.textoCambiado.emit('');
      } else {
        const opcionEnSugerencias = this.opciones.find(
          (op) => this.obtenerTextoOpcion(op).toLowerCase() === textoEscrito.toLowerCase()
        );

        if (opcionEnSugerencias) {
          this.seleccionarOpcion(opcionEnSugerencias);
        } else {
          this.valorTexto = this._valorValidoPrevio;

          if (this.inputRef && this.inputRef.nativeElement) {
            this.inputRef.nativeElement.value = this._valorValidoPrevio;
          }

          this.onChange(this.valorGuardadoActual);
          this.textoCambiado.emit(this._valorValidoPrevio);
        }
      }
    }

    this.cdr.detectChanges();
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
    const desc = opcion.descripcion || opcion.nombre || opcion.valor || '';
    const textoStr = String(desc);
    return textoStr.includes('.') ? this.translate.instant(textoStr) : textoStr;
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
      this._valorValidoPrevio = '';
      this.cdr.detectChanges();
      return;
    }

    if (!this.opciones || this.opciones.length === 0) {
      const textoFallback = typeof this.valorGuardadoActual === 'string' ? this.valorGuardadoActual : '';
      this.valorTexto = textoFallback;
      this._valorValidoPrevio = textoFallback;
      this.cdr.detectChanges();
      return;
    }

    const opcionEncontrada = this.opciones.find(
      (op) => (typeof op === 'string' ? op : (op.valor || op.descripcion || op.nombre)) === this.valorGuardadoActual
    );

    if (opcionEncontrada) {
      this.valorTexto = this.obtenerTextoOpcion(opcionEncontrada);
    } else {
      this.valorTexto = typeof this.valorGuardadoActual === 'string' ? this.valorGuardadoActual : '';
    }

    this._valorValidoPrevio = this.valorTexto;

    if (this.inputRef && this.inputRef.nativeElement) {
      this.inputRef.nativeElement.value = this.valorTexto;
    }

    this.cdr.detectChanges();
  }
}