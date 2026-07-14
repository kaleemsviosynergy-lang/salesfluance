"""
Organization Aggregate Root.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from datetime import UTC, datetime

from fluanz.domain.organization.value_objects import (
    OrganizationId,
    OrganizationName,
)


@dataclass(slots=True)
class OrganizationAggregate:
    """
    Aggregate Root representing an Organization.
    """

    id: OrganizationId
    name: OrganizationName

    created_at: datetime = field(
        default_factory=lambda: datetime.now(UTC)
    )

    updated_at: datetime = field(
        default_factory=lambda: datetime.now(UTC)
    )

    @classmethod
    def create(
        cls,
        name: str,
    ) -> "OrganizationAggregate":
        """
        Factory method for creating a new Organization.
        """

        return cls(
            id=OrganizationId(),
            name=OrganizationName(name),
        )