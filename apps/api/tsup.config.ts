import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['main.ts', './src'],
  splitting: true,
  bundle: false,
  dts: false,
  outDir: 'dist',
  format: ['cjs'],
  skipNodeModulesBundle: true,
  replaceNodeEnv: true,
  sourcemap: false,
  loader: {
    '.json': 'file',
  },
  tsconfig: 'tsconfig.json',
  clean: true,
});
