from sqlalchemy import Column, String, DateTime
from sqlalchemy.sql import func
import uuid
from .database import Base

class User(Base):
    __tablename__ = "User"
    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    email = Column(String, unique=True, index=True)
    name = Column(String, nullable=True)
    password = Column(String)
    role = Column(String, default="user")
    createdAt = Column(DateTime(timezone=True), server_default=func.now())
    updatedAt = Column(DateTime(timezone=True), onupdate=func.now())
