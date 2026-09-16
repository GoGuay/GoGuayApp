from datetime import datetime
from extensions import db
from models.enums import EstadoSolicitudEnum

class PasajeroViaje(db.Model):
    __tablename__ = 'pasajeros_viaje'

    id = db.Column(db.Integer, primary_key=True)
    viaje_id = db.Column(db.Integer, db.ForeignKey('viajes.id'), nullable=False)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False)
    fecha_confirmacion_reserva = db.Column(db.DateTime, default=datetime.utcnow)
    estado = db.Column(db.String(50), default=EstadoSolicitudEnum.PENDIENTE.value)
    fecha_solicitud = db.Column(db.DateTime, default=datetime.utcnow)
    paypal_auth_id = db.Column(db.String(100), nullable=True)
    recordatorio_inicio_enviado = db.Column(db.Boolean, default=False)
    
    viaje = db.relationship('Viaje', foreign_keys=[viaje_id], overlaps="pasajeros,viaje_pasajero", backref='pasajeros_detallados')
    usuario = db.relationship('Usuario', foreign_keys=[usuario_id], overlaps="reservas_realizadas,pasajero_rel", backref='pasor_viajes_rel', lazy=True)

    def serialize(self):
        return {
            "id": self.id,
            "usuario_id": self.usuario_id,
            "viaje_id": self.viaje_id,
            "fecha_confirmacion_reserva": self.fecha_confirmacion_reserva.isoformat() if self.fecha_confirmacion_reserva else None,
            "estado": self.estado,
            "fecha_solicitud": self.fecha_solicitud.isoformat() if self.fecha_solicitud else None,
            "recordatorio_inicio_enviado": self.recordatorio_inicio_enviado,
            "paypal_auth_id": self.paypal_auth_id
        }