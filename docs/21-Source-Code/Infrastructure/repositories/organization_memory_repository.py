"""
In-memory implementation of the Organization Repository.
"""

from __future__ import annotations

from fluanz.domain.organization.aggregate import OrganizationAggregate
from fluanz.domain.organization.repository import OrganizationRepository
from fluanz.domain.organization.value_objects import OrganizationId


class InMemoryOrganizationRepository(OrganizationRepository):
    """
    Simple in-memory repository used for development and testing.
    """

    def __init__(self) -> None:
        self._organizations: dict[str, OrganizationAggregate] = {}

    async def add(
        self,
        organization: OrganizationAggregate,
    ) -> None:
        self._organizations[str(organization.id)] = organization

    async def get_by_id(
        self,
        organization_id: OrganizationId,
    ) -> OrganizationAggregate | None:
        return self._organizations.get(str(organization_id))

    async def update(
        self,
        organization: OrganizationAggregate,
    ) -> None:
        self._organizations[str(organization.id)] = organization

    async def delete(
        self,
        organization_id: OrganizationId,
    ) -> None:
        self._organizations.pop(str(organization_id), None)