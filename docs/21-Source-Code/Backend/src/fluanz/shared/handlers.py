from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

from fluanz.shared.exceptions import FluanzException


def register_exception_handlers(app: FastAPI) -> None:

    @app.exception_handler(FluanzException)
    async def fluanz_exception_handler(
        request: Request,
        exc: FluanzException,
    ):
        return JSONResponse(
            status_code=400,
            content={
                "success": False,
                "error": {
                    "code": exc.error_code,
                    "message": exc.message,
                },
            },
        )