import { defineConfig } from "vite"
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { renderSeoHead } from "./src/app/seo/metadata.mjs"

export default defineConfig({
  define: {
    __BUILD_DATE__: JSON.stringify(new Date().toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })),
  },
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    {
      name: "skillum-seo-head",
      transformIndexHtml(html) {
        return html.replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/,
          `<!--seo:start-->${renderSeoHead("/")}<!--seo:end-->`);
      },
    },
  ],
  resolve: {
    alias: [
      {
        find: /^figma:asset\//,
        replacement: path.resolve(__dirname, "./src/assets") + "/",
      },
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
    ],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/@supabase")) return "vendor-supabase";
          if (id.includes("node_modules/react-router")) return "vendor-router";
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom")) return "vendor-react";
          if (id.includes("node_modules/html2canvas")) return "vendor-html2canvas";
        },
      },
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ["**/*.svg", "**/*.csv"],
})
