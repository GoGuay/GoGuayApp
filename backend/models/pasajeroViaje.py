from models.enums import EstadoSolicitudEnum
from extensions import db
from datetime import datetime

class PasajeroViaje(db.Model):
    __tablename__ = 'pasajeros_viaje'
    

    id = db.Column(db.Integer, primary_key=True)
    viaje_id = db.Column(db.Integer, db.ForeignKey('viajes.id'), nullable=False)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False)
    fecha_confirmacion_reserva = db.Column(db.DateTime, default=datetime.utcnow)
    estado = db.Column(db.String(50), default=EstadoSolicitudEnum.PENDIENTE.value)
    fecha_solicitud = db.Column(db.DateTime, default=datetime.utcnow)
    
    viaje = db.relationship('Viaje', backref='viaje_pasajero', lazy=True) 
    usuario = db.relationship('Usuario', lazy=True)

    def serialize(self):
        return {
            "id": self.id,
            "usuario_id": self.usuario_id,
            "viaje_id": self.viaje_id,
            "fecha_confirmacion_reserva": self.fecha_confirmacion_reserva,
            "estado": self.estado,
            "fecha_solicitud": self.fecha_solicitud
        }
