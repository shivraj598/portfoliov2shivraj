---
title: Demo Blog Post
date: "Aug 2026"
claps: 0
tags:
  - Demo
---

Welcome to the demo blog post. This article lives in
`content/blogs/demo-blog.md` — write it like a regular Markdown file.

## Why Markdown

No more editing React components to publish. Drop a `.md` file into
`content/blogs/`, fill the frontmatter, and the page builds itself.

## What you can write

- Headings, lists, and quotes
- `inline code` and code blocks
- **Bold** and *italic* text
- [External links](https://github.com/shivraj598)

```ts
const post = await getBlog("demo-blog");
console.log(post.title); // renders on the article page
```

## Publishing

1. Add a file to `content/blogs/`.
2. Run `npm run dev` (or `npm run build`) — the loader picks it up.
3. Push — the site regenerates.

That's it. No schema, no database, no dashboard.