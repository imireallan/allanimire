# Vercel deployment

This is a static portfolio/resume site. It does not need React, React Router, Vite, Next.js, or a build pipeline yet.

## Recommended setup

Use Vercel as the primary portfolio host.

1. Push this repository to GitHub.
2. In Vercel, import `imireallan/resume-repository`.
3. Framework Preset: `Other`.
4. Build Command: leave empty.
5. Output Directory: leave empty or set to `.`.
6. Install Command: leave empty.
7. Use the generated `*.vercel.app` production URL for now. Add a custom domain later when ready.

## Public URLs

Primary portfolio:

```text
https://<your-vercel-domain>/
```

Direct resume PDF:

```text
https://<your-vercel-domain>/resume.pdf
```

ATS-readable resume text:

```text
https://<your-vercel-domain>/resume.md
```

## Why no React Router v7 yet?

This site is currently one static portfolio page plus static assets. React Router v7 would add unnecessary complexity for no user value right now. It also intentionally has no `package.json`, install step, or build step so Vercel can deploy it as a pure static site.

Use plain HTML/CSS/JS until you need at least one of these:

- multiple case-study pages;
- a blog or writing section;
- dynamic filtering/search;
- reusable components across multiple pages;
- analytics-driven content experiments;
- forms or interactive application flows.

When that happens, migrate to Vite + React first. Use React Router v7 only if the portfolio becomes a real multi-route app.
