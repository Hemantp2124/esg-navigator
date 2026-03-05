from sqlalchemy import Column, String, DateTime, Text
from sqlalchemy.sql import func
from .database import Base

class Report(Base):
    __tablename__ = "Report"
    id = Column(String, primary_key=True)
    userId = Column(String)
    name = Column(String)
    date = Column(DateTime, server_default=func.now())
    status = Column(String, default="generated")
    format = Column(String, default="JSON")
    data = Column(Text)  # JSON data
    createdAt = Column(DateTime, server_default=func.now())
    updatedAt = Column(DateTime, onupdate=func.now())
