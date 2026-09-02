---
title: ProjectFlow
imageTitle: ProjectFlow Dashboard
src: /projectImages/projectflow/demo-dark.png
lightModeSrc: /projectImages/projectflow/demo-light.png
# video: ""
description: A real-time, multi-tenant project management platform inspired by Jira, Linear & Trello — Kanban boards, sprint planning with burndown charts, backlogs, comments, activity timelines, and live collaboration.
tech:
  - ts
  - react
  - prisma
  - cloud
  - node
  - tailwind
  - radixui
  - charts
github: https://github.com/shivraj598/ProjectFlow
live: https://projectflow.shivraj.me/
starsText: 0
hasPin: true
---

## About this project

ProjectFlow is a real-time, **multi-tenant** project management platform that brings
Trello's visual simplicity, Jira's sprint planning, and Linear's modern UX into one
product. It is built as a monorepo with an Express + Prisma API and a React (Vite)
web client.

> **Try it:** the live demo shows credentials right on the login page
> (`demo@projectflow.dev` / `demo1234`).

### Project highlights

- **Kanban board** — drag-and-drop tasks with `dnd-kit`, custom columns, WIP limits, labels & priorities
- **Sprint planning** — create/start/complete sprints, move backlog tasks in, real burndown charts
- **Backlog** — unscheduled work, quick task creation, bulk assignment to sprints
- **Task sheet** — full task details in a slide-over: assignee, priority, type, due date, story points, labels
- **Comments + activity timeline** — team discussion and a full audit trail of who changed what, when
- **Role-based access** — Admin / Manager / Member enforced on the **backend**, not just hidden buttons
- **Real-time** — Socket.IO board sync + instant query invalidation across the app
- **Multi-tenant** — Orgs → Workspaces → Projects, with per-org isolation

### Tech stack

| Layer | Tools |
| --- | --- |
| **API** | Express 5, Prisma 6 (D1 adapter), Socket.IO, JWT auth, zod, bcryptjs |
| **Infra** | Cloudflare Workers + D1 (via wrangler) |
| **Web** | React 19, Vite, TypeScript, Tailwind CSS 4, Radix UI primitives, TanStack Query, dnd-kit, Recharts, Zustand, GSAP |

### Running locally

```bash
git clone https://github.com/shivraj598/ProjectFlow.git
cd ProjectFlow
pnpm install
pnpm --filter @projectflow/api db:push && pnpm --filter @projectflow/api db:seed
pnpm dev   # runs API + web concurrently
```