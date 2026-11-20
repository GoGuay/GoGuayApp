import argparse
import base64
import getpass
import json
import os
import sys
import traceback
import urllib.request
from datetime import datetime
from pathlib import Path
from urllib.parse import urlparse

from groq import Groq
import markdown
import subprocess
if os.name == "nt" and not os.getenv("PLAYWRIGHT_BROWSERS_PATH"):
    local_browsers = Path(os.environ.get("LOCALAPPDATA", str(Path.home() / "AppData" / "Local"))) / "ms-playwright"
    local_browsers.mkdir(parents=True, exist_ok=True)
    os.environ["PLAYWRIGHT_BROWSERS_PATH"] = str(local_browsers)

from playwright.sync_api import sync_playwright


def ensure_playwright_chromium():
    """Comprueba si Chromium existe; si falta (ej. en un PC nuevo), lo instala automáticamente."""
    browsers_dir = Path(os.environ.get("PLAYWRIGHT_BROWSERS_PATH", ""))
    has_chromium = browsers_dir.exists() and any(browsers_dir.glob("chromium*"))
    if not has_chromium:
        print("Descargando navegador Chromium para Playwright (solo la primera vez)...")
        from playwright._impl._driver import compute_driver_executable, get_driver_env
        driver_executable, driver_cli = compute_driver_executable()
        subprocess.run(
            [str(driver_executable), str(driver_cli), "install", "chromium"],
            env=get_driver_env(),
            check=True,
        )

from playwright.sync_api import sync_playwright

# Detectar si corre como .exe compilado (PyInstaller) o como script .py
if getattr(sys, "frozen", False):
    APP_DIR = Path(sys.executable).resolve().parent
    BUNDLE_DIR = Path(getattr(sys, "_MEIPASS", APP_DIR))
else:
    APP_DIR = Path(__file__).resolve().parent
    BUNDLE_DIR = APP_DIR

# Buscar .env junto al .exe o empaquetado dentro del bundle
ENV_PATH = APP_DIR / ".env" if (APP_DIR / ".env").exists() else (BUNDLE_DIR / ".env")

try:
    from dotenv import load_dotenv
    load_dotenv(ENV_PATH)
except ImportError:
    if ENV_PATH.exists():
        for line in ENV_PATH.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                key, value = line.split("=", 1)
                os.environ.setdefault(key.strip(), value.strip().strip("'\""))

FRONTEND_URL = os.getenv("GOGUAY_FRONTEND_URL", "http://localhost:4200")
API_BASE_URL = os.getenv("GOGUAY_API_URL", "http://localhost:5000/api")
GROQ_API_KEY = os.getenv("GROQ_API_KEY", "").strip()
GROQ_MODEL = os.getenv("GROQ_MODEL", "").strip()

TEST_EMAIL = os.getenv("GOGUAY_TEST_EMAIL", "").strip()
TEST_PASSWORD = os.getenv("GOGUAY_TEST_PASSWORD", "")

QA_OUTPUT_DIR = APP_DIR / "QA"
SCREENSHOTS_DIR = QA_OUTPUT_DIR / "screenshots"

PUBLIC_ROUTES = [
    "/home",
    "/sobre-nosotros",
    "/busqueda-viajes",
    "/login",
    "/registro",
    "/centro-ayuda",
    "/faqs",
    "/decalogo",
    "/perfil-publico",
    "/encuesta-satisfaccion",
    "/centro-contacto",
    "/ajustes-aplicacion",
    "/forgot-password",
    "/cookies",
    "/terminos",
    "/condiciones-generales",
]

PROTECTED_ROUTES = [
    "/panel-usuario",
    "/nuevo-viaje",
    "/data-viaje",
    "/resumen-viaje",
    "/mi-perfil",
    "/mis-incidencias",
    "/saldo-transferencias",
    "/verificaciones-perfil",
    "/notificaciones",
    "/mis-viajes",
    "/messaging-center",
]

MOBILE_AUTH_ROUTES = [
    "/mis-viajes",
    "/messaging-center",
    "/nuevo-viaje",
    "/saldo-transferencias",
]


