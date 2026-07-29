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
- Next.js-compatible App Router
- [vinext](https://github.com/cloudflare/vinext)
- TypeScript
- Cloudflare Workers-compatible deployment output

## Local development

Node.js `>=22.13.0` is required.

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

The site is configured for OpenAI Sites through `.openai/hosting.json`.
Production deployments use the validated vinext build output.

## Production

[tennect-tennis-community.guta89.chatgpt.site](https://tennect-tennis-community.guta89.chatgpt.site/)
