# # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#  SERVICIO DEDICADO PARA LA INFORMACIÓN DE LOS VIAJES  #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # #

from flask import Blueprint, jsonify, request
from datetime import datetime
from models import Viaje, PasajeroViaje, Notificacion, Vehiculo
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

    campos_obligatorios = ['origen', 'destino', 'plazas', 'hora_salida', 'fecha_salida', 'ruta_seleccionada', 'usuario_id', 'coche']
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
    
    coche = data.get('coche')  # Aquí asumimos que 'coche' es un objeto completo
    if not coche:
        return jsonify({"error": "Falta el campo 'coche'"}), 400

    vehiculo_id = coche.get('id')
    if not vehiculo_id:
        return jsonify({"error": "El campo 'id' del coche es obligatorio"}), 400

    # Verificar si el vehículo pertenece al usuario actual
    vehiculo = Vehiculo.query.filter_by(id=vehiculo_id, usuario_id=usuario_id).first()

    if not vehiculo:
        return jsonify({"error": "El vehículo no pertenece al usuario actual"}), 400

    if not vehiculo:
        return jsonify({"Error": "el vehículo no pertenece al usuario actual"}), 400

    nuevo_viaje = Viaje(
        origen=data['origen'],
        destino=data['destino'],
        plazas=int(data['plazas']),
        hora_salida=data['hora_salida'],
        hora_llegada=data['hora_llegada'],
        precio_viaje=data['precio_viaje'],
        duracion_viaje=data['ruta_seleccionada'].get('tiempoTotal', 'No especificado'),
        fecha_salida=fecha_salida,
        ruta_seleccionada=ruta_seleccionada,
        usuario_id=usuario_id,
        vehiculo = vehiculo_id
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
    viajes = db.session.query(Viaje).options(
        joinedload(Viaje.pasajeros).joinedload(PasajeroViaje.usuario)
    ).all()

    return jsonify([viaje.serialize() for viaje in viajes]), 200



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

    pasajero = PasajeroViaje.query.filter_by(viaje_id=viaje_id, usuario_id=usuario_id).first()
    usuario = pasajero.usuario 
    nombre_completo = f"{usuario.nombre} {usuario.apellidos}"
    
    if not usuario:
        return jsonify({"error": "El usuario no existe"}), 404
    
    # Se notifica al creador del viaje la unión al mismo como pasajero
    creador_id = viaje.usuario_id
    if creador_id != usuario_id: 
        mensaje = f"El usuario {nombre_completo} se ha unido al viaje de {viaje.origen} a {viaje.destino}."
        notificacion = Notificacion(
            usuario_id=creador_id,
            viaje_id=viaje_id,
            mensaje=mensaje
        )
        db.session.add(notificacion)
        db.session.commit()

    return jsonify({
        "mensaje": "Usuario agregado al viaje correctamente",
        "viaje": viaje.serialize(),
        "plazas_restantes": viaje.plazas
    }), 200


# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#   SERVICIO PARA OBTENER LOS VIAJES A LOS QUE EL USUARIO SE HA UNIDO
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
@travel_blueprint.route('/viajes_como_acompanante/<int:usuario_id>', methods=['GET'])
def obtener_viajes_pasajero(usuario_id):
    viajes = Viaje.query.join(PasajeroViaje).filter(PasajeroViaje.usuario_id == usuario_id).options(
        joinedload(Viaje.usuario), 
        joinedload(Viaje.pasajeros).joinedload(PasajeroViaje.usuario)
    ).all()
    
    return jsonify([viaje.serialize() for viaje in viajes]), 200


# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#   SERVICIO PARA OBTENER UN VIAJE POR SU ID
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
@travel_blueprint.route('/obtener_viaje/<int:viaje_id>', methods=['GET'])
def obtener_viaje_por_id(viaje_id):
    viaje = db.session.query(Viaje).options(
        joinedload(Viaje.usuario),
        joinedload(Viaje.pasajeros).joinedload(PasajeroViaje.usuario)
    ).filter(Viaje.id == viaje_id).first()

    if not viaje:
        return jsonify({"error": "Viaje no encontrado"}), 404

    return jsonify(viaje.serialize()), 200

# # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#   SERVICIO PARA ELIMINAR UN VIAJE
# # # # # # # # # # # # # # # # # # # # # # # # # # # # #
@travel_blueprint.route('/eliminar_viaje/<int:viaje_id>', methods=['DELETE'])
def eliminar_viaje(viaje_id):
    viaje = db.session.query(Viaje).options(
        joinedload(Viaje.pasajeros).joinedload(PasajeroViaje.usuario)
    ).filter(Viaje.id == viaje_id).first()

    if not viaje:
        return jsonify({"error": "Viaje no encontrado"}), 404

    # Obtener los IDs de los acompañantes
    acompanantes = [pasajero.usuario_id for pasajero in viaje.pasajeros]

    # Eliminar a los pasajeros del viaje
    PasajeroViaje.query.filter_by(viaje_id=viaje_id).delete()

    # Eliminar el viaje
    db.session.delete(viaje)
    db.session.commit()

    # Simular el envío de notificaciones (puedes reemplazarlo con lógica real)
    mensajes = [f"El viaje de {viaje.origen} a {viaje.destino} ha sido cancelado." for _ in acompanantes]

    return jsonify({
        "mensaje": "Viaje eliminado correctamente",
        "avisos_enviados": mensajes
    }), 200


# # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#   SERVICIO PARA ELIMINAR UN PASAJERO DE UN VIAJE
# # # # # # # # # # # # # # # # # # # # # # # # # # # # #
@travel_blueprint.route('/eliminar_pasajero/<int:viaje_id>/<int:usuario_id>', methods=['DELETE'])
def eliminar_pasajero(viaje_id, usuario_id):
    viaje = db.session.query(Viaje).options(
        joinedload(Viaje.pasajeros).joinedload(PasajeroViaje.usuario)
    ).filter(Viaje.id == viaje_id).first()

    if not viaje:
        return jsonify({"error": "Viaje no encontrado"}), 404

    pasajero = PasajeroViaje.query.filter_by(viaje_id=viaje_id, usuario_id=usuario_id).first()
    if not pasajero:
        return jsonify({"error": "El pasajero no está en este viaje"}), 404

    # Obtener el usuario (pasajero) para acceder al nombre y apellidos
    usuario = pasajero.usuario  # Esto asume que tienes la relación configurada correctamente

    # Si no se encuentran los datos del usuario
    if not usuario:
        return jsonify({"error": "El usuario no existe"}), 404

    # Obtener nombre y apellidos del pasajero
    nombre_completo = f"{usuario.nombre} {usuario.apellidos}"

    db.session.delete(pasajero)
    viaje.plazas += 1

    # Verifica si 'viaje_id' no es None antes de crear la notificación
    if viaje_id is None:
        return jsonify({"error": "El viaje no tiene un ID válido"}), 400

    # Crear notificación solo para el creador del viaje
    creador_id = viaje.usuario_id

    # Verificar que la notificación solo se envíe al creador del viaje
    if creador_id != usuario_id:  # Asegúrate de que no se envíe al pasajero eliminado
        mensaje = f"El pasajero {nombre_completo} ha cancelado su participación en el viaje de {viaje.origen} a {viaje.destino}."
        notificacion = Notificacion(
            usuario_id=creador_id,
            viaje_id=viaje_id,
            mensaje=mensaje
        )
        db.session.add(notificacion)

    db.session.commit()

    return jsonify({
        "mensaje": "Pasajero eliminado correctamente del viaje",
        "aviso_enviado": mensaje if creador_id != usuario_id else None,
        "plazas_actuales": viaje.plazas,
        "creador_id": creador_id
    }), 200



# # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#   SERVICIO PARA OBTENER LAS NOTIFICACIONES DE UN USUARIO
# # # # # # # # # # # # # # # # # # # # # # # # # # # # #
@travel_blueprint.route('/obtener_notificaciones/<int:usuario_id>', methods=['GET'])
def obtener_notificaciones(usuario_id):
    notificaciones = Notificacion.query.filter_by(usuario_id=usuario_id).order_by(Notificacion.fecha.desc()).all()
    return jsonify([notificacion.serialize() for notificacion in notificaciones]), 200

# # # # # # # # # # # # # # # # # # # # # # # # # # #
#   SERVICIO PARA OBTENER NOTIFICACIONES DE UN VIAJE
# # # # # # # # # # # # # # # # # # # # # # # # # # #
@travel_blueprint.route('/obtener_notificaciones_viaje/<int:viaje_id>', methods=['GET'])
def obtener_notificaciones_viaje(viaje_id):
    notificaciones = Notificacion.query.filter_by(viaje_id=viaje_id).order_by(Notificacion.fecha.desc()).all()
    return jsonify([notificacion.serialize() for notificacion in notificaciones]), 200


# # # # # # # # # # # # # # # # # # # # # # # # # # # #
#   SERVICIO PARA MARCAR UNA NOTIFICACIÓN COMO LEÍDA
# # # # # # # # # # # # # # # # # # # # # # # # # # # #
@travel_blueprint.route('/marcar_notificacion_leida/<int:notificacion_id>', methods=['PUT'])
def marcar_notificacion_leida(notificacion_id):
    notificacion = Notificacion.query.get(notificacion_id)
    if not notificacion:
        return jsonify({"error": "Notificación no encontrada"}), 404

    data = request.get_json()
    if data is None or 'leida' not in data:
        return jsonify({"error": "Se requiere el campo 'leida' en el cuerpo"}), 400

    notificacion.leida = bool(data['leida'])
    db.session.commit()

    estado = "leída" if notificacion.leida else "no leída"
    return jsonify({"message": f"Notificación marcada como {estado}"}), 200