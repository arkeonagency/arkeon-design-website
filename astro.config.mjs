import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // REPLACE WITH YOUR ACTUAL VERCEL URL
  site: 'https://arkeon-studio.vercel.app', 
  
  integrations: [react(), tailwind({
    applyBaseStyles: false,
  }), sitemap()],
  output: 'static',
});