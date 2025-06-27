import sqlite3
from sqlalchemy import create_engine, MetaData, Table
import os
from dotenv import load_dotenv

# Cargar .env para obtener la URL de Supabase
load_dotenv()
DATABASE_URL = os.getenv("DATABASE_URL")

# Ruta a tu base de datos local SQLite
SQLITE_DB_PATH = "BBDD/prideride.db"

# Crear motores de base de datos
sqlite_conn = sqlite3.connect(SQLITE_DB_PATH)
sqlite_cursor = sqlite_conn.cursor()

pg_engine = create_engine(DATABASE_URL)
pg_metadata = MetaData()
pg_metadata.reflect(bind=pg_engine)

# Leer todas las tablas en SQLite
sqlite_cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = sqlite_cursor.fetchall()

for (table_name,) in tables:
    if table_name == 'sqlite_sequence':
        continue  # Ignorar tabla interna de SQLite

    try:
        sqlite_cursor.execute(f"SELECT * FROM {table_name}")
        rows = sqlite_cursor.fetchall()
        column_names = [desc[0] for desc in sqlite_cursor.description]

        pg_table = Table(table_name, pg_metadata, autoload_with=pg_engine)

        insert_data = [dict(zip(column_names, row)) for row in rows]

        if insert_data:
            with pg_engine.begin() as conn:
                conn.execute(pg_table.insert(), insert_data)
            print(f"Migradas {len(insert_data)} filas de '{table_name}'")
        else:
            print(f"Tabla '{table_name}' vacía. Nada que migrar.")
    except Exception as e:
        print(f"Error migrando tabla '{table_name}': {e}")

sqlite_conn.close()
