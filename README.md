# ESG Navigator

Enterprise SaaS platform for ESG (Environmental, Social, Governance) intelligence and sustainability reporting.

## Architecture

This repository follows a microservices architecture:

- `frontend/` - Next.js web application
- `backend/` - Python FastAPI microservices
- `workers/` - Celery workers for background tasks
- `infrastructure/` - Docker and Kubernetes configurations
- `scripts/` - Utility scripts
- `docs/` - Documentation

## Development

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

## Deployment

See infrastructure/ directory for Docker and Kubernetes configurations.

## Target Scale

- 10,000+ organizations
- 100,000+ facilities
- 500,000+ users
- 100M+ activity records
- 50k+ reports per day

## Technologies

- Frontend: Next.js, TypeScript, Tailwind CSS
- Backend: Python, FastAPI, SQLAlchemy
- Database: PostgreSQL
- Workers: Celery, Redis
- Infrastructure: Docker, Kubernetes, AWS

## Contributing

See docs/ for detailed development guidelines.
