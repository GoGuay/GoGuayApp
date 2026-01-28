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

class Genero(Enum):
    defecto = ""
    hombre_Cis = "Hombre Cis"
    mujer_Cis = "Mujer Cis"
    transexual = "Transexual"    
    no_binario =  "No binario"
    intergenero = "Intergenero"
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




