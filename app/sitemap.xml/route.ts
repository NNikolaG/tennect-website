export async function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const lastModified = new Date().toISOString();
  const alternates = `
    <xhtml:link rel="alternate" hreflang="en" href="${origin}/" />
    <xhtml:link rel="alternate" hreflang="sr-Latn" href="${origin}/sr" />
    <xhtml:link rel="alternate" hreflang="ru" href="${origin}/ru" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${origin}/" />`;
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${origin}/</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
${alternates}
  </url>
  <url>
    <loc>${origin}/sr</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
${alternates}
  </url>
  <url>
    <loc>${origin}/ru</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
${alternates}
  </url>
</urlset>`;

  return new Response(body, {
    headers: { "content-type": "application/xml; charset=utf-8" },
  });
}
