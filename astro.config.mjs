import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://davidguerra.github.io',
  base: '/',
  output: 'static',
  trailingSlash: 'ignore'
});