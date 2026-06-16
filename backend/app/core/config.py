from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file='.env', env_file_encoding='utf-8', extra='ignore')

    project_name: str = 'MiniCook'
    app_version: str = '0.1.0'
    environment: str = 'development'
    database_url: str = 'postgresql+psycopg://minicook:minicook_password@localhost:5432/minicook'
    redis_url: str = 'redis://localhost:6379/0'
    minio_endpoint: str = 'localhost:9000'
    minio_bucket: str = 'minicook-assets'


settings = Settings()
