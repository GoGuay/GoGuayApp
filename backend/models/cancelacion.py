from extensions import db
from datetime import datetime, timezone, timedelta
from models.enums import MotivosCancelacionConductor, MotivosCancelacionPasajero


class Cancelacion(db.Model):
    __tablename__ = 'cancelaciones'

    id = db.Column(db.Integer, primary_key=True)
    viaje_id = db.Column(db.Integer, db.ForeignKey('viajes.id'), nullable=False)
    cancelado_por_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False)
    
    pasajeros_afectados = db.Column(db.JSON, nullable=True) 

    puntos_penalizacion_aplicados = db.Column(db.Integer, nullable=False, default=0)
    rol_involucrado = db.Column(db.String(20), nullable=False) # 'CONDUCTOR' o 'PASAJERO'
    
    motivo_cancelacion_cond = db.Column(db.String(50), nullable=False, default=MotivosCancelacionConductor.NO_SE_CANCELA.value)
    motivo_cancelacion_pasaj = db.Column(db.String(50), nullable=False, default=MotivosCancelacionPasajero.NO_SE_CANCELA.value)
    fecha_cancelacion = db.Column(db.DateTime, default=datetime.now(timezone.utc))

    # --- RELACIONES ---
    viaje = db.relationship('Viaje', backref=db.backref('datos_cancelacion', uselist=False))
    
    # Relación con back_populates conectada a 'cancelaciones_provocadas' en Usuario
    autor = db.relationship(
        'Usuario', 
        foreign_keys=[cancelado_por_id],
        back_populates='cancelaciones_provocadas'
    )

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
                    puntos_a_sumar = peso_falta -1
            elif rol == 'PASAJERO':
                if peso_falta == 1:
                    puntos_a_sumar = 0
                elif peso_falta in [3, 4]:
                    puntos_a_sumar = peso_falta -1
        
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