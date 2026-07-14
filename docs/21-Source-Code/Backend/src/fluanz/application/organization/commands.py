"""
Organization Commands.
"""

from dataclasses import dataclass


@dataclass(frozen=True, slots=True)
class CreateOrganizationCommand:
    """
    Command to create a new Organization.
    """

    name: str