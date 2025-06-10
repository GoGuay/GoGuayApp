from datetime import datetime
from extensions import db

class TokenUsado(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    token = db.Column(db.String(500), unique=True, nullable=False)
    usado_en = db.Column(db.DateTime, default=datetime.utcnow)