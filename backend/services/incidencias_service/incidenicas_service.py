import os
from datetime import datetime, timezone
from flask import Blueprint, request, jsonify, current_app
from werkzeug.utils import secure_filename

from extensions import db
from models.incidencia import Incidencia, IncidenciaMensaje, IncidenciaAdjunto
from models.enums import CategoriaIncidenciaEnum, SubCategoriasIncidenciasEnum, TipoAperturaIncidenciaEnum, EstadoIncidenciaEnum

incidencias_bp = Blueprint('incidencias', __name__)

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'pdf'}

def archivo_permitido(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


# --- 1. OBTENER INCIDENCIAS DE UN USUARIO ---
@incidencias_bp.route('/usuario/<int:usuario_id>', methods=['GET'])
def obtener_incidencias_usuario(usuario_id):
    incidencias = Incidencia.query.filter_by(usuario_remitente_id=usuario_id).order_by(Incidencia.created_at.desc()).all()
    return jsonify([i.serialize() for i in incidencias]), 200


# --- 2. CREAR NUEVA INCIDENCIA ---
@incidencias_bp.route('/crear', methods=['POST'])
def crear_incidencia():
    data = request.get_json() or {}
    nueva = Incidencia(
        categoria=data.get('categoria', CategoriaIncidenciaEnum.APP.value),
        subcategoria=data.get('subcategoria', SubCategoriasIncidenciasEnum.ERROR_TECNICO_GENERAL.value),
        tipo_apertura=data.get('tipo_apertura', TipoAperturaIncidenciaEnum.USUARIO.value),
        usuario_remitente_id=data.get('usuario_remitente_id'),
        usuario_reportado_id=data.get('usuario_reportado_id'),
        viaje_id=data.get('viaje_id'),
        resumen=data.get('resumen'),
        descripcion=data.get('descripcion')
    )
    db.session.add(nueva)
    db.session.commit()
    return jsonify(nueva.serialize()), 201


# --- 3. AÑADIR MENSAJE AL HILO ---
@incidencias_bp.route('/<int:incidencia_id>/mensajes', methods=['POST'])
def agregar_mensaje_incidencia(incidencia_id):
    data = request.get_json() or {}
    msg = IncidenciaMensaje(
        incidencia_id=incidencia_id,
        emisor_id=data.get('emisor_id'),
        mensaje=data.get('mensaje')
    )
    db.session.add(msg)
    db.session.commit()
    return jsonify(msg.serialize()), 201


# --- 4. SUBIR ARCHIVO ADJUNTO ---
@incidencias_bp.route('/<int:incidencia_id>/adjuntos', methods=['POST'])
def subir_adjunto_incidencia(incidencia_id):
    incidencia = Incidencia.query.get(incidencia_id)
    if not incidencia:
        return jsonify({"error": "Incidencia no encontrada"}), 404

    if 'archivo' not in request.files:
        return jsonify({"error": "No se ha enviado ningún archivo"}), 400

    file = request.files['archivo']

    if file.filename == '':
        return jsonify({"error": "Nombre de archivo no válido"}), 400

    if file and archivo_permitido(file.filename):
        filename = secure_filename(file.filename)
        timestamp = int(datetime.now(timezone.utc).timestamp())
        nombre_unico = f"incidencia_{incidencia_id}_{timestamp}_{filename}"
        
        # Guardar en la carpeta uploads del servidor
        upload_folder = current_app.config.get('UPLOAD_FOLDER', 'uploads/incidencias')
        os.makedirs(upload_folder, exist_ok=True)

        path_completo = os.path.join(upload_folder, nombre_unico)
        file.save(path_completo)

        # Crear registro en la tabla incidencias_adjuntos
        adjunto = IncidenciaAdjunto(
            incidencia_id=incidencia_id,
            url_archivo=f"/uploads/incidencias/{nombre_unico}"
        )
        db.session.add(adjunto)
        db.session.commit()

        return jsonify(adjunto.serialize()), 201

    return jsonify({"error": "Formato de archivo no permitido. Usa JPG, PNG o PDF."}), 400