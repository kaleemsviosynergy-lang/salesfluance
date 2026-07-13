class FluanzException(Exception):
    """
    Base exception for all FLUANZ business exceptions.
    """

    error_code = "FLUANZ_ERROR"

    def __init__(self, message: str):
        self.message = message
        super().__init__(message)


class ValidationException(FluanzException):
    error_code = "VALIDATION_ERROR"


class ResourceNotFoundException(FluanzException):
    error_code = "RESOURCE_NOT_FOUND"


class ConflictException(FluanzException):
    error_code = "CONFLICT"


class UnauthorizedException(FluanzException):
    error_code = "UNAUTHORIZED"