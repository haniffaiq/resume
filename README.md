# Hanif Faiq – Personal Portfolio

A personal portfolio website for Hanif Faiq, showcasing professional experience across backend development, DevOps, data engineering, and frontend development. Built with Vite, React, TypeScript, Tailwind CSS, shadcn/ui, and EmailJS.

## Live site

- Production: https://haniffaiq.com

## Tech stack

- Vite for development and production builds
- React + TypeScript for the UI
- Tailwind CSS and shadcn/ui for styling and components
- EmailJS for the contact form
- Docker and Nginx for containerized static hosting
- GitHub Actions for CI

## Prerequisites

- Node.js 20 or newer
- npm
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
npm run lint        # ESLint checks
npm run build       # Production build into dist/
npm run preview     # Preview the production build locally
npm run generate:cv # Regenerate the public CV PDF
```

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

1. `node:20-alpine` installs dependencies and runs `npm run build`.
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

GitHub Actions is configured in `.github/workflows/ci.yml`. The CI workflow installs dependencies with `npm ci` and runs the repository checks. Keep `package-lock.json` committed so CI and local installs use the same dependency graph.

Before opening a pull request, run at least:

```bash
npm run lint
npm run build
```

## EmailJS troubleshooting

If the contact form fails to send mail:

1. Confirm `.env.local` exists locally or the hosting provider has all three variables configured.
2. Confirm variable names exactly match `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`.
3. Restart `npm run dev` after changing `.env.local`; Vite does not always reload environment changes into the dev server.
4. Rebuild and redeploy after changing production EmailJS values.
5. Check the browser console for `EmailJS Error:` messages from `Contact.tsx`.
6. Verify the EmailJS service ID, template ID, public key, allowed origins, and template variables match the form fields: `name`, `email`, `subject`, and `message`.
7. Make sure no real `.env` files were committed. `.env.example` should contain placeholders only.

## Repository hygiene

- Commit documentation, source files, and config examples only.
- Do not commit real EmailJS values, API keys, tokens, or secrets.
- Keep generated `dist/` output untracked.
