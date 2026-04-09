from extensions import db
from datetime import datetime
from models.enums import MotivosCancelacionConductor, MotivosCancelacionPasajero



class Cancelacion(db.Model):
    __tablename__ = 'cancelaciones'

    id = db.Column(db.Integer, primary_key=True)
    viaje_id = db.Column(db.Integer, db.ForeignKey('viajes.id'), nullable=False)
    cancelado_por_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False)
    
    # Almacenamos los IDs de los pasajeros afectados como JSON para histórico rápido
    # o podrías hacer una relación muchos a muchos si necesitas notificaciones complejas
    pasajeros_afectados = db.Column(db.JSON, nullable=True) 
    
    motivo_cancelacion_cond = db.Column(db.String(50), nullable=False, default=MotivosCancelacionConductor.NO_SE_CANCELA.value)
    motivo_cancelacion_pasaj = db.Column(db.String(50), nullable=False, default=MotivosCancelacionPasajero.NO_SE_CANCELA.value)
    fecha_cancelacion = db.Column(db.DateTime, default=datetime.utcnow)

    # Relaciones
    viaje = db.relationship('Viaje', backref=db.backref('datos_cancelacion', uselist=False))
    autor = db.relationship('Usuario', foreign_keys=[cancelado_por_id])