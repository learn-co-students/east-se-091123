"""added age to cats

Revision ID: 31e6b8ca62bc
Revises: 7b52c3c42977
Create Date: 2023-11-14 08:43:34.225463

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '31e6b8ca62bc'
down_revision = '7b52c3c42977'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('cats', schema=None) as batch_op:
        batch_op.add_column(sa.Column('age', sa.Integer(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('cats', schema=None) as batch_op:
        batch_op.drop_column('age')

    # ### end Alembic commands ###
