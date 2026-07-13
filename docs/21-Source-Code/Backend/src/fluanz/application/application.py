from fastapi import FastAPI

from fluanz.api.router import api_router
from fluanz.config import settings


def create_application() -> FastAPI:
    """
    Creates and configures the FLUANZ FastAPI application.
    """

    app = FastAPI(
        title=settings.application_name,
        version=settings.version,
        description="Revenue Readiness Intelligence Platform",
    )

    app.include_router(api_router)

    return app