def resolve_groq_model(client: Groq) -> str:
    if GROQ_MODEL:
        return GROQ_MODEL

    models_page = client.models.list()
    available_ids = [m.id for m in getattr(models_page, "data", []) if getattr(m, "id", None)]
    if not available_ids:
        raise RuntimeError("No se encontraron modelos disponibles en Groq para esta API key.")

    preferred_prefixes = [
        "llama-3.3",
        "llama-3.1",
        "llama-4",
        "llama3",
        "qwen",
        "gemma",
        "deepseek",
    ]
    for prefix in preferred_prefixes:
        for model_id in available_ids:
            if model_id.lower().startswith(prefix) and "guard" not in model_id.lower() and "whisper" not in model_id.lower():
                return model_id

    for model_id in available_ids:
        if "whisper" not in model_id.lower() and "guard" not in model_id.lower():
            return model_id

    return available_ids[0]


def check_service_alive(url: str) -> dict:
    try:
        req = urllib.request.Request(url, method="GET")
        with urllib.request.urlopen(req, timeout=5) as resp:
            return {"reachable": True, "status": resp.status, "note": "Respuesta HTTP recibida"}
    except urllib.error.HTTPError as exc:
        return {
            "reachable": True,
            "status": exc.code,
            "note": "Servidor activo (HTTP error esperado en ruta raíz o sin auth)",
        }
    except Exception as exc:
        return {"reachable": False, "error": str(exc)}


def attach_listeners(page, telemetry: dict, current_route_holder: dict):
    def on_console(msg):
        if msg.type == "error":
            telemetry["console_errors"].append({
                "route": current_route_holder["route"],
                "text": msg.text,
            })

    def on_page_error(exc):
        telemetry["page_errors"].append({
            "route": current_route_holder["route"],
            "error": str(exc),
        })

    def on_response(response):
        status = response.status
        url = response.url
        if status >= 400 and ("localhost:5000" in url or "localhost:4200" in url or "/api" in url):
            body_preview = ""
            try:
                body_preview = response.text()[:400]
            except Exception:
                body_preview = "<no se pudo leer el cuerpo>"
            telemetry["failed_requests"].append({
                "route": current_route_holder["route"],
                "method": response.request.method,
                "url": url,
                "status": status,
                "body_preview": body_preview,
            })

    page.on("console", on_console)
    page.on("pageerror", on_page_error)
    page.on("response", on_response)


def check_layout_issues(page) -> list:
    issues = []
    try:
        has_horizontal_scroll = page.evaluate(
            "document.documentElement.scrollWidth > document.documentElement.clientWidth"
        )
        if has_horizontal_scroll:
            issues.append("Desbordamiento horizontal detectado (scrollWidth > clientWidth).")

        broken_images = page.evaluate(
            """() => {
                const imgs = Array.from(document.querySelectorAll('img'));
                return imgs
                    .filter(img => img.complete && img.naturalWidth === 0)
                    .map(img => img.src || img.alt || 'imagen_sin_src');
            }"""
        )
        if broken_images:
            issues.append(f"Imágenes rotas ({len(broken_images)}): {broken_images[:5]}")
    except Exception:
        pass
    return issues


def capture_screenshot(page, label: str, viewport_label: str) -> str:
    """Guarda una captura de pantalla y devuelve su ruta relativa a APP_DIR."""
    try:
        SCREENSHOTS_DIR.mkdir(parents=True, exist_ok=True)
        safe_name = label.strip("/").replace("/", "_").replace(" ", "_") or "root"
        filename = f"{safe_name}_{viewport_label}_{datetime.now().strftime('%H%M%S')}.png"
        full_path = SCREENSHOTS_DIR / filename
        page.screenshot(path=str(full_path), full_page=False)
        return str(full_path.relative_to(APP_DIR))
    except Exception:
        return ""


