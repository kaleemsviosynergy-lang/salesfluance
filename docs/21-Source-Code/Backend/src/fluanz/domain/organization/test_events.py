from fluanz.domain.organization.events import OrganizationCreated
from fluanz.domain.organization.value_objects import OrganizationId


def test_organization_created_event():

    organization_id = OrganizationId()

    event = OrganizationCreated(
        organization_id=organization_id,
    )

    assert event.organization_id == organization_id