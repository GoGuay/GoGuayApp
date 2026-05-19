from datetime import datetime
from extensions import db
import json
from enum import Enum
from models.enums import EstadoViajeEnum


class Viaje(db.Model):
    __tablename__ = 'viajes'

    id = db.Column(db.Integer, primary_key=True)
    origen = db.Column(db.String(100), nullable=False)
    destino = db.Column(db.String(100), nullable=False)
    plazas = db.Column(db.Integer, nullable=False)
    hora_salida = db.Column(db.String(50), nullable=False)
    hora_llegada = db.Column(db.String(50), nullable=False)
    precio_viaje = db.Column(db.Float, nullable=False)
    duracion_viaje = db.Column(db.String(50), nullable=True)
    fecha_salida = db.Column(db.DateTime, nullable=False)
    ruta_seleccionada = db.Column(db.JSON, nullable=False)
    estado_viaje = db.Column(db.String(50), nullable=True, default=EstadoViajeEnum.PROXIMO.value)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False)
    vehiculo = db.Column(db.Integer, nullable=False)
    reserva_automatica = db.Column(db.Boolean, nullable=False, default=False)

    pasajeros = db.relationship('PasajeroViaje', backref='viaje_pasajero', lazy=True) 
    usuario = db.relationship('Usuario', backref='viajes')

    historial_cambios = db.relationship('HistorialCambiosViaje', backref='viaje', lazy=True, cascade="all, delete-orphan")

    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def get_estado_para_usuario(self, user_id):
        if not user_id: return None
        relacion = next((p for p in self.pasajeros if p.usuario_id == user_id), None)
        return relacion.estado if relacion else None

    def serialize(self, current_user_id=None):
        ya_puntuado = False
        if current_user_id:
            # Asumiendo que importas o tienes acceso al modelo Puntuacion
            from models import Puntuacion 
            existe = Puntuacion.query.filter_by(viaje_id=self.id, evaluador_id=current_user_id).first()
            ya_puntuado = existe is not None

        return {
            "id": self.id,
            "origen": self.origen,
            "destino": self.destino,
            "plazas": self.plazas,
            "precio_viaje": self.precio_viaje,
            "hora_salida": self.hora_salida,
            "hora_llegada": self.hora_llegada,
            "fecha_salida": self.fecha_salida.isoformat(),
            "duracion_viaje": self.duracion_viaje,
            "ruta_seleccionada": self.ruta_seleccionada,
            "estado_viaje": self.estado_viaje,
            "usuario_id": self.usuario_id,
            "vehiculo": self.vehiculo,
            "reserva_automatica": self.reserva_automatica,
            "usuario_creador": {
                "id": self.usuario.id,
                "nombre": self.usuario.nombre,
                "email": self.usuario.email,
                "fotoPerfil": self.usuario.fotoPerfil,
                "puntuacion_promedio": self.usuario.estrellas_por_opiniones
            },
            "acompanantes": [
                {
                    "id": p.usuario.id, 
                    "nombre": p.usuario.nombre, 
                    "fotoPerfil": p.usuario.fotoPerfil
                }
                for p in self.pasajeros if p.estado == 'aceptado'
            ],
            "solicitudes_pendientes": [
                {
                    "id": p.usuario.id,
                    "pasajero_viaje_id": p.id, 
                    "nombre": p.usuario.nombre,
                    "estado": p.estado
                }
                for p in self.pasajeros if p.estado == 'pendiente'
            ],
            "estado_solicitud_propia": self.get_estado_para_usuario(current_user_id),
            "historial_cambios": [h.serialize() for h in self.historial_cambios],
            "ya_puntuado": ya_puntuado,
            "created_at": self.created_at.isoformat(),
        }
