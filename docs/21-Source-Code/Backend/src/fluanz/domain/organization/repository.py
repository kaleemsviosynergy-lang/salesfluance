"""
Organization Repository Contract.
"""

from __future__ import annotations

from abc import ABC, abstractmethod

from fluanz.domain.organization.aggregate import OrganizationAggregate
from fluanz.domain.organization.value_objects import OrganizationId


class OrganizationRepository(ABC):
    """
    Contract for persisting Organization Aggregates.
    """

    @abstractmethod
    async def add(
        self,
        organization: OrganizationAggregate,
    ) -> None:
        """
        Persist a new organization.
        """
        ...

    @abstractmethod
    async def get_by_id(
        self,
        organization_id: OrganizationId,
    ) -> OrganizationAggregate | None:
        """
        Retrieve an organization by its identifier.
        """
        ...

    @abstractmethod
    async def update(
        self,
        organization: OrganizationAggregate,
    ) -> None:
        """
        Persist changes.
        """
        ...

    @abstractmethod
    async def delete(
        self,
        organization_id: OrganizationId,
    ) -> None:
        """
        Delete an organization.
        """
        ...