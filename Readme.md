# Vinod Tiwari – AI Architect Portfolio

This is the official personal portfolio website of **Vinod Tiwari**, AI Architect and Data Scientist specializing in:

- Agentic AI Systems
- Graph RAG Architectures
- Multi-Agent LLM Orchestration
- Scalable AWS ML Pipelines
- Production-Grade AI Deployment

---

##  Tech Stack

**Frontend**
- Next.js 16
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

**Backend**
- FastAPI (Python)
- SQLAlchemy
- PostgreSQL with pgvector
- Pydantic

**Deployment**
- Vercel (Frontend)
- Railway (Backend + Database)
- Docker (Local Development)

---

##  Theme

The landing page follows a neo-noir cinematic theme inspired by a minimalistic tactical aesthetic:

- Dark UI
- Red accent highlights
- Subtle animated background
- Clean, disciplined layout

The design reflects precision, structure, and architectural thinking.

---

##  Features

- Professional landing page
- **GenAI Book** - Complete guide to modern AI applications (fully responsive)
- **Portfolio API** - RESTful endpoints for projects and experience
- Medium blog redirect page
- Resume download option
- YouTube channel integration
- Animated background
- Fully responsive design (mobile, tablet, desktop)
- Interactive AI/ML lab demonstrations

---

## Responsive Design

The portfolio is fully optimized for all devices:

- **Mobile-first approach** with fluid typography
- **Adaptive layouts** for phones, tablets, and desktops
- **Responsive book reader** with auto-scaling content
- **Touch-friendly navigation** and interactions

---

## 🔧 API Endpoints

The backend provides the following RESTful endpoints:

### Core
- `GET /` - API information
- `GET /health` - Health check

### Content
- `GET /api/projects` - Get all projects
- `GET /api/projects/{id}` - Get specific project
- `GET /api/experience` - Get work experience
- `GET /api/experience/{id}` - Get specific experience

### Interaction
- `POST /api/contact` - Contact form submissions
- `GET /api/analytics/visitors` - Visitor statistics

---

## 🌱 Branch Strategy

This repository contains two main branches:

### `main`
Stable production-ready version.

### `port1`
Active development branch for new updates, UI improvements, and feature additions.

All new changes are first developed in the `port1` branch before merging into `main`.

---

## 🛠 Local Development

### Frontend Only
```bash
cd frontend
npm install
npm run dev
```

Access the application at `http://localhost:3000`

### Full Stack (with Docker)
```bash
# Start PostgreSQL database
docker-compose up db

# Start backend (new terminal)
cd backend
python3 -m uvicorn main:app --reload

# Start frontend (new terminal)
cd frontend
npm run dev
```

### Backend Development
```bash
cd backend
pip install -r requirements.txt
python3 -m uvicorn main:app --reload
```

API documentation available at `http://localhost:8000/docs`

---

## 📚 Book Page

The GenAI Book is available at `/book` route and features:

- **Fully responsive design** - Optimized for mobile, tablet, and desktop
- **Fluid typography** - Auto-scaling text using clamp() functions
- **Touch-friendly scrolling** - Smooth navigation on all devices
- **Professional layout** - Clean reading experience

Access via:
- Direct URL: `http://localhost:3000/book`
- Navigation: Click "Explore" → "GenAI Book"

The book contains:
- Complete guide to modern AI applications
- Interactive HTML format with images
- Responsive styling and layout
- Covers comprehensive GenAI topics and implementations

---

##  Deployment

### Production Architecture
- **Frontend**: Deployed on Vercel (serverless)
- **Backend**: Deployed on Railway (Docker container)
- **Database**: PostgreSQL with pgvector on Railway
- **API Integration**: External LLM APIs (Groq, OpenAI, Hugging Face)

### Environment Setup
- Configure Railway environment variables
- Set up Vercel project with frontend root
- Connect API endpoints between services

---

## 🔄 Development Workflow

1. **Local Development**: Use Docker Compose for full-stack testing
2. **Frontend Testing**: Run Next.js development server
3. **Backend Testing**: Use FastAPI with auto-reload
4. **API Documentation**: Access Swagger UI at `/docs`
5. **Responsive Testing**: Test on multiple screen sizes

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
