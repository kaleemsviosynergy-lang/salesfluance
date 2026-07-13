from fastapi import FastAPI

from fluanz.api.router import api_router
from fluanz.config import configure_logging, settings


def create_application() -> FastAPI:
    # Configure logging FIRST
    configure_logging()

    app = FastAPI(
        title=settings.application_name,
        version=settings.version,
        description="Revenue Readiness Intelligence Platform",
    )

    app.include_router(api_router)

    return app