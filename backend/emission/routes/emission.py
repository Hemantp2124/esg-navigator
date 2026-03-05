from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..database import SessionLocal
from ..models import Emission, EmissionFactor

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/calculate")
async def calculate_emission(activity: dict, db: Session = Depends(get_db)):
    factor = db.query(EmissionFactor).filter(EmissionFactor.activityType == activity["activityType"]).first()
    if not factor:
        raise HTTPException(status_code=404, detail="Emission factor not found")
    emission_value = activity["value"] * factor.factor
    emission = Emission(
        userId = activity["userId"],
        date = activity["date"],
        category = activity["activityType"],
        amount = emission_value,
        unit = factor.unit,
        location = activity.get("location", ""),
        facility = activity.get("facility", ""),
        supplier = activity.get("supplier"),
        scope = factor.scope
    )
    db.add(emission)
    db.commit()
    db.refresh(emission)
    return {"emission": emission_value, "unit": factor.unit, "scope": factor.scope, "id": emission.id}
