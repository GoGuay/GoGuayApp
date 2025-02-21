export interface Usuario {
  access_token: string;
  usuario: {
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
    rolPerfil: 'usuario' | 'admin' | 'moderador';
    carnet_conducir_verificado?: boolean;
    numero_carnet_conducir?: string;
    fecha_vencimiento_carnet?: string;
    vehiculos?: string;
    created_at?: string;
    updated_at?: string;
    token?: string;
  };
}

// Faltaría definir el dato:
// preferencias
