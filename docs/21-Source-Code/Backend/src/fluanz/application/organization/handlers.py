"""
Organization Command Handlers.
"""

from __future__ import annotations

from fluanz.application.organization.commands import (
    CreateOrganizationCommand,
)
from fluanz.domain.organization.aggregate import (
    OrganizationAggregate,
)
from fluanz.domain.organization.repository import (
    OrganizationRepository,
)


class CreateOrganizationHandler:
    """
    Handles the Create Organization use case.
    """

    def __init__(
        self,
        repository: OrganizationRepository,
    ) -> None:
        self._repository = repository

    async def handle(
        self,
        command: CreateOrganizationCommand,
    ) -> OrganizationAggregate:
        """
        Execute the Create Organization use case.
        """

        organization = OrganizationAggregate.create(
            command.name,
        )

        await self._repository.add(
            organization,
        )

        return organization