def visit_route(
    page,
    route: str,
    telemetry: dict,
    current_route_holder: dict,
    auth_mode: bool,
    viewport_label: str = "desktop",
    capture_visual: bool = False,
):
    current_route_holder["route"] = f"{route} [{viewport_label}]"
    target_url = f"{FRONTEND_URL.rstrip('/')}{route}"
    record = {
        "route": route,
        "viewport": viewport_label,
        "auth_mode": auth_mode,
        "requested_url": target_url,
        "final_url": "",
        "title": "",
        "body_chars": 0,
        "status": "ok",
        "notes": "",
        "layout_issues": [],
        "screenshot": "",
    }
    try:
        page.goto(target_url, wait_until="domcontentloaded", timeout=15000)
        page.wait_for_timeout(1200)
        final_url = page.url
        parsed_final = urlparse(final_url)
        record["final_url"] = final_url
        record["title"] = page.title()

        body_text = page.inner_text("body") if page.locator("body").count() else ""
        record["body_chars"] = len(body_text.strip())
        record["layout_issues"] = check_layout_issues(page)

        if not auth_mode and route in PROTECTED_ROUTES:
            if parsed_final.path in PROTECTED_ROUTES:
                record["status"] = "warning"
                record["notes"] = "Ruta protegida accesible sin autenticación (revisar AuthGuard)."
            else:
                record["notes"] = f"Redirigido correctamente a {parsed_final.path}"
        elif auth_mode and route in PROTECTED_ROUTES and parsed_final.path == "/login":
            record["status"] = "warning"
            record["notes"] = "Redirigido a /login estando autenticado (revisar token o AuthGuard)."
        elif record["body_chars"] < 20:
            record["status"] = "warning"
            record["notes"] = "Pantalla con muy poco contenido visible (posible fallo de renderizado)."

        if record["layout_issues"] and record["status"] == "ok":
            record["status"] = "warning"

        # Guardar captura si hubo error/advertencia o si es una vista clave seleccionada para el PDF
        if record["status"] != "ok" or capture_visual:
            record["screenshot"] = capture_screenshot(page, route, viewport_label)

    except Exception as exc:
        record["status"] = "error"
        record["notes"] = str(exc)
        record["screenshot"] = capture_screenshot(page, route, viewport_label)

    telemetry["route_checks"].append(record)


def test_interactive_flows(page, telemetry: dict, current_route_holder: dict):
    # 1. Login con credenciales inválidas
    current_route_holder["route"] = "/login [flujo_error]"
    try:
        page.goto(f"{FRONTEND_URL.rstrip('/')}/login", wait_until="domcontentloaded", timeout=15000)
        page.wait_for_timeout(800)
        email_input = page.locator("input[type='email'], input[formcontrolname*='email' i], input[name*='email' i]").first
        pass_input = page.locator("input[type='password'], input[formcontrolname*='password' i], input[name*='password' i]").first
        submit_btn = page.locator("button[type='submit'], button:has-text('Entrar'), button:has-text('Iniciar')").first

        if email_input.count() and pass_input.count() and submit_btn.count():
            email_input.fill("invalido_qa@goguay.test")
            pass_input.fill("ClaveIncorrecta123!")
            if submit_btn.is_enabled():
                submit_btn.click()
                page.wait_for_timeout(1200)
            status = "ok" if urlparse(page.url).path == "/login" else "warning"
            shot = capture_screenshot(page, "flujo_login_invalido", "desktop") if status != "ok" else ""
            telemetry["flow_tests"].append({
                "flow": "login_credenciales_invalidas",
                "status": status,
                "detail": f"Ruta tras intento inválido: {urlparse(page.url).path}",
                "screenshot": shot,
            })
        else:
            shot = capture_screenshot(page, "flujo_login_sin_inputs", "desktop")
            telemetry["flow_tests"].append({
                "flow": "login_credenciales_invalidas",
                "status": "warning",
                "detail": "No se encontraron los inputs estándar de email/password o botón submit en /login.",
                "screenshot": shot,
            })
    except Exception as exc:
        shot = capture_screenshot(page, "flujo_login_error", "desktop")
        telemetry["flow_tests"].append({
            "flow": "login_credenciales_invalidas",
            "status": "error",
            "detail": str(exc),
            "screenshot": shot,
        })

    # 2. Búsqueda de viajes como invitado
    current_route_holder["route"] = "/busqueda-viajes [flujo_invitado]"
    try:
        page.goto(f"{FRONTEND_URL.rstrip('/')}/busqueda-viajes", wait_until="domcontentloaded", timeout=15000)
        page.wait_for_timeout(1000)
        inputs_count = page.locator("input, select, ion-input, mat-select").count()
        buttons_count = page.locator("button, ion-button").count()
        shot = capture_screenshot(page, "flujo_busqueda_viajes", "desktop")
        telemetry["flow_tests"].append({
            "flow": "busqueda_viajes_invitado",
            "status": "ok",
            "detail": f"Vista cargada en {urlparse(page.url).path} con {inputs_count} campos y {buttons_count} botones.",
            "screenshot": shot,
        })
    except Exception as exc:
        shot = capture_screenshot(page, "flujo_busqueda_error", "desktop")
        telemetry["flow_tests"].append({
            "flow": "busqueda_viajes_invitado",
            "status": "error",
            "detail": str(exc),
            "screenshot": shot,
        })


