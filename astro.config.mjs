// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from '@astrojs/react';
const REPO_NAME = 'bstravel-website'; 
// https://astro.build/config
export default defineConfig({
    // base: '/bstravel-website/',
    site: 'https://yustinus-vernanda.github.io/',
    integrations: [mdx(), sitemap(), react(),],
    vite: {
        plugins: [react(),tailwindcss()],
      },
});