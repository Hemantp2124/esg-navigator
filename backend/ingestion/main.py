from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes.ingestion import router as ingestion_router

app = FastAPI(title="ESG Navigator Data Ingestion Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(ingestion_router, prefix="/api", tags=["ingestion"])

@app.get("/")
async def root():
    return {"message": "Data Ingestion Service"}
