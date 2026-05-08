import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { EncuestaService } from '../../../core/encuesta_satisfaccion-service/encuesta_satisfaccion.service';
import { NavbarAdmin } from "../shared-admin/navbar-admin/navbar-admin.page";
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-gestion-encuestas',
  templateUrl: './gestion-encuestas.page.html',
  styleUrls: ['./gestion-encuestas.page.scss'],
  imports: [CommonModule, NavbarAdmin, IonicModule, DatePipe],
})
export class GestionEncuestasPage implements OnInit {

    todasLasEncuestas: any[] = [];
    encuestasFiltradas: any[] = [];
    filtroNota: any = 'todas';
    textoBusqueda: string = '';

    constructor(
        private encuestaService: EncuestaService,
        private navCtrl: NavController
    ) { }

    ngOnInit() {
        this.cargarEncuestas();
    }

    cargarEncuestas() {
        this.encuestaService.getTodasLasEncuestas().subscribe({
        next: (res) => {
            this.todasLasEncuestas = res;
            this.encuestasFiltradas = res;
        },
        error: (err) => console.error(err)
        });
    }

    filtrarPorNota(nota: any) {
        this.filtroNota = nota;
        this.aplicarFiltros();
    }

    buscar(event: any) {
        this.textoBusqueda = event.target.value.toLowerCase();
        this.aplicarFiltros();
    }

    aplicarFiltros() {
        this.encuestasFiltradas = this.todasLasEncuestas.filter(e => {
        const cumpleNota = this.filtroNota === 'todas' || e.calificacion === this.filtroNota;
        const cumpleBusqueda = !this.textoBusqueda || e.sugerencias?.toLowerCase().includes(this.textoBusqueda);
        return cumpleNota && cumpleBusqueda;
        });
    }

    getEstrellas(nota: number): string {
        return '⭐'.repeat(nota);
    }

    getCardClass(nota: number): string {
        if (nota >= 4) return 'rating-high';
        if (nota === 3) return 'rating-mid';
        return 'rating-low';
    }

    getLabelRating(nota: number): string {
        const labels = ['Muy Insatisfecho', 'Insatisfecho', 'Neutral', 'Satisfecho', 'Excelente'];
        return labels[nota - 1] || 'Sin Nota';
    }

    goBack() {
        this.navCtrl.back();
    }
}