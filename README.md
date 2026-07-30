# Tennect Website

Marketing website for Tennect, a tennis community app for finding nearby
players and courts, organising matches, tracking results, following rankings,
and staying connected to tennis news.

## Languages

- English: `/`
- Serbian: `/sr`
- Russian: `/ru`

Each language has localized page content, metadata, structured data, FAQ
content, store badges, and search-engine language alternatives.

## Technology

- React 19
- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4

## Local development

Node.js 22 is required.

```bash
npm ci
npm run dev
```

The local development server is available at `http://localhost:3000`.
Create `.env.local` only when you want local metadata to use a production-like
canonical URL:

```bash
SITE_URL=https://your-production-domain.example
```

## Validation

```bash
npm run build
npm run lint
npm test
```

## Project structure

```text
app/
  components/   Interactive website components
  i18n/         English, Serbian, and Russian content
  [locale]/     Localized routes
public/
  media/        Tennect screenshots, logos, and store badges
tests/          Server-rendering checks
```

## Rendering and SEO

The English, Serbian, and Russian landing pages are statically generated during
`next build`. Search engines receive complete HTML without invoking a server
function on every page view. The project also includes localized metadata,
canonical and `hreflang` links, JSON-LD, Open Graph data, `robots.txt`, and a
localized sitemap.

## Deployment

The project is a standard Next.js application ready for Vercel:

- Framework preset: `Next.js`
- Production branch: `main`
- Root directory: repository root
- Node.js version: `22.x`
- Build and output settings: use Vercel defaults

Vercel's `VERCEL_PROJECT_PRODUCTION_URL` is used automatically for canonical,
Open Graph, robots, and sitemap URLs. Set `SITE_URL` in Vercel only when a
specific custom domain should always be canonical. Ensure **Automatically
expose System Environment Variables** is enabled in Vercel; otherwise define
`SITE_URL` explicitly.

## Analytics

Google Analytics 4 is integrated with consent-controlled loading. The
production Measurement ID is `G-L434P285VX`; it can be overridden with:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-L434P285VX
```

The site tracks page views after consent, feature and gallery detail openings
with `select_content`, and App Store actions with `app_download_click`.
