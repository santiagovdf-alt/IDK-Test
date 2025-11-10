from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime

class LeadCreate(BaseModel):
    """Lead creation request model"""
    name: str = Field(..., min_length=1, max_length=100)
    company: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    phone: str = Field(..., min_length=5, max_length=20)
    city: str = Field(..., min_length=1, max_length=100)
    projectType: str = Field(..., alias="projectType")
    spaceSize: int = Field(..., gt=0, alias="spaceSize")
    budget: str
    timeline: str
    message: Optional[str] = None

    class Config:
        populate_by_name = True

class LeadResponse(BaseModel):
    """Lead response model"""
    id: str
    name: str
    company: str
    email: str
    phone: str
    city: str
    project_type: str
    space_size: int
    budget: str
    timeline: str
    message: Optional[str]
    status: str
    priority: str
    created_at: datetime

class LeadSubmitResponse(BaseModel):
    """Response after lead submission"""
    success: bool
    lead_id: str
    message: str
