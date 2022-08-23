import { defineConfig } from 'tsup';

export default defineConfig(options => ({
  outExtension: ({ format }) => ({ js: `.${format}.js` }),
  minify: !options.watch,
  treeshake: true,
}));
