from app import app, db
with app.app_context():
    # Esto elimina el rastro de la versión antigua en la BD
    db.session.execute(db.text('DROP TABLE IF EXISTS alembic_version'))
    db.session.commit()
    print("Tabla alembic_version eliminada correctamente")