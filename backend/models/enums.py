from enum import Enum

class RolUsuarioEnum(Enum):
    usuario = "usuario"
    admin = "admin"
    moderador = "moderador"

class PreferenciasViajeEnum(Enum):
    hablar = "Hablar"
    escuchar = "Escuchar música"
    dormir = "Dormir"
    silencio = "Ir en silencio"
    mascotas = "Se permiten mascotas"
    fumar = "Se permite fumar"


class Pronombre(Enum):
    el_he_him = "Él / He / Him"
    ella_she_her = "Ella / She / Her"
    elle_they_them = "Elle / They / Them"
    otros = "Otros"
    no_uso = "No uso ninguno"
    no_responde = "Prefiero no responder"


class Genero(Enum):
    defecto = ""
    hombre_Cis = "Hombre Cis"
    mujer_Cis = "Mujer Cis"
    transexual = "Transexual"    
    no_binario =  "No binario"
    intergenero = "Intergénero"
    no_fluido = "No Fluido"
    otro = "Otro"
    no_responde = "Prefiero no responder"

class Orientacion(Enum):
    defecto = ""
    Gay = "Gay"
    Lesbiana = "Lesbiana"
    Bisexual = "Bisexual"
    Pansexual = "Pansexual"
    Asexual = "Asexual"
    Demisexual = "Demisexual"
    Queer = "Queer"
    Heterosexual = "Heterosexual"
    Otro = "Otro"

class EstadoViajeEnum(str, Enum):
    PROXIMO = "Próximo"
    EN_CURSO = "En curso"
    FINALIZADO = "Finalizado"
    CANCELADO = "Cancelado"  
    
class EstadoSolicitudEnum(str, Enum):
    PENDIENTE = "Pendiente"
    CANCELADA = "Cancelada"
    FINALIZADA = "Finalizada"

class MotivosCancelacionConductor(str, Enum):
    NO_SE_CANCELA = ""
    AVERIA = "Avería o coche en taller"
    ENFERMEDAD = "Enfermedad"
    PERSONAL = "Problema personal"
    CAMBIOSVIAJE = "Cambios de plan o anulación del viaje"
    ERRORPUBLICACION = "Se ha publicado el viaje por error"
    OTROS = "Otros motivos" 

class MotivosCancelacionPasajero (str, Enum):
    NO_SE_CANCELA = ""
    ENFERMEDAD = "Enfermedad"
    PERSONAL = "Problema personal"
    CAMBIOSVIAJE = "Cambios de plan o anulación del viaje"
    RESERVAPORERROR = "Se ha dado el botón de reserva por error"
    NOAPARECECONDUCTOR = "Tras 15 minutos en el punto de encuentro, el conductor no aparece"
    CONDUCTORNORESPONDE = "Se ha intentado contactar con el conductor pero no responde"
    CAMBIOCONDICIONES = "Se ha cambiado el punto de encuentro y la hora y no me viene bien"
    OTRAFORMAVIAJE = "He encontrado otra forma para hacer el viaje"
    OTROS = "Otros motivos"

class MovimientosMonederoEnum(str, Enum):
    RECARGA_PAYPAL = "Recarga vía Paypal",
    RECARGA_TARJETA = "Recarga por tarjeta",
    ANULACIÓN_RECARGA = "Anulación de la recarga: "
    PAGO_VIAJE = "Pago del viaje a: ",
    ANULACIÓN_PAGO_VIAJE = "Devolución del viaje a: "
    PROMOCION = "Promoción"
    RETIRADA_FONDOS = "Retirada de fondos a cuenta bancaria"

#Enums relacionados con las incidencias
class CategoriaIncidenciaEnum(str, Enum):
    USUARIO = "USUARIO"
    APP = "APP"

class SubCategoriasIncidenciasEnum(str, Enum):
    PAGO = "PAGO"
    VIAJE_PRESENCIA_UBICACION = "VIAJE_PRESENCIA_UBICACION"
    COMPORTAMIENTO = "COMPORTAMIENTO"
    CREACION_VIAJE = "CREACION_VIAJE"
    ERROR_TECNICO_GENERAL = "ERROR_TECNICO_GENERAL"
    OTRO = "OTRO"

class TipoAperturaIncidenciaEnum(str, Enum):
    USUARIO = "USUARIO"
    SISTEMA = "SISTEMA"


class EstadoIncidenciaEnum (str, Enum):
    INICIADA = "INICIADA"
    EN_REVISION = "EN_REVISION"
    FINALIZADA = "FINALIZADA"
    CANCELADA = "CANCELADA"

class TipoCancelacionIncidenciaEnum (str, Enum):
    POR_USUARIO = "POR_USUARIO"
    POR_SISTEMA_NO_PROCEDE = "POR_SISTEMA_NO_PROCEDE"



