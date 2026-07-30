import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
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

test("server-renders the Fluffy Lineup project case study", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Fluffy Lineup/);
  assert.match(html, /Xitao Liao/);
  assert.match(html, /Cute creatures\. Smart lineups\./);
  assert.match(html, /id="overview"/);
  assert.match(html, /id="gameplay"/);
  assert.match(html, /id="features"/);
  assert.match(html, /id="gallery"/);
  assert.match(html, /id="development"/);
  assert.match(html, /Gameplay capture in progress/);
  assert.doesNotMatch(html, /codex-preview/);
  assert.doesNotMatch(html, /react-loading-skeleton/);
});

test("ships bilingual controls and accessible media", async () => {
  const response = await render();
  const html = await response.text();
  const css = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );

  assert.match(html, />中文</);
  assert.match(html, />EN</);
  assert.match(html, /aria-label="Switch to Chinese"/);
  assert.match(html, /alt="Fluffy Lineup/);
  assert.match(css, /prefers-reduced-motion/);
});
