import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vitePluginHtmlEnv from "vite-plugin-html-env";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default ({ mode }, { mode: string }) => {
  // make all the Vite's env. variables available in this config file
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [vitePluginHtmlEnv(), vue(), visualizer()],

    resolve: {
      // TODO: list all the direct slaves' peer dependencies
      dedupe: ["vue"],
    },

    optimizeDeps: {
      // TODO: list all the direct slaves
      exclude: ["vite-vue-starter-slave"],
    },

    // TODO: uncomment to fix DX
    // esbuild: {
    //   treeShaking: false,
    // },

    build: {
      sourcemap: true,

      // TODO: uncomment to fix DX
      // rollupOptions: {
      //   treeshake: false,
      // },
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
