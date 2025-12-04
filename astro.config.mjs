import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // REPLACE WITH YOUR ACTUAL VERCEL URL
  site: 'https://arkeon-design-website.vercel.app', 
  
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'static',
});