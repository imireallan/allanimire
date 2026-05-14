# Allan Imire — Software Engineering Portfolio

This repository hosts Allan Imire's public software engineering portfolio and resume.

Primary artifacts:

- Portfolio site: `/`
- Direct resume PDF: `/resume.pdf`
- ATS-readable resume text: `/resume.md`
- Resume preview image: `/resume-preview.png`

## Recommended deployment

Use Vercel as the primary host for the portfolio site. See `DEPLOYMENT.md`.

Recommended public links after deploying:

- Portfolio: `https://<your-vercel-domain>/`
- Direct resume PDF: `https://<your-vercel-domain>/resume.pdf`
- ATS resume text: `https://<your-vercel-domain>/resume.md`

GitHub Pages can remain as a fallback mirror, but Vercel should be the main portfolio link once the domain is configured.

## Positioning

The site is designed as a public/client-facing software engineer portfolio:

- senior software engineering positioning;
- selected production systems: Lineage, ApplyFlow, and Veris;
- live project links;
- direct resume PDF access;
- ATS-readable resume text;
- lightweight animations and a distinct portfolio visual style.

## Maintenance checklist

When updating the portfolio or CV:

1. Replace `resume.pdf` with the latest exported PDF.
2. Regenerate `resume-preview.png` from the updated PDF.
3. Update `resume.md` with matching role titles, projects, links, dates, and skills.
4. Keep `index.html` focused on portfolio proof, production impact, and direct resume access.
5. Test locally with `python3 -m http.server 3000` before deploying.
