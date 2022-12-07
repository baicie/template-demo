import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import md from "./plugin/md";
import { additionalData } from "./src/themeConfig";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  plugins: [
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
      mergeProps: false,
      enableObjectSlots: false,
    }),
    md(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // hack: `true;@import "${require.resolve(
          //   "./src/theme/color/colorPalette.less"
          // )}";`,
          "root-entry-name": "variable",
        },
        javascriptEnabled: true,
        // includePaths: ["node_modules/"],
        additionalData,
      },
    },
  },
});
