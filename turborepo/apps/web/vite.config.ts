import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";

// @tailwindcss/vite doesn't exist — use postcss plugin instead
export default defineConfig({
  base: "./",
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    hmr: true,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
