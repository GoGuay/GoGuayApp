"""Corregir relaciones con claves foraneas

Revision ID: a2007e5b897f
Revises: 
Create Date: 2026-01-30 14:36:52.442981

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'a2007e5b897f'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    with op.batch_alter_table('usuarios', schema=None) as batch_op:
        batch_op.alter_column('preferencias',
               existing_type=postgresql.JSON(astext_type=sa.Text()),
               nullable=True)
  
    # ### end Alembic commands ###


def downgrade():
    with op.batch_alter_table('usuarios', schema=None) as batch_op:
        batch_op.alter_column('preferencias',
               existing_type=postgresql.JSON(astext_type=sa.Text()),
               nullable=False)

    # ### end Alembic commands ###
