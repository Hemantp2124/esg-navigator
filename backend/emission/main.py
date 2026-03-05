from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes.emission import router as emission_router

app = FastAPI(title="ESG Navigator Emission Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(emission_router, prefix="/emission", tags=["emission"])

@app.get("/")
async def root():
    return {"message": "Emission Service"}
