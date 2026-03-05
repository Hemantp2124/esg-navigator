from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..database import SessionLocal
from ..models import Organization, Facility

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/organizations")
async def create_organization(name: str, description: str = None, db: Session = Depends(get_db)):
    db_org = db.query(Organization).filter(Organization.name == name).first()
    if db_org:
        raise HTTPException(status_code=400, detail="Organization already exists")
    org = Organization(name=name, description=description)
    db.add(org)
    db.commit()
    db.refresh(org)
    return org

@router.get("/organizations")
async def list_organizations(db: Session = Depends(get_db)):
    orgs = db.query(Organization).all()
    return orgs

@router.get("/organizations/{org_id}")
async def get_organization(org_id: str, db: Session = Depends(get_db)):
    org = db.query(Organization).filter(Organization.id == org_id).first()
    if not org:
        raise HTTPException(status_code=404, detail="Organization not found")
    return org

@router.post("/organizations/{org_id}/facilities")
async def create_facility(org_id: str, name: str, location: str, db: Session = Depends(get_db)):
    facility = Facility(name=name, organizationId=org_id, location=location)
    db.add(facility)
    db.commit()
    db.refresh(facility)
    return facility

@router.get("/organizations/{org_id}/facilities")
async def list_facilities(org_id: str, db: Session = Depends(get_db)):
    facilities = db.query(Facility).filter(Facility.organizationId == org_id).all()
    return facilities
