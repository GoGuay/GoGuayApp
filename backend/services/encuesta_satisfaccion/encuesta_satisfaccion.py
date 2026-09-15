from flask import Blueprint, request, jsonify
from extensions import db
from models import EncuestaSatisfaccion

encuesta_bp = Blueprint('encuesta', __name__)

@encuesta_bp.route('/', methods=['POST'], strict_slashes=False)
def guardar_encuesta():
    data = request.get_json()
    
    try:
        nueva_encuesta = EncuestaSatisfaccion(
            usuario_id=data.get('usuario_id'),
            calificacion=data.get('recomendacion'),
            diseno=data.get('aspectos')[0]['estado'],
            facilidad_busqueda=data.get('aspectos')[1]['estado'],
            centro_mensajes=data.get('aspectos')[2]['estado'],
            seguridad=data.get('aspectos')[3]['estado'],
            normas=data.get('aspectos')[4]['estado'],
            sugerencias=data.get('sugerencias')
        )
        db.session.add(nueva_encuesta)
        db.session.commit()
        return jsonify({"message": "Encuesta guardada con éxito"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

@encuesta_bp.route('/admin/obtener_encuestas', methods=['GET'], strict_slashes=False)
def obtener_encuestas():
    try:
        encuestas = EncuestaSatisfaccion.query.order_by(EncuestaSatisfaccion.fecha_creacion.desc()).all()
        return jsonify([e.serialize() for e in encuestas]), 200
    except Exception as e:
        print(f"Error crítico en el servidor: {str(e)}")
        return jsonify({"error": "Error al serializar datos"}), 500