import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'main.ts',
    'src',
    '!src/**/__tests__/**',
    '!src/coverage/**',
    '!src/**/*.test.*',
  ],
  splitting: true,
  bundle: false,
  dts: false,
  outDir: 'dist',
  format: ['cjs'],
  skipNodeModulesBundle: true,
  replaceNodeEnv: true,
  sourcemap: false,
  loader: {
    '.sql': 'file',
    '.json': 'file',
  },
  tsconfig: 'tsconfig.json',
  clean: true,
});
