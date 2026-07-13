"""
Organization Value Objects.

This module contains immutable value objects used by the Organization Aggregate.

Value Objects:
- OrganizationId
- OrganizationName
"""

from __future__ import annotations

from dataclasses import dataclass, field
from uuid import UUID, uuid4


@dataclass(frozen=True, slots=True)
class OrganizationId:
    """
    Unique identifier for an Organization.

    This value object is immutable and automatically generates
    a UUID when one is not supplied.
    """

    value: UUID = field(default_factory=uuid4)

    def __str__(self) -> str:
        return str(self.value)


@dataclass(frozen=True, slots=True)
class OrganizationName:
    """
    Represents the business name of an Organization.

    Business Rules:
    - Required
    - Trim surrounding whitespace
    - Minimum length: 3
    - Maximum length: 150
    """

    value: str

    def __post_init__(self) -> None:
        cleaned = self.value.strip()

        if not cleaned:
            raise ValueError("Organization name is required.")

        if len(cleaned) < 3:
            raise ValueError(
                "Organization name must contain at least 3 characters."
            )

        if len(cleaned) > 150:
            raise ValueError(
                "Organization name cannot exceed 150 characters."
            )

        object.__setattr__(self, "value", cleaned)

    def __str__(self) -> str:
        return self.value