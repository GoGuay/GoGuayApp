export interface UsuarioSinToken {
  id: number;
  nombre: string;
  apellidos: string;
  email?: string;
  pronombre?: string;
  genero?: string;
  orientacion?: string;
  password?: string;
  telefono?: string;
  biografia?: string;
  fecha_nacimiento?: string;
  fotoPerfil?: string;
  fotoCabecera?: string;
  rolPerfil: 'usuario' | 'admin' | 'moderador';
  carnet_conducir_verificado?: boolean;
  fotoDocumentoDelantera?: string;
  fotoDocumentoTrasera?: string;
  fotoCarnetCondDelantera?: string;
  fotoCarnetCondTrasera?: string;
  dni_verificado?: boolean;
  numero_carnet_conducir?: string;
  preferencias?: string[];
  fecha_vencimiento_carnet?: string;
  comunic_comerciales?: boolean;
  comunic_terceros?: boolean;
  vehiculos?: any;
  created_at?: string;
  updated_at?: string;
  token?: string;

}
