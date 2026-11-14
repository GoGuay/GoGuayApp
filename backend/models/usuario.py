from flask import json
from models.enums import PreferenciasViajeEnum, RolUsuarioEnum, Genero, Orientacion
from models.cancelacion import Cancelacion
from extensions import db
from datetime import datetime, timezone, timedelta
from enum import Enum
from sqlalchemy import JSON
import statistics


class Usuario(db.Model):
    __tablename__ = 'usuarios'
    # --- 1. CLAVE PRIMARIA Y CREDENCIALES ---
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    password = db.Column(db.String(250), nullable=True)
    emailVerificado = db.Column(db.Boolean, default=False)
    telefonoVerificado = db.Column(db.Boolean, default=False, nullable=True)

    # --- 2. DATOS PERSONALES ---
    nombre = db.Column(db.String(120), nullable=False)
    apellidos = db.Column(db.String(250), nullable=False)
    email = db.Column(db.String(250), unique=True, nullable=False)    
    telefono = db.Column(db.String(15), unique=True, nullable=True)
    genero = db.Column(db.String(50), nullable=False, default=Genero.defecto.value)
    orientacion = db.Column(db.String(50), nullable=False, default=Orientacion.defecto.value) 
    pronombre = db.Column(db.String(250), nullable=True)
    biografia = db.Column(db.String(500), nullable=True) 
    fecha_nacimiento = db.Column(db.Date)
    
    # --- 3. CONFIGURACIÓN Y PREFERENCIAS DE PERFIL ---
    registroPrevio = db.Column(db.Boolean, default=False)
    registroFinalizado = db.Column(db.Boolean, default=False)
    fotoPerfil = db.Column(db.String(250), nullable=True)
    fotoPublicId = db.Column(db.String(255), nullable=True) 
    fotoCabecera = db.Column(db.String(250), nullable=True)
    preferencias = db.Column(JSON, nullable=True)     
    rolPerfil = db.Column(db.String(50), nullable=True, default=RolUsuarioEnum.usuario.value)  #usuario o administrador  
    comunic_comerciales = db.Column(db.Boolean, default=False, nullable=True)
    comunic_terceros = db.Column(db.Boolean, default=False, nullable=True)

    # --- 4. MÉTODOS DE PAGO Y COBRO ---
    metodo_pago_preferido = db.Column(db.String(50), nullable=True, default='paypal')
    metodo_cobro_preferido = db.Column(db.String(50), nullable=True, default='transferencia')
    
    # PayPal (Vinculación OAuth)
    paypal_email = db.Column(db.String(250), nullable=True)
    paypal_payer_id = db.Column(db.String(100), unique=True, nullable=True)
    paypal_vinculado = db.Column(db.Boolean, default=False, nullable=False)
    paypal_fecha_vinculacion = db.Column(db.DateTime, nullable=True)
    
    # Tarjeta Bancaria (Pagos)
    tarjeta_numero = db.Column(db.String(20), nullable=True) 
    tarjeta_caducidad = db.Column(db.String(7), nullable=True) 
    tarjeta_titular = db.Column(db.String(120), nullable=True)
    
    # Transferencia Bancaria (Cobros)
    cobro_iban = db.Column(db.String(34), nullable=True) 
    cobro_titular = db.Column(db.String(120), nullable=True)

    # --- 5. CONTROL, SANCIONES Y BORRADO LÓGICO ---
    created_at = db.Column(db.DateTime, default=datetime.now(timezone.utc))
    updated_at = db.Column(db.DateTime, default=datetime.now(timezone.utc), onupdate=datetime.now(timezone.utc))

    bloqueado_desde = db.Column(db.DateTime, nullable=True)
    bloqueado_hasta = db.Column(db.DateTime, nullable=True) 
    ya_ha_sido_suspendido = db.Column(db.Boolean, default=False)     
    motivo_bloqueo = db.Column(db.String(255), nullable=True) 

    # --- Eliminación del perfil ---
    perfil_eliminado_por_usuario = db.Column(db.Boolean, default=False, nullable=False)
    fecha_eliminacion_por_usuario = db.Column(db.DateTime, nullable=True)
    fecha_limite_reactivacion = db.Column(db.DateTime, nullable=True)
    fecha_prevista_borrado_definitivo = db.Column(db.DateTime, nullable=True)
    contador_reactivaciones_perfil = db.Column(db.Integer, default=0, nullable=False)

    # --- 6. ÍNDICES ÚNICOS PARCIALES ---
    #La regla para que el email/telefono sea único sólo se aplica a los usuarios activos (perfil_eliminado_por_usuario  = False)
    __table_args__ = (
        db.Index('idx_email_activo', 'email', unique=True, postgresql_where=db.text('perfil_eliminado_por_usuario = false')),
        db.Index('idx_telefono_activo', 'telefono', unique=True, postgresql_where=db.text('perfil_eliminado_por_usuario = false')),
    )
    
    # --- 7. RELACIONES ---
    vehiculos = db.relationship('Vehiculo', backref='usuario', cascade='all, delete-orphan')
    notificaciones = db.relationship('Notificacion', backref='usuario', cascade='all, delete-orphan')
    # Viajes donde el usuario es el Conductor
    viajes_publicados = db.relationship('Viaje', backref='creador', lazy=True, cascade='all, delete-orphan')    
    # Reservas donde el usuario es el Pasajero
    reservas_realizadas = db.relationship('PasajeroViaje', backref='pasajero_rel', lazy=True, cascade='all, delete-orphan')

    # Relaciones de valoraciones
    puntuaciones = db.relationship('Puntuacion', backref='usuario', cascade='all, delete-orphan', foreign_keys='Puntuacion.usuario_id')
    evaluaciones_realizadas = db.relationship(
        'Puntuacion', 
        foreign_keys='Puntuacion.evaluador_id', 
        backref='evaluador',
        cascade='all, delete-orphan'
    )

    # Cancelaciones provocadas por este usuario (con back_populates conectado a 'autor')
    cancelaciones_provocadas = db.relationship(
        'Cancelacion', 
        foreign_keys='Cancelacion.cancelado_por_id', 
        back_populates='autor',
        lazy='dynamic',
        cascade='all, delete-orphan'
    )

    monedero = db.relationship(
        'Monedero', 
        backref='usuario', 
        uselist=False, 
        cascade='all, delete-orphan',
        passive_deletes=True
    )

    @property
    def opiniones_recibidas(self):
        return self.puntuaciones

    # --- 8. PROPIEDADES Y MÉTODOS ---
    @property
    def estrellas_por_opiniones(self):
        """Media de puntuación recibida por otros usuarios al finalizar viajes"""
        return round(statistics.mean((p.puntuacion for p in self.puntuaciones)), 1) if self.puntuaciones else 0

    # --- LÓGICA DE CANCELACIONES (ICH Índice de Criticidad Histórico) ---
    @property
    def puntos_conductor_ultimos_6_meses(self):
        hace_seis_meses = datetime.now(timezone.utc) - timedelta(days=180)
        
        cancelaciones_conductor = self.cancelaciones_provocadas.filter(
            Cancelacion.rol_involucrado == 'CONDUCTOR',
            Cancelacion.fecha_cancelacion >= hace_seis_meses
        ).all()
        return sum(c.puntos_penalizacion_aplicados for c in cancelaciones_conductor)
    

    @property
    def puntos_pasajero_ultimos_6_meses(self):
        hace_seis_meses = datetime.now(timezone.utc) - timedelta(days=180)
        
        cancelaciones_pasajero = self.cancelaciones_provocadas.filter(
            Cancelacion.rol_involucrado == 'PASAJERO',
            Cancelacion.fecha_cancelacion >= hace_seis_meses
        ).all()
        
        return sum(c.puntos_penalizacion_aplicados for c in cancelaciones_pasajero)



    
    @property
    def acumulado_notas_conductor(self):
        if self.puntos_conductor_ultimos_6_meses >= 20:
            return "Suspendido para publicar viajes"
        elif self.puntos_conductor_ultimos_6_meses >= 14:
            return "Crítico (Nivel 1)"
        elif self.puntos_conductor_ultimos_6_meses >= 6:
            return "Bajo Advertencia"
        return "Óptimo"

    @property
    def acumulado_notas_pasajero(self):
        if self.puntos_pasajero_ultimos_6_meses >= 20:
            return "Suspendido para hacer reservas"
        elif self.puntos_pasajero_ultimos_6_meses >= 14:
            return "Crítico (Nivel 1)"
        elif self.puntos_pasajero_ultimos_6_meses >= 6:
            return "Bajo Advertencia"
        return "Óptimo"

    # --- MÉTODOS DE UTILIDAD ---
    def serialize(self):
        preferencias = self.preferencias
        if isinstance(preferencias, str):
            try:
                preferencias = json.loads(preferencias)
            except json.JSONDecodeError:
                preferencias = [] 
        elif preferencias is None:
            preferencias = [] 

        tarjeta_enmascarada = None
        if self.tarjeta_numero:
            tarjeta_enmascarada = f"**** **** **** {self.tarjeta_numero[-4:]}"

        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellidos": self.apellidos,
            "email": self.email,
            "emailVerificado": self.emailVerificado,
            "registroPrevio": self.registroPrevio,
            "registroFinalizado": self.registroFinalizado,
            "genero": self.genero,
            "orientacion": self.orientacion,
            "pronombre": self.pronombre,  
            "password": "********",        
            "telefono": self.telefono,
            "telefonoVerificado": self.telefonoVerificado,
            "biografia": self.biografia,
            "fotoPerfil": self.fotoPerfil,
            "fotoCabecera": self.fotoCabecera,
            "preferencias": preferencias,
            "rolPerfil": self.rolPerfil,
            "fecha_nacimiento": self.fecha_nacimiento.isoformat() if self.fecha_nacimiento else None,
            "vehiculos": [v.serialize() for v in self.vehiculos],
            "comunic_comerciales": self.comunic_comerciales,
            "comunic_terceros": self.comunic_terceros,
            "puntuaciones": self.estrellas_por_opiniones,
            "opiniones": [
                {
                    "id": op.id,
                    "puntuacion": op.puntuacion,
                    "comentario": op.comentario,
                    "fecha": op.fecha.isoformat() if op.fecha else None,
                    "evaluador": {
                        "id": op.evaluador.id,
                        "nombre": op.evaluador.nombre,
                        "fotoPerfil": op.evaluador.fotoPerfil
                    } if getattr(op, 'evaluador', None) else None,
                    "viaje": {
                        "id": op.viaje.id,
                        "origen": op.viaje.origen,
                        "destino": op.viaje.destino,
                        "fecha_salida": op.viaje.fecha_salida.isoformat() if op.viaje.fecha_salida else None
                    } if getattr(op, 'viaje', None) else None
                }
                for op in self.puntuaciones
            ],
            "metodo_pago_preferido": self.metodo_pago_preferido,
            "paypal_email": self.paypal_email,
            "paypal_payer_id": self.paypal_payer_id,
            "paypal_vinculado": self.paypal_vinculado,
            "tarjeta_info": {
                "numero": tarjeta_enmascarada,
                "caducidad": self.tarjeta_caducidad,
                "titular": self.tarjeta_titular
            } if self.metodo_pago_preferido == 'tarjeta' else None,
            "metodo_cobro_preferido": self.metodo_cobro_preferido,
            "cobro_iban": self.cobro_iban,
            "cobro_titular": self.cobro_titular,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat(),
        }
    
    def serialize_public(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellidos": self.apellidos,
            "fotoPerfil": self.fotoPerfil,
            "puntuacion_promedio": self.estrellas_por_opiniones
        }