from flask import Blueprint, request, jsonify
from extensions import db
from models import Conversacion, Mensaje
from models import Usuario
from services.notifications.notifications_utils import enviar_notificacion_push

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
        
    emisor_id = data.get('emisor_id')
    receptor_id = conv.usuario2_id if emisor_id == conv.usuario1_id else conv.usuario1_id

    emisor = db.session.get(Usuario, emisor_id)
    nombre_emisor = emisor.nombre if emisor else "Un usuario"

    texto_mensaje = data.get('texto', '')

    nuevo_msj = Mensaje(
        conversacion_id=data['conversacion_id'],
        emisor_id=data['emisor_id'],
        receptor_id=receptor_id,
        texto=texto_mensaje,
        leido=False
    )

    db.session.add(nuevo_msj)
    db.session.commit()

    enviar_notificacion_push(
            usuario_id=receptor_id, 
            titulo=f"Mensaje de {nombre_emisor}", 
            cuerpo=texto_mensaje,
            data={
                "conversacion_id": str(data['conversacion_id']), 
                "tipo": "chat"
            }
        )
    
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
        receptor_id=user_id, 
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


#
# Función para compartir el teléfono en una conversación
#
@chat_blueprint.route('/compartir-telefono', methods=['POST'])
def compartir_telefono():
    data = request.json
    conv_id = data.get('conversacion_id')
    emisor_id = data.get('emisor_id')

    conv = Conversacion.query.get(conv_id)
    if not conv:
        return jsonify({"error": "Conversación no encontrada"}), 404

    usuario = Usuario.query.get(emisor_id)
    if not usuario:
        return jsonify({"error": "Usuario no encontrado"}), 404

    receptor_id = conv.usuario2_id if emisor_id == conv.usuario1_id else conv.usuario1_id

    notificacion_msj = Mensaje(
        conversacion_id=conv_id,
        emisor_id=emisor_id,
        receptor_id=receptor_id,
        texto=f"TELEFONO USUARIO:{usuario.telefono}",
        leido=False
    )

    texto_mensaje = f"El usuario {usuario.nombre} ha compartido su número de teléfono contigo."
    
    enviar_notificacion_push(
        usuario_id=receptor_id, 
        titulo="Teléfono compartido", 
        cuerpo=texto_mensaje,
        data={"conversacion_id": str(conv_id), "tipo": "chat"}
    )
    
    
    db.session.add(notificacion_msj)
    db.session.commit()

    return jsonify({
        "status": "Teléfono compartido",
        "telefono": usuario.telefono,
        "receptor_id": receptor_id
    }), 200

#
# Función para dejar de compartir el teléfono
#
@chat_blueprint.route('/dejar-de-compartir', methods=['DELETE'])
def dejar_de_compartir():
    data = request.json
    conv_id = data.get('conversacion_id')
    emisor_id = data.get('emisor_id')

    try:
        mensajes_sistema = Mensaje.query.filter(
            Mensaje.conversacion_id == conv_id,
            Mensaje.emisor_id == emisor_id,
            Mensaje.texto.like('TELEFONO USUARIO:%')
        ).all()

        for msj in mensajes_sistema:
            db.session.delete(msj)
        
        db.session.commit()
        return jsonify({"message": "Has dejado de compartir tu teléfono"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500