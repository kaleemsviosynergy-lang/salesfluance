"""
API Response Models.
"""

from datetime import datetime

from pydantic import BaseModel


class CreateOrganizationResponse(BaseModel):
    """
    Response returned after creating an organization.
    """

    id: str
    name: str
    created_at: datetime