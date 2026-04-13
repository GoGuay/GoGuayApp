import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { IonicModule } from "@ionic/angular";
import { NavbarAdmin } from "../shared-admin/navbar-admin/navbar-admin.page";
import { Evento, Eventos } from "src/app/models/eventos/eventos";

@Component({
    selector: 'app-eventos-admin',
    templateUrl: './eventos-admin.page.html',
    styleUrls: ['./eventos-admin.page.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, MatDialogModule, NavbarAdmin]
})
export class EventosAdmin implements OnInit {
    eventForm: FormGroup;
    listaEventos: Evento[] = [...Eventos];
    showForm = false;

    constructor() {
        this.eventForm = new FormGroup({
            nombre_evento: new FormControl('', [Validators.required]),
            ciudad: new FormControl('', [Validators.required]),
            fecha_inicio: new FormControl('', [Validators.required]),
            fecha_fin: new FormControl('', [Validators.required]),
            descripcion: new FormControl('', [Validators.required]),
            imagen: new FormControl('', [Validators.required]),
            enlace_info: new FormControl('')
        });
    }

    ngOnInit() { }

    toggleForm() {
        this.showForm = !this.showForm;
    }

    crearEvento() {
        if (this.eventForm.valid) {
            const nuevoEvento = {
                id: Date.now(),
                ...this.eventForm.value
            };
            this.listaEventos.unshift(nuevoEvento);
            this.eventForm.reset();
            this.showForm = false;
        }
    }

    eliminarEvento(id: number) {
        this.listaEventos = this.listaEventos.filter(e => e.id !== id);
    }
}