"""
Organization Domain Events.
"""

from __future__ import annotations

from dataclasses import dataclass
from datetime import UTC, datetime

from fluanz.domain.organization.value_objects import OrganizationId


@dataclass(frozen=True, slots=True)
class OrganizationCreated:
    """
    Domain event raised when a new Organization is created.
    """

    organization_id: OrganizationId
    occurred_at: datetime = datetime.now(UTC)