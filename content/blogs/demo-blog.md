---
title: Demo Blog Post
description: "A hidden template. Shows the frontmatter fields for local (MDX) and external blog posts. Kept as a format reference."
date: "Aug 2026"
claps: 0
tags:
  - Template
external: false
url: ""
hidden: false
---

# Local blog format (on-site MDX)

This is a **hidden** local template. It lives in `content/blogs/demo-blog.md`
(you can use `.md` or `.mdx`). Write it like Markdown and drop in React
components when you use the `.mdx` extension.

## Frontmatter fields

| Field         | Required | Meaning                                                        |
| ------------- | -------- | -------------------------------------------------------------- |
| `title`       | yes      | Blog title (shows in list + article header)                    |
| `description` | yes      | Short description shown on the blog card                       |
| `date`        | yes      | e.g. `"Sep 2026"`                                              |
| `tags`        | no       | List of tags                                                   |
| `claps`       | no       | Clap count (int)                                               |
| `external`    | no       | `true` = external post → provide `url`                         |
| `url`         | if ext   | Link for external posts (Medium / LinkedIn / X)                |
| `hidden`      | no       | `true` hides it from listings (no `/blogs/slug` page generated) |

## External blog format

To reference a post hosted elsewhere (Medium, LinkedIn article, X):

```mdx
---
title: My Medium Article
description: "Short description shown on the card."
date: "Sep 2026"
tags:
  - Writing
external: true
url: "https://medium.com/..."
claps: 12
---
```

Clicking that card opens the URL in a new tab. No local article page is built.

## Images in posts

Add images to `public/blog-images/` (e.g. `public/blog-images/diagram.png`),
then reference them by path — they render centered in a rounded frame:

```mdx
![Alt text shown on the image](/blog-images/diagram.png)
```

Add an optional caption with a quoted title:

```mdx
![RAG pipeline](/blog-images/diagram.png "Figure 1: The RAG pipeline")
```

Remote images (absolute `https://...` URLs) work too; the block is styled the
same way.

## Markdown you can use

- Headings, lists, and quotes
- `inline code` and code blocks
- **Bold** and *italic* text
- [External links](https://github.com/shivraj598)

```ts
const post = await getBlog("demo-blog");
console.log(post.title); // renders on the article page
```

## Publishing

1. Add a `.mdx` (or `.md`) file to `content/blogs/`.
2. Run `npm run build` — the loader picks it up.
3. Push — the site regenerates.

No schema, no database, no dashboard.
