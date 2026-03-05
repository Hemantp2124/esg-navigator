from sqlalchemy import Column, String, DateTime, Float
from sqlalchemy.sql import func
from .database import Base

class Subscription(Base):
    __tablename__ = "Subscription"
    id = Column(String, primary_key=True)
    userId = Column(String)
    stripeSubscriptionId = Column(String)
    status = Column(String, default="active")
    plan = Column(String, default="free")
    amount = Column(Float)
    currency = Column(String, default="usd")
    createdAt = Column(DateTime, server_default=func.now())
    updatedAt = Column(DateTime, onupdate=func.now())

class Plan(Base):
    __tablename__ = "Plan"
    id = Column(String, primary_key=True)
    name = Column(String)
    price = Column(Float)
    currency = Column(String, default="usd")
    limits = Column(String)  # JSON string
    createdAt = Column(DateTime, server_default=func.now())
