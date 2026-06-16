from fastapi import FastAPI

from app.core.config import settings

app = FastAPI(title=settings.project_name, version=settings.app_version)


@app.get('/health', tags=['system'])
def health_check() -> dict[str, str]:
    return {'status': 'ok', 'service': settings.project_name}
