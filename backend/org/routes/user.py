from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..database import SessionLocal

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/organizations/{org_id}/users")
async def add_user_to_org(org_id: str, user_id: str, role: str = "user", db: Session = Depends(get_db)):
    # Placeholder: update user role or link
    return {"message": "User added to organization"}
