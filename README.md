# Ronak Pradhan — Portfolio

Source for [ronak-pradhan.github.io/portfolio](https://ronak-pradhan.github.io/portfolio).

Built on Next.js 15 (App Router) + Tailwind v4 + Contentlayer (MDX), based on [`tailwind-nextjs-starter-blog`](https://github.com/timlrx/tailwind-nextjs-starter-blog).

## Local development

Requires Node 22+. No Docker, no Ruby.

```bash
npm install
npm run dev
# http://localhost:3000
```

## Editing content

See [CONTENT.md](CONTENT.md) for a one-page guide to where every piece of editable content lives.

## Deployment

The repo is configured to auto-deploy to GitHub Pages on every push to `main` via [.github/workflows/pages.yml](.github/workflows/pages.yml). One-time setup:

1. Repo **Settings → Pages → Build and deployment → Source**: GitHub Actions.
2. Repo **Settings → Actions → General → Workflow permissions**: Read and write.

To switch to Vercel later: connect the repo at [vercel.com](https://vercel.com), drop the `EXPORT=1` env, and you get per-PR preview URLs for free.

## Legacy

The previous al-folio Jekyll scaffold is preserved on the local `legacy/al-folio` branch. To inspect it:

```bash
git checkout legacy/al-folio
```

## License

Site content © Ronak Pradhan. Theme is MIT-licensed (see [LICENSE](LICENSE)).
