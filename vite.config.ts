import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { vitePrerenderPlugin } from "vite-prerender-plugin";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    vitePrerenderPlugin({
      renderTarget: "#root",
      prerenderScript: path.resolve(__dirname, "./src/prerender.tsx"),
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
