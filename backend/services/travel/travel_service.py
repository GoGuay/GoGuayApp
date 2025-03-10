# # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#  SERVICIO DEDICADO PARA LA INFORMACIÓN DE LOS VIAJES  #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # #

from flask import Blueprint, jsonify, request
from datetime import datetime
from models import Viaje, PasajeroViaje
from extensions import db
from sqlalchemy.orm import joinedload 

travel_blueprint = Blueprint('travel', __name__)


# # # # # # # # # # # # # # # # # # # # # # # #
#   SERVICIO PARA CREAR UN VIAJE NUEVO
# # # # # # # # # # # # # # # # # # # # # # # # 
@travel_blueprint.route('/crear_viaje', methods=['POST'])
def crear_viaje():

    try:
        data = request.get_json()
    except Exception as e:
        return jsonify({"error": "El request no contiene JSON válido", "detalle": str(e)}), 400

    campos_obligatorios = ['origen', 'destino', 'plazas', 'hora_salida', 'fecha_salida', 'ruta_seleccionada', 'usuario_id']
    for campo in campos_obligatorios:
        if campo not in data:
            return jsonify({"error": f"Falta el campo obligatorio: {campo}"}), 400

    fecha_salida_str = data['fecha_salida']
    formatos_fecha = ['%d-%m-%Y', '%Y-%m-%d']
    fecha_salida = None
    for formato in formatos_fecha:
        try:
            fecha_salida = datetime.strptime(fecha_salida_str, formato)
            break
        except ValueError:
            continue
    if fecha_salida is None:
        return jsonify({"error": f"Formato de fecha incorrecto: {fecha_salida_str}"}), 400

    ruta_seleccionada = data.get('ruta_seleccionada')
    if not isinstance(ruta_seleccionada, dict):
        return jsonify({"error": "El campo 'ruta_seleccionada' debe ser un objeto JSON válido"}), 400

    routes = ruta_seleccionada.get('routes', [])
    if not isinstance(routes, list) or not routes:
        return jsonify({"error": "El campo 'routes' en 'ruta_seleccionada' debe ser una lista válida"}), 400

    usuario_id = data.get('usuario_id')
    if usuario_id is None:
        return jsonify({"error": "Falta el campo 'usuario_id'"}), 400

    nuevo_viaje = Viaje(
        origen=data['origen'],
        destino=data['destino'],
        plazas=int(data['plazas']),
        hora_salida=data['hora_salida'],
        precio_viaje=data['precio_viaje'],
        duracion_viaje=data['ruta_seleccionada'].get('duracion', 'No especificado'),
        fecha_salida=fecha_salida,
        ruta_seleccionada=ruta_seleccionada,
        usuario_id=usuario_id
    )

    db.session.add(nuevo_viaje)
    db.session.commit()

    return jsonify({
        "mensaje": "Viaje creado correctamente",
        "viaje": nuevo_viaje.serialize()
    }), 201


# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#   SERVICIO PARA OBTENER LA LISTA DE VIAJES DE UN USUARIO
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
@travel_blueprint.route('/obtener_viajes_usuario', methods=['GET'])
def obtener_viajes_usuario():
    usuario_id = request.args.get('usuario_id', type=int)

    if not usuario_id:
        return jsonify({"error": "Falta el campo 'usuario_id' en la solicitud"}), 400

    viajes = Viaje.query.filter_by(usuario_id=usuario_id).all()

    if not viajes:
        return jsonify({"mensaje": "El usuario no tiene viajes creados"}), 404

    return jsonify({
        "viajes": [viaje.serialize() for viaje in viajes]
    }), 200


# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#   SERVICIO PARA OBTENER LA LISTA DE VIAJES EN GENERAL
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
@travel_blueprint.route('/obtener_viajes', methods=['GET'])
def obtener_viajes():
    lista_viajes = Viaje.query.options(
        joinedload(Viaje.usuario)
    ).all()
    return jsonify([viaje.serialize() for viaje in lista_viajes]), 200


# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#           SERVICIO PARA UNIRSE A UN VIAJE
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
@travel_blueprint.route('/unirse_viaje', methods=['POST'])
def unirse_viaje():
    try:
        data = request.get_json()
    except Exception as e:
        return jsonify({"error": "El request no contiene JSON válido", "detalle": str(e)}), 400

    usuario_id = data.get('usuario_id')
    viaje_id = data.get('viaje_id')

    if not usuario_id or not viaje_id:
        return jsonify({"error": "Faltan datos obligatorios (usuario_id y/o viaje_id)"}), 400

    viaje = Viaje.query.get(viaje_id)
    if not viaje:
        return jsonify({"error": "El viaje no existe"}), 404

    if viaje.plazas <= 0:
        return jsonify({"error": "No hay plazas disponibles en este viaje"}), 400

    pasajero_existente = PasajeroViaje.query.filter_by(usuario_id=usuario_id, viaje_id=viaje_id).first()
    if pasajero_existente:
        return jsonify({"error": "El usuario ya está registrado en este viaje"}), 400

    nuevo_pasajero = PasajeroViaje(usuario_id=usuario_id, viaje_id=viaje_id)
    db.session.add(nuevo_pasajero)

    viaje.plazas -= 1
    db.session.commit()

    return jsonify({
        "mensaje": "Usuario agregado al viaje correctamente",
        "viaje": viaje.serialize(),
        "plazas_restantes": viaje.plazas
    }), 200


# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#   SERVICIO PARA OBTENER LOS VIAJES A LOS QUE EL USUARIO SE HA UNIDO
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
@travel_blueprint.route('/viajes_del_usuario/<int:usuario_id>', methods=['GET'])
def obtener_viajes_pasajero(usuario_id):
    viajes = Viaje.query.join(PasajeroViaje).filter(PasajeroViaje.usuario_id == usuario_id).all()
    return jsonify([viaje.serialize() for viaje in viajes])