def test_authenticated_flows(page, telemetry: dict, current_route_holder: dict):
    """Pruebas funcionales exclusivas de GoGuay tras iniciar sesión."""
    # 1. Mis Viajes: comprobar segmentos, spinner y tarjetas
    current_route_holder["route"] = "/mis-viajes [flujo_filtros]"
    try:
        page.goto(f"{FRONTEND_URL.rstrip('/')}/mis-viajes", wait_until="domcontentloaded", timeout=15000)
        page.wait_for_timeout(1500)

        spinner_visible = page.locator("app-spinner").count() > 0
        segmentos = page.locator("ion-segment-button")
        for val in ["solicitudes", "conductor", "pasajero", "todos"]:
            btn = page.locator(f"ion-segment-button[value='{val}']")
            if btn.count():
                btn.click()
                page.wait_for_timeout(500)

        shot = capture_screenshot(page, "flujo_mis_viajes", "desktop")
        telemetry["flow_tests"].append({
            "flow": "mis_viajes_segmentos_y_carga",
            "status": "warning" if spinner_visible else "ok",
            "detail": f"Segmentos encontrados: {segmentos.count()}. Spinner atascado: {spinner_visible}.",
            "screenshot": shot,
        })
    except Exception as exc:
        shot = capture_screenshot(page, "flujo_mis_viajes_error", "desktop")
        telemetry["flow_tests"].append({
            "flow": "mis_viajes_segmentos_y_carga",
            "status": "error",
            "detail": str(exc),
            "screenshot": shot,
        })

    # 2. Centro de Mensajes y apertura de conversación
    current_route_holder["route"] = "/messaging-center [flujo_chat]"
    try:
        page.goto(f"{FRONTEND_URL.rstrip('/')}/messaging-center", wait_until="domcontentloaded", timeout=15000)
        page.wait_for_timeout(1200)
        conversaciones = page.locator("ion-item, .conversation-item, .chat-item")
        total_conv = conversaciones.count()
        detalle = f"Conversaciones listadas: {total_conv}."

        if total_conv > 0:
            conversaciones.first.click()
            page.wait_for_timeout(1500)
            solicitudes_cards = page.locator(".burbuja-solicitud").count()
            detalle += f" Chat abierto en {urlparse(page.url).path} con {solicitudes_cards} tarjetas de solicitud."

        shot = capture_screenshot(page, "flujo_chat", "desktop")
        telemetry["flow_tests"].append({
            "flow": "messaging_y_chat",
            "status": "ok",
            "detail": detalle,
            "screenshot": shot,
        })
    except Exception as exc:
        shot = capture_screenshot(page, "flujo_chat_error", "desktop")
        telemetry["flow_tests"].append({
            "flow": "messaging_y_chat",
            "status": "error",
            "detail": str(exc),
            "screenshot": shot,
        })

    # 3. Nuevo Viaje y apertura de asistente MariCar IA
    current_route_holder["route"] = "/nuevo-viaje [flujo_maricar_ia]"
    try:
        page.goto(f"{FRONTEND_URL.rstrip('/')}/nuevo-viaje", wait_until="domcontentloaded", timeout=15000)
        page.wait_for_timeout(1000)
        btn_maricar = page.locator("button:has-text('MariCar'), ion-button:has-text('MariCar')").first
        if btn_maricar.count():
            btn_maricar.click()
            page.wait_for_timeout(1000)
            modal_visible = page.locator("app-chat-maricar").count() > 0
            shot = capture_screenshot(page, "flujo_maricar_ia", "desktop")
            telemetry["flow_tests"].append({
                "flow": "asistente_ia_maricar",
                "status": "ok" if modal_visible else "warning",
                "detail": f"Modal MariCar desplegado: {modal_visible}.",
                "screenshot": shot,
            })
        else:
            shot = capture_screenshot(page, "flujo_nuevo_viaje", "desktop")
            telemetry["flow_tests"].append({
                "flow": "asistente_ia_maricar",
                "status": "ok",
                "detail": "Vista /nuevo-viaje cargada (botón MariCar no visible en estado inicial).",
                "screenshot": shot,
            })
    except Exception as exc:
        shot = capture_screenshot(page, "flujo_nuevo_viaje_error", "desktop")
        telemetry["flow_tests"].append({
            "flow": "asistente_ia_maricar",
            "status": "error",
            "detail": str(exc),
            "screenshot": shot,
        })


