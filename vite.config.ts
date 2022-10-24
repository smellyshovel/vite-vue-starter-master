import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vitePluginHtmlEnv from "vite-plugin-html-env";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default ({ mode }) => {
  // make all the Vite's env. variables available in this config file
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [vitePluginHtmlEnv(), vue(), visualizer()],

    resolve: {
      // add here all the slaves' peer dependencies
      dedupe: ["vue"],
    },

    optimizeDeps: {
      // add here all the slaves
      exclude: ["vite-vue-starter-slave"],
    },

    build: {
      sourcemap: true,
    },

    server: {
      // allow the access to all the slaves' sourcemap files
      fs: {
        allow: [".."],
      },

      proxy: {
        // dev server proxy rules
      },
    },
  });
};
