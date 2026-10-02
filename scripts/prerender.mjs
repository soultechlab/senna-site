// Gera HTML estático para cada rota depois do `vite build`.
// Crawlers de IA (GPTBot, ClaudeBot, PerplexityBot...) não executam
// JavaScript: sem isso eles só enxergam um <div id="root"> vazio.
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");
const ssrDir = resolve(root, "dist-ssr");
const SITE_URL = "https://administradoracapital.com.br";

const { render, routes } = await import(pathToFileURL(resolve(ssrDir, "entry-server.js")).href);
const template = await readFile(resolve(dist, "index.html"), "utf8");

const escapeAttr = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const absolute = (url) => (url.startsWith("http") ? url : `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`);

function setMeta(html, attr, key, content) {
  if (!content) return html;
  const tag = new RegExp(`<meta ${attr}="${key}" content="[^"]*"\\s*/?>`);
  const replacement = `<meta ${attr}="${key}" content="${escapeAttr(content)}" />`;
  return tag.test(html) ? html.replace(tag, replacement) : html.replace("</head>", `    ${replacement}\n  </head>`);
}

function applySeo(html, seo) {
  if (!seo) return html;
  const ogTitle = seo.ogTitle || seo.title;
  const ogDescription = seo.ogDescription || seo.description;
  const ogImage = absolute(seo.ogImage);

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(seo.title)}</title>`);
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${escapeAttr(seo.canonicalUrl)}" />`);
  html = setMeta(html, "name", "description", seo.description);
  html = setMeta(html, "name", "keywords", seo.keywords);
  html = setMeta(html, "property", "og:title", ogTitle);
  html = setMeta(html, "property", "og:description", ogDescription);
  html = setMeta(html, "property", "og:url", seo.canonicalUrl);
  html = setMeta(html, "property", "og:image", ogImage);
  html = setMeta(html, "property", "og:image:alt", seo.ogImageAlt);
  html = setMeta(html, "name", "twitter:title", ogTitle);
  html = setMeta(html, "name", "twitter:description", ogDescription);
  html = setMeta(html, "name", "twitter:image", ogImage);

  if (seo.structuredData) {
    const json = JSON.stringify(seo.structuredData).replace(/</g, "\\u003c");
    html = html.replace(
      "</head>",
      `    <script type="application/ld+json" data-seo-page="true">${json}</script>\n  </head>`
    );
  }
  return html;
}

// Casca vazia para rotas desconhecidas (fallback do SPA em public/_redirects)
await writeFile(resolve(dist, "spa.html"), template);

for (const route of routes) {
  const { html: appHtml, seo } = render(route.path);
  const page = applySeo(template, seo).replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  // /condominio -> condominio.html: servido em /condominio sem barra final
  const file = route.path === "/" ? "index.html" : `${route.path.slice(1)}.html`;
  const target = resolve(dist, file);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, page);
  console.log(`  prerender  ${route.path}  ->  dist/${file}`);
}

const lastmod = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;
await writeFile(resolve(dist, "sitemap.xml"), sitemap);
console.log(`  sitemap    ${routes.length} URLs  ->  dist/sitemap.xml`);

await rm(ssrDir, { recursive: true, force: true });
