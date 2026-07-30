import os


class Settings:
    environment: str = os.getenv("APP_ENV", "development")
    app_host: str = os.getenv("APP_HOST", "127.0.0.1")
    app_port: int = int(os.getenv("APP_PORT", "8000"))
    database_url: str = os.getenv(
        "DATABASE_URL",
        "postgresql+psycopg://postgres:postgres@localhost:5432/thinkclock",
    )
    frontend_origin: str = os.getenv("FRONTEND_ORIGIN", "http://localhost:3000")


settings = Settings()
