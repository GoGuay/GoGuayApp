from extensions import db
from datetime import datetime

class Evento(db.Model):
    __tablename__ = 'eventos'

    id = db.Column(db.Integer, primary_key=True)
    nombre_evento = db.Column(db.String(100), nullable=False)
    ciudad = db.Column(db.String(100), nullable=False)
    fecha_inicio = db.Column(db.DateTime, nullable=False)
    fecha_fin = db.Column(db.DateTime, nullable=False)
    descripcion = db.Column(db.Text, nullable=False)
    imagen = db.Column(db.String(500), nullable=False)
    enlace_info = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def serialize(self):
        return {
            "id": self.id,
            "nombre_evento": self.nombre_evento,
            "ciudad": self.ciudad,
            "fecha_inicio": self.fecha_inicio,
            "fecha_fin": self.fecha_fin,
            "descripcion": self.descripcion,
            "imagen": self.imagen,
            "enlace_info": self.enlace_info,
            "created_at": self.created_at
        }