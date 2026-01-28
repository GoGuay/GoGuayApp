from extensions import db
from datetime import datetime

class Monedero(db.Model):
    __tablename__ = 'monederos'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    saldo = db.Column(db.Numeric(10, 2), default=0.0)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), unique=True)
    estado = db.Column(db.String(20), default='activo')
    ultima_actualizacion = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def serialize(self):
        return {
            "id": self.id,
            "saldo": float(self.saldo) if self.saldo else 0.0,
            "usuario_id": self.usuario_id,
            "estado": self.estado,
            "ultima_actualizacion": self.ultima_actualizacion.isoformat() if self.ultima_actualizacion else None
        }
