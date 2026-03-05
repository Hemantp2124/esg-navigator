from sqlalchemy import Column, Integer, String, Float, DateTime
from sqlalchemy.sql import func
from .database import Base

class ActivityData(Base):
    __tablename__ = "ActivityData"
    id = Column(Integer, primary_key=True)
    userId = Column(String)
    activityType = Column(String)
    value = Column(Float)
    unit = Column(String)
    date = Column(DateTime)
    createdAt = Column(DateTime, server_default=func.now())

class Upload(Base):
    __tablename__ = "Upload"
    id = Column(Integer, primary_key=True)
    userId = Column(String)
    filename = Column(String)
    status = Column(String, default="processing")
    error = Column(String, nullable=True)
    createdAt = Column(DateTime, server_default=func.now())
