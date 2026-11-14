"""Correcciones modelos

Revision ID: ff805f524c5f
Revises: 
Create Date: 2026-11-14 22:30:30.478250

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ff805f524c5f'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # Añadimos las columnas necesarias a la tabla cancelaciones con sus valores por defecto
    with op.batch_alter_table('cancelaciones', schema=None) as batch_op:
        batch_op.add_column(sa.Column('puntos_penalizacion_aplicados', sa.Integer(), nullable=False, server_default='0'))
        batch_op.add_column(sa.Column('rol_involucrado', sa.String(length=20), nullable=False, server_default='DESCONOCIDO'))


def downgrade():
    # Reversión de los cambios en caso de hacer downgrade
    with op.batch_alter_table('cancelaciones', schema=None) as batch_op:
        batch_op.drop_column('rol_involucrado')
        batch_op.drop_column('puntos_penalizacion_aplicados')