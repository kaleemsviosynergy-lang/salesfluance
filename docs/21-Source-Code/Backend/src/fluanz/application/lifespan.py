from contextlib import asynccontextmanager

from fastapi import FastAPI
import logging

logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("FLUANZ startup complete.")

    yield

    logger.info("FLUANZ shutdown complete.")