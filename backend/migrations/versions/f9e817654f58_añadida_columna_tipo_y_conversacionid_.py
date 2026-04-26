"""Añadida columna tipo y conversacionID en notificaciones

Revision ID: f9e817654f58
Revises: 7fcf9fd08387
Create Date: 2026-04-23 19:35:18.980919

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f9e817654f58'
down_revision = '7fcf9fd08387'
branch_labels = None
depends_on = None


def upgrade():

    with op.batch_alter_table('pasajeros_viaje', schema=None) as batch_op:
        batch_op.add_column(sa.Column('estado', sa.String(length=50), nullable=True))
        batch_op.add_column(sa.Column('fecha_solicitud', sa.DateTime(), nullable=True))



def downgrade():
    # Proceso inverso: eliminar las columnas si queremos volver atrás
    with op.batch_alter_table('pasajeros_viaje', schema=None) as batch_op:
        batch_op.drop_column('fecha_solicitud')
        batch_op.drop_column('estado')

