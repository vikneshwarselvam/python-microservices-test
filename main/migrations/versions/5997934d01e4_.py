"""empty message

Revision ID: 5997934d01e4
Revises: 2e7a675fff3e
Create Date: 2021-02-22 07:53:59.707629

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5997934d01e4'
down_revision = '2e7a675fff3e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('product', sa.Column('likes', sa.Integer(), autoincrement=False, nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('product', 'likes')
    # ### end Alembic commands ###