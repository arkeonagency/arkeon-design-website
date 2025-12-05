import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://arkeon-studio.vercel.app', 
  
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  output: 'static',
});