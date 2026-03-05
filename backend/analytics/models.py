from pydantic import BaseModel

class KPIResponse(BaseModel):
    total_emissions: float
    emission_intensity: float
    renewable_energy_pct: float
    waste_recycling_rate: float
    reduction_progress: float

class TrendResponse(BaseModel):
    period: str
    emissions: float
