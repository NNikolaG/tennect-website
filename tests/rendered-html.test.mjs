import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { access, readFile } from "node:fs/promises";
import { createServer } from "node:net";
import test, { after, before } from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = new URL("../", import.meta.url);
const projectRootPath = fileURLToPath(projectRoot);
const expectedSiteOrigin = process.env.SITE_URL ?? "http://localhost:3000";
let appProcess;
let baseUrl;

async function availablePort() {
  const server = createServer();
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });
  const address = server.address();
  const port = typeof address === "object" && address ? address.port : null;
  await new Promise((resolve) => server.close(resolve));
  assert.ok(port);
  return port;
}

async function waitForServer(url, processHandle) {
  const deadline = Date.now() + 20_000;

  while (Date.now() < deadline) {
    if (processHandle.exitCode !== null) {
      throw new Error(`Next.js server exited with code ${processHandle.exitCode}`);
    }
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // The server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 150));
  }

  throw new Error("Timed out waiting for the Next.js production server");
}

before(async () => {
  const port = await availablePort();
  baseUrl = `http://127.0.0.1:${port}`;
  appProcess = spawn(
    process.execPath,
    [
      fileURLToPath(
        new URL("../node_modules/next/dist/bin/next", import.meta.url),
      ),
      "start",
      "--hostname",
      "127.0.0.1",
      "--port",
      String(port),
    ],
    {
      cwd: projectRootPath,
      env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
      stdio: ["ignore", "pipe", "pipe"],
    },
  );

  await waitForServer(baseUrl, appProcess);
}, { timeout: 30_000 });

after(async () => {
  if (!appProcess || appProcess.exitCode !== null) return;
  appProcess.kill("SIGTERM");
  await new Promise((resolve) => appProcess.once("exit", resolve));
}, { timeout: 10_000 });

async function render(pathname = "/") {
  return fetch(`${baseUrl}${pathname}`, {
    headers: { accept: "text/html" },
  });
}

async function htmlFor(pathname) {
  const response = await render(pathname);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  return response.text();
}

