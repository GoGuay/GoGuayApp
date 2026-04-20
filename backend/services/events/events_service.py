# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
#  SERVICIO DEDICADO PARA LA INFORMACIÓN DE LOS EVENTOS   #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 

from flask import Blueprint, jsonify
from flask import Blueprint, jsonify, request
from extensions import db

from models.evento import Evento

evento_blueprint = Blueprint('evento', __name__)

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#   SERVICIO PARA AÑADIR UN EVENTO NUEVO
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
@evento_blueprint.route('/anadir_evento', methods=['POST'])
def anadir_evento():
    try:
        data = request.get_json()
    except Exception as e:
        return jsonify({"error": "El request no contiene JSON válido", "detalle": str(e)}), 400

    nuevo_evento = Evento(
        nombre_evento = data['nombre_evento'],
        ciudad = data['ciudad'],
        fecha_inicio = data['fecha_inicio'],
        fecha_fin = data['fecha_fin'],
        descripcion = data['descripcion'],
        imagen = data['imagen'],
        enlace_info = data['enlace_info']
    )
    db.session.add(nuevo_evento)
    db.session.commit()

    return jsonify({
        "mensaje": "Evento creado correctamente",
        "evento": nuevo_evento.serialize()
    }), 201



# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#   SERVICIO PARA OBTENER UN EVENTO POR SU ID
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
@evento_blueprint.route('/obtener_evento_id', methods=['GET'])
def obtener_evento_id():
    evento_id = request.args.get('id', type=int)
    if not evento_id:
        return jsonify({"error": "Falta el campo 'id"}), 400

    evento = Evento.query.filter_by(id=evento_id).first()
    if not evento:
        return jsonify({"error": "No se ha encontrado el evento"}), 400

    return jsonify(evento.serialize()), 200


# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#   SERVICIO PARA OBTENER TODOS LOS EVENTOS
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
@evento_blueprint.route('/obtener_eventos', methods=['GET'])
def obtener_eventos():
    try:
        eventos = Evento.query.all()
        
        eventos_serializados = [evento.serialize() for evento in eventos]
        
        return jsonify(eventos_serializados), 200
        
    except Exception as e:
        return jsonify({"error": "Error al recuperar los eventos", "detalle": str(e)}), 500
   


# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#   SERVICIO PARA EDITAR UN EVENTO 
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
@evento_blueprint.route('/editar_evento', methods=['PUT'])
def editar_evento(id_evento):
    evento = Evento.query.get_or_404(id_evento)
    data = request.json

    try:
        if 'nombre_evento' in data:
            evento.nombre_evento = data['nombre_evento']
        if 'ciudad' in data:
            evento.ciudad = data['ciudad']
        if 'fecha_inicio' in data:
            evento.fecha_inicio = data['fecha_inicio']
        if 'fecha_fin' in data:
            evento.fecha_fin = data['fecha_fin']
        if 'descripcion' in data:
            evento.descripcion = data['descripcion']
        if 'imagen' in data:
            evento.imagen = data['imagen']
        if 'enlace_info' in data:
            evento.enlace_info = data['enlace_info']

        db.session.commit()
        return jsonify(evento.serialize()), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({"Error": str(e)}), 500

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#   SERVICIO PARA ELIMINAR UN EVENTO SELECCIONADO
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
@evento_blueprint.route('/eliminar_evento', methods=['GET'])
def eliminar_evento(id):
    evento = Evento.query.get(id)

    if evento is None:
        return jsonify({"error": "No se ha encontrado el evento seleccionado"}), 400

    try:
        db.session.delete(evento)
        db.session.commit()
        return jsonify({"Eliminado": "El evento se ha eliminado correctamente"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"Error": str(e)}), 500
