import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/Al-kogiwwyy-casual/", // 👈 VERY IMPORTANT
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
// This Vite configuration file sets up a React project with SWC for faster builds and includes a plugin for component tagging during development. It also configures the server to listen on all interfaces and sets a specific port, while ensuring compatibility with GitHub Pages by specifying a base path. The alias for the `@` symbol points to the `src` directory for easier imports.
// The `componentTagger` plugin is conditionally included only in development mode to enhance the development experience by tagging components for easier identification and debugging. The configuration is structured to be clean and maintainable, allowing for easy adjustments as the project evolves.