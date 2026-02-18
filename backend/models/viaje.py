from datetime import datetime
from extensions import db
import json

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
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False)
    vehiculo = db.Column(db.Integer, nullable=False)

    pasajeros = db.relationship('PasajeroViaje', backref='viaje_pasajero', lazy=True, overlaps="viaje,viaje_pasajero")  

  
    usuario = db.relationship('Usuario', backref='viajes')

    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def serialize(self):
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
            "usuario_id": self.usuario_id,
            "vehiculo": self.vehiculo,
            "usuario_creador": {
                "id": self.usuario.id,
                "nombre": self.usuario.nombre,
                "email": self.usuario.email,
                "fotoPerfil": self.usuario.fotoPerfil,
                "puntuacion_promedio": self.usuario.puntuacion_promedio
            },
            "acompanantes": [
                {
                    "id": pasajero.usuario.id, 
                    "nombre": pasajero.usuario.nombre, 
                    "apellidos": pasajero.usuario.apellidos, 
                    "email": pasajero.usuario.email, 
                    "preferencias": pasajero.usuario.preferencias,
                    "fotoPerfil": pasajero.usuario.fotoPerfil
                }
                for pasajero in self.pasajeros
            ],
            "created_at": self.created_at.isoformat(),
        }
