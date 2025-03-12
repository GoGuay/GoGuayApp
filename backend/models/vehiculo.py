from extensions import db

class Vehiculo(db.Model):
    __tablename__ = 'vehiculos'

    id = db.Column(db.Integer, primary_key=True)
    marca = db.Column(db.String(100), nullable=False)
    modelo = db.Column(db.String(100), nullable=False)
    color = db.Column(db.String(100), nullable=False)
    matricula = db.Column(db.String(10), unique=True, nullable=False)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), name="fk_vehiculo_usuario")


    def serialize(self):
        return {
            "id": self.id,
            "marca": self.marca,
            "modelo": self.modelo,
            "color": self.color,
            "matricula": self.matricula,
            "usuario_id": self.usuario_id
        }
