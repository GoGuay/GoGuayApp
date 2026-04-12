"""Fusión de migraciones duplicadas

Revision ID: 3f551957e0e0
Revises: a2007e5b897f, a43ec52afd2c
Create Date: 2026-04-12 13:02:23.856006

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3f551957e0e0'
down_revision = ('a2007e5b897f', 'a43ec52afd2c')
branch_labels = None
depends_on = None


def upgrade():
    pass


def downgrade():
    pass
