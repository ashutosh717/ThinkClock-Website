from datetime import datetime

from pydantic import BaseModel, ConfigDict, Field


class JobPostingBase(BaseModel):
    slug: str = Field(min_length=2, max_length=120)
    title: str = Field(min_length=2, max_length=255)
    department: str = Field(min_length=2, max_length=120)
    location: str = Field(min_length=2, max_length=120)
    employment_type: str = Field(min_length=2, max_length=80)
    summary: str = Field(min_length=10, max_length=2000)
    responsibilities: str = Field(min_length=10, max_length=6000)
    requirements: str = Field(min_length=10, max_length=6000)
    is_active: bool = True


class JobPostingCreate(JobPostingBase):
    pass


class JobPostingUpdate(BaseModel):
    title: str | None = Field(default=None, min_length=2, max_length=255)
    department: str | None = Field(default=None, min_length=2, max_length=120)
    location: str | None = Field(default=None, min_length=2, max_length=120)
    employment_type: str | None = Field(default=None, min_length=2, max_length=80)
    summary: str | None = Field(default=None, min_length=10, max_length=2000)
    responsibilities: str | None = Field(default=None, min_length=10, max_length=6000)
    requirements: str | None = Field(default=None, min_length=10, max_length=6000)
    is_active: bool | None = None


class JobPostingRead(JobPostingBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    created_at: datetime
    updated_at: datetime
