from app import app
from extensions import db
from models import TokenPush, Usuario, Conversacion, Mensaje, Notificacion, PasajeroViaje, Puntuacion, RolUsuarioEnum, TokenUsado, Vehiculo, Viaje

with app.app_context():
    try:
        db.create_all()
        print("¡Base de datos sincronizada! La tabla 'token_push' ya debería existir.")
    except Exception as e:
        print(f"Error al crear las tablas: {e}")