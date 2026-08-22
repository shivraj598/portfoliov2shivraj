---
title: WhiteboardAI
imageTitle: WhiteboardAI Preview
src: /projectImages/whiteboard-ai/hero.png
# video: ""
description: A browser-based infinite whiteboard for notes and drawing — an Excalidraw-style clone with editable tables, data-driven charts, and image insertion.
tech:
  - react
  - node
  - css3
github: https://github.com/shivraj598/whiteboardAI
live: https://whiteboard-ai-nu.vercel.app
hasPin: false
---

## About this project

**WhiteboardAI** is a browser-based infinite whiteboard for notes and drawing —
featuring editable **tables**, data-driven **charts** (bar / line / pie), and
**image insertion**.

### Features

- **Drawing tools** — freehand, rectangle, diamond, ellipse, arrow, line, and click-to-type text. Shapes draw as outlines; use the Fill button to fill selections
- **Styling** — stroke/fill colors, stroke width, and a handwritten default font (Patrick Hand) with family & size options
- **Tables** — insert a table by choosing rows and columns, then fill the cells; double-click any placed table to edit it
- **Charts** — bar, line, and pie charts with editable labels, values, and colors
- **Canvas & workflow** — pan, zoom, grid toggle, light/dark themes, undo/redo, delete, and clear
- **Export / import** — export PNG / SVG / JSON, import JSON back, and drop or insert images directly onto the board

### Screenshot

![Whiteboard canvas](/projectImages/whiteboard-ai/hero.png)

### Tech stack

| Layer | Technology |
| --- | --- |
| **UI** | React 19 |
| **Canvas** | fabric.js 7 |
| **Build** | Vite 8 |
| **Linting** | oxlint |
| **Styling** | Vanilla CSS with CSS variables for theming |