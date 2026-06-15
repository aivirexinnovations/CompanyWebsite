// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://aivirex.in';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: SITE,
  integrations: [
    sitemap({
      // /download is a noindex Play Store bounce — keep it out of the sitemap.
      filter: (page) => !/\/download\/?$/.test(page),
      // Emit canonical URLs (no trailing slash, except root) so the sitemap matches
      // <link rel="canonical"> and Netlify's pretty_urls. One URL form, no split signals.
      serialize(item) {
        if (item.url !== `${SITE}/` && item.url.endsWith('/')) {
          item.url = item.url.replace(/\/+$/, '');
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  // NOTE: legacy .html → clean-URL redirects are handled as real HTTP 301s in
  // public/_redirects (Netlify), not as Astro's client-side meta-refresh stubs.
});
