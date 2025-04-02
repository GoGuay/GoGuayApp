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
         return jsonify({"vehiculos": []}), 200 
    
    return jsonify({
        "vehiculos": [vehiculo.serialize() for vehiculo in vehiculos]
    }), 200


#Función para editar un vehículo ya añadido
@vehicle_blueprint.route('/editarVehiculo/<int:vehiculo_id>', methods=['PUT'])
def editarVehiculo(vehiculo_id):
    vehiculo = Vehiculo.query.get_or_404(vehiculo_id)
    data = request.json
    print ('Print data: ', data)

    try:
        if 'marca' in data:
            vehiculo.marca = data['marca']
        if 'modelo' in data:
            vehiculo.modelo = data['modelo']
        if 'color' in data:
            vehiculo.color = data['color']
        if 'matricula' in data:
            vehiculo.matricula = data['matricula']

        db.session.commit()
        return jsonify(vehiculo.serialize()), 200

    
    except Exception as e:
        db.session.rollback()
        return jsonify({"Error": str(e)}), 500

#Función para eliminar un vehículo del usuario
@vehicle_blueprint.route('/eliminarVehiculo/<int:id>', methods=['DELETE'])
def eliminarVehiculo(id):
    vehiculo = Vehiculo.query.get(id)

    if vehiculo is None:
        return jsonify ({"error": "no se encuentra el vehiculo"}), 400
    
    try:
        db.session.delete(vehiculo)
        db.session.commit()
        return jsonify ({"Eliminado" : "el vehiculo se ha eliminado correctamente"}),200
    except Exception as e:
        db.session.rollback()
        return jsonify ({"Error": str(e)}), 500


    


