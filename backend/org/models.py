from sqlalchemy import Column, String, DateTime, ForeignKey
from sqlalchemy.sql import func
from .database import Base

class Organization(Base):
    __tablename__ = "Organization"
    id = Column(String, primary_key=True)
    name = Column(String, unique=True, index=True)
    description = Column(String, nullable=True)
    createdAt = Column(DateTime(timezone=True), server_default=func.now())
    updatedAt = Column(DateTime(timezone=True), onupdate=func.now())

class Facility(Base):
    __tablename__ = "Facility"
    id = Column(String, primary_key=True)
    name = Column(String)
    organizationId = Column(String, ForeignKey("Organization.id"))
    location = Column(String)
    createdAt = Column(DateTime(timezone=True), server_default=func.now())
    updatedAt = Column(DateTime(timezone=True), onupdate=func.now())
