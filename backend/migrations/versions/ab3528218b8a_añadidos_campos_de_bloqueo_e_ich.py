"""Añadidos campos de bloqueo e ICH

Revision ID: ab3528218b8a
Revises: 3f551957e0e0
Create Date: 2026-04-12 13:02:49.008066

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'ab3528218b8a'
down_revision = '3f551957e0e0'
branch_labels = None
depends_on = None


def upgrade():
   
    with op.batch_alter_table('usuarios', schema=None) as batch_op:
        op.add_column('usuarios', sa.Column('bloqueado_desde', sa.DateTime(), nullable=True))
        op.add_column('usuarios', sa.Column('bloqueado_hasta', sa.DateTime(), nullable=True))
        op.add_column('usuarios', sa.Column('ya_ha_sido_suspendido', sa.Boolean(), server_default='false', nullable=True))
        op.add_column('usuarios', sa.Column('motivo_bloqueo', sa.String(length=255), nullable=True))

    

def downgrade():

    with op.batch_alter_table('usuarios', schema=None) as batch_op:
        op.drop_column('usuarios', 'motivo_bloqueo')
        op.drop_column('usuarios', 'ya_ha_sido_suspendido')
        op.drop_column('usuarios', 'bloqueado_hasta')
        op.drop_column('usuarios', 'bloqueado_desde')
