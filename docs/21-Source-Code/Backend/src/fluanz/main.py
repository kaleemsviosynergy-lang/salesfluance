import logging

from fluanz.app.application import create_application

# Create the FastAPI application
app = create_application()

# Create a logger for this module
logger = logging.getLogger(__name__)

# Log a startup message
logger.info("FLUANZ application initialized successfully.")