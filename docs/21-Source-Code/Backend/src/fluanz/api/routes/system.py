from fastapi import APIRouter

from fluanz.config import settings
from fluanz.shared.exceptions import ResourceNotFoundException

router = APIRouter(tags=["System"])


@router.get("/")
async def root() -> dict[str, str]:
    return {
        "application": settings.application_name,
        "version": settings.version,
        "message": "Welcome to FLUANZ",
    }

@router.get("/error")
async def error():
    raise ResourceNotFoundException("Organization not found.")