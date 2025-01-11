import react from "@vitejs/plugin-react";
import path from "path";
import sass from "sass";
import { defineConfig } from "vite";
import proxyOptions from "./proxyOptions";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  server: {
    port: 8080,
    proxy: proxyOptions,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "../evcar/public/frontend",
    emptyOutDir: true,
    target: "es2015",
  },
});
