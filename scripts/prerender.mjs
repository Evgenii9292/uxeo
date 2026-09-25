import { readFile, writeFile } from "node:fs/promises";
import { createServer } from "vite";
import { renderSeoHead } from "../src/app/seo/metadata.mjs";

const template = await readFile("dist/index.html", "utf8");
const vite = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: "custom", optimizeDeps: { noDiscovery: true, include: [], entries: [] } });
try {
  const { render } = await vite.ssrLoadModule("/scripts/prerender-entry.tsx");
  for (const [path, file] of [["/", "index.html"], ["/welcome", "welcome.html"], ["/404", "404.html"], ["/profile", "app.html"]]) {
    const content = file === "app.html" ? "" : render(path);
    let html = template
      .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, () => `<!--seo:start-->${renderSeoHead(path)}<!--seo:end-->`)
      .replace('<div id="root"></div>', () => `<div id="root">${content}</div>`);
    // The public UI is already visible: no splash obscuring text or waiting for JS.
    if (content) html = html.replace('<html lang="ru"', '<html data-prerendered="true" lang="ru"');
    await writeFile(`dist/${file}`, html);
  }
  console.log("Prerendered public screens and 404; emitted noindex app shell.");
} finally {
  await vite.close();
}
