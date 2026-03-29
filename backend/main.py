from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="Vinod Portfolio API", version="1.0.0")

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://your-portfolio-domain.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models
class Project(BaseModel):
    id: int
    title: str
    description: str
    technologies: List[str]
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    image_url: Optional[str] = None

class Experience(BaseModel):
    id: int
    company: str
    role: str
    duration: str
    description: List[str]
    technologies: List[str]

class ContactRequest(BaseModel):
    name: str
    email: str
    message: str

# Sample data
projects = [
    {
        "id": 1,
        "title": "Multi-Agent LLM System",
        "description": "Architected a multi-agent system using LangGraph and MCP for intelligent task orchestration",
        "technologies": ["Python", "LangGraph", "FastAPI", "PostgreSQL", "AWS"],
        "github_url": "https://github.com/example/multi-agent-system",
        "live_url": "https://example.com"
    },
    {
        "id": 2,
        "title": "Graph RAG Pipeline",
        "description": "Built a Graph-based Retrieval Augmented Generation system for supply chain intelligence",
        "technologies": ["Neo4j", "OpenAI", "FastAPI", "Docker"],
        "github_url": "https://github.com/example/graph-rag"
    }
]

experiences = [
    {
        "id": 1,
        "company": "Deloitte",
        "role": "AI Architect",
        "duration": "2022 - Present",
        "description": [
            "Architected multi-agent LLM systems using LangGraph & MCP",
            "Built Graph RAG pipeline for supply chain intelligence",
            "Designed PostgreSQL VectorDB embedding infrastructure",
            "Deployed scalable AI systems on AWS"
        ],
        "technologies": ["Python", "LangGraph", "AWS", "PostgreSQL", "Docker"]
    },
    {
        "id": 2,
        "company": "TCS",
        "role": "Data Scientist",
        "duration": "2020 - 2022",
        "description": [
            "Reduced inference cost via model quantization",
            "Delivered OCR pipeline with 95%+ accuracy",
            "Fine-tuned DL models achieving 98.9% performance",
            "Built demand forecasting models (ARIMA, Ridge, Lasso)"
        ],
        "technologies": ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "AWS"]
    }
]

# API Endpoints
@app.get("/")
async def root():
    return {"message": "Vinod Tiwari Portfolio API", "version": "1.0.0"}

@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "portfolio-api"}

# Projects endpoints
@app.get("/api/projects", response_model=List[Project])
async def get_projects():
    """Get all projects"""
    return projects

@app.get("/api/projects/{project_id}", response_model=Project)
async def get_project(project_id: int):
    """Get a specific project by ID"""
    project = next((p for p in projects if p["id"] == project_id), None)
    if not project:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Project not found")
    return project

# Experience endpoints
@app.get("/api/experience", response_model=List[Experience])
async def get_experience():
    """Get all work experiences"""
    return experiences

@app.get("/api/experience/{exp_id}", response_model=Experience)
async def get_experience_by_id(exp_id: int):
    """Get a specific experience by ID"""
    exp = next((e for e in experiences if e["id"] == exp_id), None)
    if not exp:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Experience not found")
    return exp

# Contact endpoint
@app.post("/api/contact")
async def submit_contact(contact: ContactRequest):
    """Handle contact form submissions"""
    # Here you would typically:
    # 1. Validate the input
    # 2. Send email notification
    # 3. Store in database
    # 4. Send confirmation to user
    
    return {
        "message": "Contact form submitted successfully",
        "status": "success",
        "received": {
            "name": contact.name,
            "email": contact.email
        }
    }

# Analytics endpoint (simple example)
@app.get("/api/analytics/visitors")
async def get_visitor_count():
    """Simple visitor count (in production, use Redis/Database)"""
    return {
        "total_visitors": 1250,
        "today_visitors": 45,
        "last_updated": "2024-03-28T14:14:00Z"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)