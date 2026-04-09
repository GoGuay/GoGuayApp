---
sidebar_position: 1
title: Gestión de Usuarios
description: Documentación de los servicios de registro y validación de identidad.
---

# Gestión de Usuarios

Este módulo de Flask gestiona el ciclo de vida de los usuarios.  
Utiliza **Twilio** para la gestión de SMS y **Flask-Mail** para la verificación por correo electrónico.

:::warning Configuración Necesaria
Para que estos servicios funcionen, el servidor debe tener configuradas las siguientes variables de entorno:
`TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN` y `TWILIO_SERVICE_SID`.
:::

## 1. Registro de Usuario

Permite crear una nueva cuenta, asigna un monedero automáticamente y envía un correo de bienvenida con un link de verificación.

### Ruta y Método

`POST /registro`

### Cuerpo de la Petición (JSON)

| Campo              | Tipo     | Obligatorio | Descripción                                        |
| :----------------- | :------- | :---------- | :------------------------------------------------- |
| `nombre`           | `string` | Sí          | Nombre del usuario.                                |
| `apellidos`        | `string` | Sí          | Apellidos del usuario.                             |
| `email`            | `string` | Sí          | Correo (se normaliza a minúsculas).                |
| `password`         | `string` | Sí          | Se almacena de forma segura mediante un hash.      |
| `telefono`         | `string` | No          | Almacena el número del usuario con 9 dígitos       |
| `orientacion`      | `string` | No          | Orientación sexual del usuario                     |
| `genero`           | `string` | No          | Género del usuario                                 |
| `biografia`        | `string` | No          | Breve biografía.                                   |
| `rolPerfil`        | `string` | No          | Rol del perfil en el sistema (por defecto usuario) |
| `fecha_nacimiento` | `date`   | No          | Formato `YYYY-MM-DD`.                              |

### Flujo Lógico

1. **Validación:** Verifica que existan los campos obligatorios.
2. **Normalización:** Convierte el email a minúsculas para evitar duplicados.
3. **Seguridad:** Hashea la contraseña y genera un `access_token` JWT.
4. **Persistencia:** Crea el usuario, le asigna un `Monedero` y envía el correo mediante `Message`.

:::info Seguridad
La contraseña nunca se guarda en texto plano. Se utiliza `generate_password_hash` para asegurar la integridad de los datos.
:::

### Respuestas

#### ✅ 201 Created

El usuario se ha creado con éxito

```json
{
  "mensaje": "Nuevo usuario creado correctamente",
  "access_token": "eyJhbG...",
  "usuario": {
    "id": 1,
    "email": "ejemplo@correo.com",
    "nombre": "Nombre"
  }
}
```

#### ❌ 400 Bad Request (Faltan datos)

Se devuelve cuando alguno de los campos obligatorios (**nombre**, **apellidos**, **email** o **password**) no están presentes en el JSON enviado.

```json
{
  "error": "Falta el campo obligatorio: ${campo}"
}
```

#### ❌ 400 Bad Request (Email duplicado)

Se devuelve si el correo electrónico ya está registrado en la base de datos.

```json{
   "error": "El correo electrónico ya existe"
}
```

---

## 2. Verificar Email Existente

Se utiliza durante el proceso de registro en el frontend para validar en tiempo real si el correo ya está en uso.

### Ruta y Método

`GET /verificar-email-existente`

### Parámetros de Consulta (URL Args)

| Parámetro | Tipo     | Descripción                        |
| :-------- | :------- | :--------------------------------- |
| `email`   | `string` | El correo electrónico a comprobar. |

### Flujo Lógico

1. **Extracción de parámetros:** Se obtiene el email directamente de la URL (request.args).
2. **Normalización:** Si el parámetro email no está presente, se detiene el proceso y devuelve un error 400.
3. **Normalización:** El email se convierte a minúsculas (.lower()) para asegurar una búsqueda uniforme.
4. **Consulta en Base de Datos:** Se realiza una búsqueda utilizando ilike (insensible a mayúsculas/minúsculas).
5. **Evaluación Booleana:**  
   ✅ Si la consulta devuelve un usuario → `existe = True`.  
   ❌ Si la consulta devuelve `None` → `existe = False`.
6. **Respuesta:** Se envía un JSON con el resultado del booleano y un código 200.

### Respuestas

#### ✅ 200 Ya existe correo

```json
{
  "Ya existe correo": true
}
```

#### ❌ 400 No se encuentra email en la petición

```json
{
  "Error": "Email no encontrado"
}
```

:::info Funcionamiento
La búsqueda se realiza mediante ilike para ignorar mayúsculas y minúsculas en la base de datos.
:::

---

## 3. Verificar teléfono existente

Valida si un número de teléfono ya está registrado en el sistema.

### Ruta y Método

`GET /verificar-telefono-existente`

### Parámetros de Consulta (URL Args)

| Parámetro  | Tipo     | Descripción                                   |
| :--------- | :------- | :-------------------------------------------- |
| `telefono` | `string` | El numero de teléfono completo (sin prefijo). |

### Flujo lógico

1. **Captura de Parámetro:** Se obtiene el valor telefono desde los argumentos de la URL (request.args).
2. **Validación de Entrada:** Si el parámetro está vacío o no existe, el servidor interrumpe el proceso y responde con un error 400.
3. **Consulta a Base de Datos:** Se realiza una búsqueda exacta en la tabla de usuarios filtrando por la columna telefono.
4. **Evaluación Booleana: **
   ✅ Si se encuentra el registro: La consulta devuelve un objeto →existe = True.  
   ❌ Si no hay coincidencias: La consulta devuelve None →existe = False.
