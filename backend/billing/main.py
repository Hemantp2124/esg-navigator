from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes.billing import router as billing_router

app = FastAPI(title="ESG Navigator Billing Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(billing_router, prefix="/api", tags=["billing"])

@app.get("/")
async def root():
    return {"message": "Billing Service"}
