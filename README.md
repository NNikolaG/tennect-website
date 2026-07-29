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

## Deployment

The project is a standard Next.js application ready for Vercel:

- Framework preset: `Next.js`
- Production branch: `main`
- Root directory: repository root
- Node.js version: `22.x`
- Build and output settings: use Vercel defaults
