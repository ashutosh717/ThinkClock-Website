from datetime import datetime

from pydantic import BaseModel, ConfigDict, EmailStr, Field


class ContactSubmissionCreate(BaseModel):
    name: str = Field(min_length=2, max_length=255)
    email: EmailStr
    company: str = Field(min_length=2, max_length=255)
    message: str = Field(min_length=20, max_length=4000)


class ContactSubmissionRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    email: EmailStr
    company: str
    message: str
    status: str
    created_at: datetime
