"""Creación modelo incidencias

Revision ID: ae30baf8c635
Revises: 
Create Date: 2026-11-02 17:02:52.993247

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ae30baf8c635'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # Se eliminan las alteraciones automáticas de los 'id' para evitar 
    # el error de sintaxis con las columnas Identity en PostgreSQL.
    pass


def downgrade():
    pass