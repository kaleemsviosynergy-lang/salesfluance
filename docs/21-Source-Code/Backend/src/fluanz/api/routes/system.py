from fastapi import APIRouter

from fluanz.config import settings

router = APIRouter(tags=["System"])


@router.get("/")
async def root() -> dict[str, str]:
    return {
        "application": settings.application_name,
        "version": settings.version,
        "message": "Welcome to FLUANZ",
    }