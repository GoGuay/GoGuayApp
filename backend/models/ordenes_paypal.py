from extensions import db

class Ordenes_Paypal(db.Model):
    __tablename__ = 'ordenes_paypal'


    id = db.Column(db.Integer, primary_key=True)
    viaje_id = db.Column(db.Integer, db.ForeignKey('viajes.id'), nullable=False)
    pasajero_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False)
    conductor_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False)
    paypal_order_id = db.Column(db.String(100), nullable=False)    
    importe_fijado =db.Column(db.Float, nullable=False)
    gastos_gestion = db.Column(db.Float, nullable=False)
    importe_total =  db.Column(db.Float, nullable=False)

    # Relaciones para acceder fácil a los datos desde Python
    viaje = db.relationship('Viaje')
    pasajero = db.relationship('Usuario', foreign_keys=[pasajero_id])
    conductor = db.relationship('Usuario', foreign_keys=[conductor_id])

    def serialize(self):
        return {
            "id": self.id,
            "viaje_id": self.viaje_id,
            "pasajero_id":self.pasajero_id,
            "conductor_id":self.conductor_id,
            "paypal_order_id":self.paypal_order_id,
            "importe_fijado":self.importe_fijado,
            "gastos_gestion":self.gastos_gestion,
            "importe_total":self.importe_total

        }