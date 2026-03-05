from fastapi import APIRouter, Depends, UploadFile, File, HTTPException
from sqlalchemy.orm import Session
from ..database import SessionLocal
from ..models import ActivityData, Upload
from ..processing import process_file

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/upload")
async def upload_file(file: UploadFile = File(...), user_id: str = None, db: Session = Depends(get_db)):
    if not file.filename.endswith(('.csv', '.xlsx')):
        raise HTTPException(status_code=400, detail="File must be CSV or Excel")
    # Save upload record
    upload = Upload(userId=user_id, filename=file.filename)
    db.add(upload)
    db.commit()
    db.refresh(upload)
    # Process file
    try:
        data = await process_file(file)
        # Insert activity data
        for row in data:
            activity = ActivityData(userId=user_id, **row)
            db.add(activity)
        db.commit()
        upload.status = "completed"
        db.commit()
        return {"message": "File uploaded and processed successfully", "upload_id": upload.id}
    except Exception as e:
        upload.status = "failed"
        upload.error = str(e)
        db.commit()
        raise HTTPException(status_code=400, detail=str(e))
