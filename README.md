# ezestutz.github.io

Personal site for [Ezequiel Stutz Díaz](https://ezestutz.github.io/), built with **Next.js** (App Router) and deployed to **GitHub Pages** as a static export.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build (static export)

```bash
npm run build
```

Output lands in `out/` (ready for GitHub Pages).

## Deploy

Push to `master`. GitHub Actions (`.github/workflows/deploy.yml`) builds the static export and deploys via **GitHub Pages → GitHub Actions**.

Repo Settings → Pages → Build and deployment → Source: **GitHub Actions**.
