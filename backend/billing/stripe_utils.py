import stripe
import os

stripe.api_key = os.getenv("STRIPE_SECRET_KEY")

def create_subscription(user_id: str, plan: str):
    # Placeholder
    # Create customer, then subscription
    return {"id": "sub_123", "stripe_id": "sub_stripe_123", "amount": 29.99, "currency": "usd"}

def cancel_subscription(stripe_subscription_id: str):
    # Placeholder
    pass
