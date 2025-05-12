# # # # # # # # # # # # # # # # # # # # # # # # # # # # 
#  SERVICIO DEDICADO PARA LA INFORMACIÓN DEL USUARIO  #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # 

from datetime import datetime
from flask import Blueprint, jsonify, Response,  request
from itsdangerous import URLSafeTimedSerializer
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename
from flask_jwt_extended import create_access_token
from extensions import db
from sqlalchemy.orm import joinedload 
from models import Usuario, Monedero, RolUsuarioEnum
from cloudinary import uploader, utils
import re
from PIL import Image
from io import BytesIO

from flask_mail import Mail, Message



# Nombre único para evitar conflictos
user_blueprint = Blueprint('user', __name__)


mail = None
serializer = None



@user_blueprint.route('/enviar_email', methods=['POST'])
def enviar_email():
    email = request.json['email']
    salt = 'email-verify'
    token = serializer.dumps(email, salt=salt)
    link= f"http://localhost:4200/verificar-email/{token}"
    msg = Message("Verifica tu correo", recipients=[email])
    msg.body = f"Por favor haz click en el siguiente en lace para verificar tu correo: {link}"
    mail.send(msg)

    return jsonify({'message': 'Correo enviado'}), 200

@user_blueprint.route('/verificar_email', methods=['POST'])
def verificar_email():
    token = request.json['token']
    salt = 'email-verify'
    try:

        email = serializer.loads(token, salt=salt, max_age=3600)
        print(f"Email extraído del token: {email}") 
        usuario = Usuario.query.filter_by(email=email).first()
        if usuario:
            usuario.emailVerificado = True
            db.session.commit()
            return jsonify({'message': 'Correo verificado correctamente'}), 200
        else:
            return jsonify({'error': 'Usuario no encontrado'}), 404

    except Exception as e:
        return jsonify({'error': 'Token invalido o expirado'}), 400





# # # # # # # # # # # # # # # # # # # #
#       REGISTRAR USUARIO NUEVO
# # # # # # # # # # # # # # # # # # # #
@user_blueprint.route('/registro', methods=['POST'])
def crear_usuario():
    data = request.json

    campos_obligatorios = ['nombre', 'apellidos', 'email', 'password']
    for campo in campos_obligatorios:
        if campo not in data:
            return jsonify({"error": f"Falta el campo obligatorio: {campo}"}), 400

    
    if Usuario.query.filter_by(email=data['email']).first():
        return jsonify({"error": "El correo electrónico ya existe"}), 400

    codificar_password = generate_password_hash(data['password'])
    nuevo_usuario = Usuario (
        nombre=data['nombre'],
        apellidos=data['apellidos'],
        email=data['email'],
        password=codificar_password,
        telefono=data.get('telefono'),
        orientacion=data.get('orientacion'),
        genero=data.get('genero'),
        biografia=data.get('biografia'),
        rolPerfil=data.get('rolPerfil', RolUsuarioEnum.usuario.value),
        carnet_conducir_verificado=data.get('carnet_conducir_verificado', False),
        numero_carnet_conducir=data.get('numero_carnet_conducir'),
        fecha_nacimiento=datetime.strptime(data['fecha_nacimiento'], '%Y-%m-%d') if data.get('fecha_nacimiento') else None,
        fecha_vencimiento_carnet=datetime.strptime(data['fecha_vencimiento_carnet'], '%Y-%m-%d') if data.get('fecha_vencimiento_carnet') else None
        
        
    )

    db.session.add(nuevo_usuario)
    db.session.commit()

    nuevo_usuario.monedero = Monedero()
    db.session.commit()

    access_token = create_access_token(identity=nuevo_usuario.id)

    return jsonify({
        "mensaje": "Nuevo usuario creado correctamente",
        "access_token": access_token,
        "usuario": nuevo_usuario.serialize()
    }), 201


