"""Tabla Puntuaciones

Revision ID: a43ec52afd2c
Revises: 
Create Date: 2026-02-03 12:33:57.773941

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'a43ec52afd2c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table('puntuaciones',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('puntuacion', sa.Integer(), nullable=False),
        sa.Column('comentario', sa.String(length=500), nullable=True),
        sa.Column('fecha', sa.DateTime(), nullable=True),
        sa.Column('usuario_id', sa.Integer(), nullable=False),
        sa.Column('evaluador_id', sa.Integer(), nullable=False),
        sa.Column('viaje_id', sa.Integer(), nullable=False), 
        sa.ForeignKeyConstraint(['usuario_id'], ['usuarios.id'], name='fk_puntuacion_usuario'),
        sa.ForeignKeyConstraint(['evaluador_id'], ['usuarios.id'], name='fk_puntuacion_evaluador'),
        sa.PrimaryKeyConstraint('id')
    )


