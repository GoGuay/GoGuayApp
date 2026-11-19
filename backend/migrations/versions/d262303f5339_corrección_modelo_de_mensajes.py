"""Corrección Modelo de mensajes

Revision ID: d262303f5339
Revises: 
Create Date: 2026-11-19 21:12:18.726587

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd262303f5339'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    with op.batch_alter_table('mensajes', schema=None) as batch_op:
        batch_op.add_column(sa.Column('viaje_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key(
            'fk_mensajes_viaje_id',
            'viajes',
            ['viaje_id'],
            ['id'],
            ondelete='SET NULL',
        )


def downgrade():
    with op.batch_alter_table('mensajes', schema=None) as batch_op:
        batch_op.drop_constraint('fk_mensajes_viaje_id', type_='foreignkey')
        batch_op.drop_column('viaje_id')