import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Configuración completa y corregida para GitHub Pages
export default defineConfig(({ mode }) => ({
    // 👇 Esta línea es clave: indica la ruta base del proyecto
    base: "/landing-page/",

    server: {
        host: "::",
        port: 8080,
    },

    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),

    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
}));
