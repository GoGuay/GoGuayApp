from extensions import db
from datetime import datetime, timezone, timedelta
from models.enums import MotivosCancelacionConductor, MotivosCancelacionPasajero


class Cancelacion(db.Model):
    __tablename__ = 'cancelaciones'

    id = db.Column(db.Integer, primary_key=True)
    viaje_id = db.Column(db.Integer, db.ForeignKey('viajes.id'), nullable=False)
    cancelado_por_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False)
    
    pasajeros_afectados = db.Column(db.JSON, nullable=True) 

    puntos_penalizacion_aplicados = db.Column(db.Integer, nullable=False, default=0)
    rol_involucrado = db.Column(db.String(20), nullable=False) # 'CONDUCTOR' o 'PASAJERO'
    
    motivo_cancelacion_cond = db.Column(db.String(50), nullable=False, default=MotivosCancelacionConductor.NO_SE_CANCELA.value)
    motivo_cancelacion_pasaj = db.Column(db.String(50), nullable=False, default=MotivosCancelacionPasajero.NO_SE_CANCELA.value)
    fecha_cancelacion = db.Column(db.DateTime, default=datetime.now(timezone.utc))

    # --- RELACIONES ---
    viaje = db.relationship('Viaje', backref=db.backref('cancelaciones', lazy=True, cascade="all, delete-orphan"))
    
    # Relación con back_populates conectada a 'cancelaciones_provocadas' en Usuario
    autor = db.relationship(
        'Usuario', 
        foreign_keys=[cancelado_por_id],
        back_populates='cancelaciones_provocadas'
    )

    def serialize(self):
        return {
            "id": self.id,
            "viaje_id": self.viaje_id,
            "cancelado_por_id": self.cancelado_por_id,
            "pasajeros_afectados": self.pasajeros_afectados,
            "puntos_penalizacion_aplicados": self.puntos_penalizacion_aplicados,
            "rol_involucrado": self.rol_involucrado,
            "motivo_cancelacion_cond": self.motivo_cancelacion_cond,
            "motivo_cancelacion_pasaj": self.motivo_cancelacion_pasaj,
            "fecha_cancelacion": self.fecha_cancelacion.isoformat() if self.fecha_cancelacion else None
        }

  