"""baseline

Revision ID: 299b06193685
Revises:
Create Date: 2026-07-30 14:03:10.947484

"""

from typing import Sequence, Union

# revision identifiers, used by Alembic.
revision: str = "299b06193685"
down_revision: Union[str, Sequence[str], None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    pass


def downgrade() -> None:
    """Downgrade schema."""
    pass
