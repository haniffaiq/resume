# Hanif Faiq – Personal Portfolio

A personal portfolio website for Hanif Faiq, showcasing professional experience across backend development, DevOps, data engineering, and frontend development. Built with Vite, React, TypeScript, Tailwind CSS, shadcn/ui, and EmailJS.

## Live site

- Production: https://haniffaiq.com

## Tech stack

- Vite for development and production builds
- React + TypeScript for the UI
- Tailwind CSS and shadcn/ui for styling and components
- EmailJS (`@emailjs/browser`) for the contact form
- Docker and Nginx for containerized static hosting
- GitHub Actions for CI

## Prerequisites

- Node.js 22.12 or newer (required by Vite 8)
- npm (the only supported package manager; `package-lock.json` is the single lockfile)
- Docker and Docker Compose, if running the containerized deployment locally
- EmailJS service, template, and public key values for the contact form

## Environment variables

The contact form in `src/components/Contact.tsx` reads these Vite variables at build time:

```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

Start from the tracked example file:

```bash
cp .env.example .env.local
```

Then replace the placeholder values in `.env.local` with the real EmailJS values. Do not commit `.env`, `.env.local`, or any other real secret/config files. Vite only exposes variables prefixed with `VITE_` to browser code, so keep private credentials out of this frontend app.

For production, define the same variables in the deployment environment before building the app or Docker image. Because this is a static Vite build, changing EmailJS values after the build requires rebuilding and redeploying the site.

## Local development

Install dependencies and run the Vite dev server:

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

Useful local commands:

```bash
npm run lint         # ESLint checks
npm run typecheck    # TypeScript project check, no emit
npm run build        # SEO assets + client build + SSR build + prerender
npm run build:client # Client bundle only, skips the prerender step
npm run preview      # Preview the production build locally
npm run generate:seo # Rewrite public/sitemap.xml and public/robots.txt
npm run generate:cv  # Regenerate the CV PDF in public/
```

## Site content

All copy lives in `src/data/`, so content edits never require touching components:

| File | Drives |
| --- | --- |
| `profile.ts` | Name, tagline, summary, About copy, education, contact details, nav items |
| `experience.ts` | Work history entries |
| `projects.ts` | Project cards and case-study modals |
| `testimonials.ts` | LinkedIn recommendations |

### Projects

Each project sets `link` when the site is publicly reachable, which renders a
green **Live** badge. Set `archived: true` instead when the work shipped but the
public site is gone (for example after a partnership ended). Archived projects
keep their card and case study, show an amber **Archived** badge, and disable the
Direct Link button.

Use lowercase for domain-style project titles (`petag.id`, not `PeTag.id`).

### Recommendations

`src/data/testimonials.ts` holds real LinkedIn recommendations only. Copy each
one verbatim from
<https://www.linkedin.com/in/haniffaiq13/details/recommendations/> together with
the recommender's real name, their role at the time, and their profile URL.

The section and its nav entry render only when the list is non-empty, so it is
always safe to ship with fewer entries. Never add placeholder quotes.

## SEO and prerendering

The site must be findable by recruiters searching the name, so the build does
three things a plain SPA build does not.

### Prerendering

`npm run build` runs in three stages:

1. `scripts/generate-seo.mjs` writes `public/sitemap.xml` and `public/robots.txt`.
2. Vite builds the client bundle, then an SSR bundle from `src/entry-server.tsx`.
3. `scripts/prerender.mjs` renders `/` to HTML and injects it into
   `dist/index.html`, then deletes the temporary SSR output.

Without this, `<div id="root">` ships empty and every crawler that does not run
JavaScript (LinkedIn, Slack, Bing, most ATS scrapers) sees a blank page. Google
does render JS, but only on a slower second pass. After prerendering the HTML
carries roughly 20k characters of indexable text.

`src/App.tsx` is deliberately router-agnostic: `src/main.tsx` wraps it in a
`BrowserRouter` and `src/entry-server.tsx` in a `StaticRouter`. The client entry
calls `hydrateRoot` when markup is already present and `createRoot` otherwise,
so `npm run dev` still works against an empty root.

**Components must stay SSR-safe.** Never touch `window`, `document`, or
`localStorage` during render; confine them to event handlers and `useEffect`.
A violation crashes the build rather than failing silently.

### Structured data

`src/components/StructuredData.tsx` emits a schema.org `@graph`
(`Person`, `WebSite`, `ProfilePage`, `ItemList`) built from the same files the
UI renders, so it cannot drift from the visible content. `sameAs` links the
LinkedIn and GitHub profiles, which is what lets Google associate the site with
the person rather than treating it as an anonymous page.

Validate changes with the [Rich Results Test](https://search.google.com/test/rich-results)
and Schema.org's [validator](https://validator.schema.org/).

### After deploying

1. Add the property in [Google Search Console](https://search.google.com/search-console)
   and verify the domain.
2. Submit `https://haniffaiq.com/sitemap.xml`.
3. Request indexing for `/` so the first crawl is not left to chance.
4. Repeat in [Bing Webmaster Tools](https://www.bing.com/webmasters).
5. Link the site from the LinkedIn and GitHub profiles. Those inbound links are
   the strongest signal tying the domain to the name.

## CV source and PDF

The downloadable CV PDF is generated from an editable source file:

- Source: `docs/hanif-faiq-cv.md`
- Generated asset: `public/hanif-faiq-cv.pdf`
- Generator: `scripts/generate-cv-pdf.py`

Regenerate the public PDF after editing the source:

```bash
npm run generate:cv
```

## Production build

Create a static production build:

```bash
npm ci
npm run build
```

The compiled site is written to `dist/`. Serve `dist/` with any static host or web server that supports SPA fallback to `index.html`.

## Docker

Build the production image:

```bash
docker build -t haniffaiq-portfolio .
```

Run it locally on port 9000:

```bash
docker run --rm -p 9000:80 haniffaiq-portfolio
```

Open `http://localhost:9000`.

The Dockerfile uses a two-stage build:

1. `node:22-alpine` installs dependencies and runs `npm run build`.
2. `nginx:alpine` serves the generated `dist/` files.

If the contact form should work inside the Docker image, make sure the EmailJS environment variables are available during `docker build`, because Vite embeds `VITE_` values at build time. One option is to use a local `.env.local` before building; do not commit it.

## Docker Compose

Run the included Compose service:

```bash
docker compose up --build -d
```

The service is named `portfolio` and maps host port `9000` to container port `80`. Check status and logs with:

```bash
docker compose ps
docker compose logs -f portfolio
```

Stop it with:

```bash
docker compose down
```

## Nginx and domain notes

The container uses `nginx.conf` and serves the app for:

- `haniffaiq.com`
- `www.haniffaiq.com`

The Nginx config includes SPA fallback with `try_files $uri /index.html;`, so React Router routes load correctly on refresh. Static assets are served with long cache headers.

For a public deployment:

1. Point DNS records for `haniffaiq.com` and `www.haniffaiq.com` to the host or reverse proxy.
2. Terminate TLS with the platform load balancer, reverse proxy, or a host-level Nginx/Caddy/Traefik instance.
3. Proxy HTTP traffic to the container port, or run the container behind the host-level web server.
4. Rebuild and redeploy whenever source files or `VITE_EMAILJS_*` values change.

Example host-level reverse proxy target if the Compose service is exposed locally:

```nginx
location / {
  proxy_pass http://127.0.0.1:9000;
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
}
```

## CI notes

GitHub Actions is configured in `.github/workflows/ci.yml`. The CI workflow installs dependencies with `npm ci`, then runs lint, typecheck, build, and `npm audit --omit=dev --audit-level=high`. Keep `package-lock.json` committed so CI and local installs use the same dependency graph.

Before opening a pull request, run at least:

```bash
npm run lint
npm run typecheck
npm run build
```

## EmailJS troubleshooting

If the contact form fails to send mail:

1. Confirm `.env.local` exists locally or the hosting provider has all three variables configured.
2. Confirm variable names exactly match `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`.
3. Restart `npm run dev` after changing `.env.local`; Vite does not always reload environment changes into the dev server.
4. Rebuild and redeploy after changing production EmailJS values.
5. Check the browser console for `EmailJS Error:` messages from `Contact.tsx`. If the three variables are missing entirely, the form refuses to submit and tells the visitor to email directly instead.
6. Verify the EmailJS service ID, template ID, public key, allowed origins, and template variables match the form fields: `name`, `email`, `subject`, and `message`.
7. Make sure no real `.env` files were committed. `.env.example` should contain placeholders only.

## Repository hygiene

- Commit documentation, source files, and config examples only.
- Do not commit real EmailJS values, API keys, tokens, or secrets.
- Keep generated `dist/` output untracked.
- npm is the only supported package manager. `package-lock.json` is the single
  lockfile; other lockfiles are gitignored so CI (`npm ci`) cannot diverge.
- Keep `package.json` limited to packages the app actually imports. The UI layer
  only vendors the shadcn/ui primitives in use, so unused components and their
  Radix dependencies should be removed rather than left in place.
- `npm audit --omit=dev --audit-level=high` must stay clean; CI enforces it.
- Local AI/agent tooling directories are gitignored. Keep it that way so the
  public repo carries no assistant config, and do not add AI co-author trailers
  to commit messages.
