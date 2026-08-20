import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  @Input() texto_spinner: string = 'Cargando...';
  @Input() tamano_completo: boolean = true;

  constructor() {}

  ngOnInit() {}
}