def try_login(page, telemetry: dict, current_route_holder: dict, email: str, password: str) -> bool:
    if not email or not password:
        telemetry["login_status"] = "skipped (no se introdujeron credenciales de prueba)"
        return False

    current_route_holder["route"] = "/login [auth_real]"
    try:
        page.goto(f"{FRONTEND_URL.rstrip('/')}/login", wait_until="domcontentloaded", timeout=15000)
        page.wait_for_timeout(800)
        email_input = page.locator("input[type='email'], input[formcontrolname*='email' i], input[name*='email' i]").first
        pass_input = page.locator("input[type='password'], input[formcontrolname*='password' i], input[name*='password' i]").first
        submit_btn = page.locator("button[type='submit'], button:has-text('Entrar'), button:has-text('Iniciar')").first

        email_input.fill(email)
        pass_input.fill(password)
        submit_btn.click()
        page.wait_for_timeout(1800)

        current_path = urlparse(page.url).path
        logged_in = current_path != "/login"
        has_user_data = page.evaluate("Boolean(localStorage.getItem('userData'))")
        telemetry["login_status"] = (
            f"ok (redirigido a {current_path}, userData en localStorage: {has_user_data})"
            if logged_in
            else "failed (permanece en /login)"
        )
        return logged_in
    except Exception as exc:
        telemetry["login_status"] = f"error: {exc}"
        return False


def run_e2e_checks(email: str, password: str) -> dict:
    telemetry = {
        "timestamp": datetime.now().isoformat(),
        "frontend_url": FRONTEND_URL,
        "api_base_url": API_BASE_URL,
        "services_health": {
            "frontend": check_service_alive(FRONTEND_URL),
            "backend": check_service_alive(API_BASE_URL),
        },
        "login_status": "not_attempted",
        "flow_tests": [],
        "route_checks": [],
        "console_errors": [],
        "page_errors": [],
        "failed_requests": [],
    }

    if not telemetry["services_health"]["frontend"]["reachable"]:
        print(f"AVISO: No se detecta respuesta en {FRONTEND_URL}. Asegúrate de tener Angular arrancado.")
        return telemetry

    key_public_shots = {"/home", "/login"}
    key_protected_shots = {"/panel-usuario", "/saldo-transferencias"}

    ensure_playwright_chromium()

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        # 1. Contexto Desktop (Invitado + Autenticado)
        desktop_context = browser.new_context(viewport={"width": 1366, "height": 850})
        page = desktop_context.new_page()
        current_route_holder = {"route": "/home"}
        attach_listeners(page, telemetry, current_route_holder)

        for route in PUBLIC_ROUTES:
            visit_route(
                page,
                route,
                telemetry,
                current_route_holder,
                auth_mode=False,
                viewport_label="desktop",
                capture_visual=(route in key_public_shots),
            )

        for route in PROTECTED_ROUTES:
            visit_route(page, route, telemetry, current_route_holder, auth_mode=False, viewport_label="desktop")

        test_interactive_flows(page, telemetry, current_route_holder)

        logged_in = try_login(page, telemetry, current_route_holder, email, password)
        storage_state = None
        if logged_in:
            for route in PROTECTED_ROUTES:
                visit_route(
                    page,
                    route,
                    telemetry,
                    current_route_holder,
                    auth_mode=True,
                    viewport_label="desktop",
                    capture_visual=(route in key_protected_shots),
                )
            test_authenticated_flows(page, telemetry, current_route_holder)
            storage_state = desktop_context.storage_state()

        desktop_context.close()

        # 2. Contexto Mobile (Invitado + Autenticado si hubo login)
        mobile_kwargs = {"viewport": {"width": 390, "height": 844}, "is_mobile": True}
        if storage_state:
            mobile_kwargs["storage_state"] = storage_state

        mobile_context = browser.new_context(**mobile_kwargs)
        mobile_page = mobile_context.new_page()
        attach_listeners(mobile_page, telemetry, current_route_holder)

        for route in ["/home", "/login", "/registro", "/busqueda-viajes"]:
            visit_route(
                mobile_page,
                route,
                telemetry,
                current_route_holder,
                auth_mode=False,
                viewport_label="mobile",
                capture_visual=(route == "/home"),
            )

        if logged_in:
            for route in MOBILE_AUTH_ROUTES:
                visit_route(
                    mobile_page,
                    route,
                    telemetry,
                    current_route_holder,
                    auth_mode=True,
                    viewport_label="mobile",
                    capture_visual=(route == "/mis-viajes"),
                )

        mobile_context.close()
        browser.close()

    return telemetry


