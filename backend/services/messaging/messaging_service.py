from flask import Blueprint, request, jsonify
from extensions import db
from models import Conversacion, Mensaje
from models import Usuario

chat_blueprint = Blueprint('chat', __name__)

#
# Función para obtener las conversaciones de un usuario
#
@chat_blueprint.route('/conversaciones/<int:user_id>', methods=['GET'])
def obtener_conversaciones(user_id):
    convs = Conversacion.query.filter(
        (Conversacion.usuario1_id == user_id) | (Conversacion.usuario2_id == user_id)
    ).all()
    return jsonify([c.serialize(user_id) for c in convs]), 200

#
# Función para obtener los mensajes de una conversación
#
@chat_blueprint.route('/mensajes/<int:conv_id>', methods=['GET'])
def obtener_mensajes(conv_id):
    mensajes = Mensaje.query.filter_by(conversacion_id=conv_id).all()
    
    mensajes = Mensaje.query.filter_by(conversacion_id=conv_id).order_by(Mensaje.fecha.asc()).all()
    return jsonify([m.serialize() for m in mensajes]), 200

#
# Función para enviar un mensaje
#
@chat_blueprint.route('/enviar', methods=['POST'])
def enviar_mensaje():
    data = request.json
    
    conv = Conversacion.query.get(data['conversacion_id'])
    if not conv:
        return jsonify({"error": "Conversación no encontrada"}), 404
        
    receptor_id = conv.usuario2_id if data['emisor_id'] == conv.usuario1_id else conv.usuario1_id

    nuevo_msj = Mensaje(
        conversacion_id=data['conversacion_id'],
        emisor_id=data['emisor_id'],
        receptor_id=receptor_id,
        texto=data['texto'],
        leido=False
    )
    
    db.session.add(nuevo_msj)
    db.session.commit()
    
    return jsonify(nuevo_msj.serialize()), 201

#
# Función para iniciar una conversación
#
@chat_blueprint.route('/iniciar/<int:emisor_id>/<int:receptor_id>', methods=['POST'])
def iniciar_chat(emisor_id, receptor_id):
    
    existente = Conversacion.query.filter(
        ((Conversacion.usuario1_id == emisor_id) & (Conversacion.usuario2_id == receptor_id)) |
        ((Conversacion.usuario1_id == receptor_id) & (Conversacion.usuario2_id == emisor_id))
    ).first()

    if existente:
        return jsonify({"conversacion_id": existente.id}), 200

    nueva_conv = Conversacion(usuario1_id=emisor_id, usuario2_id=receptor_id)
    db.session.add(nueva_conv)
    db.session.commit()
    
    return jsonify({"conversacion_id": nueva_conv.id}), 201

#
# Función para marcar los mensajes como leídos
#
@chat_blueprint.route('/leer/<int:conv_id>/<int:user_id>', methods=['PATCH'])
def marcar_leido(conv_id, user_id):
    Mensaje.query.filter_by(
        conversacion_id=conv_id, 
        leido=False
    ).update({"leido": True})
    
    db.session.commit()
    return jsonify({"status": "Leído"}), 200

#
# Función para marcar los mensajes como no leídos
#
@chat_blueprint.route('/no-leer/<int:conv_id>/<int:user_id>', methods=['PATCH'])
def marcar_no_leido(conv_id, user_id):
    try:
        # Buscamos el último mensaje de la conversación (SEA QUIEN SEA EL EMISOR)
        ultimo_msj = Mensaje.query.filter_by(
            conversacion_id=conv_id
        ).order_by(Mensaje.fecha.desc()).first()

        if not ultimo_msj:
            return jsonify({"error": "No hay mensajes en esta conversación"}), 404

        # Cambiamos el estado a False (No leído)
        ultimo_msj.leido = False
        db.session.commit()

        return jsonify({
            "message": "Conversación marcada como no leída",
            "conversacion_id": conv_id
        }), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

#
# Función para eliminar una conversación
#
@chat_blueprint.route('/conversacion/<int:conv_id>', methods=['DELETE'])
def eliminar_conversacion(conv_id):
    try:
       
        conv = Conversacion.query.get(conv_id)
        
        if not conv:
            return jsonify({"error": "Conversación no encontrada"}), 404

        db.session.delete(conv)
        db.session.commit()

        return jsonify({
            "message": "Conversación y mensajes eliminados correctamente",
            "conversacion_id": conv_id
        }), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500