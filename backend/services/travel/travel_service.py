# # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#  SERVICIO DEDICADO PARA LA INFORMACIÓN DE LOS VIAJES  #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # #

from flask import Blueprint, jsonify, request
from datetime import datetime
from models import Viaje, PasajeroViaje, Notificacion, Vehiculo, Puntuacion, TokenPush
from extensions import db
from sqlalchemy.orm import joinedload 
from firebase_admin import messaging
from services.notifications.notifications_utils import enviar_notificacion_push

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
        vehiculo = vehiculo_id,
        reserva_automatica=data.get('reserva_automatica', False)
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
    
    creador_id = viaje.usuario_id
    
    if creador_id != usuario_id: 
        nombre_completo = f"{usuario.nombre} {usuario.apellidos}"
        mensaje_texto = f"El usuario {nombre_completo} se ha unido al viaje de {viaje.origen} a {viaje.destino}."
        
        notificacion_db = Notificacion(
            usuario_id=creador_id,
            viaje_id=viaje_id,
            mensaje=mensaje_texto
        )
        db.session.add(notificacion_db)
        db.session.commit()

        enviar_notificacion_push(
            usuario_id=creador_id,
            titulo="¡Tienes un nuevo pasajero!",
            cuerpo=mensaje_texto,
            data={"viaje_id": str(viaje_id)}
        )

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
        joinedload(Viaje.pasajeros)
    ).filter(Viaje.id == viaje_id).first()

    if not viaje:
        return jsonify({"error": "Viaje no encontrado"}), 404

    # 1. Notificar a los pasajeros ANTES de borrar
    for pasajero in viaje.pasajeros:
        mensaje_cancelacion = f"El viaje de {viaje.origen} a {viaje.destino} ha sido cancelado por el conductor."
        
        # Guardar en DB para la campana
        notif_db = Notificacion(usuario_id=pasajero.usuario_id, mensaje=mensaje_cancelacion, viaje_id=viaje_id)
        db.session.add(notif_db)
        
        # Enviar Push al móvil
        enviar_notificacion_push(
            usuario_id=pasajero.usuario_id,
            titulo="Viaje cancelado",
            cuerpo=mensaje_cancelacion
        )

    # 2. Proceder al borrado
    PasajeroViaje.query.filter_by(viaje_id=viaje_id).delete()
    db.session.delete(viaje)
    db.session.commit()

    return jsonify({"mensaje": "Viaje eliminado correctamente y pasajeros notificados"}), 200


# # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#   SERVICIO PARA ELIMINAR UN PASAJERO DE UN VIAJE
# # # # # # # # # # # # # # # # # # # # # # # # # # # # #
@travel_blueprint.route('/eliminar_pasajero/<int:viaje_id>/<int:usuario_id>', methods=['DELETE'])
def eliminar_pasajero(viaje_id, usuario_id):
    viaje = Viaje.query.get(viaje_id)
    if not viaje:
        return jsonify({"error": "Viaje no encontrado"}), 404

    pasajero_rel = PasajeroViaje.query.filter_by(viaje_id=viaje_id, usuario_id=usuario_id).first()
    if not pasajero_rel:
        return jsonify({"error": "El pasajero no está en este viaje"}), 404

    # Datos para la notificación
    usuario = pasajero_rel.usuario
    nombre_completo = f"{usuario.nombre} {usuario.apellidos}"
    creador_id = viaje.usuario_id

    # Borramos al pasajero y devolvemos la plaza
    db.session.delete(pasajero_rel)
    viaje.plazas += 1

    # Notificar al creador (si no es él mismo quien se borra, aunque suele ser el pasajero)
    if creador_id != usuario_id:
        mensaje_salida = f"El pasajero {nombre_completo} ha cancelado su participación en el viaje a {viaje.destino}."
        
        notificacion = Notificacion(usuario_id=creador_id, viaje_id=viaje_id, mensaje=mensaje_salida)
        db.session.add(notificacion)

        enviar_notificacion_push(
            usuario_id=creador_id,
            titulo="Baja en tu viaje",
            cuerpo=mensaje_salida,
            data={"viaje_id": str(viaje_id)}
        )

    db.session.commit()
    return jsonify({"mensaje": "Pasajero eliminado y conductor notificado"}), 200



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

