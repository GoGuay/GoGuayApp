# notifications_utils.py
from flask import Blueprint, request, jsonify
from firebase_admin import messaging
from models import TokenPush, Notificacion
from extensions import db


notifications_blueprint = Blueprint('notifications', __name__)


#
# Función para enviar una notificación push a un usuario específico utilizando Firebase Cloud Messaging (FCM).
#
def enviar_notificacion_push(usuario_id, titulo, cuerpo, data=None):
    """
    Busca los tokens de un usuario y envía una notificación push vía Firebase.
    """
    tokens = TokenPush.query.filter_by(usuario_id=usuario_id).all()
    registration_tokens = [t.token for t in tokens]

    if not registration_tokens:
        print(f"No hay tokens registrados para el usuario {usuario_id}")
        return

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

    try:
        response = messaging.send_multicast(message)
        print(f"Éxito: {response.success_count} mensajes enviados. Fallos: {response.failure_count}")
        
    except Exception as e:
        print(f"Error crítico enviando push: {e}")

        
#
# Función para eliminar una notificación específica por su ID
#
@notifications_blueprint.route('/eliminar_notificacion/<int:notificacion_id>', methods=['DELETE'])
def eliminar_notificacion(notificacion_id):
    notificacion = Notificacion.query.get(notificacion_id)
    
    if not notificacion:
        return jsonify({"error": "Notificación no encontrada"}), 404

    try:
        db.session.delete(notificacion)
        db.session.commit()
        return jsonify({"mensaje": "Notificación eliminada correctamente"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

#
# Función para eliminar TODAS las notificaciones de un usuario
#
@notifications_blueprint.route('/eliminar_todas_notificaciones/<int:usuario_id>', methods=['DELETE'])
def eliminar_todas_notificaciones(usuario_id):
    try:
        # Filtramos por el usuario_id para no borrar lo que no pertenece
        notificaciones_usuario = Notificacion.query.filter_by(usuario_id=usuario_id)
        
        count = notificaciones_usuario.count()
        if count == 0:
            return jsonify({"mensaje": "El usuario no tiene notificaciones para eliminar"}), 200
        
        notificaciones_usuario.delete(synchronize_session=False)
        db.session.commit()
        
        return jsonify({"mensaje": f"Se han eliminado {count} notificaciones"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500