def generate_report_with_groq(telemetry: dict) -> str:
    if not GROQ_API_KEY:
        raise RuntimeError("Falta GROQ_API_KEY en el archivo .env o variables de entorno.")

    client = Groq(api_key=GROQ_API_KEY)
    selected_model = resolve_groq_model(client)
    print(f"Usando modelo de Groq: {selected_model}")

    telemetry_json = json.dumps(telemetry, ensure_ascii=False, indent=2)

    prompt = (
        "Actúa como un QA Lead y arquitecto senior especializado en aplicaciones web/híbridas con Angular/Ionic y APIs en Python.\n"
        "Analiza los resultados de una ejecución de pruebas automatizadas en local de la aplicación **GoGuay** "
        "(plataforma de viajes compartidos enfocada al colectivo LGTBI, con registro/login, búsqueda y creación de viajes, "
        "chat entre usuarios con solicitudes de plaza, monedero interno, pagos/autorizaciones con PayPal y asistente MariCar IA).\n\n"
        "Datos de telemetría recolectados:\n"
        "```json\n"
        f"{telemetry_json}\n"
        "```\n\n"
        "Redacta un informe técnico claro y accionable en español en formato Markdown con estas secciones:\n"
        "1. **Resumen Ejecutivo** (estado general, disponibilidad de frontend/backend, rutas probadas y conteo de errores).\n"
        "2. **Errores Detectados** (agrupados por severidad: Crítico / Medio / Menor; indica ruta, detalle técnico y posible causa en Angular o en el backend `http://localhost:5000/api`).\n"
        "3. **Revisión de Flujos Clave de GoGuay** (acceso público vs. `AuthGuard`, autenticación, mis viajes, chat/solicitudes, monedero/PayPal, MariCar IA y diseño responsive móvil/escritorio).\n"
        "4. **Plan de Mejoras Priorizado** (acciones concretas ordenadas por impacto y facilidad)."
    )

    chat_completion = client.chat.completions.create(
        model=selected_model,
        messages=[
            {
                "role": "system",
                "content": "Eres un ingeniero de QA y arquitectura software experto en Angular, Ionic, Python y pruebas E2E.",
            },
            {
                "role": "user",
                "content": prompt,
            },
        ],
        temperature=0.2,
    )
    return chat_completion.choices[0].message.content or "No se pudo generar el contenido del informe."


