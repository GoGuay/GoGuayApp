import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import { construct } from 'ionicons/icons';
import { UserServicesService } from '../../../core/user-services/user-services.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-resumen-registro',
  imports: [IonicModule, MatIconModule, CommonModule],
  templateUrl: './resumen-registro.component.html',
  styleUrl: './resumen-registro.component.scss',
})
export class ResumenRegistroComponent implements OnInit {
  private destroy$ = new Subject<void>();
  email: string = '';
  fecha_nacmimiento: string = '';

  constructor(private userService: UserServicesService) {}

  ngOnInit() {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.userService.usuarioData$
      .pipe(takeUntil(this.destroy$))
      .subscribe((usuarioData) => {
        this.email = usuarioData?.formulario1?.email ?? '';
      });
  }
}
