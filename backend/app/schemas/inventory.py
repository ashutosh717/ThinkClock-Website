from datetime import datetime

from pydantic import BaseModel, ConfigDict, Field


class CellInventoryBase(BaseModel):
    item_code: str = Field(min_length=3, max_length=120)
    cell_type: str = Field(pattern="^(LFP|NMC|NCA)$")
    condition: str = Field(pattern="^(new|recycled)$")
    voltage: float = Field(ge=2.5, le=4.3)
    capacity_ah: float = Field(gt=0, le=300)
    soh_percent: float = Field(ge=0, le=100)
    price_gbp: float = Field(ge=0)
    available_qty: int = Field(ge=0)


class CellInventoryCreate(CellInventoryBase):
    pass


class CellInventoryUpdate(BaseModel):
    cell_type: str | None = Field(default=None, pattern="^(LFP|NMC|NCA)$")
    condition: str | None = Field(default=None, pattern="^(new|recycled)$")
    voltage: float | None = Field(default=None, ge=2.5, le=4.3)
    capacity_ah: float | None = Field(default=None, gt=0, le=300)
    soh_percent: float | None = Field(default=None, ge=0, le=100)
    price_gbp: float | None = Field(default=None, ge=0)
    available_qty: int | None = Field(default=None, ge=0)


class CellInventoryRead(CellInventoryBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    created_at: datetime
    updated_at: datetime


class InventoryMatchQuery(BaseModel):
    cell_type: str = Field(pattern="^(LFP|NMC|NCA)$")
    condition: str = Field(default="any", pattern="^(any|new|recycled)$")
    voltage: float = Field(ge=2.5, le=4.3)
    capacity_ah: float = Field(gt=0, le=300)
