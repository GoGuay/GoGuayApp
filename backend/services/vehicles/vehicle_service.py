# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
#  SERVICIO DEDICADO PARA LA INFORMACIÓN DE LOS VEHÍCULOS #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 

from flask import Blueprint, jsonify
from flask import Blueprint, jsonify, request
from extensions import db

from models.vehiculo import Vehiculo
from models.usuario import Usuario


vehicle_blueprint = Blueprint('vehicle', __name__)

@vehicle_blueprint.route('/info', methods=['GET'])
def get_travel_info():
    return jsonify({'destination': 'Paris', 'price': 120})




# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#   SERVICIO PARA AÑADIR UN VEHICULO A UN USUARIO
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
@vehicle_blueprint.route('/anadir_vehiculo', methods=['POST'])
def anadir_vehiculo():
    try:
        data = request.get_json()
    except Exception as e:
        return jsonify({"error": "El request no contiene JSON válido", "detalle": str(e)}), 400

    campos_obligatorios = ['marca', 'modelo', 'color']
    for campo in campos_obligatorios:
        if campo not in data:
           return jsonify({"error": f"Falta el campo obligatorio: {campo}"}), 400

    usuario_id = data.get('usuario_id') 
    if usuario_id is None:
        return jsonify({"error": "Falta el campo 'usuario_id'"}), 400
    
    #Busca el usuario en la tabla de la base de datos
    usuario = Usuario.query.get(usuario_id)
    if not usuario:
        return jsonify({"error": "Usuario no encontrado"}), 404
    
    nuevoVehiculo = Vehiculo(
        marca = data['marca'],
        modelo = data['modelo'],
        color = data['color'],
        matricula = data['matricula'],
        usuario_id = data['usuario_id']
    )
    db.session.add(nuevoVehiculo)
    db.session.commit()

    usuario = Usuario.query.get(usuario_id)  

    return jsonify({
        "mensaje": "Vehiculo guardado correctamente",
        "vehiculo": nuevoVehiculo.serialize(),
        "vehiculos_usuario": [v.serialize() for v in usuario.vehiculos] 
    }), 201

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
#   SERVICIO PARA OBTENER LOS VEHICULOS DE UN USUARIO
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
@vehicle_blueprint.route('/obtenerVehiculos_usuario', methods=['GET'])
def obtenerVehiculos_usuario():
    usuario_id = request.args.get('usuario_id', type=int)

    if not usuario_id:
        return jsonify({"error": "Falta el campo 'usuario_id' en la solicitud"}), 400
    
    vehiculos = Vehiculo.query.filter_by(usuario_id=usuario_id).all()

    if not vehiculos:
        return jsonify({"mensaje": "El usuario no tiene vehiculos guardados"}), 404
    
    return jsonify({
        "vehiculos": [vehiculo.serialize() for vehiculo in vehiculos]
    }), 200