# # # # # # # # # # # # # # # # # # # #
#              LOGIN
# # # # # # # # # # # # # # # # # # # #
@user_blueprint.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    # Buscar al usuario en la base de datos
    usuario = Usuario.query.filter_by(email=email).first()

    if usuario is None:
        return jsonify({'Error': "No se ha encontrado el correo"}), 404

    # Verificar si la contraseña coincide
    if not check_password_hash(usuario.password, password):
        return jsonify({'Error': 'Contraseña incorrecta'}), 401

    # Crear el token de acceso
    access_token = create_access_token(identity=usuario.id)

    return jsonify({
        'usuario': usuario.serialize(),
        'access_token': access_token
    }), 200

# # # # # # # # # # # # # # # # # # # #
#       OBTENER TODOS LOS USUARIOS
# # # # # # # # # # # # # # # # # # # #
@user_blueprint.route('/obtener_usuarios', methods=['GET'])
def obtener_usuarios():
    lista_usuarios = Usuario.query.options(
        joinedload(Usuario.vehiculos),
        joinedload(Usuario.monedero),
        joinedload(Usuario.puntuaciones)
    ).all()
    return jsonify([usuario.serialize() for usuario in lista_usuarios])



# # # # # # # # # # # # # # # # # # # #
#       OBTENER USUARIO POR ID
# # # # # # # # # # # # # # # # # # # #
@user_blueprint.route('/obtener_usuario_por_id/<int:id>', methods=['GET'])
def obtener_usuario_por_id(id):
    usuario = Usuario.query.get(id)
    if usuario is None:
        return jsonify({"error": "no se ha encontrado al usuario"}), 404

    return jsonify(usuario.serialize()), 200



@user_blueprint.route('/editarusuario/<int:user_id>', methods=['PUT'])
def actualizar_usuario(user_id):
    usuario = Usuario.query.get_or_404(user_id)
    data = request.json
    print('Data recibida: ', data)

    # Iterar sobre los campos posibles para actualizar
    for key in ['nombre', 'apellidos', 'pronombre', 'genero', 'orientacion', 'biografia', 'fecha_nacimiento', 'preferencias', 'email', 'telefono', 'comunic_comerciales', 'comunic_terceros']:
        if key in data and data[key] is not None:  # Asegúrate de que el campo esté presente y no sea None
            if key == 'fecha_nacimiento' and data[key]:
                setattr(usuario, key, datetime.strptime(data[key], '%Y-%m-%d'))  # Para 'fecha_nacimiento', conviértelo a datetime
            else:
                setattr(usuario, key, data[key])  # Para el resto de los campos, asignar directamente el valor
    
    db.session.commit()  # Guardar los cambios en la base de datos
    return jsonify(usuario.serialize()), 200  # Devolver el usuario actualizado


# # # # # # # # # # # # # # # # # # # #
#       ELIMINAR USUARIO POR ID
# # # # # # # # # # # # # # # # # # # #
@user_blueprint.route('/eliminar_usuario/<int:id>', methods=['DELETE'])
def eliminar_usuario(id):
    usuario = Usuario.query.get(id)
    
    if usuario is None:
        return jsonify({"error": "No se ha encontrado al usuario"}), 404
    
    # Eliminar el usuario
    db.session.delete(usuario)
    db.session.commit()
    
    return jsonify({"mensaje": "Usuario eliminado correctamente"}), 200



def obtener_public_id(url):
    """ Extrae el public_id desde la URL de la imagen en Cloudinary. """
    match = re.search(r'/([^/]+)\.[a-zA-Z]+$', url)
    if match:
        return match.group(1)
    return None

