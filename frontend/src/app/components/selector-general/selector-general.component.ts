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

  @Output() seleccionCambiada = new EventEmitter<any>(); //para usar sin formulario reactivos
  @Output() alAbrir = new EventEmitter<void>(); // NUEVO: Para avisar al padre si es necesario

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

    if (changes['opciones'] && this.opciones.length > 0) {
      this.actualizarTextoVisual();
    }
  }

  writeValue(value: any): void {
    console.log('📥 [HIJO writeValue] Recibido del padre:', value);
    if (value !== undefined && value !== null && value !== '') {
      this.valorGuardadoActual = value;
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

    const valorParaGuardar = typeof opcion === 'string' ? opcion : opcion.valor;
    this.onChange(valorParaGuardar);

    this.seleccionCambiada.emit(opcion);

    this.sugerencias = [];
    this.estaActivo = false;
    this.indiceActivo = -1;

    if (this.inputRef && this.inputRef.nativeElement) {
      this.inputRef.nativeElement.blur();
    }
  }

  filtrarOpciones(event: any) {
    const texto = event.target.value;
    this.valorTexto = texto;
    this.onChange(texto);
    this.seleccionCambiada.emit(texto);
    this.estaActivo = true;
    this.indiceActivo = -1;

    if (!texto.trim()) {
      this.sugerencias = [...this.opciones];
      return;
    }

    const filtro = texto.toLowerCase();
    this.sugerencias = this.opciones.filter((op) => this.obtenerTextoOpcion(op).toLowerCase().includes(filtro));
  }

  manejarNavegacionTeclado(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (this.sugerencias.length > 0) {
        this.estaActivo = true;
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
      if (this.indiceActivo >= 0 && this.sugerencias[this.indiceActivo]) {
        this.seleccionarOpcion(this.sugerencias[this.indiceActivo]);
      }
    } else if (event.key === 'Escape') {
      this.sugerencias = [];
      this.estaActivo = false;
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
    return opcion.descripcion.includes('.') ? this.translate.instant(opcion.descripcion) : opcion.descripcion;
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

  // Método centralizado para buscar la opción y traducirla correctamente
  private actualizarTextoVisual() {
    console.log('🔍 [HIJO actualizarTextoVisual] Buscando valor guardado:', this.valorGuardadoActual);
    console.log('📋 [HIJO] Opciones disponibles:', this.opciones);

    if (!this.valorGuardadoActual) {
      this.valorTexto = '';
      this.cdr.detectChanges(); // ⭐️ Añadido aquí para limpiar al instante
      return;
    }

    if (!this.opciones || this.opciones.length === 0) {
      return;
    }

    const opcionEncontrada = this.opciones.find((op) => (typeof op === 'string' ? op : op.valor) === this.valorGuardadoActual);
    console.log('🎯 [HIJO] Opción encontrada en la lista:', opcionEncontrada);

    if (opcionEncontrada && typeof opcionEncontrada === 'object') {
      if (opcionEncontrada.descripcion && opcionEncontrada.descripcion.includes('.')) {
        this.valorTexto = this.translate.instant(opcionEncontrada.descripcion);
      } else {
        this.valorTexto = opcionEncontrada.descripcion;
      }
    } else {
      this.valorTexto = this.valorGuardadoActual;
    }

    this.cdr.detectChanges();
  }
}
