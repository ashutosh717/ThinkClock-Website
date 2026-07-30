from typing import Annotated

from fastapi import APIRouter, Depends, status
from fastapi.responses import JSONResponse
from sqlalchemy import select
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.core.db import get_db
from app.models import JobPosting
from app.schemas.error import ErrorResponse
from app.schemas.jobs import JobPostingCreate, JobPostingRead, JobPostingUpdate

router = APIRouter(prefix="/api/job-postings")

DBSession = Annotated[Session, Depends(get_db)]


def _not_found(message: str) -> JSONResponse:
    return JSONResponse(
        status_code=status.HTTP_404_NOT_FOUND,
        content=ErrorResponse(error={"code": "NOT_FOUND", "message": message}).model_dump(),
    )


@router.get("", response_model=list[JobPostingRead])
def list_job_postings(db: DBSession) -> list[JobPosting]:
    return db.scalars(select(JobPosting).order_by(JobPosting.created_at.desc())).all()


@router.get("/{job_id}", response_model=JobPostingRead, responses={404: {"model": ErrorResponse}})
def get_job_posting(job_id: int, db: DBSession) -> JobPosting | JSONResponse:
    job_posting = db.get(JobPosting, job_id)
    if not job_posting:
        return _not_found("Job posting not found.")
    return job_posting


@router.post(
    "",
    response_model=JobPostingRead,
    status_code=status.HTTP_201_CREATED,
    responses={409: {"model": ErrorResponse}},
)
def create_job_posting(payload: JobPostingCreate, db: DBSession) -> JobPosting | JSONResponse:
    job_posting = JobPosting(**payload.model_dump())
    db.add(job_posting)
    try:
        db.commit()
    except IntegrityError:
        db.rollback()
        return JSONResponse(
            status_code=status.HTTP_409_CONFLICT,
            content=ErrorResponse(
                error={"code": "DUPLICATE_SLUG", "message": "Job posting slug already exists."}
            ).model_dump(),
        )
    db.refresh(job_posting)
    return job_posting


@router.put("/{job_id}", response_model=JobPostingRead, responses={404: {"model": ErrorResponse}})
def update_job_posting(
    job_id: int, payload: JobPostingUpdate, db: DBSession
) -> JobPosting | JSONResponse:
    job_posting = db.get(JobPosting, job_id)
    if not job_posting:
        return _not_found("Job posting not found.")

    for field, value in payload.model_dump(exclude_unset=True).items():
        setattr(job_posting, field, value)

    db.add(job_posting)
    db.commit()
    db.refresh(job_posting)
    return job_posting


@router.delete(
    "/{job_id}", status_code=status.HTTP_204_NO_CONTENT, responses={404: {"model": ErrorResponse}}
)
def delete_job_posting(job_id: int, db: DBSession) -> JSONResponse:
    job_posting = db.get(JobPosting, job_id)
    if not job_posting:
        return _not_found("Job posting not found.")

    db.delete(job_posting)
    db.commit()
    return JSONResponse(status_code=status.HTTP_204_NO_CONTENT, content=None)
