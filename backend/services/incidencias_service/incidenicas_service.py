import os
from datetime import datetime, timezone
from flask import Blueprint, request, jsonify, current_app, render_template
from flask_mail import Message
from werkzeug.utils import secure_filename

from extensions import db
from models.incidencia import Incidencia, IncidenciaMensaje, IncidenciaAdjunto
from models.notificaciones import Notificacion  # Modelo de notificaciones de la app
from models.usuario import Usuario
from models.enums import CategoriaIncidenciaEnum, SubCategoriasIncidenciasEnum, TipoAperturaIncidenciaEnum, EstadoIncidenciaEnum

incidencias_bp = Blueprint('incidencias', __name__)

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'pdf'}

def archivo_permitido(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


def enviar_email_y_notificacion(usuario, asunto, mensaje_texto, tipo_notificacion="sistema", incidencia=None, respuesta_texto=None):
    """
    Envía una notificación interna en la app y un correo electrónico renderizado con la plantilla HTML.
    """
    if not usuario:
        return

    try:
        nueva_notif = Notificacion(
            usuario_id=usuario.id,
            mensaje=mensaje_texto,
            tipo=tipo_notificacion,
            leida=False,
            fecha=datetime.now(timezone.utc)
        )
        db.session.add(nueva_notif)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        current_app.logger.error(f"Error al crear notificación interna: {e}")

    try:
        mail = current_app.extensions.get('mail')
        if mail and usuario.email:
            app_frontend_url = current_app.config.get('FRONTEND_URL', 'http://localhost:4200')
            link_destino = f"{app_frontend_url}/incidencias-usuario"

            inc_id = incidencia.id if incidencia else 'N/A'
            inc_resumen = incidencia.resumen if incidencia else asunto
            inc_estado = incidencia.estado.replace('_', ' ') if incidencia else 'REGISTRADA'

            html_body = render_template(
                'email_incidencia.html',
                usuario_nombre=usuario.nombre or 'usuario',
                mensaje_introduccion=mensaje_texto,
                incidencia_id=inc_id,
                incidencia_resumen=inc_resumen,
                incidencia_estado=inc_estado,
                contenido_detallado=respuesta_texto,
                link_incidencias=link_destino
            )

            msg = Message(
                subject=f"[GoGuay Soporte] {asunto}",
                recipients=[usuario.email],
                html=html_body
            )
            mail.send(msg)
    except Exception as e:
        current_app.logger.error(f"Error al enviar correo a {usuario.email}: {e}")


# OBTENER TODAS LAS INCIDENCIAS (Panel de Administración)
@incidencias_bp.route('/admin/todas', methods=['GET'])
def obtener_todas_incidencias_admin():
    incidencias = Incidencia.query.order_by(Incidencia.created_at.desc()).all()
    return jsonify([i.serialize() for i in incidencias]), 200


# OBTENER INCIDENCIAS DE UN USUARIO
@incidencias_bp.route('/usuario/<int:usuario_id>', methods=['GET'])
def obtener_incidencias_usuario(usuario_id):
    incidencias = Incidencia.query.filter_by(usuario_remitente_id=usuario_id).order_by(Incidencia.created_at.desc()).all()
    return jsonify([i.serialize() for i in incidencias]), 200


# CREAR NUEVA INCIDENCIA (Apertura por el usuario)
@incidencias_bp.route('/crear', methods=['POST'])
def crear_incidencia():
    data = request.get_json() or {}
    
    usuario_remitente_id = data.get('usuario_remitente_id')
    if not usuario_remitente_id:
        return jsonify({"error": "El usuario_remitente_id es obligatorio"}), 400

    nueva = Incidencia(
        categoria=data.get('categoria', CategoriaIncidenciaEnum.APP.value),
        subcategoria=data.get('subcategoria', SubCategoriasIncidenciasEnum.ERROR_TECNICO_GENERAL.value),
        tipo_apertura=data.get('tipo_apertura', TipoAperturaIncidenciaEnum.USUARIO.value),
        usuario_remitente_id=usuario_remitente_id,
        usuario_reportado_id=data.get('usuario_reportado_id'),
        viaje_id=data.get('viaje_id'),
        resumen=data.get('resumen'),
        descripcion=data.get('descripcion'),
        estado=EstadoIncidenciaEnum.INICIADA.value
    )
    
    db.session.add(nueva)
    db.session.commit()

    usuario = Usuario.query.get(usuario_remitente_id)
    if usuario:
        asunto = f"Incidencia #{nueva.id} recibida: {nueva.resumen}"
        mensaje = (
            f"Hemos registrado tu incidencia #{nueva.id} ('{nueva.resumen}'). "
            f"Nuestro equipo de soporte la revisará y te informaremos sobre cualquier actualización."
        )
        enviar_email_y_notificacion(usuario, asunto, mensaje)

    return jsonify(nueva.serialize()), 201


# AÑADIR MENSAJE AL HILO (Respuesta de Usuario o Admin)
@incidencias_bp.route('/<int:incidencia_id>/mensajes', methods=['POST'])
def agregar_mensaje_incidencia(incidencia_id):
    data = request.get_json() or {}
    emisor_id = data.get('emisor_id')
    texto_mensaje = data.get('mensaje')

    incidencia = Incidencia.query.get(incidencia_id)
    if not incidencia:
        return jsonify({"error": "Incidencia no encontrada"}), 404

    msg = IncidenciaMensaje(
        incidencia_id=incidencia_id,
        emisor_id=emisor_id,
        mensaje=texto_mensaje
    )
    
    if emisor_id != incidencia.usuario_remitente_id and incidencia.estado == EstadoIncidenciaEnum.INICIADA.value:
        incidencia.estado = EstadoIncidenciaEnum.EN_REVISION.value

    db.session.add(msg)
    db.session.commit()

    if emisor_id != incidencia.usuario_remitente_id:
        usuario = Usuario.query.get(incidencia.usuario_remitente_id)
        if usuario:
            asunto = f"Nueva respuesta en tu Incidencia #{incidencia.id}"
            mensaje = (
                f"Tu incidencia #{incidencia.id} ('{incidencia.resumen}') ha recibido una respuesta del equipo de soporte:\n\n"
                f"\"{texto_mensaje}\""
            )
            enviar_email_y_notificacion(usuario, asunto, mensaje, tipo_notificacion="mensaje")

    return jsonify(msg.serialize()), 201


# SUBIR ARCHIVO ADJUNTO
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
        
        upload_folder = current_app.config.get('UPLOAD_FOLDER', 'uploads/incidencias')
        os.makedirs(upload_folder, exist_ok=True)

        path_completo = os.path.join(upload_folder, nombre_unico)
        file.save(path_completo)

        adjunto = IncidenciaAdjunto(
            incidencia_id=incidencia_id,
            url_archivo=f"/uploads/incidencias/{nombre_unico}"
        )
        db.session.add(adjunto)
        db.session.commit()

        return jsonify(adjunto.serialize()), 201

    return jsonify({"error": "Formato de archivo no permitido. Usa JPG, PNG o PDF."}), 400


# RESOLVER / FINALIZAR O CANCELAR INCIDENCIA
@incidencias_bp.route('/<int:incidencia_id>/estado', methods=['PATCH'])
def cambiar_estado_incidencia(incidencia_id):
    """
    PATCH /api/incidencias/7/estado
    Body JSON: { "nuevo_estado": "CANCELADA", "motivo_cancelacion": "POR_USUARIO" }
    """
    data = request.get_json() or {}
    nuevo_estado = data.get('nuevo_estado')
    resolucion_notas = data.get('resolucion_notas')
    motivo_cancelacion = data.get('motivo_cancelacion')

    incidencia = Incidencia.query.get(incidencia_id)
    if not incidencia:
        return jsonify({"error": "Incidencia no encontrada"}), 404

    incidencia.estado = nuevo_estado
    if resolucion_notas:
        incidencia.resolucion_notas = resolucion_notas
    if motivo_cancelacion:
        incidencia.motivo_cancelacion = motivo_cancelacion

    incidencia.updated_at = datetime.now(timezone.utc)
    db.session.commit()

    usuario = Usuario.query.get(incidencia.usuario_remitente_id)
    if usuario:
        if nuevo_estado == EstadoIncidenciaEnum.FINALIZADA.value:
            asunto = f"Incidencia #{incidencia.id} Resuelta"
            mensaje = (
                f"Tu incidencia #{incidencia.id} ('{incidencia.resumen}') ha sido resuelta por la administración.\n"
                f"Notas de resolución: {resolucion_notas or 'Sin notas adicionales.'}"
            )
            enviar_email_y_notificacion(
                usuario=usuario,
                asunto=asunto,
                mensaje_texto=mensaje,
                incidencia=incidencia,
                respuesta_texto=resolucion_notas
            )
        
        elif nuevo_estado == EstadoIncidenciaEnum.CANCELADA.value:
            motivo_formateado = "Por el usuario" if motivo_cancelacion == "POR_USUARIO" else (motivo_cancelacion or "Cancelado por usuario/sistema").replace('_', ' ')
            
            asunto = f"Incidencia #{incidencia.id} Cancelada"
            mensaje = f"Tu incidencia #{incidencia.id} ('{incidencia.resumen}') ha sido cancelada. Motivo: {motivo_formateado}."
            
            enviar_email_y_notificacion(
                usuario=usuario,
                asunto=asunto,
                mensaje_texto=mensaje,
                incidencia=incidencia,
                respuesta_texto=f"Motivo: {motivo_formateado}"
            )

    return jsonify(incidencia.serialize()), 200