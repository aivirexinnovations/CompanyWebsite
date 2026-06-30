// @ts-check
import { defineConfig } from 'astro/config';
import { writeFileSync } from 'node:fs';
import tailwindcss from '@tailwindcss/vite';

const SITE = 'https://aivirex.in';

// Single-file sitemap generator.
// @astrojs/sitemap always splits output into a sitemap-index.xml + sitemap-0.xml
// pair, and offers no single-file mode. We want exactly one plain /sitemap.xml.
// This hook runs after the build and walks every page Astro actually emitted
// (static pages AND dynamic routes like /services/[slug]), so new pages are
// included automatically — there is no manual URL list to keep in sync.
function singleSitemap() {
  return {
    name: 'single-sitemap',
    hooks: {
      /** @param {{ pages: { pathname: string }[]; dir: URL; logger: { info: (m: string) => void } }} ctx */
      'astro:build:done': ({ pages, dir, logger }) => {
        const locs = pages
          // /download is a noindex Play Store bounce — keep it out.
          .filter(({ pathname }) => !/^download\/?$/.test(pathname))
          .map(({ pathname }) => {
            // Canonical form: absolute, no trailing slash except the root, so it
            // matches <link rel="canonical"> and Netlify's pretty_urls.
            const url = `${SITE}/${pathname}`;
            return url === `${SITE}/` ? url : url.replace(/\/+$/, '');
          });

        const urls = [...new Set(locs)].sort();
        const body = urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n');
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

        writeFileSync(new URL('sitemap.xml', dir), xml);
        logger.info(`sitemap.xml created with ${urls.length} URLs`);
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: SITE,
  integrations: [singleSitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  // NOTE: legacy .html → clean-URL redirects are handled as real HTTP 301s in
  // public/_redirects (Netlify), not as Astro's client-side meta-refresh stubs.
});
