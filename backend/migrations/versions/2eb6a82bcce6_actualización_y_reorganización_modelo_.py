"""Actualización y reorganización modelo Usuario

Revision ID: 2eb6a82bcce6
Revises: f66bcf77be83
Create Date: 2026-11-02 12:06:11.367387

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2eb6a82bcce6'
down_revision = 'f66bcf77be83'
branch_labels = None
depends_on = None


def upgrade():
    # --- AÑADIR CAMPOS Y ÍNDICES AL MODELO USUARIO ---
    with op.batch_alter_table('usuarios', schema=None) as batch_op:
        batch_op.add_column(sa.Column('perfil_eliminado_por_usuario', sa.Boolean(), nullable=False, server_default='false'))
        batch_op.add_column(sa.Column('fecha_eliminacion_por_usuario', sa.DateTime(), nullable=True))
        batch_op.add_column(sa.Column('fecha_limite_reactivacion', sa.DateTime(), nullable=True))
        batch_op.add_column(sa.Column('fecha_prevista_borrado_definitivo', sa.DateTime(), nullable=True))
        batch_op.add_column(sa.Column('contador_reactivaciones_perfil', sa.Integer(), nullable=False, server_default='0'))
        batch_op.create_index('idx_email_activo', ['email'], unique=True, postgresql_where=sa.text('perfil_eliminado_por_usuario = false'))
        batch_op.create_index('idx_telefono_activo', ['telefono'], unique=True, postgresql_where=sa.text('perfil_eliminado_por_usuario = false'))


def downgrade():
    # --- REVERTIR CAMBIOS EN USUARIO ---
    with op.batch_alter_table('usuarios', schema=None) as batch_op:
        batch_op.drop_index('idx_telefono_activo', postgresql_where=sa.text('perfil_eliminado_por_usuario = false'))
        batch_op.drop_index('idx_email_activo', postgresql_where=sa.text('perfil_eliminado_por_usuario = false'))
        batch_op.drop_column('contador_reactivaciones_perfil')
        batch_op.drop_column('fecha_prevista_borrado_definitivo')
        batch_op.drop_column('fecha_limite_reactivacion')
        batch_op.drop_column('fecha_eliminacion_por_usuario')
        batch_op.drop_column('perfil_eliminado_por_usuario')