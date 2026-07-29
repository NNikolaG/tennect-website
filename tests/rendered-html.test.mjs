import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { access, readFile } from "node:fs/promises";
import { createServer } from "node:net";
import test, { after, before } from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = new URL("../", import.meta.url);
const projectRootPath = fileURLToPath(projectRoot);
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

  assert.match(
    html,
    /<title>Tennect — Find Tennis Players &amp; Courts Near You<\/title>/,
  );
  assert.match(html, /Your next/);
  assert.match(html, /All courts on one map\./);
  assert.match(html, /https:\/\/apple\.co\/3RAyuwX/);
  assert.match(html, /google-play-badge-en\.png/);
  assert.equal((html.match(/aria-haspopup="dialog"/g) ?? []).length, 8);
  assert.doesNotMatch(html, /codex-preview|Building your site/);
});

test("renders Serbian and Russian localized routes", async () => {
  const [serbian, russian] = await Promise.all([
    htmlFor("/sr"),
    htmlFor("/ru"),
  ]);

  assert.match(serbian, /Svi tereni na jednoj mapi\./);
  assert.match(serbian, /google-play-badge-sr\.png/);
  assert.match(russian, /Все корты на одной карте\./);
  assert.match(russian, /google-play-badge-ru\.png/);
});

test("keeps required public assets in the repository", async () => {
  await Promise.all([
    access(new URL("public/og.png", projectRoot)),
    access(new URL("public/media/tennect-icon.png", projectRoot)),
    access(new URL("public/media/app-store-badge-en.svg", projectRoot)),
    access(new URL("public/media/google-play-badge-sr.png", projectRoot)),
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
