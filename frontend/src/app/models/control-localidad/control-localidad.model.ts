import { Subject } from 'rxjs';

export interface ControlLocalidad {
  valorTexto: string;
  sugerencias: any[];
  indiceActivo: number;
  ultimaLocalidadValida: any | null;
  estaActivo: boolean;
  buscandoSeleccion: boolean;
  buscador$: Subject<string>;
}