def build_screenshots_gallery_html(telemetry: dict) -> str:
    """Construye una galería HTML con las capturas tomadas durante la ejecución incrustadas en Base64."""
    items = []

    for r in telemetry.get("route_checks", []):
        shot_rel = r.get("screenshot")
        if shot_rel:
            badge = "⚠️ INCIDENCIA" if r.get("status") != "ok" else "✅ VISTA CLAVE"
            titulo = f"{badge} — {r.get('route')} ({r.get('viewport')})"
            detalle = r.get("notes") or (", ".join(r.get("layout_issues", [])) or f"URL final: {r.get('final_url')}")
            items.append((shot_rel, titulo, detalle, r.get("status") != "ok"))

    for f in telemetry.get("flow_tests", []):
        shot_rel = f.get("screenshot")
        if shot_rel:
            badge = "⚠️ FALLO FLUJO" if f.get("status") != "ok" else "✅ FLUJO E2E"
            titulo = f"{badge} — {f.get('flow')}"
            detalle = f.get("detail", "")
            items.append((shot_rel, titulo, detalle, f.get("status") != "ok"))

    if not items:
        return ""

    cards_html = []
    for shot_rel, titulo, detalle, es_error in items:
        full_img_path = APP_DIR / shot_rel
        if not full_img_path.exists():
            continue

        img_b64 = base64.b64encode(full_img_path.read_bytes()).decode("ascii")
        border_color = "#dc2626" if es_error else "#cbd5e1"
        header_bg = "#fef2f2" if es_error else "#f8fafc"
        title_color = "#991b1b" if es_error else "#1e293b"

        cards_html.append(f"""
        <div class="screenshot-card" style="border-color: {border_color};">
          <div class="screenshot-header" style="background-color: {header_bg}; color: {title_color};">
            <strong>{titulo}</strong>
            <div class="screenshot-desc">{detalle}</div>
          </div>
          <div class="screenshot-body">
            <img src="data:image/png;base64,{img_b64}" alt="{titulo}" />
          </div>
        </div>
        """)

    if not cards_html:
        return ""

    return f"""
    <div class="page-break"></div>
    <h2>5. Evidencias Visuales y Capturas de Pantalla</h2>
    <p>Capturas obtenidas automáticamente durante la navegación en escritorio y móvil (vistas clave e incidencias detectadas):</p>
    {''.join(cards_html)}
    """


def export_markdown_to_pdf(report_markdown: str, telemetry: dict, pdf_path: Path):
    """Convierte el informe Markdown + capturas incrustadas a HTML y lo exporta a PDF usando Playwright Chromium."""
    html_body = markdown.markdown(
        report_markdown,
        extensions=["tables", "fenced_code", "nl2br", "sane_lists"],
    )
    gallery_html = build_screenshots_gallery_html(telemetry)

    fecha_legible = datetime.now().strftime("%d/%m/%Y %H:%M")
    full_html = f"""<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Informe QA - GoGuay</title>
  <style>
    @page {{
      size: A4;
      margin: 16mm 14mm 16mm 14mm;
    }}
    body {{
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #1f2937;
      line-height: 1.55;
      font-size: 10.5pt;
      margin: 0;
      padding: 0;
    }}
    .header-banner {{
      background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
      color: #ffffff;
      padding: 18px 22px;
      border-radius: 10px;
      margin-bottom: 22px;
    }}
    .header-banner h1 {{
      margin: 0 0 4px 0;
      font-size: 18pt;
      border: none;
      color: #ffffff;
    }}
    .header-banner p {{
      margin: 0;
      font-size: 9.5pt;
      opacity: 0.9;
    }}
    h1, h2, h3 {{
      color: #111827;
      margin-top: 20px;
      margin-bottom: 8px;
      page-break-after: avoid;
    }}
    h2 {{
      font-size: 13.5pt;
      border-bottom: 2px solid #e5e7eb;
      padding-bottom: 4px;
      color: #4338ca;
    }}
    h3 {{
      font-size: 11.5pt;
      color: #374151;
    }}
    p {{
      margin: 0 0 10px 0;
    }}
    ul, ol {{
      margin: 0 0 12px 0;
      padding-left: 20px;
    }}
    li {{
      margin-bottom: 5px;
    }}
    code {{
      background-color: #f3f4f6;
      color: #b91c1c;
      padding: 2px 5px;
      border-radius: 4px;
      font-family: Consolas, "Courier New", monospace;
      font-size: 9pt;
    }}
    pre {{
      background-color: #111827;
      color: #f9fafb;
      padding: 12px 14px;
      border-radius: 8px;
      overflow-x: auto;
      font-size: 8.5pt;
      line-height: 1.4;
      page-break-inside: avoid;
    }}
    pre code {{
      background: transparent;
      color: inherit;
      padding: 0;
    }}
    table {{
      width: 100%;
      border-collapse: collapse;
      margin: 14px 0;
      font-size: 9.2pt;
      page-break-inside: avoid;
    }}
    th, td {{
      border: 1px solid #d1d5db;
      padding: 8px 10px;
      text-align: left;
    }}
    th {{
      background-color: #eef2ff;
      color: #312e81;
      font-weight: 600;
    }}
    tr:nth-child(even) td {{
      background-color: #f9fafb;
    }}
    blockquote {{
      border-left: 4px solid #6366f1;
      background-color: #eef2ff;
      margin: 12px 0;
      padding: 10px 14px;
      border-radius: 0 6px 6px 0;
      color: #374151;
    }}
    .page-break {{
      page-break-before: always;
    }}
    .screenshot-card {{
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      margin: 16px 0;
      overflow: hidden;
      page-break-inside: avoid;
    }}
    .screenshot-header {{
      padding: 8px 12px;
      border-bottom: 1px solid #e2e8f0;
      font-size: 9.5pt;
    }}
    .screenshot-desc {{
      font-size: 8.5pt;
      color: #475569;
      margin-top: 2px;
    }}
    .screenshot-body {{
      padding: 10px;
      background-color: #ffffff;
      text-align: center;
    }}
    .screenshot-body img {{
      max-width: 100%;
      max-height: 360px;
      object-fit: contain;
      border: 1px solid #e5e7eb;
      border-radius: 4px;
    }}
  </style>
</head>
<body>
  <div class="header-banner">
    <h1>Informe Técnico de Calidad (QA E2E) — GoGuay</h1>
    <p>Generado automáticamente el {fecha_legible} · Entorno: {FRONTEND_URL}</p>
  </div>
  {html_body}
  {gallery_html}
</body>
</html>"""

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_content(full_html, wait_until="load")
        page.pdf(
            path=str(pdf_path),
            format="A4",
            print_background=True,
            margin={"top": "16mm", "right": "14mm", "bottom": "16mm", "left": "14mm"},
        )
        browser.close()


