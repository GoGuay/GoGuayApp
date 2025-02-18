from extensions import db

class PasajeroViaje(db.Model):
    __tablename__ = 'pasajeros_viaje'

    id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False)
    viaje_id = db.Column(db.Integer, db.ForeignKey('viajes.id'), nullable=False)

    usuario = db.relationship('Usuario', backref='viajes_como_pasajero')
    viaje = db.relationship('Viaje', backref='pasajeros')

    def serialize(self):
        return {
            "id": self.id,
            "usuario_id": self.usuario_id,
            "viaje_id": self.viaje_id,
        }
