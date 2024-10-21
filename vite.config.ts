import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Pages({
    dirs: [
      {
        dir: 'src/demos',
        baseRoute: 'demos',
      },
      {
        dir: 'src/apps',
        baseRoute: 'apps'
      },
      {
        dir: 'src/super-gulp',
        baseRoute: 'super'
      }
    ]
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
