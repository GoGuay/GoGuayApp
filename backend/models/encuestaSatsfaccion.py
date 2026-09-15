from datetime import datetime
from extensions import db

class EncuestaSatisfaccion(db.Model):
    __tablename__ = 'encuestas_satisfaccion'
    
    id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=True)
    calificacion = db.Column(db.Integer, nullable=False)
    
    diseno = db.Column(db.String(20))
    facilidad_busqueda = db.Column(db.String(20))
    centro_mensajes = db.Column(db.String(20))
    seguridad = db.Column(db.String(20))
    normas = db.Column(db.String(20))
    
    sugerencias = db.Column(db.Text)
    fecha_creacion = db.Column(db.DateTime, default=datetime.utcnow)

    def serialize(self):
        return {
            "id": self.id,
            "calificacion": self.calificacion,
            "sugerencias": self.sugerencias,
            "fecha": self.fecha_creacion.strftime('%Y-%m-%d %H:%M:%S'),
            "aspectos": {
                "diseno": self.diseno,
                "busqueda": self.facilidad_busqueda,
                "mensajes": self.centro_mensajes,
                "seguridad": self.seguridad,
                "normas": self.normas
            }
        }