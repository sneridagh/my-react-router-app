import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { PloneRegistryVitePlugin } from "@plone/registry/vite-plugin";

export default defineConfig({
  plugins: [
    PloneRegistryVitePlugin(),
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
  ],
});
