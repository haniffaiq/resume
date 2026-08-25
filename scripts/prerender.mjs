/**
 * Injects prerendered markup into dist/index.html.
 *
 * The site is a static SPA, so without this step every crawler that does not
 * execute JavaScript (LinkedIn, Slack, Bing, most ATS scrapers) sees an empty
 * <div id="root">. Google renders JS, but only on a slower second pass.
 *
 * Run after `vite build` and `vite build --ssr`.
 */
import { readFile, writeFile, rm } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const dist = path.resolve("dist");
const ssrEntry = path.join(dist, ".ssr", "entry-server.js");
const htmlPath = path.join(dist, "index.html");

const { render } = await import(pathToFileURL(ssrEntry).href);

const html = await readFile(htmlPath, "utf8");
const markup = render("/");

const marker = '<div id="root"></div>';
if (!html.includes(marker)) {
  throw new Error(`prerender: could not find ${marker} in dist/index.html`);
}

await writeFile(htmlPath, html.replace(marker, `<div id="root">${markup}</div>`));
await rm(path.join(dist, ".ssr"), { recursive: true, force: true });

const textLength = markup.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().length;
console.log(`prerender: injected ${markup.length} bytes of markup (${textLength} chars of text)`);
