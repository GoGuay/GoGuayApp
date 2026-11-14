"""Modificación en la tabla de Usuarios para información de PayPal

Revision ID: e3051b64245e
Revises: 
Create Date: 2026-11-12 20:11:36.541207

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e3051b64245e'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    with op.batch_alter_table('usuarios', schema=None) as batch_op:
        batch_op.add_column(sa.Column('paypal_payer_id', sa.String(length=100), nullable=True))
        batch_op.add_column(
            sa.Column(
                'paypal_vinculado',
                sa.Boolean(),
                nullable=False,
                server_default=sa.text('false')
            )
        )
        batch_op.add_column(sa.Column('paypal_fecha_vinculacion', sa.DateTime(), nullable=True))
        batch_op.create_unique_constraint('uq_usuarios_paypal_payer_id', ['paypal_payer_id'])
        batch_op.drop_column('cobro_paypal_email')


def downgrade():
    with op.batch_alter_table('usuarios', schema=None) as batch_op:
        batch_op.add_column(
            sa.Column('cobro_paypal_email', sa.VARCHAR(length=250), autoincrement=False, nullable=True)
        )
        batch_op.drop_constraint('uq_usuarios_paypal_payer_id', type_='unique')
        batch_op.drop_column('paypal_fecha_vinculacion')
        batch_op.drop_column('paypal_vinculado')
        batch_op.drop_column('paypal_payer_id')