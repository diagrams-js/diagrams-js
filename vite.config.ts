import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  pack: {
    entry: "src/index.ts",
    dts: {
      tsgo: true,
    },
    exports: true,
    // Bundle everything into a single output
    splitting: false,
    // Ensure proper ESM output
    format: ["esm"],
  },
  test: {
    // Ensure @viz-js/viz can be resolved in tests
    deps: {
      inline: [/@viz-js\/viz/],
    },
  },
  optimizeDeps: {
    include: ["@viz-js/viz"],
  },
  lint: {
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  fmt: {},
  // Configure resolve options for TypeScript ESM
  resolve: {
    // This tells the bundler to resolve .js imports to .ts files
    alias: {
      "(\\.\\./.*)\\.js$": "$1.ts",
      "(\\./.*)\\.js$": "$1.ts",
    },
  },
});
