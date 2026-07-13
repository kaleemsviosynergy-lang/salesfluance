from fastapi import APIRouter

from fluanz.config import settings

router = APIRouter(tags=["Health"])


@router.get("/health")
async def health() -> dict[str, str]:
    return {
        "application": settings.application_name,
        "version": settings.version,
        "status": "Healthy",
        "environment": settings.environment,
    }