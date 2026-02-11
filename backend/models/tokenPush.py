from extensions import db
from datetime import datetime

class TokenPush(db.Model):
    __tablename__ = 'token_push'
    id = db.Column(db.Integer, primary_key=True)
    token = db.Column(db.String(255), unique=True, nullable=False)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False) 
    fecha_registro = db.Column(db.DateTime, default=datetime.utcnow)

    def serialize(self):
        return {
            "id": self.id,
            "token": self.token,
            "usuario_id": self.usuario_id
        }