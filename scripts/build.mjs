import { build } from 'vite';
import { rename } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const atRoot = (path) => fileURLToPath(new URL('../' + path, import.meta.url));
await build({
  root: atRoot('site'),
  base: '/portfolio/',
  build: { outDir: atRoot('portfolio'), emptyOutDir: true },
});
await rename(atRoot('portfolio/index.html'), atRoot('index.html'));
