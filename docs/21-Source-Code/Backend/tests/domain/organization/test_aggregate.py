from fluanz.domain.organization.aggregate import OrganizationAggregate


def test_create_organization():

    organization = OrganizationAggregate.create("FLUANZ")

    assert organization.name.value == "FLUANZ"

    assert organization.id is not None