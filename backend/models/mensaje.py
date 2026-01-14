from extensions import db
from datetime import datetime

class Conversacion(db.Model):
    __tablename__ = 'conversaciones'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    # Participantes de la conversación
    usuario1_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False)
    usuario2_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    # Relaciones
    mensajes = db.relationship('Mensaje', backref='conversacion', cascade='all, delete-orphan', lazy=True)
    
    # Definimos las relaciones con Usuario explícitamente para acceder a nombres/fotos
    usuario1 = db.relationship('Usuario', foreign_keys=[usuario1_id])
    usuario2 = db.relationship('Usuario', foreign_keys=[usuario2_id])

    def serialize(self, current_user_id):
        # Determinamos quién es el "otro" usuario para mostrar su nombre y foto
        otro = self.usuario2 if self.usuario1_id == current_user_id else self.usuario1
        
        # Obtenemos el último mensaje para la previsualización en la lista
        ultimo_msj = Mensaje.query.filter_by(conversacion_id=self.id).order_by(Mensaje.fecha.desc()).first()

        return {
            "id": self.id,
            "otro_usuario_nombre": f"{otro.nombre} {otro.apellidos}",
            "otro_usuario_foto": otro.fotoPerfil,
            "ultimoMensaje": ultimo_msj.texto if ultimo_msj else "No hay mensajes aún",
            "fecha_ultimo": ultimo_msj.fecha.isoformat() if ultimo_msj else self.created_at.isoformat()
        }

class Mensaje(db.Model):
    __tablename__ = 'mensajes'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    conversacion_id = db.Column(db.Integer, db.ForeignKey('conversaciones.id'), nullable=False)
    emisor_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False)
    receptor_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False)
    texto = db.Column(db.Text, nullable=False)
    leido = db.Column(db.Boolean, default=False)
    fecha = db.Column(db.DateTime, default=datetime.utcnow)

    emisor = db.relationship('Usuario', foreign_keys=[emisor_id])
    receptor = db.relationship('Usuario', foreign_keys=[receptor_id])

    def serialize(self):
        return {
            "id": self.id,
            "conversacion_id": self.conversacion_id,
            "emisor_id": self.emisor_id,
            "receptor_id": self.receptor_id,
            "texto": self.texto,
            "leido": self.leido,
            "fecha": self.fecha.isoformat()
        }