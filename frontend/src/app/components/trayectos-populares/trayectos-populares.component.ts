import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { IonicModule, NavController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { MatTableModule } from '@angular/material/table';
import { Evento, Eventos } from '../../models/eventos/eventos'
import { TravelService } from 'src/app/core/travel-services/travel.service';
import { MatDialog } from '@angular/material/dialog';
import { DetalleEventosComponent } from '../detalle-eventos/detalle-eventos.component';

@Component({
  selector: 'app-trayectos-populares',
  standalone: true,
  imports: [IonicModule, MatButton, TranslateModule, CommonModule, MatTableModule ],
  templateUrl: './trayectos-populares.component.html',
  styleUrls: ['./trayectos-populares.component.scss'],
})
export class TrayectosPopularesComponent  implements OnInit {
  displayedColumns: string[] = ['ciudad', 'fecha', 'detalles', 'viaje'];
  dataSource: Evento[] = [];
  expandedRows: { [key: number]: boolean } = {};

  constructor(private viajesService: TravelService,private navCtrl: NavController, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource = Eventos;
  }


  toggleExpand(index: number) {
    this.expandedRows[index] = !this.expandedRows[index];
  }

  isExpanded(index: number): boolean {
    return this.expandedRows[index];
  }

  /**
   * Función para crear un viaje a en función del evento seleccionado.
   * @param element 
   */
  crearViaje(element: any) {
    const viajeData = {
      origen: element.ciudad
    };
    this.viajesService.setViajeData(viajeData);
    this.navCtrl.navigateRoot('/data-viaje');
  }

  openDetallesModal(evento: string) {
    this.dialog.open(DetalleEventosComponent, {
      width: '400px',
      data: { evento }
    });
  }
}
