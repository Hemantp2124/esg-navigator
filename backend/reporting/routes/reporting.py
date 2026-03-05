from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..database import SessionLocal
from ..models import Report
from ..generation import generate_report

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/reports")
async def generate_report_endpoint(user_id: str, name: str, db: Session = Depends(get_db)):
    # Generate report
    report_data = generate_report(db, user_id)
    import uuid
    report = Report(
        id = str(uuid.uuid4()),
        userId = user_id,
        name = name,
        data = str(report_data),  # JSON string
    )
    db.add(report)
    db.commit()
    db.refresh(report)
    return {"id": report.id, "status": "generated"}

@router.get("/reports")
async def list_reports(user_id: str, db: Session = Depends(get_db)):
    reports = db.query(Report).filter(Report.userId == user_id).all()
    return reports

@router.get("/reports/{report_id}")
async def get_report(report_id: str, db: Session = Depends(get_db)):
    report = db.query(Report).filter(Report.id == report_id).first()
    if not report:
        raise HTTPException(status_code=404, detail="Report not found")
    return report
