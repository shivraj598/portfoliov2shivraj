# shivraj timilsena — Portfolio2

A minimal, fast, and interactive developer portfolio built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **TypeScript**.

It showcases my work, experience, open-source contributions, skills, and writing — with a dark/light theme, smooth motion, and a command palette for quick navigation.

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 16 (App Router)
- **Library:** [React](https://react.dev/) 19
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment:** [Vercel](https://vercel.com/) with Analytics & Speed Insights

---

## Features

- Responsive, grid-based layout with blueprint-style micro-details
- Dark and light mode with system preference detection
- Command palette (`Cmd/Ctrl + K`) for quick navigation
- Interactive GitHub contribution graph
- Project showcase with detail pages
- Experience timeline
- Open-source contributions section
- Skills and technologies grid
- Blog listing
- Contact page
- Sound-engineered micro-interactions

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- npm / yarn / pnpm / bun

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

### Start the production server

```bash
npm start
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```text
Portfolio-v2-
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # React components & UI primitives
│   ├── data/                # Shared types and tech icons/names
│   ├── hooks/               # Custom React hooks
│   └── lib/                 # Utility functions, content loader, sound engine
├── content/                 # Markdown files: projects/ and blogs/
├── public/                  # Static assets
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

## Adding Content

Projects and blog posts are plain Markdown files with YAML frontmatter — no code
edits needed.

**Add a project:** create `content/projects/<slug>.md` (the filename becomes the URL):

```md
---
title: My Project
src: /project-image/dark.png        # required — card & detail image
lightModeSrc: /project-image/light.png
video: ""                            # optional — YouTube URL or mp4
description: Short card description
tech: [next, ts, tailwind]           # icons; valid keys live in src/data/projectsData.ts
github: https://github.com/you/repo  # optional
live: ""                             # optional — deployed URL
hasPin: false                        # optional — pin to top
---

## About this project
Markdown body, rendered on the detail page.
```

**Add a blog post:** create `content/blogs/<slug>.md`:

```md
---
title: My Post
date: "Jan 2026"
claps: 0          # optional
tags: [Demo]      # optional
---

Markdown body, rendered on the article page.
```

The build validates content (required fields, tech keys) and fails with a
helpful error if something is off. Cards on the homepage, the `/projects` and
`/blogs` indexes, and detail pages all update automatically.



## Connect

- **GitHub:** [shivraj598](https://github.com/shivraj598)
- **Twitter / X:** [@shivrajme_](https://x.com/shivrajme_)
- **LinkedIn:** [shivraj-timilsena](https://www.linkedin.com/in/shivraj-timilsena/)

---

Built with purpose, precision, and a little bit of chaos.
