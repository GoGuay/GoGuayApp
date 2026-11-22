from flask import Blueprint, jsonify, request
from datetime import datetime, timezone, timedelta
from models.enums import MotivosCancelacionPasajero, MotivosCancelacionConductor, EstadoSolicitudEnum
from models import Viaje, PasajeroViaje, Notificacion, Cancelacion, Usuario
from extensions import db
from sqlalchemy.orm import joinedload
from services.notifications.notifications_utils import enviar_notificacion_push
from flask_jwt_extended import jwt_required, get_jwt_identity

cancelaciones_blueprint = Blueprint('cancelaciones', __name__)


def _asegurar_utc(dt):
    """Convierte un datetime naive a timezone-aware (UTC) para evitar TypeError al restar fechas."""
    if dt is None:
        return None
    return dt.replace(tzinfo=timezone.utc) if dt.tzinfo is None else dt


def calcular_peso_cancelacion(
    viaje,
    fecha_cancelacion,
    rol,
    reserva=None,
    tipo_aceptacion='AUTOMATICA',
    no_presentado=False
):
    if no_presentado:
        return 5

    fecha_salida_utc = _asegurar_utc(viaje.fecha_salida)
    fecha_canc_utc = _asegurar_utc(fecha_cancelacion)

    # Diferencia entre la salida del viaje y la cancelación
    tiempo_restante = fecha_salida_utc - fecha_canc_utc
    horas_restantes = tiempo_restante.total_seconds() / 3600

    if horas_restantes <= 0:
        return 5

    if rol == 'PASAJERO':
        if tipo_aceptacion == 'AUTOMATICA':
            return 1 if horas_restantes > 24 else 3

        elif tipo_aceptacion == 'MANUAL':
            if horas_restantes > 24:
                return 1
            else:
                minutos_desde_reserva = 99999999
                fecha_conf = getattr(reserva, 'fecha_confirmacion_reserva', None) if reserva else None
                if fecha_conf:
                    fecha_conf_utc = _asegurar_utc(fecha_conf)
                    delta_reserva = fecha_canc_utc - fecha_conf_utc
                    minutos_desde_reserva = delta_reserva.total_seconds() / 60

                return 3 if minutos_desde_reserva <= 30 else 4

    if rol == 'CONDUCTOR':
        if horas_restantes > 48:
            return 1
        elif 24 <= horas_restantes <= 48:
            return 3
        elif 12 <= horas_restantes < 24:
            return 4
        else:
            return 5

    return 0


def calcular_y_registrar_cancelacion(usuario, viaje, rol, peso_falta, motivo, auto_commit=False):
    if rol == 'CONDUCTOR':
        operaciones_previas = sum(1 for v in usuario.viajes_publicados if v.acompanantes)
    else:
        operaciones_previas = sum(
            1 for r in usuario.reservas_realizadas
            if r.estado in [EstadoSolicitudEnum.ACEPTADA.value]
        )

    puntos_a_sumar = peso_falta
    es_periodo_gracia = operaciones_previas < 4

    if es_periodo_gracia:
        if peso_falta == 1:
            puntos_a_sumar = 0
        elif peso_falta in [3, 4]:
            puntos_a_sumar = peso_falta - 1

    datos_afectado = None
    if rol == 'CONDUCTOR':
        datos_afectado = [{"id": r.usuario_id} for r in viaje.acompanantes]
    elif rol == 'PASAJERO':
        datos_afectado = {
            "conductor_id": viaje.usuario_id,
            "nombre_conductor": viaje.creador.nombre if viaje.creador else ""
        }

    nueva_cancelacion = Cancelacion(
        viaje_id=viaje.id,
        cancelado_por_id=usuario.id,
        rol_involucrado=rol,
        puntos_penalizacion_aplicados=puntos_a_sumar,
        motivo_cancelacion_cond=motivo if rol == 'CONDUCTOR' else MotivosCancelacionConductor.NO_SE_CANCELA.value,
        motivo_cancelacion_pasaj=motivo if rol == 'PASAJERO' else MotivosCancelacionPasajero.NO_SE_CANCELA.value,
        pasajeros_afectados=datos_afectado
    )
    db.session.add(nueva_cancelacion)

    if auto_commit:
        db.session.commit()

    return puntos_a_sumar