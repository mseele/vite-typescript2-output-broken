import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import typescript2 from "rollup-plugin-typescript2";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@/": `${resolve(__dirname, "src")}/`,
    },
  },
  build: {
    minify: false,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Vite TS Output Broken",
      fileName: (format) => `vite-ts-output-broken.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: { vue: "Vue" },
      },
    },
  },
  plugins: [
    vue(),
    {
      ...typescript2({
        tsconfigOverride: {
          compilerOptions: { declaration: true },
          include: ["src/index.ts", "src/**/*.d.ts", "src/**/*.vue"],
        },
      }),
      apply: "build",
      enforce: "pre",
    },
  ],
});
