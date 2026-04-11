# notifications_utils.py
from firebase_admin import messaging
from models import TokenPush
from extensions import db

def enviar_notificacion_push(usuario_id, titulo, cuerpo, data=None):
    """
    Busca los tokens de un usuario y envía una notificación push vía Firebase.
    """
    # 1. Obtener todos los dispositivos registrados del usuario
    tokens = TokenPush.query.filter_by(usuario_id=usuario_id).all()
    registration_tokens = [t.token for t in tokens]

    if not registration_tokens:
        print(f"No hay tokens registrados para el usuario {usuario_id}")
        return

    # 2. Construir el mensaje
    # Asegúrate de que todos los valores en 'data' sean strings (requisito de Firebase)
    if data:
        data = {k: str(v) for k, v in data.items()}

    message = messaging.MulticastMessage(
        notification=messaging.Notification(
            title=titulo,
            body=cuerpo,
        ),
        data=data, 
        tokens=registration_tokens,
    )

    # 3. Enviar
    try:
        response = messaging.send_multicast(message)
        print(f"Éxito: {response.success_count} mensajes enviados. Fallos: {response.failure_count}")
        
        # Opcional: Podrías limpiar tokens inválidos aquí si response.failure_count > 0
    except Exception as e:
        print(f"Error crítico enviando push: {e}")