"""Agregar campo fotoPublicId a usuario

Revision ID: 32aaa7f61c71
Revises: c11111572eac
Create Date: 2025-10-25 18:37:27.873786

"""
from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = '32aaa7f61c71'
down_revision = 'c11111572eac'
branch_labels = None
depends_on = None


def upgrade():
    # Solo agregar el nuevo campo
    with op.batch_alter_table('usuarios', schema=None) as batch_op:
        batch_op.add_column(sa.Column('fotoPublicId', sa.String(length=255), nullable=True))


def downgrade():
    # Quitar el campo en caso de revertir
    with op.batch_alter_table('usuarios', schema=None) as batch_op:
        batch_op.drop_column('fotoPublicId')
