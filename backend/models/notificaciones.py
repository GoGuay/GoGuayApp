from extensions import db
from datetime import datetime

class Notificacion(db.Model):
    __tablename__ = 'notificaciones'

    id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False)
    viaje_id = db.Column(db.Integer, db.ForeignKey('viajes.id'), nullable=True)
    tipo = db.Column(db.String(50), default="sistema")
    conversacion_id = db.Column(db.Integer, nullable=True)
    mensaje = db.Column(db.String(500), nullable=False)
    leida = db.Column(db.Boolean, default=False)
    fecha = db.Column(db.DateTime, default=datetime.utcnow)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def serialize(self):
        return {
            "id": self.id,
            "usuario_id": self.usuario_id,
            "viaje_id": self.viaje_id,
            "conversacion_id": self.conversacion_id,
            "tipo": self.tipo,
            "mensaje": self.mensaje,
            "leida": self.leida,
            "fecha": self.fecha,
            "created_at": self.created_at.isoformat()
        }