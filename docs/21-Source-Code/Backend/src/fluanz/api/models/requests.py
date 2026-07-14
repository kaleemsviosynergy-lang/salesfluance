"""
API Request Models.
"""

from pydantic import BaseModel, Field


class CreateOrganizationRequest(BaseModel):
    """
    Request payload for creating an organization.
    """

    name: str = Field(
        ...,
        min_length=3,
        max_length=100,
        description="Organization name",
    )