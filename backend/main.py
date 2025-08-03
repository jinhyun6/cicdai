from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List
from datetime import datetime

from database import get_db, engine
from models import Base, Submission
from schemas import SubmissionCreate, SubmissionResponse

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Landing Page API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Landing Page API is running"}

@app.post("/api/submit", response_model=SubmissionResponse)
def create_submission(
    submission: SubmissionCreate,
    db: Session = Depends(get_db)
):
    """
    Submit email and optional feedback
    """
    # Check if email already exists
    existing = db.query(Submission).filter(
        Submission.email == submission.email
    ).first()
    
    if existing:
        # Update feedback if provided
        if submission.feedback:
            existing.feedback = submission.feedback
            db.commit()
            db.refresh(existing)
            return existing
        else:
            raise HTTPException(
                status_code=400,
                detail="Email already registered"
            )
    
    # Create new submission
    db_submission = Submission(
        email=submission.email,
        feedback=submission.feedback
    )
    db.add(db_submission)
    db.commit()
    db.refresh(db_submission)
    
    return db_submission

@app.get("/api/submissions", response_model=List[SubmissionResponse])
def get_submissions(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    """
    Get all submissions (admin endpoint)
    """
    submissions = db.query(Submission).offset(skip).limit(limit).all()
    return submissions

@app.get("/api/stats")
def get_stats(db: Session = Depends(get_db)):
    """
    Get submission statistics
    """
    total_count = db.query(Submission).count()
    feedback_count = db.query(Submission).filter(
        Submission.feedback != None
    ).count()
    
    # Get recent submissions (last 7 days)
    from datetime import timedelta
    seven_days_ago = datetime.now() - timedelta(days=7)
    recent_count = db.query(Submission).filter(
        Submission.created_at >= seven_days_ago
    ).count()
    
    return {
        "total_submissions": total_count,
        "with_feedback": feedback_count,
        "recent_submissions": recent_count
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)