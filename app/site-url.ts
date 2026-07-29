const LOCAL_SITE_URL = "http://localhost:3000";

function configuredSiteUrl(): string {
  if (process.env.SITE_URL) return process.env.SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL === "1") {
    throw new Error(
      "Vercel production URL is unavailable. Enable system environment variables or set SITE_URL.",
    );
  }
  return LOCAL_SITE_URL;
}

function validatedSiteUrl(value: string): URL {
  try {
    const url = new URL(value);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      throw new Error("Only HTTP and HTTPS URLs are supported");
    }
    if (url.pathname !== "/" || url.search || url.hash) {
      throw new Error("The URL must contain only an origin without a path");
    }
    return url;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    throw new Error(`Invalid SITE_URL configuration: ${message}`);
  }
}

export const siteUrl = validatedSiteUrl(configuredSiteUrl());

export function absoluteUrl(pathname: string): string {
  return new URL(pathname, siteUrl).toString();
}
