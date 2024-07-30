import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
//import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  //plugins: [react(), svgr()],
  //여기에도 반드시 추가를 해주어야 함.. why?
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: "@assets", replacement: "/src/assets" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@components", replacement: "/src/components" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@constants", replacement: "/src/constants" },
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "@apis", replacement: "/src/apis" },
      { find: "@stores", replacement: "/src/stores"},
    ],
  },
});