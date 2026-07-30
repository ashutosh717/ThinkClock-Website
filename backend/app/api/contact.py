from typing import Annotated

from fastapi import APIRouter, Depends, status
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.core.db import get_db
from app.models import ContactSubmission
from app.schemas.contact import ContactSubmissionCreate, ContactSubmissionRead

router = APIRouter(prefix="/api/contact-submissions")

DBSession = Annotated[Session, Depends(get_db)]


@router.get("", response_model=list[ContactSubmissionRead])
def list_contact_submissions(db: DBSession) -> list[ContactSubmission]:
    return db.scalars(select(ContactSubmission).order_by(ContactSubmission.created_at.desc())).all()


@router.post("", response_model=ContactSubmissionRead, status_code=status.HTTP_201_CREATED)
def create_contact_submission(payload: ContactSubmissionCreate, db: DBSession) -> ContactSubmission:
    submission = ContactSubmission(**payload.model_dump())
    db.add(submission)
    db.commit()
    db.refresh(submission)
    return submission
