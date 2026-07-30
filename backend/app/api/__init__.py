from fastapi import APIRouter

from app.api.careers import router as careers_router
from app.api.contact import router as contact_router
from app.api.health import router as health_router
from app.api.marketplace import router as marketplace_router

api_router = APIRouter()
api_router.include_router(health_router, tags=["health"])
api_router.include_router(careers_router, tags=["job-postings"])
api_router.include_router(marketplace_router, tags=["cell-inventory"])
api_router.include_router(contact_router, tags=["contact-submissions"])
