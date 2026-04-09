import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  // 'base' deve ser o nome do seu repositório entre barras: /nome-do-repo/
  // Se for o repositório principal (seu-usuario.github.io), use apenas '/'
  base: "/nome-do-seu-repositorio/", 
  plugins: [
    react(), 
    tailwindcss(), 
    viteSingleFile()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    // Opcional: Garante que o output seja limpo antes do build
    emptyOutDir: true,
  }
});