# # # # # # # # # # # # # # # # # # # # # # # # # # #
#   Función para reducir el tamaño de una imagen.
# # # # # # # # # # # # # # # # # # # # # # # # # # #
def reducir_imagen(imagen, max_size=10485760):  # 10 MB
    img = Image.open(imagen)
    output = BytesIO()
    calidad = 85

    # Reducir el tamaño de la imagen (opcional, puedes ajustar el tamaño máximo)
    max_resolution = (1920, 1080)  # Puedes ajustar el tamaño máximo de la resolución
    img.thumbnail(max_resolution)

    # Obtener el formato original de la imagen
    formato = img.format.lower()

    # Comprimir según el formato
    while True:
        output.seek(0)
        
        if formato in ['jpeg', 'jpg']:  # JPEG
            img.save(output, format="JPEG", quality=calidad, optimize=True)
        elif formato == 'png':  # PNG
            img.save(output, format="PNG", optimize=True)
        elif formato == 'gif':  # GIF
            img.save(output, format="GIF", optimize=True)
        else:  # Otros formatos
            img.save(output, format=formato, quality=calidad, optimize=True)

        if output.tell() <= max_size or calidad <= 10:
            break
        
        # Reducir la calidad más rápido al principio para acelerar la compresión
        if calidad > 50:
            calidad -= 10
        else:
            calidad -= 5

    output.seek(0)
    return output



# # # # # # # # # # # # # # # # # # # # 
#       ACTUALIZAR IMAGEN DE PERFIL
# # # # # # # # # # # # # # # # # # # # 
@user_blueprint.route('/actualizar_imagen_perfil/<int:user_id>', methods=['PUT'])
def actualizar_imagen_perfil(user_id):
    user = Usuario.query.get_or_404(user_id)

    imagen = request.files.get('imagenPerfil')
    if not imagen:
        return jsonify({"error": "No se ha enviado ninguna imagen."}), 400

    # Eliminar imagen anterior si existe
    if user.fotoPerfil:
        public_id = obtener_public_id(user.fotoPerfil)
        if public_id:
            uploader.destroy(public_id)

    imagen = reducir_imagen(imagen) # Reduce el tamaño de la imagen llamando a la función.

    # Subir la nueva imagen a Cloudinary
    carpeta_usuario = f"user_{user_id}"
    result = uploader.upload(imagen, folder=carpeta_usuario)

    # Actualizar la información en la base de datos
    user.fotoPerfil = result['secure_url']
    db.session.commit()

    return jsonify({"mensaje": "Imagen de perfil actualizada correctamente", "url": result['secure_url']}), 200


# # # # # # # # # # # # # # # # # # # # 
#       ACTUALIZAR IMAGEN DE CABECERA
# # # # # # # # # # # # # # # # # # # # 
@user_blueprint.route('/actualizar_imagen_cabecera/<int:user_id>', methods=['PUT'])
def actualizar_imagen_cabecera(user_id):
    user = Usuario.query.get_or_404(user_id)

    imagen = request.files.get('imagenCabecera')
    if not imagen:
        return jsonify({"error": "No se ha enviado ninguna imagen."}), 400

    # Eliminar imagen anterior si existe
    if user.fotoCabecera:
        public_id = obtener_public_id(user.fotoCabecera)
        if public_id:
            uploader.destroy(public_id)

    # Subir la nueva imagen a Cloudinary
    carpeta_usuario = f"user_{user_id}"
    result = uploader.upload(imagen, folder=carpeta_usuario)

    # Actualizar la información en la base de datos
    user.fotoCabecera = result['secure_url']
    db.session.commit()

    return jsonify({"mensaje": "Imagen de cabecera actualizada correctamente", "url": result['secure_url']}), 200


# Función para que el usuario suba fotos del documento de identidad
@user_blueprint.route('/subirfoto_documento/<int:user_id>', methods=['PUT'])
def subirfoto_documento(user_id):
    fotos = request.files.getlist('files')
    if fotos:
        urls = []
        for foto in fotos:
            upload = uploader.upload(foto)
            carpeta_usuario = f"user_{user_id}"
            result = uploader.upload(foto, folder=carpeta_usuario)
            urls.append(upload['secure_url'])
        return jsonify ({"urls": urls})
    return jsonify ({"error": "no se han subido las imágenes"})