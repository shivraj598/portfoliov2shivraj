---
title: PDF Analyst RAG
imageTitle: PDF Analyst RAG Preview
src: /projectImages/pdf-analyst-rag/dark.png
lightModeSrc: /projectImages/pdf-analyst-rag/light.png
# video: ""
description: A multi-agent research system that orchestrates specialized AI agents to produce structured, fact-checked reports on any topic — with both Quick Search and Deep Research modes.
tech:
  - next
  - ts
  - react
  - fastapi
  - python
  - langchain
  - langgraph
  - rag
  - cloud
  - radixui
  - tailwind
github: https://github.com/shivraj598/The_Research_Desk--Multi-Agent-Research-Report-System
live: ""
hasPin: true
---

## About this project

The **Research Desk** is a multi-agent research pipeline built with **LangGraph**
that coordinates five specialized agents through a shared state graph to turn any
topic into a structured, fact-checked report — with a human approval step before
delivery.

### How it works

1. **Orchestrator** — analyzes the topic and breaks it down into focused subtasks
2. **Researcher** — searches the web via Tavily and scrapes content from live sources
3. **Analyst** — reads raw source material and extracts structured insights, dates, and quotes
4. **Writer** — compiles the insights into a formatted Markdown report
5. **Fact-Checker** — verifies every claim against the original sources

Quick Search skips the analysis pipeline and runs a single search-to-summary pass
for faster answers.

### Screenshots

![Dark mode](/projectImages/pdf-analyst-rag/dark.png)

![Light mode](/projectImages/pdf-analyst-rag/light.png)

![Report output](/projectImages/pdf-analyst-rag/report.png)

### Tech stack

| Layer | Technology |
| --- | --- |
| **Backend** | FastAPI (Python), LangGraph with MemorySaver |
| **LLM** | Cloudflare Workers AI (`@cf/openai/gpt-oss-20b`) |
| **Search** | Tavily API + DuckDuckGo fallback |
| **Frontend** | Next.js App Router + shadcn/ui (Radix + Tailwind CSS) |
| **Content** | BeautifulSoup + httpx |