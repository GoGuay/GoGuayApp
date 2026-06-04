from datetime import datetime
from extensions import db

# ==========================================
# MODELO PARA EL HISTORIAL DE CAMBIOS
# ==========================================
class HistorialCambiosViaje(db.Model):
    __tablename__ = 'historial_cambios_viajes'

    id = db.Column(db.Integer, primary_key=True)
    viaje_id = db.Column(db.Integer, db.ForeignKey('viajes.id'), nullable=False)
    campo_modificado = db.Column(db.String(50), nullable=False) 
    valor_anterior = db.Column(db.Text, nullable=True)
    valor_nuevo = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def serialize(self):
        return {
            "id": self.id,
            "viaje_id": self.viaje_id,
            "campo_modificado": self.campo_modificado,
            "valor_anterior": self.valor_anterior,
            "valor_nuevo": self.valor_nuevo,
            "created_at": self.created_at.isoformat()
        }

