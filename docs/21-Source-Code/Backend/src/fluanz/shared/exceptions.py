class FluanzException(Exception):
    """Base exception for all FLUANZ application errors."""

    def __init__(self, message: str):
        self.message = message
        super().__init__(message)


class ValidationException(FluanzException):
    """Raised when business validation fails."""


class ResourceNotFoundException(FluanzException):
    """Raised when a requested resource cannot be found."""