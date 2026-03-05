from sqlalchemy import Column, Integer, String, Float, DateTime
from sqlalchemy.sql import func
from .database import Base

class Emission(Base):
    __tablename__ = "Emission"
    id = Column(String, primary_key=True)
    userId = Column(String)
    date = Column(DateTime)
    category = Column(String)
    amount = Column(Float)
    unit = Column(String)
    location = Column(String)
    facility = Column(String)
    supplier = Column(String, nullable=True)
    scope = Column(String)
    createdAt = Column(DateTime, server_default=func.now())
    updatedAt = Column(DateTime, onupdate=func.now())

class ActivityData(Base):
    __tablename__ = "ActivityData"
    id = Column(Integer, primary_key=True)
    userId = Column(String)
    activityType = Column(String)
    value = Column(Float)
    unit = Column(String)
    date = Column(DateTime)
    createdAt = Column(DateTime, server_default=func.now())

class EmissionFactor(Base):
    __tablename__ = "EmissionFactor"
    id = Column(Integer, primary_key=True)
    activityType = Column(String)
    factor = Column(Float)
    unit = Column(String)
    scope = Column(String)
    source = Column(String)
