from extensions import db
from datetime import datetime

class Monedero(db.Model):
    __tablename__ = 'monederos'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False, unique=True)
    saldo = db.Column(db.Float, default=0.0, nullable=False)
    
    usuario = db.relationship('Usuario', backref=db.backref('monedero', uselist=False, cascade='all, delete-orphan'))

    def serializeMonedero(self):
        return{
            "id": self.id,
            "usuario_id": self.usuario_id,
            "saldo": self.saldo
        }

class MovimientoMonedero(db.Model):
    __tablename__ = 'movimientos_monedero'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    monedero_id = db.Column(db.Integer, db.ForeignKey('monederos.id'), nullable=False)
    fecha = db.Column(db.DateTime, default=datetime.utcnow)
    concepto = db.Column(db.String(255), nullable=False)
    cantidad = db.Column(db.Float, nullable=False) 
    saldo_anterior = db.Column(db.Float, nullable=False)
    saldo_actual = db.Column(db.Float, nullable=False)
    referencia_id = db.Column(db.String(100), nullable=True)

    monedero = db.relationship('Monedero', backref='movimientos')

    def serializeMovimientoMonedero(self):
        return{
            "id": self.id,
            "monedero_id": self.monedero_id,
            "fecha": self.fecha,
            "concepto": self.concepto,
            "cantidad": self.cantidad,
            "saldo_anterior": self.saldo_anterior,
            "saldo_actual": self.saldo_actual,
            "referencia_id": self.referencia_id,

        }