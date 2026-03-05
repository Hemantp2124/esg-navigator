from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes.reporting import router as reporting_router

app = FastAPI(title="ESG Navigator Reporting Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(reporting_router, prefix="/api", tags=["reports"])

@app.get("/")
async def root():
    return {"message": "Reporting Service"}
