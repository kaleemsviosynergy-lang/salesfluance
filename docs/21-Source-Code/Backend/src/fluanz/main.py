from fastapi import FastAPI

from fluanz.config import settings

app = FastAPI(
    title=settings.application_name,
    version=settings.version,
)


@app.get("/", tags=["System"])
async def root() -> dict[str, str]:
    return {
        "application": settings.application_name,
        "version": settings.version,
        "message": "Welcome to FLUANZ",
    }


@app.get("/health", tags=["System"])
async def health() -> dict[str, str]:
    return {
        "application": settings.application_name,
        "version": settings.version,
        "status": "Healthy",
        "environment": settings.environment,
    }