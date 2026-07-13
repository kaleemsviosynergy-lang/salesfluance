from pydantic import BaseModel


class ApplicationSettings(BaseModel):
    application_name: str = "FLUANZ"
    version: str = "0.1.0"
    environment: str = "Development"


settings = ApplicationSettings()