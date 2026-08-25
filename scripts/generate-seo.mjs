/**
 * Writes public/sitemap.xml and public/robots.txt.
 *
 * The site is a single indexable URL, so the sitemap mainly exists to give
 * Search Console a canonical entry point and a lastmod signal. Run before the
 * Vite build so the files are copied into dist/.
 */
import { writeFile } from "node:fs/promises";

const origin = "https://haniffaiq.com";
const lastmod = new Date().toISOString().split("T")[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${origin}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${origin}/hanif-faiq.jpg</image:loc>
      <image:title>Hanif Faiq</image:title>
    </image:image>
  </url>
</urlset>
`;

const robots = `# https://haniffaiq.com
User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`;

await writeFile("public/sitemap.xml", sitemap);
await writeFile("public/robots.txt", robots);
console.log(`seo: wrote sitemap.xml and robots.txt (lastmod ${lastmod})`);
