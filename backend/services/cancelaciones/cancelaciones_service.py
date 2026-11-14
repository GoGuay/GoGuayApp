from flask import Blueprint, jsonify, request
from datetime import datetime, timezone, timedelta
from models.enums import MotivosCancelacionPasajero, MotivosCancelacionConductor
from models import Viaje, PasajeroViaje, Notificacion, Cancelacion, Usuario
from extensions import db
from sqlalchemy.orm import joinedload 
from services.notifications.notifications_utils import enviar_notificacion_push
from flask_jwt_extended import jwt_required, get_jwt_identity

cancelaciones_blueprint = Blueprint('cancelaciones', __name__)

def calcular_peso_cancelacion(viaje, fecha_cancelacion, rol, reserva=None, tipo_aceptacion='AUTOMATICA', no_presentado=False):
    if no_presentado: 
        return 5
    
    # Diferencia entre la salida del viaje y la cancelación.
    tiempo_restante = viaje.fecha_salida - fecha_cancelacion
    horas_restantes = tiempo_restante.total_seconds() / 3600

    if horas_restantes <= 0:
        return 5
    
    if rol == 'PASAJERO':
        if tipo_aceptacion == 'AUTOMATICA':
            if horas_restantes > 24:
                return 1
            else:
                return 3
        elif tipo_aceptacion == 'MANUAL':
            if horas_restantes > 24:
                return 1
            else: 
                minutos_desde_reserva = 99999999
                if reserva and hasattr(reserva, 'fecha_confirmacion_reserva'):
                    delta_reserva = fecha_cancelacion - reserva.fecha_confirmacion_reserva
                    minutos_desde_reserva = delta_reserva.total_seconds() / 60
                
                if minutos_desde_reserva <= 30:
                    return 3
                else:
                    return 4

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


def calcular_y_registrar_cancelacion(usuario, viaje, rol, peso_falta, motivo):
    if rol == 'CONDUCTOR':
        operaciones_previas = sum(1 for v in usuario.viajes_publicados if v.reservas_confirmadas)
    else:
        operaciones_previas = len(usuario.reservas_realizadas)
    
    puntos_a_sumar = peso_falta
    es_periodo_gracia = operaciones_previas < 4

    if es_periodo_gracia:
        if rol == 'CONDUCTOR':
            if peso_falta == 1:
                puntos_a_sumar = 0
            elif peso_falta in [3, 4]:
                puntos_a_sumar = peso_falta - 1
        elif rol == 'PASAJERO':
            if peso_falta == 1:
                puntos_a_sumar = 0
            elif peso_falta in [3, 4]:
                puntos_a_sumar = peso_falta - 1
    
    datos_afectado = None
    if rol == 'CONDUCTOR':
        datos_afectado = [{"id": r.pasajero_id} for r in viaje.reservas_confirmadas]
    elif rol == 'PASAJERO':
        datos_afectado = {
            "conductor_id": viaje.usuario_id,
            "nombre_conductor": viaje.creador.nombre
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
    db.session.commit()

    return puntos_a_sumar