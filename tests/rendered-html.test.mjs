import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
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

test("keeps required public and hosting assets in the repository", async () => {
  const hosting = JSON.parse(
    await readFile(new URL(".openai/hosting.json", projectRoot), "utf8"),
  );

  assert.match(hosting.project_id, /^appgprj_/);
  await Promise.all([
    access(new URL("public/og.png", projectRoot)),
    access(new URL("public/media/tennect-icon.png", projectRoot)),
    access(new URL("public/media/app-store-badge-en.svg", projectRoot)),
    access(new URL("public/media/google-play-badge-sr.png", projectRoot)),
  ]);
});
