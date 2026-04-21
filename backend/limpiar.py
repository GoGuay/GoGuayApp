from app import app, db
from sqlalchemy import text

with app.app_context():
    try:
        # 1. Intentamos borrar la tabla de versiones
        db.session.execute(text('DROP TABLE IF EXISTS alembic_version'))
        db.session.commit()
        print("✅ Tabla 'alembic_version' borrada con éxito.")
    except Exception as e:
        print(f"❌ Error al borrar la tabla: {e}")
        db.session.rollback()