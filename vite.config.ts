import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path, { format } from "path";

//const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "content",
      fileName: "content", //(format) => `${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [vue()],
});
