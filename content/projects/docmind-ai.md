---
title: DocMindAI Adaptive RAG
imageTitle: DocMindAI Adaptive RAG Preview
src: /projectImages/docmind-ai/landing.png
# video: ""
description: An intelligent Retrieval-Augmented Generation system that dynamically routes queries to indexed documents, general LLM knowledge, or web search — built with LangGraph orchestration and a modern React frontend.
tech:
  - python
  - fastapi
  - react
  - ts
  - tailwind
  - langchain
  - langgraph
  - rag
  - gemini
github: https://github.com/shivraj598/DocMindAI-Adaptive-Rag
live: ""
hasPin: true
---

## About this project

**DocMindAI** is an intelligent RAG system that classifies every query into one of
three routes and answers it from the best available source:

```
User Query -> query_analysis
  ├── "index"   -> retriever -> grade
  │                ^            ├── "yes" -> generate -> response
  │                └── rewrite -┘ "no"
  ├── "general" -> general_llm -> response
  └── "search"  -> web_search  -> generate -> response
```

- **Index** — answered from your uploaded documents (FAISS vector search)
- **General** — answered from the LLM's own knowledge
- **Search** — answered via Tavily web search

If retrieved documents are irrelevant, the query is rewritten and re-retrieved
(up to 3 attempts).

### Screenshots

![Landing page](/projectImages/docmind-ai/landing.png)

![Chat interface](/projectImages/docmind-ai/chating.png)

### Tech stack

| Layer | Technology |
| --- | --- |
| **Frontend** | React 19 + Vite + Tailwind CSS v4 |
| **Backend** | FastAPI + Uvicorn |
| **LLM** | Google Gemini 1.5 Flash |
| **Embeddings** | HuggingFace `all-MiniLM-L6-v2` (local — no API key needed) |
| **Vector Store** | FAISS (persisted to disk) |
| **Orchestration** | LangGraph |
| **Chat History** | MongoDB Atlas (via Motor) |
| **Web Search** | Tavily API |