5. **Respuesta Final:** Se retorna un objeto JSON con el resultado y un código de estado 200.

### Respuestas

#### ✅ 200 Ya existe correo

```json
{
  "Ya existe teléfono": true
}
```

#### ❌ 400 No se encuentra email en la petición

```json
{
  "Error": "Teléfono no encontrado"
}
```

---

## 4. Login de Usuario

Permite a un usuario registrado autenticarse en la plataforma para obtener un token de acceso (JWT).

### Ruta y Método

`POST /login`

### Cuerpo de la Petición (JSON)

| Campo      | Tipo     | Obligatorio | Descripción                     |
| :--------- | :------- | :---------- | :------------------------------ |
| `email`    | `string` | **Sí**      | Correo electrónico del usuario. |
| `password` | `string` | **Sí**      | Contraseña en texto plano.      |

### Flujo Lógico

1. **Captura de datos:** Se extraen el `email` y `password` del cuerpo de la petición (JSON).
2. **Búsqueda:** Se consulta en la base de datos el primer usuario que coincida con el email proporcionado.
3. **Validación de existencia:** Si el usuario es `None`, se detiene el proceso con un error **404**.
4. **Verificación de seguridad:** Se utiliza `check_password_hash` para comparar la contraseña enviada con el hash cifrado de la base de datos. Si no coinciden, devuelve un error **401**.
5. **Generación de Token:** Si las credenciales son válidas, se genera un `access_token` guardando el `ID` del usuario como identidad del token. Se guarda como tipo de dato string.
6. **Respuesta:** Se retorna el perfil del usuario serializado junto con el token generado.

### Respuestas

#### ✅ 200 OK (Autenticación exitosa)

```json
{
  "access_token": "eyJhbG...",
  "usuario": {
    "id": 1,
    "email": "usuario@ejemplo.com",
    "nombre": "Alex"
  }
}
```

#### ❌ 404 Not Found (Usuario inexistente)

```json
{
  "Error": "No se ha encontrado el correo"
}
```

#### ❌ 401 Unauthorized (Credenciales inválidas)

```json
{
  "Error": "Contraseña incorrecta"
}
```

---

## 5. Obtener todos los usuarios

Recupera el listado completo de usuarios registrados junto con su información extendida (vehículos, monederos y puntuaciones).

### Ruta y Método

`GET /obtener_usuarios`

### Flujo Lógico

1. **Consulta Optimizada:** Se utiliza joinedload para realizar una carga conjunta de las relaciones de vehiculos, monedero y puntuaciones en una sola consulta.
2. **Extracción:** Se recuperan todos los registros (.all()) de la tabla Usuario.
3. **Serialización:** Se recorre la lista de objetos convirtiendo cada uno a un diccionario de Python mediante el método serialize().
4. **Respuesta:** Se envía la lista completa en formato JSON.

### Respuestas

#### ✅ 200 OK (Lista de usuarios)

```json
[
  {
    "id": 1,
    "nombre": "Alex",
    "monedero": { "saldo": 50.0 },
    "vehiculos": [],
    "puntuaciones": []
  }
]
```

---

## 6. Obtener usuario por ID

Busca y retorna la información detallada de un usuario específico mediante su identificador único.

### Ruta y Método

`GET /obtener_usuario_por_id/<int:id>`

### Seguridad

| Tipo de Seguridad | Cabecera Requerida | Valor            |
| :---------------- | :----------------- | :--------------- |
| **JWT (Token)**   | `Authorization`    | `Bearer <token>` |

### Parámetros de Ruta (Path Args)

| Parámetro | Tipo      | Obligatorio | Descripción                                  |
| :-------- | :-------- | :---------- | :------------------------------------------- |
| `id`      | `integer` | **Sí**      | ID numérico del usuario en la base de datos. |

### Flujo Lógico

1. **Validación de Token:** El decorador `@jwt_required()` verifica la autenticidad de la petición.
2. **Extracción de Identidad:** Se obtiene el ID del usuario desde el token mediante `get_jwt_identity()`.
3. **Control de Acceso (Casting):** \* Se convierte la identidad del token a entero: `int(current_user_id)`.
   - Se compara con el `id` solicitado en la URL.
   - Si no coinciden, se retorna un **403 Forbidden**.
4. **Consulta:** Si coinciden, se busca al usuario en la base de datos.
5. **Respuesta:** Se retorna el objeto serializado.

   :::warning Nota sobre tipos de datos
   La identidad en el JWT se almacena como `string`. Es imperativo realizar la conversión a `int` antes de comparar con parámetros de ruta definidos como `<int:id>`.
   :::

### Respuestas

#### ✅ 200 OK (Usuario encontrado)

```json
{
  "id": 1,
  "nombre": "Alex",
  "email": "alex@ejemplo.com",
  "apellidos": "García"
}
```

#### ❌ 404 Not Found (ID no registrado)

```json
{
  "error": "no se ha encontrado al usuario"
}
```

#### ❌ 401 Unauthorized (Error de seguridad - Token ausente o inválido)

Se devuelve cuando el token falta, ha expirado o es inválido.

```json
{ "msg": "Missing Authorization Header" }
```

(Nota: El mensaje puede variar según el error específico del JWT).

## 7. NOMBRE FUNCIÓN

Descripción función

### Ruta y Método

``
