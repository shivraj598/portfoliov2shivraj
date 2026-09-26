---
title: Finance Dashboard API
imageTitle: Finance Dashboard API Preview
src: /projectImages/financedashboardapi/fdash1.png
# video: ""
description: A secure, role-based finance dashboard with FastAPI, PostgreSQL, JWT authentication and RBAC — financial records management, dashboard analytics, and a modern React frontend.
tech:
  - python
  - fastapi
  - react
  - ts
  - tailwind
  - radixui
  - charts
github: https://github.com/shivraj598/finance-dashboard-api
live: ""
hasPin: true
---

## About this project

**Finance Dashboard API** is a secure, role-based finance dashboard backend built
with **FastAPI, PostgreSQL, JWT authentication, and RBAC** — plus a modern
React + shadcn-style frontend. It started as a task-management API with JWT
auth, RBAC and rate limiting, and was extended into a full finance dashboard
covering financial records, dashboard analytics, and multi-role access control.

### Screenshots

![Dashboard overview](/projectImages/financedashboardapi/fdash1.png)

![Sign up page](/projectImages/financedashboardapi/signup.png)

![Add a record](/projectImages/financedashboardapi/fnewr.png)

![Financial records](/projectImages/financedashboardapi/record.png)

### Features

- **JWT auth + sessions** — 15-min access tokens, 7-day DB-stored refresh tokens, logout / logout-all, session list, password-reset with rate limiting
- **Role-based access (viewer / analyst / admin)** — enforced at the router layer via FastAPI dependencies, first registered user auto-becomes admin
- **Financial records CRUD** — income / expense records with optimistic locking (`version` field, `409 Conflict` on mismatch), filterable + paginated listing
- **Dashboard analytics** — summary totals, income vs expense, net balance, per-category breakdown, monthly trends, last 10 records
- **Security hardened** — bcrypt hashing, identical login errors (no user enumeration), Pydantic v2 validation, token-type checks, explicit CORS allowlist
- **React SPA frontend** — Login, Overview, Records, Team, Profile pages with Sidebar, Topbar, RecordDialog, JWT auto-refresh API client, served directly by FastAPI
- **Custom rate limiting** — in-memory sliding window, no Redis dependency, swappable for production

### Tech stack

| Layer | Technology |
| --- | --- |
| **Backend** | FastAPI, SQLAlchemy, Pydantic v2 |
| **Database** | PostgreSQL (SQLite locally by default, swappable via `DATABASE_URL`) |
| **Auth** | python-jose (JWT) + passlib (bcrypt) |
| **Frontend** | React + TypeScript + Vite, Tailwind CSS, shadcn-style UI (Button, Card, Input, Table, Dialog, Badge) |
| **Docs** | Auto Swagger UI at `/docs` + ReDoc at `/redoc` |

### API reference

- **Auth** — `POST /api/v1/auth/register`, `/login`, `/refresh`, `/logout`, `/logout-all`, `GET /sessions`, `POST /password-reset`
- **Users** — `GET /api/v1/users/me`, `PATCH /me`, admin-only list / get / role-change / deactivate
- **Finance** — `POST /api/v1/finance/`, `GET /` (filter by `type`, `category`, `date_from`, `date_to`, `page`, `limit`), `GET /{id}`, `PATCH /{id}`, `DELETE /{id}`
- **Dashboard** — `GET /api/v1/dashboard/summary`, `/totals`, `/category-breakdown`, `/monthly-trends`, `/recent`

### Running locally

```bash
git clone https://github.com/shivraj598/finance-dashboard-api
cd finance-dashboard-api

python -m venv venv
source venv/bin/activate

pip install -r backend/requirements.txt
cp .env.example .env

cd backend
uvicorn main:app --reload --port 8000
```

- **Swagger UI:** http://localhost:8000/docs
- **Dashboard (React SPA):** http://localhost:8000/
