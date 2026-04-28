# Ronak Pradhan — Applied Scientist Portfolio

Source for [ronak-pradhan.github.io/portfolio](https://ronak-pradhan.github.io/portfolio).

Built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme and deployed automatically to GitHub Pages via the bundled GitHub Action in `.github/workflows/deploy.yml` whenever `main` is updated.

## Repo layout

| Path | Purpose |
| --- | --- |
| `_config.yml` | Site config (name, URL, theme, plugins, SEO toggles). |
| `_pages/` | Top-level pages (about, experience, projects, blog, cv, contact, …). |
| `_data/` | YAML data sources: `socials.yml` (sameAs links + CTAs), `cv.yml` (resume content), `faq.yml` (FAQ schema entries). |
| `_projects/` | One Markdown file per project card. |
| `_news/` | Short news/announcement entries shown on the home page. |
| `_posts/` | Blog posts (Markdown, supports math + code). |
| `_bibliography/papers.bib` | Publications, talks, and write-ups (BibTeX). |
| `_includes/`, `_layouts/`, `_sass/` | Theme internals (override sparingly). |
| `assets/` | Images, PDFs, JS, generated CSS. |
| `llms.txt`, `llms-full.txt` | AI-crawler discoverability files. |
| `robots.txt` | Crawl rules; explicitly allows AI bots (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, …). |

## Local development

Easiest path is Docker (matches the GitHub Actions runner):

```bash
docker compose up
# site at http://localhost:8080
```

Native Ruby:

```bash
bundle install
bundle exec jekyll serve --livereload
# site at http://localhost:4000
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site with `JEKYLL_ENV=production`, purges unused CSS, and pushes to the `gh-pages` branch. GitHub Pages serves from that branch.

One-time setup on the repo:

1. **Settings → Actions → General → Workflow permissions:** Read and write.
2. **Settings → Pages → Build and deployment:** Source `Deploy from a branch`, branch `gh-pages` (root).
3. (Optional) Rename the repo to `Ronak-Pradhan.github.io` for the cleaner `https://ronak-pradhan.github.io` URL — then set `baseurl: ` empty in `_config.yml`.

## Discoverability checklist

Run after every meaningful change:

- [Google Rich Results Test](https://search.google.com/test/rich-results) — Person, ProfilePage, Article, FAQ, BreadcrumbList all valid.
- [PageSpeed Insights](https://pagespeed.web.dev) — mobile Performance, SEO, Accessibility ≥ 95.
- `/llms.txt`, `/llms-full.txt`, `/sitemap.xml`, `/robots.txt` all return 200.
- Search Console + Bing Webmaster verified, sitemaps submitted.

## Ship sequence

After replacing the placeholder content, verify the site end-to-end:

1. Push to `main` and wait for the `Deploy site` workflow to succeed.
2. Open `https://ronak-pradhan.github.io/portfolio/` and click through every nav link.
3. Toggle dark mode (top-right) — confirm contrast on hero, CTAs, case-study cards.
4. View on a phone (or DevTools mobile emulation) — hero CTAs, navbar, project gallery should reflow cleanly.
5. View source on the home page and confirm the `<script type="application/ld+json">` block contains `Person`, `WebSite`, `ProfilePage`, and `FAQPage` entries.
6. Paste the live URL into [Google Rich Results Test](https://search.google.com/test/rich-results); each schema should parse without errors.
7. Run [PageSpeed Insights](https://pagespeed.web.dev) — Performance, SEO, and Accessibility should all land ≥ 95 on mobile.
8. Check `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/llms-full.txt`, and `/about.md` (and other mirror pages) all return 200.
9. Submit the sitemap in Google Search Console + Bing Webmaster Tools.
10. Ask ChatGPT (with browsing) and Perplexity "Who is Ronak Pradhan, applied scientist?" and confirm the portfolio is retrieved and cited; iterate content if not.

## What still needs your input

The site is fully scaffolded and discoverable, but a few placeholder values need to be replaced with the real thing before launch. Search the repo for `TODO` to find them all; the high-leverage ones:

### Identity / contact
- [ ] `_data/socials.yml` — fill in real `email`, confirm `linkedin_username`, add `x_username`, `scholar_userid`, `orcid_id`, `huggingface_id`, `wikidata_id` (the `sameAs` array drives Knowledge-Panel signals).
- [ ] `_pages/about.md` — `more_info` email shown next to the headshot.
- [ ] `_pages/contact.md` — replace `YOUR_FORMSPREE_ID` with your real Formspree form ID and update the Calendly URL.
- [ ] `_data/cv.yml` — confirm email and any details you want exposed.

### Assets
- [ ] `assets/img/prof_pic.jpg` — replace Einstein placeholder with your headshot (square, ~1000px).
- [ ] `assets/img/og-image.png` — add a 1200×630 OG image, then uncomment `og_image:` in `_config.yml`.
- [ ] `assets/pdf/ronak-pradhan-resume.pdf` — drop your resume PDF here; the CV page already links to it.
- [ ] `assets/img/` — feel free to delete `1.jpg`–`12.jpg`, `prof_pic_color.png`, `rhino.png`, `template_error.png`, `book_covers/`, `publication_preview/` (al-folio sample assets).

### Discoverability — verify and submit
- [ ] [Google Search Console](https://search.google.com/search-console) — add the property, verify via `google_site_verification` in `_config.yml`, submit `sitemap.xml`.
- [ ] [Bing Webmaster Tools](https://www.bing.com/webmasters/) — same drill via `bing_site_verification`.
- [ ] **IndexNow** — generate a key, add it as a GitHub Actions secret `INDEXNOW_KEY`, publish the key file as `<site>/<key>.txt`. The deploy workflow will then ping Bing/Yandex on every deploy.
- [ ] Run [Google Rich Results Test](https://search.google.com/test/rich-results) against the live URL and make sure Person, ProfilePage, Article, FAQ, BreadcrumbList all parse cleanly.
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev) — target ≥ 95 on mobile Performance / SEO / Accessibility.

### Off-site authority (compounds over time)
- [ ] Cross-link from your **LinkedIn**, **GitHub** profile README, **HuggingFace**, **X**, **Medium / Dev.to** profiles back to the portfolio.
- [ ] Create / claim **Google Scholar**, **ORCID**, and (eventually) **Wikidata** entries; add their IDs to `_data/socials.yml` so they land in the `sameAs` JSON-LD.
- [ ] Once entity signals are consistent across LinkedIn / Scholar / Wikidata, request a Google Knowledge Panel via Search Console.
- [ ] Aim for 1 cross-posted technical write-up per month (HuggingFace blog / Towards Data Science / Dev.to) with `rel=canonical` pointing back to the portfolio.

### Content pass (the real work)
- [ ] Expand the two case studies on `/experience/` with project-specific details you are comfortable sharing publicly.
- [ ] Replace the four placeholder cards in `_projects/` with real GitHub repos + write-ups.
- [ ] Write the first real blog post (the seed `/blog/2026/fine-tuning-bioclinical-bert-notes/` is an outline; flesh it out or replace).
- [ ] Add 2–3 testimonial quotes in `_data/` and a testimonial section on `/about/` (LinkedIn recommendations work great).
- [ ] Add real publications, talks, or technical write-ups to `_bibliography/papers.bib` (replace the placeholder entry).

## License

Site content © Ronak Pradhan. al-folio theme is MIT-licensed (see `LICENSE`).
