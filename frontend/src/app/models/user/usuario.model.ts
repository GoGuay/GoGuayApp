export interface Usuario {
  access_token?: string;
  refresh_token?: string;
  usuario: {
    id: number;
    password?: string;
    emailVerificado?: boolean;
    telefonoVerificado?: boolean;

    nombre: string;
    apellidos: string;
    email?: string;
    telefono?: string | null;
    genero?: string;
    orientacion?: string;
    pronombre?: string | null;
    biografia?: string | null;
    fecha_nacimiento?: string | undefined;

    registroPrevio?: boolean;
    registroFinalizado?: boolean;
    fotoPerfil?: string | null;
    fotoPublicId?: string | null;
    fotoCabecera?: string | null;
    preferencias?: string[] | { convivencia_viaje: string[]; intereses_ocio: string[] };
    rolPerfil: 'usuario' | 'admin' | 'moderador';
    comunic_comerciales?: boolean;
    comunic_terceros?: boolean;

    metodo_pago_preferido?: 'paypal' | 'tarjeta' | string;
    metodo_cobro_preferido?: 'paypal' | 'transferencia' | 'monedero' | string;

    paypal_email?: string | null;
    paypal_payer_id?: string | null;
    paypal_vinculado?: boolean;
    paypal_fecha_vinculacion?: string | null;

    tarjeta_numero?: string | null;
    tarjeta_caducidad?: string | null;
    tarjeta_exp?: string | null;
    tarjeta_titular?: string | null;
    tarjeta_info?: {
      numero: string | null;
      caducidad: string | null;
      titular: string | null;
    } | null;

    cobro_iban?: string | null;
    cobro_titular?: string | null;
    cobro_paypal_email?: string | null;

    vehiculos?: any[];
    puntuaciones?: number;
    opiniones?: Array<{
      id: number;
      puntuacion: number;
      comentario: string;
      fecha: string | null;
      evaluador: {
        id: number;
        nombre: string;
        fotoPerfil: string | null;
      } | null;
      viaje: {
        id: number;
        origen: string;
        destino: string;
        fecha_salida: string | null;
      } | null;
    }>;

    puntos_conductor?: number;
    puntos_pasajero?: number;
    nivel_conductor?: string;
    nivel_pasajero?: string;
    historial_cancelaciones?: Array<{
      id: number;
      rol: string;
      puntos: number;
      motivo: string;
      fecha: string | null;
    }>;

    carnet_conducir_verificado?: boolean;
    fotoDocumentoDelantera?: string;
    fotoDocumentoTrasera?: string;
    fotoCarnetCondDelantera?: string;
    fotoCarnetCondTrasera?: string;
    numero_documento?: string;
    dni_verificado?: boolean;
    numero_carnet_conducir?: string;
    fecha_vencimiento_carnet?: string;

    token?: string;
    ya_ha_sido_suspendido?: boolean;
    motivo_bloqueo?: string | null;
    bloqueado_desde?: string | Date | null;
    bloqueado_hasta?: string | Date | null;

    perfil_eliminado_por_usuario?: boolean;
    fecha_eliminacion_por_usuario?: string | null;
    fecha_limite_reactivacion?: string | null;
    fecha_prevista_borrado_definitivo?: string | null;
    contador_reactivaciones_perfil?: number;

    created_at?: string;
    updated_at?: string;
  };
}