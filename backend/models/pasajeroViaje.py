from extensions import db

class PasajeroViaje(db.Model):
    __tablename__ = 'pasajeros_viaje'

    id = db.Column(db.Integer, primary_key=True)
    viaje_id = db.Column(db.Integer, db.ForeignKey('viajes.id'), nullable=False)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False)
    
    viaje = db.relationship('Viaje', backref='viaje_pasajero', lazy=True) 
    usuario = db.relationship('Usuario', backref='pasajeros_viaje', lazy=True)

    def serialize(self):
        return {
            "id": self.id,
            "usuario_id": self.usuario_id,
            "viaje_id": self.viaje_id,
        }
