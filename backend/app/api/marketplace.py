from typing import Annotated

from fastapi import APIRouter, Depends, Query, status
from fastapi.responses import JSONResponse
from sqlalchemy import select
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.core.db import get_db
from app.models import CellInventoryItem
from app.schemas.error import ErrorResponse
from app.schemas.inventory import CellInventoryCreate, CellInventoryRead, CellInventoryUpdate

router = APIRouter(prefix="/api/cell-inventory")

DBSession = Annotated[Session, Depends(get_db)]
CellTypeParam = Annotated[str, Query(pattern="^(LFP|NMC|NCA)$")]
ConditionParam = Annotated[str, Query(pattern="^(any|new|recycled)$")]
VoltageParam = Annotated[float, Query(ge=2.5, le=4.3)]
CapacityParam = Annotated[float, Query(gt=0, le=300)]


def _not_found(message: str) -> JSONResponse:
    return JSONResponse(
        status_code=status.HTTP_404_NOT_FOUND,
        content=ErrorResponse(error={"code": "NOT_FOUND", "message": message}).model_dump(),
    )


@router.get("", response_model=list[CellInventoryRead])
def list_inventory(db: DBSession) -> list[CellInventoryItem]:
    return db.scalars(select(CellInventoryItem).order_by(CellInventoryItem.id.asc())).all()


@router.get(
    "/{item_id}", response_model=CellInventoryRead, responses={404: {"model": ErrorResponse}}
)
def get_inventory_item(item_id: int, db: DBSession) -> CellInventoryItem | JSONResponse:
    item = db.get(CellInventoryItem, item_id)
    if not item:
        return _not_found("Inventory item not found.")
    return item


@router.get("/matches/search", response_model=list[CellInventoryRead])
def get_inventory_matches(
    cell_type: CellTypeParam,
    condition: ConditionParam,
    voltage: VoltageParam,
    capacity_ah: CapacityParam,
    db: DBSession,
) -> list[CellInventoryItem]:
    query = select(CellInventoryItem).where(CellInventoryItem.cell_type == cell_type)
    if condition != "any":
        query = query.where(CellInventoryItem.condition == condition)

    items = db.scalars(query).all()
    return [
        item
        for item in items
        if abs(item.voltage - voltage) <= 0.25 and item.capacity_ah >= capacity_ah * 0.9
    ]


@router.post(
    "",
    response_model=CellInventoryRead,
    status_code=status.HTTP_201_CREATED,
    responses={409: {"model": ErrorResponse}},
)
def create_inventory_item(
    payload: CellInventoryCreate, db: DBSession
) -> CellInventoryItem | JSONResponse:
    item = CellInventoryItem(**payload.model_dump())
    db.add(item)
    try:
        db.commit()
    except IntegrityError:
        db.rollback()
        return JSONResponse(
            status_code=status.HTTP_409_CONFLICT,
            content=ErrorResponse(
                error={
                    "code": "DUPLICATE_ITEM_CODE",
                    "message": "Inventory item code already exists.",
                }
            ).model_dump(),
        )
    db.refresh(item)
    return item


@router.put(
    "/{item_id}", response_model=CellInventoryRead, responses={404: {"model": ErrorResponse}}
)
def update_inventory_item(
    item_id: int, payload: CellInventoryUpdate, db: DBSession
) -> CellInventoryItem | JSONResponse:
    item = db.get(CellInventoryItem, item_id)
    if not item:
        return _not_found("Inventory item not found.")

    for field, value in payload.model_dump(exclude_unset=True).items():
        setattr(item, field, value)

    db.add(item)
    db.commit()
    db.refresh(item)
    return item


@router.delete(
    "/{item_id}", status_code=status.HTTP_204_NO_CONTENT, responses={404: {"model": ErrorResponse}}
)
def delete_inventory_item(item_id: int, db: DBSession) -> JSONResponse:
    item = db.get(CellInventoryItem, item_id)
    if not item:
        return _not_found("Inventory item not found.")

    db.delete(item)
    db.commit()
    return JSONResponse(status_code=status.HTTP_204_NO_CONTENT, content=None)