test("renders the English Tennect landing page", async () => {
  const html = await htmlFor("/");

  assert.match(html, /<html lang="en"/);
  assert.match(
    html,
    /<title>Tennect — Find Tennis Players &amp; Courts Near You<\/title>/,
  );
  assert.match(
    html,
    /Find tennis players at your level, discover nearby courts, organise matches and track your progress with Tennect\./,
  );
  assert.match(html, /Your next/);
  assert.match(
    html,
    /Tennect player profile with availability schedule and preferred court surfaces/,
  );
  assert.match(html, /tennect-profile-schedule\.png/);
  assert.doesNotMatch(html, /class="hero-side/);
  assert.match(html, /Download Tennect for iOS/);
  assert.match(html, /Android version coming soon/);
  assert.match(html, /class="android-soon-card"/);
  assert.match(html, /class="button button-lime feature-cta"/);
  assert.match(html, /Is Tennect free\?/);
  assert.match(html, /Requires iOS 18\.6|requires iOS 18\.6/);
  assert.match(html, /https:\/\/apple\.co\/3RAyuwX/);
  assert.doesNotMatch(html, /google-play-badge-en\.png/);
  assert.doesNotMatch(html, /Get early access|Get launch updates/);
  assert.equal((html.match(/aria-haspopup="dialog"/g) ?? []).length, 8);
  assert.doesNotMatch(html, /codex-preview|Building your site/);
});

test("renders Serbian and Russian localized routes", async () => {
  const [serbian, russian] = await Promise.all([
    htmlFor("/sr"),
    htmlFor("/ru"),
  ]);

  assert.match(serbian, /<html lang="sr-Latn"/);
  assert.match(
    serbian,
    /Tennect profil igrača sa rasporedom dostupnosti i omiljenim podlogama/,
  );
  assert.match(serbian, /Preuzmi Tennect za iOS/);
  assert.match(serbian, /Da li je Tennect besplatan\?/);
  assert.doesNotMatch(serbian, /Rani pristup|Prijavi se za novosti|Tennect-a/);
  assert.doesNotMatch(serbian, /google-play-badge-sr\.png/);
  assert.match(russian, /<html lang="ru"/);
  assert.match(
    russian,
    /Профиль игрока Tennect с расписанием и любимыми покрытиями/,
  );
  assert.match(russian, /Скачать Tennect для iOS/);
  assert.match(russian, /Tennect бесплатный\?/);
  assert.doesNotMatch(russian, /google-play-badge-ru\.png|Ранний доступ/);
});

test("serves static robots and localized sitemap metadata", async () => {
  const [robotsResponse, sitemapResponse] = await Promise.all([
    render("/robots.txt"),
    render("/sitemap.xml"),
  ]);

  assert.equal(robotsResponse.status, 200);
  assert.equal(sitemapResponse.status, 200);
  assert.ok(
    (await robotsResponse.text()).includes(
      `Sitemap: ${expectedSiteOrigin}/sitemap.xml`,
    ),
  );

  const sitemap = await sitemapResponse.text();
  assert.ok(sitemap.includes(`<loc>${expectedSiteOrigin}/sr</loc>`));
  assert.match(sitemap, /hreflang="sr-Latn"/);
  assert.match(sitemap, /hreflang="x-default"/);
});

test("pre-renders every public SEO route", async () => {
  const manifest = JSON.parse(
    await readFile(
      new URL(".next/prerender-manifest.json", projectRoot),
      "utf8",
    ),
  );

  for (const pathname of ["/", "/sr", "/ru", "/robots.txt", "/sitemap.xml"]) {
    assert.ok(manifest.routes[pathname], `${pathname} must be pre-rendered`);
  }

  assert.equal((await render("/en")).status, 404);
});

test("keeps required public assets in the repository", async () => {
  await Promise.all([
    access(new URL("public/og.png", projectRoot)),
    access(new URL("public/media/tennect-icon.png", projectRoot)),
    access(new URL("public/media/tennect-profile-schedule.png", projectRoot)),
    access(new URL("public/media/tennis-ball-realistic.png", projectRoot)),
    access(new URL("public/media/app-store-badge-en.svg", projectRoot)),
    access(new URL("public/media/app-store-badge-ru.svg", projectRoot)),
  ]);
});

test("centers every shared showcase dialog in the viewport", async () => {
  const css = await readFile(new URL("app/globals.css", projectRoot), "utf8");
  const dialogRule = css.match(/\.showcase-dialog\s*\{([^}]*)\}/)?.[1] ?? "";

  assert.match(dialogRule, /position:\s*fixed/);
  assert.match(dialogRule, /left:\s*50%/);
  assert.match(dialogRule, /top:\s*50%/);
  assert.match(dialogRule, /transform:\s*translate\(-50%,\s*-50%\)/);
});

test("keeps desktop header controls at the same height", async () => {
  const css = await readFile(new URL("app/globals.css", projectRoot), "utf8");
  const downloadRule = css.match(/\.header-cta\s*\{([^}]*)\}/)?.[1] ?? "";
  const languageRule =
    css.match(/\.language-switcher summary\s*\{([^}]*)\}/)?.[1] ?? "";

  assert.match(downloadRule, /height:\s*52px/);
  assert.match(languageRule, /min-height:\s*52px/);
});

test("uses only the standard Next.js runtime", async () => {
  const packageJson = JSON.parse(
    await readFile(new URL("package.json", projectRoot), "utf8"),
  );
  const installedPackages = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  };

  assert.equal(packageJson.scripts.dev, "next dev");
  assert.equal(packageJson.scripts.build, "next build");
  assert.equal(packageJson.scripts.start, "next start");
  for (const packageName of [
    "vinext",
    "vite",
    "wrangler",
    "@cloudflare/vite-plugin",
    "drizzle-orm",
    "drizzle-kit",
  ]) {
    assert.equal(installedPackages[packageName], undefined);
  }
});
