from datetime import datetime, timezone, timedelta
from extensions import db

class TokenUsado(db.Model):
    __tablename__ = 'tokenusado'
    id = db.Column(db.Integer, primary_key=True)
    token = db.Column(db.String(500), unique=True, nullable=False)
    usado_en = db.Column(db.DateTime, default=datetime.now(timezone.utc))