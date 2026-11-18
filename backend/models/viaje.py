from datetime import datetime, timezone, timedelta
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
    vehiculo = db.Column(db.Integer, db.ForeignKey('vehiculos.id'), nullable=False)
    reserva_automatica = db.Column(db.Boolean, nullable=False, default=False)

    pasajeros = db.relationship('PasajeroViaje', foreign_keys='PasajeroViaje.viaje_id', overlaps="viaje,viaje_pasajero", backref='viaje_relacionado', lazy=True)
    
    usuario = db.relationship('Usuario', foreign_keys=[usuario_id], overlaps="creador,viajes_publicados,viajes", backref='viajes_como_pasajero_o_relacion')

    historial_cambios = db.relationship('HistorialCambiosViaje', backref='viaje', lazy=True, cascade="all, delete-orphan")

    created_at = db.Column(db.DateTime, default=datetime.now(timezone.utc))

    def get_estado_para_usuario(self, user_id):
        if not user_id: return None
        relacion = next((p for p in self.pasajeros if p.usuario_id == user_id), None)
        return relacion.estado if relacion else None
    @property
    def acompanantes(self):
        return [p for p in self.pasajeros if p.estado == 'aceptado']
    
    def serialize(self, current_user_id=None, incluir_ruta=True, incluir_historial=True, puntuados_ids=None):
        ya_puntuado = False
        if current_user_id:
            if puntuados_ids is not None:
                ya_puntuado = self.id in puntuados_ids
            else:
                from models import Puntuacion
                existe = Puntuacion.query.filter_by(viaje_id=self.id, evaluador_id=current_user_id).first()
                ya_puntuado = existe is not None

        usuario_creador_data = None
        if self.usuario:
            usuario_creador_data = {
                "id": self.usuario.id,
                "nombre": getattr(self.usuario, 'nombre', ''),
                "email": getattr(self.usuario, 'email', ''),
                "fotoPerfil": getattr(self.usuario, 'fotoPerfil', None),
                "puntuacion_promedio": getattr(self.usuario, 'estrellas_por_opiniones', 0)
            }

        acompanantes_list = []
        solicitudes_list = []
        estado_propio = None

        for p in self.pasajeros:
            if current_user_id and p.usuario_id == current_user_id:
                estado_propio = p.estado
            if p.usuario:
                if p.estado == 'aceptado':
                    acompanantes_list.append({
                        "id": p.usuario.id,
                        "nombre": p.usuario.nombre,
                        "fotoPerfil": getattr(p.usuario, 'fotoPerfil', None)
                    })
                elif p.estado == 'pendiente':
                    solicitudes_list.append({
                        "id": p.usuario.id,
                        "pasajero_viaje_id": p.id,
                        "nombre": p.usuario.nombre,
                        "estado": p.estado
                    })

        data = {
            "id": self.id,
            "origen": self.origen,
            "destino": self.destino,
            "plazas": self.plazas,
            "precio_viaje": self.precio_viaje,
            "hora_salida": self.hora_salida,
            "hora_llegada": self.hora_llegada,
            "fecha_salida": self.fecha_salida.isoformat() if self.fecha_salida else None,
            "duracion_viaje": self.duracion_viaje,
            "estado_viaje": self.estado_viaje,
            "usuario_id": self.usuario_id,
            "vehiculo": self.vehiculo,
            "reserva_automatica": self.reserva_automatica,
            "usuario_creador": usuario_creador_data,
            "acompanantes": acompanantes_list,
            "solicitudes_pendientes": solicitudes_list,
            "estado_solicitud_propia": estado_propio,
            "ya_puntuado": ya_puntuado,
            "created_at": self.created_at.isoformat() if self.created_at else None,
        }

        if incluir_ruta:
            data["ruta_seleccionada"] = self.ruta_seleccionada

        if incluir_historial:
            data["historial_cambios"] = [h.serialize() for h in self.historial_cambios] if self.historial_cambios else []

        return data