from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..database import SessionLocal
from ..models import Subscription
from ..stripe_utils import create_subscription, cancel_subscription

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/subscriptions")
async def create_subscription_endpoint(user_id: str, plan: str, db: Session = Depends(get_db)):
    # Create Stripe subscription
    subscription_data = create_subscription(user_id, plan)
    subscription = Subscription(
        id = subscription_data["id"],
        userId = user_id,
        stripeSubscriptionId = subscription_data["stripe_id"],
        status = "active",
        plan = plan,
        amount = subscription_data["amount"],
        currency = subscription_data["currency"]
    )
    db.add(subscription)
    db.commit()
    db.refresh(subscription)
    return subscription

@router.get("/subscriptions")
async def list_subscriptions(user_id: str, db: Session = Depends(get_db)):
    subscriptions = db.query(Subscription).filter(Subscription.userId == user_id).all()
    return subscriptions

@router.post("/subscriptions/{subscription_id}/cancel")
async def cancel_subscription_endpoint(subscription_id: str, db: Session = Depends(get_db)):
    subscription = db.query(Subscription).filter(Subscription.id == subscription_id).first()
    if not subscription:
        raise HTTPException(status_code=404, detail="Subscription not found")
    cancel_subscription(subscription.stripeSubscriptionId)
    subscription.status = "canceled"
    db.commit()
    return {"message": "Subscription canceled"}
