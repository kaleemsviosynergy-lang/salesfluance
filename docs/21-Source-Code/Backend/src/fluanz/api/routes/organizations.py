"""
Organization API Routes.
"""

from __future__ import annotations

from fastapi import APIRouter, status

from fluanz.api.models.requests import CreateOrganizationRequest
from fluanz.api.models.responses import CreateOrganizationResponse

from fluanz.application.organization.commands import (
    CreateOrganizationCommand,
)
from fluanz.application.organization.handlers import (
    CreateOrganizationHandler,
)

from fluanz.infrastructure.repositories.organization_memory_repository import (
    InMemoryOrganizationRepository,
)

router = APIRouter(
    prefix="/organizations",
    tags=["Organizations"],
)

# Temporary repository (Sprint 003)
repository = InMemoryOrganizationRepository()

handler = CreateOrganizationHandler(repository)


@router.post(
    "",
    response_model=CreateOrganizationResponse,
    status_code=status.HTTP_201_CREATED,
)
async def create_organization(
    request: CreateOrganizationRequest,
) -> CreateOrganizationResponse:
    """
    Create a new Organization.
    """

    command = CreateOrganizationCommand(
        name=request.name,
    )

    organization = await handler.handle(command)

    return CreateOrganizationResponse(
        id=str(organization.id),
        name=organization.name.value,
        created_at=organization.created_at,
    )