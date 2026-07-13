from fastapi import FastAPI

from fluanz.api.router import api_router
from fluanz.application.lifespan import lifespan
from fluanz.config import configure_logging, settings
from fluanz.shared.handlers import register_exception_handlers
from fluanz.shared.middleware.logging import RequestLoggingMiddleware
from fluanz.shared.middleware.request_id import RequestIdMiddleware


def create_application() -> FastAPI:
    """
    Creates and configures the FLUANZ FastAPI application.
    """

    configure_logging()

    app = FastAPI(
        title=settings.application_name,
        version=settings.version,
        description="Revenue Readiness Intelligence Platform",
        lifespan=lifespan,
    )

    app.add_middleware(RequestIdMiddleware)
    app.add_middleware(RequestLoggingMiddleware)

    register_exception_handlers(app)

    app.include_router(api_router)

    return app