/**
 * Copies the web app into www/ so Capacitor can bundle it.
 *
 * The app addresses its own assets absolutely (/app/styles.css, /logo.png), which
 * resolve against the native web root — so the layout under www/ has to mirror
 * public/ rather than flatten it.
 */
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const site = resolve(root, "..");
const www = resolve(root, "www");

const SITE_URL = "https://clearshore-site.vercel.app";

await rm(www, { recursive: true, force: true });
await mkdir(resolve(www, "app"), { recursive: true });

await cp(resolve(site, "public/app"), resolve(www, "app"), { recursive: true });
await cp(resolve(site, "public/logo.png"), resolve(www, "logo.png"));

// The service worker is the browser's offline story; the native shell already
// bundles every file, and a stale SW cache inside the app would only fight it.
await rm(resolve(www, "app/sw.js"), { force: true });

// Links out to the website have nowhere to go inside the shell, so hand them to
// the system browser. Injected here to keep the web app free of native concerns.
const bridge = `(function () {
  "use strict";
  var SITE = ${JSON.stringify(SITE_URL)};
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (rs) {
      rs.forEach(function (r) { r.unregister(); });
    }).catch(function () {});
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest("a[href]") : null;
    if (!a) return;
    var href = a.getAttribute("href") || "";
    if (href.charAt(0) !== "/") return;
    e.preventDefault();
    window.open(SITE + href, "_blank");
  });
})();
`;
await writeFile(resolve(www, "native-bridge.js"), bridge, "utf8");

const indexPath = resolve(www, "app/index.html");
let html = await readFile(indexPath, "utf8");
html = html.replace(
  '<script src="/app/app.js"></script>',
  '<script src="/app/app.js"></script>\n<script src="/native-bridge.js"></script>'
);
await writeFile(indexPath, html, "utf8");

// Capacitor boots from index.html at the web root.
await writeFile(
  resolve(www, "index.html"),
  `<!doctype html>
<html lang="en"><head><meta charset="utf-8" />
<title>Clearshore Assist</title>
<meta http-equiv="refresh" content="0; url=/app/index.html" />
<style>html,body{margin:0;height:100%;background:#14505d}</style>
</head><body><script>location.replace("/app/index.html");</script></body></html>
`,
  "utf8"
);

console.log("Synced public/app -> mobile/www");