def prompt_credentials_if_needed(solo_informe: bool) -> tuple[str, str]:
    if solo_informe:
        return TEST_EMAIL, TEST_PASSWORD

    if TEST_EMAIL and TEST_PASSWORD:
        return TEST_EMAIL, TEST_PASSWORD

    print("===============================================")
    print("         AGENTE QA AUTOMATIZADO - GOGUAY       ")
    print("===============================================")
    email = input("Email de prueba (pulsa ENTER para ejecutar solo rutas públicas): ").strip()
    if not email:
        return "", ""

    password = getpass.getpass("Contraseña: ")
    return email, password


def main():
    parser = argparse.ArgumentParser(description="Agente QA E2E para GoGuay")
    parser.add_argument(
        "--solo-informe",
        action="store_true",
        help="Reutiliza QA/telemetria_goguay.json existente sin volver a ejecutar Playwright.",
    )
    args = parser.parse_args()

    QA_OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    telemetry_path = QA_OUTPUT_DIR / "telemetria_goguay.json"

    if args.solo_informe and telemetry_path.exists():
        print(f"Reutilizando {telemetry_path} existente...")
        with open(telemetry_path, "r", encoding="utf-8") as f:
            telemetry = json.load(f)
    else:
        email, password = prompt_credentials_if_needed(args.solo_informe)
        print("\nEjecutando pruebas E2E en GoGuay...")
        telemetry = run_e2e_checks(email, password)
        with open(telemetry_path, "w", encoding="utf-8") as f:
            json.dump(telemetry, f, ensure_ascii=False, indent=2)

    print("Generando informe con Groq...")
    report_markdown = generate_report_with_groq(telemetry)

    timestamp_str = datetime.now().strftime("%Y%m%d_%H%M")
    md_path = QA_OUTPUT_DIR / f"INFORME_QA_GOGUAY_{timestamp_str}.md"
    pdf_path = QA_OUTPUT_DIR / f"INFORME_QA_GOGUAY_{timestamp_str}.pdf"

    with open(md_path, "w", encoding="utf-8") as f:
        f.write(report_markdown)

    print("Exportando informe a PDF con capturas de pantalla...")
    export_markdown_to_pdf(report_markdown, telemetry, pdf_path)

    print(f"\n✅ Listo.\n- Markdown: {md_path}\n- PDF: {pdf_path}")


if __name__ == "__main__":
    try:
        main()
    except Exception:
        print("\n❌ ERROR CRÍTICO AL EJECUTAR EL AGENTE:")
        traceback.print_exc()
    finally:
        print("\n" + "=" * 50)
        input("Ejecución terminada. Pulsa ENTER para cerrar...")