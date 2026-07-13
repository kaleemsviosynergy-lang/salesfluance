from fluanz.domain.organization.value_objects import OrganizationName


def test_valid_organization_name():
    """
    A valid organization name should be accepted.
    """

    name = OrganizationName("FLUANZ")

    assert name.value == "FLUANZ"