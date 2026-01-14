from flask import Blueprint, request, jsonify
from extensions import db
from models import Conversacion, Mensaje
from models import Usuario

chat_blueprint = Blueprint('chat', __name__)

# Obtener lista de chats para CentroMensajesPage
@chat_blueprint.route('/conversaciones/<int:user_id>', methods=['GET'])
def obtener_conversaciones(user_id):
    convs = Conversacion.query.filter(
        (Conversacion.usuario1_id == user_id) | (Conversacion.usuario2_id == user_id)
    ).all()
    return jsonify([c.serialize(user_id) for c in convs]), 200

# Obtener historial de chat para ChatPage
@chat_blueprint.route('/mensajes/<int:conv_id>', methods=['GET'])
def obtener_mensajes(conv_id):
    mensajes = Mensaje.query.filter_by(conversacion_id=conv_id).all()
    # Opcional: Marcar como leídos al abrir
    Mensaje.query.filter_by(conversacion_id=conv_id, leido=False).update({"leido": True})
    db.session.commit()
    return jsonify([m.serialize() for m in mensajes]), 200

# Enviar mensaje
@chat_blueprint.route('/enviar', methods=['POST'])
def enviar_mensaje():
    data = request.json
    
    # 1. Buscamos la conversación para saber quiénes participan
    conv = Conversacion.query.get(data['conversacion_id'])
    if not conv:
        return jsonify({"error": "Conversación no encontrada"}), 404
        
    # 2. El receptor es el que NO es el emisor
    receptor_id = conv.usuario2_id if data['emisor_id'] == conv.usuario1_id else conv.usuario1_id

    nuevo_msj = Mensaje(
        conversacion_id=data['conversacion_id'],
        emisor_id=data['emisor_id'],
        receptor_id=receptor_id, # <--- Ahora es automático y seguro
        texto=data['texto']
    )
    
    db.session.add(nuevo_msj)
    db.session.commit()
    
    return jsonify(nuevo_msj.serialize()), 201

@chat_blueprint.route('/iniciar/<int:emisor_id>/<int:receptor_id>', methods=['POST'])
def iniciar_chat(emisor_id, receptor_id):
    # Buscar si ya existe la conversación (en cualquier orden de IDs)
    existente = Conversacion.query.filter(
        ((Conversacion.usuario1_id == emisor_id) & (Conversacion.usuario2_id == receptor_id)) |
        ((Conversacion.usuario1_id == receptor_id) & (Conversacion.usuario2_id == emisor_id))
    ).first()

    if existente:
        return jsonify({"conversacion_id": existente.id}), 200

    # Si no existe, crearla
    nueva_conv = Conversacion(usuario1_id=emisor_id, usuario2_id=receptor_id)
    db.session.add(nueva_conv)
    db.session.commit()
    
    return jsonify({"conversacion_id": nueva_conv.id}), 201