# # # # # # # # # # # # # # # # # # # # # # # # # # # #
#   SERVICIO PARA FILTRAR LOS VIAJES
# # # # # # # # # # # # # # # # # # # # # # # # # # # #
@travel_blueprint.route('/viajes_filtrados', methods=['GET'])
def buscar_viajes_filtrados():
    origen = request.args.get('origen')
    destino = request.args.get('destino')
    fecha_salida = request.args.get('fecha_salida')
    plazas = request.args.get('plazas')

    # Validar al menos un parámetro
    if not any([origen, destino, fecha_salida, plazas]):
        return jsonify({"error": "Debes proporcionar al menos un parámetro de búsqueda."}), 400

    query = db.session.query(Viaje).options(
        joinedload(Viaje.usuario),
        joinedload(Viaje.pasajeros).joinedload(PasajeroViaje.usuario)
    )

    if origen:
        query = query.filter(Viaje.origen.ilike(f"%{origen}%"))

    if destino:
        query = query.filter(Viaje.destino.ilike(f"%{destino}%"))

    if fecha_salida:
        try:
            fecha = datetime.strptime(fecha_salida, '%Y-%m-%d')
            fecha_inicio = datetime.combine(fecha.date(), datetime.min.time())
            fecha_fin = datetime.combine(fecha.date(), datetime.max.time())
            query = query.filter(Viaje.fecha_salida.between(fecha_inicio, fecha_fin))
        except ValueError:
            return jsonify({"error": "Formato de fecha inválido. Usa YYYY-MM-DD"}), 400

    if plazas:
        try:
            query = query.filter(Viaje.plazas >= int(plazas))
        except ValueError:
            return jsonify({"error": "El campo 'plazas' debe ser un número válido."}), 400

    viajes = query.order_by(Viaje.fecha_salida.asc()).all()

    return jsonify([viaje.serialize() for viaje in viajes]), 200

@travel_blueprint.route('/puntuacion', methods=['POST'])
def post_puntuacion():
    body = request.get_json()

    nueva_puntuacion = Puntuacion(
        puntuacion=body['puntuacion'],
        comentario=body.get('comentario'),
        usuario_id=body['usuario_id'],
        evaluador_id=body['evaluador_id'],
        viaje_id=body['viaje_id']
    )

    db.session.add(nueva_puntuacion)
    db.session.commit()

    return jsonify({"msg": "Puntuación registrada correctamente"}), 200


# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#   SERVICIO PARA REGISTRAR UN TOKEN DE SESIÓN PARA NOTIFICACIONES PUSH
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
@travel_blueprint.route('/usuarios/registrar-token', methods=['POST'])
def registrar_token():
    data = request.get_json()
    
    usuario_id = data.get('usuarioId')
    token_valor = data.get('token')

    if not usuario_id or not token_valor:
        return jsonify({"error": "Faltan datos (usuarioId o token)"}), 400

    # Evitar duplicados: Si el token ya existe para ese usuario, no hacemos nada
    token_existente = TokenPush.query.filter_by(token=token_valor).first()
    
    if not token_existente:
        nuevo_token = TokenPush(usuario_id=usuario_id, token=token_valor)
        db.session.add(nuevo_token)
        try:
            db.session.commit()
            return jsonify({"mensaje": "Token registrado con éxito"}), 201
        except Exception as e:
            db.session.rollback()
            return jsonify({"error": "Error al guardar el token", "detalle": str(e)}), 500
    
    return jsonify({"mensaje": "El token ya estaba registrado"}), 200


# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#   SERVICIO PARA CONFIRMAR UN PASAJERO MANUALMENTE
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
@travel_blueprint.route('/confirmar_pasajero_manual', methods=['POST'])
def confirmar_pasajero_manual():
    try:
        data = request.get_json()
    except Exception as e:
        return jsonify({"error": "El request no contiene JSON válido", "detalle": str(e)}), 400

    viaje_id = data.get('viaje_id')
    pasajero_id = data.get('pasajero_id')

    if not viaje_id or not pasajero_id:
        return jsonify({"error": "Faltan datos obligatorios (viaje_id y/o pasajero_id)"}), 400

    viaje = Viaje.query.get(viaje_id)
    if not viaje:
        return jsonify({"error": "El viaje no existe"}), 404

    if viaje.plazas <= 0:
        return jsonify({"error": "Ya no quedan plazas disponibles en este viaje"}), 400

    pasajero_existente = PasajeroViaje.query.filter_by(usuario_id=pasajero_id, viaje_id=viaje_id).first()
    if pasajero_existente:
        return jsonify({"error": "El usuario ya ha sido aceptado anteriormente"}), 400

    try:
        nuevo_pasajero = PasajeroViaje(usuario_id=pasajero_id, viaje_id=viaje_id)
        db.session.add(nuevo_pasajero)
        
        viaje.plazas -= 1
        
        mensaje_texto = f"¡Buenas noticias! El conductor ha aceptado tu solicitud para el viaje a {viaje.destino}."
        notificacion_db = Notificacion(
            usuario_id=pasajero_id,
            viaje_id=viaje_id,
            mensaje=mensaje_texto
        )
        db.session.add(notificacion_db)
        
        db.session.commit()

        enviar_notificacion_push(
            usuario_id=pasajero_id,
            titulo="Solicitud de viaje aceptada",
            cuerpo=mensaje_texto,
            data={"viaje_id": str(viaje_id), "tipo": "solicitud_aceptada"}
        )

        return jsonify({
            "mensaje": "Pasajero confirmado correctamente",
            "viaje": viaje.serialize()
        }), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": "Error interno al procesar la confirmación", "detalle": str(e)}), 500