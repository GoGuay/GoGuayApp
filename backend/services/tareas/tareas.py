from datetime import datetime, timedelta
import pytz

# Tarea programada para enviar recordatorios a los pasajeros sobre sus viajes próximos a iniciar.
# Esta función se ejecuta periódicamente (por ejemplo, cada minuto) para verificar los viajes que están a punto de comenzar y enviar notificaciones push a los pasajeros que han sido aceptados en esos viajes, recordándoles
# que su viaje comenzará en 5 minutos. También actualiza el estado de los viajes que han comenzado a "EN CURSO".
# Se utiliza la función `enviar_notificacion_push` para enviar las notificaciones a los usuarios, y se registran las notificaciones en la base de datos para su posterior consulta.
# Se maneja cualquier excepción que pueda ocurrir durante el proceso de envío de notificaciones y actualización de estados, registrando los errores en los logs para su análisis.
# Esta tarea es esencial para mejorar la experiencia del usuario al mantenerlos informados sobre sus viajes próximos y asegurarse de que estén preparados para su viaje.
#
def tarea_recordatorio_viajes(app):
    with app.app_context():
        from models.viaje import Viaje
        from models.pasajeroViaje import PasajeroViaje 
        from models.notificaciones import Notificacion
        from models.enums import EstadoViajeEnum 
        from extensions import db
        from services.notifications.notifications_utils import enviar_notificacion_push

        tz = pytz.timezone('Europe/Madrid')
        ahora = datetime.now(tz)
        
        fecha_actual = ahora.date()
        
        viajes_a_iniciar = Viaje.query.filter(
            Viaje.estado_viaje == EstadoViajeEnum.PROXIMO.value,
            Viaje.fecha_salida <= fecha_actual
        ).all()

        for v in viajes_a_iniciar:
            try:
                h, m = map(int, v.hora_salida.split(':'))
                momento_salida = tz.localize(datetime.combine(v.fecha_salida.date(), datetime.time(h, m)))

                if ahora >= momento_salida:
                    v.estado_viaje = EstadoViajeEnum.EN_CURSO.value
                    app.logger.info(f"Viaje {v.id} actualizado a EN CURSO")
            except Exception as e:
                app.logger.error(f"Error al procesar inicio del viaje {v.id}: {e}")
        
        db.session.commit() 

        momento_recordatorio = ahora + timedelta(minutes=5)
        fecha_busqueda = momento_recordatorio.date()
        hora_busqueda = momento_recordatorio.strftime('%H:%M')

        app.logger.debug(f"Buscando recordatorios para: {fecha_busqueda} {hora_busqueda}")

        viajes_proximos = Viaje.query.filter_by(
            fecha_salida=fecha_busqueda, 
            hora_salida=hora_busqueda,
            estado_viaje=EstadoViajeEnum.PROXIMO.value
        ).all()

        for viaje in viajes_proximos:
            p_aceptados = PasajeroViaje.query.filter_by(
                viaje_id=viaje.id, 
                estado='aceptado', 
                recordatorio_inicio_enviado=False
            ).all()

            for p_rel in p_aceptados:
                usuario = p_rel.usuario
                if not usuario: continue

                titulo = "¡Tu viaje comienza en 5 minutos!"
                msg = (f"Hola {usuario.nombre}, tu viaje de {viaje.origen} a {viaje.destino} "
                       f"comenzará pronto (salida {viaje.hora_salida}). "
                       f"¡Prepárate y buen viaje!")

                try:
                    enviar_notificacion_push(
                        usuario_id=usuario.id,
                        titulo=titulo,
                        cuerpo=msg,
                        data={"viaje_id": str(viaje.id), "tipo": "recordatorio_inicio"}
                    )
                    
                    db.session.add(Notificacion(
                        usuario_id=usuario.id, 
                        viaje_id=viaje.id, 
                        mensaje=msg
                    ))
                    
                    p_rel.recordatorio_inicio_enviado = True
                    db.session.commit() 
                    app.logger.info(f"Recordatorio 5 min enviado a usuario {usuario.id}")
                except Exception as e:
                    db.session.rollback()
                    app.logger.error(f"Error en envío de recordatorio: {e}")