import pytest

from fluanz.application.organization.commands import (
    CreateOrganizationCommand,
)
from fluanz.application.organization.handlers import (
    CreateOrganizationHandler,
)
from fluanz.infrastructure.repositories.organization_memory_repository import (
    InMemoryOrganizationRepository,
)


@pytest.mark.anyio
async def test_create_organization():

    repository = InMemoryOrganizationRepository()

    handler = CreateOrganizationHandler(repository)

    command = CreateOrganizationCommand(
        name="FLUANZ",
    )

    organization = await handler.handle(command)

    saved = await repository.get_by_id(
        organization.id,
    )

    assert saved is not None
    assert saved.name.value == "FLUANZ"