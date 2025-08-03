from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class SubmissionBase(BaseModel):
    email: EmailStr
    feedback: Optional[str] = None

class SubmissionCreate(SubmissionBase):
    pass

class SubmissionResponse(SubmissionBase):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True