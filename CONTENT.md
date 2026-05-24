# Where to edit what

A one-page map. Anything not listed here is theme/build internals you can ignore.

**Rule: if you are editing words a visitor reads, edit a file under `data/` — never touch `app/` or `layouts/`.**

## Site identity and config

| Want to change... | Edit this file |
| --- | --- |
| Your name, email, social links, site title, description | [`data/siteMetadata.js`](data/siteMetadata.js) |
| Top-nav menu items | [`data/headerNavLinks.ts`](data/headerNavLinks.ts) |

## Page copy (words on each page)

All page-level copy lives in [`data/content/`](data/content/). Each file maps to one page.

| Page | Edit this file | What you can change |
| --- | --- | --- |
| Homepage (`/`) | [`data/content/home.ts`](data/content/home.ts) | Hero title, subtitle, CTA button labels and links, section headings |
| Contact (`/contact`) | [`data/content/contact.ts`](data/content/contact.ts) | Page title, intro line, card labels and hint text |
| Projects (`/projects`) | [`data/content/projects.ts`](data/content/projects.ts) | Page title, subtitle |
| Blog (`/blog`) | [`data/content/blog.ts`](data/content/blog.ts) | Page title, empty-state text (homepage variant and /blog variant) |
| About (`/about`) | [`data/content/about.ts`](data/content/about.ts) | Page heading |

Import them all at once: `import { homeContent, blogContent } from '@/data/content'`

## Long-form content

| Want to change... | Edit this file |
| --- | --- |
| About-page bio, headshot, occupation, company | [`data/authors/default.mdx`](data/authors/default.mdx) |
| The list of projects on `/projects` and the homepage | [`data/projectsData.ts`](data/projectsData.ts) |

## Adding content

| Want to... | Do this |
| --- | --- |
| Add a blog post | Drop a new `.mdx` file in [`data/blog/`](data/blog/) with frontmatter `title`, `date`, `tags`, `summary` |
| Add a project | Add an entry to the `projectsData` array in [`data/projectsData.ts`](data/projectsData.ts) |
| Replace the headshot | File is [`public/static/images/avatar.jpg`](public/static/images/avatar.jpg); path is set in [`data/authors/default.mdx`](data/authors/default.mdx). Optional OG card: change `socialBanner` in [`data/siteMetadata.js`](data/siteMetadata.js) (currently reuses the headshot). |
| Replace the project thumbnail | Drop a 16:9 image at `public/static/images/<your-project>.png` and reference it in `projectsData.ts` |
| Tweak the colors | Edit the `--color-primary-*` block in [`css/tailwind.css`](css/tailwind.css) (currently indigo) |
| Tweak the logo (top-left mark) | Edit [`data/logo.svg`](data/logo.svg) |

## Folder reference

```text
app/                    Next.js App Router routes (page.tsx per page)
  about/                /about
  blog/                 /blog (listing + per-post pages)
  contact/              /contact
  projects/             /projects
  page.tsx + Main.tsx   Homepage
  layout.tsx            Site-wide HTML shell
  seo.tsx               <head>/JSON-LD helpers
components/             Reusable UI - rarely needs editing
  EmptyStateCard.tsx    Shared dashed-border placeholder card
css/                    Global styles + theme variables
data/                   ALL editable content lives here
  content/              Page-level copy (one .ts file per page)
    home.ts             Homepage hero, CTAs, section headings
    contact.ts          Contact page copy
    projects.ts         Projects page title and subtitle
    blog.ts             Blog page title, empty-state text (single source)
    about.ts            About page heading
    index.ts            Re-exports all of the above
  blog/                 One .mdx per blog post
  authors/default.mdx   Your bio
  siteMetadata.js       Single source of truth for site config
  headerNavLinks.ts     Nav menu
  projectsData.ts       Projects array
  logo.svg              Header logo
layouts/                Page templates (Author, PostLayout, ListLayout, ...)
public/static/images/   Static images (headshot, project thumbs, OG image)
.github/workflows/      Deploy to GitHub Pages on push
```

## What was removed (vs. the upstream template)

To keep this repo small and focused on a portfolio (not a feature-rich blogging starter), the following template features have been stripped: newsletter API + form, comments (giscus), bibliography/citations, sample blog posts, the `faq/` template-docs folder, Husky pre-commit hooks, Yarn Berry config (using plain npm), a second author profile, and several social icon options (kept: email, GitHub, LinkedIn).

Re-adding any of these is straightforward — the template repo at [`timlrx/tailwind-nextjs-starter-blog`](https://github.com/timlrx/tailwind-nextjs-starter-blog) is the reference.

## Local dev cheatsheet

```bash
npm run dev      # localhost:3000 with hot reload
npm run build    # production build (catches type/MDX errors)
npm run start    # serve the production build locally
npm run lint     # eslint
```
