import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig( {
  output: 'static',
  build: {
    format: 'directory',
  },
  base: '/',
  vite: { ssr: Object.create( null ) },
  markdown: {},
  site: 'https://demo.nukes.in',
  server: {
    port: 3000
  },
  base: '/',
  integrations: [ svelte() ]
} );