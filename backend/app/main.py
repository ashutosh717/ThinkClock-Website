from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.api import api_router
from app.core.config import settings
from app.core.db import SessionLocal, engine
from app.models import Base, CellInventoryItem


def _seed_inventory(db: Session) -> None:
    if db.scalars(select(CellInventoryItem).limit(1)).first():
        return

    seed_items = [
        CellInventoryItem(
            item_code="TC-LFP-301",
            cell_type="LFP",
            condition="recycled",
            voltage=3.2,
            capacity_ah=52,
            soh_percent=91,
            price_gbp=32,
            available_qty=14,
        ),
        CellInventoryItem(
            item_code="TC-NMC-188",
            cell_type="NMC",
            condition="recycled",
            voltage=3.7,
            capacity_ah=46,
            soh_percent=88,
            price_gbp=29,
            available_qty=19,
        ),
        CellInventoryItem(
            item_code="TC-NMC-224",
            cell_type="NMC",
            condition="new",
            voltage=3.7,
            capacity_ah=55,
            soh_percent=100,
            price_gbp=43,
            available_qty=22,
        ),
        CellInventoryItem(
            item_code="TC-NMC-609",
            cell_type="NMC",
            condition="recycled",
            voltage=3.7,
            capacity_ah=52,
            soh_percent=90,
            price_gbp=34,
            available_qty=12,
        ),
    ]
    db.add_all(seed_items)
    db.commit()


@asynccontextmanager
async def lifespan(_: FastAPI):
    Base.metadata.create_all(bind=engine)
    with SessionLocal() as db:
        _seed_inventory(db)
    yield


app = FastAPI(title="ThinkClock API", version="0.1.0", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.frontend_origin, "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router)


@app.get("/")
def root() -> dict[str, str]:
    return {"message": "ThinkClock backend scaffold is running."}
