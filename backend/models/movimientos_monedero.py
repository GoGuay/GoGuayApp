from extensions import db
from datetime import datetime

class MovimientoMonedero(db.Model):
    __tablename__ = 'movimientos_monedero'

    id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False)
    cantidad = db.Column(db.Numeric(10, 2), nullable=False)
    tipo = db.Column(db.String(20)) 
    concepto = db.Column(db.String(255))
    fecha = db.Column(db.DateTime, default=datetime.utcnow)

    def serialize(self):
        return {
            "id": self.id,
            "usuario_id": self.usuario_id,
            "cantidad": float(self.cantidad),
            "tipo": self.tipo,
            "concepto": self.concepto,
            "fecha": self.fecha.isoformat()
        }